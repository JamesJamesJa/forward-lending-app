import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { InjectedConnector } from "@web3-react/injected-connector";

import Layout from "../components/Layout";
import Lending from "./lending";

const Dashboard = () => {
  const { active, account, activate, chainId } = useWeb3React();
  const [busdBalance, setBusdBalance] = useState(0);
  const [bnbBalance, setBnbBalance] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0);

  const getBalance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // ABI
    const abi = [
      "function name() view returns (string)",
      "function symbol() view returns (string)",
      "function balanceOf(address) view returns (uint)",
    ];

    // BUSD
    const busdAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
    const busdContract = new ethers.Contract(busdAddress, abi, provider);
    const busdBalanceFormat = ethers.utils.formatEther(
      await busdContract.balanceOf(account)
    );
    setBusdBalance(parseFloat(busdBalanceFormat));

    // BNB
    const singer = provider.getSigner();
    const bnbBalanceFormat = ethers.utils.formatEther(
      await singer.getBalance()
    );
    setBnbBalance(parseFloat(bnbBalanceFormat));

    // USDT
    const usdtAddress = "0x55d398326f99059fF775485246999027B3197955";
    const usdtContract = new ethers.Contract(usdtAddress, abi, provider);
    const usdtBalanceFormat = ethers.utils.formatEther(
      await usdtContract.balanceOf(account)
    );
    setUsdtBalance(parseFloat(usdtBalanceFormat));
  };

  // Connect wallet
  const connectWallet = async () => {
    activate(new InjectedConnector({}));
  };

  // Reset balance
  const resetBalance = () => {
    setBusdBalance(0);
    setBnbBalance(0);
    setUsdtBalance(0);
  };

  useEffect(() => {
    if (account) {
      if (chainId === 56) {
        getBalance();
      } else {
        // Switch chain
        resetBalance();
      }
    } else {
      // Don't connect wallet yet
      resetBalance();
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
      <Lending
        busdBalance={busdBalance}
        bnbBalance={bnbBalance}
        usdtBalance={usdtBalance}
      />
    </Layout>
  );
};

export default Dashboard;
