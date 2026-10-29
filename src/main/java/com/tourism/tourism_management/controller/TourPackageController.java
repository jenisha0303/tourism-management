package com.tourism.tourism_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tourism.tourism_management.entity.TourPackageEntity;
import com.tourism.tourism_management.service.TourPackageService;

@RestController
@RequestMapping("/packages")
@CrossOrigin("*")
public class TourPackageController {

    @Autowired
    private TourPackageService service;

    @GetMapping
    public List<TourPackageEntity> getAllPackages() {
        return service.getAllPackages();
    }
    @GetMapping("/test")
    public String test() {
        return "Controller Working";
    }

    @PostMapping
    public TourPackageEntity addPackage(
            @RequestBody TourPackageEntity tourPackage) {
        return service.addPackage(tourPackage);
    }
    @PutMapping("/{id}")
    public TourPackageEntity updatePackage(@PathVariable Long id,
                                           @RequestBody TourPackageEntity tourPackage) {
        tourPackage.setId(id);
        return service.updatePackage(tourPackage);
    }
    @DeleteMapping("/{id}")
    public void deletePackage(@PathVariable Long id) {
        service.deletePackage(id);
    }
}
