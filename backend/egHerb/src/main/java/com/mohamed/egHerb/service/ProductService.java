package com.mohamed.egHerb.service;

import com.mohamed.egHerb.dao.CategoryRepository;
import com.mohamed.egHerb.dao.ProductRepository;
import com.mohamed.egHerb.entity.Category;
import com.mohamed.egHerb.entity.Product;
import com.mohamed.egHerb.entity.ProductRequest;
import com.mohamed.egHerb.errorExceptions.ProductNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private ProductRepository productRepository;
    private CategoryRepository categoryRepository;
    @Autowired
    public ProductService(ProductRepository productRepository , CategoryRepository categoryRepository){
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    public void updateProductPrice(Product updatedProduct){
        Optional<Product> optionalProduct = productRepository.findByTitle(updatedProduct.getTitle());
        if(optionalProduct.isPresent()){
            Product existingProduct = optionalProduct.get();
            existingProduct.setPriceUs(updatedProduct.getPriceUs());
            productRepository.save(existingProduct);
        }else{
            productRepository.save(updatedProduct);
        }
    }

    public void addProduct(ProductRequest productRequest) {
        Optional<Product> existingProductOptional = productRepository.findByTitle(productRequest.getTitle());
        if (existingProductOptional.isPresent()) {
            Product existingProduct = existingProductOptional.get();

            existingProduct.setDescription(String.valueOf(productRequest.getDescription()));
            existingProduct.setOtherIngredients(String.valueOf(productRequest.getOtherIngredData()));
            existingProduct.setSuggestedUse(String.valueOf(productRequest.getSuggestedUseData()));
            existingProduct.setSecondImage(String.valueOf(productRequest.getSecondImage()));
            existingProduct.setCategoriesDescription(String.valueOf(productRequest.getCategoriesDescription()));

            List<Category> categories = getOrCreateCategories(productRequest.getCategories());
            List<Integer> categoriesId = categories.stream().map(Category::getId).collect(Collectors.toList());
            System.out.println("the categories Ids are" + categoriesId);
            existingProduct.setCategories(categories);

            productRepository.save(existingProduct);

        }else{
            throw new ProductNotFoundException("Product not found with title: " + productRequest.getTitle());
        }
    }

    private List<Category> getOrCreateCategories(List<String> categoryNames) {
        List<Category> existingCategories = categoryRepository.findByCategoryNameIn(categoryNames);
        for(String categoryName: categoryNames){
            boolean exists = existingCategories.stream().anyMatch(category -> category.getCategoryName().equals(categoryName));
            if(!exists){
                Category newCategory = new Category(categoryName);
                existingCategories.add(categoryRepository.save(newCategory));

            }
        }
        return existingCategories;
    }
}
