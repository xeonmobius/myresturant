import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* left links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-align-center">
        <Link href="">My Restaurant</Link>
      </div>
      {/*MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Links */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md md:absolute top-3 r-2 lg:static">
          <Image src="/phone.png" alt="cart" width={20} height={20} />
          <span>123-456-7890</span>
        </div>
        {!user ? <Link href="/login">Login</Link> : <Link href="/menu">Orders</Link>}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
