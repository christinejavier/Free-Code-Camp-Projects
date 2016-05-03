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
  checkActivityMins = $("#activityMins").text(); //Sets checkActivityMins to user's ideal time. Allows for accurate countdown
}

function minusActivityTime() { //Subtracts one minute from activity time
  activityTimeVal = $("#activityMins").text(); //Refers to 25 min in h1 tag
  activityTimeVal = parseInt(activityTimeVal); //Changes 25 from string to number
  if (activityTimeVal === 1) { //Limits minimum activity time to 5 minutes
    //HERE HERE HERE CHANGE TO 5
    activityTimeVal = "0".concat(activityTimeVal);
    return $("#activityMins").text(activityTimeVal);
  }
  activityTimeVal = subtractOne(activityTimeVal); //Callback function to subtract one minute
  if (activityTimeVal < 10) { //Concats "0" in front of single digit nums
    activityTimeVal = "0".concat(activityTimeVal);
    $("#activityMins").text(activityTimeVal);
  }
  $("#activityMins").text(activityTimeVal); //Displays activity time
  checkActivityMins = $("#activityMins").text(); //Sets checkActivityMins to user's ideal time. Allows for accurate countdown
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
  checkBreakMins = $("#breakMins").text(); //Sets checkBreakMins to user's ideal time. Allows for accurate countdown
}

function startActivityTimer() { //Initiates timer
  $("#pressStart").hide();
  $("#pressPause").show();
  $("#pressResume").hide();
  $("#pressStop").show();
  $("#pressReset").hide();
  $("#addActivityTime").hide();
  $("#minusActivityTime").hide();
  initialActivityMins = $("#activityMins").text();
  initialActivitySecs = $("#activitySecs").text();
  activityCountdown = setInterval(countdownActivitySeconds, 1000);
  return activityCountdown;
}

function startBreakTimer() { //Starts break timer
  $("#startBreak").hide(); //LAST THING I DID
  $("#pauseBreak").show();
  $("#resumeBreak").hide();
  $("#stopBreak").show();
  $("#resetBreak").hide();
  $("#addBreakTime").hide();
  $("#minusBreakTime").hide();
  initialBreakMins = $("#breakMins").text();
  initialBreakSecs = $("#breakSecs").text();
  breakCountdown = setInterval(countdownBreakSecs, 1000);
  return breakCountdown;
}

function pauseActivity() { //Pauses activity timer
  $("#pressStart").hide();
  $("#pressPause").hide();
  $("#pressResume").show();
  $("#pressStop").show();
  $("#pressReset").hide();
  $("#addActivityTime").hide();
  $("#minusActivityTime").hide();
  $("#startBreak").hide();
  stopActivityCountdown();
}

function pauseBreak() { //Pauses break timer
  $("#startBreak").hide();
  $("#pauseBreak").hide();
  $("#resumeBreak").show();
  $("#stopBreak").show();
  $("#resetBreak").hide();
  $("#addBreakTime").hide();
  $("#minusBreakTime").hide();
  stopBreakCountdown();
}

function resumeActivity() { //Resumes activity timer
  $("#pressStart").hide();
  $("#pressPause").show();
  $("#pressResume").hide();
  $("#pressStop").show();
  $("#pressReset").hide();
  $("#addActivityTime").hide();
  $("#minusActivityTime").hide();
  $("#startBreak").hide();

  activityCountdown = setInterval(countdownActivitySeconds, 1000);
  return activityCountdown;
}

function resumesBreak() { //Resumes break timer
  $("#startBreak").hide();
  $("#pauseBreak").show();
  $("#resumeBreak").hide();
  $("#stopBreak").show();
  $("#resetBreak").hide();
  $("#addBreakTime").hide();
  $("#minusBreakTime").hide();
  breakCountdown = setInterval(countdownBreakSecs, 1000);
  return breakCountdown;
}

function stopActivity() { //Stops activity timer
  $("#pressStart").hide();
  $("#pressPause").hide();
  $("#pressResume").show();
  $("#pressStop").hide();
  $("#pressReset").show();
  $("#addActivityTime").hide();
  $("#minusActivityTime").hide();
  $("#startBreak").hide();
  return stopActivityCountdown();
}

function stopBreak() { //Stops activity timer
  $("#startBreak").hide();
  $("#pauseBreak").hide();
  $("#resumeBreak").show();
  $("#stopBreak").hide();
  $("#resetBreak").show();
  $("#addBreakTime").hide();
  $("#minusBreakTime").hide();
  return stopBreakCountdown();
}

function resetActivity() { //Resets timer
  $("#pressStart").show();
  $("#pressPause").hide();
  $("#pressResume").hide();
  $("#pressStop").hide();
  $("#pressReset").hide();
  $("#addActivityTime").show();
  $("#minusActivityTime").show();
  $("#startBreak").hide();
  $("#activityMins").text(initialActivityMins);
  $("#activitySecs").text(initialActivitySecs);

  //Variables will be redefined with user's wanted parameters
  activityTimeVal = undefined;
  breakTimeVal = undefined;
  checkActivityMins = $("#activityMins").text();
  checkBreakMins = $("#breakMins").text();
  seconds = 59; //Seconds used for countdown
  activityCountdown = undefined;
  breakCountdown = undefined;
}

