import React, {Component} from 'react';

class List extends Component {
    state = {
        data: []
    }

    getData = async () => {
        const response = await fetch('http://localhost:2000/posts');
        const data = await response.json();
        console.log(data[0].id)
        return data;
    }

    async componentDidMount() {
        const apiData = await this.getData();

        this.setState({
            data: apiData
        })
    }

    render() {
        const {data} = this.state;

        return (
            <div>
                {data.map((post, index) => (
                    <div>
                        <div>{data[index].title}</div>
                        <div>{data[index].content}</div>
                    </div>
                ))}
            </div>
        )
    }
}

export default List;