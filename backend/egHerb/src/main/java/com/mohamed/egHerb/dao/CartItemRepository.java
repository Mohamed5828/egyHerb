package com.mohamed.egHerb.dao;

import com.mohamed.egHerb.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Integer> {

}
