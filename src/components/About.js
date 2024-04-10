import React from 'react'

export default function About({image, about}){

    return(
        <>
            <aside >
            {image ?   (<img src={image} alt="blog logo"/>): (<img src="https://via.placeholder.com/215" />)}

            <p>{about}</p>

            </aside>
        </>
    )
}