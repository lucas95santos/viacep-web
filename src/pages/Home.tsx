import React, { FormEvent, useState } from 'react';
// components
import { Input, Button, AddressDetail } from '../components';
// http
import { Request } from '../http';
// styles
import '../styles/home.css';

interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

interface SearchError {
  message: string;
}

function Home(): JSX.Element {
  const [cep, setCep] = useState<string>('');
  const [searchError, setSearchError] = useState<SearchError | null>(null);
  const [inputError, setInputError] = useState<SearchError | null>(null);
  const [searchData, setSearchData] = useState<Address | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function searchCEP(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    // TODO: implementar lógica da pesquisa do CEP
    if (!isEmpty(cep)) {
      const request = new Request();
      const formattedCEP = cep.replace('-', '');
      const response = await request.get(`search/${formattedCEP}`);

      if (response.status !== 200) {
        setSearchError({
          message: response.error,
        });
      } else {
        setSearchError(null);
        setSearchData(response.data);
      }

      setInputError(null);

      setTimeout(() => {
        setLoading(false);
      }, 500);
    } else {
      setLoading(false);
      setInputError({
        message: 'Este campo não pode ser vazio',
      });
    }
  }

  function isEmpty(value: string | undefined | null) {
    return ['', undefined, null].includes(value);
  }

  return (
    <main className="main-content">
      <h1 className="title">Projeto Via CEP</h1>
      <h2 className="subtitle">
        Pesquise pelo código postal desejado no campo abaixo
      </h2>
      <form className="form-content" onSubmit={searchCEP}>
        <div className="inline-container">
          <Input
            autoFocus
            name="cep"
            value={cep}
            error={inputError}
            onChange={(event: FormEvent<HTMLInputElement>) =>
              setCep(event.currentTarget.value)
            }
          />
          <Button text="Pesquisar" type="submit" loading={loading} />
        </div>
      </form>
      <AddressDetail data={searchData} error={searchError} loading={loading} />
    </main>
  );
}

export { Home };
