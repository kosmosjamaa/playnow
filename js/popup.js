getalbums();


function getalbums() {
  console.log("hello");
  chrome.runtime.sendMessage({
      greeting: "hello"
    },
    function(response) {
 //   	console.log(response.msg);

 		 $("#found-items").html(response.msg);	
 	     //document.getElementById("found-items").innerHTML = response.msg;
    });
}