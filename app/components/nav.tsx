'use client';



export default function Navbar() {
  // const pathname = usePathname()
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">

        <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav">
          <div className="flex flex-row space-x-0 pr-10">
            <a className=
              "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle [object Object]"
              href="/">
              <span className="relative py-1 px-2">Home</span></a>
            <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle [object Object]" 
            href="/projects">
              <span className="relative py-1 px-2">Projects</span></a>
            <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle [object Object]" 
            href="/blog">
              <span className="relative py-1 px-2">Blog</span></a>
            <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle [object Object]" 
            href="/resume">
              <span className="relative py-1 px-2">Resume</span></a>
          </div>
        </nav>

      </div>
    </aside>
  )
}

