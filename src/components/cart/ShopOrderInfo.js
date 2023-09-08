import { useEffect, useRef, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { styled } from "styled-components";
import {
    PaymentWidgetInstance,
    loadPaymentWidget,
    ANONYMOUS,
  } from "@tosspayments/payment-widget-sdk";

  const selector = "#payment-widget";
  const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
  const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

const ShopOrderInfo = () => {

    const paymentWidgetRef = useRef(null);
    const paymentMethodsWidgetRef = useRef(null);
    const [price, setPrice] = useState(50000);
  
    useEffect(() => {
      (async () => {
        // ------  결제위젯 초기화 ------
        // 비회원 결제에는 customerKey 대신 ANONYMOUS를 사용하세요.
        const paymentWidget = await loadPaymentWidget(clientKey, customerKey); // 회원 결제
        // const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS); // 비회원 결제
  
        // ------  결제위젯 렌더링 ------
        // https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
        const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
          selector,
          { value: price }
        );
  
        // ------  이용약관 렌더링 ------
        // https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자
        paymentWidget.renderAgreement("#agreement");
  
        paymentWidgetRef.current = paymentWidget;
        paymentMethodsWidgetRef.current = paymentMethodsWidget;
      })();
    }, []);
  
    useEffect(() => {
      const paymentMethodsWidget = paymentMethodsWidgetRef.current;
  
      if (paymentMethodsWidget == null) {
        return;
      }
  
      // ------ 금액 업데이트 ------
      // https://docs.tosspayments.com/reference/widget-sdk#updateamount결제-금액
      paymentMethodsWidget.updateAmount(
        price,
        paymentMethodsWidget.UPDATE_REASON.COUPON
      );
    }, [price]);

    
    return (
        <OrderInfoMain>
            <ShopOrderInfoDiv className="shop-order-info">
                <OrderInfoHeader>
                    <span>주문결제</span>
                </OrderInfoHeader>

                <div className="order-content-address">
                    <div className="order-address-select">
                        <span>배송정보</span>
                        <Button>배송지목록</Button>
                    </div>
                    <hr/>
                    <div className="address-info">
                        <span>주문자 이름</span>
                        <span>주소지</span>
                        <span>000-0000-0000</span>
                        <Dropdown>요청 사항</Dropdown>
                    </div>
                </div>

                <div className="order-content-item">
                    <div className="item-info-header">
                        <span>주문상품</span>
                    </div>
                    <hr/>
                    <div>
                        <div>사진</div>
                        <div>
                            <span>아이템 이름</span>
                            <span>옵션 내용</span>
                            <span>예상 도착일</span>
                        </div>
                        <div>
                            <span>수량</span>
                        </div>
                        <div>
                            <span>가격</span>
                        </div>
                        <div>
                            <span>배송종류</span>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="oreder-content-discount">
                    <div className="discount-info-header">
                        <span>할인/포인트</span>
                    </div>

                    <div>
                        <span>쿠폰할인</span> <Button>쿠폰선택</Button>
                    </div>
                    
                    <div>
                        <span> 포인트</span> <input type="text"></input><Button>전액사용</Button>
                        <span> 사용가능 포인트</span>
                    </div>
                </div>
            </ShopOrderInfoDiv>
            <Vline class='v-line'></Vline>
            <InfoSide className="order-info-side">
                <SideOrderPay>
                <div>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={(event) => {
              setPrice(event.target.checked ? price - 5000 : price + 5000);
            }}
          />
        </label>
      </div>
      <div id="payment-widget" />
      <div id="agreement" />
      <OrderPayPrice>
      <span>총 결제액 : {`${price.toLocaleString()}원`}</span>
      <Button
        onClick={async () => {
          const paymentWidget = paymentWidgetRef.current;

          try {
            // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
            // https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보
            await paymentWidget?.requestPayment({
              orderId: "IOASD90ASD723HASD98AXC6ASD9A6SD",
              orderName: "토스 티셔츠 외 2건",
              customerName: "김토스",
              customerEmail: "customer123@gmail.com",
              successUrl: `${window.location.origin}/success`,
              failUrl: `${window.location.origin}/fail`,
            });
          } catch (error) {
            // 에러 처리하기
            console.error(error);
          }
        }}
      >
        결제하기
      </Button>
      </OrderPayPrice>
    </div>
                </SideOrderPay>
            </InfoSide>
        </OrderInfoMain>
    );
}

const Vline = styled.div`
    border-left : 1px solid #c7c8c9;
    height : auto;
    padding : 10px;
`

const ShopOrderInfoDiv = styled.div`
    width: 800px;
    
`

const InfoSide = styled.div`
    display: flex;
    height: auto;
    width: 460px;
    align-items: flex-end;
`

const SideOrderPay = styled.div`
    width: 460px;
`

const OrderInfoMain = styled.div`
    display: flex;
    justify-content: space-between;
`;

const OrderInfoHeader = styled.div`
    height: 50px;
    font-weight: bold;
    font-size: 25px;
`;

const OrderPayPrice = styled.div`
    display: flex;
    justify-content: space-between;

`

const OrderAddressInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export default ShopOrderInfo;