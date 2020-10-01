$(document).ready(function() {
    
    var hours = ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

    for(var i = 0; i < hours.length; i++) {

      var hourBlocks = $("<div>");
      hourBlocks.addClass("time-table");
      hourBlocks.attr("data-letter", hours[i]);
      hourBlocks.add("<button>");
      hourBlocks.text(hours[i]);

      $(".container").append(hourBlocks);
      $("#currentDay").text(moment().format('MMMM Do, YYYY'));

      

    }

    var newButton = $('<input/>').attr({ type: 'button', name:'btn1', value:'Click' });

    newButton.addClass("save-button");
    $(".time-table").append(newButton);

    var currentHour = moment().hour();
    console.log(currentHour);
    

  });

  