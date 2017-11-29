/// <reference path="chrome.d.ts" url="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/chrome/index.d.ts" />
/*global _ _t dots getCookie readStorage changeSrc saveStorage chrome shield CryptoJS ABP flvjs flvplayer isChrome resizeSensor*/
function createPopup(param) {
    if (!param.content)
        return;
    if (document.querySelector('#YHP_Notice') != null)
        document.querySelector('#YHP_Notice').remove();

    let div = _('div', { id: 'YHP_Notice' });
    let childs = [];
    if (param.showConfirm) {
        childs.push(_('input', {
            value: param.confirmBtn,
            type: 'button',
            className: 'confirm',
            event: { click: param.onConfirm }
        }));
    }
    childs.push(_('input', {
        value: _t('close'), type: 'button', className: 'close', event: {
            click: function () {
                div.style.height = 0;
                setTimeout(function () {
                    div.remove();
                }, 500);
            }
        }
    }));
    div.appendChild(_('div', {}, [_('div', {},
        param.content.concat([_('hr'), _('div', { style: { textAlign: 'right' } }, childs)])
    )]));
    document.body.appendChild(div);
    div.style.height = div.firstChild.offsetHeight + 'px';
}

let fuck_youku_baiyug = {
    server: 'http://api.baiyug.cn',
    proxy_server: 'http://baiyug.ipcjs.win',
    _sign: function (str) {
        let that = this;
        !function (n) { "use strict"; function t(n, t) { var r = (65535 & n) + (65535 & t); return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r } function r(n, t) { return n << t | n >>> 32 - t } function e(n, e, o, u, c, f) { return t(r(t(t(e, n), t(u, f)), c), o) } function o(n, t, r, o, u, c, f) { return e(t & r | ~t & o, n, t, u, c, f) } function u(n, t, r, o, u, c, f) { return e(t & o | r & ~o, n, t, u, c, f) } function c(n, t, r, o, u, c, f) { return e(t ^ r ^ o, n, t, u, c, f) } function f(n, t, r, o, u, c, f) { return e(r ^ (t | ~o), n, t, u, c, f) } function i(n, r) { n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r; var e, i, a, d, h, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878; for (e = 0; e < n.length; e += 16)i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h); return [l, g, v, m] } function a(n) { var t, r = "", e = 32 * n.length; for (t = 0; t < e; t += 8)r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255); return r } function d(n) { var t, r = []; for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1)r[t] = 0; var e = 8 * n.length; for (t = 0; t < e; t += 8)r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32; return r } function h(n) { return a(i(d(n), 8 * n.length)) } function l(n, t) { var r, e, o = d(n), u = [], c = []; for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1)u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r]; return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640)) } function g(n) { var t, r, e = ""; for (r = 0; r < n.length; r += 1)t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t); return e } function v(n) { return unescape(encodeURIComponent(n)) } function m(n) { return h(v(n)) } function p(n) { return g(m(n)) } function s(n, t) { return l(v(n), v(t)) } function C(n, t) { return g(s(n, t)) } function A(n, t, r) { return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n) } "function" == typeof define && define.amd ? define(function () { return A }) : "object" == typeof module && module.exports ? module.exports = A : n.md5 = A }(that);
        var _0x9ba7 = ["\x64\x20\x31\x3D\x5B\x22\x5C\x62\x5C\x33\x5C\x34\x5C\x63\x5C\x35\x5C\x37\x5C\x38\x5C\x33\x5C\x35\x5C\x34\x5C\x39\x5C\x61\x22\x5D\x3B\x36\x2B\x32\x5B\x31\x5B\x30\x5D\x5D\x28\x65\x29\x2B\x32\x5B\x31\x5B\x30\x5D\x5D\x28\x66\x29\x2B\x32\x5B\x31\x5B\x30\x5D\x5D\x28\x67\x29\x2B\x32\x5B\x31\x5B\x30\x5D\x5D\x28\x68\x29\x2B\x32\x5B\x31\x5B\x30\x5D\x5D\x28\x69\x29\x2B\x32\x5B\x31\x5B\x30\x5D\x5D\x28\x6A\x29\x2B\x32\x5B\x31\x5B\x30\x5D\x5D\x28\x6B\x29\x2B\x32\x5B\x31\x5B\x30\x5D\x5D\x28\x6C\x29", "\x7C", "\x73\x70\x6C\x69\x74", "\x7C\x5F\x30\x78\x62\x37\x38\x30\x7C\x53\x74\x72\x69\x6E\x67\x7C\x78\x37\x32\x7C\x78\x36\x46\x7C\x78\x34\x33\x7C\x73\x74\x72\x7C\x78\x36\x38\x7C\x78\x36\x31\x7C\x78\x36\x34\x7C\x78\x36\x35\x7C\x78\x36\x36\x7C\x78\x36\x44\x7C\x76\x61\x72\x7C\x33\x33\x7C\x39\x37\x7C\x39\x38\x7C\x31\x30\x31\x7C\x31\x30\x32\x7C\x35\x37\x7C\x35\x36\x7C\x35\x35", "\x72\x65\x70\x6C\x61\x63\x65", "", "\x5C\x77\x2B", "\x5C\x62", "\x67", "\x73\x75\x62\x73\x74\x72\x69\x6E\x67", "\x38\x61\x62\x35\x64\x36", "\x6C\x6F\x69\x6A"]; function sign(str) { var abc = that.md5(eval(function (p, a, c, k, e, r) { e = function (c) { return c.toString(a) }; if (!_0x9ba7[5][_0x9ba7[4]](/^/, String)) { while (c--) { r[e(c)] = k[c] || e(c) }; k = [function (e) { return r[e] }]; e = function () { return _0x9ba7[6] }; c = 1 }; while (c--) { if (k[c]) { p = p[_0x9ba7[4]](new RegExp(_0x9ba7[7] + e(c) + _0x9ba7[7], _0x9ba7[8]), k[c]) } }; return p }(_0x9ba7[0], 22, 22, _0x9ba7[3][_0x9ba7[2]](_0x9ba7[1]), 0, {}))); var _a = abc[_0x9ba7[9]](10, 22); var _b = abc[_0x9ba7[9]](24, 30); return (![] + [])[+!+[]] + (+(+!+[] + [+!+[]]))[(!![] + [])[+[]] + (!![] + [][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]])[+!+[] + [+[]]] + (+![] + ([] + [])[([][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]] + [])[!+[] + !+[] + !+[]] + (!![] + [][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]])[+!+[] + [+[]]] + ([][[]] + [])[+!+[]] + (![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[+!+[]] + ([][[]] + [])[+[]] + ([][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+[]] + (!![] + [][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]])[+!+[] + [+[]]] + (!![] + [])[+!+[]]])[+!+[] + [+[]]] + (!![] + [])[+[]] + (!![] + [])[+!+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + ([][[]] + [])[+!+[]] + (+![] + [![]] + ([] + [])[([][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]] + [])[!+[] + !+[] + !+[]] + (!![] + [][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]])[+!+[] + [+[]]] + ([][[]] + [])[+!+[]] + (![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[+!+[]] + ([][[]] + [])[+[]] + ([][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+[]] + (!![] + [][(![] + [])[+[]] + ([![]] + [][[]])[+!+[] + [+[]]] + (![] + [])[!+[] + !+[]] + (!![] + [])[+[]] + (!![] + [])[!+[] + !+[] + !+[]] + (!![] + [])[+!+[]]])[+!+[] + [+[]]] + (!![] + [])[+!+[]]])[!+[] + !+[] + [+[]]]](!+[] + !+[] + [+[]]) + [!+[] + !+[] + !+[] + !+[] + !+[]] + [!+[] + !+[] + !+[] + !+[] + !+[] + !+[] + !+[] + !+[] + !+[]] + _b + _0x9ba7[10] + _a + _0x9ba7[11] }
        return sign(str);
    },
    _getIndexUrl: function (id) {
        return `${this.proxy_server}/vip_pppp/vip_pppppppp.php?url=${id}&type=youku`;
    },
    _getUrlUrl: function () {
        return `${this.proxy_server}/vip_pppp/baiyug.php`;
    },
    fetchPromise: function ({ url: id, select }) {
        return fetch(this._getIndexUrl(id), { referrerPolicy: 'no-referrer' })
            .then(resp => resp.text())
            .then(text => {
                let md5 = '';
                let evalGroup = text.match(/eval\("((\\x\w\w)+)"\)/); // eval("\x24\x28\x27\x23\x68...");            
                if (evalGroup) {
                    let evalContent = hex2string(evalGroup[1]); // $('#hdMd5').val('c23a9c741f6f8885cc4eb61228b0ffc0');
                    let evalContentGroup = evalContent.match(/\$\('#hdMd5'\)\.val\('(\w+)'\)/);
                    if (evalContentGroup) {
                        md5 = this._sign(evalContentGroup[1]);
                    }
                }
                if (!md5) {
                    return Promise.reject('提取md5失败');
                }
                let formData = new URLSearchParams();
                formData.append('id', id);
                formData.append('md5', md5);
                formData.append('type', 'auto'); // 若使用'youku', 返回的url可能是xml_client, 而不是m3u8...
                // formData.append('hd', '4');
                console.log('fetchPlaylist index.php =>', id, md5, formData.toString());
                return fetch(this._getUrlUrl(), { method: 'POST', body: formData, referrerPolicy: 'no-referrer' });
            })
            .then(resp => resp.json())
            .then(json => {
                console.log('fetchPlaylist url.php =>', json);
                if (json.msg === '200' && json.url && ['m3u8_list', 'm3u8', 'm3u8_list_youku'].includes(json.ext)) {
                    // 接下来拉取m3u8
                    return fetch(decodeURIComponent(json.url).replace(this.server, this.proxy_server), { referrerPolicy: 'no-referrer' }); // 拉取m3u8
                } else {
                    return Promise.reject(json);
                }
            })
            .then(resp => m3u8RespToPlaylist({ m3u8Resp: resp, select }))
    }
}

