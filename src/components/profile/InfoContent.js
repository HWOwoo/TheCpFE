import { Button } from "react-bootstrap";
import "../../css/profile/InfoContent.css"
import { styled } from "styled-components";
import { useState } from "react";

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;

  > .toggle-container {
    width: 50px;
    height: 24px;
    border-radius: 30px;
    border: 1px solid gray;
    background-color: rgb(233,233,234);}
    
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  > .toggle--checked {
    background-color: rgb(0,200,102);
    transition : 0.5s
    
  }

  > .toggle-circle {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: rgb(255,254,255);
    transition : 0.5s
    
    //.toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현
  } >.toggle--checked {
    left: 27px;
    transition : 0.5s
  }
`;

export const Toggle = () => {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    // isOn의 상태를 변경하는 메소드를 구현
    setisOn(!isOn)
  };

  return (
    <>
      <ToggleContainer onClick={toggleHandler}>
        <div className={`toggle-container ${isOn ? "toggle--checked" : null}`}/>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`}/>
      </ToggleContainer>
    </>
  );
};

export function InfoContent() {

    return (
        <div className="container">
            <div className="container-header-tab">
                <div className="container-header">
                    <p className="container-header-text"> <label>기본 정보</label></p>
                </div>
                <div>
                    <Button variant="outline-secondary">본인 인증</Button>
                </div>
                <div className="info-tab-first">
                    <label> 이름 : </label>
                </div>
                <div className="info-tab">
                    <label> 휴대폰 : </label>
                </div>
            </div>
            <div className="container-header-tab">
                <div className="container-header">
                    <p className="container-header-text"> <label>이메일 변경</label> </p>
                </div>
                <div className="info-tab-first">
                    <label> 광고성 정보 알림 메시지 받기  </label> <Toggle/>
                </div>
            </div>
            <div className="container-header-tab">
                <div className="container-header">
                    <p className="container-header-text"> 부가 정보 관리 </p>
                </div>
                <div>
                    <Button variant="outline-secondary">주소입력</Button>
                </div>
                <div className="container-addr">
                    <div>
                        <p>등록된 주소가 없습니다.</p>
                    </div>
                </div>
            </div>
            <div className="container-header-tab">
                <div className="container-header">
                    <p className="container-header-text"> <label>수신 동의</label> </p>
                </div>
                <div className="info-tab-first">
                    <label> 광고성 정보 알림 메시지 받기 </label> <Toggle/>
                </div>
                <div className="info-tab-first">
                    <label> 주요 공지사항 알림 받기 </label> <Toggle/>
                </div>
            </div>
        </div>
    );
}