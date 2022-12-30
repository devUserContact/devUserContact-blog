import React from 'react'
import { lazy, Suspense } from 'react'
const Text = lazy(() => import('../Text'))
import { Canvas } from '@react-three/fiber'

import styles from '../../styles/Main.module.scss'


const CanvasPerspective = () => {
  return (
    <>
      <Suspense>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <color attach='background' args={['#ededed']} />
          <Text />
        </Canvas>
      </Suspense>
    </>
  )
}

export default CanvasPerspective
