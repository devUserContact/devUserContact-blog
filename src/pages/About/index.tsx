import { Resume } from '../../assets/Resume/'
import SolidjsMarkdown from 'solidjs-markdown'

export default function About() {
  return (
    <div class='grid place-items-center'>
      <div class='grid grid-cols-1 m-10 w-4/5 gap-5'>
        <SolidjsMarkdown>{Resume}</SolidjsMarkdown>
      </div>
    </div>
  )
}
