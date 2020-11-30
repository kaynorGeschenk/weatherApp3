import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input
            type='text'
            placeholder='city'
            name='city'
            />
            

            <button>Submit</button>
        </form>
    )
}

export default Form; 