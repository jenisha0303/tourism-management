package com.tourism.tourism_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.tourism.tourism_management.entity.TouristEntity;

public interface TouristRepository extends JpaRepository<TouristEntity, Long> {

    TouristEntity findByEmailAndPassword(String email, String password);
}