import "./css/RightSidebar.css";
import {rightSidebarData}  from "../rightSidebarData"

export const RightSidebar = () => {
    return (
        <div className="rightSidebar">
            <div className="header">
                <h4>Spaces to follow</h4>
            </div>
            <div className="rightSidebar_options">
                {rightSidebarData.map(d => (
                    <div className="sidebar__content">
                    <img
                    src={d.image}
                    alt=""
                    />
                    <div className="sidebar__contentTitle">
                    <h5>{d.title}</h5>
                    <p>{d.des}</p>
                    </div>
                    </div>
                ))}
               
            </div>
        </div>
    )
}