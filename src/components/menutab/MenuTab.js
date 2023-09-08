import React, { Fragment, useState, useEffect, fetchData } from 'react';
import { useNavigate } from "react-router-dom";
import { styled } from 'styled-components';

const MenuTab = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [dropdownData, setDropdownData] = useState([]);
    const navigate = useNavigate();

    const handleMouseEnter = (index) => {
      setActiveTab(index);
    };
  
    const handleMouseLeave = () => {
      setActiveTab(null);
    };

    const goToItemList = () => {
        navigate("/ItemList");
    }

    const goToJongGo = () => {
        navigate("/usedMarket");
    }    

    // useEffect(() => {
    //     fetchData().then((data) => {
    //       setDropdownData(data);
    //     });
    //   }, []);

    useEffect(() => {
        // 예시 데이터 (rest api json 데이터)
        const exampleData = [
            ["텐트 아이템 1", "텐트 아이템 2", "텐트 아이템 3", "PERFECT"],
            ["침낭", "동계", "하계"],
            ["체어", "익스텐션", "체어 아이템 3"],
            ["테이블 아이템 1", "테이블 아이템 2", "테이블 아이템 3"]
          ];
      
        // 비동기적인 딜레이를 시뮬레이션합니다.
        const delay = setTimeout(() => {
          setDropdownData(exampleData);
        }, 1000);
      
        // 타임아웃을 해제하기 위한 클린업 함수를 제공합니다.
        return () => clearTimeout(delay);
      }, []);

    return (
        <Fragment>
            <TabContent className='tab-content'>
                <TabContentItem className='tab-content-item' onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={handleMouseLeave} >
                텐트
                {activeTab === 0 && (
                <DropdownList>
                    {dropdownData[0]?.map((item, index) => (
                    <ListItem key={index} onClick={goToItemList}>{item}</ListItem>
                    ))}
                </DropdownList>
                )}
            </TabContentItem>
            <TabContentItem className='tab-content-item' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                침낭
                {activeTab === 1 && (
                <DropdownList>
                    {dropdownData[1]?.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                    ))}
                </DropdownList>
                )}
            </TabContentItem>
            <TabContentItem className='tab-content-item' onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                    체어
                {activeTab === 2 && (
                <DropdownList>
                    {dropdownData[2]?.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                    ))}
                </DropdownList>
                )}
                </TabContentItem>
                <TabContentItem className='tab-content-item' onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
                    테이블
                {activeTab === 3 && (
                <DropdownList>
                    {dropdownData[3]?.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                    ))}
                </DropdownList>
                )}                    
                </TabContentItem>
                <TabContentItem className='tab-content-item'>
                <a onClick={goToJongGo}>중고</a>
                </TabContentItem>
                <TabContentItem className='tab-content-item'>
                    커뮤니티
                </TabContentItem>
            </TabContent>
        </Fragment>
    );
}
const TabContent = styled.div`
    display: flex;
    justify-content: space-around;
    height: 70px;
    align-items: center;
`;

const DropdownList = styled.div`
  position: absolute;
  background-color: rgba( 108,117,125,0.8);
  padding: 15px;
  z-index: 9999;
  margin-top: 330px;
  width: 200px;
  height: 300px;
`;

const ListItem = styled.div`
  padding: 5px;
  color: white;
  text-weight: bold;
  cursor: pointer;
`;

const TabContentItem = styled.div`
    display: flex;
    width: 200px;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export default MenuTab;