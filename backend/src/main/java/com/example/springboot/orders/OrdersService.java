package com.example.springboot.orders;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class OrdersService {
    private OrdersRepository ordersRepository;

    public OrdersService(OrdersRepository ordersRepository) {
        this.ordersRepository = ordersRepository;
    }

    public List<Orders> getOrdersByStatus(String status) {
        return ordersRepository.findAllByStatusIgnoreCaseOrderByTimestampDesc(status);
    }

    public List<Orders> getOrdersByBuyOrSell(String type) {
        Sort sort = Sort.by("price");
        if (type.equalsIgnoreCase("sell")) {
            sort = sort.ascending();
        } else sort = sort.descending();
        return ordersRepository.findOrdersByTypeIgnoreCaseAndStatus(type, sort, "submitted");
    }

    public void resetData() {
        ordersRepository.deleteAll();

        List<Orders> initialOrders = List.of(
                new Orders(113000.0, 6, "Buy", "submitted", LocalDateTime.now()),
                new Orders(117000.0, 3, "Buy", "submitted", LocalDateTime.now()),
                new Orders(114000.0, 2, "Buy", "submitted", LocalDateTime.now()),
                new Orders(120000.0, 6, "Sell", "submitted", LocalDateTime.now()),
                new Orders(124000.0, 8, "Sell", "submitted", LocalDateTime.now()),
                new Orders(130000.0, 1, "Sell", "submitted", LocalDateTime.now()),
                new Orders(116000.0, 2, "Sell", "submitted", LocalDateTime.now()),
                new Orders(112000.0, 4, "Sell", "submitted", LocalDateTime.now()),
                new Orders(121000.0, 2, "Buy", "submitted", LocalDateTime.now()),
                new Orders(116000.0, 3, "Buy", "submitted", LocalDateTime.now())
        );

        for (Orders order : initialOrders) saveAndMatchOrder(order);
    }


    public Orders saveAndMatchOrder(Orders incomingOrder) {
        incomingOrder.setStatus("submitted");
        boolean isBuy = incomingOrder.getType().equalsIgnoreCase("buy");
        String counterType = isBuy ? "sell" : "buy";

        List<Orders> matches = isBuy
                ? ordersRepository.findByTypeIgnoreCaseAndPriceLessThanEqualAndStatusOrderByPriceAsc(
                counterType, incomingOrder.getPrice(), "submitted")
                : ordersRepository.findByTypeIgnoreCaseAndPriceGreaterThanEqualAndStatusOrderByPriceDesc(
                counterType, incomingOrder.getPrice(), "submitted");

        int remainingQty = incomingOrder.getQuantity();

        for (Orders match : matches) {
            if (remainingQty <= 0) break;

            int matchedQty = Math.min(remainingQty, match.getQuantity());

            // Update matched order
            match.setQuantity(match.getQuantity() - matchedQty);
            if (match.getQuantity() == 0) match.setStatus("filled");
            ordersRepository.save(match);

            // Update remaining qty of incoming order
            remainingQty -= matchedQty;
        }

        incomingOrder.setQuantity(remainingQty);
        if (remainingQty == 0) {
            incomingOrder.setStatus("filled");
        }

        return ordersRepository.save(incomingOrder);
    }

}
