// Set new default font family and font color to mimic Bootstrap's default styling
$(document).ready(function() {
	chartActive('none', 'none', 'none', 'none', 'stress');
	
	var chartAge;
	
	for(var i = 1; i < 100; i++) {
		chartAge += "<option>" + i + "</option>";
	}
		
	$('#chartStartAge').append(chartAge);
});


function changeChartStartAge(){
	var chartStartAge = $('#chartStartAge').val();
	var chartEndAge;
	
	$('#chartEndAge').empty();
//	if(chartStartAge=='시작나이') {
//		chartEndAge += "<option>종료나이</option>";
//	}	
	chartEndAge += "<option value='none' selected>종료나이</option>";
	for(var i = chartStartAge; i < 100; i++) {
		chartEndAge += "<option>" + i + "</option>";
	}
		
	$('#chartEndAge').append(chartEndAge);
}


function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}


//chartSelectbox 변경시 reload
$("#chartStartAge, #chartEndAge, #chartGender, #chartRegion, #chartType").change(function() {
	$('.chart-area').empty();
	$('.chart-area').append("<canvas id='myAreaChart'></canvas>");
	chartActive($('#chartStartAge').val(), $('#chartEndAge').val(), $('#chartGender').val(),
			$('#chartRegion').val(), $('#chartType').val());
	$('.chartjs-hidden-iframe').remove();
});


var preChartStartAge;
var preChartEndAge;
var preChartGender;
var preChartRegion;
var preChartType;

var chartResults = new Map();
function chartActive(startAge, endAge, gender, region, type) {
	Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
	Chart.defaults.global.defaultFontColor = '#858796';
	
	// Ajax 호출
	var thisDate = new Date();
	var thisYear = thisDate.getFullYear().toString();
	var thisMonth = thisDate.getMonth() + 1;
	thisYear = '2020';
	thisMonth = '12';
	
	var inputData = {"startAge":startAge, "endAge":endAge, "gender":genderMap.get(gender), "region":region, "type": type};

	var monthArray = new Array();

	var labelArray = new Array();
	
	$.ajax({
	    url: "/getYearInfo",
	    type: "post",
	    data: JSON.stringify(inputData),
	    dataType: "json",
	    contentType:"application/json;charset=UTF-8",
	    async: false,
	    success: function(data){
	       if (data.length == 0) {
	    	   alert('조회 결과가 없습니다.\r\n이전 검색 조건이 유지됩니다.');
	    	   
	    	    $('#chartStartAge').val(preChartStartAge).prop('selected', true);
		        $('#chartEndAge').val(preChartEndAge).prop('selected', true);
		        $('#chartGender').val(preChartGender).prop('selected', true);
		        $('#chartRegion').val(preChartRegion).prop('selected', true);
		        $('#chartType').val(preChartType).prop('selected', true);
	       }
	       else {
	    	   chartResults = new Map();
	    	   
	    	   for(var i=0; i<data.length;i++) {
		    	   var month = data[i]['month'];
		       	   var cnt = data[i]['cnt'];

		       	chartResults.set(month, cnt);
		       }
	    	   	
		       preChartStartAge = $('#chartStartAge').val();
		       preChartEndAge = $('#chartEndAge').val();
		       preChartGender = $('#chartGender').val();
		       preChartRegion = $('#chartRegion').val();
		       preChartType = $('#chartType').val();
		       
//		       console.log(preChartStartAge);
//		       console.log(preChartEndAge);
//		       console.log(preChartGender);
//		       console.log(preChartRegion);
//		       console.log(preChartType);
		       
	       }
	       
	       var standardMonth = thisMonth;
	       var standardYear = thisYear;
	       
	       for (var i = 11; i >= 0; i--) {
	    	   if(standardMonth == 0) {
	    		   standardMonth = 12;
	    		   standardYear = standardYear - 1; 
	    	   }
	    	   
	    	   if (standardMonth == '12') {
	    		   standardMonth = 12;
	    	   }
	    	   var cnt = chartResults.get(standardMonth);
	    	   
    		   monthArray[i] = cnt;
    		   labelArray[i] = standardYear + "." + standardMonth;
	    	   standardMonth = standardMonth - 1;
	       }
	      
	    },
	    error: function(xhr, status, error){
	       alert(xhr.responseText);
	    },
	    complete: function(xhr, status){}
	 });
	
	console.log(labelArray);
	var ctx = document.getElementById("myAreaChart");
	var myLineChart = new Chart(ctx, {
	  type: 'line',
	  data: {
//	    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		labels: labelArray,
	    
	    datasets: [{
	      label: "Score",
	      lineTension: 0.3,
	      backgroundColor: "rgba(78, 115, 223, 0.05)",
	      borderColor: "rgba(78, 115, 223, 1)",
	      pointRadius: 3,
	      pointBackgroundColor: "rgba(78, 115, 223, 1)",
	      pointBorderColor: "rgba(78, 115, 223, 1)",
	      pointHoverRadius: 3,
	      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
	      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
	      pointHitRadius: 10,
	      pointBorderWidth: 2,
//	      data: [0, 10000, 5000, 15000, 10000, 20000, 15000, 0, null, 30000, 25000, 30000],
	      data: monthArray,
	    }],
	  },
	  options: {
	    maintainAspectRatio: false,
	    layout: {
	      padding: {
	        left: 10,
	        right: 25,
	        top: 25,
	        bottom: 0
	      }
	    },
	    scales: {
	      xAxes: [{
	        time: {
	          unit: 'date'
	        },
	        gridLines: {
	          display: false,
	          drawBorder: false
	        },
	        ticks: {
	          maxTicksLimit: 7
	        }
	      }],
	      yAxes: [{
	        ticks: {
	          maxTicksLimit: 5,
	          padding: 10,
	          // Include a dollar sign in the ticks
	          callback: function(value, index, values) {
	            return '' + number_format(value);
	          }
	        },
	        gridLines: {
	          color: "rgb(234, 236, 244)",
	          zeroLineColor: "rgb(234, 236, 244)",
	          drawBorder: false,
	          borderDash: [2],
	          zeroLineBorderDash: [2]
	        }
	      }],
	    },
	    legend: {
	      display: false
	    },
	    tooltips: {
	      backgroundColor: "rgb(255,255,255)",
	      bodyFontColor: "#858796",
	      titleMarginBottom: 10,
	      titleFontColor: '#6e707e',
	      titleFontSize: 14,
	      borderColor: '#dddfeb',
	      borderWidth: 1,
	      xPadding: 15,
	      yPadding: 15,
	      displayColors: false,
	      intersect: false,
	      mode: 'index',
	      caretPadding: 10,
	      callbacks: {
	        label: function(tooltipItem, chart) {
	          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
	          return datasetLabel + ': ' + number_format(tooltipItem.yLabel, 2);
	        }
	      }
	    }
	  }
	});
}

