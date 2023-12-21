// import { defineDocumentType, makeSource } from "contentlayer/source-files"
 
// export const Post = defineDocumentType(() => ({
//   // The name of the document type
//   name: "Post",
 
//   // The type of the files to parse. 'md' also works
//   contentType: "mdx",
 
//   // The path of the mdx files, relative to contentDirPath
//   filePathPattern: "app/content/posts/**/*.mdx",
//   filePathPattern: "posts/*.mdx",
//   filePathPattern: "content/posts/**/*.mdx",

//   // Fields present in the frontmatter of the MDX file
//   fields: {
//     title: { type: "string", required: true },
//     published: { type: "string", required: true },
//     description: { type: "string" },
//     status: {
//       type: "enum",
//       options: ["draft", "published"],
//       required: true,
//     },
//   },
// }))
 
// export default makeSource({
//   contentDirPath: "content",
//   documentTypes: [Post],
// })

import { defineDocumentType, makeSource } from "contentlayer/source-files"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Post = defineDocumentType(() => ({
  name: "Post",
  // filePathPattern: `app/content/posts/**/*.mdx`,
  filePathPattern: "posts/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
  },
  computedFields,
}))


export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
})