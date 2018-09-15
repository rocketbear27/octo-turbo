![256 px](https://user-images.githubusercontent.com/36637989/44937318-90ad0280-ad70-11e8-8876-ae6bb0e4757b.png)

# DOCS For OCTO TURBO
---

## Prerequisites:
1. NPM (v6.4.0)
2. Node.js (v8.11.4)
3. Code Editor (preferably the latest version of VS Code)
4. Familiarity with GitHub and Git Source Control

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