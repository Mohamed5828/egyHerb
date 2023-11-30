package com.mohamed.egHerb.entity;

import com.google.gson.annotations.SerializedName;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;


@Entity
@Getter
@Setter
@Table(name="cart_items")
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    @SerializedName("id")
    private String id;

//    @ManyToOne
//    @JoinColumn(name = "product_id" , nullable = false)
    private int productId;

//    @ManyToOne
//    @JoinColumn(name = "user_id" , nullable = false)
    private int userId;

    @Column(name = "quantity")
    private int quantity;


    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "modified_at")
    private LocalDateTime  modifiedAt;

    public  CartItem(){}
    public CartItem(int productId, int quantity,int userId, LocalDateTime  createdAt, LocalDateTime  modifiedAt) {
        this.productId = productId;
        this.quantity = quantity;
        this.userId = userId;
        this.createdAt = createdAt;
        this.modifiedAt = modifiedAt;
    }

    @Override
    public String toString() {
        return "CartItem{" +
                "id=" + id +
                ", productId=" + productId +
                ", userId=" + userId +
                ", quantity=" + quantity +
                ", createdAt=" + createdAt +
                ", modifiedAt=" + modifiedAt +
                '}';
    }
}
