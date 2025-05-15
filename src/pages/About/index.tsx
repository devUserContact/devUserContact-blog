import { Resume } from '../../assets/Resume/'
import SolidjsMarkdown from 'solidjs-markdown'
import rehypeExternalLinks from 'rehype-external-links'

export default function About() {
  return (
    <div class='grid place-items-center'>
      <div class='grid grid-cols-1 m-10 w-4/5 gap-5'>
        <SolidjsMarkdown
          rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}
        >
          {Resume}
        </SolidjsMarkdown>
      </div>
    </div>
  )
}
