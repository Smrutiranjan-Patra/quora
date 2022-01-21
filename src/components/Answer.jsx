import "./css/answer.css";
import {Post}  from "../Post";
import { Avatar} from "@material-ui/core";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import { useState } from "react";
import {postData} from "../Post"
import CloseIcon from '@mui/icons-material/Close';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {AddQuestion}  from "./AddQuestion";
import { CreatePost } from "./CreatePost";

export const Answer = () => {
    const [modal,setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }
    if(modal){
        document.body.classList.add('active-modal')
    }else{
        document.body.classList.remove('active-modal')
    }
    // post show or hide
    const [status,setStatus] = useState(true);

    //
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

    return (
        <div className="answer">
            <div onClick={toggleModal} className="Quora_Box">
                <div className="quora_info">
                    <Avatar />
                    <h5>UserName</h5>
                </div>
                 <p className="quora_para">What do you want to ask or share? </p>
            </div>
            {/* modal */}
            {modal && (
            <div className="modal">
            <div className="overlay">
                <div className="modal-content">
                    <button className="close-modal" onClick={toggleModal}>
                       <CloseIcon/>
                    </button>
                        <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="wrapped label tabs example"
                                >
                                <Tab label="Add Question" />
                                <Tab label="Create Post" />
                        </Tabs>
                        <TabPanel value={value} index={0}>
                            <AddQuestion/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <CreatePost/>
                        </TabPanel>
                </div>
                </div>
            </div>
            )}
           
            {/* Post */}
            {/* {
                status?  <div className="post"><div/> :null
            } */}
                 {postData.map((d)=>(
                   <div className="post">
                         <div className="post_1stdiv">
                             <div className="post_info">
                                 <Avatar />
                                 <div className="post_header">
                                 <h5>{d.title} <span >Follow</span></h5>
                                 <p>Answered by <small >{d.answeredby} {" "} {d.timestamp} </small></p>
                             </div>
                             </div>
                             <div className="delete">
                                <button onClick={()=>setStatus(false)}> <ClearSharpIcon /></button>
                             </div>
                         </div>
                             <div className="post_body">
                                 <div className="post_ques">
                                     <h5>{d.Question}</h5>
                                     <p>{d.des}</p>
                                 </div>
                                 <img src={d.image} alt="" />
                             </div>
                             <div className="post_footer">
                                 <div className="footer_left">
                                     <div className="footer_arrow">
                                        <button className="fst_btn"> <ArrowUpwardOutlinedIcon /><span>{d.upVotes}</span></button>
                                         <button className="sec_btn"><ArrowDownwardOutlinedIcon /></button>
                                     </div>
                                    <button className="btn_right"> <RepeatOutlinedIcon />1</button>
                                    <button  className="btn_right"> <ChatBubbleOutlineOutlinedIcon />4</button>
                                 </div>
                                 <div className="icon_right">
                                    <button  className="btn_right"> <SendSharpIcon /></button>
                                     <button  className="btn_right"><MoreHorizOutlinedIcon /></button>
                                 </div>
                             </div>
                         </div>
                ))}
           
        </div>
    )
}