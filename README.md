# `css-boilerplate` ✨

[![GitHub issues](https://img.shields.io/github/issues/cluzier/css-boilerplate.svg)](https://github.com/cluzier/css-boilerplate/issues)
[![GitHub forks](https://img.shields.io/github/forks/cluzier/css-boilerplate.svg)](https://github.com/cluzier/css-boilerplate/network)
[![GitHub stars](https://img.shields.io/github/stars/cluzier/css-boilerplate.svg)](https://github.com/cluzier/css-boilerplate/stargazers)


`css-boilerplate` is a fresh looking but still simple css framework.

## About

`css-boilerplate` is a fresh looking but still simple css framework that should be taken as basis for your next website. We designed it to be flexible but still small, thanks to `scss` you need to change some variables and you have your own version of `css-boilerplate` :sunglasses:

## How to use it

Thanks to the opportunities the open-source development offers us, there are thousand ways to use this libary or change it. Below here I list only a few of them.

### Just use it

Add `<link rel="stylesheet" href="css/css-boilerplate.css">` to your `<head>`.

### Download it

Download from Github with the following command:

**GitHub**: `$ git clone https://github.com/cluzier/css-boilerplate`

### Change it

Clone and mix up things. If you think your edits are interesting for the public, just open a new pull request on that.

Here a brief overview of our folder structure:

```
css-boilerplate
├── dist # Our destination folder
│   ├── css-boilerplate.css
│   └── index.html
├── src # Our source folder
│   ├── _base.scss
│   ├── _button.scss
│   ├── _extra.scss
│   ├── _grid.scss
│   ├── _input.scss
│   ├── _navigation.scss
│   ├── _table.scss
│   ├── _typography.scss
│   └── style.scss
├── LICENSE
├── README.md
├── gulpfile.js
└── package.json
```

Some `gulp` task you should know about:

- `scss` compiles the scss to css
- `scss:min` compress the compiled css files
- `watch` executes `scss` and `scss:min` on any file change

**Required tools for development:**

- Node.js
- NPM
- Gulp installed globally (`npm install gulp -g`)

## Credits & License

A project by [Conner Luzier](https://github.com/cluzier).
Other amazing contributors [here](https://github.com/cluzier/css-boilerplate/graphs/contributors).
