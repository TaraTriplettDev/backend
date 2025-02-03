# Express Train

## Instructions

1. Create an Express app.

   - Make a new directory called `expressTrain`.
   - Navigate inside the `expressTrain` folder.
   - Create an `app.js` file in the terminal using `touch`.
   - Initialize a Node.js project in the terminal using `npm init -y`.
   - Open the folder.
   - Install Express, Morgan, and EJS as dependencies using `npm i` and require them in the `app.js` file.
   - Create a server using Express and use Morgan as a logger. Don't forget to use `.json()`.

2. Create a directory structure.

   - Create a `views` folder.
   - Make sure the views folder and view engine are connected to EJS through path in `app.js`. Review class work if you don't remember.
   - Add a `public` folder and connect it in `app.js`.
   - Create subfolders within the `public` folder: `javascript`, `image`, and `stylesheet`.
   - Inside the `stylesheet` folder, add a `style.css` file.
   - Inside the `javascript` folder, add a `method.js` file that logs "hello world".
   - Inside the `image` folder, add three random pictures of your choice.

3. Connect files to EJS templates.

   - Connect the `style.css`, `method.js`, and image files to each EJS file as needed.

4. Define routes and EJS templates.

   - Create a GET request with the path "/" that renders `index.ejs` with user info (a name) and three fun facts about yourself (array of info).
     - In `index.ejs`, include the HTML5 boilerplate, an `<h1>` that says `Welcome to my App ${user.name}`, and the list of fun facts about yourself. For example, "My favorite cuisines contain only carbs!!!". Style the `<h1>` with your favorite color, importing this style from the `stylesheet`.

5. Create a GET request with the path "/photo-fun" that renders `photos.ejs`.
     - In `photos.ejs`, include the HTML5 boilerplate and display all three photos from the `images` folder.

6. Create a GET request with the path "/:pet/:age" that renders `pets.ejs`.
     - In `pets.ejs`, display the pet's name and age (which are grabbed from the params and should be passed through the GET request). Attach `method.js` to log "hello world" in your browser.

