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

import { useTheme } from "./Context/ThemeContext";
import VideosAndIframes from "./components/VideoAndIframes/VideoIframe";
import CodeGroup from "./components/CodeGroup/CodeGroup";
import Callout from "./components/Callout/Callout";
import TOCSidebar from "./components/TOCSidebar/TOCSidebar";

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
      { to: "/mermaid", label: "Mermaid Diagrams", icon: <GitBranch size={16} /> },
      { to: "/callout", label: "Callout", icon: <MessageSquare size={16} /> },
      {to:"/param-field",label:"Param Field",icon:<Settings size={16} />}
    ],
  },
];

// ══════════════════════════════════════════════
//  HEADER — styled components
// ══════════════════════════════════════════════

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 270px;
  border: 1px solid var(--search-border);
  border-radius: 8px;
  padding: 7px 12px;
  height: 35px;
  background: var(--search-bg);
`;

const SearchLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchText = styled.span`
  color: var(--icon-color);
  font-size: 15px;
`;

const SearchShortcut = styled.span`
  font-size: 12px;
  background: var(--shortcut-bg);
  padding: 4px 8px;
  border-radius: 8px;
  color: var(--icon-color);
`;

const AskAiBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--search-border);
  border-radius: 8px;
  padding: 6px 10px;
  background: var(--search-bg);
  font-size: 13px;
  cursor: pointer;
  color: var(--text-secondary);
  height: 35px;
  font-weight: 600;
  font-family: inherit;

  &:hover {
    background: var(--sidebar-hover);
    border-color: var(--border);
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`;

const LoginText = styled.span`
  font-size: 14px;
  color: var(--text-secondary);
`;

const GetStartedBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: var(--btn-bg);
  color: var(--btn-text);
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
  border-right: 1px solid var(--border);
  padding: 24px 16px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
  flex-shrink: 0;
  background: var(--sidebar-bg);
`;

const SidebarSection = styled.div`
  margin-bottom: 24px;
`;

const SidebarHeading = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
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
  background: ${({ $active }) => ($active ? "var(--sidebar-active)" : "transparent")};
  font-weight: ${({ $active }) => ($active ? "500" : "400")};
  color: ${({ $active }) => ($active ? "var(--text)" : "var(--link-color)")};

  &:hover {
    background: var(--sidebar-hover);
  }
`;

const SidebarIcon = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-size: 11px;
  color: ${({ $active }) => ($active ? "var(--text)" : "var(--icon-color)")};
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
  background: var(--bg);
`;

const ContentArea = styled.main`
  flex: 1;
  padding: 32px 48px;
  overflow-y: auto;
  background-color: var(--bg);
  color: var(--text);
  min-width: 0;
  scrollbar-width: none;
  scrollbar-color: var(--border) transparent;
  scroll-padding-top: 20px;

  &::-webkit-scrollbar {
    display: none;
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
  color: ${({ $active }) => ($active ? "var(--text)" : "var(--tab-color)")};
  font-weight: ${({ $active }) => ($active ? "500" : "400")};

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1.5px;
    background: ${({ $active }) => ($active ? "var(--text)" : "transparent")};
  }
  &:hover::after {
    position: absolute;
    background: ${({ $active }) => ($active ? "var(--text)" : "var(--border)")};
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1.5px;
  }
`;

const HeaderWrapper = styled.header`
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--bg);
  z-index: 10;
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

