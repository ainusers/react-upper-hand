import React, { Component } from 'react'

// component
class Componet_Table extends Component {
    render() {
        return (
                /*<thead>
                <tr>
                    <th>姓名</th>
                    <th>&nbsp;&nbsp;&nbsp;</th>
                    <th>职位</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>骚弟</td>
                    <td>&nbsp;&nbsp;&nbsp;</td>
                    <td>摸鱼</td>
                </tr>
                </tbody>*/
                <table>
                    <Componet_Table_Header />
                    <Componet_Table_Body />
                </table>
        )
    }
}

// simple component
const Componet_Table_Header = () => {
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
const Componet_Table_Body = () => {
    return (
        <tbody>
        <tr>
            <td>骚弟</td>
            <td>&nbsp;&nbsp;&nbsp;</td>
            <td>摸鱼</td>
        </tr>
        </tbody>
    )
}

export default Componet_Table;