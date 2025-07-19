/* @refresh reload */
import './index.css'

import { render } from 'solid-js/web'
import { Router, Route } from '@solidjs/router'

import App from './App'

import { lazy } from 'solid-js'

const Home = lazy(() => import('./pages/Home'))
//const Posts = lazy(() => import('./pages/Posts'))
//const Post = lazy(() => import('./pages/Post'))
const About = lazy(() => import('./pages/About'))

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  )
}

render(
  () => (
    <Router root={App}>
      <Route path='/' component={Home} />
      {/*
      <Route path='/posts' component={Posts} />
      <Route path='/posts/:post' component={Post} />
      */}
      <Route path='/about' component={About} />
    </Router>
  ),
  root!,
)
