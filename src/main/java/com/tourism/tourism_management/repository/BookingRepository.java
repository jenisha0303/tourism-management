package com.tourism.tourism_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tourism.tourism_management.entity.BookingEntity;

public interface BookingRepository extends JpaRepository<BookingEntity, Long> {

}
