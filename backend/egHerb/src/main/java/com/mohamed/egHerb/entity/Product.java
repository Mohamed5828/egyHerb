package com.mohamed.egHerb.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "products")
public class Product extends AbstractEntityModel{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "product_url")
    private String productUrl;

    @Column(name = "suggested_use", columnDefinition = "TEXT")
    private String suggestedUse;

    @Column(name = "other_ingredients", columnDefinition = "TEXT")
    private String otherIngredients;

    @Column(name = "categories_description", columnDefinition = "TEXT")
    private String categoriesDescription;

    @Column(name = "first_image")
    private String firstImage;

    @Column(name = "second_image")
    private String secondImage;

    @Column(name = "title")
    private String title;

    @Column(name = "popularity")
    private Integer popularity;

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

    @Column(name = "rating")
    private Integer rating;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "product_category",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    @JsonManagedReference
    private Set<Category> categories = new HashSet<>();

    public Product() {
    }

    public Product(String productUrl,int rating, String suggestedUse, String otherIngredients, String categoriesDescription, String firstImage, String secondImage, String title, int popularity, String description, String weight, String quantity, BigDecimal priceUs, BigDecimal priceEg, String dimensions, String expiryDate, Brand brand, Set<Category> categories) {
        this.productUrl = productUrl;
        this.suggestedUse = suggestedUse;
        this.otherIngredients = otherIngredients;
        this.categoriesDescription = categoriesDescription;
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
        this.rating = rating;
        this.expiryDate = expiryDate;
        this.brand = brand;
        this.categories = categories;
    }

    public Product(int productId) {
        id = productId;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", productUrl='" + productUrl + '\'' +
                ", rating='" + rating + '\'' +
                ", suggestedUse='" + suggestedUse + '\'' +
                ", otherIngredients='" + otherIngredients + '\'' +
                ", categoriesDescription='" + categoriesDescription + '\'' +
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
                ", categories=" + categories +
                '}';
    }
}
