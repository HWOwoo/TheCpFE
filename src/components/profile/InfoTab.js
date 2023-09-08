import { useLocation } from "react-router-dom";
import "../../css/profile/InfoTab.css"


export function InfoTab() {

    const currentPath = window.location.pathname;

        // queryString이 'myinfo'인 경우 border 스타일 객체를 만듦
        const isMyProfilePath = currentPath === '/myinfo/profile';
        const isPurchaseHistoryPath = currentPath === '/myinfo/history';
        const isMarketplacePath = currentPath === '/myinfo/marketplace';
        const isMyPostManagementPath = currentPath === '/myinfo/mypostmanagement';

    return (
        <>
        <header className="info-header">
            <div className="info-tab-all">
                <div className="profile-area">
                    <div className="profile-inner">
                        <a href="#" className="profile-img" />
                        <div className="profile-content">
                            <p className="userEmail">nelap1234@naver.com</p>
                            <span className="userNickName">함형우{currentPath}</span><a href="#" className="checked"></a> 
                        </div>
                    </div>
                </div>
                <div className="main-area">
                    <div className="main-inner">
                        <ul className="main-inner-menu">
                        <a href="/myinfo/profile" style={isMyProfilePath ? { borderBottom: '4px solid gray' } : {}}><li > 내프로필 </li></a>
                        <a href="/myinfo/history" style={isPurchaseHistoryPath ? { borderBottom: '4px solid gray' } : {}}><li>구매내역 </li></a>
                        <a href="#" style={isMarketplacePath ? { borderBottom: '4px solid gray' } : {}}><li> 중고장터</li></a> 
                        <a href="#" style={isMyPostManagementPath ? { borderBottom: '4px solid gray' } : {}}><li> 내글관리</li></a> 
                        </ul>
                    </div>
                </div>
                <div className="footer-area">
                    <div className="footer-inner">
                        <ul className="footer-inner-menu">
                            <li> <a href="#">로그아웃</a> </li>
                            <li> <a href="#">고객센터</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        </>
    );
}

