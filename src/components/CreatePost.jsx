import { Avatar} from "@material-ui/core";
import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export const CreatePost = () => {
    return (
        <>
            <div className="user_icon">
        <Avatar />
        <ArrowRightSharpIcon/>
        <button><PeopleOutlineOutlinedIcon/>Public<KeyboardArrowDownOutlinedIcon/></button>
        </div>
         <TextareaAutosize
         aria-label="minimum height"
         minRows={3}
         placeholder="Start your question with what, How, why, etc"
         style={{ width: 500 ,borderRadius:5,outline:'none'}}
         />
        </>
    
    )
}