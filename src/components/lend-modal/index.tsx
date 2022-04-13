import { ChangeEvent, useEffect, useState } from "react";
import { lendPercentList } from "../../store/lend-percent";
import { CoinDetails } from "../lend-card/types";
import "./lending-modal.css";
import WarningPopUp from "../warning-pop-up/index";

interface ModalProps {
  isOpenModal: boolean;
  onOpenModal: () => void;
  coin: CoinDetails | undefined;
  busdBalance: number;
}

const LendModal: React.FC<ModalProps> = ({
  isOpenModal,
  onOpenModal,
  coin,
  busdBalance,
}) => {
  const [lendAmount, setLendAmount] = useState("0");
  const [percentSelect, setPercentSelect] = useState(0);
  const [isHoverWarning, setIsHoverWarning] = useState(false);

  const onLendAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLendAmount(event.target.value);
    setPercentSelect(0);
  };

  const onSelectPercent = (percentId: number) => {
    if (percentId === percentSelect) {
      setPercentSelect(0);
      setLendAmount("0");
    } else {
      setPercentSelect(percentId);
      setLendAmount(
        Intl.NumberFormat("en-IN", {
          maximumSignificantDigits: 3,
        }).format(busdBalance * (percentId * 0.25))
      );
    }
  };

  const onHoverWarning = () => {
    setIsHoverWarning(!isHoverWarning);
  };

  useEffect(() => {
    setLendAmount(
      Intl.NumberFormat("en-IN", {
        maximumSignificantDigits: 3,
      }).format(busdBalance * (percentSelect * 0.25))
    );
  }, [busdBalance]);

  return isOpenModal ? (
    <div>
      <div className="modal">
        <div className="modal-content">
          <div className="coin-container">
            <img
              src="background/modal-background.svg"
              alt="modal-background"
              className="modal-background"
            />
            <img
              src={`coin-logo/${coin?.logoPath}.svg`}
              alt={`coin-logo/${coin?.logoPath}`}
              className="coin-logo"
            />
            <div className="coin-selected-title">{coin?.name}</div>
          </div>
          <div className="lend-container-with-border">
            <div className="close-modal-button-container" onClick={onOpenModal}>
              <img
                src="basic-icon/close-icon.svg"
                alt="close-icon"
                className="close-modal-button"
              />
            </div>
            <div className="lend-border" />
            <div className="lend-container">
              <div className="lend-details-container">
                <div className="question-container">
                  How much do you want to lend?
                </div>
                <div className="lend-amount-container">
                  <input
                    type="number"
                    className="lend-amount-input"
                    value={lendAmount}
                    onChange={onLendAmountChange}
                  />
                  <div className="lend-coin-type-container">
                    <img
                      src={`coin-logo/busd-logo.svg`}
                      alt={`coin-logo/busd-logo`}
                      className="lend-coin-type-logo"
                    />
                    <div className="lend-coin-type-name">BUSD</div>
                    <img
                      src="basic-icon/arrow-down-icon.svg"
                      alt="arrow-down-icon"
                      className="arrow-down-icon"
                    />
                  </div>
                </div>
                <div className="lend-balance-container">
                  <div className="lend-balance-title">Balance:&nbsp;</div>
                  <div className="lend-balance-value">
                    {Intl.NumberFormat("en-IN", {
                      maximumSignificantDigits: 3,
                    }).format(busdBalance)}{" "}
                    BUSD
                  </div>
                </div>
                <div className="balance-percent-container">
                  {lendPercentList.map((percent, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          percentSelect === index + 1
                            ? "balance-percent-box-selected"
                            : "balance-percent-box"
                        }
                        onClick={() => onSelectPercent(index + 1)}
                      >
                        {percent.value}
                      </div>
                    );
                  })}
                </div>
                <div className="colla-gas-asset-container">
                  <div className="colla-asset-container">
                    <div className="colla-gas-asset-sub-container">
                      <div className="colla-gas-asset-title">
                        Collateralized
                      </div>
                      <div className="colla-gas-asset-value">
                        {coin?.collateralized}
                      </div>
                    </div>
                    <div className="colla-gas-asset-sub-container">
                      <div className="colla-gas-asset-title">Asset</div>
                      <div className="colla-gas-asset-value">BUSD</div>
                    </div>
                  </div>
                  <div className="gas-container">
                    <div className="colla-gas-asset-title">Gas fee</div>
                    <div className="gas-value">insufficient fund for gas</div>
                    <div className="gas-value-enough">0.001&nbsp;BUSD</div>
                  </div>
                </div>
              </div>
              <div className="warning-confirm-container">
                <div className="warning-container">
                  <div className="warning-text">You will receive iBUSD</div>
                  <img
                    src="basic-icon/warning-icon.svg"
                    alt="warning-icon"
                    onMouseOver={onHoverWarning}
                    onMouseLeave={onHoverWarning}
                  />
                </div>
                <div className="cancel-button" onClick={onOpenModal}>
                  Cancel
                </div>
                <div className="lend-confirm-button" onClick={() => {}}>
                  Lend
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WarningPopUp isHoverWarning={isHoverWarning} />
    </div>
  ) : (
    <div></div>
  );
};

export default LendModal;
