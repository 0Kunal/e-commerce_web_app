import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import MobileFilter from "./components/mobileFilter";
import { Box } from "@mui/material";
// import { useFilterContext } from "./context/filter_context";

const Products = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <MobileFilter />
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <FilterSection />
        </Box>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
