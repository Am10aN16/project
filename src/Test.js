import "./index.css";
import Records from "./Reports";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import dummy from "./images/lady.png";
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

const App = () => {

  const [stepsOne, setStepsOne] = useState(Records[0].steps_target);
  const [stepsTwo, setStepsTwo] = useState(Records[1].steps_target);
  const [stepsThree, setStepsThree] = useState(Records[2].steps_target);

  const [calorieOne, setCalorieOne] = useState(Records[0].calorieTarget);
  const [calorieTwo, setCalorieTwo] = useState(Records[1].calorieTarget);
  const [calorieThree, setCalorieThree] = useState(Records[2].calorieTarget);

  //functions for Steps Increment and Decrement Start
  const StepInc = () => {
    setStepsOne(stepsOne + 500);
  };

  const StepDec = () => {
    if (stepsOne > 500) {
      setStepsOne(stepsOne - 500);
    } else {
      setStepsOne(0);
    }
  };
  const StepInc1 = () => {
    setStepsTwo(stepsTwo + 500);
  };

  const StepDec1 = () => {
    if (stepsTwo > 500) {
      setStepsTwo(stepsTwo - 500);
    } else {
      setStepsTwo(0);
    }
  };
  const StepInc2 = () => {
    setStepsThree(stepsThree + 500);
  };

  const StepDec2 = () => {
    if (stepsThree > 500) {
      setStepsThree(stepsThree - 500);
    } else {
      setStepsThree(0);
    }
  };
  //functions for Steps Increment and Decrement End

    //functions for Calories Increment and Decrement Start
  const CalInc = () => {
    setCalorieOne(calorieOne + 100);
  };

  const CalDec = () => {
    if (calorieOne > 100) {
      setCalorieOne(calorieOne - 100);
    } else {
      setCalorieOne(0);
    }
  };
  const CalInc1 = () => {
    setCalorieTwo(calorieTwo + 100);
  };

  const CalDec1 = () => {
    if (calorieTwo > 100) {
      setCalorieTwo(calorieTwo - 100);
    } else {
      setCalorieTwo(0);
    }
  };
  const CalInc2 = () => {
    setCalorieThree(calorieThree + 100);
  };

  const CalDec2 = () => {
    if (calorieThree > 100) {
      setCalorieThree(calorieThree - 100);
    } else {
      setCalorieThree(0);
    }
  };

  //functions for Calories Increment and Decrement Start

  //functions for ProgressBar in Toolkit
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
           {/* record 1 from json data */}
          <div className="record" >
            <div className="box card mt-4 ">
              <ul>
                <li>
                  <img
                    src={Records[0].img}
                    alt=""
                    style={{ height: "50px", width: "50px" }}
                  />
                </li>
                <li style={{ textAlign: "center" }}>
                  {Records[0].name}
                  <br />
                  {Records[0].email}
                </li>

                <li style={{ width: 60, height: 60 }}>
                  <CircularProgressbar
                    value={70}
                    text={Records[0].steps_walked}
                    style={{ path: { stroke: "green" } }}
                  />
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
                    onClick={StepInc}
                      
                  >
                    <button></button>
                  </AddIcon>
                  {stepsOne}
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
                    <HowToRegIcon /> {Records[0].performedDate}
                  </p>
                  <br />
                  <p>
                    <DateRangeIcon />
                    {Records[0].scheduledDate}
                  </p>
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
                      label={() => Records[0].calorieIntake}
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
                    props={Records[0]}
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
                          Protein<span></span>
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
                          Carbs<span></span>
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
                  {calorieOne}
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
           {/* record  2 from json data */}
          <div className="record" >
            <div className="box card mt-4 ">
              <ul>
                <li>
                  <img
                    src={Records[1].img}
                    alt=""
                    style={{ height: "50px", width: "50px" , "borderRadius":"50%"}}
                  />
                </li>
                <li style={{ textAlign: "center" }}>
                  {Records[1].name}
                  <br />
                  {Records[1].email}
                </li>

                <li style={{ width: 60, height: 60 }}>
                  <CircularProgressbar
                    value={70}
                    text={Records[1].steps_walked}
                    style={{ path: { stroke: "green" } }}
                  />
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
                    onClick={StepInc1}
                      
                  >
                    <button></button>
                  </AddIcon>
                  {stepsTwo}
                  <br />
                  target
                  <RemoveIcon
                    style={{
                      background: "#101317",
                      borderRadius: "8px",
                      height: "16px",
                      width: "30px",
                    }}
                    onClick={StepDec1}
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
                    <HowToRegIcon /> {Records[1].performedDate}
                  </p>
                  <br />
                  <p>
                    <DateRangeIcon />
                    {Records[1].scheduledDate}
                  </p>
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
                      label={() => Records[1].calorieIntake}
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
                    props={Records[1]}
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
                          Protein<span></span>
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
                          Carbs<span></span>
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
                    onClick={CalInc1}
                  >
                    <button></button>
                  </AddIcon>
                  {calorieTwo}
                  <br />
                  target
                  <RemoveIcon
                    style={{
                      background: "#101317",
                      borderRadius: "8px",
                      height: "16px",
                      width: "30px",
                    }}
                    onClick={CalDec1}
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
           {/* record 3 from json data */}
          <div className="record" >
            <div className="box card mt-4 ">
              <ul>
                <li>
                  <img
                    src={Records[2].img}
                    alt=""
                    style={{ height: "50px", width: "50px" ,"borderRadius":"50%" }}
                  />
                </li>
                <li style={{ textAlign: "center" }}>
                  {Records[2].name}
                  <br />
                  {Records[2].email}
                </li>

                <li style={{ width: 60, height: 60 }}>
                  <CircularProgressbar
                    value={70}
                    text={Records[2].steps_walked}
                    style={{ path: { stroke: "green" } }}
                  />
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
                    onClick={StepInc2}
                      
                  >
                    <button></button>
                  </AddIcon>
                  {stepsThree}
                  <br />
                  target
                  <RemoveIcon
                    style={{
                      background: "#101317",
                      borderRadius: "8px",
                      height: "16px",
                      width: "30px",
                    }}
                    onClick={StepDec2}
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
                    <HowToRegIcon /> {Records[2].performedDate}
                  </p>
                  <br />
                  <p>
                    <DateRangeIcon />
                    {Records[2].scheduledDate}
                  </p>
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
                      label={() => Records[2].calorieIntake}
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
                    props={Records[2]}
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
                          Protein<span></span>
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
                          Carbs<span></span>
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
                    onClick={CalInc2}
                  >
                    <button></button>
                  </AddIcon>
                  {calorieThree}
                  <br />
                  target
                  <RemoveIcon
                    style={{
                      background: "#101317",
                      borderRadius: "8px",
                      height: "16px",
                      width: "30px",
                    }}
                    onClick={CalDec2}
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
      
    </div>
  );
};

export default App;
