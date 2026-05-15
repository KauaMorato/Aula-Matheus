import React, { Component } from 'react';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []  
        };
    }

    componentDidMount() {
        this.setState({ users: ['Alice', 'Bob', 'Charlie'] });
        console.log('Componente montado - Usuários carregados');
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.users.length !== this.state.users.length) {
            console.log('Usuários atualizados:', this.state.users);
        }
    }

    componentWillUnmount() {
        console.log('Desmontando componente, limpando dados...');
    }

    // Função para adicionar novo usuário
    addNewUser = () => {
        const newUser = `Usuário ${this.state.users.length + 1}`;
        this.setState({
            users: [...this.state.users, newUser]
        });
    }

    render() {
        return (
            <div style={{ padding: '20px', fontFamily: 'Arial' }}>
                <h1>👥 Usuários Online: {this.state.users.length}</h1>
                
                {/* Botão aqui */}
                <button 
                    onClick={this.addNewUser}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        marginBottom: '15px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    ➕ Simular Novo Usuário
                </button>

                <ul>
                    {this.state.users.map((user, index) => (
                        <li key={index} style={{ fontSize: '18px', margin: '8px 0' }}>
                            {user}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default UserList;