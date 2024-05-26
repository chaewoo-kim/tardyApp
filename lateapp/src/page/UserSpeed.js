import StopWatchComponent from "../component/Timer";

function UserSpeed (startPlace, endPlace) {
    return (
        <div className="UserSpeed">
            출발지 : {startPlace}
            도착지 : {endPlace}
            소요 시간 : {StopWatchComponent}
        </div>
    )
}

export default UserSpeed