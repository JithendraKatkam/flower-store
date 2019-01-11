package org.flower.app.controller;

import java.util.Collection;
import java.util.HashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Flower controller API to handle store requests. Uses HashMap to store and
 * retrieve the flower prices - No Service/DAO layers as is a simple
 * application and can be extended...
 * 
 * @author Jithendra Katkam *
 */
@RestController
public class FlowerController {

	private final HashMap<String, Flower> flowerStore = new HashMap<>();
	private final AtomicLong counter = new AtomicLong();

	@RequestMapping("/add")
	public Flower add(@RequestParam(value = "name", defaultValue = "No Flower") String name,
			@RequestParam(value = "price", defaultValue = "No Price") String price) {
		Flower flower = new Flower(counter.incrementAndGet(), name, price);
		flowerStore.put(name, flower);
		return flower;
	}

	@RequestMapping("/remove")
	public String remove(@RequestParam(value = "name", defaultValue = "No Flower") String name) {
		flowerStore.remove(name);
		return "Successfully removed";
	}

	@RequestMapping("/update")
	public String update(@RequestParam(value = "name", defaultValue = "No Flower") String name,
			@RequestParam(value = "price", defaultValue = "No Price") String price) {
		String msg = "";
		Flower flowerFound = flowerStore.get(name);
		if (flowerFound != null) {
			flowerFound.setPrice(price);
			flowerStore.put(name, flowerFound);
			msg = "Successfully updated";
		} else {
			msg = "No flower found";
		}
		return msg;
	}

	@RequestMapping("/list")
	public Collection<Flower> list() {
		return flowerStore.values();
	}

	@RequestMapping("/get")
	public Flower get(@RequestParam(value = "name", defaultValue = "No Flower") String name) {
		return flowerStore.get(name);
	}
}
