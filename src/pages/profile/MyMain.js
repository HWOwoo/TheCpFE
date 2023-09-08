import { styled } from "styled-components";
import Gnb from "../../components/gnb/Gnb";
import MenuTab from "../../components/menutab/MenuTab";
import { InfoTab } from "../../components/profile/InfoTab";
import Fnb from "../../components/fnb/Fnb";
import { InfoContent } from "../../components/profile/InfoContent";

export function MyMain() {
    return(
        <>
        <MainContent>
            <Gnb />
            <MenuTab />
            <MainDisplay>
                <InfoTab />
                <InfoContent />
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