import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";

const Success = () => {

    return (
        <Fragment>
            <div>
                주문에 성공했습니다!
                <Button>상세내역</Button>
                <Button>홈으로</Button>
            </div>
        </Fragment>
    );
}

export default Success;