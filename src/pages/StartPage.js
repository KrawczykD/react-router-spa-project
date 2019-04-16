import React from 'react';
import Article from '../components/Article'

const articleList = [
    {
        id:1 ,
        title:"Title number 1",
        author:"Author 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc ipsum, fringilla eget justo id, vehicula laoreet sapien. Sed egestas metus non porttitor tristique. Pellentesque quis porta lacus, id blandit massa. Vestibulum ut ex eu massa egestas feugiat. Suspendisse maximus dolor et rhoncus pellentesque. Morbi id vehicula augue. Quisque efficitur ipsum eget felis scelerisque, vitae vulputate odio convallis."
    },
    {
        id:2 ,
        title:"Title number 2",
        author:"Author 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc ipsum, fringilla eget justo id, vehicula laoreet sapien. Sed egestas metus non porttitor tristique. Pellentesque quis porta lacus, id blandit massa. Vestibulum ut ex eu massa egestas feugiat. Suspendisse maximus dolor et rhoncus pellentesque. Morbi id vehicula augue. Quisque efficitur ipsum eget felis scelerisque, vitae vulputate odio convallis."
    },
    {
        id:3 ,
        title:"Title number 3",
        author:"Author 3",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nunc ipsum, fringilla eget justo id, vehicula laoreet sapien. Sed egestas metus non porttitor tristique. Pellentesque quis porta lacus, id blandit massa. Vestibulum ut ex eu massa egestas feugiat. Suspendisse maximus dolor et rhoncus pellentesque. Morbi id vehicula augue. Quisque efficitur ipsum eget felis scelerisque, vitae vulputate odio convallis."
    },
]

const StartPage = ()=>{

    const article = articleList.map(art =>(
        <Article key={art.id} art={art}/>
    ))

    return(
        <div>
            {article}
        </div>
    )
}

export default StartPage;