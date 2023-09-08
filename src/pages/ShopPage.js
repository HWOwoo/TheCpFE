import Gnb from '../components/gnb/Gnb';
import MenuTab from '../components/menutab/MenuTab';
import styled from 'styled-components';
import Fnb from '../components/fnb/Fnb';
import ShopCart from '../components/cart/ShopCart';


const ShopPage = () => {
    return (
        <MainContent>
            <Gnb />
            <MenuTab />
            <ContentView className='main-content'>
                <ShopCart/>
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
`;

export default ShopPage;