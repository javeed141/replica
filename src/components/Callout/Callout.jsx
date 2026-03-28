// import { CircleAlert, CircleCheckBig, Info, Lightbulb, TriangleAlert } from 'lucide-react'
// import React from 'react'
// import "./index.css"
// import CodeBlock from '../../CodeBlock/CodeBlock'

// const Callout = () => {
//     return (
//         <div className='callout-wrapper'>
//             <h1 className='callout-main-title'>Callout</h1>
//             <p className='callout-main-desc'>Callout
//                 Reference for displaying highlighted information and alerts using the Callout component.</p>

//             <h1 className='callout-overview-title'>Overview</h1>
//             <p className='callout-overview-desc'>Overview
//                 Callouts are boxed sections used to highlight tips, warnings, success messages, and other important notes inside your Documentation.AI pages.</p>

//             <p className='callout-use-intro'>Use callouts when you need to:</p>
//             <ul className='callout-use-list'>
//                 <li className='callout-use-item-1'>Draw attention to key information without breaking reading flow.</li>
//                 <li className='callout-use-item-2'>Warn about breaking changes, security risks, or destructive actions.</li>
//                 <li className='callout-use-item-3'>Provide tips and best practices alongside procedural steps</li>
//                 <li className='callout-use-item-4'>Confirm successful outcomes (for example, deployment complete, sync finished).</li>
//             </ul>

//             <p className=''>Callouts work alongside your regular <a href="www.facebook.com" target='_blank' className='callout-link-headings'> <u>Headings and Text</u></a> and are often used with <a href="www.facebook.com" target='_blank' className='callout-link-expandables'> <u>Expandables</u></a> when you want to hide long notes or advanced caveats behind a collapsible section.</p>

//             <p className='callout-kinds-intro'>Available callout kinds:</p>
//             <ul className='callout-use-list'>
//                 <li className='callout-kind-item-info'><span className='callout-info'>info:</span> Neutral information</li>
//                 <li className='callout-kind-item-tip'><span className='callout-info'>tip:</span> Helpful suggestions and best practices.</li>
//                 <li className='callout-kind-item-success'><span className='callout-info'>success:</span> Positive confirmations and results.</li>
//                 <li className='callout-kind-item-alert'><span className='callout-info'>alert:</span> Warnings and cautions.</li>
//                 <li className='callout-kind-item-danger'><span className='callout-info'>danger:</span> Critical errors and destructive actions.</li>
//             </ul>

//             <h1 className='callout-editor-title'>Using with Web Editor</h1>
//             <p className='callout-editor-desc'>In the Web Editor, you can insert callouts without writing any code.</p>
//             <ol className='callout-steps-list callout-use-list'>
//                 <li className='callout-step-1'>Place your cursor where you want the callout.</li>
//                 <li className='callout-step-2'>Type <span className='shadow-slash'>/</span> to open the block menu.</li>
//                 <li className='callout-step-3'>Search for <strong className='callout-step-bold'>Callout</strong> and choose the style you want (Info, Tip, Alert, Danger, or Success).</li>
//                 <li className='callout-step-4'>Start typing inside the callout block to add or edit content like a normal paragraph.</li>
//             </ol>

