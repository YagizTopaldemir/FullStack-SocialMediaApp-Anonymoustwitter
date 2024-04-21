import React, { useEffect, useState } from 'react'
import "../css/Rightnavbar.css"
import { useNavigate } from 'react-router-dom';

function Rightnavbar() {
    const [tweets,setTweets] = useState([]);

    const tweetslice = tweets.slice(0,4)

    useEffect(() => {
      const fetchtweet = async () => {
        const response = await fetch('/api/tweet')
        const json = await response.json()

        if (response.ok) {
          setTweets(json)
        }

        if (!response.ok) {
          console.log('responde couldnt')
        }
      }

      fetchtweet()
    }, [])



  return (
    <div className='rightnavbar-container'>
        <div className='rightnavbar-contain'>
            <div className='search-navbar'>
                <div className='rightnavbar-searchimage'></div>
                <div className='rightnavbar-searchinput' ></div>
            </div>
            <div className='rightnavbar-sub'>
                <h2>Subscribe to Premium</h2>
                <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                <div className='sub-but'>Subscribe</div>
            </div>

            <div className='rightnavbar-trends'>
                <div className='trendsforyou'>Last hastag for you</div>
                <div className='rightnavbar-trendcat'>
                    {tweets && tweetslice.map((trend) => {
                         
                        return(
                        <div className='trend' key={trend._id}>
                            <div className='trend-contain'>
                                <div className='trendbrand'>Hastag</div>
                                <div className='trendhastags'>#{trend.hastag}</div>
                                <div className='trendpostcount'> posts</div>
                            </div>
                            <div>
                            <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVR4nO3XSU4DMRAF0GwCd2E4ahARCA7DcAngIBCWQR9Z8pZAJzhS2+9JLXn15Vq4umqxAAAAAAAAAAAAAAAAAAAAhpfkMsk6yWuSz/qV83WSi9Hzm0lymuQuyVd+tk1ym+RktPym6uWf83dPU4rIzPObS3Kf6W5GyW+q9sxdz3bXcz7vPb+5+sPa11Xv+c0leTuggJfe85tLsjmggI/e85srlziggPfe85ube4tIBy2obIj7WvWe31xZz+tINtU2yVnv+UdR1/Op1qPkN1fW8iSPEy7/kGQ5Sv5R1CJufnnO27r4LEfLP5qynpcNsUwIdcbe1PPqP3pmZp4PAAAAAAAAAAAAAAAAAAAsZu8b7XUtxhStdisAAAAASUVORK5CYII=" width={25} height={25} />
                            </div>
                        </div>
                    )})}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rightnavbar