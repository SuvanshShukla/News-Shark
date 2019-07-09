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
    this.state.sportsNews={
      articles:[],
      page:1
    };
    this.state.entNews={
      articles:[],
      page:1
    };
    this.state.techNews={
      articles:[],
      page:1
    };

    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=ca99e124a90147ac8a0a516911f97495").then(res=>{
      this.setState({
        newsFeed: res.data.articles
      })
      console.log(this.state.newsFeed);     
    })
  }

  componentDidMount(){
    this.getCountryNews('us');
    this.getSportsNews();
    this.getEntNews();
    this.getTechNews();
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
        sportsNews:{articles: res.data.articles,page:1}
      })
    })
  }

  getEntNews(){
    let url = "https://newsapi.org/v2/everything?q=entertainment&apiKey=ca99e124a90147ac8a0a516911f97495"
    axios.get(url).then(res=>{
      this.setState({
        entNews: {articles: res.data.articles, page:1}
      })
    })
  }

  getTechNews(){
    let url = "https://newsapi.org/v2/everything?q=tech&apiKey=ca99e124a90147ac8a0a516911f97495"
    axios.get(url).then(res=>{
      this.setState({
        techNews: {articles: res.data.articles, page:1}
      })
    })
  }


  pageChanged(p) {   
    let arr = this.state.sportsNews
    arr.page = p
    this.setState({
      sportsNews: arr
    })  
  }

 render() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <div><Carouselcomp newsFeed={this.state.newsFeed}></Carouselcomp></div>
     <div><Tabcomp getCountryNews={this.getCountryNews.bind(this)}  countryNews={this.state.countryNews}></Tabcomp></div>
     <hr />
     <h2>Tech News</h2>
     <div><Cardcomp tagNews={this.state.techNews} pageChanged={this.pageChanged.bind(this)}></Cardcomp></div>
     <hr />
     <h2>Sports News</h2>
     <div><Cardcomp tagNews={this.state.sportsNews} pageChanged={this.pageChanged.bind(this)}></Cardcomp></div>
     <hr />
     <h2>Entertainment News</h2>
     <div><Cardcomp tagNews={this.state.entNews} pageChanged={this.pageChanged.bind(this)}></Cardcomp></div>
     {/* <div><Cardcomp entFeed={this.state.entNews}></Cardcomp></div> */}
    </div>
  );
 }
}







export default App;
