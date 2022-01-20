import "./css/answer.css";
import {Post}  from "../Post";
import { Avatar } from "@material-ui/core";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import {postData} from "../Post"

export const Answer = () => {
   
    return (
        <div className="answer">
            <div className="Quora_Box">
                <div className="quora_info">
                    <Avatar />
                    <h5>UserName</h5>
                </div>
                 <p className="quora_para">What do you want to ask or share? </p>
            </div>
            {/* Post */}
            {postData.map(d=>(
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
                        <ClearSharpIcon />
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
                                <ArrowUpwardOutlinedIcon /><span>{d.upVotes}</span>
                                <ArrowDownwardOutlinedIcon />
                            </div>
                            <RepeatOutlinedIcon />1{" "}{" "}
                            <ChatBubbleOutlineOutlinedIcon />4
                        </div>
                        <div className="icon_right">
                            <SendSharpIcon />{" "}{" "}
                            <MoreHorizOutlinedIcon />
                        </div>
                    </div>
                </div>
            ))}
           
        </div>
    )
}