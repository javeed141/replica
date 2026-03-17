// Replace your TableOfContents function in App.jsx with this:

import { AlignLeft, Copy, Check, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

function TOCSidebar() {
  const { pathname } = useLocation();
  const [copied, setCopied] = useState(false);
  const scrollRef = useRef(null);
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);
  const [showThumb, setShowThumb] = useState(false);

  const tocMap = {
    "/code-group": [
      { id: "overview", label: "Overview", level: "h2" },
      { id: "using-with-web-editor", label: "Using with Web Editor", level: "h2" },
      { id: "insert-a-code-block", label: "Insert a code block", level: "h3" },
      { id: "insert-a-code-group", label: "Insert a code group", level: "h3" },
      { id: "using-with-code-editor", label: "Using with Code Editor", level: "h2" },
      { id: "single-code-block", label: "Single code block", level: "h3" },
      { id: "codegroup-with-multiple-languages", label: "CodeGroup with multiple languages", level: "h3" },
      { id: "advanced-options", label: "Advanced options", level: "h2" },
      { id: "line-highlighting", label: "Line highlighting", level: "h3" },
      { id: "line-focus", label: "Line focus", level: "h3" },
      { id: "line-numbers", label: "Line numbers", level: "h3" },
      { id: "wrap-long-lines", label: "Wrap long lines", level: "h3" },
      { id: "codegroup-options", label: "CodeGroup options", level: "h3" },
      { id: "auto-detected-tabs", label: "Auto-detected tabs", level: "h3" },
      { id: "codegroup-with-highlighting-and-focus", label: "CodeGroup with highlighting and focus", level: "h3" },
      { id: "nested-code-examples-four-backticks", label: "Nested code examples (four backticks)", level: "h3" },
      { id: "attribute-reference", label: "Attribute reference", level: "h2" },
    ],
    "/videos-and-iframes": [
      { id: "overview", label: "Overview", level: "h2" },
      { id: "using-with-web-editor", label: "Using with Web Editor", level: "h2" },
      { id: "insert-a-video-or-iframe", label: "Insert a video or iframe", level: "h3" },
      { id: "align-and-resize", label: "Align and resize", level: "h3" },
      { id: "using-with-code-editor", label: "Using with Code Editor", level: "h2" },
      { id: "video-iframe-mode", label: "<Video> (iframe mode)", level: "h3" },
      { id: "video-html5-mode", label: "<Video> (HTML5 mode)", level: "h3" },
      { id: "iframe-component", label: "<Iframe> component", level: "h3" },
      { id: "advanced-options", label: "Advanced options", level: "h2" },
      { id: "platform-support", label: "Platform support", level: "h3" },
      { id: "accessibility", label: "Accessibility and layout", level: "h3" },
      { id: "security", label: "Security considerations", level: "h3" },
    ],
    "/callout": [
      { id: "overview", label: "Overview", level: "h2" },
      { id: "using-with-web-editor", label: "Using with Web Editor", level: "h2" },
      { id: "using-with-code-editor", label: "Using with Code Editor", level: "h2" },
      { id: "attributes", label: "Attributes", level: "h2" },
      { id: "advanced-options", label: "Advanced options", level: "h2" },
    ],
  };

  const links = tocMap[pathname];

  const updateThumb = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    if (scrollHeight <= clientHeight) {
      setShowThumb(false);
      return;
    }
    setShowThumb(true);
    const ratio = clientHeight / scrollHeight;
    const h = Math.max(ratio * clientHeight, 28);
    const maxTop = clientHeight - h;
    const top = (scrollTop / (scrollHeight - clientHeight)) * maxTop;
    setThumbHeight(h);
    setThumbTop(top);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateThumb();
    el.addEventListener("scroll", updateThumb, { passive: true });
    window.addEventListener("resize", updateThumb);
    return () => {
      el.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, [links, updateThumb]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  if (!links) return null;

  return (
    <aside className="toc-sidebar">
      {/* Copy page button */}
      <div className="toc-copy-wrapper">
        <div className="toc-copy-btn-group">
          <button
            type="button"
            title="Copy page"
            className="toc-copy-btn"
            onClick={handleCopy}
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            <span>{copied ? "Copied!" : "Copy page"}</span>
          </button>
          <button type="button" className="toc-copy-dropdown">
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* On this page heading */}
      <div className="toc-heading">
        <AlignLeft size={16} />
        <span>On this page</span>
      </div>

      {/* Scrollable TOC with thin line indicator */}
      <div className="toc-scroll-wrapper">
        {/* Track line (light gray background) */}
        <div className="toc-track-line" />

        {/* Thumb line (dark, moves with scroll) */}
        {showThumb && (
          <div
            className="toc-thumb-line"
            style={{
              top: thumbTop,
              height: thumbHeight,
            }}
          />
        )}

        {/* Scroll container — native scrollbar hidden */}
        <div className="toc-scroll-container" ref={scrollRef}>
          <nav className="toc-links">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`toc-link ${link.level === "h3" ? "toc-h3" : "toc-h2"}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}