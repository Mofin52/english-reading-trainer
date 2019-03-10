import React from 'react';
import axios from 'axios';

const litipsum = axios.create({
   baseURL: 'https://litipsum.com/api'
});

const yandexTranslate = axios.create({
    baseURL: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
    params: {
        key: 'trnsl.1.1.20190308T211558Z.49bf96bf6745f192.7c91c925ce95fabc97540b9fa542490116487453',
        lang: 'en-ru',
        format: 'plain',
    }
})

class App extends React.Component {

    state = {
        text: ''
    }
    
    translateWord = async () => {
        const response = await yandexTranslate.get('', {
            params: {
                text: 'tremendous'
            }
        })
        console.log(response.data.text[0]);
    }

    loadData = async () => {
        const response = await litipsum.get('/5/json');
        this.setState({
            text: response.data.text.join('*****')
        });
    }

    render(){
        return (
            <div>
                <h1>English Reading Trainer</h1>
                <button onClick={this.loadData}>Click</button>
                <button onClick={this.translateWord}>Translate</button>
                <div>{this.state.text}</div>
            </div>
        );
    }
}

export default App;