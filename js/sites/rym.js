$(document).ready(function() {

	$(".album").each(function(i){
		var albumgroup = [];
		var m = $(this).closest('.disco_info');
		var album = encodeURIComponent($.trim($(this).text()).replace(':', ''));
		var artist = encodeURIComponent($.trim($(this).closest(".artist_left_col").find(".artist_name h1").text()).replace(':', ''));
		var btnbox = "adfi4dasdasd"+i;

		$(m).find(".disco_mainline").addClass(btnbox);
		albumgroup[0]=artist;
		albumgroup[1]=album;
		albumgroup[2]="."+btnbox;
		albumslist.push(albumgroup);
	}).promise().done( function(){ 
		countertotal = albumslist.length;
		getData();
	 } );

});	

