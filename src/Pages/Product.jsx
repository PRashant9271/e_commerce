import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const Infocontainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const Filtercontainer = styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {

  return (
    <Container>
      <Navbar />
      <br />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1521165946603-4019d13d7d46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRlbmltJTIwamFja2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        </ImgContainer>
        <Infocontainer>
          <Title>Denim Jacket</Title>
          <Desc>A denim jacket, also called a jean jacket or trucker jacket, is a jacket made from denim. Introduced in the United States in the late 19th century, it has been a popular type of casual apparel with both men and women and has been described as an iconic element of American fashion.</Desc>
          <Price>Rs 1200</Price>
          <Filtercontainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <FilterSize>
              <FilterTitle>Size</FilterTitle>
              <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
          </Filtercontainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </Infocontainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};


export default Product;
