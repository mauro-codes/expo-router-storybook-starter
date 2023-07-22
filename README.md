# Storybook with Expo Router v2, SDK 49 & TypeScript

- Working starter template that uses [`expo-router v2`](https://expo.github.io/router) to build native navigation using files in the `app/` directory.
- It includes Storybook Web & Native configured with a few stories using TypeScript.
- You can update the .env file to disable or enable storybook on your app.
- It uses new features like Path Aliases, Opt out from package version validation, and client environment variables.

## 🚀 How to use

```sh
npm install

# Run on native
npm start

# Run on web
npm run storybook:web
```

If you want to disable storybook to work on your app, update the `.env` file like this:

```diff
EXPO_PUBLIC_STORYBOOK_ENABLED=false
```

You can learn more in these articles I wrote for this starter

- [Using Storybook with Expo Router v2, SDK 49 & TypeScript](https://blog.spirokit.com/using-storybook-with-expo-router-v2-sdk-49-typescript)
- [Setting Up Storybook Web and Native with Expo Router v2, SDK 49, and TypeScript](https://blog.spirokit.com/setting-up-storybook-web-and-native-with-expo-router-v2-sdk-49-and-typescript)

## 📝 Notes

- [Expo Router: Docs](https://expo.github.io/router)
- [Expo Router: Repo](https://github.com/expo/router)
- [Storybook](https://storybook.js.org/)

## Shout-out

- [oxeltra_beton](https://twitter.com/oxeltrabeton) for give me the idea to combine Storybook, Expo Router v2, and SDK 49 and write about it.
- [Daniel Williams](https://twitter.com/Danny_H_W) for all his contributions to the React Native and Storybook communities.
