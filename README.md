# Hikaru Suzuki — Portfolio

A responsive Next.js and TypeScript portfolio with career history, project filtering, downloadable CV, light/dark themes, and a contact form.

## Development

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Run `npm run lint`, `npx tsc --noEmit`, and `npm run build` before shipping.

## Content

- `src/components/about/Data.tsx`: personal details, experience, education, and skills.
- `src/components/projects/ProjectData.tsx`: project descriptions, technologies, and public repository links.
- `CV.pdf`: supplied source CV. Copy updated versions to `public/CV.pdf` for the download link.
- `src/app/globals.css`: the original responsive styles and theme tokens.

## Contact form

Create `.env.local` using `.env.example`. Use a Gmail app password for `APP_PASS`, and set `EMAIL` to the destination inbox. Never commit credentials.

The API validates input, sends plain-text messages from the authenticated mailbox, and sets the visitor as `Reply-To`. Missing configuration returns an explicit unavailable message. Direct email and phone links remain available on the contact page.

The homepage is `/`, the project archive is `/projects`, and the contact page is `/contact`.
