package com.tourism.tourism_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tourism.tourism_management.entity.TourPackageEntity;

public interface TourPackageRepository 
        extends JpaRepository<TourPackageEntity, Long> {

}
