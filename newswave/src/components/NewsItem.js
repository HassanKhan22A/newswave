import React from 'react'

const NewsItem = (props)=> {
    let { title, summary, imageUrl, newsUrl, author} = props;
    return (
        <div>
            <div className='my-3'>
                <div className="card">
                <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left: '90%', zIndex: '1'}}></span>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{summary}</p>
                        <p className='card-text'><small className='text-muted'>By {author}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem



