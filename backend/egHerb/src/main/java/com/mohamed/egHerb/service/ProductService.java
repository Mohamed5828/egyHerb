package com.mohamed.egHerb.service;

import com.mohamed.egHerb.dao.CategoryRepository;
import com.mohamed.egHerb.dao.ProductRepository;
import com.mohamed.egHerb.entity.Brand;
import com.mohamed.egHerb.entity.Category;
import com.mohamed.egHerb.entity.Product;
import com.mohamed.egHerb.entity.ProductRequest;
import com.mohamed.egHerb.errorExceptions.ProductNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private ProductRepository productRepository;
    private CategoryService categoryService;
    @Autowired
    public ProductService(ProductRepository productRepository , CategoryService categoryService){
        this.productRepository = productRepository;
        this.categoryService = categoryService;
    }

    public List <Product> getProductsByCategoryName(String categoryName){
        List<Product> products = new ArrayList<>();
        Category category = categoryService.getCategory(categoryName);
        if (category != null) {
            products = productRepository.findByCategoriesId(category.getId());
        }
        return products;
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
            Set<Category> categories = categoryService.getOrCreateCategories(productRequest.getCategories());
            List<Integer> categoriesId = categories.stream().map(Category::getId).collect(Collectors.toList());
            System.out.println("the categories Ids are" + categoriesId);
            existingProduct.setCategories(categories);

            productRepository.save(existingProduct);

        }else{
            throw new ProductNotFoundException("Product not found with title: " + productRequest.getTitle());
        }
    }
    public List<Product> getProductByBrand(int brandId){
        return productRepository.findByBrandId(brandId);
    }

    public List<Product> getProductsByBrandAndCategory(String brand, String category) {
        if (brand != null && category != null) {
            List<Product> byCategory = getProductsByCategoryName(category);
            List<Product> result = new ArrayList<>();

            for (Product product : byCategory) {
                if (product.getBrand().equals(brand)) {
                    result.add(product);
                }
            }
            return result;
        } else {
            return null;
        }

    }
}
