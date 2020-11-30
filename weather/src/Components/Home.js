import React from 'react'
import img1 from '../Images/weather.jpg';


function Home() {
    return (
        <div>
            <h1>Welcome to Weather App!</h1>
            
            
            <div>
                <img src={img1} alt=" " style={{width:800,height:400,}} />
            </div>

        </div>
    )
}

export default Home
