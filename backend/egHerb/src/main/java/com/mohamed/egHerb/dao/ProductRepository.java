package com.mohamed.egHerb.dao;

import com.mohamed.egHerb.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository <Product , Integer>{

    Optional<Product> findByTitle(String productTitle);
}

