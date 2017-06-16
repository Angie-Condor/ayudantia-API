'use strict';

const getJSON = (url, callback) => {

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {

    if (xhr.status !== 200) {
      return callback(new Error('Error al cargar JSON desde ' + url + '(' + xhr.status + ')'));
    }

    callback(null, xhr.response);
  });

  xhr.open('GET', url);
  xhr.responseType = 'json';
  xhr.send();
};
