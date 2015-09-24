$(document).ready(function() {

	$(".release__title").each(function(i){
		var albumgroup = [];
		var t = $(this);
		var m = $(this).closest(".product_item");
		var album = encodeURIComponent($.trim($(t).text().replace(':', '')));
		var artist = encodeURIComponent($.trim($(m).find(".release__artist").text().replace(':', '')));
		var btnbox = "now-playing_"+ makeid() + "-"+i;
		
		
		$(m).addClass(btnbox );
		$(m).addClass("thisisboomkat" );
		
		albumgroup[0]=artist;
		albumgroup[1]=album;
		albumgroup[2]="."+btnbox;
		albumslist.push(albumgroup);
	}).promise().done( function(){ 
		countertotal = albumslist.length;
		//console.table(albumslist);
		getData();
	 } );

});	

