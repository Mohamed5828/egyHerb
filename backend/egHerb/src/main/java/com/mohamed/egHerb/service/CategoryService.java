package com.mohamed.egHerb.service;

import com.mohamed.egHerb.dao.CategoryRepository;
import com.mohamed.egHerb.dao.ProductRepository;
import com.mohamed.egHerb.entity.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class CategoryService {
    private CategoryRepository categoryRepository;
    private ProductRepository productRepository;
    @Autowired
    CategoryService(CategoryRepository categoryRepository,  ProductRepository productRepository) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;

    }
    public Set<Category> getOrCreateCategories(List<String> categoryNames) {
        Set<Category> existingCategories = categoryRepository.findByCategoryNameIn(categoryNames);
        for(String categoryName: categoryNames){
            boolean exists = existingCategories.stream().anyMatch(category -> category.getCategoryName().equals(categoryName));
            if(!exists){
                Category newCategory = new Category(categoryName);
                existingCategories.add(categoryRepository.save(newCategory));

            }
        }
        return existingCategories;
    }
    public Category getCategory(String categoryName) {
        return categoryRepository.findCategoryByCategoryName(categoryName);
    }
}
