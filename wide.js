(function () {
    'use strict';

    if (window.plugin_wide_cards_ready) return;
    window.plugin_wide_cards_ready = true;

    var style = document.createElement('style');
    style.innerHTML = `
        .card--wide { width: 18.3em !important; }
        .card-more__box { padding-bottom: 95% !important; }
        .card__img { padding-bottom: 56.25% !important; }
    `;
    document.head.appendChild(style);

    var mainMaker = Lampa.Maker.map('Main');
    if (!mainMaker || !mainMaker.Create) return;

    var orig = mainMaker.Create.onCreateAndAppend;
    mainMaker.Create.onCreateAndAppend = function () {
        var args = Array.prototype.slice.call(arguments);
        var data = args && args[0];
        if (data && Array.isArray(data.results)) {
            data.results.forEach(function (card) {
                card.wide = false;
            });
            Lampa.Utils.extendItemsParams(data.results, {
                style: { name: 'wide' }
            });
        }
        return orig ? orig.apply(this, args) : undefined;
    };

})();
