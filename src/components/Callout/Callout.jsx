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
import React from 'react'
import "./index.css"
import ShikiCodeBlock from '../../Shiki-CodeBlock/CodeBlock'

const Callout = () => {
    return (
        <div className='callout-wrapper'>
            <h1 className='callout-main-title'>Callout</h1>
            <p className='callout-main-desc'>Callout
                Reference for displaying highlighted information and alerts using the Callout component.</p>

            <h1 className='callout-overview-title'>Overview</h1>
            <p className='callout-overview-desc'>Overview
                Callouts are boxed sections used to highlight tips, warnings, success messages, and other important notes inside your Documentation.AI pages.</p>

            <p className='callout-use-intro'>Use callouts when you need to:</p>
            <ul className='callout-use-list'>
                <li className='callout-use-item-1'>Draw attention to key information without breaking reading flow.</li>
                <li className='callout-use-item-2'>Warn about breaking changes, security risks, or destructive actions.</li>
                <li className='callout-use-item-3'>Provide tips and best practices alongside procedural steps</li>
                <li className='callout-use-item-4'>Confirm successful outcomes (for example, deployment complete, sync finished).</li>
            </ul>

            <p className=''>Callouts work alongside your regular <a href="www.facebook.com" target='_blank' className='callout-link-headings'> <u>Headings and Text</u></a> and are often used with <a href="www.facebook.com" target='_blank' className='callout-link-expandables'> <u>Expandables</u></a> when you want to hide long notes or advanced caveats behind a collapsible section.</p>

            <p className='callout-kinds-intro'>Available callout kinds:</p>
            <ul className='callout-use-list'>
                <li className='callout-kind-item-info'><span className='callout-info'>info:</span> Neutral information</li>
                <li className='callout-kind-item-tip'><span className='callout-info'>tip:</span> Helpful suggestions and best practices.</li>
                <li className='callout-kind-item-success'><span className='callout-info'>success:</span> Positive confirmations and results.</li>
                <li className='callout-kind-item-alert'><span className='callout-info'>alert:</span> Warnings and cautions.</li>
                <li className='callout-kind-item-danger'><span className='callout-info'>danger:</span> Critical errors and destructive actions.</li>
            </ul>

            <h1 className='callout-editor-title'>Using with Web Editor</h1>
            <p className='callout-editor-desc'>In the Web Editor, you can insert callouts without writing any code.</p>
            <ol className='callout-steps-list callout-use-list'>
                <li className='callout-step-1'>Place your cursor where you want the callout.</li>
                <li className='callout-step-2'>Type <span className='shadow-slash'>/</span> to open the block menu.</li>
                <li className='callout-step-3'>Search for <strong className='callout-step-bold'>Callout</strong> and choose the style you want (Info, Tip, Alert, Danger, or Success).</li>
                <li className='callout-step-4'>Start typing inside the callout block to add or edit content like a normal paragraph.</li>
            </ol>

            <p className='callout-styles-intro'>All callout styles:</p>
            <div className='color-callouts'>
                <div className='list-icons callout-info-box'>
                    <span className='callout-info-icon'><Info size={17} /></span>
                    <p className='callout-info-text'>This is an info callout for neutral notes or clarifications in your docs.</p>
                </div>
                <div className='list-icons callout-tip-box'>
                    <span className='callout-info-icon'><Lightbulb size={17} /></span>
                    <p className='callout-tip-text'>This is a tip callout for helpful suggestions and best practices.</p>
                </div>
                <div className='list-icons callout-success-box'>
                    <span className='callout-info-icon'><CircleCheckBig size={17} /></span>
                    <p className='callout-success-text'>This is a success callout to confirm that an action or process completed correctly.</p>
                </div>
                <div className='list-icons callout-alert-box'>
                    <span className='callout-info-icon'><CircleAlert size={17} /></span>
                    <p className='callout-alert-text'>This is an alert callout to flag something that needs extra attention.</p>
                </div>
                <div className='list-icons callout-danger-box'>
                    <span className='callout-info-icon'><TriangleAlert size={17} /></span>
                    <p className='callout-danger-text'>This is a danger callout to flag critical errors or destructive actions.</p>
                </div>
            </div>
            <p className='callout-alongside-desc expandable-section-heading-1'>If you need to keep long disclaimers or edge cases out of the main flow, consider wrapping the callout content inside an <a href="www.facebook.com" target='_blank' className='callout-link-headings'> <u>Expandables</u></a> instead.</p>
            <div className="callout">
                <span className="callout-icon"> <Info size={18} />  </span>
                <div>
                    <p id="prefer-code-text"><strong>Prefer writing in code?</strong></p>
                    <p>You can switch to <strong>MDX view inside the Web Editor</strong> to write or edit this component using the same syntax as the Code Editor. This is useful if you want full control while staying in the Web Editor.</p>
                </div>
            </div>
            <h1 className='callout-code-editor'>Using with Code Editor</h1>
            <p>In MDX, use the <span className='callout-info'>Callout</span> component with a <span className='callout-info'>kind</span> attribute to control the visual style. The <span className='callout-info'>kind</span> value must be one of <span className='callout-info'>info</span>, <span className='callout-info'>tip</span>, <span className='callout-info'>success</span>, <span className='callout-info'>alert</span>, or <span className='callout-info'>danger</span>.</p>
            <h2 className='expandable-section-heading-1'>Basic Syntax</h2>
            <ShikiCodeBlock
                language="tsx"
                code={`<Callout kind="info">
  This is an informational callout.
</Callout>`}
            />
            <h3 className='info-heading-callout'>Info</h3>
            <p>Use for neutral notes or clarifications.</p>
            <ShikiCodeBlock
                language="tsx"
                code={`<Callout kind="info">
  Configure your API key in the settings before making requests.
</Callout>`}
            />

            <div className='list-icons callout-info-box'>
                    <span className='callout-info-icon'><Info size={17} /></span>
                    <p className='callout-info-text'>Configure your API key in the settings before making requests.</p>
                </div>
            <h3 className='info-heading-callout'>Tip</h3>
            <p>Use for recommendations, shortcuts, or best practices.</p>
            <ShikiCodeBlock
                language="tsx"
                code={`<Callout kind="tip">
  Use environment variables to store sensitive configuration like API keys.
</Callout>`}
            />
            <div className='list-icons callout-tip-box'>
                <span className='callout-info-icon'><Lightbulb size={17} /></span>
                <p className='callout-tip-text'>Use environment variables to store sensitive configuration like API keys.</p>
            </div>

            <h3 className='info-heading-callout'>Alert</h3>
            <p>Use for warnings that require extra attention but are not strictly fatal.</p>
            <ShikiCodeBlock
                language="tsx"
                code={`<Callout kind="alert">
  This action cannot be undone. Make sure you have a backup before proceeding.
</Callout>`}
            />
            <div className='list-icons callout-alert-box'>
                <span className='callout-info-icon'><CircleAlert size={17} /></span>
                <p className='callout-alert-text'>This action cannot be undone. Make sure you have a backup before proceeding.</p>
            </div>

            <h3 className='info-heading-callout'>Danger</h3>
            <p>Use for destructive or high-risk actions.</p>
            <ShikiCodeBlock
                language="tsx"
                code={`<Callout kind="danger">
  Deleting this workspace will permanently remove all documentation and cannot be recovered.
</Callout>`}
            />
            <div className='list-icons callout-danger-box'>
                <span className='callout-info-icon'><TriangleAlert size={17} /></span>
                <p className='callout-danger-text'>Deleting this workspace will permanently remove all documentation and cannot be recovered.</p>
            </div>

            <h3 className='info-heading-callout'>Success</h3>
            <p>Use for confirmations and positive outcomes.</p>
            <ShikiCodeBlock
                language="tsx"
                code={`<Callout kind="success">
  Your documentation has been successfully deployed and is live.
</Callout>`}
            />
            <div className='list-icons callout-success-box'>
                <span className='callout-info-icon'><CircleCheckBig size={17} /></span>
                <p className='callout-success-text'>Your documentation has been successfully deployed and is live.</p>
            </div>

            <h2 className='expandable-section-heading-1'>Attributes</h2>
            <div className='callout-attributes-section'>
                <div className='callout-attribute-header'>
                    <span className='attribute-path'>Path</span>
                    <span className='attribute-name'>kind</span>
                    <span className='attribute-type'>string</span>
                </div>
                <p className='attribute-desc'>Visual style and icon for the callout. One of: <span className='callout-info'>info</span> (default), <span className='callout-info'>tip</span>, <span className='callout-info'>success</span>, <span className='callout-info'>alert</span>, <span className='callout-info'>danger</span>.</p>
            </div>

            <h2 className='expandable-section-heading-1'>Advanced options</h2>
            <p>Callouts support a collapsed state to help keep pages scannable when you have long explanations or optional details.</p>
            <ul className='callout-use-list'>
                <li><span className='callout-info'>collapsed="false"</span>: The callout content is fully visible.</li>
                <li><span className='callout-info'>collapsed="true"</span>: The callout content is hidden until the reader expands it.</li>
            </ul>
            <p>Example:</p>
            <ShikiCodeBlock
                language="tsx"
                code={`<Callout kind="info" collapsed="true">
  This is an optional deep-dive explanation that starts collapsed.
</Callout>`}
            />
            <p>When you need more structured or multi-paragraph content that should start hidden, combine callouts with <a href="www.facebook.com" target='_blank' className='callout-link-headings'><u>Expandables</u></a> or use headings and body copy from <a href="www.facebook.com" target='_blank' className='callout-link-headings'><u>Headings and Text</u></a> inside the callout for clearer hierarchy.</p>

        </div>
    )
}

export default Callout