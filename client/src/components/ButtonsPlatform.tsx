import { Link } from "react-router";
import Nintendo from "../assets/images/platforms/NintendoIcon.svg";
import PcIcon from "../assets/images/platforms/PcIcon2.svg";
import PlaystationIcon from "../assets/images/platforms/PsIcon.svg";
import xboxIcon from "../assets/images/platforms/XboxIcon.svg";

interface buttonsType {
  pc: string;
  xbox: string;
  playstation: string;
  nintendo: string;
}

interface PlatformIdsType {
  pc: number;
  xbox: number;
  playstation: number;
  nintendo: number;
}

function ButtonsPlatform() {
  const platforms: buttonsType = {
    pc: PcIcon,
    xbox: xboxIcon,
    playstation: PlaystationIcon,
    nintendo: Nintendo,
  };

  const platformIds: PlatformIdsType = {
    pc: 4,
    xbox: 3,
    playstation: 187,
    nintendo: 7,
  };

  // const handleButtonClick = async (platformId: number) => {
  //   try {
  //     const response = await fetch(
  //       `https://api.rawg.io/api/games?key=4bc0720168eb4f3a87dbdfbb61bc3461&platforms=${platformId}`,
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await response.json();
  //     setGames(data.results);
  //     console.log(data.results);
  //   } catch (error) {

  //   }
  // }

  return (
    <div className="buttons-platform">
      <Link to={`/categories/${platformIds.playstation}`}>
        <img src={platforms.playstation} alt="playstation" />
      </Link>

      <Link to={`/categories/${platformIds.xbox}`}>
        <img src={platforms.xbox} alt="xbox" />
      </Link>

      <Link to={`/categories/${platformIds.pc}`}>
        <img src={platforms.pc} alt="pc" />
      </Link>

      <Link to={`/categories/${platformIds.playstation}`}>
        <img src={platforms.nintendo} alt="nintendo" />
      </Link>
    </div>
  );
}

export default ButtonsPlatform;
