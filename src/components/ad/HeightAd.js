import { Fragment } from "react";
import { styled } from "styled-components";

import GnbLog from '../../img/ad.png';

const HeightAd = () => {
    return (
        <Fragment>
            <ADImg/>
        </Fragment>
    );
}

const ADImg = styled.div`
    width: 80px;
    height: 100px;
    background: url(${GnbLog}) no-repeat;
    background-size: cover;
`

export default HeightAd;