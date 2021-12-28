const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const dailyTimeFrame = document.getElementById("daily-timeFrames-btn");
const weeklyTimeFrame = document.getElementById("weekly-timeFrames-btn");
const monthlyTimeFrame = document.getElementById("monthly-timeFrames-btn");

//get all the timeFrames info elements
const currentWorkHour = document.getElementById("current-work-hour");
const currentPlayHour = document.getElementById("current-play-hour");
const currentStudyHour = document.getElementById("current-study-hour");
const currentExerciseHour = document.getElementById("current-exercise-hour");
const currentSocialHour = document.getElementById("current-social-hour");
const currentSelfCareHour = document.getElementById("current-self-care-hour");
const current = [
  currentWorkHour,
  currentPlayHour,
  currentStudyHour,
  currentExerciseHour,
  currentSocialHour,
  currentSelfCareHour,
];
//previous timeFrames
const previousWorkHour = document.getElementById("previous-work-hour");
const previousPlayHour = document.getElementById("previous-play-hour");
const previousStudyHour = document.getElementById("previous-study-hour");
const previousExerciseHour = document.getElementById("previous-exercise-hour");
const previousSocialHour = document.getElementById("previous-social-hour");
const previousSelfCareHour = document.getElementById("previous-self-care-hour");

const previous = [
  previousWorkHour,
  previousPlayHour,
  previousStudyHour,
  previousExerciseHour,
  previousSocialHour,
  previousSelfCareHour,
];
dailyTimeFrame.addEventListener("click", () => {
  //get data for daily timeFrame
  const dailyData = [];
  data.forEach((el) => {
    dailyData.push({ title: el.title, timeFrames: el.timeframes.daily });
  });
  console.log(dailyData);

  for (let i = 0; i < dailyData.length; i++) {
    current[i].innerHTML = `${dailyData[i].timeFrames.current}${
      dailyData[i].timeFrames.current <= 1 ? "hr" : "hrs"
    }`;
    previous[i].innerHTML = `Yesterday - ${dailyData[i].timeFrames.previous}${
      dailyData[i].timeFrames.previous <= 1 ? "hr" : "hrs"
    } `;
  }
});

weeklyTimeFrame.addEventListener("click", () => {
  //get data for weekly timeFrame
  const weeklyData = [];
  data.forEach((el) => {
    weeklyData.push({ title: el.title, timeFrames: el.timeframes.weekly });
  });
  for (let i = 0; i < weeklyData.length; i++) {
    current[i].innerHTML = `${weeklyData[i].timeFrames.current} ${
      weeklyData[i].timeFrames.current <= 1 ? "hr" : "hrs"
    }`;
    previous[i].innerHTML = `Last week - ${weeklyData[i].timeFrames.previous} ${
      weeklyData[i].timeFrames.current <= 1 ? "hr" : "hrs"
    } `;
  }
});

monthlyTimeFrame.addEventListener("click", () => {
  //get data for monthly timeFrame
  const monthlyData = [];
  data.forEach((el) => {
    monthlyData.push({ title: el.title, timeFrames: el.timeframes.monthly });
  });

  for (let i = 0; i < monthlyData.length; i++) {
    current[i].innerHTML = `${monthlyData[i].timeFrames.current}${
      monthlyData[i].timeFrames.current <= 1 ? "hr" : "hrs"
    }`;
    previous[i].innerHTML = `Last month - ${
      monthlyData[i].timeFrames.previous
    }${monthlyData[i].timeFrames.current <= 1 ? "hr" : "hrs"}`;
  }
});
