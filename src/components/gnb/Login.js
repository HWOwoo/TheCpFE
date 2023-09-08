import { Fragment } from "react";
import { Button,Form } from "react-bootstrap";
import { styled } from "styled-components";

import GnbLog from '../../img/log.png';
import Kakao from '../../img/kakao.png';
import Google from '../../img/google.png';
import Apple from '../../img/apple.png';

const LoginContent = () => {
    return (
        <Fragment>
            <LoginMainContent className="login-main-content">
                <GnbLogMainImg />
                <CustomFormGroup>
                    <Form.Control type="text" placeholder="아이디" />
                    <Form.Control type="password" placeholder="비밀번호" />
                </CustomFormGroup>
                <div className="content-item-button">
                    <LoginButton style={{
                        width: '235px'
                    }}>로그인</LoginButton>
                </div>
                <FindAccount>
                    <FindAccountLink href="#">아이디 찾기</FindAccountLink>
                    <FindAccountSpan> </FindAccountSpan>
                    <FindAccountLink href="#">비밀번호 찾기</FindAccountLink>
                    <FindAccountSpan> </FindAccountSpan>
                    <FindAccountLink href="#">회원가입</FindAccountLink>
                </FindAccount>
                <HrFormspan>
                    <hr/>
                    <span>간편 로그인</span>
                    <FastLoginWapper>
                        <div>
                            <img alt="" src={Kakao} />
                        </div>
                        <div>
                            <img alt="" src={Google} />
                        </div>
                        <div>
                            <img alt="" src={Apple} />
                        </div>
                    </FastLoginWapper>
                </HrFormspan>
            </LoginMainContent>
        </Fragment>
    );
}

const LoginMainContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
`

const FastLoginWapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;
    margin-bottom: 15px;
`

const LoginButton = styled(Button)`
    --bs-btn-color: #000;
    --bs-btn-bg: #ffffff;
    --bs-btn-border-color: #000000;
`;

const FindAccount = styled.p`
    display: flex;
    font-size: 14px;
    margin: 10px 0px 0px 0px;
`;


const FindAccountLink = styled.a`
    color: gray;
    text-decoration: underline;
`;

const FindAccountSpan = styled.span`
    margin: 0 8px;
    width: 1px;
    height: 20px;
    background-color: #858a8d;
    pointer-events: none;
`;

const CustomFormGroup = styled(Form.Group)`
    display: flex;
    height: 200px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const GnbLogMainImg = styled.div`
    width: 200px;
    height: 70px;
    background: url(${GnbLog}) no-repeat;
    background-size: cover;
`;

const HrFormspan = styled.div`
    text-align: center;
`;

export default LoginContent;