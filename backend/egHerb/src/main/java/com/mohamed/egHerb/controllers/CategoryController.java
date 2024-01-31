package com.mohamed.egHerb.controllers;

import com.mohamed.egHerb.entity.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @GetMapping("/{categoryName}")
    public List<Product> productsByCategoryName (@PathVariable String categoryName) {
        return
    }
}
