$( document ).ready(function() {
  $("#pressPause").hide();
  $("#pressResume").hide();

  var activityTimeVal; //Amount of time to do activity
  var breakTimeVal; //Amount of break time
  var checkMins = $("#activityMins").text(); //Placeholder for user's desired activity time
  var seconds = 59; //Seconds used for countdown
  var countingDown;
  var stopCountingDown;

  $("#addActivityTime").click(addActivityTime);
  $("#minusActivityTime").click(minusActivityTime);
  $("#addBreakTime").click(addBreakTime);
  $("#minusBreakTime").click(minusBreakTime);
  $("#pressStart").click(timerSeconds);
  $("#pressPause").click(pauseActivity);
  $("#pressResume").click(resumeActivity);


  function addActivityTime() { //Adds one minute to activity time
    activityTimeVal = $("#activityMins").text(); //Refers to 25 min in h1 tag
    activityTimeVal = parseInt(activityTimeVal); //Changes 25 from string to number
    activityTimeVal = addOne(activityTimeVal); //Callback function to add one minute
    $("#activityMins").text(activityTimeVal); //Displays activity time
    checkMins = $("#activityMins").text(); //Sets checkMins to user's ideal time. Allows for accurate countdown
  }

  function minusActivityTime() { //Subtracts one minute from activity time
    activityTimeVal = $("#activityMins").text();//Refers to 25 min in h1 tag
    activityTimeVal = parseInt(activityTimeVal);//Changes 25 from string to number
    if(activityTimeVal === 5) { //Limits minimum activity time to 5 minutes
      return $("#activityMins").text(activityTimeVal);
    }
    activityTimeVal = subtractOne(activityTimeVal); //Callback function to subtract one minute
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
    $("#breakMins").text(breakTimeVal); //Displays break time
  }

  function minusBreakTime() { //Subtracts one minute from activity time
    breakTimeVal = $("#breakMins").text();//Refers to 5 min in h1 tag
    breakTimeVal = parseInt(breakTimeVal);//Changes 5 from string to number
    if(breakTimeVal === 1) { //Limits minimum break time to 1 minute
      return $("#breakMins").text(breakTimeVal);
    }
    breakTimeVal = subtractOne(breakTimeVal); //Callback function to subtract one minute
    $("#breakMins").text(breakTimeVal); //Displays break time
  }


  function timerSeconds() { //Initiates timer
    $("#pressStart").hide();
    $("#pressPause").show();
    countingDown = setInterval(countdownActivitySeconds, 1000);
    countingDown();
  }

  function pauseActivity() { //Pauses timer
    $("#pressPause").hide();
    $("#pressResume").show();
    stopCountingDown = clearInterval(countingDown);
    stopCountingDown();
  }

  function resumeActivity() { //Resumes timer
    $("#pressPause").show();
    $("#pressResume").hide();
    countingDown = setInterval(countdownActivitySeconds, 1000);
    countingDown();
  }

  function countdownActivitySeconds() { //Counts down seconds of activity timer
    if($("#activityMins").text() === checkMins) {
      countdownActivityMins();
    }
    if (seconds < 0) {
      if($("#activityMins").text() === $("#activityMins").text(0)) { //Stops countdown once time is all zeroes
      //CONTINUE HERE
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
    return $("#activityMins").text(mins);
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
