//Polyfill for requestAnimationFrame
window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(/* function */ callback, /* DOMElement */ element){
		window.setTimeout(callback, 1000 / 60);
	};
})();

// var container = document.getElementById("output");
var container2 = document.getElementById("output2");
var container3 = document.getElementById("htmlTxtValue");
var colorValue = $('#color').val();
var dieze = '';
var listValues = ['Width','Height','Color','FontFamily','FontSize','LineHeight','FontStyle','FontWeight','TextDecoration','TextAlign','Background',
	'Opacity','Border','BorderRadius','TextShadow','BoxShadow','Padding','Margin','Display','Visibility','Outline','BoxSizing'];


//Set up a requestAnimationFrame loop
function update () {
    // requestAnimationFrame(update);

    container3.innerHTML = textValueForm.value;
	$('#outputContainer').css({"background": "" + dieze + $('#Background')[0].value + "",
		"color":"" + dieze + $('#Color')[0].value + "",
		"font-family":"" + $('#FontFamily')[0].value + "",
		"box-sizing":"" + $('#BoxSizing')[0].value + "",
		"line-height":"" + $('#LineHeight')[0].value + "",
		"display":"" + $('#Display')[0].value + "",
		"visibility":"" + $('#Visibility')[0].value + "",
		"outline":"" + $('#Outline')[0].value + "",
		"font-size":"" + $('#FontSize')[0].value + "",
		"font-style":"" + $('#FontStyle')[0].value + "",
		"text-align":"" + $('#TextAlign')[0].value + "",
		"font-weight":"" + $('#FontWeight')[0].value + "",
		"text-decoration":"" + $('#TextDecoration')[0].value + "",
		"width":"" + $('#Width')[0].value + "",
		"height":"" + $('#Height')[0].value + "",
		"border":"" + $('#Border')[0].value + "",
		"border-radius":"" + $('#BorderRadius')[0].value + "",
		"opacity":"" + $('#Opacity')[0].value + "",
		"box-shadow":"" + $('#BoxShadow')[0].value + "",
		"text-shadow":"" + $('#TextShadow')[0].value + "",
		"padding":"" + $('#Padding')[0].value + "",
		"margin":""  + $('#Margin')[0].value + "",
		"z-index":"" + $('#Zindex')[0].value + "",
		"box-sizing":"" + $('#BoxSizing')[0].value + "",
		"position":"" + $('#Position')[0].value + ";\" >" + textValueForm.value  + ""
		});
		$('#outputContainer').html(textValueForm.value);

    /* generate code*/

	for (i=0;i < listValues.length;i++){
		if($('#' + listValues[i]).val() == ""){
			$('.divrender' + listValues[i]).css('display','none');
			}
		else{
			$('.divrender' + listValues[i]).css('display','block');
			$('.cssrender' + listValues[i]).html("<span class='attributs'>" + listValues[i] + "</span> : " + $('#' + listValues[i]).val() + ";");
		}
	}

	/*
		if ( color.value.length == 6){
		dieze = "#";
		}else{dieze = "";}
	*/
}
$(document).on('click keyup input', function(){
  update();
  toggleEmptyElem()
});
