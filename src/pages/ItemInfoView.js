import Gnb from '../components/gnb/Gnb';
import MenuTab from '../components/menutab/MenuTab';
import styled from 'styled-components';
import Fnb from '../components/fnb/Fnb';
import ItemInfo from '../components/Item/ItemInfo';

const ItemInfoView = () => {
    return (
        <MainContent>
            <Gnb />
            <MenuTab />
            <ContentView className='main-content'>
                <ItemInfo />
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
    height: auto;
`;

export default ItemInfoView;