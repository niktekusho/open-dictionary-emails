# Open Dictionary Emails

Email templates used in [Open Dictionary](https://github.com/niktekusho/open-dictionary).

>Open Dictionary consists of a set of services that you use to serve dictionary entries in an open source manner.
>This project is heavily inspired by PokeAPI. PokeAPI is a service that provides a handful of data regarding Pokémon games. You can read more at their [official website](https://pokeapi.co).

# Getting Started

First off some requirements:

-  `node` & `npm`, required ([link](https://nodejs.org/en/))
-  `yarn`, highly recommended ([link](https://yarnpkg.com/lang/en/))
-  `Visual Studio Code`, highly recommended ([link](https://code.visualstudio.com/))
-  `git`, required if you want to contribute ([link](https://git-scm.com/))
-  'something to unzip zips', optional

Now that everything you need is clear enough, let's proceed on the setup...

## Get the project

You have two options:

1.  Using git, clone the repository in you local machine:

	```sh
	git clone https://github.com/niktekusho/open-dictionary-emails
	```

2.  Downloading the source code from GitHub using the [releases page](https://github.com/niktekusho/open-dictionary-emails/releases).

## Dependencies

If you have `yarn` installed:

```sh
yarn install
```

otherwise using `npm`:

```sh
npm install
```

## Build the template

This command will build the ejs templates, sass stylesheets and the rest and bundle them together into an html file.

If you have `yarn` installed:

```sh
yarn build
```

otherwise using `npm`:

```sh
npm run build
```

## Preview the template

This command will open a browser window/tab pointing to a development server running on you local machine.

If you have `yarn` installed:

```sh
yarn watch
```

otherwise using `npm`:

```sh
npm run watch
```



# Repository Structure

```sh
open-dictionary-emails
|_ src (source code)
  |_ css (compiled from .scss or manually added)
  |_ emails (.ejs files)
  |_ images (all images)
  |_ sass (.scss files)
  |_ testing (.json files)
|_  .editorconfig
|_  LICENSE
|_  README.md (this document 👀)
|_  detect-json.js
|_  gulpfile.js
|_  package.json
|_  yarn.lock
```
