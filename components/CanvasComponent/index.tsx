import { lazy } from 'react'
const CanvasPerspective = lazy(() => import('../CanvasPerspective'))

import styles from '../../styles/Main.module.scss'

const CanvasComponent = () => {
  return (
    <>
      <div className={styles.containerCanvas}>
        <CanvasPerspective />
      </div>
    </>
  )
}

export default CanvasComponent
