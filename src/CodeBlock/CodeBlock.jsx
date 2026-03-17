import { Highlight, themes } from "prism-react-renderer";
import { Copy } from "lucide-react";

const CodeBlock = ({ code, language = "javascript" }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="code-block">
      <button className="copy-btn" onClick={handleCopy}>
      </button>
      <Highlight theme={themes.github} code={code} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
<pre style={{
  ...style,
  background: "transparent",
  margin: 0,
  padding: "16px 20px",
  fontFamily: '"JetBrains Mono", ui-monospace, SFMono-Regular, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSize: '14px',
  lineHeight: '24px',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word'
}}>           {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;