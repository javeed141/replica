import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import {  Copy, Check, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

import {
  Search, Sun, Sparkles, Star, Settings, Zap, Globe, Code,
  Settings2, Type, List, Square, Columns, Image, Monitor,
  CodeXml, GitBranch, MessageSquare
} from "lucide-react";
import "./App.css";
import VideosAndIframes from "./components/VideoAndIframes/VideoIframe";
// import { Search, Sun, Sparkles } from "lucide-react";
import CodeGroup from "./components/CodeGroup/CodeGroup";
import Callout from "./components/Callout/Callout";
const Introduction = () => <h2>Introduction</h2>;
const CoreConcepts = () => <h2>Core Concepts</h2>;
const Quickstart = () => <h2>Quickstart</h2>;

const sidebarSections = [
  {
    heading: "Getting Started",
    links: [
      { to: "/introduction", label: "Introduction", icon: <Star size={16} /> },
      { to: "/core-concepts", label: "Core Concepts", icon: <Settings size={16} /> },
      { to: "/quickstart", label: "Quickstart", icon: <Zap size={16} /> },
    ],
  },
  {
    heading: "Write And Publish",
    links: [
      { to: "/web-editor", label: "Web Editor", icon: <Globe size={16} /> },
      { to: "/code-editor", label: "Code Editor", icon: <Code size={16} /> },
    ],
  },
  {
    heading: "Components",
    links: [
      { to: "/headings-and-text", label: "Headings and Text", icon: <Type size={16} /> },
      { to: "/lists-and-tables", label: "Lists and Tables", icon: <List size={16} /> },
      { to: "/card", label: "Card", icon: <Square size={16} /> },
      { to: "/columns", label: "Columns", icon: <Columns size={16} /> },
      { to: "/images", label: "Images", icon: <Image size={16} /> },
      { to: "/videos-and-iframes", label: "Videos and Iframes", icon: <Monitor size={16} /> },
      { to: "/code-group", label: "Code and Groups", icon: <CodeXml size={16} /> },
      { to: "/mermaid-diagrams", label: "Mermaid Diagrams", icon: <GitBranch size={16} /> },
      { to: "/callout", label: "Callout", icon: <MessageSquare size={16} /> },
    ],
  },
];
import { AlignLeft } from "lucide-react";


function TOCSidebar() {
  const { pathname } = useLocation();
  const [copied, setCopied] = useState(false);
  const [activeId, setActiveId] = useState(null);

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
  const ITEM_HEIGHT = 30;
  const SVG_WIDTH = 14;

  // Generate SVG path based on nesting levels (h2 = x:1, h3 = x:13)
  const generateIndicatorPath = useCallback(() => {
    if (!links) return "";
    const segments = [];
    let y = 12; // starting offset

    links.forEach((link, i) => {
      const x = link.level === "h2" ? 1 : 13;
      const nextLink = links[i + 1];
      const nextX = nextLink ? (nextLink.level === "h2" ? 1 : 13) : x;

      // Top of this item
      if (i === 0) {
        segments.push(`M ${x} ${y}`);
      }

      // Line down through this item
      const midY = y + 18;
      segments.push(`L ${x} ${midY}`);

      // Transition to next item's x position
      y = midY + 12;
      if (nextLink) {
        segments.push(`L ${nextX} ${y}`);
      }
    });

    return segments.join(" ");
  }, [links]);

  // Find active section index
  const activeIndex = links ? links.findIndex((l) => l.id === activeId) : -1;

  // Intersection observer for active section tracking
  useEffect(() => {
    if (!links) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [links]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  if (!links) return null;

  const totalHeight = links.length * ITEM_HEIGHT;
  const svgPath = generateIndicatorPath();
  const activeTop = activeIndex >= 0 ? 12 + activeIndex * ITEM_HEIGHT : 0;

  return (
    <aside className="toc-sidebar">
      <div className="toc-copy-wrapper">
        <div className="toc-copy-btn-group">
          <button type="button" title="Copy page" className="toc-copy-btn" onClick={handleCopy}>
            {copied ? <Check size={15} /> : <Copy size={15} />}
            <span>{copied ? "Copied!" : "Copy page"}</span>
          </button>
          <button type="button" className="toc-copy-dropdown">
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      <div className="toc-heading">
        <AlignLeft size={16} />
        <span>On this page</span>
      </div>

      <div className="toc-scroll-wrapper">
        {/* SVG indicator with mask-based wavy line */}
        <svg
          className="toc-indicator"
          width={SVG_WIDTH}
          height={totalHeight}
          viewBox={`0 0 ${SVG_WIDTH} ${totalHeight}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", left: 0, top: 0 }}
        >
          <mask id="toc-line-mask">
            <path d={svgPath} stroke="white" strokeWidth="1" fill="none" />
          </mask>
          {/* Gray background line */}
          <rect
            width={SVG_WIDTH}
            height={totalHeight}
            fill="#dadada"
            opacity="0.8"
            mask="url(#toc-line-mask)"
          />
          {/* Active highlight */}
          <rect
            y={activeTop}
            width={SVG_WIDTH}
            height={18}
            fill="#1a1a1a"
            mask="url(#toc-line-mask)"
            style={{ transition: "y 0.3s ease-out" }}
          />
        </svg>

        <nav className="toc-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`toc-link ${link.level === "h3" ? "toc-h3" : "toc-h2"} ${
                activeId === link.id ? "toc-link-active" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <span className="logo">
          <img src="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767703565522-24h54tbc4tf-logo_light_mode.svg?auto=format%2Ccompress&w=1650&q=75" />
        </span>
        <div className="header-center">
          <div className="search-box">
            <div className="search-left">
              <Search size={16} color="#4c4b4b" />
              <span className="search-text">Search</span>
            </div>
            <span className="search-shortcut">Ctrl+K</span>
          </div>
          <button className="ask-ai-btn">
            <Sparkles size={14} />
            Ask AI
          </button>
        </div>
        <div className="header-actions">
          <span className="login-text">Login</span>
          <button className="get-started-btn">Get Started →</button>
          <Sun size={18} color="#999" />
        </div>
      </div>
      <div className="header-tabs">
        <span className="tab active-tab">Documentation</span>
        <span className="tab">Changelog</span>
        <span className="tab">Help</span>
      </div>
    </header>
  );
}

function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="sidebar">
      {sidebarSections.map((section) => (
        <div key={section.heading} className="sidebar-section">
          <p className="sidebar-heading">{section.heading}</p>
          {section.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={"sidebar-link" + (pathname === link.to ? " active" : "")}
            >
              <span className="sidebar-icon">{link.icon}</span>
             <span className="label-sidebar-text">  {link.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </aside>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/core-concepts" element={<CoreConcepts />} />
            <Route path="/quickstart" element={<Quickstart />} />
           <Route path="/videos-and-iframes" element={<VideosAndIframes />} />
            <Route path="/code-group" element={<CodeGroup />} />
            <Route path="/callout" element={<Callout />} />

            <Route path="*" element={<Navigate to="/introduction" />} />
          </Routes>
        </main>
                <TOCSidebar />
      </div>
    </BrowserRouter>
  );
}

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
//   font-family: "Inter", sans-serif;
//   color: #0f0f0f;
//   font-size: 14px;
//   margin-bottom: 50px;
//   margin-left: 40px;
// }

// /* ── Header ── */
// .header {
//   border-bottom: 1px solid #e8e8e8;
//   position: sticky;
//   top: 0;
//   background: #ffffff;
//   z-index: 10;
//   margin-bottom: 5px;
// }

// .header-top {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 18px 28px;
// }

// .logo img {
//   height: 34px;
// }

// /* ── Search + Ask AI ── */
// .header-center {
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   margin-left: 150px;
// }

// .search-box {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: 270px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   padding: 7px 12px;
//   height:35px;
// }

// .search-left {
//   display: flex;
//   align-items: center;
//   gap: 8px;
// }

// .search-text {
//   color: #999;
//   font-size: 15px;
// }

// .search-shortcut {
//   font-size: 14px;
//   background: #f3f3f3;
//   padding: 2px 8px;
//   border-radius: 4px;
//   color: #636161;
// }

// .ask-ai-btn {
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   padding: 7px 12px;
//   background: white;
//   font-size: 14px;
//   cursor: pointer;
//   color: #333;
//   height:40px;
// }

// /* ── Right Actions ── */
// .header-actions {
//   display: flex;
//   align-items: center;
//   gap: 22px;
//   margin-right: 80px;
// }

// .login-text {
//   font-size: 16px;
//   color:rgb(65, 64, 64);
// }

// .get-started-btn {
//   background: #0f0f0f;
//   color: white;
//   border: none;
//   border-radius: 20px;
//   padding: 8px 18px;
//   font-size: 15px;
//   cursor: pointer;
// }

// /* ── Tabs ── */
// .header-tabs {
//   display: flex;
//   gap: 24px;
//   padding: 0 28px 12px;
// }

// .tab {
//   font-size: 14px;
//   color: #6b6b6b;
//   cursor: pointer;
//   padding-bottom: 8px;
//   font-weight: 400;
// }

// .active-tab {
//   color: #0f0f0f;
//   font-weight: 500;
//   border-bottom: 2px solid #0f0f0f;
// }

// /* ── Layout ── */
// .layout {
//     display: flex;
//     position: fixed;
//     top: 105px;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     max-width: 1560px;
//     margin: 0 auto;
// }

// /* ── Sidebar ── */
// .sidebar {
//     width: 260px;
//     min-width: 260px;
//     border-right: 1px solid #e8e8e8;
//     padding: 24px 16px;
//     overflow-y: auto;
//     scrollbar-width: thin;
//     scrollbar-color: #eaeaea transparent;
// }

// .sidebar-heading {
//   font-size: 14px;
//   font-weight: 600;
//   color: #0f0f0f;
//   margin-bottom: 10px;
//   padding: 0 12px;
// }

// .sidebar-link {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     padding: 8px 12px;
//     font-size: 15px;
//     color: #444;
//     text-decoration: none;
//     border-radius: 6px;
//     line-height: 1.5;
// }

// .sidebar-link:hover {
//   background: #f5f5f5;
// }

// .sidebar-link.active {
//   background: #ebebeb;
//   font-weight: 500;
//   color: #0f0f0f;
// }

// .sidebar-section {
//     margin-bottom: 24px;
// }

// .sidebar-icon {
//     display: flex;
//     align-items: center;
//     color: #999;
//     flex-shrink: 0;
//     font-size: 11px;
// }

// .label-sidebar-text {
//   font-size: 13px;
// }

// .sidebar-link.active .sidebar-icon {
//     color: #0f0f0f;
// }

// /* ── Content ── */
// .content {
//     flex: 1;
//     padding: 32px 48px;
//     overflow-y: auto;
//     background-color: #ffffff;
//     scrollbar-width: none;
//     scrollbar-color: #dadada transparent;
// }


// /* ══════════════════════════════════════════════
//    Table of Contents — thin line scroll indicator
//    ══════════════════════════════════════════════ */

// .toc-sidebar {
//     width: 280px;
//     min-width: 280px;
//     margin-right: 32px;
//     padding: 40px 0;
//     display: flex;
//     flex-direction: column;
//     height: 100%;
//     background: transparent;
//       overflow: hidden;          /* add this */

// }

// /* Copy button */
// .toc-copy-wrapper {
//     margin-bottom: 20px;
// }

// .toc-copy-btn-group {
//     display: inline-flex;
//     align-items: center;
//     border: 1px solid #e5e5e5;
//     border-radius: 8px;
//     overflow: hidden;
//     background: transparent;
// }

// .toc-copy-btn {
//     display: inline-flex;
//     align-items: center;
//     gap: 8px;
//     padding: 0 14px;
//     height: 36px;
//     border: none;
//     background: transparent;
//     color: #3c3c3c;
//     font-size: 13px;
//     font-weight: 500;
//     cursor: pointer;
//     font-family: inherit;
//     transition: background 0.15s;
// }

// .toc-copy-btn:hover {
//     background: #f5f5f5;
// }

// .toc-copy-dropdown {
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     width: 34px;
//     height: 36px;
//     border: none;
//     border-left: 1px solid #e5e5e5;
//     background: transparent;
//     color: #3c3c3c;
//     cursor: pointer;
//     transition: background 0.15s;
// }

// .toc-copy-dropdown:hover {
//     background: #f5f5f5;
// }

// /* Heading */
// .toc-heading {
//     display: flex;
//     align-items: center;
//     gap: 8px;
//     font-size: 14px;
//     font-weight: 600;
//     color: #1a1a1a;
//     margin-bottom: 8px;
// }

// /* Scroll wrapper */
// .toc-scroll-wrapper {
//     position: relative;
//     flex: 1;
//     min-height: 0;
//       scrollbar-width: none;

// }

// /* Thin track line (light gray) */
// .toc-track-line {
//     position: absolute;
//     left: 0;
//     top: 0;
//     bottom: 0;
//     width: 2px;
//     background: #ebebeb;
//     border-radius: 2px;
//     z-index: 1;
//       scrollbar-width: none;

// }

// /* Thin thumb line (dark, moves with scroll) */
// .toc-thumb-line {
//     position: absolute;
//     left: 0;
//     width: 2px;
//     background: #1a1a1a;
//     border-radius: 2px;
//     z-index: 2;
//     transition: top 0.08s ease-out;
//       scrollbar-width: none;

// }

// /* Hidden native scrollbar */
// .toc-scroll-container {
//     max-height: 100%;
//     overflow-y: auto;
//     padding-left: 16px;
//     scrollbar-width: none;
//     /* -ms-overflow-style: none; */
// }

// .toc-scroll-container::-webkit-scrollbar {
//     display: none;
// }

// /* Links */
// .toc-links {
//     display: flex;
//     flex-direction: column;
// }

// .toc-link {
//     display: block;
//     font-size: 14px;
//     color: rgba(89, 89, 89, 0.9);
//     text-decoration: none;
//     padding: 7px 0;
//     transition: color 0.15s;
//     line-height: 1.4;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
// }

// .toc-link:hover {
//     color: #1a1a1a;
// }

// .toc-h2 {
//     padding-left: 0;
// }

// .toc-h3 {
//     padding-left: 12px;
// }
// .toc-sidebar::-webkit-scrollbar {
//     display: none;
// }