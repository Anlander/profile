import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, tomorrow   } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const CodeSection = () => {
  const codeString = `
  export const HelloWorld = () => {
    string name = "Philip Anlander";
    int age = 30;
    string location = "Sweden";
    bool isDeveloper = true;
    console.log("Hello, my name is " + name";
    console.log("I am " + age + " years old and I live in " + location);

    if(isDeveloper) {
      console.log("I am a developer!");
    }
  }
  `;


  const codeString2 = `
    output: "Hello, my name is Philip Anlander";
    output: "I am 30 years old and I live in Sweden";
    output: "I am a developer!";
  `; 
  return (
    <div className="grid grid-cols-2 w-full gap-2">
      <SyntaxHighlighter language="javascript" style={tomorrow}>
        {codeString}
      </SyntaxHighlighter>

      <SyntaxHighlighter language="javascript" style={oneDark}>
        {codeString2}
      </SyntaxHighlighter>
    </div>
  );
};


