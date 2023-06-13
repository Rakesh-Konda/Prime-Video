// Write your code here
import Slider from 'react-slick'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {Component} from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'
import './index.css'

class MoviesSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      moviesList: props.moviesList,
      selectedData: null,
    }
  }

  PlayVideo = data => {
    this.setState({selectedData: data})
  }

  render() {
    const {moviesList, selectedData} = this.state
    const ActionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
    const ComedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

    const settings = {
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    }

    return (
      <div>
        <div className="ff">
          <h1 className="h1">Action Movies</h1>
          <Slider {...settings}>
            {ActionMovies.map(each => (
              <div key={each.id} className="hlo">
                <Popup
                  modal
                  trigger={
                    <button type="button" className="trigger-button">
                      <button
                        type="button"
                        className="but"
                        onClick={() => this.PlayVideo(each)}
                      >
                        <img
                          src={each.thumbnailUrl}
                          alt="thumbnail"
                          className="img"
                        />
                      </button>
                    </button>
                  }
                >
                  {close => (
                    <div>
                      <div>
                        <MovieItem data={selectedData} />
                      </div>

                      <button
                        data-testId="closeButton"
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        <IoMdClose className="close" />
                      </button>
                    </div>
                  )}
                </Popup>
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <h1 className="h1">Comedy Movies</h1>
          <Slider {...settings}>
            {ComedyMovies.map(each => (
              <div key={each.id} className="hlo">
                <Popup
                  modal
                  trigger={
                    <button type="button" className="trigger-button">
                      <button
                        type="button"
                        className="but"
                        onClick={() => this.PlayVideo(each)}
                      >
                        <img
                          src={each.thumbnailUrl}
                          alt="thumbnail"
                          className="img"
                        />
                      </button>
                    </button>
                  }
                >
                  {close => (
                    <>
                      <div className="cv">
                        <MovieItem data={selectedData} className="cvv" />
                      </div>
                      <button
                        data-testId="closeButton"
                        type="button"
                        className="trigger-button"
                        onClick={() => close()}
                      >
                        <IoMdClose className="close" />
                      </button>
                    </>
                  )}
                </Popup>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    )
  }
}

export default MoviesSlider
