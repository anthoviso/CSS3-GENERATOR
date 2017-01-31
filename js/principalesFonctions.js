

var elementZ;
$(".menu").click(function(){
  elementZ = 	$(this).parent().attr('id');
    if ($("#" + elementZ + " > div").hasClass("active")){
        $("#" + elementZ + " > p > .down").removeClass("activeDown");
        $("#" + elementZ + " > div").removeClass("active");
    }else{
        $("#" + elementZ + " > p > .down").addClass("activeDown");
        $("#" + elementZ + " > div").addClass("active");
    }
    });
/* Lorsque l'on clique sur une class on recupere l'id du meme élément et on affiche la class qui pourte la meme valeur que cet id*/
  var elementP;
  $(".propertyproperty").click(function(){
  elementP = $(this).attr('id');
      $(".synthaxe > div").removeClass("activeProperty");
      $("." + elementP).addClass("activeProperty");
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

  function activecodehtml () {
     $('#inputHtml').addClass("activeCode");
      $('#inputCSS').removeClass("activeCode");
    $('#inputCSS').parent().removeClass("activeCode");
    $('#CSSRENDER').hide();
    $('#HTMLRENDER').show();
    $('#copyCodeCSS').hide();
    $('#copyCodeHTML').show();
   }

   function activecodecss () {
     $('#inputHtml').removeClass("activeCode");
    $('#inputCSS').addClass("activeCode");
    $('#inputCSS').parent().addClass("activeCode");
    $('#HTMLRENDER').hide();
    $('#CSSRENDER').show();
$('#copyCodeCSS').show();
$('#copyCodeHTML').hide();
    }

  $(function() {
$('.range').on('input', function() {
borderRadius.value = $(this).val() + "px";
});
});

$(function() {
$('.range2').on('input', function() {
opacity.value = $(this).val() / 100;
});
});

$(function() {
$('.range3').on('input', function() {
border.value = $(this).val() + "px solid black";
});
});


$(function() {
$('.range4').on('input', function() {
padding.value = $(this).val() + "px";
});
});

$(function() {
$('.range5').on('input', function() {
margin.value = $(this).val() + "px";
});
});

$(function() {
$('.range6').on('input', function() {
FontSize.value = $(this).val() + "px";
});
});

$(function() {
$('.range7').on('input', function() {
width.value = $(this).val() + "px";
});
});

$(function() {
$('.range8').on('input', function() {
height.value = $(this).val() + "px";
});
});
  $(function() {
  $('.range9').on('input', function() {
  lineHeight.value = $(this).val() + "px";
  });
  });

function OnSelectionChange (select) {
   var selectedOption = select.options[select.selectedIndex];
   if (selectedOption.value == 'Arial'){
     FontFamily.value='arial';
   }else if (selectedOption.value == 'Comic Sans MS'){
    FontFamily.value='Comic Sans MS';
  }else if(selectedOption.value == 'Georgia'){
   FontFamily.value='Georgia';
  }else if(selectedOption.value == 'Impact'){
   FontFamily.value='Impact';
  }else if(selectedOption.value == 'Times New Roman'){
   FontFamily.value='Times New Roman';
  }else if(selectedOption.value == 'Verdana'){
   FontFamily.value='Verdana';
  }else if(selectedOption.value == ''){
   FontFamily.value='';
  }
}

function OnSelectionChange2 (select) {
    var selectedOption2 = select.options[select.selectedIndex];
    if (selectedOption2.value == '10'){
      FontSize.value='10px';
    }else if (selectedOption2.value == '12'){
     FontSize.value='12px';
   }else if(selectedOption2.value == '16'){
    FontSize.value='16px';
  }else if(selectedOption2.value == '20'){
    FontSize.value='20px';
  }else if(selectedOption2.value == '24'){
    FontSize.value='24px';
  }else if(selectedOption2.value == '30'){
    FontSize.value='30px';
   }else if(selectedOption2.value == ''){
     FontSize.value='';
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
txtValue.value = '';
background.value = "white";
TextDecoration.value = "";
FontWeight.value = "";
color.value = "";
FontFamily.value = "";
FontSize.value = "";
FontStyle.value = "";
TextAlign.value = "";
width.value = "100px";
height.value = "100px";
border.value = "";
borderRadius.value = "";
opacity.value = "";
boxShadow.value = "";
textShadow.value = "";
padding.value = "";
margin.value = "";
zindex.value = "";
boxSizing.value = "";
position.value = "";
display.value = "";
visibility.value = "";
outline.value = "";
boxSizing.value = "";
$(".v-buttonGroupControl").prop("checked", false);
textValueForm.value="";
lineHeight.value = "";
}
