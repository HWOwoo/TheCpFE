import { Fragment,useState } from "react";
import { Button,Form } from "react-bootstrap";
import { styled } from "styled-components";

import { setAuthToken, tokenUserInfo } from "../../global/auth";

import GnbLog from '../../img/log.png';
import Kakao from '../../img/kakao.png';
import Google from '../../img/google.png';
import Apple from '../../img/apple.png';

const LoginContent = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
        .then((response) => {
            if (response.status === 200) {

              return response.text(); // 혹은 response.json()을 사용하여 JSON을 파싱
            } else if (response.status === 401) {
              // 로그인 실패 (UNAUTHORIZED)
              throw new Error('아이디와 비밀번호을 확인해주세요');
              
            } else {
              // 다른 오류 처리
              throw new Error('서버 오류');
            }
          })
          .then((data) => {
            // 서버로부터 받은 데이터(data)를 처리
            const token = JSON.parse(data).token;
            const decodedToken = tokenUserInfo(token);

            setAuthToken(token,decodedToken.exp);

            // 로그인 성공
            window.location.reload();
          })
          .catch((error) => {
            // 오류 처리
            console.error('로그인 오류:', error.message);
            setErrorMessage(error.message);
            // 오류 메시지를 출력하거나 다른 오류 처리 작업을 수행
          });
      };


    return (
        <Fragment>
            <LoginMainContent className="login-main-content">
                <GnbLogMainImg />
                <CustomFormGroup>
                    <Form.Control type="text"
                        placeholder="아이디"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <Form.Control type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </CustomFormGroup>
                <div className="content-item-button">
                    <LoginButton 
                    onClick={handleLogin}
                    style={{
                        width: '235px'
                    }}>로그인</LoginButton>
                </div>
                <div>
                    <LoginError>{errorMessage}</LoginError>
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
                            <a href="http://localhost:8080/oauth2/authorization/kakao">
                                <img alt="" src={Kakao} />
                            </a>
                        </div>
                        <div>
                            <a href="http://localhost:8080/oauth2/authorization/google">
                                <img alt="" src={Google} />
                            </a>
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

const LoginError = styled.span`
    color: red;
    font-size: 0.8em;
    margin-top: 5px;
`

export default LoginContent;