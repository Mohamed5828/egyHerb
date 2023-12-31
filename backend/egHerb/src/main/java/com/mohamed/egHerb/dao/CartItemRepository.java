package com.mohamed.egHerb.dao;

import com.mohamed.egHerb.entity.CartItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartItemRepository extends JpaRepository<CartItem, String> {
    List<CartItem> findByUserId(int userId);
}
