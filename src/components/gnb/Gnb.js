import { Fragment,useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, InputGroup } from 'react-bootstrap';

import { getAuthToken,tokenUserInfo,logoutActionHandler } from "../../global/auth";
import Modal from 'react-modal';
import Sidebar from "../sidebar/Sidebar";
import GnbLog from '../../img/log.png';
import GnbLogMainImgtitle from '../../img/logImg.png';
import styled from 'styled-components';
import LoginContent from "./Login";

const Gnb = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navigate = useNavigate();

    const goToSign = () => {
        navigate("/SignIn");
      }

    const goToMyInfo = () => {
        navigate("/myinfo/profile");
    }      

    const goToHome = () => {
        navigate("/");
    }      

    const token =  getAuthToken();
    const decodedToken = tokenUserInfo(token);


    return (
        <Fragment>
            <GnbHeader className="gnb-header">
                <Sidebar />
                <GnbLogTab className="gnb-log" onClick={goToHome}>
                    <GnbLogMainImg />
                    <GnbLogImg />
                </GnbLogTab>
                <GnbFindBox className="gnb-find-box">
                    <InputGroup className="mb-3" style={{width:'290px'}}>
                    <form action="" class="relative mx-auto w-max">
                            <input type="search" 
                                    class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
                            <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                    </form>
                    </InputGroup>
                </GnbFindBox>
                <div className="gnb-right">
                    <StyledButton variant="outline-secondary" onClick={()=> setModalIsOpen(true)}>로그인</StyledButton>
                        <Modal 
                            appElement={document.getElementById('root')}
                            isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                            style={{
                                overlay: {
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'

                                  },
                                content : {
                                    width: '350px',
                                    height: '460px',
                                    position: 'absolute',
                                    inset: ''
                                }
                            }}>
                            <LoginContent/>
                        </Modal>
                        <Button onClick={goToSign} variant="outline-secondary">회원가입</Button>
                    {/* 토큰이 존재하는 경우에만 "마이페이지" 버튼을 렌더링합니다. */}
                    {token && (
                        <div>
                            <Button onClick={goToMyInfo} variant="outline-secondary">마이페이지</Button>
                            <Button onClick={logoutActionHandler} variant="outline-secondary">로그아웃</Button>
                            <span>{decodedToken.nickname}</span>
                        </div>
                    )}
                </div>
            </GnbHeader>
        </Fragment>
    )
}

const GnbHeader = styled.div`
    display: flex;
    align-items: center;
    height: 4rem;
    padding: 10px;
    justify-content: space-between;
    background-color: white;
`;

const StyledButton = styled(Button)`
    margin-right: 5px;
`;

const GnbLogTab = styled.div`
    display: flex;
    width: 45em;
    cursor: pointer;
`;

const GnbLogImg = styled.div`
    width: 200px;
    height: 50px;
    background: url(${GnbLog}) no-repeat;
    background-size: cover;
`;

const GnbFindBox = styled.div`
    height: 38px;
`;

const GnbLogMainImg = styled.div`
    width: 50px;
    height: 50px;
    background: url(${GnbLogMainImgtitle}) no-repeat;
    background-size: cover;
`;

export default Gnb;
