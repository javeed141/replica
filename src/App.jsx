import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Copy, Check, ChevronDown, AlignLeft, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";
import styled, { createGlobalStyle } from "styled-components";

import {
  Search, Sun, Sparkles, Star, Settings, Zap, Globe, Code,
  Settings2, Type, List, Square, Columns, Image, Monitor,
  CodeXml, GitBranch, MessageSquare,
} from "lucide-react";

import VideosAndIframes from "./components/VideoAndIframes/VideoIframe";
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

// ══════════════════════════════════════════════
//  GLOBAL STYLES (replaces *, body in App.css)
// ══════════════════════════════════════════════


// ══════════════════════════════════════════════
//  HEADER — styled components
// ══════════════════════════════════════════════


const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 270px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 7px 12px;
  height: 35px;
`;

const SearchLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchText = styled.span`
  color: #999;
  font-size: 15px;
`;

const SearchShortcut = styled.span`
  font-size: 12px;
  background: #f7f2f2;
  padding: 4px 8px;
  border-radius: 8px;
  color: #636161;
`;

// const AskAiBtn = styled.button`
//   display: flex;
//   align-items: center;
//   gap: 6px;
//   border: 1px solid #ddd;
//   border-radius: 8px;
//   padding: 4px 12px;
//   background: white;
//   font-size: 13px;
//   cursor: pointer;
//   color: #565656;
//   height: 40px;
//   font-weight:500;
// `;

const AskAiBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 6px 10px;
  background: white;
  font-size: 13px;
  cursor: pointer;
  color: #3e3e3e;
  height: 35px;
  font-weight:600;
  font-family: inherit;

 

  &:hover {
    background: #fafafa;
    border-color: #ccc;
  }
`;
const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

const LoginText = styled.span`
  font-size: 14px;
  color: rgb(50, 50, 50);
`;

const GetStartedBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: #1a1a1a;
  color: #ffffff;
  border: none;
  border-radius: 1rem;
  padding: 6px 16px;
  font-size: 0.855rem;
  line-height: ${1.25 / 0.875};
  font-weight: 500;
  cursor: pointer;
  font-family: "Inter", system-ui, -apple-system, arial;

  &:hover {
    opacity: 0.9;
  }
`;


// ══════════════════════════════════════════════
//  SIDEBAR — styled components
// ══════════════════════════════════════════════
const SidebarWrapper = styled.aside`
  width: 260px;
  min-width: 260px;
  border-right: 1px solid #e8e8e8;
  padding: 24px 16px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #eaeaea transparent;
  flex-shrink: 0;
`;

const SidebarSection = styled.div`
  margin-bottom: 24px;
`;

const SidebarHeading = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #0f0f0f;
  margin-bottom: 10px;
  padding: 0 12px;
`;

const SidebarStyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  font-size: 15px;
  text-decoration: none;
  border-radius: 6px;
  line-height: 1.5;
  background: ${({ $active }) => ($active ? "#ebebeb" : "transparent")};
  font-weight: ${({ $active }) => ($active ? "500" : "400")};
  color: ${({ $active }) => ($active ? "#0f0f0f" : "#444")};

  &:hover {
    background: #f5f5f5;
  }
`;

const SidebarIcon = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-size: 11px;
  color: ${({ $active }) => ($active ? "#0f0f0f" : "#999")};
`;

const LabelSidebarText = styled.span`
  font-size: 13px;
`;

// ══════════════════════════════════════════════
//  LAYOUT — styled components
// ══════════════════════════════════════════════
const LayoutWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 105px;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 1560px;
  margin: 0 auto;

  
`;

const ContentArea = styled.main`
  flex: 1;
  padding: 32px 48px;
  overflow-y: auto;
  background-color: #ffffff;
  min-width: 0;
  scrollbar-width: none;
  scrollbar-color: #dadada transparent;

  &::-webkit-scrollbar {
    display: none;
  }
`;

// ══════════════════════════════════════════════
//  TOC SIDEBAR — styled components
// ══════════════════════════════════════════════
const TocSidebarWrapper = styled.aside`
  width: 280px;
  min-width: 280px;
  margin-right: 32px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: transparent;
  flex-shrink: 0;
  scrollbar-width: thin;
  scrollbar-color: #eaeaea transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #eaeaea;
    border-radius: 2px;
  }
`;

