import React,{Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import Scroll from '../components/Scroll';
import  {searchRobots} from '../reducers';
import {setSearchField} from '../actions'

const mapStateToProps=state=>{
	return{
		searchField:state.searchRobots.searchField 
	}
}

const mapDispatchToProps=(dispatch)=>{
	return{
	onSearchChange: (event)=>dispatch(setSearchField(event.target.value))
}
}
class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[]
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}));
	}
	//use arrows when making methods in React
			//event.target.value gives event of the search job
	
	render(){
		const {robots}=this.state;//destructuring one time declaration
		const {searchField,onSearchChange}=this.props;
		const filteredRobots=robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
			})
		if(!robots.length){
			return <h1 className='tc'>Loading</h1>
		}
		else
		{
	return(
		<div className='tc'>
			<h1 className='f1'>Robofriends</h1>	
			<Searchbox searchChange={onSearchChange}/>
			<Scroll>
			<ErrorBoundary>
				<CardList robots={filteredRobots}/>
			</ErrorBoundary>
			</Scroll>
		</div>
		);
}
}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);