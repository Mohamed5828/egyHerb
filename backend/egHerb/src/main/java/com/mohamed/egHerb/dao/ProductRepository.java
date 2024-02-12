package com.mohamed.egHerb.dao;

import com.mohamed.egHerb.entity.Brand;
import com.mohamed.egHerb.entity.Category;
import com.mohamed.egHerb.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository <Product , Integer>{

    List<Product> findAllByIdIn(List<Integer> ids);
    List<Product> findByCategoriesCategoryName(String categoryName);


    Optional<Product> findByTitle(String productTitle);
    //cause error no field in product with categoryName
//    List<Product> getProductByCategoryName(Category categoryName);

    List<Product> findByBrandId(int brandId);

    List<Product> findByCategoriesId(int id);
}

