package com.mohamed.egHerb.service;

import com.mohamed.egHerb.dao.BrandRepository;
import com.mohamed.egHerb.dao.ProductRepository;
import com.mohamed.egHerb.entity.Brand;
import com.mohamed.egHerb.entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService {
    private BrandRepository brandRepository;
    private ProductRepository productRepository;
    BrandService(BrandRepository brandRepository , ProductRepository productRepository){
        this.brandRepository = brandRepository;
        this.productRepository = productRepository;
    }
    public List<String> getAllBrands(){
        return brandRepository.getAllBrandNames();
    }
    public List<String> getAllBrandsUrls(){
        return brandRepository.getAllBrandUrls();
    }
    public List<Product> getProductByBrand(String name){
        Brand currentBrand= brandRepository.getBrandByName(name);
        return productRepository.findByBrandId(currentBrand.getId());
    }
}
