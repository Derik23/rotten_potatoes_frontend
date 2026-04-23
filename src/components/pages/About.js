import styles from "./About.module.css";

export function About() {
  return (
    <div className={styles.container}>
      <h1>
        <span>Rotten</span> Potatoes
      </h1>

      <h2>Sobre o projeto</h2>

      <p>
        Esta aplicação foi desenvolvida com o objetivo de permitir a busca de
        filmes de forma rápida e intuitiva. O usuário pode pesquisar títulos e
        visualizar informações como descrição, avaliação e outros detalhes
        relevantes.
      </p>

      <h3>Tecnologias utilizadas</h3>
      <ul>
        <li>React</li>
        <li>Vite</li>
        <li>React Router</li>
        <li>CSS Modules</li>
        <li>API OMDb</li>
        <li>Node.js (backend)</li>
        <li>Render (deploy do backend)</li>
        <li>PostgreSQL</li>
        <li>Docker</li>
      </ul>

      <h3>Como funciona</h3>
      <p>
        O usuário pode pesquisar filmes através do campo de busca e a aplicação
        retorna resultados em tempo real consumindo uma API externa. Para
        melhorar a experiência, a busca pode ocorrer dinamicamente conforme o
        usuário digita.
      </p>

      <h3>Backend e segurança</h3>
      <p>
        Para proteger a chave da API da OMDb, foi implementado um backend
        intermediário em Node.js, hospedado no Render. Todas as requisições são
        feitas através desse backend, garantindo que dados sensíveis não fiquem
        expostos no frontend.
      </p>

      <h3>Armazenamento de dados</h3>
      <p>
        Nesta versão da aplicação, os dados são armazenados localmente no
        navegador utilizando o <strong>localStorage</strong>. Isso permite
        persistência de informações sem a necessidade de autenticação ou backend
        para usuários finais.
      </p>

      <h3>Banco de dados e arquitetura</h3>
      <p>
        Durante o desenvolvimento, também foi implementada uma versão com banco
        de dados PostgreSQL rodando em container Docker, permitindo uma
        arquitetura mais completa com persistência real de dados.
      </p>

      <p>
        Para fins de publicação e demonstração, foi escolhida a versão com
        localStorage, já que a aplicação não possui sistema de autenticação. No
        entanto, ambas as abordagens (com banco de dados e localStorage) estão
        disponíveis no repositório do projeto no GitHub.
      </p>
    </div>
  );
}
