import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Link } from 'react-router-dom';

function RegisterCategory(){
    const categoriaInicial = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(categoriaInicial);

    function setValueCategoria(key, value){
        setValues({
            ...values,
            [key]: value,   
        })
    }

    function handleChange(info){
        const { getAttribute, value} = info.target;
        setValueCategoria(
            getAttribute('name'),
            value
        );
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            
            <form onSubmit={function handleSubmit(info){
                info.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(categoriaInicial);
            }} >
            
                <FormField
                    label="Nome da Categoria: "
                    type="text"
                    name="nome"
                    values={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição: "
                    type="textarea"
                    name="descriao"
                    values={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor: "
                    type="color"
                    name="cor"
                    values={values.cor}
                    onChange={handleChange}
                />
                
                <button> Cadastrar </button>
            </form>

            <ul>
                {categorias.map((category, indice) => {
                    return (
                        <li key={`${category}${indice}`}>
                            {category.nome}
                        </li>
                    )     
                })}
            </ul>

            <Link to='/'>
                    Home
            </Link>
        </PageDefault>
            

    );
}

export default RegisterCategory;