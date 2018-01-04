function makeAlbums(){

	$(".stock-item").each(function(i){
		if(!$(this).hasClass('now-playing_checked')){
			var albumgroup = [];
			var m = $(this);
			var artist = encodeURIComponent($(m).find(".stock-item-artist").text().replace(':', ''));
			var album = encodeURIComponent($(m).find(".stock-item-artist").next(".stock-item-title").text().replace(':', ''));
			var btnbox = "now-playing_"+ makeid() + "-"+i;

			$(m).find(".stock-item-holder").addClass(btnbox);
			albumgroup[0]=artist;
			albumgroup[1]=album;
			albumgroup[2]="."+btnbox;
			albumslist.push(albumgroup);
			$(this).addClass('now-playing_checked');
		}	

	}).promise().done( function(){ 
		countertotal = albumslist.length;
		getData();
	 } );
}

$(document).ready(function() {

	makeAlbums();

});	

