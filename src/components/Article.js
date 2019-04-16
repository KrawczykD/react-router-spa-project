import React from 'react';

const Article =(props)=>{

    console.log(props.art)


    return(
        <article>
        <h3>{props.art.title}</h3>
        <h5>{props.art.author}</h5>
        <p>{props.art.text}</p>
        </article>
    )
}

export default Article;