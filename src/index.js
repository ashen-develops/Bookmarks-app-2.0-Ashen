import $ from 'jquery';
import api from './api';
// import 'normalize.css';
import './style.css';
import STORE from './store.js';
import bookmarks from './bookmarks.js'



const main = function() {
    api.getBookmarks()
    .then(response => response.json())
    .then(response => {
        response.forEach(bookmark => STORE.addBookmark(bookmark))
        bookmarks.render()
    })
    bookmarks.bindEventListeners();
}

$(main);