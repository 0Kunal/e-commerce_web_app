import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { MdAccountCircle } from "react-icons/md";
import { FaHome, FaMale, FaFemale } from "react-icons/fa";
import { GiMonclerJacket } from "react-icons/gi";
import { BsInfoLg } from "react-icons/bs";
import { PiShirtFoldedFill, PiTShirtFill } from "react-icons/pi";
import { CgMenu } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";
import {
  Drawer,
  Toolbar,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import NavDropdown from "./NavDropdown";
import NavNestedList from "./NavNestedList";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const { total_item } = useCartContext();
  const drawerWidth = "40%";
  const navigate = useNavigate();

  const menSubmenu = [
    { label: "Hoodies", path: "mens/hoodies", icon: <GiMonclerJacket /> },
    { label: "Shirts", path: "mens/shirts", icon: <PiShirtFoldedFill /> },
    { label: "T-shirts", path: "mens/tshirts", icon: <PiTShirtFill /> },
  ];
  const womenSubmenu = [
    { label: "Hoodies", path: "womens/hoodies", icon: <GiMonclerJacket /> },
    { label: "Shirts", path: "womens/shirts", icon: <PiShirtFoldedFill /> },
    { label: "T-shirts", path: "womens/tshirts", icon: <PiTShirtFill /> },
  ];

  const closeMenu = () => {
    setMenuIcon(false);
  };

  return (
    <div>
      {/* <Nav> */}
      <Drawer
        anchor="right"
        variant="temporary"
        open={menuIcon}
        onClose={() => setMenuIcon(false)}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List disablePadding sx={{ fontSize: "14px" }}>
          <ListItemButton
            onClick={() => {
              closeMenu();
              navigate("/");
            }}
          >
            <FaHome />
            <ListItemText primary={"Home"} sx={{ marginLeft: 1 }} />
          </ListItemButton>
          <NavNestedList
            icon={<FaMale />}
            title={"Mens"}
            options={menSubmenu}
            closeMenu={closeMenu}
          />
          <NavNestedList
            icon={<FaFemale />}
            title={"Womens"}
            options={womenSubmenu}
            closeMenu={closeMenu}
          />
          <ListItemButton
            onClick={() => {
              closeMenu();
              navigate("/about");
            }}
          >
            <BsInfoLg />
            <ListItemText primary={"About"} sx={{ marginLeft: 1 }} />
          </ListItemButton>

          <ListItemButton
            onClick={() => {
              closeMenu();
              navigate("/cart");
            }}
          >
            <FiShoppingCart />
            <ListItemText primary={"Cart"} sx={{ marginLeft: 1 }} />
            <span className="cart-total--item"> {total_item} </span>
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              closeMenu();
              navigate("/myaccount");
            }}
          >
            <MdAccountCircle />
            <ListItemText primary={"Account"} sx={{ marginLeft: 1 }} />
          </ListItemButton>
        </List>
      </Drawer>

      <div className={menuIcon ? "navbar" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavDropdown
              title="Men"
              options={menSubmenu}
              onClick={() => setMenuIcon(false)}
            />
          </li>
          <li>
            <NavDropdown
              title="Women"
              options={womenSubmenu}
              onClick={() => setMenuIcon(false)}
            />
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{total_item}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/myaccount" className="navbar-link cart-trolley--link">
              <MdAccountCircle className="cart-trolley" />
            </NavLink>
          </li>
        </ul>

        <div className="mobile-navbar-btn">
          {!menuIcon && (
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(!menuIcon)}
            />
          )}
        </div>
      </div>
      {/* </Nav> */}
    </div>
  );
};

export default Nav;
