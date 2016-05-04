$(document).ready(function() {
$("#pressStart").show();
$("#pressPause").hide();
$("#pressResume").hide();
$("#pressStop").hide();
$("#pressReset").hide();
$("#startBreak").hide();
$("#pauseBreak").hide();
$("#resumeBreak").hide();
$("#stopBreak").hide();
$("#resetBreak").hide();
var initialActivityMins; //Placeholder for user's desired activity mins
var initialActivitySecs; //Placeholder for activity seconds. Without it, seconds change weird when clock resets
var initialBreakMins; //Placeholder for user's desired break mins
var initialBreakSecs; //Placeholder for break seconds. Without it, seconds change weird when clock resets
var activityTimeVal; //Amount of time to do activity
var breakTimeVal; //Amount of break time
var checkActivityMins = $("#activityMins").text(); //Placeholder for user's desired activity time
var checkBreakMins = $("#breakMins").text(); //Placeholder for user's desired break time
var seconds = 59; //Seconds used for countdown
var seconds2 = 59; //Seconds used for countdown
var activityCountdown; // Begins activity countdown
var breakCountdown; //Begins break countdown
$("#addActivityTime").click(addActivityTime);
$("#minusActivityTime").click(minusActivityTime);
$("#pressStart").click(startActivityTimer);
$("#pressPause").click(pauseActivity);
$("#pressResume").click(resumeActivity);
$("#pressStop").click(stopActivity);
$("#pressReset").click(resetActivity);
$("#addBreakTime").click(addBreakTime);
$("#minusBreakTime").click(minusBreakTime);
$("#startBreak").click(startBreakTimer);
$("#pauseBreak").click(pauseBreak);
$("#resumeBreak").click(resumesBreak);
$("#stopBreak").click(stopBreak);
$("#resetBreak").click(resetBreak);

function addActivityTime() { //Adds one minute to activity time
  activityTimeVal = $("#activityMins").text(); //Refers to 25 min in h1 tag
  activityTimeVal = parseInt(activityTimeVal); //Changes 25 from string to number
  activityTimeVal = addOne(activityTimeVal); //Callback function to add one minute
  if (activityTimeVal < 10) { //Concats "0" in front of single digit nums
    activityTimeVal = "0".concat(activityTimeVal);
    $("#activityMins").text(activityTimeVal);
  }
  $("#activityMins").text(activityTimeVal); //Displays activity time
  checkActivityMins = $("#activityMins").text(); //Sets checkActivityMins to user's ideal time
}

function minusActivityTime() { //Subtracts one minute from activity time
  activityTimeVal = $("#activityMins").text(); //Refers to 25 min in h1 tag
  activityTimeVal = parseInt(activityTimeVal); //Changes 25 from string to number
  activityTimeVal = subtractOne(activityTimeVal); //Callback function to subtract one minute LINE
  if (activityTimeVal === 5) { //Limits minimum activity time to 5 minutes
    //HERE HERE HERE CHANGE TO 5
    activityTimeVal = "0".concat(activityTimeVal);
    return $("#activityMins").text(activityTimeVal);
  }
  if (activityTimeVal < 10) { //Concats "0" in front of single digit nums
    activityTimeVal = "0".concat(activityTimeVal);
    $("#activityMins").text(activityTimeVal);
  }
  $("#activityMins").text(activityTimeVal); //Displays activity time
  checkActivityMins = $("#activityMins").text(); //Sets checkActivityMins to user's ideal time.
}

function addBreakTime() { //Adds one minute to activity time
  breakTimeVal = $("#breakMins").text(); //Refers to 5 min in h1 tag
  breakTimeVal = parseInt(breakTimeVal); //Changes 5 from string to number
  if (breakTimeVal === 30) { // Limits max break time to 30 minutes
    return $("#breakMins").text(breakTimeVal);
  }
  breakTimeVal = addOne(breakTimeVal); //Callback function to add one minute
  if (breakTimeVal < 10) { //Concats "0" in front of single digit nums
    breakTimeVal = "0".concat(breakTimeVal);
    $("#breakMins").text(breakTimeVal);
  }
  $("#breakMins").text(breakTimeVal); //Displays break time
  checkBreakMins = $("#breakMins").text();
}

function minusBreakTime() { //Subtracts one minute from activity time
  breakTimeVal = $("#breakMins").text(); //Refers to 5 min in h1 tag
  breakTimeVal = parseInt(breakTimeVal); //Changes 5 from string to number
  if (breakTimeVal === 1) { //Limits minimum break time to 1 minute
    breakTimeVal = "0".concat(breakTimeVal);
    return $("#breakMins").text(breakTimeVal);
  }
  breakTimeVal = subtractOne(breakTimeVal); //Callback function to subtract one minute
  if (breakTimeVal < 10) { //Concats "0" in front of single digit nums
    breakTimeVal = "0".concat(breakTimeVal);
    $("#breakMins").text(breakTimeVal);
  }
  $("#breakMins").text(breakTimeVal); //Displays break time
  checkBreakMins = $("#breakMins").text(); //Sets checkBreakMins to user's ideal time
}

function startActivityTimer() { //Initiates timer
  $("#pressPause").show();
  $("#pressStop").show();
  $("#pressStart").hide();
  $("#pressResume").hide();
  $("#pressReset").hide();
  $("#addActivityTime").hide();
  $("#minusActivityTime").hide();
  initialActivityMins = $("#activityMins").text();
  initialActivitySecs = $("#activitySecs").text();
  activityCountdown = setInterval(countdownActivitySeconds, 1000);
  return activityCountdown;
}

function startBreakTimer() { //Starts break timer
  $("#pauseBreak").show();
  $("#stopBreak").show();
  $("#startBreak").hide();
  $("#resumeBreak").hide();
  $("#resetBreak").hide();
  $("#addBreakTime").hide();
  $("#minusBreakTime").hide();
  initialBreakMins = $("#breakMins").text();
  initialBreakSecs = $("#breakSecs").text();
  breakCountdown = setInterval(countdownBreakSecs, 1000);
  return breakCountdown;
}

function pauseActivity() { //Pauses activity timer
  $("#pressResume").show();
  $("#pressStop").show();
  $("#pressStart").hide();
  $("#pressPause").hide();
  $("#pressReset").hide();
  $("#addActivityTime").hide();
  $("#minusActivityTime").hide();
  stopActivityCountdown();
}

function pauseBreak() { //Pauses break timer
  $("#resumeBreak").show();
  $("#stopBreak").show();
  $("#startBreak").hide();
  $("#pauseBreak").hide();
  $("#resetBreak").hide();
  $("#addBreakTime").hide();
  $("#minusBreakTime").hide();
  stopBreakCountdown();
}

function resumeActivity() { //Resumes activity timer
  $("#pressPause").show();
  $("#pressStop").show();
  $("#pressStart").hide();
  $("#pressResume").hide();
  $("#pressReset").hide();
  $("#addActivityTime").hide();
  $("#minusActivityTime").hide();
  activityCountdown = setInterval(countdownActivitySeconds, 1000);
  return activityCountdown;
}

function resumesBreak() { //Resumes break timer
  $("#pauseBreak").show();
  $("#stopBreak").show();
  $("#startBreak").hide();
  $("#resumeBreak").hide();
  $("#resetBreak").hide();
  $("#addBreakTime").hide();
  $("#minusBreakTime").hide();
  breakCountdown = setInterval(countdownBreakSecs, 1000);
  return breakCountdown;
}

function stopActivity() { //Stops activity timer
  $("#pressResume").show();
  $("#pressReset").show();
  $("#pressStart").hide();
  $("#pressPause").hide();
  $("#pressStop").hide();
  $("#addActivityTime").hide();
  $("#minusActivityTime").hide();
  return stopActivityCountdown();
}

function stopBreak() { //Stops activity timer
  $("#resumeBreak").show();
  $("#resetBreak").show();
  $("#startBreak").hide();
  $("#pauseBreak").hide();
  $("#stopBreak").hide();
  $("#addBreakTime").hide();
  $("#minusBreakTime").hide();
  return stopBreakCountdown();
}

function resetParams() {  //Resets with user's wanted parameters
  activityTimeVal = undefined;
  breakTimeVal = undefined;
  checkActivityMins = $("#activityMins").text();
  checkBreakMins = $("#breakMins").text();
  seconds = 59;
  seconds2 = 59;
  activityCountdown = undefined;
  breakCountdown = undefined;
}

function resetActivity() { //Resets timer
  $("#pressStart").show();
  $("#addActivityTime").show();
  $("#minusActivityTime").show();
  $("#pressPause").hide();
  $("#pressResume").hide();
  $("#pressStop").hide();
  $("#pressReset").hide();
  $("#activityMins").text(initialActivityMins);
  $("#activitySecs").text(initialActivitySecs);
  resetParams();
}

function resetBreak() { //Resets timer
  $("#startBreak").show();
  $("#addBreakTime").show();
  $("#minusBreakTime").show();
  $("#pauseBreak").hide();
  $("#resumeBreak").hide();
  $("#stopBreak").hide();
  $("#resetBreak").hide();
  $("#breakMins").text(initialBreakMins);
  $("#breakSecs").text(initialBreakSecs);
  resetParams();
}

function countdownActivitySeconds() { //Counts down seconds of activity timer
  if ($("#activityMins").text() === checkActivityMins) {
    countdownActivityMins();
  }
  // console.log(Boolean(seconds<0.5));
  // if (seconds < 0.5) {
  //   var mins = "00";
  //   if ($("#activityMins").text(mins)) { //Stops countdown once time is all zeroes
  //     $("#pressPause").hide();
  //     $("#pressStop").hide();
  //     return endActivity();
  //   }
  // }
  //CHANGED got the activity mins countdown to work, but the activity decrementor is all messed up. They are very intertwined
  //TODO make the activity seconds @ 0 read "00"
  //TODO make the decrementor stop @ 5, and still countdown properly

  if (seconds < 10 && seconds > 0) {
    seconds = seconds.toString();
    var extra0 = "0" + seconds;
    seconds = parseInt(seconds);
  }
  if (seconds < 0) {
    return countdownActivityMins();
  }
  if (seconds < 10) {
    seconds = seconds.toString();
    seconds = "0" + seconds;
  }
  $("#activitySecs").text(seconds);
  seconds--;
}

function countdownActivityMins() { //Counts down minutes of activity timer
  if ($("#activityMins").text() === checkActivityMins) {
    $("#activitySecs").text(seconds);
  }
  var mins = $("#activityMins").text();
  mins = parseInt(mins);
  mins--;
  if (seconds < 0) {
    seconds = 59;
    seconds = seconds.toString();
    $("#activitySecs").text(seconds);
    console.log(seconds);
    countdownActivitySeconds();
    //$("#activityMins").text(mins);
  }
  if (mins < 10) { //Adds extra 0 once minutes read 0; looks like "00" like a digital clock
    mins = mins.toString();
    mins = "0".concat(mins);
    return $("#activityMins").text(mins);
  }
  return $("#activityMins").text(mins);
}

function countdownBreakSecs() { //Counts down seconds of activity timer
  if ($("#breakMins").text(checkBreakMins)) {
    countdownBreakMins();
  }
  if (seconds2 < 0) {
    var mins2 = "00";
    if ($("#breakMins").text(mins2)) { //Stops countdown once time is all zeroes
      $("#pauseBreak").hide();
      $("#stopBreak").hide();
      return restartClock();
    }
    countdownBreakMins();
    seconds2 = 59;
    $("#breakSecs").text(seconds2);
    return countdownBreakSecs();
  } else if (seconds2 < 10) {
    $("#breakSecs").text("0" + seconds2);
  } else {
    $("#breakSecs").text(seconds2);
  }
  seconds2--;
}


function countdownBreakMins() { //Counts down minutes of break timer
  var mins2 = $("#breakMins").text();
  mins2--;
  if (mins2 < 10) { //Adds extra 0 once minutes read 0; looks like "00" like a digital clock
    mins2 = mins2.toString();
    mins2 = "0".concat(mins2);
    $("#breakMins").text(mins2);
  }
  return $("#breakMins").text(mins2);
}

function stopActivityCountdown() {
  clearInterval(activityCountdown);
}

function endActivity() {
  clearInterval(activityCountdown);
  return setupBreakStart();
}
//CREATE PING FOR WHEN ACTIVITY TIMER IS DONE
//INITIATE START OF BREAKTIME

function setupBreakStart() {
  $("#startBreak").show();
  $("#pauseBreak").hide();
  $("#resumeBreak").hide();
  $("#stopBreak").hide();
  $("#resetBreak").hide();
}

function stopBreakCountdown() {
  clearInterval(breakCountdown);
}

function restartClock() {
  clearInterval(breakCountdown);
  $("#pressStart").show();
  $("#addActivityTime").show();
  $("#minusActivityTime").show();
  $("#addBreakTime").show();
  $("#minusBreakTime").show();
  $("#pressPause").hide();
  $("#pressResume").hide();
  $("#pressStop").hide();
  $("#pressReset").hide();
  $("#activityMins").text(initialActivityMins);
  $("#activitySecs").text(initialActivitySecs);
  $("#startBreak").hide();
  $("#pauseBreak").hide();
  $("#resumeBreak").hide();
  $("#stopBreak").hide();
  $("#resetBreak").hide();
  $("#breakMins").text(initialBreakMins);
  $("#breakSecs").text(initialBreakSecs);
  resetParams();
}

function addOne(answer) { //Adds one minute
  answer += 1;
  return answer;
}

function subtractOne(answer) { //Subtracts one minute
  answer -= 1;
  return answer;
}
});
