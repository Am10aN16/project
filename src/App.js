import { useEffect, useState } from "react";
import "./index.css";
import Records from "./Reports";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PieChart } from "react-minimal-pie-chart";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import HowToRegIcon from "@mui/icons-material/HowToReg";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReactTooltip from "react-tooltip";



const App = () => {
  //this usestate is used to deal with the change of state after inc and dec of the
  // data using the function StepInc it first save all the current data in empty array changed the
  //current data with updated data using its setReports \

  const [reports, setReports] = useState([]);

//this stepInc function takes index , type
  const StepInc = (index, type, val) => {
    let actionArray = [...reports];

    if (val === "step") {
      let prevvalue = actionArray[index].steps_target;
      if(prevvalue<500){return prevvalue= 0}
      actionArray[index].steps_target =
        type === "inc" ? prevvalue + 500 : prevvalue - 500;
    } else {
      let prevvalue = actionArray[index].calorieTarget;
      if(prevvalue<100){return prevvalue= 0}
      actionArray[index].calorieTarget =
        type === "inc" ? prevvalue + 100 : prevvalue - 100;
    }
    setReports(actionArray);
  };


//The ButtonWorkout function is used to check whether the feedback is true or false 
//if true then turn the workout button to be red and right button changed with exclaimation
  const ButtonWorkout = ({index}) => {
    let newReport = reports;
    if (newReport[index].feedback === true) {
      return (
      
          <PriorityHighIcon
            style={{
              background: "red",
              borderRadius: "8px",
              height: "60px",
              width:"30px"
            }}
          />
       
      );
    } else {
    return ( <KeyboardArrowRightIcon
      style={{
        background: "#101317",
        borderRadius: "8px",
        height: "60px",
        width:"30px"
      }}
    /> )
    }
  };

  //The DateMatch function is used here it first take the current date and then the scheduled date
  //from json data and matches if scheduled date of user is equal to current then turns red
   const DateMatch = ({index}) => {
   let newReport = reports;
   let date = new Date();
   let currentDate= date.getDate()
   let currentMonth = date.getMonth()
   let currentYear = date.getFullYear()
   let today = `${currentDate}-${currentMonth}-${currentYear}`;
 
  
   if (newReport[index].scheduledDate === today){
   return (
   <p style={{"width":"100px","height":"30px","backgroundColor":"red","borderRadius":"8px"}}>
       <DateRangeIcon style={{"backgroundColor":" red"}} /> {newReport[index].scheduledDate}
    </p>)
   }else{
    return (<p>
      <DateRangeIcon />{newReport[index].scheduledDate}
   </p>)
   }
  }

  //This Progress function is called under the Tooltip for the progressive 
  const Progress = ({done}) => {
    return (
      <div className="progress">
        <div
          className="progress-done"
          style={{
            opacity: 1,
            width: `${done}%`,
            background:"#F45C84"
          }}
        >
          {done}g
        </div>
      </div>
    );
  };

  //UseEffect is called to render the records updated on DOM by increment and decrement of above and 
  //sets state to the upated DOM
  useEffect(() => {
    let data = Records();
    setReports(data);
  }, []);



  return (
    <div className="App">
      <div className="types">
        <p>
          <DirectionsWalkIcon style={{"backgroundColor":" #101317"}}/> Steps
        </p>
        <p>
          <FitnessCenterIcon style={{"backgroundColor":" #101317"}}/> Workout
        </p>
        <p>
          <RoomServiceOutlinedIcon style={{"backgroundColor":" #101317"}}/> Nutrition
        </p>
      </div>

{/* Here we have mappping the data using array.map method so that we don't have to call one json element 
each because it takes too much time and space  */}
      {reports.map((val, index) => {
        return (
          <div className="record rounded" key={val.userId}>
            <div className="box card mt-4 rounded" >
              <ul>

              {/* this list item consist of user img from the json data */}

                <li>
                  <img
                    src={val.img}
                    alt=""
                    style={{ height: "50px", width: "50px","borderRadius":"50%" ,marginTop:"5px" }}
                  />
                </li>

              {/* this list items shows username and email using json data */}

                <li style={{ textAlign: "center",
                      "marginTop":"10px" }}>
                  {val.name}
                  <br />
                  {val.email}
                </li>

              {/* this list item shows the circular progressive bar component to show
              steps walked by the users respectively */}

                <li style={{ width: 60, height: 60,
                      "marginTop":"5px" }}>
                  <CircularProgressbar
                    value={60} counterClockwise="true"
                    text={val.steps_walked}
                    // style={}
                  />{" "}
                </li>


              {/* this list item shows the steps target with add and sub button which contains
              an onclick function through which it calls function for increment and decrement
              which are defined above in code */}


                <li
                  style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <AddIcon
                    style={{
                      background: "#101317",
                      borderRadius: "4px",
                      height: "16px",
                      width: "30px",
                      cursor: "pointer",
                      marginBottom:"2px"
                    }}
                    key={index}
                    onClick={() => {
                      StepInc(index, "inc", "step");
                    }}
                  />
                  {val.steps_target}
                  <br />
                  target
                  <RemoveIcon
                    style={{
                      background: "#101317",
                      borderRadius: "4px",
                      height: "16px",
                      width: "30px",
                      cursor: "pointer",
                      marginTop:"2px"
                    }}
                    onClick={() => {
                      StepInc(index, "dnc", "step");
                    }}
                  >
                    <button></button>
                  </RemoveIcon>
                </li>

              {/* this list item contains the dates section and a function button which
              checks the today's date with scheduled date in json data of the user */}

                <li
                  style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p>
                    <HowToRegIcon /> {val.performedDate}
                  </p>
                  <br />
                  <DateMatch index={index} />
                </li>

                {/* this list item contains custom function button defined above for checking
                feedback and returning the button according to the condtion given */}

                <li>
                <ButtonWorkout index={index}/>
                </li>

                {/* this  list item conatins the piechart component and tooltip component 
                installed using npm and with their inbuilt features we made the section of 
                piechart and tooltip*/}

                <li>
                  <a data-tip data-for="happyFace" href="ak" >
                    <PieChart
                      data={[
                        { title: "CARBS", value: 15, color: " #F5C90F" },
                        { title: "FATS", value: 15, color: "#03C7FC" },
                        { title: "PROTIEN", value: 20, color: " #F45C84" },
                      ]}
                      lineWidth={25}
                      label={() => val.calorieIntake}
                      labelStyle={{
                        fontSize: "10px",
                        fontFamily: "sans-serif",
                        fill: "#E38627",
                      }}
                      labelPosition={0}
                      style={{ height: "57px", width: "57px" }}
                    ></PieChart>
                  </a>
                  <ReactTooltip
                 
                  place="bottom"
                    props={val}
                    // aria-haspopup="true"
                    id="happyFace"
                    effect= "float"
                    condition= "false"
                    
                  >
                    <ul style={{ display: "flex", flexDirection: "column" }}>
                      <li
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <p>
                          Protein<span></span>
                        </p>
                        <Progress done="45" style={{background:"#F45C84 !important"}} />
                      </li>
                      <li style={{ display: "flex", flexDirection: "column" }}>
                        <p>
                          Fats <span></span>
                        </p>
                        <Progress done="30" style={{ background: "#F45C84" }} />
                      </li>
                      <li style={{ display: "flex", flexDirection: "column" }}>
                        <p>
                          Carbs<span></span>
                        </p>
                        <Progress done="50" />
                      </li>
                    </ul>
                  </ReactTooltip>
                </li>

                {/* this list item deals with the calorie target data in json and  two add and sub button to increment
                and decrement the json data temporarily using inc function defined above */}

                <li
                  style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <AddIcon
                    style={{
                      background: "#101317",
                      borderRadius: "4px",
                      height: "16px",
                      width: "30px",
                      cursor: "pointer",
                      marginBottom:"2px"
                      
                    }}
                    onClick={() => {
                      StepInc(index, "inc", "cal");
                    }}
                  >
                    <button></button>
                  </AddIcon>
                  {val.calorieTarget}
                  <br />
                  target
                  <RemoveIcon
                    style={{
                      background: "#101317",
                      borderRadius: "4px",
                      height: "16px",
                      width: "30px",
                      cursor: "pointer",
                      marginTop:"2px"
                    }}
                    onClick={() => {
                      StepInc(index, "dec", "cal");
                    }}
                  >
                    <button></button>
                  </RemoveIcon>
                </li>

                {/* this list item contains the right arrow button  */}

                <li>
                  <KeyboardArrowRightIcon
                    style={{
                      background: "#101317",
                      borderRadius: "8px",
                      height: "60px",
                      width:"30px"
                    }}
                  />
                </li>

                 {/* this list item contains the notification button  */}

                <li>
                  <NotificationsNoneOutlinedIcon
                    style={{
                      background: "#36F5C7",
                      borderRadius: "8px",
                      height: "40px",
                      width: "40px",
                      "color":"#000000" ,
                      "padding":"10px",
                      "marginTop":"10px"
                       }}
                  />
                </li>

              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