function m3u8RespToPlaylist({ m3u8Resp, select }) {
    return m3u8Resp.text()
        .then(m3u8_text => {
            let m3u8 = parseM3U8(m3u8_text);
            console.log('m3u8:', m3u8, 'duration:', m3u8.totalDuration, srcUrl[select].duration);
            srcUrl[select].segments = m3u8.segments.map(s => ({
                filesize: s.duration * 300, // 一般原画的视频是200倍
                duration: s.duration,
                url: s.uri,
                backup_url: []
            }));
        })
}

let fuck_youku_maoyun = {
    server: 'https://jx.maoyun.tv',
    proxy_server: 'http://maoyun.ipcjs.win',
    _getIndexUrl: function (id) {
        return `${this.proxy_server}/index.php?id=${id}`;
    },
    _getUrlUrl: function () {
        return `${this.proxy_server}/url.php`;
    },
    _sign: fuck_youku_baiyug._sign,
    fetchPromise: fuck_youku_baiyug.fetchPromise
}

// 各种破解不正常, 不可用
let fuck_youku_163ren = {
    server: 'https://jx.api.163ren.com',
    proxy_server: 'http://163ren.ipcjs.win',
    fetchPromise: function ({ url, select }) {
        // referrer一定要是this.server, 但浏览器中不能随便指定referrer, 故该接口不可用...
        // => 代理了原接口, 接口可以用了
        // => 貌似认证流程又改了...不可用
        return fetch(`${this.proxy_server}/ssl.php?url=${url}`, { referrerPolicy: 'no-referrer' })
            .then(resp => resp.text())
            .then(text => {
                let urlGroup;
                if (urlGroup = text.match(/url\s*:\s*'(\S+)',/)) {
                    return fetch(`${this.server}/api.php?url=${urlGroup[1]}&hd=2`);
                } else {
                    return Promise.reject(`未找到url(${text})`);
                }
            })
            .then(resp => resp.text())
            .then(xml_text => {
                let xml = new DOMParser().parseFromString(xml_text, 'text/xml');
                let fileList = [...xml.querySelectorAll('file')].map(it => it.textContent);
                let sizeList = [...xml.querySelectorAll('size')].map(it => it.textContent);
                let secondsList = [...xml.querySelectorAll('seconds')].map(it => it.textContent);
                srcUrl[select].segments = fileList.map((file, index) => {
                    if (!file) console.log('fetchPlaylist error:', `破解服务器(${this.server})并不能破解该视频...`);
                    return {
                        filesize: +sizeList[index],
                        duration: Math.round(+secondsList[index] * 1000),
                        url: file,
                        backup_url: []
                    }
                });
            });
    }
}
let fuck_youku = fuck_youku_maoyun;
// let fuck_youku = null;

let domain = location.href.match(/:\/\/([^/]+)/)[1];
let vid = '';
let objID = '';
let categoryID = 0;
let uid = '';
let iid = 0;
if (domain == 'v.youku.com') {
    vid = location.href.match(/\/id_([a-zA-Z0-9=]+)/);
    objID = 'object#movie_player, div#ykPlayer';
} else if (domain == 'player.youku.com') {
    vid = location.href.match(/embed\/([a-zA-Z0-9=]+)/);
    objID = 'object#youku-player';
}

let knownTypes = {
    'mp4sd': _t('flvhd'),
    'flvhd': _t('flvhd'),
    'mp4hd': _t('mp4hd'),
    'mp4hd2': _t('mp4hd2'),
    'mp4hd2v2': _t('mp4hd2'),
    'mp4hd3': _t('mp4hd3'),
    'mp4hd3v2': _t('mp4hd3')
};
/**
 * 优酷新清晰度：
 * mp4sd => flvhd mp4版
 * mp4hd2v2 => mp4hd2 mp4版
 * mp4hd3v2 => mp4hd3 mp4版
 */
let typeDropMap = {
    'mp4hd3': 'mp4hd2',
    'mp4hd2': 'mp4hd',
    'mp4hd': 'flvhd'
};
let knownLangs = {
    "guoyu": "国语",
    "yue": "粤语",
    "chuan": "川话",
    "tai": "台湾",
    "min": "闽南",
    "en": "英语",
    "ja": "日语",
    "kr": "韩语",
    "in": "印度",
    "fr": "法语",
    "de": "德语",
    "it": "意语",
    "es": "西语",
    "th": "泰语",
    "baby": "萌童",
    "man": "暖男"
};
let knownLangsId = {
    "guoyu": 1,
    "yue": 2,
    "chuan": 3,
    "tai": 4,
    "min": 5,
    "en": 6,
    "ja": 7,
    "kr": 8,
    "in": 9,
    "fr": 11,
    "de": 12,
    "it": 13,
    "es": 14,
    "th": 16,
    "baby": 17,
    "man": 18
};
let srcUrl = {};
let audioLangs = {};
Object.defineProperty(audioLangs, 'length', { enumerable: false, writable: true });
let availableSrc = [];
window.currentSrc = '';
window.currentLang = '';
let firstTime = true;
let tempPwd = '';
let highestType;
let abpinst;

function response2url(json) {
    if (fetchedCount) {
        //写入备份模式
        json.data.stream.forEach(function (stream) {
            if (stream.channel_type) return;
            let lang = stream.audio_lang,
                type = stream.stream_type,
                current = audioLangs[lang].src[type];
            //忽略不记录清晰度
            if (current === undefined) return;
            current.playlist_url = stream.m3u8_url;
            for (let part = 0; part < stream.segs.length; part++) {
                current.segments[part].backup_url.push(stream.segs[part].cdn_url.replace(/http:\/\/([\d\.]+?)\//, function (s) {
                    return s + 'youku/';
                }));
                if (stream.segs[part].cdn_backup) {
                    current.segments[part].backup_url.concat(stream.segs[part].cdn_backup);
                }
            }
        });
        return;
    }
    let data = {};
    let savedLang = localStorage.YHP_PreferedLang || '';
    for (let val of json.data.stream) {
        if (!data[val.audio_lang])
            data[val.audio_lang] = {};
        if (!val.channel_type)
            data[val.audio_lang][val.stream_type] = val;
        //片尾、片头独立片段暂时丢弃
    }

    let videoids = {};
    if (json.data.dvd && json.data.dvd.audiolang) {
        for (let item of json.data.dvd.audiolang) {
            videoids[item.langcode] = item.vid;
        }
    }

    audioLangs.length = 0;
    for (let lang in data) {
        audioLangs[lang] = {
            src: {},
            available: []
        };
        audioLangs.length++;
        if (currentLang == '')
            currentLang = lang;
        if (savedLang == lang)
            currentLang = lang;
        let videoid = videoids[lang] || vid;

        if (data[lang].mp4hd3v2)
            delete data[lang].mp4hd3;
        if (data[lang].mp4hd2v2)
            delete data[lang].mp4hd2;
        if (data[lang].mp4sd)
            delete data[lang].flvhd,
                typeDropMap = {
                    'mp4hd3v2': 'mp4hd2v2',
                    'mp4hd2v2': 'mp4hd',
                    'mp4hd': 'mp4sd'
                };

        for (let type in knownTypes) {
            if (data[lang][type]) {
                let time = 0;
                audioLangs[lang].src[type] = {
                    type: 'flv',
                    segments: [],
                    fetch_playlist: false,
                    fetchM3U8: false,
                    playlist_url: data[lang][type].m3u8_url
                };
                for (let part of data[lang][type].segs) {
                    if (part.key == -1) {
                        if (!fuck_youku) {
                            audioLangs[lang].src[type].partial |= true;
                            continue;
                        } else {
                            audioLangs[lang].src[type].segments.push({
                                filesize: part.size | 0,
                                duration: part.total_milliseconds_video | 0,
                                backup_url: []
                            });
                            audioLangs[lang].src[type].fetch_playlist |= true;
                        }
                    } else if (part.rtmp_url) {
                        audioLangs[lang].src[type].segments.push({
                            filesize: part.size | 0,
                            duration: part.total_milliseconds_video | 0
                        });
                        audioLangs[lang].src[type].fetchM3U8 |= true;
                    } else {
                        let seg = {
                            filesize: part.size | 0,
                            duration: part.total_milliseconds_video | 0,
                            url: part.cdn_url.replace(/http:\/\/([\d\.]+?)\//, function (s) {
                                return s + 'youku/';
                            }),
                            backup_url: []
                        };
                        if (part.cdn_backup && part.cdn_backup.length) {
                            seg.backup_url = part.cdn_backup;
                        }
                        audioLangs[lang].src[type].segments.push(seg);
                    }
                    time += part.total_milliseconds_video | 0;
                }
                audioLangs[lang].src[type].duration = time;
                audioLangs[lang].src.duration = time;
                highestType = type;
            }
        }

        let selected;
        let hitPrefer = false;
        let prefer = localStorage.YHP_PreferedType || '';
        for (let type in knownTypes) {
            if (audioLangs[lang].src[type]) {
                selected = [type, knownTypes[type]];
                audioLangs[lang].available.push(selected);
                if (firstTime && !hitPrefer && currentLang == lang) {
                    currentSrc = type;
                }
                if (prefer == type)
                    hitPrefer = true;
            }
        }
        if (firstTime && currentLang == lang && !hitPrefer)
            currentSrc = selected[0];
    }
}

function passwordCB() {
    let password = document.querySelector('#YHP_Notice input[type=text]');
    if (password.value.length == 0) {
        let container = document.querySelector('#YHP_Notice .confirm').parentNode;
        let note = _('span', { style: { color: '#F00' } }, [_('text', _t('emptyPW'))]);
        container.insertBefore(note, container.firstChild);
        setTimeout(function () {
            note.remove();
        }, 3e3);
    } else {
        password = password.value;
        let savePassword = document.querySelector('#YHP_Notice input[type=checkbox]');
        if (savePassword.checked) {
            let savedPassword = JSON.parse(localStorage.YHP_SavedPassword || '{}');
            savedPassword[vid] = password;
            localStorage.YHP_SavedPassword = JSON.stringify(savedPassword);
        }
        dots.runTimer();
        fetchSrc('&password=' + password);
        document.querySelector('#YHP_Notice .close').click();
    }
}

function passwordKeyDown(e) {
    if (e.keyCode == 13) {
        this.blur();
        document.querySelector('#YHP_Notice .confirm').click();
    }
}

function padStart(str, pad, len) {
    if (typeof (str) != 'string')
        str = str.toString();
    while (str.length < len) {
        str = pad + str;
    }
    return str;
}

function generate_downlink() {
    let old = document.querySelector('#panel_down .YHP_down');
    if (old != null)
        old.remove();
    let childs = [];
    for (let type in knownTypes) {
        if (!srcUrl[type]) continue;
        let items = [];
        let order = 1;
        srcUrl[type].segments.forEach(function (i) {
            if (!i.url) return;
            let time = ((i.duration / 6e4) | 0) + ':' + padStart(((i.duration / 1e3) | 0) % 60, '0', 2);
            items.push(_('a', {
                href: i.url,
                target: '_blank'
            }, [_('div', { className: 'YHP_down_btn' }, [_('text', '[' + order + '] ' + time)])]));
            order++;
        });
        if (items.length > 0) {
            childs.push(_('div', {}, [
                _('div', { className: 'YHP_down_banner' }, [_('text', '[' + knownTypes[type] + '] '), _('span', {
                    className: 'YHP_output',
                    style: { cursor: 'pointer' },
                    'data-type': type
                }, [_('text', _t('outputUrl'))])]),
                _('div', { className: 'YHP_down_container' }, items)
            ]));
        }
    }
    if (childs.length > 0) {
        document.querySelector('#panel_down').appendChild(_('div', {
            className: 'YHP_down', event: {
                click: function (e) {
                    if (e.target.className == 'YHP_output') {
                        urlsOutput(e.target.getAttribute('data-type'));
                    }
                }
            }
        }, childs));
    }
}

function urlsOutput(type) {
    if (!srcUrl[type]) return;
    let urls = [];
    srcUrl[type].segments.forEach(function (i) {
        if (i.url) urls.push(encodeURIComponent(i.url));
    });
    if (urls.length == 0) return;
    urls = "data:text/plain," + urls.join('%0A');
    let div = _('div', { id: 'urls-output' }, [
        _('div', {
            style: {
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 20000,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,.5)',
                animationFillMode: 'forwards',
                animationName: 'pop-iframe-in',
                animationDuration: '.5s'
            },
            event: {
                click: function (e) {
                    if (e.target == this || e.target.className == 'closeBox') {
                        div.firstChild.style.animationName = 'pop-iframe-out';
                        setTimeout(function () {
                            div.remove();
                        }, 5e2);
                    }
                }
            }
        }, [_('iframe', {
            src: urls,
            style: {
                background: '#e4e7ee',
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '80%',
                height: '80%'
            }
        }),
        _('div', {
            className: 'closeBox',
            style: { position: 'absolute', top: '5%', right: '8%', fontSize: '40px', color: '#FFF' }
        }, [_('text', '×')])])
    ]);
    document.body.appendChild(div);
}

