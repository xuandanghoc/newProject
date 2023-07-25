import PatternItems from "../../global/PatternItem";
import Pattern1 from "../../../assets/pattern/Pattern1.png";
import Pattern2 from "../../../assets/pattern/Pattern2.png";
import Dot from "../../global/Dot";

function SlideItem() {
  return (
    <div className="slide-container">
      <div className="slide">
        <PatternItems bgPattern={Pattern1} />
        <PatternItems bgPattern={Pattern2} />
      </div>
      <div className="dot-container">
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </div>
    </div>
  );
}

export default SlideItem;
