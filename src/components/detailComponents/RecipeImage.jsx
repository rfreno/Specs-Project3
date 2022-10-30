import React from 'react'
import classes from './DetailScreen.module.css'

const RecipeImage = ({image, name}) => {
  return (
    <div className={classes.image_name}
        style={{backgroundSize: "cover", background:`linear-gradient(
            190deg,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0.8)),url(${image})`}}>
        <h1>{name}</h1>
    </div>
  )
}

export default RecipeImage