function switchLang(lang) {
    Array.from(abpinst.playerUnit.querySelectorAll('.BiliPlus-Scale-Menu .Video-Defination>div')).forEach(function (i) {
        i.remove();
    });

    srcUrl = audioLangs[lang].src;
    availableSrc = audioLangs[lang].available;

    for (let i = 0; i < availableSrc.length; i++) {
        abpinst.playerUnit.querySelector('.BiliPlus-Scale-Menu .Video-Defination').appendChild(_('div', {
            changeto: JSON.stringify(availableSrc[i]),
            name: availableSrc[i][0],
            className: availableSrc[i][0] == currentSrc ? 'on' : ''
        }, [_('text', availableSrc[i][1])]));
    }
    if (audioLangs.length > 1)
        abpinst.removePopup(), abpinst.createPopup(_t('currentLang') + (knownLangs[lang] || lang), 3e3);
}

let player_r;
function getAuthParam() {
    return new Promise(function (res, rej) {
        if (domain == 'v.youku.com') {
            //主站使用ckey={_getUA()}
            window.addEventListener('YHP_ckey', function ckeyCallback(e) {
                window.removeEventListener('YHP_ckey', ckeyCallback);
                res('&ccode=0502&ckey=' + encodeURIComponent(e.detail));
            });
            document.head.appendChild(_('script', {}, [_('text', 'window.dispatchEvent(new CustomEvent("YHP_ckey", {detail:_getUA()}))')])).remove();
        } else if (domain == 'player.youku.com') {
            //外链使用custom.json并保存值
            if (player_r) return res('&ccode=0405&r=' + encodeURIComponent(player_r));
            let h = new Headers();
            h.append('Range', 'bytes=0-0');
            fetch('https://player.youku.com/player.php/sid/' + vid + '/newPlayer/true/v.swf', {
                method: 'GET',
                headers: h,
                credentials: 'include',
                referrer: location.href,
                cache: 'no-cache',
                redirect: 'follow'
            }).then(function (r) {
                let vext = r.url.match(/vext=([^&]+)/)[1];
                fetch('https://api.youku.com/players/custom.json?client_id=f67e97ee21e17da2&video_id=' + vid + '&refer=' + encodeURIComponent(location.href) + '&vext=' + vext + '&embsig=undefined&styleid=1&type=flash', {
                    method: 'GET',
                    credentials: 'include',
                    referrer: location.href,
                    cache: 'no-cache'
                }).then(function (r) {
                    r.json().then(function (data) {
                        player_r = data.stealsign;
                        res('&ccode=0405&r=' + encodeURIComponent(player_r));
                    });
                });
            });
        }
    });
}
function fetchSrc(extraQuery) {
    getAuthParam().then(function (auth) {
        fetch(location.protocol + '//ups.youku.com/ups/get.json?client_ip=192.168.1.2&utid=' + encodeURIComponent(getCookie('cna')) + '&client_ts=' + Date.now() + auth + '&vid=' + vid + (extraQuery || ''), {
            method: 'GET',
            credentials: 'include',
            cache: 'no-cache',
            referrer: location.href
        }).then(function (r) {
            r.json().then(fetchSrcThen);
        }).catch(function (e) {
            createPopup({
                content: [_('p', { style: { fontSize: '16px' } }, [_('text', _t('fetchSourceErr'))]), _('text', e.message)],
                showConfirm: false
            });
        });
    });
}

let fetchedCount = 0;

function fetchSrcThen(json) {
    if (json.data.error) {
        /*
        处理错误
        -2002 需要密码
        -2003 密码错误
        */
        dots.stopTimer();
        let error = json.data.error;
        if (error.code == -2002) {
            createPopup({
                content: [_('p', { style: { fontSize: '16px' } }, [_('text', _t('needPW'))]), _('input', {
                    placeholder: _t('enterPW'),
                    type: 'text',
                    event: { keydown: passwordKeyDown }
                }), _('br'), _('label', {}, [_('input', { type: 'checkbox' }), _('text', _t('rememberPW'))])],
                showConfirm: true,
                confirmBtn: _t('submit'),
                onConfirm: passwordCB
            });
        } else if (error.code == -2003) {
            createPopup({
                content: [_('p', { style: { fontSize: '16px' } }, [_('text', _t('wrongPW'))]), _('input', {
                    placeholder: _t('enterPW'),
                    type: 'text',
                    event: { keydown: passwordKeyDown }
                }), _('br'), _('label', {}, [_('input', { type: 'checkbox' }), _('text', _t('rememberPW'))])],
                showConfirm: true,
                confirmBtn: _t('submit'),
                onConfirm: passwordCB
            });
        } else {
            createPopup({
                content: [_('p', { style: { fontSize: '16px' } }, [_('text', _t('fetchSourceErr'))]), _('text', JSON.stringify(json.data.error))],
                showConfirm: false
            });
        }
        fetchedCount = 0;
        return;
    } else {
        response2url(json);
    }
    if (fetchedCount) {
        reloadBackup();
        return;
    }
    switchLang(currentLang);
    if (firstTime) {
        iid = json.data.video.id;
        fetchComment(0);
        categoryID = json.data.video.category_id;
        uid = json.data.user.uid;
        abpinst.playerUnit.addEventListener('sendcomment', sendComment);
        abpinst.title = json.data.video.title;
        document.querySelector('.BiliPlus-Scale-Menu').style.animationName = 'scale-menu-show';
        setTimeout(function () {
            document.querySelector('.BiliPlus-Scale-Menu').style.animationName = '';
        }, 2e3);
        if (domain == 'v.youku.com' && json.data.videos && json.data.videos.list) {
            let next, list = json.data.videos.list;
            list.sort(function (a, b) {
                return (a.seq | 0) - (b.seq | 0);
            });
            for (let i = 0, breakNextTime = false; i < list.length; i++) {
                if (breakNextTime) {
                    next = list[i];
                    break;
                }
                if (list[i].encodevid === vid)
                    breakNextTime = true;
            }
            if (next !== undefined) {
                abpinst.playerUnit.classList.add('has-next');
                abpinst.btnNext.tooltip(ABP.Strings.next + next.title);
                abpinst.playerUnit.addEventListener('callNext', function () {
                    location.href = 'id_' + next.encodevid + '.html';
                });
                abpinst.video.addEventListener('ended', function () {
                    readStorage('auto_switch', function (item) {
                        item = Object.assign({ auto_switch: true }, item);
                        if (item.auto_switch)
                            location.href = 'id_' + next.encodevid + '.html';
                    });
                });
            }

        }

        if (uid == '') {
            abpinst.txtText.disabled = true;
            abpinst.txtText.placeholder = _t('noVisitorComment');
            abpinst.txtText.style.textAlign = 'center';
        }
        let contextMenu = abpinst.playerUnit.querySelector('.Context-Menu-Body'),
            dvd = json.data.dvd;
        if (dvd) {
            let head = false, tail = false;
            dvd.head && (head = dvd.head / 1e3);
            dvd.tail && (tail = dvd.tail / 1e3);
            if (head || tail) {
                let seekedHead = false, seekedTail = false;
                abpinst.video.addEventListener('timeupdate', function () {
                    if (this.paused) return;
                    let seek = false, video = this;
                    if (!seekedHead && head !== false && this.currentTime < head) {
                        seek = head;
                        seekedHead = true;
                    } else if (!seekedTail && tail !== false && this.currentTime > tail) {
                        seek = this.duration;
                        seekedTail = true;
                    }
                    if (seek !== false) {
                        readStorage('skip_head', function (item) {
                            item = Object.assign({ skip_head: true }, item);
                            if (item.skip_head) {
                                video.currentTime = seek;
                            }
                        });
                    }
                });
            }

            if (dvd.point) {
                let childs = [];
                dvd.point.forEach(function (i) {
                    if (i.ctype == 'story') {
                        let start = i.start / 1e3 | 0, min = start / 60 | 0, sec = start % 60;
                        min < 10 && (min = '0' + min);
                        sec < 10 && (sec = '0' + sec);
                        childs.push(_('div', { 'data-time': i.start }, [_('text', min + ':' + sec + '　' + i.title)]));
                    }
                });
                if (childs.length) {
                    let points = _('div', { className: 'dm static' }, [
                        _('div', {}, [_('text', _t('storylinePoints'))]),
                        _('div', {
                            className: 'dmMenu', event: {
                                click: function (e) {
                                    let time = e.target.dataset.time / 1e3;
                                    abpinst.video.currentTime = time;
                                }
                            }
                        }, childs)
                    ]);
                    contextMenu.insertBefore(points, contextMenu.firstChild);
                }
            }
        }
        if (audioLangs.length > 1) {
            let childs = [];
            for (let lang in audioLangs) {
                childs.push(_('div', { 'data-lang': lang }, [_('text', knownLangs[lang] || lang)]));
            }
            let langChange = _('div', { className: 'dm static' }, [
                _('div', {}, [_('text', _t('audioLang'))]),
                _('div', {
                    className: 'dmMenu', event: {
                        click: function (e) {
                            let lang = e.target.getAttribute('data-lang');
                            if (lang == currentLang)
                                return;
                            while (audioLangs[lang].src[currentSrc] == undefined) {
                                if (typeDropMap[currentSrc] == undefined) {
                                    abpinst.createPopup('切换错误，没有清晰度', 3e3);
                                    return false;
                                }
                                currentSrc = typeDropMap[currentSrc];
                            }
                            switchLang(lang);
                            currentLang = lang;
                            localStorage.YHP_PreferedLang = lang;
                            changeSrc('', currentSrc, true);
                        }
                    }
                }, childs)
            ]);
            contextMenu.insertBefore(langChange, contextMenu.firstChild);
        }

        if (domain != 'v.youku.com') {
            contextMenu.insertBefore(_('div', {
                id: 'main_link', event: {
                    click: function () {
                        abpinst.video.pause();
                        window.open('http://v.youku.com/v_show/id_' + vid + '.html');
                    }
                }
            }, [_('text', _t('toYouku'))]), contextMenu.firstChild);
        } else {
            document.querySelector('#fn_download').addEventListener('click', generate_downlink);
        }

        if (json.data.preview)
            abpinst.playerUnit.dispatchEvent(new CustomEvent('previewData', {
                detail: {
                    code: 0, data: {
                        img_x_len: 10,
                        img_y_len: 10,
                        img_x_size: 128,
                        img_y_size: 72,
                        image: json.data.preview.thumb,
                        step: json.data.preview.timespan / 1e3
                    }
                }
            }));
        readStorage('updateNotifyVer', function (item) {
            if (item.updateNotifyVer != '1.3.2') {
                saveStorage({ 'updateNotifyVer': '1.3.2' });
                chrome.runtime.sendMessage('version', function (version) {
                    createPopup({
                        content: [
                            _('p', { style: { fontSize: '16px' } }, [_('text', _t('extUpdated'))]),
                            _('div', { style: { whiteSpace: 'pre-wrap' } }, [
                                _('text', _t('extUpdated_ver') + version + "\n\n" + _t('extUpdated_detail'))
                            ])
                        ],
                        showConfirm: false
                    });
                });
            }
        });
        //记录播放历史
        fetch('https://playlog.youku.com/playlog/open/push_web.json?' + [
            'nlid=' + encodeURIComponent(getCookie('cna')),
            'v=' + iid,
            'hwclass=1&devicename=H5&mt=1&autoplay=1',
            'cg=' + categoryID,
            json.data.show ? ('shid=' + json.data.show.id) : '',
            'seconds=' + (srcUrl.duration / 1e3 | 0),
            'po=0',
            'lastupdate=' + (Date.now() / 1e3 | 0),
            'lang=' + (knownLangsId[currentLang] || 1)
        ].join('&'), {
                method: 'GET',
                credentials: 'include',
                cache: 'no-cache'
            });
        //nlid=GPM%2FEhZuIHkCATqawzk1EH%2FA&v=437244772&hwclass=1&devicename=H5&mt=1&autoplay=1&cg=100&shid=310600&tp=1&stg=1&hd=1&seconds=2947&po=0&lastupdate=1506870903&lang=7
    }
    firstTime = false;
    fetchedCount++;
    changeSrc('', currentSrc, true);
}

let sizeList = [24, 22, 28];
let modeList = {
    3: 1,
    4: 5,
    6: 4
};

function ykCmtParser(json) {
    for (let i of json.result) {
        let obj = {};
        let properties = {
            pos: 3,
            color: 0xffffff,
            size: 1
        };
        if (i.propertis) {
            properties = typeof (i.propertis) == 'string' ? JSON.parse(i.propertis) : i.propertis;
        }
        obj.stime = i.playat;
        obj.size = sizeList[properties.size];
        obj.color = properties.color & 0xffffff;
        obj.mode = modeList[properties.pos];
        obj.position = 'absolute';
        obj.dbid = i.id;
        obj.hash = i.uid + '';
        obj.border = false;
        obj.text = i.content;
        abpinst.cmManager.insert(obj);
    }
    shield.shield();
}

let fetchedPage = [];

function fetchComment(m) {
    if (fetchedPage[m]) return;
    fetchedPage[m] = true;
    fetch('http://service.danmu.youku.com/list?mat=' + m + '&mcount=1&ct=1001&iid=' + iid, {
        method: 'GET',
        credentials: 'include',
        cache: 'no-cache'
    }).then(r => {
        r.json().then(ykCmtParser);
    }).catch(() => {
        if (abpinst.cmManager.display)
            abpinst.createPopup(_t('fetchCommentErr'), 1e3);
    });
}

function chkCmtTime() {
    fetchComment(((this.currentTime + 30) / 60) | 0);
}

function chkSeekCmtTime() {
    fetchComment((this.currentTime / 60) | 0);
}

const DANMU_POST_SERCET = "Ef9/4e4d^@g9a2M3g";

function sendComment(e) {
    if (uid == '')
        return false;
    let form = {}, post = [];
    form.iid = iid;
    form.type = 1;
    form.ouid = uid;
    form.ver = 1;
    form.aid = 0;
    form.content = e.detail.message;
    form.time = Date.now() / 1e3 | 0;
    form.lid = 0;
    form.ct = 1001;
    form.uid = uid;
    let mode;
    for (mode in modeList) {
        if (modeList[mode] == e.detail.mode)
            break;
    }
    form.propertis = JSON.stringify({
        pos: mode,
        size: sizeList.indexOf(e.detail.fontsize),
        color: e.detail.color,
        effect: 0
    });
    form.cid = categoryID;
    form.playat = e.detail.playTime * 1e3 | 0;
    form.sign = CryptoJS.MD5(DANMU_POST_SERCET + form.time + uid + iid + form.content).toString();

    for (let key in form) {
        post.push(key + '=' + encodeURIComponent(form[key]));
    }
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    fetch('http://service.danmu.youku.com/add?t=' + Date.now(), {
        method: 'POST',
        headers: headers,
        body: post.join('&'),
        credentials: 'include',
        cache: 'no-cache'
    }).then(function (r) {
        r.json().then(function (json) {
            if (json.code != 1) {
                abpinst.createPopup(_t('postCommentFail') + '<br>' + JSON.stringify(json), 3e3);
            }
        });
    }).catch(function (e) {
        abpinst.createPopup(_t('postCommentFail') + '<br>' + e.message, 3e3);
    });
}

window.changeSrc = function (e, t, force) {
    let div = document.getElementById('info-box');
    if ((abpinst == undefined || (currentSrc == t)) && !force)
        return false;
    if (div.style.opacity == 0) {
        div.style.opacity = 1;
    }
    abpinst.playerUnit.querySelector('.BiliPlus-Scale-Menu .Video-Defination div.on').className = '';
    abpinst.playerUnit.querySelector('.BiliPlus-Scale-Menu .Video-Defination div[name=' + t + ']').className = 'on';
    abpinst.video.pause();
    abpinst.inited = false;
    if (srcUrl[t] != undefined) {
        div.childNodes[0].childNodes[0].textContent = ABP.Strings.switching;
        if (!dots.running)
            dots.runTimer();
        if (abpinst.lastTime == undefined)
            abpinst.lastTime = abpinst.video.currentTime;
        if (abpinst.lastSpeed == undefined)
            abpinst.lastSpeed = abpinst.video.playbackRate;
        abpinst.video.dispatchEvent(new CustomEvent('autoplay'));
        if (!force) {
            let setPrefer = t == highestType ? '' : t;
            localStorage.YHP_PreferedType = setPrefer;
        }
        flvparam(t);
    }
};

function reloadSegment() {
    let io = this._transmuxer._controller._ioctl;
    clearInterval(this._progressChecker);
    this._progressChecker = null;
    io.pause();
    io.resume();
}
window.overallBitrate = 0;
let self = window;
let createPlayer = function (e) {
    if (self.flvplayer != undefined) {
        self.flvplayer.unload();
        self.flvplayer.destroy();
        delete self.flvplayer;
    }
    if (e.detail == null)
        return false;
    self.flvplayer = flvjs.createPlayer(e.detail.src, e.detail.option);
    self.flvplayer.on('error', load_fail);
    self.flvplayer.attachMediaElement(document.querySelector('video'));
    self.flvplayer.load();
    self.flvplayer.reloadSegment = reloadSegment;
};

function hex2string(hexStr, prefix = '\\x') {
    let str = '';
    let charLenght = prefix.length + 2;
    if (hexStr.length % charLenght !== 0) {
        throw `不是合法的hex字符串: ${hexStr}, ${prefix}`;
    }
    for (let i = 0; i < hexStr.length; i += charLenght) {
        str += String.fromCharCode(parseInt(hexStr.substr(i + prefix.length, 2), 16));
    }
    return str;
}

