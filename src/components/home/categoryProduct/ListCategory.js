import DiningImg from "../../../assets/category/dining.png";
import LivingImg from "../../../assets/category/living.png";
import BedImg from "../../../assets/category/bed.png";

function ListCategory() {
    return (
        <div className="category-container-list">
            <div className="list dine">
                <img src={DiningImg} />
                <p>Dining</p>
            </div>
            <div className="list living">
                <img src={LivingImg} />
                <p>Living</p>
            </div>
            <div className="list bed">
                <img src={BedImg} />
                <p>Bedroom</p>
            </div>
        </div>
    )
}

export default ListCategory;