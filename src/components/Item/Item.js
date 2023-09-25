import { Fragment } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import item01 from '../../img/item01.png';
import ItemCard from "./ItemCard";

const Item = () => {

    const navigate = useNavigate();

    const goToItemView = () => {
        navigate("/ItemInfoView");
    }   

    return (
        <Fragment>
            <div className="item-content-view">
                <div className="item-content">
                    <ItemContentHeader className="item-content-header">
                        <span>홈 → 텐트</span> {/* 카테고리 전체 */}
                    </ItemContentHeader>
                    <div className="item-content-category">
                        <div className="category-subject">
                            <SubjectItem className="subject-item">
                                <div className="subject-info">
                                    <span>체어 원</span>
                                </div>
                                <div className="subject-info">
                                    <span>체어 투</span>
                                </div>
                                <div className="subject-info">
                                    <span>체어 쓰리</span>
                                </div>
                                <div className="subject-info">
                                    <span>체어 포</span>
                                </div>
                                <div className="subject-info">
                                    <span>체어 식스</span>
                                </div>
                            </SubjectItem>
                        </div>
                    </div>
                    <ItemCard/>
                    <ItemCard/>
                </div>
            </div>
        </Fragment>
    );
}
const ItemContentHeader = styled.div`
    height: 2rem;
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    text-decoration: underline;
    align-items: center;
`

const SubjectItem = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 1rem;

    .subject-info {
        display: flex;
        border: 1px #6c757d solid;
        width: 100px;
        height: 45px;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
    }
`

export default Item;