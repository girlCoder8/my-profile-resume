import React, { ReactNode } from 'react'
import cx from 'classnames'
import SectionGrey from 'components/Section/SectionGrey'

interface EducationProps {
  children: ReactNode
  title: string
  subtitle: string
}

function Experience(props: EducationProps) {
  const { children, title, subtitle } = props
  return (
    <SectionGrey>
      <div className={cx('mb-8')}>
        <p className={cx('text-3xl font-medium mb-8 text-center')}>{title}</p>
        <p
          className={cx('text-center')}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      </div>
      <div className={cx('grid sm:grid-cols-1 lg:grid-cols-2 gap-6')}>
        {children}
      </div>
    </SectionGrey>
  )
}

export default Experience
