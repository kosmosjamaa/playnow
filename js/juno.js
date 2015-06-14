$(window).load(function() {
	console.log("hello there");
	

	
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


	



});	

