import React,{Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}));
	}
	onSearchChange=(event)=>{//use arrows when making methods in React
			this.setState({searchfield:event.target.value})//event.target.value gives event of the search job
	}
	render(){
		const {robots,searchfield}=this.state;//destructuring one time declaration
		const filteredRobots=robots.filter(robot=>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase())
			})
		if(!robots.length){
			return <h1 className='tc'>Loading</h1>
		}
		else
		{
	return(
		<div className='tc'>
			<h1 className='f1'>Robofriends</h1>	
			<Searchbox searchChange={this.onSearchChange}/>
			<Scroll>
			<CardList robots={filteredRobots}/>
			</Scroll>
		</div>
		
	);
}
}
}
export default App;