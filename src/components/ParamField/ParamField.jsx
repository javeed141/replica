import { Info, Lightbulb, CircleAlert } from "lucide-react";
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

  hr {
    border: none;
    border-top: 1px solid var(--border);
    margin: 32px 0;
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

  && a {
    color: #005cc5;
    text-decoration: underline;
  }

  body[data-theme="dark"] & {
    background: #052036;
  }
`;

const AlertNoteBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: #fff6e4;
  border-radius: 12px;
  padding: 12px 16px;
  margin: 24px 0;

  && p {
    margin: 0;
    font-size: 15px;
    line-height: 24px;
    color: #945600;
  }

  body[data-theme="dark"] & {
    background: #2c1f07;
    && p { color: #fbcb80; }
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

const AlertIcon = styled.span`
  color: #945600;
  flex-shrink: 0;
  margin-top: 4px;

  body[data-theme="dark"] & {
    color: #fbcb80;
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

// ── Attribute cards (ParamField style) ────────────────────────────────────────
const ParamCard = styled.div`
  border-bottom: 1px solid var(--border);
  padding: 16px 0;
`;

const ParamHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const LocationBadge = styled.span`
  font-size: 13px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 6px;
  letter-spacing: 0.025em;
  text-transform: capitalize;
  line-height: 16px;

  ${({ $variant }) => {
    switch ($variant) {
      case "path":
        return `background-color: #dbeafe; color: #1e40af;`;
      case "query":
        return `background-color: #dcfce7; color: #166534;`;
      case "header":
        return `background-color: #f3f4f6; color: #1f2937;`;
      case "body":
        return `background-color: #ffedd5; color: #9a3412;`;
      default:
        return `background-color: #dbeafe; color: #1e40af;`;
    }
  }}
`;

const ParamName = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: var(--text);
  font-family: "JetBrains Mono", ui-monospace, SFMono-Regular, Consolas, monospace;
`;

const ParamType = styled.span`
  font-size: 13px;
  color: var(--icon-color);
`;

const RequiredBadge = styled.span`
  background-color: #fee2e2;
  color: #991b1b;
  font-size: 12px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 6px;
`;

const ParamDesc = styled.p`
  && {
    margin: 8px 0 0 4px;
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.7;
  }
`;

// ── Links ─────────────────────────────────────────────────────────────────────
const DocLink = styled.a`
  color: var(--text);
  font-weight: bold;
`;

// ─────────────────────────────────────────────────────────────────────────────

