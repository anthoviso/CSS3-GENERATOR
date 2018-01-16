/* 1 - VARIABLES */

var container2 = document.getElementById("output2");
var colorValue = $('#color').val();
var dieze = '';
var initJsonClass = 0;
var cssCommentStart = '/*';
var selectedClass = "defaultClass";
var cssCommentEnd = '*/';
var oldSpan;
var valueSpanTmp;
var newClassVal = 1;
var toogleButton = true;
var editor;
var initCodeMirror = true;
var init = true;
var unit = 'px';
var localData =
{"-defaultClass":{
  "color" : "#ffbdbd",
  "font-size" : "40px",
  "font-weight" : "bold",
  "text-align" : "center",
  "text-shadow" : "1px 1px 1px red",
  "margin" : "100px auto"
},
"-defaultClass--hover":{
  "color" : "#f2774c"
}
};

/* 2 - FUNCTIONS */
function button_toogle(){
  if(toogleButton == true){
    $('.board').css('height','918px');
    toogleButton = false;
    $('.output').css('height', $(window).height() - 80);
    $('.generateCode').css('height', $('.board').height() + 'px');
    $('.cssElements').css('height', $('.board').height() + 'px');
  }else{
      $('.board').css('height','30px');
      toogleButton = true;
      $('.output').css('height', $(window).height() - 80);
      $('.generateCode').css('height', $('.board').height() + 'px');
      $('.cssElements').css('height', $('.board').height() + 'px');
  }
}
function toggleEmptyElem(){
  $('section > div > input[type=text]').map(function(index) {
    if($( this ).val() == ""){
      var replacementEmpty = $( this ).attr('id');
      $('.container' + selectedClass + ' .cssrender' + replacementEmpty + '').parent().hide();
    }else if($( this ).val() != ""){
      var replacement = $( this ).attr('id');
      $('.container' + selectedClass + ' .cssrender' + replacement + '').parent().show();

    }
  });
}
function btnValue(){
  var spanValueParent =  valueSpanTmp.parent().attr('class');
  var presentValue;
  if($('.' + spanValueParent + ' > input').val() == ''){
    presentValue = 1;
  }else{
    presentValue =  $('.' + spanValueParent + ' > input').val();
  }
  var intpresentValue = parseInt(presentValue);
  if(valueSpanTmp.attr('class') == 'value_more'){
    $('.' + spanValueParent + ' > input').val(intpresentValue + 1 + unit);
  }else{
    $('.' + spanValueParent + ' > input').val(intpresentValue - 1 + unit);
  }
}
function inputResize(){
  var value = $('input.loadNum').val();
  var size  = value.length;
  size = size*3;
  $('input.loadNum').css('width',size*3 + 9);
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
function resetHtml(){
  editor.getDoc().setValue('<div></div>');
}
function resetAll () {
  $('#CSSRENDER .classDiv').remove();
  $('#output').empty();
  $('section input').val("");
  // console.log(localData);
  localData = {};
  $(".v-buttonGroupControl").prop("checked", false);
  $(".backgroundProprieties .sp-preview-inner").css("background-color", $("#background").val());
  $(".colorProprieties .sp-preview-inner").css("color", $("#color").val());
  selectedClass = "";
}
function delClass () {
  // console.log(selectedClass);
  $('#CSSRENDER #' + selectedClass).remove();
  $('.-' + selectedClass).remove();
  delete localData['-' + selectedClass];
  selectedClass = "";
}
function resetClass () {
  delete localData['-' + selectedClass];
  localData['-' + selectedClass]={};
  $('.-'+ selectedClass).remove();
  $('section input').val("");
}
function createClass () {
  $('#cssRenderContainer').append('<div  id="new_class_' + newClassVal + '" class="classDiv"><div class="ace_line ace_first"><p class="ace_gutter ace_gutter-cell" unselectable="on"></p><span style="margin:0;padding-left:5px;" class="loadNum">new_class_' + newClassVal + '</span><span>{</span></div><div class="containernew_class_' + newClassVal + ' sortable-items"></div><div class="ace_line"><p class="ace_gutter ace_gutter-cell" unselectable="on"></p><span style="margin:0;padding-left:5px;">}</span></div><div class="ace_line"><p class="ace_gutter ace_gutter-cell" unselectable="on"></p></div></div>');
  localData['-new_class_' + newClassVal]={};
  newClassVal = newClassVal + 1;
}
function addProperty () {
  // $('#CSSRENDER .' + selectedClass).append('<input value="test" />');
}
function addcomments(){
 $('#cssrendercolor').append('<span class="commentSpan"></span>')
}

function getSelectedRange() {
  return { from: editor.getCursor(true), to: editor.getCursor(false) };
}
function autoFormatSelection() {
  var range = getSelectedRange();
  editor.autoFormatRange(range.from, range.to);
}
function commentSelection(isComment) {
  var range = getSelectedRange();
  editor.commentRange(isComment, range.from, range.to);
}
function indentHtml(){
  console.log(editor.getDoc().setValue(editor.getValue().replace(/\,/g,', ').replace(/\{/g,' {\n\t').replace(/\}/g,'}\n')));
  console.log(editor.getValue().replace(/\,/g,', ').replace(/\{/g,' {\n\t').replace(/\}/g,'}\n'));
}
function spectrumInit(){
  $("#triggerSetbackground").spectrum({
    preferredFormat: "rgb",
    showInitial: true,
    showInput: true,
    showButtons: false,
    move: function(color) {
      $('#background').val(color.toHexString());
      $('.-' + selectedClass).css('background',$('#background').val());
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
      $('.-' + selectedClass).css('color',$('#color').val());
    },
    palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]
  });
}
function searchPropterties(){
  $('section > div').removeClass('selectedElem');
  $('section > div').hide();
  var numElem = 0;
  for(i=1;i<=$('section > div').length;i++){
    if($('section > div:nth-child(' + i + ')').attr('class').indexOf($('#inputFilter').val()) > -1){
      var ClassFilter = $('section > div:nth-child(' + i + ')').attr('class');
      numElem = numElem + 1;
      $("." + ClassFilter).show();
    }
    if($('#inputFilter').val() != ""){
      $('.cssSearch .searchNResults').text(numElem + " found");
    }else{
      $('.cssSearch .searchNResults').text("");
    }
  }
}
function classSwitchToInput() {
  var $input = $("<input>", {
    val: $(this).text().replace(/\---/,"::").replace(/\--/,":"),
    type: "text"
  });
  oldSpan = $input.val().replace(/\::/,"---").replace(/\:/,"--");
  $input.addClass("loadNum");
  $(this).replaceWith($input);
  $input.on("blur", classSwitchToSpan);
  $input.select();
  inputResize();
};
function classSwitchToSpan() {
  console.log('oldSpan : ' + oldSpan);
  var $span = $("<span>", {
    text: $(this).val().replace(/^\-/,'').replace(/[^A-z\d\_\:\-]/g,'')
  });
  var tmpSpan = $span.text().replace(/^\-/,'').replace(/[^A-z\d\_\:\-]/g,'').replace(/\::/,"---").replace(/\:/,"--");
  if(oldSpan != tmpSpan){
    if(tmpSpan == "" || tmpSpan == "undefined"){
      $span.val(oldSpan);
      tmpSpan = oldSpan;
      console.log(localData);
    }else{
      console.log(tmpSpan);

      $('.-' + oldSpan).addClass('-' + tmpSpan);
      $('.-' + oldSpan).removeClass('-' + oldSpan);
      $('.container' + oldSpan).addClass('container' + tmpSpan);
      $('.container' + oldSpan).removeClass('container' + oldSpan);
      $('#' + oldSpan).attr("id", tmpSpan);


      localData['-' + tmpSpan] = localData['-' + oldSpan];
      delete localData['-' + oldSpan];
      console.log(localData);
    }
    selectedClass = tmpSpan;
  }else{
    console.log('tmp == old');
    tmpSpan = $span.text();
    console.log(localData);
  }

  console.log('tmpSpan : ' + tmpSpan);
  $span.addClass("loadNum");
  $(this).replaceWith('<span style="margin:0;padding-left:5px;" class="loadNum">' + tmpSpan.replace(/\---/,"::").replace(/\--/,":") + '</span>');
  $('#CSSRENDER').on("click", "span.loadNum", classSwitchToInput);
}
function selectedClassFunc(thisObj){
  if(selectedClass != thisObj.attr('id')){
    selectedClass = thisObj.attr('id');
    console.log("selectedClass : " + selectedClass);
    $('.classDiv').removeClass('selectedClass');
    $('#' + selectedClass).addClass('selectedClass');
    $('.spanSelected').html("." + selectedClass.replace(/\---/,"::").replace(/\--/,":"));
    $('section input').val('');
    for (i=0;i <  Object.keys(localData['-' + selectedClass]).length;i++){
      $('section #' +  Object.keys(localData['-' + selectedClass])[i]).val(localData['-' + selectedClass][Object.keys(localData['-' + selectedClass])[i]]);
    }
  }
}

