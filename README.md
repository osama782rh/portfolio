# Portfolio — Osama Rahim

Portfolio personnel développé en React / TypeScript, déployé sur Cloudflare Pages.

## Stack

- **React 18** + **TypeScript**
- **Vite** (bundler, SWC)
- **Tailwind CSS** + **shadcn/ui**
- **Framer Motion** (animations)
- **Lenis** (smooth scroll)
- **EmailJS** (formulaire de contact)
- **Sonner** (toasts)
- **Vitest** + **Testing Library** (tests)

## Installation

```sh
git clone https://github.com/osama782rh/senior-vision-portfolio.git
cd senior-vision-portfolio
npm install
```

## Variables d'environnement

Copie `.env.example` en `.env` et renseigne tes clés :

```sh
cp .env.example .env
```

```env
VITE_CONTACT_EMAIL=osama.rahim@outlook.fr
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

## Développement

```sh
npm run dev
```

## Tests

```sh
npm run test
```

## Build

```sh
npm run build
```

Le dossier `dist/` contient le site statique prêt à déployer.

## Déploiement (Cloudflare Pages)

| Champ | Valeur |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |

Les variables d'environnement `VITE_*` sont à configurer dans **Settings → Environment variables** du projet Cloudflare Pages.

## Contact

[osama.rahim@outlook.fr](mailto:osama.rahim@outlook.fr) · [LinkedIn](https://linkedin.com/in/osama-rahim) · [GitHub](https://github.com/osama782rh)
