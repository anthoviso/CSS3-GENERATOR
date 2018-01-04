var container2 = document.getElementById("output2");
var container3 = document.getElementById("htmlTxtValue");
var colorValue = $('#color').val();
var dieze = '';
var cssCommentStart = '/*';
var cssCommentEnd = '*/';
var localData =
  {"defaultClass":{},
  "foo":{}
  };
var listProperties = [];
var unit = 'px';

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
  var elemToSort = $('.cssElements').find('section > div').sort(sortByClass);
  $('section').append(elemToSort);
}
function button_sortInvByClass(){
  var elemToSort = $('.cssElements').find('section > div').sort(sortInvByClass);
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
  for(y=0;y<listProperties.length;y++){
    $('#' + listProperties[y] + '').val("");
  }
	$('#background').val("white");
	$('#width').val("100px");
	$('#height').val("100px");
	$(".v-buttonGroupControl").prop("checked", false);
	textValueForm.value="";
  $(".backgroundProprieties .sp-preview-inner").css("background-color", $("#background").val());
  $(".colorProprieties .sp-preview-inner").css("color", $("#color").val());
}
function activecodehtml () {
  $('#inputHTMLcode').addClass("activeCode");
  $('#inputCSScode').removeClass("activeCode");
    $('#CSSRENDER').hide();
    $('#HTMLRENDER').show();
    $('#copyCodeCSS').hide();
    $('#copyCodeHTML').show();
}
function activecodecss () {
  $('#inputHTMLcode').removeClass("activeCode");
    $('#inputCSScode').addClass("activeCode");
    $('#HTMLRENDER').hide();
    $('#CSSRENDER').show();
  $('#copyCodeCSS').show();
  $('#copyCodeHTML').hide();
}
function spectrumInit(){
  $("#triggerSetbackground").spectrum({
      preferredFormat: "rgb",
      showInitial: true,
      showInput: true,
      showButtons: false,
      move: function(color) {
          $('#background').val(color.toHexString());
          $('#outputContainer').css('background',$('#background').val());
      },
      palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
  });
  $("#triggerSetcolor").spectrum({
      preferredFormat: "rgb",
      showInitial: true,
      showInput: true,
      showButtons: false,
      move: function(color) {
          $('#color').val(color.toHexString());
          $('#outputContainer').css('color',$('#color').val());
      },
      palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
  });
}
function searchPropterties(){
  // console.log($('#inputFilter').val());
  $('section > div').removeClass('selectedElem');
  $('section > div').hide();
  for(i=1;i<=$('section > div').length;i++){
    if($('section > div:nth-child(' + i + ')').attr('class').indexOf($('#inputFilter').val()) > -1){
      // console.log(i);
      var ClassFilter = $('section > div:nth-child(' + i + ')').attr('class');
      $("." + ClassFilter).show();
      $('#inputFilter:after').css('content',$('section > div').length);
    }
  }
}

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
//Set up a requestAnimationFrame loop
function update (jsonObj) {
    // requestAnimationFrame(update);
    /* generate code*/
    var elProperty = jsonObj['properties'];
    container3.innerHTML = textValueForm.value;
    $('#outputContainer').html(textValueForm.value);

    for (i=0;i < elProperty.length;i++){
      if($('#cssrender' + elProperty[i].property).hasClass('tmpRemove')){
        $('#outputContainer').css(elProperty[i].property , "");
      }else{
        $('#outputContainer').css(elProperty[i].property , $('#' + elProperty[i].property).val());
      }
    // Afficher les valuers dans le code généré
      if($('#' + elProperty[i].property).val() == ""){
        $('#cssrender' + elProperty[i].property).removeClass('tmpRemove');
        $('#divrender' + elProperty[i].property).remove();
        delete  localData.defaultClass[elProperty[i].property];
      }else{
        if($('#divrender' + elProperty[i].property).length > 0){
        }else{
          $('.defaultClass').append('<div class="ace_line " id="divrender' + elProperty[i].property + '" ><p class="ace_gutter ace_gutter-cell" unselectable="on"></p><span class="propertyRemove"><img src="img/more.png" style="width: 6px;padding: 1px;"/></span><span id="cssrender' + elProperty[i].property + '" class="cssrender' + elProperty[i].property + '"></span></div>');
        }
        if($('#cssrender' + elProperty[i].property).hasClass('tmpRemove')){
        delete  localData.defaultClass[elProperty[i].property];
          $('.cssrender' + elProperty[i].property).html("<span class='cssCommentStart'>" + cssCommentStart + "</span><span class='attributs'>" + elProperty[i].property + "</span> : " + $('#' + elProperty[i].property).val() + "; <span class='cssCommentEnd'>" + cssCommentEnd + "</span>");
        }else{
          $('.cssrender' + elProperty[i].property).html("<span class='attributs'>" + elProperty[i].property + "</span> : " + $('#' + elProperty[i].property).val() + ";");
        localData.defaultClass[elProperty[i].property]= $('#' + elProperty[i].property).val();
        }
      }
    }
console.log(localData);
console.log(JSON.stringify(localData));
// console.log(JSON.parse(localData));
    $(".backgroundProprieties .sp-preview-inner").css("background-color", $("#background").val());
    $(".colorProprieties .sp-preview-inner").css("color", $("#color").val());
}
function showProperties(jsonObj) {
  // Gérer les valeurs de la partie recherche
  var elProperty = jsonObj['properties'];
  for (var i = 0; i < elProperty.length; i++) {
    var mypElem = '<p>' + elProperty[i].property + '</p>';
    listProperties.push(elProperty[i].property);

    var myinput1Elem = '<input type="text" id="' + elProperty[i].property + '" value="' + elProperty[i].input + '"/>';

    if(elProperty[i].option == ('true')){
      if(elProperty[i].property == ('background') || elProperty[i].property == ('color')){
        var myinput2Elem = '<input type="text" id="triggerSet' +  elProperty[i].property  + '" />';
      }else{
        var myinput2Elem = '<span id="less' +  elProperty[i].property  + '"" class="value_less"><i class="fa fa-minus" aria-hidden="true"></i></span><span id="more' +  elProperty[i].property  + '"" class="value_more"><i class="fa fa-plus" aria-hidden="true"></i></span>';
      }
    }else{
        var myinput2Elem = '';
    }

    var mydivElem = '<div class="' + elProperty[i].property + 'Proprieties"> ' + mypElem +myinput1Elem +
     '<a href="https://developer.mozilla.org/fr/docs/Web/CSS/' + elProperty[i].property +
      '" target="_blank"><span "="" class="button_help"><i class="fa fa-question-circle" aria-hidden="true"></i></span></a>' + myinput2Elem + '</div>';
    $('.cssElements > section').append(mydivElem);
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
  // localData.gggg={};

  var requestURL = 'properties.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
  request.onload = function() {
    var allProperties = request.response;
    showProperties(allProperties);
    spectrumInit();
  }



  $('#inputFilter').on('click input', function(){
    searchPropterties();
  });
  $("#CSSRENDER").on('click', '.attributs', function(){
    var selectedElemId =  $(this).parent().attr('id');
    if(selectedElemId ){
      selectedElemId = selectedElemId.replace("cssrender","");

      $('#inputFilter').val(selectedElemId);
      searchPropterties();
    }
  });
  $(function() {
    $('.button_empty').on('click', function(){
      $('#inputFilter').val('');
      $('section > div').show();
    });
  });

  $(function() {
  $('.btnToggle').on('click', function() {
    $('.outilsContainer').toggle();
  });
  $('#FontWeightBoldForm').on('click', function() {
    if($('#FontWeightBoldForm').is(':checked')){
      $('#font-weight').val('bold');
    }else{
      $('#font-weight').val('initial');
    }
  });
  $('#FontStyleItalicForm').on('click', function() {
    if($('#FontStyleItalicForm').is(':checked')){
      $('#font-style').val('italic');
    }else{
      $('#font-style').val('initial');
    }
  });
  $('#TextUnderlineForm').on('click', function() {
    if($('#TextUnderlineForm').is(':checked')){
      $('#text-decoration').val('underline');
    }else{
      $('#text-decoration').val('none');
    }
  });
  $('#TextAlignLeft').on('click', function() {
    $('#text-align').val('left');
  });
  $('#TextAlignRight').on('click', function() {
    $('#text-align').val('right');
  });
  $('#TextAlignCenter').on('click', function() {
    $('#text-align').val('center');
  });
  $('#TextAlignJustify').on('click', function() {
    $('#text-align').val('justify');
  });
  $('.backWhite').on('click', function() {
    $('#output').css('background', 'url("img/fondBlanc.png")');
  });
  $('.backBlack').on('click', function() {
    $('#output').css('background', 'url("img/fondGris.png")');
  });
  $('.backGrey').on('click', function() {
    $('#output').css('background', 'rgb(79, 85, 99)');
  });
  $( ".sortable-items" ).sortable({
   axis: "y",
   handle: "p"
  });

  $("#download").on('click', function() {
    var tmpFile = ".defaultClass{" +
    $('#outputContainer').attr('style') +
    "}";
    tmpFile = tmpFile.replace(/\,/g,', ').replace(/\{/g,' {\n\t').replace(/\}/g,'}\n').replace(/\;/g,';\n\t');
      var file = new Blob([tmpFile], {type: "text/plain;charset=utf-8"});
    saveAs(file, 'style.css');
  });

    $("#CSSRENDER").on('click', '.ace_gutter', function() {
        var tmpRemoveParent =   $(this).parent().attr('id');
        tmpRemoveParent = tmpRemoveParent.replace('divrender','');
        $('#cssrender' + tmpRemoveParent).toggleClass('tmpRemove');


    });
      $("#CSSRENDER").on('click', '.propertyRemove', function() {
        var removeParent =   $(this).parent().attr('id');
        removeParent = removeParent.replace('divrender','');
        $('.' + removeParent + 'Proprieties > input').val('');
        $('#cssrender' + removeParent).removeClass('tmpRemove');
    });
    $('.cssElements').on('click', '.value_less', function() {
        // console.log($(this).attr('class') );
        // console.log($(this).attr('id') );
        var spanLessParent =   $(this).parent().attr('class');
        var presentValue;
        if($('.' + spanLessParent + ' > input').val() == ''){
          presentValue = 1;
        }else{
          presentValue =  $('.' + spanLessParent + ' > input').val();
        }
        var intpresentValue = parseInt(presentValue);
        $('.' + spanLessParent + ' > input').val(intpresentValue - 1 + unit);
    });


    $('.cssElements').on('click', '.value_more', function() {
        var spanLessParent =   $(this).parent().attr('class');
        var presentValue;

        if($('.' + spanLessParent + ' > input').val() == ''){
          presentValue = 1;
        }else{
          presentValue =  $('.' + spanLessParent + ' > input').val();
        }
        var intpresentValue = parseInt(presentValue);
        $('.' + spanLessParent + ' > input').val(intpresentValue + 1 + unit);
    });
  });
});
