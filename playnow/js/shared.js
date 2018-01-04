var counter = 0;
var counterapple = 0;
var countertotal ;
var founditems = 0;
var foundlist = [];
var albumslist = new Array;

chrome.runtime.sendMessage({ "newIconPath" : "icon-active.png" });

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

var spotify_token_type ="Bearer";
var spotify_token ="BQBI-n90OrEPVHbgIrltck8YWW2NI2Yw59GfIhOjWNXRMF7Yz5kVN__PqNin9gHvjyRXbt-AIsvYQZof8IE";


function spotifyAuth(){
	$.ajax({
			  dataType: "json",
		  url: "https://kodukokad.ee/rain/spotify.php"
		 }).done(function(response){
			spotify_token_type=response.token_type;
			spotify_token=response.access_token;
		});
}

spotifyAuth();


function getData(onclick, target){
	getDataSpotify(onclick, target);
	getDataApple(onclick, target);
}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

        if (request.greeting == "hello")
            sendResponse({farewell: "goodbye"});
});




function getDataSpotify(onclick, target)
		{
			
			if (onclick === undefined) {
		        onclick = false;
		    }

			if (counter ==1) {
				chrome.runtime.sendMessage({ "newIconPath" : "icon-loading.png" });
			}
			
			
			var token = spotify_token_type+" "+ spotify_token;

			if(onclick){
				var target = target;
				var artist = target.attr("data-artist");
				var album = target.attr("data-album");
			}else{
				var artist = albumslist[counter][0];
				var album = albumslist[counter][1];
			}



		    $.ajax({
			    url:  "https://api.spotify.com/v1/search?q=album%3A"+album+"+artist%3A"+artist+"&type=album",
		        async: true,
		        headers: {
					"Authorization": token
				},
		        dataType: 'json'
		    }).done(function(response){
		        	try{
		        		albumslist[counter][3] = response.albums.items[0].external_urls.spotify;
		        		var putItems = albumslist[counter][2];
		        		if(onclick){
		        			putItems=target;
		        		}
		        		$(putItems).append(" <a href="+response.albums.items[0].uri+" title='"+ response.albums.items[0].name +"' class='play-now__btn play-now__spotify' >spotify</a> ");
		        		//$(albumslist[counter][2]).append(" <a href="+response.albums.items[0].external_urls.spotify+" title='"+ response.albums.items[0].name +"' class='play-now__btn play-now__spotify' target='_blank'>spotify</a> ");
		        		albumslist[counter][5] = "response.albums.items[0].uri";
		        		founditems++;
		        		if(!onclick){
		        			chrome.runtime.sendMessage({ foundtotal : founditems.toString(), foundlinks : albumslist  });
		        		}	
		        		
		        		
		        	}catch(e){
					    if(e){
					    	albumslist[counter][3] = "";
					    	albumslist[counter][5] = "";	
					    //	console.log("no album")
					    }
				    }
		       
		            counter++;
		            	
		          

		            if (counter < countertotal) {
		            	if(!onclick){
		            		getDataSpotify();	
		            	}
		            }
		            else{
		            	chrome.runtime.sendMessage({ "newIconPath" : "icon-active.png" });
		            	sendList();
		            }

		    }).fail(function(){
		    	counter++;		          
		            if (counter < countertotal) {
		            	if(!onclick){
		            		getDataSpotify();	
		            	}	
		            }
		            else{
		            	sendList();
		            	chrome.runtime.sendMessage({ "newIconPath" : "icon-active.png" });
		            }
		    });
		}

function getDataApple(onclick, target){

	if (counterapple ==1) {
				chrome.runtime.sendMessage({ "newIconPath" : "icon-loading.png" });
			}

	if (onclick === undefined) {
		        onclick = false;
		    }		
	if(onclick){
				var target = target;
				var artist = target.attr("data-artist");
				var album = target.attr("data-album");
			}else{
				var artist = albumslist[counterapple][0];
				var album = albumslist[counterapple][1];
			}	    

	$.ajax({
			    url:  "https://itunes.apple.com/search?term="+artist+"+"+album+"&entity=album",
		        async: true,
		        dataType: 'json'
		    }).done(function(response){
		        	try{
		        		albumslist[counterapple][4] = response.results[0].collectionViewUrl;
		        		var putItems = albumslist[counterapple][2];
		        		if(onclick){
		        			putItems=target;
		        		}

		        		$(putItems).append("<a href="+ albumslist[counterapple][4] +" title='"+ albumslist[counterapple][0] +"' class='play-now__btn play-now__apple' target='_blank'>apple</a> ");
		        		founditems++;
		        		//founditem = "<a href="+response.albums.items[0].external_urls.spotify+" class='play-now__spotify' target='_blank' data-onpage='"+albumslist[counterapple][2]+"'>"+ decodeURIComponent(albumslist[counterapple][0])+" - " + decodeURIComponent(albumslist[counterapple][1]) +"</a>";
		        		
		        	//	foundlist.push(founditem);
		        	if(!onclick){

		        		chrome.runtime.sendMessage({ foundtotal : founditems.toString(), foundlinks : albumslist   });
					}			        		
		        		
		        	}catch(e){
					    if(e){
					    	albumslist[counterapple][4] = "";
					    //	console.log("no album")
					    }
				    }
		       
		            counterapple++;
		            	
		          

		            if (counterapple < countertotal) {
		            	if(!onclick){
		            		getDataApple();	
		            	}
		            }
		            else{
		            	sendList();
		           		chrome.runtime.sendMessage({ "newIconPath" : "icon-active.png" });
		            }

		    }).fail(function(){
		    	counterapple++;		          
		            if (counterapple < countertotal) {
		            	if(!onclick){
		            		getDataApple();	
		            	}	
		            }
		            else{
		            	sendList();
		            	chrome.runtime.sendMessage({ "newIconPath" : "icon-active.png" });
		            }
		    });

}



$(document).on('click', '.play-now__checkdata', function(e){
		var target= $(this).closest('p[class^="now-playing"]');
		getData(true, target);
		$(this).remove();
		e.preventDefault();
	 });


function sendList(){
//	console.table(albumslist)
	//chrome.runtime.sendMessage({ foundlinks : "tere" });
}