/* 3 - UPDATE */

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
function update (jsonObj) {
  /* generate code*/
  if(selectedClass == ""){
    $('section').css('visibility','hidden');
  }else{
    $('section').css('visibility','visible');
    if(init == true){

      $('section input').val('');
      for (i=0;i <  Object.keys(localData['-' + selectedClass]).length;i++){
        $('section #' +  Object.keys(localData['-' + selectedClass])[i]).val(localData['-' + selectedClass][Object.keys(localData['-' + selectedClass])[i]]);
      }
      $('.classDiv').removeClass('selectedClass');
      $('#' + selectedClass).addClass('selectedClass');
      $('.spanSelected').html("." + selectedClass.replace(/\---/,"::").replace(/\--/,":"));
    }
    // console.log('slectedClass : ' + selectedClass );
    var elProperty = jsonObj['properties'];
    if($('.htmlCodeValue > .defaultClass > p').text() == "" && initCodeMirror == true){
      $('.defaultClass').html('CSS3 Generator');
    }

    for (i=0;i <  elProperty.length;i++){
      if($('#' + elProperty[i].property).val() == ""){
        $('.container' + selectedClass + ' #cssrender' + elProperty[i].property).removeClass('tmpRemove');
        delete localData['-' + selectedClass][elProperty[i].property];
      }else{
        if($('.container' + selectedClass + ' #cssrender' + elProperty[i].property).hasClass('tmpRemove')){
          localData['-' + selectedClass][elProperty[i].property]= "/*" + $('#' + elProperty[i].property).val() + "*/";
        }else{
          localData['-' + selectedClass][elProperty[i].property]= $('#' + elProperty[i].property).val();
        }
      }
    }
    // Afficher les valeurs dans le code généré
    for (i=0;i <  Object.keys(localData['-' + selectedClass]).length;i++){
      var elProp = Object.keys(localData['-' + selectedClass])[i];
      var elVal = localData['-' + selectedClass][Object.keys(localData['-' + selectedClass])[i]];
      // SI valeur input ""
      if($('#' + elProp).val() == ""){
        $('.container' + selectedClass + ' #divrender' + elProp).remove();
      }else{
        // SI NON valeur input ""
        if($('.container' + selectedClass + ' #divrender' + elProp).length > 0){
        }else{
          $('.container' + selectedClass).append('<div class="ace_line " id="divrender' + elProp
          + '" ><p class="ace_gutter ace_gutter-cell" unselectable="on"></p><span class="propertyRemove"><img src="img/more.png" style="width: 6px;padding: 1px;"/></span><span id="cssrender' +
          elProp + '" class="cssrender' + elProp + '"></span></div>');
        }
      }
      // SI TMP REMOVE
      if($('.container' + selectedClass + ' #cssrender' +  elProp).hasClass('tmpRemove')){
        $('.container' + selectedClass + ' .cssrender' + elProp).html("<span class='cssCommentStart'>" + cssCommentStart
        + "</span><span class='attributs'>" + elProp + "</span> : " + $('#' + elProp).val() + "; <span class='cssCommentEnd'>" + cssCommentEnd + "</span>");
      }else{
        // SI NON TMP REMOVE
        $('.container' + selectedClass + ' .cssrender' + elProp).html("<span class='attributs'>" + elProp + "</span> : " + $('#' + elProp).val().replace('/*','').replace('*/','')  + ";");
      }
    }
    // style
    $('body style').empty();
    for(s=0;s < Object.keys(localData).length;s++){
      var styleValue = "";
      for(e=0;e < Object.keys(localData[Object.keys(localData)[s]]).length;e++){
        var tttt = Object.keys(localData)[s];
        styleValue += Object.keys(localData[tttt])[e] + ":" + localData[Object.keys(localData)[s]][Object.keys(localData[tttt])[e]] + ";";
      }
      $('body style').append('.' + Object.keys(localData)[s].replace(/\---/,"::").replace(/\--/,":").replace(/\-/,"") + '{' + styleValue + '}');
    }

    $(".backgroundProprieties .sp-preview-inner").css("background-color", $("#background").val());
    $(".colorProprieties .sp-preview-inner").css("color", $("#color").val());
  }
  if(initCodeMirror == false){
    $('#output').html(editor.getValue());
  }
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

    if(elProperty[i].values){
      $( "#" + elProperty[i].property ).autocomplete({
        source: elProperty[i].values
      });
    }
  }
  if(init == true){
    for(i=0;i<=Object.keys(localData).length - 1;i++){
      selectedClass = Object.keys(localData)[i].replace('-','');
      // console.log(selectedClass + " : update des classes en cours");
      update(jsonObj);
      toggleEmptyElem();
      initJsonClass = initJsonClass + 1;
      if(initJsonClass == Object.keys(localData).length && init == true){  init = false;}
    }
  }
  $(document).on('load click keyup input', function(){
    update(jsonObj);
    toggleEmptyElem();
  });
}

