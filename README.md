# Atinotes

Read more on https://atinotes.pages.dev

https://user-images.githubusercontent.com/904724/217890680-279977de-491c-4af0-bd92-3576a4770270.mp4

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deployment on Cloudflare Pages

Once you created your GitHub repository with this template, you can connect to it, then add those env variables:

```
NODE_VERSION=18
NPM_FLAGS=--version
PASSWORD=<your-password>
```

Then, setup the build command on CloudFlare Pages to be:

```bash
npx pnpm i --store=node_modules/.pnpm-store && npm run build
```

This will use `pnpm` to install dependencies and build the application.

The output directory is: `dist/`

That's all :sparkles:

## License

[MIT](./LICENSE) - Sébastien Chopin