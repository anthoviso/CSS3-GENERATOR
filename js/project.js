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
  $('section > div > input[type=text]').map(function(index) {
    if($( this ).val() == ""){
     var replacementEmpty = $( this ).attr('id');
      $('.cssrender' + replacementEmpty + '').parent().hide();
    }else if($( this ).val() != ""){
     var replacement = $( this ).attr('id');
    $('.cssrender' + replacement + '').parent().show();

    }
  });
}

function sortByClass(a, b) {
        return a.className > b.className;
}
function sortInvByClass(a, b) {
        return a.className < b.className;
}
function button_sortByClass(){
  var elemToSort = $('section').find('div').sort(sortByClass);
  $('section').append(elemToSort);
}
function button_sortInvByClass(){
  var elemToSort = $('section').find('div').sort(sortInvByClass);
  $('section').append(elemToSort);
}
function OnSelectionChange (select) {
	var selectedOption = select.options[select.selectedIndex];
	if (selectedOption.value == 'Arial'){
		$('#font-family').val('Arial');
  }else if (selectedOption.value == 'Comic Sans MS'){
		$('#font-family').val('Comic Sans MS');
	}else if(selectedOption.value == 'Georgia'){
    $('#font-family').val('Georgia');
	}else if(selectedOption.value == 'Impact'){
    $('#font-family').val('Impact');
	}else if(selectedOption.value == 'Times New Roman'){
    $('#font-family').val('Times New Roman');
	}else if(selectedOption.value == 'Verdana'){
    $('#font-family').val('Verdana');
	}else if(selectedOption.value == ''){
    $('#font-family').val('');
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
	$('#text-decoration').val("");
	$('#font-weight').val("");
	$('#color').val("");
	$('#font-family').val("");
	$('#font-size').val("")
	$('#font-style').val("");
	$('#text-align').val("");
	$('#width').val("100px");
	$('#height').val("100px");
	$('#border').val("");
	$('#border-radius').val("");
	$('#opacity').val("");
	$('#box-shadow').val("");
	$('#text-shadow').val("");
	$('#padding').val("");
	$('#margin').val("");
	$('#zindex').val("");
	$('#box-sizing').val("");
	$('#position').val("");
	$('#display').val("");
	$('#visibility').val("");
	$('#outline').val("");
	$(".v-buttonGroupControl").prop("checked", false);
	textValueForm.value="";
	$('#line-height').val("");
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

    if(elProperty[i].option == ('true')){
        var myinput2Elem = '<span id="less' +  elProperty[i].property  + '"" class="value_less"><i class="fa fa-minus" aria-hidden="true"></i></span><span id="more' +  elProperty[i].property  + '"" class="value_more"><i class="fa fa-plus" aria-hidden="true"></i></span>';
    }else{
      var myinput2Elem = '';
    }

    var mydivElem = '<div class="' + elProperty[i].property + 'Proprieties"> ' + mypElem +myinput1Elem +
     '<a href="https://developer.mozilla.org/fr/docs/Web/CSS/' + elProperty[i].property +
      '" target="_blank"><span "="" class="button_help"><i class="fa fa-question-circle" aria-hidden="true"></i></span></a>' + myinput2Elem + '</div>';
    $('.cssElements > section').append(mydivElem);
  }

  for (i=0;i < elProperty.length;i++){
   $('.ace_first').after('<div class="ace_line " id="divrender' + elProperty[i].property + '" ><p class="ace_gutter ace_gutter-cell" unselectable="on"></p><span id="cssrender' + elProperty[i].property + '" class="cssPadLeft cssrender' + elProperty[i].property + '"></span></div>');
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
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    var allProperties = request.response;
    showProperties(allProperties);
  }

 var unit = 'px';
    /* Lorsque l'on clic sur une propriété dans le code css, on l'affiche dans le menu de gauche */
    $("#CSSRENDER").on('click', '.ace_line', function(){
      var selectedElemId =  $(this).attr('id');
      if(selectedElemId ){
        selectedElemId = selectedElemId.replace("divrender","");

        $('section > div').removeClass('selectedElem');
        $('#' + selectedElemId + '').parent().addClass('selectedElem');
      }
    });
      $(function() {
    $('.button_empty').on('click', function(){
      $('#inputFilter').val('');
      $('section > div').show();
    });
  });

  $(function() {
    $('#inputFilter').on('click input', function(){
      // console.log($('#inputFilter').val());
      $('section > div').removeClass('selectedElem');
      $('section > div').hide();
      for(i=1;i<=$('section > div').length;i++){
        if($('section > div:nth-child(' + i + ')').attr('class').indexOf($('#inputFilter').val()) > -1){
          // console.log(i);
          var ClassFilter = $('section > div:nth-child(' + i + ')').attr('class');
          $("." + ClassFilter).show();
        }
      }
    });
  });
  $(function() {
    $('.value_less').on('click', function() {
        // console.log($(this).attr('class') );
        // console.log($(this).attr('id') );
        var spanLessParent =   $(this).parent().attr('class');
        var presentValue;
        if($('.' + spanLessParent + ' > input')[0].value == ''){
          presentValue = 1;
        }else{
          presentValue =  $('.' + spanLessParent + ' > input')[0].value;
        }
        var intpresentValue = parseInt(presentValue);
        $('.' + spanLessParent + ' > input')[0].value = intpresentValue - 1 + unit;
    });



    $('.value_more').on('click', function() {
        var spanLessParent =   $(this).parent().attr('class');
        var presentValue;
        if($('.' + spanLessParent + ' > input')[0].value == ''){
          presentValue = 1;
        }else{
          presentValue =  $('.' + spanLessParent + ' > input')[0].value;
        }
        var intpresentValue = parseInt(presentValue);
        $('.' + spanLessParent + ' > input')[0].value = intpresentValue + 1 + unit;
    });
  });
});
