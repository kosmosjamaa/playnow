$(window).load(function() {
	
	albumslist = [];
	$("input[type='image']").each(function(i){
		var albumgroup = [];
		/*
		var artist = $(this).next("img").next("b").text();
		var albumobj = $(this).next("img").next("b").next("img").next("b");
		var album = $(albumobj).text();
		var btnplacer = $(this).next().append("<span id='play-this-btns-container"+i+"'></span>");
		*/

		var p =$(this).closest("p")
		var artist = $(p).find("b:first").text();
		console.log(artist);
		var album = $(this).prev().text();
		var btnplacer;
		albumgroup[0]=artist;
		albumgroup[1]=album;
		albumgroup[2]=btnplacer;
		//console.log(btnplacer);
		albumslist.push(albumgroup);
		
		
	});

	var i = 0;
	(function loop() {
		//console.log(albumslist[i][2])
		searchURL= "https://api.spotify.com/v1/search?q=album%3A"+albumslist[i][1]+"+artist%3A"+albumslist[i][0]+"&type=album";
	    $.ajax({
	        url: searchURL,
	        success: function (response) {
	        		var url = response.albums.items[0].external_urls.spotify;
	        		if (url){
	        		$(albumslist[i][2]).append(" <a href="+response.albums.items[0].external_urls.spotify+" class='play-now__spotify' target='_blank'>spotify</A> ");
	        		}
	        }
	    });
		
	    if (++i < albumslist.length) {
	        setTimeout(loop, 100);
	    }
	})();


	//console.log(albumslist);
});	

