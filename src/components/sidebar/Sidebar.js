import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
import menuTabImg from '../../img/menuTab.png';

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <MenuButton type='button' onClick={handleShow}>
      </MenuButton>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>MENU</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MenuTab>
              <a href="#">TENT</a>
              <a href="#">SLEEPING BAG</a>
              <a href="#">CHAIR</a>
              <a href='#'>TABLE</a>
              <a href='#'>PAY</a>
              <a href='#'>COMMUNITY</a>
          </MenuTab>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const MenuButton = styled.input`
  width: 35px;
  height: 35px;
  background: url(${menuTabImg}) no-repeat;
  background-size: cover;
`;

const MenuTab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  a {
    text-decoration : none;
    color: black;
  }
`;

export default Sidebar;
