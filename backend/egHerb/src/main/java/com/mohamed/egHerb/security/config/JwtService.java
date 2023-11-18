package com.mohamed.egHerb.security.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.*;
import java.util.function.Function;

@Service
public class JwtService {

    private static final String SECRET_KEY = "RpR2qwuAcwTp4VcCwElFXH37YNsVdO6IoWC0lqJGGwZ1VqG2y8muv2OWoVwy2heN";

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String generateToken(UserDetails userDetails) {
        try {
            return generateToken(new HashMap<>(), userDetails);
        } catch (Exception e) {
            throw new RuntimeException("Error generating token: " + e.getMessage(), e);
        }
    }

    public String generateToken(Map<String, Object> extraClaims, UserDetails userDetails) {
        try {
            long expirationMillis = 1000 * 60 * 60; // One hour (adjust as needed)
            return Jwts.builder()
                    .setClaims(extraClaims)
                    .setSubject(userDetails.getUsername())
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + expirationMillis))
                    .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                    .compact();
        } catch (Exception e) {
            throw new RuntimeException("Error generating token: " + e.getMessage(), e);
        }
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        try {
            final String username = extractUsername(token);
            return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
        } catch (ExpiredJwtException e) {
            throw new RuntimeException("Expired token: " + e.getMessage(), e);
        } catch (Exception e) {
            throw new RuntimeException("Error validating token: " + e.getMessage(), e);
        }
    }

    private boolean isTokenExpired(String token) {
        try {
            return extractExpiration(token).before(new Date());
        } catch (Exception e) {
            throw new RuntimeException("Error checking token expiration: " + e.getMessage(), e);
        }
    }

    private Date extractExpiration(String token) {
        try {
            return extractClaim(token, Claims::getExpiration);
        } catch (Exception e) {
            throw new RuntimeException("Error extracting expiration from token: " + e.getMessage(), e);
        }
    }

    private Claims extractAllClaims(String token) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(getSignInKey())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
        } catch (Exception e) {
            throw new RuntimeException("Error extracting claims from token: " + e.getMessage(), e);
        }
    }

    private Key getSignInKey() {
        try {
            byte[] keyBytes = Base64.getDecoder().decode(SECRET_KEY);
            return Keys.hmacShaKeyFor(keyBytes);
        } catch (Exception e) {
            throw new RuntimeException("Error getting signing key: " + e.getMessage(), e);
        }
    }
}