function Header() {
  const [activeTab, setActiveTab] = useState("Documentation");
  const { mode, toggleTheme } = useTheme();

  return (
    <HeaderWrapper>
      <HeaderTop>
        <LogoWrap>
          {
            mode === "dark" ? (
              <img
                src="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767703540306-1ow538yjggl-logo_dark_mode.svg?auto=format%2Ccompress&w=1650&q=75"
                alt="Logo-1"
              />
            ) :
              (<img
                src="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767703565522-24h54tbc4tf-logo_light_mode.svg?auto=format%2Ccompress&w=1650&q=75"
                alt="Logo"
              />)
          }

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
          <a href="https://documentation.ai" target="_blank" style={{ textDecoration: "none" }}>
            <GetStartedBtn>
              Get Started <ArrowRight size={14} />
            </GetStartedBtn>
          </a>          <Sun size={18} color="#999" style={{ cursor: "pointer" }} onClick={() => {
            toggleTheme();
            console.log(mode);
          }} />
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
// function TOCSidebar() {
//   const { pathname } = useLocation();
//   const [copied, setCopied] = useState(false);
//   const [activeId, setActiveId] = useState(null);

//   const tocMap = {
//     "/code-group": [
//       { id: "overview", label: "Overview", level: "h2" },
//       { id: "using-with-web-editor", label: "Using with Web Editor", level: "h2" },
//       { id: "insert-a-code-block", label: "Insert a code block", level: "h3" },
//       { id: "insert-a-code-group", label: "Insert a code group", level: "h3" },
//       { id: "using-with-code-editor", label: "Using with Code Editor", level: "h2" },
//       { id: "single-code-block", label: "Single code block", level: "h3" },
//       { id: "codegroup-with-multiple-languages", label: "CodeGroup with multiple languages", level: "h3" },
//       { id: "advanced-options", label: "Advanced options", level: "h2" },
//       { id: "line-highlighting", label: "Line highlighting", level: "h3" },
//       { id: "line-focus", label: "Line focus", level: "h3" },
//       { id: "line-numbers", label: "Line numbers", level: "h3" },
//       { id: "wrap-long-lines", label: "Wrap long lines", level: "h3" },
//       { id: "codegroup-options", label: "CodeGroup options", level: "h3" },
//       { id: "auto-detected-tabs", label: "Auto-detected tabs", level: "h3" },
//       { id: "codegroup-with-highlighting-and-focus", label: "CodeGroup with highlighting and focus", level: "h3" },
//       { id: "nested-code-examples-four-backticks", label: "Nested code examples (four backticks)", level: "h3" },
//       { id: "attribute-reference", label: "Attribute reference", level: "h2" },
//     ],
//     "/videos-and-iframes": [
//       { id: "overview", label: "Overview", level: "h2" },
//       { id: "using-with-web-editor", label: "Using with Web Editor", level: "h2" },
//       { id: "insert-a-video-or-iframe", label: "Insert a video or iframe", level: "h3" },
//       { id: "align-and-resize", label: "Align and resize", level: "h3" },
//       { id: "using-with-code-editor", label: "Using with Code Editor", level: "h2" },
//       { id: "video-iframe-mode", label: "<Video> (iframe mode)", level: "h3" },
//       { id: "video-html5-mode", label: "<Video> (HTML5 mode)", level: "h3" },
//       { id: "iframe-component", label: "<Iframe> component", level: "h3" },
//       { id: "advanced-options", label: "Advanced options", level: "h2" },
//       { id: "platform-support", label: "Platform support", level: "h3" },
//       { id: "accessibility", label: "Accessibility and layout", level: "h3" },
//       { id: "security", label: "Security considerations", level: "h3" },
//     ],
//     "/callout": [
//       { id: "overview", label: "Overview", level: "h2" },
//       { id: "using-with-web-editor", label: "Using with Web Editor", level: "h2" },
//       { id: "using-with-code-editor", label: "Using with Code Editor", level: "h2" },
//       { id: "attributes", label: "Attributes", level: "h2" },
//       { id: "advanced-options", label: "Advanced options", level: "h2" },
//     ],
//   };

//   const links = tocMap[pathname];
//   const ITEM_HEIGHT = 30;
//   const SVG_WIDTH = 14;

//   const generateIndicatorPath = useCallback(() => {
//     if (!links) return "";
//     const segments = [];
//     let y = 12;

//     links.forEach((link, i) => {
//       const x = link.level === "h2" ? 1 : 13;
//       const nextLink = links[i + 1];
//       const nextX = nextLink ? (nextLink.level === "h2" ? 1 : 13) : x;

//       if (i === 0) segments.push(`M ${x} ${y}`);

//       const midY = y + 18;
//       segments.push(`L ${x} ${midY}`);

//       y = midY + 12;
//       if (nextLink) segments.push(`L ${nextX} ${y}`);
//     });

//     return segments.join(" ");
//   }, [links]);

//   const activeIndex = links ? links.findIndex((l) => l.id === activeId) : -1;

//   useEffect(() => {
//     if (!links) return;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visible = entries.filter((e) => e.isIntersecting);
//         if (visible.length > 0) setActiveId(visible[0].target.id);
//       },
//       { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
//     );

//     links.forEach((link) => {
//       const el = document.getElementById(link.id);
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, [links]);

//   const handleCopy = () => {
//     setCopied(true);
//     setTimeout(() => setCopied(false), 1800);
//   };

//   if (!links) return null;

//   const totalHeight = links.length * ITEM_HEIGHT;
//   const svgPath = generateIndicatorPath();
//   const activeTop = activeIndex >= 0 ? 12 + activeIndex * ITEM_HEIGHT : 0;

//   return (
//     <TocSidebarWrapper>
//       <TocCopyWrapper>
//         <TocCopyBtnGroup>
//           <TocCopyBtn type="button" title="Copy page" onClick={handleCopy}>
//             {copied ? <Check size={15} /> : <Copy size={15} />}
//             <span>{copied ? "Copied!" : "Copy page"}</span>
//           </TocCopyBtn>
//           <TocCopyDropdown type="button">
//             <ChevronDown size={14} />
//           </TocCopyDropdown>
//         </TocCopyBtnGroup>
//       </TocCopyWrapper>

//       <TocHeadingRow>
//         <AlignLeft size={16} />
//         <span>On this page</span>
//       </TocHeadingRow>

//       <TocScrollWrapper>
//         <svg
//           width={SVG_WIDTH}
//           height={totalHeight}
//           viewBox={`0 0 ${SVG_WIDTH} ${totalHeight}`}
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{ position: "absolute", left: 0, top: 0 }}
//         >
//           <mask id="toc-line-mask">
//             <path d={svgPath} stroke="white" strokeWidth="1" fill="none" />
//           </mask>
//           <rect
//             width={SVG_WIDTH}
//             height={totalHeight}
//             fill="var(--toc-border)"
//             opacity="0.8"
//             mask="url(#toc-line-mask)"
//           />
//           <rect
//             y={activeTop}
//             width={SVG_WIDTH}
//             height={18}
//             fill="var(--text)"
//             mask="url(#toc-line-mask)"
//             style={{ transition: "y 0.3s ease-out" }}
//           />
//         </svg>

