import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

class List extends Component {
    state = {
        data: []
    }

    getData = async () => {
        const response = await fetch('http://localhost:2000/posts');
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
        const {data} = this.state;

        return (
            <Wrapper>
                {data.map((post, index) => (
                    <div>
                        <br></br>
                        <div>{data[index].title}</div>
                    </div>
                ))}
                <br></br>
            </Wrapper>
        )
    }
}

export default List;