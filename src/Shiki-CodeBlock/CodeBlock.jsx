import { useEffect, useState, useRef } from "react";
import { codeToHtml } from "shiki";
import { Copy, Check } from "lucide-react";
import styled from "styled-components";

export const ShikiBlock = styled.div`
  position: relative;
  margin: 16px 0;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid #eaeaea;
  background-color: #fff;
`;

const ShikiCopyBtn = styled.button`
  position: absolute;
  right: 4px;
  top: 4px;
  padding: 4px;
  margin: 4px;
  border: none;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  color: #666;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f1f1f1;
    color: #0f0f0f;
  }
`;

const ShikiContent = styled.div`
  pre {
    background: transparent !important;
    margin: 0;
    padding: 14px 16px;
    font-size: 14px;
    line-height: 24px;
    font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: #eaeaea transparent;

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
  }

  pre code {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    background: none !important;
    padding: 0;
    border-radius: 0;
    color: inherit;
  }

  .line {
    display: block;
  }

  ${({ $wrap }) =>
    $wrap &&
    `
    pre {
      white-space: pre-wrap !important;
      word-break: break-word !important;
      overflow-x: hidden !important;
      scrollbar-width: none !important;
    }
    pre::-webkit-scrollbar {
      display: none;
    }
  `}
`;

const ShikiCodeBlock = ({ code, language = "javascript", wrap = false }) => {
  const [html, setHtml] = useState("");
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  useEffect(() => {
    const highlight = async () => {
      try {
        const trimmedCode = code.replace(/\n+$/, "");
        const result = await codeToHtml(trimmedCode, {
          lang: language,
          theme: "github-light-default",
        });
        // Remove \n between .line spans to prevent double line breaks
        // when .line is display:block
        const cleaned = result.replace(/<\/span>\n<span class="line"/g, '</span><span class="line"');
        setHtml(cleaned);
      } catch (err) {
        const escaped = code
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
        setHtml(`<pre><code>${escaped}</code></pre>`);
      }
    };
    highlight();
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ShikiBlock>
      <ShikiCopyBtn onClick={handleCopy}>
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </ShikiCopyBtn>
      <ShikiContent
        ref={codeRef}
        $wrap={wrap}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </ShikiBlock>
  );
};

export default ShikiCodeBlock;
