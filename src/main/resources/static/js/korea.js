$(document).ready(function() {
	drawMap('#container');
	mapActive('none', 'none', 'none', 'stress');
	
	var chartMapAge;
	
	for(var i = 1; i < 100; i++) {
		chartMapAge += "<option>" + i + "</option>";
	}
		
	$('#chartMapStartAge').append(chartMapAge);
});



function changeChartMapStartAge(){
	var chartMapStartAge = $('#chartMapStartAge').val();
	var chartMapEndAge;
	
	$('#chartMapEndAge').empty();
//	if(chartStartAge=='시작나이') {
//		chartEndAge += "<option>종료나이</option>";
//	}	
	chartMapEndAge += "<option value='none' selected>종료나이</option>";
	for(var i = chartMapStartAge; i < 100; i++) {
		chartMapEndAge += "<option>" + i + "</option>";
	}
		
	$('#chartMapEndAge').append(chartMapEndAge);
}


		
$(window).resize(function() { 
    var containerWidth = $('#container').width(); // #container
    var svgWidth = $('svg').width(); 			  // svg
    var gWidth = $('g').width(); 				  // g
//    var rectWidth = $('rect').width(); 			  // rect
    
    $('svg').width(containerWidth - 40);
    $('g').width(containerWidth - 40);
    
//    console.log('container:' + containerWidth);
//    console.log('svgWidth:' + svgWidth);
//    console.log('gWidth:' + gWidth);
//    $('svg').width(dynamicWidth);
//    console.log('svg:' +  $('svg').width());
});


// mouse over / leave
// 세종
var backFillColor = '#00B700';

var convertFillColor = 'red';
var baseFillColor = 'blue';
var convertFontSize = '40px';
var baseFontSize = '12px';

