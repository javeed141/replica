import { Info } from "lucide-react";
import styled from "styled-components";
import ShikiCodeBlock from "../../Shiki-CodeBlock/CodeBlock";

// ── Page layout ───────────────────────────────────────────────────────────────
const DocPage = styled.div`
  max-width: 672px;
  font-family: "Inter", system-ui, -apple-system, sans-serif;
  color: rgb(55, 65, 81);
  font-size: 16px;
  line-height: 28px;
  margin-left: 40px;
  margin-bottom: 40px;

  h2 {
    font-size: 22px;
    font-weight: 600;
    color: #0f0f0f;
    margin-top: 40px;
    margin-bottom: 16px;
    line-height: 1.3;
  }

  h3 {
    font-size: 17px;
    font-weight: 600;
    color: #0f0f0f;
    margin-top: 28px;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  p {
    font-size: 14px;
    line-height: 28px;
    color: rgb(55, 65, 81);
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
    color: rgb(55, 65, 81);
    margin-bottom: 6px;
  }

  li p {
    margin-bottom: 0;
  }

  code {
    font-family: "JetBrains Mono", "JetBrains Mono Fallback", ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 14px;
    background-color: rgba(175, 184, 193, 0.2);
    padding: 2px 6px;
    border-radius: 5px;
    color: #0f0f0f;
  }

  kbd {
    font-family: "JetBrains Mono", "JetBrains Mono Fallback", ui-monospace, SFMono-Regular, Consolas, monospace;
    font-size: 13px;
    background: lch(97.26% 0.52 290.36);
    border: 1px solid #ddd;
    padding: 1px 6px;
    border-radius: 4px;
  }

  strong {
    font-weight: 600;
    color: #0f0f0f;
  }
`;

const PageGroupLabel = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: #6b6b6b;
  text-transform: capitalize;
  display: block;
  margin-bottom: 14px;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #0f0f0f;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
  line-height: 1.2;
`;

const PageDesc = styled.p`
  && {
    color: rgb(55, 65, 81);
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
  background: #f7f8f8;
  border-radius: 12px;
  padding: 12px 16px;
  margin: 24px 0;

  && p {
    margin: 0;
    font-size: 15px;
    line-height: 24px;
    color: #4b4c4d;
  }
`;

const InfoNoteIcon = styled.span`
  color: #858789;
  font-size: 10px;
  flex-shrink: 0;
  margin-top: 4px;
`;

// ── Video / iframe elements ───────────────────────────────────────────────────
const VideoEmbed = styled.div`
  margin: 24px 0;
  border-radius: 12px;
  overflow: hidden;

  iframe {
    width: 100%;
    height: 378px;
    border: none;
  }
`;

const VideoIframeImage = styled.img`
  border: 0;
  border-radius: 10px;
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const VideoAltText = styled.p`
  && {
    margin-left: 70px;
    color: #646363;
    font-size: 13.5px;
  }
`;

// ── Inline code span for component names in headings ──────────────────────────
const VideoIframeCode = styled.span`
  font-weight: normal;
  background-color: rgba(227, 226, 224, 0.5);
  border-radius: 4px;
  padding: 2px 5px;
  font-size: 14px;
  font-family: "JetBrains Mono", "JetBrains Mono Fallback", ui-monospace, SFMono-Regular, Consolas, monospace;
  color: #444141;
  letter-spacing: -0.2px;
`;

// ── Links ─────────────────────────────────────────────────────────────────────
const VideoFramesLink = styled.a`
  font-weight: bold;
  color: #343131;
  text-decoration: none;
  ${({ $withMargin }) => $withMargin && `margin-left: 10px;`}
`;

const CodeGroupsLink = styled.a`
  color: #343131;
  font-weight: bold;
`;

// ── Copy button ───────────────────────────────────────────────────────────────
const CopyBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: white;
  border: none;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  color: #666;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    color: #0f0f0f;
    background: #f5f5f5;
  }
`;

// ─────────────────────────────────────────────────────────────────────────────

const VideosAndIframes = () => {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const videoIframeCode = `<Video
  src="https://www.youtube.com/embed/Reu01KxMSF0"
  title="Feature overview video"
  width="672"
  height="378"
  allow-full-screen="true"
  style="width: 100%; max-width: 672px; height: auto;"
/>`;

  const videoHtml5Code = `<Video
  src="https://example.com/video/feature-walkthrough.mp4"
  width="672"
  height="378"
  controls="true"
  poster="https://example.com/video/feature-walkthrough-poster.jpg"
  preload="metadata"
  fetchPriority="high"
  style="width: 100%; max-width: 672px; height: auto;"
/>`;

  const iframeCode = `<Iframe
  src="https://docs.google.com/forms/d/e/1FAIpQLSexample/viewform"
  title="Customer feedback form"
  width="100%"
  height="600"
  sandbox="allow-scripts allow-same-origin allow-presentation"
  allow-full-screen="true"
  style="border: 1px solid #e5e7eb; border-radius: 8px;"
