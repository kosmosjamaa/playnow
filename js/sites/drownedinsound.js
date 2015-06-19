$(document).ready(function() {

	$(".release-title").each(function(i){
		var albumgroup = [];
		var m = $(this);
		var album = encodeURIComponent($.trim($(this).text()).replace(':', ''));
		var artist = encodeURIComponent($.trim($(this).closest(".greatest-text").prev().find(".release-artist").text()).replace(':', ''));
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

