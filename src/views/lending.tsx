import "./../styles/lending.css";

import { coinDetails } from "../store/coin-details";
import LendCard from "../components/lend-card";

function Lending() {
  return (
    <div
      className="lending-background"
      style={{
        backgroundImage: "url(background.svg)",
      }}
    >
      <div className="lending-container">
        <div className="details-container">
          <div className="title-container">
            <div className="title-first-text">Lend</div>
            <div className="title-second-text">
              to earn immediately
              <br />
              returns
            </div>
          </div>
          <div className="description-container">
            Use your BSC tokens to lend from Forward. You have on demand
            liquidity with no trading fees, no slippage and directly on-chain.
          </div>
        </div>
        <div className="lend-card-container-group hide-scrollbar">
          {coinDetails.map((coin) => {
            return <LendCard coin={coin} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Lending;
