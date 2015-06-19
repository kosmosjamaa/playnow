var counter = 0;
var countertotal ;
albumslist = [];

chrome.runtime.sendMessage({ "newIconPath" : "icon-active.png" });

function getData()
		{
			
			if (counter ==1) {
				chrome.runtime.sendMessage({ "newIconPath" : "icon-loading.png" });
			}

		    $.ajax({
			    url:  "https://api.spotify.com/v1/search?q=album%3A"+albumslist[counter][1]+"+artist%3A"+albumslist[counter][0]+"&type=album",
		        async: true,
		        dataType: 'json'
		    }).done(function(response){
		        	try{
		        		$(albumslist[counter][2]).append(" <a href="+response.albums.items[0].external_urls.spotify+" title='"+ response.albums.items[0].name +"' class='play-now__spotify' target='_blank'>spotify</A> ");
		        		//console.log(response.albums.items[0].name);
		        	}catch(e){
					    if(e){
					    //	console.log("no album")
					    }
				    }
		       
		            counter++;		          
		            if (counter < countertotal) {
		            	getData();
		            }
		            else{
		            	chrome.runtime.sendMessage({ "newIconPath" : "icon-done.png" });
		            }

		    }).fail(function(){
		    	counter++;		          
		            if (counter < countertotal) {
		            	getData();
		            }
		            else{
		            	chrome.runtime.sendMessage({ "newIconPath" : "icon-done.png" });
		            }
		    });
		}


