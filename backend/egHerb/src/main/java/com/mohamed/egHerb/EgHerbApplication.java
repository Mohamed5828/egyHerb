package com.mohamed.egHerb;

import com.stripe.Stripe;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EgHerbApplication {

	@Value("${stripe.api.key}")
	private String StripeApiKey;
	@PostConstruct
	public void stripeSetup() {
		Stripe.apiKey = StripeApiKey;
	}

	public static void main(String[] args) {
		SpringApplication.run(EgHerbApplication.class, args);
	}

}
