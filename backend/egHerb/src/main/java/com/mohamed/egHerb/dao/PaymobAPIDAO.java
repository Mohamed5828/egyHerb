//package com.mohamed.egHerb.dao;
//
//import com.mohamed.egHerb.dto.AuthTokenDTO;
//
//import java.io.IOException;
//import java.net.HttpURLConnection;
//import java.net.URL;
//import java.io.OutputStream;
//import java.util.Scanner;
//
//public class PaymobAPIDAO {
//    private static final String AUTH_URL = "https://accept.paymob.com/api/auth/tokens";
//    private static final String ORDER_URL = "https://accept.paymob.com/api/ecommerce/orders";
//    private static final String PAYMENT_KEY_URL = "https://accept.paymob.com/api/acceptance/payment_keys";
//
//    public String getAuthToken(AuthTokenDTO authData) {
//        try {
//            URL url = new URL(AUTH_URL);
//            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
//
//            connection.setRequestMethod("POST");
//            connection.setRequestProperty("Content-Type", "application/json");
//            connection.setDoOutput(true);
//
//            OutputStream os = connection.getOutputStream();
//            os.write(authDataToJSON(authData).getBytes());
//            os.flush();
//            os.close();
//
//            int responseCode = connection.getResponseCode();
//
//            if (responseCode == HttpURLConnection.HTTP_OK) {
//                Scanner scanner = new Scanner(connection.getInputStream());
//                StringBuilder response = new StringBuilder();
//
//                while (scanner.hasNextLine()) {
//                    response.append(scanner.nextLine());
//                }
//
//                scanner.close();
//                return response.toString();
//            } else {
//                // Handle error response
//                // You might want to throw an exception or handle it accordingly
//                return null;
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//            // Handle exception
//            return null;
//        }
//    }
//
//    public int createOrder(OrderDTO orderData) {
//        try {
//            URL url = new URL(ORDER_URL);
//            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
//
//            connection.setRequestMethod("POST");
//            connection.setRequestProperty("Content-Type", "application/json");
//            connection.setDoOutput(true);
//
//            OutputStream os = connection.getOutputStream();
//            os.write(orderDataToJSON(orderData).getBytes());
//            os.flush();
//            os.close();
//
//            int responseCode = connection.getResponseCode();
//
//            if (responseCode == HttpURLConnection.HTTP_OK) {
//                Scanner scanner = new Scanner(connection.getInputStream());
//                StringBuilder response = new StringBuilder();
//
//                while (scanner.hasNextLine()) {
//                    response.append(scanner.nextLine());
//                }
//
//                scanner.close();
//                // Extract and return the order ID
//                return extractOrderId(response.toString());
//            } else {
//                // Handle error response
//                // You might want to throw an exception or handle it accordingly
//                return -1;
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//            // Handle exception
//            return -1;
//        }
//    }
//
//    public String generatePaymentKey(PaymentInfoDTO paymentInfo) {
//        try {
//            URL url = new URL(PAYMENT_KEY_URL);
//            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
//
//            connection.setRequestMethod("POST");
//            connection.setRequestProperty("Content-Type", "application/json");
//            connection.setDoOutput(true);
//
//            OutputStream os = connection.getOutputStream();
//            os.write(paymentInfoToJSON(paymentInfo).getBytes());
//            os.flush();
//            os.close();
//
//            int responseCode = connection.getResponseCode();
//
//            if (responseCode == HttpURLConnection.HTTP_OK) {
//                Scanner scanner = new Scanner(connection.getInputStream());
//                StringBuilder response = new StringBuilder();
//
//                while (scanner.hasNextLine()) {
//                    response.append(scanner.nextLine());
//                }
//
//                scanner.close();
//                // Extract and return the payment key
//                return extractPaymentKey(response.toString());
//            } else {
//                // Handle error response
//                // You might want to throw an exception or handle it accordingly
//                return null;
//            }
//        } catch (IOException e) {
//            e.printStackTrace();
//            // Handle exception
//            return null;
//        }
//    }
//
//    private String authDataToJSON(AuthTokenDTO authData) {
//        // Implement logic to convert AuthTokenDTO to JSON string
//        // You can use a JSON library like Jackson or Gson
//        // Example with Gson:
//        // return new Gson().toJson(authData);
//        return null;
//    }
//
//    private String orderDataToJSON(OrderDTO orderData) {
//        // Implement logic to convert OrderDTO to JSON string
//        // You can use a JSON library like Jackson or Gson
//        // Example with Gson:
//        // return new Gson().toJson(orderData);
//        return null;
//    }
//
//    private String paymentInfoToJSON(PaymentInfoDTO paymentInfo) {
//        // Implement logic to convert PaymentInfoDTO to JSON string
//        // You can use a JSON library like Jackson or Gson
//        // Example with Gson:
//        // return new Gson().toJson(paymentInfo);
//        return null;
//    }
//
//    private int extractOrderId(String response) {
//        // Implement logic to extract order ID from the response JSON string
//        // You can use a JSON library like Jackson or Gson
//        // Example with Gson:
//        // JsonObject jsonObject = new Gson().fromJson(response, JsonObject.class);
//        // return jsonObject.get("id").getAsInt();
//        return -1;
//    }
//
//    private String extractPaymentKey(String response) {
//        // Implement logic to extract payment key from the response JSON string
//        // You can use a JSON library like Jackson or Gson
//        // Example with Gson:
//        // JsonObject jsonObject = new Gson().fromJson(response, JsonObject.class);
//        // return jsonObject.get("token").getAsString();
//        return null;
//    }
//}
