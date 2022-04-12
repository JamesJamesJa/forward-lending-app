import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      {/* Navigation Tab */}
      <div className="navigation-tab">
        <img src="hamburger-icon.svg" alt="hamburger-icon" 
          className="hamburger-icon"
          />
        <img
          src="forward-logo.svg"
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
        {/* <div className="wallet-container white">Connect Wallet</div> */}
        <div className="wallet-container white">
          <div className="status-point" />
          <img
            src="metamask-logo.svg"
            alt="metamask-logo"
            className="metamask-logo"
          />
          <div className="wallet-balance">367,992&nbsp;BUSD</div>
        </div>
        <div className="theme-container">
          <img src="dark-theme-icon.svg" alt="dark-theme-icon" />
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
