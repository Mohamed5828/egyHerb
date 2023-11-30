package com.mohamed.egHerb.dao;

import com.mohamed.egHerb.entity.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface BrandRepository extends JpaRepository<Brand, Integer> {
    Brand findIdByName(String name);

    @Query("SELECT b.name FROM Brand b")
    List<String> getAllBrandNames();
    @Query("SELECT b.brandUrl FROM Brand b")
    List<String> getAllBrandUrls();
}


