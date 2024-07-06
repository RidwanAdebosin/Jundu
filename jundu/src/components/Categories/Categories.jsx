
import Button from "../../Utils/Button/Button";
import "./Categories.css";

const Categories = () => {
    return(
        <section className="categories">
        <div className="product-categories">
        <Button>Headphone Type <i className="fa fa-caret-down"></i></Button>
        <Button>Price <i className="fa fa-caret-down"></i></Button>
        <Button>Review <i className="fa fa-caret-down"></i></Button>
        <Button>Color <i className="fa fa-caret-down"></i></Button>
        <Button>Material <i className="fa fa-caret-down"></i></Button>
        <Button>Offer <i className="fa fa-caret-down"></i></Button>
        <Button>All Filters <i className="fa fa-caret-down"></i></Button>
        </div>
        <div className="sort">
            <Button>Sort by <i className="fa fa-caret-down"></i></Button>
        </div>
        </section>
    )
};

export default Categories;