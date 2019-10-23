
to begin development server or `yarn start` (or `npm start`).

to deploy, two conflicting methods,
  - originally, with the gh-pages npm package, `npm run deploy` to publish, with the
  `homepage` key in package.json set to `https://strangehill.github.io/dymantic2/`
  - once we deploy through netlify and use netlify forms though, push the updated branch
  to github and it will be built, and because it will be deployed to
  `https://add-netlify-form--customizer-form-v1.netlify.com/`, the `homepage` key should be
  set appropriately.




