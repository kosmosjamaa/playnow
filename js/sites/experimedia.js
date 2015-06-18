$(window).load(function() {
	console.log("hello there");
	

	
	$(".product_title, .itemTitle").each(function(i){
		var albumgroup = [];
		var m = $(this);
		
		var releasedata = $.trim($(this).find("a").text());
		var artist = encodeURIComponent(releasedata.substring(0,releasedata.indexOf(" - ")).replace(':', ''));
		var albumdata = releasedata.substr(releasedata.indexOf(" - ") + 3);
		var album = encodeURIComponent(albumdata.substring(0,albumdata.indexOf(" (")).replace(':', ''));		
		
		
		var btnbox = "adfi4dasdasd"+i;
		$(m).addClass(btnbox);

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

