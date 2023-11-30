package com.mohamed.egHerb.product;

import com.mohamed.egHerb.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository <Product , Integer>{

    Optional<Product> findByTitle(String productTitle);
}

