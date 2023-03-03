import React, { useState } from 'react'

const Image = () => {
    const [photo, setPhoto] = useState('');
    const [result, setResult] = useState([]);
    const [pageno, setpageno] = useState(1);

    const getImage = () => {

        fetch(`https://api.unsplash.com/search/photos?page=${pageno}&query=${photo}&orientation=squarish&per_page=30&order_by=latest&client_id=YI9RTDCU2abhUtsxrI9LHhx4d7KQZsn7EIEPWGcnIlM`)  //call the api from server
            .then((Response) => Response.json())
            .then((data) => (
                // console.log(data)
                setResult(data.results)

            ))
            .catch((Error) => (console.log(Error)))

    }


    return (
        <>
            {/* header part */}
            <div className='heading'>
                <h2>Unsplash Image Search App </h2>
            </div>
            <div className='flex-box'>
                <input type='search' className="input-area" placeholder='Search Image ' value={photo} onChange={(e) => setPhoto(e.target.value)} />
                <select className="input-area" onChange={(e) => setpageno(e.target.value)} >
                    <option disabled>select page no</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>

                <button className='getbtn' type='submit' onClick={getImage} ><i className="bi bi-search"></i></button>
            </div>

            <h4 className='heading'>{`page no : ${pageno}`}</h4>



            <div>
                <div className='flex'>

                    {
                        result.map((value) => {
                            return (
                                <div className='flex-item' key={value.id}>
                                    <a href={value.links.download} className='links' download={value.links.download}>
                                        <img className='img' alt='img' src={value.urls.small} />



                                    </a>
                                    <div className='img-about'>
                                        <p className='likes'><i className="bi bi-heart-fill"></i> {value.likes}</p>
                                        <p className='username'> Uploaded-by : {`${value.user.first_name} ${value.user.last_name}`}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Image
