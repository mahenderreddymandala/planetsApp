// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planetItems} = props

  const {name, imageUrl, description, id} = planetItems

  return (
    <div className="planet">
      <div className={id}>
        <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      </div>
      <div>
        <h1 className="heading-name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default PlanetItem
