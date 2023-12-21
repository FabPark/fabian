// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  // The name of the document type
  name: "Post",
  // The type of the files to parse. 'md' also works
  contentType: "mdx",
  // The path of the mdx files, relative to contentDirPath
  filePathPattern: "posts/*.mdx",
  // Fields present in the frontmatter of the MDX file
  fields: {
    title: { type: "string", required: true },
    published: { type: "string", required: true },
    description: { type: "string" },
    status: {
      type: "enum",
      options: ["draft", "published"],
      required: true
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PXUBX3VY.mjs.map
