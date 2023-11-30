package com.mohamed.egHerb.service;

//import com.mohamed.egHerb.Useless.RegistrationRequest;
import com.mohamed.egHerb.dto.RegisterRequest;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    public String register(RegisterRequest request) {
        return "Works";
    }
}
