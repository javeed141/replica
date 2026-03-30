import React, { useEffect, useState } from 'react'
import "./index.css"
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Copy, ChevronDown, ExternalLink, ArrowUpRight, Server } from 'lucide-react';
import { useLocation } from 'react-router-dom';
const TOCSidebar = () => {
  const { pathname } = useLocation();
  const[active,setActive]=useState(null);
  const [copied,setCopied]=useState(false)
  const [showDropdown, setShowDropdown] = useState(false);

useEffect(() => {
  if (!showDropdown) return;

  const handleClick = () => {
    setShowDropdown(false);
  };

 const timer = setTimeout(() => {
    document.addEventListener('click', handleClick);
  }, 0);  return () => 
    {
      document.removeEventListener('click', handleClick)
      clearInterval(timer)
    };
}, [showDropdown]);
const toggleModal = () => {
  setShowDropdown((prev) => !prev);
};
    const tocMap = {
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
    "/callout": [
      { id: "overview", label: "Overview", level: "h2" },
      { id: "using-with-web-editor", label: "Using with Web Editor", level: "h2" },
      { id: "using-with-code-editor", label: "Using with Code Editor", level: "h2" },
      { id: "attributes", label: "Attributes", level: "h2" },
      { id: "advanced-options", label: "Advanced options", level: "h2" },
    ],
    "/mermaid":[
       { id: "overview", label: "Overview", level: "h2" },
  { id: "using-with-web-editor", label: "Using with Web Editor", level: "h2" },
  { id: "using-with-code-editor", label: "Using with Code Editor", level: "h2" },

  { id: "basic-syntax", label: "Basic Syntax", level: "h3" },
  { id: "zoom-controls", label: "Zoom controls", level: "h3" },

  { id: "advanced-options", label: "Advanced Options", level: "h2" },

  { id: "diagram-types", label: "Diagram types:", level: "h3" },
  { id: "flowcharts", label: "Flowcharts", level: "h3" },
  { id: "sequence-diagrams", label: "Sequence diagrams", level: "h3" },
  { id: "class-diagrams", label: "Class diagrams", level: "h3" },
  { id: "state-diagrams", label: "State diagrams", level: "h3" },
  { id: "entity-relationship-diagrams", label: "Entity relationship diagrams", level: "h3" },
  { id: "gantt-charts", label: "Gantt charts", level: "h3" },
  { id: "git-graphs", label: "Git graphs", level: "h3" },

  { id: "graph-directions", label: "Graph directions:", level: "h3" },
  { id: "node-shapes", label: "Node shapes", level: "h3" },
  { id: "arrow-types", label: "Arrow types", level: "h3" },
  { id: "theme-support", label: "Theme support", level: "h3" },
  { id: "syntax", label: "Syntax", level: "h3" },
  { id: "best-practices", label: "Best practices", level: "h3" },
    ],
    "/param-field" : [
  { id: "overview", label: "Overview", level: "h2" },
  { id: "using-with-web-editor", label: "Using with Web Editor", level: "h2" },

  { id: "add-a-paramfield-block", label: "Add a ParamField block", level: "h3" },
  { id: "edit-parameter-metadata", label: "Edit parameter metadata", level: "h3" },
  { id: "edit-the-description", label: "Edit the description", level: "h3" },

  { id: "using-with-code-editor", label: "Using with Code Editor", level: "h2" },

  { id: "basic-syntax", label: "Basic syntax", level: "h3" },
  { id: "hide-location-badge", label: "Hide location badge", level: "h3" },

  { id: "advanced-options", label: "Advanced options", level: "h2" },
  { id: "attributes", label: "Attributes", level: "h3" },
],
  };
    const arr = tocMap[pathname];

    const handleCopy=()=>{
        navigator.clipboard.writeText("Hello World ");
        setCopied(true)
        setTimeout(()=> setCopied(false),1500)
      toast.success("Copied to clipboard ✅");
    }

    
  return (
    <div className='toc-sidebar-container'>

     <div className='copy-dropdown-container'>
        <button className='copy-button-container' onClick={handleCopy}>
        <Copy size={15} className='copy-icon'/>
          <p className='copy-text-right'>      {copied ? "Copied!" : "Copy Page"}
            </p>
        </button>
        <button className='dropdown-container' onClick={toggleModal}>
                <ChevronDown size={15} className='copy-icon'/>
        </button>
 {showDropdown && (
  <div className='dropdown-menu' onClick={(e) => e.stopPropagation()}>
    <div className='each-item-dropdown' onClick={() => { handleCopy(); setShowDropdown(false); }}>
      <Copy size={16} />
      <span className='copy-text-dropdown'>Copy page</span>
    </div>
    <div className='each-item-dropdown' onClick={() => { window.open('https://documentation.ai/markdown', '_blank'); setShowDropdown(false); }}>
      <ExternalLink size={16} />
      <span className='copy-text-dropdown'>View as Markdown</span>
      <ArrowUpRight size={16} className='arrow-icon' />
    </div>
    <div className='each-item-dropdown' onClick={() => { window.open('https://claude.ai/new', '_blank'); setShowDropdown(false); }}>
      <img src="https://blob-cdn.documentation.ai/assets/icons/anthropic.svg?auto=format%2Ccompress&w=32&q=75" width="16" height="16" className='dropdown-img' alt="Claude" />
      <span className='copy-text-dropdown'>Open in Claude</span>
      <ArrowUpRight size={16} className='arrow-icon' />
    </div>
    <div className='each-item-dropdown' onClick={() => { window.open('https://chatgpt.com', '_blank'); setShowDropdown(false); }}>
      <img src="https://blob-cdn.documentation.ai/assets/icons/openai.svg?auto=format%2Ccompress&w=32&q=75" width="16" height="16" className='dropdown-img' alt="ChatGPT" />
      <span className='copy-text-dropdown'>Open in ChatGPT</span>
      <ArrowUpRight size={16} className='arrow-icon' />
    </div>
    <div className='each-item-dropdown' onClick={() => { window.open('https://www.perplexity.ai', '_blank'); setShowDropdown(false); }}>
      <img src="https://blob-cdn.documentation.ai/assets/icons/perplexity.svg?auto=format%2Ccompress&w=32&q=75" width="16" height="16" className='dropdown-img' alt="Perplexity" />
      <span className='copy-text-dropdown'>Open in Perplexity</span>
      <ArrowUpRight size={16} className='arrow-icon' />
    </div>
    <div className='each-item-dropdown' onClick={() => { window.open('https://grok.x.ai', '_blank'); setShowDropdown(false); }}>
      <img src="https://blob-cdn.documentation.ai/assets/icons/grok.svg?auto=format%2Ccompress&w=32&q=75" width="16" height="16" className='dropdown-img' alt="Grok" />
      <span className='copy-text-dropdown'>Open in Grok</span>
      <ArrowUpRight size={16} className='arrow-icon' />
    </div>
    <div className='each-item-dropdown' onClick={() => { navigator.clipboard.writeText('https://mcp.documentation.ai/server'); toast("MCP URL copied"); setShowDropdown(false); }}>
      <Server size={16} />
      <span className='copy-text-dropdown'>Copy MCP server URL</span>
    </div>
  </div>
)}
     </div>
     
  <div className='toc-sidebar'>
 {arr?.map(item => (
  <div
    key={item.id}
    className={`item-list-view ${item.id === active ? 'active' : ''}`}
    style={{
      paddingLeft: item.level === "h3" ? "36px" : "12px",
    }}
    onClick={() => {
      setActive(item.id);
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: "instant", block: "start" });
      }
    }}
  >
    {item.label}
  </div>
))}
</div>
    </div>
  )
}

export default TOCSidebar
