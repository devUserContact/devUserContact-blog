import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text3D, Center, Edges } from '@react-three/drei'

import myFont from '../../static/UncutSans_Regular.json'

export const Text = (props: any) => {
  const [hovered, setHover] = useState(false)
  const [switchRotation, setSwitchRotation] = useState(true)
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
      <Center center>
        <group ref={mesh}>
          <Center center>
            <mesh position={[0, 2, 0]}>
              <Center right>
                <Text3D font={myFont} size={0.7}>
                  dev
                  <meshLambertMaterial
                    color={0x00ffbb}
                    opacity={1.0}
                    wireframe={hovered ? true : false}
                  />
                  <Edges color='black' />
                </Text3D>
              </Center>
            </mesh>
            <mesh position={[0, 1, 0]}>
              <Center right>
                <Text3D font={myFont} size={0.7}>
                  User
                  <meshLambertMaterial
                    color={0x00ffee}
                    opacity={1.0}
                    wireframe={false}
                  />
                  <Edges color='black' />
                </Text3D>
              </Center>
            </mesh>
            <mesh position={[0, 0, 0]}>
              <Center right>
                <Text3D font={myFont} size={0.7}>
                  Contact
                  <meshLambertMaterial
                    color={0x00eeee}
                    opacity={1.0}
                    wireframe={false}
                  />
                  <Edges color='black' />
                </Text3D>
              </Center>
            </mesh>
          </Center>
        </group>
        <mesh position={[-0.5, -2.5, 0]}>
          <Center right>
            <Text3D font={myFont} size={0.7}>
              _blog
              <meshLambertMaterial
                color={0xffaacc}
                opacity={1.0}
                wireframe={false}
              />
              <Edges color='black' />
            </Text3D>
          </Center>
        </mesh>
      </Center>
    </>
  )
}
export default Text
