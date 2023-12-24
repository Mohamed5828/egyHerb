package com.mohamed.egHerb.controllers;

import com.mohamed.egHerb.dao.CartItemRepository;
import com.mohamed.egHerb.entity.CartItem;
import com.mohamed.egHerb.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartItemController {

    @Autowired
    CartItemService cartItemService;
    public CartItemController( CartItemService cartItemService){
        this.cartItemService = cartItemService;
    }
    @GetMapping("/{userid}")
    public List<CartItem> getCart(@PathVariable int userId){
        return cartItemService.getCart(userId);
    }
    @PostMapping("/add")
    public void addToCart(@RequestBody CartItem cartItem){
        cartItemService.addToCart(cartItem);
    }

    @PostMapping("/delete")
    public void deleteFromCart(@RequestBody CartItem cartItem){
        cartItemService.deleteFromCart(cartItem);
    }


}
