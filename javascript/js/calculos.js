//Calculamos area y perímetro triángulo
function areaPerimTri(){
    $('#areaTrian').show();$('#perimT').show();
    var lTriangulo = document.getElementById('ladoTriangulo').value;
    var areaTri = (Math.sqrt(3,2)/4)*Math.pow(lTriangulo,2);
    var perTri = lTriangulo * 3;
    document.getElementById('areaT').value = areaTri;
    document.getElementById('perimetroT').value = perTri;
}
//Calculamos area y perímetro cuadrado
function areaPerimCua(){
    $('#areaCuad').show();$('#perimC').show();
    var lCuadrado = document.getElementById('ladoCuadrado').value;
    var areCua = lCuadrado * lCuadrado;
    var perCua = lCuadrado * 4;
    document.getElementById('areaC').value = areCua;
    document.getElementById('perimetroC').value = perCua;
}
//Calculamos area y perímetro círculo
function areaPerimCir(){
    $('#areaCircu').show();$('#perimCi').show();
    var rCirculo = document.getElementById('radioCirculo').value;
    var areCir = Math.PI * (Math.pow(rCirculo,2));
    var lonCir = 2*Math.PI*rCirculo;
    document.getElementById('areaCi').value = areCir;
    document.getElementById('perimetroCi').value = lonCir;
}
//Calculamos area y perímetro rectángulo
function areaPerimRec(){
    $('#areaRect').show();$('#perimR').show();
    var aRectangulo = document.getElementById('altura').value;
    var bRectangulo = document.getElementById('base').value;
    var areRec = bRectangulo * aRectangulo;
    var perRec = (bRectangulo*2)+(aRectangulo*2);
    document.getElementById('areaR').value = areRec;
    document.getElementById('perimetroR').value = perRec;
}

function botonTriangulo(){
    $('#dos').hide();$('#tres').hide();$('#cuatro').hide();$('#uno').show();
    $('#areaCuad').hide();$('#perimC').hide();$('#areaTrian').hide();$('#perimT').hide()
    ;$('#areaCircu').hide();$('#perimCi').hide();$('#areaRect').hide();$('#perimR').hide();
    limpiar();
}
function botonCuadrado(){
    $('#uno').hide();$('#tres').hide();$('#cuatro').hide();$('#dos').show()
    ;$('#areaCuad').hide();$('#perimC').hide();$('#areaTrian').hide();$('#perimT').hide()
    ;$('#areaCircu').hide();$('#perimCi').hide();$('#areaRect').hide();$('#perimR').hide();
    limpiar();
}
function botonCirculo(){
    $('#uno').hide();$('#dos').hide();$('#cuatro').hide();$('#tres').show();
    $('#areaCuad').hide();$('#perimC').hide();$('#areaTrian').hide();$('#perimT').hide()
    ;$('#areaCircu').hide();$('#perimCi').hide();$('#areaRect').hide();$('#perimR').hide();
    limpiar();
}
function botonRectangulo(){
    $('#uno').hide();$('#dos').hide();$('#tres').hide();$('#cuatro').show()
    ;$('#areaCuad').hide();$('#perimC').hide();$('#areaTrian').hide();$('#perimT').hide()
    ;$('#areaCircu').hide();$('#perimCi').hide();$('#areaRect').hide();$('#perimR').hide();
    limpiar();
}
function limpiar(){
    document.getElementById('ladoCuadrado').value = "";
    document.getElementById('ladoTriangulo').value = "";
    document.getElementById('radioCirculo').value = "";
    document.getElementById('base').value = "";
    document.getElementById('altura').value = "";
}