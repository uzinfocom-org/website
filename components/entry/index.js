import cn from 'classnames'
import { useInView } from 'react-intersection-observer'
import 'intersection-observer'

import styles from './entry.module.css'
const imagePrefix = ``

const Entry = ({ title, description, image, href, position }) => {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref}
      className={cn(styles.link, { [styles.active]: !image })}
      title={`${title} - ${description}`}
    >
      <section
        style={{
          backgroundImage: image
            ? !inView
              ? 'none'
              : image.startsWith("http")
                ? `url('${image}')`
                : `url('${imagePrefix}/${image}')`
            : 'none',
          backgroundPosition: position ? position : 'center',
        }}
      >
        <div>
          <p className={cn(styles.title, 'clamp')}>{title}</p>
          <p className={cn(styles.description, 'clamp')}>{description}</p>
        </div>
      </section>
    </a>
  )
}

export default Entry
