import React from "react";
import Product from "./Product";
import { Grid } from "@mui/material";

const GridView = ({ products }) => {
  return (
    <Grid container padding={1} spacing={2}>
      {products.map((curElem) => {
        return (
          <Grid item xs={12} sm={6} md={4} xl={3} key={curElem.id}>
            <Product {...curElem} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GridView;
