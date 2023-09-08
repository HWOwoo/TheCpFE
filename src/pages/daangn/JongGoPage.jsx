
import { styled } from "styled-components";
import Gnb from "../../components/gnb/Gnb";
import Fnb from "../../components/fnb/Fnb";
import ItemCard from "../../components/Item/ItemCard";

export default function JongGoPage() {
    return(
        <>
        <MainContent>
            <Gnb />
            <MainDisplay>        
                <div className="grid grid-cols-4 gap-4">
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                    <ItemCard/>
                </div>

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
    flex-direction: column;
    align-items: center;
`