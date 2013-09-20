(function() {
  var home_time = moment("2013-09-28 08:00 -05:00", "YYYY-MM-DD HH:mm Z"),
      now = moment(),
      time;

  if (home_time.diff(now) >= 0) {
    time = "Jon will be home " + home_time.fromNow();
  } else {
    time = "Jon is home";
  }

  var timeTextNode = document.createTextNode(time);
  document.querySelector(".message").appendChild(timeTextNode);
}());