//         <TocLinks>
//           {links.map((link) => (
//             <TocLinkItem
//               key={link.id}
//               href={`#${link.id}`}
//               $active={activeId === link.id}
//               $level={link.level}
//             >
//               {link.label}
//             </TocLinkItem>
//           ))}
//         </TocLinks>
//       </TocScrollWrapper>
//     </TocSidebarWrapper>
//   );
// }




// ══════════════════════════════════════════════
//  APP (ROOT)
// ══════════════════════════════════════════════
import { ToastContainer } from "react-toastify";
import MermaidDiagrams from "./components/Mermaid/Mermaid";
import ParamFieldPage from "./components/ParamField/ParamField";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar
        closeButton={false}
        toastStyle={{
          color: "var(--toast-color)",
          borderRadius: "10px",
          fontSize: "13px",
          fontWeight: "500",
          fontFamily: "Inter, sans-serif",
          padding: "10px 20px",
        }}
      />
      <Header />
      <LayoutWrapper>
        <Sidebar />
        <ContentArea>
          <Routes>
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/core-concepts" element={<CoreConcepts />} />
            <Route path="/quickstart" element={<Quickstart />} />
            <Route path="/videos-and-iframes" element={<VideosAndIframes />} />
            <Route path="/code-group" element={<CodeGroup />} />
            <Route path="/callout" element={<Callout />} />
            <Route path="/mermaid" element={<MermaidDiagrams />} />
            <Route path="/param-field" element={<ParamFieldPage />} />

            <Route path="*" element={<Navigate to="/introduction" />} />
          </Routes>
        </ContentArea>
        <TOCSidebar />
      </LayoutWrapper>
    </BrowserRouter>
  );
}

{/* <img alt="logo" loading="lazy" width="0" height="0" decoding="async" data-nimg="1" class="h-full w-auto" sizes="100vw" srcset="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767703540306-1ow538yjggl-logo_dark_mode.svg?auto=format%2Ccompress&amp;w=640&amp;q=75 640w, https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767703540306-1ow538yjggl-logo_dark_mode.svg?auto=format%2Ccompress&amp;w=750&amp;q=75 750w, https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767703540306-1ow538yjggl-logo_dark_mode.svg?auto=format%2Ccompress&amp;w=828&amp;q=75 828w, https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767703540306-1ow538yjggl-logo_dark_mode.svg?auto=format%2Ccompress&amp;w=1080&amp;q=75 1080w, https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767703540306-1ow538yjggl-logo_dark_mode.svg?auto=format%2Ccompress&amp;w=1200&amp;q=75 1200w, https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767703540306-1ow538yjggl-logo_dark_mode.svg?auto=format%2Ccompress&amp;w=1650&amp;q=75 1650w" src="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767703540306-1ow538yjggl-logo_dark_mode.svg?auto=format%2Ccompress&amp;w=1650&amp;q=75" style="color: transparent;"></img> */ }




<a target="_self" title="Param Field" class="px-3 -mx-3 flex items-center select-none w-full gap-2 h-9 text-sm rounded-lg transition-colors border-brand text-brand font-medium bg-brand/10 dark:bg-brand/20" href="/docs/components/paramfield"><div class="size-4 flex-shrink-0 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings size-4 flex-shrink-0 text-brand" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg></div><span class="truncate">Param Field</span></a>