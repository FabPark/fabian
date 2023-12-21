// import Link from 'next/link'
// import { compareDesc, format, parseISO } from 'date-fns'
// import { allPosts, Post } from 'contentlayer/generated'

// function PostCard(post: Post) {
//   return (
//     <div className="mb-8">
//       <h2 className="mb-1 text-xl">
//         <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
//           {post.title}
//         </Link>
//       </h2>
//       <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
//         {format(parseISO(post.date), 'LLLL d, yyyy')}
//       </time>
//       <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
//     </div>
//   )
// }

// export default function Blog() {
//   const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

//   return (
//     <div className="mx-auto max-w-xl py-8">
//       <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
//       {posts.map((post, idx) => (
//         <PostCard key={idx} {...post} />
//       ))}
//     </div>
//   )
// }

// import Link from "next/link";
// import { compareDesc, format, parseISO } from "date-fns";
// import { allPosts, Post } from "contentlayer/generated";
// import { getMDXComponent } from "next-contentlayer/hooks";

// function PostCard(post: Post) {
//   const Content = getMDXComponent(post.body.code);

//   return (
//     <div className="mb-8">
//       <h2 className="text-xl">
//         {/* <Link
//           href={post.url}
//           className="text-blue-700 hover:text-blue-900"
//           legacyBehavior>
//           {post.title}
//         </Link> */}
//         {post.title}
//       </h2>
//       <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
//         {format(parseISO(post.date), "LLLL d, yyyy")}
//       </time>
//       <div className="text-sm">
//         <Content />
//       </div>
//     </div>
//   );
// }

// export default function Home() {
//   const posts = allPosts.sort((a, b) =>
//     compareDesc(new Date(a.date), new Date(b.date))
//   );

//   return (
//     <div className="max-w-xl py-8 mx-auto">
//       <h1 className="mb-8 text-3xl font-bold text-center">Next.js Example</h1>

//       {posts.map((post, idx) => (
//         <PostCard key={idx} {...post} />
//       ))}
//     </div>
//   );
// }

import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
