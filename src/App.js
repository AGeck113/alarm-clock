import React from "react";
import "./styles.css";

export default function App() {
  return <LocalTime />;
}

function LocalTime() {
  console.clear();
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();
  const displayHour = Add0(currentHour);
  const displayMinutes = Add0(currentMinutes);
  const displaySeconds = Add0(currentSeconds);
  const currentDay = currentDate.getDay();
  const displayDay = Day(currentDay);
  const currentdate = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const displayMonth = Month(currentMonth);
  const currentYear = currentDate.getFullYear();

  return (
    <article className="article">
      <p className="number">
        {displayHour}: {displayMinutes}.{displaySeconds}
      </p>
      <p className="date">
        {displayDay}/{currentdate}/{displayMonth}/{currentYear}
      </p>
    </article>
  );
}

function Add0(time) {
  if (time < 10) {
    time = `0${time}`;
  }
  return time;
}
function Day(day) {
  if (day == 1) {
    return "monday";
  } else if (day == 2) {
    return "Tuesday";
  } else if (day == 3) {
    return "Wednesday";
  } else if (day == 4) {
    return "Thursday";
  } else if (day == 5) {
    return "Friday";
  } else if (day == 6) {
    return "Saturday";
  } else if (day == 7) {
    return "Sunday";
  }
}
function Month(month) {
  if (month == 0) {
    return "Januar";
  } else if (month == 1) {
    return "Februar";
  } else if (month == 2) {
    return "March";
  } else if (month == 3) {
    return "April";
  } else if (month == 4) {
    return "May";
  } else if (month == 5) {
    return "June";
  } else if (month == 6) {
    return "July";
  } else if (month == 7) {
    return "August";
  } else if (month == 8) {
    return "September";
  } else if (month == 9) {
    return "October";
  } else if (month == 10) {
    return "November";
  } else if (month == 11) {
    return "Dezember";
  }
}
