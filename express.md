### What is Express?

- express bhaneko yeuta framework ho nodejs ko laagi
- express ko use case ==> routing
- it is a package available on **NPM**
- helps to perform server side management **(data handling, request handling, response handling, routing)**

### Why Express js?

- http is difficult to use, express makes this easier.

### Routing:

- routes banauni process 
- example:- 
    - /profile, 
    - /home, 
    - /contact, 
    - /profile/aayush/dsbacfjdvbdsibv/csdvcudbvd
- routes types => GET, POST, PUT, PATCH, DELETE
- base URL is always on slash("/") route.

**req** bhaneko request
**res** bhaneko response

### Node Vs Express

- node is the main thing
- express ko code bata hami server ko code lekna sakxau ans server kasari react garxa tyo pani express express ko help bata lekhna sakxau


### Middleware

- middleware yeuta yesto function ho jun harek route bhanda pahila chalcha. that means sabai route ma jun first ma chaleni middleware first chalcha.
- app.use() le jahile function khojcha. 3 ta mostly **(req, res, next)**

### Request, response and next:

- **req** ma sabai data huncha incoming user ko request anusar. like location, devies info and other things
- **res** ma controls huncha jasko basis ma hami server bata response pathauna sakchau.
- **next** is just a push so that our request moves to the next thing which should be executed.

### Route parameters

- to make any route dynamic you can use colon (:) at the place where you want to make it dynamic, and to access there value use req.params 
    - /contact/user/:username
- example:
    - /contact/user/aayush
    - /contact/user/sakshi
    - /contact/user/sayu

### Template engines
- yo yeuta style of markup bata convert bhayera html huncha
- template engine => ejs, handlebars, jade, pug, etc.....
- html sanga superpowers chaina calculation garna thats why we use ejs
- ejs is very very similar to html

    ### Setup EJS:
    ```bash
    1) ejs install
        npm i ejs

    2) configure ejs
        app.set("view engine", "ejs")

    3) views folder banauni
    
    4) tesma ejs file bauni

    5) send ko thau ma render garni ==> render garni bela make sure **views** folder bhitra bhako matra file ko naam lekhni ani tesma ejs add nagarni. ani render function ma pani .ejs mention nagarni.
    ```

### Static files

- images, stylesheets, frontend js setup
    ```bash
    1) create a folder called public
    2) create three folders inside it, images, stylesheets, javascripts
    3) configure the express static in script.js file
    4) understand the path