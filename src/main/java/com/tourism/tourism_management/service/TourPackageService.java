package com.tourism.tourism_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tourism.tourism_management.entity.TourPackageEntity;
import com.tourism.tourism_management.repository.TourPackageRepository;

@Service
public class TourPackageService {

    @Autowired
    private TourPackageRepository repository;

    public List<TourPackageEntity> getAllPackages() {
        return repository.findAll();
    }

    public TourPackageEntity addPackage(TourPackageEntity tourPackage) {
        return repository.save(tourPackage);
    }
    public TourPackageEntity updatePackage(TourPackageEntity tourPackage) {
        return repository.save(tourPackage);
    }

    public void deletePackage(Long id) {
        repository.deleteById(id);
    }
}
