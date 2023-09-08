import { Fragment } from "react";
import Gnb from '../components/gnb/Gnb';
import MenuTab from '../components/menutab/MenuTab';
import styled from 'styled-components';
import Success from "../components/cart/Success";
import Fnb from "../components/fnb/Fnb";

const SuccessPage = () => {
  return (
    <Fragment>
      <MainContent>
        <Gnb />
        <MenuTab />
        <Success></Success>
        <Fnb/>
      </MainContent>
    </Fragment>
  );
}

const MainContent = styled.div`
  width: 1280px;
  padding: 10px;
`;

export default SuccessPage;
