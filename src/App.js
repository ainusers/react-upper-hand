import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Componet_Table from './component/component';
import Prop_Table from './prop/prop';
import State_Table from './state/state';
import Form from './submit-data/submit-data';

function App_1() {
    const name = '憨 憨'
    const heading = <h3>Hello, {name}</h3>
    const characters = [
        {
            name: '嗯哼',
            job: '吆西',
        }
    ]
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                // jsx
                {heading}
                // simple component
                <Componet_Table />
                // props
                <Prop_Table data={characters}/>
            </header>
        </div>
    );
}

// state
class App_2 extends Component{
    state = {
        characters: [
            {
                name: '成都',
                job: '插花',
            }
        ]
    }
    // state中移除对象方法
    removeCharacter = index => {
        const { characters } = this.state
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
    render() {
        const { characters } = this.state
        return (
            <div className="container">
                <State_Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        )
    }
}

// submit-data
class App_3 extends Component{
    state = {
        characters: [],
    }
    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
    }
    // state中移除对象方法
    removeCharacter = index => {
        const { characters } = this.state
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
    render() {
        const { characters } = this.state;
        return (
            <div className="container">
                <State_Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

// api (测试不能成功访问)
class App extends Component {
    state = {
        data: [],
    }
    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result,
                })
            })
    }
    render() {
        const {data} = this.state
        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })
        return <ul>{result}</ul>
    }
}
export default App;