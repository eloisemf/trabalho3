import React, { useState, useEffect } from 'react'
import axios from 'axios'

import delButton from '../../img/del.svg';
import More from "../../img/more.svg"

import Header from "../../Components/Header"
import "./Home.css"

import { Link } from 'react-router-dom';
import edit from '../../img/edit.svg'



function Home() {/*
//se tal coisa acontecer então etc. esse é pra teste 
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(() =>{
        console.log('deu tudo certo')
        })
     .catch(() => {
            console.log("Deu errrado")
       })
    },[])  */


    //esse pra qnd tiver o link certto

    const [posts, setPosts] = useState([])

    //a parte do {post.} é onde chama cada componente do json server



    useEffect(() => {
        axios.get("https://upload-my-api.herokuapp.com/post")
            .then((response) => {
                setPosts(response.data)
            })

            .catch(() => {
                console.log("Deu errrado")
            })

    }, [])






    return ( 
        <div className="app"> 
            <Header />
            <main>
                
                <div className="cards">
                    
                        

                            <div className="card"  >


                                    
                                <header>
                                    <h2> Titulo </h2>

                                </header>
                                <div className="line"></div>
                                <p> ano - duração - review </p>

                                <div className="btns" >
                                    <div className="btn-edit">
                                        <Link to="/edit"> <img src={edit} alt="edit button" />  </Link>
                                    </div>
                                    <div className="btn-more">
                                        <Link to="/lerMais"> <img src={More} alt='ver mais' /></Link>
                                    </div>
                                    <div className="btn-del">
                                        <Link to="/del"> <img src={delButton} alt="del button" />  </Link>
                                    </div>
                                </div>

                            </div>


                        
                




                </div>
            </main>
        </div>
        /*
        <div className="app"> 
            <Header />
            <main>
                
                <div className="cards">
                    {posts.map((post, key) => {
                        return (


                            <div className="card" key={key} >


                                    
                                <header>
                                    <h2> {post.title}  </h2>

                                </header>
                                <div className="line"></div>
                                <p> {post.year}</p>

                                <div className="btns" >
                                    <div className="btn-edit">
                                        <Link to="/edit"> <img src={edit} alt="edit button" />  </Link>
                                    </div>
                                    <div className="btn-more">
                                        <Link to="/lerMais"> <img src={More} alt='ver mais' /></Link>
                                    </div>
                                    <div className="btn-del">
                                        <Link to="/del"> <img src={delButton} alt="del button" />  </Link>
                                    </div>
                                </div>

                            </div>


                        )
                    })}




                </div>
            </main>
        </div>
        */
    )
}


export default Home