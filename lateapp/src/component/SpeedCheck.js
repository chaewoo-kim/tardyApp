import React, { useState } from "react";
import Timer from "./Timer";

const SpeedCheck = () => {
    const [startPlace, setStartPlace] = useState()
    const [endPlace, setEndPlace] = useState()


    const onChangeStart = (e) => {
        setStartPlace(e.target.value);
        console.log(startPlace);
    }

    const onChangeEnd = (e) => {
        setEndPlace(e.target.value);
        console.log(endPlace);
    }

    function goUserSpeed (startPlace, endPlace) {
        window.location.href = "/UserSpeed";
    }

    const [visible, setVisible] = useState(false);

    return (
        <div className="SpeedCheck">
            <textarea
                placeholder="출발지"
                onChange={onChangeStart}
            >

            </textarea>
            <textarea
                placeholder="도착지"
                onChange={onChangeEnd}>

            </textarea>

            <button onClick={() => {
                setVisible(!visible);
            }}>
                {visible ? "측정 종료" : "측정 시작"}
            </button>
            <hr />
            {visible && <Timer />}
        </div>
    )
}

export default SpeedCheck;