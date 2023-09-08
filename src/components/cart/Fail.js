import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";

const Fail = () => {

    return (
        <Fragment>
            <div>
                오류가 발생했습니다
                <Button>홈으로</Button>
            </div>
        </Fragment>
    );
}

export default Fail;