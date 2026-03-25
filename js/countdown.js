function updateTimer() {
  future  = Date.parse("April 11, 2026 18:00");
  now     = new Date();
  diff    = future - now;

  years = Math.floor( diff / (1000*60*60*24*365) );
  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );

  y = years;
  d = days  - years * 365;
  h = hours - days  * 24;
  m = mins  - hours * 60;

  document.getElementById("timer")
    .innerHTML =
      '<div class="time-unit">' + d + '<span>Días</span></div>' +
      '<div class="time-unit">' + h + '<span>Horas</span></div>' +
      '<div class="time-unit">' + m + '<span>Minutos</span></div>'
}
setInterval('updateTimer()', 1000 );
