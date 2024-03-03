# Atinotes

Read more on https://notes.atinux.com

[![Nuxt UI Pro](https://img.shields.io/badge/Made%20with-Nuxt%20UI%20Pro-00DC82?logo=nuxt.js&labelColor=020420)](https://ui.nuxt.com/pro)

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

Copy the `.env.example` to `.env` and update the variables to your own.

## Production

Note that you need a [Nuxt UI Pro license](https://ui.nuxt.com/pro) to build the application for production.

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deploy

### With NuxtHub

You can deploy this template directy on your CloudFlare account with zero configuration with the [NuxtHub Console](https://console.hub.nuxt.com) and get a free `.nuxt.dev` domain.

```bash
npx nuxthub deploy
```

Once deployed, you can manage your project by running:

```bash
npx nuxthub manage
```

Then add the following environement variables:

```
ADMIN_PASSWORD=<your-password>
NUXT_SESSION_PASSWORD=<a-32-characters-long-password>
NUXT_UI_PRO_LICENSE=<your-license>
```

Once saved, the deployment will be updated with the new environment variables.

### Manually on Cloudflare Pages

Once you created your GitHub repository with this template, you can connect to it, then add those env variables:

```
ADMIN_PASSWORD=<your-password>
NUXT_SESSION_PASSWORD=<a-32-characters-long-password>
NUXT_UI_PRO_LICENSE=<your-license>
```

Then, setup the build command on CloudFlare Pages to be:

```bash
nuxt build
```

The output directory is: `dist/`

Next, you need to link a KV namespace to the deployment, the binding should be named `KV`.

![KV example on CloudFlare](https://github.com/Atinux/atinotes/assets/904724/3c35a422-b646-41b9-9337-cc7de06f0d14)

That's all :sparkles:

## License

[MIT](./LICENSE) - Sébastien Chopin
