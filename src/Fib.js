import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
    state = {
        seenIndexes: [],
        values: [],
        value: ''
    };

    componentDidMount() {
        this.fetchValues();
        this.fetchIndexes();
    }
    async fetchValues() {
        const values = await axios.get('/api/values/current');
        this.setState({ values: values.data });
    }
    async fetchIndexes() {
        const seenIndexes = await axios.get('/api/values/all');
        this.setState({
            seenIndexes: seenIndexes.data
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        await axios.post('/api/values', {
            index: this.state.index
        });
        this.setState({ index: '' });

    }; 

    renderSeenIndexes() {
        return this.state.seenIndexes.map(({ number }) => number).join(', ')
    }

    renderValues() {
        const entries = [];
        for (let key in this.state.values) {
            entries.push(
                <div key={key}>
                    for index {key} I Calculated {this.statevalues[{key}]}

                </div>
            );
        }
        return entries;
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <laber>Enter your Index:</laber>
                    <input 
                     value={this.state.index}
                     onChange={event => this.setState({ index: event.target.value  })}
                    />
                    <button>Submit</button>
                </form>

                <h3>Indexes I have seen:</h3>
                {this.renderSeenIndexes()}

                <h3>Calculated Vlaues:</h3>
                {this.renderValues()}
           </div>
        );
    }
}

export default Fib;
