import { useState } from "react";
import { FaCheck } from "react-icons/fa"


const Cart = ({cart, setAddedProducts, addedProducts}) => {
    const [cartStatus, setCartStatus] = useState("Buy Now")
    const [isDisabled, setIsDisabled] = useState(false)
    let badgeClassName = cart.tagType ==="best seller"? " bg-[#FEF3C6] text-[#BB4D00]": cart.tagType ==="new"?" bg-[#DBFCE7] text-[#0A883E]":"bg-[#E1E7FF] text-[#7226FB]" ;
    const buyNow = () => {
        setAddedProducts([...addedProducts, cart])
        setCartStatus("Added to Cart")
        setIsDisabled(true);
    }
    
    return (
    <div className="relative p-6 flex flex-col gap-4 rounded-2xl border-2 border-[#F2F2F2]">
        <div className={`absolute py-1.5 px-3 top-2.5 right-2.5 rounded-full font-medium ${badgeClassName}`}>{cart.tag}</div>
      <div className="flex-center border rounded-full size-15 border-[#F2F2F2]">
        <img className="size-8" src={cart.icon} alt={cart.name} />
      </div>
      <h1 className="font-bold text-2xl text-[#101727]">{cart.name}</h1>
      <p className="leading-5 text-[#627382]">{cart.description}</p>
      <p className="font-bold text-[#101727]">
    ${cart.price} <span className="leading-5 text-[#627382] capitalize">/{cart.period}</span>
      </p>
      <ul className="flex flex-col gap-2 text-[#627382] font-medium leading-5">

        {cart.features.map((feature, index) => <li key={index} className="flex items-center gap-2">
          <FaCheck color="#30B868" />
          {feature}
        </li>)}
        
      </ul>
      <button disabled={isDisabled} onClick={()=> buyNow()} className={`${cartStatus==="Buy Now"?" bg-linear-to-r from-[#4F39F6] to-[#9514FA]": " bg-green-500"} rounded-full  text-white font-bold py-2`}>
        {cartStatus}
      </button>
    </div>
  );
};

export default Cart;
