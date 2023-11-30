package com.mohamed.egHerb.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime ;

@Entity
@Table(name = "order_items")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name = "order_id")
    private int orderIdd;

    @Column(name = "product_id")
    private int productId;

    @Column(name = "created_at")
    private LocalDateTime  createdAt;

    @Column(name = "modified_at")
    private LocalDateTime  modifiedAt;

    public OrderItem(){}

    public OrderItem(int orderIdd, int productId, LocalDateTime  createdAt, LocalDateTime  modifiedAt) {
        this.orderIdd = orderIdd;
        this.productId = productId;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getOrderIdd() {
        return orderIdd;
    }

    public void setOrderIdd(int orderIdd) {
        this.orderIdd = orderIdd;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public LocalDateTime  getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime  createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime  getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(LocalDateTime  modifiedAt) {
        this.modifiedAt = modifiedAt;
    }

    @Override
    public String toString() {
        return "OrderItem{" +
                "id=" + id +
                ", orderIdd=" + orderIdd +
                ", productId=" + productId +
                ", createdAt=" + createdAt +
                ", modifiedAt=" + modifiedAt +
                '}';
    }
}


