import React, { Component } from "react";
import axios from "axios";

import "../../assets/style.scss";

const PRODUCTS_baseURL = "https://dummyjson.com/products";

interface ProductsState {
	products: [];
	productImages: [];
}

export default class Products extends Component<{}, ProductsState> {
	state: ProductsState = {
		products: [],
		productImages: [],
	};

	async componentDidMount() {
		const res = await axios(PRODUCTS_baseURL);
		const products = await res.data.products;
		console.log("products", products);

		this.setState({ products });
	}

	render() {
		const { products } = this.state;

		return (
			<div>
				<div className="products-navbar">
					<div className="lists">
						<button>::</button>
						<button>-</button>
					</div>
					<p>{products.length} products found</p>
					<div className="line"></div>
					<div className="sorts">
						<p>Sort By</p>
						<select name="" id="">
							<option value="">Price (Lowest)</option>
							<option value="">Price (Highest)</option>
							<option value="">Name (A - Z)</option>
							<option value="">Name (Z - A)</option>
						</select>
					</div>
				</div>

				<div className="products">
					{products.map((product) => (
						<div key={product["id"]} className="product">
							<img src={product["images"][0]} alt="" className="productImg" />
							<div className="price-bottom">
								<p className="title1">{product["title"]}</p>
								<p className="price1">{`$ ${product["price"]}`}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}
