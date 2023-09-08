import { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const ShopCart = () => {

    const navigate = useNavigate();

    const goToItemView = () => {
        navigate("/OrderInfo");
    }   

    return (
        <Fragment>
            <div className="shopPage-content">
                <form>
                    <ShopHeader>
                        <ShopHeaderText>장바구니</ShopHeaderText>
                        <DeleteButton variant=""> 제거 </DeleteButton>
                    </ShopHeader>
                    <div class="table-scroll">
                        <Table class="table table-hover w-auto">
                            <thead class="table-light">
                                <tr>
                                    <th scope="col"><i class="bi bi-check-square"></i></th>
                                    <th scope="col">상품명</th>
                                    <th scope="col">수량</th>
                                    <th scope="col">적립</th>
                                    <th scope="col">금액</th>
                                    <th scope="col">배송비</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row"><input type="checkbox" name="order_no" value="1"/></td>
                                        <td>123456789</td>
                                        <td>123456789</td>
                                        <td>123456789</td>
                                        <td>123456789</td>
                                        <td>123456789</td>
                                    </tr>
                                </tbody>
                        </Table>
                        </div>
                </form>

                <ButtonGroup className="button-group">
                    <Button variant="" onClick={goToItemView}>결제하기</Button>
                    <Button variant="">문의하기</Button>
                    <Button variant="">뒤로가기</Button>
                </ButtonGroup>

            </div>
        </Fragment>
    );
}

const ShopHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const ShopHeaderText = styled.span`
    font-size: 25px;
    font-weight: bold;
    padding: 10px;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`

const DeleteButton = styled(Button)`
`

export default ShopCart;