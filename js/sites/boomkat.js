$(document).ready(function() {

	$(".actions").each(function(i){
		var albumgroup = [];
		var m = $(this).closest(".data");
		var album = encodeURIComponent($(m).find(".title").text().replace(':', ''));
		var artist = encodeURIComponent($(m).find(".artist").text().replace(':', ''));
		var btnbox = "adfi4dasdasd"+i;
		/*
		if( $(this).parent().hasClass("line")){
			var m = $(this).closest(".line");
			var artist = encodeURIComponent($(m).find(".meta h4").text().replace(':', ''));
			var album = encodeURIComponent($(m).find(".meta h4").next("p").text().replace(':', ''));
		}*/
		
		$(m).addClass(btnbox );
		$(m).addClass("thisisboomkat" );
		
		albumgroup[0]=artist;
		albumgroup[1]=album;
		albumgroup[2]="."+btnbox;
		albumslist.push(albumgroup);
	}).promise().done( function(){ 
		countertotal = albumslist.length;
		getData();
	 } );

});	

