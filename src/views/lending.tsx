import { useEffect, useState } from "react";

import "./../styles/lending.css";

import { coinDetails } from "../store/coin-details";
import LendCard from "../components/lend-card";
import LendModal from "../components/lend-modal";
import { CoinDetails } from "../components/lend-card/types";

interface LendingProps {
  busdBalance: number;
}

const Lending: React.FC<LendingProps> = ({ busdBalance }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [coinSelect, setCoinSelect] = useState<CoinDetails>();

  const onOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const onSelectCoin = (coin: CoinDetails) => {
    setCoinSelect(coin);
  };


  return (
    <div>
      <div
        className="lending-background"
        style={{
          backgroundImage: "url(background/background.svg)",
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
            {coinDetails.map((coin, index) => {
              return (
                <LendCard
                  key={index}
                  coin={coin}
                  isOpenModal={isOpenModal}
                  onOpenModal={onOpenModal}
                  onSelectCoin={onSelectCoin}
                />
              );
            })}
          </div>
        </div>
      </div>
      <LendModal
        isOpenModal={isOpenModal}
        onOpenModal={onOpenModal}
        coin={coinSelect}
        busdBalance={busdBalance}
      />
    </div>
  );
};

export default Lending;
