package com.example.demo.mapper;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface MeasureMapper {

	List<HashMap<Object, Object>> selectData(HashMap<Object, Object> vo);
	List<HashMap<Object, Object>> selectOverview(HashMap<Object, Object> vo);
	List<HashMap<Object, Object>> selectMap(HashMap<Object, Object> vo);
	
	List<HashMap<Object, Object>> selectInfo(HashMap<Object, Object> vo);
}