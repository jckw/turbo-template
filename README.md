# Turborepo Template

> A [Turborepo](https://turbo.build/) for easy web and native applications.

## Repo set up

This Turborepo includes the following packages/apps:

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `@repo/ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/app`: shared features and utils used by both `web` and `native` applications

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tamagui, but only core](https://tamagui.dev/) for build a completely custom UI
  component library
- [Firebase](https://firebase.google.com/) for authentication
- [Solito](https://solito.dev/) for unified navigation
- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting

### Features

This is mainly a demo repo that includes some of the features that are usually a bit
painful to get working. These include:

- [x] Custom fonts in both apps
- [x] Deployment via a stateless Docker container (Fly.io) so you can be Vercel-free if you
      need to be (e.g. for HIPAA compliance)
- [x] Environment variables configurable with `.env` files, and the ability to run any
      command in any environment
- [x] Styleable cross-platform SVG icons

## Development

### Getting started

Start by cloning this repo and creating a `.env` file in the root of the repo. You can
copy the `.env.example` file to get started.

Next, install the dependencies and start the apps:

```sh
yarn install
yarn dev
```

This will start the `web` and `native` apps using the `.env` file.

### Adding new environment variables

Adding new environment variables currently involves changing values in a few places.

1. Add the variable to the `.env` file in the root of the repo, and add it to the
   `.env.example` file.
2. That's it! `deploy.sh` (for Next.js) and Babel (for Expo) will automatically pick up
   the new variable and make it available in the app if it matches the relevant prefix
   and is available in the environment from which the build was run.

## Deployment

If you plan on building the app locally, make sure you have dotenvx installed:

```sh
npm install @dotenvx/dotenvx -g
```

### Web (Next.js)

You can easily deploy this repo with Docker.

To test building the image, run the following command, although you will need to set
some build secrets in the docker command for it to work properly:

```sh
dotenvx run -- bash -c 'docker build --secret id=NEXT_PUBLIC_WHATEVER,env=your-secret . -t outro-turbo-web -f apps/web/Dockerfile'
```

You can deploy an image that is built locally (and e.g. uses the production env file) to
Fly.io very straightforwardly using:

```sh
dotenvx run --env-file=./.env.production -- sh deploy.sh
```

Note: you will need to enable "Allow the default Docker socket to be used (requires
password)" setting in Docker Desktop's 'Advanced' settings.

### Native (Expo)

You'll need the EAS CLI installed to deploy the native app. You can install it with:

```sh
npm install -g eas-cli
```

To deploy the native app, run the following command:

```sh
eas build --platform ios
```
