import { Fragment } from "react";
import { styled } from "styled-components";

const Fnb = () => {
    return (
        <Fragment>
            <FnbFooter className="fnb-footer">
                <FnbContent className="fnb-content">
                    <FnbWapper className="fnb-wapper">
                        <FnbWapperLeft className="fnb-wapper-left">
                            <div className="info-left-header">
                                <span>로고</span> <span>이용약관</span>
                            </div>
                            <hr/>
                            <div className="info-left">
                                <span>WhiteZone </span><span>대표자:함형우</span>
                                <br/>
                                <span>이메일: nelap1234@kakao.com</span>
                                <br/>
                                <span>주소: 경기도 안양시</span>
                            </div>
                        </FnbWapperLeft>
                        <FnbWapperRight className="fnb-wapper-right">
                            <div className="info-right">
                                <span> 공지사항 </span>
                                <span> 고객센터 </span>
                            </div>
                            <hr/>
                        </FnbWapperRight>
                    </FnbWapper>
                </FnbContent>
            </FnbFooter>
        </Fragment>
    );
}

const FnbFooter = styled.div`
    margin-top: 100px;
    display:flex;
    justify-content: center;
    width: 100vw;
    height: 300px;
    margin-left: calc(-50vw + 50%);
    background-color: #6c757d29;
`;

const FnbWapper = styled.div`
    display: flex;
`;

const FnbContent = styled.div`
    width: 1280px;
    padding: 20px;
`;

const FnbWapperLeft = styled.div`
    width: 730px;
`;

const FnbWapperRight = styled.div`
    width: 730px;
`;

export default Fnb;