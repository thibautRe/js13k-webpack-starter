# js13k Webpack Starter

This webpack starter is based on **[@sz-piotr](/sz-piotr/js13k-webpack-starter)**'s webpack starter. It provides a webpack-based foundation for optimized game development for the Game Jam [js13k](//js13kgames.com/).

The base size of the empty application is **`594`** bytes (4% of the allowed size).

## List of features

1. HTML, JS & CSS minification
1. Tree shaking and module concatenation
1. Code inlining (the entire application is a single `index.html` file)
1. Development server with source maps
1. Generation of submission files (including the `.zip` file)
1. User-friendly size reports
1. ESLint + Prettier

## How can I get started?

```
yarn && yarn start
```

The server will be listening on port **8080**

## How can i generate files for submission?

```
yarn build
```

The script will fail if the generated ZIP file is above 13kb.