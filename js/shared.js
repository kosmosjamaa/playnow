var counter = 0;
var countertotal ;

albumslist = [];

function getData()
		{
				
		    $.ajax({
			    url:  "https://api.spotify.com/v1/search?q=album%3A"+albumslist[counter][1]+"+artist%3A"+albumslist[counter][0]+"&type=album",
		        async: true,
		        dataType: 'json'
		    }).done(function(response){
		   
		        	try{
		        		$(albumslist[counter][2]).append(" <a href="+response.albums.items[0].external_urls.spotify+" title='"+ response.albums.items[0].name +"' class='play-now__spotify' target='_blank'>spotify</A> ");
		        		console.log(response.albums.items[0].name);
		        	}catch(e){
					    if(e){
					    	console.log("no album")
					    }
				    }
		       
		       		//console.log(counter) 	
		            counter++;		          
		            if (counter < countertotal) {
		            	getData();
		            }
		        

		    }).fail(function(){
		    	console.log("mis nyyd")
		    	counter++;		          
		            if (counter < countertotal) {
		            	getData();
		            }
		    });
		}