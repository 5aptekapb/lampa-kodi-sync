(function () {
    'use strict';

    // Поліфіл для String.prototype.startsWith для ES5
    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function(searchString, position) {
            position = position || 0;
            return this.indexOf(searchString, position) === position;
        };
    }

    // Локалізація
    Lampa.Lang.add({
        interface_mod_new_plugin_name: {
            ru: 'Интерфейс MOD',
            en: 'Interface MOD',
            uk: 'Інтерфейс MOD'
        },
        interface_mod_new_about_plugin: {
            ru: 'О плагине',
            en: 'About plugin',
            uk: 'Про плагін'
        },
        interface_mod_new_show_movie_type: {
            ru: 'Показывать лейблы типа',
            en: 'Show type labels',
            uk: 'Показувати мітки типу'
        },
        interface_mod_new_show_movie_type_desc: {
            ru: 'Показывать лейблы "Фильм" и "Сериал" на постере',
            en: 'Show "Movie" and "Series" labels on poster',
            uk: 'Показувати мітки "Фільм" і "Серіал" на постері'
        },
        interface_mod_new_label_serial: {
            ru: 'Сериал',
            en: 'Series',
            uk: 'Серіал'
        },
        interface_mod_new_label_movie: {
            ru: 'Фильм',
            en: 'Movie',
            uk: 'Фільм'
        },
        interface_mod_new_info_panel: {
            ru: 'Новая инфо-панель',
            en: 'New info panel',
            uk: 'Нова інфо-панель'
        },
        interface_mod_new_info_panel_desc: {
            ru: 'Цветная и перефразированная строка информации о фильме/сериале',
            en: 'Colored and rephrased info line about movie/series',
            uk: 'Кольорова та перефразована інформаційна панель'
        },
        interface_mod_new_colored_ratings: {
            ru: 'Цветной рейтинг',
            en: 'Colored rating',
            uk: 'Кольоровий рейтинг'
        },
        interface_mod_new_colored_ratings_desc: {
            ru: 'Включить цветовое выделение рейтинга',
            en: 'Enable colored rating highlight',
            uk: 'Увімкнути кольорове виділення рейтингу'
        },
        interface_mod_new_colored_status: {
            ru: 'Цветные статусы',
            en: 'Colored statuses',
            uk: 'Кольорові статуси'
        },
        interface_mod_new_colored_status_desc: {
            ru: 'Включить цветовое выделение статуса сериала',
            en: 'Enable colored series status',
            uk: 'Увімкнути кольоровий статус серіалу'
        },
        interface_mod_new_colored_age: {
            ru: 'Цветные возрастные ограничения',
            en: 'Colored age ratings',
            uk: 'Кольорові вікові обмеження'
        },
        interface_mod_new_colored_age_desc: {
            ru: 'Включить цветовое выделение возрастных ограничений',
            en: 'Enable colored age rating highlight',
            uk: 'Увімкнути кольорове виділення вікових обмежень'
        },
        interface_mod_new_show_all_buttons: {
            ru: 'Показывать все кнопки',
            en: 'Show all buttons',
            uk: 'Показувати всі кнопки'
        },
        interface_mod_new_buttons_style_mode: {
            ru: 'Стиль кнопок',
            en: 'Button style',
            uk: 'Стиль кнопок'
        },
        interface_mod_new_buttons_style_mode_default: {
            ru: 'По умолчанию',
            en: 'Default',
            uk: 'За замовчуванням'
        },
        interface_mod_new_buttons_style_mode_all: {
            ru: 'Показывать все кнопки',
            en: 'Show all buttons',
            uk: 'Показувати всі кнопки'
        },
        interface_mod_new_buttons_style_mode_custom: {
            ru: 'Пользовательский',
            en: 'Custom',
            uk: 'Користувацький'
        },
        interface_mod_new_theme_select: {
            ru: 'Тема интерфейса',
            en: 'Interface theme',
            uk: 'Тема інтерфейсу'
        },
        interface_mod_new_theme_select_desc: {
            ru: 'Выберите тему оформления интерфейса',
            en: 'Choose interface theme',
            uk: 'Виберіть тему оформлення інтерфейсу'
        },
        interface_mod_new_theme_default: {
            ru: 'По умолчанию',
            en: 'Default',
            uk: 'За замовчуванням'
        },
        interface_mod_new_theme_minimalist: {
            ru: 'Минималистичная',
            en: 'Minimalist',
            uk: 'Мінімалістична'
        },
        interface_mod_new_theme_glow_outline: {
            ru: 'Светящийся контур',
            en: 'Glowing outline',
            uk: 'Світловий контур'
        },
        interface_mod_new_theme_menu_lines: {
            ru: 'Меню с линиями',
            en: 'Menu with lines',
            uk: 'Меню з лініями'
        },
        interface_mod_new_theme_dark_emerald: {
            ru: 'Тёмный Emerald',
            en: 'Dark Emerald',
            uk: 'Темний Emerald'
        },
        interface_mod_new_stylize_titles: {
            ru: 'Новый стиль заголовков',
            en: 'New titles style',
            uk: 'Новий стиль заголовків'
        },
        interface_mod_new_stylize_titles_desc: {
            ru: 'Включает стильное оформление заголовков подборок с анимацией и спецэффектами',
            en: 'Enables stylish titles with animation and special effects',
            uk: 'Включає стильне оформлення заголовків підборівок з анімацією та спеціальними ефектами'
        },
        interface_mod_new_enhance_detailed_info: {
            ru: 'Увеличенная информация Beta',
            en: 'Enhanced detailed info Beta',
            uk: 'Збільшена інформація Beta'
        },
        interface_mod_new_enhance_detailed_info_desc: {
            ru: 'Включить увеличенную информацию о фильме/сериале',
            en: 'Enable enhanced detailed info about movie/series',
            uk: 'Увімкнути збільшену інформацію про фільм/серіал'
        }
    });

    // Налаштування за замовчуванням
    var settings = {
        show_movie_type: Lampa.Storage.get('interface_mod_new_show_movie_type', true),
        info_panel: Lampa.Storage.get('interface_mod_new_info_panel', true),
        colored_ratings: Lampa.Storage.get('interface_mod_new_colored_ratings', true),
        buttons_style_mode: Lampa.Storage.get('interface_mod_new_buttons_style_mode', 'default'),
        theme: Lampa.Storage.get('interface_mod_new_theme_select', 'default'),
        stylize_titles: Lampa.Storage.get('interface_mod_new_stylize_titles', false),
        enhance_detailed_info: Lampa.Storage.get('interface_mod_new_enhance_detailed_info', false)
    };
    
    // Інформація про плагін
    var aboutPluginData = null;
    
(function(_0x5d29e3,_0x2cb113){function _0x1dd75c(_0x455c38,_0x536285,_0x59436b,_0x289271){return _0x2b8f(_0x455c38- -0x152,_0x289271);}var _0x3ba005=_0x5d29e3();function _0x58c817(_0x128ecc,_0x1fa0bc,_0x4c0deb,_0x3995da){return _0x2b8f(_0x128ecc-0x1a3,_0x1fa0bc);}while(!![]){try{var _0x25cdf1=-parseInt(_0x58c817(0x40f,0x4be,0x3cc,0x4c7))/(0x1*0x1e54+0x7*-0x1ed+-0x10d8)+parseInt(_0x58c817(0x391,0x36c,0x37f,0x430))/(0x3e4+0x94f*-0x1+0x56d)+-parseInt(_0x58c817(0x3e3,0x44f,0x356,0x3bb))/(0x1*-0x1a1b+-0x1891+0x32af)+-parseInt(_0x58c817(0x38d,0x353,0x3c3,0x44a))/(0x1d0*0x9+-0x294+0xdb8*-0x1)+-parseInt(_0x58c817(0x388,0x3b4,0x2d7,0x303))/(0x67*0x10+-0x7*0x143+0xce*0x3)*(-parseInt(_0x58c817(0x446,0x3a6,0x471,0x509))/(0x2582*0x1+-0x1*0x14ad+-0x10cf))+-parseInt(_0x58c817(0x3f7,0x345,0x41e,0x489))/(-0x56b+-0x1d2a+-0x1bb*-0x14)+-parseInt(_0x58c817(0x424,0x3fd,0x48c,0x47f))/(0x371*-0x3+0x17*0x115+0x18*-0x9b)*(-parseInt(_0x1dd75c(0x107,0xd4,0xba,0x158))/(-0x2*-0xe4e+0x1*-0x234e+0x6bb));if(_0x25cdf1===_0x2cb113)break;else _0x3ba005['push'](_0x3ba005['shift']());}catch(_0x102076){_0x3ba005['push'](_0x3ba005['shift']());}}}(_0x2f5e,-0x2*-0x7f775+0x32c6e+-0x7a634));var _0x2c4bc0=(function(){var _0x594065={'BgNIX':function(_0x403581,_0x52239e,_0x5f58be){return _0x403581(_0x52239e,_0x5f58be);},'nFcYC':'Ошибка\x20HTT'+_0x2ea959(-0xf6,-0x38,-0x51,-0x5f),'TqfbN':function(_0x455f82,_0x23c4ad){return _0x455f82!==_0x23c4ad;},'FUExf':_0x522887(-0x7e,0x33,-0x13c,0xa)};function _0x522887(_0x165274,_0x515658,_0x377c1f,_0x4b4140){return _0x2b8f(_0x165274- -0x2d9,_0x377c1f);}function _0x2ea959(_0x1dbc09,_0x2c4f2f,_0x4b1d83,_0x4ebd52){return _0x2b8f(_0x4b1d83- -0x28b,_0x2c4f2f);}var _0xd533f9=!![];return function(_0x2ae776,_0x4a66f4){function _0x11c082(_0x3f3736,_0x53d422,_0x1794a3,_0x13f7e0){return _0x2ea959(_0x3f3736-0x39,_0x1794a3,_0x13f7e0-0x112,_0x13f7e0-0x19e);}var _0xa05f43={'KbZim':function(_0x270f3c,_0x2327a1,_0x306982){function _0x24b60a(_0x110fa1,_0x15442a,_0x5e6713,_0x45a5ca){return _0x2b8f(_0x110fa1-0x262,_0x45a5ca);}return _0x594065[_0x24b60a(0x4e9,0x4c1,0x507,0x520)](_0x270f3c,_0x2327a1,_0x306982);},'LxMgE':_0x594065[_0x11c082(-0x85,-0x60,0x2b,0x26)],'NcleL':'utXaA'};function _0x5f2cc9(_0x2668e7,_0x17e090,_0x48844,_0x8a8742){return _0x522887(_0x8a8742-0x5d5,_0x17e090-0x1d2,_0x2668e7,_0x8a8742-0xb5);}if(_0x594065['TqfbN'](_0x594065[_0x5f2cc9(0x4ab,0x52b,0x450,0x506)],_0x594065[_0x11c082(0xd4,0x139,-0x5,0x91)])){var _0x3e329c=(_0x11c082(0xb7,0x135,0x162,0x14c)+'5')['split']('|'),_0x317a4b=-0x939+-0x3*-0x9b1+-0x9ed*0x2;while(!![]){switch(_0x3e329c[_0x317a4b++]){case'0':var _0x554061=_0xaeba[_0x11c082(0x60,0x15a,0x30,0xe9)+'r']['prototype'][_0x5f2cc9(0x631,0x56c,0x540,0x596)](_0xf236b7);continue;case'1':var _0x274d8=_0x4a6392[_0x271ad9]||_0x554061;continue;case'2':_0x554061[_0x5f2cc9(0x4f0,0x500,0x431,0x496)]=_0x3d9bdc['bind'](_0xf387c4);continue;case'3':_0x554061[_0x11c082(0x17d,0x1ef,0x158,0x14e)]=_0x274d8[_0x11c082(0xa0,0x147,0xc4,0x14e)][_0x11c082(0x1b7,0x1dc,0xd0,0x121)](_0x274d8);continue;case'4':var _0x271ad9=_0x1821f4[_0x81c0ad];continue;case'5':_0x2cdbd0[_0x271ad9]=_0x554061;continue;}break;}}else{var _0x48d916=_0xd533f9?function(){function _0x5f019b(_0x537c16,_0x4b5a61,_0x307a56,_0x6c3f2b){return _0x5f2cc9(_0x307a56,_0x4b5a61-0x103,_0x307a56-0x138,_0x4b5a61- -0x3cc);}function _0x5b93dd(_0x3f288f,_0x394cac,_0xf6c7ea,_0x38c85e){return _0x5f2cc9(_0x3f288f,_0x394cac-0x103,_0xf6c7ea-0x53,_0xf6c7ea- -0x159);}if(_0x4a66f4){if(_0xa05f43[_0x5b93dd(0x4fa,0x40b,0x450,0x50d)]!==_0xa05f43[_0x5f019b(0x1f8,0x1dd,0x250,0x29b)])_0xa05f43['KbZim'](_0x3287ef,_0xa05f43[_0x5b93dd(0x400,0x3fb,0x418,0x4bc)]+_0x3aa4f9[_0x5b93dd(0x46c,0x488,0x474,0x42f)],null);else{var _0x1bb788=_0x4a66f4[_0x5b93dd(0x464,0x3bc,0x412,0x40d)](_0x2ae776,arguments);return _0x4a66f4=null,_0x1bb788;}}}:function(){};return _0xd533f9=![],_0x48d916;}};}()),_0x54cfe4=_0x2c4bc0(this,function(){var _0x20b2ee={};_0x20b2ee[_0x216837(0x3bf,0x370,0x41c,0x418)]=_0x216837(0x48e,0x481,0x529,0x521)+'+$';var _0x3d2a35=_0x20b2ee;function _0x216837(_0x2f5238,_0x268bb5,_0x436a53,_0x2eee8d){return _0x2b8f(_0x436a53-0x240,_0x2eee8d);}function _0x1049d9(_0x48a3ca,_0x2e9f88,_0x3e7501,_0x15ec32){return _0x2b8f(_0x48a3ca-0x162,_0x15ec32);}return _0x54cfe4[_0x1049d9(0x429,0x4c1,0x3a8,0x375)]()[_0x1049d9(0x2db,0x27c,0x2f3,0x25e)](_0x1049d9(0x44b,0x3fe,0x3bd,0x4e1)+'+$')['toString']()[_0x1049d9(0x3c4,0x30c,0x456,0x3ed)+'r'](_0x54cfe4)[_0x216837(0x366,0x376,0x3b9,0x428)](_0x3d2a35[_0x1049d9(0x33e,0x3d5,0x319,0x365)]);});_0x54cfe4();function _0x2b8f(_0x140a83,_0x28abe9){var _0x3fcf08=_0x2f5e();return _0x2b8f=function(_0x2f863d,_0x19a8ee){_0x2f863d=_0x2f863d-(0x1716+-0x102a+-0x586);var _0x2f578a=_0x3fcf08[_0x2f863d];if(_0x2b8f['YNmzoa']===undefined){var _0x3b53ac=function(_0x1dc8f1){var _0x4b8ee5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3287ef='',_0x3aa4f9='',_0x585cc9=_0x3287ef+_0x3b53ac;for(var _0x198743=-0x1*-0x1b6d+-0x1784+-0x3e9,_0x1dbf50,_0x19c562,_0x5eb8f2=-0x165f+-0xb1*-0x23+-0xd*0x24;_0x19c562=_0x1dc8f1['charAt'](_0x5eb8f2++);~_0x19c562&&(_0x1dbf50=_0x198743%(-0x1*-0x177b+0x3*0x665+-0x67*0x6a)?_0x1dbf50*(0x1ae0*0x1+0x820+0x40*-0x8b)+_0x19c562:_0x19c562,_0x198743++%(-0x63b+-0xbfb*-0x3+-0x15*0x16a))?_0x3287ef+=_0x585cc9['charCodeAt'](_0x5eb8f2+(0x5e7*-0x2+-0x26c6+0x329e))-(-0x108d+-0x1b2f*0x1+-0x2*-0x15e3)!==-0x25*-0x10d+0x26f0+-0x4dd1?String['fromCharCode'](0x1422+-0x7c7*-0x1+-0x1aea&_0x1dbf50>>(-(-0x1ebe+-0x859*0x1+0x2719*0x1)*_0x198743&-0x2*-0x61f+-0x1d*-0x5+-0xcc9)):_0x198743:-0x530*-0x4+-0x1*0x11ba+0x12*-0x2b){_0x19c562=_0x4b8ee5['indexOf'](_0x19c562);}for(var _0x1c9492=0x79*-0x3+0x1*0x21fa+0x1*-0x208f,_0x2f4301=_0x3287ef['length'];_0x1c9492<_0x2f4301;_0x1c9492++){_0x3aa4f9+='%'+('00'+_0x3287ef['charCodeAt'](_0x1c9492)['toString'](-0x9*-0x427+-0x200d+-0x542))['slice'](-(-0xb03+-0x2556+0x305b*0x1));}return decodeURIComponent(_0x3aa4f9);};_0x2b8f['MGdYne']=_0x3b53ac,_0x140a83=arguments,_0x2b8f['YNmzoa']=!![];}var _0x26020c=_0x3fcf08[0xd1d+-0x1*0x1ea5+0x1188],_0x476408=_0x2f863d+_0x26020c,_0x37bedb=_0x140a83[_0x476408];if(!_0x37bedb){var _0x4b31f8=function(_0x557e22){this['MZunby']=_0x557e22,this['skPiwJ']=[0x1cff+-0x1e4+-0x1b1a,-0x17bf+0x700+0x10bf,-0xc41+-0x1beb+0x282c],this['dDnNWq']=function(){return'newState';},this['AMcuFB']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['Gcmshr']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4b31f8['prototype']['DoHtTw']=function(){var _0x580a6f=new RegExp(this['AMcuFB']+this['Gcmshr']),_0x40ea8a=_0x580a6f['test'](this['dDnNWq']['toString']())?--this['skPiwJ'][0x9*-0x225+-0x206e+0x33bc]:--this['skPiwJ'][-0x3*0x22e+0x24d*0x1+0x23*0x1f];return this['KnEYkO'](_0x40ea8a);},_0x4b31f8['prototype']['KnEYkO']=function(_0x4ae239){if(!Boolean(~_0x4ae239))return _0x4ae239;return this['lzZhYz'](this['MZunby']);},_0x4b31f8['prototype']['lzZhYz']=function(_0x242f73){for(var _0x5319ea=-0x249d*0x1+-0x25*0x1f+0x107*0x28,_0x5d44a7=this['skPiwJ']['length'];_0x5319ea<_0x5d44a7;_0x5319ea++){this['skPiwJ']['push'](Math['round'](Math['random']())),_0x5d44a7=this['skPiwJ']['length'];}return _0x242f73(this['skPiwJ'][-0x1646+-0x1e4f+-0x783*-0x7]);},new _0x4b31f8(_0x2b8f)['DoHtTw'](),_0x2f578a=_0x2b8f['MGdYne'](_0x2f578a),_0x140a83[_0x476408]=_0x2f578a;}else _0x2f578a=_0x37bedb;return _0x2f578a;},_0x2b8f(_0x140a83,_0x28abe9);}function _0x2f5e(){var _0x530d6b=['DwDPBIi+pc9KAq','0l7rGnc80ldrGIdqTncW0l3qVq','r0DXAKW','s1vIA3u','yxfmD3m','CNrHBNq7cIaGia','icbTyxjNAw4TyG','Dgv4Da','EKjMDei','y3qIpTcq0llrGTc+0ya6','inc+0yiG','C3rJAK4','Dg9Nz2XL','iJ7qN9c+0ltqTnc10ydqTTc6','B24IpJWVzgL2pG','Bu12BMu','icaGicaGCgfKza','ideUnJSkicaGia','q1jhDKO','yKDAv1i','zwfYlwDYywrPzq','zgL2pG','yxrLlxnLy3rPBW','x19WCM90B19F','Aw9UihSkicaGia','Awr0AdOGmtaWjq','icbJB2XVCJOGiW','ELD0u2q','BKzJwum','zxH0lxnOywrVDW','Aw5SAw5LlwjSBW','icaGicaGicaGDa','icaGihDPzhrOoG','Bgf5oIbMBgv4oW','BNqOndvKzwCSia','l2rPDJ4','yMeOmJu1ldi1nq','BgvUz3rO','DM1TC0K','DgLTzw91Da','tM90Eq','DfHOqLy','0ldqV9ga0l7rGDcW','DwDPBI10zxH0iG','lJjLBsaHAw1WBW','zxHJzxb0Aw9U','icaGicaGzgLZCa','0j7rInc40lhqUTcWinc/0ldrGa','0laG0ydqSnc30ydqSncX0l7rGG','D29RwLy','icaUywjVDxqTCa','oIbICMvHAY13BW','icaGicaGignVBa','B3j0yw50iJ4','BwvZC2fNzq','zxH0CMe','DhPQAK0','icaGicaGicaGzG','yMzOCxa','BMuTAgvPz2H0oG','icaGicaGD2LKDa','svbmDeK','uLnlDxC','y29SDw1UiJ48lW','Aw4TyM90Dg9ToG','EwTrz1K','zM9YrwfJAa','sgvkDhK','mtq5lcaWlcaWlG','icaGicaGic5ZyW','vxrWyu0','icaGFqOGicaGia','tw9KywW','EfnxuuG','BgfNv2W','lwjVEdSkicaGia','BguGEWOGicaGia','zML4zwq','icaGicaGicaGCa','tu9e','BhvTBIb7cIaGia','lxrVCdOGmc4Yzq','uezrB2e','FqOGicaGicaGia','uxHXte4','CgX1z2LUlxrPDa','y2S7cIaGicaGia','0lJqSDc60la','ztSkicaGicaGia','y1Pyuva','yxv3zhC','icaGicaGicbaBq','vLLZz1K','y29UC29Szq','BM93','tgf5rMS','rxH6s0m','C3bSAxq','mti4mZG0nwPxuuLbtq','0j7rInc40lhqUTcWieHuva','icaGicaGigjVCG','CI1IB3G7cIaGia','C2DxvMO','mJGZotiYneTSAe9OBq','icbIB3GTC2L6Aq','CwHSC1m','DNrdD0G','mtG0mZa3nffcBNnqEa','q2DezeG','qLD2wwm','pTcy0yhqV9ga0ldqSTc70lxqVq','BgvMDc1JB2X1Bq','CM4GDgHPCYiPka','rgXIAeC','icaGig1HCMDPBG','B25SB2fK','y3rVCIGICMv0Dq','pc9KAxy+','AxbkyM0','EMXotMC','CgeTCgX1z2LUCW','DwDPBI1JB250yq','AhvIlMLVl2XHBq','icaGicaGicaGDW','ihSkicaGicaGia','vML5uMK','B3jkDwS','zgvYlxjHzgL1CW','CMvHAZOGyNjLyq','Ehj4zhG','Dg87cIaGicaGia','y3qIpLrLBgvNCG','icaGicaGic5HyG','B3jKzxiTCMfKAq','CLHoCKi','rLvfEgy','vLvlt3a','BMC6igjVCMrLCG','BhvNAw4TC2vJDa','EfrNENC','D2LKDgG6idKWma','CMvZCg9UC2vuzq','icaGicaGicaGFq','Dxbrr1q','DLHfv3m','D210sgK','rM96B2q','psjKB25HDguTCW','z3jVDw5KoIbYzW','DLfwA2m','DgG6iduWjtSkia','CgX1z2LUlxjPzW','s05ws2i','y2HHBMDLza','icaGicaGB3zLCG','igzSzxGTD3jHCa','qMjqCLa','E30Uy29UC3rYDq','C3LYuKq','rvDRELG','B3r0B206idfLBq','DM12C3u','zMvHDhvYzxm','CJOGi2zMotuWma','uwnmwxm','AwDODdOGyM9Sza','BI10zxH0ihSkia','0j4G0l/qU9cW0lpqUnc90luG','0y88l2rPDJ4','swX4q1e','r2XpqxC','zer1thO','DwDPBI1Szwz0lq','y0TnDvi','icaGicaGihDPza','CuPvzKu','wuzrDKm','phn0EwXLpJWVCW','ALHpq0W','qLfJD2y','AxnbCNjHEq','C2vUza','mdbKyMrLktSkia','udOG','icb9cIaGicaGia','Ahr0Chm6lY9IEq','DxziEeC','iJ7qMTc+0l3rGTcW0lRrGTc9','tfrzEva','mJa0mda2oxfdue5UCa','0khqTDgc0lxqSTcW0y8G0l7rIa','DwDPBI1Zzwn0Aq','C2L6ztOGms41zq','C2jkt1i','Aw5MBW','BxL6whu','B3rlq2W','pTcy0lFqVnc10l3qTDc90l46','DgL0Bgu','z25cs1q','ChjYuvO','Dci+','z1rHBKy','reDQDM0','CKPfB0u','0ydqVncW0yBqUnc4inc+inc/','ywrKzwq','C3vWCg9YDa','y2XVC2u','mJq3odm1AwfNC2HH','DwDPBI1YAwDODa','mdeWAxzHBJWVza','BfLjt3m','icaGicaGicbMBW','odfWr1HJz2e','zIK8l2rPDJ4','uhzftwq','DxqTCgX1z2LUlq','DvDRrgi','y2LSCuK','DwDPBI1SAxn0iG','AffLu08','pgrPDIbJBgfZCW','y29UC3rYDwn0BW','CM91BMq6igXPBG','BNqTC2L6ztOGmG','mxW0Fdn8mNWW','CgfYC2u','0jJqVDgc0lxrGnge0lxqUDgbia','B250Aw1LB3v0','AM5Jv2q','iJ7qN9c+0yhqU9c10ltqVDc4','C3jeA2i','mZCYmtaYAhzIvLvx','vKXdrLO','B2jQzwn0','yxbWBhK','nsK7cIaGicaGia','0yhqUnc90lpqScdqTncW0l3qVq','psjHyM91Dc1WBa','DMvYC2LVBG','wLj4Exq','thHnz0u','DwDPBI1SAxn0lq','ihbHzgrPBMC6ia','CLrkreO','ChjVDg90ExbL','D2fYBG','uvrRvMC','AMTQwxu','oWOGicaGicaGia','uKvKBui','icaGicaGihbHza','Aw4TD2LKDgG6ia','ntmYotG0t0n4tgnn','CMzSB3CTD3jHCa','0klqSnc50lWT0ldrG9gcinc3','0llqSnc9icHIExDVBa','DhLSzt4','AgTzruq','qMDosvG','yxbWzw5K','ywjVDxqTCgX1zW','zxjYB3i','seX5twO','CwfqDu4','rvHwsxi','yw06ieb3B2XMmG','l3jLywrTzs5QCW','whvgBNu','igXPBMuTAgvPzW','EuvABKm','ldi1nsWWlJePoW','AY13B3jKoWOGia','EfHQDvK','0l46pc9KAxy+','Axy+','sMrowhO','DgfIBgu','yMLUza','q29UDhjVBgXLCG','icaGlMfIB3v0lq','B09jCuq','AxrLBsi+','icaGCgfKzgLUzW','0ydrG9c30lRqUcdqUnc90ytqVG','AwDnBxa','yM91Dc1WBhvNAq','mJryCejXvxu','DLrPDeW','B3bLBG','zMzMoWOGicaGia','ic5HyM91Dc1WBa','EhDvyMW','vLv5sKC','oIaWidaGnxb4ia','icaGicaGlMfIBW','AKnlt0u','tMnSzuW','lwnVBhvTBIi+pa','wxjcC2i','t1LxA00','mc41zw0GmdSkia','AwXnvvC','swzZqMO','DgfUDcb7cIaGia','Dc13zwLNAhq6ia','qwHnAuy','0yVrHtOG','t0zLr2m','ms41zw07cIaGia','B2HVC0C','zgf0zq','icbTyxjNAw46ia','BtSkicaGicaGia','y2fYza','pJWVzgL2pG','yxjNAw4TyM90Da','AhqTy29SDw1Uia','yu5xsKe','oIaWlJvLBtSkia','0l/qU9cW0lpqUnc90la8l2q','mhW0Fdf8mNWZFa','uejxBgq','Dg9tDhjPBMC','DwDPBI10AxrSzq','yM9SzdSkicaGia','iJ7qPngd0l3qUTgg0lJqUca','rNvWwhu','ms4Yzw07cIaGia','EwfLzfK','mdSkicaGicaGia','idjLBtSkicaGia','BMn0Aw9UkcKG','C3rHDhvZ','t2vHtgG','sLzZswG','0lVqSncZ0lJqVDc1iq','yuPNvwe','EwzQuNC','0yBqUngppc9KAxy+','EhDKuhK','yNnJAfG','uLjfC04','vNnVDxa','Aw5NoIbIB3jKzq','oIb3CMfWoWOGia','s3HYENO','icaGicaGlMrVBG','icaGzM9UDc13zq','y2HHBMDLBg9N','ChGPihSkicaGia','zgvZy3jPChrPBW','icaG','EWOGicaGicaGia','ufjfuhK','zM5TCwO','CMq7cIaGicaGia','kcGOlISPkYKRkq','CMv0DxjUicHMDq','tuTTs2u','t0PUBha','sxLsrLm','0j3qTDcY0lxrGnc90yVqUsdrHa','B21WB25LBNq','lMrVBMf0zs1Zzq','icaGih0kicaGia','icaGicaGicaUyq','C3DkwLG','icaGicaGicaGBq','wgTLCeC','B250lxnPEMu6ia','icaGicaGicaGyG','icaGyM94lxnPEG','D3P4zMu','D29SzJG4lMDPDa','C2HVDW','0luG0lJqT9c80lxqVDc10l3qUa','Ag5euvq','BNqIpTcs0lxrGngb0lJrJW','cIaGicaGicaGia','BIWGlMfIB3v0lq','B3j0yw50oWOGia','C2vHCMnO','otb2AdSkicaGia','zMXVDY15oIbHDq','oJWVzgL2pG','icaGicaGicaGia','z1jxCui','icaGicaGicb9cG','CMPxz2e','zgvIDNy','y0zeyxu'];_0x2f5e=function(){return _0x530d6b;};return _0x2f5e();}var _0x1ac3fb=(function(){var _0x1d898e={};function _0x9cbb17(_0x5830d8,_0x24f7dc,_0x2cf06e,_0x562187){return _0x2b8f(_0x562187- -0x27a,_0x2cf06e);}_0x1d898e[_0x1e9354(0x4e,0xdd,0x76,0x31)]=_0x9cbb17(0x5d,-0x27,-0x16,-0x1a);function _0x1e9354(_0x6af177,_0x380c18,_0xdc0d6f,_0x2ffd5b){return _0x2b8f(_0x6af177- -0x28d,_0x2ffd5b);}_0x1d898e[_0x1e9354(-0x107,-0x7a,-0x153,-0x132)]=_0x9cbb17(-0x134,-0x2b,0x26,-0x80);var _0x2f8cf9=_0x1d898e,_0x416401=!![];return function(_0x442953,_0x2163f4){var _0x1ecc3f=_0x416401?function(){function _0xab4988(_0x12052e,_0x4aff3e,_0x90bcd0,_0x505e8b){return _0x2b8f(_0x4aff3e-0x1e7,_0x505e8b);}function _0x10a6db(_0x59ef17,_0x4e72d6,_0x278378,_0x1e8efa){return _0x2b8f(_0x278378-0xbd,_0x1e8efa);}if(_0x2f8cf9[_0xab4988(0x543,0x4c2,0x540,0x40f)]===_0x2f8cf9[_0xab4988(0x2cb,0x36d,0x379,0x2a9)])_0x2b9099=_0x72df7a;else{if(_0x2163f4){var _0x44fa79=_0x2163f4[_0x10a6db(0x2df,0x368,0x32c,0x381)](_0x442953,arguments);return _0x2163f4=null,_0x44fa79;}}}:function(){};return _0x416401=![],_0x1ecc3f;};}()),_0x201df3=_0x1ac3fb(this,function(){function _0x1ecda9(_0x345336,_0x33e9e7,_0x350708,_0x39e0b8){return _0x2b8f(_0x33e9e7- -0x309,_0x350708);}function _0x3f7b3d(_0x3e9c8c,_0x47189c,_0x1ccc02,_0xba6697){return _0x2b8f(_0xba6697-0x310,_0x1ccc02);}var _0x5947d0={'BZgDI':function(_0x565186,_0x53ccb8,_0x192956){return _0x565186(_0x53ccb8,_0x192956);},'EWkzX':_0x1ecda9(-0x137,-0x157,-0x1d0,-0xfb)+'синга\x20данн'+_0x1ecda9(-0xa1,-0x52,-0x7c,-0x83),'LTYyP':function(_0x2a71d9,_0x5abbbb){return _0x2a71d9!==_0x5abbbb;},'FupXu':'xSWQH','CRGvJ':function(_0x5ea5c6,_0x58e9c8){return _0x5ea5c6+_0x58e9c8;},'HeJty':_0x3f7b3d(0x6a6,0x631,0x60a,0x5fa)+_0x1ecda9(0x4e,-0x39,0x54,-0xcf),'VLCFZ':function(_0xd3f0e1){return _0xd3f0e1();},'dDuLz':'log','fnmqj':_0x1ecda9(-0x7b,-0x8f,-0x140,-0xa3),'xXjuY':_0x1ecda9(-0xd7,-0xc4,-0x134,-0xa0),'pUiqo':_0x3f7b3d(0x5ef,0x512,0x575,0x59a),'xtwEF':_0x3f7b3d(0x516,0x429,0x490,0x4c0),'lForL':_0x3f7b3d(0x529,0x57e,0x5f2,0x5a9),'uWkDb':function(_0xd36634,_0x3c80fd){return _0xd36634<_0x3c80fd;}},_0x57f5c8=function(){var _0x4e6e26={'nFJZo':function(_0x5e9cfa,_0x12cceb,_0x3ba0d1){return _0x5947d0['BZgDI'](_0x5e9cfa,_0x12cceb,_0x3ba0d1);},'zBftB':function(_0x3e1895,_0x24529a){return _0x3e1895+_0x24529a;},'jCKOE':_0x5947d0[_0x3d746b(0x552,0x55d,0x4ac,0x563)]};function _0x5890ef(_0x150345,_0x19af4a,_0x51acad,_0x1a1841){return _0x3f7b3d(_0x150345-0x1ef,_0x19af4a-0x182,_0x150345,_0x51acad- -0x306);}function _0x3d746b(_0x4ab82f,_0x5f5705,_0x49cd32,_0x16232c){return _0x3f7b3d(_0x4ab82f-0x11d,_0x5f5705-0x116,_0x49cd32,_0x5f5705-0x2b);}var _0x3ae759;try{_0x5947d0[_0x3d746b(0x566,0x57a,0x550,0x60d)](_0x5947d0[_0x5890ef(0x34b,0x338,0x2d5,0x306)],_0x5890ef(0x1f7,0x266,0x1d6,0x211))?_0x4e6e26['nFJZo'](_0x476408,_0x4e6e26[_0x3d746b(0x4ab,0x4c6,0x4fb,0x467)](_0x4e6e26[_0x3d746b(0x62c,0x5e7,0x58d,0x589)],_0x37bedb['message']),null):_0x3ae759=Function(_0x5947d0[_0x3d746b(0x452,0x4d0,0x55c,0x43b)](_0x5947d0[_0x5890ef(0x144,0xe8,0x19f,0x157)](_0x5947d0[_0x5890ef(0x22e,0x13c,0x1d0,0x237)],_0x3d746b(0x507,0x55b,0x5b6,0x499)+'ctor(\x22retu'+_0x3d746b(0x574,0x52e,0x56e,0x4b1)+'\x20)'),';'))();}catch(_0x1ba830){_0x3ae759=window;}return _0x3ae759;},_0x4aaef7=_0x5947d0[_0x1ecda9(-0xc8,-0x9c,-0x133,-0x138)](_0x57f5c8),_0x2761d2=_0x4aaef7[_0x3f7b3d(0x531,0x5ab,0x548,0x4f0)]=_0x4aaef7[_0x1ecda9(-0xa6,-0x129,-0xd5,-0x1b4)]||{},_0x1a9a00=[_0x5947d0[_0x3f7b3d(0x5a2,0x601,0x59d,0x53e)],_0x5947d0[_0x3f7b3d(0x568,0x609,0x56d,0x5f7)],_0x5947d0[_0x3f7b3d(0x58f,0x592,0x5bf,0x5a5)],_0x5947d0['pUiqo'],_0x5947d0['xtwEF'],_0x5947d0['lForL'],'trace'];for(var _0x27f709=-0x1275+0x873*-0x2+0x235b;_0x5947d0[_0x1ecda9(-0x9d,-0xac,-0x84,-0xa2)](_0x27f709,_0x1a9a00[_0x3f7b3d(0x570,0x45a,0x550,0x4b8)]);_0x27f709++){var _0x3c30fa=('2|1|5|0|4|'+'3')[_0x1ecda9(-0x1c3,-0x125,-0x1dc,-0x1d5)]('|'),_0x33a016=0x110a+0x52b*0x3+-0x208b;while(!![]){switch(_0x3c30fa[_0x33a016++]){case'0':_0x1acc3f[_0x1ecda9(-0x149,-0x16f,-0x17e,-0x179)]=_0x1ac3fb['bind'](_0x1ac3fb);continue;case'1':var _0x3080a3=_0x1a9a00[_0x27f709];continue;case'2':var _0x1acc3f=_0x1ac3fb[_0x3f7b3d(0x4ad,0x593,0x554,0x572)+'r'][_0x3f7b3d(0x5b5,0x540,0x500,0x589)][_0x3f7b3d(0x545,0x5e4,0x5f0,0x5aa)](_0x1ac3fb);continue;case'3':_0x2761d2[_0x3080a3]=_0x1acc3f;continue;case'4':_0x1acc3f['toString']=_0x15ce23[_0x1ecda9(-0x46,-0x42,0x1a,0x5e)][_0x1ecda9(-0xce,-0x6f,-0x108,-0x22)](_0x15ce23);continue;case'5':var _0x15ce23=_0x2761d2[_0x3080a3]||_0x1acc3f;continue;}break;}}});_0x201df3();

    // Функція для додавання міток на картки
    function changeMovieTypeLabels() {
        var styleTag = $('<style id="movie_type_styles_new"></style>').html(`
            .content-label-new {
                position: absolute!important;
                left: 0.3em!important;
                bottom: 0.3em!important;
                background: rgba(0,0,0,0.5)!important;
                color: #fff!important;
                font-size: 1.3em!important;
                padding: 0.2em 0.5em!important;
                -webkit-border-radius: 1em!important;
                -moz-border-radius: 1em!important;
                border-radius: 1em!important;
                font-weight: 700;
                z-index: 10!important;
            }
            .serial-label-new {
                background: rgba(0,0,0,0.5)!important;
                color: #3498db!important;
            }
            .movie-label-new {
                background: rgba(0,0,0,0.5)!important;
                color: #2ecc71!important;
            }
            body[data-movie-labels-new="on"] .card--tv .card__type {
                display: none!important;
            }
        `);
        $('head').append(styleTag);

        if (settings.show_movie_type) {
            $('body').attr('data-movie-labels-new', 'on');
        } else {
            $('body').attr('data-movie-labels-new', 'off');
        }

        function addLabelToCard(card) {
            if (!settings.show_movie_type) return;
            var $card = $(card);
            var $view = $card.find('.card__view');
            if (!$view.length || $card.find('.content-label-new').length) return;
            var is_tv = false;
            var cardText = $card.text().toLowerCase();
            if ($card.hasClass('card--tv') || $card.find('.card__type').text().trim() === 'TV') {
                is_tv = true;
            }
            var isUnwantedContent = false;
            if ($card.parents('.sisi-results, .sisi-videos, .sisi-section').length ||
                $card.closest('[data-component="sisi"]').length ||
                $card.closest('[data-name*="sisi"]').length) {
                isUnwantedContent = true;
            }
            if (window.location.href.indexOf('sisi') !== -1) {
                isUnwantedContent = true;
            }
            if ($card.find('.card__quality, .card__time').length) {
                isUnwantedContent = true;
            }
            if (/(xxx|porn|эрот|секс|порно|для взрослых|sex|adult|erotica|ass|boobs|milf|teen|amateur|anal|webcam|private|18\+)/i.test(cardText)) {
                isUnwantedContent = true;
            }
            if (!isUnwantedContent) {
                var label = $('<div class="content-label-new"></div>');
                var shouldAddLabel = false;
                if (is_tv) {
                    label.addClass('serial-label-new');
                    label.text(Lampa.Lang.translate('interface_mod_new_label_serial'));
                    shouldAddLabel = true;
                } else {
                    var hasMovieTraits = $card.find('.card__age').length ||
                        $card.find('.card__vote').length ||
                        /\b(19|20)\d{2}\b/.test(cardText) ||
                        /(фільм|movie|повнометражний|фильм|полнометражный)/i.test(cardText);
                    if (hasMovieTraits) {
                        label.addClass('movie-label-new');
                        label.text(Lampa.Lang.translate('interface_mod_new_label_movie'));
                        shouldAddLabel = true;
                    }
                }
                if (shouldAddLabel) {
                    $view.append(label);
                }
            }
        }

        function updateCardLabel(card) {
            if (!settings.show_movie_type) return;
            $(card).find('.content-label-new').remove();
            addLabelToCard(card);
        }

        function processAllCards() {
            if (!settings.show_movie_type) return;
            $('.card').each(function() {
                addLabelToCard(this);
            });
        }

        Lampa.Listener.follow('full', function(data) {
            if (data.type === 'complite' && data.data.movie) {
                var movie = data.data.movie;
                var posterContainer = $(data.object.activity.render()).find('.full-start__poster');
                if (posterContainer.length && movie) {
                    var is_tv = false;
                    if (movie.number_of_seasons > 0 || movie.seasons || movie.season_count > 0) {
                        is_tv = true;
                    } else if (movie.type === 'tv' || movie.card_type === 'tv') {
                        is_tv = true;
                    }
                    if (settings.show_movie_type) {
                        var existingLabel = posterContainer.find('.content-label-new');
                        if (existingLabel.length) {
                            existingLabel.remove();
                        }
                        var label = $('<div class="content-label-new"></div>');
                        if (is_tv) {
                            label.addClass('serial-label-new');
                            label.text(Lampa.Lang.translate('interface_mod_new_label_serial'));
                        } else {
                            label.addClass('movie-label-new');
                            label.text(Lampa.Lang.translate('interface_mod_new_label_movie'));
                        }
                        posterContainer.css('position', 'relative');
                        posterContainer.append(label);
                    }
                }
            }
        });

        var observer = new MutationObserver(function(mutations) {
            var needCheck = false;
            var cardsToUpdate = new Set();
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes && mutation.addedNodes.length) {
                    for (var i = 0; i < mutation.addedNodes.length; i++) {
                        var node = mutation.addedNodes[i];
                        if ($(node).hasClass('card')) {
                            cardsToUpdate.add(node);
                            needCheck = true;
                        } else if ($(node).find('.card').length) {
                            $(node).find('.card').each(function() {
                                cardsToUpdate.add(this);
                            });
                            needCheck = true;
                        }
                    }
                }
                if (mutation.type === 'attributes' &&
                    (mutation.attributeName === 'class' ||
                        mutation.attributeName === 'data-card' ||
                        mutation.attributeName === 'data-type')) {
                    var targetNode = mutation.target;
                    if ($(targetNode).hasClass('card')) {
                        cardsToUpdate.add(targetNode);
                        needCheck = true;
                    }
                }
            });
            if (needCheck) {
                setTimeout(function() {
                    cardsToUpdate.forEach(function(card) {
                        updateCardLabel(card);
                    });
                }, 100);
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'data-card', 'data-type']
        });
        processAllCards();
    }

    // Додавання налаштувань у меню Lampa
    function addSettings() {
        Lampa.SettingsApi.addComponent({
            component: 'interface_mod_new',
            name: Lampa.Lang.translate('interface_mod_new_plugin_name'),
            icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V7C20 7.55228 19.5523 8 19 8H5C4.44772 8 4 7.55228 4 7V5Z" fill="currentColor"/><path d="M4 11C4 10.4477 4.44772 10 5 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H5C4.44772 14 4 13.5523 4 13V11Z" fill="currentColor"/><path d="M4 17C4 16.4477 4.44772 16 5 16H19C19.5523 16 20 16.4477 20 17V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V17Z" fill="currentColor"/></svg>'
        });
        function moveModSettingsFolder() {
            var $folders = $('.settings-folder');
            var $interface = $folders.filter(function() {
                return $(this).data('component') === 'interface';
            });
            var $mod = $folders.filter(function() {
                return $(this).data('component') === 'interface_mod_new';
            });
            if ($interface.length && $mod.length) {
                if ($mod.prev()[0] !== $interface[0]) {
                    $mod.insertAfter($interface);
                }
            }
        }

        setTimeout(function() {
            moveModSettingsFolder();
            var $container = document.querySelector('.settings_component');
            if ($container) {
                var observer = new MutationObserver(function() {
                    moveModSettingsFolder();
                });
                observer.observe($container, { childList: true, subtree: true });
            }
        }, 500);

        Lampa.SettingsApi.addParam({
            component: 'interface_mod_new',
            param: { name: 'interface_mod_new_show_movie_type', type: 'toggle', default: true },
            field: {
                name: Lampa.Lang.translate('interface_mod_new_show_movie_type'),
                description: Lampa.Lang.translate('interface_mod_new_show_movie_type_desc')
            },
            onChange: function(val) {
                settings.show_movie_type = val;
                Lampa.Storage.set('interface_mod_new_show_movie_type', val);
                Lampa.Settings.update();
                changeMovieTypeLabels();
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'interface_mod_new',
            param: { name: 'interface_mod_new_info_panel', type: 'toggle', default: true },
            field: {
                name: Lampa.Lang.translate('interface_mod_new_info_panel'),
                description: Lampa.Lang.translate('interface_mod_new_info_panel_desc')
            },
            onChange: function(val) {
                settings.info_panel = val;
                Lampa.Storage.set('interface_mod_new_info_panel', val);
                Lampa.Settings.update();
                newInfoPanel();
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'interface_mod_new',
            param: { name: 'interface_mod_new_colored_ratings', type: 'toggle', default: true },
            field: {
                name: Lampa.Lang.translate('interface_mod_new_colored_ratings'),
                description: Lampa.Lang.translate('interface_mod_new_colored_ratings_desc')
            },
            onChange: function(val) {
                settings.colored_ratings = val;
                Lampa.Storage.set('interface_mod_new_colored_ratings', val);
                Lampa.Settings.update();
                if (val) {
                    updateVoteColors();
                    setupVoteColorsObserver();
                    setupVoteColorsForDetailPage();
                } else {
                    $('.full-start-new__rate, .full-start__rate, .card__vote, .card__imdb-rate, .card__kinopoisk-rate').css('color', '');
                }
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'interface_mod_new',
            param: {
                name: 'interface_mod_new_buttons_style_mode',
                type: 'select',
                values: {
                    'default': Lampa.Lang.translate('interface_mod_new_buttons_style_mode_default'),
                    'all': Lampa.Lang.translate('interface_mod_new_buttons_style_mode_all'),
                    'main2': 'Режим 2'
                },
                default: 'default'
            },
            field: {
                name: Lampa.Lang.translate('interface_mod_new_buttons_style_mode'),
                description: 'Стиль відображення кнопок у картці фільму'
            },
            onChange: function(val) {
                settings.buttons_style_mode = val;
                Lampa.Storage.set('interface_mod_new_buttons_style_mode', val);
                Lampa.Settings.update();
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'interface_mod_new',
            param: {
                name: 'interface_mod_new_theme_select',
                type: 'select',
                values: {
                    'default': Lampa.Lang.translate('interface_mod_new_theme_default'),
                    'minimalist': Lampa.Lang.translate('interface_mod_new_theme_minimalist'),
                    'glow_outline': Lampa.Lang.translate('interface_mod_new_theme_glow_outline'),
                    'menu_lines': Lampa.Lang.translate('interface_mod_new_theme_menu_lines'),
                    'dark_emerald': Lampa.Lang.translate('interface_mod_new_theme_dark_emerald'),
                    'neon': 'Neon',
                    'sunset': 'Sunset',
                    'emerald': 'Emerald V1',
                    'aurora': 'Aurora',
                    'bywolf_mod': 'ByWolf Mod'
                },
                default: 'default'
            },
            field: {
                name: Lampa.Lang.translate('interface_mod_new_theme_select'),
                description: Lampa.Lang.translate('interface_mod_new_theme_select_desc')
            },
            onChange: function(val) {
                settings.theme = val;
                Lampa.Storage.set('interface_mod_new_theme_select', val);
                Lampa.Settings.update();
                applyTheme(val);
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'interface_mod_new',
            param: { name: 'interface_mod_new_stylize_titles', type: 'toggle', default: false },
            field: {
                name: Lampa.Lang.translate('interface_mod_new_stylize_titles'),
                description: Lampa.Lang.translate('interface_mod_new_stylize_titles_desc')
            },
            onChange: function(val) {
                settings.stylize_titles = val;
                Lampa.Storage.set('interface_mod_new_stylize_titles', val);
                Lampa.Settings.update();
                if (val) {
                    stylizeCollectionTitles();
                } else {
                    var el = document.getElementById('stylized-titles-css');
                    if (el) el.remove();
                }
            }
        });

        Lampa.SettingsApi.addParam({
            component: 'interface_mod_new',
            param: { name: 'interface_mod_new_enhance_detailed_info', type: 'toggle', default: false },
            field: {
                name: Lampa.Lang.translate('interface_mod_new_enhance_detailed_info'),
                description: Lampa.Lang.translate('interface_mod_new_enhance_detailed_info_desc')
            },
            onChange: function(val) {
                settings.enhance_detailed_info = val;
                Lampa.Storage.set('interface_mod_new_enhance_detailed_info', val);
                Lampa.Settings.update();
                if (val) {
                    enhanceDetailedInfo();
                } else {
                    var el = document.getElementById('enhanced-info-css');
                    if (el) el.remove();
                }
            }
        });
    }

    // Функція відмінювання слів
    function plural(number, one, two, five) {
        var n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) return five;
        n %= 10;
        if (n === 1) return one;
        if (n >= 2 && n <= 4) return two;
        return five;
    }

    function calculateAverageEpisodeDuration(movie) {
        if (!movie || typeof movie !== 'object') return 0;
        var totalDuration = 0, episodeCount = 0;
        if (movie.episode_run_time && Array.isArray(movie.episode_run_time) && movie.episode_run_time.length > 0) {
            var filtered = movie.episode_run_time.filter(function(duration) {
                return duration > 0 && duration <= 200;
            });
            if (filtered.length > 0) {
                filtered.forEach(function(duration) {
                    totalDuration += duration;
                    episodeCount++;
                });
            }
        } else if (movie.seasons && Array.isArray(movie.seasons)) {
            movie.seasons.forEach(function(season) {
                if (season.episodes && Array.isArray(season.episodes)) {
                    season.episodes.forEach(function(episode) {
                        if (episode.runtime && episode.runtime > 0 && episode.runtime <= 200) {
                            totalDuration += episode.runtime;
                            episodeCount++;
                        }
                    });
                }
            });
        }
        if (episodeCount > 0) return Math.round(totalDuration / episodeCount);
        if (movie.last_episode_to_air && movie.last_episode_to_air.runtime && movie.last_episode_to_air.runtime > 0 && movie.last_episode_to_air.runtime <= 200) {
            return movie.last_episode_to_air.runtime;
        }
        return 0;
    }

    function formatDurationMinutes(minutes) {
        if (!minutes || minutes <= 0) return '';
        var hours = Math.floor(minutes / 60);
        var mins = minutes % 60;
        var result = '';
        if (hours > 0) {
            result += hours + ' ' + plural(hours, 'година', 'години', 'годин');
            if (mins > 0) result += ' ' + mins + ' ' + plural(mins, 'хвилина', 'хвилини', 'хвилин');
        } else {
            result += mins + ' ' + plural(mins, 'хвилина', 'хвилини', 'хвилин');
        }
        return result;
    }

    function newInfoPanel() {
        if (!settings.info_panel) return;
        var colors = {
            seasons: { bg: 'rgba(52, 152, 219, 0.8)', text: 'white' },
            episodes: { bg: 'rgba(46, 204, 113, 0.8)', text: 'white' },
            duration: { bg: 'rgba(52, 152, 219, 0.8)', text: 'white' },
            next: { bg: 'rgba(230, 126, 34, 0.8)', text: 'white' },
            genres: {
                'Бойовик': { bg: 'rgba(231, 76, 60, 0.8)', text: 'white' },
                'Боевик': { bg: 'rgba(231, 76, 60, 0.8)', text: 'white' },
                'Пригоди': { bg: 'rgba(39, 174, 96, 0.8)', text: 'white' },
                'Приключения': { bg: 'rgba(39, 174, 96, 0.8)', text: 'white' },
                'Мультфільм': { bg: 'rgba(155, 89, 182, 0.8)', text: 'white' },
                'Мультфильм': { bg: 'rgba(155, 89, 182, 0.8)', text: 'white' },
                'Комедія': { bg: 'rgba(241, 196, 15, 0.8)', text: 'black' },
                'Комедия': { bg: 'rgba(241, 196, 15, 0.8)', text: 'black' },
                'Кримінал': { bg: 'rgba(192, 57, 43, 0.8)', text: 'white' },
                'Криминал': { bg: 'rgba(192, 57, 43, 0.8)', text: 'white' },
                'Документальний': { bg: 'rgba(22, 160, 133, 0.8)', text: 'white' },
                'Документальный': { bg: 'rgba(22, 160, 133, 0.8)', text: 'white' },
                'Драма': { bg: 'rgba(142, 68, 173, 0.8)', text: 'white' },
                'Сімейний': { bg: 'rgba(46, 204, 113, 0.8)', text: 'white' },
                'Семейный': { bg: 'rgba(46, 204, 113, 0.8)', text: 'white' },
                'Фентезі': { bg: 'rgba(155, 89, 182, 0.8)', text: 'white' },
                'Фэнтези': { bg: 'rgba(155, 89, 182, 0.8)', text: 'white' },
                'Історія': { bg: 'rgba(211, 84, 0, 0.8)', text: 'white' },
                'История': { bg: 'rgba(211, 84, 0, 0.8)', text: 'white' },
                'Жахи': { bg: 'rgba(192, 57, 43, 0.8)', text: 'white' },
                'Ужасы': { bg: 'rgba(192, 57, 43, 0.8)', text: 'white' },
                'Музика': { bg: 'rgba(52, 152, 219, 0.8)', text: 'white' },
                'Музыка': { bg: 'rgba(52, 152, 219, 0.8)', text: 'white' },
                'Детектив': { bg: 'rgba(52, 73, 94, 0.8)', text: 'white' },
                'Мелодрама': { bg: 'rgba(233, 30, 99, 0.8)', text: 'white' },
                'Фантастика': { bg: 'rgba(41, 128, 185, 0.8)', text: 'white' },
                'Трилер': { bg: 'rgba(192, 57, 43, 0.8)', text: 'white' },
                'Триллер': { bg: 'rgba(192, 57, 43, 0.8)', text: 'white' },
                'Воєнний': { bg: 'rgba(127, 140, 141, 0.8)', text: 'white' },
                'Военный': { bg: 'rgba(127, 140, 141, 0.8)', text: 'white' },
                'Вестерн': { bg: 'rgba(211, 84, 0, 0.8)', text: 'white' },
                'Бойовик і Пригоди': { bg: 'rgba(231, 76, 60, 0.8)', text: 'white' },
                'Боевик и Приключения': { bg: 'rgba(231, 76, 60, 0.8)', text: 'white' },
                'Дитячий': { bg: 'rgba(46, 204, 113, 0.8)', text: 'white' },
                'Детский': { bg: 'rgba(46, 204, 113, 0.8)', text: 'white' },
                'Новини': { bg: 'rgba(52, 152, 219, 0.8)', text: 'white' },
                'Новости': { bg: 'rgba(52, 152, 219, 0.8)', text: 'white' },
                'Реаліті-шоу': { bg: 'rgba(230, 126, 34, 0.8)', text: 'white' },
                'Реалити-шоу': { bg: 'rgba(230, 126, 34, 0.8)', text: 'white' },
                'НФ і Фентезі': { bg: 'rgba(41, 128, 185, 0.8)', text: 'white' },
                'НФ и Фэнтези': { bg: 'rgba(41, 128, 185, 0.8)', text: 'white' },
                'Мильна опера': { bg: 'rgba(233, 30, 99, 0.8)', text: 'white' },
                'Мыльная опера': { bg: 'rgba(233, 30, 99, 0.8)', text: 'white' },
                'Ток-шоу': { bg: 'rgba(241, 196, 15, 0.8)', text: 'black' },
                'Війна і Політика': { bg: 'rgba(127, 140, 141, 0.8)', text: 'white' },
                'Война и Политика': { bg: 'rgba(127, 140, 141, 0.8)', text: 'white' }
            }
        };
        Lampa.Listener.follow('full', function(data) {
            if (data.type === 'complite' && settings.info_panel) {
                setTimeout(function() {
                    var details = $('.full-start-new__details');
                    if (!details.length) return;
                    var movie = data.data.movie;
                    var isTvShow = movie && (movie.number_of_seasons > 0 || (movie.seasons && movie.seasons.length > 0) || movie.type === 'tv' || movie.type === 'serial');
                    var originalDetails = details.html();
                    details.empty();
                    var newContainer = $('<div>').css({ 'display': 'flex', 'flex-direction': 'column', 'width': '100%', 'gap': '0.6em', 'margin': '0.6em 0 0.6em 0' });
                    var firstRow = $('<div>').css({ 'display': 'flex', 'flex-wrap': 'wrap', 'gap': '0.4em', 'align-items': 'center', 'margin': '0 0 0.2em 0' });
                    var secondRow = $('<div>').css({ 'display': 'flex', 'flex-wrap': 'wrap', 'gap': '0.4em', 'align-items': 'center', 'margin': '0 0 0.2em 0' });
                    var thirdRow = $('<div>').css({ 'display': 'flex', 'flex-wrap': 'wrap', 'gap': '0.4em', 'align-items': 'center', 'margin': '0 0 0.2em 0' });
                    var durationElement = null, seasonElements = [], episodeElements = [], nextEpisodeElements = [], genreElements = [];
                    var tempContainer = $('<div>').html(originalDetails);
                    tempContainer.find('span').filter(function() {
                        var t = $(this).text();
                        return t.indexOf('Наступна:') !== -1 || t.indexOf('Залишилось днів:') !== -1;
                    }).remove();
                    tempContainer.find('span').each(function() {
                        var $span = $(this);
                        var text = $span.text();
                        if ($span.hasClass('full-start-new__split')) return;
                        var baseStyle = { 'border-radius': '0.3em', 'border': '0px', 'font-size': '1.3em', 'padding': '0.2em 0.6em', 'display': 'inline-block', 'white-space': 'nowrap', 'line-height': '1.2em', 'margin-right': '0.4em', 'margin-bottom': '0.2em' };
                        var matchSeasons = text.match(/Сезон(?:и)?:?\s*(\d+)/i);
                        if (matchSeasons) {
                            var n = parseInt(matchSeasons[1], 10);
                            $span.text(n + ' ' + plural(n, 'Сезон', 'Сезони', 'Сезонів'));
                            $span.css($.extend({}, baseStyle, { 'background-color': colors.seasons.bg, 'color': colors.seasons.text }));
                            seasonElements.push($span.clone());
                            return;
                        }
                        var matchEpisodes = text.match(/Сері[яї]?:?\s*(\d+)/i);
                        if (matchEpisodes) {
                            var n = parseInt(matchEpisodes[1], 10);
                            $span.text(n + ' ' + plural(n, 'Серія', 'Серії', 'Серій'));
                            $span.css($.extend({}, baseStyle, { 'background-color': colors.episodes.bg, 'color': colors.episodes.text }));
                            episodeElements.push($span.clone());
                            return;
                        }
                        var genres = text.split(' | ');
                        if (genres.length > 1) {
                            var $genresContainer = $('<div>').css({ 'display': 'flex', 'flex-wrap': 'wrap', 'align-items': 'center' });
                            for (var i = 0; i < genres.length; i++) {
                                var genre = genres[i].trim();
                                var color = colors.genres[genre] || { bg: 'rgba(255, 255, 255, 0.1)', text: 'white' };
                                var $badge = $('<span>').text(genre).css($.extend({}, baseStyle, { 'background-color': color.bg, 'color': color.text, 'margin': '0.2em' }));
                                $genresContainer.append($badge);
                            }
                            genreElements.push($genresContainer);
                        } else {
                            var genre = text.trim();
                            var color = colors.genres[genre] || { bg: 'rgba(255, 255, 255, 0.1)', text: 'white' };
                            $span.css($.extend({}, baseStyle, { 'background-color': color.bg, 'color': color.text, 'margin': '0.2em' }));
                            genreElements.push($span.clone());
                        }
                    });
                    if (isTvShow && movie && movie.seasons && Array.isArray(movie.seasons)) {
                        var totalEpisodes = 0;
                        var airedEpisodes = 0;
                        var currentDate = new Date();
                        var hasEpisodes = false;
                        movie.seasons.forEach(function(season) {
                            if (season.season_number === 0) return;
                            if (season.episode_count) totalEpisodes += season.episode_count;
                            if (season.episodes && Array.isArray(season.episodes) && season.episodes.length) {
                                hasEpisodes = true;
                                season.episodes.forEach(function(episode) {
                                    if (episode.air_date) {
                                        var epAirDate = new Date(episode.air_date);
                                        if (epAirDate <= currentDate) airedEpisodes++;
                                    }
                                });
                            } else if (season.air_date) {
                                var airDate = new Date(season.air_date);
                                if (airDate <= currentDate && season.episode_count) airedEpisodes += season.episode_count;
                            }
                        });
                        if (!hasEpisodes && movie.next_episode_to_air && movie.next_episode_to_air.season_number && movie.next_episode_to_air.episode_number) {
                            var nextSeason = movie.next_episode_to_air.season_number;
                            var nextEpisode = movie.next_episode_to_air.episode_number;
                            var remainingEpisodes = 0;
                            movie.seasons.forEach(function(season) {
                                if (season.season_number === nextSeason) {
                                    remainingEpisodes = (season.episode_count || 0) - nextEpisode + 1;
                                } else if (season.season_number > nextSeason) {
                                    remainingEpisodes += season.episode_count || 0;
                                }
                            });
                            if (remainingEpisodes > 0 && totalEpisodes > 0) {
                                var calculatedAired = totalEpisodes - remainingEpisodes;
                                if (calculatedAired >= 0 && calculatedAired <= totalEpisodes) {
                                    airedEpisodes = calculatedAired;
                                }
                            }
                        }
                        var episodesText = '';
                        if (totalEpisodes > 0 && airedEpisodes > 0 && airedEpisodes < totalEpisodes) {
                            episodesText = airedEpisodes + ' ' + plural(airedEpisodes, 'Серія', 'Серії', 'Серій') + ' з ' + totalEpisodes;
                        } else if (totalEpisodes > 0) {
                            episodesText = totalEpisodes + ' ' + plural(totalEpisodes, 'Серія', 'Серії', 'Серій');
                        }
                        firstRow.empty();
                        seasonElements.forEach(function(el) { firstRow.append(el); });
                        if (episodesText) {
                            var baseStyle = { 'border-radius': '0.3em', 'border': '0px', 'font-size': '1.3em', 'padding': '0.2em 0.6em', 'display': 'inline-block', 'white-space': 'nowrap', 'line-height': '1.2em', 'margin-right': '0.4em', 'margin-bottom': '0.2em' };
                            var $badge = $('<span>').text(episodesText).css($.extend({}, baseStyle, { 'background-color': colors.episodes.bg, 'color': colors.episodes.text }));
                            firstRow.append($badge);
                        }
                        secondRow.empty();
                        if (movie.next_episode_to_air && movie.next_episode_to_air.air_date && airedEpisodes < totalEpisodes) {
                            var nextDate = new Date(movie.next_episode_to_air.air_date);
                            var today = new Date();
                            nextDate.setHours(0,0,0,0);
                            today.setHours(0,0,0,0);
                            var diffDays = Math.floor((nextDate.getTime() - today.getTime()) / (1000*60*60*24));
                            var nextText = '';
                            if (diffDays === 0) nextText = 'Наступна серія вже сьогодні';
                            else if (diffDays === 1) nextText = 'Наступна серія вже завтра';
                            else if (diffDays > 1) nextText = 'Наступна серія через ' + diffDays + ' ' + plural(diffDays, 'день', 'дні', 'днів');
                            if (nextText) {
                                var nextStyle = { 'border-radius': '0.3em', 'border': '0px', 'font-size': '1.3em', 'padding': '0.2em 0.6em', 'display': 'inline-block', 'white-space': 'nowrap', 'line-height': '1.2em', 'background-color': colors.next.bg, 'color': colors.next.text, 'margin-right': '0.4em', 'margin-bottom': '0.2em' };
                                var $nextBadge = $('<span>').text(nextText).css(nextStyle);
                                secondRow.append($nextBadge);
                            }
                        }
                        thirdRow.empty();
                        var avgDuration = calculateAverageEpisodeDuration(movie);
                        if (avgDuration > 0) {
                            var durationText = 'Тривалість серії ≈ ' + formatDurationMinutes(avgDuration);
                            var baseStyle2 = { 'border-radius': '0.3em', 'border': '0px', 'font-size': '1.3em', 'padding': '0.2em 0.6em', 'display': 'inline-block', 'white-space': 'nowrap', 'line-height': '1.2em', 'margin-right': '0.4em', 'margin-bottom': '0.2em' };
                            var $avgDurationBadge = $('<span>').text(durationText).css($.extend({}, baseStyle2, { 'background-color': colors.duration.bg, 'color': colors.duration.text }));
                            thirdRow.append($avgDurationBadge);
                        }
                        var genresRow = $('<div>').css({'display':'flex','flex-wrap':'wrap','align-items':'center'});
                        genreElements.forEach(function(el) { genresRow.append(el); });
                        newContainer.empty();
                        newContainer.append(firstRow);
                        if (secondRow.children().length) newContainer.append(secondRow);
                        if (thirdRow.children().length) newContainer.append(thirdRow);
                        if (genresRow.children().length) newContainer.append(genresRow);
                        details.append(newContainer);
                        return;
                    }
                    if (!isTvShow && movie && movie.runtime > 0) {
                        tempContainer.find('span').filter(function() {
                            var t = $(this).text().trim();
                            return /^\d{2}:\d{2}$/.test(t) || t.indexOf('Тривалість серії ≈') === 0;
                        }).remove();
                        genreElements = genreElements.filter(function(el) {
                            var t = $(el).text().trim();
                            return !/^\d{2}:\d{2}$/.test(t);
                        });
                        var mins = movie.runtime;
                        var hours = Math.floor(mins / 60);
                        var min = mins % 60;
                        var text = 'Тривалість фільму: ';
                        if (hours > 0) text += hours + ' ' + plural(hours, 'година', 'години', 'годин');
                        if (min > 0) text += (hours > 0 ? ' ' : '') + min + ' хв.';
                        var $badge2 = $('<span>').text(text).css({
                            'border-radius': '0.3em', 'border': '0px', 'font-size': '1.3em', 'padding': '0.2em 0.6em',
                            'display': 'inline-block', 'white-space': 'nowrap', 'line-height': '1.2em',
                            'background-color': colors.duration.bg, 'color': colors.duration.text,
                            'margin': '0.2em', 'margin-right': '0.4em', 'margin-bottom': '0.2em'
                        });
                        secondRow.empty().append($badge2);
                    } else if (isTvShow) {
                        var avgDuration2 = calculateAverageEpisodeDuration(movie);
                        if (avgDuration2 > 0) {
                            var durationText2 = 'Тривалість серії ≈ ' + formatDurationMinutes(avgDuration2);
                            var baseStyle3 = { 'border-radius': '0.3em', 'border': '0px', 'font-size': '1.3em', 'padding': '0.2em 0.6em', 'display': 'inline-block', 'white-space': 'nowrap', 'line-height': '1.2em', 'margin-right': '0.4em', 'margin-bottom': '0.2em' };
                            var $avgDurationBadge2 = $('<span>').text(durationText2).css($.extend({}, baseStyle3, { 'background-color': colors.duration.bg, 'color': colors.duration.text }));
                            secondRow.prepend($avgDurationBadge2);
                        }
                    }
                    if (durationElement) firstRow.append(durationElement);
                    seasonElements.forEach(function(el) { firstRow.append(el); });
                    episodeElements.forEach(function(el) { firstRow.append(el); });
                    nextEpisodeElements.forEach(function(el) { firstRow.append(el); });
                    genreElements.forEach(function(el) { thirdRow.append(el); });
                    newContainer.append(firstRow).append(secondRow).append(thirdRow);
                    details.append(newContainer);
                }, 100);
            }
        });
    }

    // === КОЛЬОРОВІ РЕЙТИНГИ, СТАТУСИ ТА ВІКОВІ ОБМЕЖЕННЯ ===
    function updateVoteColors() {
        if (!settings.colored_ratings) return;
        function applyColorByRating(element) {
            var voteText = $(element).text().trim();
            var match = voteText.match(/(\d+(\.\d+)?)/);
            if (!match) return;
            var vote = parseFloat(match[0]);
            if (vote >= 0 && vote <= 3) {
                $(element).css('color', 'red');
            } else if (vote > 3 && vote < 6) {
                $(element).css('color', 'orange');
            } else if (vote >= 6 && vote < 8) {
                $(element).css('color', 'cornflowerblue');
            } else if (vote >= 8 && vote <= 10) {
                $(element).css('color', 'lawngreen');
            }
        }
        $(".card__vote").each(function() { applyColorByRating(this); });
        $(".full-start__rate, .full-start-new__rate").each(function() { applyColorByRating(this); });
        $(".info__rate, .card__imdb-rate, .card__kinopoisk-rate").each(function() { applyColorByRating(this); });
    }

    function setupVoteColorsObserver() {
        if (!settings.colored_ratings) return;
        setTimeout(updateVoteColors, 500);
        var observer = new MutationObserver(function() { setTimeout(updateVoteColors, 100); });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    function setupVoteColorsForDetailPage() {
        if (!settings.colored_ratings) return;
        Lampa.Listener.follow('full', function (data) {
            if (data.type === 'complite') {
                setTimeout(updateVoteColors, 100);
            }
        });
    }

    function colorizeSeriesStatus() {
        function applyStatusColor(statusElement) {
            var statusText = $(statusElement).text().trim();
            var statusColors = {
                'completed': { bg: 'rgba(46, 204, 113, 0.8)', text: 'white' },
                'canceled': { bg: 'rgba(231, 76, 60, 0.8)', text: 'white' },
                'ongoing': { bg: 'rgba(243, 156, 18, 0.8)', text: 'black' },
                'production': { bg: 'rgba(52, 152, 219, 0.8)', text: 'white' },
                'planned': { bg: 'rgba(155, 89, 182, 0.8)', text: 'white' },
                'pilot': { bg: 'rgba(230, 126, 34, 0.8)', text: 'white' },
                'released': { bg: 'rgba(26, 188, 156, 0.8)', text: 'white' },
                'rumored': { bg: 'rgba(149, 165, 166, 0.8)', text: 'white' },
                'post': { bg: 'rgba(0, 188, 212, 0.8)', text: 'white' }
            };
            var bgColor = '', textColor = '';
            if (statusText.includes('Заверш') || statusText.includes('Ended')) { bgColor = statusColors.completed.bg; textColor = statusColors.completed.text; }
            else if (statusText.includes('Відмін') || statusText.includes('Отмен') || statusText.includes('Canceled')) { bgColor = statusColors.canceled.bg; textColor = statusColors.canceled.text; }
            else if (statusText.includes('Онгоїнг') || statusText.includes('Онгоинг') || statusText.includes('Виходить') || statusText.includes('Выход') || statusText.includes('В процесі') || statusText.includes('В процессе') || statusText.includes('Return')) { bgColor = statusColors.ongoing.bg; textColor = statusColors.ongoing.text; }
            else if (statusText.includes('виробництві') || statusText.includes('производстве') || statusText.includes('Production')) { bgColor = statusColors.production.bg; textColor = statusColors.production.text; }
            else if (statusText.includes('Заплановано') || statusText.includes('Запланировано') || statusText.includes('Planned')) { bgColor = statusColors.planned.bg; textColor = statusColors.planned.text; }
            else if (statusText.includes('Пілотний') || statusText.includes('Пилотный') || statusText.includes('Pilot')) { bgColor = statusColors.pilot.bg; textColor = statusColors.pilot.text; }
            else if (statusText.includes('Випущений') || statusText.includes('Выпущенный') || statusText.includes('Released')) { bgColor = statusColors.released.bg; textColor = statusColors.released.text; }
            else if (statusText.includes('чутках') || statusText.includes('слухам') || statusText.includes('Rumored')) { bgColor = statusColors.rumored.bg; textColor = statusColors.rumored.text; }
            else if (statusText.includes('Незабаром') || statusText.includes('Скоро') || statusText.includes('Post')) { bgColor = statusColors.post.bg; textColor = statusColors.post.text; }
            if (bgColor) {
                $(statusElement).css({ 'background-color': bgColor, 'color': textColor, 'border-radius': '0.3em', 'border': '0px', 'font-size': '1.3em', 'display': 'inline-block' });
            }
        }
        $('.full-start__status').each(function() { applyStatusColor(this); });
        var statusObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes && mutation.addedNodes.length) {
                    for (var i = 0; i < mutation.addedNodes.length; i++) {
                        var node = mutation.addedNodes[i];
                        $(node).find('.full-start__status').each(function() { applyStatusColor(this); });
                        if ($(node).hasClass('full-start__status')) { applyStatusColor(node); }
                    }
                }
            });
        });
        statusObserver.observe(document.body, { childList: true, subtree: true });
        Lampa.Listener.follow('full', function(data) {
            if (data.type === 'complite' && data.data.movie) {
                setTimeout(function() {
                    $(data.object.activity.render()).find('.full-start__status').each(function() { applyStatusColor(this); });
                }, 100);
            }
        });
    }

    function colorizeAgeRating() {
        function applyAgeRatingColor(ratingElement) {
            var ratingText = $(ratingElement).text().trim();
            var ageRatings = {
                kids: ['G', 'TV-Y', 'TV-G', '0+', '3+', '0', '3'],
                children: ['PG', 'TV-PG', 'TV-Y7', '6+', '7+', '6', '7'],
                teens: ['PG-13', 'TV-14', '12+', '13+', '14+', '12', '13', '14'],
                almostAdult: ['R', 'TV-MA', '16+', '17+', '16', '17'],
                adult: ['NC-17', '18+', '18', 'X']
            };
            var colors = {
                kids: { bg: '#2ecc71', text: 'white' },
                children: { bg: '#3498db', text: 'white' },
                teens: { bg: '#f1c40f', text: 'black' },
                almostAdult: { bg: '#e67e22', text: 'white' },
                adult: { bg: '#e74c3c', text: 'white' }
            };
            var group = null;
            for (var groupKey in ageRatings) {
                if (ageRatings[groupKey].includes(ratingText)) { group = groupKey; break; }
                for (var i = 0; i < ageRatings[groupKey].length; i++) {
                    if (ratingText.includes(ageRatings[groupKey][i])) { group = groupKey; break; }
                }
                if (group) break;
            }
            if (group) {
                $(ratingElement).css({ 'background-color': colors[group].bg, 'color': colors[group].text, 'border-radius': '0.3em', 'font-size': '1.3em', 'border': '0px' });
            }
        }
        $('.full-start__pg').each(function() { applyAgeRatingColor(this); });
        var ratingObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes && mutation.addedNodes.length) {
                    for (var i = 0; i < mutation.addedNodes.length; i++) {
                        var node = mutation.addedNodes[i];
                        $(node).find('.full-start__pg').each(function() { applyAgeRatingColor(this); });
                        if ($(node).hasClass('full-start__pg')) { applyAgeRatingColor(node); }
                    }
                }
            });
        });
        ratingObserver.observe(document.body, { childList: true, subtree: true });
        Lampa.Listener.follow('full', function(data) {
            if (data.type === 'complite' && data.data.movie) {
                setTimeout(function() {
                    $(data.object.activity.render()).find('.full-start__pg').each(function() { applyAgeRatingColor(this); });
                }, 100);
            }
        });
    }

    function stringToColor(str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var color = '#';
        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 0xFF;
            color += ('00' + value.toString(16)).substr(-2);
        }
        return color;
    }

    function extractProviderIcon(btn) {
        var iconHtml = '';
        if (btn.find('svg').length) {
            var icon = btn.find('svg').clone();
            var originalViewBox = icon.attr('viewBox');
            icon.removeAttr('width height style x y class version xml:space');
            if (!originalViewBox) { icon.attr('viewBox', '0 0 512 512'); }
            icon.attr({ width: 32, height: 32, style: 'width:32px;height:32px;display:block;' });
            if (icon.find('path').length === 0 && icon.find('g').length === 0) {
                iconHtml = '<div style="width:32px;height:32px;display:flex;align-items:center;justify-content:center;">' + btn.find('svg').parent().html() + '</div>';
            } else {
                iconHtml = icon[0].outerHTML;
            }
        } else if (btn.find('img').length) {
            iconHtml = '<img src="' + btn.find('img').attr('src') + '" style="width:32px;height:32px;display:block;object-fit:contain;" />';
        } else if (btn.find('.ico').length) {
            var icoElement = btn.find('.ico').clone();
            if (icoElement.find('svg').length) {
                iconHtml = '<div style="width:32px;height:32px;display:flex;align-items:center;justify-content:center;">' + icoElement.html() + '</div>';
            } else {
                icoElement.attr('style', 'width:32px;height:32px;display:block;');
                iconHtml = icoElement[0].outerHTML;
            }
        } else if (btn.find('.button__ico').length) {
            var buttonIco = btn.find('.button__ico').clone();
            if (buttonIco.find('svg').length) {
                iconHtml = '<div style="width:32px;height:32px;display:flex;align-items:center;justify-content:center;">' + buttonIco.html() + '</div>';
            } else {
                buttonIco.attr('style', 'width:32px;height:32px;display:block;');
                iconHtml = buttonIco[0].outerHTML;
            }
        } else {
            var elemWithBg = btn.find('[style*="background-image"]');
            if (elemWithBg.length) {
                var bgStyle = elemWithBg.css('background-image');
                if (bgStyle && bgStyle.indexOf('url') !== -1) {
                    iconHtml = '<div style="width:32px;height:32px;display:block;background-image:' + bgStyle + ';background-size:contain;background-position:center;background-repeat:no-repeat;"></div>';
                }
            } else {
                var possibleIcons = btn.find('.icon, .logo, [class*="icon"], [class*="logo"]').first();
                if (possibleIcons.length) {
                    if (possibleIcons.find('svg').length) {
                        iconHtml = '<div style="width:32px;height:32px;display:flex;align-items:center;justify-content:center;">' + possibleIcons.html() + '</div>';
                    } else {
                        var possibleIcon = possibleIcons.clone();
                        possibleIcon.attr('style', 'width:32px;height:32px;display:block;');
                        iconHtml = possibleIcon[0].outerHTML;
                    }
                } else {
                    var dataIcon = btn.attr('data-icon') || btn.attr('data-logo');
                    if (dataIcon) {
                        if (dataIcon.indexOf('<svg') === 0 || dataIcon.indexOf('<img') === 0) {
                            iconHtml = dataIcon;
                        } else if (dataIcon.indexOf('http') === 0 || dataIcon.indexOf('/') === 0) {
                            iconHtml = '<img src="' + dataIcon + '" style="width:32px;height:32px;display:block;object-fit:contain;" />';
                        }
                    } else {
                        var providerName = btn.text().trim();
                        if (providerName) {
                            var firstLetter = providerName.charAt(0).toUpperCase();
                            var backgroundColor = stringToColor(providerName);
                            iconHtml = '<div style="width:32px;height:32px;display:flex;align-items:center;justify-content:center;background-color:' + backgroundColor + ';color:white;border-radius:50%;font-weight:bold;font-size:18px;">' + firstLetter + '</div>';
                        }
                    }
                }
            }
        }
        return iconHtml;
    }

    function createMoreButtonMenu(otherButtons) {
        return function() {
            var items = [];
            otherButtons.forEach(function(btn) {
                items.push({
                    title: btn.text().trim(),
                    icon: extractProviderIcon(btn),
                    subtitle: btn.attr('data-subtitle') || btn.data('subtitle') || btn.attr('title') || '',
                    btn: btn
                });
            });
            Lampa.Select.show({
                title: 'Додаткові параметри',
                items: items,
                onSelect: function(selected) {
                    if (selected && selected.btn) selected.btn.trigger('hover:enter');
                },
                onBack: function() {}
            });
            setTimeout(function() {
                $('.selectbox-item').each(function(i) {
                    if (items[i] && items[i].icon) {
                        var iconHtml = '<div class="menu__ico plugin-menu-ico" style="display:flex;align-items:center;justify-content:center;width:36px;height:36px;margin-right:0.7em;flex-shrink:0;padding:2px;position:absolute;left:10px;top:50%;transform:translateY(-50%);overflow:hidden;">' + items[i].icon + '</div>';
                        $(this).css({ 'position': 'relative', 'padding-left': '56px' }).prepend(iconHtml);
                        $(this).find('.menu__ico svg').css({ 'width': '100%', 'height': '100%', 'max-width': '32px', 'max-height': '32px' });
                    }
                });
            }, 50);
        };
    }

    // === ВІДОБРАЖЕННЯ ВСІХ КНОПОК ===
    function showAllButtons() {
        if (!document.getElementById('interface_mod_new_buttons_style')) {
            var buttonStyle = document.createElement('style');
            buttonStyle.id = 'interface_mod_new_buttons_style';
            buttonStyle.innerHTML = `
                .full-start-new__buttons, .full-start__buttons {
                    display: flex !important;
                    flex-wrap: wrap !important;
                    gap: 0.7em !important;
                }
                .custom-online-btn { background-color: #2f2f2fd1; box-shadow: 0 0 13px #00b2ff; margin: 0.6em; margin-right: 1.1em; }
                .custom-torrent-btn { background-color: #2f2f2fd1; box-shadow: 0 0 13px #00ff40; }
                .main2-more-btn { background-color: #2f2f2fd1; margin-left: 1.4em; font-weight: bold; box-shadow: 0 0 13px #e67e22; }
                @media (max-width: 600px) {
                    .custom-online-btn { background-color: #2f2f2fd1; box-shadow: 0 0 8px #00b2ff; margin: 0.8em; }
                    .custom-torrent-btn { background-color: #2f2f2fd1; box-shadow: 0 0 8px #00ff40; }
                    .main2-more-btn { background-color: #2f2f2fd1; margin-left: 1.4em; font-weight: bold; box-shadow: 0 0 8px #e67e22; }
                    .full-start__button.focus, .custom-online-btn.focus, .custom-torrent-btn.focus, .main2-more-btn.focus {
                        background: none; background-color: #2f2f2fd1; color: #fff; filter: none;
                    }
                }
            `;
            document.head.appendChild(buttonStyle);
        }

        Lampa.Listener.follow('full', function(e) {
            if (e.type === 'complite' && e.object && e.object.activity) {
                if (settings.buttons_style_mode === 'all' || settings.buttons_style_mode === 'main2') {
                    setTimeout(function() {
                        var fullContainer = e.object.activity.render();
                        var targetContainer = fullContainer.find('.full-start-new__buttons');
                        if (!targetContainer.length) targetContainer = fullContainer.find('.full-start__buttons');
                        if (!targetContainer.length) targetContainer = fullContainer.find('.buttons-container');
                        if (!targetContainer.length) return;

                        targetContainer.css({ display: 'flex', flexWrap: 'wrap', gap: '0.7em' });
                        var allButtons = [];
                        ['.buttons--container .full-start__button', '.full-start-new__buttons .full-start__button',
                         '.full-start__buttons .full-start__button', '.buttons-container .button',
                         '.full-start-new__buttons .button', '.full-start__buttons .button'].forEach(function(selector) {
                            fullContainer.find(selector).each(function() { allButtons.push(this); });
                        });
                        if (allButtons.length === 0) return;

                        if (settings.buttons_style_mode === 'main2') {
                            var allOnlineButtons = [];
                            var seenOnlineTexts = {};
                            $(allButtons).each(function() {
                                var btn = $(this);
                                if (Array.prototype.slice.call(btn[0].classList).some(function(cls){ return cls.indexOf('view--online') === 0; })) {
                                    var key = btn.text().trim() + (btn.attr('data-subtitle') || '');
                                    if (!seenOnlineTexts[key]) { allOnlineButtons.push(btn); seenOnlineTexts[key] = true; }
                                }
                            });
                            allButtons.forEach(function(btn) { $(btn).hide(); });
                            var origTorrent = targetContainer.find('.full-start__button.view--torrent');
                            origTorrent.hide();
                            targetContainer.find('.custom-online-btn, .custom-torrent-btn, .main2-more-btn, .main2-menu').remove();

                            var onlineBtn = $('<div class="full-start__button selector custom-online-btn main2-big-btn" tabindex="0"></div>')
                                .text('Онлайн')
                                .attr('data-subtitle', 'Lampac')
                                .on('hover:focus', function(){ $(this).addClass('focus'); })
                                .on('hover:blur', function(){ $(this).removeClass('focus'); })
                                .on('hover:enter', function() {
                                    if (allOnlineButtons.length === 0) { Lampa.Noty.show('Немає онлайн-провайдера'); return; }
                                    if (allOnlineButtons.length === 1) { allOnlineButtons[0].trigger('hover:enter'); return; }
                                    var items = [];
                                    allOnlineButtons.forEach(function(btn, idx) {
                                        items.push({ title: btn.text().trim(), icon: extractProviderIcon(btn), subtitle: btn.attr('data-subtitle') || '', idx: idx });
                                    });
                                    Lampa.Select.show({
                                        title: 'Оберіть онлайн-провайдера',
                                        items: items,
                                        onSelect: function(selected) {
                                            if (selected && typeof selected.idx !== 'undefined') allOnlineButtons[selected.idx].trigger('hover:enter');
                                        },
                                        onBack: function() {}
                                    });
                                });

                            var torrentBtn = $('<div class="full-start__button selector custom-torrent-btn main2-big-btn" tabindex="0"></div>')
                                .text('Торент')
                                .attr('data-subtitle', 'Торент')
                                .on('hover:focus', function(){ $(this).addClass('focus'); })
                                .on('hover:blur', function(){ $(this).removeClass('focus'); })
                                .on('hover:enter', function() {
                                    if (origTorrent.length) origTorrent.first().trigger('hover:enter');
                                    else Lampa.Noty.show('Немає торрент-провайдера');
                                });

                            var onlineButtonTexts = {};
                            allOnlineButtons.forEach(function(btn) {
                                var text = $(btn).text().trim();
                                if (text) onlineButtonTexts[text] = true;
                            });
                            var hideButtonTexts = { 'Дивитися': true, 'Смотреть': true, 'Підписатися': true, 'Подписаться': true };
                            var otherButtons = [];
                            $(allButtons).each(function() {
                                var btn = $(this);
                                var btnText = btn.text().trim();
                                if (!btn.hasClass('view--online') && !btn.hasClass('view--torrent') && !onlineButtonTexts[btnText] && !hideButtonTexts[btnText]) {
                                    otherButtons.push(btn.clone(true, true).removeClass('focus'));
                                }
                            });

                            var moreBtn = $('<div class="full-start__button selector main2-more-btn" tabindex="0">⋯</div>')
                                .on('hover:focus', function(){ $(this).addClass('focus'); })
                                .on('hover:blur', function(){ $(this).removeClass('focus'); })
                                .on('hover:enter', createMoreButtonMenu(otherButtons));

                            targetContainer.prepend(moreBtn).prepend(torrentBtn).prepend(onlineBtn);
                            setTimeout(function() {
                                targetContainer.find('.custom-online-btn, .custom-torrent-btn, .main2-more-btn').each(function(){ this.removeAttribute('style'); });
                            }, 10);
                            targetContainer.addClass('controller');
                            Lampa.Controller.enable('full_start');
                            setTimeout(function() { onlineBtn.addClass('focus'); }, 100);
                        }
                    }, 300);
                }
            }
        });
    }

    // Функція для застосування тем
    function applyTheme(theme) {
        var oldStyle = document.querySelector('#interface_mod_theme');
        if (oldStyle) oldStyle.remove();
        if (theme === 'default') {
            document.querySelectorAll('[id^="theme-style-"]').forEach(function(el) { el.disabled = true; });
            return;
        }
        var externalThemeStyle = document.querySelector('#theme-style-' + theme);
        if (externalThemeStyle) {
            document.querySelectorAll('[id^="theme-style-"]').forEach(function(el) { el.disabled = true; });
            externalThemeStyle.disabled = false;
            return;
        }
        var style = document.createElement('style');
        style.id = 'interface_mod_theme';
        var themes = {
            neon: `body { background: linear-gradient(135deg, #0d0221 0%, #150734 50%, #1f0c47 100%); color: #ffffff; }
                .menu__item.focus, .menu__item.traverse, .menu__item.hover, .settings-folder.focus, .settings-param.focus, .selectbox-item.focus, .full-start__button.focus, .full-descr__tag.focus, .player-panel .button.focus, .custom-online-btn.focus, .custom-torrent-btn.focus, .main2-more-btn.focus, .simple-button.focus, .menu__version.focus { background: linear-gradient(to right, #ff00ff, #00ffff); color: #fff; box-shadow: 0 0 20px rgba(255, 0, 255, 0.4); border: none; }
                .card.focus .card__view::after, .card.hover .card__view::after { border: 2px solid #ff00ff; box-shadow: 0 0 20px #00ffff; }
                .head__action.focus, .head__action.hover { background: linear-gradient(45deg, #ff00ff, #00ffff); }
                .full-start__background { opacity: 0.7; filter: brightness(1.2) saturate(1.3); }
                .settings__content, .settings-input__content, .selectbox__content, .modal__content { background: rgba(15, 2, 33, 0.95); border: 1px solid rgba(255, 0, 255, 0.1); }`,
            sunset: `body { background: linear-gradient(135deg, #2d1f3d 0%, #614385 50%, #516395 100%); color: #ffffff; }
                .menu__item.focus, .menu__item.traverse, .menu__item.hover, .settings-folder.focus, .settings-param.focus, .selectbox-item.focus, .full-start__button.focus, .full-descr__tag.focus, .player-panel .button.focus, .custom-online-btn.focus, .custom-torrent-btn.focus, .main2-more-btn.focus, .simple-button.focus, .menu__version.focus { background: linear-gradient(to right, #ff6e7f, #bfe9ff); color: #2d1f3d; box-shadow: 0 0 15px rgba(255, 110, 127, 0.3); font-weight: bold; }
                .card.focus .card__view::after, .card.hover .card__view::after { border: 2px solid #ff6e7f; box-shadow: 0 0 15px rgba(255, 110, 127, 0.5); }
                .head__action.focus, .head__action.hover { background: linear-gradient(45deg, #ff6e7f, #bfe9ff); color: #2d1f3d; }
                .full-start__background { opacity: 0.8; filter: saturate(1.2) contrast(1.1); }`,
            emerald: `body { background: linear-gradient(135deg, #1a2a3a 0%, #2C5364 50%, #203A43 100%); color: #ffffff; }
                .menu__item.focus, .menu__item.traverse, .menu__item.hover, .settings-folder.focus, .settings-param.focus, .selectbox-item.focus, .full-start__button.focus, .full-descr__tag.focus, .player-panel .button.focus, .custom-online-btn.focus, .custom-torrent-btn.focus, .main2-more-btn.focus, .simple-button.focus, .menu__version.focus { background: linear-gradient(to right, #43cea2, #185a9d); color: #fff; box-shadow: 0 4px 15px rgba(67, 206, 162, 0.3); border-radius: 5px; }
                .card.focus .card__view::after, .card.hover .card__view::after { border: 3px solid #43cea2; box-shadow: 0 0 20px rgba(67, 206, 162, 0.4); }
                .head__action.focus, .head__action.hover { background: linear-gradient(45deg, #43cea2, #185a9d); }
                .full-start__background { opacity: 0.85; filter: brightness(1.1) saturate(1.2); }
                .settings__content, .settings-input__content, .selectbox__content, .modal__content { background: rgba(26, 42, 58, 0.98); border: 1px solid rgba(67, 206, 162, 0.1); }`,
            aurora: `body { background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%); color: #ffffff; }
                .menu__item.focus, .menu__item.traverse, .menu__item.hover, .settings-folder.focus, .settings-param.focus, .selectbox-item.focus, .full-start__button.focus, .full-descr__tag.focus, .player-panel .button.focus, .custom-online-btn.focus, .custom-torrent-btn.focus, .main2-more-btn.focus, .simple-button.focus, .menu__version.focus { background: linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99); color: #fff; box-shadow: 0 0 20px rgba(170, 75, 107, 0.3); transform: scale(1.02); transition: all 0.3s ease; }
                .card.focus .card__view::after, .card.hover .card__view::after { border: 2px solid #aa4b6b; box-shadow: 0 0 25px rgba(170, 75, 107, 0.5); }
                .head__action.focus, .head__action.hover { background: linear-gradient(45deg, #aa4b6b, #3b8d99); transform: scale(1.05); }
                .full-start__background { opacity: 0.75; filter: contrast(1.1) brightness(1.1); }`,
            bywolf_mod: `body { background: linear-gradient(135deg, #090227 0%, #170b34 50%, #261447 100%); color: #ffffff; }
                .menu__item.focus, .menu__item.traverse, .menu__item.hover, .settings-folder.focus, .settings-param.focus, .selectbox-item.focus, .full-start__button.focus, .full-descr__tag.focus, .player-panel .button.focus, .custom-online-btn.focus, .custom-torrent-btn.focus, .main2-more-btn.focus, .simple-button.focus, .menu__version.focus { background: linear-gradient(to right, #fc00ff, #00dbde); color: #fff; box-shadow: 0 0 30px rgba(252, 0, 255, 0.3); animation: cosmic-pulse 2s infinite; }
                @keyframes cosmic-pulse { 0% { box-shadow: 0 0 20px rgba(252, 0, 255, 0.3); } 50% { box-shadow: 0 0 30px rgba(0, 219, 222, 0.3); } 100% { box-shadow: 0 0 20px rgba(252, 0, 255, 0.3); } }
                .card.focus .card__view::after, .card.hover .card__view::after { border: 2px solid #fc00ff; box-shadow: 0 0 30px rgba(0, 219, 222, 0.5); }
                .head__action.focus, .head__action.hover { background: linear-gradient(45deg, #fc00ff, #00dbde); animation: cosmic-pulse 2s infinite; }
                .full-start__background { opacity: 0.8; filter: saturate(1.3) contrast(1.1); }
                .settings__content, .settings-input__content, .selectbox__content, .modal__content { background: rgba(9, 2, 39, 0.95); border: 1px solid rgba(252, 0, 255, 0.1); box-shadow: 0 0 30px rgba(0, 219, 222, 0.1); }`,
            minimalist: `body { background: #121212; color: #e0e0e0; }
                .menu__item.focus, .menu__item.traverse, .menu__item.hover, .settings-folder.focus, .settings-param.focus, .selectbox-item.focus, .full-start__button.focus, .full-descr__tag.focus, .player-panel .button.focus, .custom-online-btn.focus, .custom-torrent-btn.focus, .main2-more-btn.focus, .simple-button.focus, .menu__version.focus { background: #2c2c2c; color: #ffffff; box-shadow: none; border-radius: 3px; border-left: 3px solid #3d3d3d; }
                .card.focus .card__view::after, .card.hover .card__view::after { border: 1px solid #3d3d3d; box-shadow: none; }
                .head__action.focus, .head__action.hover { background: #2c2c2c; }
                .full-start__background { opacity: 0.6; filter: grayscale(0.5) brightness(0.7); }
                .settings__content, .settings-input__content, .selectbox__content, .modal__content { background: rgba(18, 18, 18, 0.95); border: 1px solid #2c2c2c; }`,
            glow_outline: `body { background: #0a0a0a; color: #f5f5f5; }
                .menu__item.focus, .menu__item.traverse, .menu__item.hover, .settings-folder.focus, .settings-param.focus, .selectbox-item.focus, .full-start__button.focus, .full-descr__tag.focus, .player-panel .button.focus, .custom-online-btn.focus, .custom-torrent-btn.focus, .main2-more-btn.focus, .simple-button.focus, .menu__version.focus { background: rgba(40, 40, 40, 0.8); color: #fff; box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3); border-radius: 3px; }
                .card.focus .card__view::after, .card.hover .card__view::after { border: none; box-shadow: 0 0 0 2px #fff, 0 0 10px #0ff, 0 0 15px rgba(0, 255, 255, 0.5); animation: card-glow 1.5s ease-in-out infinite alternate; }
                @keyframes card-glow { from { box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #f0f, 0 0 20px #0ff; } to { box-shadow: 0 0 10px #fff, 0 0 15px #0ff, 0 0 20px #f0f, 0 0 25px #0ff; } }
                .head__action.focus, .head__action.hover { background: #292929; box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3), 0 0 10px rgba(0, 255, 255, 0.5); }
                .full-start__background { opacity: 0.7; filter: brightness(0.8) contrast(1.2); }`,
            menu_lines: `body { background: #121212; color: #f5f5f5; }
                .menu__item { border-bottom: 1px solid rgba(255, 255, 255, 0.1); margin-bottom: 5px; padding-bottom: 5px; }
                .menu__item.focus, .menu__item.traverse, .menu__item.hover, .settings-folder.focus, .settings-param.focus, .selectbox-item.focus, .full-start__button.focus, .full-descr__tag.focus, .player-panel .button.focus, .custom-online-btn.focus, .custom-torrent-btn.focus, .main2-more-btn.focus, .simple-button.focus, .menu__version.focus { background: linear-gradient(to right, #303030 0%, #404040 100%); color: #fff; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); border-left: 3px solid #808080; border-bottom: 1px solid #808080; }
                .card.focus .card__view::after, .card.hover .card__view::after { border: 2px solid #808080; box-shadow: 0 0 10px rgba(128, 128, 128, 0.5); }
                .head__action.focus, .head__action.hover { background: #404040; border-left: 3px solid #808080; }
                .full-start__background { opacity: 0.7; filter: brightness(0.8); }`,
            dark_emerald: `body { background: linear-gradient(135deg, #0c1619 0%, #132730 50%, #18323a 100%); color: #dfdfdf; }
                .menu__item.focus, .menu__item.traverse, .menu__item.hover, .settings-folder.focus, .settings-param.focus, .selectbox-item.focus, .full-start__button.focus, .full-descr__tag.focus, .player-panel .button.focus, .custom-online-btn.focus, .custom-torrent-btn.focus, .main2-more-btn.focus, .simple-button.focus, .menu__version.focus { background: linear-gradient(to right, #1a594d, #0e3652); color: #fff; box-shadow: 0 2px 8px rgba(26, 89, 77, 0.2); border-radius: 3px; }
                .card.focus .card__view::after, .card.hover .card__view::after { border: 2px solid #1a594d; box-shadow: 0 0 10px rgba(26, 89, 77, 0.3); }
                .head__action.focus, .head__action.hover { background: linear-gradient(45deg, #1a594d, #0e3652); }
                .full-start__background { opacity: 0.75; filter: brightness(0.9) saturate(1.1); }
                .settings__content, .settings-input__content, .selectbox__content, .modal__content { background: rgba(12, 22, 25, 0.97); border: 1px solid rgba(26, 89, 77, 0.1); }`
        };
        style.textContent = themes[theme] || '';
        document.head.appendChild(style);
    }

    function loadExternalThemes(callback) {
        var themeUrl = 'https://bywolf88.github.io/lampa-plugins/theme.json';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', themeUrl, true);
        xhr.timeout = 5000;
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    var externalThemes = JSON.parse(xhr.responseText);
                    if (externalThemes && typeof externalThemes === 'object') callback(null, externalThemes);
                    else callback('Invalid themes data format', null);
                } catch (e) { callback('Error: ' + e.message, null); }
            } else { callback('HTTP Error: ' + xhr.status, null); }
        };
        xhr.onerror = function() { callback('Network error', null); };
        xhr.ontimeout = function() { callback('Request timeout', null); };
        xhr.send();
    }

    function stylizeCollectionTitles() {
        if (!settings.stylize_titles) return;
        var oldStyle = document.getElementById('stylized-titles-css');
        if (oldStyle) oldStyle.remove();
        var styleElement = document.createElement('style');
        styleElement.id = 'stylized-titles-css';
        styleElement.textContent = `
            .items-line__title {
                font-size: 2.4em; display: inline-block;
                background: linear-gradient(45deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%);
                background-size: 200% auto; background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent;
                animation: gradient-text 3s ease infinite; font-weight: 800;
                text-shadow: 0 1px 3px rgba(0,0,0,0.2); position: relative; padding: 0 5px; z-index: 1;
            }
            .items-line__title::before {
                content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px;
                background: linear-gradient(to right, transparent, #784BA0, transparent); z-index: -1;
                transform: scaleX(0); transform-origin: bottom right; transition: transform 0.5s ease-out;
                animation: line-animation 3s ease infinite;
            }
            .items-line:hover .items-line__title::before { transform: scaleX(1); transform-origin: bottom left; }
            @keyframes gradient-text { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
            @keyframes line-animation { 0% { transform: scaleX(0.2); opacity: 0.5; } 50% { transform: scaleX(1); opacity: 1; } 100% { transform: scaleX(0.2); opacity: 0.5; } }
        `;
        document.head.appendChild(styleElement);
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) { node.querySelectorAll('.items-line__title'); }
                    });
                }
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    function enhanceDetailedInfo() {
        if (!settings.enhance_detailed_info) return;
        var oldStyle = document.getElementById('enhanced-info-css');
        if (oldStyle) oldStyle.remove();
        var enhancedInfoStyle = document.createElement('style');
        enhancedInfoStyle.id = 'enhanced-info-css';
        enhancedInfoStyle.textContent = `
            .full-start-new__details { font-size: 1.9em; }
            .full-start-new__details > * { font-size: 1.9em; margin: 0.1em; }
            .full-start-new__buttons, .full-start__buttons { font-size: 1.4em !important; }
            .full-start__button { font-size: 1.8em; }
            .full-start-new__rate-line { font-size: 1.5em; margin-bottom: 1em; }
            .full-start-new__poster { display: none; }
            .full-start-new__left { display: none; }
            .full-start-new__right { width: 100%; }
            .full-descr__text { font-size: 1.8em; line-height: 1.4; font-weight: 600; width: 100%; }
            .full-start-new__title { font-size: 2.2em !important; }
            .full-start-new__tagline { font-size: 1.4em !important; }
            .full-start-new__desc { font-size: 1.6em !important; margin-top: 1em !important; }
            .full-start-new__info { font-size: 1.4em !important; }
            @media (max-width: 768px) {
                .full-start-new__title { font-size: 1.8em !important; }
                .full-start-new__desc { font-size: 1.4em !important; }
                .full-start-new__details { font-size: 1.5em; }
                .full-descr__text { font-size: 1.5em; }
            }
        `;
        document.head.appendChild(enhancedInfoStyle);
        Lampa.Listener.follow('full', function(data) {
            if (data.type === 'complite' && settings.enhance_detailed_info) {
                setTimeout(function() {
                    var details = $('.full-start-new__details');
                    if (!details.length) return;
                    var seasonText = '', episodeText = '', durationText = '';
                    details.find('span').each(function() {
                        var text = $(this).text().trim();
                        if (text.match(/Сезон/i)) seasonText = text;
                        else if (text.match(/Серія|Серії|Серій/i)) episodeText = text;
                        else if (text.match(/Тривалість/i) || text.indexOf('≈') !== -1) durationText = text;
                    });
                    if ((seasonText && episodeText) || (seasonText && durationText) || (episodeText && durationText)) {
                        var unifiedLine = $('<div class="info-unified-line" style="display:flex;flex-wrap:wrap;align-items:center;gap:0.5em;margin-bottom:0.5em;"></div>');
                        if (seasonText) unifiedLine.append($('<span class="info-unified-item">').text(seasonText).css({ 'background-color': 'rgba(52, 152, 219, 0.8)', 'color': 'white', 'border-radius': '0.3em', 'padding': '0.2em 0.6em', 'display': 'inline-block' }));
                        if (episodeText) unifiedLine.append($('<span class="info-unified-item">').text(episodeText).css({ 'background-color': 'rgba(46, 204, 113, 0.8)', 'color': 'white', 'border-radius': '0.3em', 'padding': '0.2em 0.6em', 'display': 'inline-block' }));
                        if (durationText) unifiedLine.append($('<span class="info-unified-item">').text(durationText).css({ 'background-color': 'rgba(52, 152, 219, 0.8)', 'color': 'white', 'border-radius': '0.3em', 'padding': '0.2em 0.6em', 'display': 'inline-block' }));
                        details.find('span').each(function() {
                            var text = $(this).text().trim();
                            if (text === seasonText || text === episodeText || text === durationText) $(this).remove();
                        });
                        details.prepend(unifiedLine);
                    }
                }, 300);
            }
        });
    }

    // Ініціалізація
    function startPlugin() {
        addSettings();
        changeMovieTypeLabels();
        newInfoPanel();
        if (settings.colored_ratings) {
            updateVoteColors();
            setupVoteColorsObserver();
            setupVoteColorsForDetailPage();
        }
        colorizeSeriesStatus();
        colorizeAgeRating();
        if (settings.buttons_style_mode === 'all' || settings.buttons_style_mode === 'main2') {
            showAllButtons();
        }
        if (settings.theme) applyTheme(settings.theme);
        if (settings.stylize_titles) stylizeCollectionTitles();
        if (settings.enhance_detailed_info) enhanceDetailedInfo();
    }

    if (window.appready) {
        startPlugin();
    } else {
        Lampa.Listener.follow('app', function (event) {
            if (event.type === 'ready') startPlugin();
        });
    }
})();
