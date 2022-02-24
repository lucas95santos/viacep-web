import React from 'react';
// loading
import ReactLoading from 'react-loading';
// styles
import '../styles/address-detail.css';

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

interface AddressError {
  message: string;
}

interface AddressDetailProps {
  data: Address;
  error: AddressError | null;
  loading: boolean;
}

function AddressDetail(props: AddressDetailProps): JSX.Element {
  const { data, error, loading } = props;

  return (
    <div className="detail-container">
      {loading ? (
        <ReactLoading type="spin" color="#1565c0" height={64} width={64} />
      ) : (
        <>
          {error ? (
            <div className="detail__error">
              <p>{error.message}</p>
            </div>
          ) : (
            <div className="detail">
              <div className="detail__row">
                <div className="detail__info">
                  <p>
                    <span>CEP:</span>
                    {data.cep}
                  </p>
                </div>
                <div className="detail__info">
                  <p>
                    <span>Logradouro:</span>
                    {data.logradouro}
                  </p>
                </div>
                <div className="detail__info">
                  <p>
                    <span>Complemento:</span>
                    {data.complemento === ''
                      ? 'Não informado'
                      : data.complemento}
                  </p>
                </div>
              </div>
              <div className="detail__row">
                <div className="detail__info">
                  <p>
                    <span>Bairro:</span>
                    {data.bairro}
                  </p>
                </div>
                <div className="detail__info">
                  <p>
                    <span>Localidade:</span>
                    {data.localidade}
                  </p>
                </div>
                <div className="detail__info">
                  <p>
                    <span>UF:</span>
                    {data.uf}
                  </p>
                </div>
              </div>
              <div className="detail__row">
                <div className="detail__info">
                  <p>
                    <span>IBGE:</span>
                    {data.ibge === '' ? 'Não informado' : data.ibge}
                  </p>
                </div>
                <div className="detail__info">
                  <p>
                    <span>GIA:</span>
                    {data.gia === '' ? 'Não informado' : data.gia}
                  </p>
                </div>
                <div className="detail__info">
                  <p>
                    <span>DDD:</span>
                    {data.ddd}
                  </p>
                </div>
                <div className="detail__info">
                  <p>
                    <span>Siafi:</span>
                    {data.siafi === '' ? 'Não informado' : data.siafi}
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export { AddressDetail };
