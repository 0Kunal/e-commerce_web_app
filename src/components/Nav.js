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

  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

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
    <>
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
      <Nav>
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
              <NavLink
                to="/myaccount"
                className="navbar-link cart-trolley--link"
              >
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
      </Nav>
    </>
  );
};

export default Nav;
