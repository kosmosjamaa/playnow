$(document).ready(function() {

	$(".reviews.list li, .list.reviewArchive li").each(function(i){
		var albumgroup = [];
		var m = $(this);
		var releasedata = $.trim($(this).find(".comments").next().find("h1").text());
		var album = encodeURIComponent(releasedata.substr(releasedata.indexOf(" - ") + 3).replace(':', ''));
		var artist = encodeURIComponent(releasedata.substring(0,releasedata.indexOf(" - ")).replace(':', ''));		
		var btnbox = "now-playing_"+ makeid() + "-"+i;
		
		
		$(m).addClass(btnbox );
		
		albumgroup[0]=artist;
		albumgroup[1]=album;
		albumgroup[2]="."+btnbox;
		albumslist.push(albumgroup);
	}).promise().done( function(){ 
		countertotal = albumslist.length;
	//	console.table(albumslist);
		getData();
	 } );

});	

