import React from "react";
import { useNavigate } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

const Product = (curElem) => {
  const navigate = useNavigate();
  const { id, name, image, price, category } = curElem;
  return (
    <Card
      sx={{ maxWidth: 300 }}
      onClick={() => {
        setTimeout(() => {
          navigate(`/singleproduct/${id}`);
        }, 200);
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          image={image}
          title={name}
          sx={{ height: 200, objectFit: "cover" }}
        />
        <CardContent>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Typography variant="h5" component="h3">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {category}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
            >
              <Typography variant="h6" color={"secondary"}>
                {<FormatPrice price={price} />}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;
