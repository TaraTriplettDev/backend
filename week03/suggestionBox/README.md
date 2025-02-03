# Suggestion-box

## Mongo Express Node Practice

- Use Postman and Robo 3T to test your routes
- Use MongoDB and Mongoose and name the database `suggestion-box`
- Use Async and Await (Don't forget the try and catch block)
- Use controllers for business logic.
- Remember to install your dependencies (mongoose)`
- Only `.gitignore` the `node_modules`

## INSTRUCTIONS:

1. Create an express server using express-generator: `express suggestion-box --view=ejs`
2. Delete all view-related items
3. Connect to MongoDB with Mongoose. Remember to name the database `suggestion-box`.
4. In the `routes` folder, create a `suggestions` folder, then create `suggestionRouter.js` inside the suggestion folder and make sure you connect it through `app.js` with the path `/api/suggestions`
5. In the `suggestion` folder, create a `model` folder and `controller` folder.

6. In the `model` folder, create a file called `Suggestion.js`: Build a schema for Suggestions called `SuggestionSchema`
   - `title` - should be a string, lowercase, unique, required
   - `author` - should be a string, lowercase
   - `suggestion` - should be a string, lowercase and required
   - `likes` - should be a number and default to 0
   - `anonymous` - should be a boolean
   - `timeCreated` - should be a date with default `Date.now`

7. In the `controller` folder, create a file called `suggestionController.js`
   - `getAllSuggestions`
   - `getSingleSuggestion` - get one suggestion based on id using parameters
   - `createSuggestion` - does not need id or time from the user
   - `updateSuggestion` - the user can only update title and suggestion
   - `deleteSuggestion` - suggestion deletes based on id

8. Hook it up to `suggestionRouter.js`

   - `GET /all-suggestions`
   - `GET /single-suggestion`
   - `POST /create-suggestion`
   - `UPDATE /update-suggestion`
   - `DELETE /delete-suggestion`

**Stretch Goal:**
- Make a `GET /by-author-suggestion` using query - `getSuggestionsByAuthor` - if I query an author's name, I should get a list of their suggestions

**Hint:**
- In the URL `www.shop.com/products/?item=shoes`
- In code `req.query.item` equals `shoes`

**Submit Github Link in Google Classroom**

