import { LeftNotifyData } from "../LeftNotifyData.js";
import "./css/leftNotify.css"
export const LeftNotify = () => {
    return (
        <div className="sidebar">
        <div className="sidebarOptions">
            <div className="sidebar1stOption">
                <p>Filters</p>
            </div>
            <div className="sidebarOption first">
                <p>All Notifictaion</p>
            </div>
            {LeftNotifyData.map(d =>(
                    <div className="sidebarOption">
                    <p>{d.des}</p>
                    </div>
            ))}
        </div>
    </div>
    )
}