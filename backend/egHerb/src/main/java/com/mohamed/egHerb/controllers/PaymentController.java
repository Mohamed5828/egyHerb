//package com.mohamed.egHerb.controllers;
//
//import com.mohamed.egHerb.dao.CartItemRepository;
//import com.mohamed.egHerb.dao.OrderDetailRepository;
//import com.mohamed.egHerb.dao.ProductRepository;
//import com.mohamed.egHerb.dto.CreatePayment;
//import com.mohamed.egHerb.dto.CreatePaymentResponse;
//import com.mohamed.egHerb.entity.CartItem;
//import com.mohamed.egHerb.entity.OrderDetail;
//import com.mohamed.egHerb.entity.Product;
//import com.mohamed.egHerb.errorExceptions.ProductNotFoundException;
//import com.mohamed.egHerb.service.JwtService;
//import com.stripe.exception.StripeException;
//import com.stripe.model.PaymentIntent;
//import com.stripe.param.PaymentIntentCreateParams;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//public class PaymentController {
//
//    @Autowired
//    private CartItemRepository cartItemRepository;
//    @Autowired
//    private OrderDetailRepository orderDetailRepository;
//
//    @Autowired
//    private ProductRepository productRepository;
//
//    @Autowired
//    private JwtService jwtService;
//    @PostMapping ("/create-payment-intent")
//
//    public CreatePaymentResponse createPaymentIntent(@RequestBody CreatePayment createPayment)
//            throws StripeException {
//        int userId = jwtService.extractUserIdFromToken();
//        // the following line cause error as there is no items there should be a rule that
//        //if cart is empty no access to payment.
////        int totalAmount = calculateOrderAmount(createPayment.getItems());
//        PaymentIntentCreateParams params =
//                PaymentIntentCreateParams.builder()
////                        .setAmount((long) totalAmount * 100L)
//                        .setAmount(15 * 100L)
//                        .setCurrency("usd")
//                        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is
//                        // optional because Stripe enables its functionality by default.
//
//                        .setAutomaticPaymentMethods(
//                                PaymentIntentCreateParams.AutomaticPaymentMethods
//                                        .builder()
//                                        .setEnabled(true)
//                                        .build()
//                        )
//                        .build();
//
//        // Create a PaymentIntent with the order amount and currency
//        PaymentIntent paymentIntent = PaymentIntent.create(params);
//        OrderDetail orderDetail = new OrderDetail();
//        orderDetail.setUserId(3);
//        orderDetail.setTotal(userId);
//        orderDetailRepository.save(orderDetail);
//
//        return new CreatePaymentResponse(paymentIntent.getClientSecret());
//
//    }
//
//    private int calculateOrderAmount(CartItem[] items) {
//        int totalAmount = 0;
//        for (CartItem item : items) {
//            int productId = item.getProductId();
//            Product product = productRepository.findById(productId)
//                    .orElseThrow(()->new ProductNotFoundException("Product Not Found"));
//                int productPrice = product.getPriceEg();
//                int itemSubtotal = productPrice * item.getQuantity();
//                totalAmount += itemSubtotal;
//        }
//        return totalAmount;
//    }
//
//
//}
//
