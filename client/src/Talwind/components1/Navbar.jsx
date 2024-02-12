import { Link } from 'react-router-dom';


import React, { useEffect, useState } from "react";
import { connectWallet, getAccount } from "../../utils/wallet";
import { buyTicketOperation, endGameOperation } from "../../utils/operation";
import { fetchStorage } from "../../utils/tzkt";
import Button from './Button';

const Navbar = () => {
  const [account, setAccount] = useState("");
  const [players, setPlayers] = useState([]);
  const [tickets, setTickets] = useState(3);
  const [loadingConnectWallet, setLoadingConnectWallet] = useState(false);
  const [loadingBuyTicket, setLoadingBuyTicket] = useState(false);

  useEffect(() => {
    (async () => {
      const storedAccount = await getAccount();
      setAccount(storedAccount);
    })();
  }, []);

  const onConnectWallet = async () => {
    setLoadingConnectWallet(true);
    try {
      await connectWallet();
      const connectedAccount = await getAccount();
      setAccount(connectedAccount);
    } catch (error) {
      throw error;
    } finally {
      setLoadingConnectWallet(false);
    }
  };

  const onBuyTicket = async () => {
    setLoadingBuyTicket(true);
    try {
      await buyTicketOperation();
      alert("Bought a Subscription");
      const storage = await fetchStorage();
      setPlayers(Object.values(storage.players));
      setTickets(storage.tickets_available);
    } catch (error) {
      throw error;
    } finally {
      setLoadingBuyTicket(false);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen bg-customBlue mx-auto py-6 flex flex-col md:flex-row items-center justify-between">
      <div className="nleft ml-4 md:ml-32 flex items-center">
        <h1 className="ml-4 md:ml-10 text-[1.8vw] text-white">So@Vite</h1>
        <div className="links flex gap-6 md:gap-20 ml-4 md:ml-32">
          {["Home", "About"].map((link, index) => (
            <a
              key={index}
              className="text-[17px] flex items-center gap-1"
              href={`${link.toLowerCase().replace(' ', '-')}`}
              style={{ color: 'white' }}
            >
              {index === 2 && (
                <span style={{ boxShadow: "0 0 0.25em #00FF19" }} className="inline-block w-2 h-2 gap-3 bg-green-500 rounded-full"></span>
              )}
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center mr-4 md:mr-32 mt-4 md:mt-0">
        <Button onClick={onConnectWallet} title={account ? account : "Connect Wallet"} isLoading={loadingConnectWallet} />
        {account && (
          <>
            <Button onClick={onBuyTicket} title="Buy Subscription" isLoading={loadingBuyTicket}/>
            <Button title="Sign In" linkTo="/login" />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;



// import React, { useEffect, useState } from "react";
// import { connectWallet, getAccount } from "../../utils/wallet";
// import { buyTicketOperation, endGameOperation } from "../../utils/operation";
// import { fetchStorage } from "../../utils/tzkt";

// const Navbar = () => {
//   const [account, setAccount] = useState("");
//   const [players, setPlayers] = useState([]);
//   const [tickets, setTickets] = useState(3);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     (async () => {
//       const storedAccount = await getAccount();
//       setAccount(storedAccount);
//     })();
//   }, []);

//   const onConnectWallet = async () => {
//     await connectWallet();
//     const connectedAccount = await getAccount();
//     setAccount(connectedAccount);
//   };

//   const onBuyTicket = async () => {
//     try {
//       setLoading(true);
//       await buyTicketOperation();
//       alert("Bought a Subscription");
//       const storage = await fetchStorage();
//       setPlayers(Object.values(storage.players));
//       setTickets(storage.tickets_available);
//     } catch (error) {
//       throw error;
//     }
//   };

//   const onEndGame = async () => {
//     try {
//       setLoading(true);
//       await endGameOperation();
//       alert("Game Ended");
//       const storage = await fetchStorage();
//       setPlayers(Object.values(storage.players));
//       setTickets(storage.tickets_available);
//     } catch (error) {
//       throw error;
//     }
//   };

//   return (
//     <div className="navbar navbar-dark fixed-top">
//       <div className="container py-2">
//         <a href="/" className="navbar-brand">
//           Tezos BlockChain with SoVite
//         </a>
//         <div className="d-flex">
//           <button onClick={onConnectWallet} className="btn btn-outline-info text-md text-white">
//             {account ? account : "Connect Wallet"}
//           </button>
//           {tickets > 0 ? (
//             <button
//               onClick={onBuyTicket}
//               className="btn btn-outline-info ml-2 text-white"
//             >
//               {loading ? "Loading " : "Buy SubScription"}
//             </button>
//           ) : (
//             <button
//               onClick={onEndGame}
//               className="btn  ml-2 text-white"
//             >
//               {loading ? "Loading " : "End Game"}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// function Navbar() {
//   return (
//     <div className='max-w-screen bg-customBlue mx-auto py-6 flex flex-col md:flex-row items-center justify-between'>
//       <div className="nleft ml-4 md:ml-32 flex items-center">
//         <h1 className='ml-4 md:ml-10 text-[1.8vw] text-white'>So@Vite</h1>
        
//         <div className='links flex gap-6 md:gap-20 ml-4 md:ml-32'>
//           {["Home", "About"].map((link, index) => (
//             <a
//               key={index}
//               className='text-[17px] flex items-center gap-1'
//               href={`${link.toLowerCase().replace(' ', '-')}`}
//               style={{ color: 'white' }}
//             >
//               {index === 2 && (
//                 <span style={{ boxShadow: "0 0 0.25em #00FF19" }} className="inline-block w-2 h-2 gap-3 bg-green-500 rounded-full"></span>
//               )}
//               {link}
//             </a>
//           ))}
//         </div>
//       </div>
//       <div className="flex items-center mr-4 md:mr-32 mt-4 md:mt-0">

//         <Button title="Login / SignUp" linkTo="/login" />
//       </div>
//     </div>
//   );
// }

// export default Navbar;
