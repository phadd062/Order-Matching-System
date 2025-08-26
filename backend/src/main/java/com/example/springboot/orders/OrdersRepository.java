package com.example.springboot.orders;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders, Long> {
    List<Orders> findOrdersByTypeIgnoreCaseAndStatus(String type, Sort sort, String status);
    List<Orders> findByTypeIgnoreCaseAndPriceLessThanEqualAndStatusOrderByPriceAsc(String type, Double price, String status);
    List<Orders> findByTypeIgnoreCaseAndPriceGreaterThanEqualAndStatusOrderByPriceDesc(String type, Double price, String status);
    List<Orders> findAllByStatusIgnoreCaseOrderByTimestampDesc(String status);
}
