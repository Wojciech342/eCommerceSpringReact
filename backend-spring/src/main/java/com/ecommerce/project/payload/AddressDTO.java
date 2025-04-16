package com.ecommerce.project.payload;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {
    private Long addressId;
    private String street;
    private String city;
    private String state;
    private String country;
    private String pincode;
}