function parseM3U8(m3u8_text) {
    let lines = m3u8_text.split('\n');
    let m3u8 = {
        segments: [],
        version: 0,
        targetDuration: 0,
        totalDuration: 0,
    };
    let newSegment = function () {
        let s = {
            duration: 0,
            uri: '',
        };
        m3u8.segments.push(s);
        return s;
    };
    let segment = newSegment();
    for (let line of lines) {
        let group;
        if ((group = line.match(/#EXT-X-VERSION:(\d+)/))) {
            m3u8.version = group[1];
        } else if ((group = line.match(/#EXTINF:([0-9.]+),/))) {
            let duration = Math.round(+group[1] * 1000);
            segment.duration += duration;
            m3u8.totalDuration += duration;
        } else if ((group = line.match(/https?:\/\/.*/))) {
            if (!segment.uri) { // 同一个片段中的uri, 除了ts_xxx参数不同, 其他部分都是相同的, 故只要添加一次就行了
                segment.uri = group[0].replace(/&(ts_start|ts_end|ts_seg_no|ts_keyframe)=[\d\.]+/g, '');   // 删掉多余的ts_xxx参数
            }
        } else if ((group = line.match(/#EXT-X-DISCONTINUITY/))) {
            segment = newSegment(); // 新建一个片段
        } else if ((group = line.match(/#EXT-X-TARGETDURATION:([0-9.]+),/))) {
            m3u8.targetDuration = Math.round(+group[1] * 1000);
        }
    }
    return m3u8;
}

let fetchPlaylistDoing = false;
let fetchPlaylistRetryCount = 0;

function fetchPlaylist(select) {
    if (fetchPlaylistDoing) return;

    fetchPlaylistDoing = true;
    let id = location.href.split('?')[0];
    let onEnd = (success) => {
        fetchPlaylistDoing = false; // 结束拉取真实地址
        srcUrl[select].fetch_playlist = !success; // 成功, 则不需要再次拉取
        if (success) {
            fetchPlaylistRetryCount = 0;
            changeSrc('', select, true);// 播放
        } else {
            fetchPlaylistRetryCount++;
            if (fetchPlaylistRetryCount < 3) {
                // 三秒后重试 
                setTimeout(() => fetchPlaylist(select), 3e3);
            }
        }
    };
    fuck_youku.fetchPromise({ url: id, select: select })
        .then(result => {
            console.log('fetchPlaylist result:', srcUrl[select]);
            onEnd(true);
        })
        .catch(error => {
            console.log('fetchPlaylist error:', error);
            onEnd(false);
        });
}

function fillWithM3u8(select) {
    if (!srcUrl[select].playlist_url) {
        if (fetchedCount >= 10) {
            return false;
        }
        console.warn('无可用地址，重新获取');
        fetchSrc(tempPwd);
        return true;
    }
    console.warn('http cdn地址无效，尝试m3u8');
    fetch(srcUrl[select].playlist_url, {
        method: 'GET',
        credentials: 'include',
        cache: 'no-cache'
    }).then(function (r) {
        r.text().then(function (playlist) {
            //匹配m3u8的地址
            let arr = [], matched = {};
            playlist.replace(/(http[^?]+)[^\n\r]+/g, function (url, uri) {
                if (arr.indexOf(uri) == -1) {
                    arr.push(uri);
                    matched[uri] = url;
                }
                return '';
            });
            if (arr.length === 0) {
                abpinst.removePopup();
                abpinst.createPopup(_t('switchErr'), 3e3);
                abpinst.video.dispatchEvent(new Event('progress'));
                return;
            }
            //部分cdn识别处理
            for (let i in arr) {
                delete srcUrl[select].segments[i].redirectedURL;
                srcUrl[select].segments[i].backup_url.push(matched[arr[i]].replace(/http:\/\/([\d\.]+?)\//, function (s) {
                    return s + 'youku/';
                }).replace(/&(ts_start|ts_end|ts_seg_no|ts_keyframe)=[\d\.]+/g, ''));
            }
            //重新创建播放器
            srcUrl[select].fetchM3U8 = false;
            reloadBackup();
        });
    });
    delete srcUrl[select].playlist_url;
    return true;
}

function reloadBackup() {
    let currentSegmentIndex = flvplayer._transmuxer._controller._currentSegmentIndex,
        currentSegment = flvplayer._mediaDataSource.segments[currentSegmentIndex];
    if (currentSegment.backup_url.length) {
        currentSegment.url = currentSegment.backup_url.shift();
        console.log('load backup url for segment', currentSegmentIndex);
        if (abpinst.video.buffered.length == 0 && abpinst.lastTime == undefined) {
            flvplayer._transmuxer._controller._pendingSeekTime = (abpinst.video.currentTime * 1e3) | 0;
        }
        flvplayer._transmuxer._controller._internalAbort();
        flvplayer._transmuxer._controller._enableStatisticsReporter();
        flvplayer._transmuxer._controller._loadSegment(currentSegmentIndex);
        return true;
    }
    return false;
}

let load_fail = function (type, info, detail) {
    if (type == 'NetworkError' && info == 'HttpStatusCodeInvalid' && detail.code == 403) {
        if (reloadBackup())
            return;
        if (fillWithM3u8(currentSrc))
            return;
    }
    createPopup({
        content: [_('p', { style: { fontSize: '16px' } }, [_('text', _t('playErr'))]), _('div', { style: { whiteSpace: 'pre-wrap' } }, [_('text', JSON.stringify({
            url: location.href,
            playing_quality: currentSrc,
            type,
            info,
            detail
        }, null, '  '))])],
        showConfirm: false
    });
    let dropTo = typeDropMap[currentSrc];
    if (srcUrl[dropTo] == undefined) {
        //不存在降级清晰度
        let div = _('div', {
            style: {
                width: '100%',
                height: '100%',
                textAlign: 'center',
                background: 'rgba(0,0,0,0.8)',
                position: 'absolute',
                color: '#FFF'
            }
        }, [_('div', {
            style: {
                position: 'relative',
                top: '50%'
            }
        }, [_('div', {
            style: {
                position: 'relative',
                fontSize: '16px',
                lineHeight: '16px',
                top: '-8px'
            }
        }, [_('text', _t('loadErr'))])])]);
        document.querySelector('.ABP-Video').insertBefore(div, document.querySelector('.ABP-Video>:first-child'));
        document.getElementById('info-box').remove();
    } else {
        abpinst.createPopup(knownTypes[currentSrc] + _t('playErrPop') + knownTypes[dropTo], 3e3);
        changeSrc('', dropTo, true);
    }
};
let flvparam = function (select) {
    currentSrc = select;
    if (srcUrl[select].fetch_playlist) {
        fetchPlaylist(select);
        return;
    } else if (srcUrl[select].fetchM3U8) {
        //rtmp视频流，使用m3u8地址播放
        fillWithM3u8(select);
        changeSrc('', select, true);
        return;
    }
    createPlayer({ detail: { src: srcUrl[select], option: { seekType: 'range', reuseRedirectedURL: true } } });
    if (srcUrl[select].partial) {
        setTimeout(function () {
            abpinst.createPopup(_t('partialAvailable'), 3e3);
        }, 4e3);
    }
    if (srcUrl[select].segments) {
        let totalSize = 0;
        srcUrl[select].segments.forEach(function (i) {
            totalSize += i.filesize;
        });
        window.overallBitrate = totalSize / srcUrl.duration * 8;
    } else {
        window.overallBitrate = srcUrl[select].filesize / srcUrl.duration * 8;
    }
};
let ABPConfig, official_html5;
if (localStorage.YHP_PlayerSettings != undefined) {
    saveStorage({ PlayerSettings: JSON.parse(localStorage.YHP_PlayerSettings) });
    delete localStorage.YHP_PlayerSettings;
}

function chkInit() {
    readStorage(['PlayerSettings', 'official_html5'], function (item) {
        item = Object.assign({ official_html5: false, PlayerSettings: {} }, item);
        ABPConfig = item.PlayerSettings;
        official_html5 = item.official_html5;
        init();
    });
}

let tempEvent, tempEventType;

function eventPasser() {
    switch (tempEventType) {
        case 'keydown':
            if (tempEvent.initKeyboardEvent) {
                tempEvent.initKeyboardEvent('keydown', true, true, tempEvent.view, tempEvent.char, tempEvent.key, tempEvent.location, null, tempEvent.repeat);
            }
            break;
    }
    abpinst.playerUnit.dispatchEvent(tempEvent);
    tempEvent = null;
    tempEventType = '';
}

function init() {
    chrome.runtime.sendMessage({ icon: true, state: 'playing' });

    window.cid = vid;
    let player = document.querySelector(objID), container;
    if (player.id === 'ykPlayer') {
        //h5播放器
        if (official_html5) {
            //启用官方，停止替换
            document.cookie = 'vgray=1; domain=youku.com; max-age=604800; path=/';
            return;
        }
        container = player.parentNode.parentNode.parentNode;
        document.head.appendChild(_('script', {}, [_('text', 'ykPlyr.remove()')])).remove();
        container = container.appendChild(_('div', { className: 'player', id: 'player' }));
    } else {
        //flash播放器
        container = player.parentNode;
        player.remove();
        if (domain == 'v.youku.com') {
            //添加还原按钮
            document.querySelector('#module-interact').appendChild(_('div', { className: 'fn-phone-see' }, [
                _('div', {
                    className: 'fn', event: {
                        click: function () {
                            if (disabled)
                                return;
                            disabled = true;
                            if (self.flvplayer && self.flvplayer.destroy) {
                                self.flvplayer.destroy();
                                self.flvplayer = {};
                            }
                            abpinst.playerUnit.style.display = 'none';
                            container.appendChild(player);
                            document.body.className = document.body.className.replace('danmuon', 'danmuoff');
                            this.parentNode.remove();
                            document.body.removeAttribute('YHP_theme');
                        }
                    }
                }, [_('a', { className: 'label', href: 'javascript:void(0);' }, [
                    _('text', _t('restoreFlash'))
                ])])
            ]));
        }
    }

    container.style.overflow = 'hidden';
    let video = container.appendChild(_('video'));
    window.flvplayer = {
        unload: function () {
        }, destroy: function () {
        }
    };
    resizeSensor(video.parentNode, function () {
        window.dispatchEvent(new Event('resize'));
    });
    abpinst = ABP.create(video.parentNode, {
        src: {
            playlist: [{
                video: video
            }]
        },
        width: '100%',
        height: '100%',
        config: ABPConfig,
        mobile: isMobile()
    });
    dots.init({
        id: 'dots',
        width: '100%',
        height: '100%',
        r: 16,
        thick: 4
    });
    dots.runTimer();

    window.addEventListener('keydown', function (e) {
        if (!abpinst.playerUnit.contains(e.target) && ['input', 'textarea'].indexOf(e.target.nodeName.toLowerCase()) == -1) {
            switch (e.keyCode) {
                case 27:
                case 32:
                case 37:
                case 39:
                case 38:
                case 40:
                    e.preventDefault();
                    tempEvent = e;
                    tempEventType = 'keydown';
                    setTimeout(eventPasser, 0);
                    break;
            }
        }
    });
    if (domain == 'v.youku.com')
        document.head.appendChild(_('script', {}, [_('text', 'ykPlyr.PlayerSeek=function(e){document.querySelector("video").currentTime=e}')]));

    let savedPassword = JSON.parse(localStorage.YHP_SavedPassword || '{}');
    let password;
    if (savedPassword[vid])
        password = '&password=' + savedPassword[vid];
    fetchSrc(password);

    abpinst.video.addEventListener('seeking', chkSeekCmtTime);
    abpinst.video.addEventListener('timeupdate', chkCmtTime);
    abpinst.playerUnit.addEventListener('themeChange', function () {
        document.body.setAttribute('YHP_theme', this.getAttribute('theme'));
    });
    document.body.setAttribute('YHP_theme', abpinst.playerUnit.getAttribute('theme'));
    let disabled = false;
    let playerHeight = function () {
        !disabled && (document.body.className = document.body.className.replace('danmuoff', 'danmuon'));
    };
    setInterval(playerHeight, 1e3);
    playerHeight();
    if (domain == 'v.youku.com') {
        let playarea = document.getElementById('playBox') || document.getElementById('module_basic_playarea'),
            isMini = false;
        window.addEventListener('scroll', function () {
            let box = playarea.getBoundingClientRect();
            if ((box.bottom < 0) && !isMini) {
                isMini = true;
                abpinst.playerUnit.classList.add('ABP-Mini');
                window.dispatchEvent(new Event('resize'));
            } else if ((box.bottom > 0) && isMini) {
                isMini = false;
                abpinst.playerUnit.classList.remove('ABP-Mini');
                window.dispatchEvent(new Event('resize'));
            }
        });
    }
}

(function () {
    if (vid === null)
        return;
    vid = vid[1];
    let noticeWidth = Math.min(500, innerWidth - 40);
    document.head.appendChild(_('style', {}, [_('text', `#YHP_Notice{
position:fixed;left:0;right:0;top:0;height:0;z-index:100001;transition:.5s;cursor:default
}
.YHP_down_banner{
margin:2px;padding:2px;color:#FFFFFF;font-size:13px;font-weight:bold;background-color:green
}
.YHP_down_btn{
margin:2px;padding:4px;color:#1E90FF;font-size:14px;font-weight:bold;border:#1E90FF 2px solid;display:inline-block;border-radius:5px
}
@keyframes pop-iframe-in{0%{opacity:0;transform:scale(.7);}100%{opacity:1;transform:scale(1)}}
@keyframes pop-iframe-out{0%{opacity:1;transform:scale(1);}100%{opacity:0;transform:scale(.7)}}
#YHP_Notice>div{
position:absolute;bottom:0;left:0;right:0;font-size:15px
}
#YHP_Notice>div>div{
    border:1px #AAA solid;width:${noticeWidth}px;margin:0 auto;padding:20px 10px 5px;background:#EFEFF4;color:#000;border-radius:5px;box-shadow:0 0 5px -2px
}
#YHP_Notice>div>div *{
    margin:5px 0;
}
#YHP_Notice input[type=text]{
    border: none;border-bottom: 1px solid #AAA;width: 60%;background: transparent
}
#YHP_Notice input[type=text]:active{
    border-bottom-color:#4285f4
}
#YHP_Notice input[type=button] {
	border-radius: 2px;
	border: #adadad 1px solid;
	padding: 3px;
	margin: 0 5px;
    width:50px
}
#YHP_Notice input[type=button]:hover {
	background: #FFF;
}
#YHP_Notice input[type=button]:active {
	background: #CCC;
}
body.w1080.danmuon[yhp_theme] .playArea .player{
    height:460px;
}
body.w1080[yhp_theme] .listBox .listArea{
    height:512px;
}
body.w1300.danmuon[yhp_theme] .playArea .player{
    height:584px;
}
body.w1300[yhp_theme] .listBox .listArea{
    height:636px;
}
body[yhp_theme] .playBox_thx, body.danmuon[yhp_theme] .playBox_thx .playArea .player,body.danmuon[yhp_theme] .expandBox .expandCont,body.danmuon[yhp_theme] .moveright .listArea, body.danmuon[yhp_theme] .moveleft .listArea{
    height:658px;
}
body.w1300[yhp_theme] .playBox_thx, body.w1300.danmuon[yhp_theme] .playBox_thx .playArea .player, body.w1300.danmuon[yhp_theme] .expandBox .expandCont, body.w1300.danmuon[yhp_theme] .moveright .listArea, body.w1300.danmuon[yhp_theme] .moveleft .listArea{
    height:781px;
}

body.w1080.danmuon[yhp_theme="YouTube"] .playArea .player{
    height:416px;
}
body.w1080[yhp_theme="YouTube"] .listBox .listArea{
    height:468px;
}
body.w1300.danmuon[yhp_theme="YouTube"] .playArea .player{
    height:540px;
}
body.w1300[yhp_theme="YouTube"] .listBox .listArea{
    height:592px;
}
body[yhp_theme="YouTube"] .playBox_thx, body.danmuon[yhp_theme="YouTube"] .playBox_thx .playArea .player,body.danmuon[yhp_theme="YouTube"] .expandBox .expandCont,body.danmuon[yhp_theme="YouTube"] .moveright .listArea, body.danmuon[yhp_theme="YouTube"] .moveleft .listArea{
    height:614px;
}
body.w1300[yhp_theme="YouTube"] .playBox_thx, body.w1300.danmuon[yhp_theme="YouTube"] .playBox_thx .playArea .player, body.w1300.danmuon[yhp_theme="YouTube"] .expandBox .expandCont, body.w1300.danmuon[yhp_theme="YouTube"] .moveright .listArea, body.w1300.danmuon[yhp_theme="YouTube"] .moveleft .listArea{
    height:737px;
}
.expandBox .expandCont a.expandlink .txt{
    padding-top:300px;
}`)]));
    if (domain == 'v.youku.com')
        document.head.appendChild(_('style', {}, [_('text', `.ABP-Mini {
    position: fixed !important;
    width: 360px !important;
    height: 225px !important;
    margin: 0 0 0 980px;
    background: transparent;
    bottom: 60px;
}
.ABP-Mini[theme="YouTube"] {
    height: 202px !important;
}
@media screen and (max-width:1359px){.ABP-Mini{
    margin: 0 0 0 760px;
}}`)]));
    flvjs.LoggingControl.enableVerbose = false;
    flvjs.LoggingControl.enableInfo = false;
    flvjs.LoggingControl.enableDebug = false;
    if (getCookie('cna') == '') {
        chrome.runtime.sendMessage('cna', function (r) {
            let cna = r.match(/goldlog\.Etag="([^"]+)"/);
            cna !== null && (
                document.cookie = 'cna=' + cna[1] + '; domain=youku.com; max-age=604800; path=/',
                location.reload()
            );
        });
        return;
    }
    //播放器已加载脚本才可能运行
    if (domain == 'v.youku.com') {
        chkInit();
    } else if (domain == 'player.youku.com') {
        parent !== window && (parent.postMessage('YHP_CrossFrame_Fullscreen_init', '*'));
        let container = document.querySelector(objID);
        if (getCookie('cna') == '') {
            chrome.runtime.sendMessage('cna', function (r) {
                let cna = r.match(/goldlog\.Etag="([^"]+)"/);
                cna !== null && (
                    document.cookie = 'cna=' + cna[1] + '; domain=youku.com; max-age=604800; path=/',
                    location.reload()
                );
            });
            return;
        }
        container = container.parentNode;
        container.firstChild.style.display = 'none';
        let div = container.appendChild(_('div', {
            style: {
                height: '100%',
                width: '100%',
                cursor: 'pointer',
            }
        }));
        let fetchInfoSuccess = false;
        getAuthParam().then(function (auth) {
            fetch(location.protocol + '//ups.youku.com/ups/get.json?client_ip=192.168.1.2&utid=' + encodeURIComponent(getCookie('cna')) + '&client_ts=' + Date.now() + auth + '&vid=' + vid, {
                method: 'GET',
                credentials: 'include',
                cache: 'no-cache',
                referrer: location.href
            }).then(function (r) {
                r.json().then(fetchInfoThen);
            }).catch(function (e) {
                createPopup({
                    content: [_('p', { style: { fontSize: '16px' } }, [_('text', _t('fetchInfoErr'))]), _('text', e.message)],
                    showConfirm: false
                });
            });
        });

        function fetchInfoThen(json) {
            if (!json.data.video) {
                createPopup({
                    content: [_('p', { style: { fontSize: '16px' } }, [_('text', _t('fetchInfoErr'))]), _('text', JSON.stringify(json.data.error))],
                    showConfirm: false
                });
                return;
            }
            let img = div.appendChild(_('div', {
                style: {
                    backgroundImage: 'url(' + json.data.video.logo + ')',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% auto',
                    filter: 'blur(5px)',
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                }
            }));
            let info = div.appendChild(_('a', {
                target: '_blank', href: 'http://v.youku.com/v_show/id_' + vid + '.html', style: {
                    display: 'flex',
                    flexDirection: 'column',
                    lineHeight: '30px',
                    height: '60px',
                    width: '100%',
                    position: 'relative',
                    top: 'calc(50% - 40px)',
                    color: '#EEE',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    background: 'linear-gradient(to bottom,transparent,rgba(0,0,0,.7) 10px,rgba(0,0,0,.7) 70px,transparent)',
                    padding: '10px 0',
                    textDecoration: 'none'
                }, event: {
                    click: function (e) {
                        e.stopPropagation();
                    }
                }
            }));

            let title = info.appendChild(_('div', {
                style: {
                    flex: 1,
                    height: '30px',
                    textOverflow: 'ellipsis',
                    fontSize: '20px',
                    overflow: 'hidden'
                }
            }, [_('text', json.data.video.title)]));

            let uploader = info.appendChild(_('div', {
                style: {
                    flex: 1,
                    height: '30px',
                    textOverflow: 'ellipsis',
                    color: '#AAA',
                    overflow: 'hidden'
                }
            }, [_('text', _t('uploader') + json.data.video.username)]));

            div.addEventListener('click', function () {
                chrome.runtime.sendMessage({ icon: true, state: 'pending-dec' });
                div.remove();
                chkInit();
            });
            chrome.runtime.sendMessage({ icon: true, state: 'pending' });
        }
    }
})();
window.crc_engine = () => {
    return '';
};
null;