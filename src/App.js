import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();


  const fetchCategories = async () => {
    console.log('this will fetch all the food categories');
    let res = await fetch('http://localhost:3000/api/v1/categories');
    let data = await res.json();
    console.log(data);
    setCategories(data);
  };

  useEffect(() => {
    fetchCategories()
    /* This code will run only one on pag load or component mount / load and load an empty array*/
  }, [])

  return (
    <>
      {/* Full width header  */}
      <div className="grid grid-cols-12">
        <div className={'col-span-full content-center border p-5'}>
          <h1 className={'text-center text-3xl'}>Recipe Book</h1>
          <ul className="flex items-stretch justify-center">
              {categories.map((category, index) => {
                return <li key={index}>{category.name}</li>
              })}
            </ul>
        </div>
      </div>

      {/* Left column for recipe names right column for body of recipe and instructions  */}
      <div className="grid grid-cols-12">
        <div className={'col-span-12 md:col-span-3 lg:col-span-2 border p-5'}>
          <h3 className={'text-center text-3x l'}>Food Categories</h3>
            <ul>
              {categories.map((category, index) => {
                return <li key={index} className={category.id == selectedCategory ? 'border p-5 cursor-pointer bg-gray-200' : 'border p-5 cursor-pointer'} onClick={() => {
                  setSelectedCategory(category.id)
                }}>
                {category.name}
                </li>
              })};
            </ul>
        </div>

        <div className={'col-span-12 md:col-span-9 lg:col-span-10 border p-5'}>
          <h1 className={'text-center text-3xl'}>Recipes will go here finally</h1>
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