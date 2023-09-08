import { Button } from "react-bootstrap";

export function InfoView() {
    return(
        <>
         <div className="view-contanier">
            <div className="order-base-info">
                <div className="order-ifno-number">
                    <p>주문번호</p>
                    <span>주문일자</span>
                </div>
                <div className="order-info-button">
                    <Button>영수증</Button>
                    <Button>내역삭제</Button>
                </div>
            </div>
            <div className="order-shop-info">
                <div>
                    <p>회사이름</p>
                </div>
                <div>
                    <button>문의하기</button>
                    <button>채팅하기</button>
                </div>
            </div>
            <hr />

         </div>
        </>
    );
}