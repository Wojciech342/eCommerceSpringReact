package com.ecommerce.project.repository;

import com.ecommerce.project.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;


public interface OrderRepository extends JpaRepository<Order, Long> {
}