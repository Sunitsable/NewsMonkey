import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
 

  constructor(){
    super();
    console.log('hello im constructor')
    this.state={
      articles:[],
      Loading:false
    }
  }
  async componentDidMount(){
     let URL="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2d0968b12fa84cffb135b24b87c7495c&page=1pageSize=5";
     let data= await fetch(URL);
     let parsedData=await data.json();
     this.setState({
      
      articles:parsedData.articles

     });
  }
  handlePrevClick=async ()=>{
    let URL=`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2d0968b12fa84cffb135b24b87c7495c&page=${this.state.page - 1}&pageSize=5`;
     let data= await fetch(URL);
     let parsedData=await data.json();
     this.setState({
      page:this.state.page-1,
      articles:parsedData.articles

     });

  }
  handleNextClick=async ()=>{
    let URL=`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2d0968b12fa84cffb135b24b87c7495c&page=${this.state.page + 1}&pageSize=5`;
     let data= await fetch(URL);
     let parsedData=await data.json();
     this.setState({
      page:this.state.page + 1,
      articles:parsedData.articles

     });

  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop:'60px'}}>NewsMonkey-Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className='col-md-3' key={element.url}>
            <NewsItem title={element.title} url={element.urlToImage} newsUrl={element.url}/>
           </div>
          })}
         </div>
         <div className="container d-flex justify-content-between">
          <button className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
          <button className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
         </div>
      </div> 
    );
  }
}

export default News;
