package com.example.demo.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.mapper.MeasureMapper;

//롬북을 적용하여도 된다.
@Service
@Transactional
public class MeasureService{
	
    @Autowired
    private MeasureMapper measureMapper;

    public List<HashMap<Object, Object>> selectData(HashMap<Object, Object> vo) {
        return measureMapper.selectData(vo);
    }
    
    public List<HashMap<Object, Object>> selectOverview(HashMap<Object, Object> vo) {
        return measureMapper.selectOverview(vo);
    }

    public List<HashMap<Object, Object>> selectMap(HashMap<Object, Object> vo) {
        return measureMapper.selectMap(vo);
    }
    
	public List<HashMap<Object, Object>> selectInfo(HashMap<Object, Object> vo) {
		// TODO Auto-generated method stub
		return measureMapper.selectInfo(vo);
	}
}