import React, { useState } from 'react';
import api from '../../config/configApi';

export default function Books() {
    const [books, setBooks] = useState({
        boo_name: '',
        boo_description: ''
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    //Captura os dados do formulário
    const valueInput = e => setBooks({ ...books, [e.target.name]: e.target.value });

    const addBooks = async e => {
        e.preventDefault();

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        };

        await api.post('/create-books', books, headers)
            .then((response) => {
                setStatus({
                    type: 'success',
                    mensagem: response.data.mensagem
                });
            }).catch((err) => {
                if (err.response) {
                    setStatus({
                        type: 'error',
                        mensagem: err.response.data.mensagem
                    });
                } else {
                    setStatus({
                        type: 'error',
                        mensagem: "Erro: Tente novamente!"
                    });
                }
            });
    }

    return (
        <div>
            <h1>Cadastrar Books</h1>

            {status.type === 'error' ? <p>error</p> : ""}
            {status.type === 'success' ? <p>ok</p> : ""}

            <form onSubmit={addBooks} style={{ margin: '20px' }}>
                <label>Nome: </label>
                <input type="text" name="boo_name" placeholder="Nome" onChange={valueInput} /><br /><br />

                <label>Descrição: </label>
                <input type="text" name="boo_description" placeholder="Descrição" onChange={valueInput} /><br /><br />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}
