import "./CartItems.css"
// import shoe from "../../assets/shoe.avif"
import Button from "../../Utils/Button/Button"

  

const CartItems = ({info}) => {
  return (
    <div className="CartItemContainer">
    <div className="CartItemImage">
        <img src={info.image} alt={info.name}/>
    </div>
    <div className="CartDetails">
        <h3>{info.name}</h3>
        <p>{info.description}</p>
        <div className="CartItemsInfo">
            <p>#{info.price}</p>
            <Button className="CartItemDelete">Delete</Button>
            <div className="CartActions">
                <Button>-</Button>
                <p>{1}</p>
                <Button>+</Button>
            </div>
        </div>
    </div>
</div>
  )
}

export default CartItems;