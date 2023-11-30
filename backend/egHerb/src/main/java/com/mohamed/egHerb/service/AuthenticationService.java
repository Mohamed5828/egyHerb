package com.mohamed.egHerb.service;

import com.mohamed.egHerb.dto.AuthenticationRequest;
import com.mohamed.egHerb.dto.AuthenticationResponse;
import com.mohamed.egHerb.dto.RegisterRequest;
import com.mohamed.egHerb.entity.AppUser;
import com.mohamed.egHerb.entity.AppUserRole;
import com.mohamed.egHerb.dao.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    public AuthenticationResponse register(RegisterRequest request , AppUserRole role) {
        if (repository.existsByEmail(request.getEmail())) {
            // Email already in use, throw an exception or return an appropriate response
            throw new RuntimeException("Email is already in use");
        }
        var user = AppUser.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .appUserRole(role)
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
    public AuthenticationResponse authenticate (AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = repository.findByEmail(request.getEmail())
                .orElseThrow();
        if (user.getAppUserRole() == AppUserRole.ADMIN) {
            // Additional logic for admin users, if needed
        }

        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
