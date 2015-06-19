$(document).ready(function() {

	$("#music-reviews .item,  .music-reviews .item").each(function(i){
		var albumgroup = [];
		var m = $(this);
		var album = encodeURIComponent($(m).find(".item-subtitle").text().replace(':', ''));
		var artist = encodeURIComponent($(m).find(".item-title").text().replace(':', ''));
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

