import { lazy, Suspense } from 'react'
const CanvasPerspective = lazy(() => import('../CanvasPerspective'))

import styles from '../../styles/Main.module.scss'

const CanvasComponent = () => {
  return (
    <>
      <Suspense>
        <div className={styles.containerCanvas}>
          <CanvasPerspective />
        </div>
      </Suspense>
    </>
  )
}

export default CanvasComponent
