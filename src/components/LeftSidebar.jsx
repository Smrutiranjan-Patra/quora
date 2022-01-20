import "./css/LeftSidebar.css";
import { leftSideBarData } from "../leftSidebardata.js";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

export const LeftSidebar = () => {
    const [modal,setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }
    if(modal){
        document.body.classList.add('active-modal')
    }else{
        document.body.classList.remove('active-modal')
    }

    return (
        <div className="sidebar">
            <div className="sidebarOptions">
            <div className="sidebar1stOption">
                <button onClick={toggleModal}><div className="btn_div"><AddIcon/><span>Create Space</span> </div></button>
            </div>
            {modal && (
            <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                    <button className="close-modal" onClick={toggleModal}>
                        <CloseIcon />
                    </button>
                    <h2>Create Space</h2>
                    <p>Share your interests, curate content, host discussions, and more.</p>
                    <h4>Name</h4>
                    <p>This can be changed in Space settings.</p>
                    <input type="text" />
                    <h4>Brief description</h4>
                    <p>Include a few keywords to show people what to expect if they join.</p>
                    <input type="text" />
                    <hr />
                    <button className="create_btn">Create</button>
                </div>
            </div>
            </div>
            )}
           
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