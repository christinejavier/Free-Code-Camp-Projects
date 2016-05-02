$( document ).ready(function() {
  var activityTimeVal; //Amount of time to do activity
  var originalVal1 = activityTimeVal;
  var breakTimeVal; //Amount of break time

  $("#addActivityTime").click(addActivityTime); //Click event for + anchor of main activity time
  $("#minusActivityTime").click(minusActivityTime); // Click event for - anchor of main activity time

  $("#addBreakTime").click(addBreakTime); //Click event for + anchor of break time
  $("#minusBreakTime").click(minusBreakTime); // Click event for - anchor of break time

  $("#pressStart").click(timerSeconds); //Starts Pomodoro Clock

  function addActivityTime() { //Adds one minute to activity time
    activityTimeVal = $("#activityTime").text(); //Refers to 25 min in h1 tag
    activityTimeVal = parseInt(activityTimeVal); //Changes 25 from string to number
    activityTimeVal = addOne(activityTimeVal); //Callback function to add one minute
    var showThis = activityTimeVal + ":" + "00";
    $("#activityTime").text(showThis); //Displays activity time
  }

  function minusActivityTime() { //Subtracts one minute from activity time
    activityTimeVal = $("#activityTime").text();//Refers to 25 min in h1 tag
    activityTimeVal = parseInt(activityTimeVal);//Changes 25 from string to number
    if(activityTimeVal === 5) { //Limits minimum activity time to 5 minutes
      showThis = activityTimeVal + ":" + "00"
      return $("#activityTime").text(showThis);
    }
    activityTimeVal = subtractOne(activityTimeVal); //Callback function to subtract one minute
    var showThis = activityTimeVal + ":" + "00";
    $("#activityTime").text(showThis); //Displays activity time
  }

  function addBreakTime() { //Adds one minute to activity time
    breakTimeVal = $("#breakTime").text(); //Refers to 5 min in h1 tag
    breakTimeVal = parseInt(breakTimeVal); //Changes 5 from string to number
    if(breakTimeVal === 30) { // Limits max break time to 30 minutes
      showThis = breakTimeVal + ":" + "00"
      return $("#breakTime").text(showThis);
    }
    breakTimeVal = addOne(breakTimeVal); //Callback function to add one minute
    var showThis = breakTimeVal + ":" + "00";
    $("#breakTime").text(showThis); //Displays break time
  }

  function minusBreakTime() { //Subtracts one minute from activity time
    breakTimeVal = $("#breakTime").text();//Refers to 5 min in h1 tag
    breakTimeVal = parseInt(breakTimeVal);//Changes 5 from string to number
    if(breakTimeVal === 1) { //Limits minimum break time to 1 minute
      showThis = breakTimeVal + ":" + "00"
      return $("#breakTime").text(showThis);
    }
    breakTimeVal = subtractOne(breakTimeVal); //Callback function to subtract one minute
    var showThis = breakTimeVal + ":" + "00";
    $("#breakTime").text(showThis); //Displays break time
  }


  function timerSeconds() {
    setInterval(countdownActivitySeconds, 1000);
  }

  var seconds = 59;
  var checkMins = $("#activityMins").text();
  function countdownActivitySeconds() {
    if($("#activityMins").text() === checkMins) {
      countdownActivityMins();
    }
    if (seconds < 0) {
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

  function countdownActivityMins() {
    var mins = $("#activityMins").text();
    mins--;
    return $("#activityMins").text(mins);
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