$(document).on("mouseover","#path-",function(){
	$('#path-').css('fill', 'rgb(176, 170, 159)');
	$('#path-').css('fill', 'rgb(176, 170, 159)');
});
// 경상도
$(document).on("mouseover","#path-Gyeongsangnam-do, #label-Gyeongsangnam-do",function(){
	$('#path-Gyeongsangnam-do').css('fill', backFillColor);
	$('#path-Gyeongsangbuk-do').css('fill', backFillColor);
	
	var newText = chartMapResults.get('경상도');
	$('#label-Gyeongsangnam-do').html('');
	$('#label-Gyeongsangbuk-do').html(newText === undefined ? 'None' : newText.toFixed(2));
	
	$('#label-Gyeongsangbuk-do').css('fill', convertFillColor);
	
	$('#label-Gyeongsangbuk-do').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Gyeongsangnam-do, #label-Gyeongsangnam-do",function(){
	$('#path-Gyeongsangnam-do').css('fill', 'rgb(176, 170, 159)');
	$('#path-Gyeongsangbuk-do').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Gyeongsangnam-do').html('경상남도');
	$('#label-Gyeongsangbuk-do').html('경상북도');
	
	$('#label-Gyeongsangbuk-do').css('fill', baseFillColor);
	
	$('#label-Gyeongsangbuk-do').css('font-size', baseFontSize);
});
$(document).on("mouseover","#path-Gyeongsangbuk-do, #label-Gyeongsangbuk-do",function(){
	$('#path-Gyeongsangbuk-do').css('fill', backFillColor);
	$('#path-Gyeongsangnam-do').css('fill', backFillColor);
	
	var newText = chartMapResults.get('경상도');
	$('#label-Gyeongsangnam-do').html('');
	$('#label-Gyeongsangbuk-do').html(newText === undefined ? 'None' : newText.toFixed(2));
	
	$('#label-Gyeongsangbuk-do').css('fill', convertFillColor);
	
	$('#label-Gyeongsangbuk-do').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Gyeongsangbuk-do, #label-Gyeongsangbuk-do",function(){
	$('#path-Gyeongsangbuk-do').css('fill', 'rgb(176, 170, 159)');
	$('#path-Gyeongsangnam-do').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Gyeongsangnam-do').html('경상남도');
	$('#label-Gyeongsangbuk-do').html('경상북도');
	
	$('#label-Gyeongsangbuk-do').css('fill', baseFillColor);
	
	$('#label-Gyeongsangbuk-do').css('font-size', baseFontSize);
});
// 충청도
$(document).on("mouseover","#path-Chungcheongnam-do, #label-Chungcheongnam-do",function(){
	$('#path-Chungcheongnam-do').css('fill', backFillColor);
	$('#path-Chungcheongbuk-do').css('fill', backFillColor);
	
	var newText = chartMapResults.get('충청도');
	$('#label-Chungcheongnam-do').html(newText === undefined ? 'None' : newText.toFixed(2));
	$('#label-Chungcheongbuk-do').html('');
	
	$('#label-Chungcheongnam-do').css('fill', convertFillColor);
	
	$('#label-Chungcheongnam-do').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Chungcheongnam-do, #label-Chungcheongnam-do",function(){
	$('#path-Chungcheongnam-do').css('fill', 'rgb(176, 170, 159)');
	$('#path-Chungcheongbuk-do').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Chungcheongnam-do').html('충청남도');
	$('#label-Chungcheongbuk-do').html('충청북도');
	
	$('#label-Chungcheongnam-do').css('fill', baseFillColor);
	
	$('#label-Chungcheongnam-do').css('font-size', baseFontSize);
});
$(document).on("mouseover","#path-Chungcheongbuk-do, #label-Chungcheongbuk-do",function(){
	$('#path-Chungcheongbuk-do').css('fill', backFillColor);
	$('#path-Chungcheongnam-do').css('fill', backFillColor);
	
	var newText = chartMapResults.get('충청도');
	$('#label-Chungcheongnam-do').html(newText === undefined ? 'None' : newText.toFixed(2));
	$('#label-Chungcheongbuk-do').html('');
	
	$('#label-Chungcheongnam-do').css('fill', convertFillColor);
	
	$('#label-Chungcheongnam-do').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Chungcheongbuk-do, #label-Chungcheongbuk-do",function(){
	$('#path-Chungcheongbuk-do').css('fill', 'rgb(176, 170, 159)');
	$('#path-Chungcheongnam-do').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Chungcheongnam-do').html('충청남도');
	$('#label-Chungcheongbuk-do').html('충청북도');
	
	$('#label-Chungcheongnam-do').css('fill', baseFillColor);
	
	$('#label-Chungcheongnam-do').css('font-size', baseFontSize);
});
// 전라도
$(document).on("mouseover","#path-Jeollanam-do, #label-Jeollanam-do",function(){
	$('#path-Jeollanam-do').css('fill', backFillColor);
	$('#path-Jeollabuk-do').css('fill', backFillColor);
	
	var newText = chartMapResults.get('전라도');
	$('#label-Jeollanam-do').html('');
	$('#label-Jeollabuk-do').html(newText === undefined ? 'None' : newText.toFixed(2));
	
	$('#label-Jeollabuk-do').css('fill', convertFillColor);
	
	$('#label-Jeollabuk-do').css('font-size', convertFontSize);

});
$(document).on("mouseleave","#path-Jeollanam-do, #label-Jeollanam-do",function(){
	$('#path-Jeollanam-do').css('fill', 'rgb(176, 170, 159)');
	$('#path-Jeollabuk-do').css('fill', 'rgb(176, 170, 159)');

	$('#label-Jeollanam-do').html('전라남도');
	$('#label-Jeollabuk-do').html('전라북도');
	
	$('#label-Jeollabuk-do').css('fill', baseFillColor);
	
	$('#label-Jeollabuk-do').css('font-size', baseFontSize);
});
$(document).on("mouseover","#path-Jeollabuk-do, #label-Jeollabuk-do",function(){
	$('#path-Jeollabuk-do').css('fill', backFillColor);
	$('#path-Jeollanam-do').css('fill', backFillColor);
	
	var newText = chartMapResults.get('전라도');
	$('#label-Jeollanam-do').html('');
	$('#label-Jeollabuk-do').html(newText === undefined ? 'None' : newText.toFixed(2));
	
	$('#label-Jeollabuk-do').css('fill', convertFillColor);
	
	$('#label-Jeollabuk-do').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Jeollabuk-do, #label-Jeollabuk-do",function(){
	$('#path-Jeollabuk-do').css('fill', 'rgb(176, 170, 159)');
	$('#path-Jeollanam-do').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Jeollanam-do').html('전라남도');
	$('#label-Jeollabuk-do').html('전라북도');
	
	$('#label-Jeollabuk-do').css('fill', baseFillColor);
	
	$('#label-Jeollabuk-do').css('font-size', baseFontSize);
});
//인천
$(document).on("mouseover","#path-Incheon, #label-Incheon",function(){
	$('#path-Incheon').css('fill', backFillColor);
	$('#path-Incheon').css('fill', backFillColor);
	
	var newText = chartMapResults.get('인천');
	$('#label-Incheon').html(newText === undefined ? 'None' : newText.toFixed(2));

	$('#label-Incheon').css('fill', convertFillColor);
	
	$('#label-Incheon').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Incheon, #label-Incheon",function(){
	$('#path-Incheon').css('fill', 'rgb(176, 170, 159)');
	$('#path-Incheon').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Incheon').html('인천');
	
	$('#label-Incheon').css('fill', baseFillColor);
	
	$('#label-Incheon').css('font-size', baseFontSize);
});
//서울
$(document).on("mouseover","#path-Seoul, #label-Seoul",function(){
	$('#path-Seoul').css('fill', backFillColor);
	$('#path-Seoul').css('fill', backFillColor);
	
	var newText = chartMapResults.get('서울');
	$('#label-Seoul').html(newText === undefined ? 'None' : newText.toFixed(2));

	$('#label-Seoul').css('fill', convertFillColor);
	
	$('#label-Seoul').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Seoul, #label-Seoul",function(){
	$('#path-Seoul').css('fill', 'rgb(176, 170, 159)');
	$('#path-Seoul').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Seoul').html('서울');
	
	$('#label-Seoul').css('fill', baseFillColor);
	
	$('#label-Seoul').css('font-size', baseFontSize);
});
//대전
$(document).on("mouseover","#path-Daejeon, #label-Daejeon",function(){
	$('#path-Daejeon').css('fill', backFillColor);
	$('#path-Daejeon').css('fill', backFillColor);
	
	var newText = chartMapResults.get('대전');
	$('#label-Daejeon').html(newText === undefined ? 'None' : newText.toFixed(2));
	
	$('#label-Daejeon').css('fill', convertFillColor);
	
	$('#label-Daejeon').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Daejeon, #label-Daejeon",function(){
	$('#path-Daejeon').css('fill', 'rgb(176, 170, 159)');
	$('#path-Daejeon').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Daejeon').html('대전');
	
	$('#label-Daejeon').css('fill', baseFillColor);
	
	$('#label-Daejeon').css('font-size', baseFontSize);
});
//대구
$(document).on("mouseover","#path-Daegu, #label-Daegu",function(){
	$('#path-Daegu').css('fill', backFillColor);
	$('#path-Daegu').css('fill', backFillColor);
	
	var newText = chartMapResults.get('대구');
	$('#label-Daegu').html(newText === undefined ? 'None' : newText.toFixed(2));
	
	$('#label-Daegu').css('fill', convertFillColor);
	
	$('#label-Daegu').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Daegu, #label-Daegu",function(){
	$('#path-Daegu').css('fill', 'rgb(176, 170, 159)');
	$('#path-Daegu').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Daegu').html('대구');
	
	$('#label-Daegu').css('fill', baseFillColor);
	
	$('#label-Daegu').css('font-size', baseFontSize);
});
//울산
$(document).on("mouseover","#path-Ulsan, #label-Ulsan",function(){
	$('#path-Ulsan').css('fill', backFillColor);
	$('#path-Ulsan').css('fill', backFillColor);
	
	var newText = chartMapResults.get('울산');
	$('#label-Ulsan').html(newText === undefined ? 'None' : newText.toFixed(2));

	$('#label-Ulsan').css('fill', convertFillColor);
	
	$('#label-Ulsan').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Ulsan, #label-Ulsan",function(){
	$('#path-Ulsan').css('fill', 'rgb(176, 170, 159)');
	$('#path-Ulsan').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Ulsan').html('울산');
	
	$('#label-Ulsan').css('fill', baseFillColor);
	
	$('#label-Ulsan').css('font-size', baseFontSize);
});
//부산
$(document).on("mouseover","#path-Busan, #label-Busan",function(){
	$('#path-Busan').css('fill', backFillColor);
	$('#path-Busan').css('fill', backFillColor);
	
	var newText = chartMapResults.get('부산');
	$('#label-Busan').html(newText === undefined ? 'None' : newText.toFixed(2));

	$('#label-Busan').css('fill', convertFillColor);
	
	$('#label-Busan').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Busan, #label-Busan",function(){
	$('#path-Busan').css('fill', 'rgb(176, 170, 159)');
	$('#path-Busan').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Busan').html('부산');
	
	$('#label-Busan').css('fill', baseFillColor);
	
	$('#label-Busan').css('font-size', baseFontSize);
});
//광주
$(document).on("mouseover","#path-Gwangju, #label-Gwangju",function(){
	$('#path-Gwangju').css('fill', backFillColor);
	$('#path-Gwangju').css('fill', backFillColor);
	
	var newText = chartMapResults.get('광주');
	$('#label-Gwangju').html(newText === undefined ? 'None' : newText.toFixed(2));

	$('#label-Gwangju').css('fill', convertFillColor);
	
	$('#label-Gwangju').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Gwangju, #label-Gwangju",function(){
	$('#path-Gwangju').css('fill', 'rgb(176, 170, 159)');
	$('#path-Gwangju').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Gwangju').html('광주');
	
	$('#label-Gwangju').css('fill', baseFillColor);
	
	$('#label-Gwangju').css('font-size', baseFontSize);
});
//경기도
$(document).on("mouseover","#path-Gyeonggi-do, #label-Gyeonggi-do",function(){
	$('#path-Gyeonggi-do').css('fill', backFillColor);
	$('#path-Gyeonggi-do').css('fill', backFillColor);
	
	var newText = chartMapResults.get('경기도');
	$('#label-Gyeonggi-do').html(newText === undefined ? 'None' : newText.toFixed(2));

	$('#label-Gyeonggi-do').css('fill', convertFillColor);
	
	$('#label-Gyeonggi-do').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Gyeonggi-do, #label-Gyeonggi-do",function(){
	$('#path-Gyeonggi-do').css('fill', 'rgb(176, 170, 159)');
	$('#path-Gyeonggi-do').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Gyeonggi-do').html('경기도');
	
	$('#label-Gyeonggi-do').css('fill', baseFillColor);
	
	$('#label-Gyeonggi-do').css('font-size', baseFontSize);
});
//강원도
$(document).on("mouseover","#path-Gangwon-do, #label-Gangwon-do",function(){
	$('#path-Gangwon-do').css('fill', backFillColor);
	$('#path-Gangwon-do').css('fill', backFillColor);
	
	var newText = chartMapResults.get('강원도');

	$('#label-Gangwon-do').html(newText === undefined ? 'None' : newText === undefined ? 'None' : newText.toFixed(2));

	$('#label-Gangwon-do').css('fill', convertFillColor);
	
	$('#label-Gangwon-do').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Gangwon-do, #label-Gangwon-do",function(){
	$('#path-Gangwon-do').css('fill', 'rgb(176, 170, 159)');
	$('#path-Gangwon-do').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Gangwon-do').html('강원도');
	
	$('#label-Gangwon-do').css('fill', baseFillColor);
	
	$('#label-Gangwon-do').css('font-size', baseFontSize);
});
//제주도
$(document).on("mouseover","#path-Jeju-do, #label-Jeju-do",function(){
	$('#path-Jeju-do').css('fill', backFillColor);
	$('#path-Jeju-do').css('fill', backFillColor);
	
	var newText = chartMapResults.get('제주도');
	$('#label-Jeju-do').html(newText === undefined ? 'None' : newText.toFixed(2));

	$('#label-Jeju-do').css('fill', convertFillColor);
	
	$('#label-Jeju-do').css('font-size', convertFontSize);
});
$(document).on("mouseleave","#path-Jeju-do, #label-Jeju-do",function(){
	$('#path-Jeju-do').css('fill', 'rgb(176, 170, 159)');
	$('#path-Jeju-do').css('fill', 'rgb(176, 170, 159)');
	
	$('#label-Jeju-do').html('제주도');
	
	$('#label-Jeju-do').css('fill', baseFillColor);
	
	$('#label-Jeju-do').css('font-size', baseFontSize);
});


