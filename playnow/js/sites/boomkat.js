$(document).ready(function() {

	$(".release__title, .product-listing .product").each(function(i){
		var albumgroup = [];
		var t = $(this);
		if(t.hasClass("product")){
			var m = $(this).find(".details .table .album .table-cell:first-child .table-cell-text-fit");	
			var album = encodeURIComponent($.trim($(m).find(".album-title").text().replace(':', '')));
			var artist = encodeURIComponent($.trim($(m).find("strong").text().replace(':', '')));
		} 
		
		else{
			var m = $(this).closest(".release__details");
			var album = encodeURIComponent($.trim($(t).text().replace(':', '')));
			var artist = encodeURIComponent($.trim($(m).find(".release__artist").text().replace(':', '')));
			if((t).closest(".chart-item-content-mobile").length){
				m = $(this).closest(".chart-item").find(".chart-item-title");
			}else{
				m = $(this).closest(".product_item");
			}
		}	
		//console.log(m);		
		var btnbox = "now-playing_"+ makeid() + "-"+i;

		$(m).addClass(btnbox );
	//	$(m).addClass("thisisboomkat" );
		
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

