$(window).load(function() {
	console.log("hello there");
	

	$(".actions").each(function(i){
		var albumgroup = [];
		var m = $(this).closest(".data");
		var album = encodeURIComponent($(m).find(".title").text().replace(':', ''));
		var artist = encodeURIComponent($(m).find(".artist").text().replace(':', ''));
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
