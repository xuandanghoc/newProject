import Image1 from "../../../assets/shareList/Image1.png";
import Image2 from "../../../assets/shareList/Image2.png";
import Image3 from "../../../assets/shareList/Image3.png";
import Image4 from "../../../assets/shareList/Image4.png";
import Image5 from "../../../assets/shareList/Image5.png";
import Image6 from "../../../assets/shareList/Image6.png";
import Image7 from "../../../assets/shareList/Image7.png";
import Image8 from "../../../assets/shareList/Image8.png";
import ImageMiddle from "../../../assets/shareList/ImageMiddle.png";

const ListImage1s = [Image1, Image3, Image2, Image4];
const ListImage2s = [Image5, Image8, Image7, Image6];

function ListOfShare() {
  return (
    <div className="share-wrapper">
      <div className="share-list d-flex flex-wrap">
        {ListImage1s.map((image) => {
          return (
            <div
              key={image}
              className="share-list-image"
              style={{
                backgroundImage: `url(${image})`,
                objectFit: "cover",
                backgroundRepeat: "no-repeat"
              }}
            ></div>
          );
        })}
      </div>
      <div className="share-list">
        <div
          className="share-list-image"
          style={{
            backgroundImage: `url(${ImageMiddle})`,
            objectFit: "cover",
          }}
        ></div>
      </div>
      <div className="share-list d-flex flex-wrap">
        {ListImage2s.map((image) => {
          return (
            <div
              key={image}
              className="share-list-image"
              style={{
                backgroundImage: `url(${image})`,
                objectFit: "cover",
                backgroundRepeat: "no-repeat"
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ListOfShare;
