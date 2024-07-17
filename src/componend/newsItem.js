import React from 'react'
import './Image.css';
export default function NewsItem(props) {
  return (
    <>
    
      <div className="card">
        <img className="card-img-top img_hover" src={props.article.urlToImage?(props.article.urlToImage):"nul"}   alt="..."/>
          <div className="card-body ">
           <h5 className="card-title">{(props.article.title)?(props.article.title).slice(0, 40):"NULL"}</h5>
           <p className="card-text">{props.article.description?(props.article.description).slice(0, 100):"Null"}</p>
           <p className="card-text font-weight-light">by {!props.article.author?"unkonw":props.article.author} on {props.article.publishedAt}</p>
          <a href={props.article.url} className="btn btn-primary">Read more</a>
      </div>
   </div>
   
   </>
  )
}
