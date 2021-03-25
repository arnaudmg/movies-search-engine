import React from 'react'


class MovieRow extends React.Component {
    viewMovie() {
      console.log("Trying to view movie")
      console.log(this.props.movie.title)
      const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
      window.location.href = url
    }
    render() {
        return <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="movie img" width="120" src={this.props.movie.poster_src}/>
            </td>
            <td style={{marginLeft:'100'}}>
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <input type="button" onClick={this.viewMovie.bind(this)} value="En savoir plus"/>
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow