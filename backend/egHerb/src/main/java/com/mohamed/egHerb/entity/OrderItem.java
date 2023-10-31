package com.mohamed.egHerb.entity;

import jakarta.persistence.*;

import java.sql.Timestamp;

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
    private Timestamp createdAt;

    @Column(name = "modified_at")
    private Timestamp modifiedAt;

    public OrderItem(){}

    public OrderItem(int orderIdd, int productId, Timestamp createdAt, Timestamp modifiedAt) {
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

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Timestamp createdAt) {
        this.createdAt = createdAt;
    }

    public Timestamp getModifiedAt() {
        return modifiedAt;
    }

    public void setModifiedAt(Timestamp modifiedAt) {
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


