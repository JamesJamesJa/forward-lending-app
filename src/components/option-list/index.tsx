import "./option-list.css";
import { coinDetails } from "../../store/coin-details";
import { Dispatch, SetStateAction } from "react";
import { CoinDetails } from "../lend-card/types";

interface OptionListProps {
  isOpenOption: boolean;
  onOpenOption: () => void;
  coinSelected: CoinDetails;
  setCoinSelected: Dispatch<SetStateAction<CoinDetails>>;
}

const OptionList: React.FC<OptionListProps> = ({
  isOpenOption,
  onOpenOption,
  coinSelected,
  setCoinSelected,
}) => {
  return isOpenOption ? (
    <div className="option-list-background" onClick={onOpenOption}>
      <div className="option-list-container">
        {coinDetails.map((coin, index) => {
          return (
            <div
              key={index}
              className={
                index === 0
                  ? "coin-type-first-container"
                  : index === coinDetails.length - 1
                  ? "coin-type-last-container"
                  : "coin-type-middle-container"
              }
              onClick={() => {
                setCoinSelected(coin);
              }}
            >
              <div className="option-text">{coin.name}</div>
              {coinSelected.id === coin.id ? (
                <img
                  src="basic-icon/correct-icon.svg"
                  alt="correct-icon"
                  className="option-selected"
                />
              ) : (
                <div />
              )}
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div />
  );
};

export default OptionList;
