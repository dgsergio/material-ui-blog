# Material UI Blog

This is a Blog applicaction that allows users to create and manage their owns post.

You can visit the website at the following link:
https://blog-c0db2.web.app/

## Introduction

This application was built using [ReactJs](https://react.dev/) and TypeScript. [React Router](https://reactrouter.com/) was utilized as a dependency for managing routing, and [Redux Toolkit](https://redux-toolkit.js.org/) for efficient state management across the application.

The website allows users to authenticate using a Google account, enabling them to create, read, update, and delete their own posts. This authentication feature is made possible by [Firebase](https://firebase.google.com/) Authentication.

For the backend database management, Firebase Realtime Database was used. Operations such as GET, POST, PUT, and DELETE were performed using the fetch API, all managed by the Redux Toolkit store.

To create the user interface, [Material UI](https://mui.com/) was chosen as a dependency due to its versatility and minimalist style.

The application is fully responsive.

## Technologies used:

- Vite
- React JS
- Typescript
- React Router
- Redux Toolkit
- Firebase Authentication
- Firebase Realtime Database
- Material UI

### TODO

- Commits with: feat, fix, docs, chore, test, style, refactor
- Dummy posts: https://dummyjson.com/posts
- On click search area backspace button clear the input field (controlled value with useState)
- Connect to a database
  - Handle Error
  - Create
  - R
  - U
  - Delete
- Fix post page img UI
- Fix responsive UI
- Add author and date
- Add user authentication

  - Set firebase.ts configuration
  - Sign up
    - Handle error
  - Log in / out
    - Handle error
    - On Login allows create and edit post
    - On Login disable create and edit post
  - New Post auto fill author field (disabled for changes)
  - Fix: Disable spinner when cancel google log-in
  - Filter post by author profile
  - Only post that user created could edit
  - Only post that user created could delete
  - Me super Admin for edit and delete any post
  - Add top right close X to profile to went back to homepage
  - Add aos

- [ ] confirm on delete
- [ ] redireccionamientos en firebase hosting
- [ ] make same tests
