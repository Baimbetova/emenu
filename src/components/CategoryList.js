import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import FoodList from './FoodList';
import '../css/categoryList.css';

class CategoryList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: null
		};

		this.showFoods = this.showFoods.bind(this);
		this.createOrder = this.createOrder.bind(this);
	}

	showFoods(category) {
		this.setState({show: category});
	}

	createOrder(id,foodName, price) {
		this.props.handleOrder(id, foodName, price);
	}

	render() {
		const {categories} = this.props;

		return(
			<div className="content">
				<div className="categoryList">
					{categories.map((category) => (
						<CategoryItem
							key={category.id}
							img={category.image}
							categoryClick={()=> this.showFoods(category)}
							/>));}
				</div>
				<div className="service">
					{this.state.show &&
						<FoodList
							foods = {this.state.show.foods}
							createOrder = {(id, foodName, price) => this.createOrder(id, foodName, price)}
							/>}
				</div>
			</div>
		);
	}
}

export default CategoryList;
