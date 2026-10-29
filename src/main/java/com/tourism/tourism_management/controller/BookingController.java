package com.tourism.tourism_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.tourism.tourism_management.entity.BookingEntity;
import com.tourism.tourism_management.service.BookingService;

@RestController
@RequestMapping("/bookings")
@CrossOrigin("*")
public class BookingController {

    @Autowired
    private BookingService service;


    // Get all bookings
    @GetMapping
    public List<BookingEntity> getAllBookings() {
        return service.getAllBookings();
    }


    // Add booking
    @PostMapping
    public BookingEntity addBooking(@RequestBody BookingEntity booking) {
        return service.addBooking(booking);
    }


    // Update booking
    @PutMapping("/{id}")
    public BookingEntity updateBooking(@PathVariable Long id,
                                       @RequestBody BookingEntity booking) {
        booking.setId(id);
        return service.updateBooking(booking);
    }


    // Delete booking
    @DeleteMapping("/{id}")
    public void deleteBooking(@PathVariable Long id) {
        service.deleteBooking(id);
    }
}
