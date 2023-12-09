package com.mohamed.egHerb.dao;

import com.mohamed.egHerb.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

    List<Category> findByCategoryNameIn(List<String> categoryNames);
}
