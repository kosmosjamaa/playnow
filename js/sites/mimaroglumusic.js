$(document).ready(function() {

	$(".wsite-com-category-product").each(function(i){
		var albumgroup = [];
		var m = $(this);
		var releasedata = $.trim($(this).find(".wsite-com-category-product-name").text());
		var album = encodeURIComponent(releasedata.substr(releasedata.indexOf(" - ") + 3).replace(':', ''));
		var artist = encodeURIComponent(releasedata.substring(0,releasedata.indexOf(" - ")).replace(':', ''));		
		var btnbox = "now-playing_"+ makeid() + "-"+i;

		$(m).find(".wsite-com-category-product-wrap").addClass(btnbox);
		albumgroup[0]=artist;
		albumgroup[1]=album;
		albumgroup[2]="."+btnbox;
		albumslist.push(albumgroup);
	}).promise().done( function(){ 
		countertotal = albumslist.length;
		getData();
	 } );
});	

