import { IoMdMenu } from "react-icons/io";

const Menu = () => {
  return (
    <div className="dropdown dropdown-start lg:hidden">
      <div tabIndex={0} className="m-1">
        <IoMdMenu />
      </div>
      <ul
        tabIndex="-1"
        className="dropdown-content menu rounded-box z-1 w-52 p-2 shadow-sm leading-[1.2] font-semibold text-[#101727] flex items-center justify-center gap-2 mt-2"
      >
        <li>
          <a>Products</a>
        </li>
        <li>
          <a>Features</a>
        </li>
        <li>
          <a>Pricing</a>
        </li>
        <li>
          <a>Testimonials</a>
        </li>
        <li>
          <a>FAQ</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
