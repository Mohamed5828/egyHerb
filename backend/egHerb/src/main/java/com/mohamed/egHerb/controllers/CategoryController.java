package com.mohamed.egHerb.controllers;

import com.mohamed.egHerb.entity.Product;
import com.mohamed.egHerb.service.CategoryService;
import com.mohamed.egHerb.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {
    CategoryService categoryService;
    ProductService productService;

    @Autowired
    CategoryController(CategoryService categoryService , ProductService productService){
        this.categoryService = categoryService;
        this.productService = productService;
    }

    @GetMapping("/{categoryName}")
    public List<Product> productsByCategoryName (@PathVariable String categoryName) {
        return productService.getProductsByCategoryName(categoryName);
    }
}
