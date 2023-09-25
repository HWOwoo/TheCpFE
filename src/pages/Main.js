import Gnb from '../components/gnb/Gnb';
import Carousel from '../components/carousel/Carousel';
import MenuTab from '../components/menutab/MenuTab';
import styled from 'styled-components';
import Fnb from '../components/fnb/Fnb';

import { useEffect, useState } from 'react';

const Main = () => {

    const [message, setMessage] = useState('')

    useEffect(() => {
        fetch('/api/home')
            .then(response => response.text())
            .then(message => {
                setMessage(message)
            });
        }, []);

    return (
        <MainContent>
            <div>{message}</div>
            <Gnb />
            <MenuTab />
            <Carousel />
            <ContentView className='main-content'>
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

export default Main;