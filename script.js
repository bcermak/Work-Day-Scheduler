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

            
    var newButton = $('<input/>').attr({ type: 'button', name:'btn1', value:'SAVE' });

    newButton.addClass("save-button");
    $(".time-table").append(newButton);

    
    var currentHour = moment().hour();
    console.log(currentHour);

    var currentTime = moment().hour();

    $(".time-table").each(function () {
        var curHour = parseInt($(this).parent().attr("id"));
        
        if (curHour > currentTime)
            $(this).addClass("future");
     
        else if (curHour == currentTime)
            $(this).addClass("present");
        
        else
            $(this).addClass("past");
    })

  });

  