import React, {useState} from 'react'
import AdBanner from './AdBanner'
import RecipeDisplay from './RecipeDisplay'
import { useEffect } from 'react'
import axios from 'axios'

import classes from './HomeScreen.module.css'


const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([])

  const seeRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes")
    .then(res => {
      // console.log(res.data)
      setRecipes(res.data)
    })
  }

  useEffect(() => {
    seeRecipes()
  },[])


  return (
    <div>
      <AdBanner />
      <RecipeDisplay recipes={recipes} className={classes.rec_display}/>
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen