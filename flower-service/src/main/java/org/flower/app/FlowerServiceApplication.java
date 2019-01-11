package org.flower.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
/**
 * Flower store application
 * @author Jithendra Katkam
 *
 */

@SpringBootApplication
@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class})
public class FlowerServiceApplication {
	public static void main(String[] args) {
		SpringApplication.run(FlowerServiceApplication.class, args);
	}
}
