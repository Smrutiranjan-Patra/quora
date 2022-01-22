import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/header";
import { saveUser } from "../Redux/actions";
import axios from "axios";

export const NewPage = () => {
  const { email } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: email
  });

  useEffect(() => {
    axios
      .post(`https://peaceful-beach-55920.herokuapp.com/users`, user)
      .then((res) => {
        console.log("data:", res.data);

        navigate(`/profile/${email}`);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, []);
  return null;
};
