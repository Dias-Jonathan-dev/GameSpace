import Nintendo from "../assets/images/platforms/NintendoIcon.svg";
import PcIcon from "../assets/images/platforms/PcIcon2.svg";
import PcIcon2 from "../assets/images/platforms/PsIcon.svg";
import xboxIcon from "../assets/images/platforms/XboxIcon.svg";

interface buttonsType {
  pc: string;
  xbox: string;
  playstation: string;
  nintendo: string;
}

function ButtonsPlatform() {
  const platform: buttonsType = {
    pc: PcIcon,
    xbox: xboxIcon,
    playstation: PcIcon2,
    nintendo: Nintendo,
  };

  return (
    <div className="buttons-platform">
      <button type="button" className="btn-playstation button-platform">
        <img src={platform.playstation} alt="playstation" />
      </button>

      <button type="button" className="btn-xbox button-platform">
        <img src={platform.xbox} alt="xbox" />
      </button>

      <button type="button" className="btn-pc button-platform">
        <img src={platform.pc} alt="pc" />
      </button>

      <button type="button" className="btn-nintendo button-platform">
        <img src={platform.nintendo} alt="nintendo" />
      </button>
    </div>
  );
}

export default ButtonsPlatform;
