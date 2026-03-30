import { useState } from "react";
import { Info } from "lucide-react";
import styled from "styled-components";
import ShikiCodeBlock, { ShikiBlock } from "../../Shiki-CodeBlock/CodeBlock";

// ── Page layout ───────────────────────────────────────────────────────────────
const DocPage = styled.div`
  max-width: 672px;
  font-family: "Inter", system-ui, -apple-system, sans-serif;
  color: var(--text-secondary);
  font-size: 16px;
  line-height: 28px;
  margin-left: 40px;
  margin-bottom: 40px;

  h2 {
    font-size: 22px;
    font-weight: 600;
    color: var(--text);
    margin-top: 40px;
    margin-bottom: 16px;
    line-height: 1.3;
  }

  h3 {
    font-size: 17px;
    font-weight: 600;
    color: var(--text);
    margin-top: 28px;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  p {
    font-size: 16px;
    line-height: 28px;
    color: var(--text-secondary);
    margin-bottom: 12px;
  }

  ul {
    list-style-type: disc;
    padding-left: 24px;
    margin-bottom: 12px;
  }

  ul ul {
    list-style-type: circle;
    margin-top: 6px;
    margin-bottom: 6px;
  }

  ol {
    padding-left: 24px;
    margin-bottom: 12px;
  }

  li {
    font-size: 16px;
    line-height: 28px;
    color: var(--text-secondary);
    margin-bottom: 6px;
  }

  li p {
    margin-bottom: 0;
  }

  code {
    font-family: "JetBrains Mono", "JetBrains Mono Fallback", ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 14px;
    background-color: var(--code-bg);
    padding: 2px 6px;
    border-radius: 5px;
    color: var(--text);
  }

  kbd {
    font-family: "JetBrains Mono", "JetBrains Mono Fallback", ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 13px;
    background: var(--shortcut-bg);
    border: 1px solid var(--border);
    padding: 1px 6px;
    border-radius: 4px;
    color: var(--text);
  }

  strong {
    font-weight: 600;
    color: var(--text);
  }
`;

const PageGroupLabel = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: var(--icon-color);
  text-transform: capitalize;
  display: block;
  margin-bottom: 14px;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 10px;
  letter-spacing: -0.5px;
  line-height: 1.2;
`;

const PageDesc = styled.p`
  {
    color: var(--text-secondary);
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 32px;
  }
`;

// ── Info note box ─────────────────────────────────────────────────────────────
const InfoNoteBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: var(--info-bg);
  border-radius: 12px;
  padding: 12px 16px;
  margin: 24px 0;

  && p {
    margin: 0;
    font-size: 15px;
    line-height: 24px;
    color: var(--text-secondary);
  }
`;

const InfoNoteIcon = styled.span`
  color: var(--icon-color);
  font-size: 10px;
  flex-shrink: 0;
  margin-top: 4px;
`;

const PreferCodeText = styled.p`
  && {
    margin-bottom: 10px;
    font-weight: 400;
  }
`;

// ── Images / captions ─────────────────────────────────────────────────────────
const VideoIframeImage = styled.img`
  border: 0;
  border-radius: 10px;
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const AltTextCaption = styled.span`
  font-size: 14px;
  color: var(--icon-color);
  margin: 5px 0 5px 200px;
  display: block;
`;

// ── Links ─────────────────────────────────────────────────────────────────────
const CodeGroupsLink = styled.a`
  color: var(--text);
  font-weight: bold;
`;

const FencedCodeLink = styled.a`
  color: var(--text);
  font-weight: bold;
`;

// ── Attribute cards ───────────────────────────────────────────────────────────
const AttributeCard = styled.div`
  border-top: 1px solid var(--border);
  padding: 14px 0;

  &:last-child {
    border-bottom: 1px solid var(--border);
  }
`;

const AttributeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AttributePath = styled.span`
  background-color: #dbeafe;
  color: #1e40af;
  font-size: 13px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 8px;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  line-height: 16px;
`;

const AttributeName = styled.span`
  font-weight: 700;
  font-size: 15px;
  color: var(--text);
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Consolas, monospace;
`;

const AttributeType = styled.span`
  font-size: 13px;
  color: var(--icon-color);
`;

const AttributeDesc = styled.p`
  && {
    margin: 0;
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.7;
  }
`;

// ── Code group tabs ───────────────────────────────────────────────────────────
const ShikiGroupWrapper = styled.div`
  margin: 16px 0;
  border: 1px solid var(--border);
  border-radius: 14px;
  background-color: var(--info-bg);
  padding: 0 4px 4px 4px;

  ${ShikiBlock} {
    border: 1px solid var(--border);
    border-radius: 12px;
    margin: 0;
    background-color: var(--bg);
  }
`;

const ShikiGroupTabs = styled.div`
  display: flex;
  padding: 0 12px;
  gap: 8px;
  height: 36px;
  align-items: center;
