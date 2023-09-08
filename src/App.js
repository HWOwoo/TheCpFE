import 'bootstrap/dist/css/bootstrap.css';
import '../src/css/Style.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Main from './pages/Main';
import ItemList from './pages/ItemList'
import ItemInfoView from './pages/ItemInfoView';
import ShopPage from './pages/ShopPage';
import OrderInfo from './pages/OrderInfo';
import SuccessPage from './pages/SuccessPage';
import { MyMain } from './pages/profile/MyMain';
import { MyHistory } from './pages/profile/MyHistory';
import { MyOrderView } from './pages/profile/MyOrderView';
import JongGoPage from './pages/daangn/JongGoPage';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes basename={process.env.PUBLIC_URL}>
        {/* 메인 */}
        <Route path="/" element={<Main />} />
        {/* 회원가입 */}
        <Route path="/SignIn" element={<SignIn />} />
        {/* 아이템 */}
        <Route path="/ItemList" element={<ItemList />} />
        <Route path="/ItemInfoView" element={<ItemInfoView />} />
        <Route path="/ShopPage" element={<ShopPage/>} />
        <Route path="/OrderInfo" element={<OrderInfo/>} />
        {/* 주문성공 */}
        <Route path="/success" element={<SuccessPage/>} />
        {/* 마이페이지 */}
        <Route path="/myinfo/profile" element={<MyMain />} />
        <Route path="/myinfo/history" element={<MyHistory />} />
        <Route path="/myinfo/orderView" element={<MyOrderView />} />
        {/* 중고장터 */}
        <Route path="/usedMarket" element={<JongGoPage />} />
      </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;
