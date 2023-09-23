// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  return (
    <div className="planet-item-container">
      <img
        className="planetImage"
        src={eachPlanet.imageUrl}
        alt={`planet ${eachPlanet.name}`}
      />
      <h1 className="name">{eachPlanet.name}</h1>
      <p className="description">{eachPlanet.description}</p>
    </div>
  )
}

export default PlanetItem
