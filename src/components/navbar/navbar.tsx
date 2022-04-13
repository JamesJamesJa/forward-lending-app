import "./navbar.css";

type Props = {
  walletActive: boolean;
  busdBalance: number;
  connectWallet: () => Promise<void>;
  isBscChain: boolean;
};

const Navbar: React.FC<Props> = ({
  walletActive,
  busdBalance,
  connectWallet,
  isBscChain,
}) => {
  return (
    <div className="navbar-container">
      {/* Navigation Tab */}
      <div className="navigation-tab">
        <img
          src="basic-icon/hamburger-icon.svg"
          alt="hamburger-icon"
          className="hamburger-icon"
        />
        <img
          src="basic-icon/forward-logo.svg"
          alt="forward-logo"
          className="navigation-home"
        />
        <div className="navigation-option-container">
          <div className="navigation-text">Trade</div>
          <div className="navigation-text">Stake</div>
          <div className="navigation-option">
            <div className="navigation-text-selected">Borrow</div>
            <div className="border-selected"></div>
          </div>
          <div className="navigation-text">Farm</div>
        </div>
      </div>

      {/* Wallet & theme */}
      <div className="wallet-theme-container">
        {walletActive ? (
          <div className="wallet-container white">
            <div
              className={isBscChain ? "status-point-green" : "status-point-red"}
            />
            <img
              src="basic-icon/metamask-logo.svg"
              alt="metamask-logo"
              className="metamask-logo"
            />
            <div className="wallet-balance">
              {Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(busdBalance)}
              &nbsp;BUSD
            </div>
          </div>
        ) : (
          <div
            className="wallet-container connect-wallet white"
            onClick={connectWallet}
          >
            Connect Wallet
          </div>
        )}
        <div className="theme-container">
          <img src="basic-icon/dark-theme-icon.svg" alt="dark-theme-icon" />
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

// function Navbar() {
//   return (
//     <div className="navbar-container">
//       {/* Navigation Tab */}
//       <div className="navigation-tab">
//         <img
//           src="basic-icon/hamburger-icon.svg"
//           alt="hamburger-icon"
//           className="hamburger-icon"
//         />
//         <img
//           src="basic-icon/forward-logo.svg"
//           alt="forward-logo"
//           className="navigation-home"
//         />
//         <div className="navigation-option-container">
//           <div className="navigation-text">Trade</div>
//           <div className="navigation-text">Stake</div>
//           <div className="navigation-option">
//             <div className="navigation-text-selected">Borrow</div>
//             <div className="border-selected"></div>
//           </div>
//           <div className="navigation-text">Farm</div>
//         </div>
//       </div>

//       {/* Wallet & theme */}
//       <div className="wallet-theme-container">
//         {/* <div className="wallet-container white">Connect Wallet</div> */}
//         <div className="wallet-container white">
//           <div className="status-point" />
//           <img
//             src="basic-icon/metamask-logo.svg"
//             alt="metamask-logo"
//             className="metamask-logo"
//           />
//           <div className="wallet-balance">367,992&nbsp;BUSD</div>
//         </div>
//         <div className="theme-container">
//           <img src="basic-icon/dark-theme-icon.svg" alt="dark-theme-icon" />
//           <label className="switch">
//             <input type="checkbox" />
//             <span className="slider round"></span>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Navbar;
