// Write your code here
import Slider from 'react-slick'

import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container" testid="planets">
      <div className="container">
        <h1 className="heading">PLANETS</h1>
        <Slider {...settings}>
          {planetsList.map(each => (
            <PlanetItem key={each.id} planetItems={each} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetSlider
