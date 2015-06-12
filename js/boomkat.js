$(window).load(function() {
	
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
	});


	var i = 0;
			(function loop() {
				$.ajax({
			        url:  "https://api.spotify.com/v1/search?q=album%3A"+albumslist[i][1]+"+artist%3A"+albumslist[i][0]+"&type=album",
			        success: function (response) {
		        		if (response.albums.items[0].external_urls.spotify){
		        			var c = i -1;
		        			// response.albums.items[0].name+ "/"+ albumslist[i][1]
			        		$(albumslist[c][2]).append(" <a href="+response.albums.items[0].external_urls.spotify+" title='"+ response.albums.items[0].name +"' class='play-now__spotify' target='_blank'>spotify</A> ");
		        		}
			        }
			    });
				
			    if (++i < albumslist.length) {
			        setTimeout(loop, 100);
			    }
			})();

		//console.table(albumslist);

});	

