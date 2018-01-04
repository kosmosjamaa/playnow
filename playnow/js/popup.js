getalbums();


function getalbums() {
  console.log("hello");
  chrome.runtime.sendMessage({
      greeting: "hello"
    },
    function(response) {
 //   	console.log(response.msg);

 		var albums = response.msg;
 		var albumshtml;
 		

 		for (i = 0; i < albums.length; i++) { 
 			//console.log(albums[i])
 			if(albums[i][3] || albums[i][4]){
 				var spotifylink;
 				var applelink; 
				if(albums[i][3]){
					spotifylink = "<a href='"+albums[i][3]+"' target='_blank' class='btn-s'>s</a>";
				}
				else{ spotifylink = "" ;}
				if(albums[i][4]){
					applelink = "<a href='"+albums[i][4]+"' target='_blank' class='btn-a'>a</a>";
				}
				else{ applelink = "" ;}
				var albumitem = "<li data-location='"+ albums[i][2]+"'><span class='artist-name'>" + decodeURIComponent(albums[i][0]) + "</span><span class='album-title'>" + decodeURIComponent(albums[i][1]) + "</span>" +spotifylink +  applelink + "</li>"; 
				$("#found-items").append(albumitem);
 			}
		    
		}

		//$("#found-items").html(albumshtml);	
 	     //document.getElementById("found-items").innerHTML = response.msg;
    });
}

 $(document).on('click', '.artist-name, .album-title', function(e){
 		var target = $(this).closest("li").attr("data-location");
 		 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
	            console.log(response.farewell);
	        });
	    })

 		
		e.preventDefault();
	 });