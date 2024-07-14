import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopyBtn from '../../buttons/copyButton';

const CodeSection = ({code , lang}) => {
  return (
    <div style={{maxWidth:"900px",position:"relative",left:"45vw",transform : "translateX(-52%)"}}>
      <CopyBtn val={code}/>
        <SyntaxHighlighter language={lang} style={atomDark}>
          {code}
        </SyntaxHighlighter>
    </div>
  );
};

export default CodeSection;


