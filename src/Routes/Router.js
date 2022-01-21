import {Routes, Route} from 'react-router-dom';
import {Header} from '../components/header';
import {Register} from '../components/Register';
import {HomePage} from '../Pages/HomePage';
import {NewPage} from '../Pages/NewUser';
import {MainQuora} from '../components/MainQuora';
import {AnswerPage} from '../Pages/AnswerPage';
function Router () {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="/" element={<Register />} />
        <Route path="/profile/:email" element={<HomePage />} />
        <Route path="/createUser/:email" element={<NewPage />} />
        <Route path="/answers/:id" element={<AnswerPage />} />
      </Routes>
    </div>
  );
}

export {Router};

// let data = [{
//     // name:"",
//     avatar:"",
//     title:"",
//     brief:"",
//     createdAt:"",
//     postedBy:"",
//     question:"",
//     description:"",
//     imagesUrl:[""],
//     views:Number,
//     upVotes:Number,
//     downVotes:Number,
//     comments:Number,
//     shares:Number,

// }]
