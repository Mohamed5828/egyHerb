package com.mohamed.egHerb.entity;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.sql.Timestamp;

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

    @Column(name = "price_us" ,precision = 10, scale = 2)
    private BigDecimal  priceUs;

    @Column(name = "price_eg" , precision = 10, scale = 2)
    private BigDecimal  priceEg;

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

    public Product(String productUrl,String firstImage, String secondImage, String title, int popularity, String description, String weight, String quantity, BigDecimal  priceUs, BigDecimal  priceEg, String dimensions, String expiryDate, int categoryId, Timestamp modifiedAt) {
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

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductUrl() {
        return productUrl;
    }

    public void setProductUrl(String productUrl) {
        this.productUrl = productUrl;
    }

    public String getFirstImage() {
        return firstImage;
    }

    public void setFirstImage(String firstImage) {
        this.firstImage = firstImage;
    }

    public String getSecondImage() {
        return secondImage;
    }

    public void setSecondImage(String secondImage) {
        this.secondImage = secondImage;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPopularity() {
        return popularity;
    }

    public void setPopularity(int popularity) {
        this.popularity = popularity;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getQuantity() {
        return quantity;
    }

    public void setQuantity(String quantity) {
        this.quantity = quantity;
    }

    public BigDecimal  getPriceUs() {
        return priceUs;
    }

    public void setPriceUs(BigDecimal  priceUs) {
        this.priceUs = priceUs;
    }

    public BigDecimal  getPriceEg() {
        return priceEg;
    }

    public void setPriceEg(BigDecimal priceEg) {
        this.priceEg = priceEg;
    }

    public String getDimensions() {
        return dimensions;
    }

    public void setDimensions(String dimensions) {
        this.dimensions = dimensions;
    }

    public String getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(String expiryDate) {
        this.expiryDate = expiryDate;
    }

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public Timestamp getModifiedAt() {
        return modifiedAt;
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

