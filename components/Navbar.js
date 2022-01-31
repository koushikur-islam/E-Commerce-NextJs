import Image from "next/image";
import Link from "next/link";
import LogoImage from "../public/apple-logo.png";
import OrdersIcon from "@mui/icons-material/ShoppingBag";
import CartIcon from "@mui/icons-material/ShoppingCart";
import MobileIcon from "@mui/icons-material/PhoneIphone";
import LaptopIcon from "@mui/icons-material/LaptopMac";
import TabletIcon from "@mui/icons-material/Tab";
import { CartState } from "./Context";
const Navbar = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <nav className="nav">
      <div className="logo-image">
        <Link href="/">
          <a>
            <Image
              src={LogoImage}
              width="22"
              height="25"
              alt="No Image..."
            ></Image>
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/iphone">
            <a>
              <MobileIcon /> iPhone
            </a>
          </Link>
        </li>
        <li>
          <Link href="/macbook">
            <a>
              <LaptopIcon /> Macbook
            </a>
          </Link>
        </li>
        <li>
          <Link href="/ipad">
            <a>
              <TabletIcon /> iPad
            </a>
          </Link>
        </li>
        <li>
          <Link href="/orders">
            <a>
              <OrdersIcon /> My Orders
            </a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a>
              <CartIcon /> Cart ({cart.length})
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
