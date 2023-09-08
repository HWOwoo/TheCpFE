import { Fragment } from "react";
import { styled } from "styled-components";

import GnbLog from '../../img/ad.png';

const WidthAd = () => {
    return (
        <Fragment>
            <ADImg/>
        </Fragment>
    );
}

const ADImg = styled.div`
    width: 600px;
    height: 80px;
    background: url(${GnbLog}) no-repeat;
    background-size: cover;
`

export default WidthAd;