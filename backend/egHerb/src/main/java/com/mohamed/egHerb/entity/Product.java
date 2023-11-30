package com.mohamed.egHerb.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "product_url")
    private String productUrl;

    @Column(name = "first_image")
    private String firstImage;

    @Column(name = "second_image")
    private String secondImage;

    @Column(name = "title")
    private String title;

    @Column(name = "popularity")
    private int popularity;

    @Column(name = "description")
    private String description;

    @Column(name = "weight")
    private String weight;

    @Column(name = "quantity")
    private String quantity;

    @Column(name = "price_us")
    private BigDecimal priceUs;

    @Column(name = "price_eg")
    private BigDecimal priceEg;

    @Column(name = "dimensions")
    private String dimensions;

    @Column(name = "expiry_date")
    private String expiryDate;

    @ManyToOne
    @JoinColumn(name = "brand_id", nullable = false)
    private Brand brand;

    @Column(name = "modified_at", nullable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
    private Timestamp modifiedAt;

    @ManyToMany
    @JoinTable(
            name = "product_category",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private List<Category> categories;
    public Product() {
    }

    public Product(String productUrl, String firstImage, String secondImage, String title, int popularity, String description, String weight, String quantity, BigDecimal priceUs, BigDecimal priceEg, String dimensions, String expiryDate, Brand brand, Timestamp modifiedAt, List<Category>  category) {
        this.productUrl = productUrl;
        this.firstImage = firstImage;
        this.secondImage = secondImage;
        this.title = title;
        this.popularity = popularity;
        this.description = description;
        this.weight = weight;
        this.quantity = quantity;
        this.priceUs = priceUs;
        this.priceEg = priceEg;
        this.dimensions = dimensions;
        this.expiryDate = expiryDate;
        this.brand = brand;
        this.modifiedAt = modifiedAt;
        this.categories = category;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", productUrl='" + productUrl + '\'' +
                ", firstImage='" + firstImage + '\'' +
                ", secondImage='" + secondImage + '\'' +
                ", title='" + title + '\'' +
                ", popularity=" + popularity +
                ", description='" + description + '\'' +
                ", weight='" + weight + '\'' +
                ", quantity='" + quantity + '\'' +
                ", priceUs=" + priceUs +
                ", priceEg=" + priceEg +
                ", dimensions='" + dimensions + '\'' +
                ", expiryDate='" + expiryDate + '\'' +
                ", brand=" + brand +
                ", modifiedAt=" + modifiedAt +
                ", category=" + categories +
                '}';
    }
}
