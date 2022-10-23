### Initial Project Setup

1. Create app in Firebase.
2. Install firebase.
3. Get firebase configuration inside 'firebase.config.js' file and export the app.
4. Create a React app.
5. Install React Router DOM.
6. Install Bootstrap and React Bootstrap.
7. Import Bootstrap CSS in the 'index.js' file.


### Router Setup

1. Create a folder called 'Routes' inside the 'src' folder.
2. Inside the 'Routes' folder, create a 'Routes.js' file.
3. Declare the ```createBrowserRouter()``` function within the 'Routes.js' file.
4. Mention the 
```
<RouterProvider router={routes}></RouterProvider>
```
in the 'App.js' file.

### Components and Pages Setup.

1. This time instead of creating a 'Components' folder, create a 'Pages' folder.

2. In the 'Pages' folder, create individual folders for the components. E.g: Categories, Home, News, etc.

3. Inside the individual component folders, create '.js' files to make the functional components using 'rsc'.

4. Create another folder called 'Shared'. This is for the components that are commonly shared in certain pages.

5. Create '.js' files inside the 'Shared' folder and make functional components there using 'rsc'.

**Pages -> Categories, Home, News -> Categories.js, Home.js. News.js**

**Pages -> Shared -> Header.js, LeftNav.js, RightNav.js, Footer.js**

### Loading/Fetching data from the server side API
- Doing this gives an error.

```
useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
```

- To solve: Install CORS
``` npm install cors ```