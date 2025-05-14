import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface Props {
  title?: string;
}

export const CodeCard = ({ title }: Props) => {
  const codeString = `
    var project = "${title}" 
      if(!title) {
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


