import { Info, Lightbulb, CircleCheckBig } from "lucide-react";
import styled from "styled-components";
import ShikiCodeBlock from "../../Shiki-CodeBlock/CodeBlock";

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
  && {
    color: var(--text-secondary);
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 32px;
  }
`;

// ── Callout boxes ─────────────────────────────────────────────────────────────
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

const TipNoteBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: #e9f2ff;
  border-radius: 12px;
  padding: 12px 16px;
  margin: 24px 0;

  && p {
    margin: 0;
    font-size: 15px;
    line-height: 24px;
    color: #005cc5;
  }

  body[data-theme="dark"] & {
    background: #052036;
  }
`;

const SuccessNoteBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: #e9f2e9;
  border-radius: 12px;
  padding: 12px 16px;
  margin: 24px 0;

  && p {
    margin: 0;
    font-size: 15px;
    line-height: 24px;
    color: #1a6938;
  }

  body[data-theme="dark"] & {
    background: #022213;
    && p { color: #a7f3d0; }
  }
`;

const NoteIcon = styled.span`
  color: var(--icon-color);
  flex-shrink: 0;
  margin-top: 4px;
`;

const TipIcon = styled.span`
  color: #005cc5;
  flex-shrink: 0;
  margin-top: 4px;
`;

const SuccessIcon = styled.span`
  color: #1a6938;
  flex-shrink: 0;
  margin-top: 4px;

  body[data-theme="dark"] & {
    color: #a7f3d0;
  }
`;

// ── Images / captions ─────────────────────────────────────────────────────────
const ImageBlock = styled.img`
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
const DocLink = styled.a`
  color: var(--text);
  font-weight: bold;
`;

// ── Table ─────────────────────────────────────────────────────────────────────
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 15px;

  th, td {
    padding: 10px 16px;
    text-align: left;
    border-bottom: 1px solid var(--border);
    color: var(--text-secondary);
  }

  th {
    font-weight: 600;
    color: var(--text);
  }
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

const AttributeRequired = styled.span`
  background-color: #fee2e2;
  color: #991b1b;
  font-size: 12px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 6px;
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

// ─────────────────────────────────────────────────────────────────────────────

const MermaidDiagrams = () => {
  return (
    <DocPage>
      <PageGroupLabel>Components</PageGroupLabel>
      <PageTitle>Mermaid Diagrams</PageTitle>
      <PageDesc>
        Reference for creating interactive diagrams using Mermaid syntax with zoom and fullscreen capabilities.
      </PageDesc>

      {/* ── Overview ── */}
      <h2 id="overview">Overview</h2>
      <p>Use Mermaid diagrams to add flowcharts, sequence diagrams, and other structured visuals directly in your docs. In Documentation.AI, Mermaid diagrams are rendered from fenced code blocks and automatically gain:</p>
      <ul>
        <li><strong>Interactive zoom controls</strong> (in and out, plus reset)</li>
        <li><strong>Fullscreen viewing</strong> for complex diagrams</li>
        <li><strong>Automatic light/dark theme support</strong> that matches your site</li>
      </ul>

      <p>Mermaid is a good fit when you want:</p>
      <ul>
        <li>Repeatable, version-controlled diagrams defined in text</li>
        <li>Architecture or API flows that evolve with your product</li>
        <li>Visual explanations that stay readable across themes and layouts</li>
      </ul>

      <p>Diagrams are created using the same code block system as other snippets. For a detailed overview of code blocks, see <DocLink href="/code-and-groups">Code and Groups</DocLink>.</p>

      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
graph LR
    A[User] --> B{Authenticated?}
    B -->|Yes| C[Process request]
    B -->|No| D[Redirect to login]
    C --> E[Return response]
    D --> F[Show login page]
\`\`\``}
      />

      <InfoNoteBox>
        <NoteIcon><Info size={18} /></NoteIcon>
        <p>Diagrams automatically switch between light and dark themes based on your site's theme settings.</p>
      </InfoNoteBox>

      {/* ── Using with Web Editor ── */}
      <h2 id="using-with-web-editor">Using with Web Editor</h2>
      <p>In the Web Editor, Mermaid diagrams are just code blocks with the language set to <code>mermaid</code>.</p>
      <ol>
        <li>Open or create a page in the <DocLink href="/web-editor">Web Editor</DocLink>.</li>
        <li>Use the slash menu (<kbd>/</kbd>) to insert a <strong>Code</strong> block.</li>
        <li>In the code block language dropdown, choose <code>mermaid</code>.</li>
        <li>Paste or write your Mermaid definition inside the block.</li>
      </ol>

      <p>For example, in the Web Editor you would configure a code block with language <code>mermaid</code> and content similar to:</p>

      <ImageBlock src="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767254767348-phbxb9ykbp-pasted-image-1767254765544.png?auto=format%2Ccompress&w=560&q=75" width="500px" />
      <AltTextCaption>Write Mermaid in Code Block</AltTextCaption>

      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
