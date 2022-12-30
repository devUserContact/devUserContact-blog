import React, { useRef, useState, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D, Edges } from '@react-three/drei'

export const Text = (props: any) => {
  const [switchRotation, setSwitchRotation] = useState(false)
  const mesh: any = useRef()
  useFrame((state) => {
    if (mesh.current.rotation.y > 0.2) {
      setSwitchRotation(false)
    }
    if (mesh.current.rotation.y < -0.2) {
      setSwitchRotation(true)
    }
    if (switchRotation === true) {
      mesh.current.rotation.y -= (-Math.PI / 0.95) * 0.0005
    }
    if (switchRotation === false) {
      mesh.current.rotation.y += (-Math.PI / 0.95) * 0.0005
    }
  })
  return (
    <>
      <pointLight position={[-10, 14, 8]} />
      <group ref={mesh}>
        <mesh position={[-2, 2, 0]}>
          <Text3D
            font={'../../static/UncutSans_Regular.typeface.json'}
            size={0.7}
            dispose={null}
          >
            {`dev`}
            <meshLambertMaterial
              color={0x00ffbb}
              opacity={1.0}
              wireframe={false}
            />
            <Edges color='black' />
          </Text3D>
        </mesh>
        <mesh position={[-2, 1, 0]}>
          <Text3D
            font={'../../static/UncutSans_Regular.typeface.json'}
            size={0.7}
            dispose={null}
          >
            {`User`}
            <meshLambertMaterial
              color={0x00ffee}
              opacity={1.0}
              wireframe={false}
            />
            <Edges color='black' />
          </Text3D>
        </mesh>
        <mesh position={[-2, 0, 0]}>
          <Text3D
            font={'../../static/UncutSans_Regular.typeface.json'}
            size={0.7}
            dispose={null}
          >
            {`Contact`}
            <meshLambertMaterial
              color={0x00eeee}
              opacity={1.0}
              wireframe={false}
            />
            <Edges color='black' />
          </Text3D>
        </mesh>
      </group>
      <mesh position={[-0.5, -1, 0]}>
        <Text3D
          font={'../../static/UncutSans_Regular.typeface.json'}
          size={0.7}
          dispose={null}
        >
          {`_blog`}
          <meshLambertMaterial
            color={0xffaacc}
            opacity={1.0}
            wireframe={false}
          />
          <Edges color='black' />
        </Text3D>
      </mesh>
    </>
  )
}
export default Text
