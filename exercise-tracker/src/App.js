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

function App() {

  const [Auth, setAuth] = useState(false);

  function handleLoggedin(isAuthenticated) {
    if (isAuthenticated) {
      setAuth(true);
    }
    else {
      setAuth(false);
    }
  }

 return (
   <Router>
     <div className="container">
     <Navbar isLoggedin={handleLoggedin}/>
      <br/>
      {
        Auth && (
        <Routes>
          <Route path="/" element={<ExercisesList/>} exact/>
          <Route path="/edit/:id" element={<EditExercise/>} />
          <Route path="/create" element={<CreateExercise/>} />
          <Route path="/user" element={<CreateUser/>} />
          <Route path="/music" element={<PlayMusic/>} />
        </Routes>
        )
      }
     </div>
   </Router>
 );
}
 
export default App;