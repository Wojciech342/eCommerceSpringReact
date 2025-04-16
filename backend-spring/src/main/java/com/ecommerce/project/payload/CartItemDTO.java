package com.ecommerce.project.payload;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CartItemDTO {
    private Long productId;
    private Integer quantity;
}