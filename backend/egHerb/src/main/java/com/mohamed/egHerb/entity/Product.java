package com.mohamed.egHerb.entity;

import jakarta.persistence.*;
import lombok.Getter;
import java.sql.Timestamp;

@Getter
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

    @Column(name = "price_us" )
    private int  priceUs;

    @Column(name = "price_eg" )
    private int  priceEg;

    @Column(name = "dimensions")
    private String dimensions;

    @Column(name = "expiry_date")
    private String expiryDate;

    @Column(name = "category_id")
    private int categoryId;

    @Column(name = "modified_at")
    private Timestamp modifiedAt;

    public Product(){

    }

    public Product(String productUrl,String firstImage, String secondImage, String title, int popularity, String description, String weight, String quantity, int  priceUs, int  priceEg, String dimensions, String expiryDate, int categoryId, Timestamp modifiedAt) {
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
        this.categoryId = categoryId;
        this.modifiedAt = modifiedAt;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setProductUrl(String productUrl) {
        this.productUrl = productUrl;
    }

    public void setFirstImage(String firstImage) {
        this.firstImage = firstImage;
    }

    public void setSecondImage(String secondImage) {
        this.secondImage = secondImage;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPopularity(int popularity) {
        this.popularity = popularity;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public void setPriceUs(int  priceUs) {
        this.priceUs = priceUs;
    }

    public void setPriceEg(int priceEg) {
        this.priceEg = priceEg;
    }

    public void setDimensions(String dimensions) {
        this.dimensions = dimensions;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public void setModifiedAt(Timestamp modifiedAt) {
        this.modifiedAt = modifiedAt;
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
                ", categoryId=" + categoryId +
                ", modifiedAt=" + modifiedAt +
                '}';
    }
}

