package com.mohamed.egHerb.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name="order_details")
public class OrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private AppUser user;

    @Column(name = "total")
    private int total;

    @Column(name = "payment_id")
    private int paymentId;

    @Column(name = "created_at")
    private Timestamp createdAt;

    @Column(name = "modified_at")
    private Timestamp modifiedAt;

    @OneToMany(mappedBy = "order")
    private List<OrderItem> orderItems;

    public OrderDetail(){

    }

    public OrderDetail(AppUser userId, int total, int paymentId, Timestamp createdAt, Timestamp modifiedAt) {
        this.user = userId;
        this.total = total;
        this.paymentId = paymentId;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }
    @Override
    public String toString() {
        return "OrderDetail{" +
                "id=" + id +
                ", userId=" + user +
                ", total=" + total +
                ", paymentId=" + paymentId +
                ", createdAt=" + createdAt +
                ", modifiedAt=" + modifiedAt +
                '}';
    }
}

