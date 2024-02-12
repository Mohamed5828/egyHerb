package com.mohamed.egHerb.controllers;

import com.mohamed.egHerb.dao.BrandRepository;
import com.mohamed.egHerb.entity.Product;
import com.mohamed.egHerb.service.BrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/brand")
public class BrandRestController {
    private final BrandRepository brandRepository;
    private final BrandService brandService;

    @Autowired
    BrandRestController(BrandService brandService , BrandRepository brandRepository){
        this.brandRepository = brandRepository;
        this.brandService = brandService;
    }
    @GetMapping("/get/{name}")
    public int brandIdByName(@PathVariable String name){
        return brandRepository.findIdByName(name).getId();
    }
    @GetMapping("/all")
    public List<String> getAllBrandNames() {
        return brandRepository.getAllBrandNames();
    }
    @GetMapping("/urls")
    public List<String> getAllBrandUrls() {
        return brandRepository.getAllBrandUrls();
    }
    @GetMapping("/{name}")
    public List<Product>getProductsByBrandName(@PathVariable String name){
        return brandService.getProductByBrand(name);
    }
}
