import './App.css';
import React, { Component } from 'react';
import MovieRow from './movieRow.js'
import $ from 'jquery'


class App extends Component {
  constructor(props){
    super(props)
    this.state= {}
    // console.log("This is an initializer")

    // const movies = [
    //   {id: 0, poster_src: "https://images.unsplash.com/photo-1576029343091-06627f7a1900?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80", title: "Avengers : Infinity Wars", overview: "Lorem Ispum"},
    //   {id: 1, poster_src: "https://images.unsplash.com/photo-1615987541737-444696e02d9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=652&q=80", title: "La V2 de Vichec", overview: "Lorem Ispum"},
    // ]
  
    // this.state = {rows: [
    //   <p key="1">This is my row</p>,
    //   <p key="2">This is my row</p>,
    //   <p key="3">This is my row</p>
    // ]}

    // var movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie}/>
    //   movieRows.push(movieRow)
    // })

    // this.state = {rows: movieRows}

    this.performSearch("avengers")
  }

  performSearch(searchTerm){
    console.log("Perform Search Using MovieDB")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=a4495d5e03b24b352eb56cb28b212391&query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        // console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {
          console.log(movie.poster_path)
          movie.poster_src = "https://image.tmdb.org/t/p/original" + movie.poster_path
          console.log(movie.title)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    this.performSearch(searchTerm)

  }
  render(){
  return (
    <div>
      <table className="titleBar">
        <tbody>
          <tr>
            <td>
              <img alt="Logo du site" width="75" src="logo.svg"/>
            </td>
            <td width="10"/>
            <td>
              <h2>Filmania - Movies Search Engine</h2>
            </td>
          </tr>
        </tbody>
      </table>

      <input style={{
        fontSize: 20,
        display: 'block',
        width: "99%",
        paddingTop: '8',
        paddingBottom: '8',
        paddingLeft: '16'
      }} onChange={this.searchChangeHandler.bind(this)} placeholder="Rentrez le nom de votre film favori !"/>

      {this.state.rows}
    </div>
  );
}
}

export default App;
