import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import { saveUser } from "../Redux/actions";
import axios from "axios";
import { MainQuora } from "../components/MainQuora";
import { QApage } from "./QApage";
import { shallowEqual, useSelector } from "react-redux";
import { AnswerModal } from "../components/AnswerModal";

export const HomePage = () => {
  return (
    <>
      <Header />
      <MainQuora />
      {/* <QApage /> */}
      {/* <AnswerModal /> */}
    </>
  );
};
