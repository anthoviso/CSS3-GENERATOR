var container2 = document.getElementById("output2");
var container3 = document.getElementById("htmlTxtValue");
var colorValue = $('#color').val();
var dieze = '';
var cssCommentStart = '/*';
var selectedClass = "defaultClass";
var cssCommentEnd = '*/';
var localData =
{"defaultClass":{
  "background" : "#2A5476",
  "border" : "1px solid black",
  "border-radius" : "20px",
  "box-shadow" : "2px 2px 5px black",
  "color" : "#DADDF0",
  "font-size" : "16px",
  "height" : "150px",
  "margin" : "100px auto",
  "outline" : "5px dotted grey",
  "padding" : "10px",
  "text-align" : "center",
  "text-shadow": "1px 1px 1px black",
  "width" : "150px"
},
"aaaa":{
  "border" : "5px solid green"
}
};
var unit = 'px';

function toggleEmptyElem(){
  $('section > div > input[type=text]').map(function(index) {
    if($( this ).val() == ""){
      var replacementEmpty = $( this ).attr('id');
      $('.' + selectedClass + ' .cssrender' + replacementEmpty + '').parent().hide();
    }else if($( this ).val() != ""){
      var replacement = $( this ).attr('id');
      $('.' + selectedClass + ' .cssrender' + replacement + '').parent().show();

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
function resetAll () {
  delete localData.defaultClass;
  delete localData.aaaa;
  localData.defaultClass={};
  localData.aaaa={};
  localData.defaultClass.background="white";
  localData.defaultClass.height="100px";
  localData.defaultClass.width="100px";
  $('#output_defaultClass').remove();
  $("#output").append('<div id="output_defaultClass"></div>');
  $('section input').val("");
  for (y=0;y <  Object.keys(localData.defaultClass).length;y++){
    $('#' + Object.keys(localData.defaultClass)[y]).val(localData.defaultClass[Object.keys(localData.defaultClass)[y]]);
  }

  $(".v-buttonGroupControl").prop("checked", false);
  textValueForm.value="";
  $(".backgroundProprieties .sp-preview-inner").css("background-color", $("#background").val());
  $(".colorProprieties .sp-preview-inner").css("color", $("#color").val());
}
function resetClass () {
  delete localData[selectedClass];
  localData[selectedClass]={};
  $('#output_'+ selectedClass).remove();
  $("#output").append('<div id="output_defaultClass"></div>');
  $('section input').val("");
}
function createClass () {
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
      $('#output_' + selectedClass).css('background',$('#background').val());
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
      $('#output_' + selectedClass).css('color',$('#color').val());
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
function switchToInput() {
  var $input = $("<input>", {
    val: $(this).text(),
    type: "text"
  });
  $input.addClass("loadNum");
  $(this).replaceWith($input);
  $input.on("blur", switchToSpan);
  $input.select();
};
function switchToSpan() {
  var $span = $("<span>", {
    text: $(this).val()
  });
  $span.addClass("loadNum");
  $(this).replaceWith($span);
  $span.on("click", switchToInput);
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
  $('#output_defaultClass').html(textValueForm.value);

  for (i=0;i <  elProperty.length;i++){
    if($('#' + elProperty[i].property).val() == ""){
      delete localData[selectedClass][elProperty[i].property];
    }else{
      if($('.' + selectedClass + ' #cssrender' + elProperty[i].property).hasClass('tmpRemove')){
        localData[selectedClass][elProperty[i].property]= $('#' + elProperty[i].property).val();
      }else{
        localData[selectedClass][elProperty[i].property]= $('#' + elProperty[i].property).val();
      }
    }
  }
    // Afficher les valeurs dans le code généré
  for (i=0;i <  Object.keys(localData[selectedClass]).length;i++){
    var elProp = Object.keys(localData[selectedClass])[i];
    var elVal = localData[selectedClass][Object.keys(localData[selectedClass])[i]];
    // SI TMP REMOVE
    if($('.' + selectedClass + ' #cssrender' +  elProp).hasClass('tmpRemove')){
      $('#output_' + selectedClass).css(elProp , "");
      $('.' + selectedClass + ' .cssrender' + elProp).html("<span class='cssCommentStart'>" + cssCommentStart
        + "</span><span class='attributs'>" + elProp + "</span> : " + $('#' + elProp).val() + "; <span class='cssCommentEnd'>" + cssCommentEnd + "</span>");
    }else{
      // SI NON TMP REMOVE
      $('#output_' + selectedClass).css(elProp , elVal);
      $('.' + selectedClass + ' .cssrender' + elProp).html("<span class='attributs'>" + elProp + "</span> : " + $('#' + elProp).val() + ";");
    }
      // SI valeur input ""
    if($('#' + elProp).val() == ""){
      $('.' + selectedClass + ' #divrender' + elProp).remove();
      $('#output_' + selectedClass).css(elProp , "");
    }else{
        // SI NON valeur input ""
      if($('.' + selectedClass + ' #divrender' + elProp).length > 0){
      }else{
        $('.' + selectedClass).append('<div class="ace_line " id="divrender' + elProp
        + '" ><p class="ace_gutter ace_gutter-cell" unselectable="on"></p><span class="propertyRemove"><img src="img/more.png" style="width: 6px;padding: 1px;"/></span><span id="cssrender' +
        elProp + '" class="cssrender' + elProp + '"></span></div>');
      }
    }
  }
  // console.log(localData);
  console.log(JSON.stringify(localData));
  $(".backgroundProprieties .sp-preview-inner").css("background-color", $("#background").val());
  $(".colorProprieties .sp-preview-inner").css("color", $("#color").val());
}
function showProperties(jsonObj) {
  // Gérer les valeurs de la partie recherche
  var elProperty = jsonObj['properties'];
  for (var i = 0; i < elProperty.length; i++) {
    var mypElem = '<p>' + elProperty[i].property + '</p>';

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

  var requestURL = 'data/properties.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    var allProperties = request.response;
    showProperties(allProperties);
    spectrumInit();
  }


  $('.classDiv').on('click', function(){
    selectedClass = $(this).attr('id');
    $('.classDiv').removeClass('selectedClass');
    $('#' + $(this).attr('id')).addClass('selectedClass');
    $('.spanSelected').html(selectedClass);
    $('section input').val('');
    for (i=0;i <  Object.keys(localData[selectedClass]).length;i++){
      $('section #' +  Object.keys(localData[selectedClass])[i]).val(localData[selectedClass][Object.keys(localData[selectedClass])[i]]);
    }

  });
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
    $(".loadNum").on("click", switchToInput);

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
      $('#output_' + selectedClass).attr('style') +
      "}";
      tmpFile = tmpFile.replace(/\,/g,', ').replace(/\{/g,' {\n\t').replace(/\}/g,'}\n').replace(/\;/g,';\n\t');
      var file = new Blob([tmpFile], {type: "text/plain;charset=utf-8"});
      saveAs(file, 'style.css');
    });

    $("#CSSRENDER").on('click', '.ace_gutter', function() {
      var tmpRemoveParent =   $(this).parent().attr('id');
      tmpRemoveParent = tmpRemoveParent.replace('divrender','');
      $('.' + selectedClass + ' #cssrender' + tmpRemoveParent).toggleClass('tmpRemove');


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
