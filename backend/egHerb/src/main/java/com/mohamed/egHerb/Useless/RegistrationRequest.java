package com.mohamed.egHerb.registration;


import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationRequest {
    private  String firstName;
    private  String lastName;
    private  String password;
    private  String email;

}
