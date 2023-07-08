import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { Category, Products } from "./components";
import "./assets/style.scss";

const baseURL = "https://dummyjson.com";

interface AppState {
	products: [];
	categories: string[];
	name: string;
}

export default class App extends React.Component<{}, AppState> {
  state: AppState = {
    products: [],
	  categories: [],
    name: "All",
  }


	render() {
		return (
			<div className="row">
				<Category />
				<Products />
			</div>
		);
	}
}
