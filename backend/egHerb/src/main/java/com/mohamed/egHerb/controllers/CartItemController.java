package com.mohamed.egHerb.controllers;

import com.mohamed.egHerb.dao.CartItemRepository;
import com.mohamed.egHerb.service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cart")
public class CartItemController {
    @Autowired
    CartItemRepository cartItemRepository;
    @Autowired
    CartItemService cartItemService;
    public CartItemController(CartItemRepository cartItemRepository , CartItemService cartItemService){
        this.cartItemRepository = cartItemRepository;
        this.cartItemService = cartItemService;
    }
//    @GetMapping("/get")


}
