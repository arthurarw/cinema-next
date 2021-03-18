This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About the Project

I created this simple project for learning purposes. This project basically consumes the [TMDB API](https://www.themoviedb.org/documentation/api) and shows the featured films, makes a simple search and visualizes basic information of the selected film. The style is simple because the intention was to work on Next.js.

## Getting Started

First, open this website: [TMDB API](https://www.themoviedb.org/documentation/api), create an account and generate the api key.

Second, in the `lib/tmdb_example.js`, rename to `tmdb.js` and put your key:
`export const apiKey = "YOUR API KEY";`

After the steps above, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