//mapSelectbox 변경시 reload
$("#chartMapStartAge, #chartMapEndAge, #chartMapGender, #chartMapType").change(function() {
	mapActive($('#chartMapStartAge').val(), $('#chartMapEndAge').val(), $('#chartMapGender').val(),
			$('#chartMapType').val());
});
////mapSelectbox 변경시 reload
//$("#chartMapEndAge").change(function() {
//	mapActive($('#chartMapStartAge').val(), $('#chartMapEndAge').val(), $('#chartMapGender').val(),
//			$('#chartMapType').val());
//});
////mapSelectbox 변경시 reload
//$("#chartMapGender").change(function() {
//	mapActive($('#chartMapStartAge').val(), $('#chartMapEndAge').val(), $('#chartMapGender').val(),
//			$('#chartMapType').val());
//});
////mapSelectbox 변경시 reload
//$("#chartMapType").change(function() {
//	mapActive($('#chartMapStartAge').val(), $('#chartMapEndAge').val(), $('#chartMapGender').val(),
//			$('#chartMapType').val());
//});



var chartMapResults = null;

var preChartMapStartAge;
var preChartMapEndAge;
var preChartMapGender;
var preChartMapType;

function mapActive(startAge, endAge, gender, type) {
	var inputData = {"startAge":startAge, "endAge":endAge, "gender":genderMap.get(gender), "type": type};
	var results = new Map();
	
	$.ajax({
	    url: "/getMapInfo",
	    type: "post",
	    data: JSON.stringify(inputData),
	    dataType: "json",
	    contentType:"application/json;charset=UTF-8",
	    async: false,
	    success: function(data){
	    	console.log(data);
	    	if (data.length == 0) {
	    		alert('조회 결과가 없습니다.\r\n이전 검색 조건이 유지됩니다.');
		    	   
		    	$('#chartMapStartAge').val(preChartMapStartAge).prop('selected', true);
			    $('#chartMapEndAge').val(preChartMapEndAge).prop('selected', true);
			    $('#chartMapGender').val(preChartMapGender).prop('selected', true);
			    $('#chartMapType').val(preChartMapType).prop('selected', true);
		    }
	    	else {
	    		chartMapResults = new Map();
	    		
	    		for(var i=0; i<data.length;i++) {
	 	    	   var month = data[i]['region'];
	 	       	   var cnt = data[i]['cnt'];

	 	       	   chartMapResults.set(month, cnt);
	 	        }
	    		
	    		preChartMapStartAge = $('#chartMapStartAge').val();
			    preChartMapEndAge = $('#chartMapEndAge').val();
			    preChartMapGender = $('#chartMapGender').val();
			    preChartMapType = $('#chartMapType').val();
	    	}
	    },
	    error: function(xhr, status, error){
	       alert(xhr.responseText);
	    },
	    complete: function(xhr, status){
	    }
	 });
}

