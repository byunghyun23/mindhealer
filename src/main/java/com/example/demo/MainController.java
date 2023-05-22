package com.example.demo;

import java.net.URLDecoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.service.MeasureService;
import com.google.gson.Gson;

@Controller
public class MainController {
	@Autowired
    private MeasureService measureService;
	
    @RequestMapping(value="/", produces = "application/text; charset=utf8")
    public String main() {
    	try {
//    		HashMap<Object, Object> parameterMap = new HashMap<Object, Object>();
//    		parameterMap.put("startAge", "20");
//    		parameterMap.put("endAge", "30");
//    		parameterMap.put("region", "서울");
//    		parameterMap.put("gender", "m");
//    		parameterMap.put("type", "stress");
//    		
//    		List<HashMap<Object, Object>> MeasureList = measureService.selectData(parameterMap);
//    		
//    		int cnt = 0;
//    		for (HashMap<Object, Object> measure : MeasureList) {
//    			for( Entry<Object, Object> element : measure.entrySet() ){
//    			    Object key = element.getKey();
//    			    Object value = element.getValue();
//    			    System.out.print( String.format(key + ":"+value + "  ") );
//    			    
//    			}
//    			cnt++;
//    			System.out.println();
//    		}
//    		
//    		System.out.println("cnt : " + cnt);
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
        return "index";
    }
    
    @SuppressWarnings("unchecked")
	@PostMapping(value="/getYearInfo")
    @ResponseBody
    public String getYearInfo(@RequestBody String info) {
        String json = null;
        try {
           Gson gson = new Gson();
           Map<String, String> map = new HashMap<String, String>();
           map = (Map<String, String>) gson.fromJson(info, map.getClass());
           
           HashMap<Object, Object> parameterMap = new HashMap<Object, Object>();
           if(!"none".equals(map.get("startAge"))) {
        	   parameterMap.put("startAge", map.get("startAge"));
           }
           if(!"none".equals(map.get("endAge"))) {
        	   parameterMap.put("endAge", map.get("endAge"));
           }
           if(!"none".equals(map.get("gender"))) {
        	   parameterMap.put("gender", map.get("gender"));
           }
           if(!"none".equals(map.get("region"))) {
        	   parameterMap.put("region", map.get("region"));
           }
           if(!"none".equals(map.get("type"))) {
        	   parameterMap.put("type", map.get("type"));
           }
           
           System.out.println("getChart : " + gson.toJson(parameterMap));
           List<HashMap<Object, Object>> MeasureList = measureService.selectOverview(parameterMap);
           
//           Gson gson = new Gson();
           json = gson.toJson(MeasureList);
           
        } catch (Exception e) {
           e.printStackTrace();
        }
        
        return json;
         
     }
    
    @SuppressWarnings("unchecked")
    @PostMapping(value="/getMapInfo")
    @ResponseBody
    public String getMapInfo(@RequestBody String info) {
    	String json = null;
    	try {
    		Gson gson = new Gson();
            Map<String, String> map = new HashMap<String, String>();
            map = (Map<String, String>) gson.fromJson(info, map.getClass());
            
            HashMap<Object, Object> parameterMap = new HashMap<Object, Object>();
            if(!"none".equals(map.get("startAge"))) {
         	   parameterMap.put("startAge", map.get("startAge"));
            }
            if(!"none".equals(map.get("endAge"))) {
         	   parameterMap.put("endAge", map.get("endAge"));
            }
            if(!"none".equals(map.get("gender"))) {
         	   parameterMap.put("gender", map.get("gender"));
            }
            if(!"none".equals(map.get("type"))) {
         	   parameterMap.put("type", map.get("type"));
            }
            
            System.out.println("getMap : " + gson.toJson(parameterMap));
            List<HashMap<Object, Object>> MeasureList = measureService.selectMap(parameterMap);
            

            json = gson.toJson(MeasureList);
    		
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	return json;
        
    }
    
    @PostMapping(value="/getInfo")
    @ResponseBody
    public String getInfo() {
    	String json = null;
    	try {
    		HashMap<Object, Object> parameterMap = new HashMap<Object, Object>();
    		
    		List<HashMap<Object, Object>> MeasureList = measureService.selectData(parameterMap);
    		
    		Gson gson = new Gson();
    		json = gson.toJson(MeasureList);
    		
    	} catch (Exception e) {
    		e.printStackTrace();
    	}
    	
    	return json;
        
    }


	@PostMapping(value="/getSelectInfo")
	@ResponseBody
	public String getSelectInfo(@RequestBody String info) {
		String json = null;
		try {
	//		info = URLDecoder.decode(info, "UTF-8");
	//
	//		System.out.println(info);
	//		String[] splitInfo=info.split("&");
	//		for(int i=0;i<splitInfo.length;i++)
	//			System.out.println(splitInfo[i]);
	//		
	//		System.out.println(splitInfo[0].substring(splitInfo[0].indexOf("=")+1));
	//		HashMap<Object, Object> parameterMap = new HashMap<Object, Object>();
	//		 parameterMap.put("startAge", splitInfo[0].substring(splitInfo[0].indexOf("=")+1));
	//		 parameterMap.put("endAge", splitInfo[1].substring(splitInfo[1].indexOf("=")+1));
	//		 parameterMap.put("region", splitInfo[2].substring(splitInfo[2].indexOf("=")+1));
	//		 parameterMap.put("gender", splitInfo[3].substring(splitInfo[3].indexOf("=")+1));
	//		 parameterMap.put("type", splitInfo[4].substring(splitInfo[4].indexOf("=")+1));
	//		 
	//		
	//		
			
			Gson gson = new Gson();
	        Map<String, String> map = new HashMap<String, String>();
	        map = (Map<String, String>) gson.fromJson(info, map.getClass());
	        
	        HashMap<Object, Object> parameterMap = new HashMap<Object, Object>();
	        if(!"none".equals(map.get("startAge"))) {
	     	   parameterMap.put("startAge", map.get("startAge"));
	        }
	        if(!"none".equals(map.get("endAge"))) {
	     	   parameterMap.put("endAge", map.get("endAge"));
	        }
	        if(!"none".equals(map.get("gender"))) {
	     	   parameterMap.put("gender", map.get("gender"));
	        }
	        if(!"none".equals(map.get("region"))) {
	     	   parameterMap.put("region", map.get("region"));
	        }
	        if(!"none".equals(map.get("type"))) {
	     	   parameterMap.put("type", map.get("type"));
	        }
	        
	        System.out.println("getPie : " + gson.toJson(parameterMap));
	        
			List<HashMap<Object, Object>> MeasureList = measureService.selectInfo(parameterMap);
	
	//		Gson gson = new Gson();
			json = gson.toJson(MeasureList);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return json;
	    
	}
}




