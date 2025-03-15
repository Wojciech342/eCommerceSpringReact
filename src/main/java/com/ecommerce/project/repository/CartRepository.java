package com.ecommerce.project.repository;

import com.ecommerce.project.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;


public interface CartRepository extends JpaRepository<Cart, Long> {
    @Query("SELECT c FROM Cart c where c.user.email = :email")
    Cart findCartByEmail(String email);

    @Query("SELECT c FROM Cart c where c.user.email = :emailId AND c.cartId = :cartId")
    Cart findCartByEmailAndCartId(String emailId, Long cartId);

    @Query("SELECT c FROM Cart c JOIN FETCH c.cartItems ci JOIN FETCH ci.product p where p.productId = :productId ")
    List<Cart> findCartsByProductId(Long productId);
}
