import Gnb from '../components/gnb/Gnb';
import MenuTab from '../components/menutab/MenuTab';
import styled from 'styled-components';
import Fnb from '../components/fnb/Fnb';
import ShopOrderInfo from '../components/cart/ShopOrderInfo';


const OrderInfo = () => {
    return (
        <MainContent>
            <Gnb />
            <MenuTab />
            <ContentView className='main-content'>
                <ShopOrderInfo></ShopOrderInfo>
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

export default OrderInfo;