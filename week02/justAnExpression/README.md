# Just an Expression

## Instructions

1. **Project Setup**
   - Create a new directory called `justAnExpression`.
   - Navigate to the `justAnExpression` folder.
   - Create an `app.js` file using the `touch` command.
   - Initialize a Node.js project with default settings using `npm init -y`.
   - Open the project folder.
   - Install Express, Morgan, and EJS as dependencies using `npm i`.
   - In `app.js`, create an Express server and configure it to use Morgan as a logger. Don't forget to enable `.json()` support.

2. **Router Setup**
   - Create a `router` folder within your project directory.
   - Inside the `router` folder, create two router files: `index.js` and `todo.js`.
   - Connect the routers to your main `app.js` file. The `index` router should handle the root route `/`, and the `todo` router should handle `/api/todo`.

3. **Index Router**
   - In `index.js` router:
     a. Create a router object and export it using `module.exports`.
     b. Define a GET route for the root route `/` that returns a JSON response with the message 'Welcome to my App'.

4. **Todo Router**
   - In `todo.js` router:
     a. Create a router object and export it using `module.exports`.
     b. Install and require the `uuidv4` package.
     c. Add the following dummy data to your `todo.js` router. Do not change anything in this array and do not add anything to it:
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

5. **GET Routes in Todo Router**
   - Create a GET route for `/get-all-todos` that responds with the array of dummy data.
   - Create a GET route for `/get-todo-by-id/:id` that takes a parameter and responds with the corresponding `id`, `todo`, and `done`. If the ID is not found, respond with the message "The Todo ID you are looking for does not exist, please check the ID".
   - Create a GET route for `/get-todos-by-done/:done` that takes a parameter which can be either `true` or `false`. If the parameter is `false`, respond with a `newDoneArray` that has `done === false`. If the parameter is `true`, respond with a `newDoneArray` that has `done === true`.

6. **POST Route in Todo Router**
   - Create a POST route for `/create-new-todo` that posts a new todo with an automatically generated ID and a `done` value that is always `false`. Respond with the updated `todos` array.

Follow these instructions carefully to create your Express CRUD application.
