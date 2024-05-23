import Link from "next/link";
import Menu from "./Menu";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import NavIcons from "./NavIcons";

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex justify-center items-center">
      <div className="flex h-full w-full items-center justify-between md:hidden">
        <Logo />
        <Menu />
      </div>
      <div className="hidden md:flex items-center justify-between gap-8 w-full">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Logo />
          <div className="hidden xl:flex gap-4 ">
            <Link href="/" className="hover-effect">
              Home
            </Link>
            <Link href="/" className="hover-effect">
              Shop
            </Link>
            <Link href="/" className="hover-effect">
              Deals
            </Link>
            <Link href="/" className="hover-effect">
              About
            </Link>
            <Link href="/" className="hover-effect">
              Contacts
            </Link>
          </div>
        </div>
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <Searchbar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
