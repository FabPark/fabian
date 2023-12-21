// import React, { ReactNode } from 'react';
import Image from "next/image"
import { useMDXComponent, getMDXComponent } from "next-contentlayer/hooks"
// import { highlight } from 'sugar-high';
// import { MDXProvider } from '@mdx-js/react';

const components = {
  Image,
}

interface MdxProps {
  code: string
}

// interface CodeProps {
//   children: ReactNode;
//   // 
// }



// export function Code({ children, ...props }: CodeProps) {
//   let codeHTML = highlight(children as string);
//   return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
// }
// function Code({ children, ...props }) {
//     let codeHTML = highlight(children);
//     return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
// }

// go back to this?
// let components = {
//   Image,
//   code: Code, 
// }

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component component={components} />
}

// //test
// const defaultComponents = {
//   Image,
//   // 
// };

// export function Mdx({ code }: MdxProps) {
//   const Component = useMDXComponent(code);

// 
//   const components = {
//     ...defaultComponents,
//     code: Code,
//   };

//   return <Component components={components} />;
// }