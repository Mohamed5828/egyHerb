package com.mohamed.egHerb.product;

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
    private ProductService productService;
    @PostMapping("/updateOrSave")
    public ResponseEntity<String> updateOrSaveProduct(@RequestBody Product updatedProduct){
        productService.updateProductPrice(updatedProduct);
        return ResponseEntity.ok("Product Updated or Saved Successfully");
    }
}
