import { highlight } from 'sugar-high';
import { ReactNode } from 'react';

interface CodeProps {
 children: ReactNode;
 // ... any other props you expect
}

function Code({ children, ...props }: CodeProps) {
 let codeHTML = highlight(children as string); // Assuming children is a string
 return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}
