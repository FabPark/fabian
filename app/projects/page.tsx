import Link from 'next/link';

export default function Home() {
  return (
    <section>
       <h1 className="font-medium text-2xl mb-8 tracking-tighter">Check out my projects!</h1>
       <div className="prose prose-neutral dark:prose-invert">
        <p>
        Explore my latest projects at the top, and scroll down to discover my earlier works!
        </p>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
        <Link href="https://sr-hegc.onrender.com/" target="_blank">MERN stack project</Link></h2>
        <p>
        SR makes navigating Suwon's dining scene a breeze with English information!
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
            <Link href="https://659f893c51c19c00098772cb--teal-starlight-5a49a5.netlify.app/#/" target="_blank">Netflix-like website</Link></h2> 
            <p>
        Explore everything about the hottest and newest movie releases!
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
        <Link href="https://codepen.io/fabtaco/pen/bGwGLrJ" target="_blank">Survey Form</Link></h2> 
        <p>
        Coke or Pepsi?
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
        <Link href="https://codepen.io/fabtaco/pen/rNLompx" target="_blank">Tribute Page</Link></h2> 
        <p>
        Huge fan of Anthony Boudain
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <p>
       
I'm currently revamping old projects and diving into new ones.
Hoping to join a team for larger projects soon.
In the meantime, I'll keep crafting side projects. Thanks for dropping by!
        </p> 
        </div>
    </section>
  );
}

// <section>
//   <h1 class="font-medium text-2xl mb-8 tracking-tighter">read my blog</h1>
//   <a class="flex flex-col space-y-1 mb-4" href="https://sr-hegc.onrender.com/">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         MERN Stack App
//       </p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/using-nextjs">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Why I'm Using Next.js
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">78,054 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/product-engineers">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Product and Platform Engineers
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">18,491 views</p>
//     </div>
//   </a>
//   <a
//     class="flex flex-col space-y-1 mb-4"
//     href="/blog/make-something-developers-want"
//   >
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Make Something Developers Want
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">10,528 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/community-messaging-fit">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Community-Messaging Fit
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">66,195 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/funding-open-source">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Funding Open Source
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">24,423 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/backend">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         2023 State of Databases for Serverless &amp; Edge
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">67,154 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/react-frameworks">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Why You Should Use a React Framework
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">26,362 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/javascript">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Why I'm Optimistic About JavaScript's Future
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">23,031 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/nextjs-conf-2022-recap">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Behind the scenes: Next.js Conf 2022
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">4,901 views</p>
//     </div>
//   </a>
//   <a
//     class="flex flex-col space-y-1 mb-4"
//     href="/blog/developer-experience-examples"
//   >
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         What Makes a Great Developer Experience?
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">33,659 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/heroku">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         The Story of Heroku
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">38,922 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/devrel-at-vercel">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         What is Developer Relations?
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">8,607 views</p>
//     </div>
//   </a>
//   <a
//     class="flex flex-col space-y-1 mb-4"
//     href="/blog/image-gallery-supabase-tailwind-nextjs"
//   >
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Building an Image Gallery with Next.js, Supabase, and Tailwind CSS
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">27,073 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/fundamentals-of-video">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Developer's Guide to Video Production: Fundamentals of Video
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">4,315 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/rust">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Rust Is The Future of JavaScript Infrastructure
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">296,197 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/mysql-planetscale">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         From Firebase/Redis to MySQL with PlanetScale
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">15,359 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/career">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         How I Became a Software Engineer (From Designer to Developer)
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">7,598 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/serverless-redis-nextjs">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Using Serverless Redis with Next.js
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">18,535 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/react-state-management">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Past, Present, and Future of React State Management
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">156,500 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/fonts">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Web Fonts in 2021
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">19,572 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/css-with-react">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         How Should I Style My React Application?
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">16,464 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/spotify-api-nextjs">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Using the Spotify API with Next.js
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">19,834 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/nextjs-sitemap-robots">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Create a Dynamic Sitemap with Next.js
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">57,382 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/mailchimp-next-js">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Create A Newsletter with Next.js API Routes and Mailchimp
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">20,431 views</p>
//     </div>
//   </a>
//   <a class="flex flex-col space-y-1 mb-4" href="/blog/real-time-post-views">
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Real-Time Blog Post Views With Next.js and Firebase
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">16,929 views</p>
//     </div>
//   </a>
//   <a
//     class="flex flex-col space-y-1 mb-4"
//     href="/blog/style-guides-component-libraries-design-systems"
//   >
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Everything I Know About Style Guides, Design Systems, and Component
//         Libraries
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">189,720 views</p>
//     </div>
//   </a>
//   <a
//     class="flex flex-col space-y-1 mb-4"
//     href="/blog/nextjs-firebase-serverless"
//   >
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Using Firebase with Next.js
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">36,820 views</p>
//     </div>
//   </a>
//   <a
//     class="flex flex-col space-y-1 mb-4"
//     href="/blog/how-to-print-in-react-using-iframes"
//   >
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         How To Print in React Using Iframes
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">24,926 views</p>
//     </div>
//   </a>
//   <a
//     class="flex flex-col space-y-1 mb-4"
//     href="/blog/turborepo-design-system-monorepo"
//   >
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Building a Design System Monorepo with Turborepo
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">92,806 views</p>
//     </div>
//   </a>
//   <a
//     class="flex flex-col space-y-1 mb-4"
//     href="/blog/technical-recruiting-is-broken"
//   >
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Technical Recruiting is Broken
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">16,833 views</p>
//     </div>
//   </a>
//   <a
//     class="flex flex-col space-y-1 mb-4"
//     href="/blog/things-ive-learned-building-nextjs-apps"
//   >
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Things I've Learned Building Next.js Apps
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">33,878 views</p>
//     </div>
//   </a>
//   <a
//     class="flex flex-col space-y-1 mb-4"
//     href="/blog/how-stripe-designs-beautiful-websites"
//   >
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         How Stripe Designs Beautiful Websites
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">95,323 views</p>
//     </div>
//   </a>
//   <a
//     class="flex flex-col space-y-1 mb-4"
//     href="/blog/loading-placeholder-with-sass"
//   >
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Creating a Loading Placeholder with Sass
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">17,525 views</p>
//     </div>
//   </a>
//   <a
//     class="flex flex-col space-y-1 mb-4"
//     href="/blog/beginners-guide-to-the-programming-portfolio"
//   >
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Programming Portfolios
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">12,767 views</p>
//     </div>
//   </a>
//   <a
//     class="flex flex-col space-y-1 mb-4"
//     href="/blog/space-invaders-with-python"
//   >
//     <div class="w-full flex flex-col">
//       <p class="text-neutral-900 dark:text-neutral-100 tracking-tight">
//         Creating a Space Invaders Clone with Python
//       </p>
//       <p class="text-neutral-600 dark:text-neutral-400">20,976 views</p>
//     </div>
//   </a>
// </section>;
