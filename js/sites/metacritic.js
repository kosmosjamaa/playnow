$(document).ready(function() {

	$(".product, .product_row").each(function(i){
		var albumgroup = [];
		var m = $(this);
		var album = encodeURIComponent($.trim($(m).find(".product_title a").text()).replace(':', ''));
		var artistobj =  $(m).find(".product_artist").clone();
		artistobj.find(".label").remove();
		artistobjt=$.trim(artistobj.text()).replace(':', '');
		if(m.parent().hasClass('list_product_summaries')){
			artistobjt = artistobjt.slice(2);
		}
		var artist = encodeURIComponent(artistobjt);
		var btnbox = "now-playing_"+ makeid() + "-"+i;

		$(m).find("div.product_title").addClass(btnbox);
		albumgroup[0]=artist;
		albumgroup[1]=album;
		albumgroup[2]="."+btnbox;
		albumslist.push(albumgroup);
	}).promise().done( function(){ 
		countertotal = albumslist.length;
		getData();
	 } );

});	

