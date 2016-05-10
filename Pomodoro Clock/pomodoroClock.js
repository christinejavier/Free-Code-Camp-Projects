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
  if (activityTimeVal === 5) { //NEW EDIT
    activityTimeVal = $("#activityMins").text();
  }
  activityTimeVal = $("#activityMins").text(); //Refers to 25 min in h1 tag
  activityTimeVal = parseInt(activityTimeVal); //Changes 25 from string to number
  if (activityTimeVal > 5) { //NEW EDIT must change to 5
    activityTimeVal = "0".concat(activityTimeVal);
    activityTimeVal = subtractOne(activityTimeVal); //Callback function to subtract one minute LINE
  }
  if (activityTimeVal < 10) { //Concats "0" in front of single digit nums
    activityTimeVal = "0".concat(activityTimeVal);
    $("#activityMins").text(activityTimeVal);
  }
  $("#activityMins").text(activityTimeVal); //Displays activity time
  checkActivityMins = $("#activityMins").text(); //Sets checkActivityMins to user's ideal time.
}
//TODO edit the least amount of activity time

function addBreakTime() { //Adds one minute to activity time
  breakTimeVal = $("#breakMins").text(); //Refers to 25 min in h1 tag
  breakTimeVal = parseInt(breakTimeVal); //Changes 25 from string to number
  breakTimeVal = addOne(breakTimeVal); //Callback function to add one minute
  if (breakTimeVal === 31) { //NEW EDIT must change to 5
    breakTimeVal = subtractOne(breakTimeVal); //Callback function to subtract one minute LINE
  }
  if (breakTimeVal < 10) { //Concats "0" in front of single digit nums
    breakTimeVal = "0".concat(breakTimeVal);
    $("#breakMins").text(breakTimeVal);
  }
  $("#breakMins").text(breakTimeVal); //Displays activity time
  checkBreakMins = $("#breakMins").text(); //Sets checkActivityMins to user's ideal time
}

function minusBreakTime() { //Subtracts one minute from activity time
  if (breakTimeVal === 5) { //NEW EDIT
    breakTimeVal = $("#breakMins").text();
  }
  breakTimeVal = $("#breakMins").text(); //Refers to 25 min in h1 tag
  breakTimeVal = parseInt(breakTimeVal); //Changes 25 from string to number
  if (breakTimeVal > 1) { //NEW EDIT must change to 5
    breakTimeVal = "0".concat(breakTimeVal);
    breakTimeVal = subtractOne(breakTimeVal); //Callback function to subtract one minute LINE
  }
  if (breakTimeVal < 10) { //Concats "0" in front of single digit nums
    breakTimeVal = "0".concat(breakTimeVal);
    $("#breakMins").text(breakTimeVal);
  }
  $("#breakMins").text(breakTimeVal); //Displays activity time
  checkBreakMins = $("#breakMins").text(); //Sets checkActivityMins to user's ideal time.
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
  var mins = $("#activityMins").text();
  mins = parseInt(mins);
  if ($("#activityMins").text() === checkActivityMins) {
    $("#activitySecs").text(seconds);
  }
  if (seconds < 0.5) {
    if(mins < 1) { // Ends activity timer when 00:00 is reached
      return endActivity();
    }
    else {
      mins = mins.toString();
      mins = "0".concat(mins);
      seconds = 59;
      seconds = seconds.toString();
      $("#activitySecs").text(seconds);
      countdownActivitySeconds();
    }
  }
  else if (mins < 10) { //Adds extra 0 once minutes read 0; looks like "00" like a digital clock
    mins = parseInt(mins);
    mins--;
    mins = mins.toString();
    mins = "0".concat(mins);
    return $("#activityMins").text(mins);
  }
  mins = parseInt(mins);
  mins--;
  if (mins < 10) {
    mins = mins.toString();
    mins = "0".concat(mins);
  }
  return $("#activityMins").text(mins);
}

function countdownBreakSecs() { //Counts down seconds of activity timer
  if ($("#breakMins").text() === checkBreakMins) {
    countdownBreakMins();
  }
  if (seconds2 < 10 && seconds2 > 0) {
    seconds2 = seconds2.toString();
    seconds2 = parseInt(seconds2);
  }
  if (seconds2 < 0) {
    return countdownBreakMins();
  }
  if (seconds2 < 10) {
    seconds2 = seconds2.toString();
    seconds2 = "0" + seconds2;
  }
  $("#breakSecs").text(seconds2);
  seconds2--;
}


function countdownBreakMins() { //Counts down minutes of break timer
  var mins2 = $("#breakMins").text();
    mins2 = parseInt(mins2);
    if ($("#breakMins").text() === checkBreakMins) {
      $("#breakSecs").text(seconds2);
    }
    if (seconds2 < 0.5) {
      if(mins2 < 1) { // Ends break timer when 00:00 is reached
        return restartClock();///
      }
      else {
        mins2 = mins2.toString();
        mins2 = "0".concat(mins2);
        seconds2 = 59;
        seconds2 = seconds2.toString();
        $("#breakSecs").text(seconds2);
        countdownBreakSecs();
      }
    }
    else if (mins2 < 10) { //Adds extra 0 once minutes read 0; looks like "00" like a digital clock
      mins2 = parseInt(mins2);
      mins2--;
      mins2 = mins2.toString();
      mins2 = "0".concat(mins2);//prob wrong
      return $("#breakMins").text(mins2);
    }
    mins2 = parseInt(mins2);
    mins2--;
    if (mins2 < 10) {
      mins2 = mins2.toString();
      mins2 = "0".concat(mins2);
    }
    return $("#breakMins").text(mins2);
}

function stopActivityCountdown() {
  clearInterval(activityCountdown);
}

function endActivity() {
  clearInterval(activityCountdown);
  $("#pressStart").hide();
  $("#pressPause").hide();
  $("#pressResume").hide();
  $("#pressStop").hide();
  $("#pressReset").hide();
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
