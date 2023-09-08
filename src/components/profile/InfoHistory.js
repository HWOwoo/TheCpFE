import { Button } from "react-bootstrap";
import "../../css/profile/InfoHistory.css"


export function InfoHistory() {

    return(
        <>
        <div className="container">
            {/* 구매한 물건이 없을 경우 */}
            <div className="container-header-tab">
                <div className="container-empty">
                    <span>구매한 물건이 없습니다.</span>
                </div>
            </div>

            <div className="container-header-tab">
                <div className="container-header">
                    <p className="container-header-text"> <label>결제 완료</label></p>
                </div>
                <div className="history-box-item">
                    <div className="product-thumbnail">
                        <a href="#" className="tunmnnail-img"></a>
                    </div>
                    <div className="product-detail">
                        <span className="order-info-date">2022. 10. 04 결제</span>
                        <strong className="order-info-name">아이템 이름</strong>
                        <span className="order-info-options">50(M)</span>
                        <span className="order-info-price">300,000원</span>
                    </div>
                </div>
                <div className="history-box-button">
                    <Button variant="outline-secondary" className="order-info-button">상세보기</Button>
                    <Button variant="outline-secondary" className="order-info-button">문의하기</Button>
                    <Button variant="outline-secondary" className="order-info-more">...</Button>
                </div>
            </div>
        </div>
        </>
    );
}