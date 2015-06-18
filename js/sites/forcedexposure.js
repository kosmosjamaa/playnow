$(window).load(function() {
	console.log("hello there");
	

	
	$(".search_resultfields").each(function(i){
		var albumgroup = [];
		var m = $(this);
		
		
		var artist = encodeURIComponent($.trim($(m).find("td:nth-child(1)").text()) );
		var album = encodeURIComponent($.trim($(m).find("td:nth-child(2)").text()) );
		
		
		var btnbox = "adfi4dasdasd"+i;
		$(m).find("td:nth-child(2)").addClass(btnbox);

		albumgroup[0]=artist;
		albumgroup[1]=album;
		albumgroup[2]="."+btnbox;
		albumslist.push(albumgroup);
	}).promise().done( function(){ 
		countertotal = albumslist.length;
		
		getData();
		console.table(albumslist);

	 } );


	



});	

