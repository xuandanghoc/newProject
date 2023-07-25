import BedRoom from "../../../assets/pattern/BedRoom.png";
import BoxTitle from "./Box";
import TitlePattern from "./TitlePattern";
import SlideItem from "./SlideItem";
import ArrowNext from "../../global/ArrowNext";

function Pattern() {
  return (
    <section id="pattern">
      <div className="pattern-container">
        <TitlePattern />
        <div className="pattern-list">
          <div
            className="pattern-item"
            style={{
              background: `url(${BedRoom})`,
            }}
          >
            <BoxTitle />
          </div>
        <SlideItem />

        </div>

      </div>
    </section>
  );
}

export default Pattern;
