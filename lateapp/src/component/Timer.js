import React from "react";
import ReactStopwatch from "react-stopwatch";

const StopWatchComponent = () => (
    <ReactStopwatch
        seconds={0}
        minutes={0}
        hours={0}
        limit={100000000}

        render={({hours, minutes, seconds}) => {
            return (
                <div>
                    <p>
                        소요 시간 : {hours}시간 {minutes}분 {seconds}초
                    </p>
                </div>
            );
        }}

    />
);

export default StopWatchComponent