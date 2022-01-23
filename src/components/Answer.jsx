import "./css/answer.css";
import { Post } from "../Post";
import { Avatar } from "@material-ui/core";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import { useEffect, useState } from "react";
import { postData } from "../Post";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Textarea, Button, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getPostData, postQue } from "../Redux/actions";

export const Answer = () => {
  const data = useSelector((store) => store.posts);

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  //   const [data, setData] = useState([]);
  // post show or hide
  const [status, setStatus] = useState(true);
  const [form, setForm] = useState({
    title: "DAFSDFA",
    answeredby: "ADFADF",
    Question: "",
    des: "",
    image: "",
    upVotes: 0
  });
  const dispatch = useDispatch();
  console.log("why rerneders");
  useEffect(() => {
    dispatch(getPostData());
  }, []);

  const handleSubmit = () => {
    dispatch(postQue(form));
    // dispatch(getPostData());
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  };
  // console.log("data", data);
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
                <CloseIcon />
              </button>
              <div className="header_modal">
                <button>Add Question</button>
                <button>Add Post</button>
              </div>
              <div className="section">
                <h4>Tips on getting good answers quickly</h4>
                <ul>
                  <li>Make sure your question has not been asked already</li>
                  <li>Keep your question short and to the point</li>
                  <li>Double-check grammar and spelling</li>
                </ul>
              </div>
              <div className="user_icon">
                <Avatar />
                <ArrowRightSharpIcon />
                <button>
                  <PeopleOutlineOutlinedIcon />
                  Public
                  <KeyboardArrowDownOutlinedIcon />
                </button>
              </div>
              <Input
                name="image"
                placeholder="upload image url"
                fontSize="15"
                p="8"
                w="100%"
                h="50px"
                color="black"
                value={form.image}
                onChange={handleChange}
              ></Input>
              <Textarea
                name="Question"
                fontSize="15"
                p="8"
                w="100%"
                h="50px"
                type="text"
                value={form.Question}
                placeholder="Enter the question title here"
                onChange={handleChange}
              ></Textarea>
              <Textarea
                // className="ques-type"
                name="des"
                value={form.des}
                fontSize="15"
                p="8"
                w="100%"
                h="150px"
                type="text"
                placeholder="Enter Description here"
                onChange={handleChange}
              />
              <Button
                p="19"
                bgColor="red"
                color="black"
                border="black"
                textAlign="center"
                fontSize="16"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Post */}
      {/* {
                status?  <div className="post"><div/> :null
            } */}
      {data.map((d) => (
        <div className="post">
          <div className="post_1stdiv">
            <div className="post_info">
              <Avatar />
              <div className="post_header">
                <h5>
                  {d.title} <span>Follow</span>
                </h5>
                <p>
                  Posted by{" "}
                  <small>
                    {d.answeredby} {d.timestamp}{" "}
                  </small>
                </p>
              </div>
            </div>
            <div className="delete">
              <button onClick={() => setStatus(false)}>
                {" "}
                <ClearSharpIcon />
              </button>
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
                <button className="fst_btn">
                  {" "}
                  <ArrowUpwardOutlinedIcon />
                  <span>{d.upVotes}</span>
                </button>
                <button className="sec_btn">
                  <ArrowDownwardOutlinedIcon />
                </button>
              </div>
              <button className="btn_right">
                {" "}
                <RepeatOutlinedIcon />1
              </button>
              <button className="btn_right">
                {" "}
                <ChatBubbleOutlineOutlinedIcon />4
              </button>
            </div>
            <div className="icon_right">
              <button className="btn_right">
                {" "}
                <SendSharpIcon />
              </button>
              <button className="btn_right">
                <MoreHorizOutlinedIcon />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
