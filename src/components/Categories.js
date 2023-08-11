import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import styled from "styled-components";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  media: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "1rem",
  },
});

const categories = [
  {
    name: "Music & Band",
    path: "/products/music-and-band",
    image:
      "https://previews.123rf.com/images/sonulkaster/sonulkaster1707/sonulkaster170700803/82882075-rock-music-band-singers-and-musicians-with-musical-instruments-vector-flat-icons.jpg",
  },
  {
    name: "Movies & Series",
    path: "/products/movies-and-series",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK81fOvI97As_e7ZVPUzvQmn8hjMy6WJfqPQ&usqp=CAU",
  },
  {
    name: "Sports",
    path: "/products/sports",
    image:
      "https://img.freepik.com/free-vector/soccer-volleyball-baseball-rugby-equipment_1441-4026.jpg",
  },
  {
    name: "Persona",
    path: "/products/persona",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMH2ez6tEVsinzoV9cEqQyk7kOghY8fPOWfw&usqp=CAU",
  },
  {
    name: "Drip & Doodle",
    path: "/products/drip-and-doodle",
    image:
      "https://img.freepik.com/premium-vector/water-drip-doodle-illustration_96628-126.jpg?w=2000",
  },
  {
    name: "Anime",
    path: "/products/anime",
    image:
      "https://i.pinimg.com/originals/0e/50/39/0e503918829c61bd24803ce064546cee.jpg",
  },
  {
    name: "Abstract",
    path: "/products/abstract",
    image:
      "https://images.saatchiart.com/saatchi/1689730/art/8044808/7111855-YJMFMQHC-7.jpg",
  },
  {
    name: "Comics",
    path: "/products/comics",
    image: "https://www.cbc.ca/kids/images/Comic_book_header_-_1140x641.jpg",
  },
  {
    name: "Sanskriti",
    path: "/products/sanskriti",
    fontFamily: "'Noto Serif Bengali', sans-serif",
    image:
      "https://sanskritifreshfoods.com/wp-content/uploads/2022/05/Sanskriti-fresh-foods-logo.jpg",
  },
];

const Categories = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <Wrapper className="section">
      <Typography variant="h2" align="center" fontWeight={700}>
        Select Category
      </Typography>
      <Grid container spacing={3} padding={3}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              className={classes.card}
              onClick={() => navigate(category.path)}
            >
              <CardMedia
                className={classes.media}
                image={category.image}
                alt={category.name}
              />
              <CardContent>
                <Typography
                  fontWeight={500}
                  variant="h3"
                  {...(category.fontFamily
                    ? { style: { fontFamily: category.fontFamily } }
                    : {})}
                  align="center"
                >
                  {category.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }

  .card {
    background-color: #fff;
    border-radius: 1rem;

    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default Categories;
