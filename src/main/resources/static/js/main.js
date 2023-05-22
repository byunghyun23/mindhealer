var genderMap = new Map();
genderMap.set('남', 'm');
genderMap.set('여', 'f');

$(document).ready(function() {
	$('#buttonGender').get(0).click();
	
	
});


var category;

var myChart=null;
$(document).on("click",".mind",function(){
	
	category=$(this).val()
	var info;	
	var infoArray= new Array(5);
	var infoArrayCount=new Array(5);	
	var label=[];

	

			$.ajax({
				url: "/getInfo",
				type: "post",
				dataType: 'json',
				async: false,
				success: function(data){	
//					myChart=null;
					info=data
					console.log(info)
				},
				error: function(xhr, status, error){
					alert(xhr.responseText);
				},
				complete: function(xhr, status){}
			});



	if(category=='성별'){
		label[0]='남';
		label[1]='여';
	$('#buttonGender').css({ background:"#4e73df" , color:"black" });	
	$('#buttonAge').css({ background:"rgb(239, 239, 239)" , color:"black" });	
	$('#buttonRegion').css({ background:"rgb(239, 239, 239)" , color:"black" });
	for(var i=0;i<infoArray.length;i++){
		infoArray[i]=new Array(label.length)
		infoArrayCount[i]=new Array(label.length)
	}
		for(var i=0;i<infoArray.length;i++)
		{
			
			for(var j=0;j<label.length;j++)
			{
				infoArrayCount[i][j]=0;
				infoArray[i][j]=null;
			}
		}
		
		for(var i=0; i<info.length;i++)
			{
			if(info[i]['gender']=='m'){
				if(info[i]['type']=='stress'){
					infoArray[0][0]+=info[i]['score']
					infoArrayCount[0][0]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][0]+=info[i]['score']
					infoArrayCount[1][0]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][0]+=info[i]['score']
					infoArrayCount[2][0]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][0]+=info[i]['score']
					infoArrayCount[3][0]++;
				}
				
				}
			else{
				if(info[i]['type']=='stress'){
					infoArray[0][1]+=info[i]['score']
					infoArrayCount[0][1]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][1]+=info[i]['score']
					infoArrayCount[1][1]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][1]+=info[i]['score']
					infoArrayCount[2][1]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][1]+=info[i]['score']
					infoArrayCount[3][1]++;
				}
				
				}
		}
		for(var i=0;i<infoArray.length;i++)
			{
				for(var j=0;j<label.length;j++){
				if(infoArrayCount[i][j]!=0)
					infoArray[i][j]= Math.ceil(infoArray[i][j]/infoArrayCount[i][j] * 100) / 100
			}
		}
			
		
		
	}
	
	
	
	
	else if(category=='나이')
		{
		label[0]='1~10세';
		label[1]='11~20세';
		label[2]='21~30세';
		label[3]='31~40세';
		label[4]='41~50세';
		label[5]='51~60세';
		label[6]='61~70세';
		label[7]='71~80세';
		label[8]='81~90세';
		label[9]='91~100세';
		
	$('#buttonGender').css({ background:"rgb(239, 239, 239)" , color:"black" });	
	$('#buttonAge').css({ background:"#4e73df" , color:"black" });	
	$('#buttonRegion').css({ background:"rgb(239, 239, 239)" , color:"black" });
		
		for(var i=0;i<infoArray.length;i++){
			infoArray[i]=new Array(label.length)
			infoArrayCount[i]=new Array(label.length)
		}
		
		for(var i=0;i<infoArray.length;i++)
		{
			
			for(var j=0;j<label.length;j++)
			{
				infoArrayCount[i][j]=0;
				infoArray[i][j]=null;
			}
		}
		
		
		for(var i=0; i<info.length;i++)
			{
			if(info[i]['age']<=10&&info[i]['age']>=1){
				if(info[i]['type']=='stress'){
					infoArray[0][0]+=info[i]['score']
					infoArrayCount[0][0]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][0]+=info[i]['score']
					infoArrayCount[1][0]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][0]+=info[i]['score']
					infoArrayCount[2][0]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][0]+=info[i]['score']
					infoArrayCount[3][0]++;
				}
			}
				
			else if(info[i]['age']<=20&&info[i]['age']>=11){
				if(info[i]['type']=='stress'){
					infoArray[0][1]+=info[i]['score']
					infoArrayCount[0][1]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][1]+=info[i]['score']
					infoArrayCount[1][1]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][1]+=info[i]['score']
					infoArrayCount[2][1]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][1]+=info[i]['score']
					infoArrayCount[3][1]++;
				}
				}
			else if(info[i]['age']<=30&&info[i]['age']>=21){
				if(info[i]['type']=='stress'){
					infoArray[0][2]+=info[i]['score']
					infoArrayCount[0][2]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][2]+=info[i]['score']
					infoArrayCount[1][2]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][2]+=info[i]['score']
					infoArrayCount[2][2]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][2]+=info[i]['score']
					infoArrayCount[3][2]++;
				}
				}
			else if(info[i]['age']<=40&&info[i]['age']>=31){
			if(info[i]['type']=='stress'){
					infoArray[0][3]+=info[i]['score']
					infoArrayCount[0][3]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][3]+=info[i]['score']
					infoArrayCount[1][3]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][3]+=info[i]['score']
					infoArrayCount[2][3]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][3]+=info[i]['score']
					infoArrayCount[3][3]++;
				}
				}
			else if(info[i]['age']<=50&&info[i]['age']>=41){
				if(info[i]['type']=='stress'){
					infoArray[0][4]+=info[i]['score']
					infoArrayCount[0][4]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][4]+=info[i]['score']
					infoArrayCount[1][4]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][4]+=info[i]['score']
					infoArrayCount[2][4]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][4]+=info[i]['score']
					infoArrayCount[3][4]++;
				}
				}
			else if(info[i]['age']<=60&&info[i]['age']>=51){
				if(info[i]['type']=='stress'){
					infoArray[0][5]+=info[i]['score']
					infoArrayCount[0][5]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][5]+=info[i]['score']
					infoArrayCount[1][5]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][5]+=info[i]['score']
					infoArrayCount[2][5]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][5]+=info[i]['score']
					infoArrayCount[3][5]++;
				}
				}
			else if(info[i]['age']<=70&&info[i]['age']>=61){
				if(info[i]['type']=='stress'){
					infoArray[0][6]+=info[i]['score']
					infoArrayCount[0][6]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][6]+=info[i]['score']
					infoArrayCount[1][6]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][6]+=info[i]['score']
					infoArrayCount[2][6]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][6]+=info[i]['score']
					infoArrayCount[3][6]++;
				}
				}
			else if(info[i]['age']<=80&&info[i]['age']>=71){
				if(info[i]['type']=='stress'){
					infoArray[0][7]+=info[i]['score']
					infoArrayCount[0][7]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][7]+=info[i]['score']
					infoArrayCount[1][7]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][7]+=info[i]['score']
					infoArrayCount[2][7]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][7]+=info[i]['score']
					infoArrayCount[3][7]++;
				}
				}
			else if(info[i]['age']<=90&&info[i]['age']>=81){
				if(info[i]['type']=='stress'){
					infoArray[0][8]+=info[i]['score']
					infoArrayCount[0][8]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][8]+=info[i]['score']
					infoArrayCount[1][8]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][8]+=info[i]['score']
					infoArrayCount[2][8]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][8]+=info[i]['score']
					infoArrayCount[3][8]++;
				}
				}	
			else if(info[i]['age']<=100&&info[i]['age']>=91){
				if(info[i]['type']=='stress'){
					infoArray[0][9]+=info[i]['score']
					infoArrayCount[0][9]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][9]+=info[i]['score']
					infoArrayCount[1][9]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][9]+=info[i]['score']
					infoArrayCount[2][9]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][9]+=info[i]['score']
					infoArrayCount[3][9]++;
				}
				}	
			
		}
		for(var i=0;i<infoArray.length;i++)
			{
				for(var j=0;j<label.length;j++){
				if(infoArrayCount[i][j]!=0)
					infoArray[i][j]= Math.ceil(infoArray[i][j]/infoArrayCount[i][j] * 100) / 100
			}
		}
			
	}
	
	
	
	
	
	else if(category=='지역')
		{
		label[0]='서울';
		label[1]='경기도';
		label[2]='강원도';
		label[3]='전라도';
		label[4]='인천';
		label[5]='대구';
		label[6]='충청도';
		label[7]='부산';
		label[8]='대전';
		label[9]='광주';
		label[10]='울산';
		label[11]='경상도';
		label[12]='제주도';
		
		
		
		
		$('#buttonGender').css({ background:"rgb(239, 239, 239)" , color:"black" });	
		$('#buttonAge').css({ background:"rgb(239, 239, 239)" , color:"black" });	
		$('#buttonRegion').css({ background:"#4e73df" , color:"black" });
		
		for(var i=0;i<infoArray.length;i++){
			infoArray[i]=new Array(label.length)
			infoArrayCount[i]=new Array(label.length)
		}
		
		for(var i=0;i<infoArray.length;i++)
		{
			
			for(var j=0;j<label.length;j++)
			{
				infoArrayCount[i][j]=0;
				infoArray[i][j]=null;
			}
		}
		
		for(var i=0; i<info.length;i++)
			{
			if(info[i]['region']=='서울'){
				if(info[i]['type']=='stress'){
					infoArray[0][0]+=info[i]['score']
					infoArrayCount[0][0]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][0]+=info[i]['score']
					infoArrayCount[1][0]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][0]+=info[i]['score']
					infoArrayCount[2][0]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][0]+=info[i]['score']
					infoArrayCount[3][0]++;
				}
				
				}
			else if(info[i]['region']=='경기도'){
				if(info[i]['type']=='stress'){
					infoArray[0][1]+=info[i]['score']
					infoArrayCount[0][1]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][1]+=info[i]['score']
					infoArrayCount[1][1]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][1]+=info[i]['score']
					infoArrayCount[2][1]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][1]+=info[i]['score']
					infoArrayCount[3][1]++;
				}
			}
			else if(info[i]['region']=='강원도'){
				if(info[i]['type']=='stress'){
					infoArray[0][2]+=info[i]['score']
					infoArrayCount[0][2]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][2]+=info[i]['score']
					infoArrayCount[1][2]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][2]+=info[i]['score']
					infoArrayCount[2][2]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][2]+=info[i]['score']
					infoArrayCount[3][2]++;
				}
			}
			else if(info[i]['region']=='전라도'){
				if(info[i]['type']=='stress'){
					infoArray[0][3]+=info[i]['score']
					infoArrayCount[0][3]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][3]+=info[i]['score']
					infoArrayCount[1][3]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][3]+=info[i]['score']
					infoArrayCount[2][3]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][3]+=info[i]['score']
					infoArrayCount[3][3]++;
				}
			}
			else if(info[i]['region']=='인천'){
				if(info[i]['type']=='stress'){
					infoArray[0][4]+=info[i]['score']
					infoArrayCount[0][4]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][4]+=info[i]['score']
					infoArrayCount[1][4]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][4]+=info[i]['score']
					infoArrayCount[2][4]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][4]+=info[i]['score']
					infoArrayCount[3][4]++;
				}
			}
			else if(info[i]['region']=='대구'){
				if(info[i]['type']=='stress'){
					infoArray[0][5]+=info[i]['score']
					infoArrayCount[0][5]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][5]+=info[i]['score']
					infoArrayCount[1][5]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][5]+=info[i]['score']
					infoArrayCount[2][5]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][5]+=info[i]['score']
					infoArrayCount[3][5]++;
				}
			}
			else if(info[i]['region']=='충청도'){
			if(info[i]['type']=='stress'){
					infoArray[0][6]+=info[i]['score']
					infoArrayCount[0][6]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][6]+=info[i]['score']
					infoArrayCount[1][6]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][6]+=info[i]['score']
					infoArrayCount[2][6]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][6]+=info[i]['score']
					infoArrayCount[3][6]++;
				}
			}
			else if(info[i]['region']=='부산'){
			if(info[i]['type']=='stress'){
					infoArray[0][7]+=info[i]['score']
					infoArrayCount[0][7]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][7]+=info[i]['score']
					infoArrayCount[1][7]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][7]+=info[i]['score']
					infoArrayCount[2][7]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][7]+=info[i]['score']
					infoArrayCount[3][7]++;
				}
			}
			
			else if(info[i]['region']=='대전'){
			if(info[i]['type']=='stress'){
					infoArray[0][8]+=info[i]['score']
					infoArrayCount[0][8]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][8]+=info[i]['score']
					infoArrayCount[1][8]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][8]+=info[i]['score']
					infoArrayCount[2][8]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][8]+=info[i]['score']
					infoArrayCount[3][8]++;
				}
			}
			
			else if(info[i]['region']=='광주'){
			if(info[i]['type']=='stress'){
					infoArray[0][9]+=info[i]['score']
					infoArrayCount[0][9]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][9]+=info[i]['score']
					infoArrayCount[1][9]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][9]+=info[i]['score']
					infoArrayCount[2][9]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][9]+=info[i]['score']
					infoArrayCount[3][9]++;
				}
			}
			
			else if(info[i]['region']=='울산'){
			if(info[i]['type']=='stress'){
					infoArray[0][10]+=info[i]['score']
					infoArrayCount[0][10]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][10]+=info[i]['score']
					infoArrayCount[1][10]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][10]+=info[i]['score']
					infoArrayCount[2][10]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][10]+=info[i]['score']
					infoArrayCount[3][10]++;
				}
			}
			
			else if(info[i]['region']=='경상도'){
			if(info[i]['type']=='stress'){
					infoArray[0][11]+=info[i]['score']
					infoArrayCount[0][11]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][11]+=info[i]['score']
					infoArrayCount[1][11]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][11]+=info[i]['score']
					infoArrayCount[2][11]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][11]+=info[i]['score']
					infoArrayCount[3][11]++;
				}
			}
			
			else if(info[i]['region']=='제주도'){
			if(info[i]['type']=='stress'){
					infoArray[0][12]+=info[i]['score']
					infoArrayCount[0][12]++;
				}else if(info[i]['type']=='gloom'){
					infoArray[1][12]+=info[i]['score']
					infoArrayCount[1][12]++;
				}else if(info[i]['type']=='nervous'){
					infoArray[2][12]+=info[i]['score']
					infoArrayCount[2][12]++;
				}else if(info[i]['type']=='wellbeing'){
					infoArray[3][12]+=info[i]['score']
					infoArrayCount[3][12]++;
				}
			}
			
		}
			for(var i=0;i<infoArray.length;i++)
			{
				for(var j=0;j<label.length;j++){
				if(infoArrayCount[i][j]!=0)
					infoArray[i][j]= Math.ceil(infoArray[i][j]/infoArrayCount[i][j] * 100) / 100
			}
			
		}
			
			
	}
		
	
	
	
	
	
	
	
	
	 if(myChart && myChart !== null){
       myChart.destroy();
    }
	
	
	
		var ctx = document.getElementById('example').getContext('2d');
		
		 myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: label,
		        datasets: [{
		            label: 'stress',
		            data: infoArray[0],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.4)',
						 'rgba(255, 99, 132, 0.4)',
						 'rgba(255, 99, 132, 0.4)',
						 'rgba(255, 99, 132, 0.4)',
						 'rgba(255, 99, 132, 0.4)',
						 'rgba(255, 99, 132, 0.4)',
						 'rgba(255, 99, 132, 0.4)',
						 'rgba(255, 99, 132, 0.4)',
						 'rgba(255, 99, 132, 0.4)',
						 'rgba(255, 99, 132, 0.4)',
						 'rgba(255, 99, 132, 0.4)',
						 'rgba(255, 99, 132, 0.4)',
						 'rgba(255, 99, 132, 0.4)',
					     'rgba(255, 99, 132, 0.4)',

		             
		            ],
		            borderColor: [
		             
		            ],
		            borderWidth: 1
		        },



			{
		            label: 'gloom',
		            data: infoArray[1],
		            backgroundColor: [
		                
		                'rgba(54, 162, 235, 0.4)',
						 'rgba(54, 162, 235, 0.4)',
						 'rgba(54, 162, 235, 0.4)',
						 'rgba(54, 162, 235, 0.4)',
						 'rgba(54, 162, 235, 0.4)',
						 'rgba(54, 162, 235, 0.4)',
						 'rgba(54, 162, 235, 0.4)',
						 'rgba(54, 162, 235, 0.4)',
						 'rgba(54, 162, 235, 0.4)',
						 'rgba(54, 162, 235, 0.4)',
						 'rgba(54, 162, 235, 0.4)',
						 'rgba(54, 162, 235, 0.4)',
						 'rgba(54, 162, 235, 0.4)',
						 'rgba(54, 162, 235, 0.4)',
						 'rgba(54, 162, 235, 0.4)',

		               
		            ],
		            borderColor: [
		             
		            ],
		            borderWidth: 1
		        }




				,
						{
		            label: 'nervous',
		            data: infoArray[2],
		            backgroundColor: [
		               
		                'rgba(255, 206, 86, 0.4)',
						'rgba(255, 206, 86, 0.4)',
						'rgba(255, 206, 86, 0.4)',
						'rgba(255, 206, 86, 0.4)',
						'rgba(255, 206, 86, 0.4)',
						'rgba(255, 206, 86, 0.4)',
						'rgba(255, 206, 86, 0.4)',
						'rgba(255, 206, 86, 0.4)',
						'rgba(255, 206, 86, 0.4)',
						'rgba(255, 206, 86, 0.4)',
						'rgba(255, 206, 86, 0.4)',
						'rgba(255, 206, 86, 0.4)',
						'rgba(255, 206, 86, 0.4)',
						'rgba(255, 206, 86, 0.4)',
						'rgba(255, 206, 86, 0.4)',

		               
		            ],
		            borderColor: [
		             
		            ],
		            borderWidth: 1
		        }





				,		{
		            label: 'wellbeing',
		            data: infoArray[3],
		            backgroundColor: [
		                
		                'rgba(75, 192, 192, 0.4)',
						 'rgba(75, 192, 192, 0.4)',
						 'rgba(75, 192, 192, 0.4)',
						 'rgba(75, 192, 192, 0.4)',
						 'rgba(75, 192, 192, 0.4)',
						 'rgba(75, 192, 192, 0.4)',
						 'rgba(75, 192, 192, 0.4)',
						 'rgba(75, 192, 192, 0.4)',
						 'rgba(75, 192, 192, 0.4)',
						 'rgba(75, 192, 192, 0.4)',
					     'rgba(75, 192, 192, 0.4)',
					     'rgba(75, 192, 192, 0.4)',
					     'rgba(75, 192, 192, 0.4)',
					     'rgba(75, 192, 192, 0.4)',
		               
		            ],
		            borderColor: [
		             
		            ],
		            borderWidth: 1
		        }



			

]
		    },
		    options: {
		        maintainAspectRatio: true, 
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});
	
	
})




$(document).ready(function() {
	var age;
	
	for(var i=1; i<100;i++)
		age+="<option>"+i+"</option>"
		
	$('#startAge').append(age)
	
});

function starAgeChange(){
	var startage=$('#startAge').val();
	var endage;
	
	$('#endAge').empty();
	/*
	if(startage=='선택없음')
	{
		endage+="<option>선택없음</option>"
	}	
	*/
	endage += "<option value='none' selected>종료나이</option>";
	
	for(var i=startage; i<100;i++)
		endage+="<option>"+i+"</option>"
		
	$('#endAge').append(endage)
}





