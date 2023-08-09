// Dropdown.js
import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.a`
  color: ${(props) => (props.isActive ? "rgb(132, 144, 255)" : "black")};
  padding: 12px 16px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const NavDropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(!isOpen);
      }
    };
    if (isOpen) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const activeStatus = (path) => {
    let status = `/products/${path}` === window.location.pathname;
    return status;
  };

  return (
    <DropdownWrapper ref={dropdownRef}>
      <NavLink className="navbar-link" onClick={toggleDropdown}>
        {title}
      </NavLink>
      <DropdownContent isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownItem
            key={index}
            isActive={activeStatus(option.path)}
            onClick={() => {
              navigate(`products/${option.path}`);
              toggleDropdown();
            }}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default NavDropdown;
