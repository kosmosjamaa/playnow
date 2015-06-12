$(window).load(function() {
	console.log("hello there");
	var counter = 0;
	var countertotal ;

	albumslist = [];
	$(".actions").each(function(i){
		var albumgroup = [];
		var m = $(this).closest(".data");
		var album = $(m).find(".title").text();
		var artist = $(m).find(".artist").text();
		var btnbox = "adfi4dasdasd"+i;
		$(m).addClass(btnbox);
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
		        dataType: 'json',
		        success:function(response){
		        	console.log(response)
		        	try{
		        		$(albumslist[counter][2]).append(" <a href="+response.albums.items[0].external_urls.spotify+" title='"+ response.albums.items[0].name +"' class='play-now__spotify' target='_blank'>spotify</A> ");
		        	}catch(e){
				    if(e){
				    	console.log("no album")
				    }
				}
		        	
		            counter++;
		          
		            if (counter < countertotal) {
		            	getData();
		            }
		        }
		    });
		}

});	

