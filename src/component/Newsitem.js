import React, { Component } from 'react'

export class Newsitem extends Component {
    
    
  render() {
      let {title, description,imageUrl,newsUrl,author,date,source}=this.props
    return (
      <div className='bigcontainer'>
        <div className="card">  
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body"> <span className="badge rounded-pill bg-success">{source}</span>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
    <small className="text-muted"> By {author?author:"Unknown"}   {new Date(date).toGMTString()}</small>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
