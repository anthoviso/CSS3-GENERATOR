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

  //Get a reference to the input and output

  var txtValue = document.getElementById("txtValue");

  var color = document.getElementById("color");
  var FontFamily = document.getElementById("FontFamily");
  var FontSize = document.getElementById("FontSize");
  var FontStyle = document.getElementById("FontStyle");
  var TextAlign = document.getElementById("TextAlign");
  var FontWeight = document.getElementById("FontWeight");
  var TextDecoration = document.getElementById("TextDecoration");
  var width = document.getElementById("width");
  var height = document.getElementById("height");
  var background = document.getElementById("background");

  var border = document.getElementById("border");
  var borderRadius = document.getElementById("borderRadius");
  var opacity = document.getElementById("opacity");
  var boxShadow = document.getElementById("boxShadow");
  var textShadow = document.getElementById("textShadow");

  var padding = document.getElementById("padding");
  var margin = document.getElementById("margin");
  var zindex = document.getElementById("zindex");
  var boxSizing = document.getElementById("boxSizing");
  var position = document.getElementById("position");

  var container = document.getElementById("output");
  var container2 = document.getElementById("output2");
  var colorValue = $('#color').val();
  var dieze = '';

  //Set up a requestAnimationFrame loop
  function update () {
    requestAnimationFrame(update);


    container.innerHTML = " <div id='outputContainer' style=\"background: " + dieze + background.value +
    ";color: " + dieze + color.value +
    ";font-family: " + FontFamily.value +
    ";font-size: " + FontSize.value +
    ";font-style: " + FontStyle.value +
    ";text-align: " + TextAlign.value +
    ";font-weight: " + FontWeight.value +
    ";text-decoration: " + TextDecoration.value +
    ";width: " + width.value +
    ";height : " + height.value +
    ";border : " + border.value +
    ";border-radius : " + borderRadius.value +
    ";opacity : " + opacity.value +
    ";box-shadow : " + boxShadow.value +
    ";text-shadow : " + textShadow.value +
    ";padding : " + padding.value +
    ";margin : " + margin.value +
    ";z-index : " + zindex.value +
    ";box-sizing : " + boxSizing.value +
    ";position : " + position.value + ";\" >" + txtValue.value  + "</div>"

    /* generate code*/
if(width.value == ""){
  divrenderWidth.style.display="none";
}else{
  divrenderWidth.style.display="block";
  cssrenderWidth.innerHTML = "<span class='attributs'>width</span> : " + width.value + ";";
}
if(height.value == ""){
  divrenderHeight.style.display="none";
}else{
  divrenderHeight.style.display="block";
  cssrenderHeight.innerHTML = "<span class='attributs'>height</span> : " + height.value + ";";
}
if(color.value == ""){
  divrenderColor.style.display="none";
}else{
  divrenderColor.style.display="block";
  cssrenderColor.innerHTML = "<span class='attributs'>color</span> : " + dieze + color.value + ";";
}
if(FontFamily.value == ""){
  divrenderFontFamily.style.display="none";
}else{
  divrenderFontFamily.style.display="block";
  cssrenderFontFamily.innerHTML = "<span class='attributs'>font-family</span> : " + FontFamily.value + ";";
}
if(FontSize.value == ""){
  divrenderFontSize.style.display="none";
}else{
  divrenderFontSize.style.display="block";
  cssrenderFontSize.innerHTML = "<span class='attributs'>font-size</span> : " + FontSize.value + ";";
}

if(FontStyle.value == ""){
  divrenderFontStyle.style.display="none";
}else{
  divrenderFontStyle.style.display="block";
  cssrenderFontStyle.innerHTML = "<span class='attributs'>font-style</span> : " + FontStyle.value + ";";
}
if(FontWeight.value == ""){
  divrenderFontWeight.style.display="none";
}else{
  divrenderFontWeight.style.display="block";
  cssrenderFontWeight.innerHTML = "<span class='attributs'>font-weight</span> : " + FontWeight.value + ";";
}
if(TextDecoration.value == ""){
  divrenderTextDecoration.style.display="none";
}else{
  divrenderTextDecoration.style.display="block";
  cssrenderTextDecoration.innerHTML = "<span class='attributs'>text-decoration</span> : " + TextDecoration.value + ";";
}



if(TextAlign.value == ""){
  divrenderTextAlign.style.display="none";
}else{
  divrenderTextAlign.style.display="block";
  cssrenderTextAlign.innerHTML = "<span class='attributs'>text-align</span> : " + TextAlign.value + ";";
}
if(background.value == ""){
  divrenderBackground.style.display="none";
}else{
  divrenderBackground.style.display="block";
  cssrenderBackground.innerHTML = "<span class='attributs'>background</span> : " + dieze + background.value + ";";
}
if(border.value == ""){
  divrenderBorder.style.display="none";
}else{
  divrenderBorder.style.display="block";
  cssrenderBorder.innerHTML = "<span class='attributs'>border</span> : " + border.value + ";";
}
if(borderRadius.value == ""){
  divrenderBorderRadius.style.display="none";
}else{
  divrenderBorderRadius.style.display="block";
  cssrenderBorderRadius.innerHTML = "<span class='attributs'>border-radius</span> : " + borderRadius.value + ";";
}
if(opacity.value == ""){
  divrenderOpacity.style.display="none";
}else{
  divrenderOpacity.style.display="block";
  cssrenderOpacity.innerHTML = "<span class='attributs'>opacity</span> : " + opacity.value + ";";
}
if(padding.value == ""){
  divrenderPadding.style.display="none";
}else{
  divrenderPadding.style.display="block";
  cssrenderPadding.innerHTML = "<span class='attributs'>padding</span> : " + padding.value + ";";
}
if(margin.value == ""){
  divrenderMargin.style.display="none";
}else{
  divrenderMargin.style.display="block";
  cssrenderMargin.innerHTML = "<span class='attributs'>margin</span> : " + margin.value + ";";
}
if(textShadow.value == ""){
  divrenderTextShadow.style.display="none";
}else{
  divrenderTextShadow.style.display="block";
  cssrenderTextShadow.innerHTML = "<span class='attributs'>text-Shadow</span> : " + textShadow.value + ";";
}
if(boxShadow.value == ""){
  divrenderBoxShadow.style.display="none";
}else{
  divrenderBoxShadow.style.display="block";
  cssrenderBoxShadow.innerHTML = "<span class='attributs'>box-shadow</span> : " + boxShadow.value + ";";
}
/*
if ( color.value.length == 6){
    dieze = "#";
  }else{dieze = "";}
*/
  }
  update();
