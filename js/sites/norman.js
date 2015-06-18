$(window).load(function() {
	console.log("hello there");
	

	
	$(".itembrowse.artist_first").each(function(i){
		var albumgroup = [];

		/*
		if($(this).hasClass("available_formats_str")){
			var m = $(this).closest("div");
			var artistdata = $(this).closest(".hero").clone();
			artistdata.remove(".available_formats_str, .clearfix, em");

			var album = encodeURIComponent($.trim($(this).closest(".hero").find("em").text()).replace(':', ''));
			var artist = encodeURIComponent($.trim(artistdata.text()).replace(':', ''));
			
			var btnbox = "adfi4dasdasd"+i;
			$(m).addClass(btnbox);
		}
		*/	


		var m = $(this);
		var album = encodeURIComponent($(m).find("a:last").text().replace(':', ''));
		var artist = encodeURIComponent($(m).find("a:first").text().replace(':', ''));
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


	



});	

