import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import ProfileDropDown from "./ProfileDropDown";
import { auth } from "../firebase";
import { userContext } from "../Contexts/UserContext";
import { ShoppingCartOutlined } from "@ant-design/icons";
// import { Badge } from "antd";
// import { onAuthStateChanged } from "firebase/auth";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function NavbarCmp({ email }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [userSignedIn, SetUserSignedIn] = useState(false);

  const menuItems = ["Home", "About", "Cart"];

  const { user, setUser } = useContext(userContext);

  // console.log(user, "user");

  useEffect(() => {
    // const isUser = auth.onAuthStateChanged((user) => {
    if (user) {
      SetUserSignedIn(true);
    } else {
      SetUserSignedIn(false);
    }
    // });
    // return () => isUser;
  }, [user]);

  return (
    <Navbar className="bg-transparent" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">RAece</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link
              to={
                item == "Home"
                  ? "/"
                  : item == "About"
                  ? "/about"
                  : item == "Cart"
                  ? "/cart"
                  : ""
              }
              className="text-white"
            >
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <Link to={"/cart"} className="mr-5 flex">
          <ShoppingCartOutlined className="text-2xl text-yellow-300 mx-3" />
          <p className="text-lg">1</p>
        </Link>
        {!userSignedIn ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link to={"/login"}>Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" to={"/signUp"} variant="flat">
                Sign Up
              </Button>
            </NavbarItem>{" "}
          </>
        ) : (
          <ProfileDropDown email={email} />
        )}
      </NavbarContent>

      <NavbarMenu className="bg-transparent">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
