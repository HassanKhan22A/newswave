import React from 'react'

const NewsItem = (props)=> {
    let { title, summary, imageUrl, newsUrl, author} = props;
    return (
        <div>
            <div className='w-9 m-1'>
                <div className="card w-70" style={{margin:'10px', marginBottom:'25px'}}>
                    <img src={imageUrl} className="card-img-top" style={{height: '200px'}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{summary}...</p>
                        <p className='card-text'><small className='text-muted'>By {author}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem



