(function () {
    'use strict';

    if (window.plugin_wide_cards_ready) return;
    window.plugin_wide_cards_ready = true;

    var style = document.createElement('style');
    style.innerHTML = '.card--wide { width: 18.3em !important; } .card-more__box { padding-bottom: 95% !important; }';
    document.head.appendChild(style);

    function wrap(obj, method, fn) {
        if (!obj || typeof obj[method] !== 'function') return;
        var orig = obj[method];
        obj[method] = function () {
            var args = Array.prototype.slice.call(arguments);
            return fn.call(this, orig, args);
        };
    }

    function extendCards(data) {
        if (!data || !Array.isArray(data.results)) return;
        data.results.forEach(function (card) { card.wide = false; });
        if (Lampa.Utils.extendItemsParams) {
            Lampa.Utils.extendItemsParams(data.results, { style: { name: 'wide' } });
        }
    }

    function applyWide() {
        var maker = Lampa.Maker.map('Main');
        if (!maker || !maker.Create) return;

        wrap(maker.Create, 'onCreateAndAppend', function (orig, args) {
            if (Lampa.Storage.get('wide_cards', true) && args[0]) {
                args[0].wide = false;
                extendCards(args[0]);
            }
            return orig ? orig.apply(this, args) : undefined;
        });

        wrap(maker.Items, 'onAppend', function (orig, args) {
            if (orig) orig.apply(this, args);
            if (!Lampa.Storage.get('wide_cards', true)) return;
            var line = args && args[0];
            if (!line || line.__wide_done) return;
            line.__wide_done = true;
            line.use && line.use({
                onInstance: function (card) {
                    if (!card || card.__wide) return;
                    card.__wide = true;
                    if (card.params) card.params.style = { name: 'wide' };
                    var el = card.render && card.render(true);
                    if (el) { el.classList.add('card--wide'); el.classList.remove('card--small'); }
                }
            });
        });
    }

    function addSettings() {
        Lampa.SettingsApi.addParam({
            component: 'interface',
            param: {
                name: 'wide_cards',
                type: 'trigger',
                default: true
            },
            field: {
                name: 'Широкие карточки',
                description: 'Lampa будет перезагружена'
            },
            onChange: function () {
                window.location.reload();
            }
        });
    }

    if (window.appready) {
        applyWide();
        addSettings();
    } else {
        Lampa.Listener.follow('app', function (e) {
            if (e.type === 'ready') {
                applyWide();
                addSettings();
            }
        });
    }

})();
