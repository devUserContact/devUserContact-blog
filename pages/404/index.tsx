import React from 'react'
import Image from 'next/image'
import Message from '../../assets/devUserContact_404error.svg'
import styles from '../../styles/Main.module.scss'

const Message404 = () => {
  const message = Message
  return (
    <>
      <div className={styles.errorMessage}>
        <Image src={message} alt={'404'} />
      </div>
      <div className={styles.errorMessage}>
        <p className={styles.blogSubTitle}>
          page not found / <a href='https://devusercontact.com'>return home</a>
        </p>
      </div>
    </>
  )
}
export default Message404
