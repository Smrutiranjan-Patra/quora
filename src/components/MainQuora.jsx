import { LeftSidebar } from "./LeftSidebar.jsx";
import { RightSidebar } from "./RightSidebar.jsx";
import { Answer } from "./Answer";
import "./css/MainQuora.css"



export const MainQuora = () => {
    return (
        <div className="mainQuora">
            <div className="main-content">
                <LeftSidebar />
                <Answer />
                <RightSidebar />
            </div>

        </div>
    )
}