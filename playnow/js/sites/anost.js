$(document).ready(function() {

	$(".product").each(function(i){
		var albumgroup = [];
		var m = $(this);
		var artist = encodeURIComponent($.trim($(this).find(".article-list-artist").text()).replace(':', ''));
		var album = encodeURIComponent($.trim($(this).find(".article-list-title").text()).replace(':', ''));
		var btnbox = "now-playing_"+ makeid() + "-"+i;

		$(m).find(".article-list-infos").addClass(btnbox);
		albumgroup[0]=artist;
		albumgroup[1]=album;
		albumgroup[2]="."+btnbox;
		albumslist.push(albumgroup);
	}).promise().done( function(){ 
		countertotal = albumslist.length;
		getData();
	 } );

});	

