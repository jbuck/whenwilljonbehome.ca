(function() {
  var home_time = moment("2013-09-28 20:00 -0400", "YYYY-MM-DD HH:mm ZZ"),
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
