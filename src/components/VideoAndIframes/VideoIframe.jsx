import { Copy,Info } from "lucide-react";
import "./index.css";
import CodeBlock from "../../CodeBlock/CodeBlock";
import ShikiCodeBlock from "../../Shiki-CodeBlock/CodeBlock";

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
    <div className="doc-page">
      <span className="page-group">Components</span>
      <h1 className="page-title">Videos and iframes</h1>
      <p className="page-desc">
        Reference for embedding videos and iframes using the editor UI and the Video / Iframe components.
      </p>

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

      <p>For static images, see<a href="www.facebook.com" target='_blank' className='video-frames-links-images images-iframes-video'><u>Images</u></a>. For showing embed code examples (such as iframe snippets) as code instead of rendering them, use <a href="www.facebook.com" target='_blank' className='video-frames-links-images'><u>Code and Groups</u></a>.</p>

      <div className="callout">
        <span className="callout-icon"><Info size={18}/></span>
        <p>Please note that we do not support uploading videos directly on to the platform. You need to use a 3rd party platform such as YouTube, Vimeo, Loom or even MP4 URL.</p>
      </div>

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
<div className="video-embed">
    <img src="https://blob-cdn.documentation.ai/org-53a37986-2c9e-4094-b9e8-1e1ffae9e9ee/doc-b389b141-ae58-4fd5-91f9-6702fae9ac58/1767252307874-79xuo4odvfr-pasted-image-1767252306043.png?auto=format%2Ccompress&w=640&q=75" height="300px" width ="500px" className="video-iframe-image"
 />
 <p id="alt-text-videi-iframe">Video embed block with alignment and resize controls in the Web Editor</p>
 </div>      <div className="callout">
        <span className="callout-icon"><Info /></span>
        <div>
          <p><strong>Prefer writing in code?</strong></p>
          <p>You can switch to <strong>MDX view inside the Web Editor</strong> to write or edit this component using the same syntax as the Code Editor. This is useful if you want full control while staying in the Web Editor.</p>
        </div>
      </div>

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

      <h3 ><span id="video-iframe-mode">&lt;Video&gt;</span> component (iframe mode)</h3>
      <p>Use iframe mode for platforms that provide an embed URL, such as YouTube, Vimeo, Loom, or Wistia.</p>
        <button className="copy-btn" onClick={() => handleCopy(videoIframeCode)}>
          {/* <Copy size={14} /> */}
        </button>
             <ShikiCodeBlock
                language="tsx"
                code={videoIframeCode}
            />

      <p>Key props:</p>
      <ul>
        <li><code className="highlight-blocks">src</code> (string, required): Video embed URL from the platform.</li>
        <li><code>width</code> / <code>height</code> (string): Player dimensions in pixels.</li>
        <li><code>title</code> (string): Accessible title for screen readers.</li>
        <li><code>allow-full-screen</code> (boolean-like): Allow fullscreen playback (defaults to <code>true</code>).</li>
        <li><code>priority</code> (boolean-like): Load immediately instead of lazy loading.</li>
        <li><code>style</code> (string): Inline styles for alignment and sizing.</li>
      </ul>

      <h3 id="video-html5-mode"><span id="video-iframe-mode">&lt;Video&gt;</span> component (HTML5 mode)</h3>
      <p>Use HTML5 mode for self-hosted video files, with native browser controls.</p>
        <button className="copy-btn" onClick={() => handleCopy(videoHtml5Code)}>
          {/* <Copy size={14} /> */}
        </button>
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

      <h3 id="iframe-component"><span id="video-iframe-mode">&lt;Iframe&gt;</span> component</h3>
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

      <p>Use <a href="/code-and-groups" className="code-groups-video">Code and Groups</a> when you want to show iframe snippets as examples rather than render them.</p>

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
    </div>
  );
};

export default VideosAndIframes;