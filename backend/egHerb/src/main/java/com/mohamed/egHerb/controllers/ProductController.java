package com.mohamed.egHerb.controllers;

import com.mohamed.egHerb.entity.Product;
import com.mohamed.egHerb.entity.ProductRequest;
import com.mohamed.egHerb.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private final ProductService productService;
    ProductController(ProductService productService){
        this.productService = productService;
    }
    //this is for the main product scrapping post
    @PostMapping("/updateOrSave")
    public ResponseEntity<String> updateOrSaveProduct(@RequestBody Product updatedProduct){
        productService.updateProductPrice(updatedProduct);
        return ResponseEntity.ok("Product Updated or Saved Successfully");
    }

    //this is for the scrapping cluster post which then separated into both category and product

    @PostMapping("/addInfo")
    public ResponseEntity<String> addProduct(@RequestBody ProductRequest productRequest) {
        try {
            productService.addProduct(productRequest);
            return ResponseEntity.ok("product added");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to add product: " + e.getMessage());
        }

    }

}
