package com.mohamed.egHerb.service;

import com.mohamed.egHerb.dao.UserAddressRepository;
import com.mohamed.egHerb.dao.UserRepository;
import com.mohamed.egHerb.entity.AppUser;
import com.mohamed.egHerb.entity.UserAddress;
import com.mohamed.egHerb.errorExceptions.ProductNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserAddressService {

    @Autowired
    private final UserAddressRepository userAddressRepository;
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private final JwtService jwtService;

    public  UserAddressService(UserAddressRepository userAddressRepository, UserRepository userRepository, JwtService jwtService){
        this.userRepository =userRepository;
        this.jwtService = jwtService;
        this.userAddressRepository = userAddressRepository;
    }
    public void saveUserAddress(UserAddress userAddress) {

        userAddressRepository.save(userAddress);
 }
    @Transactional
    public void addUserAddress(UserAddress userAddress) {
        // Extract user ID from the JWT
        int userId = jwtService.extractUserIdFromToken();

        Optional<AppUser> userOptional = userRepository.findById(userId);
        if (userOptional.isPresent()) {
            AppUser user = userOptional.get();

            Optional<UserAddress> existingUserAddressOptional = userAddressRepository.findByUserId(userId);
            if (existingUserAddressOptional.isPresent()) {
                UserAddress existingUserAddress = existingUserAddressOptional.get();
                existingUserAddress.setAddressLine1(userAddress.getAddressLine1());
                existingUserAddress.setCity(userAddress.getCity());
                existingUserAddress.setArea(userAddress.getArea());
                existingUserAddress.setMobile(userAddress.getMobile());
            } else {
                userAddress.setUser(user);
                userAddressRepository.save(userAddress);
            }
        } else {
            throw new ProductNotFoundException("User not found");
        }
    }


}