`;

const ShikiGroupTab = styled.button`
  padding: 6px;
  font-size: 13px;
  font-family: "Inter", system-ui, -apple-system, sans-serif;
  font-weight: 500;
  color: ${({ $active }) => ($active ? "var(--text)" : "var(--icon-color)")};
  background: none;
  border: none;
  border-bottom: ${({ $active }) => ($active ? "2px solid var(--text)" : "2px solid transparent")};
  cursor: pointer;

  &:hover {
    color: var(--text-secondary);
  }
`;

// ─────────────────────────────────────────────────────────────────────────────

const CodeGroup = () => {
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
    <DocPage>
      <PageGroupLabel>Components</PageGroupLabel>
      <PageTitle>Code blocks and groups</PageTitle>
      <PageDesc>
        Display inline code and code blocks with syntax highlighting, line
        highlighting, focus effects, and tabbed interfaces for multiple examples.
      </PageDesc>

      {/* ── Overview ── */}
      <h2 id="overview">Overview</h2>
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
        <li>Multi-language SDK examples in tabs (similar to <CodeGroupsLink href="/tabs">Tabs</CodeGroupsLink>)</li>
        <li>Before/after, request/response, or setup/usage comparisons</li>
        <li>Step-by-step walkthroughs when combined with <CodeGroupsLink href="/steps">Steps</CodeGroupsLink></li>
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
      <h2 id="using-with-web-editor">Using with Web Editor</h2>
      <p>In the Web Editor, use the slash menu to insert and manage code blocks and groups.</p>

      <h3 id="insert-a-code-block">Insert a code block</h3>
      <ol>
        <li>Place your cursor on a new line.</li>
        <li>Type <kbd>/</kbd> and select <strong>Code Block</strong>.</li>
        <li>A code block appears with the placeholder "Add your code here…". Paste or type your code into the block.</li>
      </ol>
      <p>Use the language dropdown on the top-right of the block to pick the correct language. This controls <strong>syntax highlighting</strong> and the copy behavior.</p>
      <VideoIframeImage src="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767254413848-dj42wgaz18u-pasted-image-1767254412456.png?auto=format%2Ccompress&w=560&q=75" />
      <AltTextCaption>Code Block in Web Editor</AltTextCaption>

      <h3 id="insert-a-code-group">Insert a code group</h3>
      <ol>
        <li>Place your cursor on a new line.</li>
        <li>Type <kbd>/</kbd> and select <strong>Code Group</strong>.</li>
        <li>A group is created with a default tab (for example,<strong> Tab 1</strong>) and a code editor area.</li>
      </ol>
      <VideoIframeImage src="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767254609053-kupzap94d3p-pasted-image-1767254606676.png?auto=format%2Ccompress&w=560&q=75" />
      <AltTextCaption>Code Block inside in Code Editor </AltTextCaption>
      <p>Inside a code group you can:</p>
      <ul>
        <li><strong>Add a tab:</strong> Click the <strong>+</strong> next to the last tab.</li>
        <li><strong>Rename a tab:</strong> Double-click the tab label (for example, "Tab 1") and type a new name (for example, "TypeScript" or "Python").</li>
        <li><strong>Remove a tab:</strong> Use the tab's close icon (if available) or delete the last remaining tab to remove the group.</li>
        <li><strong>Pick a language per tab:</strong> Use the language dropdown on each tab's code block.</li>
      </ul>

      <p>The group toolbar also lets you duplicate or delete the entire group.</p>

      <InfoNoteBox>
        <InfoNoteIcon> <Info size={18} />  </InfoNoteIcon>
        <div>
          <PreferCodeText><strong>Prefer writing in code?</strong></PreferCodeText>
          <p>You can switch to <strong>MDX view inside the Web Editor</strong> to write or edit this component using the same syntax as the Code Editor. This is useful if you want full control while staying in the Web Editor.</p>
        </div>
      </InfoNoteBox>

      {/* ── Using with Code Editor ── */}
      <h2 id="using-with-code-editor">Using with Code Editor</h2>
      <p>When working in a code editor, you write code blocks and code groups with standard fenced code syntax and the <code>&lt;CodeGroup&gt;</code> component.</p>

      <h3 id="single-code-block">Single code block</h3>
      <p>Use <FencedCodeLink href="www.facebook.com" target='_blank'><u>fenced code blocks</u></FencedCodeLink> with three backticks and a language identifier:</p>
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

      <h3 id="codegroup-with-multiple-languages">CodeGroup with multiple languages</h3>
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
        <li>You can combine <code>&lt;CodeGroup&gt;</code> with <CodeGroupsLink href="/tabs">Tabs</CodeGroupsLink> or <CodeGroupsLink href="/steps">Steps</CodeGroupsLink> when you need more complex layouts.</li>
      </ul>

      {/* ── Advanced options ── */}
      <h2 id="advanced-options">Advanced options</h2>
      <p>Use these attributes and patterns to fine-tune how code blocks and groups render.</p>

      <h3 id="line-highlighting">Line highlighting</h3>
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

      <h3 id="line-focus">Line focus</h3>
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

      <h3 id="line-numbers">Line numbers</h3>
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

      <h3 id="wrap-long-lines">Wrap long lines</h3>
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

      <h3 id="codegroup-options">CodeGroup options</h3>
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
      <ShikiGroupWrapper>
        <ShikiGroupTabs>
          {codeGroupTabs.map((tab, i) => (
            <ShikiGroupTab
              key={i}
              $active={i === activeTab}
              onClick={() => setActiveTab(i)}
            >
              {tab.label}
            </ShikiGroupTab>
          ))}
        </ShikiGroupTabs>
        <ShikiCodeBlock
          language={codeGroupTabs[activeTab].language}
          code={codeGroupTabs[activeTab].code}
        />
      </ShikiGroupWrapper>
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

      <h3 id="auto-detected-tabs">Auto-detected tabs</h3>
      <p>Without the <code>tabs</code> attribute, CodeGroup automatically uses language identifiers as tab names:</p>
      <ShikiGroupWrapper>
        <ShikiGroupTabs>
          {autoDetectedTabs.map((tab, i) => (
            <ShikiGroupTab
              key={i}
              $active={i === autoTab}
              onClick={() => setAutoTab(i)}
            >
              {tab.label}
            </ShikiGroupTab>
          ))}
        </ShikiGroupTabs>
        <ShikiCodeBlock
          language={autoDetectedTabs[autoTab].language}
          code={autoDetectedTabs[autoTab].code}
        />
      </ShikiGroupWrapper>
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

      <h3 id="codegroup-with-highlighting-and-focus">CodeGroup with highlighting and focus</h3>
      <p>Line highlighting and focus effects work within CodeGroup tabs:</p>
      <ShikiGroupWrapper>
        <ShikiGroupTabs>
          {highlightTabs.map((tab, i) => (
            <ShikiGroupTab
              key={i}
              $active={i === highlightTab}
              onClick={() => setHighlightTab(i)}
            >
              {tab.label}
            </ShikiGroupTab>
          ))}
        </ShikiGroupTabs>
        <ShikiCodeBlock
          language={codeGroupTabs[activeTab].language}
          code={codeGroupTabs[activeTab].code}
        />
      </ShikiGroupWrapper>

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

      <h3 id="nested-code-examples-four-backticks">Nested code examples (four backticks)</h3>
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
      <h2 id="attribute-reference">Attribute reference</h2>
      <p>Use these attributes on fenced code blocks or <code>&lt;CodeGroup&gt;</code>:</p>

      <AttributeCard>
        <AttributeHeader>
          <AttributePath>Path</AttributePath>
          <AttributeName>highlight</AttributeName>
          <AttributeType>string</AttributeType>
        </AttributeHeader>
        <AttributeDesc>Line numbers or ranges to highlight. Examples: <code>"1"</code>, <code>"1-3"</code>, <code>"1,3,5-7"</code>.</AttributeDesc>
      </AttributeCard>

      <AttributeCard>
        <AttributeHeader>
          <AttributePath>Path</AttributePath>
          <AttributeName>focus</AttributeName>
          <AttributeType>string</AttributeType>
        </AttributeHeader>
        <AttributeDesc>Line numbers or ranges to focus on (blurs other lines). Examples: <code>"2"</code>, <code>"2-4"</code>, <code>"1,4-6"</code>.</AttributeDesc>
      </AttributeCard>

      <AttributeCard>
        <AttributeHeader>
          <AttributePath>Path</AttributePath>
          <AttributeName>show-lines</AttributeName>
          <AttributeType>boolean | string</AttributeType>
        </AttributeHeader>
        <AttributeDesc>Set to <code>{"{true}"}</code> to show line numbers for a block or an entire group.</AttributeDesc>
      </AttributeCard>

      <AttributeCard>
        <AttributeHeader>
          <AttributePath>Path</AttributePath>
          <AttributeName>tabs</AttributeName>
          <AttributeType>string</AttributeType>
        </AttributeHeader>
        <AttributeDesc>Comma-separated custom tab names (for example, <code>"TypeScript,Python,Bash"</code>). Overrides auto-detected language labels.</AttributeDesc>
      </AttributeCard>

      <AttributeCard>
        <AttributeHeader>
          <AttributePath>Path</AttributePath>
          <AttributeName>wrap</AttributeName>
          <AttributeType>boolean | string</AttributeType>
        </AttributeHeader>
        <AttributeDesc>Controls whether long lines wrap inside the code block. Defaults to <code>false</code> (no wrapping, horizontal scrolling). Set using <code>wrap</code>, <code>wrap="true"</code>, or <code>wrap={"{true}"}</code> to enable <code>white-space: pre-wrap</code> and <code>word-break: break-word</code> with vertical scrolling only.</AttributeDesc>
      </AttributeCard>
    </DocPage>
  );
};

export default CodeGroup;