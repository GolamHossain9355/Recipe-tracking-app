import React from "react";
import RecipeDelete from "./RecipeDelete";

function RecipeList({ recipes, setRecipes }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  //should only display the list with tr td

  const createdList = recipes.map((recipe, id) => (
    <tr key={id}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img src={recipe.photo}/></td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        {<RecipeDelete id={id} recipes={recipes} setRecipes={setRecipes} />}
      </td>
    </tr>
  ));

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{createdList}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
