import React, { Component } from 'react';
import '../css/categoryItem.css';

class CategoryItem extends Component {
	render() {
		return(
			<div className="categoryImg" onClick={this.props.categoryClick}>
				<img src = {this.props.img}/>
			</div>
		);
	}
}

export default CategoryItem;
