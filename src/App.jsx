import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <>
      <Header/>

      <div className={styles.wrapper}>

        <Sidebar/>

        <main>
          <Post 
          author='Derek silva'
          content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae beatae explicabo commodi asperiores dolore. Ipsam voluptatibus vel tenetur accusantium asperiores laudantium nesciunt itaque nam cumque nulla! Cumque eos incidunt magni.' 
          />

          <Post
          author='Maria Laura'
          content='Testando código'
          />
          
        </main>
      </div>
    </>
  )
}