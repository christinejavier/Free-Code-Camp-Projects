$( document ).ready(function() {
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
  $("#resumeBreak").click(resumeBreak);
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
    activityTimeVal = $("#activityMins").text();//Refers to 25 min in h1 tag
    activityTimeVal = parseInt(activityTimeVal);//Changes 25 from string to number
    if(activityTimeVal === 1) { //Limits minimum activity time to 5 minutes
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
    if(breakTimeVal === 30) { // Limits max break time to 30 minutes
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
    breakTimeVal = $("#breakMins").text();//Refers to 5 min in h1 tag
    breakTimeVal = parseInt(breakTimeVal);//Changes 5 from string to number
    if(breakTimeVal === 1) { //Limits minimum break time to 1 minute
      breakTimeVal = "0".concat(breakTimeVal);
      return $("#breakMins").text(breakTimeVal);
    }
    breakTimeVal = subtractOne(breakTimeVal); //Callback function to subtract one minute
    if (breakTimeVal < 10) { //Concats "0" in front of single digit nums
      breakTimeVal = "0".concat(breakTimeVal);
      $("#breakMins").text(breakTimeVal);
    }
    $("#breakMins").text(breakTimeVal); //Displays break time
    checkBreakMins = $("#breakMins").text();//Sets checkBreakMins to user's ideal time. Allows for accurate countdown
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

  function startBreakTimer() {
    $("startBreak").hide();
    $("#pauseBreak").show();
    $("#resumeBreak").hide();
    $("#stopBreak").show();
    $("#resetBreak").hide();
    $("#addBreakTime").hide();
    $("#minusActivityTime").hide();
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
    stopActivityCountdown();
  }

  function pauseBreak() { //Pauses activity timer
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

    activityCountdown = setInterval(countdownActivitySeconds, 1000);
    return activityCountdown;
  }

  function resumeBreak() { //Resumes activity timer
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
    $("#activityMins").text(initialActivityMins)
    $("#activitySecs").text(initialActivitySecs)

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
    $("#breakMins").text(initialBreakMins)
    $("#breakSecs").text(initialBreakSecs)

    //Variables will be redefined with user's wanted parameters
    activityTimeVal = undefined;
    breakTimeVal = undefined;
    checkActivityMins = $("#activityMins").text();
    checkBreakMins = $("#breakMins").text();
    seconds = 59; //Seconds used for countdown
    activityCountdown = undefined;
    breakCountdown = undefined;
  }

  function countdownActivitySeconds() { //Counts down seconds of activity timer
    if($("#activityMins").text(checkActivityMins)) {
      countdownActivityMins();
    }
    if (seconds < 0) {
      var mins = "00";
      if($("#activityMins").text(mins)) { //Stops countdown once time is all zeroes
        $("#pressPause").hide();
        $("#pressStop").hide();
        return stopActivityCountdown();
      //call function to start break timer
      }
      countdownActivityMins();
      seconds = 59;
      $("#activitySecs").text(seconds);
      return countdownActivitySeconds();
    }
    else if(seconds < 10) {
      $("#activitySecs").text("0" + seconds);
    }
    else {
      $("#activitySecs").text(seconds);
    }
    seconds--;
  }

  function countdownBreakSecs() { //Counts down seconds of activity timer
    console.log($("#breakMins").text());
    if($("#breakMins").text() === checkBreakMins) {
      countdownBreakMins();
    }
    if (seconds < 0) {
      var mins = "00";
      if($("#breakMins").text(mins)) { //Stops countdown once time is all zeroes
        $("#pauseBreak").hide();
        $("#stopBreak").hide();
        return stopBreakCountdown();
      }
      countdownBreakMins();
      seconds = 59;
      $("#breakSecs").text(seconds);
      return countdownBreakMins();
    }
    else if(seconds < 10) {
      $("#breakSecs").text("0" + seconds);
    }
    else {
      $("#breakSecs").text(seconds);
    }
    seconds--;
  }


  function countdownActivityMins() { //Counts down minutes of activity timer
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
    var mins = $("#breakMins").text();
    mins--;
    if (mins < 10) { //Adds extra 0 once minutes read 0; looks like "00" like a digital clock
      mins = mins.toString();
      mins = "0".concat(mins);
      $("#breakMins").text(mins);
    }
    return $("#breakMins").text(mins);
  }

  function stopActivityCountdown() {
    $("#startBreak").show();
    return clearInterval(activityCountdown);
  }
//CREATE PING FOR WHEN ACTIVITY TIMER IS DONE
//INITIATE START OF BREAKTIME

function stopBreakCountdown() {
  return clearInterval(breakCountdown);
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
