let brands = ['AUDI','BMW'];
let carType = [['A1 SPORTBACK 1.4TFSI','A1 SPORT 1.4TFSI'],['E87 120i']];
let displacement = [[['1.4L'],['1.4L']],[['2.0L']]];
let year = [[[['2011-2014']],[['2012-2014']]],[[['2005-2007']]]];
var brandIndex = -1;
var carTypeIndex = -1;
var displacementIndex = -1;
var yearIndex = -1;
function onsta() {
    let brandTmp = document.getElementById('brand');
    brandTmp.innerHTML = `<option value="">請選擇廠牌</option>`;
    for (let i = 0; i < brands.length ; i++){
        brandTmp.innerHTML +=`<option value ="${brands[i]}">${brands[i]}</option>`;
    }
}
onsta();
function selectedBrand(index) {
    if (index > -1) {
        let carTypeTmp = document.getElementById('carType');
        carTypeTmp.innerHTML = `<option value="">請選擇車型</option>`;
        for (let i = 0; i < carType[index].length ; i++){
            carTypeTmp.innerHTML +=`<option value ="${carType[index][i]}">${carType[index][i]}</option>`;
        }

        let displacementTmp = document.getElementById('displacement');
        displacementTmp.innerHTML = `<option value="">請先選擇車型</option>`;


        let yearTmp = document.getElementById('year');
        yearTmp.innerHTML = `<option value="">請先選擇車型</option>`;
        
    }
    else {
        document.getElementById('carType').innerHTML = `<option value="">請先選擇廠牌</option>`;
        document.getElementById('displacement').innerHTML = `<option value="">請先選擇廠牌</option>`;
        document.getElementById('year').innerHTML = `<option value="">請先選擇廠牌</option>`;
        index = -1;
    }
    console.log(index)
    document.getElementById('oil').innerHTML = ""
    document.getElementById('data').innerHTML = ""
}
function selectedCarType(index) {
    if (index > -1) {
        let displacementTmp = document.getElementById('displacement');
        displacementTmp.innerHTML = `<option value="">請選擇排量</option>`;
        for (let i = 0; i < displacement[brandIndex][index].length ; i++){
            displacementTmp.innerHTML +=`<option value ="${displacement[brandIndex][index][i]}">${displacement[brandIndex][index][i]}</option>`;
        }
        let yearTmp = document.getElementById('year');
        yearTmp.innerHTML = `<option value="">請先選擇排量</option>`;
        
    }
    else {
        document.getElementById('displacement').innerHTML = `<option value="">請先選擇車型</option>`;
        document.getElementById('year').innerHTML = `<option value="">請先選擇車型</option>`;
        index = -1;
    }
    document.getElementById('oil').innerHTML = ""
    document.getElementById('data').innerHTML = ""
} 

function selectedDisplacement(index) {
    if (index > -1) {
        let yearTmp = document.getElementById('year');
        yearTmp.innerHTML = `<option value="">請選擇年份</option>`;
        for (let i = 0; i <year[brandIndex][carTypeIndex][index].length ; i++){
            yearTmp.innerHTML +=`<option value ="${year[brandIndex][carTypeIndex][index][i]}">${year[brandIndex][carTypeIndex][index][i]}</option>`;
        }
        
    }
    else {
        document.getElementById('year').innerHTML = `<option value="">請先選擇車型</option>`;
        index = -1;
    }
    document.getElementById('oil').innerHTML = ""
    document.getElementById('data').innerHTML = ""
}

function selectedYear(index) {
    if (index > -1) {
        let tmp = `<table><tr><th>廠牌</th><th>車型</th><th>排量</th><th>適用年份</th><th>引擎形式</th></tr><tr><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["brand"]}</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["carType"]}</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["displacement"]}</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["year"]}</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["engineType"]}</td></tr>`;
        tmp += `</table>`
        document.getElementById('oil').innerHTML = tmp;
        let tmp2 = `<table id = data><tr><th></th><th>項目</th><th>規格</th></tr><tr><td rowspan="9">引擎</td><td>車型</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["CT"]}</td></tr><tr><td>基本怠速</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["ES"]}</td></tr><tr><td>點火正時</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["FA"]}</td></tr><tr><td>火星塞規格</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["FST"]}</td></tr><tr><td>汽缸壓力</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["CA"]}</td></tr><tr><td>調節後燃油壓力</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["AAOA"]}</td></tr><tr><td>機油建議型號</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["ECT"]}</td></tr><tr><td>機油建議規範</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["EOST"]}</td></tr><tr><td>不含濾清器(含)</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["ENI"]}</td></tr><tr><td rowspan="7">變速箱</td><td>變速箱型式</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["GT"]}</td></tr><tr><td>原廠自排油型號</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["OSO"]}</td></tr><tr><td>容量(L)</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["OSOC"]}</td></tr><tr><td>差速器油型號</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["DOT"]}</td></tr><tr><td>容量(L)</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["DOTC"]}</td></tr><tr><td>加力箱油型號</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["APOT"]}</td></tr><tr><td>容量(L)</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["APOTC"]}</td></tr><tr><td rowspan="2">冷卻</td><td>冷卻液型號</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["CST"]}</td></tr><tr><td>容量(L)</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["CSTC"]}</td></tr><tr><td rowspan="2">煞車</td><td>煞車油型號</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["BOT"]}</td></tr><tr><td>容量(L)</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["BOTC"]}</td></tr><tr><td rowspan="2">轉向</td><td>動力油型號</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["POT"]}</td></tr><tr><td>容量(L)</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["POTC"]}</td></tr><tr><td rowspan="4">空調</td><td>冷媒型式</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["RT"]}</td></tr><tr><td>冷媒容量(g)</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["RTC"]}</td></tr><tr><td>冷凍油型號)</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["CO"]}</td></tr><tr><td>冷凍油容量(g)</td><td>${data[brandIndex][carTypeIndex][displacementIndex][yearIndex]["COC"]}</td></tr></table>`
        document.getElementById('data').innerHTML = tmp2;
    }
    else {
        document.getElementById('oil').innerHTML = ""
        document.getElementById('data').innerHTML = ""
    }
}

