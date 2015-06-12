$(window).load(function() {
	console.log("hello there");
	var counter = 0;
	var countertotal ;

	albumslist = [];
	$(".title_search_highlight").each(function(i){
		var albumgroup = [];
		var m = $(this).closest("tr");
		var album = encodeURIComponent($(m).find(".title_search_highlight").text().replace(':', ''));
		var artist = encodeURIComponent($(m).find(".artist_search_highlight").text().replace(':', ''));
		var btnbox = "adfi4dasdasd"+i;
		$(m).find(".productcover").addClass(btnbox);
		albumgroup[0]=artist;
		albumgroup[1]=album;
		albumgroup[2]="."+btnbox;
		albumslist.push(albumgroup);
	}).promise().done( function(){ 
		countertotal = albumslist.length;
		
		getData();
		console.table(albumslist);

	 } );


	

		//console.table(albumslist);
		

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
		        

		    });
		}




});	

