package com.tourism.tourism_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tourism.tourism_management.entity.TouristEntity;
import com.tourism.tourism_management.service.TouristService;

@RestController
@RequestMapping("/tourists")
@CrossOrigin("*")
public class TouristController {

    @Autowired
    private TouristService service;

    @GetMapping
    public List<TouristEntity> getAllTourists() {
        return service.getAllTourists();
    }

    @PostMapping
    public TouristEntity addTourist(@RequestBody TouristEntity tourist) {
        return service.addTourist(tourist);
    }

    @PutMapping("/{id}")
    public TouristEntity updateTourist(@PathVariable Long id,
                                       @RequestBody TouristEntity tourist) {
        tourist.setId(id);
        return service.updateTourist(tourist);
    }

    @DeleteMapping("/{id}")
    public void deleteTourist(@PathVariable Long id) {
        service.deleteTourist(id);
    }

    // Login
    @PostMapping("/login")
    public TouristEntity login(@RequestBody TouristEntity tourist) {
        return service.login(tourist.getEmail(), tourist.getPassword());
    }
}