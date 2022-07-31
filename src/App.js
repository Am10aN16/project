import "./index.css";
import Records from "./Reports";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import dummy from "./images/ishi.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PieChart } from "react-minimal-pie-chart";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ReactTooltip from "react-tooltip";
import { useState } from "react";
// import Reports from "./Reports";

const App = () => {

  const[reports,setReports] =useState(Records());
  const [steps, setSteps] = useState(4000);
  const [calorie, setCalorie] = useState(2500);

  const StepInc = (index) => {
    // console.log(index);
   let newReport = reports;
  //  console.log(newReport);
  //  console.log(newReport[index]);
   newReport[index].steps_target = newReport[index].steps_target+1; 
    setReports(newReport)
    

  };

  console.log(reports);

  const StepDec = () => {
    if (steps > 500) {
      setSteps(steps - 500);
    } else {
      setSteps(0);
    }
  };

  const CalInc = () => {
    setCalorie(calorie + 100);
  };

  const CalDec = () => {
    if (calorie > 100) {
      setCalorie(calorie - 100);
    } else {
      setCalorie(0);
    }
  };

  const Progress = ({ done }) => {
    return (
      <div className="progress">
        <div
          className="progress-done"
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        >
          {done}g
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="types">

        <p>
          <DirectionsWalkIcon /> Steps
        </p>
        <p>

          <FitnessCenterIcon /> Workout
        </p>
        <p>

          <RoomServiceOutlinedIcon /> Nutrition
        </p>
      </div>

      {reports.map((record, index) => {
        return (
          <div className="record" key={record.userId} >
            <div className="box card mt-4 ">
              <ul>
                <li>
                  <img
                    src={dummy}
                    alt=""
                    style={{ height: "50px", width: "50px" }}
                  />
                </li>
                <li style={{ textAlign: "center" }}>
                  {record.name}
                  <br />
                  {record.email}
                </li>

                <li style={{ width: 60, height: 60 }}>
                  <CircularProgressbar
                    value={70}
                    text={record.steps_target}
                    style={{ path: { stroke: "green" } }}
                  />{" "}
                </li>
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
                      borderRadius: "8px",
                      height: "16px",
                      width: "30px",
                    }}
                    
                    key={index}  
                  >
                    <button onClick={()=> {StepInc(index)}}></button>
                  </AddIcon>
                  {record.steps_target}
                  <br />
                  target
                  <RemoveIcon
                    style={{
                      background: "#101317",
                      borderRadius: "8px",
                      height: "16px",
                      width: "30px",
                    }}
                    onClick={StepDec}
                  >
                    <button></button>
                  </RemoveIcon>
                </li>
                <li
                  style={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p>
                    <HowToRegIcon /> {record.performedDate}
                  </p>
                  <br />
                  <p>
                    <DateRangeIcon />
                    {record.scheduledDate}
                  </p>{" "}
                </li>
                <li>
                  <KeyboardArrowRightIcon
                    style={{
                      background: "#101317",
                      borderRadius: "8px",
                      height: "60px",
                    }}
                  />
                </li>
                <li>
                  <a data-tip data-for="happyFace" href="http">
                    <PieChart
                      data={[
                        { title: "CARBS", value: 15, color: " #F5C90F" },
                        { title: "FATS", value: 15, color: "#03C7FC" },
                        { title: "PROTIEN", value: 20, color: " #F45C84" },
                      ]}
                      lineWidth={25}
                      label={() => record.calorieIntake}
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
                    props={record}
                    place="bottom"
                    aria-haspopup="true"
                    id="happyFace"
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
                          Protein<span></span>{" "}
                        </p>
                        <Progress done="45" />
                      </li>
                      <li style={{ display: "flex", flexDirection: "column" }}>
                        <p>
                          Fats <span></span>
                        </p>
                        <Progress done="30" style={{ background: "#F45C84" }} />
                      </li>
                      <li style={{ display: "flex", flexDirection: "column" }}>
                        <p>
                          Carbs<span></span>{" "}
                        </p>
                        <Progress done="50" />
                      </li>
                    </ul>
                  </ReactTooltip>
                </li>
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
                      borderRadius: "8px",
                      height: "16px",
                      width: "30px",
                    }}
                    onClick={CalInc}
                  >
                    <button></button>
                  </AddIcon>
                  {calorie}
                  <br />
                  target
                  <RemoveIcon
                    style={{
                      background: "#101317",
                      borderRadius: "8px",
                      height: "16px",
                      width: "30px",
                    }}
                    onClick={CalDec}
                  >
                    <button></button>
                  </RemoveIcon>
                </li>
                <li>
                  <KeyboardArrowRightIcon
                    style={{
                      background: "#101317",
                      borderRadius: "8px",
                      height: "60px",
                    }}
                  />
                </li>
                <li>
                  <NotificationsNoneOutlinedIcon
                    style={{
                      background: "#36F5C7",
                      borderRadius: "8px",
                      height: "40px",
                      width: "40px",
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
