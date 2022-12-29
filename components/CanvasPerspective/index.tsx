import React from 'react'
import { Canvas } from '@react-three/fiber'

//import Geometry from "../Geometry";
//import Particles from "../Particles";
//import Gltf from '../Gltf'
import Text from '../Text'

import styles from '../../styles/Main.module.scss'

const CanvasPerspective = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <color attach='background' args={['#ededed']} />
      <Text />
{/*
			<Particles />
			<Geometry />
      <Gltf />
*/}
    </Canvas>
  )
}

export default CanvasPerspective
