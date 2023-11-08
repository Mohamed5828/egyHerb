package com.mohamed.egHerb.entity;

import jakarta.persistence.*;
@Entity
@Table(name = "brand")
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="name")
    private String name;

    @Column(name="brand_url")
    private String brandUrl;

    public Brand(){}

    public Brand(String name, String brandUrl) {
        this.name = name;
        this.brandUrl = brandUrl;

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrandUrl() {
        return brandUrl;
    }

    public void setBrandUrl(String brandUrl) {
        this.brandUrl = brandUrl;
    }



    @Override
    public String toString() {
        return "Category{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", brandUrl='" + brandUrl + '\'' +
                '}';
    }
}
