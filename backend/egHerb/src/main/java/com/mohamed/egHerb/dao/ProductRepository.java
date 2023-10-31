package com.mohamed.egHerb.dao;

import com.mohamed.egHerb.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository <Product , Integer>{

}