//             <p className='callout-styles-intro'>All callout styles:</p>
//             <div className='color-callouts'>
//                 <div className='list-icons callout-info-box'>
//                     <span className='callout-info-icon'><Info size={17} /></span>
//                     <p className='callout-info-text'>This is an info callout for neutral notes or clarifications in your docs.</p>
//                 </div>
//                 <div className='list-icons callout-tip-box'>
//                     <span className='callout-info-icon'><Lightbulb size={17} /></span>
//                     <p className='callout-tip-text'>This is a tip callout for helpful suggestions and best practices.</p>
//                 </div>
//                 <div className='list-icons callout-success-box'>
//                     <span className='callout-info-icon'><CircleCheckBig size={17} /></span>
//                     <p className='callout-success-text'>This is a success callout to confirm that an action or process completed correctly.</p>
//                 </div>
//                 <div className='list-icons callout-alert-box'>
//                     <span className='callout-info-icon'><CircleAlert size={17} /></span>
//                     <p className='callout-alert-text'>This is an alert callout to flag something that needs extra attention.</p>
//                 </div>
//                 <div className='list-icons callout-danger-box'>
//                     <span className='callout-info-icon'><TriangleAlert size={17} /></span>
//                     <p className='callout-danger-text'>This is a danger callout to flag critical errors or destructive actions.</p>
//                 </div>
//             </div>
//             <p className='callout-alongside-desc expandable-section-heading-1'>If you need to keep long disclaimers or edge cases out of the main flow, consider wrapping the callout content inside an <a href="www.facebook.com" target='_blank' className='callout-link-headings'> <u>Expandables</u></a> instead.</p>
//             <h1 className='callout-code-editor'>Using with Code Editor</h1>
//             <p>In MDX, use the <span className='callout-info'>Callout</span> component with a <span className='callout-info'>kind</span> attribute to control the visual style. The <span className='callout-info'>kind</span> value must be one of <span className='callout-info'>info</span>, <span className='callout-info'>tip</span>, <span className='callout-info'>success</span>, <span className='callout-info'>alert</span>, or <span className='callout-info'>danger</span>.</p>
//             <h2 className='expandable-section-heading-1'>Basic Syntax</h2>
//             <CodeBlock
//                 language="tsx"
//                 code={`<Callout kind="info">
//   This is an informational callout.
// </Callout>
// `}
//             />
//             <h3 className='info-heading-callout'>Info</h3>
//             <p>Use for neutral notes or clarifications.</p>
//             <CodeBlock
//                 language="tsx"
//                 code={`<Callout kind="info">
//   Configure your API key in the settings before making requests.
// </Callout>
// `} />
//             <h3 className='info-heading-callout'>Tip</h3>
//             <p>Use for recommendations, shortcuts, or best practices.</p>
//             <CodeBlock
//                 language="tsx"
//                 code={`<Callout kind="tip">
//   Use environment variables to store sensitive configuration like API keys.
// </Callout>`}
//             />
//             <div className='list-icons callout-tip-box'>
//                 <span className='callout-info-icon'><Lightbulb size={17} /></span>
//                 <p className='callout-tip-text'>Use environment variables to store sensitive configuration like API keys.</p>
//             </div>

//             <h3 className='info-heading-callout'>Alert</h3>
//             <p>Use for warnings that require extra attention but are not strictly fatal.</p>
//             <CodeBlock
//                 language="tsx"
//                 code={`<Callout kind="alert">
//   This action cannot be undone. Make sure you have a backup before proceeding.
// </Callout>`}
//             />
//             <div className='list-icons callout-alert-box'>
//                 <span className='callout-info-icon'><CircleAlert size={17} /></span>
//                 <p className='callout-alert-text'>This action cannot be undone. Make sure you have a backup before proceeding.</p>
//             </div>

//             <h3 className='info-heading-callout'>Danger</h3>
//             <p>Use for destructive or high-risk actions.</p>
//             <CodeBlock
//                 language="tsx"
//                 code={`<Callout kind="danger">
//   Deleting this workspace will permanently remove all documentation and cannot be recovered.
// </Callout>`}
//             />
//             <div className='list-icons callout-danger-box'>
//                 <span className='callout-info-icon'><TriangleAlert size={17} /></span>
//                 <p className='callout-danger-text'>Deleting this workspace will permanently remove all documentation and cannot be recovered.</p>
//             </div>

//             <h3 className='info-heading-callout'>Success</h3>
//             <p>Use for confirmations and positive outcomes.</p>
//             <CodeBlock
//                 language="tsx"
//                 code={`<Callout kind="success">
//   Your documentation has been successfully deployed and is live.
// </Callout>`}
//             />
//             <div className='list-icons callout-success-box'>
//                 <span className='callout-info-icon'><CircleCheckBig size={17} /></span>
//                 <p className='callout-success-text'>Your documentation has been successfully deployed and is live.</p>
//             </div>

