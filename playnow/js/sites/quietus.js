$(document).ready(function() {

	$(".review, .review_small").each(function(i){
		var albumgroup = [];
		var m = $(this);
		var artistobj = $(m).find("h4").clone();
		artistobj.find(".sub").remove();
		var album = encodeURIComponent($(m).find("h4 .sub").text().replace(':', ''));
		if($(this).hasClass("review_small")){
			var album = encodeURIComponent($(m).find(".sub").text().replace(':', ''));
		}
		var artist = encodeURIComponent(artistobj.text().replace(':', ''));
		var btnbox = "now-playing_"+ makeid() + "-"+i;

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

