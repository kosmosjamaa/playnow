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


function getData(){
	getDataSpotify();
	getDataApple();
}


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

        if (request.greeting == "hello")
            sendResponse({farewell: "goodbye"});
});


function getDataSpotify()
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
		        		albumslist[counter][3] = response.albums.items[0].external_urls.spotify;
		        		$(albumslist[counter][2]).append(" <a href="+response.albums.items[0].uri+" title='"+ response.albums.items[0].name +"' class='play-now__btn play-now__spotify' >spotify</a> ");
		        		//$(albumslist[counter][2]).append(" <a href="+response.albums.items[0].external_urls.spotify+" title='"+ response.albums.items[0].name +"' class='play-now__btn play-now__spotify' target='_blank'>spotify</a> ");
		        		albumslist[counter][5] = "response.albums.items[0].uri";
		        		founditems++;
		        		chrome.runtime.sendMessage({ foundtotal : founditems.toString(), foundlinks : albumslist  });
		        		
		        		
		        	}catch(e){
					    if(e){
					    	albumslist[counter][3] = "";
					    	albumslist[counter][5] = "";	
					    //	console.log("no album")
					    }
				    }
		       
		            counter++;
		            	
		          

		            if (counter < countertotal) {
		            	getDataSpotify();
		            }
		            else{
		            	chrome.runtime.sendMessage({ "newIconPath" : "icon-active.png" });
		            	sendList();
		            }

		    }).fail(function(){
		    	counter++;		          
		            if (counter < countertotal) {
		            	getDataSpotify();
		            }
		            else{
		            	sendList();
		            	chrome.runtime.sendMessage({ "newIconPath" : "icon-active.png" });
		            }
		    });
		}

function getDataApple(){

	if (counterapple ==1) {
				chrome.runtime.sendMessage({ "newIconPath" : "icon-loading.png" });
			}

	$.ajax({
			    url:  "https://itunes.apple.com/search?term="+albumslist[counterapple][1]+"+"+albumslist[counterapple][0]+"&entity=album",
		        async: true,
		        dataType: 'json'
		    }).done(function(response){
		        	try{
		        		albumslist[counterapple][4] = response.results[0].collectionViewUrl;
		        		$(albumslist[counterapple][2]).append("<a href="+ albumslist[counterapple][4] +" title='"+ albumslist[counterapple][0] +"' class='play-now__btn play-now__apple' target='_blank'>apple</a> ");
		        		founditems++;
		        		//founditem = "<a href="+response.albums.items[0].external_urls.spotify+" class='play-now__spotify' target='_blank' data-onpage='"+albumslist[counterapple][2]+"'>"+ decodeURIComponent(albumslist[counterapple][0])+" - " + decodeURIComponent(albumslist[counterapple][1]) +"</a>";
		        		
		        	//	foundlist.push(founditem);
		        		chrome.runtime.sendMessage({ foundtotal : founditems.toString(), foundlinks : albumslist   });
		        		
		        		
		        	}catch(e){
					    if(e){
					    	albumslist[counterapple][4] = "";
					    //	console.log("no album")
					    }
				    }
		       
		            counterapple++;
		            	
		          

		            if (counterapple < countertotal) {
		            	getDataApple();
		            }
		            else{
		            	sendList();
		           		chrome.runtime.sendMessage({ "newIconPath" : "icon-active.png" });
		            }

		    }).fail(function(){
		    	counterapple++;		          
		            if (counterapple < countertotal) {
		            	getDataApple();
		            }
		            else{
		            	sendList();
		            	chrome.runtime.sendMessage({ "newIconPath" : "icon-active.png" });
		            }
		    });

}


function sendList(){
//	console.table(albumslist)
	//chrome.runtime.sendMessage({ foundlinks : "tere" });
}