/* 4 - ON DOCUMENT READY */

$( document ).ready(function() {
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

  $('#CSSRENDER').on('click', '.classDiv', function(){
    selectedClassFunc($(this));
  });
  $('#HTMLRENDER').on('click', '.CodeMirror-code > div', function(){
    $('.selectedDiv').removeClass('selectedDiv');
    $(this).addClass('selectedDiv');
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
      $("#" + selectedElemId).focus();
    }
  });
  $('#CSSRENDER').on("keyDown keyup", "input.loadNum", function(){
    inputResize();
  });
  $(function() {
    $("#CSSRENDER").on("click", "span.loadNum", classSwitchToInput);

    $('.button_empty').on('click', function(){
      $('#inputFilter').val('');
      $('section > div').show();
    });
  });

  $(function() {
    $('.backWhite').on('click', function() {
      $('#output').css('background', 'url("img/fondBlanc.png")');
    });
    $('.backBlack').on('click', function() {
      $('#output').css('background', 'url("img/fondGris.png")');
    });
    $('.backGrey').on('click', function() {
      $('#output').css('background', 'rgb(79, 85, 99)');
    });
    $( ".board" ).resizable({
        maxHeight: $(window).height() - 50,
        minHeight: 30,
        handles: "n",
        resize: function( event, ui ) {
          $('.output').css('height', $(window).height() - 80);
          $('.generateCode').css('height', $('.board').height() + 'px');
          $('.cssElements').css('height', $('.board').height() + 'px');
        }
    });

    $( "#CSSRENDER" ).resizable({
      handles: "e",
      resize: function( event, ui ) {
        $('#HTMLRENDER').css('width', 'calc(100% - ' + $('#CSSRENDER').width() + 'px  - 17px)');
      }
    });
    $( ".sortable-items" ).sortable({
      axis: "y",
      handle: "p"
    });
    $( ".sortable-classes" ).sortable({
      axis: "y",
      handle: "p"
    });

    $('#toggleMenuHtml').on('click', function(e) {
      e.stopPropagation();
       $('#toggleMenuHtml').toggleClass('on');
    });
    $('#toggleMenuCss').on('click', function(e) {
      e.stopPropagation();
       $('#toggleMenuCss').toggleClass('on');
    });
    $(document).click( function(){
       $('#toggleMenuCss').removeClass('on');
    });

    $("#menu").on('click', '#download', function() {
      var tmpFile = $('body style').text();
      tmpFile = tmpFile.replace(/\,/g,', ').replace(/\{/g,' {\n\t').replace(/\}/g,'}\n').replace(/\;/g,';\n\t').replace(/\.\-+/g,'.');
      var file = new Blob([tmpFile], {type: "text/plain;charset=utf-8"});
      saveAs(file, 'style.css');
    });


    $("#CSSRENDER").on('click', '.ace_gutter', function() {
      var tmpRemoveParent =   $(this).parent().attr('id');
      console.log(tmpRemoveParent);
      var tmpParentClass = $(this).parent().parent().parent().attr('id');
      tmpRemoveParent = tmpRemoveParent.replace('divrender','');
      $('.container' + tmpParentClass + ' #cssrender' + tmpRemoveParent).toggleClass('tmpRemove');


    });
    $("#CSSRENDER").on('click', '.propertyRemove', function() {
      var removeParent =   $(this).parent().attr('id');
      var ParentClass = $(this).parent().parent().parent().attr('id');
      removeParent = removeParent.replace('divrender','');
      $('.' + removeParent + 'Proprieties > input').val('');
      $('.' + ParentClass + '#cssrender' + removeParent).removeClass('tmpRemove');
    });
    $('.cssElements').on('mousedown', '.value_less, .value_more', function() {
      valueSpanTmp = $(this);
      intervalId = setInterval ( btnValue, 70 );
    }).mouseup(function() {
      clearInterval ( intervalId );
    });
  });

// Codemirror INIT
  if(initCodeMirror == true){
    editor = CodeMirror(document.getElementById("codemirror-html"), {
      mode: "xml",
      extraKeys: {"Ctrl-Space": "autocomplete"},
      value: "<div class='defaultClass'>CSS3 Generator</div>",
      lineNumbers: true,
      enterMode: "keep",
      autofocus:true,
      theme: "one-dark",
      indentWithTabs: true
    });
    editor.addKeyMap({
      "Tab": function (cm) {
        if (cm.somethingSelected()) {
          var sel = editor.getSelection("\n");
          // Indent only if there are multiple lines selected, or if the selection spans a full line
          if (sel.length > 0 && (sel.indexOf("\n") > -1 || sel.length === cm.getLine(cm.getCursor().line).length)) {
            cm.indentSelection("add");
            return;
          }
        }

        if (cm.options.indentWithTabs)
        cm.execCommand("insertTab");
        else
        cm.execCommand("insertSoftTab");
      },
      "Shift-Tab": function (cm) {
        cm.indentSelection("subtract");
      }
    });
    $(editor.getWrapperElement()).slideDown('normal', function(){
      editor.refresh();
    });
    initCodeMirror = false;
    $('#output').html(editor.getValue());
  }
});
