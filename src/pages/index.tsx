import { Inter } from 'next/font/google'
import { QueryComponent } from '~/components/QueryComponent'
import { SuspenseQueryComponent } from '~/components/SuspenseQueryComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col gap-8 p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/pages/index.tsx</code>
        </p>


      </div>
        <h3 className="text-xl font-bold">Components with useSuspenseQuery()</h3>
        <div>
          {/* The data for this component will already be fetched on server side
           * and the initial HTML response will include the data in the UI.
           * No manual getDataFromTree() required, it's automatically done by the new React Suspense SSR support.
           * We would still need to manually extract and initialize apolloClient cache for it to resume from the
           * server-side cache though.
           * 
           * Note that eventhough they are nested and cause waterfall during SSR,
           * they will all still be resolved by the time the initial HTML response is sent completely.
          */}
          <SuspenseQueryComponent>
            <SuspenseQueryComponent>
              <SuspenseQueryComponent />
            </SuspenseQueryComponent>
          </SuspenseQueryComponent>
        </div>

        <h3 className="text-xl font-bold">Components with useQuery()</h3>
        <div>
          {/* These will only be fetched in the client-side because 
           * we are not doing getDataFromTree().
          */}
          <QueryComponent>
            <QueryComponent>
              <QueryComponent />
            </QueryComponent>
          </QueryComponent>
        </div>
    </main>
  )
}
