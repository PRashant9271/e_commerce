import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components"; 
import { Link } from "react-router-dom"

const Container = styled.div`
  height: 60px;
  // background-color: black;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: Pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const Center = styled.div`
  flex: 1;
 
  align-items: center;
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:"gray", fontSize:"16px"}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Beginner's Store</Logo>
        </Center>
        <Right>
          <MenuItems><Link to = {`/Register `}> REGISTER </Link></MenuItems>
          <MenuItems><Link to = {`/Login `}>  SIGN IN </Link></MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="primary">
             <Link to= {`/Cart `}> <ShoppingCartOutlined/> </Link>
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