graph TD
    A[Start] --> B[Process]
    B --> C[End]
\`\`\``}
      />

      <InfoNoteBox>
        <NoteIcon><Info size={18} /></NoteIcon>
        <div>
          <p><strong>Prefer writing in code?</strong></p>
          <p>You can switch to <strong>MDX view inside the Web Editor</strong> to write or edit this component using the same syntax as the Code Editor. This is useful if you want full control while staying in the Web Editor.</p>
        </div>
      </InfoNoteBox>

      <p>For more on inserting and configuring code blocks in the Web Editor, see <DocLink href="/code-and-groups">Code and Groups</DocLink>.</p>

      {/* ── Using with Code Editor ── */}
      <h2 id="using-with-code-editor">Using with Code Editor</h2>
      <p>In the Code Editor (Markdown/MDX), Mermaid diagrams are defined as fenced code blocks with the <code>mermaid</code> language identifier.</p>

      <h3 id="basic-syntax">Basic Syntax</h3>
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
graph TD
    A[Start] --> B[Process]
    B --> C[End]
\`\`\``}
      />

      <p>Rendered example:</p>
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
graph TD
    A[Start] --> B[Process]
    B --> C[End]
\`\`\``}
      />

      <p>You can mix Mermaid blocks with any other Markdown or MDX content, including <DocLink href="/code-and-groups">Code and Groups</DocLink> when you want to show Mermaid alongside other languages.</p>

      <h3 id="zoom-controls">Zoom controls</h3>
      <p>Hover over any diagram to reveal zoom controls in the top-right corner:</p>
      <ul>
        <li><strong>Zoom In</strong> - Magnify the diagram up to 300%</li>
        <li><strong>Zoom Out</strong> - Reduce the diagram down to 50%</li>
        <li><strong>Reset</strong> - Click the percentage to reset to 100%</li>
        <li><strong>Fullscreen</strong> - View the diagram in fullscreen mode</li>
      </ul>

      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
graph LR
    Start[Hover Diagram] --> Show[Controls Appear]
    Show --> Zoom[Use Zoom Buttons]
    Show --> Full[Enter Fullscreen]
    Zoom --> View[Better Visibility]
    Full --> View
\`\`\``}
      />

      <TipNoteBox>
        <TipIcon><Lightbulb size={18} /></TipIcon>
        <p>Use fullscreen mode for complex diagrams with many nodes and connections.</p>
      </TipNoteBox>

      {/* ── Advanced Options ── */}
      <h2 id="advanced-options">Advanced Options</h2>

      <h3 id="diagram-types">Diagram types</h3>

      <h3 id="flowcharts">Flowcharts</h3>
      <p>Visualize processes, workflows, and decision trees:</p>
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
graph TD
    A[User Request] --> B{Authenticated?}
    B -->|Yes| C[Process Request]
    B -->|No| D[Redirect to Login]
    C --> E[Return Response]
    D --> F[Show Login Page]
\`\`\``}
      />

      <h3 id="sequence-diagrams">Sequence diagrams</h3>
      <p>Document API calls, interactions, and message flows:</p>
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
sequenceDiagram
    participant Client
    participant API
    participant Database
    
    Client->>API: POST /users
    API->>Database: INSERT user
    Database-->>API: Success
    API-->>Client: 201 Created
\`\`\``}
      />

      <h3 id="class-diagrams">Class diagrams</h3>
      <p>Show object-oriented structures and relationships:</p>
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
classDiagram
    class User {
        +String name
        +String email
        +login()
        +logout()
    }
    class Admin {
        +String permissions
        +manageUsers()
    }
    User <|-- Admin
\`\`\``}
      />

      <h3 id="state-diagrams">State diagrams</h3>
      <p>Illustrate application states and transitions:</p>
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
stateDiagram-v2
    [*] --> Idle
    Idle --> Processing: Start
    Processing --> Success: Complete
    Processing --> Error: Fail
    Success --> [*]
    Error --> Idle: Retry
\`\`\``}
      />

      <h3 id="entity-relationship-diagrams">Entity relationship diagrams</h3>
      <p>Design database schemas and relationships:</p>
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
erDiagram
    USER ||--o{ ORDER : places
    USER {
        string id PK
        string name
        string email
    }
    ORDER {
        string id PK
        string user_id FK
        date created_at
    }
\`\`\``}
      />

      <h3 id="gantt-charts">Gantt charts</h3>
      <p>Plan project timelines and milestones:</p>
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
gantt
    title Project Timeline
    dateFormat YYYY-MM-DD
    section Phase 1
    Design           :2024-01-01, 30d
    Development      :2024-01-15, 45d
    section Phase 2
    Testing          :2024-02-15, 20d
    Deployment       :2024-03-07, 10d