/* function searchOil(){
    if(index > -1){
        let tmp = `<table><tr><th>廠牌</th><th>車型</th><th>排量</th><th>適用年份</th></tr><tr><td>${brands[index]}</td><td>${dcarType[index][0]}</td><td>${ddisplacement[index][0]}</td><td>${dsyear[index][0]} - ${deyear[index][0]}</td></tr>`;
        tmp += `</table>`
        document.getElementById('oil').innerHTML = tmp;
    }
    

} */
/* 這邊都是資料 */
/*引擎車型(Engine Car Type)*/ 
/*引擎機油建議型號(Engine Oil Suggest Type) */ 
/*引擎機油建議型號(Engine Oil Suggest Specification) */
/*引擎不含濾清器(含)(Engine Not Include)*/
$( "#brand" ).change(function() {
    brandIndex = document.getElementById("brand").selectedIndex - 1
    console.log(brandIndex)
    selectedBrand(brandIndex);
});

$( "#carType" ).change(function() {
    carTypeIndex = document.getElementById("carType").selectedIndex - 1
    selectedCarType(carTypeIndex);
});
$( "#displacement" ).change(function() {
    displacementIndex = document.getElementById("displacement").selectedIndex - 1
    selectedDisplacement(displacementIndex);
});
$( "#year" ).change(function() {
    yearIndex = document.getElementById("year").selectedIndex - 1
    selectedYear(yearIndex);
});



var data = [[[[{'brand':'AUDI','carType':'A1 SPORT 1.4TFSI','displacement':'1.4L','year':'2011-2014','engineType':'CAVG','CT':'A1 SPORT 1.4TFSI','ES':'600-800 rpm','FA':'引擎電腦控制','FST':'NGK：SIZFR6B8EG','CA':'12-14 kg/cm2','AAOA':'3.5-4.0 kg/cm2','ECT':'5W30','EOST':'VW504、VW507','ENI':'(3.6L)','GT':'0AM七速乾式雙離合器','OSO':'齒輪箱:G052171A2 閥體油:G004000方向機油','OSOC':'更換量:1.7L 總容量:1.9L 閥體油:1.1L','DOT':'-','DOTC':'-','APOT':'-','APOTC':'-','CST':'乙烯乙二醇','CSTC':'8.0L','BOT':'DOT4','BOTC':'1.0L','POT':'EPS電動轉向','POTC':'-','RT':'R134a','RTC':'500±15g','CO':'PAG','COC':'110±10g'}]],[[{'brand':'AUDI','carType':'A1 SPORTBACK 1.4TFSI','displacement':'1.4L','year':'2012-2014','engineType':'CAXA','CT':'A1 SPORTBACK','ES':'600-800 rpm','FA':'引擎電腦控制','FST':'NGK：PZFR6R','CA':'12-14 kg/cm2','AAOA':'3.5-4.0 kg/cm2','ECT':'5W30','EOST':'VW504','ENI':'(3.6L)','GT':'0AM七速乾式雙離合器','OSO':'齒輪箱:G052171A2 閥體油:G004000方向機油','OSOC':'更換量:1.7L 總容量:1.9L 閥體油:1.0L','DOT':'-','DOTC':'-','APOT':'-','APOTC':'-','CST':'乙烯乙二醇','CSTC':'8.0L','BOT':'DOT4','BOTC':'1.0L','POT':'EPS電動轉向','POTC':'-','RT':'R134a','RTC':'500±15g','CO':'PAG','COC':'110±10g'}]]],[[[{'brand':'BMW','carType':'E87 120i','displacement':'2.0L','year':'2005-2007','engineType':'N46B20','CT':'120i','ES':'700 rpm','FA':'引擎電腦控制','FST':'NGK：ILZFR6H11','CA':'11-18 bar','AAOA':'3.6-4.2 bar','ECT':'5W30、5W40','EOST':'BMW LL-01','ENI':'4.0L(4.25L)','GT':'GA6HP19Z六速自排變速器','OSO':'M-1375.4/金黃色<br>83 22 2 305 396','OSOC':'更換量:5.5L 總容量:9.5L','DOT':'GL5 75W90','DOTC':'0.9L','APOT':'-','APOTC':'-','CST':'乙烯乙二醇：81 229 407','CSTC':'7.4L','BOT':'DOT4:81 229 407 513','BOTC':'1.0L','POT':'CHF 11S','POTC':'0.9L','RT':'R134a','RTC':'500g','CO':'PAG','COC':'120g'}]]]];