// JavaScript Document

$(document).ready(function(){

 $("#category").change(function(){
	  var option=$("#category").val();
	  
	  var url = "https://api.nytimes.com/svc/topstories/v2/"+option+".json";
		url += '?' + $.param({
		'api-key': "f0106115ee074d27962d2e81e4d2f005",
		'sort': "newest"
		});
		$.ajax({
		  url: url,
		  method: 'GET',
		}).done(function(result) {
				
			$('.section').remove();
			
			var count =1;
			
			for(var i=0; i < result.results.length; i++){
				
				if(count<=12){
					if(result.results[i].multimedia.length !== 0){
						
						$('.header').addClass("minified");

						// Article Abstract
						var articleAbstract = result.results[i].abstract;

						// Article URL
						var articleURL = result.results[i].url;

						//Article Image
						var articleImage = result.results[i].multimedia[4].url;
						
						// Creates DIV Element
						var newArticle = document.createElement("div");

						$(newArticle).css("background-image","url("+articleImage+")");
						$(newArticle).append("<a href=" + articleURL + ">" + articleAbstract + "</a>");
						$(newArticle).addClass("section"); //adds new class for Individual Grid Items
						$("#res").append(newArticle);
						count++;

					}//End If Statement
			}
			else{
				break;//Stop Looping	
			}
			}//End For Loop

		}).fail(function(err) {
		  throw err;
		});  

  });
});








