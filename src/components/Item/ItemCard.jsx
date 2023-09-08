import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

import item01 from '../../img/item01.png';


export default function ItemCard() {

    const navigate = useNavigate();

    const goToItemView = () => {
        navigate("/ItemInfoView");
    }  

    return(
    <>
        <div class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]" onClick={goToItemView}>
        <div class="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
            <img class="w-full h-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl" src="../../img/item01.png" />
        </div>
        <div class="p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            Card title
            </h3>
            <p class="mt-1 text-gray-800 dark:text-gray-400">
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
        </div>
        </div>
    </>
    );
}

const ItemContentList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`

const SelectItem = styled.div`
    width: 300px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ItemImg = styled.div`
    width: 250px;
    height: 250px;
    background: url(${item01}) no-repeat;
    background-size : cover;
`


const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
