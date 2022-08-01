import Aman from "./images/aman.png";
import Nan from "./images/nan.jpg";

const Reports = () => {
  return [
    {
      userId: 1,
      name: "Ishika Gupta",
      email: "ishikagupta@gmail.com",
      img: `${Nan}`,
      steps_walked: "2571",
      steps_target: 4000,
      performedDate: "15-6-2022",
      scheduledDate: "22-6-2022",
      calorieIntake: "2571 calories",
      calorieTarget: 2500,
      proteinConsumed: 45,
      proteinTarget: 70,
      carbConsumed: 50,
      carbTarget: 70,
      fatConsumed: 30,
      fatTarget: 70,
      feedback: true
    },
    {
      userId: "2",
      name: "Aman Poddar",
      email: "amanpoddar@gmail.com",
      img: `${Aman}`,
      steps_walked: "2547 ",
      steps_target: 4500,
      performedDate: "18-7-2022",
      scheduledDate: "1-7-2022",
      calorieIntake: "2500 calories",
      calorieTarget: 2700,
      proteinConsumed: 45,
      proteinTarget: 70,
      carbConsumed: 50,
      carbTarget: 70,
      fatConsumed: 30,
      fatTarget: 70,
      feedback: true
    },
    {
      userId: "3",
      name: "Nandini Gupta",
      email: "nandinigupta@gmail.com",
      img: `${Nan}`,
      steps_walked: "2797 ",
      steps_target: 5000,
      performedDate: "24-6-2022",
      scheduledDate: "30-6-2022",
      calorieIntake: "2591 calories",
      calorieTarget: 3000,
      proteinConsumed: 45,
      proteinTarget: 70,
      carbConsumed: 50,
      carbTarget: 70,
      fatConsumed: 30,
      fatTarget: 70,
      feedback: false
    },
  ];
};

export default Reports;
