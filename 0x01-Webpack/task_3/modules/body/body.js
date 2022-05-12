import $ from 'jquery'
const _ = require('lodash');

$("body").append("<p>Dashboard data for the students</p>");
$("body").append("<button id='btn'>Click here to get started</button>");
$("body").append("<p id='count'></p>");

(function updateCounter() {
  let count = 0;

  $("#btn").on('click', _.debounce(() => {
    count++;
    $("#count").text(`{${count}} clicks on the button`);
  }, 500))
})();
