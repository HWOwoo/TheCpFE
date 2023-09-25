import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import item01 from '../../img/item01.png';


export default function ItemCard() {

    const navigate = useNavigate();

    const goToItemView = () => {
        navigate("/ItemInfoView");
    }  

    return(
    <>
    <ItemContentList className="item-content-list">
            <SelectItem className="select-item">
                <ItemImg className="item-img">
                </ItemImg>
                <ItemInfo className="item-info" onClick={goToItemView}>
                    <a href="#">체어원</a>
                    <br/>
                    <span>300,000:원</span>
                </ItemInfo>
            </SelectItem>
        </ItemContentList>
    </>
    );
}

const ItemContentList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const SelectItem = styled.div`
    width: 300px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ItemImg = styled.div`
    width: 250px;
    height: 250px;
    background: url(${item01}) no-repeat;
    background-size : cover;
`


const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
