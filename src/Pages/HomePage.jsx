import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Header } from "../components/header";
import { saveUser } from "../Redux/actions";
import axios from "axios";
import { MainQuora } from "../components/MainQuora";
import { QApage } from "./QApage";
import { AnswerModal } from "../components/AnswerModal";
export const HomePage = () => {
  const [user, setUser] = useState(null);
  const { email } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:2333/users/profile/${email}`)
      .then((res) => {
        console.log("data:", res.data);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.user);
        setUser(res.data.user);
        dispatch(saveUser(res.data.user));
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, []);
  return !user ? null : (
    <>
      {/* <Header />
      <MainQuora /> */}
      <QApage />
      {/* <AnswerModal /> */}
    </>
  );
};
