package com.cognizant.jwtauthentication.controller;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.jwtauthentication.model.AuthenticationResponse;
import com.cognizant.jwtauthentication.security.JwtUtil;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate") //
    public AuthenticationResponse authenticate(
            @RequestHeader("Authorization") String authHeader) {

        String base64Credentials = authHeader.substring("Basic ".length());

        byte[] decodedBytes =
                Base64.getDecoder().decode(base64Credentials);

        String credentials =
                new String(decodedBytes, StandardCharsets.UTF_8);

        String username = credentials.split(":")[0];

        String token = JwtUtil.generateToken(username);

        return new AuthenticationResponse(token);
    }
}