//지도 그리기
function drawMap(target) {	
    var width = 700; //지도의 넓이
    var height = 700; //지도의 높이
    
    var initialScale = 5500; //확대시킬 값
    var initialX = -11900; //초기 위치값 X
    var initialY = 4050; //초기 위치값 Y
    var labels;

    var projection = d3.geo
        .mercator()
        .scale(initialScale)
        .translate([initialX, initialY]);
    var path = d3.geo.path().projection(projection);
    var zoom = d3.behavior
        .zoom()
        .translate(projection.translate())
        .scale(projection.scale())
        .scaleExtent([height, 800 * height])
        .on('zoom', zoom);

    var svg = d3
        .select(target)
        .append('svg')
        .attr('width', width + 'px')
        .attr('height', height + 'px')
        .attr('id', 'map')
        .attr('class', 'map');

    var states = svg
        .append('g')
        .attr('id', 'states')
        .call(zoom);

    states
        .append('rect')
        .attr('class', 'background')
        .attr('width', width + 'px')
        .attr('height', height + 'px');

    //geoJson데이터를 파싱하여 지도그리기
    d3.json('resources/json/korea.json', function(json) {
        states
            .selectAll('path') //지역 설정
            .data(json.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('id', function(d) {
                return 'path-' + d.properties.name_eng;
            });

        labels = states
            .selectAll('text')
            .data(json.features) //라벨표시
            .enter()
            .append('text')
            .attr('transform', translateTolabel)
            .attr('id', function(d) {
                return 'label-' + d.properties.name_eng;
            })
            .attr('text-anchor', 'middle')
            .attr('dy', '.35em')
            .text(function(d) {
                return d.properties.name;
            });
    });

    //텍스트 위치 조절 - 하드코딩으로 위치 조절을 했습니다.
    function translateTolabel(d) {
        var arr = path.centroid(d);
        if (d.properties.code == 31) {
            //서울 경기도 이름 겹쳐서 경기도 내리기
            arr[1] +=
                d3.event && d3.event.scale
                    ? d3.event.scale / height + 20
                    : initialScale / height + 20;
        } else if (d.properties.code == 34) {
            //충남은 조금 더 내리기
            arr[1] +=
                d3.event && d3.event.scale
                    ? d3.event.scale / height + 10
                    : initialScale / height + 10;
        }
        return 'translate(' + arr + ')';
    }

    function zoom() {
        projection.translate(d3.event.translate).scale(d3.event.scale);
        states.selectAll('path').attr('d', path);
        labels.attr('transform', translateTolabel);
    }
    
    var containerWidth = $('#container').width(); // #container
    var svgWidth = $('svg').width(); 			  // svg
    var gWidth = $('g').width(); 				  // g
    
    $('svg').width(containerWidth - 40);
    $('g').width(containerWidth - 40);
    $('rect').width(0);
    
    $('#container').parent().css('padding', '0');
    
//    $('g').parent().css('min-width', '800px');
//    $('rect').parent().css('min-width', '800px');
}