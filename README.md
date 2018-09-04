![256 px](https://user-images.githubusercontent.com/36637989/44937318-90ad0280-ad70-11e8-8876-ae6bb0e4757b.png)

![](https://api.travis-ci.org/rocketbear27/octo-turbo.svg?branch=master)
![](https://img.shields.io/badge/contributors-3-brightgreen.svg)
![](https://img.shields.io/badge/npm_scripts-passing-brightgreen.svg)
![](https://img.shields.io/badge/issues-0-brightgreen.svg)
![](https://img.shields.io/badge/forks-2-brightgreen.svg)
![](https://img.shields.io/badge/stars-2-brightgreen.svg)
![](https://img.shields.io/badge/security_status-safe-brightgreen.svg)

An open-source application! 

**Tip**: When you are running a npm script be sure to use: npm **run** _script_name_

**History**: All timelines, change logs, and version logs can be viewed [here]()

```
> npm run script -s
```
_This example above is a fake script ; -s makes the console to print less noise_

---

## Version Log:
**1.2.1**: New logo created, and `/images` folder created with logo licence, and different size logos.
<br><br>
**1.2.0**: HTML file now bundled in build process. Merged pull request for bundling ability

---

## Change Log:
9/4/18: Runned all commands making sure everything is working
<br><br>
9/3/18: Changed `index.html` icon
<br><br>
8/31/18: [dee-y](https://github.com/dee-y) added new files and the _Official Logo For_ [Octo Turbo](https://github.com/rocketbear27/octo-turbo) ; **Version 1.2.1** is released!
<br><br>
8/20/18: [Merged first pull request](https://github.com/rocketbear27/octo-turbo/pull/3) ; [First issue resolved](https://github.com/rocketbear27/octo-turbo/issues/2) ; First star! **Version 1.2.0** is released!
<br><br>
8/13/18: Cleared unnecessary files in /dist ; Added a .gitignore for the Dist folder
<br><br>
8/12/18: New NPM Scripts, .editorconfig for editor default settings, .eslintrc.json for linting process, travis.yml and appveyor.yml for build status, and Version 1 Released!
<br><br>
8/10/18: Configured Webpack and Babel ; Added CONTRIBUTE.md
<br><br>
8/8/18: Replaced Gulp with Express + NPM Scripts;
<br><br>
8/7/18: Basic app rendered using Gulp

---

## Start:

After forking the repo and cloning it on your machine, type npm install to install the dependencies that the project needs

``` code
> npm install
```

---

## Testing & Running:
After editing the code you will have to test your code! For more NPM Scripts, check the [package.json](https://github.com/rocketbear27/octo-turbo/blob/master/package.json) file in the root of your project

You must run **npm run app** to start _Express_.

``` code
> npm run app -s
```

This starts the whole application. But only for testing. It also runs linting, watching and security check.

Like what you have done? Move onto building, next section -->

---
## Building:

**Only Build When Ready To Finalize Changes, You Cannot Edit Beyond This Point**

This clears the **dist** folder for your edits and code. Type the following:

``` code
> npm run prebuild
```

_Any errors from linting will have to be resolved, usually_

Now, to build, bundle, and write your code to the **dist** folder. Type the following:

``` code
> npm run build
```

Finally to build and just to preview your work (optional), type the following command:

``` code 
> npm run postbuild
```

After the building process, it time to move to the Deploying section.

---

## Deploying:

In order to deploy this app, there are certain places you can host your app on. This example will use GitHub Pages.

[Use this guide to set up GitHub Pages with different code. See below for more info](https://www.khanacademy.org/computing/computer-programming/html-css/web-development-tools/a/hosting-your-website-on-github)

_That ^ Link applies to everyone_

Use that article to start the repository and use here for the code. Now how to use that repo.

1. Find the repository folder on your machine
2. Take all the files in your **dist** folder and copy the files. (1 css file, 1 css.map file, 2 js files, 2 js.map files)
3. And add them in your repository folder
4. Open your OS's terminal and cd into your repo folder
5. Type **git add .**
6. Then, Type **git commit -m "any message here"**
7. Finally, Type **git push**
8. You are done, go to a web browser and type _username_.github.io to see your results after a minute or two.

---

## How To Contribute:
1. Check [our issues](https://github.com/rocketbear27/octo-turbo/issues) and work an issue, filing a bug, and requesting for features.
2. Edit the code and publish the code to your own forked repo & [make pull requests](https://github.com/Roshanjossey/first-contributions/blob/master/README.md)
3. Add your name and GitHub profile link in [CONTRIBUTE.md]()

_Nobody is excluded unless violating [Code Of Conduct](https://github.com/rocketbear27/octo-turbo/wiki/Code-Of-Conduct)_

---
