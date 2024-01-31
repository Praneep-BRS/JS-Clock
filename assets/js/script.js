"use strict";

function displayClock() {
  const hoursHand = document.querySelector(".hours-hand");
  const minutesHand = document.querySelector(".minutes-hand");
  const secondsHand = document.querySelector(".seconds-hand");
  const dateString = document.getElementById("date-string");
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const formattedDate = date.toDateString();

  // Calculate rotations
  const hoursRotation = (360 / 12) * (hours % 12) + (360 / 12) * (minutes / 60);
  const minutesRotation = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secondsRotation = (360 / 60) * seconds;

  // Apply rotations to clock hands
  hoursHand.style.transform = `rotate(${hoursRotation}deg)`;
  minutesHand.style.transform = `rotate(${minutesRotation}deg)`;
  secondsHand.style.transform = `rotate(${secondsRotation}deg)`;

  // Display formatted date and time
  const formattedHours = hours === 0 ? "00" : String(hours).padStart(2, "0");
  dateString.innerHTML = `<p>Current date and time: <span>${formattedDate}, ${formattedHours}:${String(
    minutes,
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")} </span> </p>`;
}

setInterval(displayClock, 1000);

function setTheme(theme) {
  document.documentElement.style.setProperty("--primary_color", theme);
}
