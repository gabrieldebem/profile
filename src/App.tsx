import { Base } from "./components/Base";
import { Content } from "./components/Content";

export default function App() {
  return (
    <Base title='Developer Profile'>
      <Content title="Hi, my name is Gabriel">
        <p className="mt-2">
          I'm a passionate developer, I love to learn new things and i'm currently learning about Architecture.
        </p>
        <p className="mt-1">
          I'm currently working as a fullstack midlevel software developer at <a href="https://idez.com.br" className="font-bold underline">Idez Digital</a>.
          and i'm graduating in ADS at <a href="https://qi.edu.br/" className="font-bold underline">Faculdade QI</a>.
        </p>
      </Content> <br />
      <Content title="Tecnologies:">
        <p className="mt-2">
          I'm currently working with:
        </p>
        <ul className="mt-1 ml-8">
          <li><img className="h-8 w-8 inline" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" /> PHP</li>
          <li><img className="h-8 w-8 inline" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" /> Typescript</li>
          <li><img className="h-8 w-8 inline" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" /> Golang</li>
          <li><img className="h-8 w-8 inline" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" /> Docker </li>
          <li><img className="h-8 w-8 inline" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> ReactJs </li>
        </ul>
      </Content> <br />
      <Content title="Contact:">
        <div className="inline-flex">
          <a className="mr-2" href="https://github.com/gabrieldebem" target="_blank">
            <img src="https://img.shields.io/badge/-Github-%230077C5?style=for-the-badge&logo=github&logoColor=white&color=black"/>
          </a>
          <a className="mr-2" href="mailto:gabrieldebem72@gmail.com">
            <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
          </a>
          <a href="https://www.linkedin.com/in/gabriel-de-bem-9590a5133/" target="_blank">
            <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
          </a>
        </div>
      </Content>
    </Base>
  )
}

