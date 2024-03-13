import BackgroundHeading from "../../../components/BackgroundHeading";
import Breadcrumb from "../../../components/Breadcrumb";
import FeaturesBox from "../../../components/FeaturesBox";
import CartContent from "./CartContent";

const Card = () => {
  const cartList = [
    {
      productId: "1",
      quantity: "2",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/2048px-Google_Translate_logo.svg.png",
      price: "1000000",
      salePercent: "90",
      saleTimeLeft: "10000",
      name: "Sylthety 10001",
      size: "L",
      color: "DarkGray",
      brand: "AES",
    },
    {
      productId: "2",
      quantity: "1000000",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Google_Translate_logo.svg/2048px-Google_Translate_logo.svg.png",
      price: "9999",
      salePercent: "20",
      saleTimeLeft: "3600000",
      name: "Sylthety 9999",
      size: "M",
      color: "DarkGray",
      brand: "AES",
    },
  ];

  const getSubTotal = (id) => {
    return cartList.reduce((total, current) => {
      if (current.productId == id)
        return total + current.price * current.quantity;
      else return total;
    }, 0);
  };

  const getTotal = () => {
    return cartList.reduce((total, current) => {
      return total + current.price * current.quantity;
    }, 0);
  };

  return (
    <div>
      <BackgroundHeading
        heading="Cart"
        Breadcrumb={<Breadcrumb url="/cart" />}
      />
      <CartContent list={cartList} />
      <FeaturesBox marginDown={true} />
    </div>
  );
};

export default Card;
