import React, { useState } from "react";
import { useFilterContext } from "../context/filter_context";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import {
  Button,
  Divider,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
} from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "100%", height: "100%" }}
    >
      {value === index && (
        <Box sx={{ pt: 2, px: 3, width: "100%", height: "100%" }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
    sx: { fontSize: 10, fontWeight: "bold" },
  };
}

const MobileFilter2 = () => {
  const [value, setValue] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("all");
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      // return (newVal = ["All", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, "Category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");
  console.log("color: ", colorsData);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsFilterOpen(true)}
        sx={{ marginBottom: 2 }}
      >
        Filter
      </Button>
      <Dialog
        open={isFilterOpen}
        // fullWidth
        fullScreen
        onClose={() => setIsFilterOpen(false)}
      >
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: 224,
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              overflow: "visible",
            }}
          >
            <Tab label="Category" {...a11yProps(0)} />
            <Tab label="Company" {...a11yProps(1)} />
            <Tab label="Color" {...a11yProps(2)} />
            <Tab label="Price" {...a11yProps(3)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <Grid container spacing={1}>
              {categoryData.map((curElem, index) => (
                <Grid
                  item
                  xs={12}
                  key={index}
                  sx={{ cursor: "pointer" }}
                  onClick={() =>
                    updateFilterValue({
                      target: {
                        name: "category",
                        value: curElem,
                      },
                    })
                  }
                >
                  <Typography
                    fontSize={14}
                    sx={{
                      color: curElem === category ? "blue" : "black",
                      textDecoration: curElem === category ? "underline" : "",
                    }}
                  >
                    {curElem}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <FormControl fullWidth>
              <InputLabel id="company">Select Company</InputLabel>
              <Select
                labelId="company"
                id="company"
                name="company"
                label="Select Company"
                // value={}
                onChange={updateFilterValue}
              >
                {companyData.map((curElem, index) => (
                  <MenuItem key={index} value={curElem}>
                    {curElem}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                sx={{ cursor: "pointer" }}
                onClick={() => setSelectedColor("all")}
              >
                <Typography
                  fontSize={14}
                  sx={{
                    color: selectedColor === "all" ? "blue" : "black",
                    textDecoration: selectedColor === "all" ? "underline" : "",
                  }}
                >
                  All
                </Typography>
              </Grid>
              {[
                { color: "#eb1111", lable: "Red" },
                { color: "#2711eb", lable: "Blue" },
                { color: "#11eb32", lable: "Green" },
              ].map((curElem, index) => (
                <Grid
                  item
                  xs={12}
                  key={index}
                  sx={{ cursor: "pointer" }}
                  onClick={() => setSelectedColor(curElem.color)}
                  display={"flex"}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      backgroundColor: curElem.color,
                      display: "inline-block",
                      marginRight: 10,
                      border:
                        curElem.color === selectedColor
                          ? "2px solid blue"
                          : "2px solid black",
                      borderRadius: "50%",
                    }}
                  ></span>
                  <Typography
                    fontSize={14}
                    sx={{
                      color: curElem.color === selectedColor ? "blue" : "black",
                      textDecoration:
                        curElem.color === selectedColor ? "underline" : "",
                    }}
                  >
                    {curElem.lable}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Typography fontSize={14} sx={{ color: "black" }}>
                  From ₹0 to ₹{price}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Slider
                  aria-label="Price"
                  name="price"
                  value={price}
                  onChange={updateFilterValue}
                  valueLabelDisplay="auto"
                  min={minPrice}
                  max={maxPrice}
                />
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
        <Divider />
        <Grid container spacing={2} padding={1}>
          <Grid item xs={6}>
            <Button
              fullWidth
              color="error"
              variant="contained"
              onClick={clearFilters}
            >
              Clear Filters
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              onClick={() => setIsFilterOpen(false)}
            >
              Close
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default MobileFilter2;
