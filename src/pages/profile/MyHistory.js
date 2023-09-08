import { styled } from "styled-components";
import Gnb from "../../components/gnb/Gnb";
import MenuTab from "../../components/menutab/MenuTab";
import { InfoTab } from "../../components/profile/InfoTab";
import Fnb from "../../components/fnb/Fnb";
import { InfoHistory } from "../../components/profile/InfoHistory";

export function MyHistory() {
    return(
        <>
        <MainContent>
            <Gnb />
            <MenuTab />
            <MainDisplay>
                <InfoTab />
                <InfoHistory />
            </MainDisplay>                
            <Fnb/>
        </MainContent>
      </>
    );
}

const MainContent = styled.div`
  width: 1280px;
  padding: 10px;
`;

const MainDisplay = styled.div`
    display: flex;
`