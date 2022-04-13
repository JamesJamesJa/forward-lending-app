import Navbar from "./navbar/navbar";

type Props = {
  walletActive: boolean;
  busdBalance: number;
  connectWallet: () => Promise<void>;
  isBscChain: boolean;
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({
  children,
  walletActive,
  busdBalance,
  connectWallet,
  isBscChain,
}) => (
  <div>
    <Navbar
      walletActive={walletActive}
      busdBalance={busdBalance}
      connectWallet={connectWallet}
      isBscChain={isBscChain}
    />
    {children}
  </div>
);

export default Layout;
