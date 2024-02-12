import {tezos} from "./tezos"

export const buyTicketOperation = async () => {
    try{
        const contract = await tezos.wallet.at("KT1TNE7pfAggMKxFqpa5gjQYPYB6nnkdzcAX");
        const op =await contract.methods.buy_subscription().send({
            amount: 1,
            mutez: false,
        })
        await op.confirmation(1);
    }
    catch(err){
        throw err;
    }
};

// TODO 10 - Call end_game entrypoint in the Lottery contract by completing endGameOperation

export const endGameOperation = async () => {
    try{
        const contract = await tezos.wallet.at("KT1TNE7pfAggMKxFqpa5gjQYPYB6nnkdzcAX")
        const op = await contract.methods.end_sub().send()
        await op.confirmation(1)
    }
    catch (err){
        throw err;
    }
};

