import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListItemButton, ListItemText, Collapse, List } from "@mui/material";

const NavNestedList = ({ title, icon, options, closeMenu }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)}>
        {icon}
        <ListItemText primary={title} sx={{ marginLeft: 1 }} />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {options.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{ pl: 4 }}
              onClick={() => {
                closeMenu();
                navigate(`products/${item.path}`);
              }}
            >
              {item.icon}
              <ListItemText primary={item.label} sx={{ marginLeft: 1 }} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default NavNestedList;
