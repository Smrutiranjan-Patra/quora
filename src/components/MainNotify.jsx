import {middleNotifyData}  from "../middleNotifyData"
import "./css/mainNotify.css"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export const MainNotify = () => {
    return  (
        <div className="notify">
         <div className="header_div">
                <h4>Notifications</h4>
                <p>Mark All As Read.  <span> Settings</span></p>
            </div>
            <div className="rightSidebar_options">
                {middleNotifyData.map(d => (
                    <div className="sidebar__content">
                    <img
                    src={d.image}
                    alt=""
                    />
                    <div className="sidebar__contentTitle">
                        <p>{d.user}</p>
                        <h5>{d.title}</h5>
                        <p>{d.des}</p>
                    </div>
                    <div>
                    <MoreHorizOutlinedIcon />
                    </div>
                    </div>
                ))}
               
            </div>
        </div>
    )
}