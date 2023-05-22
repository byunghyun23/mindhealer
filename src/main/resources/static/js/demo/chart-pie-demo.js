$(document).ready(function() {
	pieActive();
	
});
// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


var prePieStartAge;
var prePieEndAge;
var prePieGender;
var prePieRegion;
var prePieType;
var avg;
var leftAvg;

function pieActive() {
	var startAge=$('#startAge').val();
	var endAge=$('#endAge').val();
	var region=$('#selectRegion').val();
	var gender=$('#selectGender').val();
	var type=$('#selectType').val();
	myPieChart=null;
	
	var inputData = {"startAge":startAge, "endAge":endAge, "region":region, "gender":genderMap.get(gender), "type":type};
	$.ajax({
				url: "/getSelectInfo",
				type: "post",
				data: JSON.stringify(inputData),
				dataType: 'json',
				contentType:"application/json;charset=UTF-8",
				async: false,
				success: function(data){	
					if(data[0]==null){
						
						alert('조회 결과가 없습니다.\r\n이전 검색 조건이 유지됩니다.');
						//$('#percent').text('')
						
						$('#startAge').val(prePieStartAge).prop('selected', true);
		        		$('#endAge').val(prePieEndAge).prop('selected', true);
		        		$('#selectRegion').val(prePieGender).prop('selected', true);
		        		$('#selectGender').val(prePieRegion).prop('selected', true);
		        		$('#selectType').val(prePieType).prop('selected', true);
					}
					else{
						avg=(Math.ceil(data[0]['avg'] * 100) / 100).toFixed(2)
						if(type=='stress')
						{
							leftAvg=40-avg;
						}else if(type=='gloom'){
							leftAvg=27-avg;
						}else if(type=='nervous'){
							leftAvg=21-avg;
						}else if(type=='wellbeing'){
							leftAvg=26-avg;
						}
						$('#percent').text(avg)
						
						prePieStartAge = $('#startAge').val();
		       			prePieEndAge = $('#endAge').val();
		      			prePieGender = $('#selectRegion').val();
		       			prePieRegion = $('#selectGender').val();
		       			prePieType = $('#selectType').val();
					}
				},
				error: function(xhr, status, error){
					alert(xhr.responseText);
				},
				complete: function(xhr, status){}
			});


if(myPieChart && myPieChart !== null){
       myPieChart.destroy();
    }
// Pie Chart Example
var ctx = document.getElementById("myPieChart");
 myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["상세 평균","남은 최대치"],
    datasets: [{
      data: [avg,leftAvg],
      backgroundColor: ['#4e73df',  'darkgray'],
      hoverBackgroundColor: ['#2e59d9',  'gray'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },

});
}

// $(document).on("click","#Search",function(){
$("#startAge, #endAge, #selectGender, #selectRegion, #selectType").change(function() {
	pieActive();
})





// Pie Chart Example
var ctx = document.getElementById("myPieChart");
 myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["상세검색"],
    datasets: [{
      data: [],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

