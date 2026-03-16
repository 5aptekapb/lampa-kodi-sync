(function () {
    'use strict';

    if (Lampa.Storage.get('wide_post') === false) return;

    var style = document.createElement('style');
    style.innerHTML = `
        .card--wide { width: 18.3em !important; }
        .card-more__box { padding-bottom: 95% !important; }
    `;
    document.head.appendChild(style);

    Lampa.Utils.extendItemsParams && Lampa.Listener.follow('app', function(e) {
        if (e.type === 'ready') {
            Lampa.Storage.set('card_view', 'wide');
        }
    });

})();
