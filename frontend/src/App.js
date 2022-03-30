import React from 'react';
//import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js'
import axios from 'axios'
import Footer from './components/Footer.js'
import Navbar from './components/Menu.js'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarItems: [
                {name: 'Users', href: '/'},
            ],
            users: []
        }
    }

   componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users')
        .then(response => {
            const users = response.data
                this.setState(
                {
                    'users': users
                }
            )
        }).catch(error => console.log(error))
 }

 render() {
    return (
        <div>
            <header>
                <Navbar navbarItems={this.state.navbarItems}/>
            </header>
            <main role="main" class="flex-shrink-0">
                <div className="container">
                    <UserList users={this.state.users}/>
                </div>
            </main>
            <Footer/>
        </div>


    )
}
}

   export default App;