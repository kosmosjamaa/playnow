var counter = 0;
var countertotal ;
var founditems = 0;
var founditem = "";
albumslist = [];

chrome.runtime.sendMessage({ "newIconPath" : "icon-active.png" });

function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


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
		        		founditems++;
		        		founditem = founditem + "<a href="+response.albums.items[0].external_urls.spotify+" class='play-now__spotify' target='_blank' data-onpage='"+albumslist[counter][2]+"'>"+ decodeURIComponent(albumslist[counter][0])+" - " + decodeURIComponent(albumslist[counter][1]) +"</A>";

		        		
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
		            	chrome.runtime.sendMessage({ foundtotal : founditems.toString() , "foundlink" : founditem.toString()  });
		            	console.log(founditem);
		            	chrome.runtime.sendMessage({ "newIconPath" : "icon-active.png" });
		            }

		    }).fail(function(){
		    	counter++;		          
		            if (counter < countertotal) {
		            	getData();
		            }
		            else{
		            	chrome.runtime.sendMessage({ "newIconPath" : "icon-active.png" });
		            }
		    });
		}