//             <h2 className='expandable-section-heading-1'>Attributes</h2>
//             <div className='callout-attributes-section'>
//                 <div className='callout-attribute-header'>
//                     <span className='attribute-path'>Path</span>
//                     <span className='attribute-name'>kind</span>
//                     <span className='attribute-type'>string</span>
//                 </div>
//                 <p className='attribute-desc'>Visual style and icon for the callout. One of: <span className='callout-info'>info</span> (default), <span className='callout-info'>tip</span>, <span className='callout-info'>success</span>, <span className='callout-info'>alert</span>, <span className='callout-info'>danger</span>.</p>
//             </div>

//             <h2 className='expandable-section-heading-1'>Advanced options</h2>
//             <p>Callouts support a collapsed state to help keep pages scannable when you have long explanations or optional details.</p>
//             <ul className='callout-use-list'>
//                 <li><span className='callout-info'>collapsed="false"</span>: The callout content is fully visible.</li>
//                 <li><span className='callout-info'>collapsed="true"</span>: The callout content is hidden until the reader expands it.</li>
//             </ul>
//             <p>Example:</p>
//             <CodeBlock
//                 language="tsx"
//                 code={`<Callout kind="info" collapsed="true">
//   This is an optional deep-dive explanation that starts collapsed.
// </Callout>`}
//             />
//             <p>When you need more structured or multi-paragraph content that should start hidden, combine callouts with <a href="www.facebook.com" target='_blank' className='callout-link-headings'><u>Expandables</u></a> or use headings and body copy from <a href="www.facebook.com" target='_blank' className='callout-link-headings'><u>Headings and Text</u></a> inside the callout for clearer hierarchy.</p>




//         </div>
//     )
// }

// export default Callout
import { CircleAlert, CircleCheckBig, Info, Lightbulb, TriangleAlert } from 'lucide-react'
import styled from 'styled-components'
import ShikiCodeBlock from '../../Shiki-CodeBlock/CodeBlock'

// ── Wrapper ──────────────────────────────────────────────────────────────────
const CalloutWrapper = styled.div`
  max-width: 672px;
  font-family: "Inter", system-ui, -apple-system, sans-serif;
  color: rgb(55, 65, 81);
  font-size: 16px;
  line-height: 28px;
  margin-left: 80px;
  margin-bottom: 40px;
`;

// ── Headings ──────────────────────────────────────────────────────────────────
const CalloutMainTitle = styled.h1`
  margin-bottom: 10px;
`;

const CalloutOverviewTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 12px;
`;

const CalloutEditorTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #161515;
  margin-top: 28px;
  margin-bottom: 12px;
  line-height: 1.4;
`;

const CalloutCodeEditorTitle = styled.h1`
  font-size: 24px;
  margin: 20px 0 10px 0;
`;

const ExpandableSectionH2 = styled.h2`
  margin-top: 22px;
  margin-bottom: 10px;
`;

const InfoHeadingCallout = styled.h3`
  font-size: 17px;
  font-weight: 600;
  color: #161515;
  margin-top: 28px;
  margin-bottom: 12px;
  line-height: 1.4;
`;

// ── Paragraphs ────────────────────────────────────────────────────────────────
const CalloutMainDesc = styled.p`
  margin-top: 15px;
  margin-bottom: 19px;
`;

const CalloutOverviewDesc = styled.p`
  margin-top: 12px;
  margin-bottom: 12px;
`;

const CalloutIntroP = styled.p`
  margin: 10px 0;
`;

const CalloutStylesIntro = styled.p`
  font-weight: 600;
`;

const ExpandableSectionP = styled.p`
  margin-top: 22px;
  margin-bottom: 10px;
`;

// ── Lists ─────────────────────────────────────────────────────────────────────
const CalloutUseList = styled.ul`
  list-style-type: disc;
  padding: 5px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-bottom: 12px;
`;

const CalloutStepsList = styled.ol`
  list-style-type: decimal;
  padding: 5px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 12px;
`;

// ── Inline badges / links ──────────────────────────────────────────────────────
const CalloutInfoBadge = styled.span`
  background-color: rgba(227, 226, 224, 0.5);
  border-radius: 4px;
  padding: 2px 5px;
  font-size: 13.5px;
  font-family: "JetBrains Mono", "JetBrains Mono Fallback", ui-monospace, SFMono-Regular, Consolas, monospace;
  color: #0f0e0e;
  letter-spacing: -0.2px;
`;

