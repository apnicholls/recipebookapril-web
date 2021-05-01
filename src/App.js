import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState();
  const [contents, setContents] = useState([]);
  const [selectedContent, setSelectedContent] = useState();

  let apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';


  const fetchCategories = async () => {
    console.log('this will fetch all the food categories');
    console.log(process.env.REACT_APP_API_URL)
    let res = await fetch(`${apiUrl}api/v1/categories`);
    let data = await res.json();
    console.log(data);
    setCategories(data); 
  };

  useEffect(() => {
    fetchCategories()
    /* This code will run only one on page load or component mount / load and load an empty array unless selectedCategory has been populated*/
  }, [])

  const fetchRecipes = async (id) => {
    console.log('this will fetch all recipes within a category id', id);
    let res = await fetch(`http://localhost:3000/api/v1/categories/${id}/recipes`);
    let data = await res.json();
    console.log(data);
    setRecipes(data);
  };

  const fetchContents = async (id) => {
    console.log('this will fetch the content for a selected recipe', id);
    let res = await fetch(`http://localhost:3000/api/v1/recipes/${id}/contents`);
    let data = await res.json();
    console.log(data);
    setContents(data);
  }

  return (
    <>
      {/* Full width header  */}
      <div className="grid grid-cols-12">
        <div className={'col-span-full content-center border p-5'}>
          <h1 className={'text-center text-3xl'}>Recipe Book</h1>
          <ul className="flex items-stretch justify-center">
            {categories.map((category, index) => {
              return <li key={index} className={category.id == selectedCategory ? 'border p-5 cursor-pointer bg-gray-200' : 'border p-5 cursor-pointer'} onClick={() => {
                setSelectedCategory(category.id)
                fetchRecipes(category.id);
              }}>
                {category.name}</li>
            })}
          </ul>
        </div>
      </div>

      {/* Left column for recipe names right column for body of recipe and instructions  */}
      <div className="grid grid-cols-12">
        <div className={'col-span-12 md:col-span-3 lg:col-span-2 border p-5'}>
          <h3 className={'text-center text-3x l'}>Recipes</h3>
          <ul>
            {recipes.map((recipe, index) => {
              return <li key={index} className={recipe.id == selectedRecipe ? 'border p-5 cursor-pointer bg-gray-200' : 'border p-5 cursor-pointer'} onClick={() => {
                setSelectedRecipe(recipe.id)
                fetchContents(recipe.id);
              }}>
                {recipe.titleTxt}</li>
            })}
          </ul>
        </div>

        <div className={'col-span-12 md:col-span-9 lg:col-span-10 border p-5'}>
          <h1 className={'text-center text-3xl'}>Individual recipe content and instructions will go here </h1>
          <ul>
            {contents.map((content, index) => {
              return <li key={index} className={content.id == selectedContent ? 'border p-5 cursor-pointer bg-gray-200' : 'border p-5 cursor-pointer'} onClick={() => {
                setSelectedContent(content.id)
                fetchContents(content.id);
              }}>
                {content.descTxt} {content.ingredientsTxt} {content.methodTxt} {content.commentsTxt} </li>
            })}
          </ul>

        </div>
      </div>
    </>
  );
}

export default App;

/* useEffect(() => { */
/* This code will run everytime the someStateVariable changes*/
/* This code will run verytime var2 OR somestateVariable changes */
/* }, [someStateVariable, var2]) */


