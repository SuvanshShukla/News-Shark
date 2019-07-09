import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import Carouselcomp from './Components/Carousel/Carousel';
import axios from 'axios';
import Tabcomp from './Components/Tabs/Tabs';
import Cardcomp from './Components/Cards/Cards';




class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
    this.state.newsFeed=[];
    this.state.countryNews=[];
    this.state.sportsNews=[];
    this.state.entNews=[];

    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=ca99e124a90147ac8a0a516911f97495").then(res=>{
      this.setState({
        newsFeed: res.data.articles
      })
      console.log(this.state.newsFeed);     
    })
  }

  componentDidMount(){
    this.getCountryNews();
    this.getSportsNews();
    this.getEntNews();
  }

  getCountryNews(key){
    console.log(key);
   
    let url =  "https://newsapi.org/v2/top-headlines?country="+key+"&apiKey=ca99e124a90147ac8a0a516911f97495"
    axios.get(url).then(res=>{
      console.log(res.data.articles);
      this.setState({
        countryNews: res.data.articles
      })
    })
  }

  getSportsNews(){
    let url = "https://newsapi.org/v2/everything?q=sports&apiKey=ca99e124a90147ac8a0a516911f97495"
    axios.get(url).then(res=>{
      console.log(res.data.articles);
      this.setState({
        sportsNews: res.data.articles
      })
    })
  }

  getEntNews(){
    let url = "https://newsapi.org/v2/everything?q=entertainment&apiKey=ca99e124a90147ac8a0a516911f97495"
    axios.get(url).then(res=>{
      this.setState({
        entNews: res.data.articles
      })
    })
  }

 render() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <div><Carouselcomp newsFeed={this.state.newsFeed}></Carouselcomp></div>
     <div><Tabcomp getCountryNews={this.getCountryNews.bind(this)}  countryNews={this.state.countryNews}></Tabcomp></div>
     <hr />
     <h2>Sports News</h2>
     <div><Cardcomp sportsFeed={this.state.sportsNews}></Cardcomp></div>
     <hr />
     <h2>Entertainment News</h2>
     {/* <div><Cardcomp entFeed={this.state.entNews}></Cardcomp></div> */}
    </div>
  );
 }
}







export default App;
