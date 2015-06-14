$(window).load(function() {
	
	console.log("hello there");

	$("img[alt='album cover']").each(function(i){
		var albumgroup = [];
		var m = $(this).closest("p");
		var artist = encodeURIComponent($(m).find("b:first-of-type").text().replace(':', ''));
		var album = encodeURIComponent($(m).find("b:first-of-type").next("img").next("b").text().replace(':', ''));
		var btnbox = "adfi4dasdasd"+i;
		$(m).find("input").before("<span class='"+btnbox+"'></span>");
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

