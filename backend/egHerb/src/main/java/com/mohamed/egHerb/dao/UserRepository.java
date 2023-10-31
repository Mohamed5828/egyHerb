package com.mohamed.egHerb.dao;

import com.mohamed.egHerb.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

}
