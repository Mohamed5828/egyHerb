package com.mohamed.egHerb.controllers;

import com.mohamed.egHerb.dao.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/brand/getbrand")
public class BrandRestController {
    private final BrandRepository brandRepository;

    @Autowired
    public BrandRestController (BrandRepository theBrandRepository){
        brandRepository = theBrandRepository;
    }
    @GetMapping("/{name}")
    public int brandIdByName(@PathVariable String name){
        return brandRepository.findIdByName(name).getId();
    }
}
