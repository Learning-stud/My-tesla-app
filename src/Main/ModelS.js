import React, { useState } from 'react';
import styled from 'styled-components';
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink, Link } from 'react-router-dom';

function ModelS() {

  const [burgerStatus, setBurgerstatus] = useState(false);

  return (

    <>
      <Container>
        <Link to="/">
          <img src="/images/logo.svg" alt="" />
        </Link>

        <City>US</City>

        <LanguageIcon className='icon' onClick={() => setBurgerstatus(true)} />
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerstatus(false)} />
          </CloseWrapper>

          <li><NavLink to="/Pages/modelS">Model S</NavLink></li>
          <li><NavLink to="/Pages/model3">Model 3</NavLink></li>
          <li><NavLink to="/Pages/modelX">Model X</NavLink></li>
          <li><NavLink to="/Pages/modelY">Model Y</NavLink></li>


        </BurgerNav>
      </Container>


    </>





  );

}


export default ModelS;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  margin-top: 10px;
  align-items: flex-start; /* Center items vertically */
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  cursor:pointer;
  align-content:space-between;
`;




const BurgerNav = styled.div`
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      width: 300px;
      background: white;
      list-style: none;
      z-index: 16;
      padding: 20px;
      display: flex;
      flex-direction: column;
      cursor:pointer;
      text-align: start;
      transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
      transition: transform 0.3s ease-in-out; /* Add transition for smooth animation */
      
      li {
        padding: 15px 0;
        border-bottom: 2px solid rgba(0, 0, 0, 0.2);
      }
      a {
        font-weight: 600;
      }
    `;

const CustomClose = styled(CloseIcon)`
      cursor: pointer;
    `;

const CloseWrapper = styled.div`
      display: flex;
      justify-content: flex-end;
    `;


const City = styled.div`
    padding-left: 92%;
    font-size: x-large;
    font-weight: 600;

`







