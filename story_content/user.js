function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6QrYl8Xbza1":
        Script1();
        break;
      case "6I38wpPbXGD":
        Script2();
        break;
      case "6RAgnyJKPwi":
        Script3();
        break;
      case "6RK31SO0IRE":
        Script4();
        break;
      case "69gIMEVIuyu":
        Script5();
        break;
      case "644NyXfZiTU":
        Script6();
        break;
      case "5WLBuTOtJd0":
        Script7();
        break;
      case "6HbdssWiYwh":
        Script8();
        break;
      case "6jCShbhroMC":
        Script9();
        break;
      case "67Mm8o6oQKN":
        Script10();
        break;
      case "5ntBfbuPXZW":
        Script11();
        break;
      case "67E2xdk7MDj":
        Script12();
        break;
      case "6Yzi3Nl7DCA":
        Script13();
        break;
      case "6oD98nRsONi":
        Script14();
        break;
  }
}

function submit_result(data) {
  sendDataToWebApp(data);
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;
  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] != "")
      data[sParameterName[0]] =
        sParameterName[1] === undefined ? "" : sParameterName[1];
  }
  var url = "";
  if ("url" in data) url = data.url;
  console.log("Data sent to server :");
  console.log(data);
  if (!url) {
    return;
  }
  $.ajax({
    url: url,
    type: "POST",
    data: data,
    cache: false,
    success: function (data, textStatus, jqXHR) {
      console.log("Server response" + data);
      return "ok";
    },
    error: function (jqXHR, textStatus, errorThrown) {
      //console.log(jqXHR);
      return "Error occurred";
    },
  });
}

function Script1()
{
  var player = GetPlayer(); 
var data = {}; 
data.api_type = 'Launch'; 
submit_result(data); 
MyQuestAndroid.showingScormFirstPage(); 
}

function Script2()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 0; // 1 means correct, 0 means incorrect
data.q_no = 1; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script3()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 1; // 1 means correct, 0 means incorrect
data.Q1Point = 16; // Change this to score for this question
data.q_no = 1; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script4()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 0; // 1 means correct, 0 means incorrect
data.q_no = 2; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script5()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 1; // 1 means correct, 0 means incorrect
data.Q2Point = 16; // Change this to score for this question
data.q_no = 2; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script6()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 0; // 1 means correct, 0 means incorrect
data.q_no = 3; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script7()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 1; // 1 means correct, 0 means incorrect
data.Q3Point = 16; // Change this to score for this question
data.q_no = 3; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script8()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 0; // 1 means correct, 0 means incorrect
data.q_no = 4; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script9()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 1; // 1 means correct, 0 means incorrect
data.Q4Point = 16; // Change this to score for this question
data.q_no = 4; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script10()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 0; // 1 means correct, 0 means incorrect
data.q_no = 5; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script11()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 1; // 1 means correct, 0 means incorrect
data.Q5Point = 16; // Change this to score for this question
data.q_no = 5; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script12()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 0; // 1 means correct, 0 means incorrect
data.q_no = 6; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script13()
{
  // Get player object
let player = GetPlayer();

// Get activity/course name
let activity = player.GetVar("activity") 

// Create an object
let response = player.GetVar("tempResponse");

// Prepare data object
var data = {}; 
data.api_type = 'activity'; 
data.activity_name = activity; 
data.answer_submited = response;
data.answer_status = 1; // 1 means correct, 0 means incorrect
data.Q6Point = 16; // Change this to score for this question
data.q_no = 6; // Change this as per the sequence of question

// Send response
submit_result(data);
MyQuestAndroid.addScore('data'); 
}

function Script14()
{
  var player = GetPlayer(); 
var data = {}; 
data.api_type = 'End'; 
submit_result(data); 
MyQuestAndroid.showingScormLastPage();
}

function sendDataToWebApp(data) {
  window.parent.postMessage(data, "*");
}