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

var container2 = document.getElementById("output2");
var container3 = document.getElementById("htmlTxtValue");
var colorValue = $('#color').val();
var dieze = '';


function toggleEmptyElem(){
  $('.propertyproperty input[type=text]').map(function(index) {
    if($( this ).val() == ""){
     var replacementEmpty = $( this ).attr('id');
      $('.cssrender' + replacementEmpty + '').parent().hide();
    }else if($( this ).val() != ""){
     var replacement = $( this ).attr('id');
    $('.cssrender' + replacement + '').parent().show();

    }
  });
}

function OnSelectionChange (select) {
	var selectedOption = select.options[select.selectedIndex];
	if (selectedOption.value == 'Arial'){
		fontFamily.value='arial';
		}else if (selectedOption.value == 'Comic Sans MS'){
		fontFamily.value='Comic Sans MS';
		}else if(selectedOption.value == 'Georgia'){
		fontFamily.value='Georgia';
		}else if(selectedOption.value == 'Impact'){
		fontFamily.value='Impact';
		}else if(selectedOption.value == 'Times New Roman'){
		fontFamily.value='Times New Roman';
		}else if(selectedOption.value == 'Verdana'){
		fontFamily.value='Verdana';
		}else if(selectedOption.value == ''){
		fontFamily.value='';
	}
}

function OnSelectionChange2 (select) {
    var selectedOption2 = select.options[select.selectedIndex];
    if (selectedOption2.value == '10'){
		fontSize.value='10px';
		}else if (selectedOption2.value == '12'){
		fontSize.value='12px';
		}else if(selectedOption2.value == '16'){
		fontSize.value='16px';
		}else if(selectedOption2.value == '20'){
		fontSize.value='20px';
		}else if(selectedOption2.value == '24'){
		fontSize.value='24px';
		}else if(selectedOption2.value == '30'){
		fontSize.value='30px';
		}else if(selectedOption2.value == ''){
		fontSize.value='';
	}
}
/*switch principe*/

function selectText(containerid) {
	if (document.selection) {
		var range = document.body.createTextRange();
		range.moveToElementText(document.getElementById(containerid));
		range.select();
		} else if (window.getSelection) {
		var range = document.createRange();
		range.selectNode(document.getElementById(containerid));
		window.getSelection().addRange(range);
	}
}

function reset () {
	$('#background').val("white");
	$('#textDecoration').val("");
	$('#fontWeight').val("");
	$('#color').val("");
	$('#fontFamily').val("");
	$('#fontSize').val("")
	$('#fontStyle').val("");
	$('#textAlign').val("");
	$('#width').val("100px");
	$('#height').val("100px");
	$('#border').val("");
	$('#borderRadius').val("");
	$('#opacity').val("");
	$('#boxShadow').val("");
	$('#textShadow').val("");
	$('#padding').val("");
	$('#margin').val("");
	$('#zindex').val("");
	$('#boxSizing').val("");
	$('#position').val("");
	$('#display').val("");
	$('#visibility').val("");
	$('#outline').val("");
	$('#boxSizing').val("");
	$(".v-buttonGroupControl").prop("checked", false);
	textValueForm.value="";
	$('#lineHeight').val("");
}

function activecodehtml () {
  $('#inputHtml').addClass("activeCode");
  $('.inputCSS').removeClass("activeCode");
    $('.inputCSS').parent().removeClass("activeCode");
    $('#CSSRENDER').hide();
    $('#HTMLRENDER').show();
    $('#copyCodeCSS').hide();
    $('#copyCodeHTML').show();
}

function activecodecss () {
  $('#inputHtml').removeClass("activeCode");
    $('.inputCSS').addClass("activeCode");
    $('.inputCSS').parent().addClass("activeCode");
    $('#HTMLRENDER').hide();
    $('#CSSRENDER').show();
  $('#copyCodeCSS').show();
  $('#copyCodeHTML').hide();
}

//Set up a requestAnimationFrame loop
function update (jsonObj) {
    // requestAnimationFrame(update);
    /* generate code*/
    var elProperty = jsonObj['properties'];
    container3.innerHTML = textValueForm.value;
    $('#outputContainer').html(textValueForm.value);

    for (i=0;i < elProperty.length;i++){
      /* Assign values into the div*/
      $('#outputContainer').css(elProperty[i].property , $('#' + elProperty[i].property).val());
      /* show / hide if value is empty*/
      if($('#' + elProperty[i].property).val() == ""){
        $('.divrender' + elProperty[i].property).css('display','none');
        }
      else{
        $('.divrender' + elProperty[i].property).css('display','block');
        $('.cssrender' + elProperty[i].property).html("<span class='attributs'>" + elProperty[i].property + "</span> : " + $('#' + elProperty[i].property).val() + ";");
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
  // console.log(jsonObj);
  for (var i = 0; i < elProperty.length; i++) {
    var mypElem = '<p>' + elProperty[i].property + '</p>';
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

  for (i=0;i < elProperty.length;i++){
   $('.ace_first').after('<div class="ace_line " id="divrender' + elProperty[i].property + '" ><p class="ace_gutter ace_gutter-cell" unselectable="on"></p><span id="cssrender' + elProperty[i].property + '" class="cssrender' + elProperty[i].property + '"></span></div>');
  // console.log(list[i]);
  }
  update(jsonObj);
  toggleEmptyElem();
  $(document).on('load click keyup input', function(){
    update(jsonObj);
    toggleEmptyElem();
  });
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

  // EVOLUTIONA VENIR
  // $( "#tags" ).autocomplete({
  //   source: list
  // });

    /* Lorsque l'on clic sur une propriété dans le code css, on l'affiche dans le menu de gauche */
    $("#CSSRENDER").on('click', '.ace_line', function(){
      var selectedElemId =  $(this).attr('id');
      if(selectedElemId ){
        selectedElemId = selectedElemId.replace("divrender","");

        $('.propertyproperty').removeClass('selectedElem');
        $('#' + selectedElemId + '').parent().addClass('selectedElem');
      }
    });

  var RegleContainer = document.getElementById("rPixelHaut");
  RegleContainer.innerHTML += "<div class='InvPix10'></div>";
  for (var i = 0; i < 15; i++) {
    RegleContainer.innerHTML += "<div class='GrandPix10'></div>";
    for (var j = 0; j < 9; j++) {
      RegleContainer.innerHTML += "<div class='Pix10'></div>";
    }
  }

  var RegleContainer2 = document.getElementById("rPixelGauche");
  RegleContainer.innerHTML += "<div class='VInvPix10'></div>";
  for (var i = 0; i < 6; i++) {
    RegleContainer.innerHTML += "<div class='VGrandPix10'></div>";
    for (var j = 0; j < 9; j++) {
      RegleContainer.innerHTML += "<div class='VPix10'></div>";
    }
  }

  $(function() {
    $('input').on('input click', function() {
      if($(this).attr('id') == 'rangeType'){
        $('.' + $(this)[0].className + 'InputLeft')[0].value = $(this).val() + "px";
      }else if($(this).hasClass('range2')){
        $('#opacity').val($('.range2').val() / 100);
      }else if($(this).hasClass('range3')){
        $('#border').val($('.range3').val() + "px solid black");
      }
    });
  });
});
