$(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página. 
  var survey_data = {};
  var survey_details = "";

  $("form.login").hide();
  $("form.signin").hide();

  $("#login").click(function(){
    if ( $("form.login").is(":visible") ) {
      $("form.login").hide();
      $("#signin").show();
      $("#login").text("Log in");
    } else {
       $("form.login").show();
       $("#signin").hide();
       $("#login").text("Back");
    }
  });

  $("#signin").click(function(){
    if ( $("form.signin").is(":visible") ) {
      $("form.signin").hide();
      $("#login").show();
      $("#signin").text("Sign in");
    } else {
       $("form.signin").show();
       $("#login").hide();
       $("#signin").text("Back");
    }
  });

  count = 0;
  $("#continue").click(function(e){
    e.preventDefault();
    count = count + 1;
    $("#question_field").hide();
    pregunta = $('#pregunta')[0].value;
    survey_data[pregunta] = [];
    $div = '<div><h4>Pregunta'+count+': '+pregunta+'  </h4><br><ul id="ans_list"></ul><form id="place_answer'+count+'"><input id="option_form'+count+'" type="text" name="answer'+count+'" placeholder="Option"><input type="submit" value="Add Option"></form><br><button id="question_completed'+count+'">Question completed</button></div>';
    $("div#question_field").before($div);

        $("form#place_answer"+count).submit(function(e){
          e.preventDefault();
          respuesta = $("#option_form"+count).last()[0].value;
          survey_data[pregunta].push(respuesta)
          $ans = '<li>'+respuesta+'</li>';
          $("ul").last().append($ans);

<<<<<<< HEAD
            $("#question_completed"+count).click(function(e){
              e.preventDefault();
              $("#question_field").show();
              $("#place_answer"+count).hide();
              $("#question_completed"+count).hide();
            });
        });     
  });

=======
          $("#question_completed"+count).click(function(e){
            e.preventDefault();
            $("#question_field").show();
            $("#place_answer"+count).hide();
            $("#question_completed"+count).hide();
          });
        });
  });
  
  

  $("form#question").submit(function(event){ 
    // event.preventDefault();
    var a = {b:"hola"}
    var json = JSON.stringify(survey_data);
    var info = 'info=' + json
    console.log("presiono boton finish");
    // console.log(survey_data);
    console.log(survey_data);


    $.post("/finished_survey", info , function(data) {
      console.log(data);
    }, "json");
  });





>>>>>>> 8688b63849e2e6a3f11d845af9542ba4d3f5ed51
});
