//Calculamos area y perímetro triángulo
function areaPerimTri(){
    var lTriangulo = document.getElementById('ladoTriangulo').value;
    var areaTri = (Math.sqrt(3,2)/4)*Math.pow(lTriangulo,2);
    var perTri = lTriangulo * 3;
    document.getElementById('areaT') = areaTri;
    document.getElementById('perimetroT') = perTri;
}
//Calculamos area y perímetro cuadrado
function areaPerimCua(){
    var lCuadrado = document.getElementById('ladoCuadrado').value;
    var areCua = lCuadrado * lCuadrado;
    var perCua = lCuadrado * 4;
    document.getElementById('areaC') = areCua;
    document.getElementById('perimetroC') = perCua;
}
//Calculamos area y perímetro círculo
function areaPerimCir(){
    var rCirculo = document.getElementById('radioCirculo').value;
    var areCir = Math.PI * (Math.pow(rCirculo,2));
    var lonCir = 2*Math.PI*rCirculo;
    document.getElementById('areaCi') = areCir;
    document.getElementById('perimetroCi') = lonCir;
}
//Calculamos area y perímetro rectángulo
function areaPerimRec(){
    var aRectangulo = document.getElementById('area').value;
    var bRectangulo = document.getElementById('base').value;
    var areRec = bRectangulo * aRectangulo;
    var perRec = (bRectangulo*2)+(aRectangulo*2);
    document.getElementById('areaR') = areRec;
    document.getElementById('perimetroR') = perRec;
}
