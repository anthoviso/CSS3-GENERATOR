/* Javascript PrincipalesFonctions.js */
var list = ['Width','Height','Color','FontFamily','FontSize','LineHeight','FontStyle','FontWeight','TextDecoration','TextAlign','Background',
'Opacity','Border','BorderRadius','TextShadow','BoxShadow','Padding','Margin','Display','Visibility','Outline','BoxSizing'];

  for (i=0;i < list.length;i++){
	 $('.ace_first').after('<div class="ace_line " id="divrender' + list[i] + '" ><p class="ace_gutter ace_gutter-cell" unselectable="on"></p><span id="cssrender' + list[i] + '" class="cssrender' + list[i] + '"></span></div>'); 
	// console.log(list[i]);
	}


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

$(function() {
	$('input').on('input', function() {
		if($(this).attr('id') == 'rangeType'){
			$('.' + $(this)[0].className + 'InputLeft')[0].value = $(this).val() + "px";
		}else if($(this).hasClass('range2')){
		console.log('sdfsdf');
			$('#Opacity').val($('.range2').val() / 100);
		}else if($(this).hasClass('range3')){
			$('#Border').val($('.range3').val() + "px solid black");
		}
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
	$('#Background').val("white");
	$('#TextDecoration').val("");
	$('#FontWeight').val("");
	$('#Color').val("");
	$('#FontFamily').val("");
	$('#FontSize').val("")
	$('#FontStyle').val("");
	$('#TextAlign').val("");
	$('#Width').val("100px");
	$('#Height').val("100px");
	$('#Border').val("");
	$('#BorderRadius').val("");
	$('#Opacity').val("");
	$('#BoxShadow').val("");
	$('#TextShadow').val("");
	$('#Padding').val("");
	$('#Margin').val("");
	$('#Zindex').val("");
	$('#BoxSizing').val("");
	$('#Position').val("");
	$('#Display').val("");
	$('#Visibility').val("");
	$('#Outline').val("");
	$('#BoxSizing').val("");
	$(".v-buttonGroupControl").prop("checked", false);
	textValueForm.value="";
	$('#LineHeight').val("");
}
