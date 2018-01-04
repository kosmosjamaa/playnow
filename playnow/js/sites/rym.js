$(document).ready(function() {

	$(".album, .list_album").each(function(i){
		var albumgroup = [];
		var btnbox = "now-playing_"+ makeid() + "-"+i;

		if($(this).hasClass("list_album")){
			var m = $(this).closest('.main_entry');
			var album = encodeURIComponent($.trim($(this).text()).replace(':', ''));
			var artist = encodeURIComponent($.trim($(m).find(".list_artist").text()).replace(':', ''));
			$(m).addClass(btnbox);
		}else{
			var m = $(this).closest('.disco_info');
			var album = encodeURIComponent($.trim($(this).text()).replace(':', ''));
			var artist = encodeURIComponent($.trim($(this).closest(".artist_left_col").find(".artist_name h1").text()).replace(':', ''));
			$(m).find(".disco_mainline").addClass(btnbox);	
		}
		
		

		
		albumgroup[0]=artist;
		albumgroup[1]=album;
		albumgroup[2]="."+btnbox;
		albumslist.push(albumgroup);
	}).promise().done( function(){ 
		countertotal = albumslist.length;
		getData();
	 } );

});	

