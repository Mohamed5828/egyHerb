package com.mohamed.egHerb.controllers;

import com.mohamed.egHerb.appUser.AppUserRole;
import com.mohamed.egHerb.auth.AuthenticationRequest;
import com.mohamed.egHerb.auth.AuthenticationResponse;
import com.mohamed.egHerb.auth.AuthenticationService;
import com.mohamed.egHerb.auth.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    @PostMapping("/register")
    public ResponseEntity <AuthenticationResponse> register(
            @RequestBody RegisterRequest request
    ){
        AppUserRole userRole = request.getAppUserRole();
        if (userRole == null) {
            // Set a default role of USER if getAppUserRole() returns null
            userRole = AppUserRole.USER;
        }
        return ResponseEntity.ok(service.register(request ,userRole));
    }

    @PostMapping("/authenticate")
    public ResponseEntity <AuthenticationResponse> register(
            @RequestBody AuthenticationRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }
}
