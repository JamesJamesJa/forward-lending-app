import "./warning-pop-up.css";

interface WarningPopUpProps {
  isHoverWarning: boolean;
}

const WarningPopUp: React.FC<WarningPopUpProps> = ({ isHoverWarning }) => {
  return isHoverWarning ? (
    <div className="warning-pop-up-background">
      <div className="warning-pop-up-container">
        iTokens are minted when you deposit corresponding assets. They increase
        in value and are worth more than the underlying asset!
      </div>
    </div>
  ) : (
    <div />
  );
};

export default WarningPopUp;
