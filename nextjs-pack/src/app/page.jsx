import SwitchTheme from "@/components/switchTheme"
import { blocGroups } from "@/data/blocks"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="fixed top-0 right-4 w-20 flex justify-end py-4 px-4">
        <SwitchTheme />
      </div>
      <section>
        {
          blocGroups.map(blockGroup => (
            <div key={blockGroup.id} className="mx-auto max-w-7xl py-10 px-5 space-y-10">
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {blockGroup.title}
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 children:p-6 children:rounded-md children:bg-gray-100 dark:children:bg-gray-900 children:border children:border-gray-200 dark:children:border-gray-800 text-gray-800 dark:text-gray-200">
                {
                  blockGroup.items.map(item => (
                    <Link key={item.id} href={item.link}>
                      {item.title}
                    </Link>
                  ))
                }
              </div>
            </div>
          ))
        }
      </section>
    </>
  )
}
