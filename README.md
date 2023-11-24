This repo is used to play around to understand how Apollo Client 3.8 interacts with React 18 and Next.js


Findings:
1. With React 18 and `useSuspenseQuery()`, queries are now automatically resolved during SSR
   without manually calling `getDataFromTree()`. This only starts working in Next 13. In Next 12,
   the initial HTML response will still return the Suspense fallback.

2. Currently, it's not exactly clear how and when to extract `apollo.cache` so the web-app can
   restore the already fetched data in the server side. Because of this, an already fetched data
   in SSR will be fetched again during client-side hydration.
