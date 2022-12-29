import React from 'react'
import { lazy, Suspense } from 'react'
const Text = lazy(() => import('../Text'))
import { Canvas } from '@react-three/fiber'

import styles from '../../styles/Main.module.scss'

const CanvasPerspective = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach='background' args={['#ededed']} />
        <Suspense>
          <Text />
        </Suspense>
      </Canvas>
    </>
  )
}

export default CanvasPerspective
