import React, { Component } from "react";
import axios from "axios";
import "../../assets/style.scss";

const Category_baseURL = "https://dummyjson.com/products/categories";

interface CategoryState {
	categories: [];
  handleCategory: [];
}

export default class Category extends Component<{}, CategoryState> {
	state: CategoryState = {
		categories: [],
    handleCategory: [],
	};

	async componentDidMount() {
		const response = await axios(Category_baseURL);
		const categories = await response.data;
		console.log("categories =", categories);

		this.setState({ categories });
	}

	render() {

		const { categories } = this.state;


		return (
			<div className="col">
				<input type="text" placeholder="Search" />
				<h3>Category</h3>
        <ul>
          <li><li>All</li></li>
        </ul>
				<div className="categories">
					{categories.map((category) => {
						return (
							 <ul key={category}>
								<li>{category}</li>
							</ul>
						);
					})}
				</div>
			</div>
		);
	}
}
