import React, { useEffect, useState } from 'react'
import "../css/tweetpage.css"
function Tweetspages() {
    const [tweets,setTweets] = useState([])

    useEffect(() => {
      const gettweets = async () => {
        const response = await fetch('/api/tweet')
        const json = await response.json()

        if (!response.ok) {
            console.log('repsonde !!!!!')
          }
          if (response.ok) {
              console.log('got tweet ',json)
              setTweets(json)
          }
      }

      gettweets()
    }, [])
    


  return (
    <div className='tweetpage-container'>
        <div className='tweetpage-contain'>
            <div className='tweetpage-tweets'>
            {tweets && tweets.map((tweet) => (
                <div className='tweetpage-tweet' key={tweet._id}>
                  <div style={{width:'95%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                  <div style={{height:'20%',gap:'10px',display:'flex',flexDirection:'row',alignItems:'center',marginLeft:'10px'}}>
                     <img width={45} height={45} src="data:image/png;base64,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" />
                     <div style={{color:'white'}}>User <span> @{tweet._id}</span> - Apr 19</div>
                   </div> 
                   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABEElEQVR4nO3XSU4DMRAF0GwCd2E4ahARCA7DcAngIBCWQR9Z8pZAJzhS2+9JLXn15Vq4umqxAAAAAAAAAAAAAAAAAAAAhpfkMsk6yWuSz/qV83WSi9Hzm0lymuQuyVd+tk1ym+RktPym6uWf83dPU4rIzPObS3Kf6W5GyW+q9sxdz3bXcz7vPb+5+sPa11Xv+c0leTuggJfe85tLsjmggI/e85srlziggPfe85ube4tIBy2obIj7WvWe31xZz+tINtU2yVnv+UdR1/Op1qPkN1fW8iSPEy7/kGQ5Sv5R1CJufnnO27r4LEfLP5qynpcNsUwIdcbe1PPqP3pmZp4PAAAAAAAAAAAAAAAAAAAsZu8b7XUtxhStdisAAAAASUVORK5CYII=" width={25} height={25} />
                  </div>

                  <div className='tweetpage-tweetpart'>
                    <p style={{color:'white',marginLeft:'10px',fontSize:'20px'}}>{tweet.tweettext}</p>
                    <p style={{color:'#1d9cf057',marginLeft:'10px'}}>#{tweet.hastag}</p>
                    <div className='tweetpage-tweetimage'>
                        <img width='100%' style={{borderRadius:'20px'}}  src={tweet.tweetimage} />
                    </div>
                  </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Tweetspages