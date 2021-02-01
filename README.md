--------

Primer proyecto con React. 

Proyecto desarrollado como parte del curso de React Js en Coderhouse. 

--------

First React proyect. 

This is an online bookstore, Coderhouse's React Js Course final proyect. 

--------

# Para hacer funcionar este proyecto, se instalaron estas dependencias: 

-npm modules
-firebase: 8.2.3
-react-router-dom: 5.2.0
-dotenv: 8.2.0

## Recorrido inicial del proyecto

En la Home, o Página Principal, vas a poder visualizar el libro recomendado del mes y una selección de "nuevos libros" de la librería En La Nube.

Desde la barra de navegación vas a poder acceder a la sección "Sobre nosotros" (about) y la sección Consultas. Además, en la barra de navegación podés acceder a la pestaña Libros, que contiene todos los libros de la librería. A su vez, el Carrito de Compras está accesible desde la barra de navegación, haciendo click en la imagen del carrito. 

Tanto desde la Home, como desde la sección Libros, podés filtrar los libros por categoría. En este caso, las categorías son las editoriales. Para eso está disponible la barra de filtros con los nombres de las mismas.

Se puede acceder al detalle de cada producto, haciendo click en las portadas de los libros.

## Estructura del producto

Podés cargar productos al Carrito de Compras desde cualquier sección de la página. Cada producto que se puede agregar contiene: 

-Una imagen del libro
-Un contador, con el que se puede seleccionar cuántas unidades del producto se quiere agregar
-Un botón de "Agregar al Carrito" que, al hacer click, se modifica al botón "Terminar Compra". Esto permite acceder rápidamente al carrito desde el mismo botón con el que se agregó el producto, haciendo click nuevamente. 
-Un link al detalle del producto, con más información y un breve resumen del libro, al que se accede haciendo click en la imagen del producto. 

## Estructura del Carrito de Compras

En el Carrito de Compras se puede visualizar el listado de productos agregados. El detalle consta de: nombre del libro, id, precio por unidad y precio total, multiplicando cantidad de libros seleccionados, por el precio por unidad. 

Los productos se pueden eliminar del carrito haciendo click en la "X" o borrar la totalidad del carrito. En ambos casos, el total que se muestra en el carrito se actualizará automáticamente. 

## Terminar Compra

Para finalizar la compra, se debe completar el formulario incluido en la parte inferior del Carrito con los datos solicitados. 

Al hacer click en el botón del formulario, la orden se creará automáticamente en Firebase, con los datos de la compra del usuario y sus datos de contacto ingresados en el formulario. 

A su vez, se generará un aviso en la página, confirmando que los datos fueron enviados y brindando al usuario el número de orden, que corresponde con el ID generado por Firebase.

## Firebase 

Para la estructura backend de este proyecto se utilizó Firebase. 

Se crearon tres Colecciones: 

-ItemCollection: contiene los datos de los libros que se muestran en la página (título, autor, editorial, precio, año de publicación, cantidad de páginas e imagen del libro)

-Orders: contiene todas las órdenes generadas por los usuarios al finalizar compra. 

-Categories: contiene las categorías utilizadas para armar la barra de filtros por editorial. 

## React-Router

Para poder crear las rutas de la página web, se usó React-router-dom. 

## Context

Este proyecto contiene dos grandes Contextos: Product Context y Cart Context. El primero se encarga del llamado a las colecciones ItemCollection y Categories, para mostrar los productos y las categorías que dan forma a la página web.  

CartContext contiene las funcionalidades de la sección del Carrito de Compras y del Formulario para terminar la compra. 

## .Env.Local

Para resguardar las claves de Firebase, se generó un archivo .env.local, no incluido en este repositorio de Github, que contiene las claves. 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
