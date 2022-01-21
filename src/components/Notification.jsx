import { LeftNotify } from "./LeftNotify.jsx";
import { MainNotify } from "./MainNotify";
import "./css/notification.css"

export const Notification = () => {
    return (
        <div className="notification">
        <div className="notify-content">
            <LeftNotify />
            <MainNotify />
        </div>
     </div>

    )
}