function resetBreak() { //Resets timer
  $("#startBreak").show();
  $("#pauseBreak").hide();
  $("#resumeBreak").hide();
  $("#stopBreak").hide();
  $("#resetBreak").hide();
  $("#addBreakTime").show();
  $("#minusBreakTime").show();
  $("#breakMins").text(initialBreakMins);
  $("#breakSecs").text(initialBreakSecs);

  //Variables will be redefined with user's wanted parameters
  activityTimeVal = undefined;
  breakTimeVal = undefined;
  checkActivityMins = $("#activityMins").text();
  checkBreakMins = $("#breakMins").text();
  seconds2 = 59; //Seconds used for countdown
  activityCountdown = undefined;
  breakCountdown = undefined;
}

function countdownActivitySeconds() { //Counts down seconds of activity timer
  $("startBreak").hide();
  if ($("#activityMins").text(checkActivityMins)) {
    countdownActivityMins();
    $("startBreak").hide();
  }
  if (seconds < 0) {
    var mins = "00";
    if ($("#activityMins").text(mins)) { //Stops countdown once time is all zeroes
      $("#pressPause").hide();
      $("#pressStop").hide();
      $("startBreak").hide();
      return endActivity();
      //call function to start break timer
    }
    countdownActivityMins();
    seconds = 59;
    $("#activitySecs").text(seconds);
    return countdownActivitySeconds();
  } else if (seconds < 10) {
    $("#activitySecs").text("0" + seconds);
  } else {
    $("#activitySecs").text(seconds);
  }
  seconds--;
}

function countdownBreakSecs() { //Counts down seconds of activity timer
  $("startBreak").hide();
  if ($("#breakMins").text(checkBreakMins)) {
    $("startBreak").hide();
    countdownBreakMins();
  }
  if (seconds2 < 0) {
    $("startBreak").hide();
    var mins2 = "00";
    if ($("#breakMins").text(mins2)) { //Stops countdown once time is all zeroes
      $("startBreak").hide();
      $("#pauseBreak").hide();
      $("#stopBreak").hide();
      return restartClock();
    }
    $("startBreak").hide();
    countdownBreakMins();
    seconds2 = 59;
    $("#breakSecs").text(seconds2);
    return countdownBreakSecs();
  } else if (seconds2 < 10) {
    $("startBreak").hide();
    $("#breakSecs").text("0" + seconds2);
  } else {
    $("startBreak").hide();
    $("#breakSecs").text(seconds2);
  }
  $("startBreak").hide();
  seconds2--;
}


function countdownActivityMins() { //Counts down minutes of activity timer
  $("startBreak").hide();
  var mins = $("#activityMins").text();
  mins--;
  if (mins < 10) { //Adds extra 0 once minutes read 0; looks like "00" like a digital clock
    mins = mins.toString();
    mins = "0".concat(mins);
    $("#activityMins").text(mins);
  }
  return $("#activityMins").text(mins);
}

function countdownBreakMins() { //Counts down minutes of break timer
  $("startBreak").hide();
  var mins2 = $("#breakMins").text();
  mins2--;
  if (mins2 < 10) { //Adds extra 0 once minutes read 0; looks like "00" like a digital clock
    $("startBreak").hide();
    mins2 = mins2.toString();
    mins2 = "0".concat(mins2);
    $("#breakMins").text(mins2);
  }
  $("startBreak").hide();
  return $("#breakMins").text(mins2);
}

function stopActivityCountdown() {
  $("startBreak").hide();
  clearInterval(activityCountdown);
}

function endActivity() {
  //WORK ON THIS
  //START OF BREAK COMES TOO EARLY
  clearInterval(activityCountdown);
  $("startBreak").hide();
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
  //HERE HERE HERE
  $("#startBreak").hide();
  clearInterval(breakCountdown);
}

function restartClock() {
  clearInterval(breakCountdown);
  $("#pressStart").show();
  $("#pressPause").hide();
  $("#pressResume").hide();
  $("#pressStop").hide();
  $("#pressReset").hide();
  $("#addActivityTime").show();
  $("#minusActivityTime").show();
  $("#activityMins").text(initialActivityMins);
  $("#activitySecs").text(initialActivitySecs);

  $("#startBreak").hide();
  $("#pauseBreak").hide();
  $("#resumeBreak").hide();
  $("#stopBreak").hide();
  $("#resetBreak").hide();
  $("#addBreakTime").show();
  $("#minusBreakTime").show();
  $("#breakMins").text(initialBreakMins);
  $("#breakSecs").text(initialBreakSecs);

  //Variables will be redefined with user's wanted parameters
  activityTimeVal = undefined;
  breakTimeVal = undefined;
  checkActivityMins = $("#activityMins").text();
  checkBreakMins = $("#breakMins").text();
  seconds = 59;
  seconds2 = 59;
  activityCountdown = undefined;
  breakCountdown = undefined;
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