const CalloutLink = styled.a`
  color: #343131;
  font-weight: bold;
`;

const ShadowSlash = styled.span`
  background-color: rgb(248, 245, 243);
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0px 1px 2px rgba(152, 53, 53, 0.1);
`;

// ── Callout boxes ─────────────────────────────────────────────────────────────
const CalloutBoxBase = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 10px 0;
  border: 0;
  border-radius: 10px;
  padding: 9px;
  font-size: 15px;
`;

const CalloutInfoBox = styled(CalloutBoxBase)`
  background-color: #f1f1ef;
  color: #37352f;
`;

const CalloutTipBox = styled(CalloutBoxBase)`
  background-color: #f0f7ff;
  color: #1a4480;
`;

const CalloutSuccessBox = styled(CalloutBoxBase)`
  background-color: #f0faf0;
  color: #2b5e2b;
`;

const CalloutAlertBox = styled(CalloutBoxBase)`
  background-color: #fdf8ef;
  color: #6b5620;
`;

const CalloutDangerBox = styled(CalloutBoxBase)`
  background-color: #fdf3ec;
  color: #d72a2a;
`;

const CalloutInfoIcon = styled.span`
  margin-top: 3px;
  margin-left: 7px;
  margin-right: 10px;
`;

const ColorCallouts = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

// ── Info note box (the "Prefer writing in code?" block) ───────────────────────
const InfoNoteBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: #f7f8f8;
  border-radius: 12px;
  padding: 12px 16px;
  margin: 24px 0;

  p {
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

// ── Attributes section ────────────────────────────────────────────────────────
const CalloutAttributesSection = styled.div`
  border: 0 solid #e5e7eb;
  border-radius: 8px;
  padding: 20px 24px;
  margin: 16px 0;
`;

const CalloutAttributeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  border: 0;
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
  font-weight: 600;
  font-size: 15px;
  color: #1a1a1a;
`;

const AttributeType = styled.span`
  font-size: 14px;
  color: #6b7280;
`;

const AttributeDesc = styled.p`
  margin: 0;
  font-size: 15px;
  color: #37352f;
  line-height: 1.6;
`;

const PreferCodeText = styled.p`
  margin-bottom: 10px;
  font-weight: 400;
`;

// ─────────────────────────────────────────────────────────────────────────────

