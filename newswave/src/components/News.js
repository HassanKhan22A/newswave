import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    let { apiKey, topic } = props;
    const [articles, setArticles] = useState()
    const [page,setPage] = useState(1)
    const [totalResults,setTotalResults] = useState(0)
    const [length,setLength] = useState(50)
    const [count, setCount] = useState(false)

    useEffect(() => {
        var options = {
            method: 'GET',
            url: `https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&lang=EN&topic=${topic}&page=${page}`,
            headers: {
                'x-api-key': `${apiKey}`
            }
        };

        axios.request(options).then(function (response) {
            setArticles(response.data.articles)
            setTotalResults(response.data.total_pages)
        }).catch(function (error) {
            console.error(error);
        });
        document.title = `${props.topic} - NewsWave`
    }, [])

    const fetchMoreData = async () => {
        
        var option = {
            method: 'GET',
            url: `https://api.newscatcherapi.com/v2/latest_headlines?countries=IN&lang=EN&topic=${topic}&page=${page}`,
            headers: {
                'x-api-key': `${apiKey}`
            }
        };
        setPage(page + 1)
        axios.request(option).then(function (response) {
            count==false?setCount(true):setArticles(articles.concat(response.data.articles))
            setLength(response.page_size)
            setTotalResults(response.data.total_pages)
        }).catch(function (error) {
            console.error(error);
        });
      };

    const capitalizeFLetter = (value) => {
        const capitalStr = value.charAt(0).toUpperCase() + value.slice(1);
        return capitalStr;

    }


    return (
        <>
            <h1 className='text-center' style={{ margin: '35px 0px', marginTop: '90px' }}>NewsWave - Top {capitalizeFLetter(props.topic == "news" ? "general" : (props.topic))} News Headlines</h1>

            <div className="container">

                <InfiniteScroll
                    dataLength={length}
                    next={fetchMoreData}
                    hasMore={length !== totalResults}
                    loader={<h4>Loading...</h4>}>

                    <div className="row">
                        {articles?.map((element) => {
                            return <div className="col-md-4" key={element.link}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} summary={element.summary ? element.summary.slice(0, 88) : ""} imageUrl={element.media ? element.media : "https://th.bing.com/th/id/OIP.e4UaEmp1LcnHgqSxfLaJ4AHaEK?rs=1&pid=ImgDetMain"} newsUrl={element.link} author={element.author ? element.author : "Anonyomous"} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>


            </div>
        </>
    )
}

export default News