/>`;

  return (
    <DocPage>
      <PageGroupLabel>Components</PageGroupLabel>
      <PageTitle>Videos and iframes</PageTitle>
      <PageDesc>
        Reference for embedding videos and iframes using the editor UI and the Video / Iframe components.
      </PageDesc>

      <h2 id="overview">Overview</h2>
      <p>Use videos and iframes to embed rich, interactive content directly in your docs, such as:</p>
      <ul>
        <li>Product walkthroughs and demos (YouTube, Vimeo, Loom)</li>
        <li>Self-hosted video files (MP4, WebM, OGG)</li>
        <li>External tools and dashboards (forms, analytics, sandboxes)</li>
      </ul>

      <p>In Documentation.AI you can:</p>
      <ul>
        <li>Use the <strong>Web Editor</strong> to paste links or embed codes and adjust layout visually.</li>
        <li>Use the <strong>Code Editor</strong> to write <code>&lt;Video&gt;</code> and <code>&lt;Iframe&gt;</code> components in MDX for full control.</li>
      </ul>

      <p>For static images, see<VideoFramesLink href="www.facebook.com" target='_blank' $withMargin><u>Images</u></VideoFramesLink>. For showing embed code examples (such as iframe snippets) as code instead of rendering them, use <VideoFramesLink href="www.facebook.com" target='_blank'><u>Code and Groups</u></VideoFramesLink>.</p>

      <InfoNoteBox>
        <InfoNoteIcon><Info size={18}/></InfoNoteIcon>
        <p>Please note that we do not support uploading videos directly on to the platform. You need to use a 3rd party platform such as YouTube, Vimeo, Loom or even MP4 URL.</p>
      </InfoNoteBox>

      <h2 id="using-with-web-editor">Using with Web Editor</h2>
      <h3 id="insert-a-video-or-iframe">Insert a video or iframe</h3>
      <ol>
        <li>Place your cursor on a new line in the Web Editor.</li>
        <li>Type <kbd>/</kbd> and select <strong>Video</strong>.</li>
        <li>
          In the <strong>Video URL or Embed Code</strong> dialog, paste either:
          <ul>
            <li>A <strong>video URL</strong> (YouTube, Vimeo, Loom, MP4 URL, etc.), or</li>
            <li>An <code>iframe</code> <strong>embed code</strong> copied from another tool.</li>
          </ul>
        </li>
        <li>Click <strong>Insert Video</strong>. The video or iframe appears in your document.</li>
      </ol>

      <p>You can use the same block for both direct video URLs and iframe-based embeds from other platforms.</p>
      <VideoEmbed>
        <VideoIframeImage src="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767252307874-79xuo4odvfr-pasted-image-1767252306043.png?auto=format%2Ccompress&w=640&q=75" height="300px" width="500px" />
        <VideoAltText>Video embed block with alignment and resize controls in the Web Editor</VideoAltText>
      </VideoEmbed>
      <InfoNoteBox>
        <InfoNoteIcon><Info /></InfoNoteIcon>
        <div>
          <p><strong>Prefer writing in code?</strong></p>
          <p>You can switch to <strong>MDX view inside the Web Editor</strong> to write or edit this component using the same syntax as the Code Editor. This is useful if you want full control while staying in the Web Editor.</p>
        </div>
      </InfoNoteBox>

      <h3 id="align-and-resize">Align and resize</h3>
      <p>Hover over the embedded video or iframe to reveal controls:</p>
      <ul>
        <li>
          <strong>Top-right toolbar</strong>
          <ul>
            <li><strong>Alignment icon:</strong> Change alignment (for example, left, center, or right), similar to images.</li>
            <li><strong>Other actions:</strong> May include zoom or delete, depending on your configuration.</li>
          </ul>
        </li>
        <li>
          <strong>Side drag handles</strong>
          <ul>
            <li>Drag the <strong>left</strong> or <strong>right</strong> handle to adjust the <strong>width</strong>.</li>
            <li>The <strong>height adjusts automatically</strong> to keep the original aspect ratio for videos.</li>
          </ul>
        </li>
      </ul>

      <p>Use these controls to keep layouts consistent with nearby content and images.</p>

      <h2 id="using-with-code-editor">Using with Code Editor</h2>
      <p>In the Code Editor, you work directly in MDX using the <code>&lt;Video&gt;</code> and <code>&lt;Iframe&gt;</code> components.</p>

      <h3><VideoIframeCode>&lt;Video&gt;</VideoIframeCode> component (iframe mode)</h3>
      <p>Use iframe mode for platforms that provide an embed URL, such as YouTube, Vimeo, Loom, or Wistia.</p>
        <CopyBtn onClick={() => handleCopy(videoIframeCode)}>
          {/* <Copy size={14} /> */}
        </CopyBtn>
        <ShikiCodeBlock
          language="tsx"
          code={videoIframeCode}
        />

      <p>Key props:</p>
      <ul>
        <li><code>src</code> (string, required): Video embed URL from the platform.</li>
        <li><code>width</code> / <code>height</code> (string): Player dimensions in pixels.</li>
        <li><code>title</code> (string): Accessible title for screen readers.</li>
        <li><code>allow-full-screen</code> (boolean-like): Allow fullscreen playback (defaults to <code>true</code>).</li>
        <li><code>priority</code> (boolean-like): Load immediately instead of lazy loading.</li>
        <li><code>style</code> (string): Inline styles for alignment and sizing.</li>
      </ul>

      <h3 id="video-html5-mode"><VideoIframeCode>&lt;Video&gt;</VideoIframeCode> component (HTML5 mode)</h3>
      <p>Use HTML5 mode for self-hosted video files, with native browser controls.</p>
        <CopyBtn onClick={() => handleCopy(videoHtml5Code)}>
          {/* <Copy size={14} /> */}
        </CopyBtn>
        <ShikiCodeBlock
          language="tsx"
          code={videoHtml5Code}
        />

      <p>Additional props for HTML5 playback:</p>
      <ul>
        <li><code>controls</code> (boolean-like): Show video controls (defaults to <code>true</code>).</li>
        <li><code>autoplay</code> (boolean-like): Start playing when the page loads.</li>
        <li><code>muted</code> (boolean-like): Start muted (often required for autoplay).</li>
        <li><code>loop</code> (boolean-like): Loop playback.</li>
        <li><code>poster</code> (string): Poster image shown before playback.</li>
        <li><code>preload</code> (string): <code>none</code>, <code>metadata</code>, or <code>auto</code>.</li>
        <li><code>fetchPriority</code> (string): <code>high</code>, <code>low</code>, or <code>auto</code>.</li>
      </ul>

      <h3 id="iframe-component"><VideoIframeCode>&lt;Iframe&gt;</VideoIframeCode> component</h3>
      <p>Use <code>&lt;Iframe&gt;</code> for non-video embeds such as forms, dashboards, and interactive tools.</p>
      <ShikiCodeBlock
        language="tsx"
        code={iframeCode}
      />

      <p>Key props:</p>
      <ul>
        <li><code>src</code> (string, required): URL of the external content.</li>
        <li><code>width</code> / <code>height</code> (string): Dimensions in pixels or percentages.</li>
        <li><code>title</code> (string): Accessible title for screen readers.</li>
        <li><code>allow-full-screen</code> (boolean-like): Allow fullscreen where supported.</li>
        <li><code>sandbox</code> (string): Space-separated sandbox restrictions.</li>
        <li><code>priority</code> (boolean-like): Load immediately instead of lazy loading.</li>
        <li><code>style</code> (string): Inline styles for borders and layout.</li>
      </ul>

      <p>Use <CodeGroupsLink href="/code-and-groups">Code and Groups</CodeGroupsLink> when you want to show iframe snippets as examples rather than render them.</p>

      <h2 id="advanced-options">Advanced options</h2>
      <h3 id="platform-support">Platform support</h3>
      <p>Commonly used video sources:</p>
      <ul>
        <li><strong>Video platforms:</strong> YouTube, Vimeo, Loom, Wistia</li>
        <li><strong>Video formats (HTML5):</strong> MP4, WebM, OGG</li>
      </ul>

      <p>Most platforms provide both a shareable URL and an iframe embed code; use whichever best matches your workflow (Web Editor block or MDX component).</p>

      <h3 id="accessibility">Accessibility and layout best practices</h3>
      <ul>
        <li>Always set a meaningful <code>title</code> on <code>&lt;Video&gt;</code> (iframe mode) and <code>&lt;Iframe&gt;</code> for better screen reader support.</li>
        <li>Specify <code>width</code> and <code>height</code> to improve layout stability and avoid content shifting as media loads.</li>
        <li>Use responsive styles (for example, <code>style="width: 100%; max-width: 672px; height: auto;"</code>) so embeds look good on smaller screens.</li>
        <li>For important, above-the-fold media, consider <code>priority="true"</code> or <code>fetchPriority="high"</code>; otherwise, rely on lazy loading to keep pages fast.</li>
      </ul>

      <h3 id="security">Security considerations for iframes</h3>
      <ul>
        <li>Use the <code>sandbox</code> attribute on <code>&lt;Iframe&gt;</code> to limit what embedded content can do.</li>
        <li>
          Start with a restrictive value and add only what you need, for example:
          <ul>
            <li><code>sandbox="allow-scripts allow-same-origin allow-presentation"</code></li>
          </ul>
        </li>
        <li>Only embed content from origins you trust, especially when allowing scripts or same-origin access.</li>
      </ul>
    </DocPage>
  );
};

export default VideosAndIframes;
