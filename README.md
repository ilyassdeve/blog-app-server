## The Backend Service For my blog application

check out the frontend Build

[frontend-build]('https://next-blog-app-dusky.vercel.app/')

to start the Application

```
git clone https://github.com/wissamboukhaimadev/blog-app-backend.git

cd blog-app-backend && yarn
```

Befor you start the application make sure to create a **.env** file and provide the **DATABASE_URL** with the postgresql database connection link

After you provide **DATABASE_URL** env run this commands

```
yarn prisma migrate dev
yarn prisma generate

yarn start:dev
```

end
