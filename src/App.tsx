export default function App(props) {
  return (
    <>
      <nav class='grid grid-cols-8 pt-5 pb-5 bg-blue-100'>
        <div class='ml-5 mr-5 '>
          <a href='/'>🐦</a>
        </div>
        {/* 
        <div class='ml-5 mr-5'>
          <a href='/posts'>/posts</a>
        </div>
        */}
        <div class='ml-5 mr-5'>
          <a href='/about'>/about</a>
        </div>
      </nav>
      {props.children}
    </>
  )
}
