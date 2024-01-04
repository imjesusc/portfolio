import PropTypes from 'prop-types'
import { IconFileDownload } from '@tabler/icons-react'
import { Link, LinkColumns, Title } from '../atoms'

export const Footer = ({ info }) => {
  return (
    <footer className="min-h-[300px] border-t bg-white w-screen dark:bg-black">
      <div className="p-4 h-full max-w-[--max-w-screen] w-full m-auto grid gap-y-4 tablet:flex items-start py-16  gap-x-20">
        <div className="flex flex-col gap-1">
          <Title title="imjesusc" type="tertiary" className="font-medium leading-none" />
          <p className="text-sm text-[--text-accent]">© 2023</p>
        </div>
        <div className="flex flex-col tablet:flex-row gap-y-4 justify-between w-full">
          <LinkColumns info={info} />
          <Link
            type="animate"
            href="/resume.pdf"
            isDownload
            className="bg-[--primary] rounded-2xl font-semibold py-2 px-4 text-white  h-12 overflow-hidden"
          >
            <span>Resume</span>
            <IconFileDownload />
          </Link>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  info: PropTypes.array.isRequired,
}
