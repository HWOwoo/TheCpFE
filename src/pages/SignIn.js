import { Fragment } from "react";
import Gnb from '../components/gnb/Gnb';
import MenuTab from '../components/menutab/MenuTab';
import styled from 'styled-components';
import SingForm from "../components/sign/SignForm";
import Fnb from "../components/fnb/Fnb";

const SignIn = () => {
  return (
    <Fragment>
      <MainContent>
        <Gnb />
        <MenuTab />
        <SingForm />
        <Fnb/>
      </MainContent>
    </Fragment>
  );
}

const MainContent = styled.div`
  width: 1280px;
  padding: 10px;
`;

export default SignIn;
