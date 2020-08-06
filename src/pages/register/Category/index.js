import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import styled from 'styled-components';
import Button from '../../../components/Button';
import useForm from '../../../hoocks/useForm';

const H1 = styled.h1`
    padding-top: 50px;
`;


function RegisterCategory() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const {clearForm, handleChange, values} = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);
  

  

  // ============

  useEffect(() => {
      const URL =  window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://tataflix.herokuapp.com/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias([
              ...resposta,
            ]);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
  }, []);

  return (
    <PageDefault>
      <H1>
        Cadastro de Categoria:
        {values.nome}
      </H1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        
        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />
        

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
          <div>
              Carregando...
          </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.id}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
