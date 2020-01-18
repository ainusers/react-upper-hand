import React, { Component } from 'react'

const Prop_Table_Header = () => {
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
const Prop_Table_Body = props => {
    const rows = props.data.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>&nbsp;&nbsp;&nbsp;</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}


class Prop_Table extends Component {
    render() {
        const { data } = this.props;
        return (
            <table>
                <Prop_Table_Header />
                <Prop_Table_Body data={data} />
            </table>
        )
    }
}

export default Prop_Table;
