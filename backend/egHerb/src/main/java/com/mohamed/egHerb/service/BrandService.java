package com.mohamed.egHerb.brand;

import com.mohamed.egHerb.dao.BrandRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrandService {
    private BrandRepository brandRepository;
    public List<String> getAllBrands(){
        return brandRepository.getAllBrandNames();
    } public List<String> getAllBrandsUrls(){
        return brandRepository.getAllBrandUrls();
    }
}
