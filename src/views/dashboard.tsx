import { useState, useEffect, SetStateAction } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { InjectedConnector } from "@web3-react/injected-connector";

import Layout from "../components/Layout";
import Lending from "./lending";

const Dashboard = () => {
  const { active, account, activate, chainId } = useWeb3React();
  const [busdBalance, setBusdBalance] = useState(0);

  const getBusdBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
    const abi = [
      "function name() view returns (string)",
      "function symbol() view returns (string)",
      "function balanceOf(address) view returns (uint)",
    ];

    const busdContract = new ethers.Contract(busdAddress, abi, provider);

    const busdBalanceFormat = ethers.utils.formatEther(
      await busdContract.balanceOf(account)
    );

    setBusdBalance(parseFloat(busdBalanceFormat));
  };

  const connectWallet = async () => {
    activate(new InjectedConnector({}));
  };

  useEffect(() => {
    if (account) {
      if (chainId === 56) {
        getBusdBalance();
      } else {
        // Switch chain
        setBusdBalance(0);
      }
    } else {
      setBusdBalance(0);
    }
  }, [account, chainId]);

  useEffect(() => {
    activate(new InjectedConnector({}));
  }, []);

  return (
    <Layout
      walletActive={active}
      busdBalance={busdBalance}
      connectWallet={connectWallet}
      isBscChain={chainId === 56}
    >
      {/* <Wallet /> */}
      <Lending busdBalance={busdBalance} />
    </Layout>
  );
};

export default Dashboard;
