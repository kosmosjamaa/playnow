$(document).ready(function() {

	$(".itembrowse.artist_first").each(function(i){
		var albumgroup = [];
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
	 } );

});	

