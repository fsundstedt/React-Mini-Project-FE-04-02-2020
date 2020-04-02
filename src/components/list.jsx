import React, {Component} from 'react';

class List extends Component {
    state = {
        data: []
    }

    getData = async () => {
        const response = await fetch('localhost:2000/posts');
        const data = await response.json();
        return data;
    }

    async componentDidMount() {
        const apiData = await this.getData();

        this.setState({
            data: apiData
        })
    }

    render() {
        return (
            <div>
                aaa
            </div>
        )
    }
}

export default List;