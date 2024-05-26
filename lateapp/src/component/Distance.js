import { useState } from 'react';

import "./Distance.css";

const Distance = () => {
    const [startPlace, setStartPlace] = useState()
    const [endPlace, setEndPlace] = useState()

    const [time, setTime] = useState()

    const onChangeStart = (e) => {
        setStartPlace(e.target.value);
        console.log(startPlace);
    }

    const onChangeEnd = (e) => {
        setEndPlace(e.target.value);
        console.log(endPlace);
    }

    function distanceCalculate () {
        if (Object.is(startPlace, "정보과학관") && Object.is(endPlace, "PB관")) {
            setTime("10분")
        }
    }



    return (
        <div className="Distance">
            <textarea placeholder={"출발지"} onChange={onChangeStart}></textarea>
            <textarea placeholder={"도착지"} onChange={onChangeEnd}></textarea>
            <button onClick={distanceCalculate}>계산 시작</button>
            <textarea value={time}></textarea>
        </div>
    );
}

export default Distance;