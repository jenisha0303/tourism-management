package com.tourism.tourism_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tourism.tourism_management.entity.BookingEntity;
import com.tourism.tourism_management.repository.BookingRepository;

@Service
public class BookingService {

    @Autowired
    private BookingRepository repository;


    // Get all bookings
    public List<BookingEntity> getAllBookings() {
        return repository.findAll();
    }


    // Add booking
    public BookingEntity addBooking(BookingEntity booking) {
        return repository.save(booking);
    }


    // Update booking
    public BookingEntity updateBooking(BookingEntity booking) {
        return repository.save(booking);
    }


    // Delete booking
    public void deleteBooking(Long id) {
        repository.deleteById(id);
    }
}
