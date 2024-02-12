package com.mohamed.egHerb.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="user_address")
public class UserAddress {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private AppUser user;

    @Column(name = "address_line1")
    private String addressLine1;

    @Enumerated(EnumType.STRING)
    @Column (name = "city")
    private Cities city;

    @Column(name = "area")
    private String area;

    @Column(name = "mobile")
    private int mobile;

    public UserAddress(){}

    public UserAddress(AppUser userId, String addressLine1, Cities city, String area, int mobile) {
        this.user = userId;
        this.addressLine1 = addressLine1;
        this.city = city;
        this.area = area;
        this.mobile = mobile;
    }

    @Override
    public String toString() {
        return "UserAddress{" +
                "id=" + id +
                ", userId=" + user +
                ", addressLine1='" + addressLine1 + '\'' +
                ", city='" + city + '\'' +
                ", area='" + area + '\'' +
                ", mobile=" + mobile +
                '}';
    }
}
