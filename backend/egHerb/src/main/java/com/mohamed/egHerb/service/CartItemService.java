package com.mohamed.egHerb.service;

import com.mohamed.egHerb.dao.CartItemRepository;
import com.mohamed.egHerb.entity.CartItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;

    public CartItemService(CartItemRepository cartItemRepository){
        this.cartItemRepository = cartItemRepository;
    }

    public List<CartItem> getCart(int userId) {
        return cartItemRepository.findByUserId(userId);
    }

    public void addToCart(CartItem cartItem) {
        cartItemRepository.save(cartItem);
    }

    public void deleteFromCart(CartItem cartItem) {
        cartItemRepository.delete(cartItem);
    }
}