const Callout = () => {
    return (
        <CalloutWrapper>
            <CalloutMainTitle>Callout</CalloutMainTitle>
            <CalloutMainDesc>Callout
                Reference for displaying highlighted information and alerts using the Callout component.</CalloutMainDesc>

            <CalloutOverviewTitle id="overview">Overview</CalloutOverviewTitle>
            <CalloutOverviewDesc>Overview
                Callouts are boxed sections used to highlight tips, warnings, success messages, and other important notes inside your Documentation.AI pages.</CalloutOverviewDesc>

            <CalloutIntroP>Use callouts when you need to:</CalloutIntroP>
            <CalloutUseList>
                <li>Draw attention to key information without breaking reading flow.</li>
                <li>Warn about breaking changes, security risks, or destructive actions.</li>
                <li>Provide tips and best practices alongside procedural steps</li>
                <li>Confirm successful outcomes (for example, deployment complete, sync finished).</li>
            </CalloutUseList>

            <p>Callouts work alongside your regular <CalloutLink href="www.facebook.com" target='_blank'> <u>Headings and Text</u></CalloutLink> and are often used with <CalloutLink href="www.facebook.com" target='_blank'> <u>Expandables</u></CalloutLink> when you want to hide long notes or advanced caveats behind a collapsible section.</p>

            <CalloutIntroP>Available callout kinds:</CalloutIntroP>
            <CalloutUseList>
                <li><CalloutInfoBadge>info:</CalloutInfoBadge> Neutral information</li>
                <li><CalloutInfoBadge>tip:</CalloutInfoBadge> Helpful suggestions and best practices.</li>
                <li><CalloutInfoBadge>success:</CalloutInfoBadge> Positive confirmations and results.</li>
                <li><CalloutInfoBadge>alert:</CalloutInfoBadge> Warnings and cautions.</li>
                <li><CalloutInfoBadge>danger:</CalloutInfoBadge> Critical errors and destructive actions.</li>
            </CalloutUseList>

            <CalloutEditorTitle id="using-with-web-editor">Using with Web Editor</CalloutEditorTitle>
            <CalloutIntroP>In the Web Editor, you can insert callouts without writing any code.</CalloutIntroP>
            <CalloutStepsList>
                <li>Place your cursor where you want the callout.</li>
                <li>Type <ShadowSlash>/</ShadowSlash> to open the block menu.</li>
                <li>Search for <strong>Callout</strong> and choose the style you want (Info, Tip, Alert, Danger, or Success).</li>
                <li>Start typing inside the callout block to add or edit content like a normal paragraph.</li>
            </CalloutStepsList>

            <CalloutStylesIntro>All callout styles:</CalloutStylesIntro>
            <ColorCallouts>
                <CalloutInfoBox>
                    <CalloutInfoIcon><Info size={17} /></CalloutInfoIcon>
                    <p>This is an info callout for neutral notes or clarifications in your docs.</p>
                </CalloutInfoBox>
                <CalloutTipBox>
                    <CalloutInfoIcon><Lightbulb size={17} /></CalloutInfoIcon>
                    <p>This is a tip callout for helpful suggestions and best practices.</p>
                </CalloutTipBox>
                <CalloutSuccessBox>
                    <CalloutInfoIcon><CircleCheckBig size={17} /></CalloutInfoIcon>
                    <p>This is a success callout to confirm that an action or process completed correctly.</p>
                </CalloutSuccessBox>
                <CalloutAlertBox>
                    <CalloutInfoIcon><CircleAlert size={17} /></CalloutInfoIcon>
                    <p>This is an alert callout to flag something that needs extra attention.</p>
                </CalloutAlertBox>
                <CalloutDangerBox>
                    <CalloutInfoIcon><TriangleAlert size={17} /></CalloutInfoIcon>
                    <p>This is a danger callout to flag critical errors or destructive actions.</p>
                </CalloutDangerBox>
            </ColorCallouts>
            <ExpandableSectionP>If you need to keep long disclaimers or edge cases out of the main flow, consider wrapping the callout content inside an <CalloutLink href="www.facebook.com" target='_blank'> <u>Expandables</u></CalloutLink> instead.</ExpandableSectionP>
            <InfoNoteBox>
                <InfoNoteIcon> <Info size={18} />  </InfoNoteIcon>
                <div>
                    <PreferCodeText><strong>Prefer writing in code?</strong></PreferCodeText>
                    <p>You can switch to <strong>MDX view inside the Web Editor</strong> to write or edit this component using the same syntax as the Code Editor. This is useful if you want full control while staying in the Web Editor.</p>
                </div>
            </InfoNoteBox>
            <CalloutCodeEditorTitle id="using-with-code-editor">Using with Code Editor</CalloutCodeEditorTitle>
            <p>In MDX, use the <CalloutInfoBadge>Callout</CalloutInfoBadge> component with a <CalloutInfoBadge>kind</CalloutInfoBadge> attribute to control the visual style. The <CalloutInfoBadge>kind</CalloutInfoBadge> value must be one of <CalloutInfoBadge>info</CalloutInfoBadge>, <CalloutInfoBadge>tip</CalloutInfoBadge>, <CalloutInfoBadge>success</CalloutInfoBadge>, <CalloutInfoBadge>alert</CalloutInfoBadge>, or <CalloutInfoBadge>danger</CalloutInfoBadge>.</p>
            <ExpandableSectionH2>Basic Syntax</ExpandableSectionH2>
            <ShikiCodeBlock
                language="tsx"
                code={`<Callout kind="info">
  This is an informational callout.
</Callout>`}
            />
            <InfoHeadingCallout>Info</InfoHeadingCallout>
            <p>Use for neutral notes or clarifications.</p>
            <ShikiCodeBlock
                language="tsx"
                code={`<Callout kind="info">
  Configure your API key in the settings before making requests.
</Callout>`}
            />

            <CalloutInfoBox>
                    <CalloutInfoIcon><Info size={17} /></CalloutInfoIcon>
                    <p>Configure your API key in the settings before making requests.</p>
                </CalloutInfoBox>
            <InfoHeadingCallout>Tip</InfoHeadingCallout>
            <p>Use for recommendations, shortcuts, or best practices.</p>
            <ShikiCodeBlock
                language="tsx"
                code={`<Callout kind="tip">
  Use environment variables to store sensitive configuration like API keys.
</Callout>`}
            />
            <CalloutTipBox>
                <CalloutInfoIcon><Lightbulb size={17} /></CalloutInfoIcon>
                <p>Use environment variables to store sensitive configuration like API keys.</p>
            </CalloutTipBox>

            <InfoHeadingCallout>Alert</InfoHeadingCallout>
            <p>Use for warnings that require extra attention but are not strictly fatal.</p>
            <ShikiCodeBlock
                language="tsx"
                code={`<Callout kind="alert">
  This action cannot be undone. Make sure you have a backup before proceeding.
</Callout>`}
            />
            <CalloutAlertBox>
                <CalloutInfoIcon><CircleAlert size={17} /></CalloutInfoIcon>
                <p>This action cannot be undone. Make sure you have a backup before proceeding.</p>
            </CalloutAlertBox>

            <InfoHeadingCallout>Danger</InfoHeadingCallout>
            <p>Use for destructive or high-risk actions.</p>
            <ShikiCodeBlock
                language="tsx"
                code={`<Callout kind="danger">
  Deleting this workspace will permanently remove all documentation and cannot be recovered.
</Callout>`}
            />
            <CalloutDangerBox>
                <CalloutInfoIcon><TriangleAlert size={17} /></CalloutInfoIcon>
                <p>Deleting this workspace will permanently remove all documentation and cannot be recovered.</p>
            </CalloutDangerBox>

            <InfoHeadingCallout>Success</InfoHeadingCallout>
            <p>Use for confirmations and positive outcomes.</p>
            <ShikiCodeBlock
                language="tsx"
                code={`<Callout kind="success">
  Your documentation has been successfully deployed and is live.
</Callout>`}
            />
            <CalloutSuccessBox>
                <CalloutInfoIcon><CircleCheckBig size={17} /></CalloutInfoIcon>
                <p>Your documentation has been successfully deployed and is live.</p>
            </CalloutSuccessBox>

            <ExpandableSectionH2 id="attributes">Attributes</ExpandableSectionH2>
            <CalloutAttributesSection>
                <CalloutAttributeHeader>
                    <AttributePath>Path</AttributePath>
                    <AttributeName>kind</AttributeName>
                    <AttributeType>string</AttributeType>
                </CalloutAttributeHeader>
                <AttributeDesc>Visual style and icon for the callout. One of: <CalloutInfoBadge>info</CalloutInfoBadge> (default), <CalloutInfoBadge>tip</CalloutInfoBadge>, <CalloutInfoBadge>success</CalloutInfoBadge>, <CalloutInfoBadge>alert</CalloutInfoBadge>, <CalloutInfoBadge>danger</CalloutInfoBadge>.</AttributeDesc>
            </CalloutAttributesSection>

            <ExpandableSectionH2 id="advanced-options">Advanced options</ExpandableSectionH2>
            <p>Callouts support a collapsed state to help keep pages scannable when you have long explanations or optional details.</p>
            <CalloutUseList>
                <li><CalloutInfoBadge>collapsed="false"</CalloutInfoBadge>: The callout content is fully visible.</li>
                <li><CalloutInfoBadge>collapsed="true"</CalloutInfoBadge>: The callout content is hidden until the reader expands it.</li>
            </CalloutUseList>
            <p>Example:</p>
            <ShikiCodeBlock
                language="tsx"
                code={`<Callout kind="info" collapsed="true">
  This is an optional deep-dive explanation that starts collapsed.
</Callout>`}
            />
            <p>When you need more structured or multi-paragraph content that should start hidden, combine callouts with <CalloutLink href="www.facebook.com" target='_blank'><u>Expandables</u></CalloutLink> or use headings and body copy from <CalloutLink href="www.facebook.com" target='_blank'><u>Headings and Text</u></CalloutLink> inside the callout for clearer hierarchy.</p>

        </CalloutWrapper>
    )
}

export default Callout
