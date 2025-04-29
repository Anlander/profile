import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CodeSectionMobile = () => {
  const codeString = `
  export const HelloWorld = () => {
    string name = "Philip Anlander";
    bool isDeveloper = true;

    console.log("Hello, my name is " + name";

    if(isDeveloper) {
      console.log("I am a developer!");
    }
  }

  output: "Hello, my name is Philip Anlander";
  output: "I am a developer!";
  `;

  return (
    <SyntaxHighlighter language="javascript" style={oneDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};


