import Gnb from '../components/gnb/Gnb';
import MenuTab from '../components/menutab/MenuTab';
import styled from 'styled-components';
import Fnb from '../components/fnb/Fnb';
import Item from '../components/Item/Item';

const ItemList = () => {
    return (
        <MainContent>
            <Gnb />
            <MenuTab />
            <ContentView className='main-content'>
                <Item/>
            </ContentView>
            <Fnb/>
        </MainContent>
    )
}

const MainContent = styled.div`
  width: 1280px;
  padding: 10px;
`;

const ContentView = styled.div`
    width: 100%;
    height: 1000px;
`;

export default ItemList;