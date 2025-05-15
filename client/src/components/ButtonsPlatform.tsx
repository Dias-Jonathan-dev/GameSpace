import { Link } from "react-router";
import Nintendo from "../assets/images/platforms/NintendoIcon.svg";
import PcIcon from "../assets/images/platforms/PcIcon.svg";
import PlaystationIcon from "../assets/images/platforms/PsIcon.svg";
import xboxIcon from "../assets/images/platforms/XboxIcon.svg";

interface ButtonsType {
  pc: string;
  xbox: string;
  playstation: string;
  nintendo: string;
}

interface PlatformIdsType {
  pc: number[];
  xbox: number[];
  playstation: number[];
  nintendo: number[];
}

function ButtonsPlatform() {
  const platforms: ButtonsType = {
    pc: PcIcon,
    xbox: xboxIcon,
    playstation: PlaystationIcon,
    nintendo: Nintendo,
  };

  const platformIds: PlatformIdsType = {
    pc: [1], // PC
    xbox: [3], // Xbox One (1), Xbox 360 (14), Xbox original (80), Xbox Series S/X (186)
    playstation: [2], // PS4 (18), PS3 (16), PS2 (15), PS5 (27)
    nintendo: [7], // Nintendo Switch (7), Wii (8), Wii U (9), Nintendo 3DS (13)
  };

  return (
    <div className="buttons-platform">
      <div className="button-playstation">
        <Link to={`/categories/${platformIds.playstation.join(",")}`}>
          <img src={platforms.playstation} alt="playstation" />
        </Link>
      </div>

      <div className="button-xbox">
        <Link to={`/categories/${platformIds.xbox.join(",")}`}>
          <img src={platforms.xbox} alt="xbox" />
        </Link>
      </div>

      <div className="button-pc">
        <Link to={`/categories/${platformIds.pc.join(",")}`}>
          <img src={platforms.pc} alt="pc" />
        </Link>
      </div>

      <div className="button-nintendo">
        <Link to={`/categories/${platformIds.nintendo.join(",")}`}>
          <img src={platforms.nintendo} alt="nintendo" />
        </Link>
      </div>
    </div>
  );
}

export default ButtonsPlatform;
