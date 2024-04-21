import React, { useState } from 'react'
import "../css/homepage.css"
import Tweetspages from '../component/tweetspages'
function HomePages() {
  const [hastag,setHastag] = useState('')
  const [tweetimage,setTweetimage] = useState('')
  const [tweettext,setTitle] = useState('')

  const addimage = () => {
   const imagelink = prompt('if you dont have link you can use for image to link https://imgbb.com/','')
   const hastagg = prompt('what is the hastag? #','')
   setTweetimage(imagelink)
   setHastag(hastagg)
  }

  const handlepost = async (e) => {
    e.preventDefault()

    const tweet = {hastag,tweettext,tweetimage}

  
    const response = await fetch('/api/tweet', {
      method: 'POST',
      body: JSON.stringify(tweet),
      headers: {
          'Content-Type': 'application/json'
      }
  })  
      const json = response.json()
      if (!response.ok) {
      console.log('repsonde !!!!!')
    }
    if (response.ok) {
        setTitle('')
        setTweetimage('')
        setHastag('')
        console.log('new tweet added',json)
        window.location.reload();

    }
    
    
  }


  return (
    <div style={{width:'100vw',minHeight:'100vh',display:'flex'}}>
      <div style={{width:'24vw',height:'auto'}}></div>
    <div className='homepage-contain'>
      <div className='toptext-homepage'>For you</div>
      <div className='hoempage-posttweet'>
        <div style={{width:'85%',overflow:'hidden'}}>
        <input 
        className='homepage-input'
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={tweettext}
        placeholder='What is happening?!' 
        />
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <img className='imageuploadbut' onClick={addimage} width={25} height={25} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEUElEQVR4nO2dSYsTQRTHC7ebC3hyUpUBUdxO7gt68Au4fQY/gQcv4oYnxQ1UpKvaBeY0g+BRxG/g1Q3PHgRnJq8SRzzMQOS1CklPd9KdpLsq6f8PCoaEqUq/X1W97gqpEgIAAAAAAAAAAAAAgIwovbhPGvtAGvtRabukjG1PdNF2ia9Vanu//qy111lH2TvX3qA0PVKaVpwHxbiSQSvS2IcHg/b60oMvjX3nPADGjyI1vS1VQtTzPbhw5VHhkVBS8Bf3xacdqemTChpntobzG8WEszWc36h046zU9LlbAi1Pm9aewj8AJ9x48HfMLGwSFWN70NgsDX2JjYJ7hTcc9fZO87pxVlQUqel8dyzsh8IbVdq2OhutwrSTBo/8mICWKJp48hEVR5UdDwjoBgIcAwGOgQDHQIBjIMAxEOAYCBiAqeeLShn7Knqo/FteT4XNXYPUBQGDBF/TYsJqZoPfy1sfBOQk6vmp6/p2boD68CQ8zFpWTEAzV2UQMGIBxtrc9WEE5IMTbroAms1ZHQTkhe92OOGuEqBpoaYXZN76MAIGgO92OOHynB8VQ7ODBJ+BAMdAgGMgwDEQ4BgIcAwEOAYCHAMBjpkcAXPttSqcn+LCf4sxYewF1IOlbcrQE14K6FwW4Nf4PeE5Yy1AhfaQ1PQ9fXmYvsvAHhYeM7YC6gEdSPpmKmmJuKabx4SnjKUA7tVSW1odcJpXmn4kSgiaR/P+iodXPrnw36Igxk5AevDtHXG9vY6L0vZ2kgRp7JFMK53Gvuj6wSD/sE7bl9uCRl1UWUCPnn9rVTuabuaVUA+aJ6JRlDalcXIPGidFFQWkzvna3k5vi25knY6i4Pf4urGj/KqFdHqYGIydgDw9P9NI0JY6R0KP4H/7V+Kv/1S6cUpUQcAwwc8iYSpsHudvtRLqvyGut9dwkcZeLUqC1wJGEfy+EhKDb6+IGNLQ5SIkeCtgkDm/H0k5ISFHXE39f02XRp0TvBRQRPCzSJDGXhN9GLUE7wSMctrJNx3R76zLFqOcjrwSMB3S/qJ6/jC3qEWOBG8ElBl8nyR4IcBF8H2R4FyAy+D7IMG5gKIT7tDPCQUnZucCXPZ8H0aCXwIcBt+VBI8ElD/t5J2Oak+bO8WIpyNPBPgT/F4SlKHHIiNZJXggwL/gp0rQdFPkIIsE5wKE50hDF5Wh98rYcJDNpfpJgIAS6JWYIaAkUkcCpiDnIwE5wCcJxX+AMUvCZUsovnEI6JUTIMC1hMIbxcat3dsXl75xa3RQQ+caS0jnREWpGbpQ+tbFfHJE9yIXfeaeICrG9Avaogx9jQm4W3jDfGzHqu3rDX3hjayrsIv6jpmFTX97fiz4vH190Npdyofgwwr6PZBUrcgytq7/Dx/Xwcd2uL5o5UvR9Kb0c2QiCdFIoGXnATCuCi1zTiw9+PGcwMOP7wCSFqcmsPyMrlXbu6XN+QAAAAAAAAAAAABATAJ/APQzfvOfXX4ZAAAAAElFTkSuQmCC" />
        <div className='homepage-posttweet' onClick={handlepost}>Post</div>
        </div>
      
        </div>
      </div>
      <div style={{height:'9vh',width:'100%',color:'#1d9bf0',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'18px',fontWeight:'600'}}>Post</div>
      <div className='homepage-tweets'>
          <Tweetspages />
          <div style={{height:'5vh'}}></div>
      </div>
    </div>
</div>
  )
}

export default HomePages