import { useEffect, useState, useRef } from "react";
import { codeToHtml } from "shiki";
import { Copy, Check } from "lucide-react";
import "./index.css";

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
    <div className="shiki-block">
      <button className="shiki-copy-btn" onClick={handleCopy}>
        {copied ? <Check size={14} /> : <Copy size={14} />}
      </button>
      <div
        ref={codeRef}
        className={`shiki-content ${wrap ? "shiki-wrap" : ""}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};

export default ShikiCodeBlock;