import React, { FormEvent, useState } from 'react';
// components
import { Input, Button } from '../components';
// styles
import '../styles/home.css';

function Home(): JSX.Element {
  const [cep, setCep] = useState<string>('');

  function submitForm(event: FormEvent) {
    event.preventDefault();

    // TODO: implementar lógica da pesquisa do CEP
  }

  return (
    <main className="main-content">
      <h1 className="title">Projeto Via CEP</h1>
      <h2 className="subtitle">
        Pesquise pelo código postal desejado no campo abaixo
      </h2>
      <form className="form-content" onSubmit={submitForm}>
        <Input
          value={cep}
          error={null}
          onChange={(event: FormEvent<HTMLInputElement>) =>
            setCep(event.currentTarget.value)
          }
        />
        <Button text="Pesquisar" loading={false} />
      </form>
    </main>
  );
}

export { Home };
