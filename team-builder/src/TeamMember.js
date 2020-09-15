import React from 'react'

export default function Member(props){

    const { info } = props

    if( !info ) {
        return <h3>please wait, fetching member details...</h3>
    }

    return (

        <div>
            <h2>{info.username}</h2>
            <p>Email: {info.email}</p>
            <p>Role: {info.role}</p>
        </div>

    )
}