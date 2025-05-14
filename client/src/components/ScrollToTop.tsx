import { useEffect, useState } from "react";
import scrollIcon from "../assets/images/scrollIcon.svg";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {isVisible && (
        <button
          type="button"
          className="scroll-button"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img src={scrollIcon} alt="scroll-to-top" />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
