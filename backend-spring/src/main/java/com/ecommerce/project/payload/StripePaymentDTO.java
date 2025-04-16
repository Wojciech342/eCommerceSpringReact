package com.ecommerce.project.payload;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StripePaymentDTO {
    private Long amount;
    private String currency;
}