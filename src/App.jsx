import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
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

function TableOfContents() {
  const { pathname } = useLocation();

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
  if (!links) return null;

  return (
    <aside className="toc-sidebar">
      <div className="toc-heading">
    <div>
            <button type="button" title="Copy page" class="inline-flex items-center border-r border-border-muted text-heading hover:bg-accent/70 gap-2 pl-3 pr-3 h-9 hover:text-heading transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy size-4" aria-hidden="true"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg><span class="text-[13px] font-medium">Copy page</span></button>

      </div>
         <br />
        <AlignLeft size={16} />
        <span>On this page</span>
      </div>
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
                <TableOfContents />

      </div>
    </BrowserRouter>
  );
}