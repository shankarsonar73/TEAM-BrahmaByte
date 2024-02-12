import smartpy as sp

# A SmartPy module
@sp.module
def main():
    # A class of contracts
    class SubScription(sp.Contract):
        def __init__(self):
            self.data = sp.record(
                players = {},
                ticket_cost = sp.tez(1),
                tickets_available = sp.nat(5),
                max_tickets = sp.nat(5),
            )
            
        @sp.entrypoint
        def buy_subscription(self):
            assert self.data.tickets_available > 0, "NO_TICKETS_AVAILABLE"
            assert sp.amount >= self.data.ticket_cost, "INVALID_AMOUNT"
            self.data.players[sp.len(self.data.players)] = sp.sender
            self.data.tickets_available = sp.as_nat(self.data.tickets_available - 1)
    
            # Return extra tez balance to the sender
            extra_balance = sp.amount - self.data.ticket_cost
            if extra_balance > sp.mutez(0):
                sp.send(sp.sender, extra_balance)

        @sp.entrypoint
        def end_game(self):
    
            # Sanity checks
            assert self.data.tickets_available == 0, "Not Get any Sub"
    
            # Pick a winner
            winner_id = sp.mod(sp.as_nat(sp.now - sp.timestamp(0)), self.data.max_tickets)
            winner_address = self.data.players[winner_id]
    
            # Send the reward to the winner
            sp.send(winner_address, sp.balance)
    
            # Reset the game
            self.data.players = {}
            self.data.tickets_available = self.data.max_tickets


# Tests
if "templates" not in __name__:
    @sp.add_test(name="SubScription")
    def test():
        scenario = sp.test_scenario(main)
        scenario.h1("SubScription Contract")
        
        admin = sp.test_account("admin")
        shankar = sp.test_account("shankar")
        Pratik = sp.test_account("Pratik")
        Vaishnavi = sp.test_account("Vaishnavi")
        Ravi = sp.test_account("Ravi")
        PatelSir = sp.test_account("PatelSir")
    
        scenario.h1("Accounts")
        scenario.show([admin, shankar, Pratik, Vaishnavi, Ravi, PatelSir])
        SubScription = main.SubScription()
        scenario += SubScription
        
        # buy_subscription
        scenario.h2("buy_subscription (valid test)")
        SubScription.buy_subscription().run(amount = sp.tez(1), sender = shankar)
        SubScription.buy_subscription().run(amount = sp.tez(2), sender = shankar)
        SubScription.buy_subscription().run(amount = sp.tez(3), sender = Vaishnavi)
        SubScription.buy_subscription().run(amount = sp.tez(1), sender = Ravi)
        SubScription.buy_subscription().run(amount = sp.tez(1), sender = PatelSir)
    
        scenario.h2("buy_subscription (failure test)")
    
        # end_game
        scenario.h2("end_game (valid test)")
        SubScription.end_game().run(sender = admin, now = sp.timestamp(20))
