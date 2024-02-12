package com.mohamed.egHerb.dao;

import com.mohamed.egHerb.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

    Set<Category> findByCategoryNameIn(List<String> categoryNames);
    Category findCategoryByCategoryName(String categoryName);
}
