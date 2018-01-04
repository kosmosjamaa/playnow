$(document).ready(function() {

	$(".entry--musicreview,  .tile--musicreview").each(function(i){
		var albumgroup = [];
		var t = $(this);
		if(t.hasClass(".entry--musicreview")){
				var m = $(this).find(".review-heading__details");
			var album = encodeURIComponent($(t).find(".entry__main-title").text().replace(':', ''));
			var artist = encodeURIComponent($(t).find(".entry__subtitle").text().replace(':', ''));

		}
		else{
			var m = $(this).find(".byline");
			var album = encodeURIComponent($(t).find(".tile__album").text().replace(':', ''));
			var artist = encodeURIComponent($(t).find(".tile__artist").text().replace(':', ''));
		}	
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

