$(document).ready(function() {

	$("tr.card").each(function(i){
		var albumgroup = [];
		var m = $(this);
		var albumobj = $(m).find("td.title").clone();
		albumobj.find(".button, .format, .artist_in_title").remove();
		var album = encodeURIComponent($.trim(albumobj.text()).replace(':', ''));
		var artist = encodeURIComponent($(m).find(".artist").text().replace(':', ''));
		var btnbox = "adfi4dasdasd"+i;

		$(m).find(".title").addClass(btnbox);
		albumgroup[0]=artist;
		albumgroup[1]=album;
		albumgroup[2]="."+btnbox;
		albumslist.push(albumgroup);
	}).promise().done( function(){ 
		countertotal = albumslist.length;
		getData();
	 } );

});	

