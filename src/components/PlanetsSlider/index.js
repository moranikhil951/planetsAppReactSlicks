// Write your code here

import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="planet-slider-container" data-testid="planets">
      <h1 className="top-heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem eachPlanet={eachPlanet} key={eachPlanet.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
