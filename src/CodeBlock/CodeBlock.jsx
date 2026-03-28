import { Highlight, themes } from "prism-react-renderer";
import styled from "styled-components";

const CodeBlockWrapper = styled.div`
  position: relative;
  background-color: #f6f6f4;
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
`;

const CopyBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #6b7280;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
    color: #374151;
  }
`;

const CodeBlockPre = styled.pre`
  background: transparent;
  margin: 0;
  padding: 16px 20px;
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size: 14px;
  line-height: 24px;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: #c1c1bd transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c1c1bd;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #a1a19a;
  }
`;

const CodeBlock = ({ code, language = "javascript" }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <CodeBlockWrapper>
      <CopyBtn onClick={handleCopy} />
      <Highlight theme={themes.github} code={code} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <CodeBlockPre style={{ color: style.color }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </CodeBlockPre>
        )}
      </Highlight>
    </CodeBlockWrapper>
  );
};

export default CodeBlock;
