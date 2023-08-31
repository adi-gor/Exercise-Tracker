import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = (props) => {
  const [Exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: props.sendMinutes,
    date: new Date(),
  });

  const [Users, setUsers] = useState([])

  const onSubmit = () => {
    axios
      .post("https://exercise-tracker-backend-fnon.onrender.com/exercises/add", Exercise)
  };

  useEffect( () => {
     axios
      .get("https://exercise-tracker-backend-fnon.onrender.com/users")
      .then(res => {
        res.data.map(user => {
          setUsers(oldArray => [...oldArray, user.username])
          return 0;
        })
      })

      
  }, []);


  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={Exercise.username}
            onChange={(e) =>
              setExercise({ ...Exercise, username: e.target.value })
            }
          >
            {Users.map(function (user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={Exercise.description}
            onChange={(e) =>
              setExercise({ ...Exercise, description: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={Exercise.duration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={Exercise.date}
              onChange={(e) =>
                setExercise({ ...Exercise, date: e.target.value })
              }
            />
          </div>
        </div>

        <div className="form-group" style={{paddingTop: "10px"}}>
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};
export default CreateExercise;