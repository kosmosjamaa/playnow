/*
function morealbums() {
  chrome.tabs.executeScript({
    file: 'alert.js'
  }); 
}
 




*/



var links = chrome.extension.getBackgroundPage().links;  //get it back





 hello();

function hello() {
  console.log("hello");
  chrome.runtime.sendMessage({
      greeting: "hello"
    },
    function(response) {
      document.getElementById("found-items").innerHTML = response.msg;
    });
}