import axios from 'axios';

export default axios.create({
    baseURL: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
    params: {
        key: 'trnsl.1.1.20190308T211558Z.49bf96bf6745f192.7c91c925ce95fabc97540b9fa542490116487453',
        lang: 'en-ru',
        format: 'html',
    }
})