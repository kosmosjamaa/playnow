$(window).load(function() {
	console.log("hello there");
	

	
	$(".stock-item").each(function(i){
		var albumgroup = [];
		var m = $(this);
		
		var artist = encodeURIComponent($(m).find(".stock-item-artist").text().replace(':', ''));
		var album = encodeURIComponent($(m).find(".stock-item-artist").next(".stock-item-title").text().replace(':', ''));
		
		var btnbox = "adfi4dasdasd"+i;
		$(m).find(".stock-item-holder").addClass(btnbox);

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

