import React, {  useState } from 'react'

const TechNews = () => {
  const [news, setnews] = useState();
  const [result, setResult] = useState([]);
  const API_Key = '086669cd7f2c45bcbdb645bc7dfb99ee';
  const API = `https://newsapi.org/v2/everything?q=${news}&apiKey=${API_Key}`

  const fetchNews = async () => {
    try {
      const response = await fetch(API);
      const data = await response.json();
      setResult(data.articles);
      console.log(data);

    } catch (error) {
      alert(error);
    }
  }


  return (
    <>
      <div className='heading'><h2>Tech News App</h2></div>
      <div className='header-box'>
        <input type='text' placeholder='search here ' value={news} onChange={(e) => setnews(e.target.value)} />
        <button  onClick={fetchNews}>Search</button>

      </div>


      <div className='container'>
      <h3 className='text-center mt-5'>Top Tech companies News</h3>
        <div className='row'>
          {
            result.map((getnews) => {
              return (
                <>
                  <div className='col-md-3'>
                    <div className='card m-4'>
                      <div className='card-body'>
                       
                        <img src={getnews.urlToImage} alt='img' className='img-fluid'/>
                        <p>{getnews.title}</p>
                        <a href={getnews.url}  className="btn btn-info">Read More</a>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default TechNews
