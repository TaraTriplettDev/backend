# Express Todo

**ONLY** Add the following to your `.gitignore` file: `node_modules\*\*\*`

## Create an Express Simple CR App

1. Make a new directory called `expressTodo`
2. Go inside the `expressTodo` folder
3. In the terminal, make an `app.js` file using `touch`
4. In the terminal, run `npm init -y`
5. Open the folder
6. Add Express, Morgan, and EJS through `npm i` and call them inside the `app.js` file
7. Create a server using Express and use logger (Morgan) in `app.js` (don't forget to use `.json()`)
8. Create a `router` folder and create `index.js` and `todo.js` router files, then connect them in `app.js` (index = `/`, todo = `/api/todo`).
9. In `index.js` router:
   - Make a router and export it out (`module.exports`)
   - Make a GET "/" route that returns a JSON with a message saying 'Welcome to my App'
10. In `todo.js` router:
    - Make a router, export it out, and add `uuidv4` (install and require)
    - Add the following dummy data to your todo router (do not change anything in this array and don't add anything! Make sure this array is in your file!):
    ```javascript
    let todos = [
        {
            id: "haf24jd",
            todo: "do laundry",
            done: "false"
        },
        {
            id: "jp2nkl2",
            todo: "wash dishes",
            done: "true"
        }
    ]
    ```
    - Make a GET "/get-all-todos" route that responds with the array of dummy data.
    - Make a GET "/get-todo-by-id" route that takes in a param and responds with the id, todo, and done. If ID is not found, respond with the message "The Todo ID you are looking for does not exist, please check ID."
    - Make a GET "/get-todos-by-done" route that takes in a param that is either true or false. If the param is false, respond with a newDoneArray where done === false. If the param is true, respond with a newDoneArray where done === true.
    - Make a POST "/create-new-todo" route that POSTs a new todo (don't forget the id) with done always false (don't need to pass in done since it's always false) and responds with the whole todos array.
    - Make a PUT "/update-todo" route that updates a todo by id and responds with the updated todo object
    - Make a PUT "/mark-done" route that updates the `done` property of a todo and responds with wether that todo was marked complete or incomplete.
    - Make a DELETE "/delete-todo" route that deletes a todo by id (the id here would probably be best to be hidden in the body). A response will read that the item was deleted.
    
