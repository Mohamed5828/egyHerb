package com.mohamed.egHerb.dao;

import com.mohamed.egHerb.entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository<Brand, Integer> {
    Brand findIdByName(String name);
}


