package org.flower.app.controller;

/**
 * Flower Class
 * @author Jithendra Katkam
 *
 */
public class Flower {

    private long id;
    private String name;
    private String price;
    //other atributes
    public Flower(long id,String name, String price) {
        this.name = name;
        this.price = price;
        this.id = id;
    }
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}

   
}
