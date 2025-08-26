package com.example.springboot.orders;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/orders")
public class OrdersController {

    private OrdersService orderMatchingService;

    public OrdersController(OrdersService ordersService) {
        this.orderMatchingService = ordersService;
    }

    @GetMapping("type")
    public List<Orders> getOrdersByBuyOrSell(@RequestParam("buyorsell") String type) {
        return orderMatchingService.getOrdersByBuyOrSell(type);
    }

    @GetMapping("/orderbook")
    public List<Orders> getOrderBook() {
        return orderMatchingService.getOrdersByStatus("submitted");
    }

    @GetMapping("/filled")
    public List<Orders> getFilledOrders() {
        return orderMatchingService.getOrdersByStatus("filled");
    }


    @PostMapping
    public ResponseEntity<Orders> submitOrder(@RequestBody Orders order) {
        Orders saved = orderMatchingService.saveAndMatchOrder(order);
        return ResponseEntity.ok(saved);
    }

    @PostMapping("/reset")
    public ResponseEntity<Map<String, String>> resetOrders() {
        orderMatchingService.resetData();
        Map<String, String> response = new HashMap<>();
        response.put("message", "Orderbook reset");
        return ResponseEntity.ok(response);
    }

}
