import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  //should have on submit handler over here that will create an object with
  //create and finish this form for all the input areas

  const initialObject = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialObject);
  const onChangeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setRecipes([
      ...recipes,
      {
        name: formData.name,
        cuisine: formData.cuisine,
        photo: formData.photo,
        ingredients: formData.ingredients,
        preparation: formData.preparation,
      },
    ]);
    setFormData(initialObject);
  };

  return (
    <form name="create" onSubmit={submitHandler}>
      <table>
        <tbody>
          <tr class="tableForm"> 
            <td class="name">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required={true}
                onChange={onChangeHandler}
                value={formData.name}
              />
            </td>
            <td class="cuisine">
              <input
                id="cuisine"
                name="cuisine"
                placeholder="Cuisine"
                type="text"
                required={true}
                onChange={onChangeHandler}
                value={formData.cuisine}
              />
            </td>
            <td class="photo">
              <input
                id="photo"
                name="photo"
                placeholder="URL"
                type="url"
                required={true}
                onChange={onChangeHandler}
                value={formData.photo}
              />
            </td>
            <td class="ingredients">
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                required={true}
                onChange={onChangeHandler}
                value={formData.ingredients}
              />
            </td>
            <td class="preparation">
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation"
                required={true}
                onChange={onChangeHandler}
                value={formData.preparation}
              />
            </td>
            <td class="create">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
