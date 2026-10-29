package com.tourism.tourism_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tourism.tourism_management.entity.TouristEntity;
import com.tourism.tourism_management.repository.TouristRepository;

@Service
public class TouristService {

    @Autowired
    private TouristRepository repository;

    public List<TouristEntity> getAllTourists() {
        return repository.findAll();
    }

    public TouristEntity addTourist(TouristEntity tourist) {
        return repository.save(tourist);
    }

    public TouristEntity updateTourist(TouristEntity tourist) {
        return repository.save(tourist);
    }

    public void deleteTourist(Long id) {
        repository.deleteById(id);
    }

    // Login method
    public TouristEntity login(String email, String password) {
        return repository.findByEmailAndPassword(email, password);
    }
}