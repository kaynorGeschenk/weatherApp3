import React from 'react'


    const Weather = (props) => {
        return (
            <div>
               <h1>{props.city}</h1> 
                <h4>{props.temperature}</h4>
                
            </div>
            
        )
    }
    
    


export default Weather;
