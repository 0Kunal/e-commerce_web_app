import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Typography,
  Link,
  Box,
  Icon,
  IconButton,
  Avatar,
} from "@mui/material";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";

const iconStyle = {
  color: "white",
  fontSize: "2rem",
};

const followUs = [
  {
    icon: <FaFacebook {...iconStyle} />,
    link: "https://www.facebook.com/",
  },
  {
    icon: <FaInstagram {...iconStyle} />,
    link: "https://www.instagram.com/",
  },
  {
    icon: <FaPinterest {...iconStyle} />,
    link: "https://in.pinterest.com/",
  },
  {
    icon: <FaTwitter {...iconStyle} />,
    link: "https://twitter.com/",
  },
  {
    icon: <FaLinkedin {...iconStyle} />,
    link: "https://www.linkedin.com/",
  },
];
const contactDetails = [
  {
    icon: <ImLocation2 {...iconStyle} />,
    text: "Address-Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <BsTelephoneFill {...iconStyle} />,
    text: "+91 12345678978",
  },
  {
    icon: <TfiEmail {...iconStyle} />,
    text: "abcdefghijklmnop@gmail.com",
  },
];
const ourCompany = [
  {
    text: "About Us",
    link: "/about",
  },
  {
    text: "FAQs",
    link: "/faqs",
  },
  {
    text: "Return and Refund Policy",
    link: "/return-and-refund-policy",
  },
  {
    text: "Smile Stories",
    link: "/smile-stories",
  },
  {
    text: "Blogs",
    link: "/blogs",
  },
];
const paymentOptions = [
  {
    text: "Master Card",
    image:
      "https://download.logo.wine/logo/Mastercard/Mastercard-Logo.wine.png",
  },
  {
    text: "Visa",
    image:
      "https://logos-world.net/wp-content/uploads/2020/06/Visa-Logo-2006.png",
  },
  {
    text: "Paypal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png",
  },
  {
    text: "Google Pay",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/1200px-Google_Pay_Logo.svg.png",
  },
  {
    text: "Amazon",
    image:
      "https://cdn.pixabay.com/photo/2021/08/10/16/02/amazon-6536326_1280.png",
  },
];

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: 0,
    // padding: theme.spacing(4),
    color: theme.palette.common.white,
  },
  column: {
    // display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: theme.spacing(2),
  },

  underline: {
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: -0.5, // Adjust this value to control the space between text and underline
      width: "100%",
      borderBottom: `1px solid ${theme.palette.common.white}`,
    },
  },
}));

const Footer = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <>
      <Wrapper>
        <section className="contact-short">
          <div className="grid grid-two-column">
            <div>
              <h3>Ready to get started?</h3>
              <h3>Talk to us today</h3>
            </div>

            <div>
              <Button className="btn hireme-btn">
                <NavLink to="/"> Get Started </NavLink>
              </Button>
            </div>
          </div>
        </section>

        <footer className={classes.footer}>
          <Grid container paddingX={5} rowSpacing={3} columnSpacing={1}>
            <Grid container item xs={12} sm={3} md={3} direction={"column"}>
              <Grid item width={"fit-content"}>
                <Typography
                  fontSize={16}
                  fontWeight={500}
                  className={classes.underline}
                >
                  FOLLOW US ON
                </Typography>
              </Grid>
              <Grid
                item
                display={"flex"}
                flexDirection={"column"}
                marginLeft={3}
              >
                {followUs.map((item, index) => (
                  <IconButton
                    sx={{ width: "fit-content" }}
                    color="white"
                    size="medium"
                    key={index}
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Grid>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              md={6}
              direction={"column"}
              spacing={2}
            >
              <Grid item width={"fit-content"}>
                <Typography
                  fontSize={16}
                  fontWeight={500}
                  className={classes.underline}
                >
                  CONTACT DETAILS
                </Typography>
              </Grid>
              {contactDetails.map((item, index) => (
                <Grid item key={index} display={"flex"} alignItems={"center"}>
                  {item.icon}
                  <Typography fontSize={14} marginLeft={1}>
                    {item.text}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={3}
              md={3}
              direction={"column"}
              spacing={1.5}
            >
              <Grid item width={"fit-content"}>
                <Typography
                  fontSize={16}
                  fontWeight={500}
                  className={classes.underline}
                >
                  OUR COMPANY
                </Typography>
              </Grid>
              {ourCompany.map((item, index) => (
                <Grid
                  item
                  key={index}
                  display={"flex"}
                  alignItems={"center"}
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate(item.link)}
                >
                  <Typography fontSize={14}>{item.text}</Typography>
                </Grid>
              ))}
            </Grid>
            <Grid
              container
              item
              xs={12}
              direction={"column"}
              rowSpacing={1}
              alignContent={"center"}
            >
              <Grid item width={"fit-content"}>
                <Typography
                  fontSize={16}
                  fontWeight={500}
                  className={classes.underline}
                >
                  100% secure payments
                </Typography>
              </Grid>
              <Grid container item display={"flex"} width={"fit-content"}>
                {paymentOptions.map((item, index) => (
                  <Grid item key={index} marginRight={1}>
                    <Avatar
                      variant="rounded"
                      sx={{
                        bgcolor: "white",
                        width: "44px",
                        height: "22px",
                        objectFit: "cover",
                        paddingX: "1px",
                      }}
                      alt={item.text}
                      src={item.image}
                    />
                  </Grid>
                  // <Box
                  //   key={index}
                  //   marginRight={1}
                  //   borderRadius={1}
                  //   width={40}
                  //   height={20}
                  // >
                  //   <img
                  //     key={index}
                  //     src={item.image}
                  //     alt={item.text}
                  //     style={{
                  //       objectFit: "cover",
                  //     }}
                  //     // style={{ backgroundColor: "white", borderRadius: "5px" }}
                  //     // width="40px"
                  //     // height="20px"
                  //   />
                  // </Box>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </footer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 10rem 0 3rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
