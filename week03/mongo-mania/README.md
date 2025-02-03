# Mongo-Mania

1. Spin up a brand new project using express generator called `homework-practice-mongodb`:

    ```
    express name-of-project --view=ejs
    ```

2. Delete the `public` and `views` folders.

3. Uninstall EJS:

    ```bash
    npm uninstall ejs
    ```

4. Delete the lines that tell the application to use the view engine, view, and the static file (reference today's project `app.js`).

5. Install Mongoose:

    ```
    npm i mongoose
    ```

6. Create a new folder called `recipe` in the `routes` folder.

7. Inside the `recipe` folder, create a file called `recipeRouter.js` and make sure you require it in `app.js`.

8. Inside the `recipe` folder, create `controller` and `model` folders.

9. In the `controller` folder, create a file called `recipeController.js`.

10. In the `model` folder, create a file called `Recipe.js`.

11. In `Recipe.js`, create a model with the key `recipeName`.

12. In `recipeController`, bring in the `Recipe` model and create a function called `getAllRecipe`.

13. Use the `getAllRecipe` function in `recipeRouter.js`; the function should get all the recipes.

14. In `recipeController`, create a function called `createRecipe`. The function should create a recipe and make sure it is saved to MongoDB.

15. Submit the GitHub URL link in the essay. Don't forget to add `node_modules` to the `.gitignore` file.