const TocCopyWrapper = styled.div`
  margin-bottom: 20px;
  flex-shrink: 0;
`;

const TocCopyBtnGroup = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  overflow: hidden;
  background: transparent;
`;

const TocCopyBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0 14px;
  height: 36px;
  border: none;
  background: transparent;
  color: #3c3c3c;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s;

  &:hover {
    background: #f5f5f5;
  }
`;

const TocCopyDropdown = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 36px;
  border: none;
  border-left: 1px solid #e5e5e5;
  background: transparent;
  color: #3c3c3c;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: #f5f5f5;
  }
`;

const TocHeadingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 4px;
  flex-shrink: 0;
`;

const TocScrollWrapper = styled.div`
  position: relative;
  margin-top: 4px;
`;

const TocLinks = styled.nav`
  display: flex;
  flex-direction: column;
`;

const TocLinkItem = styled.a`
  display: block;
  font-size: 14px;
  text-decoration: none;
  padding-top: 12px;
  height: 30px;
  box-sizing: border-box;
  line-height: 1;
  overflow: hidden;
  transition: color 0.2s;
  color: ${({ $active }) => ($active ? "#1a1a1a" : "rgba(89, 89, 89, 0.9)")};
  font-weight: ${({ $active }) => ($active ? "500" : "400")};
  padding-left: ${({ $level }) => ($level === "h3" ? "36px" : "24px")};

  &:hover {
    color: #1a1a1a;
  }
`;

// ══════════════════════════════════════════════
//  HEADER COMPONENT
// ══════════════════════════════════════════════
const HeaderTabs = styled.div`
 
   display: flex;
  gap: 24px;
  padding: 0 28px;
  max-width: 1560px;
  margin: 0 auto;
`;

const Tab = styled.span`
  font-size: 14px;
  cursor: pointer;
  padding-bottom: 12px;
  position: relative;
  display: inline-block;
  color: ${({ $active }) => ($active ? "#0f0f0f" : "#6b6b6b")};
  font-weight: ${({ $active }) => ($active ? "500" : "400")};

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ $active }) => ($active ? "#0f0f0f" : "transparent")};
  }
   &:hover::after {
    position: absolute;
    background:${({$active})  => ($active ? "" : "#e8e8e8" )}   ;
   bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
}
`;

const HeaderWrapper = styled.header`
  border-bottom: 1px solid #e8e8e8;
  position: sticky;
  top: 0;
  // border-color:red;
  background: #ffffff;
  z-index: 10;

      background: var(--bg);
   
  }
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 28px;
  max-width: 1560px;
  margin: 0 auto;
`;

const LogoWrap = styled.span`
  img {
    height: 34px;
  }
`;

const HeaderCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 150px;
`;
import { useTheme } from "./Context/ThemeContext";
import ThemeContext from "./Context/ThemeContext";
function Header() {
  const [activeTab, setActiveTab] = useState("Documentation");
const { mode, toggleTheme, theme } = useTheme()
  return (
    <HeaderWrapper mode={mode}>
    <HeaderTop>
        <LogoWrap>
          <img
            src="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767703565522-24h54tbc4tf-logo_light_mode.svg?auto=format%2Ccompress&w=1650&q=75"
            alt="Logo"
          />
        </LogoWrap>
        <HeaderCenter>
          <SearchBox>
            <SearchLeft>
              <Search size={16} color="#4c4b4b" />
              <SearchText>Search</SearchText>
            </SearchLeft>
            <SearchShortcut>Ctrl+K</SearchShortcut>
          </SearchBox>
          <AskAiBtn>
            <Sparkles size={14} />
            Ask AI
          </AskAiBtn>
        </HeaderCenter>
        <HeaderActions>
          <LoginText>Login</LoginText>
          <GetStartedBtn>Get Started <ArrowRight size={13} style={{ marginLeft: "1px",marginTop:"1px" }} /></GetStartedBtn>
          <Sun size={18} color="#999" onClick={() => {
            console.log(mode)
            toggleTheme()
          }

        }/>
        </HeaderActions>
      </HeaderTop>
      <HeaderTabs>
        {["Documentation", "Changelog", "Help"].map((tab) => (
          <Tab
            key={tab}
            $active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Tab>
        ))}
      </HeaderTabs>
    </HeaderWrapper>
  );
}

// ══════════════════════════════════════════════
//  SIDEBAR COMPONENT
// ══════════════════════════════════════════════
function Sidebar() {
  const { pathname } = useLocation();

  return (
    <SidebarWrapper>
      {sidebarSections.map((section) => (
        <SidebarSection key={section.heading}>
          <SidebarHeading>{section.heading}</SidebarHeading>
          {section.links.map((link) => {
            const isActive = pathname === link.to;
            return (
              <SidebarStyledLink key={link.to} to={link.to} $active={isActive}>
                <SidebarIcon $active={isActive}>{link.icon}</SidebarIcon>
                <LabelSidebarText>{link.label}</LabelSidebarText>
              </SidebarStyledLink>
            );
          })}
        </SidebarSection>
      ))}
    </SidebarWrapper>
  );
}

// ══════════════════════════════════════════════
//  TOC SIDEBAR COMPONENT
// ══════════════════════════════════════════════
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

  const generateIndicatorPath = useCallback(() => {
    if (!links) return "";
    const segments = [];
    let y = 12;

    links.forEach((link, i) => {
      const x = link.level === "h2" ? 1 : 13;
      const nextLink = links[i + 1];
      const nextX = nextLink ? (nextLink.level === "h2" ? 1 : 13) : x;

      if (i === 0) segments.push(`M ${x} ${y}`);

      const midY = y + 18;
      segments.push(`L ${x} ${midY}`);

      y = midY + 12;
      if (nextLink) segments.push(`L ${nextX} ${y}`);
    });

    return segments.join(" ");
  }, [links]);

  const activeIndex = links ? links.findIndex((l) => l.id === activeId) : -1;

  useEffect(() => {
    if (!links) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
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
    <TocSidebarWrapper>
      <TocCopyWrapper>
        <TocCopyBtnGroup>
          <TocCopyBtn type="button" title="Copy page" onClick={handleCopy}>
            {copied ? <Check size={15} /> : <Copy size={15} />}
            <span>{copied ? "Copied!" : "Copy page"}</span>
          </TocCopyBtn>
          <TocCopyDropdown type="button">
            <ChevronDown size={14} />
          </TocCopyDropdown>
        </TocCopyBtnGroup>
      </TocCopyWrapper>

      <TocHeadingRow>
        <AlignLeft size={16} />
        <span>On this page</span>
      </TocHeadingRow>

      <TocScrollWrapper>
        <svg
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
          <rect
            width={SVG_WIDTH}
            height={totalHeight}
            fill="#dadada"
            opacity="0.8"
            mask="url(#toc-line-mask)"
          />
          <rect
            y={activeTop}
            width={SVG_WIDTH}
            height={18}
            fill="#1a1a1a"
            mask="url(#toc-line-mask)"
            style={{ transition: "y 0.3s ease-out" }}
          />
        </svg>

        <TocLinks>
          {links.map((link) => (
            <TocLinkItem
              key={link.id}
              href={`#${link.id}`}
              $active={activeId === link.id}
              $level={link.level}
            >
              {link.label}
            </TocLinkItem>
          ))}
        </TocLinks>
      </TocScrollWrapper>
    </TocSidebarWrapper>
  );
}

// ══════════════════════════════════════════════
//  APP (ROOT)
// ══════════════════════════════════════════════
export default function App() {
    const { mode } = useTheme(); // ✅ move hook here

  return (
    <BrowserRouter>
      <Header />
      <LayoutWrapper mode={mode}>
        <Sidebar />
        <ContentArea>
          <Routes>
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/core-concepts" element={<CoreConcepts />} />
            <Route path="/quickstart" element={<Quickstart />} />
            <Route path="/videos-and-iframes" element={<VideosAndIframes />} />
            <Route path="/code-group" element={<CodeGroup />} />
            <Route path="/callout" element={<Callout />} />
            <Route path="*" element={<Navigate to="/introduction" />} />
          </Routes>
        </ContentArea>
        <TOCSidebar />
      </LayoutWrapper>
    </BrowserRouter>
  );
}