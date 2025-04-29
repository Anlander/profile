import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface Props {
  title?: string;
  description?: string;
  website?: string;
  content?: string;
  id: number;
  cms?: string;
  code: string;
  db?: string;
  frame?: string;
}

export const CodeCard = ({title, description, website, content, cms, code, db, frame}: Props) => {
  const codeString = `
    string projectName = ${title} 
      if(title.isStringOrNull()) {
        return null;
      }
     return projectName;
    `;

  return (
    <SyntaxHighlighter language="javascript" style={tomorrow}>
      {codeString}
    </SyntaxHighlighter>
  );
};


