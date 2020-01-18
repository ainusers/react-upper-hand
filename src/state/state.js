import React, { Component } from 'react'

const State_Table_Header = () => {
    return (
        <thead>
        <tr>
            <th>姓名</th>
            <th>&nbsp;&nbsp;&nbsp;</th>
            <th>职位</th>
        </tr>
        </thead>
    )
}
const State_Table_Body = props => {
    const rows = props.data.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>{row.job}</td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}


// 简写方式simple component
/*const State_Table = (props) => {
    const {characterData, removeCharacter} = props;
    return (
        <table>
            <State_Table_Header/>
            <State_Table_Body data={characterData} removeCharacter={removeCharacter}/>
        </table>
    )
}*/
// 常规方式 component
class State_Table extends Component {
    render() {
        const { characterData , removeCharacter}=this.props
        return (
            <table>
                <State_Table_Header/>
                <State_Table_Body data={characterData} removeCharacter={removeCharacter}/>
            </table>
        )
    }
}


export default State_Table;
