import React, { Fragment,useState } from "react";
import { Button, Form } from "react-bootstrap";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";



import item01 from '../../img/item01.png';
import WidthAd from "../ad/WidthAd";

const ItemView = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-evenly;
`

const ItemImg = styled.div`
    width: 500px;
    height: 500px;
    background: url(${item01}) no-repeat;
    background-size : cover;
`;

const ItemContentInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 480px;
    min-height: 400px;

    .productNameInfo {
        display: flex;
        justify-content: space-between;
    }

    .productShipInfo {
        display: flex;
        flex-direction: column;
    }

    input {
        width:40px;
    }

    .order-item-info {
        height: 80px;
        border: 1px solid #f4f4f4;
        position: relative;
        display: table;
        width: 100%;
        padding: 16px;
        box-sizing: border-box;
    }
`;

const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    button {
        margin: 20px;
        width: 200px;
    }

    button:nth-child(2) {
        background-color: #2f2a2a;
        color: white;
    }
`

const ItemPrice = styled.div`
    display: flex;
    justify-content: space-around;
`

const ItemNameSpan = styled.span`
    font-size : 3.5rem;
`

const TabMenu = styled.ul`
  font-weight: bold;
  display: flex;
  align-items: center;
  list-style: none;
  margin-bottom: 3rem;
  margin-top: 20px;
  justify-content: center;
  padding: 0px;

  .submenu {
    display: flex;
    width: 80px;
    heigth: 30px; */
    width: calc(100% /3);
    padding: 10px;
    font-size: 15px;
    transition: 0.5s;
    border-radius: 10px 10px 0px 0px;
  }

  .focused {
    box-shadow: inset 0 -11px 0 gray;
    line-height: 21px;
    color: rgb(21,20,20);
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

const ItemInfo = () => {

    const [currentTab, clickTab] = useState(0);

    const OPTIONS = [
        { value: "apple", name: "사과", price: 5000 },
        { value: "banana", name: "바나나", price: 4000 },
        { value: "orange", name: "오렌지", price: 2000 },
    ];

    const SelectBox = (props) => {
        const [selectedOptions, setSelectedOptions] = useState([]);
        const [totalPrice, setTotalPrice] = useState(0); // 상품 총 가격
    
        const handleOptionChange = (event) => {
            const selectedValue = event.target.value;
            const selectedOption = OPTIONS.find(option => option.value === selectedValue);
    
            if (selectedOption && !selectedOptions.some(option => option.value === selectedValue)) {
                setSelectedOptions(prevSelectedOptions => [...prevSelectedOptions, { ...selectedOption, quantity: 1 }]);
                setTotalPrice(prevTotalPrice => prevTotalPrice + selectedOption.price); // 선택된 옵션의 가격을 추가
            }
        };
    
        const handleQuantityChange = (index, change) => {
            const updatedOptions = [...selectedOptions];
            updatedOptions[index].quantity += change;
    
            if (updatedOptions[index].quantity <= 0) {
                updatedOptions.splice(index, 1);
            }
    
            setSelectedOptions(updatedOptions);
            updateTotalPrice();
        };
    
        const updateTotalPrice = () => {
            const totalPrice = selectedOptions.reduce((acc, option) => acc + option.price * option.quantity, 0);
            setTotalPrice(totalPrice);
        };
    
    
        return (
            <>
                <Form.Select aria-label="Default select example" onChange={handleOptionChange}>
                    <option value="">선택하세요</option>
                    {props.options.map((option) => (
                        <option
                            key={option.value}
                            value={option.value}
                        >
                            {option.name}
                        </option>
                    ))}
                </Form.Select>
                <br />
                {selectedOptions.map((selectedOption, index) => (
                    <div key={index} className="order-item-info">
                        <span>{selectedOption.name}</span><span> {selectedOption.price}원</span>
                        <Button variant="" style={{ float: "right" }}>X</Button>
                        <br />
                        <div>
                            <Button variant="" onClick={() => handleQuantityChange(index, -1)}>-</Button>
                            <input style={{width:"25px"}} type="text" value={selectedOption.quantity} readOnly />
                            <Button variant="" onClick={() => handleQuantityChange(index, 1)}>+</Button>
                        </div>
                    </div>
                ))}
                <hr />
                <div>
                    총 상품 금액: {totalPrice}원
                </div>
            </>
        );
    };


    const navigate = useNavigate();

    
    const goToShopCart = () => {
        navigate("/ShopPage");
    }   

    const menuArr = [
      { name: '제품소개', content: '짱쌘테이블' },
      { name: '상세스펙', content: '10키로' },
      { name: '후기', content: '흠' },
    ];

    const selectMenuHandler = (index) => {
        // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않는다
        // 해당 함수가 실행되면 현재 선택된 Tab Menu 가 갱신.
        clickTab(index);
      };

    return(
    <Fragment>
        <div>
            <ItemView>
                <ItemImg className="item-img" />
                <div className="item-trade-info">
                        <ItemNameSpan> 제품 명</ItemNameSpan>
                        <ItemContentInfo>
                            <div className="productNameInfo">
                                <span>300,000원</span>
                                <span>적립금 3%</span>
                            </div>
                            <hr />
                            <div className="productShipInfo">
                                <span>배송정보</span>
                                <span>내일 까지 도착 예정</span>
                                <span>이용하는 택배사</span>
                            </div>
                            <hr />
                            <SelectBox options={OPTIONS}></SelectBox>
                            <hr />
                            <ButtonGroup className="item-info-buttonGroup">
                                <Button variant="outline-secondary" onClick={goToShopCart}>장바구니</Button>
                                <Button variant="outline-secondary" onClick={goToShopCart}>구매</Button>
                            </ButtonGroup>
                        </ItemContentInfo>
                </div>
            </ItemView>

            <div className="ad-between">
                <WidthAd/>
            </div>

            <div className="item-content">
                <div>
                    <TabMenu>
                    {/* <li className="submenu">{menuArr[0].name}</li>
                    <li className="submenu">{menuArr[1].name}</li>
                    <li className="submenu">{menuArr[2].name}</li> */}
                    {menuArr.map((el,index) => (
                        <li className={index === currentTab ? "submenu focused" : "submenu" }
                        onClick={() => selectMenuHandler(index)}>{el.name}</li>
                        ))}
                    </TabMenu>
                    <Desc>
                    <p>{menuArr[currentTab].content}</p>
                    </Desc>
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default ItemInfo;