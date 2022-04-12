import { useState, useEffect, SetStateAction } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { formatEther } from "@ethersproject/units";

function Dashboard() {
  const { active, account, activate, chainId, library } = useWeb3React();
  const balance = useBalance();

  const [showAccount, setShowAccount] = useState("");
  const [showBalance, setShowBalance] = useState();

  useEffect(() => {
    // const tempAccount = localStorage.getItem("account");
    // if (tempAccount) {
    //   setShowAccount(tempAccount);
    activate(new InjectedConnector({}));
    // } else {
    // }
  }, []);

  function useBalance() {
    const { account, library } = useWeb3React();
    const [balance, setBalance] = useState();

    useEffect(() => {
      // if (localStorage.getItem("account")) {
      //   // console.log(localStorage.getItem("account"));
      //   const jsonTemp = localStorage.getItem("account");
      //   if (jsonTemp) {
      //     setShowAccount(JSON.parse(jsonTemp));

      //     // library
      //     //   .getBalance(jsonTemp)
      //     //   .then((val: SetStateAction<undefined>) => setBalance(val));
      //   } else {
      //     setShowAccount("");
      //   }
      // } else
      if (account) {
        console.log("asdasd");
        library
          .getBalance(account)
          .then((val: SetStateAction<undefined>) => setBalance(val));
        localStorage.setItem("account", account);
      }
    }, [account, library]);

    return balance ? `${formatEther(balance)} ETH` : null;
  }

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 text-gray-100">
          {active ? (
            <>
              <div>{chainId === 1 ? "Mainnet" : "Testnet"}</div>
              <div>{account}</div>
              <div>{balance}</div>
              <button
                className="h-10 px-5 border border-gray-400 rounded-md"
                onClick={async () => {
                  const message = `Logging in at ${new Date().toISOString()}`;
                  const signature = await library
                    .getSigner(account)
                    .signMessage(message)
                    .catch((error: string) => console.error(error));
                  console.log({ message, account, signature });
                }}
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              <button
                className="h-10 px-5 border border-gray-400 rounded-md"
                onClick={() => {
                  // if (showAccount) {
                  //   // console.log(showAccount, balance);
                  // } else {
                  activate(new InjectedConnector({}));
                  // }
                }}
              >
                Connect
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Dashboard;
