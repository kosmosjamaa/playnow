$(document).ready(function() {

	if( $(".article-title").text().indexOf("Kriitikute personaalsed edetabelid")>= 0){
		$(".article-body p").each(function(i){ 		
			var albumgroup = [];
			var m = $(this);
			var albuminfo = $(this).text();
			var match =/[a-zA-Z]/.exec(albuminfo);
			var additem = true;
			if(match){
	  			var albumrow =albuminfo.substring(albuminfo.indexOf(match[0])).trim();
	  			var result = albumrow.replace('-', '').split(/"|“|'|„/);	
	  			if(result.length >= 2){
					var album = encodeURIComponent(result[1].trim());
					var artist = encodeURIComponent(result[0].trim());
				}
				else{
					additem = false;
					var album= "";
					var artist = "";
				}
			}else{
					additem = false;
					var album= "";
					var artist = "";
			}
			var btnbox = "now-playing_"+ makeid() + "-"+i;
			
			//console.log(album);
			if(additem){
				$(m).addClass(btnbox);
				albumgroup[0]=artist;
				albumgroup[1]=album;
				$(m).attr("data-artist", artist);
				$(m).attr("data-album", album);
				$(m).append("<span class='play-now__btn play-now__checkdata'>check stream</span>")
				albumgroup[2]="."+btnbox;
				albumslist.push(albumgroup);
			}	

		}).promise().done( function(){ 
			countertotal = albumslist.length;
		//	getData();
		} );

	}else{

		$(".charstyle1").each(function(i){
			var albumgroup = [];
			var m = $(this).closest("h4");
			var album = encodeURIComponent($(m).nextAll(".extra-style-2").first().text().replace('„', '').replace('“', ''));
			var artist = encodeURIComponent($(m).nextAll(".extra-style-1").first().text().replace(':', ''));
			var btnbox = "now-playing_"+ makeid() + "-"+i;
			$(m).nextAll(".extra-style-2").first().addClass(btnbox);
			albumgroup[0]=artist;
			albumgroup[1]=album;
			albumgroup[2]="."+btnbox;
			albumslist.push(albumgroup);
		}).promise().done( function(){ 
			countertotal = albumslist.length;
			getData();
		} );
	}
	
	



});	

