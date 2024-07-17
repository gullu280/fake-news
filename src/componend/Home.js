import Spiner from './spiner';
import './Image.css';
import {useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './newsItem';
import { useParams } from 'react-router-dom';
export default function Home(props) {
  const [pageSize ,setPageSize]=useState(20);
  const [article , setArticles]=useState();
  const [totalResults , setTotalresults]=useState(0);
  const [page, setPage1]=useState(1);
  const [Loding, setLoding]=useState(true);
  const [country, setCountry]=useState("us");
  const [language, setLanguage]=useState("en");
  const param=useParams();
    const {cnty}=param;
    const {name}=param;
    const {langu}=param;
 const CallingMethod= async ()=>{
  if(cnty!==undefined){
    setCountry(cnty);
    }
    if(langu!==undefined){
      setLanguage(langu);
      }
  setTotalresults(0);
  setPageSize(20);
  let url=`https://newsapi.org/v2/top-headlines?language=${langu?langu:"en"}&country=${cnty?cnty:"us"}&category=${name? name:props.catagory}&pageSize=${pageSize}&page=1&apiKey=1b0e45a038104543b6dcdfc10b919d2c`;
  setLoding(true);
  const data= await fetch(url);
  const fetchData=await data.json();
  setArticles(fetchData.articles);
  setTotalresults(fetchData.totalResults);
  setLoding(false);
  }
  const Next= async()=>{
 
    let url=`https://newsapi.org/v2/top-headlines?language=${language}&country=${country}&category=${name? name:props.catagory}&pageSize=${pageSize}&page=${page + 1}&apiKey=1b0e45a038104543b6dcdfc10b919d2c`;

    setPage1(page +1);
    const data= await fetch(url)
    const fetchData=await data.json();
    setArticles(article.concat(fetchData.articles));
    
  }
  useEffect(()=>{
    setPage1(1);
      CallingMethod();
     
    },[name,props.catagory,cnty,langu]
  )
if(Loding) return  <h1> loding 5...</h1>
   return (
    <div>
 
    <div className="container mt-3">
    <div className='row'>
    <div className='col mt-5 py-2'> 
    <h3 className="text-center font-weight-bold ">Today Headlines </h3>
    <h5 className="text-center font-weight-bold font-italic"> {name? name:props.catagory} news <img className='img_globe' src="faviconic.ico" alt=''/> </h5>
    
    </div>
  </div>
    <InfiniteScroll
      dataLength={article.length}
      next={Next}
      hasMore={page<=Math.ceil(totalResults/pageSize)} 
      loader={<Spiner/>}
      endMessage={ <footer className="footer text-center bg-primary">
      <div className="container">
    
      </div>
    </footer>} 
    >
    
     <div className="row w-100 "  >
        {article.map((element)=>{
     return <div className="col-md-4 col-lg-3 col-sm-6" key={article.urlToImage}> <NewsItem article={element} catagory={name? name:props.catagory} /> </div>         })}     
     </div>

 </InfiniteScroll>
 </div>
 <footer className="container-fluid footer text-center bg-primary">
      <div className="container-fluid">
        <span><a href="mailto:gulaamm786@gmail.com"  type="button" className="btn btn-primary rounded-pill px-2" >gulaamm786@gmail.com </a></span><br/>
        <span>Copyright &copy; 2024 Gullu Website</span>
      </div>
    </footer>
 </div>
  )
}
