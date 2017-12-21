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
	$('#outputContainer').css({"background": "" + dieze + $('#Background').val() + "",
		"color":"" + dieze + $('#Color').val() + "",
		"font-family":"" + $('#FontFamily').val() + "",
		"box-sizing":"" + $('#BoxSizing').val() + "",
		"line-height":"" + $('#LineHeight').val() + "",
		"display":"" + $('#Display').val() + "",
		"visibility":"" + $('#Visibility').val() + "",
		"outline":"" + $('#Outline').val() + "",
		"font-size":"" + $('#FontSize').val() + "",
		"font-style":"" + $('#FontStyle').val() + "",
		"text-align":"" + $('#TextAlign').val() + "",
		"font-weight":"" + $('#FontWeight').val() + "",
		"text-decoration":"" + $('#TextDecoration').val() + "",
		"width":"" + $('#Width').val() + "",
		"height":"" + $('#Height').val() + "",
		"border":"" + $('#Border').val() + "",
		"border-radius":"" + $('#BorderRadius').val() + "",
		"opacity":"" + $('#Opacity').val() + "",
		"box-shadow":"" + $('#BoxShadow').val() + "",
		"text-shadow":"" + $('#TextShadow').val() + "",
		"padding":"" + $('#Padding').val() + "",
		"margin":""  + $('#Margin').val() + "",
		"z-index":"" + $('#Zindex').val() + "",
		"box-sizing":"" + $('#BoxSizing').val() + "",
		"position":"" + $('#Position').val() + ";\" >" + textValueForm.value  + ""
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


function showProperties(jsonObj) {
  var elProperty = jsonObj['properties'];
console.log(jsonObj['properties']);
  for (var i = 0; i < elProperty.length; i++) {
    var mypElem = '<p>' + elProperty[i].property + '</p>';

    // myH2.textContent = 'Propriété : ' +  elProperty[i].property;
    // myPara2.textContent = 'Fonctionalités:';

    var elinput1= elProperty[i].input1;
    for (var j = 0; j < elinput1.length; j++) {
      var myinput1Elem = '<input type="text" class="' + elinput1[j].class + '" value="' + elinput1[j].value + '" id="' + elinput1[j].id + '"/>';
    }


    if(elProperty[i].hasOwnProperty('input2')){
      var elinput2 = elProperty[i].input2;
      for (var k = 0; k < elinput2.length; k++) {
        var myinput2Elem = '<input type="range" id="' + elinput2[k].id + '"  class="' + elinput2[k].class + '" value="' + elinput2[k].value + '" step="' + elinput2[k].step + '" min="' + elinput2[k].min + '" max="' + elinput2[k].max + '"/>';
      }
    }else{
      var myinput2Elem = '';
    }


    var mydivElem = '<div class=" ' + elProperty[i].property + 'Proprieties  propertyproperty"> ' + mypElem + myinput1Elem + myinput2Elem + '</div>';
    $('.cssElements > section').append(mydivElem);
  }
  update();
  toggleEmptyElem();
}

$( document ).ready(function() {
  // JSON
  var requestURL = 'data/properties.json';
  console.log('d');
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    var allProperties = request.response;
    showProperties(allProperties);
  }

  $(document).on('load click keyup input', function(){
    update();
    toggleEmptyElem();
  });

});