const ParamFieldPage = () => {
  return (
    <DocPage>
      <PageGroupLabel>Components</PageGroupLabel>
      <PageTitle>Param Field</PageTitle>
      <PageDesc>
        Reference for documenting API parameters with location badges, types, and status indicators.
      </PageDesc>

      {/* ── Overview ── */}
      <h2 id="overview">Overview</h2>
      <p>The <strong>ParamField</strong> component lets you describe API parameters with:</p>
      <ul>
        <li><strong>Location badges:</strong> Path, Query, Header, or Body</li>
        <li><strong>Type labels:</strong> Such as string, integer, or boolean</li>
        <li><strong>Status tags:</strong> Required and Deprecated</li>
        <li><strong>Rich descriptions:</strong> Supporting any MDX content</li>
      </ul>

      <p>You can work with ParamField in two ways:</p>
      <ul>
        <li><strong>Editor UI:</strong> Add and edit parameters visually with a form-based panel.</li>
        <li><strong>MDX:</strong> Use the <code>&lt;ParamField&gt;</code> component directly in your content.</li>
      </ul>

      <hr />

      {/* ── Using with Web Editor ── */}
      <h2 id="using-with-web-editor">Using with Web Editor</h2>

      <h3 id="add-a-paramfield-block">Add a ParamField block</h3>
      <ol>
        <li>Place your cursor where you want the parameter description.</li>
        <li>Type <kbd>/</kbd> to open the command menu and search for <strong>Param Field</strong> (or <strong>Param</strong>).</li>
        <li>Select <strong>Param Field</strong> to insert the component.</li>
      </ol>

      <p>A new parameter row appears with default badges and a description placeholder.</p>

      <InfoNoteBox>
        <NoteIcon><Info size={18} /></NoteIcon>
        <div>
          <p><strong>Prefer writing in code?</strong></p>
          <p>You can switch to <strong>MDX view inside the Web Editor</strong> to write or edit this component using the same syntax as the Code Editor. This is useful if you want full control while staying in the Web Editor.</p>
        </div>
      </InfoNoteBox>

      <h3 id="edit-parameter-metadata">Edit parameter metadata</h3>

      <ImageBlock src="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1765440697002-ez7mcd5l409-pasted-image-1765440695130.png?auto=format%2Ccompress&w=560&q=75" width="400px" />

      <p>To change the badges and tags:</p>
      <ol>
        <li>Click the <strong>three-dot menu</strong> on the right side of the ParamField block.</li>
        <li>In the <strong>Parameter</strong> settings panel, you can edit:</li>
      </ol>
      <ul>
        <li><strong>Location:</strong> Choose <strong>Path</strong>, <strong>Query</strong>, <strong>Body</strong>, or <strong>Header</strong>.</li>
        <li><strong>Parameter Name:</strong> Set the name shown next to the badge (for example, <code>id</code>, <code>limit</code>, <code>Authorization</code>).</li>
        <li><strong>Type:</strong> Enter the data type (for example, <code>string</code>, <code>integer</code>, <code>boolean</code>).</li>
        <li><strong>Required:</strong> Toggle on to mark the parameter as required.</li>
        <li><strong>Deprecated:</strong> Toggle on to show the Deprecated badge.</li>
      </ul>

      <p>Click <strong>Save</strong> to apply your changes.</p>

      <h3 id="edit-the-description">Edit the description</h3>
      <ul>
        <li>
          Click in the <strong>description area</strong> under the badges (for example, <em>Parameter description…</em>).
        </li>
        <li>
          Add your explanation using any supported content:
          <ul>
            <li>Text and headings</li>
            <li>Lists and tables</li>
            <li>Code blocks</li>
            <li>Callouts and other MDX components</li>
          </ul>
        </li>
      </ul>

      <ImageBlock src="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1765440779786-2jpk8n2hblx-pasted-image-1765440777294.png?auto=format%2Ccompress&w=560&q=75" width="400px" />

      <TipNoteBox>
        <TipIcon><Lightbulb size={18} /></TipIcon>
        <div>
          <p>Want to hide the location badge entirely? This is currently controlled in MDX using <code>show-location="false"</code>.</p>
          <p>You can either <a href="#hide-location-badge">control location in MDX</a> view or ask the AI Agent to "hide the location badge for this parameter" and let it update the code for you.</p>
        </div>
      </TipNoteBox>

      {/* ── Using with Code Editor ── */}
      <h2 id="using-with-code-editor">Using with Code Editor</h2>

      <h3 id="basic-syntax">Basic syntax</h3>
      <p>Use the <code>&lt;ParamField&gt;</code> component to document API parameters with their location, type, and requirements.</p>

      <ShikiCodeBlock
        language="jsx"
        code={`<ParamField path="id" param-type="string" required="true">
  Unique identifier for the resource.
</ParamField>`}
      />

      <ParamCard>
        <ParamHeader>
          <LocationBadge $variant="path">path</LocationBadge>
          <ParamName>id</ParamName>
          <ParamType>string</ParamType>
          <RequiredBadge>Required</RequiredBadge>
        </ParamHeader>
        <ParamDesc>Unique identifier for the resource.</ParamDesc>
      </ParamCard>

      <h3 id="hide-location-badge">Hide location badge</h3>
      <p>Use <code>show-location="false"</code> to hide the location badge:</p>

      <ShikiCodeBlock
        language="jsx"
        code={`<ParamField query="token" param-type="string" show-location="false" required="true">
  Authentication token without location badge.
</ParamField>`}
      />

      <ParamCard>
        <ParamHeader>
          <LocationBadge $variant="query">query</LocationBadge>
          <ParamName>token</ParamName>
          <ParamType>string</ParamType>
          <RequiredBadge>Required</RequiredBadge>
        </ParamHeader>
        <ParamDesc>Authentication token without location badge.</ParamDesc>
      </ParamCard>

      {/* ── Advanced options ── */}
      <h2 id="advanced-options">Advanced options</h2>

      <h3 id="attributes">Attributes</h3>

      <ParamCard>
        <ParamHeader>
          <LocationBadge $variant="path">path</LocationBadge>
          <ParamName>path</ParamName>
          <ParamType>string</ParamType>
        </ParamHeader>
        <ParamDesc>Parameter name for URL path parameters.</ParamDesc>
      </ParamCard>

      <ParamCard>
        <ParamHeader>
          <LocationBadge $variant="query">query</LocationBadge>
          <ParamName>query</ParamName>
          <ParamType>string</ParamType>
        </ParamHeader>
        <ParamDesc>Parameter name for query string parameters.</ParamDesc>
      </ParamCard>

      <ParamCard>
        <ParamHeader>
          <LocationBadge $variant="header">header</LocationBadge>
          <ParamName>header</ParamName>
          <ParamType>string</ParamType>
        </ParamHeader>
        <ParamDesc>Parameter name for HTTP headers.</ParamDesc>
      </ParamCard>

      <ParamCard>
        <ParamHeader>
          <LocationBadge $variant="body">body</LocationBadge>
          <ParamName>body</ParamName>
          <ParamType>string</ParamType>
        </ParamHeader>
        <ParamDesc>Parameter name for request body fields.</ParamDesc>
      </ParamCard>

      <ParamCard>
        <ParamHeader>
          <LocationBadge $variant="query">query</LocationBadge>
          <ParamName>param-type</ParamName>
          <ParamType>string</ParamType>
        </ParamHeader>
        <ParamDesc>Data type: <code>string</code>, <code>integer</code>, <code>boolean</code>, <code>object</code>, <code>array</code>, etc.</ParamDesc>
      </ParamCard>

      <ParamCard>
        <ParamHeader>
          <LocationBadge $variant="query">query</LocationBadge>
          <ParamName>required</ParamName>
          <ParamType>string</ParamType>
        </ParamHeader>
        <ParamDesc>Set to <code>"true"</code> for required parameters (default: <code>"false"</code>).</ParamDesc>
      </ParamCard>

      <ParamCard>
        <ParamHeader>
          <LocationBadge $variant="query">query</LocationBadge>
          <ParamName>deprecated</ParamName>
          <ParamType>string</ParamType>
        </ParamHeader>
        <ParamDesc>Set to <code>"true"</code> to mark as deprecated (default: <code>"false"</code>).</ParamDesc>
      </ParamCard>

      <ParamCard>
        <ParamHeader>
          <LocationBadge $variant="query">query</LocationBadge>
          <ParamName>show-location</ParamName>
          <ParamType>string</ParamType>
        </ParamHeader>
        <ParamDesc>Set to <code>"false"</code> to hide the location badge (default: <code>"true"</code>).</ParamDesc>
      </ParamCard>

      <AlertNoteBox>
        <AlertIcon><CircleAlert size={18} /></AlertIcon>
        <p>Use exactly one location attribute (<code>path</code>, <code>query</code>, <code>header</code>, or <code>body</code>) per ParamField.</p>
      </AlertNoteBox>
    </DocPage>
  );
};

export default ParamFieldPage;