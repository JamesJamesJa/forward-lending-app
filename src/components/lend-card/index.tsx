import { CoinDetails } from "./types";

import "./lending-card.css";

interface CoinDetailsProps {
  coin: CoinDetails;
}

const LendCard: React.FC<CoinDetailsProps> = ({ coin }) => (
  <div className="lend-card-container">
    <div className="coin-title-container">
      <div className="coin-title">{coin.name}</div>
      <img
        src={`coin-logo/${coin.logoPath}.svg`}
        alt={`coin-logo/${coin.logoPath}`}
        className="coin-logo"
      />
    </div>
    <div className="coin-details-container">
      <div className="apr-container">
        <div className="apr-liquidity-title-text">Interest APR</div>
        <div className="apr-liquidity-value-text">{coin.apr}</div>
      </div>
      <div className="liquidity-container">
        <div className="apr-liquidity-title-text">Liquidity</div>
        <div className="apr-liquidity-value-text">{coin.liquidity}</div>
      </div>
    </div>
    <div className="lend-button">Lend</div>
  </div>
);

export default LendCard;
