import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
 
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import PlayMusic from "./components/play-music.component";
import Stopwatch from './components/stopwatch.component';

function App() {

  const [Auth, setAuth] = useState(false);
  const [Minutes, setMinutes] = useState(0);

  function handleLoggedin(isAuthenticated) {
    if (isAuthenticated) {
      setAuth(true);
    }
    else {
      setAuth(false);
    }
  }

  function handleMinutes(mins) {
    setMinutes(mins);
  }

 return (
   <Router>
     <Routes>
      <Route path="/music" element={<PlayMusic/>} />
     </Routes>
     <div className="container-fullwidth">
     <Navbar isLoggedin={handleLoggedin} />
     </div>
      <br/>
      <div className="container-fluid">
      {
        Auth && (
        <Routes>
          <Route path="/" element={<ExercisesList/>} exact/>
          <Route path="/edit/:id" element={<EditExercise/>} />
          <Route path="/create" element={<CreateExercise sendMinutes={Minutes}/>} />
          <Route path="/user" element={<CreateUser/>} />
          <Route path="/stopwatch" element={<Stopwatch getMinutes={handleMinutes}/>} />
        </Routes>
        )
      }
     </div>
   </Router>
 );
}
 
export default App;