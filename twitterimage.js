//Created by Afif Zafri - GitHub (afzafri)
document.body.innerHTML += "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js'></script>" +
										 "<div id='displayall'></div>" +
										 "<style>body * {visibility: hidden;}#displayall, #displayall * {visibility: visible;}#displayall {position: absolute;left: 0;top: 0; border: 2px solid black}<style>";
										 	 
$(document).ready(function(){
	$('#displayall').empty();
	var dataAll = "";
	var no = 1;
	var name = $('.ProfileAvatar-image').attr('alt');
	$('.AdaptiveMedia-photoContainer').each(function(){
		var imglink = $(this).attr('data-image-url');
		dataAll += no+". <a href='"+imglink+"' target='_blank' download>"+imglink+"</a></br>";
		no++;
	})
	$('#displayall').append("<h2>"+name+" Image Download Links:</h2><br>"+dataAll+"<br>Afif Zafri &copy; 2016");
	$('body').scrollTop(0);
	alert("SUCCESS! CLICK ON LINKS TO DOWNLOAD");
});