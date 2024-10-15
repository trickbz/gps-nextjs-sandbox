# Bands catalogue

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## TODO

- [x] Auth - login, logout, forgot password, register, route group already created
- [x] Global not found page
- [ ] use getStaticProps for sandbox page
- [ ] sort out the issue that sandbox page is not generated right after build
- [ ] prettier Tailwind plugin to sort classes, @apply and @layer Tailwind directive to combine classes, JIT mode
- [x] move prettier settings from settings.json to .pretierrc
- [ ] integrate recoil. Recoil dev tola. Async selectors. Suspense error boundary. 
- [ ] SOLID
- [ ] Mono repository. Update skills. 
- [x] API: convert snake case to camel case
- [x] real DB and ORM (Prisma?)
- [ ] OAuth
- [ ] Breadcrumbs
- [ ] App icon (tab)
- [ ] SEO data (metadata)
- [x] Logger service to use console.log, console.error in one place only

## Local development

- clone repository
- npm i
- make sure docker is running
- create .env file with `DATABASE_URL` like `postgresql://postgres:postgres@localhost:5432/bands_next?schema=public`
- `docker-compose -f ./docker-compose.dev.yaml up -d`, this will deploy to docker
  - postgres DB (port 5432)
  - nginx (port 8080, to emulate image hosting platform with images accessible by URLs)
  - adminer (small tool to manage DB, port 4040)
  - create db structure by applying migrations: `npx prisma migrate deploy`
  - seed db with test data `npm run seed`
  - connect to db using any db client (e.g. Database Client vscode extension or DBeaver)
    - db name: bands_next
    - db user: postgres
    - db pwd : postgres

## DB migration usage (local development)

- change the scheme
- format schema if required: `npx prisma format`
- delete migrations folder: `/prisma/migrations`
- kill Docker containers with db and friend, compose down in docker extension
- deploy docker container again: `docker-compose -f <path to compose file> up -d` (d - daemon, don't block the console, detached)
- create a new migration: `npx prisma migrate dev --name init` (init - any name, migration will be created in migration folder, it will recreate Prisma client as well)
- clear and seed the db: `npm run seed`
- check that your changes in schema are correct
- if you change the seed data, you should run `npm run seed` again. But remember, that IDs are auto-generated, and e.g. if you are on the page of some member, and you refresh the page, it will call with not expected id. So go to the bands page and use lins to navigate to the band member with correct id.

## Data access layers

- BE > repository: access DB via ORM (e.g. Prisma) or other low level APIs and external services, atomic
- BE > service: user one or several services implementing business logic
- BE > API route: use services, provides REST / GraphQL endpoints for FE
- FE > hook: like a service for FE, encapsulate logic of fetching API endpoints and providing data for components
- FE > recoil: state management, can be used alone (including API calls in selectors, as alternative) or together with hooks
