import React, { useState } from "react";
import { Info } from "lucide-react";
import "./index.css";
import ShikiCodeBlock from "../../Shiki-CodeBlock/CodeBlock";

const CodeGroup = () => {
  // Inside CodeGroup component, above the return statement:

  const [activeTab, setActiveTab] = useState(0);

  const codeGroupTabs = [
    {
      label: "TypeScript", language: "typescript", code: `const response = await fetch('/api/docs', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Getting Started' })
});` },
    {
      label: "Python", language: "python", code: `import requests
response = requests.post('/api/docs',
  json={'title': 'Getting Started'}
)` },
    {
      label: "Bash", language: "bash", code: `curl -X POST https://api.example.com/docs \\
  -H "Content-Type: application/json" \\
  -d '{"title": "Getting Started"}'` },
  ];

  // autotabs const [autoTab, setAutoTab] = useState(0);

  const [autoTab, setAutoTab] = useState(0);

  const autoDetectedTabs = [
    { label: "TypeScript", language: "typescript", code: `const example = "This tab shows: typescript";` },
    { label: "Python", language: "python", code: `example = "This tab shows: python"` },
  ];

  const [highlightTab, setHighlightTab] = useState(0)
  const highlightTabs = [
    {
      label: "JavaScript", language: "javascript", code: `const greeting = "Hello, World!";
function sayHello() {
  console.log(greeting);
}
` },
    { label: "TypeScript", language: "typescript", code: `const greeting = "Hello, World!";
function sayHello() {
  console.log(greeting);
}
` },
  ];

  return (
    <div className="doc-page">
      <span className="page-group">Components</span>
      <h1 className="page-title">Code blocks and groups</h1>
      <p className="page-desc">
        Display inline code and code blocks with syntax highlighting, line
        highlighting, focus effects, and tabbed interfaces for multiple examples.
      </p>

      {/* ── Overview ── */}
      <h2>Overview</h2>
      <ShikiCodeBlock
        language="typescript"
        wrap={true}
        code={`const longLine = "This is a very long line of code that would normally require horizontal scrolling, but with wrap enabled it will wrap to the width of the container instead of overflowing.";`}
      />
      <p>
        Use code blocks to show syntax-highlighted code with a built-in{" "}
        <strong>copy</strong> button. Use <strong>code groups</strong> when you
        want <strong>tabs</strong> (for example, "JavaScript," "Python," and
        "cURL") so readers can switch between multiple examples in one place.
      </p>

      <p>Code blocks and groups are ideal for:</p>
      <ul>
        <li>Single code snippets with syntax highlighting and copy support</li>
        <li>Multi-language SDK examples in tabs (similar to <a href="/tabs" className="code-groups-video">Tabs</a>)</li>
        <li>Before/after, request/response, or setup/usage comparisons</li>
        <li>Step-by-step walkthroughs when combined with <a href="/steps" className="code-groups-video">Steps</a></li>
      </ul>

      <p>At a high level:</p>
      <ul>
        <li><strong>Code blocks:</strong> One snippet, one language.</li>
        <li><strong>Code groups:</strong> Multiple snippets, each with its own language and tab.</li>
      </ul>

      <p>
        You can create both from the <strong>Web Editor</strong> or by writing
        MDX/Markdown in the <strong>Code Editor</strong>. The underlying syntax
        is the same, so you can safely switch between editors.
      </p>

      {/* ── Using with Web Editor ── */}
      <h2>Using with Web Editor</h2>
      <p>In the Web Editor, use the slash menu to insert and manage code blocks and groups.</p>

      <h3>Insert a code block</h3>
      <ol>
        <li>Place your cursor on a new line.</li>
        <li>Type <kbd>/</kbd> and select <strong>Code Block</strong>.</li>
        <li>A code block appears with the placeholder "Add your code here…". Paste or type your code into the block.</li>
      </ol>
      <p>Use the language dropdown on the top-right of the block to pick the correct language. This controls <strong>syntax highlighting</strong> and the copy behavior.</p>
      <img className="video-iframe-image" src="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767254413848-dj42wgaz18u-pasted-image-1767254412456.png?auto=format%2Ccompress&w=560&q=75" />
      <span id="alt-text-for-web-editor">Code Block in Web Editor</span>
      <h3>Insert a code group</h3>
      <ol>
        <li>Place your cursor on a new line.</li>
        <li>Type <kbd>/</kbd> and select <strong>Code Group</strong>.</li>
        <li>A group is created with a default tab (for example,<strong> Tab 1</strong>) and a code editor area.</li>
      </ol>
      <img className="video-iframe-image" src="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767254609053-kupzap94d3p-pasted-image-1767254606676.png?auto=format%2Ccompress&w=560&q=75" />
      <span id="alt-text-for-web-editor">Code Block inside in Code Editor </span>
      <p>Inside a code group you can:</p>
      <ul>
        <li><strong>Add a tab:</strong> Click the <strong>+</strong> next to the last tab.</li>
        <li><strong>Rename a tab:</strong> Double-click the tab label (for example, "Tab 1") and type a new name (for example, "TypeScript" or "Python").</li>
        <li><strong>Remove a tab:</strong> Use the tab's close icon (if available) or delete the last remaining tab to remove the group.</li>
        <li><strong>Pick a language per tab:</strong> Use the language dropdown on each tab's code block.</li>
      </ul>

      <p>The group toolbar also lets you duplicate or delete the entire group.</p>

      <div className="callout">
        <span className="callout-icon"> <Info size={18} />  </span>
        <div>
          <p id="prefer-code-text"><strong>Prefer writing in code?</strong></p>
          <p>You can switch to <strong>MDX view inside the Web Editor</strong> to write or edit this component using the same syntax as the Code Editor. This is useful if you want full control while staying in the Web Editor.</p>
        </div>
      </div>

      {/* ── Using with Code Editor ── */}
      <h2>Using with Code Editor</h2>
      <p>When working in a code editor, you write code blocks and code groups with standard fenced code syntax and the <code>&lt;CodeGroup&gt;</code> component.</p>

      <h3>Single code block</h3>
      <p>Use <a href="www.facebook.com" target='_blank' id="special-margin" className='video-frames-links-images images-iframes-video'><u>fenced code blocks</u></a> with three backticks and a language identifier:</p>
      <ShikiCodeBlock
        language="typescript"
        code={`const apiCall = async () => {
  const response = await fetch("/api/docs");
  return response.json();
};`}
      />
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`typescript
const apiCall = async () => {
  const response = await fetch("/api/docs");
  return response.json();
};
\`\`\``}
      />

      <h3>CodeGroup with multiple languages</h3>
      <p>Wrap multiple fenced code blocks in a <code>&lt;CodeGroup&gt;</code> component to render them as tabs:</p>
      <ShikiCodeBlock
        language="tsx"
        code={`<CodeGroup tabs="TypeScript,Python,Bash">
\`\`\`typescript
const response = await fetch("/api/docs", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Getting Started" })
});
\`\`\`
\`\`\`python
import requests

response = requests.post(
  "https://api.example.com/docs",
  json={"title": "Getting Started"}
)
\`\`\`
\`\`\`bash
curl -X POST https://api.example.com/docs \\
  -H "Content-Type: application/json" \\
  -d '{"title": "Getting Started"}'
\`\`\`
</CodeGroup>`}
      />

      <p>Notes:</p>
      <ul>
        <li>Each fenced block inside <code>&lt;CodeGroup&gt;</code> must have a language tag (for example, <code>typescript</code>, <code>python</code>, <code>bash</code>).</li>
        <li><code>tabs="TypeScript,Python,Bash"</code> controls the visible tab labels. If you omit <code>tabs</code>, the language names are used instead.</li>
        <li>You can combine <code>&lt;CodeGroup&gt;</code> with <a href="/tabs" className="code-groups-video">Tabs</a> or <a href="/steps" className="code-groups-video">Steps</a> when you need more complex layouts.</li>
      </ul>

      {/* ── Advanced options ── */}
      <h2>Advanced options</h2>
      <p>Use these attributes and patterns to fine-tune how code blocks and groups render.</p>

      <h3>Line highlighting</h3>
      <p>Use the <code>highlight</code> prop on a fenced code block to emphasize specific lines:</p>
      <ShikiCodeBlock
        language="javascript"
        code={`const greeting = "Hello, World!";
function sayHello() {
  console.log(greeting);
}
sayHello();`}
      />
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`javascript highlight="1-2,5"
const greeting = "Hello, World!";
function sayHello() {
  console.log(greeting);
}
sayHello();
\`\`\``}
      />

      <h3>Line focus</h3>
      <p>Use the <code>focus</code> prop to dim non-focused lines and draw attention to a subset of the code:</p>
      <ShikiCodeBlock
        language="javascript"
        code={`const greeting = "Hello, World!";
function sayHello() {
  console.log(greeting);
}
sayHello();`}
      />
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`javascript focus="2,4-5"
const greeting = "Hello, World!";
function sayHello() {
  console.log(greeting);
}
sayHello();
\`\`\``}
      />

      <h3>Line numbers</h3>
      <p>Combine highlighting or focus with line numbers using <code>show-lines={"{true}"}</code>:</p>
      <ShikiCodeBlock
        language="typescript"
        code={`interface User {
  name: string;
  age: number;
}`}
      />
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`typescript highlight="1,3" show-lines="true"
interface User {
  name: string;
  age: number;
}
\`\`\``}
      />

      <h3>Wrap long lines</h3>
      <p>Use the <code>wrap</code> parameter to control whether long lines stay on a single row with horizontal scrolling or automatically wrap onto the next visual line inside the code block.</p>
      <p>You can enable wrapping in several equivalent ways on a fenced block: <code>wrap</code>, <code>wrap="true"</code>, <code>wrap={"{true}"}</code>.</p>
      <ShikiCodeBlock
        language="typescript"
        wrap={true}
        code={`const longLine = "This is a very long line of code that would normally require horizontal scrolling, but with wrap enabled it will wrap to the width of the container instead of overflowing.\n";`}
      />
      <p>You can also combine <code>wrap</code> with other parameters like <code>highlight</code> and <code>show-lines</code>:</p>
      <ShikiCodeBlock
        language="typescript"
        wrap={true}
        code={`const longLine = "This line is highlighted, shows a line number, and wraps instead of scrolling horizontally across the viewport.";`}
      />
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`typescript wrap
const longLine = "This is a very long line of code that would normally require horizontal scrolling, but with wrap enabled it will wrap to the width of the container instead of overflowing.";
\`\`\`
\`\`\`typescript wrap="true"
const longLine = "This is a very long line of code that would normally require horizontal scrolling, but with wrap enabled it will wrap to the width of the container instead of overflowing.";
\`\`\`
\`\`\`typescript highlight="1" show-lines="true" wrap="true"
const longLine = "This line is highlighted, shows a line number, and wraps instead of scrolling horizontally across the viewport.";
\`\`\``}
      />

      <p>When to use wrapping:</p>
      <ul>
        <li>Use <code>wrap</code> when you want readers to see the full line without side-scrolling (for example, configuration files or long shell commands), especially in narrow layouts or on mobile devices.</li>
        <li>Avoid <code>wrap</code> when alignment and spacing matter (for example, formatted logs, tables, or columns rendered in code), where wrapping can make structure harder to see.</li>
      </ul>

      <h3>CodeGroup options</h3>
      <p><code>&lt;CodeGroup&gt;</code> supports the same block-level props (for example, <code>highlight</code>, <code>focus</code>, <code>show-lines</code>) inside each tabbed code block.</p>
      <ShikiCodeBlock
        language="tsx"
        code={`<CodeGroup tabs="TypeScript,Python,Bash">
\`\`\`typescript
const response = await fetch('/api/docs', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ title: 'Getting Started' })
});
\`\`\`
\`\`\`python
import requests
response = requests.post('/api/docs',
  json={'title': 'Getting Started'}
)
\`\`\`
\`\`\`bash
curl -X POST https://api.example.com/docs \\
  -H "Content-Type: application/json" \\
  -d '{"title": "Getting Started"}'
\`\`\`
</CodeGroup>`}
      />
      <div className="shiki-group">
        <div className="shiki-group-tabs">
          {codeGroupTabs.map((tab, i) => (
            <button
              key={i}
              className={`shiki-group-tab ${i === activeTab ? "shiki-group-tab-active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <ShikiCodeBlock
          language={codeGroupTabs[activeTab].language}
          code={codeGroupTabs[activeTab].code}
        />
      </div>
      <p>You can also control tabs explicitly:</p>
      <ul>
        <li><code>tabs</code>: Comma-separated list of tab labels, for example <code>tabs="TypeScript,Python,Bash"</code>.</li>
        <li><code>show-lines</code>: Set on the component (for example, <code>show-lines={"{true}"}</code>) to show line numbers for all blocks in the group.</li>
      </ul>

      <ShikiCodeBlock
        language="tsx"
        code={`<CodeGroup show-lines={true} tabs="Highlighted,Focused">
\`\`\`javascript highlight="2-3"
const greeting = "Hello, World!";
function sayHello() {
  console.log(greeting);
}
\`\`\`
\`\`\`javascript focus="1,3"
const greeting = "Hello, World!";
function sayHello() {
  console.log(greeting);
}
\`\`\`
</CodeGroup>`}
      />

      <p>If you omit <code>tabs</code>, language identifiers are used as labels:</p>
      <ShikiCodeBlock
        language="tsx"
        code={`<CodeGroup>
\`\`\`typescript
const example = "This tab shows: typescript";
\`\`\`
\`\`\`python
example = "This tab shows: python"
\`\`\`
</CodeGroup>`}
      />

      <h3>Auto-detected tabs</h3>
      <p>Without the <code>tabs</code> attribute, CodeGroup automatically uses language identifiers as tab names:</p>
      <div className="shiki-group">
        <div className="shiki-group-tabs">
          {autoDetectedTabs.map((tab, i) => (
            <button
              key={i}
              className={`shiki-group-tab ${i === autoTab ? "shiki-group-tab-active" : ""}`}
              onClick={() => setAutoTab(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <ShikiCodeBlock
          language={autoDetectedTabs[autoTab].language}
          code={autoDetectedTabs[autoTab].code}
        />
      </div>      <ShikiCodeBlock
        language="tsx"
        code={`<CodeGroup>
\`\`\`typescript
const example = "This tab shows: typescript";
\`\`\`
\`\`\`python
example = "This tab shows: python"
\`\`\`
</CodeGroup>`}
      />

      <h3>CodeGroup with highlighting and focus</h3>
      <p>Line highlighting and focus effects work within CodeGroup tabs:</p>
      <div className="shiki-group">
        <div className="shiki-group-tabs">
          {highlightTabs.map((tab, i) => (
            <button
              key={i}
              className={`shiki-group-tab ${i === highlightTab ? "shiki-group-tab-active" : ""}`}
              onClick={() => setHighlightTab(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <ShikiCodeBlock
          language={codeGroupTabs[activeTab].language}
          code={codeGroupTabs[activeTab].code}
        />
      </div>
      
      <ShikiCodeBlock
        language="tsx"
        wrap={true}
        code={`<CodeGroup tabs="Highlighted,Focused">
\`\`\`javascript
const greeting = "Hello, World!";
function sayHello() {
  console.log(greeting);
}
\`\`\`
\`\`\`javascript
const greeting = "Hello, World!";
function sayHello() {
  console.log(greeting);
}
\`\`\`
</CodeGroup>`}
      />

      <h3>Nested code examples (four backticks)</h3>
      <p>When you need to show code that itself contains code fences, wrap the outer block in four backticks:</p>
      <ShikiCodeBlock
        language="typescript"
        code={`\`\`\`typescript
function calculateTotal(price: number, tax: number): number {
  return price + (price * tax);
}
\`\`\``}
      />

      {/* ── Attribute reference ── */}
      {/* ── Attribute reference ── */}
      <h2>Attribute reference</h2>
      <p>Use these attributes on fenced code blocks or <code>&lt;CodeGroup&gt;</code>:</p>

      <div className="attribute-card">
        <div className="attribute-header">
          <span className="attribute-path">Path</span>
          <span className="attribute-name">highlight</span>
          <span className="attribute-type">string</span>
        </div>
        <p className="attribute-desc">Line numbers or ranges to highlight. Examples: <code>"1"</code>, <code>"1-3"</code>, <code>"1,3,5-7"</code>.</p>
      </div>

      <div className="attribute-card">
        <div className="attribute-header">
          <span className="attribute-path">Path</span>
          <span className="attribute-name">focus</span>
          <span className="attribute-type">string</span>
        </div>
        <p className="attribute-desc">Line numbers or ranges to focus on (blurs other lines). Examples: <code>"2"</code>, <code>"2-4"</code>, <code>"1,4-6"</code>.</p>
      </div>

      <div className="attribute-card">
        <div className="attribute-header">
          <span className="attribute-path">Path</span>
          <span className="attribute-name">show-lines</span>
          <span className="attribute-type">boolean | string</span>
        </div>
        <p className="attribute-desc">Set to <code>{"{true}"}</code> to show line numbers for a block or an entire group.</p>
      </div>

      <div className="attribute-card">
        <div className="attribute-header">
          <span className="attribute-path">Path</span>
          <span className="attribute-name">tabs</span>
          <span className="attribute-type">string</span>
        </div>
        <p className="attribute-desc">Comma-separated custom tab names (for example, <code>"TypeScript,Python,Bash"</code>). Overrides auto-detected language labels.</p>
      </div>

      <div className="attribute-card">
        <div className="attribute-header">
          <span className="attribute-path">Path</span>
          <span className="attribute-name">wrap</span>
          <span className="attribute-type">boolean | string</span>
        </div>
        <p className="attribute-desc">Controls whether long lines wrap inside the code block. Defaults to <code>false</code> (no wrapping, horizontal scrolling). Set using <code>wrap</code>, <code>wrap="true"</code>, or <code>wrap={"{true}"}</code> to enable <code>white-space: pre-wrap</code> and <code>word-break: break-word</code> with vertical scrolling only.</p>
      </div>
    </div>
  );
};

export default CodeGroup;