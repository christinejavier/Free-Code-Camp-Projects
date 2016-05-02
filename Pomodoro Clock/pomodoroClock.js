$( document ).ready(function() {
  $("#pressStart").show();
  $("#pressPause").hide();
  $("#pressResume").hide();
  $("#pressStop").hide();
  $("#pressReset").hide();

  var initialActivityMins; //Placeholder for user's desired mins
  var initialActivitySecs; //Placeholder for seconds. Without it, seconds change weird when clock resets
  var activityTimeVal; //Amount of time to do activity
  var breakTimeVal; //Amount of break time
  var checkMins = $("#activityMins").text(); //Placeholder for user's desired activity time
  var seconds = 59; //Seconds used for countdown
  var countingDown; // Begins countdown

  $("#addActivityTime").click(addActivityTime);
  $("#minusActivityTime").click(minusActivityTime);
  $("#addBreakTime").click(addBreakTime);
  $("#minusBreakTime").click(minusBreakTime);
  $("#pressStart").click(startActivityTimer);
  $("#pressPause").click(pauseActivity);
  $("#pressResume").click(resumeActivity);
  $("#pressStop").click(stopActivity);
  $("#pressReset").click(resetActivity);

  function addActivityTime() { //Adds one minute to activity time
    activityTimeVal = $("#activityMins").text(); //Refers to 25 min in h1 tag
    activityTimeVal = parseInt(activityTimeVal); //Changes 25 from string to number
    activityTimeVal = addOne(activityTimeVal); //Callback function to add one minute
    if (activityTimeVal < 10) { //Concats "0" in front of single digit nums
      activityTimeVal = "0".concat(activityTimeVal);
      $("#activityMins").text(activityTimeVal);
    }
    $("#activityMins").text(activityTimeVal); //Displays activity time
    checkMins = $("#activityMins").text(); //Sets checkMins to user's ideal time. Allows for accurate countdown
  }

  function minusActivityTime() { //Subtracts one minute from activity time
    activityTimeVal = $("#activityMins").text();//Refers to 25 min in h1 tag
    activityTimeVal = parseInt(activityTimeVal);//Changes 25 from string to number
    if(activityTimeVal === 5) { //Limits minimum activity time to 5 minutes
      activityTimeVal = "0".concat(activityTimeVal);
      return $("#activityMins").text(activityTimeVal);
    }
    activityTimeVal = subtractOne(activityTimeVal); //Callback function to subtract one minute
    if (activityTimeVal < 10) { //Concats "0" in front of single digit nums
      activityTimeVal = "0".concat(activityTimeVal);
      $("#activityMins").text(activityTimeVal);
    }
    $("#activityMins").text(activityTimeVal); //Displays activity time
    checkMins = $("#activityMins").text(); //Sets checkMins to user's ideal time. Allows for accurate countdown
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
    countingDown = setInterval(countdownActivitySeconds, 1000);
    return countingDown;
  }

  function pauseActivity() { //Pauses activity timer
    $("#pressStart").hide();
    $("#pressPause").hide();
    $("#pressResume").show();
    $("#pressStop").show();
    $("#pressReset").hide();
    $("#addActivityTime").hide();
    $("#minusActivityTime").hide();
    stopCountingDown();
  }

  function resumeActivity() { //Resumes activity timer
    $("#pressStart").hide();
    $("#pressPause").show();
    $("#pressResume").hide();
    $("#pressStop").show();
    $("#pressReset").hide();
    $("#addActivityTime").hide();
    $("#minusActivityTime").hide();

    countingDown = setInterval(countdownActivitySeconds, 1000);
    return countingDown;
  }

  function stopActivity() { //Stops activity timer
    $("#pressStart").hide();
    $("#pressPause").hide();
    $("#pressResume").show();
    $("#pressStop").hide();
    $("#pressReset").show();
    $("#addActivityTime").hide();
    $("#minusActivityTime").hide();
    return stopCountingDown();
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
    activityTimeVal = undefined; //Amount of time to do activity
    breakTimeVal = undefined; //Amount of break time
    checkMins = $("#activityMins").text();
    seconds = 59; //Seconds used for countdown
    countingDown = undefined;;
  }

  function countdownActivitySeconds() { //Counts down seconds of activity timer
    if($("#activityMins").text() === checkMins) {
      countdownActivityMins();
    }
    if (seconds < 0) {
      var mins = "00";
      if($("#activityMins").text(mins)) { //Stops countdown once time is all zeroes
        $("#pressPause").hide();
        $("#pressStop").hide();
        return stopCountingDown();
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

  function stopCountingDown() {
    return clearInterval(countingDown);
  }
//CREATE PING FOR WHEN ACTIVITY TIMER IS DONE
//INITIATE START OF BREAKTIME

  function addOne(answer) { //Adds one minute
    answer += 1;
    return answer;
  }

  function subtractOne(answer) { //Subtracts one minute
    answer -= 1;
    return answer;
  }
});
