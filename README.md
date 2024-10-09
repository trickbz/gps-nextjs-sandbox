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
- [ ] API: convert snake case to camel case
- [x] real DB and ORM (Prisma?)
- [ ] OAuth

## Local developmentt
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
  - connect to db using any db client (e.g. Database Client vscode extention or DBeaver)
    - db name: bands_next
    - db user: postgres
    - db pwd : postgres

## Migration usage TODO
