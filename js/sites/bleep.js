$(document).ready(function() {

	$(".product-info").each(function(i){
		var albumgroup = [];
		var m = $(this);
		var artist = encodeURIComponent($(m).find(".artist").text().replace(':', ''));
		var album = encodeURIComponent($(m).find(".release-title").text().replace(':', ''));
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

