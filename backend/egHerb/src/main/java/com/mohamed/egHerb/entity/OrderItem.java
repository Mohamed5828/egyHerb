package com.mohamed.egHerb.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime ;

@Entity
@Getter
@Setter
@Table(name = "order_items")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private OrderDetail order;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @Column(name = "created_at")
    private LocalDateTime  createdAt;

    @Column(name = "modified_at")
    private LocalDateTime  modifiedAt;

    public OrderItem(){}

    public OrderItem(OrderDetail orderId, Product productId, LocalDateTime  createdAt, LocalDateTime  modifiedAt) {
        this.order = orderId;
        this.product = productId;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }

    @Override
    public String toString() {
        return "OrderItem{" +
                "id=" + id +
                ", orderIdd=" + order +
                ", productId=" + product +
                ", createdAt=" + createdAt +
                ", modifiedAt=" + modifiedAt +
                '}';
    }
}