\`\`\``}
      />

      <h3 id="git-graphs">Git graphs</h3>
      <p>Visualize branching strategies and workflows:</p>
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
gitGraph
    commit
    branch develop
    checkout develop
    commit
    branch feature
    checkout feature
    commit
    commit
    checkout develop
    merge feature
    checkout main
    merge develop
\`\`\``}
      />

      <h3 id="graph-directions">Graph directions</h3>
      <p>Control flowchart layout orientation:</p>
      <Table>
        <thead>
          <tr>
            <th>Direction</th>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Top to Bottom</td>
            <td><code>graph TD</code></td>
            <td>Vertical flow (default)</td>
          </tr>
          <tr>
            <td>Left to Right</td>
            <td><code>graph LR</code></td>
            <td>Horizontal flow</td>
          </tr>
          <tr>
            <td>Bottom to Top</td>
            <td><code>graph BT</code></td>
            <td>Reverse vertical</td>
          </tr>
          <tr>
            <td>Right to Left</td>
            <td><code>graph RL</code></td>
            <td>Reverse horizontal</td>
          </tr>
        </tbody>
      </Table>

      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
graph LR
    A[Input] --> B[Process] --> C[Output]
\`\`\``}
      />

      <h3 id="node-shapes">Node shapes</h3>
      <p>Customize node appearance in flowcharts:</p>
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
graph TD
    A[Rectangle]
    B(Rounded Rectangle)
    C([Stadium Shape])
    D[[Subroutine]]
    E[(Database)]
    F((Circle))
    G>Asymmetric]
    H{Diamond}
    I{{Hexagon}}
\`\`\``}
      />

      <h3 id="arrow-types">Arrow types</h3>
      <p>Define different connection styles:</p>
      <ShikiCodeBlock
        language="markdown"
        code={`\`\`\`mermaid
graph LR
    A --> B
    C --- D
    E -.-> F
    G ==> H
    I -- Text --> J
\`\`\``}
      />

      <h3 id="theme-support">Theme support</h3>
      <p>Diagrams automatically match your documentation theme:</p>
      <ul>
        <li><strong>Light mode</strong> - Uses default Mermaid theme with light backgrounds</li>
        <li><strong>Dark mode</strong> - Uses dark Mermaid theme with appropriate colors</li>
        <li><strong>Automatic switching</strong> - Updates when theme changes</li>
      </ul>

      <SuccessNoteBox>
        <SuccessIcon><CircleCheckBig size={18} /></SuccessIcon>
        <p>No additional configuration needed. Theme switching is automatic and instant.</p>
      </SuccessNoteBox>

      <h3 id="syntax">Syntax</h3>

      <AttributeCard>
        <AttributeHeader>
          <AttributePath>Path</AttributePath>
          <AttributeName>language</AttributeName>
          <AttributeType>string</AttributeType>
          <AttributeRequired>Required</AttributeRequired>
        </AttributeHeader>
        <AttributeDesc>Use <code>mermaid</code> as the language identifier in fenced code blocks.</AttributeDesc>
      </AttributeCard>

      <AttributeCard>
        <AttributeHeader>
          <AttributePath>Path</AttributePath>
          <AttributeName>chart</AttributeName>
          <AttributeType>string</AttributeType>
          <AttributeRequired>Required</AttributeRequired>
        </AttributeHeader>
        <AttributeDesc>Mermaid diagram definition using valid Mermaid syntax.</AttributeDesc>
      </AttributeCard>

      <AttributeCard>
        <AttributeHeader>
          <AttributePath>Path</AttributePath>
          <AttributeName>id</AttributeName>
          <AttributeType>string</AttributeType>
        </AttributeHeader>
        <AttributeDesc>Custom identifier for the diagram. Auto-generated if not provided.</AttributeDesc>
      </AttributeCard>

      <h3 id="best-practices">Best practices</h3>
      <p>Keep diagrams readable and accessible:</p>
      <ul>
        <li>Focus each diagram on a single concept or flow</li>
        <li>Prefer 10–15 nodes or fewer per diagram</li>
        <li>Use clear, concise labels for nodes and edges</li>
        <li>Check readability in both light and dark themes</li>
        <li>Add nearby text that explains the diagram for screen readers</li>
      </ul>

      <TipNoteBox>
        <TipIcon><Lightbulb size={18} /></TipIcon>
        <p>Use the Mermaid Live Editor at <DocLink href="https://mermaid.live" target="_blank">mermaid.live</DocLink> to prototype and validate your diagrams before adding them to your documentation.</p>
      </TipNoteBox>
    </DocPage>
  );
};

export default MermaidDiagrams;