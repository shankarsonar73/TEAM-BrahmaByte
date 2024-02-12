// Navbar.js

import React, { useEffect, useState } from "react";
import { connectWallet, getAccount } from "../utils/wallet";
import { buyTicketOperation, endGameOperation } from "../utils/operation";
import { fetchStorage } from "../utils/tzkt";

const Navbar = () => {
  const [account, setAccount] = useState("");
  const [players, setPlayers] = useState([]);
  const [tickets, setTickets] = useState(3);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const storedAccount = await getAccount();
      setAccount(storedAccount);
    })();
  }, []);

  const onConnectWallet = async () => {
    await connectWallet();
    const connectedAccount = await getAccount();
    setAccount(connectedAccount);
  };

  const onBuyTicket = async () => {
    try {
      setLoading(true);
      await buyTicketOperation();
      alert("Bought a Subscription");
      const storage = await fetchStorage();
      setPlayers(Object.values(storage.players));
      setTickets(storage.tickets_available);
    } catch (error) {
      throw error;
    }
  };

  const onEndGame = async () => {
    try {
      setLoading(true);
      await endGameOperation();
      alert("Game Ended");
      const storage = await fetchStorage();
      setPlayers(Object.values(storage.players));
      setTickets(storage.tickets_available);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="navbar navbar-dark fixed-top">
      <div className="container py-2">
        <a href="/" className="navbar-brand">
          Tezos BlockChain with SoVite
        </a>
        <div className="d-flex">
          <button onClick={onConnectWallet} className="btn btn-outline-info text-md text-white">
            {account ? account : "Connect Wallet"}
          </button>
          {tickets > 0 ? (
            <button
              onClick={onBuyTicket}
              className="btn btn-outline-info ml-2 text-white"
            >
              {loading ? "Loading " : "Buy SubScription"}
            </button>
          ) : (
            <button
              onClick={onEndGame}
              className="btn  ml-2 text-white"
            >
              {loading ? "Loading " : "End Game"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
