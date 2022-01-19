import "./LeftSidebar.css";
import { leftSideBarData } from "../leftSidebardata.js";

export const LeftSidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarOptions">
                {leftSideBarData.map(d =>(
                    <div className="sidebarOption">
                    <img src={d.image} alt="" />
                    <p>{d.p}</p>
                    </div>
                ))}
            </div>
        </div>
          
        
       
    )
}