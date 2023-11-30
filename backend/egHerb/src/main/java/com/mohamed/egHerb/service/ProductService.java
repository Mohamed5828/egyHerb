package com.mohamed.egHerb.product;

import com.mohamed.egHerb.dao.ProductRepository;
import com.mohamed.egHerb.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;
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
}
