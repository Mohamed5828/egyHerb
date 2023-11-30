package com.mohamed.egHerb.brand;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
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

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
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
