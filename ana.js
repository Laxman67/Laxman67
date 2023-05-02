(function (e) {
  function a(a) {
    for (
      var n, i, l = a[0], s = a[1], m = a[2], u = 0, c = [];
      u < l.length;
      u++
    )
      (i = l[u]),
        Object.prototype.hasOwnProperty.call(o, i) && o[i] && c.push(o[i][0]),
        (o[i] = 0);
    for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
    d && d(a);
    while (c.length) c.shift()();
    return r.push.apply(r, m || []), t();
  }
  function t() {
    for (var e, a = 0; a < r.length; a++) {
      for (var t = r[a], n = !0, i = 1; i < t.length; i++) {
        var l = t[i];
        0 !== o[l] && (n = !1);
      }
      n && (r.splice(a--, 1), (e = s((s.s = t[0]))));
    }
    return e;
  }
  var n = {},
    i = { app: 0 },
    o = { app: 0 },
    r = [];
  function l(e) {
    return (
      s.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-009b4c4c": "d34355d9",
        "chunk-01c025bd": "21235c9e",
        "chunk-0258b2a7": "c412127d",
        "chunk-02d640c5": "71e6fd85",
        "chunk-04d9e7e8": "6c6b85ed",
        "chunk-050df13e": "b1a2fdd3",
        "chunk-05d395a8": "8ed99d3d",
        "chunk-076af0c5": "f7d0d9f1",
        "chunk-085e8808": "f6b21e29",
        "chunk-0984719c": "fa7d7bcd",
        "chunk-0b09369e": "fd33b8c8",
        "chunk-0b15e882": "4b29174a",
        "chunk-0c41b112": "05929594",
        "chunk-0cd68ae6": "4619296b",
        "chunk-0db7c1f6": "529606d6",
        "chunk-0e10c9c3": "218169b6",
        "chunk-0ecd09c6": "1f25ddb9",
        "chunk-0efec584": "04254457",
        "chunk-0fd8d9ae": "46c53472",
        "chunk-145d4a1e": "80a8a48c",
        "chunk-16f496dc": "eecab9e1",
        "chunk-1d9dbe7b": "c2f8b8e6",
        "chunk-200eed29": "e443074b",
        "chunk-23008c6a": "3430798f",
        "chunk-25e66eaa": "97d4342d",
        "chunk-27122907": "44a28a58",
        "chunk-278d59ee": "c9883313",
        "chunk-2b3f542c": "cf37e841",
        "chunk-2c48d9e6": "cb96f480",
        "chunk-2c510426": "7e0f211d",
        "chunk-2d0c9b56": "806caabb",
        "chunk-2d123fa7": "fdaf5cf1",
        "chunk-2d21d0c2": "2bf78577",
        "chunk-2d216257": "3986ae5c",
        "chunk-21c81672": "3155757f",
        "chunk-22328081": "baa02a96",
        "chunk-45e4acaa": "695a67a2",
        "chunk-467e3165": "f4a900f2",
        "chunk-66d5b656": "3dec05ee",
        "chunk-2de9240a": "72e579ae",
        "chunk-2e1544f7": "2827b66e",
        "chunk-30bd42b6": "74682e45",
        "chunk-3315d54e": "4743a3c8",
        "chunk-3334e104": "e85930f9",
        "chunk-339c81a2": "90817fb3",
        "chunk-3484bcc5": "65703ddb",
        "chunk-351dfe5b": "c55691aa",
        "chunk-38251dc0": "efdaf8d0",
        "chunk-3cc70fec": "3c0e565a",
        "chunk-3fcf4ae6": "f0c41696",
        "chunk-41cc83f4": "9b69aee2",
        "chunk-422c3438": "cab47350",
        "chunk-44abccc0": "3bf2f7e8",
        "chunk-44d5df02": "1ab9cde4",
        "chunk-461a1710": "1cfaa8ad",
        "chunk-495c0a68": "84a6e091",
        "chunk-4cc5ff42": "22fd6d9c",
        "chunk-4db0772a": "764bb1a0",
        "chunk-4eb90e66": "8e626b5f",
        "chunk-51fd0af3": "64f35ade",
        "chunk-548e69f3": "723efdf4",
        "chunk-59419552": "32c3f628",
        "chunk-5d17b1cb": "1248fee1",
        "chunk-5e578388": "5178afd9",
        "chunk-5fadbd2a": "efa64ce4",
        "chunk-61d0c116": "7dbaf963",
        "chunk-63bb93b0": "6fcbb175",
        "chunk-644ff02f": "4533daea",
        "chunk-64cdf166": "7b5b8c39",
        "chunk-6712d1aa": "e8361a34",
        "chunk-685aa3e6": "9aea0cd8",
        "chunk-697f06ed": "fba13163",
        "chunk-6b43bd10": "5c6b18c0",
        "chunk-6f3b8caf": "bd83bd41",
        "chunk-7293d7fb": "8470a510",
        "chunk-72f01a9a": "02795636",
        "chunk-738292a9": "31e609ca",
        "chunk-769894e4": "0856b5da",
        "chunk-76d87515": "ef31f926",
        "chunk-7a3388a9": "36aec171",
        "chunk-7a43413b": "1f7fb664",
        "chunk-7ad1fcf0": "00f57888",
        "chunk-862854c0": "74857e9b",
        "chunk-90f8a4d8": "9d6640de",
        "chunk-943f7cea": "6ef1033a",
        "chunk-9ca7d0dc": "1e506cf2",
        "chunk-0b0fb3cd": "7f4c0db0",
        "chunk-0f044119": "c5b5093b",
        "chunk-1090cd55": "a73a26a5",
        "chunk-0542a560": "2d641e36",
        "chunk-d78f1182": "6f78df07",
        "chunk-5fcdc3a0": "0a6caf0b",
        "chunk-264008c4": "39fa93bb",
        "chunk-4e2c0e16": "c54da439",
        "chunk-71dcadf2": "b0a7fb46",
        "chunk-c4188650": "df188e6c",
        "chunk-4f411f1c": "5f9ddddd",
        "chunk-a718bce8": "6a876b86",
        "chunk-a845ec12": "a55fd4e4",
        "chunk-ab61d66a": "3cd9e314",
        "chunk-ae1ed794": "b080bd3e",
        "chunk-afb3fabc": "06d0bb94",
        "chunk-b198f854": "5c1acce1",
        "chunk-b3a478b0": "9c489842",
        "chunk-b4b2c9bc": "9fbdcca8",
        "chunk-b70405a6": "36777f9a",
        "chunk-bccf29a4": "0bb20685",
        "chunk-c0d15508": "fb74ce03",
        "chunk-53841b4e": "de6c9d46",
        "chunk-75071d1a": "31184d03",
        "chunk-c7d4e1ca": "b4685d07",
        "chunk-cc5799d2": "bcce2dc7",
        "chunk-ccd4fcae": "42dc55c8",
        "chunk-db8720ca": "42385850",
        "chunk-dbf579d4": "963613ba",
        "chunk-e635d700": "9798edce",
        "chunk-f778548c": "539a3404",
        "chunk-faa8abe2": "4c967c64",
        "chunk-fd347064": "4506e9b4",
        "chunk-fdbeb1dc": "3eafda9e",
      }[e] +
      ".js"
    );
  }
  function s(a) {
    if (n[a]) return n[a].exports;
    var t = (n[a] = { i: a, l: !1, exports: {} });
    return e[a].call(t.exports, t, t.exports, s), (t.l = !0), t.exports;
  }
  (s.e = function (e) {
    var a = [],
      t = {
        "chunk-009b4c4c": 1,
        "chunk-01c025bd": 1,
        "chunk-0258b2a7": 1,
        "chunk-02d640c5": 1,
        "chunk-04d9e7e8": 1,
        "chunk-050df13e": 1,
        "chunk-05d395a8": 1,
        "chunk-076af0c5": 1,
        "chunk-085e8808": 1,
        "chunk-0984719c": 1,
        "chunk-0b09369e": 1,
        "chunk-0b15e882": 1,
        "chunk-0c41b112": 1,
        "chunk-0cd68ae6": 1,
        "chunk-0db7c1f6": 1,
        "chunk-0e10c9c3": 1,
        "chunk-0ecd09c6": 1,
        "chunk-0efec584": 1,
        "chunk-0fd8d9ae": 1,
        "chunk-145d4a1e": 1,
        "chunk-16f496dc": 1,
        "chunk-1d9dbe7b": 1,
        "chunk-200eed29": 1,
        "chunk-23008c6a": 1,
        "chunk-25e66eaa": 1,
        "chunk-27122907": 1,
        "chunk-278d59ee": 1,
        "chunk-2b3f542c": 1,
        "chunk-2c48d9e6": 1,
        "chunk-2c510426": 1,
        "chunk-2d123fa7": 1,
        "chunk-21c81672": 1,
        "chunk-22328081": 1,
        "chunk-45e4acaa": 1,
        "chunk-467e3165": 1,
        "chunk-66d5b656": 1,
        "chunk-2de9240a": 1,
        "chunk-2e1544f7": 1,
        "chunk-30bd42b6": 1,
        "chunk-3315d54e": 1,
        "chunk-3334e104": 1,
        "chunk-339c81a2": 1,
        "chunk-3484bcc5": 1,
        "chunk-351dfe5b": 1,
        "chunk-38251dc0": 1,
        "chunk-3cc70fec": 1,
        "chunk-3fcf4ae6": 1,
        "chunk-41cc83f4": 1,
        "chunk-422c3438": 1,
        "chunk-44abccc0": 1,
        "chunk-44d5df02": 1,
        "chunk-461a1710": 1,
        "chunk-495c0a68": 1,
        "chunk-4cc5ff42": 1,
        "chunk-4db0772a": 1,
        "chunk-4eb90e66": 1,
        "chunk-51fd0af3": 1,
        "chunk-548e69f3": 1,
        "chunk-59419552": 1,
        "chunk-5d17b1cb": 1,
        "chunk-5e578388": 1,
        "chunk-5fadbd2a": 1,
        "chunk-61d0c116": 1,
        "chunk-63bb93b0": 1,
        "chunk-644ff02f": 1,
        "chunk-64cdf166": 1,
        "chunk-6712d1aa": 1,
        "chunk-685aa3e6": 1,
        "chunk-697f06ed": 1,
        "chunk-6b43bd10": 1,
        "chunk-6f3b8caf": 1,
        "chunk-7293d7fb": 1,
        "chunk-72f01a9a": 1,
        "chunk-738292a9": 1,
        "chunk-769894e4": 1,
        "chunk-76d87515": 1,
        "chunk-7a3388a9": 1,
        "chunk-7a43413b": 1,
        "chunk-7ad1fcf0": 1,
        "chunk-862854c0": 1,
        "chunk-90f8a4d8": 1,
        "chunk-943f7cea": 1,
        "chunk-9ca7d0dc": 1,
        "chunk-0b0fb3cd": 1,
        "chunk-0f044119": 1,
        "chunk-1090cd55": 1,
        "chunk-0542a560": 1,
        "chunk-d78f1182": 1,
        "chunk-5fcdc3a0": 1,
        "chunk-264008c4": 1,
        "chunk-4e2c0e16": 1,
        "chunk-71dcadf2": 1,
        "chunk-c4188650": 1,
        "chunk-4f411f1c": 1,
        "chunk-a718bce8": 1,
        "chunk-a845ec12": 1,
        "chunk-ab61d66a": 1,
        "chunk-ae1ed794": 1,
        "chunk-afb3fabc": 1,
        "chunk-b3a478b0": 1,
        "chunk-b4b2c9bc": 1,
        "chunk-b70405a6": 1,
        "chunk-bccf29a4": 1,
        "chunk-c0d15508": 1,
        "chunk-53841b4e": 1,
        "chunk-75071d1a": 1,
        "chunk-c7d4e1ca": 1,
        "chunk-cc5799d2": 1,
        "chunk-ccd4fcae": 1,
        "chunk-db8720ca": 1,
        "chunk-dbf579d4": 1,
        "chunk-e635d700": 1,
        "chunk-f778548c": 1,
        "chunk-faa8abe2": 1,
        "chunk-fd347064": 1,
        "chunk-fdbeb1dc": 1,
      };
    i[e]
      ? a.push(i[e])
      : 0 !== i[e] &&
        t[e] &&
        a.push(
          (i[e] = new Promise(function (a, t) {
            for (
              var n =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-009b4c4c": "c36eb105",
                    "chunk-01c025bd": "1667b8ce",
                    "chunk-0258b2a7": "9d0a81cf",
                    "chunk-02d640c5": "16079f26",
                    "chunk-04d9e7e8": "f2872521",
                    "chunk-050df13e": "8c017099",
                    "chunk-05d395a8": "27167ad5",
                    "chunk-076af0c5": "0fa50a67",
                    "chunk-085e8808": "941a9a6f",
                    "chunk-0984719c": "0a735a0c",
                    "chunk-0b09369e": "c66921c5",
                    "chunk-0b15e882": "a59a84b2",
                    "chunk-0c41b112": "151110e3",
                    "chunk-0cd68ae6": "df92961c",
                    "chunk-0db7c1f6": "5739eac5",
                    "chunk-0e10c9c3": "583c8acb",
                    "chunk-0ecd09c6": "87d344f2",
                    "chunk-0efec584": "5b110ebb",
                    "chunk-0fd8d9ae": "1d9debf8",
                    "chunk-145d4a1e": "de5323d4",
                    "chunk-16f496dc": "42e6516c",
                    "chunk-1d9dbe7b": "27674c1a",
                    "chunk-200eed29": "c3b72c61",
                    "chunk-23008c6a": "3e4ed7da",
                    "chunk-25e66eaa": "c71493da",
                    "chunk-27122907": "90238e28",
                    "chunk-278d59ee": "e7249e90",
                    "chunk-2b3f542c": "64d2f89e",
                    "chunk-2c48d9e6": "5807d9e5",
                    "chunk-2c510426": "9caeb1a6",
                    "chunk-2d0c9b56": "31d6cfe0",
                    "chunk-2d123fa7": "7490147a",
                    "chunk-2d21d0c2": "31d6cfe0",
                    "chunk-2d216257": "31d6cfe0",
                    "chunk-21c81672": "6af69aa5",
                    "chunk-22328081": "55e1d68f",
                    "chunk-45e4acaa": "08a21094",
                    "chunk-467e3165": "c548e36c",
                    "chunk-66d5b656": "7b0be418",
                    "chunk-2de9240a": "82eec420",
                    "chunk-2e1544f7": "4ee08851",
                    "chunk-30bd42b6": "d9582775",
                    "chunk-3315d54e": "9f52a246",
                    "chunk-3334e104": "cbcafb9c",
                    "chunk-339c81a2": "1812c088",
                    "chunk-3484bcc5": "30d7756a",
                    "chunk-351dfe5b": "5d055e78",
                    "chunk-38251dc0": "5d14ab44",
                    "chunk-3cc70fec": "2e8de1d9",
                    "chunk-3fcf4ae6": "d7b31243",
                    "chunk-41cc83f4": "2525f03f",
                    "chunk-422c3438": "72ff4de0",
                    "chunk-44abccc0": "3d756849",
                    "chunk-44d5df02": "6d92e0bb",
                    "chunk-461a1710": "e2706d03",
                    "chunk-495c0a68": "d31174e6",
                    "chunk-4cc5ff42": "68955553",
                    "chunk-4db0772a": "3228dac0",
                    "chunk-4eb90e66": "0b2a38a2",
                    "chunk-51fd0af3": "a083b765",
                    "chunk-548e69f3": "bdb86635",
                    "chunk-59419552": "c3be2c4f",
                    "chunk-5d17b1cb": "cfda8ce1",
                    "chunk-5e578388": "2aa8f2ab",
                    "chunk-5fadbd2a": "9529f5b5",
                    "chunk-61d0c116": "ef0e8c84",
                    "chunk-63bb93b0": "cf2f814d",
                    "chunk-644ff02f": "9f48865a",
                    "chunk-64cdf166": "976ed132",
                    "chunk-6712d1aa": "c52ae70d",
                    "chunk-685aa3e6": "70510f63",
                    "chunk-697f06ed": "39a014bf",
                    "chunk-6b43bd10": "5b7d20a2",
                    "chunk-6f3b8caf": "9a65b7df",
                    "chunk-7293d7fb": "cef69bd8",
                    "chunk-72f01a9a": "5a06efac",
                    "chunk-738292a9": "40de55be",
                    "chunk-769894e4": "b6590dc8",
                    "chunk-76d87515": "8f5dfebc",
                    "chunk-7a3388a9": "4c6a7820",
                    "chunk-7a43413b": "eaea0abe",
                    "chunk-7ad1fcf0": "8cc2c21c",
                    "chunk-862854c0": "b259c47f",
                    "chunk-90f8a4d8": "da0c9b1a",
                    "chunk-943f7cea": "a54abc70",
                    "chunk-9ca7d0dc": "0f968705",
                    "chunk-0b0fb3cd": "749f1fec",
                    "chunk-0f044119": "30f65551",
                    "chunk-1090cd55": "2de05b0f",
                    "chunk-0542a560": "af10f11a",
                    "chunk-d78f1182": "94bc825c",
                    "chunk-5fcdc3a0": "4a53a88c",
                    "chunk-264008c4": "a1025a5a",
                    "chunk-4e2c0e16": "bb84cf81",
                    "chunk-71dcadf2": "ec6e09e7",
                    "chunk-c4188650": "92a31d6b",
                    "chunk-4f411f1c": "9addb974",
                    "chunk-a718bce8": "6c66860a",
                    "chunk-a845ec12": "5be6c84b",
                    "chunk-ab61d66a": "1d9f1361",
                    "chunk-ae1ed794": "fff129ce",
                    "chunk-afb3fabc": "df0c381c",
                    "chunk-b198f854": "31d6cfe0",
                    "chunk-b3a478b0": "c6a9ccda",
                    "chunk-b4b2c9bc": "ed6cb6bd",
                    "chunk-b70405a6": "39dca3b3",
                    "chunk-bccf29a4": "67269e63",
                    "chunk-c0d15508": "e8e9c998",
                    "chunk-53841b4e": "d0a138a7",
                    "chunk-75071d1a": "2bc8da4a",
                    "chunk-c7d4e1ca": "7a7a2286",
                    "chunk-cc5799d2": "9e80b6d6",
                    "chunk-ccd4fcae": "88e701d4",
                    "chunk-db8720ca": "1345d0ce",
                    "chunk-dbf579d4": "ed6bd954",
                    "chunk-e635d700": "3bce96ee",
                    "chunk-f778548c": "81d51502",
                    "chunk-faa8abe2": "eb4c7660",
                    "chunk-fd347064": "32543ada",
                    "chunk-fdbeb1dc": "7ee49a04",
                  }[e] +
                  ".css",
                o = s.p + n,
                r = document.getElementsByTagName("link"),
                l = 0;
              l < r.length;
              l++
            ) {
              var m = r[l],
                u = m.getAttribute("data-href") || m.getAttribute("href");
              if ("stylesheet" === m.rel && (u === n || u === o)) return a();
            }
            var c = document.getElementsByTagName("style");
            for (l = 0; l < c.length; l++) {
              (m = c[l]), (u = m.getAttribute("data-href"));
              if (u === n || u === o) return a();
            }
            var d = document.createElement("link");
            (d.rel = "stylesheet"),
              (d.type = "text/css"),
              (d.onload = a),
              (d.onerror = function (a) {
                var n = (a && a.target && a.target.src) || o,
                  r = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + n + ")"
                  );
                (r.code = "CSS_CHUNK_LOAD_FAILED"),
                  (r.request = n),
                  delete i[e],
                  d.parentNode.removeChild(d),
                  t(r);
              }),
              (d.href = o);
            var g = document.getElementsByTagName("head")[0];
            g.appendChild(d);
          }).then(function () {
            i[e] = 0;
          }))
        );
    var n = o[e];
    if (0 !== n)
      if (n) a.push(n[2]);
      else {
        var r = new Promise(function (a, t) {
          n = o[e] = [a, t];
        });
        a.push((n[2] = r));
        var m,
          u = document.createElement("script");
        (u.charset = "utf-8"),
          (u.timeout = 120),
          s.nc && u.setAttribute("nonce", s.nc),
          (u.src = l(e));
        var c = new Error();
        m = function (a) {
          (u.onerror = u.onload = null), clearTimeout(d);
          var t = o[e];
          if (0 !== t) {
            if (t) {
              var n = a && ("load" === a.type ? "missing" : a.type),
                i = a && a.target && a.target.src;
              (c.message =
                "Loading chunk " + e + " failed.\n(" + n + ": " + i + ")"),
                (c.name = "ChunkLoadError"),
                (c.type = n),
                (c.request = i),
                t[1](c);
            }
            o[e] = void 0;
          }
        };
        var d = setTimeout(function () {
          m({ type: "timeout", target: u });
        }, 12e4);
        (u.onerror = u.onload = m), document.head.appendChild(u);
      }
    return Promise.all(a);
  }),
    (s.m = e),
    (s.c = n),
    (s.d = function (e, a, t) {
      s.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
    }),
    (s.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, a) {
      if ((1 & a && (e = s(e)), 8 & a)) return e;
      if (4 & a && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (s.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & a && "string" != typeof e)
      )
        for (var n in e)
          s.d(
            t,
            n,
            function (a) {
              return e[a];
            }.bind(null, n)
          );
      return t;
    }),
    (s.n = function (e) {
      var a =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return s.d(a, "a", a), a;
    }),
    (s.o = function (e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (s.p = ""),
    (s.oe = function (e) {
      throw (console.error(e), e);
    });
  var m = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = m.push.bind(m);
  (m.push = a), (m = m.slice());
  for (var c = 0; c < m.length; c++) a(m[c]);
  var d = u;
  r.push([0, "chunk-vendors"]), t();
})({
  0: function (e, a, t) {
    e.exports = t("56d7");
  },
  "02a9": function (e, a, t) {},
  "07ab": function (e, a, t) {},
  "07d4": function (e, a) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAKi0lEQVRoBe1ZW4xVVxlea58zM2eYGWAYYOAMMwULra0VWmrog4noi8ZGjWkLmvqgMZrYqA/YmPjIszXGaI0m5U0bL01fFGr0gTTShNaEAWypCVXKZaBWYCzMmcu57L38vv9fa+99bjPDCCYaF+yz1vrvt3XZe4zp0myAx/ftdFGhgKl90b4x+YQgbo6WXbGvzxR78fSVjLXWFMlRnZ0xSaNu4npd+gIIhGPKGHCUzOjCvLmxYVQ5g45GdUGGtdmKScC5dHMPPOT4BMqIg0p53FUhgsoD0r5b6nfBzMxkWEWLokLRbIa5bDObxuAL/OEkiRvspFUrMxBZC9Pm3j2w+xkxZucjW5oxCFgeML/1bleAOouH8dSYCkXVvnGyxJEwXF+91lkQFIqBkEyc93hGnTPmwnA5KrioSIlFoxoKZnjqopm5e4cIyTSCkWroOXs2SikniU7wO71mWLSQiRZINMaM6buM5JLKuZRXmJhxmkfto/NzTT4LwYp+fH61LFokNKlw+/YV3JmzDRtJCQgpwtlEk04W7nrfo3DsiI00vLSbAWDLMwnkxsZNr8GpPSFZdDCSnGhehKsvKtsTJ94pTq8efjSu1fYkUQwiTZZDWJME80Lsk4n4V80VKivWFuaOSEZB7FzRkJjJowaOHRgLxURyQU1RAxXYqFdNvVo1ca1qGnhKh39jzP4nMAdOHsWTQepbBogMbR955Zjp2bOHIPPeyAaRHHwamLpgJdNEUn2c1FJiwiid5eASJz4RxoD/gINOjQuGJsYwOSzpCCvkAGKbVVuOM/OhZur16o9zqDs3TCtjMRXug7vnkKP+Nhprv2lfn3y2DZ4DdFXg7tk1Vk+qU35rNaxfeXw55mRgaP+GrXd7M0xnbQoqY+PfszZ6Gg/4rImCYPaA2QjbBupf6h74UP+p8Pu2F+0LL8Rhnir457qRixAwTqFqaWYxBQZFGd7TecXEE5e2Yt82e+rV81J3/1g1cA41Nk5rxHIQB4ECwzzxgsI8C5ka0oZvVN+GMi3sRrW6LWUQQTYVKDmAYRoWHyIJFcYwSPGdvNY9RzyQEwNRC0lMY4x4RzHiDaXrZ66n3nPQOHbMzD6+D/gQytBTGXk0XPI7ldu181KCV5u7HJzTa9epUTAg8l7lczR45ZKGCFoq2NsH88I51u2o46IVUi71UFmJr6wsCrkQ4RgZ6uZFq9L8HLlrzoHPH5WgSP4zW0XeoP/OsdbSEra7Bz+61jRuXkDaV3vSQzgav7oEm6CXVOB27X7MxO7FNmHWxthJZR214XKARRXgovoTrNavsSq6tqHSKnv8+Hw3fFcFtR3vP4U1uUvrGgq4qlHrHVuh5157+k9nO+E6Kli4azvuUGZQhLO2fX2LAj9uE1awn7enJ3/VCm/y3R08GFXGJlwc1wd5E5EnRt9o4IYbmxi3XO5bHLfe65CnX+Lk+2mrgtSDmdHRjYmz73Lppzuk31/C1i37jOBhl9/ag3epYGtPIvm7w1wUTA+XJ6ypXshCoicW5xQkCryylMbPU7zsnt5ea69ACXYgvbcgBLMXuLHRdX00DBIKD2vHa7h4N1M63tP8xuhcGeX9qVQBiTS+iC3jK0KDAL3gCR50pHVxZozQB36PR4Jwc3I/pAJ/4MTw1BpnHXC4KTqUI2NMQjzW8fRSnEv0OEXccnjQkB+09EKqzdltmQJUCRmiCAJx26OjZKDwRBQAbr1i0MAnFQ5YAmMsjEItwzDQQY7wwyg2+WU5BlezPPh8AEdYzxeeNEPn3jL9R37bnCePb+fXFzdJezhsWiuEc1bQ6iOHTe/evWJR+OHLacDTenrcyl96+y1gci1UilaGJjlG+FqFk2Xgdy+JJ3HDJz5XhUEO6dp3Q8YdIeGCY0PapG/9KX7oYa0oRpx5iBLlCXmD52ztCrwkVpNrIJn++uHBTZ0agjsUhEYG7zCoNFaePkz1IgpUEsuuswfEc4/SbcVhK6IxoRJZ0rZCmq4eELlUoweMoCaXQrkotTCiQnSI/BIolNKKrhitxcDkCgz9mmtXD6QKsCt9YyVK6EHY0mUdYI4+Wbel3LeU9//HhwjIThEmt6vHZ4lec/Yc3raTbSax3AwvmZ7oOD4WzN0uHUHObXPA7Xz4ESzoX2NZTAThXfppU7BfxP3jcBf8LYH/bQfc/Q89jQg/o8fTLenm+v++efzT37YHD+qudYvsJF+RA+7eDw/F5j3e4D4Jw0VMxJ4HDh5ujXLcol9Ws/ZVUxz4jD157Oqy6HNEt+RAbceOB11iD8PCMTHQG6/HhRqfwdWJ/Dynt8vQXkd5fdaePvFKF4I28LIcmB3f+hR29B85awsw059vWcQplYbyRJDmMxEyAqxmhHAlVrruvzi37Hdw8fxudxLFdHXAbdnSX4ndz6H8sVSpN0yiCn65EYgfMFyJMkPzThBJvMD0bkP1y8qONS+ZkTWfsy+/LGcv+fJN1OYBN9evvydx0e+hcKtEFUqpmBYEhQoK0aZBlAC8v7pndBmP8pNMYUJDr/xch14mxbU1e8n0mk/Yycm/5FGiOgCm1w4fxaXjY90NoELqbI9i4KEszUzOUPUQ8MxgGbfQ0hnlz+gEkP+x9o8orb0BpByYXR0cfB4qn/QWNhkaFJOJ406lQ8f4pYh9kKGOkieDK3/OQG80jW/mV748PSVLs+YX9vWTsNWr4wB/s1mAkL6UgUgq9hfSFM7ok4GK6YyMfUYE5B0UEow7LWxyCT86P6Z8kUeZHAs/5IY3Si8bAHLU7JlTcuFK76O45gGgQniqiMF8jcKEY+xACsOrEraIVDDhJOLLiTQoSEBDw0Q5ro5qHOWoo3JOeHrl5+sx5ah+J0PqC/o1g2KT6u9VZbkLNV9O1GgVRCGWyiHYQTGbClC8TUjAh12Evx8orSgFrThM52GoGkk6OuNlgV75aagFvzrMMRD+f9BPl0mutIIUSM4BXrQpkO+g7EksRkg4qDifBR2rUBiIDNBRu3GTGXjuOdOz9yNefHPHz7fzT30dC+4aZAu3Bgj2SbbwsiumdtLPQDKrHhckixhOpuTlJIC1J3FwRiDC7OsdAFEqQiNT+vKXzNCzi/5xIhU+d+Bbpv6z5z0/5TAr1MX/XidgGAGgRgtzTn/p/F8VLQj8dHIg4FJmDqSOKVdLgYuc/zZcv2aiwbav0U0iwsRVKubGxFYxTgwkwhunQ+9EMB59oBO9mK66dF4cSBcxGRdtOCAkvQ6vXSBkPbPxwwtLbbnGCw8clRdS8vs1JiXKHYPhACz0Eh5xQNcVNwypDApCW74DSp/+hk+AfJdcSeOnREYTcUGD4QyCj7TCMPdrQqMuAVfnSOdb6gBAb0LW/QFxp/uEu5aPuJQhjGIodJFqeSbYUcRJ76BEXlZ/9GawL3UALPsRhz/DCV/cgeTO9A4Z4K7CyLMm9RTWOXc1wm3YAUNJAYYsJaDdH6xKjd1szJmyMfzb59GAvJN99kkDjuCLaPiCKnB+7uATPpzJnB/bkqNrypv6h6b/fibYBpc7t3eM+QBS+hUQfBwUEwjSolvMmBZuZ2EdoJcZebRw1UhLh2BG2tgKNoeL+Nr6h0LBHhqpVFKjhfF/5edfNq9HDyKLdfcAAAAASUVORK5CYII=";
  },
  "09e5": function (e, a, t) {
    e.exports = t.p + "img/icon_sevice.c6d9cc2f.png";
  },
  "0b20": function (e, a, t) {},
  "0cb6": function (e, a, t) {
    "use strict";
    t("9ef9");
  },
  "0e6a": function (e, a, t) {
    "use strict";
    t("02a9");
  },
  "104d": function (e, a, t) {
    e.exports = {
      homepage: {
        loadText: {
          loadMore: "åŠ è½½æ›´å¤š",
          loading: "æ­£åœ¨åŠ è½½...",
          nomore: "æ²¡æœ‰æ›´å¤šäº†",
        },
        loadingText: "è¯·æ±‚ä¸­",
        login: "ç™»å½•",
        numberFormat: "ç”µè¯å·ç æ ¼å¼",
        mobile: "ç”µè¯",
        mobileNumber: "ç”µè¯å·ç ",
        pwd: "å¯†ç ",
        oldpwd: "æ—§å¯†ç ",
        pwds: "ç¡®è®¤å¯†ç ",
        pwdsTip: "å¯†ç ä¸ä¸€è‡´",
        register: "æ³¨å†Œ",
        registerTip: "å·²æœ‰å¸å·ï¼ŒåŽ»ç™»é™† ~",
        forgotPwd: "æ‰¾å›žå¯†ç ",
        customerService: "è”ç³»å®¢æœ",
        resetPwd: "é‡ç½®å¯†ç ",
        verificationCode: "éªŒè¯ç ",
        recommendationCode: "æŽ¨èç ",
        agree: "æˆ‘åŒæ„",
        privacy: "éšç§æ”¿ç­–",
        submit: "æäº¤",
        network: "ç½‘ç»œå¼‚å¸¸",
        tips: "æç¤º",
        remark: "å¤‡æ³¨",
        close: "å…³é—­",
        full: "å…¨å±",
        zoomOut: "ç¼©å°",
        signout: "æ‚¨è¦ç™»å‡ºå—ï¼Ÿ",
        quit: "æƒ³é€€å‡ºè¿™ä¸ªæ¸¸æˆå—ï¼Ÿ",
        enterGame: "ä½ ç¡®å®šè¦è¿›å…¥æ¸¸æˆå—ï¼Ÿ",
        cancel: "å–æ¶ˆ",
        confirm: "ç¡®è®¤",
        success: "æˆåŠŸ",
        cancelled: "å·²å–æ¶ˆ",
        fail: "å¤±è´¥",
        del: "åˆ é™¤",
        copy: "å¤åˆ¶",
        copySuccess: "å¤åˆ¶æˆåŠŸ",
        required: "å¿…å¡«é¡¹",
        pleaseRequired: "è¯·å¡«å†™å¿…å¡«é¡¹",
        passwordError:
          "å¯†ç é•¿åº¦ä¸èƒ½å°äºŽ6ï¼Œå¿…é¡»æ˜¯å­—æ¯å’Œæ•°å­—çš„ç»„åˆ",
        pleaseEmail: "è¯·å¡«å†™æ­£ç¡®çš„é‚®ç®±åœ°å€",
        informationTip: "æ‚¨çš„ç™»å½•ä¿¡æ¯å·²è¿‡æœŸï¼Œè¯·é‡æ–°ç™»å½•!",
        informationTip1: "æ‚¨çš„è´¦å·å·²åœ¨åˆ«å¤„ç™»å½•ï¼Œè¯·åŠæ—¶ä¿®æ”¹å¯†ç !",
        noData: "æš‚æ— å¯ç”¨æ•°æ®",
        presaleRule:
          "ä¸ºä¿æŠ¤å‚ä¸Žé¢„å”®çš„ç”¨æˆ·çš„åˆæ³•æƒç›Šï¼Œç»´æŠ¤é¢„å”®çš„æ­£å¸¸ç»è¥ç§©åºï¼Œæ ¹æ®ç›¸å…³åè®®å’Œå›½å®¶æ³•å¾‹æ³•è§„çš„è§„å®šï¼Œåˆ¶å®šæœ¬è§„åˆ™ã€‚ç¬¬ä¸€ç« å®šä¹‰1.1é¢„å”®å®šä¹‰ï¼šæ˜¯æŒ‡å•†å®¶æä¾›äº§å“æˆ–æœåŠ¡è®¡åˆ’ï¼Œé€šè¿‡é¢„å”®äº§å“å·¥å…·æ”¶é›†æ¶ˆè´¹è€…è®¢å•ï¼Œå¹¶æ ¹æ®äº‹å…ˆçº¦å®šå‘æ¶ˆè´¹è€…æä¾›å•†å“å’Œ/æˆ–æœåŠ¡çš„é”€å”®æ¨¡å¼1.2 é¢„å”®æ¨¡å¼æ˜¯â€œdepo itâ€æ¨¡å¼. â€œDep os itâ€æ˜¯æŒ‡ä»¥å›ºå®šæ•°é‡çš„é¢„å”®å•†å“ä»·æ ¼é¢„å…ˆäº¤ä»˜ã€‚ â€œå­˜æ¬¾â€éª—å±€å‚åŠ å°æ¸¸æˆï¼Œæœ‰æœºä¼šèµ¢å–æ›´å¤šå­˜æ¬¾ã€‚å­˜æ¬¾å¯ä»¥ç›´æŽ¥å…‘æ¢å•†å“ã€‚æŠ¼é‡‘ä¸å¯èµŽå›žã€‚1.3 é¢„å”®äº§å“ï¼šæŒ‡å•†å®¶ä½¿ç”¨é¢„å”®äº§å“å·¥å…·è½¬å‡ºçš„äº§å“ã€‚ä»…åœ¨å•†å“åç§°æˆ–å•†å“è¯¦æƒ…é¡µæ ‡æ³¨é¢„å”®å­—æ ·ï¼Œæœªä½¿ç”¨é¢„å”®å•†å“å·¥å…·çš„å•†å“ä¸å±žäºŽé¢„å”®å•†å“ã€‚ 1.4 é¢„å”®ç³»ç»Ÿï¼šæŒ‡æ”¯æŒå•†å®¶è¿›è¡Œé¢„å”®æœºåž‹é”€å”®çš„ç³»ç»Ÿå•†å“å·¥å…·.1.5 é¢„å”®å•†å“ä»·æ ¼ï¼šæŒ‡é¢„å”®å•†å“çš„é”€å”®ä»·æ ¼ã€‚é¢„å”®å•†å“çš„ä»·æ ¼ç”±ä¸¤éƒ¨åˆ†ç»„æˆï¼šdep os it å’Œå°¾æ¬¾ã€‚",
        more: "æ›´å¤š",
        verificationTip: "æ”¶ä¸åˆ°éªŒè¯ç ï¼Ÿ è¯·è”ç³»å®¢æœ",
        symbolU: "USDT",
        newes: "æœ€æ–°å…¬å‘Š",
        upgraded: "æ´»åŠ¨å‡çº§ä¸­......",
        gameTit: "ä½™é¢å›žæ”¶å¤±è´¥",
        gameLeft: "å†è¯•ä¸€æ¬¡",
        gameRight: "åŽ»æ‰‹åŠ¨å›žæ”¶",
        tab: {
          hot: "çƒ­é—¨",
          lottety: "å½©ç¥¨",
          fishing: "æ•é±¼",
          electronic: "ç”µå­",
          physical: "ä½“è‚²",
          realperson: "çœŸäºº",
          chess: "æ£‹ç‰Œ",
          smallgame: "å°æ¸¸æˆ",
          safe: "ä¿é™©ç®±",
        },
        home: {
          lottetyTitle: "æœ€å¤§çš„å½©ç¥¨æŠ½å¥–",
          recharge: "å……å€¼",
          balance: "ä½™é¢",
          customerService: "å®¢æˆ·æœåŠ¡",
          lottety: "å½©ç¥¨",
          wealth: "ç†è´¢",
          leftTime: "å‰©ä½™æ—¶é—´è´­ä¹°",
          min: "åˆ†é’Ÿ",
          sec: "ç§’",
          newTitle: "æ–°é—»",
          newCenter: "æ–°é—»ä¸­å¿ƒ",
          newDes: "æ–°é—»è¯¦æƒ…",
          wrTime: "ç½‘ç«™è¿è¡Œæ—¶é—´",
          days: "å¤©",
          hours: "å°æ—¶",
          minutes: "åˆ†é’Ÿ",
          seconds: "ç§’",
          pengguna: "ç”¨æˆ·äººæ•°",
          jumlahTaruhan: "ä¸‹æ³¨æ¬¡æ•°",
          Online: "åœ¨çº¿äººæ•°",
          penarikanHari: "ä»Šå¤©çš„æŽ’è¡Œæ¦œ",
          gin: "åœ¨",
          got: "å¾—åˆ°äº†",
          GameName: "æ•é±¼æ¸¸æˆ",
          popular: "çƒ­é—¨æŽ¨è",
          platform: "å¹³å°æŽ¨è",
          Game1: "5D Lotre",
          Game2: "Win Go",
          Game3: "Slots",
          Game4: "K3 Lotre",
          Game5: "èµŒåœº",
          Game6: "ä½“è‚²",
          Game7: "16é€‰å·",
          Game8: "å›½å®¶",
          Game9: "æ–°åŠ å¡ä¸‡å­—",
          Game10: "è¶Šå—å®˜æ–¹å½©",
          Game11: "ä¸‡èƒ½ä¸‡å­—",
          Game12: "å¤§é©¬ä¸‡å­—",
          Game13: "å¤šå¤šä¸‡å­—",
          Game14: "æžé€Ÿä¸‡å­—",
          Game1Tip: "çŒœçŒœ æ•°å­—/é«˜/ä½Ž/å¥‡æ•°/å¶æ•°",
          Game2Tip: "çŒœçŒœ æ•°å­—/ç»¿è‰²/ç´«è‰²/çº¢è‰²èµ¢",
          Game3Tip: "è¿žè¿žçœ‹/è¿žè¿žçœ‹/è¿žè¿žçœ‹",
          Game4Tip: "çŒœçŒœ æ•°å­—/é«˜/ä½Ž/å¥‡æ•°/å¶æ•°",
          Game5Tip: "ç™¾å®¶ä¹/é¾™è™Ž/è½®ç›˜/éª°å®",
          Game6Tip: "å®žæ—¶èµ›äº‹/å°½åœ¨å…¶ä¸­",
          Game7Tip: "çŒœçŒœ æ•°å­—/é«˜/ä½Ž/å¥‡æ•°/å¶æ•°",
          Game8Tip: "å®žæ—¶èµ›äº‹/å°½åœ¨å…¶ä¸­",
          Game9Tip: "çŒœçŒœ æ•°å­—/é«˜/ä½Ž/å¥‡æ•°/å¶æ•°",
          Game10Tip: "çŒœçŒœ æ•°å­—/ç»¿è‰²/ç´«è‰²/çº¢è‰²èµ¢",
          Game11Tip: "çŒœçŒœ æ•°å­—/é«˜/ä½Ž/å¥‡æ•°/å¶æ•°",
          Game12Tip: "çŒœçŒœ æ•°å­—/é«˜/ä½Ž/å¥‡æ•°/å¶æ•°",
          Game13Tip: "çŒœçŒœ æ•°å­—/é«˜/ä½Ž/å¥‡æ•°/å¶æ•°",
          Game14Tip: "çŒœçŒœ æ•°å­—/é«˜/ä½Ž/å¥‡æ•°/å¶æ•°",
          Game6t: "æ²™å·´",
          nextDraw: "ä¸‹ä¸€è½®",
          playNow: "ç«‹å³çŽ©",
          howWorks: " æ€Žæ ·è´­ä¹°ï¼Ÿ",
          game_title1: "é€‰æ‹©ä¸€ä¸ªæ¸¸æˆ",
          game_title2: "é€‰æ‹©æ‚¨çš„å¹¸è¿æ•°å­—",
          game_title3: "ä¸‹æ³¨",
          game_title4: "èŽ·å¾—å¥–é‡‘",
          game_First: "ç¬¬ä¸€æ­¥",
          game_Second: "ç¬¬äºŒæ­¥",
          game_Third: "ç¬¬ä¸‰æ­¥",
          game_Fourth: "ç¬¬å››æ­¥",
          list: [
            {
              title: "é€‰ç€ä¸€ä¸ªä½ å–œæ¬¢çš„æ¸¸æˆ",
              txt: "æ‚¨å¯ä»¥é€‰æ‹©çŽ©1åˆ†é’Ÿï¼Œ3åˆ†é’Ÿï¼Œ5åˆ†é’Ÿå’Œ10åˆ†é’Ÿçš„å½©ç¥¨æ¸¸æˆã€‚",
            },
            {
              title: "é€‰æ‹©æ‚¨çš„å¹¸è¿æ•°å­—",
              txt: "é€‰æ‹©æ‚¨çš„å¹¸è¿æ•°å­—æˆ–é¢œè‰²",
            },
            { title: "ä¸‹æ³¨", txt: "é€‰æ‹©æ‚¨è¦ä¸‹æ³¨çš„é‡‘é¢å¹¶ç¡®è®¤ã€‚" },
            {
              title: "èµ¢å¾—å¥–é‡‘",
              txt: "å½“æ‚¨é€‰æ‹©å½“å‰æœŸé—´çš„å¹¸è¿æ•°å­—æ—¶ï¼Œç³»ç»Ÿä¼šè‡ªåŠ¨å°†å¥–é‡‘æ·»åŠ åˆ°æ‚¨çš„ä½™é¢ä¸­ã€‚",
            },
          ],
        },
        index: {
          Charttren: "å›¾è¡¨è¶‹åŠ¿",
          Total: "æ€»é¢",
          walletBalance: "é’±åŒ…ä½™é¢",
          recharge: "å……å€¼",
          withdraw: "æçŽ°",
          lotteyRule: "å½©ç¥¨è§„åˆ™",
          iKnow: "æˆ‘çŸ¥é“",
          big: "å¤§",
          small: "å°",
          green: "ç»¿è‰²",
          violet: "ç´«è‰²",
          red: "çº¢è‰²",
          selectGreen: "é€‰æ‹©ç»¿è‰²",
          selectViolet: "é€‰æ‹©ç´«è‰²",
          selectRed: "é€‰æ‹©çº¢è‰²",
          randomBetting: "éšæœºæŠ•æ³¨",
          gameRecord: "æ¸¸æˆè®°å½•",
          myGameRecord: "æˆ‘çš„æ¯”èµ›è®°å½•",
          period: "æœŸå·",
          blockHeight: "åŒºå—é«˜åº¦",
          blockTime: "å‡ºå—æ—¶é—´",
          hashValue: "å“ˆå¸Œå€¼",
          number: "æ•°å­—",
          size: "å¤§å°",
          color: "é¢œè‰²",
          result: "ç»“æžœ",
          sum: "æ€»å’Œ",
          high: "å¤§",
          low: "å°",
          odd: "å¥‡",
          even: "å¶",
          money: "é‡‘é¢",
          multiply: "æ•°é‡",
          presaleRule: "é¢„å”®è§„åˆ™",
          presaleRuleTit: "è¯·æ£€æŸ¥æˆ‘åŒæ„é¢„å”®è§„åˆ™",
          totalPrice: "æ€»é‡‘é¢",
          Select: "é€‰æ‹©",
          SelectCon: "ä¸‹æ³¨å†…å®¹",
          firstPage: "å·²ç»æ˜¯ç¬¬ä¸€é¡µ",
          lastpage: "å·²ç»æ˜¯æœ€åŽé¡µ",
          periodDetail: "è¯¦æƒ…",
          orderNumber: "è®¢å•å·",
          contractMoney: "è´­ä¹°é‡‘é¢",
          contractCount: "è´­ä¹°æ•°é‡",
          delivery: "ç¨ŽåŽé‡‘é¢",
          fee: "ç¨Žæ”¶",
          openPrice: "å¼€ç›˜ä»·",
          status: "çŠ¶æ€",
          amount: "è¾“èµ¢",
          createTime: "åˆ›å»ºæ—¶é—´",
          BettingAssistant: "æŠ•æ³¨åŠ©æ‰‹ï¼ˆè¿‡åŽ»100æœŸï¼‰",
          Missing: "å¤šå°‘æœŸæ²¡å¼€",
          AvgMissing: "å¹³å‡å¤šå°‘æœŸæ²¡å¼€",
          Frequency: "å‡ºçŽ°çš„é¢‘çŽ‡",
          MaxContinued: "æœ€å¤§è¿žå¼€æœŸæ•°",
          PleaseInteger: "è¯·è¾“å…¥ä¸€ä¸ªæ•´æ•°",
          Odds: "èµ”çŽ‡",
          publicQuery: "å…¬é“¾æŸ¥è¯¢",
          howPlay: "çŽ©æ³•è¯´æ˜Ž",
          distancedraw: "è·ç¦»å¼€å¥–",
          multiple: "å€æ•°",
          numberBets: "æ³¨æ•°",
          reset: "é‡ç½®",
          time: "æ—¶é—´",
          lotteryTime: "å¼€å¥–æ—¶é—´",
          notPressed: "æœªåŽ‹ä¸­",
          pressed: "å·²åŽ‹ä¸­",
          bedrawn: "å¾…å¼€å¥–",
          awarding: "æ´¾å¥–ä¸­",
          periodNmu: "æŠ•æ³¨æœŸå·",
          lotteryNmu: "å¼€å¥–æœŸå·",
        },
        myProfile: {
          title: "ä¸ªäººä¸­å¿ƒ",
          profilePhoto: "å¤´åƒ",
          nickname: "æ˜µç§°",
          modifyNickname: "ä¿®æ”¹æ˜µç§°",
          newNicknameTit: "è¯·è¾“å…¥æ–°æ˜µç§°",
        },
        about: {
          title: "å…³äºŽ",
          Games: "æ¸¸æˆ",
          privacypolicy: "éšç§æ”¿ç­–",
          disclosureagreement: "é£Žé™©æŠ«éœ²åè®®",
        },
        privacypolicy: { title: "éšç§æ”¿ç­–", agree: "é£Žé™©æŠ«éœ²åè®®" },
        keFuMenu: { title: "å®¢æœ" },
        recharge: {
          title: "å……å€¼",
          selectRecharge: "è¯·é€‰æ‹©ä¸€ä¸ªå……å€¼æ¸ é“è¿›è¡Œå……å€¼",
          next: "ä¸‹ä¸€æ­¥",
          previous: "ä¸Šä¸€æ­¥",
          rechargeAmount: "å……å€¼é‡‘é¢",
          rechargeAmountRangeIpt: "å……å€¼é‡‘é¢èŒƒå›´",
          rechargeAmountRange: "å……å€¼é‡‘é¢èŒƒå›´",
        },
        rechargeChack: {
          title: "å……å€¼",
          totalAmouunt: "æ€»é‡‘é¢",
          paymentMethod: "ä»˜æ¬¾æ–¹å¼",
          localBank: "æœ¬åœ°é“¶è¡Œ",
          enterAmount: "è¯·è¾“å…¥é‡‘é¢",
          theAmount: "é‡‘é¢å¿…é¡»æ˜¯10çš„æ•´æ•°",
          accountName: "è´¦æˆ·åç§°",
          bankNumber: "é“¶è¡Œå·ç ",
          bankName: "é“¶è¡Œåç§°",
          paymentAmount: "æ”¯ä»˜é‡‘é¢",
          orderNumber: "è®¢å•å·",
          creationTime: "åˆ›å»ºæ—¶é—´",
          transferAmount:
            "è½¬è´¦é‡‘é¢å¿…é¡»æŒ‰ç…§æ‚¨åˆ›å»ºçš„é¡ºåºå¡«å†™ï¼Œå¦åˆ™å­˜æ¬¾å°±ä¸ä¼šæˆåŠŸ",
          transferAmount2: "",
          transferAmount1: "æ³¨æ„ï¼šæ±‡æ¬¾å®ŒæˆåŽè¯·å‹¿å–æ¶ˆå­˜æ¬¾è®¢å•",
          depositAmount: "å­˜æ¬¾é‡‘é¢",
          upImgTitle: "è¯·ä¸Šä¼ åŒ…å«UTRçš„äº¤æ˜“",
          upFormate: "åªèƒ½ä¸Šä¼ jpg,jpeg,pngæ ¼å¼çš„å›¾ç‰‡",
          selectFile: "é€‰æ‹©ä¸Šä¼ æ–‡ä»¶",
        },
        touchngo: {
          title: "Touch N Go å……å€¼",
          name: "å§“å",
          mobileNumber: "ç”µè¯å·ç ",
        },
        rechargeRecord: {
          title: "å……å€¼è®°å½•",
          unpaid: "å¾…æ”¯ä»˜",
          eazyPay: "å·¥èµ„",
          success: "æˆåŠŸ",
          others: "å…¶ä»–",
        },
        paymentMethod: {
          title: "æ”¯ä»˜æ–¹å¼",
          totalPaid: "å¾…æ”¯ä»˜æ€»é¢",
          choose: "é€‰æ‹©é“¶è¡Œå¡",
          payNow: "ç«‹å³ä»˜æ¬¾",
          topInstructions: "å……å€¼è¯´æ˜Ž",
          contentTmp1: "è¯·è½¬åˆ°ä¸Šè¿°æ”¶æ¬¾é“¶è¡Œå¸æˆ·",
          contentTmp2: "è¯·æ­£ç¡®å¡«å†™æŒå¡äººçš„å§“åå’Œå¸å·ä»¥è¿›è¡ŒéªŒè¯",
          contentTmp3: "æ¯æ¬¡æäº¤ä¸€æ¬¡è½¬è´¦ï¼Œè¯·ä¸è¦é‡å¤æäº¤è®¢å•",
          contentTmp4:
            "è¯·ç¡®ä¿åœ¨è½¬ç§»å®ŒæˆåŽæäº¤è®¢å•ï¼Œå¦åˆ™æˆ‘ä»¬å°†æ— æ³•åŠæ—¶æ£€æŸ¥æ‚¨çš„ä»˜æ¬¾",
          waitingPayment: "ç­‰å¾…ä»˜æ¬¾",
          receivingTitle: "æ”¶æ¬¾çš„é“¶è¡Œå¡ä¿¡æ¯",
          confirm1: "è®¢å•å·",
          confirm2: "é“¶è¡Œåç§°",
          confirm3: "æŒå¡äºº",
          confirm4: "å¡å·",
          confirm5: "IFSC",
          confirm6: "æ”¯è¡Œ",
          Required: "Fill in Ref No",
          Return: "è¿”å›ž",
        },
        promotion: {
          title: "æŽ¨å¹¿",
          bouns: "å¥–é‡‘",
          level_1: "ç­‰çº§1",
          level_2: "ç­‰çº§2",
          totalPeople: "æ€»äººæ•°",
          contribution: "æŽ¨å¹¿æ”¶ç›Š",
          code: "æˆ‘çš„æŽ¨å¹¿ç ",
          link: "æˆ‘çš„æŽ¨å¹¿ç é“¾æŽ¥",
        },
        bonusrecord: { title: "ä¸‹çº§æ³¨å†Œè®°å½•" },
        redenvelopes: {
          title: "ç¤¼ç‰©",
          Hello: "ä½ å¥½",
          Eveverone: "æ¯ä¸€ä¸ª",
          des: "æˆ‘ä»¬æœ‰ç¤¼ç‰©ç»™ä½ ",
          giftCode: "ç¤¼ç‰©ç ",
          PleaseGiftCode: "è¯·è¾“å…¥ç¤¼ç‰©ç ",
          Receive: "æ”¶åˆ°ç¤¼ç‰©",
          Best: "å‘ä½ è‡´ä»¥æœ€è‰¯å¥½çš„ç¥æ„¿",
          Congratulations: "ç¥è´ºä½ ",
          already: "ä½ å·²ç»æ”¶åˆ°äº†",
          ACCEPT: "é¢†å–",
          txt: "æ‚¨å¥½ï¼Œæ‚¨å¯ä»¥é€šè¿‡è”ç³»MZplayåœ¨çº¿å®¢æœï¼Œä½¿ç”¨æ‚¨çš„è´¦æˆ·ä½™é¢è´­ä¹°ç¤¼ç‰©ç ï¼Œå¯èµ é€ç»™å¹³å°å¥½å‹æäº¤é¢†å–ã€‚",
        },
        withdrawal: {
          title: "æçŽ°",
          balance: "ä½™é¢",
          enterwithdraw: "è¯·è¾“å…¥æçŽ°é‡‘é¢",
          withdrawAamount: "æçŽ°é‡‘é¢",
          fee: "ç¨Žæ”¶",
          toAccount: "ç¨ŽåŽé‡‘é¢",
          rate: "è´¹çŽ‡",
          totalBet: "æ€»ä¸‹æ³¨",
          withdrawTime: "æçŽ°æ—¶é—´",
          dailyWithdrawal: "æ¯æ—¥æçŽ°æ¬¡æ•°",
          withdrawMoney: "æçŽ°é‡‘é¢èŒƒå›´",
          payout: "æ”¶æ¬¾æ–¹å¼",
          bankCard: "é“¶è¡Œå¡",
          selectBank: "é€‰æ‹©é“¶è¡Œ",
          addBankCard: "å¢žåŠ é“¶è¡Œå¡",
          rechargeTip1: "è¯·è¾“å…¥æçŽ°é‡‘é¢",
          rechargeTip2: "è¯·é€‰æ‹©é“¶è¡Œå¡",
          rechargeTip3: "è¯·è¾“å…¥å¯†ç ",
          select: "é€‰æ‹©",
          add: "æ–°å¢ž",
        },
        withdrawrecord: {
          title: "æçŽ°è®°å½•",
          applying: "ç”³è¯·ä¸­",
          agree: "åŒæ„",
          refuse: "æ‹’ç»",
        },
        mission: {
          title: "é‚€è¯·å¥½å‹",
          totalPeople: "æ€»äººæ•°",
          totalAmount: "æ€»é‡‘é¢",
          myTask: "æˆ‘çš„ä»»åŠ¡",
          invited: "é‚€è¯·",
          validMenmber: "æœ‰æ•ˆä¼šå‘˜",
          receive: "é¢†å–",
        },
        promoteRecord: { title: "é‚€è¯·è®°å½•", People: "äººæ•°" },
        addbank: {
          title: "å¢žåŠ é“¶è¡Œå¡",
          bankName: "é“¶è¡Œåç§°",
          beneficiaryName: "æ”¶æ¬¾äººå§“å",
          accountNo: "è´¦å·",
          bankCity: "é“¶è¡Œæ‰€åœ¨å¸‚",
          IFSCCode: "IFSC Cord",
          email: "é‚®ç®±",
          bankProvince: "é“¶è¡Œæ‰€åœ¨çœ",
          bankBranch: "åˆ†è¡Œåœ°å€",
          addBtn: "æ·»åŠ é“¶è¡Œè´¦æˆ·",
          opsionalbankProvince: "é“¶è¡Œæ‰€åœ¨çœ",
          opsionalbankBranch: "åˆ†è¡Œåœ°å€",
        },
        addElcbank: {
          title: "å¢žåŠ ç”µå­é’±åŒ…",
          addBtn: "æ·»åŠ ç”µå­é’±åŒ…",
          mobile: "è¯·è¾“å…¥ç”µå­é’±åŒ…æ‰‹æœºå·ç ",
        },
        addUsdt: {
          title: "å¢žåŠ USDT",
          addBtn: "æ·»åŠ USDT",
          type: "USDTç±»åž‹",
          address: "é’±åŒ…åœ°å€",
          tip: "USDTåœ°å€æ ¼å¼é”™è¯¯",
          txt: "USDTï¼ˆTRCï¼‰åœ°å€æ ¼å¼ã€‚åœ°å€ç”±ä»¥å­—æ¯ T å¼€å¤´çš„ 34 ä¸ªå­—ç¬¦ç»„æˆã€‚",
          txt1: "USDTï¼ˆERCï¼‰åœ°å€æ ¼å¼ã€‚åœ°å€ç”±ä»¥å­—æ¯ 0x å¼€å¤´çš„ 42 ä¸ªå­—ç¬¦ç»„æˆã€‚",
        },
        wellet: {
          title: "é’±åŒ…",
          withdrawalBalance: "å¯æçŽ°ä½™é¢",
          historicalWithdrawal: "åŽ†å²æçŽ°",
          accumulatedWithdrawal: "ä»Šæ—¥æçŽ°",
          everyDay: "æ¯å¤©æœ‰",
          order: "æ¬¡",
          tip: "å…è´¹æçŽ°åˆ°æ‚¨ç»‘å®šé“¶è¡Œå¡ä¸Šçš„æœºä¼š",
          myCard: "æˆ‘çš„é“¶è¡Œå¡",
          rechargeRecord: "å……å€¼è®°å½•",
          withdrawRecord: "æçŽ°è®°å½•",
        },
        transactionrecord: { title: "äº¤æ˜“è®°å½•" },
        newtutorial: {
          title: "æ–°æ‰‹æŒ‡å—",
          chooseYour: "é€‰æ‹©æ‚¨çš„",
          favoriteGame: "æœ€å–œæ¬¢çš„æ¸¸æˆ",
          pickLucky: "é€‰ä½ çš„å¹¸è¿å„¿",
          numberColor: "æ•°å­—æˆ–é¢œè‰²",
          SKIP: "è·³è¿‡",
          NEXT: "ä¸‹ä¸€æ­¥",
          confirmAmount: "ç¡®è®¤æ‚¨çš„ä¸‹æ³¨é‡‘é¢",
          getBouns: "èŽ·å–å¥–é‡‘",
          moneyWill: "èµ¢äº†è¿™ä¸€å›žåˆåŽï¼Œé’±ä¼šåŠ åˆ°ä½ çš„æ¸¸æˆå¸æˆ·é‡Œ",
          youRecharge: "ä½ å¯ä»¥å……å€¼",
          withdrawHere: "æˆ–è€…åœ¨è¿™é‡ŒæçŽ°",
        },
        download: {
          title: "ä¸‹è½½",
          name: "",
          goBtn: "åŽ»ä¸‹è½½",
          des: "ä¸€å®¶ä¸“ä¸šçš„å½©ç¥¨æ¸¸æˆå¹³å°",
          playNow: "ç«‹å³åŽ»ç•…çŽ©",
          lotteryGame: "å½©ç¥¨æ¸¸æˆ",
          btn: "ç«‹å³ä¸‹è½½",
        },
        tabbar: {
          tabbarList: [
            {
              id: 1,
              name: "ä¸»é¡µ",
              imgAction: t("07d4"),
              img: t("2288"),
              to: "/home",
            },
            {
              id: 2,
              name: "æ´»åŠ¨",
              imgAction: t("b5ef"),
              img: t("5b0e"),
              to: "/activity",
            },
            {
              id: 3,
              name: "æŽ¨å¹¿",
              imgAction: t("7268"),
              img: t("7268"),
              to: "/promotion",
            },
            {
              id: 4,
              name: "é’±åŒ…",
              imgAction: t("4c6e"),
              img: t("b2a5"),
              to: "/wallet",
            },
            {
              id: 5,
              name: "æˆ‘çš„",
              imgAction: t("e636"),
              img: t("6c7c"),
              to: "/mian",
            },
          ],
        },
        mian: {
          title: "æˆ‘çš„",
          historical: "ä¸‹æ³¨è®°å½•",
          funding: "äº¤æ˜“è®°å½•",
          loginLog: "ç™»å½•æ—¥å¿—",
          message: "æ¶ˆæ¯",
          balance: "æ‰€æœ‰é’±åŒ…",
          totalwallet: "æ€»é’±åŒ…",
          refreshwallet: "ä¸€é”®å›žæ”¶",
          loginOut: "é€€å‡º",
          menuName1: "è´¦å·å®‰å…¨",
          menuName2: "è°·æ­ŒéªŒè¯å™¨",
          menuName3: "é‚€è¯·å¥½å‹",
          menuName4: "çº¢åŒ…",
          menuName5: "æ–°æ‰‹æŒ‡å—",
          menuName6: "å…³äºŽ",
          menuName7: "å®¢æœ",
        },
        checkIn: {
          title: "ç­¾åˆ°",
          attendanceRules: "ç­¾åˆ°è§„åˆ™",
          txt: "ç­¾åˆ°ç¦åˆ©å¤§æ´¾é€",
          rule: "çŽ©æ³•è§„åˆ™",
          record: "ç­¾åˆ°è®°å½•",
          today: "ä»Šå¤©å·²ç­¾",
          received: "å·²é¢†æ•°",
          day: "å¤©",
          btn: "ç­¾åˆ°",
          Receive: "æ”¶åˆ°ç¤¼ç‰©",
          Best: "å‘ä½ è‡´ä»¥æœ€è‰¯å¥½çš„ç¥æ„¿",
          Congratulations: "ç¥è´ºä½ ",
          already: "ä½ å·²ç»æ”¶åˆ°äº†",
          ACCEPT: "é¢†å–",
        },
        checkInDes: {
          title: "ç­¾åˆ°è§„åˆ™",
          checkInDay: "ç­¾åˆ°å¤©æ•°",
          accumulatedAmount: "ç´¯è®¡é‡‘é¢",
          checkInBonus: "ç­¾åˆ°å¥–é‡‘",
          rulesDetails: "è§„åˆ™è¯¦æƒ…",
          tep1: "æ²¡æœ‰å……å€¼çš„ç”¨æˆ·å°†æ— æ³•é¢†å–;",
          tep2: "ä»Žç¬¬1å¤©å¼€å§‹ï¼Œéœ€è¦å……å€¼;",
          tep3: "å……å€¼é‡‘é¢ç´¯è®¡å¿…é¡»æ»¡è¶³æ¡ä»¶ï¼Œä¸”æ¯å¤©åªèƒ½é¢†å–ä¸€æ¬¡;",
          tep4: "åœ¨è¯¥å¹³å°ä¸Šå¯¹è¯¥æ´»åŠ¨å…·æœ‰æœ€ç»ˆè§£é‡Šæƒã€‚å¦‚æœ‰ç›¸å…³é—®é¢˜ï¼Œè¯·è”ç³»å®¢æœï¼",
          tep5: "å…¨å‹¤å¥–é‡‘å°†åœ¨ç¬¬7æ¬¡å­˜æ¬¾åŽéšæœºåˆ†é…",
        },
        historicalBetting: { title: "æŠ•æ³¨è®°å½•" },
        loginLog: { title: "ç™»å½•æ—¥å¿—" },
        messageCenter: {
          title: "æ¶ˆæ¯ä¸­å¿ƒ",
          readAll: "å…¨éƒ¨é˜…è¯»",
          removeAll: "å…¨éƒ¨åˆ é™¤",
          delTitle: "ä½ ç¡®å®šä½ è¦åˆ é™¤ï¼Ÿ",
          delall: "ä½ ç¡®å®šä½ è¦å…¨éƒ¨åˆ é™¤ï¼Ÿ",
          readall: "ä½ ç¡®å®šä½ è¦å…¨éƒ¨æŸ¥çœ‹ï¼Ÿ",
        },
        messageDes: { title: "æ¶ˆæ¯è¯¦æƒ…" },
        lottery: {
          drawResult: "å¼€å¥–ç»“æžœ",
          period: "æœŸå·",
          money: "é‡‘é¢",
          multiply: "æ•°é‡",
          totalPrice: "æ€»é‡‘é¢",
          pleaseBet: "è¯·ä¸‹æ³¨",
          election: "åé€‰",
        },
        colorLand: {
          tab1: "æ€»èµŒæ³¨",
          tab2: "2ä¸ªç›¸åŒçš„æ•°å­—",
          tab3: "3ä¸ªæ•°å­—åŒ¹é…",
          tab4: "ä¸åŒçš„å·ç ",
          title1: "é€‰æ‹©2ä¸ªåŒ¹é…çš„æ•°å­—",
          tip1: "*å¦‚æžœå¼€ç›˜å·ç ä¸Ž 2 ä¸ªæŠ•æ³¨å·ç åŒ¹é…ï¼Œåˆ™ä¸­å¥–ã€‚ï¼ˆä¸‰ä¸ªç›¸åŒçš„æ•°å­—é™¤å¤–ï¼‰ã€‚",
          title2: "é€‰æ‹©ä¸€å¯¹ç‹¬ç‰¹çš„æ•°å­—",
          tip2: "*é€‰æ‹©è‡³å°‘1å¯¹ç›¸åŒå·ç å’Œ1ä¸ªä¸åŒå·ç è¿›è¡ŒæŠ•æ³¨ï¼Œå¦‚æžœå¼€ç›˜å·ç ä¸ŽæŠ•æ³¨å·ç ç›¸ç¬¦ï¼Œåˆ™ä¸­å¥–ã€‚",
          title3: "é€‰æ‹©3ä¸ªå”¯ä¸€å·ç ",
          tip3: "*å¦‚æžœå¼€ç›˜å·ç ä¸Ž3ä¸ªæŠ•æ³¨å·ç åŒ¹é…ï¼Œåˆ™ä¸­å¥–",
          title4: "é€‰æ‹©3ä¸ªåŒ¹é…å·ç ",
          tip4: "*å¦‚æžœå¼€å¥–å·ç æ˜¯ç›¸åŒå·ç ä¸­çš„ä»»æ„ä¸‰ä¸ªï¼Œåˆ™ä¸­å¥–",
          title5: "é€‰æ‹©3ä¸ªä¸åŒçš„æ•°å­—",
          tip5: "*é€‰æ‹©3ä¸ªæˆ–æ›´å¤šå·ç ï¼Œå¼€å¥–ç»“æžœä¸­çš„ä¸‰ä¸ªå·ç ä¸ºä¸åŒå·ç ï¼Œä¸Žæ‰€é€‰å·ç ä¸€è‡´ï¼Œåˆ™ä¸­å¥–ã€‚",
          title6: "é€‰æ‹©3ä¸ªè¿žç»­çš„æ•°å­—",
          tip6: "*å¦‚æžœå¼€å¥–å·ç æ˜¯ä»»æ„ä¸‰ä¸ªè¿žç»­å·ç ï¼Œå³ä¸ºä¸­å¥–ç»“æžœã€‚",
          title7: "é€‰æ‹©2ä¸ªä¸åŒçš„æ•°å­—",
          tip7: "*é€‰æ‹©2ä¸ªæˆ–æ›´å¤šå·ç ï¼Œå¼€å¥–ç»“æžœä¸­çš„ä¸¤ä¸ªå·ç æ˜¯ä¸åŒçš„å·ç ï¼Œä¸Žæ‰€é€‰å·ç ä¸€è‡´ï¼Œåˆ™ä¸­å¥–ã€‚",
          selectCon1: "é€‰æ‹©2ä¸ªåŒ¹é…å·ç ï¼š",
          selectCon2: "é€‰æ‹©ä¸€å¯¹å”¯ä¸€çš„æ•°å­—ï¼š",
          selectCon3: "é€‰æ‹©3ä¸ªå”¯ä¸€å·ç ï¼š",
          selectCon4: "é€‰æ‹©3ä¸ªä¸åŒçš„æ•°å­—ï¼š",
          selectCon5: "é€‰æ‹©2ä¸ªä¸åŒçš„æ•°å­—ï¼š",
          gameType1: "å…¶ä»–3ä¸ªå·ç ",
          gameType2: "3ä¸ªè¿žç»­æ•°å­—",
          gameType3: "2ä¸ªç›¸åŒçš„æ•°å­—",
          gameType4: "3ä¸ªç›¸åŒçš„æ•°å­—",
        },
        activity: { title: "æ´»åŠ¨" },
        activityDes: { title: "æ´»åŠ¨è¯¦æƒ…" },
        usdt: {
          title: "USDTå……å€¼",
          address: "USDTé’±åŒ…åœ°å€",
          Raddress: "å……å€¼åœ°å€",
          QRcode: "äºŒç»´ç ",
          tit1: "è´­ä¹°è´§å¸",
          tit2: "å‘åœ°å€è½¬è´¦",
          tit3: "å®Œæˆäº¤æ˜“",
          tit4: "ç­‰å¾…åˆ°è´¦",
          tip1: "1. å……å€¼åœ°å€å®žæ—¶æ›´æ¢ï¼Œè¯·å‹¿ä¿å­˜å……å€¼åœ°å€ï¼Œæ¯æ¬¡å……å€¼å‰è¯·é‡æ–°èŽ·å–å……å€¼åœ°å€ï¼Œé¿å…æ•°å­—è´§å¸ä¸¢å¤±ã€‚ ",
          tip2: "2. å¤åˆ¶å……å€¼åœ°å€åŽï¼Œè¯·åˆ°ä½¿ç”¨çš„æ•°å­—è´§å¸é’±åŒ…è¿›è¡Œæå¸è½¬è´¦ï¼Œåˆ‡å‹¿å……å€¼ä¸Žé€‰æ‹©åŒºå—é“¾æ¡ä¸åŒçš„æ•°å­—èµ„äº§ï¼Œå¦åˆ™èµ„äº§å°†ä¸å¯æ‰¾å›žã€‚ ",
          tip3: "å……å€¼-ææ¬¾ ä¸€èˆ¬1-5åˆ†é’Ÿè‡ªåŠ¨åˆ°è´¦ï¼Œå¦‚æœªåˆ°è´¦ï¼Œè¯·è”ç³»åœ¨çº¿å®¢æœã€‚ ",
          tip4: "ï¼ˆæ— éœ€ä»»ä½•æ‰‹ç»­è´¹æ¯”å¦‚ï¼šæçŽ°100åˆ°è´¦100ï¼‰ ",
        },
        trx: { uset: "TRX", title: "TRXå……å€¼", address: "TRXé’±åŒ…åœ°å€" },
        promotionNew: {
          title: "æŽ¨å¹¿",
          dataOverview: "æ€»è§ˆ",
          myTeam: "å›¢é˜Ÿ",
          upRecord: "è®°å½•",
          tutorial: "æ•™ç¨‹",
          myReward: "æˆ‘çš„å¥–åŠ±",
          totalComm: "æ˜¨æ—¥æ€»ä½£é‡‘",
          directComm: "ç›´å±žä½£é‡‘",
          teamComm: "å›¢é˜Ÿä½£é‡‘",
          directSubord: "ç›´å±žäººæ•°",
          totalTeams: "å›¢é˜Ÿæ€»äººæ•°",
          newToday: "ä»Šæ—¥æ–°å¢žäººæ•°",
          newTeam: "ä»Šæ—¥æ–°å¢žå›¢é˜Ÿäººæ•°",
          weekComm: "æœ¬å‘¨æ€»ä½£é‡‘",
          totalComm1: "æ€»ä½£é‡‘",
          QRcode: "é•¿æŒ‰ä¿å­˜äºŒç»´ç ",
          copyCode: "å¤åˆ¶é‚€è¯·ç ",
          copyLink: "å¤åˆ¶é“¾æŽ¥",
          rebateTable: "è¿”ä½£é‡‘é¢å¯¹åº”è¡¨",
          agencyLevel: "ä»£ç†ç­‰çº§",
          teamNumber: "å›¢é˜Ÿä¼šå‘˜æ•°",
          teamFlow: "å›¢é˜Ÿæµæ°´",
          teamRecharge: "å›¢é˜Ÿå……å€¼",
          validDay: "æœ‰æ•ˆä¼šå‘˜:å½“æ—¥å……å€¼æˆ–æŠ•æ³¨",
          commMethod: "ä½£é‡‘è®¡ç®—æ–¹å¼",
          Hierarchy: "å±‚çº§",
          rebateRatio: "è¿”ä½£æ¯”ä¾‹",
          firstMember: "å±‚çº§ä¸€çº§",
          secondMember: "å±‚çº§äºŒçº§",
          thirdMember: "å±‚çº§ä¸‰çº§",
          tierMember: "å±‚çº§å››çº§",
          bettingTurnover: "æŠ•æ³¨æµæ°´",
          agent: "çº§ä¼šå‘˜",
          upTime: "é¢†å–æ—¶é—´",
          receiveAmount: "é¢†å–é‡‘é¢",
          operate: "æ“ä½œ",
          details: "è¯¦æƒ…",
          date: "æ—¥æœŸ",
          directTeam: "ç›´å±žå›¢é˜Ÿ",
          people: "äºº",
          pleaseChoose: "è¯·é€‰æ‹©",
          totalBet: "æ€»æŠ•æ³¨é‡‘é¢",
          totalAmount: "æ€»è¿”ä½£é‡‘é¢",
          Inquire: "æŸ¥è¯¢",
          nickName: "æ˜µç§°",
          runningWater: "æµæ°´",
          condition: "çŠ¶æ€",
          enable: "å¯ç”¨",
          disabled: "ç¦ç”¨",
          personalFlow: "ä¸ªäººæµæ°´",
          personalRecharge: "ä¸ªäººå……å€¼",
          rgistrationTime: "æ³¨å†Œæ—¶é—´",
          subordinates: "ä¸‹çº§äººæ•°",
          year: "å¹´",
          moon: "æœˆ",
          day: "æ—¥",
          selectList: [
            { name: "å±‚çº§1çº§", code: 1 },
            { name: "å±‚çº§2çº§", code: 2 },
            { name: "å±‚çº§3çº§", code: 3 },
            { name: "å±‚çº§4çº§", code: 4 },
            { name: "å±‚çº§5çº§", code: 5 },
            { name: "å±‚çº§6çº§", code: 6 },
          ],
          promoteMoney: "ç«‹å³æŽ¨å¹¿èµšé’±",
          uid: "UID",
        },
        verify: {
          title: "è°·æ­ŒéªŒè¯å™¨",
          unbind: "è§£ç»‘/æ›´æ”¹éªŒè¯å™¨",
          downTit: "ä¸‹è½½å¹¶æ³¨å†Œ",
          downTxt:
            "è¯·ä¸‹è½½è°·æ­ŒéªŒè¯å™¨ã€‚å¦‚æžœå®‰è£…å®Œæˆç‚¹å‡»ç»‘å®šæŒ‰é’®ï¼Œç»‘å®šä½ çš„å½©ç¥¨è´¦æˆ·",
          bind: "ç»‘å®š",
          downVerify: "ä¸‹è½½è°·æ­ŒéªŒè¯å™¨",
          vexplainTit: "ç»‘å®šéªŒè¯å™¨è¯´æ˜Ž",
          list: [
            {
              txt: "æ‚¨éœ€è¦å°†å½©ç¥¨è´¦æˆ·ç”Ÿæˆçš„16ä½å¯†é’¥å¹¶ä¿å­˜åˆ°å®‰å…¨çš„åœ°æ–¹ï¼ŒåŒæ—¶å¤åˆ¶åˆ°å¯†é’¥",
            },
            { txt: "ä½ éœ€è¦æ‰“å¼€è°·æ­ŒéªŒè¯å™¨" },
            { txt: "æ·»åŠ ä¸€ä¸ªæ¸¸æˆè´¦æˆ·ï¼Œå¤åˆ¶å¥½16ä½å¯†é’¥è¾“å…¥" },
            { txt: "æ·»åŠ æˆåŠŸåŽè‡ªåŠ¨ç”Ÿæˆ6ä½,æ•°ä½éªŒè¯ç " },
          ],
          vexplainNext: "è·³è¿‡æ•™ç¨‹",
          vbackupTit: "å¤‡ä»½å¯†é’¥",
          vbackupTxt:
            "è¯·çŒ®å‡ºä¸€ä»½é‡è¦çš„é’¥åŒ™ä¿å­˜åœ¨å®‰å…¨çš„ä½ç½®ï¼Œå¦‚æžœæ‰‹æœºé—å¼ƒæ­¤é’¥åŒ™ï¼Œå¦åˆ™ä½ è¦ä¿ç•™ç”Ÿå‘½é‰´å®šå™¨7å¤©ã€‚",
          vsafetyTit: "éªŒè¯å®‰å…¨",
          vsafetyTxt: "å°†éªŒè¯ç å‘é€åˆ°ä½ çš„æ‰‹æœºå·",
          vsafetySms: "æ‰‹æœºéªŒè¯ç ",
          vsafetyTip: "éªŒè¯å®‰å…¨ä¸å¯ç”¨ï¼Ÿè”ç³»å®¢æœ",
          vsafetySnsnull: "éªŒè¯ç ä¸èƒ½ä¸ºç©º",
          loginTit: "è°·æ­Œç™»å½•éªŒè¯",
          loginTxt: "è´¦å·ä¿æŠ¤å·²å¼€å¯ï¼Œè¯·æ ¹æ®æç¤ºå®Œæˆä»¥ä¸‹æ“ä½œ",
          loginTip:
            "è¯·åœ¨æ‰‹æœºä¸­æ‰“å¼€é˜¿é‡Œäº‘APPæˆ–Google Authenticatorï¼ˆèº«ä»½éªŒè¯å™¨ï¼‰ï¼Œè¯·è¾“å…¥6ä½åŠ¨æ€ç ",
          loginNum: "6ä½æ•°å­—",
        },
        long: {
          title: "é•¿é¾™åŠ©æ‰‹",
          newTitle: "æœ€æ–°é•¿é¾™",
          betTitle: "æˆ‘çš„æŠ•æ³¨",
          expect: "æœŸ",
          andDig: "å’Œå¤§",
          andSmall: "å’Œå°",
          andodd: "å’Œå•",
          andeven: "å’ŒåŒ",
          illustrate: "è¯´æ˜Ž",
          txt1: "é•¿é¾™åŠ©æ‰‹æ˜¯å¯¹Win Goã€5Dã€K3ã€çŽ©æ³•çš„â€œå¤§å°å•åŒâ€ å¼€å¥–ç»“æžœè¿›è¡Œè·Ÿè¸ªç»Ÿè®¡ï¼Œå¹¶å¯è¿›è¡Œå¿«æ·æŠ•æ³¨çš„åŠ©æ‰‹å·¥å…·ï¼›",
          txt2: "æ¯æœŸå‡ºçŽ°å¤§ã€å°ã€å•ã€åŒçš„æ¦‚çŽ‡ç›¸åŒï¼Œå¦‚æžœè¿žç»­3æœŸåŠä»¥ä¸Šçš„å¼€å¥–ç»“æžœç›¸åŒï¼Œç§°ä¹‹ä¸ºâ€œé•¿é¾™â€ï¼Œé€šå¸¸ä¼šé‡‡ç”¨å€æŠ•çš„æ–¹å¼è¿›è¡Œâ€œç é¾™â€æˆ–â€œé¡ºé¾™â€ã€‚",
          list: [
            {
              name: "ä»€ä¹ˆæ˜¯ç é¾™ï¼Ÿ",
              txt: "å¦‚è¿žç»­å¼€5æœŸâ€œå•â€ï¼Œå¯ä»¥é€‰æ‹©â€œåŒâ€è¿›è¡ŒæŠ•æ³¨ï¼Œè¿™ç§æŠ•æ³¨æ–¹æ¡ˆç§°ä¹‹ä¸ºâ€œç é¾™â€ï¼›",
            },
            {
              name: "ä»€ä¹ˆæ˜¯é¡ºé¾™ï¼Ÿ",
              txt: "å¦‚è¿žç»­å¼€5æœŸâ€œå•â€ï¼Œç»§ç»­é€‰æ‹©â€œå•â€è¿›è¡ŒæŠ•æ³¨ï¼Œè¿™ç§æŠ•æ³¨æ–¹æ¡ˆç§°ä¹‹ä¸ºâ€œé¡ºé¾™â€ï¼›",
            },
            {
              name: "ä»€ä¹ˆæ˜¯å€æŠ•ï¼Ÿ",
              txt: "å€æŠ•æ˜¯ä¸€ç§ç¿»å€æŠ•æ³¨æ–¹å¼ï¼Œæ˜¯ä¸ºäº†ä¿éšœèƒ½å¤Ÿåœ¨â€œç é¾™â€æˆ–â€œé¡ºé¾™â€çš„è¿‡ç¨‹ä¸­æŒç»­ç›ˆåˆ©çš„ä¸€ç§æŠ•æ³¨æ–¹å¼ã€‚",
            },
          ],
          txt3: "æœ€æ–°é•¿é¾™ï¼šè¯¥åŠŸèƒ½ä¼šè‡ªåŠ¨æ›´æ–°è¿žç»­5æœŸå¼€å¥–åŒæ ·ç»“æžœçš„æ¸¸æˆé¡¹ç›®ï¼Œæ–¹ä¾¿æ‚¨åˆ¤æ–­ç é¾™è¿˜æ˜¯é¡ºé¾™ã€‚",
          txt4: "æˆ‘çš„æŠ•æ³¨ï¼šè¯¥åŠŸèƒ½ä¼šæ›´åŠ å¿«æ·æŸ¥çœ‹æ‚¨æ‰€ä¸‹æ³¨çš„å†…å®¹å’Œå¼€å¥–ç»“æžœã€‚",
        },
        shop: {
          currentPoints: "å½“å‰ç§¯åˆ†",
          Redeem: "ç«‹å³å…‘æ¢",
          pointsGo: "ç§¯åˆ†å•†åŸŽ     ç«‹å³å‰å¾€",
          commodityOrder: "å•†å“è®¢å•",
          pointsRecord: "ç§¯åˆ†è®°å½•",
          title: "ç§¯åˆ†å•†åŸŽ",
          pointsAvailable: "å¯ç”¨ç§¯åˆ†",
          rule: "ç§¯åˆ†è§„åˆ™",
          stock: "åº“å­˜",
          redeemed: "å·²å…‘æ¢",
          integral: "ç§¯åˆ†",
          productName: "å•†å“åç§°",
          exchange: "å…‘æ¢æ¡ä»¶",
          name: "åå­—å’Œå§“æ°",
          address: "æ”¶è´§åœ°å€",
          redeem: "ç»§ç»­å…‘æ¢",
          checkOrder: "æŸ¥çœ‹è®¢å•",
          addressEmpty: "åœ°å€ä¸èƒ½ä¸ºç©º!",
          ordered: "å·²ä¸‹å•",
          delivery: "é…é€ä¸­",
          completed: "å·²å®Œæˆ",
          orderDetails: "è®¢å•è¯¦æƒ…",
          orderTime: "ä¸‹å•æ—¶é—´",
          orderStatus: "è®¢å•çŠ¶æ€",
          signTime: "ç­¾æ”¶æ—¶é—´",
          signPhoto: "ç­¾æ”¶ç…§ç‰‡",
        },
        selections: {
          distanceDraw: "è·ç¦»å¼€å¥–",
          champion: "å† å†›",
          runnerUp: "äºšå†›",
          ndRunner: "å­£å†›",
          outof1: "16é€‰1",
          outof2: "16é€‰2",
          outof3: "16é€‰3",
        },
        lotteryD: {
          rules: "çŽ©æ³•è¯´æ˜Ž",
          LotteryTime: "å¼€å¥–",
          seal: "å°ç›˜",
          stPrize1: "ä¸€å¥–",
          stPrize2: "äºŒå¥–",
          stPrize3: "ä¸‰å¥–",
          Finalist: "å…¥å›´å¥–",
          consolationprize: "å®‰æ…°å¥–",
          Doubledisc: "åŒé¢ç›˜",
          TraditionalDish: "ä¼ ç»Ÿç›˜",
          Doubleside: "åŒé¢",
          Choosenumber: "é€‰å·",
          FourDigit: "å››ä½å•é€‰",
          FourSlection: "å››ä½Ré€‰",
          duplicatenumber: "å·ç é‡å¤",
          numberFormat: "å·ç æ ¼å¼æœ‰è¯¯",
          Bigone: "å¤§ä¸‡",
          Smallone: "å°ä¸‡",
          Bothone: "å¤§ä¸‡+å°ä¸‡",
          Addbet: "æ·»åŠ æŠ•æ³¨",
          Randomnumber: "éšæœºç»„æ•°",
          Machineselection: "æœºé€‰",
          Enternumber: "è¾“å…¥æ‚¨ä¸­æ„çš„å·ç ",
          Concatenatedcode: "è¿žç (åŒ…ç»„)",
          select1: "2Då…¨é€‰",
          select2: "3Då…¨é€‰",
          select3: "4Då…¨é€‰",
          select4: "2Dæ­£ç ",
          select5: "2Dç‰¹å¥–",
          select6: "2Dä¸€å¥–",
          select7: "2D",
          select8: "3D",
          SeventhPrize: "ä¸ƒå¥–",
          EighthPrize: "å…«å¥–",
          positivecode3: "3Dæ­£ç ",
          SpecialPrize3: "3Dç‰¹å¥–",
          FirstPrize3: "3Dä¸€å¥–",
          SixthPrize: "å…­å¥–",
          positivecode4: "4Dæ­£ç ",
          SpecialPrize4: "4Dç‰¹å¥–",
          FirstPrize4: "4Dä¸€å¥–",
          selectAll: "å…¨é€‰ä¸ä¸­",
          misses4: "4ä¸ä¸­",
          misses8: "8ä¸ä¸­",
          misses10: "10ä¸ä¸­",
          Enter: "è¾“å…¥",
          Compound: "å¤å¼",
          selected: "ä½ é€‰æ‹©äº†",
          bet: "æ³¨",
          CN: "å‘¨æ—¥",
          T2: "å‘¨ä¸€",
          T3: "å‘¨äºŒ",
          T4: "å‘¨ä¸‰",
          T5: "å‘¨å››",
          T6: "å‘¨äº”",
          T7: "å‘¨å…­",
          waitingdraw: "ç­‰å¾…å¼€å¥–",
          grandPrize: "ç‰¹ç­‰å¥–",
          firstprize: "ä¸€ç­‰å¥–",
          secondprize: "äºŒç­‰å¥–",
          thirdprize: "ä¸‰ç­‰å¥–",
          fourthprize: "å››ç­‰å¥–",
          fifthprize: "äº”ç­‰å¥–",
          sixthprize: "å…­ç­‰å¥–",
          seventhprize: "ä¸ƒç­‰å¥–",
          eighthprize: "å…«ç­‰å¥–",
          northernvietnam: "è¶Šå—åŒ—æ–¹",
          southvietnam: "è¶Šå—å—æ–¹",
          vietnamchinese: "è¶Šå—ä¸­æ–¹",
        },
        finance: {
          title: "ä¿é™©ç®±",
          titleRes: "ä¿é™©ç®±è®°å½•",
          tip1: "æ—¥åˆ©çŽ‡",
          tip2: "åˆ†é’Ÿè®¡ç®—ä¸€æ¬¡æ”¶ç›Š",
          shop: "ç§¯åˆ†å•†åŸŽ",
          shopTip: "æµ·é‡è±ªåŽå•†å“å…è´¹å…‘æ¢",
          lumpSum: "æ€»é‡‘é¢",
          security: "èµ„é‡‘å®‰å…¨",
          transferIn: "è½¬å…¥",
          transferOut: "è½¬å‡º",
          Every: "æ¯",
          minute: "åˆ†é’Ÿæ”¶ç›Š",
          earnings: "å·²äº§ç”Ÿæ”¶ç›Š",
          cumulativeIncome: "ç´¯è®¡æ”¶ç›Š",
          estimatedIncome: "é¢„è®¡æ”¶ç›Š",
          income: "æ”¶ç›Š",
          tip3: "èµ„é‡‘å®‰å…¨æœ‰ä¿éšœï¼Œéšæ—¶å¯ä»¥è½¬å‡º",
          history: "åŽ†å²è®°å½•",
          setIncome: "ç»“ç®—æ”¶ç›Š",
          allRecords: "å…¨éƒ¨è®°å½•",
          amountShare: "æ¯ä»½é‡‘é¢",
          enter: "è¯·è¾“å…¥æ•°é‡",
          availableBalance: "å¯ç”¨ä½™é¢",
          outAmount: "è½¬å‡ºé‡‘é¢",
          inAmount: "è½¬å…¥é‡‘é¢",
          all: "å…¨éƒ¨",
          balanceAvailable: "å¯ç”¨ä½™é¢ä¸è¶³",
          noIncome: "æ²¡æœ‰æ”¶ç›Š",
          noIncomeTip: "å½“å‰è¿˜æ²¡æœ‰æ”¶ç›Šæ˜¯å¦è½¬å‡º",
        },
        financeRule: {
          title: "äº†è§£ä¿é™©ç®±",
          Rtip: "æœ€ä½Žæ”¶ç›Šï¼Œæ—¥åˆ©çŽ‡",
          Rtip1: "é’±åŒ…ä½™é¢è½¬å…¥åŽæ¯",
          Rtip2: "åˆ†é’Ÿè®¡ç®—ä¸€æ¬¡æ”¶ç›Š",
          Rtip3:
            "æ”¶ç›Šå°†åœ¨ç¬¬äºŒæ¬¡è½¬å…¥æˆ–è½¬å‡ºæ—¶è¿›è¡Œç»“ç®—ä¸Šæ¬¡æ”¶ç›Šåˆ°é’±åŒ…ä½™é¢",
          Rtip4: "é’±åŒ…ä½™é¢è½¬å…¥ä¿é™©ç®±å¿…é¡»æŒ‰ä»½è½¬å…¥",
          Eg: "ä¾‹å¦‚",
          Rtip5: "ä¸€ä»½ä¸º",
          Rtip6: "ï¼Œè½¬å…¥2ä»½ä¸º",
          Rtip7: "ï¼Œ10ä»½ä¸º",
          Rtip8: "ï¼Œ50ä»½ä¸º",
          Rtip9: "ï¼Œè½¬å…¥é‡‘é¢å¿…é¡»æ˜¯1000çš„å€æ•°",
          Rtip10:
            "åœ¨ä¿è¯äº†æ‚¨çš„æ”¶ç›Šçš„æ¡ä»¶ä¸‹ï¼Œæ‚¨å¯ä»¥åœ¨ä»»ä½•æ—¶é—´è½¬å‡ºä¿é™©ç®±çš„ä½™é¢åˆ°é’±åŒ…ä½™é¢ï¼Œè½¬å‡ºé‡‘é¢å¿…é¡»æ˜¯ä»½æ•°çš„å€æ•°",
          friendly: "å‹æƒ…æç¤º",
          friendlytxt:
            "è¯·ä¸è¦é¢‘ç¹è½¬å…¥è½¬å‡ºï¼Œå­˜å…¥åŽä»Ž1åˆ†é’ŸåŽï¼Œå¼€å§‹è®¡ç®—æ”¶ç›Šï¼Œå•æ¬¡æ”¶ç›Šé‡‘é¢ç´¯è®¡æœªæ»¡0.01æ˜¯ä¸ä¼šè®¡å…¥â€œæ”¶ç›Šâ€å†…ã€‚",
          Safety: "å®‰å…¨",
          SafetyTxt: "å®‰å…¨æŠ€æœ¯å›¢é˜Ÿä¿è¯æ‚¨çš„èµ„é‡‘å®‰å…¨",
          SafetyTip:
            "ä¸ºäº†ä¿è¯æ‚¨çš„èµ„é‡‘å®‰å…¨ï¼Œå»ºè®®æ‚¨å°†é’±åŒ…ä½™é¢è½¬å…¥ä¿é™©ç®±",
        },
        flight: {
          title: "é£žè¡Œå‘˜",
          tit: "ç«çƒ­åˆºæ¿€çš„",
          sub: "è·³ä¼žæ¸¸æˆ",
          tip: "æ˜¯å¦è¿›å…¥æ¸¸æˆ",
          btn: "ç«‹å³è¿›å…¥",
          gameName: "é£žè¡Œå‘˜",
          gameTip: "é£žè¡Œå¹¶å¢žåŠ æ‚¨çš„åˆ©æ¶¦",
          enterGameName: "è¯·è¾“å…¥æ¸¸æˆåç§°",
        },
      },
    };
  },
  1406: function (e, a, t) {
    e.exports = t.p + "img/tren-duoi.18729f96.svg";
  },
  "178a": function (e, a, t) {
    e.exports = {
      homepage: {
        loadText: {
          loadMore: "mag karga ng isa pa",
          loading: "pagkarga",
          nomore: "wala na",
        },
        loadingText: "pagkarga",
        login: "magbukas",
        numberFormat: "ayos ng numero ng telepono",
        mobile: "teleponong selular",
        mobileNumber: "numero ng telepono",
        pwd: "kontrasenyas",
        oldpwd: "lumang kontrasenyas",
        pwds: "kumpirmahin ang kontrasenyas",
        pwdsTip: "mga pabagu-bagong kontrasenyas",
        register: "magrehistro",
        registerTip: "Mayroon ka nang account, mag-log in~",
        forgotPwd: "nakalimutan ang kontrasenyas",
        customerService: "serbisyo sa customer",
        resetPwd: "baguhin ang kontrasenyas",
        verificationCode: "pagpapatunay na kodigo",
        recommendationCode: "nirekomendang kodigo",
        agree: "sumasang-ayon ako",
        privacy: "patakaran sa pribado",
        submit: "isumite",
        network: "Network Error",
        tips: "maagap",
        remark: "puna",
        close: "sarado",
        full: "Full screen",
        zoomOut: "Zoom out",
        signout: "Gusto mo bang mag log out?",
        quit: "Gusto mo bang umalis sa larong ito?",
        enterGame: "Sigurado ka bang gusto mong sumali sa larong ito?",
        cancel: "kanselahin",
        confirm: "kumpirmahin ",
        success: "tagumpay",
        cancelled: "kinansela",
        fail: "nabigo",
        del: "burahin",
        copy: "kopyahin",
        copySuccess: "nagtagumpay ang kopya",
        required: "Ito ay kailangan",
        pleaseRequired: "Mangyaring punan ang mga kinakailangang patlang",
        passwordError:
          "Ang haba ng password ay hindi maaaring mas mababa sa 6, dapat ay kumbinasyon ng mga titik at numero",
        pleaseEmail: "Mangyaring Punan ang Tamang Email Address",
        informationTip:
          "Ang iyong impormasyon sa pag-login ay nag-expire na, mangyaring mag-login muli!",
        informationTip1:
          "Ang iyong account ay naka-log in sa ibang lugar, mangyaring baguhin ang iyong kontrasenyas sa oras!",
        noData: "Walang available na data",
        presaleRule:
          'Upang maprotektahan ang mga lehitimong karapatan at interes ng mga user na nakikilahok sa presale at mapanatili ang normal na pagkakasunud-sunod ng cperation ng presale, ang mga patakaran ay binabalangkas alinsunod sa mga nauugnay na kasunduan at tuntunin ng mga pambansang batas at regulasyon. Kabanata 1 Kahulugan1.1 Depinisyon ng presale : ay tumutukoy sa isang modelo ng pagbebenta kung saan ang isang merchant ay nagbibigay ng isang produkto o plano ng serbisyo, nangangalap ng mga order ng consumer sa pamamagitan ng mga tool sa presale na produkto, at nagbibigay ng mga kalakal at o serbisyo sa mga mamimili ayon sa naunang kasunduan1.2 Ang presale na modelo ay isang "dep os it" na modelo . Ang "Dep os it" ay tumutukoy sa isang nakapirming halaga ng presale na presyo ng kalakal na paunang naihatid. Ang "deposito" con ay lumahok sa maliliit na laro at magkaroon ng pagkakataong manalo ng higit pang mga deposito. Ang mga depos ay maaaring direktang ipagpalit sa mga kalakal. Ang mga depos na ito ay hindi ma-redeem.1.3 Mga produktong presale: tumutukoy sa produktong ini-relec ng mga mangangalakal gamit ang mga tool ng presale na produkto. Tanging ang mga presale na salita lamang ang minarkahan sa pamagat ng produkto o pahina ng mga detalye ng produkto, ngunit ang mga produkto na hindi gumagamit ng pres ale product tools ay hindi presale na mga produkto.1.4 Presale system: Tumutukoy sa system product tool na ibinigay upang suportahan ang mga merchon para sa presale na mga benta ng modelo .1.5 Presyo ng bilihin ng presale: tumutukoy sa presyo ng pagbebenta ng presale commodity. Ang presyo ng mga presale na kalakal ay binubuo ng dalawang bahagi: deposito at huling pagbabayad.',
        more: "Higit pa",
        verificationTip:
          "Matatanggap kaya nito ang verification code? Mangyaring makipag-ugnayan sa serbisyo sa kostumer",
        symbolU: "USDT",
        newes: "Pinakabagong Anunsyo",
        upgraded: "Ang event ay ina-upgrade......",
        gameTit: "Nabigo ang pagbawi ng balanse",
        gameLeft: "subukan ulit",
        gameRight: "pag-recycle",
        tab: {
          hot: "Sikat",
          lottety: "Lottery",
          fishing: "pangingisda",
          electronic: "Slots",
          physical: "Palakasan",
          realperson: "KASINO",
          chess: "Chess",
          smallgame: "maliit",
          safe: "Ligtas",
        },
        home: {
          lottetyTitle: "PINAKAMALAKING PAPARATING NA LOTTERY DRAW",
          recharge: "Recharge",
          balance: "Balanse",
          customerService: "Customer Sevice",
          lottety: "Lottery",
          wealth: "Wealth",
          leftTime: "Oras na natitira para bumili",
          min: "MIN",
          sec: "SEC",
          newTitle: "BALITA",
          newCenter: "SENTRO NG BALITA",
          newDes: "DETALYE NG BALITA",
          wrTime: "oras ng pagpapatakbo ng website",
          days: "MGA ARAW",
          hours: "ORAS",
          minutes: "MINUTO",
          seconds: "SEGUNDO",
          pengguna: "MANLALARO",
          jumlahTaruhan: "Kabuuan ng taya",
          Online: "Online",
          penarikanHari: "Withdrawal ngayon",
          gin: "sa",
          got: "nakuha",
          GameName: "Fishing Game",
          popular: "Tanyag na rekomendasyon",
          platform: "Rekomendasyon sa platform",
          Game1: "5D Lotre",
          Game2: "Win Go",
          Game3: "Slots",
          Game4: "K3 Lotre",
          Game5: "KASINO",
          Game6: "Palakasan",
          Game7: "16 Selections",
          Game8: "Bansa",
          Game9: "Singapore 4D",
          Game10: "Vietnam Lottery",
          Game11: "Magnum 4D",
          Game12: "Damacai 4D",
          Game13: "TOTO 4D",
          Game14: "Rapid 4D",
          Game1Tip: "Hulaan ang numero/high/low/odd/even",
          Game2Tip: "Hulaan ang numero/Berde/Lila/Pula para manalo",
          Game3Tip: "Lianliankan/Lianliankan/Lianliankan",
          Game4Tip: "Hulaan ang numero/high/low/odd/even",
          Game5Tip: "Baccarat/Dragon Tiger/Roulette/Sic Bo",
          Game6Tip: "Real time event/all in it",
          Game7Tip: "Hulaan ang numero/high/low/odd/even",
          Game8Tip: "Real time event/all in it",
          Game9Tip: "Hulaan ang numero/high/low/odd/even",
          Game10Tip: "Hulaan ang numero/Berde/Lila/Pula para manalo",
          Game11Tip: "Hulaan ang numero/high/low/odd/even",
          Game12Tip: "Hulaan ang numero/high/low/odd/even",
          Game13Tip: "Hulaan ang numero/high/low/odd/even",
          Game14Tip: "Hulaan ang numero/high/low/odd/even",
          Game6t: "Sabah",
          nextDraw: "Susunod na Draw",
          playNow: "Maglaro ngayon",
          howWorks: "Paano ito gumagana?",
          game_title1: "Pumili ng Isang Laro",
          game_title2: "Piliin ang iyong mgnumero",
          game_title3: "Halaga ng Taya",
          game_title4: "Kumuha ng Bonus",
          game_First: "Unang Hakbang",
          game_Second: "Pangalawang Hakbang",
          game_Third: "Pangatlong Hakbang",
          game_Fourth: "Ang pang-apat na hakbang",
          list: [
            {
              title: "Pumili ng Isang Laro",
              txt: "Maaari mong piliing maglaro ng 1 minuto, 3 minuto, 5 minuto, at 10 minutong mga laro sa lottery.",
            },
            {
              title: "Piliin ang iyong mgnumero",
              txt: "Piliin ang iyong masuwerteng numero o kulay.",
            },
            {
              title: "Halaga ng Taya",
              txt: "Piliin ang halagang gusto mong taya at kumpirmahin.",
            },
            {
              title: "Kumuha ng Bonus",
              txt: "Kapag pinili mo ang masuwerteng numero ng kasalukuyang panahon, awtomatikong idaragdag ng system ang bonus sa iyong balanse",
            },
          ],
        },
        index: {
          Charttren: "Chart tren",
          Total: "Kabuuan",
          walletBalance: "Balanse sa Wallet",
          recharge: "Recharge",
          withdraw: "Withdraw",
          lotteyRule: "Panuntunan sa Lottery",
          iKnow: "I Know",
          big: "BIG",
          small: "SMALL",
          green: "Green",
          violet: "Violet",
          red: "Pula",
          selectGreen: "Piliin ang Green",
          selectViolet: "Piliin ang Violet",
          selectRed: "Piliin ang Pula",
          randomBetting: "RANDOM NA PAGTAYA",
          gameRecord: "Record ng Laro",
          myGameRecord: "Aking Game Rekord",
          period: "Period",
          blockHeight: "Block Height",
          blockTime: "Block Time",
          hashValue: "Hash Value",
          number: "Numero",
          size: "Sukat",
          color: "Kulay",
          result: "Result",
          sum: "Kabuuan",
          high: "High",
          low: "Low",
          odd: "Odd",
          even: "Even",
          money: "Pera",
          multiply: " Multiply",
          presaleRule: "Panuntunan ng Presale",
          presaleRuleTit:
            "Pakitiyak na sumasang-ayon ako sa mga tuntunin bago ang pagbebenta",
          totalPrice: "KABUUANG PRESYO",
          Select: "PILIIN",
          SelectCon: "Nilalaman ng pagtaya",
          firstPage: "Ito ang unang pahina",
          lastpage: "Ito ang huling pahina",
          periodDetail: "Detalye ng Period",
          orderNumber: "Order Number",
          contractMoney: "Contract Money",
          contractCount: "Bilang ng Kontrata",
          delivery: "PAGHAHATID",
          fee: "BAYAD",
          openPrice: "Open Price",
          status: "Status",
          amount: "Amount",
          createTime: "Create Time",
          BettingAssistant: "Betting Assistant (Last 100 period)",
          Missing: "NAWAWALA",
          AvgMissing: "Avg Missing",
          Frequency: "Frequency",
          MaxContinued: "Max Continued",
          PleaseInteger: "Mangyaring maglagay ng integer",
          Odds: "Odds",
          publicQuery: "Public chain query",
          howPlay: "MGA TUNTUNIN NG LARO",
          distancedraw: "Distance draw",
          multiple: "Multiple",
          numberBets: "BILANG NG TAYA",
          reset: "Reset",
          time: "Time",
          lotteryTime: "Oras ng lottery",
          notPressed: "hindi pinindot",
          pressed: "pinindot",
          bedrawn: "To be drawn",
          awarding: "awarding",
          periodNmu: "Numero ng Period ng Pagtaya",
          lotteryNmu: "Lottery Number",
        },
        myProfile: {
          title: "Aking Profile",
          profilePhoto: "Larawan sa Profile",
          nickname: "PALAYAW",
          modifyNickname: "Baguhin ang Palayaw",
          newNicknameTit: "PALAYAW",
        },
        about: {
          title: "Tungkol",
          Games: "LARO",
          privacypolicy: "Patakaran sa Privacy",
          disclosureagreement: "Kasunduan sa Pagbubunyag ng Panganib",
        },
        privacypolicy: {
          title: "Patakaran sa Privacy",
          agree: "Kasunduan sa Pagbubunyag ng Panganib",
        },
        keFuMenu: { title: "Customer Service" },
        recharge: {
          title: "Recharge",
          selectRecharge:
            "Mangyaring Pumili ng Recharge na channel upang Mag-recharge",
          next: "SUNOD",
          previous: "PABALIK",
          rechargeAmount: "Halaga ng deposit",
          rechargeAmountRangeIpt: "Ilagay o Piliin ang Halaga ng Recharge",
          rechargeAmountRange: "Recharge Amount Range",
        },
        rechargeChack: {
          title: "Recharge",
          totalAmouunt: "Kubuang halaga",
          paymentMethod: "PARAAN NG PAGBAYAD",
          localBank: "Local Bank",
          enterAmount: "Pakilagay ang halaga",
          theAmount: "Ang halaga ay dapat na isang integer ng 10",
          accountName: "pangalan ng account",
          bankNumber: "Bank Number",
          bankName: "Pangalan ng bangko",
          paymentAmount: "Payment Amount",
          orderNumber: "Order Number",
          creationTime: "Creation Time",
          transferAmount:
            "Ang Amount ng Pagtransfer ay Dapat Punan Sa Order na Ginawa Mo, Kung hindi ay Hindi Magtatagumpay ang Deposito",
          transferAmount2: "",
          transferAmount1:
            "Tandaan: Huwag kanselahin ang order ng deposito kung nakumpleto ang pagtransfer ng pera",
          depositAmount: "Halaga ng Deposito",
          upImgTitle:
            "Mangyaring mag-upload ng resibo ng transaksyon na naglalaman ng UTR",
          upFormate: "Mag-upload lamang ng mga larawan sa jpg,jpeg,png format",
          selectFile: "piliin ang upload file",
        },
        touchngo: {
          title: "Touch N Go Recharge",
          name: "PANGALAN",
          mobileNumber: "Mobile Number",
        },
        rechargeRecord: {
          title: "Recharge Record",
          unpaid: "walang bayad",
          eazyPay: "EazyPay",
          success: "TAGUMPAY",
          others: "MGA IBA",
        },
        paymentMethod: {
          title: "PARAAN NG PAGBAYAD",
          totalPaid: "Kabuuang Halaga na Babayaran",
          choose: "Pumili ng Kard",
          payNow: "MAGLARO NGAYON",
          topInstructions: "Proseso sa pag deposit",
          contentTmp1:
            "Mangyaring itransfer sa receiving bank account sa itaas",
          contentTmp2:
            "Mangyaring punan nang tama ang pangalan at account number ng cardholder para sa pag-verify",
          contentTmp3:
            "Isumite ang bawat pagtransfer nang isang beses, mangyaring huwag isumite ang order nang paulit-ulit",
          contentTmp4:
            "Tiyakin na isumite ang order pagkatapos matapos ang pagtransfer, kung hindi, hindi namin masusuri ang iyong pagbabayad sa oras",
          waitingPayment: "Naghihintay para sa pagbabayad",
          receivingTitle: "Receiving Bank Card Information",
          confirm1: "OrderNumber",
          confirm2: "PANGALAN NG BANGKO",
          confirm3: "pangalan ng account",
          confirm4: "Numero ng account sa bangko",
          confirm5: "IFSC",
          confirm6: "Branch",
          Required: "Punan ang Reference Number",
          Return: "BALIK",
        },
        promotion: {
          title: "Promosyon",
          bouns: "Bonus",
          level_1: "Level1",
          level_2: "Level2",
          totalPeople: "Kabuuan ng tao",
          contribution: "kontribusyon",
          code: "Aking Promosyon Code",
          link: "Aking Promosyon Link",
        },
        promoteRecord: { title: "Promote Record", People: "Tao" },
        bonusrecord: { title: "Nakarehistrong Downline LVL 1" },
        redenvelopes: {
          title: "Regalo",
          Hello: "Hello",
          Eveverone: "Lahat",
          des: "May Regalo Kami Para sa Iyo",
          giftCode: "Gift Code",
          PleaseGiftCode: "Pakilagay ang code sa pagkuha ng regalo",
          Receive: "Receive a Gift",
          Best: "Best Wishes sa Iyo",
          Congratulations: "Binabati kita!",
          already: "Nakatanggap ka na ng premyo ng",
          ACCEPT: "Receive",
          txt: "Kumusta, maaari kang makipag-ugnayan sa MZPlay Customer Service, gamitin ang balanse ng iyong account upang bumili ng gift code, maaaring ibahagi o ipadala sa iyong kaibigan para i-claim",
        },
        withdrawal: {
          title: "Withdrawal",
          balance: "balanse",
          enterwithdraw: "Mangyaring Ipasok ang Halaga ng Pag-withdraw",
          withdrawAamount: "Withdraw Amount",
          fee: "bayad",
          toAccount: "To Account",
          rate: "Rate",
          totalBet: "Kabuuan na taya",
          withdrawTime: "Withdraw Time",
          dailyWithdrawal: "Bilang ng pagwithdraw sa buong araw",
          withdrawMoney: "Withdrawal Amount Range",
          payout: "pagbabayad",
          bankCard: "Bangko",
          selectBank: "Pumili ng Bangko",
          addBankCard: "Maglagay ng Bangko",
          rechargeTip1: "Mangyaring Ipasok ang Halaga ng pagwithdraw",
          rechargeTip2: "Mangyaring Pumili ng Bank Card",
          rechargeTip3: "Mangyaring Maglagay ng Password",
          select: "Pumili",
          add: "Idagdag",
        },
        withdrawrecord: {
          title: "Withdraw Record",
          applying: "NAG-AAPLAY",
          agree: "SUMANG-AYON",
          refuse: "Tanggihan",
        },
        mission: {
          title: "Ipromote ang Misyon",
          totalPeople: "Kabuuan ng tao",
          totalAmount: "Kabuuang halaga",
          myTask: "My Task",
          invited: "Inimbitahan",
          validMenmber: "Valid na Miyembro",
          receive: "Receive",
        },
        addbank: {
          title: "Maglagay ng Bangko",
          bankName: "Pangalan ng bangko",
          beneficiaryName: "Pangalan",
          accountNo: "Account No",
          bankCity: "Bank City",
          IFSCCode: "IFSC Code",
          email: "E-Mail",
          bankProvince: "Lalawigan ng Bangko",
          bankBranch: "Magdagdag ng Bank Account",
          addBtn: "Maglagay ng Bangko",
          opsionalbankProvince: "Lalawigan ng Bangko",
          opsionalbankBranch: "Address ng Sangay ng Bangko",
        },
        addElcbank: {
          title: "Maglagay ng E-wallet",
          addBtn: "Maglagay ng E-wallet",
          mobile: "Pakilagay ang iyong e-wallet mobile phone number",
        },
        addUsdt: {
          title: "Magdagdag ng USDT",
          addBtn: "Magdagdag ng USDT",
          type: "Uri ng USDT",
          address: "Wallet Address",
          tip: "Error sa Format ng Address ng USDT",
          txt: "Format ng address ng USDT (TRC). Ang address ay binubuo ng 34 na mga character na nagsisimula sa titik T.",
          txt1: "Format ng address ng USDT (ERC). Ang address ay binubuo ng 42 character na nagsisimula sa mga letrang 0x.",
        },
        wellet: {
          title: "Wallet",
          withdrawalBalance: "Balanse sa Pag-withdraw",
          historicalWithdrawal: "History Withdrawal",
          accumulatedWithdrawal: "Ngayong Withdrawal",
          everyDay: "ARAW ARAW",
          order: "BILANG",
          tip: "Free cash withdrawal opportunity",
          myCard: "Aking Kard",
          rechargeRecord: "Deposit Rekord",
          withdrawRecord: "Withdraw Rekord",
        },
        transactionrecord: { title: "Record ng Transaksyon" },
        newtutorial: {
          title: "Beginner Tutorial",
          chooseYour: "Pumili ka",
          favoriteGame: "Paboritong Laro",
          pickLucky: "Piliin ang Iyong Maswerte",
          numberColor: "Numero o kulay",
          SKIP: "Laktawan",
          NEXT: "Sunod",
          confirmAmount: "Kumpirmahin ang halaga ng iyong pagtaya",
          getBouns: "Get Bouns",
          moneyWill:
            "Madaragdagan ang iyong pera sa game account, pagkatapos mong manalo sa round ",
          youRecharge: "Maaari kang mag-recharge",
          withdrawHere: "o mag-withdraw dito",
        },
        download: {
          title: "App Download",
          goBtn: "Go Download",
          des: "Isang Propesyonal na Platform ng Laro ng Lottery",
          playNow: "Maglaro ka na",
          lotteryGame: "Larong Lottery",
          btn: "I-download",
        },
        tabbar: {
          tabbarList: [
            {
              id: 1,
              name: "HOME",
              imgAction: t("07d4"),
              img: t("2288"),
              to: "/home",
            },
            {
              id: 2,
              name: "AKTIBITI",
              imgAction: t("b5ef"),
              img: t("5b0e"),
              to: "/activity",
            },
            {
              id: 3,
              name: "PROMOSYON",
              imgAction: t("7268"),
              img: t("7268"),
              to: "/promotion",
            },
            {
              id: 4,
              name: "WALLET",
              imgAction: t("4c6e"),
              img: t("b2a5"),
              to: "/wallet",
            },
            {
              id: 5,
              name: "SENTRO",
              imgAction: t("e636"),
              img: t("6c7c"),
              to: "/mian",
            },
          ],
        },
        mian: {
          title: "SENTRO",
          historical: "Rekord ng mga taya",
          funding: "Kasaysayan ng Transaksyon",
          loginLog: "Login log",
          message: "Mensahe",
          balance: "Lahat ng Wallets",
          totalwallet: "Kabuuang Wallet",
          refreshwallet: "Isang-click na Pag-recycle",
          loginOut: "Login out",
          menuName1: "ACCOUNT SECURITY",
          menuName2: "GOOGLE AUTHENTICATOR",
          menuName3: "IPROMOTE ANG MISYON",
          menuName4: "GIFT CODE",
          menuName5: "BEGINNER TUTORIAL",
          menuName6: "Tungkol",
          menuName7: "CUSTOMER SERVICE",
        },
        checkIn: {
          title: "Check In",
          attendanceRules: "Mga Panuntunan sa Pag-check In",
          txt: "Mag-sign in para makakuha ng bonus",
          rule: "Mga Patakaran ng laro",
          record: "Rekord ng CheckIn",
          today: "Signed today",
          received: "Received",
          day: "ARAW",
          btn: "Mag-sign In",
          Receive: "Tumanggap ng Regalo",
          Best: "Best Wishes sa Iyo",
          Congratulations: "Binabati kita!",
          already: "Nakatanggap ka na ng reward ng",
          ACCEPT: "Receive",
        },
        checkInDes: {
          title: "Mga Panuntunan sa Pag-check In",
          checkInDay: "Check In Day",
          accumulatedAmount: "Naipon na Halaga",
          checkInBonus: "Check In Bonus",
          rulesDetails: "Mga Detalye ng Panuntunan",
          tep1: "Ang mga user na hindi pa nakapag-recharge ay hindi makakatanggap.",
          tep2: "Simula sa unang (1) araw, kailangan ng recharge.",
          tep3: "Ang accumulative recharge na halaga ay dapat matugunan ang mga kondisyon at maaari lamang i-claim isang beses sa isang araw.",
          tep4: "Ang plataporma ay may panghuling karapatan na bigyang-kahulugan ang aktibidad na ito. Kung mayroon kang anumang mga kaugnay na katanungan, mangyaring makipag-ugnayan sa customer service!",
          tep5: "Ang attendance bonus ay random na ipapamahagi pagkatapos ng ika-7 deposito",
        },
        historicalBetting: { title: "Historical betting" },
        loginLog: { title: "Login Log" },
        messageCenter: {
          title: "Message Center",
          readAll: "Basahan lahat",
          removeAll: "Alisin Lahat",
          delTitle: "Sigurado ka bang gusto mong burahin?",
          delall: "Sigurado ka bang gusto mong burahin ang lahat?",
          readall: "Sigurado ka bang gusto mong basahin ang lahat?",
        },
        messageDes: { title: "Mga Detalye ng Mensahe" },
        lottery: {
          drawResult: "Mga Resulta ng Lottery",
          period: "Period",
          money: "pera",
          multiply: "Multiply",
          totalPrice: "Kabuuang presyo",
          pleaseBet: "Mangyaring Maglagay ng Taya",
          election: "Baliktad na Halalan",
        },
        colorLand: {
          tab1: "Kabuuan na taya",
          tab2: "2 parehas na numero",
          tab3: "3 tugma na numero",
          tab4: "Magkaibang numero",
          title1: "Pumili ng 2 magkatugmang numero",
          tip1: "*Kung ang pambungad na numero ay tumugma sa 2 numero ng pagtaya, ito ay isang panalo. (Maliban sa tatlong parehong numero)",
          title2: "Pumili ng isang natatanging pares ng mga numero",
          tip2: "*Pumili ng hindi bababa sa 1 pares ng parehong mga numero at 1 magkaibang numero na tataya. Kung ang pambungad na numero ay tumutugma sa numero ng pagtaya, ito ay isang panalo.",
          title3: "Pumili lamang ng 3 numero",
          tip3: "*Kung ang pambungad na numero ay tumugma sa isang 3 numero ng pagtaya, ito ay isang panalo",
          title4: "Pumili ng 3 magkatugmang numero",
          tip4: "*Kung ang mga pambungad na numero ay nasa parehong numero ng anumang tatlong numero, ito ay isang panalo",
          title5: "Pumili ng 3 magkaibang numero",
          tip5: "*Pumili ng 3 o higit pang mga numero, ang pagbubukas ng resulta sa tatlong numero ay magkaibang mga numero, Kung ang numero ay pareho sa napiling numero, ito ay isang panalo",
          title6: "Pumili ng 3 magkakasunod na numero",
          tip6: "*Kung ang mga pambungad na numero ay alinman sa tatlong magkakasunod na numero, Iyan ang panalong resulta.",
          title7: "Pumili ng 2 magkaibang numero",
          tip7: "*Pumili ng 2 o higit pang mga numero, ang resulta ng pagbubukas sa dalawang numero ay magkaibang mga numero, Kung ang numero ay pareho sa napiling numero, ito ay isang panalo",
          selectCon1: "Pumili ng 2 magkatugmang numeroï¼š",
          selectCon2: "Pumili ng isang natatanging pares ng mga numeroï¼š",
          selectCon3: "Pumili lamang ng 3 numeroï¼š",
          selectCon4: "Pumili ng 3 magkaibang numeroï¼š",
          selectCon5: "Pumili ng 2 magkaibang numeroï¼š",
          gameType1: "3 iba pang mga numero",
          gameType2: "3 magkakasunod na numero",
          gameType3: "2 parehong numero",
          gameType4: "3 parehong numero",
        },
        activity: { title: "Aktibiti" },
        activityDes: { title: "Mga Detalye ng Aktibidad" },
        usdt: {
          title: "USDT Recharge",
          address: "TxID or Hash Address",
          Raddress: "Recharge Address",
          QRcode: "QR code",
          tit1: "bumili ng pera",
          tit2: "itransfer sa address",
          tit3: "I-seal ang deal",
          tit4: "maghintay sa pagdating",
          tip1: "1. Ang recharge address ay binago sa real time. Mangyaring huwag i-save ang recharge address. Mangyaring kunin muli ang recharge address bago ang bawat recharge upang maiwasan ang pagkawala ng digital currency. ",
          tip2: "2. Pagkatapos kopyahin ang recharge address, mangyaring pumunta sa digital currency wallet na ginagamit mo para mag-withdraw at magtransfer ng pera. Huwag mag-recharge ng mga digital asset na iba sa mga napiling blockchain, kung hindi, ang mga asset ay hindi makukuha.",
          tip3: "Ang recharge-withdrawal ay karaniwang awtomatikong dumarating sa loob ng 1-5 minuto, kung hindi, mangyaring makipag-ugnayan sa online na customer service.",
          tip4: "(Nang walang anumang bayad sa pangangasiwa tulad ng: iwithdraw ang 100 sa account 100)",
        },
        trx: {
          uset: "TRX",
          title: "TRX Recharge",
          address: "TxID or Hash Address",
        },
        promotionNew: {
          title: "Promosyon",
          dataOverview: "Pangkalahatang-ideya ng Data",
          myTeam: "Aking Team",
          upRecord: "History",
          tutorial: "Pagtuturo",
          myReward: "Aking Reward",
          totalComm: "Kahapon Ay Total Commission",
          directComm: "Direktang Komisyon",
          teamComm: "Komisyon ng Koponan",
          directSubord: "Bilang ng Direktang Subordinates",
          totalTeams: "Kabuuang Bilang ng Mga Koponan",
          newToday: "Imbitasyon Ngayon",
          newTeam: "Ngayong Bagong Laki ng Koponan",
          weekComm: "Kabuuang Komisyon Para Sa isang Linggo",
          totalComm1: "Kabuuang Komisyon",
          QRcode: "Pindutin nang matagal Upang I-save Ang QR Code",
          copyCode: "Kopyahin ang Code ng Imbitasyon",
          copyLink: "Kopyahin ang Link",
          rebateTable: "Halaga ng Rebate Kaukulang Talaan",
          agencyLevel: "Antas ng Ahente",
          teamNumber: "Kabuuang Referral",
          teamFlow: "Kabuuang Taya",
          teamRecharge: "Recharge",
          validDay:
            "Mga Valid na Miyembro: Mag-recharge O Tumaya Sa Parehong Araw",
          commMethod: "Paraan ng Pagkalkula ng Komisyon",
          Hierarchy: "Hierarchy",
          rebateRatio: "Ratio ng Rebate",
          firstMember: "Tier 1",
          secondMember: "Tier 2",
          thirdMember: "Tier 3",
          tierMember: "Tier 4",
          bettingTurnover: "Komisyon",
          agent: "Lv",
          upTime: "Oras ng pick-up",
          receiveAmount: "Natanggap na Halaga",
          operate: "Magpatakbo",
          details: "Mga Detalye",
          date: "Petsa",
          directTeam: "Direktang Koponan",
          people: "Tao",
          pleaseChoose: "Mangyaring Pumili",
          totalBet: "Kabuuang Halaga ng Taya",
          totalAmount: "Kabuuang Halaga ng Rebate",
          Inquire: "Magtanong",
          nickName: "Palayaw",
          runningWater: "Turnover",
          condition: "Status",
          enable: "Paganahin",
          disabled: "Hindi pinagana",
          personalFlow: "Personal na Flow",
          personalRecharge: "Personal na Recharge",
          rgistrationTime: "Oras ng Pagpaparehistro",
          subordinates: "Ang Bilang ng mga Subordinates",
          year: "Taon",
          moon: "Buwan",
          day: "araw",
          selectList: [
            { name: "Tier 1", code: 1 },
            { name: "Tier 2", code: 2 },
            { name: "Tier 3", code: 3 },
            { name: "Tier 4", code: 4 },
            { name: "Tier 5", code: 5 },
            { name: "Tier 6", code: 6 },
          ],
          promoteMoney: "I-promote",
          uid: "UID",
        },
        verify: {
          title: "Google Authenticator",
          unbind: "Alisin/Baguhin ang Validator",
          downTit: "I-download At Magrehistro",
          downTxt:
            "Paki-download ang Google Authenticator. Kung kumpleto na ang pag-install, i-click ang button na bind upang i-bind ang iyong lottery account",
          bind: "Bind",
          downVerify: "I-download ang Google Authenticator",
          vexplainTit: "Binding Validator Description",
          list: [
            {
              txt: "Kailangan mong i-save ang 16-digit na key na nabuo mula sa iyong lottery account sa isang ligtas na lugar at kopyahin ang key",
            },
            { txt: "Kailangan mong buksan ang google authenticator" },
            {
              txt: "Magdagdag ng game account, kopyahin ang 16-digit na key input",
            },
            {
              txt: "Matapos matagumpay ang pagdaragdag, awtomatikong bubuo ng 6-digit na digital verification code",
            },
          ],
          vexplainNext: "Laktawan ang Tutorial",
          vbackupTit: "Backup Key",
          vbackupTxt:
            "Mangyaring mag-donate ng mahalagang key at itago ito sa isang ligtas na lugar, kung abandunahin ng telepono ang key na ito, kung hindi, pananatilihin mo ang life tester sa loob ng 7 araw.",
          vsafetyTit: "Verify Security",
          vsafetyTxt: "Ipadala ang verification code sa iyong mobile number",
          vsafetySms: "Mobile Verification code",
          vsafetyTip:
            "Authentication security unavailable? Contact Customer Service",
          vsafetySnsnull: "Hindi maaring mabakante ang verification code",
          loginTit: "Google Login Verification",
          loginTxt:
            "Ang proteksyon ng account ay pinagana, mangyaring sundin ang mga senyas upang makumpleto ang mga sumusunod na operasyon",
          loginTip:
            "Mangyaring buksan ang Alibaba Cloud APP o Google Authenticator (authentication device) sa iyong mobile phone, mangyaring ilagay ang 6-digit na dynamic na code",
          loginNum: "6 na numero",
        },
        long: {
          title: "Long Continuous Trend assistant",
          newTitle: "Long term",
          betTitle: "Aking taya",
          expect: "Periods",
          andDig: "Tie Big",
          andSmall: "Tie Small",
          andodd: "Tie Odd",
          andeven: "Tie Even",
          illustrate: "Paliwanag",
          txt1: 'Ang long dragon helper ay isang helper tool na sumusubaybay at nagbibilang ng mga resulta ng Win Go, 5D, K3, at ang "odd and even" lottery, at maaaring gumawa ng mabilis na taya',
          txt2: 'Ang posibilidad ng big, small, odd, at kahit na lumitaw sa bawat period ay pareho. Kung ang mga resulta ng 3 o higit pang magkakasunod na period ay pareho, ito ay tinatawag na "mahabang dragon". Kadalasan, ang paraan ng "pagputol ng dragon" o "sundan ang dragon" ay gagamit ng multiply betting.',
          list: [
            {
              name: "Ano ang cut Dragon?",
              txt: 'Kung ang resulta ay 5 magkakasunod na "ODD", maaari mong piliin ang "Even" upang tumaya, ang plano sa pagtaya na ito ay tinatawag na "cut dragon";',
            },
            {
              name: "Ano ang Follow Dragon?",
              txt: 'Kung ang resulta ay 5 magkakasunod na "Odd", patuloy na piliin ang "Odd" upang tumaya, ang plano sa pagtaya na ito ay tinatawag na "Sundan ang dragon";',
            },
            {
              name: "Ano ang multiply?",
              txt: 'Ang double betting ay isang multiply betting method, na isang paraan ng pagtaya upang matiyak ang patuloy na kita sa proseso ng "pagputol ng dragon" o "follow the dragon".',
            },
          ],
          txt3: "The latest long dragon: Awtomatikong ia-update ng function na ito ang proyekto ng laro na may parehong resulta sa 5 magkakasunod na mga draw sa lottery, Maginhawa para sa iyo na magdesisyon kung puputulin ang dragon o sundin ang dragon.",
          txt4: "My Bet: Pinapadali ng feature na ito na tingnan ang iyong mga taya at mga resulta ng draw.",
        },
        shop: {
          currentPoints: "Mga Kasalukuyang Puntos",
          Redeem: "I-redeem Ngayon",
          pointsGo: "Points Mall Go now",
          commodityOrder: "Order ng kalakal",
          pointsRecord: "Rekord ng mga Puntos",
          title: "Points Mall",
          pointsAvailable: "Magagamit ang mga puntos",
          rule: "Mga Panuntunan sa Mga Puntos",
          stock: "Stock",
          redeemed: "Natubos",
          integral: "Integral",
          productName: "Pangalan ng produkto",
          exchange: "Exchange Conditions",
          name: "First and last name",
          address: "Address ng Pagpapadala",
          redeem: "Ipagpatuloy ang pag-redeem",
          checkOrder: "Check Order",
          addressEmpty: "Hindi maaaring walang laman ang address!",
          ordered: "Ordered",
          delivery: "Delivery",
          completed: "nakumpleto",
          orderDetails: "Mga Detalye ng Order",
          orderTime: "Oras ng order",
          orderStatus: "Startus ng order",
          signTime: "Oras ng Pagsusumite",
          signPhoto: "Mag-sign para sa larawan",
        },
        selections: {
          distanceDraw: "Draw",
          champion: "1st",
          runnerUp: "2nd",
          ndRunner: "3rd",
          outof1: "1/16",
          outof2: "2/16",
          outof3: "3/16",
        },
        lotteryD: {
          rules: "MGA TUNTUNIN",
          LotteryTime: "Oras ng lottery",
          seal: "selyo",
          stPrize1: "1st Prize",
          stPrize2: "2st Prize",
          stPrize3: "3st Prize",
          Finalist: "Finalist",
          consolationprize: "Consolation Prize",
          Doubledisc: "2sides",
          TraditionalDish: "Standard",
          Doubleside: "2sides",
          Choosenumber: "Fixed Place",
          FourDigit: "4D Standard",
          FourSlection: "4D Roll play",
          duplicatenumber: "Duplicate Number",
          numberFormat: "Wrong Number Format",
          Bigone: "Mbox Big",
          Smallone: "Mbox Small",
          Bothone: "Big+Small",
          Addbet: "Magdagdag ng taya",
          Randomnumber: "Random group number",
          Machineselection: "Machine selection",
          Enternumber: "Ilagay ang iyong gustong numero",
          Concatenatedcode: "Pinagsama-samang code (package group)",
          select1: "2D Piliin Lahat",
          select2: "3D Piliin Lahat",
          select3: "4D Piliin Lahat",
          select4: "2D Positive Code",
          select5: "2D Espesyal na Premyo",
          select6: "2D Unang Premyo",
          select7: "2D",
          select8: "3D",
          SeventhPrize: "Ikapitong Premyo",
          EighthPrize: "Ikawalong Premyo",
          positivecode3: "3D Positive Code",
          SpecialPrize3: "3D Espesyal na Premyo",
          FirstPrize3: "3D na Unang Premyo",
          SixthPrize: "Ika-anim na Premyo",
          positivecode4: "4D Positive Code",
          SpecialPrize4: "4D Espesyal na Premyo",
          FirstPrize4: "4D Unang Premyo",
          selectAll: "Nabigong iselect ang Lahat",
          misses4: "4 Misses",
          misses8: "8 Misses",
          misses10: "10 Misses",
          Enter: "pumasok",
          Compound: "Compound",
          selected: "Pinili mo",
          bet: "taya",
          CN: "Linggo",
          T2: "Lunes",
          T3: "Martes",
          T4: "Miyerkules",
          T5: "Huwebes",
          T6: "Byernes",
          T7: "Sabado",
          waitingdraw: "Waiting Lottery",
          grandPrize: "Grand Prize",
          firstprize: "Unang Premyo",
          secondprize: "Ikalawang Premyo",
          thirdprize: "Ikatlong Premyo",
          fourthprize: "Ikaapat Premyo",
          fifthprize: "Ikalimang Premyo",
          sixthprize: "Ika-anim na Premyo",
          seventhprize: "Ikapitong Premyo",
          eighthprize: "Ikawalong Premyo",
          northernvietnam: "Northern Vietnam",
          southvietnam: "South Vietnam",
          vietnamchinese: "Vietnam Chinese",
        },
        finance: {
          title: "Safe",
          titleRes: "Safe Record",
          tip1: "Daily rate",
          tip2: "Ang mga kita ay kinakalkula bawat minuto",
          shop: "Points Mall",
          shopTip: "Libreng pagtubos ng napakalaking luxury goods",
          lumpSum: "Kabuuan",
          security: "Pinansyal na Seguridad",
          transferIn: "Transfer In",
          transferOut: "Transfer Out",
          Every: "bawat",
          minute: "Minutong Kita",
          earnings: "Binuo na Kita",
          cumulativeIncome: "Pinagsama-samang Kita",
          estimatedIncome: "Tinatayang kita",
          income: "kita",
          tip3: "Ang mga pondo ay safe at secured, at maaaring itransfer anumang oras",
          history: "Tala ng Kasaysayan",
          setIncome: "Settlement Income",
          allRecords: "Lahat ng Rekord",
          amountShare: "Halaga bawat kopya",
          enter: "Pakilagay ang bilang ng dami",
          availableBalance: "Available na balanse",
          outAmount: "Transfer Funds",
          inAmount: "Transfer Amount",
          all: "Lahat",
          balanceAvailable: "Hindi sapat na balanse ang available",
          noIncome: "walang kita",
          noIncomeTip: "Whether the income is currently transferred out",
        },
        financeRule: {
          title: "Learn About Safes",
          Rtip: "Minimum return, daily interest rate",
          Rtip1: "Pagkatapos mailipat ang balanse ng wallet, bawat",
          Rtip2: "Ang mga kita ay kinakalkula bawat minuto",
          Rtip3:
            "Maaayos ang mga kita or profit kapag nagtatransfer papasok o palabas sa pangalawang pagkakataon, at ang huling kita ay ililipat sa balanse ng wallet",
          Rtip4:
            "Ang balanse ng wallet na inilipat sa safe ay dapat ilipat sa mga unit",
          Eg: "Halimbawa",
          Rtip5: "isang serving",
          Rtip6: ", inilipat sa 2 kopya bilang",
          Rtip7: ", 10 kopya para sa",
          Rtip8: ", 50 kopya para sa",
          Rtip9:
            ", ang halaga ng pagtrasfer ay dapat na isang multiple ng 1000",
          Rtip10:
            "Sa ilalim ng kondisyon na ginagarantiyahan ang iyong kita, maaari mong ilipat ang balanse ng ligtas sa balanse ng pitaka anumang oras, at ang halaga ng paglilipat ay dapat na isang maramihang bilang ng mga kopya",
          friendly: "magiliw na paalala",
          friendlytxt:
            'Mangyaring huwag maglipat ng papasok at paglabas ng madalas. Ang mga kita ay kakalkulahin mula sa 1 minuto pagkatapos magdeposito. Kung ang naiipon na halaga ng isang solong halaga ng kita ay mas mababa sa 0.01, hindi ito isasama sa "mga kita".',
          Safety: "Safety",
          SafetyTxt:
            "Tinitiyak ng security technical team ang kaligtasan ng iyong mga pondo",
          SafetyTip:
            "Upang matiyak ang kaligtasan ng iyong mga pondo, inirerekumenda na ilipat mo ang balanse ng iyong wallet sa isang safe",
        },
        flight: {
          title: "Piloto",
          tit: "Mainit at kapana-panabik",
          sub: "larong skydiving",
          tip: "kung papasok sa laro",
          btn: "pumasok ka na",
          gameName: "Piloto",
          gameTip: "Lumipad at dagdagan ang iyong kita",
          enterGameName: "Pakilagay ang pangalan ng laro",
        },
      },
    };
  },
  1933: function (e, a, t) {},
  2241: function (e, a, t) {
    "use strict";
    t("ac1f"), t("1276"), t("96cf");
    var n = t("1da1"),
      i = function () {
        var e = this,
          a = e.$createElement,
          n = e._self._c || a;
        return n(
          "div",
          { staticClass: "nav c-pr" },
          [
            n("div", { staticClass: "c-box" }, [
              e.game
                ? n(
                    "div",
                    { staticClass: "toggle_menu_container m-b-15" },
                    [
                      n("toggle-menu", {
                        attrs: {
                          position: "RB",
                          menuBg: "none",
                          itemBg: "none",
                          menuItems: e.menuItems,
                          width: 60,
                          baseDistance: "100",
                        },
                        on: { clickMenu: e.clickMenu },
                      }),
                    ],
                    1
                  )
                : e._e(),
              n(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.long,
                      expression: "long",
                    },
                  ],
                  class: e.activity
                    ? "activityBox longBox c-row c-row-middle-center m-b-15"
                    : "activityBox longBox1 c-row c-row-middle-center m-b-15",
                  attrs: { id: "moveDiv" },
                  on: { click: e.onClick },
                },
                [
                  n("img", {
                    staticClass: "img",
                    attrs: { width: "55px", height: "55px", src: t("bd2d") },
                  }),
                ]
              ),
              n(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.serve,
                      expression: "serve",
                    },
                  ],
                  staticClass: "activityBox serveBox c-row",
                  on: {
                    click: function (a) {
                      return e.Goright("/keFuMenu");
                    },
                  },
                },
                [
                  n("img", {
                    staticClass: "img",
                    attrs: { width: "55px", height: "55px", src: t("09e5") },
                  }),
                ]
              ),
              n(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.activity,
                      expression: "activity",
                    },
                  ],
                  staticClass: "activityBox c-row",
                  on: {
                    click: function (a) {
                      return e.Goright("/activity");
                    },
                  },
                },
                [
                  n("img", {
                    staticClass: "img",
                    attrs: { width: "50px", src: t("5548") },
                  }),
                ]
              ),
            ]),
            n(
              "van-tabbar",
              {
                model: {
                  value: e.active,
                  callback: function (a) {
                    e.active = a;
                  },
                  expression: "active",
                },
              },
              e._l(e.$t("homepage.tabbar.tabbarList"), function (a, t) {
                return n("van-tabbar-item", { key: t, attrs: { to: a.to } }, [
                  n("div", {
                    class:
                      e.active == t ? "muan action muan" + t : "muan muan" + t,
                  }),
                  n("span", { class: e.active == t ? "name action" : "name" }, [
                    e._v(e._s(a.name)),
                  ]),
                ]);
              }),
              1
            ),
          ],
          1
        );
      },
      o = [],
      r =
        (t("5377"),
        function () {
          var e = this,
            a = e.$createElement,
            t = e._self._c || a;
          return t(
            "div",
            [
              t(
                "div",
                {
                  ref: "menuHome",
                  staticClass: "menu_container",
                  on: { click: e.toggleMenu },
                },
                [t("img", { attrs: { src: e.menuSrc } })]
              ),
              e._l(e.menuItems, function (a, n) {
                return t(
                  "div",
                  {
                    staticClass: "menu_item",
                    attrs: { id: a.name },
                    on: {
                      click: function (t) {
                        return e.clickMenu(a, n);
                      },
                    },
                  },
                  [t("img", { staticClass: "item", attrs: { src: a.src } })]
                );
              }),
            ],
            2
          );
        }),
      l = [],
      s =
        (t("99af"),
        t("4160"),
        t("b0c0"),
        t("159b"),
        {
          name: "toggleMenu",
          props: {
            menuSrc: { default: t("2a0f") },
            position: { default: "LT" },
            width: { default: 50 },
            baseDistance: { default: 150 },
            menuBg: { default: "white" },
            itemBg: { default: "white" },
            menuItems: { type: Array },
          },
          data: function () {
            return { openFlag: !1, operators: ["+", "+"] };
          },
          mounted: function () {
            var e = this;
            switch (
              ((this.$refs.menuHome.style.background = this.menuBg),
              this.menuItems.forEach(function (a) {
                var t = document.getElementById(a.name);
                t.style.background = e.itemBg;
              }),
              this.position)
            ) {
              case "LT":
                (this.$refs.menuHome.style.left = "20px"),
                  (this.$refs.menuHome.style.top = "20px"),
                  this.menuItems.forEach(function (e) {
                    var a = document.getElementById(e.name);
                    (a.style.left = "26px"), (a.style.top = "26px");
                  }),
                  (this.operators = ["+", "+"]);
                break;
              case "RT":
                (this.$refs.menuHome.style.right = "20px"),
                  (this.$refs.menuHome.style.top = "20px"),
                  this.menuItems.forEach(function (e) {
                    var a = document.getElementById(e.name);
                    (a.style.right = "26px"), (a.style.top = "26px");
                  }),
                  (this.operators = ["-", "+"]);
                break;
              case "LB":
                (this.$refs.menuHome.style.left = "20px"),
                  (this.$refs.menuHome.style.bottom = "20px"),
                  this.menuItems.forEach(function (e) {
                    var a = document.getElementById(e.name);
                    (a.style.left = "26px"), (a.style.bottom = "26px");
                  }),
                  (this.operators = ["+", "-"]);
                break;
              case "RB":
                (this.$refs.menuHome.style.right = "0"),
                  (this.$refs.menuHome.style.bottom = "0"),
                  this.menuItems.forEach(function (e) {
                    var a = document.getElementById(e.name);
                    (a.style.right = "0"), (a.style.bottom = "0");
                  }),
                  (this.operators = ["-", "-"]);
                break;
              default:
                (this.$refs.menuHome.style.left = "0"),
                  (this.$refs.menuHome.style.top = "0"),
                  this.menuItems.forEach(function (e) {
                    var a = document.getElementById(e.name);
                    (a.style.left = "0"), (a.style.top = "0");
                  }),
                  (this.operators = ["+", "+"]);
                break;
            }
          },
          methods: {
            toggleMenu: function () {
              var e = this;
              this.openFlag
                ? (this.menuItems.forEach(function (a, t) {
                    e.toggleMenuTransition(a.name, t, !0);
                  }),
                  (this.$refs.menuHome.style.transform = "rotate(0)"))
                : (this.menuItems.forEach(function (a, t) {
                    e.toggleMenuTransition(a.name, t, !1);
                  }),
                  (this.$refs.menuHome.style.transform = "rotate(360deg)")),
                (this.openFlag = !this.openFlag);
            },
            toggleMenuTransition: function (e, a, t) {
              var n = 90 / (this.menuItems.length - 1),
                i = Math.sin(
                  ((this.menuItems.length - 1 - a) * n * 2 * Math.PI) / 360
                ),
                o = Math.cos(
                  ((this.menuItems.length - 1 - a) * n * 2 * Math.PI) / 360
                ),
                r = document.getElementById(e),
                l = this;
              t
                ? ((r.style.transitionDuration = "200ms"),
                  (r.style.transform = "translate(0,0)"))
                : setTimeout(function () {
                    (r.style.transitionDuration = "200ms"),
                      (r.style.transform = "translate("
                        .concat(l.operators[0])
                        .concat(l.baseDistance * i, "px,")
                        .concat(l.operators[1])
                        .concat(l.baseDistance * o, "px)"));
                  }, 100 * a);
            },
            clickMenu: function (e, a) {
              this.$emit("clickMenu", e, a);
            },
          },
        }),
      m = s,
      u = (t("d099"), t("2877")),
      c = Object(u["a"])(m, r, l, !1, null, "7b9b9922", null),
      d = c.exports,
      g = t("2ef0"),
      h = {
        components: { toggleMenu: d },
        props: {
          activity: { type: Boolean, default: !1 },
          serve: { type: Boolean, default: !1 },
          long: { type: Boolean, default: !1 },
          game: { type: Boolean, default: !1 },
        },
        data: function () {
          return {
            active: 0,
            tabbar: [
              {
                name: "ä¸»é¡µ",
                to: "/home",
                img: t("2288"),
                imgAction: t("07d4"),
              },
              {
                name: "ç­¾åˆ°",
                to: "/activity",
                img: t("5e11"),
                imgAction: t("a894"),
              },
              {
                name: "æŽ¨å¹¿",
                to: "/promotion",
                img: t("7268"),
                imgAction: t("7268"),
              },
              {
                name: "é’±åŒ…",
                to: "/wallet",
                img: t("b2a5"),
                imgAction: t("4c6e"),
              },
              {
                name: "æˆ‘çš„",
                to: "/mian",
                img: t("6c7c"),
                imgAction: t("e636"),
              },
            ],
            menuItems: [
              { name: "menu1", src: t("a3da") },
              { name: "menu2", src: t("1406") },
              { name: "menu3", src: t("fcba") },
            ],
            UserInfo: [],
            flags: !1,
            position: { x: 0, y: 0 },
            nx: "",
            ny: "",
            dx: "",
            dy: "",
            xPum: "",
            yPum: "",
          };
        },
        methods: {
          clickMenu: function (e, a) {
            var t = this;
            console.log(e, a),
              localStorage.getItem("UserInfo") &&
                (t.UserInfo = JSON.parse(localStorage.getItem("UserInfo"))),
              t.getGameUrl(a + 1);
          },
          getGameUrl: function (e) {
            var a = this;
            if (!a.UserInfo.UserId) return a.Goright("/login");
            (a.showLoading = !0),
              a.$api
                .GetGameUrl({
                  uid: a.UserInfo.UserId,
                  sign: a.UserInfo.Sign,
                  typeid: 9,
                  asymbol: a.globalConfig.clientCfg.DollarSign,
                  gameid: e,
                  phonetype: 0 == a.utils.getUserAgent() ? "pc" : "m",
                })
                .then(function (e) {
                  (a.showLoading = !1),
                    e.success
                      ? a.Goright("/gameGo", { url: e.data.url, type: 9 })
                      : a.$msg(e.msg);
                })
                .catch(function (e) {
                  console.log(e),
                    (a.showLoading = !1),
                    a.$msg(a.$t("homepage.network"));
                });
          },
          Goright: function (e, a) {
            a ? this.$router.push({ path: e, query: a }) : this.$router.push(e);
          },
          down: function () {
            var e;
            (this.flags = !0),
              (e = event.touches ? event.touches[0] : event),
              (this.position.x = e.clientX),
              (this.position.y = e.clientY),
              (this.dx = moveDiv.offsetLeft),
              (this.dy = moveDiv.offsetTop);
          },
          move: function () {
            var e;
            this.flags &&
              ((e = event.touches ? event.touches[0] : event),
              (this.nx = e.clientX - this.position.x),
              (this.ny = e.clientY - this.position.y),
              (this.xPum = this.dx + this.nx),
              (this.yPum = this.dy + this.ny),
              (moveDiv.style.left = this.xPum + "px"),
              (moveDiv.style.top = this.yPum + "px"),
              document.addEventListener(
                "touchmove",
                function () {
                  event.preventDefault();
                },
                !1
              ));
          },
          end: function () {
            this.flags = !1;
          },
          onClick: function (e) {
            var a = this;
            a.$emit("onClick", e);
          },
        },
        watch: {
          $route: {
            handler: function (e) {
              this.active = Object(g["findIndex"])(this.tabbar, function (a) {
                return a.to === e.path;
              });
            },
            immediate: !0,
          },
        },
      },
      p = h,
      b = (t("f80f"), Object(u["a"])(p, i, o, !1, null, null, null)),
      k = b.exports,
      f = function () {
        var e = this,
          a = e.$createElement,
          n = e._self._c || a;
        return n(
          "div",
          { class: e.isBackGround ? "navbar action" : "navbar" },
          [
            e.isBack
              ? n("div", { staticClass: "navbar-left" }, [
                  n(
                    "div",
                    {
                      staticClass: "bank c-row c-row-middle-center",
                      on: { click: e.backPage },
                    },
                    [
                      n("img", {
                        staticClass: "navbar-back",
                        attrs: { src: t("2ea4") },
                      }),
                    ]
                  ),
                ])
              : n("div", { staticClass: "navbar-left" }, [e._t("left")], 2),
            n("div", { staticClass: "navbar-title" }, [e._t("default")], 2),
            n("div", { staticClass: "navbar-right" }, [e._t("right")], 2),
          ]
        );
      },
      y = [],
      A = {
        name: "Header",
        props: {
          isBack: { type: Boolean, default: !1 },
          isBackGround: { type: Boolean, default: !1 },
        },
        data: function () {
          return { url: "" };
        },
        mounted: function () {},
        methods: {
          backPage: function () {
            this.$router.go(-1);
          },
        },
      },
      T = A,
      w = (t("8579"), Object(u["a"])(T, f, y, !1, null, "c2022cca", null)),
      v = w.exports,
      S = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "div",
          { staticClass: "Loading c-row c-row-middle-center" },
          [t("van-loading", { attrs: { color: "#f2413b" } })],
          1
        );
      },
      P = [],
      C = {
        name: "Header",
        props: {},
        data: function () {
          return {};
        },
        mounted: function () {},
        methods: {},
      },
      R = C,
      G = (t("d663"), Object(u["a"])(R, S, P, !1, null, "7692a079", null)),
      L = G.exports,
      D = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "div",
          { staticClass: "Loading c-row c-row-middle-center" },
          [t("van-loading", { attrs: { color: "#f2413b" } })],
          1
        );
      },
      N = [],
      I = {
        name: "Header",
        props: {},
        data: function () {
          return {};
        },
        mounted: function () {},
        methods: {},
      },
      U = I,
      M = (t("e5a6"), Object(u["a"])(U, D, N, !1, null, "05faeee2", null)),
      B = M.exports,
      x = t("b311"),
      O = t.n(x);
    a["a"] = {
      components: { Fooder: k, Header: v, Loading: L, Loading1: B },
      data: function () {
        return {
          UserInfo: {},
          Amount: 0,
          UGold: 0,
          URate: 0,
          noticeMsg: "",
          lang: "en",
          InfoList: [],
          RebaterateList: [],
        };
      },
      methods: {
        partyUrl: function (e, a) {
          var t = this;
          0 == t.utils.getUserAgent()
            ? window.open(e)
            : 1 == a
            ? window.location.assign(e + "&home=1")
            : window.location.assign(e);
        },
        goBackItem: function (e) {
          var a = this;
          switch (((e = parseInt(e)), e)) {
            case 1:
              a.goPage("/mian");
              break;
            case 2:
              a.goPage("/wallet");
              break;
            case 3:
              a.goPage("/win");
              break;
            case 4:
              a.goPage("/5D");
              break;
            case 5:
              a.goPage("/colorLand");
              break;
            case 6:
              a.goPage("/winTrx");
              break;
            case 7:
              a.goPage("/4D");
              break;
            case 8:
              a.goPage("/vietnam");
              break;
            case 9:
              a.goPage("/newVietnam");
              break;
            default:
              a.$router.go(-1);
              break;
          }
        },
        goWithdrawal: function (e) {
          var a = this;
          a.goPage("/withdrawal", { url: e });
        },
        refresh: function (e) {
          var a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1e3,
            t = this;
          0 == t.Animation &&
            ((t.Animation = 1),
            setTimeout(function () {
              t.Animation = 0;
            }, a),
            2 == e
              ? t.utils.throttle(t.getUserAmount, a)
              : t.getWinsUserAmount());
        },
        copy: function () {
          var e = this,
            a = new O.a(".tag-read");
          a.on("success", function (t) {
            e.$msg(e.$t("homepage.copySuccess")), a.destroy();
          }),
            a.on("error", function (t) {
              e.$msg("å¤±è´¥"), a.destroy();
            });
        },
        goPage: function (e, a) {
          a ? this.$router.push({ path: e, query: a }) : this.$router.push(e);
        },
        showLoadingFun: function () {
          var e = this;
          return Object(n["a"])(
            regeneratorRuntime.mark(function a() {
              var t, n;
              return regeneratorRuntime.wrap(function (a) {
                while (1)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (t = e), (a.next = 3), t.$api.GetOnSitesApi();
                    case 3:
                      (n = a.sent),
                        n.success
                          ? ((t.globalConfig.clientCfg = n.data),
                            (t.globalConfig.clientCfg.LanguageList =
                              n.data.Languages.split("|")),
                            (t.globalConfig.clientCfg.AreaCodeList =
                              n.data.AreaCode.split("|")),
                            localStorage.setItem(
                              "clientCfg",
                              JSON.stringify(n.data)
                            ),
                            t.globalConfig.clientCfg.LanguageList &&
                              t.globalConfig.clientCfg.LanguageList.length >
                                0 &&
                              (localStorage.setItem(
                                "lang",
                                t.globalConfig.clientCfg.LanguageList[0]
                              ),
                              (t.$i18n.locale =
                                t.globalConfig.clientCfg.LanguageList[0])))
                          : t.$msg(n.msg);
                    case 5:
                    case "end":
                      return a.stop();
                  }
              }, a);
            })
          )();
        },
        getUserAmount: function () {
          var e = this;
          return Object(n["a"])(
            regeneratorRuntime.mark(function a() {
              var t, n;
              return regeneratorRuntime.wrap(function (a) {
                while (1)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (t = e),
                        (t.showLoading = !0),
                        (a.next = 4),
                        t.$api.GetUserAmount({
                          uid: t.UserInfo.UserId,
                          sign: t.UserInfo.Sign,
                        })
                      );
                    case 4:
                      (n = a.sent),
                        n.success
                          ? ((t.showLoading = !1),
                            (t.Amount = n.data.Amount),
                            (t.UGold = n.data.UGold),
                            (t.URate = n.data.URate))
                          : ((t.showLoading = !1),
                            "sign error" == n.msg
                              ? (localStorage.removeItem("UserInfo"),
                                localStorage.removeItem("infoList"),
                                localStorage.removeItem("rebateratelist"),
                                t.goPage("/login"))
                              : t.$msg(n.msg));
                    case 6:
                    case "end":
                      return a.stop();
                  }
              }, a);
            })
          )();
        },
        getWinsUserAmount: function () {
          var e = this;
          return Object(n["a"])(
            regeneratorRuntime.mark(function a() {
              var t, n;
              return regeneratorRuntime.wrap(function (a) {
                while (1)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (t = e),
                        (t.showLoading = !0),
                        (a.next = 4),
                        t.$api.GetWinsUserAmount({
                          uid: t.UserInfo.UserId,
                          sign: t.UserInfo.Sign,
                        })
                      );
                    case 4:
                      (n = a.sent),
                        n.success
                          ? ((t.showLoading = !1),
                            (t.Amount = n.data.Amount),
                            (t.UGold = n.data.UGold),
                            (t.URate = n.data.URate))
                          : ((t.showLoading = !1),
                            "sign error" == n.msg
                              ? (localStorage.removeItem("UserInfo"),
                                localStorage.removeItem("infoList"),
                                localStorage.removeItem("rebateratelist"),
                                t.goPage("/login"))
                              : t.$msg(n.msg));
                    case 6:
                    case "end":
                      return a.stop();
                  }
              }, a);
            })
          )();
        },
        getSitemessage: function (e) {
          var a = this;
          return Object(n["a"])(
            regeneratorRuntime.mark(function t() {
              var n, i;
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = a),
                        (n.showLoading = !0),
                        (t.next = 4),
                        n.$api.GetSitemessage({ type: e })
                      );
                    case 4:
                      (i = t.sent),
                        i.success
                          ? ((n.showLoading = !1),
                            1 == e && i.data.SiteMessage
                              ? (n.noticeMsg = i.data.SiteMessage)
                              : 2 == e &&
                                i.data.SiteMessage &&
                                n.$dialog
                                  .alert({
                                    title: n.$t("homepage.tips"),
                                    confirmButtonText: n.$t("homepage.confirm"),
                                    message: i.data.SiteMessage,
                                  })
                                  .then(function () {
                                    localStorage.setItem(
                                      "open",
                                      JSON.stringify(!1)
                                    );
                                  }))
                          : ((n.showLoading = !1), n.$msg(i.msg));
                    case 6:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        UserExpired: function (e, a, t) {
          var i = this;
          return Object(n["a"])(
            regeneratorRuntime.mark(function n() {
              var o, r, l, s;
              return regeneratorRuntime.wrap(function (n) {
                while (1)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (o = i),
                        (n.next = 3),
                        o.$api.UserExpired({ uid: e, keycode: a, sign: t })
                      );
                    case 3:
                      (r = n.sent),
                        r.success
                          ? 1 == r.data.State
                            ? ((l = o.$t("homepage.informationTip1")),
                              o.$dialog
                                .alert({
                                  title: o.$t("homepage.tips"),
                                  confirmButtonText: o.$t("homepage.confirm"),
                                  message: l,
                                })
                                .then(function () {
                                  localStorage.removeItem("UserInfo"),
                                    localStorage.removeItem("infoList"),
                                    localStorage.removeItem("rebateratelist"),
                                    o.$router.push("/login");
                                }))
                            : 2 == r.data.State &&
                              ((s = o.$t("homepage.informationTip")),
                              o.$dialog
                                .alert({
                                  title: o.$t("homepage.tips"),
                                  confirmButtonText: o.$t("homepage.confirm"),
                                  message: s,
                                })
                                .then(function () {
                                  localStorage.removeItem("UserInfo"),
                                    localStorage.removeItem("infoList"),
                                    localStorage.removeItem("rebateratelist"),
                                    o.$router.push("/login");
                                }))
                          : "uid can not be empty" == r.msg ||
                            "UserID error" == r.msg
                          ? (localStorage.removeItem("UserInfo"),
                            localStorage.removeItem("infoList"),
                            localStorage.removeItem("rebateratelist"),
                            o.goPage("/login"))
                          : o.$msg(r.msg);
                    case 5:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
      },
      mounted: function () {},
      created: function () {
        var e = this;
        (e.lang = localStorage.getItem("lang")),
          localStorage.getItem("UserInfo") &&
            "/" != this.$route.path &&
            ((e.InfoList = JSON.parse(localStorage.getItem("infoList"))),
            (e.RebaterateList = JSON.parse(
              localStorage.getItem("rebateratelist")
            )),
            (e.UserInfo = JSON.parse(localStorage.getItem("UserInfo"))),
            e.UserInfo &&
              e.UserExpired(
                e.UserInfo.UserId,
                e.UserInfo.KeyCode,
                e.UserInfo.Sign
              ));
      },
    };
  },
  2288: function (e, a) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAEvUlEQVRoBe1aP0wUSxjfO0AEFAwNBhILFSkkeRUSEqIh5L0KYmgsaCQWYGGhNDQ2EnmFjRZeI+ZCQoExJqB5gRfCu7wjFBAwSKHdGRNiLDARkD85A4zfb9nP7A47e7N7y3lRvmRuZr75/vy+mdn5s3uGoUECRHJIRhQ/sVjM4hGX2goLC0UEDT+4qFhkanDFnjsahuJxe1uGMvyAWAymCuwMLke4wJLII5HIfhx2Jpej3d3dZlkXkWhubgaQD2zBNa+vrweUA0TCP6IwFbu6ug4IuTGgqOxzNwjKqKeTSUMVrOmBrB2jlHazKvFYXmL7rNaWlpaiV5w9ozDywN478XgcSkUKWeOjXZjLKysrUGqSlbhdmZPCECsNKKWkBiigm8BmZc+cBi7ieFY8pa3GcBQwLVRTAx4e6UCRZXaJgci90mNZSad+loT+ohTOJLQ8dlAu1tfXHaPY09MD9DuWTKDs//LycodRt8rCwgJ302ldL986OzvdbHnydnZ22NFNlSMxOzvraUS3sbKyEs7+hiMerC9Ep4hUzn3zsd7BPjsAON9GvBTYge9HzcuoW5svB1jNnz97ZmxtbbnZcuVxF30lOkHkKgSmvBZ03bihlEWD3EUniYxEIuGppNtYXV0N0ZiufH7LFfiE10ryxyl99qmXUfwNSYiGhgZRUVHBS8KljFqaAlttbW2OVSKdTrMT5bqjYxtTWAwMqHdhnFFJZkjHmCyDRUlMTU05kLtVqqqq4OS1bMCr/geMLy8vu9lz5TU2NsKJ1sBfh3H0sV+iUzCceO5wT6LRqF+7DnnrtAZHhZQc1E97gUM4aGV+fh4OkEziBy2xvb3NvKxyrEM0fsbi4iIeyP94NQXgrAzbldfW1gzqkTXinToUB3AmL9d2AKGWfe1oQTz/Rg6w0WPDx8bvhw48cSplGAe9T6XM/PKVK2ae6SfQGLATlfGNjQ00mT+BHKgMM7+3txfFp/hhBzHrqAFeVoSjz+DgIGzckQ3hysMLVTY5rle4rh/RT+mBYvJ6mxKeFXkYPxHvHqUKSnlHeP2BM4WgyS5GRkbE7u6uY8+dnJwUdXV1HBSuF1fzIYpbBMJ8p4BbOe6xOtTf38+BIL+f60AwTUYoiaKiIjE8PKyD2VVmYmJC0JWNg/mXbJ44zGDOkPG3AF5TUyOWlpZcQQVhplIpUVtby4G8Jx8XwgzkTzK2DuAtLS1idXU1CEYtnc3NTdHe3s6BZP2c3AVopL6+PrG3t6cFIiyhoM8Jtk5zfpeUlIixsbGw8AS2Mz4+LsrKynhUXhA+3t6p6KRzVE3jcpNMJgM7PCzFmZkZAWzASOm8E/p+zbzD5yN47pTp6WkeCWA1ia81qKDR/LSEPF/Jui4BnoldOZ/yNQAZ11EAco/kun40Arnucdmf9rVYVlTVcT9/OTpq0Fs4h0hxcbFxtaPDoG+dDn62ldCn0D+vXh0AD5AICG1hkz2AdzA+NzeXlQ+vTyFebTpObdhMrNCxB3CN6ntNTU2hffXQAaUrg9cRwAaMlIDVJHsAOOuX0LadaG1tNejcYeD/EYjaehNjqeQmg0/4BgZgASZgA0ZKwJqRLpLEQ0oQ/kqJzyG5yuETvoEBWH5N+g7zxmHXWg6GvgAAAABJRU5ErkJggg==";
  },
  "238d": function (e, a, t) {
    "use strict";
    t("07ab");
  },
  "2a0f": function (e, a, t) {
    e.exports = t.p + "img/icon1.fceb6be6.svg";
  },
  "2d4c": function (e, a, t) {
    "use strict";
    var n = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t("input", {
          ref: "input",
          staticClass: "pw-input",
          attrs: {
            placeholder: e.placeholder,
            "Î¿nkeyup": "value=value.replace(/[^\\w\\.\\/]/ig,'')",
          },
          on: {
            input: e.onInput,
            compositionstart: e.onCompositionStart,
            compositionend: e.onCompositionEnd,
          },
        });
      },
      i = [],
      o =
        (t("a15b"),
        t("fb6a"),
        t("ac1f"),
        t("1276"),
        {
          name: "PwInput",
          props: {
            value: { type: String, default: "" },
            symbol: { type: String, default: "âœ˜" },
            placeholder: { type: String, default: "" },
          },
          data: function () {
            return { password: "", inputEl: void 0, isComposing: !1 };
          },
          watch: {
            value: {
              handler: function (e) {
                this.password = e;
              },
              immediate: !0,
            },
            password: {
              handler: function (e) {
                var a = this;
                this.inputEl ||
                  this.$nextTick(function () {
                    a.valueConver(e);
                  }),
                  this.$emit("input", this.password);
              },
              immediate: !0,
            },
          },
          mounted: function () {
            this.inputEl = this.$refs.input;
          },
          methods: {
            valueConver: function (e) {
              if (e) {
                for (var a = "", t = 0; t < e.length; t++) a += this.symbol;
                this.inputEl.value = a;
              } else this.inputEl.value = "";
            },
            valueRecover: function (e, a) {
              var t = a.split(this.symbol).join("");
              if (t) {
                var n = this.password.length - (a.length - e.end);
                this.password =
                  this.password.slice(0, e.end - t.length) +
                  t +
                  this.password.slice(n);
              } else
                this.password =
                  this.password.slice(0, e.end) +
                  this.password.slice(e.end + this.password.length - a.length);
            },
            onInput: function (e) {
              if (!this.isComposing) {
                var a = this.getIndex(),
                  t = e.target.value;
                this.valueRecover(a, t), this.valueConver(t), this.setIndex(a);
              }
            },
            onCompositionStart: function () {
              this.isComposing = !0;
            },
            onCompositionEnd: function (e) {
              this.isComposing && ((this.isComposing = !1), this.onInput(e));
            },
            getIndex: function () {
              if (this.inputEl) {
                var e = { start: 0, end: 0 };
                return (
                  (e.start = this.inputEl.selectionStart),
                  (e.end = this.inputEl.selectionEnd),
                  e
                );
              }
            },
            setIndex: function (e) {
              this.inputEl && this.inputEl.setSelectionRange(e.start, e.end);
            },
          },
        }),
      r = o,
      l = (t("0e6a"), t("2877")),
      s = Object(l["a"])(r, n, i, !1, null, "d8986e5e", null);
    a["a"] = s.exports;
  },
  "2ea4": function (e, a, t) {
    e.exports = t.p + "img/back.c3244ab0.png";
  },
  "3af9": function (e, a, t) {
    e.exports = {
      homepage: {
        loadText: {
          loadMore: "Ð—Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ Ð±Ð¾Ð»ÑŒÑˆÐµ",
          loading: "Ð—Ð°Ð³Ñ€ÑƒÐ·ÐºÐ°...",
          nomore: "Ð‘Ð¾Ð»ÑŒÑˆÐµ Ð½ÐµÑ‚",
        },
        loadingText: "Ð˜Ð´ÐµÑ‚ Ð·Ð°Ð¿Ñ€Ð¾Ñ",
        login: "Ð›Ð¾Ð³Ð¸Ð½",
        numberFormat: "Ð¤Ð¾Ñ€Ð¼Ð°Ñ‚ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð½Ð¾Ð³Ð¾ Ð½Ð¾Ð¼ÐµÑ€Ð°",
        mobile: "Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½",
        mobileNumber: "ÐÐ¾Ð¼ÐµÑ€ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð°",
        pwd: "ÐŸÐ°Ñ€Ð¾Ð»ÑŒ",
        oldpwd: "Ð¡Ñ‚Ð°Ñ€Ñ‹Ð¹ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
        pwds: "ÐŸÐ¾Ð´Ñ‚Ð²ÐµÑ€Ð´Ð¸Ñ‚Ðµ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
        pwdsTip: "ÐŸÐ°Ñ€Ð¾Ð»Ð¸ Ð½Ðµ ÑÐ¾Ð²Ð¿Ð°Ð´Ð°ÑŽÑ‚",
        register: "Ð ÐµÐ³Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ñ",
        registerTip:
          "Ð£ Ð²Ð°Ñ ÑƒÐ¶Ðµ ÐµÑÑ‚ÑŒ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚, Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·ÑƒÐ¹Ñ‚ÐµÑÑŒ~",
        forgotPwd: "Ð’Ð¾Ð·Ð²Ñ€Ð°Ñ‚ Ð¿Ð°Ñ€Ð¾Ð»Ñ",
        customerService: "Ð¾Ð±ÑÐ»ÑƒÐ¶Ð¸Ð²Ð°Ð½Ð¸Ðµ ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð¾Ð²",
        resetPwd: "Ð’Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð¸Ðµ Ð¿Ð°Ñ€Ð¾Ð»Ñ",
        verificationCode: "ÐŸÑ€Ð¾Ð²ÐµÑ€Ð¾Ñ‡Ð½Ñ‹Ð¹ ÐºÐ¾Ð´",
        recommendationCode: "Ð ÐµÑ„ÐµÑ€Ð°Ð»ÑŒÐ½Ñ‹Ð¹ ÐºÐ¾Ð´",
        agree: "Ð¯ ÑÐ¾Ð³Ð»Ð°ÑÐµÐ½",
        privacy: "ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸",
        submit: "ÐžÑ‚Ð¿Ñ€Ð°Ð²Ð¸Ñ‚ÑŒ",
        network: "Ð¡Ð²ÐµÐ´ÐµÐ½Ð¸Ñ",
        tips: "Ð¡Ð²ÐµÐ´ÐµÐ½Ð¸Ñ",
        remark: "ÐŸÑ€Ð¸Ð¼ÐµÑ‡Ð°Ð½Ð¸Ðµ",
        close: "Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ",
        full: "Ð²ÐµÑÑŒ ÑÐºÑ€Ð°Ð½",
        zoomOut: "ÑƒÐ¼ÐµÐ½ÑŒÑˆÐ¸Ñ‚ÑŒ",
        signout: "Ð’Ñ‹ Ñ…Ð¾Ñ‚Ð¸Ñ‚Ðµ Ð²Ñ‹Ð¹Ñ‚Ð¸ Ð¸Ð· ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹?",
        quit: "Ð¥Ð¾Ñ‚Ð¸Ñ‚Ðµ Ð²Ñ‹Ð¹Ñ‚Ð¸ Ð¸Ð· ÑÑ‚Ð¾Ð¹ Ð¸Ð³Ñ€Ñ‹?",
        enterGame:
          "Ð’Ñ‹ ÑƒÐ²ÐµÑ€ÐµÐ½Ñ‹, Ñ‡Ñ‚Ð¾ Ñ…Ð¾Ñ‚Ð¸Ñ‚Ðµ Ð²Ð¾Ð¹Ñ‚Ð¸ Ð² Ð¸Ð³Ñ€Ñƒ?",
        cancel: "ÐžÑ‚Ð¼ÐµÐ½Ð°",
        confirm: "ÐŸÐ¾Ð´Ñ‚Ð²ÐµÑ€Ð´Ð¸Ñ‚ÑŒ",
        success: "Ð£Ð´Ð°Ð»Ð¾ÑÑŒ",
        cancelled: "ÐžÑ‚Ð¼ÐµÐ½ÐµÐ½Ð¾",
        fail: "ÐÐµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ",
        del: "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ",
        copy: "ÐšÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ",
        copySuccess: "Ð£Ð´Ð°Ð»Ð¾ÑÑŒ ÐºÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ",
        required: "ÐžÐ±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ðµ Ð¿Ð¾Ð»Ñ",
        pleaseRequired:
          "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð·Ð°Ð¿Ð¾Ð»Ð½Ð¸Ñ‚Ðµ Ð¾Ð±ÑÐ·Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ðµ Ð¿Ð¾Ð»Ñ",
        passwordError:
          "ÐŸÐ°Ñ€Ð¾Ð»ÑŒ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð¼ÐµÐ½ÑŒÑˆÐµ 6 ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð² Ð¸ Ð´Ð¾Ð»Ð¶ÐµÐ½ ÑÐ¾ÑÑ‚Ð¾ÑÑ‚ÑŒ Ð¸Ð· Ð±ÑƒÐºÐ² Ð¸ Ñ†Ð¸Ñ„Ñ€.",
        pleaseEmail:
          "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð·Ð°Ð¿Ð¾Ð»Ð½Ð¸Ñ‚Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ñ‹Ð¹ Ð°Ð´Ñ€ÐµÑ ÑÐ»ÐµÐºÑ‚Ñ€Ð¾Ð½Ð½Ð¾Ð¹ Ð¿Ð¾Ñ‡Ñ‚Ñ‹",
        informationTip:
          "Ð’Ð°ÑˆÐ¸ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð´Ð»Ñ Ð²Ñ…Ð¾Ð´Ð° Ð¸ÑÑ‚ÐµÐºÐ»Ð¸, Ð¿Ð¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð¾Ð¹Ð´Ð¸Ñ‚Ðµ ÑÐ½Ð¾Ð²Ð°!",
        informationTip1:
          "Ð’Ð°ÑˆÐ° ÑƒÑ‡ÐµÑ‚Ð½Ð°Ñ Ð·Ð°Ð¿Ð¸ÑÑŒ ÑƒÐ¶Ðµ Ð·Ð°Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð° Ð² Ð´Ñ€ÑƒÐ³Ð¾Ð¼ Ð¼ÐµÑÑ‚Ðµ, Ð¿Ð¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, ÑÑ€Ð¾Ñ‡Ð½Ð¾ Ð¸Ð·Ð¼ÐµÐ½Ð¸Ñ‚Ðµ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ!",
        noData:
          "ÐÐ° Ð´Ð°Ð½Ð½Ñ‹Ð¹ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚ Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð½ÐµÐ´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ñ‹",
        presaleRule:
          'Ð’ Ñ†ÐµÐ»ÑÑ… Ð·Ð°Ñ‰Ð¸Ñ‚Ñ‹ Ð·Ð°ÐºÐ¾Ð½Ð½Ñ‹Ñ… Ð¿Ñ€Ð°Ð² Ð¸ Ð¸Ð½Ñ‚ÐµÑ€ÐµÑÐ¾Ð² Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÐµÐ¹, ÑƒÑ‡Ð°ÑÑ‚Ð²ÑƒÑŽÑ‰Ð¸Ñ… Ð² Ð¿Ñ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ñ… Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð°Ñ…, Ð¸ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶Ð°Ð½Ð¸Ñ Ð¾Ð±Ñ‰ÐµÐ³Ð¾ Ð¿Ð¾Ñ€ÑÐ´ÐºÐ° Ð¿Ñ€Ð¾Ð²ÐµÐ´ÐµÐ½Ð¸Ñ Ð¿Ñ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ñ… Ð¿Ñ€Ð¾Ð´Ð°Ð¶, Ð´Ð°Ð½Ð½Ñ‹Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ð»Ð° ÑƒÑÑ‚Ð°Ð½Ð°Ð²Ð»Ð¸Ð²Ð°ÑŽÑ‚ÑÑ Ð² ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²Ð¸Ð¸ Ñ Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸ÑÐ¼Ð¸ ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²ÑƒÑŽÑ‰Ð¸Ñ… ÑÐ¾Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ð¹ Ð¸ Ð½Ð°Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð·Ð°ÐºÐ¾Ð½Ð¾Ð² Ð¸ Ð½Ð¾Ñ€Ð¼Ð°Ñ‚Ð¸Ð²Ð½Ñ‹Ñ… Ð°ÐºÑ‚Ð¾Ð². Ð“Ð»Ð°Ð²Ð° 1 ÐžÐ¿Ñ€ÐµÐ´ÐµÐ»ÐµÐ½Ð¸Ñ 1.1 ÐŸÑ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð°Ñ Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð° Ð¾Ð¿Ñ€ÐµÐ´ÐµÐ»ÑÐµÑ‚ÑÑ ÐºÐ°Ðº Ð¼Ð¾Ð´ÐµÐ»ÑŒ Ð¿Ñ€Ð¾Ð´Ð°Ð¶, Ð¿Ñ€Ð¸ ÐºÐ¾Ñ‚Ð¾Ñ€Ð¾Ð¹ Ñ‚Ð¾Ñ€Ð³Ð¾Ð²ÐµÑ† Ð¿Ñ€ÐµÐ´Ð»Ð°Ð³Ð°ÐµÑ‚ Ð¿Ð»Ð°Ð½ Ð¿Ñ€Ð¾Ð´ÑƒÐºÑ‚Ð° Ð¸Ð»Ð¸ ÑƒÑÐ»ÑƒÐ³Ð¸, ÑÐ¾Ð±Ð¸Ñ€Ð°ÐµÑ‚ Ð·Ð°ÐºÐ°Ð·Ñ‹ Ð¾Ñ‚ Ð¿Ð¾ÐºÑƒÐ¿Ð°Ñ‚ÐµÐ»ÐµÐ¹ Ñ‡ÐµÑ€ÐµÐ· Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚ Ð¿Ñ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð¸ Ð¿Ñ€Ð¾Ð´ÑƒÐºÑ‚Ð° Ð¸ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÑÐµÑ‚ Ñ‚Ð¾Ð²Ð°Ñ€Ñ‹ Ð¸/Ð¸Ð»Ð¸ ÑƒÑÐ»ÑƒÐ³Ð¸ Ñ‚Ð¾Ð²Ð³Ð¾Ð²Ñ†ÐµÐ² Ð² ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²Ð¸Ð¸ Ñ Ð¿Ñ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¼ ÑÐ¾Ð³Ð»Ð°ÑˆÐµÐ½Ð¸ÐµÐ¼ 1.2 ÐœÐ¾Ð´ÐµÐ»ÑŒ Ð¿Ñ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð¸ - ÑÑ‚Ð¾ Ð¼Ð¾Ð´ÐµÐ»ÑŒ "Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚". "Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚" Ð¾Ð·Ð½Ð°Ñ‡Ð°ÐµÑ‚ Ð¿Ñ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½ÑƒÑŽ Ð¿Ð¾ÑÑ‚Ð°Ð²ÐºÑƒ Ñ„Ð¸ÐºÑÐ¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ð¾Ð³Ð¾ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð° Ð¿Ñ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾ Ð¿Ñ€Ð¾Ð´Ð°Ð½Ð½Ð¾Ð³Ð¾ Ñ‚Ð¾Ð²Ð°Ñ€Ð° Ð¿Ð¾ Ñ„Ð¸ÐºÑÐ¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ð¾Ð¹ Ñ†ÐµÐ½Ðµ. Ð¡ÐºÐ°Ð¼ "Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚" Ð¿Ñ€ÐµÐ´Ð»Ð°Ð³Ð°ÐµÑ‚ ÑˆÐ°Ð½Ñ Ð²Ñ‹Ð¸Ð³Ñ€Ð°Ñ‚ÑŒ Ð±Ð¾Ð»ÑŒÑˆÐµ Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚Ð¾Ð², ÑƒÑ‡Ð°ÑÑ‚Ð²ÑƒÑ Ð² Ð¼Ð¸Ð½Ð¸-Ð¸Ð³Ñ€Ðµ. Ð”ÐµÐ¿Ð¾Ð·Ð¸Ñ‚Ñ‹ Ð¼Ð¾Ð¶Ð½Ð¾ Ð¾Ð±Ð¼ÐµÐ½ÑÑ‚ÑŒ Ð½Ð°Ð¿Ñ€ÑÐ¼ÑƒÑŽ Ð½Ð° Ñ‚Ð¾Ð²Ð°Ñ€Ñ‹. Ð”ÐµÐ¿Ð¾Ð·Ð¸Ñ‚Ñ‹ Ð½Ðµ Ð¿Ð¾Ð´Ð»ÐµÐ¶Ð°Ñ‚ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‚Ñƒ. 1.3 ÐŸÑ€ÐµÐ´Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð½Ñ‹Ðµ Ð¿Ñ€Ð¾Ð´ÑƒÐºÑ‚Ñ‹: ÐŸÑ€Ð¾Ð´ÑƒÐºÑ‚Ñ‹, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð¿ÐµÑ€ÐµÐ´Ð°ÑŽÑ‚ÑÑ Ð¿Ð¾ÐºÑƒÐ¿Ð°Ñ‚ÐµÐ»ÐµÐ¼ Ñ Ð¿Ð¾Ð¼Ð¾Ñ‰ÑŒÑŽ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚Ð° Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð½Ñ‹Ñ… Ð¿Ñ€Ð¾Ð´ÑƒÐºÑ‚Ð¾Ð². ÐÐ° Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ð¸ Ñ‚Ð¾Ð²Ð°Ñ€Ð° Ð¸Ð»Ð¸ Ð½Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ðµ Ñ Ð¿Ð¾Ð´Ñ€Ð¾Ð±Ð½Ð¾Ð¹ Ð¸Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÐµÐ¹ Ð¾ Ñ‚Ð¾Ð²Ð°Ñ€Ðµ Ð¾Ñ‚Ð¼ÐµÑ‡Ð°ÐµÑ‚ÑÑ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ ÑÐ»Ð¾Ð²Ð¾ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð°. Ð¢Ð¾Ð²Ð°Ñ€Ñ‹, Ð½Ðµ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÑŽÑ‰Ð¸Ðµ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð¸, Ð½Ðµ ÑÐ²Ð»ÑÑŽÑ‚ÑÑ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð½Ñ‹Ð¼Ð¸ Ñ‚Ð¾Ð²Ð°Ñ€Ð°Ð¼Ð¸. 1.4 Ð¡Ð¸ÑÑ‚ÐµÐ¼Ð° Ð¿Ñ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð¸: Ð¾Ð·Ð½Ð°Ñ‡Ð°ÐµÑ‚ ÑÐ¸ÑÑ‚ÐµÐ¼Ð½Ñ‹Ð¹ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐ¼ÐµÐ½Ñ‚ Ð¼ÐµÑ€Ñ‡Ð°Ð½Ð´Ð°Ð¹Ð·Ð¸Ð½Ð³Ð°, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°ÐµÑ‚ Ð¢Ð¾Ñ€Ð³Ð¾Ð²Ñ†ÐµÐ² Ð² Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ðµ Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð½Ñ‹Ñ… Ð¼Ð¾Ð´ÐµÐ»ÐµÐ¹.1.5 Ð¦ÐµÐ½Ð° Ð¿Ñ€Ð¾Ð´ÑƒÐºÑ‚Ð° Ð¿Ñ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð¸: Ð¾Ð·Ð½Ð°Ñ‡Ð°ÐµÑ‚ Ñ†ÐµÐ½Ñƒ Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð¸ Ð¿Ñ€Ð¾Ð´ÑƒÐºÑ‚Ð° Ð¿Ñ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð¸. Ð¦ÐµÐ½Ð° Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð½Ð¾Ð³Ð¾ Ñ‚Ð¾Ð²Ð°Ñ€Ð° ÑÐ¾ÑÑ‚Ð¾Ð¸Ñ‚ Ð¸Ð· Ð´Ð²ÑƒÑ… Ñ‡Ð°ÑÑ‚ÐµÐ¹: Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚ Ð¸ Ð¾ÐºÐ¾Ð½Ñ‡Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¹ Ð¿Ð»Ð°Ñ‚ÐµÐ¶.',
        more: "Ð‘Ð¾Ð»ÑŒÑˆÐµ",
        verificationTip:
          "ÐÐµ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ Ð¿Ñ€Ð¾Ð²ÐµÑ€Ð¾Ñ‡Ð½Ñ‹Ð¹ ÐºÐ¾Ð´? ÐžÐ±Ñ€Ð°Ñ‚Ð¸Ñ‚ÐµÑÑŒ Ð² ÑÐ»ÑƒÐ¶Ð±Ñƒ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸ ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð¾Ð²",
        symbolU: "USDT",
        newes: "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÐµÐµ Ð¾Ð±ÑŠÑÐ²Ð»ÐµÐ½Ð¸Ðµ",
        upgraded: "Ð¡Ð¾Ð±Ñ‹Ñ‚Ð¸Ðµ Ð¾Ð±Ð½Ð¾Ð²Ð»ÑÐµÑ‚ÑÑ......",
        gameTit: "ÐÐµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð²Ð¾ÑÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ Ð±Ð°Ð»Ð°Ð½Ñ",
        gameLeft: "Ð¿Ð¾Ð¿Ñ€Ð¾Ð±ÑƒÐ¹ ÐµÑ‰Ðµ Ñ€Ð°Ð·",
        gameRight: "Ñ€ÑƒÑ‡Ð½Ð°Ñ Ð¿ÐµÑ€ÐµÑ€Ð°Ð±Ð¾Ñ‚ÐºÐ°",
        tab: {
          hot: "Ð¿Ð¾Ð¿ÑƒÐ»ÑÑ€Ð½Ñ‹Ð¹",
          lottety: "Ð›Ð¾Ñ‚ÐµÑ€ÐµÐ¸",
          fishing: "Ð»Ð¾Ð²Ð¸Ñ‚ Ñ€Ñ‹Ð±Ñƒ",
          electronic: "Slots",
          physical: "Ð¡Ð¿Ð¾Ñ€Ñ‚",
          realperson: "ÐšÐ°Ð·Ð¸Ð½Ð¾",
          chess: "ÑˆÐ°Ñ…Ð¼Ð°Ñ‚Ñ‹",
          smallgame: "Ð¼Ð°Ð»ÐµÐ½ÑŒÐºÐ°Ñ Ð¸Ð³Ñ€Ð°",
          safe: "Ð‘ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾",
        },
        home: {
          lottetyTitle: "ÐšÑ€ÑƒÐ¿Ð½ÐµÐ¹ÑˆÐ¸Ð¹ Ñ€Ð¾Ð·Ñ‹Ð³Ñ€Ñ‹Ñˆ Ð»Ð¾Ñ‚ÐµÑ€ÐµÐ¸",
          recharge: "ÐŸÐ¾Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÑŒ",
          balance: "Ð‘Ð°Ð»Ð°Ð½Ñ",
          customerService: "ÐžÐ±ÑÐ»ÑƒÐ¶Ð¸Ð²Ð°Ð½Ð¸Ðµ ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð¾Ð²",
          lottety: "Ð›Ð¾Ñ‚ÐµÑ€ÐµÐ¸",
          wealth: "Ð£Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ Ñ„Ð¸Ð½Ð°Ð½ÑÐ°Ð¼Ð¸",
          leftTime: "ÐžÑÑ‚.Ð’Ñ€.Ð¿Ð¾ÐºÑƒÐ¿.",
          min: "ÐœÐ¸Ð½.",
          sec: "ÑÐµÐº.",
          newTitle: "ÐÐ¾Ð²Ð¾ÑÑ‚Ð¸",
          newCenter: "Ð¦ÐµÐ½Ñ‚Ñ€ Ð½Ð¾Ð²Ð¾ÑÑ‚ÐµÐ¹",
          newDes: "ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ÑÑ‚Ð¸ Ð½Ð¾Ð²Ð¾ÑÑ‚ÐµÐ¹",
          wrTime: "ÐŸÐµÑ€Ð¸Ð¾Ð´ Ñ€Ð°Ð±Ð¾Ñ‚Ñ‹ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚Ð°",
          days: "Ð”Ð½.",
          hours: "Ð§Ð°Ñ",
          minutes: "ÐœÐ¸Ð½.",
          seconds: "ÑÐµÐº.",
          pengguna: "ÐºÐ¾Ð»Ð¸Ñ‡. Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÐµÐ¹",
          jumlahTaruhan: "ÐºÐ¾Ð»Ð¸Ñ‡. ÑÐ´ÐµÐ»Ð°Ð½Ð½Ñ‹Ñ… ÑÑ‚Ð°Ð²Ð¾Ðº",
          Online: "ÐºÐ¾Ð»Ð¸Ñ‡. Ð»ÑŽÐ´ÐµÐ¹ Ð¾Ð½Ð»Ð°Ð¹Ð½",
          penarikanHari: "Ð¡ÐµÐ³Ð¾Ð´Ð½ÑÑˆÐ½Ð¸Ð¹ Ñ€ÐµÐ¹Ñ‚Ð¸Ð½Ð³",
          gin: "Ð—Ð´ÐµÑÑŒ",
          got: "Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ð»",
          GameName: "Ñ€Ñ‹Ð±Ð°Ð»ÐºÐ° Ð¸Ð³Ñ€Ð°",
          popular: "ÐŸÐ¾Ð¿ÑƒÐ»ÑÑ€Ð½Ð°Ñ Ñ€ÐµÐºÐ¾Ð¼ÐµÐ½Ð´Ð°Ñ†Ð¸Ñ",
          platform: "Ð ÐµÐºÐ¾Ð¼ÐµÐ½Ð´Ð°Ñ†Ð¸Ñ Ð¿Ð¾ Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ðµ",
          Game1: "5D Lotre",
          Game2: "Win Go",
          Game3: "Slots",
          Game4: "K3 Lotre",
          Game5: "ÐšÐ°Ð·Ð¸Ð½Ð¾",
          Game6: "Ð¡Ð¿Ð¾Ñ€Ñ‚",
          Game7: "16 Ð²Ð°Ñ€Ð¸Ð°Ð½Ñ‚Ð¾Ð²",
          Game8: "Ð½Ð°Ñ†Ð¸Ñ",
          Game9: "Ð¡Ð¸Ð½Ð³Ð°Ð¿ÑƒÑ€ 4D",
          Game10: "Vietnam lottery",
          Game11: "Ð£Ð½Ð¸Ð²ÐµÑ€ÑÐ°Ð»ÑŒÐ½Ñ‹Ð¹ 4D",
          Game12: "ÐœÐ°Ð»Ð°Ð¹Ð·Ð¸Ð¹ÑÐºÐ¾Ðµ 4D",
          Game13: "Ð±Ð¾Ð»ÐµÐµ Ð´ÐµÑÑÑ‚Ð¸ Ñ‚Ñ‹ÑÑÑ‡ ÑÐ»Ð¾Ð²",
          Game14: "Ð¡ÐºÐ¾Ñ€Ð¾ÑÑ‚ÑŒ 4D",
          Game1Tip:
            "Ð£Ð³Ð°Ð´Ð°Ð¹Ñ‚Ðµ Ð§Ð¸ÑÐ»Ð¾ / Ð²Ñ‹ÑÐ¾ÐºÐ¾Ðµ / Ð½Ð¸Ð·ÐºÐ¾Ðµ / Ð½ÐµÑ‡ÐµÑ‚Ð½Ð¾Ðµ / Ñ‡ÐµÑ‚Ð½Ð¾Ðµ",
          Game2Tip:
            "Ð£Ð³Ð°Ð´Ð°Ð¹Ñ‚Ðµ Ñ‡Ð¸ÑÐ»Ð¾ / Ð·ÐµÐ»ÐµÐ½Ð¾Ðµ / Ñ„Ð¸Ð¾Ð»ÐµÑ‚Ð¾Ð²Ð¾Ðµ / ÐºÑ€Ð°ÑÐ½Ð¾Ðµ Ð²Ñ‹Ð¸Ð³Ñ€Ð°ÐµÑ‚",
          Game3Tip:
            "ÑÐ²ÑÐ·ÑƒÑŽÑ‰Ð°Ñ Ð¸Ð³Ñ€Ð°/ÑÐ²ÑÐ·ÑƒÑŽÑ‰Ð°Ñ Ð¸Ð³Ñ€Ð°/ÑÐ²ÑÐ·ÑƒÑŽÑ‰Ð°Ñ Ð¸Ð³Ñ€Ð°",
          Game4Tip:
            "Ð£Ð³Ð°Ð´Ð°Ð¹Ñ‚Ðµ Ð§Ð¸ÑÐ»Ð¾ / Ð²Ñ‹ÑÐ¾ÐºÐ¾Ðµ / Ð½Ð¸Ð·ÐºÐ¾Ðµ / Ð½ÐµÑ‡ÐµÑ‚Ð½Ð¾Ðµ / Ñ‡ÐµÑ‚Ð½Ð¾Ðµ",
          Game5Tip:
            "Ð±Ð°ÐºÐºÐ°Ñ€Ð°/Ð±Ð°Ð½ÐºÐ¸Ñ€-Ð¸Ð³Ñ€Ð¾Ðº/Ð ÑƒÐ»ÐµÑ‚ÐºÐ°/Ð¡Ð¸Ðº Ð±Ð¾ ",
          Game6Tip:
            "Ð¡Ð¾Ð±Ñ‹Ñ‚Ð¸Ñ Ð² Ð¿Ñ€ÑÐ¼Ð¾Ð¼ ÑÑ„Ð¸Ñ€Ðµ / Ð²ÑÐµ Ð² Ð¾Ð´Ð½Ð¾Ð¼ Ð¼ÐµÑÑ‚Ðµ",
          Game7Tip:
            "Ð£Ð³Ð°Ð´Ð°Ð¹Ñ‚Ðµ Ð§Ð¸ÑÐ»Ð¾ / Ð²Ñ‹ÑÐ¾ÐºÐ¾Ðµ / Ð½Ð¸Ð·ÐºÐ¾Ðµ / Ð½ÐµÑ‡ÐµÑ‚Ð½Ð¾Ðµ / Ñ‡ÐµÑ‚Ð½Ð¾Ðµ",
          Game8Tip:
            "Ð¡Ð¾Ð±Ñ‹Ñ‚Ð¸Ñ Ð² Ð¿Ñ€ÑÐ¼Ð¾Ð¼ ÑÑ„Ð¸Ñ€Ðµ / Ð²ÑÐµ Ð² Ð¾Ð´Ð½Ð¾Ð¼ Ð¼ÐµÑÑ‚Ðµ",
          Game9Tip:
            "Ð£Ð³Ð°Ð´Ð°Ð¹Ñ‚Ðµ Ð§Ð¸ÑÐ»Ð¾ / Ð²Ñ‹ÑÐ¾ÐºÐ¾Ðµ / Ð½Ð¸Ð·ÐºÐ¾Ðµ / Ð½ÐµÑ‡ÐµÑ‚Ð½Ð¾Ðµ / Ñ‡ÐµÑ‚Ð½Ð¾Ðµ",
          Game10Tip:
            "Ð£Ð³Ð°Ð´Ð°Ð¹Ñ‚Ðµ Ñ‡Ð¸ÑÐ»Ð¾ / Ð·ÐµÐ»ÐµÐ½Ð¾Ðµ / Ñ„Ð¸Ð¾Ð»ÐµÑ‚Ð¾Ð²Ð¾Ðµ / ÐºÑ€Ð°ÑÐ½Ð¾Ðµ Ð²Ñ‹Ð¸Ð³Ñ€Ð°ÐµÑ‚",
          Game11Tip:
            "Ð£Ð³Ð°Ð´Ð°Ð¹Ñ‚Ðµ Ð§Ð¸ÑÐ»Ð¾ / Ð²Ñ‹ÑÐ¾ÐºÐ¾Ðµ / Ð½Ð¸Ð·ÐºÐ¾Ðµ / Ð½ÐµÑ‡ÐµÑ‚Ð½Ð¾Ðµ / Ñ‡ÐµÑ‚Ð½Ð¾Ðµ",
          Game12Tip:
            "Ð£Ð³Ð°Ð´Ð°Ð¹Ñ‚Ðµ Ð§Ð¸ÑÐ»Ð¾ / Ð²Ñ‹ÑÐ¾ÐºÐ¾Ðµ / Ð½Ð¸Ð·ÐºÐ¾Ðµ / Ð½ÐµÑ‡ÐµÑ‚Ð½Ð¾Ðµ / Ñ‡ÐµÑ‚Ð½Ð¾Ðµ",
          Game13Tip:
            "Ð£Ð³Ð°Ð´Ð°Ð¹Ñ‚Ðµ Ð§Ð¸ÑÐ»Ð¾ / Ð²Ñ‹ÑÐ¾ÐºÐ¾Ðµ / Ð½Ð¸Ð·ÐºÐ¾Ðµ / Ð½ÐµÑ‡ÐµÑ‚Ð½Ð¾Ðµ / Ñ‡ÐµÑ‚Ð½Ð¾Ðµ",
          Game14Tip:
            "Ð£Ð³Ð°Ð´Ð°Ð¹Ñ‚Ðµ Ð§Ð¸ÑÐ»Ð¾ / Ð²Ñ‹ÑÐ¾ÐºÐ¾Ðµ / Ð½Ð¸Ð·ÐºÐ¾Ðµ / Ð½ÐµÑ‡ÐµÑ‚Ð½Ð¾Ðµ / Ñ‡ÐµÑ‚Ð½Ð¾Ðµ",
          Game6t: "Ð¡Ð°Ð±Ð°Ñ…",
          nextDraw: "Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹ Ñ€Ð°ÑƒÐ½Ð´",
          playNow: "Ð˜Ð³Ñ€Ð°Ñ‚ÑŒ ÑÐµÐ¹Ñ‡Ð°Ñ",
          howWorks: "ÐšÐ°Ðº ÐºÑƒÐ¿Ð¸Ñ‚ÑŒ?",
          game_title1: "Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð¸Ð³Ñ€Ñƒ",
          game_title2: "Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ ÑÐ²Ð¾Ðµ ÑÑ‡Ð°ÑÑ‚Ð»Ð¸Ð²Ð¾Ðµ Ñ‡Ð¸ÑÐ»Ð¾ ",
          game_title3: "Ð”ÐµÐ»Ð°Ñ‚ÑŒ ÑÑ‚Ð°Ð²ÐºÐ¸",
          game_title4: "ÐŸÐ¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ Ð¿Ñ€Ð¸Ð·",
          game_First: "Ð¨Ð°Ð³ 1",
          game_Second: "Ð¨Ð°Ð³ 2",
          game_Third: "Ð¨Ð°Ð³ 3",
          game_Fourth: "Ð¨Ð°Ð³ 4",
          list: [
            {
              title: "Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð¸Ð³Ñ€Ñƒ Ð½Ð° ÑÐ²Ð¾Ð¹ Ð²ÐºÑƒÑ",
              txt: "Ð’Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð²Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð»Ð¾Ñ‚ÐµÑ€ÐµÐ¹Ð½Ñ‹Ðµ Ð¸Ð³Ñ€Ñ‹ Ð½Ð° 1 Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ, 3 Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹, 5 Ð¼Ð¸Ð½ÑƒÑ‚ Ð¸ 10 Ð¼Ð¸Ð½ÑƒÑ‚.",
            },
            {
              title: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÑÐ²Ð¾Ðµ ÑÑ‡Ð°ÑÑ‚Ð»Ð¸Ð²Ð¾Ðµ Ñ‡Ð¸ÑÐ»Ð¾",
              txt: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÑÐ²Ð¾Ðµ ÑÑ‡Ð°ÑÑ‚Ð»Ð¸Ð²Ð¾Ðµ Ñ‡Ð¸ÑÐ»Ð¾ Ð¸Ð»Ð¸ ÑÑ‡Ð°ÑÑ‚Ð»Ð¸Ð²Ñ‹Ð¹ Ñ†Ð²ÐµÑ‚.",
            },
            {
              title: "Ð”ÐµÐ»Ð°Ñ‚ÑŒ ÑÑ‚Ð°Ð²ÐºÐ¸",
              txt: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÑÑƒÐ¼Ð¼Ñƒ, ÐºÐ¾Ñ‚Ð¾Ñ€ÑƒÑŽ Ð²Ñ‹ Ñ…Ð¾Ñ‚Ð¸Ñ‚Ðµ Ð¿Ð¾ÑÑ‚Ð°Ð²Ð¸Ñ‚ÑŒ, Ð¸ Ð¿Ð¾Ð´Ñ‚Ð²ÐµÑ€Ð´Ð¸Ñ‚Ðµ",
            },
            {
              title: "Ð²Ñ‹Ð¸Ð³Ñ€Ð°Ñ‚ÑŒ Ð¿Ñ€Ð¸Ð·",
              txt: "ÐšÐ¾Ð³Ð´Ð° Ð²Ñ‹ Ð²Ñ‹Ð±ÐµÑ€ÐµÑ‚Ðµ ÑÑ‡Ð°ÑÑ‚Ð»Ð¸Ð²Ð¾Ðµ Ñ‡Ð¸ÑÐ»Ð¾ Ð´Ð»Ñ Ñ‚ÐµÐºÑƒÑ‰ÐµÐ³Ð¾ Ð¿ÐµÑ€Ð¸Ð¾Ð´Ð°, ÑÐ¸ÑÑ‚ÐµÐ¼Ð° Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸ Ð´Ð¾Ð±Ð°Ð²Ð¸Ñ‚ Ð¿Ñ€Ð¸Ð· Ð½Ð° Ð²Ð°Ñˆ Ð±Ð°Ð»Ð°Ð½Ñ.",
            },
          ],
        },
        index: {
          Charttren: "Ð“Ñ€Ð°Ñ„Ð¸ÐºÐ¸ Ñ‚ÐµÐ½Ð´ÐµÐ½Ñ†Ð¸Ð¹",
          Total: "ÐžÐ±Ñ‰Ð°Ñ ÑÑƒÐ¼Ð¼Ð°",
          walletBalance: "Ð‘Ð°Ð»Ð°Ð½Ñ ÐºÐ¾ÑˆÐµÐ»ÑŒÐºÐ°",
          recharge: "ÐŸÐ¾Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÑŒ",
          withdraw: "Ð’Ñ‹Ð²Ð¾Ð´ ÑÑ€ÐµÐ´ÑÑ‚Ð²",
          lotteyRule: "ÐŸÑ€Ð°Ð²Ð¸Ð»Ð° Ð»Ð¾Ñ‚ÐµÑ€ÐµÐ¸",
          iKnow: "Ð¯ Ð·Ð½Ð°ÑŽ",
          big: "Ð‘Ð¾Ð»ÑŒÑˆÐ¾Ðµ",
          small: "ÐœÐ°Ð»ÐµÐ½ÑŒÐºÐ¾Ðµ",
          green: "Ð—ÐµÐ»ÐµÐ½Ð¾Ðµ",
          violet: "Ð¤Ð¸Ð¾Ð»ÐµÑ‚Ð¾Ð²Ð¾Ðµ",
          red: "ÐšÑ€Ð°ÑÐ½Ð¾Ðµ",
          selectGreen: "Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð·ÐµÐ»ÐµÐ½Ð¾Ðµ",
          selectViolet: "Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ñ„Ð¸Ð¾Ð»ÐµÑ‚Ð¾Ð²Ð¾Ðµ",
          selectRed: "Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ ÐºÑ€Ð°ÑÐ½Ð¾Ðµ",
          randomBetting: "Ð¡Ð»ÑƒÑ‡.",
          gameRecord: "Ð—Ð°Ð¿Ð¸ÑÐºÐ¸ Ð¾ Ð¸Ð³Ñ€Ð°Ñ…",
          myGameRecord: "ÐœÐ¾Ð¹ Ñ€ÐµÐºÐ¾Ñ€Ð´ ÑÐ¾Ñ€ÐµÐ²Ð½Ð¾Ð²Ð°Ð½Ð¸Ð¹",
          period: "ÐÐ¾.Ð’Ñ‹Ð¿ÑƒÑÐºÐ°",
          blockHeight: "Ð²Ñ‹ÑÐ¾Ñ‚Ð° Ð±Ð»Ð¾ÐºÐ°",
          blockTime: "Ð²Ñ€ÐµÐ¼Ñ Ð±Ð»Ð¾ÐºÐ°",
          hashValue: "Ñ…ÑÑˆ-Ð·Ð½Ð°Ñ‡ÐµÐ½Ð¸Ðµ",
          number: "Ð§Ð¸ÑÐ»Ð¾",
          size: "Ð‘Ð¾Ð»ÑŒÑˆÐ¾Ðµ ÐœÐ°Ð»ÐµÐ½ÐºÐ¾Ðµ",
          color: "Ð¦Ð²ÐµÑ‚",
          result: "Ð ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚",
          sum: "ÐžÐ±Ñ‰Ð°Ñ ÑÑƒÐ¼Ð¼Ð°",
          high: "Ð‘Ð¾Ð»ÑŒÑˆÐ¾Ðµ",
          low: "ÐœÐ°Ð»ÐµÐ½ÐºÐ¾Ðµ",
          odd: "ÐÐµÑ‡ÐµÑ‚Ð½Ð¾Ðµ",
          even: "Ð§ÐµÑ‚Ð½Ð¾Ðµ",
          money: "Ð¡ÑƒÐ¼Ð¼Ð°",
          multiply: "ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾",
          presaleRule: "ÐŸÑ€Ð°Ð²Ð¸Ð»Ð° Ð¿Ñ€ÐµÐ´Ð¿Ñ€Ð¾Ð´Ð°Ð¶",
          presaleRuleTit:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¿Ñ€Ð¾Ð²ÐµÑ€ÑŒÑ‚Ðµ, Ñ‡Ñ‚Ð¾ Ñ ÑÐ¾Ð³Ð»Ð°ÑÐµÐ½ Ñ Ð¿Ñ€Ð°Ð²Ð¸Ð»Ð°Ð¼Ð¸ Ð¿Ñ€ÐµÐ´Ð²Ð°Ñ€Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð¹ Ð¿Ñ€Ð¾Ð´Ð°Ð¶Ð¸",
          totalPrice: "ÐžÐ±Ñ‰Ð°Ñ ÑÑƒÐ¼Ð¼Ð°",
          Select: "Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ",
          SelectCon: "Ð¡Ð¾Ð´ÐµÑ€Ð¶Ð°Ð½Ð¸Ðµ ÑÑ‚Ð°Ð²ÐºÐ¸",
          firstPage: "ÐŸÐµÑ€Ð²Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°",
          lastpage: "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½ÑÑ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°",
          periodDetail: "ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ÑÑ‚Ð¸",
          orderNumber: "ÐÐ¾Ð¼ÐµÑ€ Ð·Ð°ÐºÐ°Ð·Ð°",
          contractMoney: "Ð¡ÑƒÐ¼Ð¼Ð° Ð¿Ð¾ÐºÑƒÐ¿ÐºÐ¸",
          contractCount: "ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð¿Ð¾ÐºÑƒÐ¿Ð¾Ðº",
          delivery: "Ð¡ÑƒÐ¼Ð¼Ð° Ð¿Ð¾ÑÐ»Ðµ Ð½Ð°Ð»Ð¾Ð³Ð¾Ð¾Ð±Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ",
          fee: "ÐÐ°Ð»Ð¾Ð³Ð¸",
          openPrice: "ÐÐ°Ñ‡Ð°Ð»ÑŒÐ½Ð°Ñ Ñ†ÐµÐ½Ð°",
          status: "Ð¡Ñ‚Ð°Ñ‚ÑƒÑ",
          amount: "Ð’Ñ‹Ð¸Ð³Ñ€Ñ‹Ð²ÑˆÐ¸Ðµ Ð¸ Ð¿Ñ€Ð¾Ð¸Ð³Ñ€Ð°Ð²ÑˆÐ¸Ðµ",
          createTime: "Ð’Ñ€ÐµÐ¼Ñ ÑÐ¾Ð·Ð´Ð°Ð½Ð¸Ñ",
          BettingAssistant:
            "ÐŸÐ¾Ð¼Ð¾Ñ‰Ð½Ð¸Ðº Ð¿Ð¾ ÑÑ‚Ð°Ð²ÐºÐ°Ð¼ (Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ðµ 100 Ð²Ñ‹Ð¿ÑƒÑÐºÐ¾Ð²)",
          Missing: "ÐºÐ¾Ð». Ð½Ðµ Ð¾Ñ‚Ðº.",
          AvgMissing: "ÑÑ€.ÐºÐ¾Ð».Ð½Ðµ Ð¾Ñ‚Ðº.",
          Frequency: "Ð¿Ð¾ÑÐ².",
          MaxContinued: " ÐœÐ°Ðº.ÐºÐ¾Ð».ÐŸÐ¾ÑÐ»ÐµÐ´.ÐžÑ‚Ðº.",
          PleaseInteger:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ñ†ÐµÐ»Ð¾Ðµ Ñ‡Ð¸ÑÐ»Ð¾",
          Odds: "ÐšÐ¾ÑÑ„.",
          publicQuery: "ÐŸÐ¾Ð¸.ÐŸÑƒÐ±Ð».Ð¦ÐµÐ¿Ð¸",
          howPlay: "ÐšÐ°Ðº Ð¸Ð³Ñ€Ð°Ñ‚ÑŒ",
          distancedraw: "Ð´Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚ÑŒ Ñ€Ð¾Ð·Ñ‹Ð³Ñ€Ñ‹ÑˆÐ°",
          multiple: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾",
          numberBets: "ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ ÑÑ‚Ð°Ð²Ð¾Ðº",
          reset: "Ð¿ÐµÑ€ÐµÐ·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ",
          time: "Ð²Ñ€ÐµÐ¼Ñ",
          lotteryTime: "Ð²Ñ€ÐµÐ¼Ñ",
          notPressed: "Ð½Ðµ Ð½Ð°Ð¶Ð°Ñ‚",
          pressed: "Ð¿Ñ€ÐµÑÑÐ¾Ð²Ð°Ð½Ð½Ñ‹Ð¹",
          bedrawn: "Ð£Ñ‡Ð°ÑÑ‚Ð²Ð¾Ð²Ð°Ñ‚ÑŒ",
          awarding: "Ð½Ð°Ð³Ñ€Ð°Ð¶Ð´ÐµÐ½Ð¸Ðµ",
          periodNmu: "Ð½Ð¾Ð¼ÐµÑ€ Ð¿ÐµÑ€Ð¸Ð¾Ð´Ð° ÑÑ‚Ð°Ð²Ð¾Ðº",
          lotteryNmu: "Ð½Ð¾Ð¼ÐµÑ€ Ð»Ð¾Ñ‚ÐµÑ€ÐµÐ¸",
        },
        myProfile: {
          title: "Ð›Ð¸Ñ‡Ð½Ñ‹Ð¹ Ñ†ÐµÐ½Ñ‚Ñ€",
          profilePhoto: "ÐÐ²Ð°Ñ‚Ð°Ñ€",
          nickname: "ÐÐ¸ÐºÐ½ÐµÐ¹Ð¼",
          modifyNickname: "Ð˜Ð·Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð½Ð¸ÐºÐ½ÐµÐ¹Ð¼",
          newNicknameTit:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð½Ð¾Ð²Ñ‹Ð¹ Ð½Ð¸ÐºÐ½ÐµÐ¹Ð¼",
        },
        about: {
          title: "Ðž",
          Games: "Ð˜Ð³Ñ€Ñ‹",
          privacypolicy: "ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸",
          disclosureagreement:
            "Ð¡Ð¾Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ðµ Ð¾ Ñ€Ð°ÑÐºÑ€Ñ‹Ñ‚Ð¸Ð¸ Ñ€Ð¸ÑÐºÐ¾Ð²",
        },
        privacypolicy: {
          title: "ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ° ÐºÐ¾Ð½Ñ„Ð¸Ð´ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸",
          agree: "Ð¡Ð¾Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ðµ Ð¾ Ñ€Ð°ÑÐºÑ€Ñ‹Ñ‚Ð¸Ð¸ Ñ€Ð¸ÑÐºÐ¾Ð²",
        },
        keFuMenu: { title: "ÐžÐ±ÑÐ»ÑƒÐ¶Ð¸Ð²Ð°Ð½Ð¸Ðµ ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð¾Ð²" },
        recharge: {
          title: "ÐŸÐ¾Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÑŒ",
          selectRecharge:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÐºÐ°Ð½Ð°Ð» Ð´Ð»Ñ Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ Ð±Ð°Ð»Ð°Ð½ÑÐ°",
          next: "Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹ ÑˆÐ°Ð³",
          previous: "ÐŸÑ€ÐµÐ´Ñ‹Ð´ÑƒÑ‰Ð¸Ð¹ ÑˆÐ°Ð³",
          rechargeAmount: "Ð¡ÑƒÐ¼Ð¼Ð° Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ",
          rechargeAmountRangeIpt: "Ð›Ð¸Ð¼Ð¸Ñ‚ ÑÑƒÐ¼Ð¼ Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ",
          rechargeAmountRange: "Ð›Ð¸Ð¼Ð¸Ñ‚ ÑÑƒÐ¼Ð¼ Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ",
        },
        rechargeChack: {
          title: "ÐŸÐ¾Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÑŒ",
          totalAmouunt: "ÐžÐ±Ñ‰Ð°Ñ ÑÑƒÐ¼Ð¼Ð°",
          paymentMethod: "Ð¡Ð¿Ð¾ÑÐ¾Ð±Ñ‹ Ð¾Ð¿Ð»Ð°Ñ‚Ñ‹",
          localBank: "ÐœÐµÑÑ‚Ð½Ñ‹Ðµ Ð±Ð°Ð½ÐºÐ¸",
          enterAmount: "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ ÑÑƒÐ¼Ð¼Ñƒ",
          theAmount: "Ð¡ÑƒÐ¼Ð¼Ð° Ð´Ð¾Ð»Ð¶Ð½Ð° Ð±Ñ‹Ñ‚ÑŒ ÐºÑ€Ð°Ñ‚Ð½Ð¾Ð¹ 10",
          accountName: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ ÑÑ‡ÐµÑ‚Ð°",
          bankNumber: "ÐÐ¾Ð¼ÐµÑ€ Ð±Ð°Ð½ÐºÐ°",
          bankName: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð±Ð°Ð½ÐºÐ°",
          paymentAmount: "Ð¡ÑƒÐ¼Ð¼Ð° Ð¾Ð¿Ð»Ð°Ñ‚Ñ‹",
          orderNumber: "ÐÐ¾Ð¼ÐµÑ€ Ð·Ð°ÐºÐ°Ð·Ð°",
          creationTime: "Ð’Ñ€ÐµÐ¼Ñ ÑÐ¾Ð·Ð´Ð°Ð½Ð¸Ñ",
          transferAmount:
            "Ð¡ÑƒÐ¼Ð¼Ð° Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´Ð° Ð´Ð¾Ð»Ð¶Ð½Ð° Ð±Ñ‹Ñ‚ÑŒ Ð·Ð°Ð¿Ð¾Ð»Ð½ÐµÐ½Ð° Ð² Ñ‚Ð¾Ð¼ Ð¿Ð¾Ñ€ÑÐ´ÐºÐµ, Ð² ÐºÐ¾Ñ‚Ð¾Ñ€Ð¾Ð¼ Ð²Ñ‹ ÐµÐµ ÑÐ¾Ð·Ð´Ð°Ð»Ð¸, Ð¸Ð½Ð°Ñ‡Ðµ Ð²Ñ‹Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ Ð½Ðµ Ð±ÑƒÐ´ÐµÑ‚ ÑƒÑÐ¿ÐµÑˆÐ½Ñ‹Ð¼",
          transferAmount2: "",
          transferAmount1:
            "Ð’Ð½Ð¸Ð¼Ð°Ð½Ð¸Ðµ: ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð½Ðµ Ð¾Ñ‚Ð¼ÐµÐ½ÑÐ¹Ñ‚Ðµ ÑÐ²Ð¾Ð¹ Ð¿Ð»Ð°Ñ‚ÐµÐ¶Ð½Ñ‹Ð¹ Ð·Ð°ÐºÐ°Ð· Ð¿Ð¾ÑÐ»Ðµ Ð·Ð°Ð²ÐµÑ€ÑˆÐµÐ½Ð¸Ñ Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´Ð°.",
          depositAmount: "Ð¡ÑƒÐ¼Ð¼Ð° Ð²Ð½ÐµÑÐµÐ½Ð¸Ñ",
          upImgTitle:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚Ðµ Ñ‚Ñ€Ð°Ð½Ð·Ð°ÐºÑ†Ð¸Ð¸, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð²ÐºÐ»ÑŽÑ‡Ð°ÑŽÑ‚ UTR",
          upFormate:
            "ÐœÐ¾Ð¶Ð½Ð¾ Ð·Ð°Ð³Ñ€ÑƒÐ¶Ð°Ñ‚ÑŒ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ ÐºÐ°Ñ€Ñ‚Ð¸Ð½ÐºÐ¸ Ð² Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ðµ jpg, jpeg, png",
          selectFile: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ñ„Ð°Ð¹Ð» Ð´Ð»Ñ Ð·Ð°Ð³Ñ€ÑƒÐ·ÐºÐ¸",
        },
        touchngo: {
          title: "ÐŸÑ€Ð¸ÐºÐ¾ÑÐ½Ð¸ÑÑŒ Ðº Ð·Ð°Ñ€ÑÐ´ÐºÐµ N Go",
          name: "Ð˜Ð¼Ñ",
          mobileNumber: "Ð½Ð¾Ð¼ÐµÑ€ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð°",
        },
        rechargeRecord: {
          title: "Ð—Ð°Ð¿Ð¸ÑÐ¸ Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ",
          unpaid: "ÐžÐ¶Ð¸Ð´Ð°Ð½Ð¸Ðµ Ð¾Ð¿Ð»Ð°Ñ‚Ñ‹",
          eazyPay: "Ð—Ð°Ñ€Ð¿Ð»Ð°Ñ‚Ð°",
          success: "Ð£ÑÐ¿ÐµÑˆÐ½Ð¾",
          others: "Ð”Ñ€ÑƒÐ³Ð¸Ðµ",
        },
        paymentMethod: {
          title: "Ð¡Ð¿Ð¾ÑÐ¾Ð±Ñ‹ Ð¾Ð¿Ð»Ð°Ñ‚Ñ‹",
          totalPaid: "ÐžÐ±Ñ‰Ð°Ñ ÑÑƒÐ¼Ð¼Ð° Ðº Ð¾Ð¿Ð»Ð°Ñ‚Ðµ",
          choose: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð±Ð°Ð½ÐºÐ¾Ð²ÑÐºÑƒÑŽ ÐºÐ°Ñ€Ñ‚Ñƒ",
          payNow: "ÐžÐ¿Ð»Ð°Ñ‚Ð¸Ñ‚ÑŒ ÑÐµÐ¹Ñ‡Ð°Ñ",
          topInstructions: "Ð˜Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸ Ð¿Ð¾ Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸ÑŽ",
          contentTmp1:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¿ÐµÑ€ÐµÐ²ÐµÐ´Ð¸Ñ‚Ðµ Ð½Ð° ÑƒÐºÐ°Ð·Ð°Ð½Ð½Ñ‹Ð¹ Ð²Ñ‹ÑˆÐµ Ð±Ð°Ð½ÐºÐ¾Ð²ÑÐºÐ¸Ð¹ ÑÑ‡ÐµÑ‚ Ð´Ð»Ñ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð¸Ñ",
          contentTmp2:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð·Ð°Ð¿Ð¾Ð»Ð½Ð¸Ñ‚Ðµ Ð¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ð¾Ðµ Ð¸Ð¼Ñ Ð²Ð»Ð°Ð´ÐµÐ»ÑŒÑ†Ð° ÐºÐ°Ñ€Ñ‚Ñ‹ Ð¸ Ð½Ð¾Ð¼ÐµÑ€ ÑÑ‡ÐµÑ‚Ð° Ð´Ð»Ñ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ¸",
          contentTmp3:
            "ÐŸÐ¾Ð´Ð°Ð²Ð°Ð¹Ñ‚Ðµ Ð¾Ð´Ð¸Ð½ Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´ Ð·Ð° Ð¾Ð´Ð¸Ð½ Ñ€Ð°Ð·, Ð¿Ð¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð½Ðµ Ð¿Ð¾Ð´Ð°Ð²Ð°Ð¹Ñ‚Ðµ Ð·Ð°ÐºÐ°Ð· Ð´Ð²Ð°Ð¶Ð´Ñ‹",
          contentTmp4:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, ÑƒÐ±ÐµÐ´Ð¸Ñ‚ÐµÑÑŒ, Ñ‡Ñ‚Ð¾ Ð²Ð°Ñˆ Ð·Ð°ÐºÐ°Ð· Ð¾Ñ‚Ð¿Ñ€Ð°Ð²Ð»ÐµÐ½ Ð¿Ð¾ÑÐ»Ðµ Ð·Ð°Ð²ÐµÑ€ÑˆÐµÐ½Ð¸Ñ Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´Ð°, Ð¸Ð½Ð°Ñ‡Ðµ Ð¼Ñ‹ Ð½Ðµ ÑÐ¼Ð¾Ð¶ÐµÐ¼ Ð²Ð¾Ð²Ñ€ÐµÐ¼Ñ Ð¿Ñ€Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÑŒ Ð²Ð°Ñˆ Ð¿Ð»Ð°Ñ‚ÐµÐ¶.",
          waitingPayment: "ÐžÐ¶Ð¸Ð´Ð°Ð½Ð¸Ðµ Ð¾Ð¿Ð»Ð°Ñ‚Ñ‹",
          receivingTitle:
            "Ð˜Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ Ð¾ ÐºÐ°Ñ€Ñ‚Ðµ Ð´Ð»Ñ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ð¸Ñ",
          confirm1: "ÐÐ¾Ð¼ÐµÑ€ Ð·Ð°ÐºÐ°Ð·Ð°",
          confirm2: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð±Ð°Ð½ÐºÐ°",
          confirm3: "Ð’Ð»Ð°Ð´ÐµÐ»ÐµÑ† ÐºÐ°Ñ€Ñ‚Ñ‹",
          confirm4: "ÐÐ¾Ð¼ÐµÑ€ ÐºÐ°Ñ€Ñ‚Ñ‹",
          confirm5: "IFSC",
          confirm6: "Ð¤Ð¸Ð»Ð¸Ð°Ð»",
          Required: "Fill in Ref No",
          Return: "ÐÐ°Ð·Ð°Ð´",
        },
        promotion: {
          title: "Ð ÐµÐºÐ»Ð°Ð¼Ð½Ð¾Ðµ Ð¿Ñ€Ð¾Ð´Ð²Ð¸Ð¶ÐµÐ½Ð¸Ðµ",
          bouns: "ÐŸÑ€Ð¸Ð·",
          level_1: "1 ÑƒÑ€Ð¾Ð²ÐµÐ½ÑŒ",
          level_2: "2 ÑƒÑ€Ð¾Ð²ÐµÐ½ÑŒ",
          totalPeople: "ÐžÐ±Ñ‰ÐµÐµ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð»ÑŽÐ´ÐµÐ¹",
          contribution: "Ð ÐµÐºÐ»Ð°Ð¼Ð½Ñ‹Ðµ Ð²Ñ‹Ð³Ð¾Ð´Ñ‹",
          code: "ÐœÐ¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ð¾ÐºÐ¾Ð´",
          link: "Ð¡ÑÑ‹Ð»ÐºÐ° Ð½Ð° Ð¼Ð¾Ð¹ Ð¿Ñ€Ð¾Ð¼Ð¾ÐºÐ¾Ð´",
        },
        bonusrecord: { title: "Ð—Ð°Ð¿Ð¸ÑÐ¸ Ð¾ Ð¿Ñ€Ð¸Ð·Ð°Ñ…" },
        redenvelopes: {
          title: "ÐŸÐ¾Ð´Ð°Ñ€ÐºÐ¸",
          Hello: "Ð—Ð´Ñ€Ð°Ð²ÑÑ‚Ð²ÑƒÐ¹a",
          Eveverone: "ÐšÐ°Ð¶Ð´Ð¾Ðµ",
          des: "Ð£ Ð½Ð°Ñ Ð¿Ð¾Ð´Ð°Ñ€Ð¾Ðº Ð´Ð»Ñ Ñ‚ÐµÐ±Ñ",
          giftCode: "ÐŸÐ¾Ð´Ð°Ñ€Ð¾Ñ‡Ð½Ñ‹Ð¹ ÐºÐ¾Ð´",
          PleaseGiftCode:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¿Ð¾Ð´Ð°Ñ€Ð¾Ñ‡Ð½Ñ‹Ð¹ ÐºÐ¾Ð´",
          Receive: "ÐŸÐ¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð´Ð°Ñ€Ð¾Ðº",
          Best: "Ð¡ Ð½Ð°Ð¸Ð»ÑƒÑ‡ÑˆÐ¸Ð¼Ð¸ Ð¿Ð¾Ð¶ÐµÐ»Ð°Ð½Ð¸ÑÐ¼Ð¸ Ñ‚ÐµÐ±Ñ",
          Congratulations: "ÐŸÐ¾Ð·Ð´Ñ€Ð°Ð²Ð»ÑÐµÐ¼ Ñ‚ÐµÐ±Ñ",
          already: "Ð¢Ñ‹ ÑƒÐ¶Ðµ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ð»",
          ACCEPT: "Ð¡Ð¾Ð±Ñ€Ð°Ñ‚ÑŒ",
          txt: "æ‚¨å¥½ï¼Œæ‚¨å¯ä»¥é€šè¿‡è”ç³»MZplayåœ¨çº¿å®¢æœï¼Œä½¿ç”¨æ‚¨çš„è´¦æˆ·ä½™é¢è´­ä¹°ç¤¼ç‰©ç ï¼Œå¯èµ é€ç»™å¹³å°å¥½å‹æäº¤é¢†å–ã€‚",
        },
        withdrawal: {
          title: "Ð’Ñ‹Ð²Ð¾Ð´ ÑÑ€ÐµÐ´ÑÑ‚Ð²",
          balance: "Ð‘Ð°Ð»Ð°Ð½Ñ",
          enterwithdraw: "Ð¡ÑƒÐ¼Ð¼Ð° Ð²Ñ‹Ð²Ð¾Ð´Ð°",
          withdrawAamount: "Ð¡ÑƒÐ¼Ð¼Ð° Ð²Ñ‹Ð²Ð¾Ð´Ð° ÑÑ€ÐµÐ´ÑÑ‚Ð²",
          fee: "ÐÐ°Ð»Ð¾Ð³Ð¸",
          toAccount: "Ð¡ÑƒÐ¼Ð¼Ð° Ð¿Ð¾ÑÐ»Ðµ Ð½Ð°Ð»Ð¾Ð³Ð¾Ð¾Ð±Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ",
          rate: "Ð£ÑÐ»ÑƒÐ³Ð¸",
          totalBet: "Ñ‚Ñ€ÐµÐ±ÑƒÐµÑ‚ÑÑ ÐµÑ‰Ðµ ÑÑƒÐ¼Ð¼Ð° ÑÑ‚Ð°Ð²ÐºÐ¸",
          withdrawTime: "Ð’Ñ€ÐµÐ¼Ñ Ð²Ñ‹Ð²Ð¾Ð´Ð°",
          dailyWithdrawal:
            "ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð²Ñ‹Ð²Ð¾Ð´Ð¾Ð² ÑÑ€ÐµÐ´ÑÑ‚Ð² Ð² Ð´ÐµÐ½ÑŒ",
          withdrawMoney: "ÐœÐ°ÑÑˆÑ‚Ð°Ð± ÑÑƒÐ¼Ð¼Ñ‹",
          payout: "ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð²Ñ‹Ð²Ð¾Ð´Ð¾Ð² ÑÑ€ÐµÐ´ÑÑ‚Ð² Ð² Ð´ÐµÐ½ÑŒ",
          bankCard: "Ð‘Ð°Ð½ÐºÐ¾Ð²ÑÐºÐ¸Ðµ ÐºÐ°Ñ€Ñ‚Ñ‹",
          selectBank: "Ð’Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Ð±Ð°Ð½ÐºÐ¾Ð²ÑÐºÑƒÑŽ ÐºÐ°Ñ€Ñ‚Ñƒ",
          addBankCard: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð±Ð°Ð½ÐºÐ¾Ð²ÑÐºÑƒÑŽ ÐºÐ°Ñ€Ñ‚Ñƒ",
          rechargeTip1: "Ð¡ÑƒÐ¼Ð¼Ð° Ð²Ñ‹Ð²Ð¾Ð´Ð°",
          rechargeTip2:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð±Ð°Ð½ÐºÐ¾Ð²ÑÐºÑƒÑŽ ÐºÐ°Ñ€Ñ‚Ñƒ",
          rechargeTip3: "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
          select: "Ð’Ñ‹Ð±Ð¾Ñ€",
          add: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ",
        },
        withdrawrecord: {
          title: "Ð—Ð°Ð¿Ð¸ÑÐ¸ Ð¾ Ð²Ñ‹Ð²Ð¾Ð´Ðµ ÑÑ€ÐµÐ´ÑÑ‚Ð²",
          applying: "Ð—Ð°ÑÐ²ÐºÐ¸ Ð² Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐµ",
          agree: "Ð¡Ð¾Ð³Ð»Ð°ÑÐµÐ½",
          refuse: "ÐžÑ‚ÐºÐ°Ð·",
        },
        mission: {
          title: "ÐŸÑ€Ð¸Ð³Ð»Ð°ÑÐ¸Ñ‚ÑŒ Ð´Ñ€ÑƒÐ·ÐµÐ¹",
          totalPeople: "ÐžÐ±Ñ‰ÐµÐµ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð»ÑŽÐ´ÐµÐ¹",
          totalAmount: "ÐžÐ±Ñ‰Ð°Ñ ÑÑƒÐ¼Ð¼Ð°",
          myTask: "ÐœÐ¾Ð¸ Ð·Ð°Ð´Ð°Ð½Ð¸Ñ",
          invited: "ÐŸÑ€Ð¸Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ðµ",
          validMenmber: "Ð”ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ðµ Ñ‡Ð»ÐµÐ½Ñ‹",
          receive: "Ð¡Ð¾Ð±Ñ€Ð°Ñ‚ÑŒ",
        },
        promoteRecord: {
          title: "Ð—Ð°Ð¿Ð¸ÑÑŒ Ð¾ Ð¿Ñ€Ð¸Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ð¸",
          People: "ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð»ÑŽÐ´ÐµÐ¹",
        },
        addbank: {
          title: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð±Ð°Ð½ÐºÐ¾Ð²ÑÐºÑƒÑŽ ÐºÐ°Ñ€Ñ‚Ñƒ",
          bankName: "ÐÐ°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð±Ð°Ð½ÐºÐ°",
          beneficiaryName: "Ð¤Ð˜Ðž Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ñ‚ÐµÐ»Ñ Ð¿Ð»Ð°Ñ‚ÐµÐ¶Ð°",
          accountNo: "ÐÐ¾Ð¼ÐµÑ€ Ð±Ð°Ð½ÐºÐ¾Ð²ÑÐºÐ¾Ð¹ ÐºÐ°Ñ€Ñ‚Ñ‹",
          bankCity: "Ð“Ð¾Ñ€Ð¾Ð´, Ð³Ð´Ðµ Ð½Ð°Ñ…Ð¾Ð´Ð¸Ñ‚ÑÑ Ð±Ð°Ð½Ðº",
          IFSCCode: "IFSC Cord",
          email: "ÐŸÐ¾Ñ‡Ñ‚Ð¾Ð²Ñ‹Ð¹ ÑÑ‰Ð¸Ðº",
          bankProvince: "ÐŸÑ€Ð¾Ð²Ð¸Ð½Ñ†Ð¸Ñ, Ð³Ð´Ðµ Ð½Ð°Ñ…Ð¾Ð´Ð¸Ñ‚ÑÑ Ð±Ð°Ð½Ðº",
          bankBranch: "ÐÐ´Ñ€ÐµÑ Ñ„Ð¸Ð»Ð¸Ð°Ð»Ð°",
          addBtn: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð±Ð°Ð½ÐºÐ¾Ð²ÑÐºÐ¸Ð¹ ÑÑ‡ÐµÑ‚",
          opsionalbankProvince:
            "ÐŸÑ€Ð¾Ð²Ð¸Ð½Ñ†Ð¸Ñ, Ð³Ð´Ðµ Ð½Ð°Ñ…Ð¾Ð´Ð¸Ñ‚ÑÑ Ð±Ð°Ð½Ðº",
          opsionalbankBranch: "ÐÐ´Ñ€ÐµÑ Ñ„Ð¸Ð»Ð¸Ð°Ð»Ð°",
        },
        addElcbank: {
          title: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ ÑÐ»ÐµÐºÑ‚Ñ€Ð¾Ð½Ð½Ñ‹Ð¹ ÐºÐ¾ÑˆÐµÐ»ÐµÐº",
          addBtn: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ ÑÐ»ÐµÐºÑ‚Ñ€Ð¾Ð½Ð½Ñ‹Ð¹ ÐºÐ¾ÑˆÐµÐ»ÐµÐº",
          mobile:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð½Ð¾Ð¼ÐµÑ€ Ð¼Ð¾Ð±Ð¸Ð»ÑŒÐ½Ð¾Ð³Ð¾ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð° ÑÐ»ÐµÐºÑ‚Ñ€Ð¾Ð½Ð½Ð¾Ð³Ð¾ ÐºÐ¾ÑˆÐµÐ»ÑŒÐºÐ°",
        },
        addUsdt: {
          title: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ USDT",
          addBtn: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ USDT",
          type: "Ð¢Ð¸Ð¿ USDT",
          address: "ÐÐ´Ñ€ÐµÑ ÐºÐ¾ÑˆÐµÐ»ÑŒÐºÐ°",
          tip: "ÐžÑˆÐ¸Ð±ÐºÐ° Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚Ð° Ð°Ð´Ñ€ÐµÑÐ° USDT",
          txt: "USDT (TRC) Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚ Ð°Ð´Ñ€ÐµÑÐ°. ÐÐ´Ñ€ÐµÑ ÑÐ¾ÑÑ‚Ð¾Ð¸Ñ‚ Ð¸Ð· 34 ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð², Ð½Ð°Ñ‡Ð¸Ð½Ð°Ñ Ñ Ð±ÑƒÐºÐ²Ñ‹ Ð¢.",
          txt1: "USDT (ERC) Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚ Ð°Ð´Ñ€ÐµÑÐ°. ÐÐ´Ñ€ÐµÑ ÑÐ¾ÑÑ‚Ð¾Ð¸Ñ‚ Ð¸Ð· 42 ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð², Ð½Ð°Ñ‡Ð¸Ð½Ð°Ñ Ñ Ð±ÑƒÐºÐ²Ñ‹ 0x.",
        },
        wellet: {
          title: "ÐºÐ¾ÑˆÐµÐ»ÐµÐº",
          withdrawalBalance: "Ð’Ñ‹Ð²Ð¾Ð´Ð¸Ð¼Ñ‹Ð¹ Ð±Ð°Ð»Ð°Ð½Ñ",
          historicalWithdrawal: "Ð’Ñ‹Ð²Ð¾Ð´Ð¸Ð¼Ñ‹Ð¹ Ð±Ð°Ð»Ð°Ð½Ñ",
          accumulatedWithdrawal: "Ð’Ñ‹Ð²Ð¾Ð´ ÑÐµÐ³Ð¾Ð´Ð½Ñ",
          everyDay: "Ð•Ð¶ÐµÐ´Ð½ÐµÐ²Ð½Ð¾",
          order: "Ñ€Ð°Ð·",
          tip: "Ð’Ð¾Ð·Ð¼Ð¾Ð¶Ð½Ð¾ÑÑ‚ÑŒ Ð²Ñ‹Ð²Ð¾Ð´Ð° ÑÑ€ÐµÐ´ÑÑ‚Ð² Ð½Ð° Ð¿Ñ€Ð¸Ð²ÑÐ·Ð°Ð½Ð½ÑƒÑŽ ÐºÐ°Ñ€Ñ‚Ñƒ Ð±ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ð¾ ",
          myCard: "ÐœÐ¾Ð¸ Ð±Ð°Ð½ÐºÐ¾Ð²ÑÐºÐ¸Ðµ ÐºÐ°Ñ€Ñ‚Ñ‹",
          rechargeRecord: "Ð—Ð°Ð¿Ð¸ÑÑŒ Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ",
          withdrawRecord: "Ð—Ð°Ð¿Ð¸ÑÐ¸ Ð¾ Ð²Ñ‹Ð²Ð¾Ð´Ðµ ÑÑ€ÐµÐ´ÑÑ‚Ð²",
        },
        transactionrecord: { title: "Ð˜ÑÑ‚Ð¾Ñ€Ð¸Ñ Ñ‚Ñ€Ð°Ð½Ð·Ð°ÐºÑ†Ð¸Ð¹" },
        newtutorial: {
          title: "Ð˜Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ñ Ð´Ð»Ñ Ð½Ð°Ñ‡Ð¸Ð½Ð°ÑŽÑ‰Ð¸Ñ…",
          chooseYour: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÑÐ²Ð¾Ðµ",
          favoriteGame: "Ð›ÑŽÐ±Ð¸Ð¼Ñ‹Ðµ Ð¸Ð³Ñ€Ñ‹",
          pickLucky: "Ð’Ñ‹Ð±ÐµÑ€Ð¸ ÑÐ²Ð¾ÐµÐ³Ð¾ ÑÑ‡Ð°ÑÑ‚Ð»Ð¸Ð²Ñ‡Ð¸ÐºÐ°",
          numberColor: "Ð§Ð¸ÑÐ»Ð¾ Ð¸Ð»Ð¸ Ñ†Ð²ÐµÑ‚",
          SKIP: "ÐŸÑ€Ð¾Ð¿ÑƒÑÑ‚Ð¸Ñ‚ÑŒ",
          NEXT: "Ð¡Ð»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹ ÑˆÐ°Ð³",
          confirmAmount:
            "ÐŸÐ¾Ð´Ñ‚Ð²ÐµÑ€Ð´Ð¸Ñ‚Ðµ ÑÑƒÐ¼Ð¼Ñƒ Ð²Ð°ÑˆÐµÐ¹ ÑÑ‚Ð°Ð²ÐºÐ¸",
          getBouns: "ÐŸÐ¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ Ð¿Ñ€Ð¸Ð·",
          moneyWill:
            "Ð”ÐµÐ½ÑŒÐ³Ð¸ Ð±ÑƒÐ´ÑƒÑ‚ Ð´Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ñ‹ Ð½Ð° Ñ‚Ð²Ð¾Ð¹ Ð¸Ð³Ñ€Ð¾Ð²Ð¾Ð¹ ÑÑ‡ÐµÑ‚ Ð¿Ð¾ÑÐ»Ðµ Ñ‚Ð¾Ð³Ð¾, ÐºÐ°Ðº Ñ‚Ñ‹ Ð²Ñ‹Ð¸Ð³Ñ€Ð°ÐµÑˆÑŒ Ñ€Ð°ÑƒÐ½Ð´",
          youRecharge: "Ð¢Ñ‹ Ð¼Ð¾Ð¶ÐµÑˆÑŒ Ð¿Ð¾Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÑŒ",
          withdrawHere: "Ð˜Ð»Ð¸ ÑÐ½ÑÑ‚ÑŒ Ð½Ð°Ð»Ð¸Ñ‡Ð½Ñ‹Ðµ Ð·Ð´ÐµÑÑŒ",
        },
        download: {
          title: "Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ",
          name: "",
          goBtn: "ÐŸÐµÑ€ÐµÐ¹Ñ‚Ð¸ Ðº Ð·Ð°Ð³Ñ€ÑƒÐ·ÐºÐµ",
          des: "ÐŸÑ€Ð¾Ñ„ÐµÑÑÐ¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ð°Ñ Ð¸Ð³Ñ€Ð¾Ð²Ð°Ñ Ð»Ð¾Ñ‚ÐµÑ€ÐµÐ¹Ð½Ð°Ñ Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð°",
          playNow: "Ð˜Ð³Ñ€Ð°Ñ‚ÑŒ Ð¿Ñ€ÑÐ¼Ð¾ ÑÐµÐ¹Ñ‡Ð°Ñ",
          lotteryGame: "Ð›Ð¾Ñ‚ÐµÑ€ÐµÐ¹Ð½Ñ‹Ðµ Ð¸Ð³Ñ€Ñ‹",
          btn: "Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ ÑÐµÐ¹Ñ‡Ð°Ñ",
        },
        tabbar: {
          tabbarList: [
            {
              id: 1,
              name: "Ð“Ð»Ð°Ð²Ð½Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð°",
              imgAction: t("07d4"),
              img: t("2288"),
              to: "/home",
            },
            {
              id: 2,
              name: "ÐœÐµÑ€Ð¾Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ñ",
              imgAction: t("b5ef"),
              img: t("5b0e"),
              to: "/activity",
            },
            {
              id: 3,
              name: "Ð¿Ñ€Ð¾Ð¼Ð¾",
              imgAction: t("7268"),
              img: t("7268"),
              to: "/promotion",
            },
            {
              id: 4,
              name: "ÐºÐ¾ÑˆÐµÐ»ÐµÐº",
              imgAction: t("4c6e"),
              img: t("b2a5"),
              to: "/wallet",
            },
            {
              id: 5,
              name: "ÐœÐ¾Ð¸",
              imgAction: t("e636"),
              img: t("6c7c"),
              to: "/mian",
            },
          ],
        },
        mian: {
          title: "ÐœÐ¾Ð¸",
          historical: "Ð—Ð°Ð¿Ð¸ÑÑŒ Ð¾ ÑÐ´ÐµÐ»Ð°Ð½Ð½Ñ‹Ñ… ÑÑ‚Ð°Ð²ÐºÐ°Ñ…",
          funding: "Ð˜ÑÑ‚Ð¾Ñ€Ð¸Ñ Ñ‚Ñ€Ð°Ð½Ð·Ð°ÐºÑ†Ð¸Ð¹",
          loginLog: "Ð–ÑƒÑ€Ð½Ð°Ð» Ð²Ñ…Ð¾Ð´Ð¾Ð²",
          message: "ÐÐ¾Ð²Ð¾ÑÑ‚Ð¸",
          balance: "Ð’ÑÐµ ÐºÐ¾ÑˆÐµÐ»ÑŒÐºÐ¸",
          totalwallet: "Ð¾Ð±Ñ‰Ð¸Ð¹ ÐºÐ¾ÑˆÐµÐ»ÐµÐº",
          refreshwallet: "ÐŸÐµÑ€ÐµÑ€Ð°Ð±Ð°Ñ‚Ñ‹Ð²Ð°Ñ‚ÑŒ",
          loginOut: "Ð’Ñ‹Ñ…Ð¾Ð´",
          menuName1: "Ð‘ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚ÑŒ Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚Ð°",
          menuName2: "Ð£ÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð¾ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ¸ Google",
          menuName3: "ÐŸÑ€Ð¸Ð³Ð»Ð°ÑÐ¸Ñ‚ÑŒ Ð´Ñ€ÑƒÐ·ÐµÐ¹",
          menuName4: "ÐšÑ€Ð°ÑÐ½Ñ‹Ðµ Ð¿Ð°ÐºÐµÑ‚Ñ‹",
          menuName5: "Ð˜Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ñ Ð´Ð»Ñ Ð½Ð°Ñ‡Ð¸Ð½Ð°ÑŽÑ‰Ð¸Ñ…",
          menuName6: "Ðž",
          menuName7: "ÐžÐ±ÑÐ»ÑƒÐ¶Ð¸Ð²Ð°Ð½Ð¸Ðµ ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð¾Ð²",
        },
        checkIn: {
          title: "Ð—Ð°Ð¿Ð¸ÑÐ°Ñ‚ÑŒÑÑ",
          attendanceRules: "ÐŸÑ€Ð°Ð²Ð¸Ð»Ð° Ð·Ð°Ð¿Ð¸ÑÐ¸",
          txt: "Ð—Ð°Ð¿Ð¸ÑÐ°Ñ‚ÑŒÑÑ Ð·Ð° Ð±Ð¾Ð»ÑŒÑˆÐ¾Ð¹ Ñ€Ð¾Ð·Ñ‹Ð³Ñ€Ñ‹Ñˆ",
          rule: "ÐŸÑ€Ð°Ð²Ð¸Ð»Ð°",
          record: "Ð’Ð¾Ð¹Ñ‚Ð¸",
          today: "ÐŸÐ¾Ð´Ð¿Ð¸ÑÐ°Ð½Ð¾ ÑÐµÐ³Ð¾Ð´Ð½Ñ",
          received: "ÐŸÐ¾Ð»ÑƒÑ‡ÐµÐ½Ð¾",
          day: "Ð”Ð½.",
          btn: "Ð—Ð°Ð¿Ð¸ÑÐ°Ñ‚ÑŒÑÑ",
          Receive: "ÐŸÐ¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ Ð¿Ð¾Ð´Ð°Ñ€Ð¾Ðº",
          Best: "Ð¡ Ð½Ð°Ð¸Ð»ÑƒÑ‡ÑˆÐ¸Ð¼Ð¸ Ð¿Ð¾Ð¶ÐµÐ»Ð°Ð½Ð¸ÑÐ¼Ð¸ Ñ‚ÐµÐ±Ñ",
          Congratulations: "ÐŸÐ¾Ð·Ð´Ñ€Ð°Ð²Ð»ÑÐµÐ¼ Ñ‚ÐµÐ±Ñ",
          already: "Ð¢Ñ‹ ÑƒÐ¶Ðµ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ð»",
          ACCEPT: "Ð¡Ð¾Ð±Ñ€Ð°Ñ‚ÑŒ",
        },
        checkInDes: {
          title: "ÐŸÑ€Ð°Ð²Ð¸Ð»Ð° Ð·Ð°Ð¿Ð¸ÑÐ¸",
          checkInDay: "ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð´Ð½ÐµÐ¹ Ð·Ð°Ð¿Ð¸ÑÐ¸",
          accumulatedAmount: "ÐÐ°ÐºÐ¾Ð¿Ð»ÐµÐ½Ð½Ð°Ñ ÑÑƒÐ¼Ð¼Ð°",
          checkInBonus: "ÐŸÑ€Ð¸Ð· Ð·Ð° Ð·Ð°Ð¿Ð¸ÑÐ¸",
          rulesDetails: "ÐŸÑ€Ð¸Ð· Ð·Ð° Ð·Ð°Ð¿Ð¸ÑÐ¸",
          tep1: "ÐŸÐ¾ÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð°Ñ ÐµÐ¶ÐµÐ´Ð½ÐµÐ²Ð½Ð°Ñ Ð·Ð°Ð¿Ð¸ÑÑŒ Ð±ÐµÐ· Ð¸Ð½Ñ‚ÐµÑ€Ð²Ð°Ð»Ð¾Ð².",
          tep2: "ÐŸÐ¾ÑÐ»Ðµ Ð¾Ð´Ð½Ð¾Ð´Ð½ÐµÐ²Ð½Ð¾Ð³Ð¾ Ð¸Ð½Ñ‚ÐµÑ€Ð²Ð°Ð»Ð°, ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð·Ð°Ð¿Ð¸ÑÐ°Ð½Ð½Ñ‹Ñ… Ð´Ð½ÐµÐ¹ Ð¾Ð±Ð½ÑƒÐ»ÑÐµÑ‚ÑÑ.",
          tep3: "Ð¡ Ð¿ÐµÑ€Ð²Ð¾Ð³Ð¾ Ð´Ð½Ñ, Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ Ð²Ñ‹Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÑŒ Ñ‚Ñ€ÐµÐ±Ð¾Ð²Ð°Ð½Ð¸Ñ Ðº Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚Ñƒ, Ð¸Ð³Ñ€Ð¾ÐºÐ¸ Ð±ÐµÐ· Ð¸ÑÑ‚Ð¾Ñ€Ð¸Ð¸ Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚Ð¾Ð² Ð½Ðµ ÑÐ¼Ð¾Ð³ÑƒÑ‚ Ð¿Ð¾Ð»ÑƒÑ‡Ð¸Ñ‚ÑŒ ÑÐ²Ð¾Ð¹ Ð±Ð¾Ð½ÑƒÑ!",
          tep4: "ÐÐ°ÐºÐ¾Ð¿Ð»ÐµÐ½Ð½Ð°Ñ ÑÑƒÐ¼Ð¼Ð° Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ Ð´Ð¾Ð»Ð¶Ð½Ð° ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²Ð¾Ð²Ð°Ñ‚ÑŒ ÑƒÑÐ»Ð¾Ð²Ð¸ÑÐ¼ Ð´Ð»Ñ Ñ‚Ð¾Ð³Ð¾, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð·Ð°Ð¿Ð¸ÑÐ°Ñ‚ÑŒÑÑ, Ð¸ Ð±Ð¾Ð½ÑƒÑ Ð¼Ð¾Ð¶ÐµÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð¾Ð´Ð¸Ð½ Ñ€Ð°Ð· Ð² Ð´ÐµÐ½ÑŒ.",
          tep5: "ÐŸÐ»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ð° Ð¾ÑÑ‚Ð°Ð²Ð»ÑÐµÑ‚ Ð·Ð° ÑÐ¾Ð±Ð¾Ð¹ Ð¿Ñ€Ð°Ð²Ð¾ Ð¾ÐºÐ¾Ð½Ñ‡Ð°Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð¹ Ð¸Ð½Ñ‚ÐµÑ€Ð¿Ñ€ÐµÑ‚Ð°Ñ†Ð¸Ð¸ Ð´Ð°Ð½Ð½Ð¾Ð¹ Ð¾Ð¿ÐµÑ€Ð°Ñ†Ð¸Ð¸. Ð•ÑÐ»Ð¸ Ñƒ Ð²Ð°Ñ ÐºÐ°ÐºÐ¸Ðµ-Ð»Ð¸Ð±Ð¾ Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹, Ð¿Ð¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, ÑÐ²ÑÐ¶Ð¸Ñ‚ÐµÑÑŒ ÑÐ¾ ÑÐ»ÑƒÐ¶Ð±Ð¾Ð¹ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸!",
        },
        historicalBetting: { title: "Ð˜ÑÑ‚Ð¾Ñ€Ð¸Ñ ÑÑ‚Ð°Ð²Ð¾Ðº" },
        loginLog: { title: "Ð–ÑƒÑ€Ð½Ð°Ð» Ð²Ñ…Ð¾Ð´Ð¾Ð²" },
        messageCenter: {
          title: "Ð¦ÐµÐ½Ñ‚Ñ€ Ð½Ð¾Ð²Ð¾ÑÑ‚ÐµÐ¹",
          readAll: "ÐŸÑ€Ð¾Ñ‡Ð¸Ñ‚Ð°Ñ‚ÑŒ Ð²ÑÐµ",
          removeAll: "Ð£Ð´Ð°Ð»Ð¸Ñ‚ÑŒ Ð²ÑÐµ",
          delTitle: "Ð¢Ñ‹ ÑƒÐ²ÐµÑ€ÐµÐ½, Ñ‡Ñ‚Ð¾ Ñ…Ð¾Ñ‡ÐµÑˆÑŒ ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ?",
          delall:
            "Ð¢Ñ‹ ÑƒÐ²ÐµÑ€ÐµÐ½, Ñ‡Ñ‚Ð¾ Ñ…Ð¾Ñ‡ÐµÑˆÑŒ ÑƒÐ´Ð°Ð»Ð¸Ñ‚ÑŒ Ð²ÑÐµ?",
          readall:
            "Ð¢Ñ‹ ÑƒÐ²ÐµÑ€ÐµÐ½, Ñ‡Ñ‚Ð¾ Ñ…Ð¾Ñ‡ÐµÑˆÑŒ Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ Ð²ÑÐµ?",
        },
        messageDes: { title: "Ð”ÐµÑ‚Ð°Ð»Ð¸ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ñ" },
        lottery: {
          drawResult: "Ð ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ñ‹ Ñ€Ð¾Ð·Ñ‹Ð³Ñ€Ñ‹ÑˆÐ°",
          period: "ÐÐ¾Ð¼ÐµÑ€ Ð²Ñ‹Ð¿ÑƒÑÐºÐ°",
          money: "Ð¡ÑƒÐ¼Ð¼Ð°",
          multiply: "ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾",
          totalPrice: "ÐžÐ±Ñ‰Ð°Ñ ÑÑƒÐ¼Ð¼Ð°",
          pleaseBet: "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð´ÐµÐ»Ð°Ð¹Ñ‚Ðµ ÑÑ‚Ð°Ð²ÐºÑƒ",
          election: "Ð¸Ð½Ð²ÐµÑ€Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ",
        },
        colorLand: {
          tab1: "ÐžÐ±Ñ‰.ÑÑ‚Ð°Ð²ÐºÐ¸",
          tab2: "2 Ð°Ð½Ð°Ð».Ð§Ð¸Ñ.",
          tab3: "3-Ð·Ð½Ð°Ñ‡.ÑÐ¾Ð².",
          tab4: "Ð Ð°Ð·. ÐÐ¾.",
          title1: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ 2 ÑÐ¾Ð²Ð¿Ð°Ð´Ð°ÑŽÑ‰Ð¸Ñ… Ñ‡Ð¸ÑÐ»Ð°",
          tip1: "*Ð•ÑÐ»Ð¸ Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚Ñ‹Ð¹ Ð½Ð¾Ð¼ÐµÑ€ ÑÐ¾Ð²Ð¿Ð°Ð´Ð°ÐµÑ‚ Ñ 2 Ð½Ð¾Ð¼ÐµÑ€Ð°Ð¼Ð¸ ÑÑ‚Ð°Ð²Ð¾Ðº, Ñ‚Ð¾ Ð²Ñ‹Ð¸Ð³Ñ€Ñ‹Ð²Ð°ÐµÑ‚. (Ð—Ð° Ð¸ÑÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸ÐµÐ¼ Ñ‚Ñ€ÐµÑ… Ð¾Ð´Ð¸Ð½Ð°ÐºÐ¾Ð²Ñ‹Ñ… Ñ‡Ð¸ÑÐ»Ð°).",
          title2: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÑƒÐ½Ð¸ÐºÐ°Ð»ÑŒÐ½ÑƒÑŽ Ð¿Ð°Ñ€Ñƒ Ñ‡Ð¸ÑÐµÐ»",
          tip2: "* Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÐºÐ°Ðº Ð¼Ð¸Ð½Ð¸Ð¼ÑƒÐ¼ 1 Ð¿Ð°Ñ€Ñƒ Ð¸Ð· Ð¾Ð´Ð½Ð¾Ð³Ð¾ Ð¸ Ñ‚Ð¾Ð³Ð¾ Ð¶Ðµ Ð½Ð¾Ð¼ÐµÑ€Ð° Ð¸ 1 Ð´Ñ€ÑƒÐ³Ð¾Ð³Ð¾ Ð½Ð¾Ð¼ÐµÑ€Ð° Ð´Ð»Ñ ÑÑ‚Ð°Ð²ÐºÐ¸, ÐµÑÐ»Ð¸ Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚Ñ‹Ð¹ Ð½Ð¾Ð¼ÐµÑ€ ÑÐ¾Ð²Ð¿Ð°Ð´Ð°ÐµÑ‚ Ñ Ð½Ð¾Ð¼ÐµÑ€Ð¾Ð¼ ÑÑ‚Ð°Ð²ÐºÐ¸, Ñ‚Ð¾ Ð²Ñ‹Ð¸Ð³Ñ€Ñ‹Ð²Ð°ÐµÑ‚.",
          title3: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ 3 ÑƒÐ½Ð¸ÐºÐ°Ð»ÑŒÐ½Ñ‹Ñ… Ð½Ð¾Ð¼ÐµÑ€Ð°",
          tip3: "*Ð•ÑÐ»Ð¸ Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚Ñ‹Ð¹ Ð½Ð¾Ð¼ÐµÑ€ ÑÐ¾Ð²Ð¿Ð°Ð´Ð°ÐµÑ‚ Ñ 3 Ð½Ð¾Ð¼ÐµÑ€Ð°Ð¼Ð¸ ÑÑ‚Ð°Ð²Ð¾Ðº, Ñ‚Ð¾ Ð²Ñ‹Ð¸Ð³Ñ€Ñ‹Ð²Ð°ÐµÑ‚.",
          title4: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ 3 ÑÐ¾Ð²Ð¿Ð°Ð´Ð°ÑŽÑ‰Ð¸Ñ… Ð½Ð¾Ð¼ÐµÑ€Ð°",
          tip4: "*Ð•ÑÐ»Ð¸ Ð½Ð¾Ð¼ÐµÑ€ Ð²Ñ‹Ð¸Ð³Ñ€Ñ‹ÑˆÐ° - Ð»ÑŽÐ±Ñ‹Ðµ Ñ‚Ñ€Ð¸ Ð¾Ð´Ð¸Ð½Ð°ÐºÐ¾Ð²Ñ‹Ñ… Ð½Ð¾Ð¼ÐµÑ€Ð°, Ñ‚Ð¾ Ð²Ñ‹Ð¸Ð³Ñ€Ñ‹Ð²Ð°ÐµÑ‚.",
          title5: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ 3 Ñ€Ð°Ð·Ð½Ñ‹Ñ… Ñ‡Ð¸ÑÐ»Ð°",
          tip5: "* Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ 3 Ð¸Ð»Ð¸ Ð±Ð¾Ð»ÐµÐµ Ð½Ð¾Ð¼ÐµÑ€Ð¾Ð², ÐµÑÐ»Ð¸ Ñ‚Ñ€Ð¸ Ð½Ð¾Ð¼ÐµÑ€Ð° Ð² Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ðµ Ñ€Ð¾Ð·Ñ‹Ð³Ñ€Ñ‹ÑˆÐ° Ð¾Ñ‚Ð»Ð¸Ñ‡Ð°ÑŽÑ‚ÑÑ Ð´Ñ€ÑƒÐ³ Ð¾Ñ‚ Ð´Ñ€ÑƒÐ³Ð° Ð¸ ÑÐ¾Ð²Ð¿Ð°Ð´Ð°ÑŽÑ‚ Ñ Ð²Ñ‹Ð±Ñ€Ð°Ð½Ð½Ñ‹Ð¼ Ð½Ð¾Ð¼ÐµÑ€Ð¾Ð¼, Ñ‚Ð¾ Ð²Ñ‹Ð¸Ð³Ñ€Ñ‹Ð²Ð°ÐµÑ‚.",
          title6:
            "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ 3 Ð¿Ð¾ÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ñ… Ñ‡Ð¸ÑÐ»Ð°",
          tip6: "*Ð•ÑÐ»Ð¸ Ð½Ð¾Ð¼ÐµÑ€Ð¾Ð¼ Ñ€Ð¾Ð·Ñ‹Ð³Ñ€Ñ‹ÑˆÐ° ÑÐ²Ð»ÑÑŽÑ‚ÑÑ Ð»ÑŽÐ±Ñ‹Ðµ Ñ‚Ñ€Ð¸ Ð¿Ð¾ÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ñ… Ð½Ð¾Ð¼ÐµÑ€Ð°, Ñ‚Ð¾ ÑÑ‚Ð¾ Ð²Ñ‹Ð¸Ð³Ñ€Ñ‹ÑˆÐ½Ñ‹Ð¹ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚.",
          title7: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ 2 Ñ€Ð°Ð·Ð½Ñ‹Ñ… Ñ‡Ð¸ÑÐ»Ð°",
          tip7: "*Ð²Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ 2 Ð¸Ð»Ð¸ Ð±Ð¾Ð»ÐµÐµ Ñ‡Ð¸ÑÐµÐ», Ð¸ ÐµÑÐ»Ð¸ Ð² Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ðµ Ñ€Ð¾Ð·Ñ‹Ð³Ñ€Ñ‹ÑˆÐ° Ð´Ð²Ð° Ñ‡Ð¸ÑÐ»Ð° ÑÐ¾Ð²Ð¿Ð°Ð´Ð°ÑŽÑ‚ Ñ Ð²Ñ‹Ð±Ñ€Ð°Ð½Ð½Ñ‹Ð¼ Ñ‡Ð¸ÑÐ»Ð¾Ð¼, Ñ‚Ð¾ Ð²Ñ‹Ð¸Ð³Ñ€Ñ‹Ð²Ð°ÐµÑ‚.",
          selectCon1:
            "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ 2 ÑÐ¾Ð²Ð¿Ð°Ð´Ð°ÑŽÑ‰Ð¸Ñ… Ð½Ð¾Ð¼ÐµÑ€Ð°ï¼š",
          selectCon2:
            "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÑƒÐ½Ð¸ÐºÐ°Ð»ÑŒÐ½ÑƒÑŽ Ð¿Ð°Ñ€Ñƒ Ñ‡Ð¸ÑÐµÐ»ï¼š",
          selectCon3: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ 3 ÑƒÐ½Ð¸ÐºÐ°Ð»ÑŒÐ½Ñ‹Ñ… Ð½Ð¾Ð¼ÐµÑ€Ð°ï¼š",
          selectCon4: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ 3 Ñ€Ð°Ð·Ð½Ñ‹Ñ… Ñ‡Ð¸ÑÐ»Ð°ï¼š",
          selectCon5: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ 2 Ñ€Ð°Ð·Ð½Ñ‹Ñ… Ñ‡Ð¸ÑÐ»Ð°ï¼š",
          gameType1: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ 2 Ñ€Ð°Ð·Ð½Ñ‹Ñ… Ñ‡Ð¸ÑÐ»Ð°",
          gameType2: "3 Ð¿Ð¾ÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ñ… Ñ‡Ð¸ÑÐ»Ð°",
          gameType3: "2 Ð¾Ð´Ð¸Ð½Ð°ÐºÐ¾Ð²Ñ‹Ñ… Ñ‡Ð¸ÑÐ»Ð°",
          gameType4: "3 Ð¾Ð´Ð¸Ð½Ð°ÐºÐ¾Ð²Ñ‹Ñ… Ñ‡Ð¸ÑÐ»Ð°",
        },
        activity: { title: "ÐœÐµÑ€Ð¾Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ñ" },
        activityDes: { title: "ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ÑÑ‚Ð¸ Ð¼ÐµÑ€Ð¾Ð¿Ñ€Ð¸ÑÑ‚Ð¸Ñ" },
        usdt: {
          title: "ÐŸÐ¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ USDT",
          address: "ÐÐ´Ñ€ÐµÑ ÐºÐ¾ÑˆÐµÐ»ÑŒÐºÐ° USDT",
          Raddress: "Ð°Ð´Ñ€ÐµÑ Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ",
          QRcode: "QR ÐºÐ¾Ð´",
          tit1: "ÐºÑƒÐ¿Ð¸Ñ‚ÑŒ Ð²Ð°Ð»ÑŽÑ‚Ñƒ",
          tit2: "Ñ‚Ñ€Ð°Ð½ÑÑ„ÐµÑ€ Ð¿Ð¾ Ð°Ð´Ñ€ÐµÑÑƒ",
          tit3: "Ð—Ð°ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ ÑÐ´ÐµÐ»ÐºÑƒ",
          tit4: "Ð¶Ð´Ð°Ñ‚ÑŒ Ð¿Ñ€Ð¸Ð±Ñ‹Ñ‚Ð¸Ñ",
          tip1: "1. ÐÐ´Ñ€ÐµÑ Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ Ð¼ÐµÐ½ÑÐµÑ‚ÑÑ Ð² Ñ€ÐµÐ¶Ð¸Ð¼Ðµ Ñ€ÐµÐ°Ð»ÑŒÐ½Ð¾Ð³Ð¾ Ð²Ñ€ÐµÐ¼ÐµÐ½Ð¸. ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð½Ðµ ÑÐ¾Ñ…Ñ€Ð°Ð½ÑÐ¹Ñ‚Ðµ Ð°Ð´Ñ€ÐµÑ Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ. ÐŸÐ¾Ð²Ñ‚Ð¾Ñ€Ð½Ð¾ Ð¿Ð¾Ð»ÑƒÑ‡Ð°Ð¹Ñ‚Ðµ Ð°Ð´Ñ€ÐµÑ Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ Ð¿ÐµÑ€ÐµÐ´ ÐºÐ°Ð¶Ð´Ñ‹Ð¼ Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸ÐµÐ¼, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¸Ð·Ð±ÐµÐ¶Ð°Ñ‚ÑŒ Ð¿Ð¾Ñ‚ÐµÑ€Ð¸ Ñ†Ð¸Ñ„Ñ€Ð¾Ð²Ð¾Ð¹ Ð²Ð°Ð»ÑŽÑ‚Ñ‹. ",
          tip2: "2. ÐŸÐ¾ÑÐ»Ðµ ÐºÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ñ Ð°Ð´Ñ€ÐµÑÐ° Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ Ð¿ÐµÑ€ÐµÐ¹Ð´Ð¸Ñ‚Ðµ Ð² ÐºÐ¾ÑˆÐµÐ»ÐµÐº Ñ†Ð¸Ñ„Ñ€Ð¾Ð²Ð¾Ð¹ Ð²Ð°Ð»ÑŽÑ‚Ñ‹, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ Ð²Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ðµ Ð´Ð»Ñ Ð²Ñ‹Ð²Ð¾Ð´Ð° Ð¸ Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´Ð° Ð´ÐµÐ½ÐµÐ³.ÐÐµ Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÑÐ¹Ñ‚Ðµ Ñ†Ð¸Ñ„Ñ€Ð¾Ð²Ñ‹Ðµ Ð°ÐºÑ‚Ð¸Ð²Ñ‹, ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ðµ Ð¾Ñ‚Ð»Ð¸Ñ‡Ð°ÑŽÑ‚ÑÑ Ð¾Ñ‚ Ð°ÐºÑ‚Ð¸Ð²Ð¾Ð² Ð²Ñ‹Ð±Ñ€Ð°Ð½Ð½Ð¾Ð³Ð¾ Ð±Ð»Ð¾ÐºÑ‡ÐµÐ¹Ð½Ð°, Ð¸Ð½Ð°Ñ‡Ðµ Ð°ÐºÑ‚Ð¸Ð²Ñ‹ Ð½Ðµ Ð±ÑƒÐ´ÑƒÑ‚ Ð¿Ð¾Ð»ÑƒÑ‡ÐµÐ½Ñ‹. ",
          tip3: "ÐŸÐ¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ-ÑÐ½ÑÑ‚Ð¸Ðµ Ð¾Ð±Ñ‹Ñ‡Ð½Ð¾ Ð¿Ñ€Ð¾Ð¸ÑÑ…Ð¾Ð´Ð¸Ñ‚ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸ Ð² Ñ‚ÐµÑ‡ÐµÐ½Ð¸Ðµ 1-5 Ð¼Ð¸Ð½ÑƒÑ‚, ÐµÑÐ»Ð¸ Ð½ÐµÑ‚, Ð¾Ð±Ñ€Ð°Ñ‚Ð¸Ñ‚ÐµÑÑŒ Ð² Ð¾Ð½Ð»Ð°Ð¹Ð½-ÑÐ»ÑƒÐ¶Ð±Ñƒ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ¸ ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð¾Ð². ",
          tip4: "(Ð‘ÐµÐ· ÐºÐ¾Ð¼Ð¸ÑÑÐ¸Ð¸ Ð·Ð° Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚ÐºÑƒ, Ð½Ð°Ð¿Ñ€Ð¸Ð¼ÐµÑ€: Ð²Ñ‹Ð²Ð¾Ð´ 100 Ð½Ð° ÑÑ‡ÐµÑ‚ 100) ",
        },
        trx: {
          uset: "TRX",
          title: "ÐŸÐ¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ TRX",
          address: "ÐÐ´Ñ€ÐµÑ ÐºÐ¾ÑˆÐµÐ»ÑŒÐºÐ° TRX",
        },
        promotionNew: {
          title: "Ð¿Ñ€Ð¾Ð¼Ð¾",
          dataOverview: "ÐžÐ±Ñ‰ÐµÐµ Ñ€Ð°ÑÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ð¸Ðµ Ð´Ð°Ð½Ð½Ñ‹Ñ…",
          myTeam: "ÐœÐ¾Ñ ÐºÐ¾Ð¼Ð°Ð½Ð´Ð°",
          upRecord: "Ð—Ð°Ð¿Ð¸ÑÐ¸ ÑÐ±Ð¾Ñ€Ð¾Ð²",
          tutorial: "Ð£Ñ‡ÐµÐ±Ð½Ð¸ÐºÐ¸",
          myReward: "ÐœÐ¾Ð¸ Ð¿Ñ€Ð¸Ð·Ñ‹",
          totalComm:
            "ÐžÐ±Ñ‰Ð°Ñ ÑÑƒÐ¼Ð¼Ð° ÐºÐ¾Ð¼Ð¸ÑÑÐ¸Ð¾Ð½Ð½Ñ‹Ñ… Ð·Ð° Ð²Ñ‡ÐµÑ€Ð°ÑˆÐ½Ð¸Ð¹ Ð´ÐµÐ½ÑŒ",
          directComm: "ÐÐµÐ¿Ð¾ÑÑ€ÐµÐ´ÑÑ‚Ð²ÐµÐ½Ð½Ð°Ñ ÐºÐ¾Ð¼Ð¸ÑÑÐ¸Ñ",
          teamComm: "ÐšÐ¾Ð¼Ð¸ÑÑÐ¸Ñ ÐºÐ¾Ð¼Ð°Ð½Ð´Ñ‹",
          directSubord:
            "ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð¿Ñ€ÑÐ¼Ñ‹Ñ… Ð¿Ð¾Ð´Ñ‡Ð¸Ð½ÐµÐ½Ð½Ñ‹Ñ…",
          totalTeams:
            "ÐžÐ±Ñ‰ÐµÐµ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ñ‡Ð»ÐµÐ½Ð¾Ð² ÐºÐ¾Ð¼Ð°Ð½Ð´Ñ‹",
          newToday:
            "Ð¡ÐµÐ³Ð¾Ð´Ð½ÑÑˆÐ½ÐµÐµ Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ ÐšÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ Ð»ÑŽÐ´ÐµÐ¹",
          newTeam: "ÐÐ¾Ð²Ñ‹Ðµ Ñ‡Ð»ÐµÐ½Ñ‹ ÐºÐ¾Ð¼Ð°Ð½Ð´Ñ‹ ÑÐµÐ³Ð¾Ð´Ð½Ñ",
          weekComm:
            "ÐžÐ±Ñ‰Ð°Ñ ÑÑƒÐ¼Ð¼Ð° ÐºÐ¾Ð¼Ð¸ÑÑÐ¸Ð¾Ð½Ð½Ñ‹Ñ… Ð·Ð° Ð½ÐµÐ´ÐµÐ»ÑŽ",
          totalComm1: "ÐžÐ±Ñ‰Ð°Ñ ÐºÐ¾Ð¼Ð¸ÑÑÐ¸Ñ",
          QRcode:
            "Ð”Ð¾Ð»Ð³Ð¾Ðµ Ð½Ð°Ð¶Ð¼Ð¸Ñ‚Ðµ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑÐ¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ QR-ÐºÐ¾Ð´",
          copyCode: "Ð¡ÐºÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ ÐºÐ¾Ð´ Ð¿Ñ€Ð¸Ð³Ð»Ð°ÑˆÐµÐ½Ð¸Ñ",
          copyLink: "ÐšÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ ÑÑÑ‹Ð»ÐºÑƒ",
          rebateTable:
            "Ð¢Ð°Ð±Ð»Ð¸Ñ†Ð° ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²Ð¸Ñ ÑÑƒÐ¼Ð¼Ñ‹ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‚Ð°",
          agencyLevel: "ÐšÐ¾ÑÑ„.",
          teamNumber: "ÐšÐ¾Ð¼Ð°Ð½Ð´Ð°",
          teamFlow: "Ð¿Ñ€Ð¸Ñ…Ð¾Ð´ Ð¸ Ñ€Ð°ÑÑ…Ð¾Ð´ ÐºÐ¾Ð¼Ð°Ð½Ð´Ñ‹",
          teamRecharge: "ÐŸÐ¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ ÐºÐ¾Ð¼Ð°Ð½Ð´Ñ‹",
          validDay:
            "Ð”ÐµÐ¹ÑÑ‚Ð²Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ðµ Ñ‡Ð»ÐµÐ½Ñ‹: Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ ÑÑ‡ÐµÑ‚Ð° Ð¸Ð»Ð¸ ÑÑ‚Ð°Ð²ÐºÐ¸ Ð² Ñ‚Ð¾Ñ‚ Ð¶Ðµ Ð´ÐµÐ½ÑŒ",
          commMethod: "Ð Ð°ÑÑ‡ÐµÑ‚ ÐºÐ¾Ð¼Ð¸ÑÑÐ¸Ð¾Ð½Ð½Ñ‹Ñ…",
          Hierarchy: "Ð£Ñ€Ð¾Ð²Ð½Ð¸",
          rebateRatio: "ÐšÐ¾ÑÑ„Ñ„Ð¸Ñ†Ð¸ÐµÐ½Ñ‚ Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‚Ð°",
          firstMember: "Ð£Ñ€Ð¾Ð²ÐµÐ½ÑŒ 1",
          secondMember: "Ð£Ñ€Ð¾Ð²ÐµÐ½ÑŒ 2",
          thirdMember: "Ð£Ñ€Ð¾Ð²ÐµÐ½ÑŒ 3",
          tierMember: "Ð£Ñ€Ð¾Ð²ÐµÐ½ÑŒ 4",
          bettingTurnover: "Ð¿Ñ€Ð¸Ñ…Ð¾Ð´ Ð¸ Ñ€Ð°ÑÑ…Ð¾Ð´ ÑÑ‚Ð°Ð²Ð¾Ðº",
          agent: "-Ñ‡Ð»ÐµÐ½ ÑƒÑ€Ð¾Ð²Ð½Ñ",
          upTime: "Ð’Ñ€ÐµÐ¼Ñ ÑÐ±Ð¾Ñ€Ð°",
          receiveAmount: "Ð¡ÑƒÐ¼Ð¼Ð° ÑÐ±Ð¾Ñ€Ð°",
          operate: "ÐžÐ¿ÐµÑ€Ð°Ñ†Ð¸Ñ",
          details: "ÐŸÐ¾Ð´Ñ€Ð¾Ð±Ð½Ð¾ÑÑ‚Ð¸",
          date: "Ð”Ð°Ñ‚Ð°",
          directTeam: "ÐÐµÐ¿Ð¾ÑÑ€ÐµÐ´ÑÑ‚Ð²ÐµÐ½Ð½Ð°Ñ ÐºÐ¾Ð¼Ð°Ð½Ð´Ð°",
          people: "Ñ‡ÐµÐ».",
          pleaseChoose: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ, Ð¿Ð¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°",
          totalBet: "ÐžÐ±Ñ‰Ð°Ñ ÑÑƒÐ¼Ð¼Ð° ÑÑ‚Ð°Ð²Ð¾Ðº",
          totalAmount: "ÐžÐ±Ñ‰Ð°Ñ ÑÑƒÐ¼Ð¼Ð° Ð²Ð¾Ð·Ð²Ñ€Ð°Ñ‚Ð°",
          Inquire: "Ð—Ð°Ð¿Ñ€Ð¾Ñ",
          nickName: "ÐÐ¸ÐºÐ½ÐµÐ¹Ð¼",
          runningWater: "Ð¿Ñ€Ð¸Ñ…Ð¾Ð´ Ð¸ Ñ€Ð°ÑÑ…Ð¾Ð´",
          condition: "Ð¡Ñ‚Ð°Ñ‚ÑƒÑ",
          enable: "ÐžÐ¿ÐµÑ€Ð°Ñ†Ð¸Ñ",
          disabled: "Ð’Ñ‹ÐºÐ»ÑŽÑ‡Ð¸Ñ‚ÑŒ",
          personalFlow: "ÐŸÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ð¿Ñ€Ð¸Ñ…Ð¾Ð´ Ð¸ Ñ€Ð°ÑÑ…Ð¾Ð´",
          personalRecharge: "ÐŸÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ð¿Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ",
          rgistrationTime: "Ð’Ñ€ÐµÐ¼Ñ Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ð¸",
          subordinates: "ÐºÐ¾Ð»Ð¸Ñ‡. Ð¿Ð¾Ð´Ñ‡Ð¸Ð½ÐµÐ½Ð½Ñ‹Ñ…",
          year: "Ð³Ð¾Ð´",
          moon: "Ð³Ð¾Ð´",
          day: "Ð»ÑƒÐ½Ð°",
          selectList: [
            { name: "1-Ð¹ ÑƒÑ€Ð¾Ð²ÐµÐ½ÑŒ", code: 1 },
            { name: "2-Ð¹ ÑƒÑ€Ð¾Ð²ÐµÐ½ÑŒ", code: 2 },
            { name: "3-Ð¹ ÑƒÑ€Ð¾Ð²ÐµÐ½ÑŒ", code: 3 },
            { name: "4-Ð¹ ÑƒÑ€Ð¾Ð²ÐµÐ½ÑŒ", code: 4 },
            { name: "5-Ð¹ ÑƒÑ€Ð¾Ð²ÐµÐ½ÑŒ", code: 5 },
            { name: "6-Ð¹ ÑƒÑ€Ð¾Ð²ÐµÐ½ÑŒ", code: 6 },
          ],
          promoteMoney: "Ð·Ð°Ñ€Ð°Ð±Ð°Ñ‚Ñ‹Ð²Ð°Ð¹Ñ‚Ðµ Ð´ÐµÐ½ÑŒÐ³Ð¸",
          uid: "UID",
        },
        verify: {
          title: "Ð£ÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð¾ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ¸ Google",
          unbind:
            "Ð Ð°Ð·Ð²ÐµÑ€Ð½ÑƒÑ‚ÑŒ/Ð¸Ð·Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð¾ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ¸",
          downTit:
            "Ð Ð°Ð·Ð²ÐµÑ€Ð½ÑƒÑ‚ÑŒ/Ð¸Ð·Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð¾ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ¸",
          downTxt:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð·Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚Ðµ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð¾ Google Verification. Ð•ÑÐ»Ð¸ ÑƒÑÑ‚Ð°Ð½Ð¾Ð²ÐºÐ° ÑƒÑÑ‚Ð°Ð½Ð¾Ð²Ð»ÐµÐ½Ð°, Ð½Ð°Ð¶Ð¼Ð¸Ñ‚Ðµ ÐºÐ½Ð¾Ð¿ÐºÑƒ Ð¿Ñ€Ð¸Ð²ÑÐ·ÐºÐ¸, Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑÐ²ÑÐ·Ð°Ñ‚ÑŒ ÑÐ²Ð¾ÑŽ ÑƒÑ‡ÐµÑ‚Ð½ÑƒÑŽ Ð·Ð°Ð¿Ð¸ÑÑŒ Ð»Ð¾Ñ‚ÐµÑ€ÐµÐ¸",
          bind: "Ð¡Ð²ÑÐ·Ñ‹Ð²Ð°Ñ‚ÑŒ",
          downVerify: "Ð¡ÐºÐ°Ñ‡Ð°Ñ‚ÑŒ Google Verification",
          vexplainTit:
            "Ð˜Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸ Ð¿Ð¾ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐµ Ð¿Ñ€Ð¸Ð²ÑÐ·ÐºÐ¸",
          list: [
            {
              txt: "Ð’Ð°Ð¼ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ð¾ ÑÐ¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ 16 -Ð±Ð¸Ñ‚Ð½Ñ‹Ð¹ ÐºÐ»ÑŽÑ‡, ÑÐ³ÐµÐ½ÐµÑ€Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ð¹ Ñ ÑƒÑ‡ÐµÑ‚Ð½Ð¾Ð¹ Ð·Ð°Ð¿Ð¸ÑÑŒÑŽ Ð»Ð¾Ñ‚ÐµÑ€ÐµÐ¸ Ð² Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾Ðµ Ð¼ÐµÑÑ‚Ð¾, Ð¸ Ð¾Ð´Ð½Ð¾Ð²Ñ€ÐµÐ¼ÐµÐ½Ð½Ð¾ ÑÐºÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ ÐµÐ³Ð¾ Ð² ÐºÐ»ÑŽÑ‡",
            },
            {
              txt: "Ð’Ð°Ð¼ Ð½ÑƒÐ¶Ð½Ð¾ Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚ÑŒ ÑƒÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð¾ Google Verification",
            },
            {
              txt: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ Ð¸Ð³Ñ€Ð¾Ð²Ð¾Ð¹ ÑƒÑ‡ÐµÑ‚Ð½ÑƒÑŽ Ð·Ð°Ð¿Ð¸ÑÑŒ Ð¸ ÐºÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ 16 -Ð±Ð¸Ñ‚ -Ð²Ð²Ð¾Ð´",
            },
            {
              txt: "ÐÐ²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸ Ð³ÐµÐ½ÐµÑ€Ð¸Ñ€ÑƒÐ¹Ñ‚Ðµ 6 Ñ†Ð¸Ñ„Ñ€ Ð¿Ð¾ÑÐ»Ðµ Ð´Ð¾Ð±Ð°Ð²Ð»ÐµÐ½Ð¸Ñ ÑƒÑÐ¿ÐµÑˆÐ½Ð¾Ð³Ð¾ Ñ†Ð¸Ñ„Ñ€Ð¾Ð²Ð¾Ð³Ð¾ ÐºÐ¾Ð´Ð° Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ¸",
            },
          ],
          vexplainNext: "Ð ÑƒÐºÐ¾Ð²Ð¾Ð´ÑÑ‚Ð²Ð¾",
          vbackupTit: "Ð ÐµÐ·ÐµÑ€Ð²Ð½Ñ‹Ð¹ ÐºÐ»ÑŽÑ‡",
          vbackupTxt:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²ÑŒÑ‚Ðµ Ð²Ð°Ð¶Ð½Ñ‹Ð¹ ÐºÐ»ÑŽÑ‡, Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑÐ¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚ÑŒ ÐµÐ³Ð¾ Ð² Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾Ð¼ Ð¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ð¸. Ð•ÑÐ»Ð¸ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½ Ð¾Ñ‚ÐºÐ°Ð·Ð°Ð»ÑÑ Ð¾Ñ‚ ÑÑ‚Ð¾Ð³Ð¾ ÐºÐ»ÑŽÑ‡Ð°, Ð² Ð¿Ñ€Ð¾Ñ‚Ð¸Ð²Ð½Ð¾Ð¼ ÑÐ»ÑƒÑ‡Ð°Ðµ Ð²Ñ‹ ÑÐ¾Ñ…Ñ€Ð°Ð½Ð¸Ñ‚Ðµ Ð¾Ñ†ÐµÐ½ÐºÑƒ Ð¶Ð¸Ð·Ð½Ð¸ Ð² Ñ‚ÐµÑ‡ÐµÐ½Ð¸Ðµ 7 Ð´Ð½ÐµÐ¹.",
          vsafetyTit: "ÐŸÑ€Ð¾Ð²ÐµÑ€ÐºÐ° Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚ÑŒ",
          vsafetyTxt:
            "ÐžÑ‚Ð¿Ñ€Ð°Ð²ÑŒÑ‚Ðµ ÐºÐ¾Ð´ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ¸ Ð½Ð° ÑÐ²Ð¾Ð¹ Ð½Ð¾Ð¼ÐµÑ€ Ð¼Ð¾Ð±Ð¸Ð»ÑŒÐ½Ð¾Ð³Ð¾ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð°",
          vsafetySms:
            "ÐšÐ¾Ð´ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ¸ Ð¼Ð¾Ð±Ð¸Ð»ÑŒÐ½Ð¾Ð³Ð¾ Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ð°",
          vsafetyTip:
            "Ð­Ñ‚Ð¾ Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ð¾ Ð´Ð»Ñ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ¸? Ð¡Ð²ÑÐ¶Ð¸Ñ‚ÐµÑÑŒ Ñ Ð¾Ð±ÑÐ»ÑƒÐ¶Ð¸Ð²Ð°Ð½Ð¸ÐµÐ¼ ÐºÐ»Ð¸ÐµÐ½Ñ‚Ð¾Ð²",
          vsafetySnsnull:
            "ÐšÐ¾Ð´ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ¸ Ð´Ð¾Ð»Ð¶ÐµÐ½ Ð±Ñ‹Ñ‚ÑŒ Ð·Ð°Ð¿Ð¾Ð»Ð½ÐµÐ½",
          loginTit: "ÐŸÑ€Ð¾Ð²ÐµÑ€ÐºÐ° Ð²Ñ…Ð¾Ð´Ð° Ð² ÑÐ¸ÑÑ‚ÐµÐ¼Ñƒ Google",
          loginTxt:
            "Ð—Ð°Ñ‰Ð¸Ñ‚Ð° Ð°ÐºÐºÐ°ÑƒÐ½Ñ‚Ð° Ð±Ñ‹Ð»Ð° Ð¾Ñ‚ÐºÑ€Ñ‹Ñ‚Ð°, Ð·Ð°Ð¿Ð¾Ð»Ð½Ð¸Ñ‚Ðµ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ðµ Ð¾Ð¿ÐµÑ€Ð°Ñ†Ð¸Ð¸ Ð² ÑÐ¾Ð¾Ñ‚Ð²ÐµÑ‚ÑÑ‚Ð²Ð¸Ð¸ Ñ Ð¿Ñ€Ð¸Ð³Ð»Ð°ÑˆÐµÐ½Ð¸ÐµÐ¼",
          loginTip:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð¾Ñ‚ÐºÑ€Ð¾Ð¹Ñ‚Ðµ Ð¿Ñ€Ð¸Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ Alibaba Cloud Ð¸Ð»Ð¸ Authenticator Google Ð² Ñ‚ÐµÐ»ÐµÑ„Ð¾Ð½Ðµ, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ 6 -Ð´Ð¸Ð½Ð°Ð¼Ð¸Ñ‡ÐµÑÐºÐ¸Ð¹ Ð´Ð¸Ð½Ð°Ð¼Ð¸Ñ‡ÐµÑÐºÐ¸Ð¹ ÐºÐ¾Ð´",
          loginNum: "6 Ñ†Ð¸Ñ„Ñ€",
        },
        long: {
          title: "Ð”Ð»Ð¸Ð½Ð½Ñ‹Ð¹ Ð¿Ð¾Ð¼Ð¾Ñ‰Ð½Ð¸Ðº Ð´Ñ€Ð°ÐºÐ¾Ð½Ð°",
          newTitle: "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¸Ð¹ Ð´Ð»Ð¸Ð½Ð½Ñ‹Ð¹ Ð´Ñ€Ð°ÐºÐ¾Ð½",
          betTitle: "ÐœÐ¾Ñ ÑÑ‚Ð°Ð²ÐºÐ°",
          expect: "Ð²ÐµÑÑŒ ÑÐºÑ€Ð°Ð½",
          andDig: "Ð¡Ð¿Ð¾ÐºÐ¾Ð¹ÑÑ‚Ð²Ð¸Ðµ Ð´ÑƒÑ…Ð°",
          andSmall: "Ð¸ Ð¼Ð°Ð»ÐµÐ½ÑŒÐºÐ¸Ð¹",
          andodd: "Ð¡ÑƒÐ¼Ð¼Ð°",
          andeven: "Ð“Ð°Ñ€Ð¼Ð¾Ð½Ð¸Ñ",
          illustrate: "Ð¸Ð»Ð»ÑŽÑÑ‚Ñ€Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ",
          txt1: "ÐŸÐ¾Ð¼Ð¾Ñ‰Ð½Ð¸Ðº Changlong - Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ñ‹ Ð»Ð¾Ñ‚ÐµÑ€ÐµÐ¸ Â«Ð¾Ð´Ð¸Ð½Ð¾ÐºÐ°Ñ Ð¸ Ð´Ð²Ð¾Ð¹Ð½Ð°ÑÂ» Ð² Ð»Ð¾Ñ‚ÐµÑ€ÐµÑŽ Win Go, 5D, K3 Ð¸ Gameplay.",
          txt2: "Ð’ÐµÑ€Ð¾ÑÑ‚Ð½Ð¾ÑÑ‚ÑŒ Ð±Ð¾Ð»ÑŒÑˆÐ¾Ð¹, Ð¼Ð°Ð»ÐµÐ½ÑŒÐºÐ¾Ð¹, Ð¾Ð´Ð¸Ð½Ð¾Ñ‡Ð½Ð¾Ð¹ Ð¸ Ð´Ð²Ð¾Ð¹ÑÑ‚Ð²ÐµÐ½Ð½Ð¾ÑÑ‚Ð¸ Ð² ÐºÐ°Ð¶Ð´Ð¾Ð¼ Ð¿ÐµÑ€Ð¸Ð¾Ð´Ðµ Ð¾Ð´Ð¸Ð½Ð°ÐºÐ¾Ð²Ð°. Ð•ÑÐ»Ð¸ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ñ‹ Ñ‚Ñ€ÐµÑ… Ð¿Ð¾ÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ñ… Ð¿ÐµÑ€Ð¸Ð¾Ð´Ð¾Ð² Ð¸ Ð²Ñ‹ÑˆÐµ Ð¾Ð´Ð¸Ð½Ð°ÐºÐ¾Ð²Ñ‹, ÑÑ‚Ð¾ Ð½Ð°Ð·Ñ‹Ð²Ð°ÐµÑ‚ÑÑ Â«Ð”Ð»Ð¸Ð½Ð½Ñ‹Ð¹ Ð´Ñ€Ð°ÐºÐ¾Ð½Â», ÐºÐ¾Ñ‚Ð¾Ñ€Ñ‹Ð¹ Ð¾Ð±Ñ‹Ñ‡Ð½Ð¾ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ Ð¼ÐµÑ‚Ð¾Ð´ Ñ Ð´Ð²Ð¾Ð¹Ð½Ñ‹Ð¼ Ð²ÐµÑ‰ÐµÑÑ‚Ð²Ð¾Ð¼ Ð´Ð»Ñ Ð²Ñ‹Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ñ Â«Ð”Ñ€Ð°ÐºÐ¾Ð½Ñ‹Â» Ð¸Ð»Ð¸ Â«Ð¨ÑƒÐ½Ð»Ð¾Ð½Ð³Â».",
          list: [
            {
              name: "Ð§Ñ‚Ð¾ Ñ‚Ð°ÐºÐ¾Ðµ Ñ€ÐµÐ·ÐºÐ¸Ð¹ Ð´Ñ€Ð°ÐºÐ¾Ð½?",
              txt: "Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð¾Ñ‚ÐºÑ€Ð¾ÐµÑ‚Ðµ Â«ÑÐ¸Ð½Ð³Ð»Â» Ð² Ñ‚ÐµÑ‡ÐµÐ½Ð¸Ðµ 5 Ð¿Ð¾ÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ñ… Ð¿ÐµÑ€Ð¸Ð¾Ð´Ð¾Ð², Ð²Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð²Ñ‹Ð±Ñ€Ð°Ñ‚ÑŒ Â«Ð´Ð²Ð¾Ð¹Ð½Ð¾Ð¹Â» Ð´Ð»Ñ ÑÑ‚Ð°Ð²Ð¾Ðº. Ð­Ñ‚Ð° ÑÑ…ÐµÐ¼Ð° ÑÑ‚Ð°Ð²Ð¾Ðº Ð½Ð°Ð·Ñ‹Ð²Ð°ÐµÑ‚ÑÑ Â«Ð”Ñ€Ð°ÐºÐ¾Ð½Â»;",
            },
            {
              name: "Ð§Ñ‚Ð¾ Ñ‚Ð°ÐºÐ¾Ðµ Shunlong?",
              txt: "Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð¾Ñ‚ÐºÑ€Ð¾ÐµÑ‚Ðµ Â«ÑÐ¸Ð½Ð³Ð»Â» Ð² Ñ‚ÐµÑ‡ÐµÐ½Ð¸Ðµ 5 Ð¿Ð¾ÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ñ… Ð¿ÐµÑ€Ð¸Ð¾Ð´Ð¾Ð², Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶Ð¸Ñ‚Ðµ Ð²Ñ‹Ð±Ð¸Ñ€Ð°Ñ‚ÑŒ Â«ÑÐ¸Ð½Ð³Ð»Â» Ð´Ð»Ñ ÑÑ‚Ð°Ð²Ð¾Ðº. Ð­Ñ‚Ð¾Ñ‚ Ð¿Ð»Ð°Ð½ ÑÑ‚Ð°Ð²Ð¾Ðº Ð½Ð°Ð·Ñ‹Ð²Ð°ÐµÑ‚ÑÑ Â«ShunlongÂ»;",
            },
            {
              name: "Ð§Ñ‚Ð¾ Ñ‚Ð°ÐºÐ¾Ðµ Ð´Ð²Ð¾Ð¹Ð½Ð°Ñ Ð¸Ð½Ð²ÐµÑÑ‚Ð¸Ñ†Ð¸Ñ?",
              txt: "Ð”Ð²Ð¾Ð¹Ð½Ñ‹Ðµ Ð¸Ð½Ð²ÐµÑÑ‚Ð¸Ñ†Ð¸Ð¸ - ÑÑ‚Ð¾ ÑÐ¿Ð¾ÑÐ¾Ð± Ð²Ð´Ð²Ð¾Ðµ Ð±Ð¾Ð»ÑŒÑˆÐµ Ð¼ÐµÑ‚Ð¾Ð´Ð° ÑÑ‚Ð°Ð²Ð¾Ðº, Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑƒÐ±ÐµÐ´Ð¸Ñ‚ÑŒÑÑ, Ñ‡Ñ‚Ð¾ Ð¾Ð½ Ð¼Ð¾Ð¶ÐµÑ‚ Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶Ð°Ñ‚ÑŒ Ð´ÐµÐ»Ð°Ñ‚ÑŒ Ð¼ÐµÑ‚Ð¾Ð´ ÑÑ‚Ð°Ð²Ð¾Ðº Ð² Ð¿Ñ€Ð¾Ñ†ÐµÑÑÐµ Â«Dragon CutÂ» Ð¸Ð»Ð¸ Â«ShunlongÂ».",
            },
          ],
          txt3: "ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¸Ð¹ Ð´Ð»Ð¸Ð½Ð½Ñ‹Ð¹ Ð´Ñ€Ð°ÐºÐ¾Ð½: ÑÑ‚Ð° Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡ÐµÑÐºÐ¸ Ð¾Ð±Ð½Ð¾Ð²Ð»ÑÐµÑ‚ Ð¸Ð³Ñ€Ð¾Ð²Ð¾Ð¹ Ð¿Ñ€Ð¾ÐµÐºÑ‚ Ñ Ñ‚ÐµÐ¼ Ð¶Ðµ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð¾Ð¼ Ñ‚Ð¾Ð³Ð¾ Ð¶Ðµ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ð° Ð² Ñ‚ÐµÑ‡ÐµÐ½Ð¸Ðµ 5 Ð¿Ð¾ÑÐ»ÐµÐ´Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ñ… Ð¿ÐµÑ€Ð¸Ð¾Ð´Ð¾Ð², Ñ‡Ñ‚Ð¾ ÑƒÐ´Ð¾Ð±Ð½Ð¾ Ð´Ð»Ñ Ð²Ð°Ñ, Ñ‡Ñ‚Ð¾Ð±Ñ‹ ÑÑƒÐ´Ð¸Ñ‚ÑŒ, Ñ‡Ñ‚Ð¾ Ð´Ñ€Ð°ÐºÐ¾Ð½ Ð¸Ð»Ð¸ Shunlong.",
          txt4: "ÐœÐ¾Ñ ÑÑ‚Ð°Ð²ÐºÐ°: ÑÑ‚Ð° Ñ„ÑƒÐ½ÐºÑ†Ð¸Ñ Ð±ÑƒÐ´ÐµÑ‚ Ð±Ñ‹ÑÑ‚Ñ€ÐµÐµ Ð¿Ñ€Ð¾ÑÐ¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ ÐºÐ¾Ð½Ñ‚ÐµÐ½Ñ‚ Ð¸ Ñ€ÐµÐ·ÑƒÐ»ÑŒÑ‚Ð°Ñ‚Ñ‹ Ð²Ð°ÑˆÐ¸Ñ… ÑÑ‚Ð°Ð²Ð¾Ðº.",
        },
        shop: {
          currentPoints: "Ñ‚ÐµÐºÑƒÑ‰Ð¸Ðµ Ð±Ð°Ð»Ð»Ñ‹",
          Redeem: "Ð’Ñ‹ÐºÑƒÐ¿Ð¸Ñ‚ÑŒ ÑÐµÐ¹Ñ‡Ð°Ñ",
          pointsGo: "Points Mall ÐŸÐµÑ€ÐµÐ¹Ñ‚Ð¸ ÑÐµÐ¹Ñ‡Ð°Ñ",
          commodityOrder: "Ñ‚Ð¾Ð²Ð°Ñ€Ð½Ñ‹Ð¹ Ð·Ð°ÐºÐ°Ð·",
          pointsRecord: "Ð—Ð°Ð¿Ð¸ÑÑŒ Ð¾Ñ‡ÐºÐ¾Ð²",
          title: "ÐžÑ‡ÐºÐ¸ ÐœÐ¾Ð»Ð»",
          pointsAvailable: "Ð”Ð¾ÑÑ‚ÑƒÐ¿Ð½Ñ‹Ðµ Ð±Ð°Ð»Ð»Ñ‹",
          rule: "ÐŸÑ€Ð°Ð²Ð¸Ð»Ð° Ð½Ð°Ñ‡Ð¸ÑÐ»ÐµÐ½Ð¸Ñ Ð±Ð°Ð»Ð»Ð¾Ð²",
          stock: "Ð² Ð½Ð°Ð»Ð¸Ñ‡Ð¸Ð¸",
          redeemed: "Ð¸ÑÐºÑƒÐ¿Ð»ÐµÐ½",
          integral: "Ð¸Ð½Ñ‚ÐµÐ³Ñ€Ð°Ð»",
          productName: "Ð½Ð°Ð¸Ð¼ÐµÐ½Ð¾Ð²Ð°Ð½Ð¸Ðµ Ñ‚Ð¾Ð²Ð°Ñ€Ð°",
          exchange: "Ð£ÑÐ»Ð¾Ð²Ð¸Ñ Ð¾Ð±Ð¼ÐµÐ½Ð°",
          name: "Ð¸Ð¼Ñ Ð¸ Ñ„Ð°Ð¼Ð¸Ð»Ð¸Ñ",
          address: "ÐÐ´Ñ€ÐµÑ Ð´Ð¾ÑÑ‚Ð°Ð²ÐºÐ¸",
          redeem: "Ð¿Ñ€Ð¾Ð´Ð¾Ð»Ð¶Ð°Ñ‚ÑŒ Ð¸ÑÐºÑƒÐ¿Ð°Ñ‚ÑŒ",
          checkOrder: "Ð¿Ñ€Ð¾Ð²ÐµÑ€Ð¸Ñ‚ÑŒ Ð·Ð°ÐºÐ°Ð·",
          addressEmpty: "ÐÐ´Ñ€ÐµÑ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð¿ÑƒÑÑ‚Ñ‹Ð¼!",
          ordered: "Ð£Ð¿Ð¾Ñ€ÑÐ´Ð¾Ñ‡ÐµÐ½Ð½Ñ‹Ð¹",
          delivery: "Ð² Ð´Ð¾ÑÑ‚Ð°Ð²ÐºÐµ",
          completed: "Ð·Ð°Ð²ÐµÑ€ÑˆÐµÐ½Ð½Ñ‹Ð¹",
          orderDetails: "Ð˜Ð½Ñ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ Ð´Ð»Ñ Ð·Ð°ÐºÐ°Ð·Ð°",
          orderTime: "Ð²Ñ€ÐµÐ¼Ñ Ð·Ð°ÐºÐ°Ð·Ð°",
          orderStatus: "Ð¡Ñ‚Ð°Ñ‚ÑƒÑ Ð·Ð°ÐºÐ°Ð·Ð°",
          signTime: "Ð’Ñ€ÐµÐ¼Ñ Ð¾Ñ‚Ð¿Ñ€Ð°Ð²ÐºÐ¸",
          signPhoto: "ÐŸÐ¾Ð´Ð¿Ð¸ÑˆÐ¸Ñ‚ÐµÑÑŒ Ð½Ð° Ñ„Ð¾Ñ‚Ð¾",
        },
        selections: {
          distanceDraw: "Ð´Ð¾ Ñ€Ð¾Ð·Ñ‹Ð³Ñ€Ñ‹ÑˆÐ° Ð¿Ñ€Ð¸Ð·Ð¾Ð²",
          champion: "Ð§ÐµÐ¼Ð¿Ð¸Ð¾Ð½",
          runnerUp: "2-Ð¾Ðµ Ð¼ÐµÑÑ‚Ð¾",
          ndRunner: "3-Ð¾Ðµ Ð¼ÐµÑÑ‚Ð¾",
          outof1: "16/1",
          outof2: "16/2",
          outof3: "16/3",
        },
        lotteryD: {
          rules: "Ð˜Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸ Ð¿Ð¾ Ð¸Ð³Ñ€Ðµ",
          LotteryTime: "Ð Ð¾Ð·Ñ‹Ð³Ñ€Ñ‹Ñˆ Ð¿Ñ€Ð¸Ð·Ð¾Ð²",
          seal: "Ð—Ð°ÐºÑ€Ñ‹Ñ‚Ð¸Ðµ",
          stPrize1: "1-Ñ‹Ð¹ Ð¿Ñ€Ð¸Ð·",
          stPrize2: "2-Ñ‹Ð¹ Ð¿Ñ€Ð¸Ð·",
          stPrize3: "3-Ñ‹Ð¹ Ð¿Ñ€Ð¸Ð·",
          Finalist: "Ð¤Ð¸Ð½Ð°Ð»Ð¸ÑÑ‚",
          consolationprize: "ÑƒÑ‚ÐµÑˆÐ¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¹ Ð¿Ñ€Ð¸Ð·",
          Doubledisc: "Ð”Ð²ÑƒÑÑ‚Ð¾Ñ€Ð¾Ð½Ð½Ð°Ñ Ñ‚Ð°Ñ€ÐµÐ»ÐºÐ°",
          TraditionalDish: "Ð¢Ñ€Ð°Ð´Ð¸Ñ†Ð¸Ð¾Ð½Ð½Ð°Ñ Ñ‚Ð°Ñ€ÐµÐ»ÐºÐ°",
          Doubleside: "Ð”Ð²ÑƒÑÑ‚Ð¾Ñ€Ð¾Ð½Ð½Ð¾Ðµ",
          Choosenumber: "Ð’Ñ‹Ð±Ð¾Ñ€ Ð½Ð¾Ð¼ÐµÑ€Ð¾Ð²",
          FourDigit: "4-Ñ†Ð¸Ñ„Ñ€ ÐµÐ´Ð¸Ð½ÑÑ‚Ð²ÐµÐ½Ð½Ñ‹Ð¹ Ð²Ñ‹Ð±Ð¾Ñ€",
          FourSlection: "4-Ñ†Ð¸Ñ„Ñ€ Ð  Ð²Ñ‹Ð±Ð¾Ñ€",
          duplicatenumber: "Ð¿Ð¾Ð²Ñ‚Ð¾Ñ€ÑÑŽÑ‰Ð¸Ð¹ÑÑ Ð½Ð¾Ð¼ÐµÑ€",
          numberFormat: "Ð½ÐµÐ¿Ñ€Ð°Ð²Ð¸Ð»ÑŒÐ½Ñ‹Ð¹ Ñ„Ð¾Ñ€Ð¼Ð°Ñ‚ Ñ‡Ð¸ÑÐ»Ð°",
          Bigone: "Ð±Ð¾Ð»ÑŒÑˆÐ°Ñ Ñ‚Ñ‹ÑÑÑ‡Ð°",
          Smallone: "Ð¼Ð°Ð»ÐµÐ½ÑŒÐºÐ°Ñ Ñ‚Ñ‹ÑÑÑ‡Ð°",
          Bothone: "Ð±Ð¾Ð»ÑŒÑˆÐ°Ñ Ñ‚Ñ‹ÑÑÑ‡Ð°+Ð¼Ð°Ð»ÐµÐ½ÑŒÐºÐ°Ñ Ñ‚Ñ‹ÑÑÑ‡Ð°",
          Addbet: "Ð”Ð¾Ð±Ð°Ð²Ð¸Ñ‚ÑŒ ÑÑ‚Ð°Ð²ÐºÑƒ",
          Randomnumber: "Ð¡Ð»ÑƒÑ‡Ð°Ð¹Ð½Ð°Ñ ÐºÐ¾Ð¼Ð±Ð¸Ð½Ð°Ñ†Ð¸Ñ Ñ‡Ð¸ÑÐµÐ»",
          Machineselection: "Ð’Ñ‹Ð±Ð¾Ñ€ Ð¼Ð°ÑˆÐ¸Ð½Ñ‹",
          Enternumber: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð²Ð°Ñˆ Ð»ÑŽÐ±Ð¸Ð¼Ñ‹Ð¹ Ð½Ð¾Ð¼ÐµÑ€",
          Concatenatedcode:
            "ÐÐµÐ¿Ñ€ÐµÑ€Ñ‹Ð²Ð½Ð¾Ðµ ÐºÐ¾Ð´Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ (Ð¿Ð°ÐºÐµÑ‚Ñ‹)",
          select1: "2Ð” Ð¿Ð¾Ð»Ð½Ñ‹Ð¹ Ð²Ñ‹Ð±Ð¾Ñ€",
          select2: "3Ð” Ð¿Ð¾Ð»Ð½Ñ‹Ð¹ Ð²Ñ‹Ð±Ð¾Ñ€",
          select3: "4Ð” Ð¿Ð¾Ð»Ð½Ñ‹Ð¹ Ð²Ñ‹Ð±Ð¾Ñ€",
          select4: "2Ð” Ð¿Ð¾Ð·Ð¸Ñ‚Ð¸Ð²Ð½Ñ‹Ð¹ ÐºÐ¾Ð´",
          select5: "2Ð” Ð³Ñ€Ð°Ð½Ð´-Ð¿Ñ€Ð¸Ð·",
          select6: "2Ð” 1-Ñ‹Ð¹ Ð¿Ñ€Ð¸Ð·",
          select7: "2Ð”",
          select8: "3Ð”",
          SeventhPrize: "7-Ð¾Ð¹ Ð¿Ñ€Ð¸Ð·",
          EighthPrize: "8-Ð¾Ð¹ Ð¿Ñ€Ð¸Ð·",
          positivecode3: "3Ð” Ð¿Ð¾Ð·Ð¸Ñ‚Ð¸Ð²Ð½Ñ‹Ð¹ ÐºÐ¾Ð´",
          SpecialPrize3: "Ð³Ñ€Ð°Ð½Ð´-Ð¿Ñ€Ð¸",
          FirstPrize3: "3Ð” 1-Ñ‹Ð¹ Ð¿Ñ€Ð¸Ð·",
          SixthPrize: "6-Ð¾Ð¹ Ð¿Ñ€Ð¸Ð·",
          positivecode4: "4Ð” Ð¿Ð¾Ð·Ð¸Ñ‚Ð¸Ð²Ð½Ñ‹Ð¹ ÐºÐ¾Ð´",
          SpecialPrize4: "4Ð” Ð³Ñ€Ð°Ð½Ð´-Ð¿Ñ€Ð¸Ð·",
          FirstPrize4: "4Ð” 1-Ñ‹Ð¹ Ð¿Ñ€Ð¸Ð·",
          selectAll: "Ð²ÑÐµ Ð¼Ð¸Ð¼Ð¾",
          misses4: "4 Ð¼Ð¸Ð¼Ð¾",
          misses8: "8 Ð¼Ð¸Ð¼Ð¾",
          misses10: "10 Ð¼Ð¸Ð¼Ð¾",
          Enter: "Ð’Ð²Ð¾Ð´Ð¸Ñ‚ÑŒ",
          Compound: "Ð”ÑƒÐ¿Ð»ÐµÐºÑ",
          selected: "Ð¢Ñ‹ Ð²Ñ‹Ð±Ñ€Ð°Ð»",
          bet: "ÑÑ‚Ð°Ð²Ð¾Ðº",
          CN: "Ð’Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ",
          T2: "ÐŸÐ¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº",
          T3: "Ð’Ñ‚Ð¾Ñ€Ð½Ð¸Ðº",
          T4: "Ð¡Ñ€ÐµÐ´Ð°",
          T5: "Ð§ÐµÑ‚Ð²ÐµÑ€Ð³",
          T6: "ÐŸÑÑ‚Ð½Ð¸Ñ†Ð°",
          T7: "Ð¡ÑƒÐ±Ð±Ð¾Ñ‚Ð°",
          waitingdraw: "Ð¶Ð´ÐµÐ¼ Ñ€Ð¾Ð·Ñ‹Ð³Ñ€Ñ‹ÑˆÐ°",
          grandPrize: "Ð“Ð»Ð°Ð²Ð½Ñ‹Ð¹ Ð¿Ñ€Ð¸Ð·",
          firstprize: "ÐŸÐµÑ€Ð²Ñ‹Ð¹ Ð¿Ñ€Ð¸Ð·",
          secondprize: "Ð²Ñ‚Ð¾Ñ€Ð¾Ð¹ Ð¿Ñ€Ð¸Ð·",
          thirdprize: "Ñ‚Ñ€ÐµÑ‚Ð¸Ð¹ Ð¿Ñ€Ð¸Ð·",
          fourthprize: "Ð§ÐµÑ‚Ð²ÐµÑ€Ñ‚Ð°Ñ Ð¿Ñ€ÐµÐ¼Ð¸Ñ",
          fifthprize: "ÐŸÑÑ‚Ð°Ñ Ð¿Ñ€ÐµÐ¼Ð¸Ñ",
          sixthprize: "ÑˆÐµÑÑ‚Ð°Ñ Ð¿Ñ€ÐµÐ¼Ð¸Ñ",
          seventhprize: "Ð¡ÐµÐ´ÑŒÐ¼Ð°Ñ Ð¿Ñ€ÐµÐ¼Ð¸Ñ",
          eighthprize: "Ð’Ð¾ÑÑŒÐ¼Ð°Ñ Ð¿Ñ€ÐµÐ¼Ð¸Ñ",
          northernvietnam: "ÑÐµÐ²ÐµÑ€Ð½Ñ‹Ð¹ Ð²ÑŒÐµÑ‚Ð½Ð°Ð¼",
          southvietnam: "Ð®Ð¶Ð½Ñ‹Ð¹ Ð’ÑŒÐµÑ‚Ð½Ð°Ð¼",
          vietnamchinese: "Ð’ÑŒÐµÑ‚Ð½Ð°Ð¼ ÐšÐ¸Ñ‚Ð°Ð¹ÑÐºÐ¸Ð¹",
        },
        finance: {
          title: "Ð‘ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾",
          titleRes: "Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð°Ñ Ð·Ð°Ð¿Ð¸ÑÑŒ",
          tip1: "Ð”Ð½ÐµÐ²Ð½Ð°Ñ Ð½Ð¾Ñ€Ð¼Ð°",
          tip2: "Ð”Ð¾Ñ…Ð¾Ð´Ñ‹ Ñ€Ð°ÑÑÑ‡Ð¸Ñ‚Ñ‹Ð²Ð°ÑŽÑ‚ÑÑ ÐºÐ°Ð¶Ð´ÑƒÑŽ Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ",
          shop: "ÐžÑ‡ÐºÐ¸ ÐœÐ¾Ð»Ð»",
          shopTip:
            "Ð‘ÐµÑÐ¿Ð»Ð°Ñ‚Ð½Ñ‹Ð¹ Ð²Ñ‹ÐºÑƒÐ¿ Ð¼Ð°ÑÑÐ¸Ð²Ð½Ñ‹Ñ… Ð¿Ñ€ÐµÐ´Ð¼ÐµÑ‚Ð¾Ð² Ñ€Ð¾ÑÐºÐ¾ÑˆÐ¸",
          lumpSum: "ÐžÐ±Ñ‰Ð°Ñ ÑÑƒÐ¼Ð¼Ð°",
          security: "Ð¤Ð¸Ð½Ð°Ð½ÑÐ¾Ð²Ð°Ñ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚ÑŒ",
          transferIn: "Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´ Ð²",
          transferOut: "Ð¿ÐµÑ€ÐµÐ²ÐµÑÑ‚Ð¸",
          Every: "ÐšÐ°Ð¶Ð´Ñ‹Ð¹",
          minute: "ÐœÐ¸Ð½ÑƒÑ‚Ð½Ñ‹Ð¹ Ð´Ð¾Ñ…Ð¾Ð´",
          earnings: "ÐŸÐ¾Ð»ÑƒÑ‡ÐµÐ½Ð½Ñ‹Ð¹ Ð´Ð¾Ñ…Ð¾Ð´",
          cumulativeIncome: "Ð¡Ð¾Ð²Ð¾ÐºÑƒÐ¿Ð½Ñ‹Ð¹ Ð´Ð¾Ñ…Ð¾Ð´",
          estimatedIncome: "Ð Ð°ÑÑ‡ÐµÑ‚Ð½Ñ‹Ð¹ Ð´Ð¾Ñ…Ð¾Ð´",
          income: "Ð´Ð¾Ñ…Ð¾Ð´",
          tip3: "Ð¡Ñ€ÐµÐ´ÑÑ‚Ð²Ð° Ð½Ð°Ð´ÐµÐ¶Ð½Ð¾ Ð·Ð°Ñ‰Ð¸Ñ‰ÐµÐ½Ñ‹ Ð¸ Ð¼Ð¾Ð³ÑƒÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð¿ÐµÑ€ÐµÐ²ÐµÐ´ÐµÐ½Ñ‹ Ð² Ð»ÑŽÐ±Ð¾Ðµ Ð²Ñ€ÐµÐ¼Ñ.",
          history: "Ð·Ð°Ð¿Ð¸ÑÑŒ Ð¸ÑÑ‚Ð¾Ñ€Ð¸Ð¸",
          setIncome: "Ñ€Ð°ÑÑ‡ÐµÑ‚Ð½Ñ‹Ð¹ Ð´Ð¾Ñ…Ð¾Ð´",
          allRecords: "Ð²ÑÐµ Ð·Ð°Ð¿Ð¸ÑÐ¸",
          amountShare: "Ð¡ÑƒÐ¼Ð¼Ð° Ð·Ð° ÐºÐ¾Ð¿Ð¸ÑŽ",
          enter: "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾",
          availableBalance: "Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ñ‹Ðµ ÑÑ€ÐµÐ´ÑÑ‚Ð²Ð°",
          outAmount: "ÑÑƒÐ¼Ð¼Ð° Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´Ð°",
          inAmount: "Ð¡ÑƒÐ¼Ð¼Ð° Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´Ð°",
          all: "Ð²ÑÐµ",
          balanceAvailable:
            "ÐÐµÐ´Ð¾ÑÑ‚Ð°Ñ‚Ð¾Ñ‡Ð½Ð¾ Ð´Ð¾ÑÑ‚ÑƒÐ¿Ð½Ð¾Ð³Ð¾ Ð±Ð°Ð»Ð°Ð½ÑÐ°",
          noIncome: "Ð½ÐµÑ‚ Ð´Ð¾Ñ…Ð¾Ð´Ð°",
          noIncomeTip:
            "ÐŸÐµÑ€ÐµÑ‡Ð¸ÑÐ»ÑÐµÑ‚ÑÑ Ð»Ð¸ Ð´Ð¾Ñ…Ð¾Ð´ Ð² Ð½Ð°ÑÑ‚Ð¾ÑÑ‰ÐµÐµ Ð²Ñ€ÐµÐ¼Ñ",
        },
        financeRule: {
          title: "Ð£Ð·Ð½Ð°Ñ‚ÑŒ Ð¾ ÑÐµÐ¹Ñ„Ð°Ñ…",
          Rtip: "ÐœÐ¸Ð½Ð¸Ð¼Ð°Ð»ÑŒÐ½Ð°Ñ Ð´Ð¾Ñ…Ð¾Ð´Ð½Ð¾ÑÑ‚ÑŒ, ÐµÐ¶ÐµÐ´Ð½ÐµÐ²Ð½Ð°Ñ Ð¿Ñ€Ð¾Ñ†ÐµÐ½Ñ‚Ð½Ð°Ñ ÑÑ‚Ð°Ð²ÐºÐ°",
          Rtip1:
            "ÐŸÐ¾ÑÐ»Ðµ Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´Ð° Ð±Ð°Ð»Ð°Ð½ÑÐ° ÐºÐ¾ÑˆÐµÐ»ÑŒÐºÐ° ÐºÐ°Ð¶Ð´Ñ‹Ð¹",
          Rtip2:
            "Ð—Ð°Ñ€Ð°Ð±Ð¾Ñ‚Ð¾Ðº Ñ€Ð°ÑÑÑ‡Ð¸Ñ‚Ñ‹Ð²Ð°ÐµÑ‚ÑÑ ÐºÐ°Ð¶Ð´ÑƒÑŽ Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ",
          Rtip3:
            "Ð—Ð°Ñ€Ð°Ð±Ð¾Ñ‚Ð¾Ðº Ð±ÑƒÐ´ÐµÑ‚ Ñ€Ð°ÑÑÑ‡Ð¸Ñ‚Ð°Ð½ Ð¿Ñ€Ð¸ Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´Ðµ Ð¸Ð»Ð¸ Ð²Ñ‹Ð²Ð¾Ð´Ðµ Ð²Ð¾ Ð²Ñ‚Ð¾Ñ€Ð¾Ð¹ Ñ€Ð°Ð·, Ð° Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ð¹ Ð·Ð°Ñ€Ð°Ð±Ð¾Ñ‚Ð¾Ðº Ð±ÑƒÐ´ÐµÑ‚ Ð¿ÐµÑ€ÐµÐ²ÐµÐ´ÐµÐ½ Ð½Ð° Ð±Ð°Ð»Ð°Ð½Ñ ÐºÐ¾ÑˆÐµÐ»ÑŒÐºÐ°.",
          Rtip4:
            "Ð‘Ð°Ð»Ð°Ð½Ñ ÐºÐ¾ÑˆÐµÐ»ÑŒÐºÐ°, Ð¿ÐµÑ€ÐµÐ²ÐµÐ´ÐµÐ½Ð½Ñ‹Ð¹ Ð² ÑÐµÐ¹Ñ„, Ð´Ð¾Ð»Ð¶ÐµÐ½ Ð±Ñ‹Ñ‚ÑŒ Ð¿ÐµÑ€ÐµÐ²ÐµÐ´ÐµÐ½ Ð² ÐµÐ´Ð¸Ð½Ð¸Ñ†Ð°Ñ…",
          Eg: "ÐÐ°Ð¿Ñ€Ð¸Ð¼ÐµÑ€",
          Rtip5: "Ð¾Ð´Ð½Ð° Ð¿Ð¾Ñ€Ñ†Ð¸Ñ",
          Rtip6: ", Ð¿ÐµÑ€ÐµÐ´Ð°Ð½Ð¾ Ð² 2-Ñ… ÑÐºÐ·ÐµÐ¼Ð¿Ð»ÑÑ€Ð°Ñ… ÐºÐ°Ðº",
          Rtip7: ", 10 ÐºÐ¾Ð¿Ð¸Ð¹ Ð´Ð»Ñ",
          Rtip8: ", 50 ÐºÐ¾Ð¿Ð¸Ð¹ Ð´Ð»Ñ",
          Rtip9:
            ", ÑÑƒÐ¼Ð¼Ð° Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´Ð° Ð´Ð¾Ð»Ð¶Ð½Ð° Ð±Ñ‹Ñ‚ÑŒ ÐºÑ€Ð°Ñ‚Ð½Ð° 1000",
          Rtip10:
            "ÐŸÑ€Ð¸ ÑƒÑÐ»Ð¾Ð²Ð¸Ð¸, Ñ‡Ñ‚Ð¾ Ð²Ð°Ñˆ Ð´Ð¾Ñ…Ð¾Ð´ Ð³Ð°Ñ€Ð°Ð½Ñ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½, Ð²Ñ‹ Ð¼Ð¾Ð¶ÐµÑ‚Ðµ Ð¿ÐµÑ€ÐµÐ²ÐµÑÑ‚Ð¸ Ð±Ð°Ð»Ð°Ð½Ñ ÑÐµÐ¹Ñ„Ð° Ð½Ð° Ð±Ð°Ð»Ð°Ð½Ñ ÐºÐ¾ÑˆÐµÐ»ÑŒÐºÐ° Ð² Ð»ÑŽÐ±Ð¾Ð¹ Ð¼Ð¾Ð¼ÐµÐ½Ñ‚, Ð¿Ñ€Ð¸ ÑÑ‚Ð¾Ð¼ ÑÑƒÐ¼Ð¼Ð° Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´Ð° Ð´Ð¾Ð»Ð¶Ð½Ð° Ð±Ñ‹Ñ‚ÑŒ ÐºÑ€Ð°Ñ‚Ð½Ð° ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ñƒ ÐºÐ¾Ð¿Ð¸Ð¹",
          friendly: "Ð´Ñ€ÑƒÐ¶ÐµÑÐºÐ¾Ðµ Ð½Ð°Ð¿Ð¾Ð¼Ð¸Ð½Ð°Ð½Ð¸Ðµ",
          friendlytxt:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð½Ðµ Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´Ð¸Ñ‚Ðµ Ð¸ Ð½Ðµ Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´Ð¸Ñ‚Ðµ Ñ‡Ð°ÑÑ‚Ð¾.Ð—Ð°Ñ€Ð°Ð±Ð¾Ñ‚Ð¾Ðº Ð±ÑƒÐ´ÐµÑ‚ Ñ€Ð°ÑÑÑ‡Ð¸Ñ‚Ñ‹Ð²Ð°Ñ‚ÑŒÑÑ Ñ 1 Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹ Ð¿Ð¾ÑÐ»Ðµ Ð²Ð½ÐµÑÐµÐ½Ð¸Ñ Ð´ÐµÐ¿Ð¾Ð·Ð¸Ñ‚Ð°.Ð•ÑÐ»Ð¸ Ð½Ð°ÐºÐ¾Ð¿Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð°Ñ ÑÑƒÐ¼Ð¼Ð° Ð¾Ð´Ð½Ð¾Ð¹ ÑÑƒÐ¼Ð¼Ñ‹ Ð·Ð°Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ° Ð¼ÐµÐ½ÑŒÑˆÐµ 0,01, Ð¾Ð½Ð° Ð½Ðµ Ð±ÑƒÐ´ÐµÑ‚ Ð²ÐºÐ»ÑŽÑ‡ÐµÐ½Ð° Ð² Â«Ð·Ð°Ñ€Ð°Ð±Ð¾Ñ‚Ð¾ÐºÂ».",
          Safety: "Ð‘ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚ÑŒ",
          SafetyTxt:
            "Ð¢ÐµÑ…Ð½Ð¸Ñ‡ÐµÑÐºÐ°Ñ ÐºÐ¾Ð¼Ð°Ð½Ð´Ð° Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸ Ð¾Ð±ÐµÑÐ¿ÐµÑ‡Ð¸Ð²Ð°ÐµÑ‚ ÑÐ¾Ñ…Ñ€Ð°Ð½Ð½Ð¾ÑÑ‚ÑŒ Ð²Ð°ÑˆÐ¸Ñ… ÑÑ€ÐµÐ´ÑÑ‚Ð²",
          SafetyTip:
            "Ð’ Ñ†ÐµÐ»ÑÑ… Ð¾Ð±ÐµÑÐ¿ÐµÑ‡ÐµÐ½Ð¸Ñ ÑÐ¾Ñ…Ñ€Ð°Ð½Ð½Ð¾ÑÑ‚Ð¸ Ð²Ð°ÑˆÐ¸Ñ… ÑÑ€ÐµÐ´ÑÑ‚Ð² Ñ€ÐµÐºÐ¾Ð¼ÐµÐ½Ð´ÑƒÐµÑ‚ÑÑ Ð¿ÐµÑ€ÐµÐ²ÐµÑÑ‚Ð¸ Ð±Ð°Ð»Ð°Ð½Ñ ÐºÐ¾ÑˆÐµÐ»ÑŒÐºÐ° Ð² Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ñ‹Ð¹",
        },
        flight: {
          title: "Ð¿Ð¸Ð»Ð¾Ñ‚",
          tit: "Ð“Ð¾Ñ€ÑÑ‡Ð¸Ð¹ Ð¸ Ð·Ð°Ñ…Ð²Ð°Ñ‚Ñ‹Ð²Ð°ÑŽÑ‰Ð¸Ð¹",
          sub: "Ð¿Ñ€Ñ‹Ð¶ÐºÐ¸ Ñ Ð¿Ð°Ñ€Ð°ÑˆÑŽÑ‚Ð¾Ð¼",
          tip: "Ð·Ð°Ñ…Ð¾Ð´Ð¸Ñ‚ÑŒ Ð»Ð¸ Ð² Ð¸Ð³Ñ€Ñƒ",
          btn: "Ð²Ñ…Ð¾Ð´Ð¸ ÑÐµÐ¹Ñ‡Ð°Ñ",
          gameName: "Ð¿Ð¸Ð»Ð¾Ñ‚",
          gameTip:
            "Ð›ÐµÑ‚Ð°Ð¹Ñ‚Ðµ Ð¸ ÑƒÐ²ÐµÐ»Ð¸Ñ‡Ð¸Ð²Ð°Ð¹Ñ‚Ðµ ÑÐ²Ð¾ÑŽ Ð¿Ñ€Ð¸Ð±Ñ‹Ð»ÑŒ",
          enterGameName:
            "ÐŸÐ¾Ð¶Ð°Ð»ÑƒÐ¹ÑÑ‚Ð°, Ð²Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸Ðµ Ð¸Ð³Ñ€Ñ‹",
        },
      },
    };
  },
  "4c6e": function (e, a) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAALb0lEQVRoBe1ZW29cVxVe+8yZsZ3ajuPEkDi9qjyEuPBWwk0gioRE2+dI8FAJ1JeKCgVQ1QiJil9AI0HES5FQH4l4QikSEhEviKqVWrW1S1VRmgbfwHVCE4fYzsw5fN+39t5zPPaEgoTUh+x4Zu+z1/1ba1/OxGxIC5z/YOZw3ep0rD06amV7xIqytIKE7tYNu2PxPetubtrNrU2rul2TxGpnJEqMWavdsfHlv1kpie0tq+tKXHVV2fXZu5xAYu/mTXZWVbX6oV/hyoGDdUlvOiNWjnhPwZJeTF1+X5Kb99xvtNEeGS3CUtGq5X+UmFhdsqUQLCya1aEopAqc1gKDGKmD4lSpcQ2vgp1VgJy4duTOhaLVOl60AEer5bCwx7NaCGfCG698TwLrk1N1YgpFy1rEkILoA4TSMwUlvr15wye7rrFiX7atUF9a++2/upUk0AO0TAA1hZb3Ra8rKwFCo2trFmZmJCSXGHlSEULRcCPFEl2Ee///JpeuHb57LhT1PFFpAR0ik1FCttA2wvyrExyEa9OH57qhN09GlSSYA8YJSsLNzIp5/tVQbm5fn1dymEm0Gj1D6xEHzuGjfEShsgJ8NDq58IYVR49SxqrlFds88bk+dmAItSMUVtodzzL9ZrKS/3qGa8B/5JWXpSiglVX3ptYDXVFD72N/HnvxjypTJ6I0SKy7vWyeckXKI8Yb99xnR5MyIBZLsTbGkhqR1BoDI4U3jhwFUh5DCdoGFI2TOQuRsXSXzPOA2Py5BC4TzVqiENc4HI0GMcJCIrwfzcYcq/3z0Md+j3Q+VLSwHFAFWhZaGhxjt+CY8+mjZ8wDPNJ3tU9+YiScO7etLKxPHljAAj0OTmCBuoSwDFEJnl059sbKDVgRrKBi0oBfdiiWp4z9+S9b6KEBrdfdPt5DQXEXYBJaX/myTawu2/jKot2xdMn2LV60sUvvmn3pi6KzjpzfZXqUw4dzSpgs+Jdi47aeQycECh9R0KMMT4SDdPF4FIxGEE4ftPYvf2HhgbmsHvNBENEDKUuhU0EVgFZShp7QAQ7yJdzrwuEZPf8bKz79qR1LJlkRRHXVU+hVDJ1HDqESZBG2PI5QiB55ei+9JH0TTz+d9OZeEDUXgioiw9KAKUbjERA6pxGuPow75/ZdetchyuYw0E6BVYXVLVhqVQ5wjhXUhA14YacAZMkhlLjzO7TUK4jQn+HDYGNFEApVSeoJWfzkyoswCtpM95M9rxDsBJ1lsxvok9FBew0o4jpI3rNnNIhEEIby7IEra0/uVnB7Zg8Ecg5I2zhy17OA8XFgOd7H1M9NVUrEOq10L88dKt7EgXsyvPbyQrIlaj031/ng72tb2sCaycpjHDcpgY255ITWTtLIPoQLuEx9VUN+XZma7uGOUGQv415EBanGubtycXFO24rG3Id8bpeRVvkAI9FeVNV1EXo4aekdW44aRQsFLFzsJrhygIbTDX9QDBoJiTc6g0lvve6vMJiTAW2x2OgkSTLtUAsHBRTxzORcr5aRmkc2DaOx03HqVhWhCGbH2fcN0JXozeTrr+EaMxv5vEvXmQqRCns5hJVOW2ThFxGIB5BLZQOIX96io7MDyslczB7xwyQqkUYaoWJ5Ty60iIScwKNHwM2Ne70YzNb3Tyl5aecUM7BQcsmDilLjGRFTUfzotBXf/IYFvMHkBr4IETOYL1BSbjhMEvQUoE7qUote1kg0h50X/4RL9aFE3dHLaXqvnTP3uG0SXERW7ZiLfD30uDyJzpxA+dXTp3Wi8X0lfWhJEVQQ6JcgKgXROKxpDE9xi6hQqzhIlWSVLdxL9f+v55+3g+fPy+j6o4/mKGIOoA4lmJMAeLxMwSe4aZDVg4VA3NhiGoQdHg9fvGir995rvZUVkdOX2BYTvAjPt4vGCtUC6q9WvhAMrvjyC5+3sV+fSzpzDz6mziwbwDgLR8X0UC8K6FlNeWvQGOLo5VSiN3jG3ntn7zO5WbJQb3VzG2FlAiVVB5WpxL0K+67nevMkZ0IaxOrhdgMd+spGyQPHeQFXYYMXIeItN64j0QUMR0MMkELPapQreZlXFDw9Z+P+Y7hlVJgoWrTm2wdt+WJBZFW1QV5VEQfDGvceRQFLFYqIBcarDQuK8Imu6wpoUQkXYGi1n+MjN2D7gRnfbT/D8V5Nd6V+1KwERShezsv1yKAx3vv+sYIXvWgUrzlPgnxWAkO+0mrfs4dSXj9Jg7Fq/8dnRoaouT19G4H/GoFYun05XsGurq3/BCvxCawsrBzuq2DjVhY/WgUQ8VOX8yT7IgtY7xpzUg3PPPTQfJvkOD5zJ3MCv2/VcFyFn9ux+7/PF+Mmo2uKM1cOzvwME9/RY3KWAcgBOgZqdKx/+sOJpoORnnmzHohqw6GKGCQMSTYFH2WbDu4ah3AWd9L84pEDWJ+aehaAn6KADMAYN0ZcVnkCY7MjKwMQA3gccb+jupo0R6eoQ3LqoUfOu3wKgLt0QT0SHwAKZoa2+Csl6W4Zg/cn919DN07lnPYg+mPNNZAGE627AxxTDp8sH4NIumipH2AsN/E3Aog6Eq/rovJdLf8mmI8aHBnuPJVQA53FeYWdV465Cjeso4TI4VpW8VihDOBkXycn8CMEJlwsoRwfebKwnNQn+WSTaSGfPi6QSs+V6Vs/tnGUA+Bx5EdWdBoaMJOdmmr8JNlQNHTIe/6NB09E+eiwDm33ruZLRgo29jj7fZ2wdsGmWEDj/TVnL4ESLTukeOChrV8BeeThlsB7ajr+2F//7imrlpaGOtwkVMvLtvnUUzo6XSd08U5FSHiJhm4MMp0Xa9oXiH7cguZHb+Lnc6IL6GjQc4SHlU6HRZBR8foDGREraPUeb96VduwqiddV5rRTjnCyb/ATYm4MwFb6iXD47Alr//SMhUN7v2I0QYJ/MpRLSBcNKGMNy0HPH0HjFqLocf2EMdQuX0nolIjuXPTC5ambSLJxzA/1NWqfcxXXCfVgXP74h1Z++1uUMNvetqvPPGN80xh8CXCG/jc1qC0VBXwnGn2lrptzCflYcQ2+tGXSkSxPHeSh5gFe8nGO2zP7RB975+381rg6OyvH+Zo0+vDDtvnCC7b+yCPuaPy+U4qAbZpVrcVaVN2mGuVOo/URe/Ak3l09106sXWZAL41AnX2u3yivumddp+e33kqu2L7HHtOYTvMlctD5zIiBQOLEotdDpqkmuZWyQYmjGzOBZ5Vant/JR7WemT5/0pFoSa8fZJCfPmD7/nDBivj/VqLf4gv+yGi0vDsAypJH1U5efJT2WAJ5IWO+z4eFSI2a49jVq498zgCWvKAbfARseto6p05Z68SDVhw7lstqMBbolHK3AOpgBnYLRDSVFYjxjzsH9STn6Ht2jKo9ONFjNrWe3LZ4yeXySf8eWWvq53qEEH+npmjehfhwq8Z1QUkdKhzBUb51YiCF2g7pPOsaczplaYmOM4383xGMpQdTDCS/b/MQTSeyDi3sUNzU6SL1s0E3wXKbJHj70AE4OzzxPxnvBxGR5vYqqwiHAfIftkr+43s5ezY5H/AqHYOgY3KOsnSSnAoW5nzKgYvBKOvuUD8D4HsT5vW7YKT9x87PDtqkg9E4epUJM0GH8ScUobyfBWYp0TjvsnJe8njWGUFZgsIsoMfvnQoavmJCLWcALCdRJK+TLRE/bK+jHWVABzwYlgTGCoDOsfzQoJlV1+QTmswEDznKCHkHBJLidRAw5uUy9KpQdE6SxCYeHyrGDm47v8XzQ2nuf+ndKVfdX9Q0zj9+uaN8ygcaKVwvaERZQGDM9whAox6TF/CTxNfDwkJ+K3MJSg00/Io3B7AeB8PXQLobSvIVdoB16KMCIVUOuWPuf6xzBYLAyKKvtKtRpLWBkC4B1t91yuK5icuX838/SOD210cEgX8D+me9oITBpa4AAAAASUVORK5CYII=";
  },
  5374: function (e, a, t) {
    e.exports = {
      homepage: {
        loadText: {
          loadMore: "Tambah lagi",
          loading: "memuatkan ...",
          nomore: "Tidak lebih",
        },
        loadingText: "Memohon",
        login: "Melog masuk",
        numberFormat: "Format nombor telefon",
        mobile: "Telefon",
        mobileNumber: "Nombor telefon",
        pwd: "Kod laluan",
        oldpwd: "Kata laluan lama",
        pwds: "Sahkan kata laluan",
        pwdsTip: "Kata laluan yang tidak konsisten",
        register: "Daftar",
        registerTip: "Dah ada akaun, Log In~",
        forgotPwd: "Dapatkan semula kod laluan",
        customerService: "Khidmat Pelanggan",
        resetPwd: "Menetapkan semula kod laluan",
        verificationCode: "Kod pengesahan",
        recommendationCode: "Kod mengesyorkan",
        agree: "Saya setuju",
        privacy: "Dasar privasi",
        submit: "Serahkan",
        network: "Rangkaian abnormal",
        tips: "Peringatan",
        remark: "Teguran",
        close: "Tutup",
        full: "skrin penuh",
        zoomOut: "zum keluar",
        signout: "Adakah anda mahu melog keluar",
        quit: "Mahu berhenti permainan ini?",
        enterGame: "Adakah anda pasti mahu memasuki permainan?",
        cancel: "Batal",
        confirm: "Pasti",
        success: "Kejayaan",
        cancelled: "Dibatalkan",
        fail: "Gagal",
        del: "Padam",
        copy: "Salin",
        copySuccess: "Kejayaan penyalinan",
        required: "Item yang mesti mengisi",
        pleaseRequired: "Isi item yang mesti mengisi",
        passwordError:
          "Panjang kata laluan tidak boleh kurang dari 6, mestilah gabungan huruf dan angka",
        pleaseEmail: "Isikan alamat e-mel yang benar",
        informationTip:
          "Maklumat log masuk anda telah tamat, sila log masuk semula.",
        informationTip1:
          "Akaun anda telah dilog masuk ke tempat lain, sila ubah kata laluan anda tepat pada waktunya.",
        noData: "Data tidak ada",
        presaleRule:
          'Untuk melindungi hak dan kepentingan pengguna yang berpartisipasi dalam presale dan menjaga perintah penyediaan presale yang normal, peraturan tersebut dirumuskan sesuai dengan perjanjian dan peraturan perundangan dan peraturan nasional yang relevan. Bab 1 Definisi1.1 Definisi presale: merujuk kepada model penjualan di mana pedagang menyediakan produk atau rancangan perkhidmatan, mengumpulkan pesanan pengguna melalui alat produk pra-jual, dan menyediakan barang dan atau perkhidmatan kepada pengguna berdasarkan kesepakatan sebelumnya1.2 Model penjualan semula adalah model "dep os it" . "Dep os it" merujuk kepada jumlah harga komoditi pra-jual yang telah ditetapkan. "Deposit" itu berpartisipasi dalam permainan kecil dan berpeluang memenangi lebih banyak deposit. Deposit itu boleh ditukar dengan komoditi. Deposit itu tidak boleh ditebus.1.3 Produk pra-jual: merujuk kepada produk yang direlakan oleh peniaga menggunakan alat produk pra-jual. Hanya kata-kata presale yang ditandai pada tajuk produk atau halaman butiran produk, sebelum produk yang tidak menggunakan alat produk pres ale bukan produk yang dijual terlebih dahulu.1.4 Sistem presale: Merujuk kepada sistem produk alat yang disediakan untuk menyokong merchant untuk penjualan model prale .1.5 Harga komoditi penjualan semula: merujuk kepada harga jual komoditi penjualan semula. Harga barang pra jual terdiri daripada dua bahagian: pembayaran dan pembayaran akhir.',
        more: "Lebih banyak lagi",
        verificationTip:
          "Tidak dapat menerima kod pengesahan? Sila hubungi perkhidmatan pelanggan",
        symbolU: "USDT",
        newes: "Pengumuman Terkini",
        upgraded: "Acara sedang dinaik taraf......",
        gameTit: "Pemulihan baki gagal",
        gameLeft: "cuba lagi",
        gameRight: "Kitar semula",
        tab: {
          hot: "Popular",
          lottety: "Loteri",
          fishing: "Memancing",
          electronic: "Slots",
          physical: "Sukan",
          realperson: "Kasino",
          chess: "Catur",
          smallgame: "Permainan",
          safe: "selamat",
        },
        home: {
          lottetyTitle: "Cabutan loteri terbesar",
          recharge: "Top up",
          balance: "Baki",
          customerService: "Khidmat Pelanggan",
          lottety: "Loteri",
          wealth: "Pengurusan kewangan",
          leftTime: "Membeli pada masa tersisa",
          min: "Minit",
          sec: "Saat",
          newTitle: "Berita",
          newCenter: "Pusat Berita",
          newDes: "Maklumat Berita",
          wrTime: "masa berjalan webside",
          days: "Hari",
          hours: "Jam",
          minutes: "Minit",
          seconds: "Saat",
          pengguna: "Kuantiti pelanggan",
          jumlahTaruhan: "Jumlah kali pertaruhan",
          Online: "Kualtiti orang dalam talian",
          penarikanHari: "Papan pendahulu hari ini",
          gin: "dalam",
          got: "Menang",
          GameName: "Permainan Memancing",
          popular: "Cadangan Popular",
          platform: "Cadangan platform",
          Game1: "5D Lotre",
          Game2: "Win Go",
          Game3: "Slots",
          Game4: "K3 Lotre",
          Game5: "Kasino",
          Game6: "Sukan",
          Game7: "16 Nombor pilihan ",
          Game8: "Negara",
          Game9: "Singapura 4D",
          Game10: "Loteri Rasmi Vietnam",
          Game11: "Magnum 4D",
          Game12: "Damacai 4D",
          Game13: "Toto 4D",
          Game14: "Kelajuan 4D",
          Game1Tip: "Teka nombor/tinggi/rendah/ganjil/genap",
          Game2Tip: "Teka hijau/ungu/merah untuk menang",
          Game3Tip: "Memain hubungan/Memain hubungan/Memain hubungan",
          Game4Tip: "Teka nombor/tinggi/rendah/ganjil/genap",
          Game5Tip: "Baccarat/Dragon Tiger/Roulette/Sic Bo",
          Game6Tip: "Acara waktu nyata/semua di dalamnya",
          Game7Tip: "Teka nombor/tinggi/rendah/ganjil/genap",
          Game8Tip: "Acara waktu nyata/semua di dalamnya",
          Game9Tip: "Teka nombor/tinggi/rendah/ganjil/genap",
          Game10Tip: "Teka hijau/ungu/merah untuk menang",
          Game11Tip: "Teka nombor/tinggi/rendah/ganjil/genap",
          Game12Tip: "Teka nombor/tinggi/rendah/ganjil/genap",
          Game13Tip: "Teka nombor/tinggi/rendah/ganjil/genap",
          Game14Tip: "Teka nombor/tinggi/rendah/ganjil/genap",
          Game6t: "Sabah",
          nextDraw: "Pusingan seterusnya",
          playNow: "Mainkan segera",
          howWorks: "Bagaimana membeli",
          game_title1: "Pilih sebuah permainan",
          game_title2: "Pilih nombor bertuah anda",
          game_title3: "Pertaruhan",
          game_title4: "Dapatkan bonus",
          game_First: "Langkah pertama",
          game_Second: "Langkah kedua",
          game_Third: "Langkah ketiga",
          game_Fourth: "Langkah keempat",
          list: [
            {
              title: "Pilih sebuah permainan yang anda suka",
              txt: "Anda boleh memilih permainan loteri selama 1minit, 3 minit, 5 minit atau 10 minit",
            },
            {
              title: "Pilih nombor bertuah anda",
              txt: "Pilih nombor atau warna bertuah anda",
            },
            {
              title: "Pertaruhan",
              txt: "Pilih jumlah dana yang anda menaruh dan memastikan",
            },
            {
              title: "Mendapat bonus",
              txt: "Waktu anda memilih nombor bertuah kini, sistem akan menambah bonus ke baki anda secara automatik",
            },
          ],
        },
        index: {
          Charttren: "Trend carta",
          Total: "Jumlah dana",
          walletBalance: "Baki ",
          recharge: "Top up",
          withdraw: "Keluaran",
          lotteyRule: "Peraturan loteri",
          iKnow: "Saya tahu",
          big: "Besar",
          small: "Kecil",
          green: "Hijau",
          violet: "Ungu",
          red: "Merah",
          selectGreen: "Pilih warna hijau",
          selectViolet: "Pilih warna ungu",
          selectRed: "Pilih warna merah",
          randomBetting: "Pembelian rawak",
          gameRecord: "rekod sejarah",
          myGameRecord: "Bet rekod",
          period: "Peta keadaan",
          blockHeight: "Ketinggian blok",
          blockTime: "Masa blok",
          hashValue: "Nilai hash",
          number: "Nombor",
          size: "Ukuran",
          result: "Hasil",
          color: "Warna",
          sum: "jumlah",
          high: "Besar",
          low: "Kecil",
          odd: "ganjil",
          even: "genap",
          money: "Jumlah dana",
          multiply: "Kuantiti",
          presaleRule: "Peraturan pra-penjualan",
          presaleRuleTit:
            "Periksa saya untuk menyetujui peraturan pra-penjualan",
          totalPrice: "Jumlah dana",
          Select: "Pilih",
          SelectCon: "Kandungan pertaruhan",
          firstPage: "Telah di halaman pertama",
          lastpage: "Telah di halaman terakhir",
          periodDetail: "Perincian",
          orderNumber: "Nombor pesanan",
          contractMoney: "Jumlah dana pembelian",
          contractCount: "Kuantiti pembelian",
          delivery: "Jumlah dana selepas cukai",
          fee: "Cukai",
          openPrice: "Harga pembukaan",
          status: "Kondisi",
          amount: "Menang&kalah",
          createTime: "Masa pembuatan",
          BettingAssistant: "Pembantu Pertaruhan (Tempoh 100 Terakhir)",
          Missing: "Hilang",
          AvgMissing: "Purata Hilang",
          Frequency: "Kekerapan",
          MaxContinued: "Max Bersambung",
          PleaseInteger: "Sila masukkan nombor bulat",
          Odds: "potensi",
          publicQuery: "Pertanyaan rangkaian awam",
          howPlay: "Peraturan untuk bermain",
          distancedraw: "Masa yang Tinggal",
          multiple: "Kuantiti",
          numberBets: "Nombor yang Betting",
          reset: "Reset",
          time: "Masa ",
          lotteryTime: "Masa Buka Hasil",
          notPressed: "Pertaruhan Tidak Berjaya ",
          pressed: "Pertaruhan Berjaya ",
          bedrawn: "Tunggu Hasil",
          awarding: "Pembayaran sedang dijalankan",
          periodNmu: "nombor tempoh pertaruhan",
          lotteryNmu: "nombor loteri",
        },
        myProfile: {
          title: "Pusat peribadi",
          profilePhoto: "Potret",
          nickname: "Nama samaran",
          modifyNickname: "Mengubahsuai nama samaran",
          newNicknameTit: "Masukkan nama samaran baharu",
        },
        about: {
          title: "Mengenainya",
          Games: "Permainan",
          privacypolicy: "Dasar privasi",
          disclosureagreement: "Perjanjian Pendedahan Risiko",
        },
        privacypolicy: {
          title: "Dasar privasi",
          agree: "Perjanjian Pendedahan Risiko",
        },
        keFuMenu: { title: "Perkhidmatan pelanggan" },
        recharge: {
          title: "Top up",
          selectRecharge: "Pilih satu saluran tambahan nilai untuk menambah",
          next: "Langkah berikutnya",
          previous: "Sebelumnya",
          rechargeAmount: "Jumlah dana tambahan",
          rechargeAmountRangeIpt: "Julat jumlah dana tambahan",
          rechargeAmountRange: "Julat jumlah dana tambahan",
        },
        rechargeChack: {
          title: "Top up",
          totalAmouunt: "Jumlah dana",
          paymentMethod: "Cara pembayaran",
          localBank: "Bank tempatan",
          enterAmount: "Masukkan jumlah dana",
          theAmount: "Format dana mesti merupakan gandaan integer 10",
          accountName: "Nama rekening",
          bankNumber: "Nombor bank",
          bankName: "Nama bank",
          paymentAmount: "Jumlah dana pembayaran",
          orderNumber: "Nombor pesanan",
          creationTime: "Masa pembuatan",
          transferAmount:
            "Jumlah dana pindahan mesti diisi mengikut pesanan yang anda membuat, jika tidak, anda tidak akan memyimpan dana",
          transferAmount1:
            "Catatan: Jangan membatalkan pesanan deposit jika pemindahan wang selesai",
          depositAmount: "Jumlah deposit",
          upImgTitle: "Sila muat naik transaksi yang mengandungi UTR",
          upFormate: "Muat naik gambar hanya dalam format jpg,jpeg,png",
          selectFile: "Pilih fail muat naik",
        },
        touchngo: {
          title: "Touch N Go Top up",
          name: "Nama",
          mobileNumber: "Nombor telefon",
        },
        rechargeRecord: {
          title: "Catatan tambahan nilai",
          unpaid: "Tunggu dibayar",
          eazyPay: "å·¥èµ„",
          success: "Kejayaan",
          others: "Yang lain lain",
        },
        paymentMethod: {
          title: "Cara pembayaran",
          totalPaid: "Jumlah dana yang tunggu dibayar",
          choose: "Pilih kad bank",
          payNow: "Bayar segera",
          topInstructions: "Penjelasan yang menambah nilai",
          contentTmp1:
            "Pindahkan ke akaun bank penerimaan dana yang tersebut diatas",
          contentTmp2:
            "Isikan nama pemegang kad bank dan akaun untuk mengesahkan",
          contentTmp3:
            "Serahkan satu pindahan satu kali, jangan serahkan pesanan secara berulang",
          contentTmp4:
            "Memastikan untuk menyerahkan pesanan selepas menyelesaikan pindahan, kalau tidak, kami tidak dapat memeriksa pembayaran anda",
          waitingPayment: "Tunggu dibayar",
          receivingTitle: "Maklumat kod bank yang diterima dana",
          confirm1: "Nombor pesanan",
          confirm2: "Nama bank",
          confirm3: "Pemegang bank",
          confirm4: "Nombor kad bank",
          confirm5: "IFSC",
          confirm6: "Bank cabangan",
          Required: "Fill in Ref No",
          Return: "Balik",
        },
        promotion: {
          title: "Promosi",
          bouns: "Bonus",
          level_1: "Tingkat ke-1",
          level_2: "Tingkat ke-2",
          totalPeople: "Jumlah kuantiti orang",
          contribution: "Keuntungan promosi",
          code: "Kod promosi saya",
          link: "Pautan kod promosi saya",
        },
        bonusrecord: { title: "Pendaftaran Downline Lvl 1" },
        redenvelopes: {
          title: "Hadiah",
          Hello: "Apa khabar",
          Eveverone: "Setiap",
          des: "Kami ada hadiah untukmu",
          giftCode: "Kod hadiah",
          PleaseGiftCode: "Masukkan kod hadiah",
          Receive: "Menerima hadiah",
          Best: "Sampaikan sejahtera yang terbaik kepada anda",
          Congratulations: "Tahniah",
          already: "Anda telah menerima",
          ACCEPT: "Menerima",
          txt: "Helo, anda boleh menghubungi Customer Service MZPlay, gunakan baki akaun anda untuk membeli kod hadiah, boleh berkongsi atau menghantar kepada rakan anda untuk klem",
        },
        withdrawal: {
          title: "Keluaran",
          balance: "Baki",
          enterwithdraw: "Masukkan jumlah dana keluaran",
          withdrawAamount: "Jumlah dana keluaran",
          fee: "Cukai",
          toAccount: "Jumlah dana selepas cukai",
          rate: "Kadar",
          totalBet: "Jumlah pertaruhan",
          withdrawTime: "Masa keluaran",
          dailyWithdrawal: "Jumlah kali keluaran setiap hari",
          withdrawMoney: "Julat jumlah pengeluaran",
          payout: "Cara penerimaan dana",
          bankCard: "Kad bank",
          selectBank: "Pilih bank",
          addBankCard: "Tambah kad bank",
          rechargeTip1: "Masukkan jumlah dana keluaran",
          rechargeTip2: "Pilih kad bank",
          rechargeTip3: "Masukkan kod laluan",
          select: "Pilih",
          add: "Tambah",
        },
        withdrawrecord: {
          title: "Catatan keluaran",
          applying: "Memohon",
          agree: "Setuju",
          refuse: "Menolak",
        },
        mission: {
          title: "Jemput rakan",
          totalPeople: "Jumlah orang",
          totalAmount: "Jumlah dana",
          myTask: "Tugas saya",
          invited: "Jemput ",
          validMenmber: "Anggota aktif",
          receive: "Menerima",
        },
        promoteRecord: { title: "Rekod jemputan", People: "Bilangan orang" },
        addbank: {
          title: "Tambah kad bank",
          bankName: "Nama bank",
          beneficiaryName: "Nama penerimaan dana",
          accountNo: "Nombor akaun",
          bankCity: "Bandar di mana bank itu berada",
          IFSCCode: "IFSC Cord",
          email: "E-mel",
          bankProvince: "Provinsi di mana bank itu berada",
          bankBranch: "Alamat bank cabangan",
          addBtn: "Tambah Akaun Bank",
          opsionalbankProvince: "Provinsi di mana bank itu berada",
          opsionalbankBranch: "Alamat bank cabangan",
        },
        addElcbank: {
          title: "Tambah E-wallet",
          addBtn: "Tambah E-wallet",
          mobile: "Sila masukkan nombor telefon bimbit e-wallet anda",
        },
        addUsdt: {
          title: "Tambah USDT",
          addBtn: "Tambah USDT",
          type: "Jenis USDT",
          address: "Alamat dompet",
          tip: "Ralat Format Alamat USDT",
          txt: "Format alamat USDT (TRC). Alamat terdiri daripada 34 aksara bermula dengan huruf T.",
          txt1: "Format alamat USDT (ERC). Alamat terdiri daripada 42 aksara bermula dengan huruf 0x.",
        },
        wellet: {
          title: "Dompet",
          withdrawalBalance: "Baki yang dapat dikeluarkan",
          historicalWithdrawal: "Keluaran bersejarah",
          accumulatedWithdrawal: "Keluaran kumulatif",
          everyDay: "Adaâ€¦..",
          order: "kali setiap hari",
          tip: "Peluang untuk keluarkan ke kad bank yang anda mengikat secara percuma",
          myCard: "Kod bank saya",
          rechargeRecord: "Catatan tambah nilai",
          withdrawRecord: "Catatan keluaran",
        },
        transactionrecord: { title: "Catatan transaksi" },
        newtutorial: {
          title: "Panduan pembaru",
          chooseYour: "Pilih",
          favoriteGame: "permainan yang anda paling suka",
          pickLucky: "Pilih",
          numberColor: "nombor atau warna bertuah anda",
          SKIP: "Lompati",
          NEXT: "Langkah seterusnya",
          confirmAmount: "Pastikan jumlah dana yang anda menaruh",
          getBouns: "Dapatkan bonus",
          moneyWill:
            "Kalau anda menang di dalam pusingan ini, dananya akan ditambah ke dalam akaun permainan anda ",
          youRecharge: "Anda boleh menambah nilai",
          withdrawHere: "atau mengeluar di sini",
        },
        download: {
          title: "Memuatkan turun",
          name: "",
          goBtn: "Pergi untuk memuatkan turun",
          des: "Sebuah platfotm permainan loteri profesional",
          playNow: "Pergi bermain segera",
          lotteryGame: "Permainan loteri",
          btn: "Memuatkan turun segera",
        },
        tabbar: {
          tabbarList: [
            {
              id: 1,
              name: "utama",
              imgAction: t("07d4"),
              img: t("2288"),
              to: "/home",
            },
            {
              id: 2,
              name: "Aktiviti",
              imgAction: t("b5ef"),
              img: t("5b0e"),
              to: "/activity",
            },
            {
              id: 3,
              name: "Promosi",
              imgAction: t("7268"),
              img: t("7268"),
              to: "/promotion",
            },
            {
              id: 4,
              name: "Dompet",
              imgAction: t("4c6e"),
              img: t("b2a5"),
              to: "/wallet",
            },
            {
              id: 5,
              name: "Profli",
              imgAction: t("e636"),
              img: t("6c7c"),
              to: "mian",
            },
          ],
        },
        mian: {
          title: "Profli",
          historical: "Bet rekod",
          funding: "Rekod transaksi",
          loginLog: "Log masuk",
          message: "Maklumat",
          balance: "Semua dompet",
          totalwallet: "jumlah dompet",
          refreshwallet: "Kitar semula satu klik",
          loginOut: "Log keluar",
          menuName1: "Keselamatan akaun",
          menuName2: "Kod pengesahan Google",
          menuName3: "Rujuk kawan",
          menuName4: "Kod hadiah",
          menuName5: "Panduan pembaru",
          menuName6: "Tentang",
          menuName7: "Bantuan",
        },
        checkIn: {
          title: "Tandatangani",
          attendanceRules: "Peraturan tandatangan",
          txt: "Masuk untuk dapat bonus",
          rule: "Peraturan game",
          record: "Rekod masuk ",
          today: "Ditandatangani hari in",
          received: "Menerima",
          day: "Hari",
          btn: "Tandatangani",
          Receive: "Menerima hadiah",
          Best: "Sampaikan sejahtera yang terbaik kepada anda",
          Congratulations: "Tahniah",
          already: "Anda telah menerima",
          ACCEPT: "Menerima",
        },
        checkInDes: {
          title: "Peraturan tandatangan",
          checkInDay: "Jumlah hari yang menandatangani",
          accumulatedAmount: "Jumlah dana",
          checkInBonus: "Bonus tandatangan",
          rulesDetails: "Perincian peraturan",
          tep1: "Kalau pengguna tidak menambah nilai, dia tidak dapat menerima",
          tep2: "Perlu menambah nilai sejak permulaan hari pertama",
          tep3: "Jumlah dana tambahan nilai kumulatif mesti memenuhi syarat, hanya menerima satu kali sehari",
          tep4: "Platform ini menpunyai hak penjelasan tentang aktiviti ini. Kalau ada masalah mengenainya, hubungi perkhidmatan pelanggan",
          tep5: "Bonus kehadiran akan diedarkan secara rawak selepas deposit ke-7",
        },
        historicalBetting: { title: "Catatan pertaruhan" },
        loginLog: { title: "Log melog masuk" },
        messageCenter: {
          title: "Pusat maklumat",
          readAll: "Baca semua",
          removeAll: "Padam semua",
          delTitle: "Adakah anda memastikan untuk memadam",
          delall: "Adakah anda memastikan untuk memadam semua",
          readall: "Adakah anda memastikan untuk melihat semua",
        },
        messageDes: { title: "Perincian maklumat" },
        lottery: {
          drawResult: "Hasil undian",
          period: "Nombor",
          money: "Jumlah dana",
          multiply: " Kuantiti",
          totalPrice: "Jumlah dana",
          pleaseBet: "Sila menaruh",
          election: "Pilihan raya songsang",
        },
        colorLand: {
          tab1: "jumlah taruhan",
          tab2: "2 no. sama",
          tab3: "3 no. sepadan",
          tab4: "no. berbeza",
          title1: "Pilih 2 nombor yang sepadan",
          tip1: "*Sekiranya nombor pembukaan sepadan dengan 2 nombor pertaruhan, hadiah akan dimenangi. (Kecuali tiga nombor yang sama).",
          title2: "Pilih pasangan nombor yang unik",
          tip2: "*Pilih sekurang-kurangnya 1 nomor yang sepadan dan 1 nombor yang berbeza untuk bertaruh. Sekiranya nombor pembukaan sepadan dengan nombor pertaruhan, anda akan menang.",
          title3: "Pilih hanya 3 nombor",
          tip3: "*Sekiranya nombor pembukaan sepadan dengan 3 nombor pertaruhan, anda akan menang",
          title4: "Pilih 3 nombor yang sepadan",
          tip4: "*Sekiranya nombor yang menang adalah tiga nombor yang sama, anda akan menang",
          title5: "Pilih 3 nombor berbeza",
          tip5: "*Pilih 3 atau lebih nombor. Ketiga-tiga nombor dalam keputusan undian adalah nombor yang berbeza. Sekiranya sesuai dengan nombor yang dipilih, anda akan menang",
          title6: "Pilih 3 nombor berturut-turut",
          tip6: "*Sekiranya nombor pembukaan adalah salah satu daripada tiga nombor berturut-turut, Itulah hasil kemenangan.",
          title7: "Pilih 2 nombor berbeza: kemungkinan",
          tip7: "*Pilih 2 atau lebih nombor, dua nombor dalam keputusan undian adalah nombor yang berbeza, dan jika mereka sepadan dengan nombor yang dipilih, anda akan menang.",
          selectCon1: "Pilih 2 nombor yang sepadanï¼š",
          selectCon2: "Pilih pasangan nombor yang unikï¼š",
          selectCon3: "Pilih hanya 3 nomborï¼š",
          selectCon4: "Pilih 3 nombor berbezaï¼š",
          selectCon5: "Pilih 2 nombor berbeza: kemungkinanï¼š",
          gameType1: "3 nombor lain",
          gameType2: "3 no. berturut-turut",
          gameType3: "2 no. sama",
          gameType4: "3 no. sepadan",
        },
        activity: { title: "Aktiviti" },
        activityDes: { title: "Perincian aktiviti" },
        usdt: {
          title: "USDT Top up",
          address: "Alamat Dompet USDT",
          Raddress: "alamat cas semula",
          QRcode: "kod QR",
          tit1: "beli mata wang",
          tit2: "pindah ke alamat",
          tit3: "Memeterai perjanjian itu",
          tit4: "tunggu ketibaan",
          tip1: "1. Alamat cas semula ditukar dalam masa nyata. Tolong jangan simpan alamat caj semula. Sila dapatkan semula alamat caj semula sebelum setiap caj semula untuk mengelakkan kehilangan mata wang digital. ",
          tip2: "2. Selepas menyalin alamat caj semula, sila pergi ke dompet mata wang digital yang anda gunakan untuk mengeluarkan dan memindahkan wang. Jangan cas semula aset digital yang berbeza daripada blok blok yang dipilih, jika tidak, aset tidak akan diambil. ",
          tip3: "Pengeluaran-cas semula biasanya tiba secara automatik dalam masa 1-5 minit, jika tidak, sila hubungi perkhidmatan pelanggan dalam talian. ",
          tip4: "(Tanpa sebarang yuran pengendalian seperti: keluarkan 100 ke akaun 100) ",
        },
        trx: { uset: "TRX", title: "TRX Top up", address: "Alamat Dompet TRX" },
        promotionNew: {
          title: "Mempromosikan",
          dataOverview: "Gambaran Keseluruhan",
          myTeam: "Pasukan",
          upRecord: "Rekod",
          tutorial: "Tutorial",
          myReward: "Ganjaran Saya",
          totalComm: "Jumlah Komisen Semalam",
          directComm: "Komisen Langsung",
          teamComm: "Komisen Pasukan",
          directSubord: "Bilangan Orang Bawahan Langsung",
          totalTeams: "Jumlah Bilangan Pasukan",
          newToday: "Orang Baru Hari Ini",
          newTeam: "Saiz Pasukan Baharu Hari Ini",
          weekComm: "Jumlah Komisen Untuk Minggu Itu",
          totalComm1: "Jumlah Komisen",
          QRcode: "Tekan Lama Untuk Menyimpan Kod QR",
          copyCode: "Salin Kod Jemputan",
          copyLink: "Salin Pautan",
          rebateTable: "Jadual Yang Sepadan Dengan Jumlah Rebat",
          agencyLevel: "Peringkat Agensi",
          teamNumber: "Bilangan Ahli Pasukan",
          teamFlow: "Aliran Pasukan",
          teamRecharge: "Isi Semula Pasukan",
          validDay:
            "Ahli Yang Sah: Caj Semula Atau Pertaruhan Pada Hari Yang Sama",
          commMethod: "Kaedah Pengiraan Komisen",
          Hierarchy: "Hierarki",
          rebateRatio: "Nisbah Rebat",
          firstMember: "Tahap 1",
          secondMember: "Tahap 2",
          thirdMember: "Tahap 3",
          tierMember: "Tahap 4",
          bettingTurnover: "Pusing Ganti Pertaruhan",
          agent: "ahli peringkat",
          upTime: "Masa Ambil",
          receiveAmount: "Menerima Jumlah",
          operate: "Beroperasi",
          details: "Butiran",
          date: "Tarikh",
          directTeam: "Pasukan Langsung",
          people: "Orang",
          pleaseChoose: "Sila Pilih",
          totalBet: "Jumlah Amaun Pertaruhan",
          totalAmount: "Jumlah Rebat",
          Inquire: "Tanya",
          nickName: "Nama",
          runningWater: "Air Yang Mengalir",
          condition: "Syarat",
          enable: "Membolehkan",
          disabled: "Kurang Upaya",
          personalFlow: "Aliran Peribadi",
          personalRecharge: "Caj Semula Peribadi",
          rgistrationTime: "Masa Pendaftaran",
          subordinates: "Bilangan Orang Bawahan",
          year: "Tahun",
          moon: "Bulan",
          day: "Hari",
          selectList: [
            { name: "Tahap 1", code: 1 },
            { name: "Tahap 2", code: 2 },
            { name: "Tahap 3", code: 3 },
            { name: "Tahap 4", code: 4 },
            { name: "Tahap 5", code: 5 },
            { name: "Tahap 6", code: 6 },
          ],
          promoteMoney: "Promosi",
          uid: "UID",
        },
        verify: {
          title: "Kod pengesahan Google",
          unbind: "tidak mengikat/Tukar Pengesah",
          downTit: "Muat Turun Dan Daftar",
          downTxt:
            "Sila muat turun Google Authenticator. Selepas pemasangan selesai, klik butang ikat untuk mengikat loteri anda (akaun/ID)",
          bind: "mengikat",
          downVerify: "Muat turun Google pengesahan",
          vexplainTit: "Perihalan pengesah yang mengikat",
          list: [
            {
              txt: "Anda perlu menyimpan kunci 16 digit yang dijana daripada akaun loteri anda ke tempat yang selamat dan menyalin kunci itu",
            },
            { txt: "Perlu membuka Google pengesahan" },
            { txt: "Tambah akaun permainan, salin kekunci 16 digit" },
            {
              txt: "Selepas berjaya, kod pengesahan 6 digit dijana secara automatik",
            },
          ],
          vexplainNext: "langkau tutorial",
          vbackupTit: "kunci sandaran",
          vbackupTxt:
            "Sila dermakan kunci penting dan simpan di tempat yang selamat, jika telefon meninggalkan kunci ini, jika tidak, anda akan menyimpan penguji hayat selama 7 hari.",
          vsafetyTit: "Keselamatan pengesah",
          vsafetyTxt: "Kod Pengesahan Hantar ke nombor mudah alih anda",
          vsafetySms: "Kod pengesahan mudah alih",
          vsafetyTip:
            "Keselamatan pengesahan tidak tersedia? Hubungi Khidmat Pelanggan",
          vsafetySnsnull: "Kod pengesahan tidak boleh kosong",
          loginTit: "Google Pengesah login",
          loginTxt:
            "Perlindungan akaun didayakan, sila ikuti langkah untuk menyelesaikan operasi berikut",
          loginTip:
            "Sila buka Alibaba Cloud APP atau Google Authenticator (peranti pengesahan) dalam telefon mudah alih anda, sila masukkan kod dinamik 6 digit   ",
          loginNum: "6 digit",
        },
        long: {
          title: "Naga Terpanjang Assistant ",
          newTitle: "Naga Panjang Terbaru",
          betTitle: "Taruhan Saya",
          expect: "Tempoh",
          andDig: "Draw/Besar",
          andSmall: "Draw/Kecil",
          andodd: "Draw/Tunggal",
          andeven: "Draw/Ganda",
          illustrate: "Terangkan",
          txt1: 'Naga Terpanjang  Assistant ialah alat pembantu yang mengumpul statistik mengenai keputusan loteri "besar, kecil, tunggal, ganda" dalam Win Go, 5D dan K3.',
          txt2: 'Kebarangkalian besar, kecil, tunggal dan ganda muncul dalam setiap tempoh adalah sama. Jika keputusan loteri 3 atau lebih tempoh berturut-turut adalah sama, ia dipanggil "naga panjang". Biasanya kaedah "memotong naga" " atau "menghubungkan naga" akan diterima pakai dengan pertaruhan berganda.',
          list: [
            {
              name: "Apakah memotong naga?",
              txt: 'Jika anda membuka 5 "Tunggal" berturut-turut, anda boleh memilih "Ganda" untuk bertaruh, pelan pertaruhan ini dipanggil "memotong naga";',
            },
            {
              name: "Apakah menghubungkan naga?",
              txt: 'Jika anda membuka 5 "Tunggal" berturut-turut, teruskan memilih "Tunggal" untuk bertaruh, pelan pertaruhan ini dipanggil "menghubungkan naga";',
            },
            {
              name: "Apakah pertaruhan berganda?",
              txt: 'Pertaruhan berganda ialah kaedah pertaruhan berganda, iaitu kaedah pertaruhan untuk memastikan keuntungan berterusan dalam proses "memotong naga" atau  "menghubungkan naga";',
            },
          ],
          txt3: "Naga panjang terkini: Fungsi ini akan mengemas kini item permainan secara automatik dengan keputusan yang sama dalam 5 cabutan loteri berturut-turut, yang memudahkan anda menilai sama ada untuk memotong naga atau naga.",
          txt4: "Pertaruhan Saya: Ciri ini memudahkan anda melihat pertaruhan dan keputusan cabutan.",
        },
        shop: {
          currentPoints: "mata semasa",
          Redeem: "Tebus sekarang",
          pointsGo: "Mall Points Pergi sekarang",
          commodityOrder: "pesanan komoditi",
          pointsRecord: "Rekod mata",
          title: "Mall Points",
          pointsAvailable: "Mata Tersedia",
          rule: "Peraturan mata",
          stock: "dalam stok",
          redeemed: "ditebus",
          integral: "integral",
          productName: "Nama Produk",
          exchange: "Syarat pertukaran",
          name: "Nama depan dan belakang",
          address: "Alamat penghantaran",
          redeem: "terus tebus",
          checkOrder: "semak pesanan",
          addressEmpty: "Alamat tidak boleh kosong!",
          ordered: "Mengarahkan",
          delivery: "dalam penghantaran",
          completed: "selesai",
          orderDetails: "Maklumat-maklumat Pesanan",
          orderTime: "masa pesanan",
          orderStatus: "Status pesanan",
          signTime: "Masa penyerahan",
          signPhoto: "Tandatangan untuk foto",
        },
        selections: {
          distanceDraw: "Masa yang Tinggal",
          champion: "1st",
          runnerUp: "2nd",
          ndRunner: "3rd",
          outof1: "1/16",
          outof2: "2/16",
          outof3: "3/16",
        },
        lotteryD: {
          rules: "Cara Main",
          LotteryTime: "Buka Hasil",
          seal: "Hentikan Game",
          stPrize1: "1st Prize",
          stPrize2: "2st Prize",
          stPrize3: "3st Prize",
          Finalist: "Finalis",
          consolationprize: "Hadiah Saguhati",
          Doubledisc: "Dua Belah",
          TraditionalDish: "Klasik ",
          Doubleside: "Dua Belah",
          Choosenumber: "Pilih Nombor ",
          FourDigit: "Pilih 4D",
          FourSlection: "Pilih 4D R",
          duplicatenumber: "Nombor pendua",
          numberFormat: "Format nombor yang salah",
          Bigone: "Besar",
          Smallone: "Kecil",
          Bothone: "Besar+Kecil",
          Addbet: "Tambah Taruhan",
          Randomnumber: "Rawak Nombor",
          Machineselection: "Pemilihan Mesin",
          Enternumber: "Masukan Nombor Pilihan Anda",
          Concatenatedcode: "Menggabungkan(paket)",
          select1: "2D Pilih Semua",
          select2: "3D Pilih Semua",
          select3: "4D Pilih Semua",
          select4: "2D Positif kod",
          select5: "2D Hadiah Istimewa",
          select6: "2D Tempat Pertama",
          select7: "2D",
          select8: "3D",
          SeventhPrize: "Hadiah Ke-tujuh",
          EighthPrize: "Hadiah Ke-lapan ",
          positivecode3: "3D positif kod",
          SpecialPrize3: "3D Hadiah Istimewa",
          FirstPrize3: "3D Tempat Pertama",
          SixthPrize: "Hadiah Ke-enam",
          positivecode4: "4D positif kod",
          SpecialPrize4: "4D Hadiah Istimewa",
          FirstPrize4: "4D Tempat Pertama",
          selectAll: "gagal pilih semau",
          misses4: "4 tak kena",
          misses8: "8 tak kena",
          misses10: "10 tak kena",
          Enter: "Isi",
          Compound: "Dupleks",
          selected: "Anda memilih",
          bet: "pertaruhan",
          CN: "Ahad",
          T2: "Isnin",
          T3: "Selasa",
          T4: "Rabu",
          T5: "Khamis",
          T6: "Jumaat",
          T7: "Sabtu",
          waitingdraw: "Menunggu Undian",
          grandPrize: "Hadiah Utama",
          firstprize: "Hadiah Pertama",
          secondprize: "Hadiah Kedua",
          thirdprize: "Hadiah Ketiga",
          fourthprize: "Hadiah Keempat",
          fifthprize: "Hadiah Kelima",
          sixthprize: "Hadiah Keenam",
          seventhprize: "Hadiah Ketujuh",
          eighthprize: "å…«ç­‰å¥–",
          northernvietnam: "Vietnam Utara",
          southvietnam: "Vietnam Selatan",
          vietnamchinese: "Cina Vietnam",
        },
        finance: {
          title: "Selamat",
          titleRes: "Rekod Selamat",
          tip1: "Kadar harian",
          tip2: "Pendapatan dikira setiap minit",
          shop: "Points Mall",
          shopTip: "Penebusan percuma barangan mewah besar-besaran",
          lumpSum: "sekali gus",
          security: "Keselamatan kewangan",
          transferIn: "pindah masuk",
          transferOut: "pindah keluar",
          Every: "Setiap",
          minute: "Hasil minit",
          earnings: "Hasil yang dijana",
          cumulativeIncome: "Pendapatan terkumpul",
          estimatedIncome: "Anggaran Pendapatan",
          income: "pendapatan",
          tip3: "Dana adalah selamat dan terjamin, dan boleh dipindahkan pada bila-bila masa",
          history: "rekod sejarah",
          setIncome: "pendapatan penyelesaian",
          allRecords: "semua rekod",
          amountShare: "Jumlah setiap salinan",
          enter: "Sila masukkan kuantiti",
          availableBalance: "Baki yang ada",
          outAmount: "jumlah pemindahan",
          inAmount: "Jumlah pemindahan",
          all: "semua",
          balanceAvailable: "Baki tidak mencukupi tersedia",
          noIncome: "tiada pendapatan",
          noIncomeTip: "Sama ada pendapatan sedang dipindahkan keluar",
        },
        financeRule: {
          title: "Ketahui tentang peti besi",
          Rtip: "Pulangan minimum, kadar faedah harian",
          Rtip1: "Selepas baki dompet dipindahkan masuk, setiap",
          Rtip2: "Pendapatan dikira setiap minit",
          Rtip3:
            "Pendapatan akan diselesaikan apabila memindahkan masuk atau keluar untuk kali kedua, dan pendapatan terakhir akan dipindahkan ke baki dompet",
          Rtip4:
            "Baki dompet yang dipindahkan ke peti besi mesti dipindahkan dalam unit",
          Eg: "Cth",
          Rtip5: "satu hidangan",
          Rtip6: ", dipindahkan kepada 2 salinan sebagai",
          Rtip7: ", 10 salinan untuk",
          Rtip8: ", 50 salinan untuk",
          Rtip9: ", jumlah pindahan mestilah gandaan 1000",
          Rtip10:
            "Di bawah syarat pendapatan anda dijamin, anda boleh memindahkan baki peti besi ke baki dompet pada bila-bila masa, dan jumlah pindahan mestilah gandaan bilangan salinan",
          friendly: "peringatan mesra",
          friendlytxt:
            'Tolong jangan pindah masuk dan keluar dengan kerap. Pendapatan akan dikira dari 1 minit selepas mendepositkan. Jika jumlah terkumpul amaun pendapatan tunggal kurang daripada 0.01, ia tidak akan dimasukkan dalam "pendapatan".',
          Safety: "Keselamatan",
          SafetyTxt:
            "Pasukan teknikal keselamatan memastikan keselamatan dana anda",
          SafetyTip:
            "Untuk memastikan keselamatan dana anda, anda disyorkan agar memindahkan baki dompet anda ke peti besi",
        },
        flight: {
          title: "Juruterbang",
          tit: "Panas dan mengujakan",
          sub: "permainan terjun udara",
          tip: "sama ada untuk memasuki permainan",
          btn: "masuk sekarang",
          gameName: "Juruterbang",
          gameTip: "Terbang dan tingkatkan keuntungan anda",
          enterGameName: "Sila masukkan nama permainan",
        },
      },
    };
  },
  5548: function (e, a, t) {
    e.exports = t.p + "img/icon_activi.19e63e6b.png";
  },
  "56d7": function (e, a, t) {
    "use strict";
    t.r(a);
    t("e260"), t("e6cf"), t("cca6"), t("a79d");
    var n,
      i = t("2b0e"),
      o = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t("div", { attrs: { id: "app" } }, [t("router-view")], 1);
      },
      r = [],
      l = {
        name: "App",
        data: function () {
          return {};
        },
      },
      s = l,
      m = (t("5c0b"), t("2877")),
      u = Object(m["a"])(s, o, r, !1, null, null, null),
      c = u.exports,
      d = (t("99af"), t("d3b7"), t("bfff")),
      g = t("8c4f"),
      h = function () {
        var e = this,
          a = e.$createElement,
          n = e._self._c || a;
        return n(
          "div",
          { staticClass: "mian login" },
          [
            n("div", { staticClass: "login-banner" }, [
              n(
                "div",
                {
                  staticClass: "bankPage c-row c-row-middle-center",
                  on: {
                    click: function (a) {
                      return e.goPage("/home");
                    },
                  },
                },
                [
                  n("div", { staticClass: "bank c-row c-row-middle-center" }, [
                    n("img", {
                      staticClass: "navbar-back",
                      attrs: { src: t("2ea4") },
                    }),
                  ]),
                ]
              ),
              n("img", {
                staticClass: "logo",
                attrs: { src: e.globalConfig.clientCfg.HeadLogo },
              }),
            ]),
            n("div", { staticClass: "login-box" }, [
              n("div", { staticClass: "tit" }, [
                e._v(" " + e._s(e.$t("homepage.login")) + " "),
              ]),
              n("div", { staticClass: "mian-from" }, [
                n("div", { staticClass: "lab" }, [
                  e._v(" " + e._s(e.$t("homepage.numberFormat")) + ":"),
                  e.globalConfig.clientCfg.AreaCodeList
                    ? n("span", [
                        e._v(
                          e._s(
                            e.AreaCode ||
                              e.globalConfig.clientCfg.AreaCodeList[0]
                          )
                        ),
                      ])
                    : e._e(),
                ]),
                "$" != e.globalConfig.clientCfg.DollarSign &&
                "â‚½" != e.globalConfig.clientCfg.DollarSign
                  ? n("div", { staticClass: "item c-row c-row-center first" }, [
                      n(
                        "div",
                        {
                          staticClass: "c-row number",
                          on: { click: e.sendCode },
                        },
                        [
                          e._m(0),
                          e.globalConfig.clientCfg.AreaCodeList
                            ? n("div", { staticClass: "p-l-5" }, [
                                e._v(
                                  e._s(
                                    e.AreaCode ||
                                      e.globalConfig.clientCfg.AreaCodeList[0]
                                  )
                                ),
                              ])
                            : e._e(),
                        ]
                      ),
                      n("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: e.form.mobile,
                            expression: "form.mobile",
                          },
                        ],
                        attrs: {
                          maxlength: "16",
                          type: "text",
                          placeholder: e.$t("homepage.mobile"),
                          oninput: "value=value.replace(/\\D/g,'')",
                        },
                        domProps: { value: e.form.mobile },
                        on: {
                          input: function (a) {
                            a.target.composing ||
                              e.$set(e.form, "mobile", a.target.value);
                          },
                        },
                      }),
                    ])
                  : n(
                      "div",
                      { staticClass: "item c-row c-row-middle-center" },
                      [
                        n(
                          "div",
                          {
                            staticClass: "c-row number",
                            on: { click: e.sendCode },
                          },
                          [e._m(1)]
                        ),
                        n("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: e.form.mobile,
                              expression: "form.mobile",
                            },
                          ],
                          attrs: {
                            maxlength: "16",
                            type: "text",
                            placeholder: e.$t("homepage.mobile"),
                            oninput: "value=value.replace(/\\D/g,'')",
                          },
                          domProps: { value: e.form.mobile },
                          on: {
                            input: function (a) {
                              a.target.composing ||
                                e.$set(e.form, "mobile", a.target.value);
                            },
                          },
                        }),
                      ]
                    ),
                n(
                  "div",
                  { staticClass: "item c-row c-row-center" },
                  [
                    e._m(2),
                    n("Put", {
                      attrs: { placeholder: e.$t("homepage.pwd") },
                      on: { input: e.getPwd },
                    }),
                  ],
                  1
                ),
                n(
                  "div",
                  { staticClass: "mian-btn" },
                  [
                    n(
                      "van-button",
                      {
                        staticClass: "gradient",
                        attrs: { block: "", round: !0 },
                        on: { click: e.login },
                      },
                      [n("span", [e._v(e._s(e.$t("homepage.login")))])]
                    ),
                    n(
                      "div",
                      { staticClass: "text m-t-15 c-row c-row-middle-center" },
                      [
                        n(
                          "span",
                          {
                            staticClass: "p-r-5",
                            on: {
                              click: function (a) {
                                return e.goPage("/register");
                              },
                            },
                          },
                          [e._v(e._s(e.$t("homepage.register")))]
                        ),
                        e._v("ï½œ "),
                        "0" == e.resState
                          ? n(
                              "span",
                              {
                                staticClass: "p-l-5",
                                on: {
                                  click: function (a) {
                                    return e.goPage("/forgot");
                                  },
                                },
                              },
                              [e._v(e._s(e.$t("homepage.forgotPwd")))]
                            )
                          : n(
                              "span",
                              {
                                staticClass: "p-l-5",
                                on: {
                                  click: function (a) {
                                    return e.goPage("/keFuMenu");
                                  },
                                },
                              },
                              [e._v(e._s(e.$t("homepage.customerService")))]
                            ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
            ]),
            n(
              "van-popup",
              {
                style: {
                  borderRadius: "15px 15px 0 0",
                  padding: "5px 0 0",
                  maxWidth: "10rem",
                  left: "auto",
                },
                attrs: { position: "bottom" },
                model: {
                  value: e.show,
                  callback: function (a) {
                    e.show = a;
                  },
                  expression: "show",
                },
              },
              e._l(e.globalConfig.clientCfg.AreaCodeList, function (a, t) {
                return n(
                  "div",
                  {
                    key: t,
                    staticClass: "AreaCode-box",
                    on: {
                      click: function (t) {
                        return e.SelectCode(a);
                      },
                    },
                  },
                  [
                    n(
                      "div",
                      { staticClass: "item c-row c-row-between c-row-middle" },
                      [
                        n("div", { staticClass: "left c-row c-row-middle" }, [
                          e._v(" " + e._s(a) + " "),
                        ]),
                        n("div", { staticClass: "right" }, [
                          n(
                            "div",
                            { class: a == e.AreaCode ? "action chek" : "chek" },
                            [
                              n("van-icon", {
                                attrs: {
                                  name: "success",
                                  color: "#fff",
                                  size: "16",
                                },
                              }),
                            ],
                            1
                          ),
                        ]),
                      ]
                    ),
                  ]
                );
              }),
              0
            ),
            n("Loading", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.showLoading,
                  expression: "showLoading",
                },
              ],
            }),
          ],
          1
        );
      },
      p = [
        function () {
          var e = this,
            a = e.$createElement,
            t = e._self._c || a;
          return t("span", { staticClass: "c-row c-row-middle-center" }, [
            t("div", { staticClass: "mobile" }),
          ]);
        },
        function () {
          var e = this,
            a = e.$createElement,
            t = e._self._c || a;
          return t("span", { staticClass: "c-row c-row-middle-center" }, [
            t("div", { staticClass: "user" }),
          ]);
        },
        function () {
          var e = this,
            a = e.$createElement,
            t = e._self._c || a;
          return t("span", { staticClass: "img c-row c-row-middle-center" }, [
            t("div", { staticClass: "password" }),
          ]);
        },
      ],
      b = (t("c975"), t("ac1f"), t("1276"), t("96cf"), t("1da1")),
      k = t("2241"),
      f = t("2d4c"),
      y = {
        name: "Login",
        components: { Put: f["a"] },
        mixins: [k["a"]],
        data: function () {
          return {
            show: !1,
            AreaCode: "",
            showLoading: !1,
            form: { mobile: "", pwd: "" },
            resState: 0,
          };
        },
        mounted: function () {
          var e = this;
          e.globalConfig.clientCfg.AreaCode
            ? ((e.AreaCode = e.globalConfig.clientCfg.AreaCodeList[0]),
              e.$route.query.uid &&
                e.$route.query.key &&
                e.adminMain(e.$route.query.uid, e.$route.query.key))
            : (e.showLoadingFun(),
              setTimeout(function () {
                e.$route.query.uid &&
                  e.$route.query.key &&
                  e.adminMain(e.$route.query.uid, e.$route.query.key),
                  (e.AreaCode = e.globalConfig.clientCfg.AreaCodeList[0]);
              }, 1e3)),
            window.addEventListener("keydown", e.keyDown);
        },
        created: function () {
          var e = this;
          e.GetForPwdState(), e.GetOnSites();
        },
        methods: {
          GetOnSites: function () {
            var e = this;
            e.$api
              .GetOnSitesApi({})
              .then(function (a) {
                a.success
                  ? ((e.globalConfig.clientCfg = a.data),
                    (e.globalConfig.clientCfg.LanguageList =
                      a.data.Languages.split("|")),
                    (e.globalConfig.clientCfg.AreaCodeList =
                      a.data.AreaCode.split("|")),
                    localStorage.setItem("clientCfg", JSON.stringify(a.data)),
                    e.GetForPwdState(),
                    e.globalConfig.clientCfg.LanguageList &&
                      e.globalConfig.clientCfg.LanguageList.length > 0 &&
                      (localStorage.setItem(
                        "lang",
                        e.globalConfig.clientCfg.LanguageList[0]
                      ),
                      (e.$i18n.locale =
                        e.globalConfig.clientCfg.LanguageList[0])))
                  : e.$msg(a.msg);
              })
              .catch(function (a) {
                (e.showLoading = !0),
                  setTimeout(function () {
                    e.showLoading = !1;
                  }, 1e4),
                  e.$msg(e.$t("homepage.network"));
              });
          },
          getPwd: function (e) {
            var a = this;
            a.form.pwd = e;
          },
          keyDown: function (e) {
            var a = this;
            13 == e.keyCode && a.login();
          },
          sendCode: function () {
            this.globalConfig.clientCfg.AreaCodeList.length > 1 &&
              (this.show = !0);
          },
          SelectCode: function (e) {
            (this.show = !1), (this.AreaCode = e);
          },
          getForgot: function () {
            var e = this;
            e.$api
              .GetForPwdState({})
              .then(function (a) {
                0 == a.code && a.success
                  ? "0" === a.data.State
                    ? e.goPage("/forgot")
                    : e.goPage("/keFuMenu")
                  : ((e.showLoading = !0),
                    setTimeout(function () {
                      e.showLoading = !1;
                    }, 1e4),
                    e.$msg(a.msg));
              })
              .catch(function (a) {
                e.$msg(e.$t("homepage.network"));
              });
          },
          GetForPwdState: function () {
            var e = this;
            e.$api
              .GetForPwdState({})
              .then(function (a) {
                0 == a.code && a.success
                  ? (e.resState = a.data.State)
                  : ((e.showLoading = !0),
                    setTimeout(function () {
                      e.showLoading = !1;
                    }, 1e4),
                    e.$msg(a.msg));
              })
              .catch(function (a) {
                e.$msg(e.$t("homepage.network"));
              });
          },
          adminMain: function (e, a) {
            var t = this;
            return Object(b["a"])(
              regeneratorRuntime.mark(function n() {
                var i, o, r;
                return regeneratorRuntime.wrap(function (n) {
                  while (1)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (i = t.form),
                          i.mobile,
                          i.pwd,
                          (o = { uid: e, key: a }),
                          (n.next = 4),
                          t.$api.AdminLogin(o)
                        );
                      case 4:
                        (r = n.sent),
                          r.success
                            ? ((t.showLoading = !1),
                              localStorage.setItem(
                                "UserInfo",
                                JSON.stringify(r.data)
                              ),
                              localStorage.setItem("open", 1),
                              localStorage.setItem("volumeShow", 1),
                              t.$router.push("/home"))
                            : ((t.showLoading = !1), t.$msg(r.msg));
                      case 6:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          main: function () {
            var e = this;
            return Object(b["a"])(
              regeneratorRuntime.mark(function a() {
                var t, n, i, o;
                return regeneratorRuntime.wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (
                          (t = e.form),
                          (n = t.mobile),
                          t.pwd,
                          (i = {
                            username: e.AreaCode + n,
                            pwd: e.form.pwd,
                            phonetype: e.utils.getUserAgent(),
                          }),
                          (a.next = 4),
                          e.$api.Login(i)
                        );
                      case 4:
                        (o = a.sent),
                          o.success
                            ? ((e.showLoading = !1),
                              1 == o.data.Isvalidator
                                ? e.$router.push({
                                    path: "/loginVerify",
                                    query: {
                                      uid: o.data.UserId,
                                      sign: o.data.Sign,
                                    },
                                  })
                                : (localStorage.removeItem("infoList"),
                                  localStorage.removeItem("rebateratelist"),
                                  localStorage.setItem(
                                    "UserInfo",
                                    JSON.stringify(o.data)
                                  ),
                                  localStorage.setItem("open", 1),
                                  localStorage.setItem("volumeShow", 1),
                                  e.$router.push("/home")))
                            : ((e.showLoading = !1), e.$msg(o.msg));
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          login: function () {
            var e = this,
              a = this.form,
              t = a.mobile,
              n = a.pwd;
            if (!t) return e.$msg(e.$t("homepage.pleaseRequired"));
            if (!n) return e.$msg(e.$t("homepage.pleaseRequired"));
            e.showLoading = !0;
            var i = e.globalConfig.clientCfg.AreaCodeList.indexOf(e.AreaCode);
            -1 == i && (e.AreaCode = e.globalConfig.clientCfg.AreaCodeList[0]),
              this.main();
          },
        },
        watch: {},
        destroyed: function () {
          window.removeEventListener("keydown", this.keyDown, !1);
        },
      },
      A = y,
      T = (t("238d"), Object(m["a"])(A, h, p, !1, null, "65578ba4", null)),
      w = T.exports,
      v = [];
    switch (d["b"]) {
      case 1:
        n = {
          path: "/Home",
          name: "Home",
          component: function () {
            return Promise.all([
              t.e("chunk-9ca7d0dc"),
              t.e("chunk-0f044119"),
              t.e("chunk-1090cd55"),
              t.e("chunk-d78f1182"),
            ]).then(t.bind(null, "eab3"));
          },
        };
        break;
      case 2:
        n = {
          path: "/Home",
          name: "Home",
          component: function () {
            return Promise.all([
              t.e("chunk-9ca7d0dc"),
              t.e("chunk-0f044119"),
              t.e("chunk-1090cd55"),
              t.e("chunk-0542a560"),
            ]).then(t.bind(null, "4798"));
          },
        };
        break;
      case 3:
        n = {
          path: "/Home",
          name: "Home",
          component: function () {
            return Promise.all([
              t.e("chunk-9ca7d0dc"),
              t.e("chunk-0f044119"),
              t.e("chunk-5fcdc3a0"),
            ]).then(t.bind(null, "10aa"));
          },
        };
        break;
      default:
        n = {
          path: "/Home",
          name: "Home",
          component: function () {
            return Promise.all([
              t.e("chunk-9ca7d0dc"),
              t.e("chunk-0f044119"),
              t.e("chunk-1090cd55"),
              t.e("chunk-d78f1182"),
            ]).then(t.bind(null, "eab3"));
          },
        };
        break;
    }
    v.push(n), i["a"].use(g["a"]);
    var S = [
        {
          path: "/",
          name: "Loading",
          component: function () {
            return t.e("chunk-943f7cea").then(t.bind(null, "45d6"));
          },
        },
        {
          path: "/allGame",
          name: "AllGame",
          component: function () {
            return t.e("chunk-3cc70fec").then(t.bind(null, "c36c"));
          },
        },
        { path: "/login", name: "Login", component: w },
        {
          path: "/loginVerify",
          name: "LoginVerify",
          component: function () {
            return t.e("chunk-25e66eaa").then(t.bind(null, "7418a"));
          },
        },
        {
          path: "/register",
          name: "Register",
          component: function () {
            return t.e("chunk-697f06ed").then(t.bind(null, "a9e32"));
          },
        },
        {
          path: "/privacyPolicy",
          name: "PrivacyPolicy",
          component: function () {
            return t.e("chunk-738292a9").then(t.bind(null, "0154"));
          },
        },
        {
          path: "/riskAgreement",
          name: "RiskAgreement",
          component: function () {
            return t.e("chunk-339c81a2").then(t.bind(null, "6299"));
          },
        },
        {
          path: "/forgot",
          name: "Forgot",
          component: function () {
            return t.e("chunk-ab61d66a").then(t.bind(null, "1d06"));
          },
        },
        {
          path: "/mian",
          name: "Mian",
          component: function () {
            return t.e("chunk-200eed29").then(t.bind(null, "87c3"));
          },
          meta: { type: "login" },
        },
        {
          path: "/balance",
          name: "Balance",
          component: function () {
            return t.e("chunk-3fcf4ae6").then(t.bind(null, "3512"));
          },
          meta: { type: "login" },
        },
        {
          path: "/myProfile",
          name: "MyProfile",
          component: function () {
            return t.e("chunk-009b4c4c").then(t.bind(null, "02bd"));
          },
          meta: { type: "login" },
        },
        {
          path: "/win",
          name: "Win",
          component: function () {
            return Promise.all([
              t.e("chunk-9ca7d0dc"),
              t.e("chunk-0b0fb3cd"),
            ]).then(t.bind(null, "1072"));
          },
          meta: { type: "login" },
        },
        {
          path: "/liveWin",
          name: "LiveWin",
          component: function () {
            return Promise.all([
              t.e("chunk-9ca7d0dc"),
              t.e("chunk-c4188650"),
              t.e("chunk-4f411f1c"),
            ]).then(t.bind(null, "b0a4"));
          },
          meta: { type: "login" },
        },
        {
          path: "/winTrx",
          name: "WinTrx",
          component: function () {
            return t.e("chunk-23008c6a").then(t.bind(null, "b917"));
          },
          meta: { type: "login" },
        },
        {
          path: "/red",
          name: "red",
          component: function () {
            return t.e("chunk-afb3fabc").then(t.bind(null, "e9bf"));
          },
        },
        {
          path: "/colorLand",
          name: "ColorLand",
          component: function () {
            return Promise.all([
              t.e("chunk-9ca7d0dc"),
              t.e("chunk-4e2c0e16"),
            ]).then(t.bind(null, "df77"));
          },
          meta: { type: "login" },
        },
        {
          path: "/lottery",
          name: "Lottery",
          component: function () {
            return t.e("chunk-3334e104").then(t.bind(null, "5650"));
          },
          meta: { type: "login" },
        },
        {
          path: "/lottery/win",
          name: "Lottery",
          component: function () {
            return t.e("chunk-72f01a9a").then(t.bind(null, "3b07"));
          },
          meta: { type: "login" },
        },
        {
          path: "/lottery/record",
          name: "Record",
          component: function () {
            return t.e("chunk-2e1544f7").then(t.bind(null, "82ba"));
          },
          meta: { type: "login" },
        },
        {
          path: "/checkDes",
          name: "CheckDes",
          component: function () {
            return t.e("chunk-ae1ed794").then(t.bind(null, "bd07"));
          },
          meta: { type: "login" },
        },
        {
          path: "/checkRecord",
          name: "CheckRecord",
          component: function () {
            return t.e("chunk-685aa3e6").then(t.bind(null, "4f1d"));
          },
          meta: { type: "login" },
        },
        {
          path: "/promotion",
          name: "Promotion",
          component: function () {
            return Promise.all([
              t.e("chunk-2d21d0c2"),
              t.e("chunk-2d216257"),
              t.e("chunk-22328081"),
            ]).then(t.bind(null, "3149"));
          },
          meta: { type: "login" },
        },
        {
          path: "/promotionDes",
          name: "PromotionDes",
          component: function () {
            return t.e("chunk-0b15e882").then(t.bind(null, "4008"));
          },
          meta: { type: "login" },
        },
        {
          path: "/bonusrecord",
          name: "Bonusrecord",
          component: function () {
            return t.e("chunk-0fd8d9ae").then(t.bind(null, "1170"));
          },
          meta: { type: "login" },
        },
        {
          path: "/wallet",
          name: "Wallet",
          component: function () {
            return t.e("chunk-0efec584").then(t.bind(null, "454c"));
          },
          meta: { type: "login" },
        },
        {
          path: "/rechargerecord",
          name: "Rechargerecord",
          component: function () {
            return t.e("chunk-b4b2c9bc").then(t.bind(null, "95b8"));
          },
          meta: { type: "login" },
        },
        {
          path: "/bettingrecordwin",
          name: "BettingRecordWin",
          component: function () {
            return t.e("chunk-7293d7fb").then(t.bind(null, "ddb1"));
          },
          meta: { type: "login" },
        },
        {
          path: "/bettingrecordlivewin",
          name: "BettingRecordliveWin",
          component: function () {
            return t.e("chunk-6b43bd10").then(t.bind(null, "474f"));
          },
          meta: { type: "login" },
        },
        {
          path: "/bettingrecordwinTrx",
          name: "BettingRecordWinTrx",
          component: function () {
            return t.e("chunk-27122907").then(t.bind(null, "bf97"));
          },
          meta: { type: "login" },
        },
        {
          path: "/bettingrecord5d",
          name: "BettingRecord5D",
          component: function () {
            return t.e("chunk-44abccc0").then(t.bind(null, "8bb8"));
          },
          meta: { type: "login" },
        },
        {
          path: "/bettingrecord4d",
          name: "BettingRecord4D",
          component: function () {
            return t.e("chunk-5d17b1cb").then(t.bind(null, "82fa"));
          },
          meta: { type: "login" },
        },
        {
          path: "/bettingrecordland",
          name: "BettingRecordLand",
          component: function () {
            return t.e("chunk-b3a478b0").then(t.bind(null, "4f69"));
          },
          meta: { type: "login" },
        },
        {
          path: "/bettingrecordnation",
          name: "BettingRecordNation",
          component: function () {
            return t.e("chunk-04d9e7e8").then(t.bind(null, "c465"));
          },
          meta: { type: "login" },
        },
        {
          path: "/bettingrecordlottery",
          name: "BettingRecordLottery",
          component: function () {
            return t.e("chunk-38251dc0").then(t.bind(null, "6b60"));
          },
          meta: { type: "login" },
        },
        {
          path: "/withdrawalrecord",
          name: "Withdrawalrecord",
          component: function () {
            return t.e("chunk-5fadbd2a").then(t.bind(null, "2a32"));
          },
          meta: { type: "login" },
        },
        {
          path: "/historicalBetting",
          name: "HistoricalBetting",
          component: function () {
            return t.e("chunk-30bd42b6").then(t.bind(null, "9875"));
          },
          meta: { type: "login" },
        },
        {
          path: "/loginLog",
          name: "LoginLog",
          component: function () {
            return t.e("chunk-548e69f3").then(t.bind(null, "6be6"));
          },
          meta: { type: "login" },
        },
        {
          path: "/messageCenter",
          name: "MessageCenter",
          component: function () {
            return t.e("chunk-41cc83f4").then(t.bind(null, "4a5f"));
          },
          meta: { type: "login" },
        },
        {
          path: "/messageDes",
          name: "MessageDes",
          component: function () {
            return t.e("chunk-0c41b112").then(t.bind(null, "f0cc"));
          },
          meta: { type: "login" },
        },
        {
          path: "/transactions",
          name: "Transactions",
          component: function () {
            return t.e("chunk-59419552").then(t.bind(null, "dc01"));
          },
          meta: { type: "login" },
        },
        {
          path: "/mission",
          name: "Mission",
          component: function () {
            return t.e("chunk-16f496dc").then(t.bind(null, "8109"));
          },
          meta: { type: "login" },
        },
        {
          path: "/redenvelopes",
          name: "Redenvelopes",
          component: function () {
            return t.e("chunk-2d123fa7").then(t.bind(null, "2f0d"));
          },
          meta: { type: "login" },
        },
        {
          path: "/newtutorial",
          name: "Newtutorial",
          component: function () {
            return t.e("chunk-44d5df02").then(t.bind(null, "b7de"));
          },
          meta: { type: "login" },
        },
        {
          path: "/about",
          name: "About",
          component: function () {
            return t.e("chunk-085e8808").then(t.bind(null, "c259"));
          },
          meta: { type: "login" },
        },
        {
          path: "/keFuMenu",
          name: "KeFuMenu",
          component: function () {
            return t.e("chunk-fd347064").then(t.bind(null, "d5b2"));
          },
        },
        {
          path: "/keFuMenus",
          name: "KeFuMenus",
          component: function () {
            return t.e("chunk-0ecd09c6").then(t.bind(null, "488e"));
          },
        },
        {
          path: "/keFuMenuDes",
          name: "keFuMenuDes",
          component: function () {
            return t.e("chunk-4db0772a").then(t.bind(null, "adf7"));
          },
        },
        {
          path: "/withdrawal",
          name: "Withdrawal",
          component: function () {
            return t.e("chunk-7a43413b").then(t.bind(null, "bc9c"));
          },
          meta: { type: "login" },
        },
        {
          path: "/addbank",
          name: "Addbank",
          component: function () {
            return t.e("chunk-a845ec12").then(t.bind(null, "2a72"));
          },
          meta: { type: "login" },
        },
        {
          path: "/addCpfbank",
          name: "AddCpfbank",
          component: function () {
            return t.e("chunk-db8720ca").then(t.bind(null, "6d50"));
          },
          meta: { type: "login" },
        },
        {
          path: "/addElcbank",
          name: "AddElcbank",
          component: function () {
            return t.e("chunk-145d4a1e").then(t.bind(null, "b787"));
          },
          meta: { type: "login" },
        },
        {
          path: "/addWavebank",
          name: "AddWavebank",
          component: function () {
            return t.e("chunk-6712d1aa").then(t.bind(null, "4acd"));
          },
          meta: { type: "login" },
        },
        {
          path: "/addUsdt",
          name: "addUsdt",
          component: function () {
            return t.e("chunk-7a3388a9").then(t.bind(null, "664b"));
          },
          meta: { type: "login" },
        },
        {
          path: "/recharge",
          name: "Recharge",
          component: function () {
            return t.e("chunk-050df13e").then(t.bind(null, "1e11"));
          },
          meta: { type: "login" },
        },
        {
          path: "/usdt",
          name: "Usdt",
          component: function () {
            return Promise.all([
              t.e("chunk-2d21d0c2"),
              t.e("chunk-45e4acaa"),
            ]).then(t.bind(null, "c210"));
          },
          meta: { type: "login" },
        },
        {
          path: "/rUsdt",
          name: "RUsdt",
          component: function () {
            return Promise.all([
              t.e("chunk-2d21d0c2"),
              t.e("chunk-467e3165"),
            ]).then(t.bind(null, "839c"));
          },
          meta: { type: "login" },
        },
        {
          path: "/TRX",
          name: "TRX",
          component: function () {
            return Promise.all([
              t.e("chunk-2d21d0c2"),
              t.e("chunk-66d5b656"),
            ]).then(t.bind(null, "d9250"));
          },
          meta: { type: "login" },
        },
        {
          path: "/touchngo",
          name: "Touchngo",
          component: function () {
            return t.e("chunk-7ad1fcf0").then(t.bind(null, "b70f"));
          },
          meta: { type: "login" },
        },
        {
          path: "/5D",
          name: "5D",
          component: function () {
            return Promise.all([
              t.e("chunk-9ca7d0dc"),
              t.e("chunk-264008c4"),
            ]).then(t.bind(null, "c717"));
          },
          meta: { type: "login" },
        },
        {
          path: "/4DW",
          name: "4DW",
          component: function () {
            return t.e("chunk-76d87515").then(t.bind(null, "c864"));
          },
          meta: { type: "login" },
        },
        {
          path: "/4DW2",
          name: "4DW2",
          component: function () {
            return t.e("chunk-0258b2a7").then(t.bind(null, "d461"));
          },
          meta: { type: "login" },
        },
        {
          path: "/4DW3",
          name: "4DW3",
          component: function () {
            return t.e("chunk-51fd0af3").then(t.bind(null, "9056"));
          },
          meta: { type: "login" },
        },
        {
          path: "/4Djs",
          name: "4Djs",
          component: function () {
            return t.e("chunk-4cc5ff42").then(t.bind(null, "639b"));
          },
          meta: { type: "login" },
        },
        {
          path: "/4D",
          name: "4D",
          component: function () {
            return t.e("chunk-bccf29a4").then(t.bind(null, "e5dd"));
          },
          meta: { type: "login" },
        },
        {
          path: "/vietnam",
          name: "Vietnam",
          component: function () {
            return t.e("chunk-076af0c5").then(t.bind(null, "463e"));
          },
          meta: { type: "login" },
        },
        {
          path: "/newVietnam",
          name: "NewVietnam",
          component: function () {
            return t.e("chunk-f778548c").then(t.bind(null, "2000"));
          },
          meta: { type: "login" },
        },
        {
          path: "/nation",
          name: "Nation",
          component: function () {
            return Promise.all([
              t.e("chunk-c4188650"),
              t.e("chunk-53841b4e"),
            ]).then(t.bind(null, "b6c0"));
          },
          meta: { type: "login" },
        },
        {
          path: "/game/lottery",
          name: "Lottery",
          component: function () {
            return Promise.all([
              t.e("chunk-c4188650"),
              t.e("chunk-75071d1a"),
            ]).then(t.bind(null, "28a1"));
          },
          meta: { type: "login" },
        },
        {
          path: "/slots",
          name: "Slots",
          component: function () {
            return t.e("chunk-0cd68ae6").then(t.bind(null, "60c7"));
          },
        },
        {
          path: "/chess",
          name: "Chess",
          component: function () {
            return t.e("chunk-63bb93b0").then(t.bind(null, "9357"));
          },
        },
        {
          path: "/flight",
          name: "Flight",
          component: function () {
            return t.e("chunk-b70405a6").then(t.bind(null, "137e"));
          },
          meta: { type: "login" },
        },
        {
          path: "/flight1",
          name: "Flight1",
          component: function () {
            return t.e("chunk-2b3f542c").then(t.bind(null, "c0c3"));
          },
          meta: { type: "login" },
        },
        {
          path: "/flightTow",
          name: "FlightTow",
          component: function () {
            return t.e("chunk-278d59ee").then(t.bind(null, "f593"));
          },
          meta: { type: "login" },
        },
        {
          path: "/slotsList",
          name: "SlotsList",
          component: function () {
            return t.e("chunk-0b09369e").then(t.bind(null, "098a"));
          },
        },
        {
          path: "/search",
          name: "Search",
          component: function () {
            return t.e("chunk-644ff02f").then(t.bind(null, "c45b"));
          },
        },
        {
          path: "/casino",
          name: "Casino",
          component: function () {
            return t.e("chunk-0db7c1f6").then(t.bind(null, "5628"));
          },
        },
        {
          path: "/casinoAg",
          name: "CasinoAg",
          component: function () {
            return t.e("chunk-3484bcc5").then(t.bind(null, "9e8a"));
          },
        },
        {
          path: "/casinoEvo",
          name: "CasinoEvo",
          component: function () {
            return t.e("chunk-0e10c9c3").then(t.bind(null, "711b"));
          },
        },
        {
          path: "/sport",
          name: "Sport",
          component: function () {
            return t.e("chunk-461a1710").then(t.bind(null, "cfff"));
          },
        },
        {
          path: "/sportAg",
          name: "SportAg",
          component: function () {
            return t.e("chunk-02d640c5").then(t.bind(null, "ab5d"));
          },
        },
        {
          path: "/sportSb",
          name: "SportSb",
          component: function () {
            return t.e("chunk-c0d15508").then(t.bind(null, "5322"));
          },
        },
        {
          path: "/sportIm",
          name: "SportIm",
          component: function () {
            return t.e("chunk-05d395a8").then(t.bind(null, "46f0"));
          },
        },
        {
          path: "/gameGo",
          name: "GameGo",
          component: function () {
            return t.e("chunk-495c0a68").then(t.bind(null, "5b6e"));
          },
          meta: { type: "login" },
        },
        {
          path: "/activity",
          name: "Activity",
          component: function () {
            return t.e("chunk-dbf579d4").then(t.bind(null, "f4ed"));
          },
          meta: { type: "login" },
        },
        {
          path: "/activityDes",
          name: "ActivityDes",
          component: function () {
            return t.e("chunk-3315d54e").then(t.bind(null, "a2d8"));
          },
        },
        {
          path: "/pages/login/register",
          name: "Register",
          component: function () {
            return t.e("chunk-2d0c9b56").then(t.bind(null, "59fb"));
          },
        },
        {
          path: "/center",
          name: "Center",
          component: function () {
            return t.e("chunk-c7d4e1ca").then(t.bind(null, "b135"));
          },
          meta: { type: "login" },
        },
        {
          path: "/deposit",
          name: "Deposit",
          component: function () {
            return t.e("chunk-01c025bd").then(t.bind(null, "3c8d"));
          },
          meta: { type: "login" },
        },
        {
          path: "/Company",
          name: "Company",
          component: function () {
            return t.e("chunk-b198f854").then(t.bind(null, "cf8d"));
          },
          meta: { type: "login" },
        },
        {
          path: "/newList",
          name: "NewList",
          component: function () {
            return t.e("chunk-faa8abe2").then(t.bind(null, "72cd"));
          },
        },
        {
          path: "/newdes",
          name: "Newdes",
          component: function () {
            return t.e("chunk-ccd4fcae").then(t.bind(null, "b5f6"));
          },
        },
        {
          path: "/upiPay",
          name: "UpiPay",
          component: function () {
            return t.e("chunk-4eb90e66").then(t.bind(null, "c92b"));
          },
          meta: { type: "login" },
        },
        {
          path: "/rankList",
          name: "RankList",
          component: function () {
            return t.e("chunk-a718bce8").then(t.bind(null, "3c1b"));
          },
        },
        {
          path: "/myTeam",
          name: "MyTeam",
          component: function () {
            return t.e("chunk-1d9dbe7b").then(t.bind(null, "e58d"));
          },
          meta: { type: "login" },
        },
        {
          path: "/tutorial",
          name: "Tutorial",
          component: function () {
            return t.e("chunk-0984719c").then(t.bind(null, "1002"));
          },
        },
        {
          path: "/verify",
          name: "Verify",
          component: function () {
            return t.e("chunk-2de9240a").then(t.bind(null, "8875"));
          },
          meta: { type: "login" },
        },
        {
          path: "/verify",
          name: "Verify",
          component: function () {
            return t.e("chunk-2de9240a").then(t.bind(null, "8875"));
          },
          meta: { type: "login" },
        },
        {
          path: "/vdownload",
          name: "Vdownload",
          component: function () {
            return t.e("chunk-fdbeb1dc").then(t.bind(null, "64b7"));
          },
          meta: { type: "login" },
        },
        {
          path: "/vexplain",
          name: "Vexplain",
          component: function () {
            return t.e("chunk-90f8a4d8").then(t.bind(null, "44a8"));
          },
          meta: { type: "login" },
        },
        {
          path: "/vbackup",
          name: "Vbackup",
          component: function () {
            return Promise.all([
              t.e("chunk-2d21d0c2"),
              t.e("chunk-2d216257"),
              t.e("chunk-21c81672"),
            ]).then(t.bind(null, "f235"));
          },
          meta: { type: "login" },
        },
        {
          path: "/vsafety",
          name: "Vsafety",
          component: function () {
            return t.e("chunk-862854c0").then(t.bind(null, "5330"));
          },
          meta: { type: "login" },
        },
        {
          path: "/indexLong",
          name: "IndexLong",
          component: function () {
            return Promise.all([
              t.e("chunk-9ca7d0dc"),
              t.e("chunk-71dcadf2"),
            ]).then(t.bind(null, "e2a8"));
          },
          meta: { type: "login" },
        },
        {
          path: "/longInfo",
          name: "LongInfo",
          component: function () {
            return t.e("chunk-5e578388").then(t.bind(null, "8042"));
          },
          meta: { type: "login" },
        },
        {
          path: "/noticeList",
          name: "NoticeList",
          component: function () {
            return t.e("chunk-2c48d9e6").then(t.bind(null, "83a8"));
          },
        },
        {
          path: "/shop",
          name: "Shop",
          component: function () {
            return t.e("chunk-6f3b8caf").then(t.bind(null, "5f6f"));
          },
          meta: { type: "login" },
        },
        {
          path: "/integral",
          name: "Integral",
          component: function () {
            return t.e("chunk-769894e4").then(t.bind(null, "796f"));
          },
          meta: { type: "login" },
        },
        {
          path: "/exchange",
          name: "Exchange",
          component: function () {
            return t.e("chunk-64cdf166").then(t.bind(null, "85b9"));
          },
          meta: { type: "login" },
        },
        {
          path: "/rule",
          name: "Rule",
          component: function () {
            return t.e("chunk-61d0c116").then(t.bind(null, "7141"));
          },
          meta: { type: "login" },
        },
        {
          path: "/details",
          name: "Details",
          component: function () {
            return t.e("chunk-351dfe5b").then(t.bind(null, "25a8"));
          },
          meta: { type: "login" },
        },
        {
          path: "/trxIframe",
          name: "TrxIframe",
          component: function () {
            return t.e("chunk-422c3438").then(t.bind(null, "3361"));
          },
          meta: { type: "login" },
        },
        {
          path: "/finance",
          name: "Finance",
          component: function () {
            return t.e("chunk-e635d700").then(t.bind(null, "9a84"));
          },
          meta: { type: "login" },
        },
        {
          path: "/financerule",
          name: "FinanceRule",
          component: function () {
            return t.e("chunk-2c510426").then(t.bind(null, "2e04"));
          },
          meta: { type: "login" },
        },
        {
          path: "/fhistory",
          name: "Fhistory",
          component: function () {
            return t.e("chunk-cc5799d2").then(t.bind(null, "339c"));
          },
          meta: { type: "login" },
        },
      ].concat(v),
      P = new g["a"]({
        routes: S,
        scrollBehavior: function (e, a, t) {
          return t || { x: 0, y: 0 };
        },
      }),
      C = g["a"].prototype.push;
    g["a"].prototype.push = function (e) {
      return C.call(this, e).catch(function (e) {
        return e;
      });
    };
    var R = P,
      G = t("2f62");
    i["a"].use(G["a"]);
    var L = new G["a"].Store({
        state: { list: [], data: {}, pageid: 0, gameid: 0 },
        mutations: {},
        actions: {},
        modules: {},
      }),
      D = t("b650"),
      N = t("7bd9"),
      I = t("ee83"),
      U = t("6b41"),
      M = t("ac28"),
      B = t("2ed4"),
      x = t("0b33"),
      O = t("5e46"),
      E = t("ea47"),
      K = t("2bdd"),
      z = t("7744"),
      F = t("34e9"),
      H = t("58e6"),
      j = t("565f"),
      W = t("8f80"),
      V = t("44bf"),
      q = t("28a2"),
      J = t("9ffb"),
      Q = t("d1e1"),
      Y = t("e41f"),
      X = t("f253"),
      Z = t("5596"),
      _ = t("2bb1"),
      $ = t("ad06"),
      ee = t("1a23"),
      ae = t("a37c"),
      te = t("66fd"),
      ne = t("2830"),
      ie = t("21ab"),
      oe = t("f9bd"),
      re = t("1437"),
      le = t("417e"),
      se = t("3acc"),
      me = t("f0ca"),
      ue = t("343b"),
      ce = t("22410"),
      de = t("543e"),
      ge = t("9ed2");
    i["a"].use(D["a"]),
      i["a"].use(N["a"]),
      i["a"].use(I["a"]),
      i["a"].use(U["a"]),
      i["a"].use(M["a"]),
      i["a"].use(B["a"]),
      i["a"].use(x["a"]),
      i["a"].use(O["a"]),
      i["a"].use(E["a"]),
      i["a"].use(K["a"]),
      i["a"].use(z["a"]),
      i["a"].use(F["a"]),
      i["a"].use(H["a"]),
      i["a"].use(j["a"]),
      i["a"].use(W["a"]),
      i["a"].use(V["a"]),
      i["a"].use(q["a"]),
      i["a"].use(J["a"]),
      i["a"].use(Q["a"]),
      i["a"].use(Y["a"]),
      i["a"].use(X["a"]),
      i["a"].use(Z["a"]),
      i["a"].use(_["a"]),
      i["a"].use($["a"]),
      i["a"].use(ee["a"]),
      i["a"].use(ae["a"]),
      i["a"].use(te["a"]),
      i["a"].use(ne["a"]),
      i["a"].use(ie["a"]),
      i["a"].use(oe["a"]),
      i["a"].use(re["a"]),
      i["a"].use(le["a"]),
      i["a"].use(se["a"]),
      i["a"].use(me["a"]),
      i["a"].use(ue["a"]),
      i["a"].use(ce["a"]),
      i["a"].use(de["a"]),
      i["a"].use(ge["a"]);
    t("157a"), t("c326");
    var he = t("bc3a"),
      pe = t.n(he),
      be = t("2106"),
      ke = t.n(be),
      fe = function (e) {
        e.interceptors.request.use(
          function (e) {
            return e;
          },
          function (e) {
            return Promise.reject(e);
          }
        ),
          e.interceptors.response.use(
            function (e) {
              return e;
            },
            function (e) {
              return Promise.reject(e);
            }
          );
      },
      ye = fe,
      Ae = (t("d930"), t("4328")),
      Te = t.n(Ae);
    pe.a.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
    var we = pe.a.create({ method: "POST", timeout: 1e5 });
    we.interceptors.request.use(
      function (e) {
        return (e.data = Te.a.stringify(e.data)), e;
      },
      function (e) {
        return console.log(e), Promise.reject(e);
      }
    ),
      we.interceptors.response.use(
        function (e) {
          var a = e.data;
          return a;
        },
        function (e) {
          return console.log(e), Promise.reject(e);
        }
      );
    var ve = we,
      Se = {
        baseURL:
          "https://api.22880.club/api/webapi/GetOnSites?merchant=8888818",
      },
      Pe = { clientCfg: {} },
      Ce = JSON.parse(localStorage.getItem("clientCfg"));
    Ce ? (Pe.clientCfg = Ce) : console.log("æ²¡æœ‰èŽ·å–åˆ°client cfg"),
      (i["a"].prototype.globalConfig = Pe);
    var Re = {
      GetOnSitesApi: function (e) {
        return ve({ baseURL: Se.baseURL, method: "POST", data: e });
      },
      Login: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/UserLogin",
            method: "POST",
            data: e,
          })
        );
      },
      Register: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Register",
            method: "POST",
            data: e,
          })
        );
      },
      GetRegisterState: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetRegisterState",
            method: "POST",
            data: e,
          })
        );
      },
      GetRegisterSMS: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetRegisterSMS",
            method: "POST",
            data: e,
          })
        );
      },
      SmsVerifyCode: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SmsVerifyCode",
            method: "POST",
            data: e,
          })
        );
      },
      SmsForget: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SmsForget",
            method: "POST",
            data: e,
          })
        );
      },
      Uppwd: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Uppwd",
            method: "POST",
            data: e,
          })
        );
      },
      NewUppwd: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/NewUppwd",
            method: "POST",
            data: e,
          })
        );
      },
      GetProtocols: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetProtocols",
            method: "POST",
            data: e,
          })
        );
      },
      GetAgreement: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetAgreement",
            method: "POST",
            data: e,
          })
        );
      },
      GetSignInRecharges: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSignInRecharges",
            method: "POST",
            data: e,
          })
        );
      },
      NewSetSinIn: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/NewSetSinIn",
            method: "POST",
            data: e,
          })
        );
      },
      EditNickName: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/EditNickName",
            method: "POST",
            data: e,
          })
        );
      },
      GetCustomerServiceList: function (e) {
        return ve({
          baseURL: Pe.clientCfg.ApiUrl,
          url: "/api/webapi/GetCustomerServiceList",
          method: "POST",
          data: e,
        });
      },
      GetPlayingGuide: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetPlayingGuide",
            method: "POST",
            data: e,
          })
        );
      },
      ConversionRedpage: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/ConversionRedpage",
            method: "POST",
            data: e,
          })
        );
      },
      GetTaskList: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetTaskList",
            method: "POST",
            data: e,
          })
        );
      },
      SetTaskOrder: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetTaskOrder",
            method: "POST",
            data: e,
          })
        );
      },
      GetLoginlog: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetLoginlog",
            method: "POST",
            data: e,
          })
        );
      },
      GetMessageList: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMessageList",
            method: "POST",
            data: e,
          })
        );
      },
      GetMessageDetails: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMessageDetails",
            method: "POST",
            data: e,
          })
        );
      },
      SetOneMessageState: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetOneMessageState",
            method: "POST",
            data: e,
          })
        );
      },
      SetAllMessageState: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetAllMessageState",
            method: "POST",
            data: e,
          })
        );
      },
      GetTransactions: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetTransactions",
            method: "POST",
            data: e,
          })
        );
      },
      GetNewMyEmerdList: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetNewMyEmerdList",
            method: "POST",
            data: e,
          })
        );
      },
      Getwallet: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Getwallet",
            method: "POST",
            data: e,
          })
        );
      },
      GetWithdrawals: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetWithdrawals",
            method: "POST",
            data: e,
          })
        );
      },
      GetRechargeRecord: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetRechargeRecord",
            method: "POST",
            data: e,
          })
        );
      },
      GetWithdrawLog: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/getWithdrawLog",
            method: "POST",
            data: e,
          })
        );
      },
      Promotion: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Promotion",
            method: "POST",
            data: e,
          })
        );
      },
      GetPromotionRecord: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetPromotionRecord",
            method: "POST",
            data: e,
          })
        );
      },
      GetBanner: function (e) {
        return ve({
          baseURL: Pe.clientCfg.ApiUrl,
          url: "/api/webapi/GetBannerList",
          method: "POST",
          data: e,
        });
      },
      GetWinalotterys: function (e) {
        return ve({
          baseURL: Pe.clientCfg.ApiUrl,
          url: "/api/webapi/GetWinalotterys",
          method: "POST",
          data: e,
        });
      },
      GetWebSite: function (e) {
        return ve({
          baseURL: Pe.clientCfg.ApiUrl,
          url: "/api/webapi/GetWebSite",
          method: "POST",
          data: e,
        });
      },
      GetWithdrawal: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetWithdrawal",
            method: "POST",
            data: e,
          })
        );
      },
      GetWithdrawalTypes: function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetWithdrawalTypes",
            method: "POST",
            data: e,
          })
        );
      },
    };
    (Re.GetWithdrawals = function (e) {
      return (
        (e.language = localStorage.getItem("lang")),
        ve({
          baseURL: Pe.clientCfg.ApiUrl,
          url: "/api/webapi/GetWithdrawals",
          method: "POST",
          data: e,
        })
      );
    }),
      (Re.GetWithdrawAhundred = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetWithdrawAhundred",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.NewSetWithdrawal = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/NewSetWithdrawal",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetPayTypeName = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetPayTypeName",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetRechargeTypes = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetRechargeTypes",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.NewSetRechargesBankOrder = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/NewSetRechargesBankOrder",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.UpRechargesBankOrder = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/UpRechargesBankOrder",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetBankOrder = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetBankOrder",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSitemessage = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSitemessage",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.UserExpired = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/UserExpired",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetUserInfo = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetUserInfo",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetBankList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetBankList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetWithdrawalBankCard = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetWithdrawalBankCard",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetWithdrawalLeaderboard = function (e) {
        return ve({
          baseURL: Pe.clientCfg.ApiUrl,
          url: "/api/webapi/GetWithdrawalLeaderboard",
          method: "POST",
          data: e,
        });
      }),
      (Re.Get5DtypeList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get5DtypeList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetGame5DIssue = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetGame5DIssue",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Get5DEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get5DEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetNoaverage5DEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetNoaverage5DEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Get5DOneEmerd = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get5DOneEmerd",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetGame5DBetting = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetGame5DBetting",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetMy5DEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMy5DEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetOddsList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetOddsList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSlots = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSlots",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetGameUrl = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetGameUrl",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GamePlayBack = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GamePlayBack",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetActivityList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetActivityList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetActivityDetails = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetActivityDetails",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetTypeList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GettypeList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GameIssueNo = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetGameIssue",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetNoaverageEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetNoaverageEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetMyEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMyEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GameBetting = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GameBetting",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetUserAmount = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetUserAmount",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetCompanyDepositBank = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetCompanyDepositBank",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetCompanyDepositBankOrder = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetCompanyDepositBankOrder",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetCompanyDepositBankOrder = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetCompanyDepositBankOrder",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.UpCompanyDepositRechargesBankOrder = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/UpCompanyDepositRechargesBankOrder",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetK3typeList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetK3typeList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetGameK3Issue = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetGameK3Issue",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetK3OneEmerd = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetK3OneEmerd",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetNoaverageK3EmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetNoaverageK3EmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetMyK3EmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMyK3EmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetK3OddsList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetK3OddsList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetGameK3Betting = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetGameK3Betting",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetNewsList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetNewsList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetNewsDetails = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetNewsDetails",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetHomeWebSite = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetHomeWebSite",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetWithdrawalWallet = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetWithdrawalWallet",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.AdminLogin = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/AdminLogin",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetCustomerServiceTypelist = function (e) {
        return ve({
          baseURL: Pe.clientCfg.ApiUrl,
          url: "/api/webapi/GetCustomerServiceTypelist",
          method: "POST",
          data: e,
        });
      }),
      (Re.GetMyHistoryEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMyHistoryEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetMy5DHistoryEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMy5DHistoryEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetMyK3HistoryEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMyK3HistoryEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetUsdtTypeList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetUsdtTypeList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetRechargesUsdtOrder = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetRechargesUsdtOrder",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetWithdrawalUsdt = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetWithdrawalUsdt",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSlotsType = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSlotsType",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSlotsTypeNames = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSlotsTypeNames",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetRechargesUpiList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetRechargesUpi",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetRechargesUpiOrder = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetRechargesUpiOrder",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetWinsUserAmount = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetWinsUserAmount",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetFattyPayBankNames = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetFattyPayBankNames",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.NewSetRechargesUpiOrder = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/NewSetRechargesUpiOrder",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.UpdateRechargesUpiOrder = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/UpdateRechargesUpiOrder",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetWithdrawalCpf = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetWithdrawalCpf",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.UpBankOrder = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/UpBankOrder",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetWithdrawalWaveWallet = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetWithdrawalWaveWallet",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.NewPromotion = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/NewPromotion",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.PromotionReceiveList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/PromotionReceiveList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.PromotionMytem = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/PromotionMytem",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.PromotionTutorial = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/PromotionTutorial",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetRechangeRemark = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetRechangeRemark",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetGoogleVerify = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetGoogleVerify",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetGoogleVerify = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetGoogleVerify",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.VerifyGoogleLogin = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/VerifyGoogleLogin",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetlongDragon = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetlongDragon",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetTRXtypeList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetTRXtypeList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetTRXGameIssue = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetTRXGameIssue",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetTRXNoaverageEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetTRXNoaverageEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetTRXEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetTRXEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetTRXMyEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetTRXMyEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GameTRXBetting = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GameTRXBetting",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetMyTRXHistoryEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMyTRXHistoryEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSitemessageList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSitemessageList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetContinuousSignInRecharges = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetContinuousSignInRecharges",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetContinuousSinIn = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetContinuousSinIn",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetContinuousSinInList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetContinuousSinInList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetBannerTypeList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetBannerTypeList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetProductList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetProductList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetProductRules = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetProductRules",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetProductOrderList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetProductOrderList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetIntegralLogList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetIntegralLogList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetProductOrderDetails = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetProductOrderDetails",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetProductOrder = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetProductOrder",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetTouChnGo = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetTouChnGo",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetRechargesTouChnOrder = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetRechargesTouChnOrder",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Get4dgcSingaporeList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get4dgcSingaporeList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SWZGameBetting = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SWZGameBetting",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSWZGEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSWZGEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSWZGMyEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSWZGMyEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSWZGMyHistoryEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSWZGMyHistoryEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSWZGOddsList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSWZGOddsList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetVietnamList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetVietnamList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetVietnamIssue = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetVietnamIssue",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetDayList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetDayList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetVietnamEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetVietnamEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.VietnamNorthBetting = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/VietnamNorthBetting",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.VietnamCenterBetting = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/VietnamCenterBetting",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetMyCenterEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMyCenterEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetMyNorthEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMyNorthEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.VietnamSouthBetting = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/VietnamSouthBetting",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetMySouthEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMySouthEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetNorthOddsList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetNorthOddsList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetCenterOddsList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetCenterOddsList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSouthOddsList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSouthOddsList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Get16typeList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get16typeList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Get16GameIssue = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get16GameIssue",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetNoaverage16EmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetNoaverage16EmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetGame16Betting = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetGame16Betting",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetMy16EmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMy16EmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetMy16HistoryEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMy16HistoryEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Get16OddsList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get16OddsList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Get16CountryTypeList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get16CountryTypeList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Get16CountryGameIssue = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get16CountryGameIssue",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetNoaverage16CountryEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetNoaverage16CountryEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Get16CountryOddsList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get16CountryOddsList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Get16CountryCodeList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get16CountryCodeList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetGame16CountryBetting = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetGame16CountryBetting",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetMy16CountryEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMy16CountryEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetMy16CountryHistoryEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMy16CountryHistoryEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetTransactionsTypes = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetTransactionsTypes",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetVietnDayList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetVietnDayList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetVietnList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetVietnList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetLivetypeList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetLivetypeList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetLiveGameIssue = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetLiveGameIssue",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetLiveNoaverageEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetLiveNoaverageEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetLiveEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetLiveEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetLiveMyEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetLiveMyEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GameLiveBetting = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GameLiveBetting",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetForPwdState = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetForPwdState",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Get4DList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get4DList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Get4DEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get4DEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Game4DBetting = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Game4DBetting",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Get4DMyEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get4DMyEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetUrlAddress = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetUrlAddress",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetJsWztypeList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetJsWztypeList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetJsWzGameIssue = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetJsWzGameIssue",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetJsWz4DEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetJsWz4DEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GameJsWz4DBetting = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GameJsWz4DBetting",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetJsWz4DMyEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetJsWz4DMyEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetJsWz4DMyHistoryEmerdList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetJsWz4DMyHistoryEmerdList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetWZ4DGOddsList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetWZ4DGOddsList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetJsWZGOddsList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetJsWZGOddsList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.EditWithdrawalCPF = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/EditWithdrawalCPF",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetAllwallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetAllwallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetAllwalletsList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetAllwalletsList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetLotterywallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetLotterywallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetAGwallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetAGwallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetTBwallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetTBwallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetCQ9wallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetCQ9wallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetHBwallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetHBwallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetMGwallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetMGwallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetPGwallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetPGwallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetJDBwallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetJDBwallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetDGwallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetDGwallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetCMDwallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetCMDwallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSabawallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSabawallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetIMwallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetIMwallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetJILIwallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetJILIwallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetEVOwallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetEVOwallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.Get365wallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/Get365wallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetV8wallets = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetV8wallets",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.NewSetRechargesUsdtOrder = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/NewSetRechargesUsdtOrder",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetOrderState = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetOrderState",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetWealthState = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetWealthState",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSafeInfo = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSafeInfo",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSafeUserAmount = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSafeUserAmount",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetSafeInto = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetSafeInto",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.SetSafeBack = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/SetSafeBack",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSafeAmount = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSafeAmount",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSafeList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSafeList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetSafeLogList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetSafeLogList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetPopularGame = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetPopularGame",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetPopularGameList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetPopularGameList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetGameList = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetGameList",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.NewGetHomeWebSite = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/NewGetHomeWebSite",
            method: "POST",
            data: e,
          })
        );
      }),
      (Re.GetUserRealName = function (e) {
        return (
          (e.language = localStorage.getItem("lang")),
          ve({
            baseURL: Pe.clientCfg.ApiUrl,
            url: "/api/webapi/GetUserRealName",
            method: "POST",
            data: e,
          })
        );
      });
    var Ge = Re;
    i["a"].use(ke.a, pe.a),
      ye(pe.a),
      (i["a"].prototype.$api = Ge),
      (i["a"].prototype.$baseConfig = Se);
    t("499a"), t("f0e6");
    var Le = t("313e"),
      De = t("a925");
    (i["a"].prototype.$echart = Le), i["a"].use(De["a"]);
    var Ne = new De["a"]({
      locale: localStorage.getItem("lang") || "en",
      messages: {
        en: t("6f10"),
        "zh-CN": t("104d"),
        vi: t("b443"),
        my: t("5374"),
        id: t("a268"),
        tha: t("ed95"),
        md: t("b214"),
        bra: t("b7d1"),
        hd: t("a3d8"),
        rus: t("3af9"),
        ph: t("178a"),
      },
      silentTranslationWarn: !0,
    });
    (i["a"].config.productionTip = !1),
      new i["a"]({
        router: R,
        store: L,
        i18n: Ne,
        render: function (e) {
          return e(c);
        },
      }).$mount("#app"),
      R.beforeEach(function (e, a, t) {
        var n = e.meta.type;
        "login" === n
          ? localStorage.getItem("UserInfo")
            ? t()
            : t("/login")
          : t();
      });
  },
  "5b0e": function (e, a) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA01pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKDIwMjAwODE4Lm0uMTAxMiAyMDIwLzA4LzE4OiBmODJmNDMzNzYxKSAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkZEQTkzNjU3MEE0OTExRURBODFDRERGNDcwNEUxQzQ0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkZEQTkzNjU4MEE0OTExRURBODFDRERGNDcwNEUxQzQ0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkRBOTM2NTUwQTQ5MTFFREE4MUNEREY0NzA0RTFDNDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkRBOTM2NTYwQTQ5MTFFREE4MUNEREY0NzA0RTFDNDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6NQ/6kAAAIEElEQVR42txaW2xURRg+e2m7La29LKVohErTC9QSvLz4pKlUggIpqCgYQBAvMZEHBZGLGIhAEFG8xWiUm0AUbABRYwy3BF+8BB5sfLFV5NJWYkNStu22hXb9vuNM8/f07J5zdrc8OMmfmTNn5sz/zX+d2fXV1NQYsVjMSGfB9/JR7QkEArUDAwNtoPM+n+/P69evtwaDwXPXrl1rQX2hr6/vckZGRmdPT4+RnZ1t9Pb2Gphj9Pf3G7m5uWaNeY7rNTY2GkEj/aXA7/efAQNl3CC0bwJzVWyDeQOgjFAoZG4emO9AfQH13xh3LjMzsxXPTfjGRdS/oO5xu2i6gRQAwFnUE7SUWZO4swSh+1jQlw+aDKCT+Q5AzDFq7GXU8zHs1I0GMghCqNh6VKdBd6A9Fu8rUI9BzTFhtLMIiuoEiZggdI0xJRizA1TmRvWDIwUC5TXQ64qJU2SOqqXULYC+IrQnAMQY2EY5nsfCXsphP5UYN1nNuxV2lI121MlWgiMJQg6yMNIP+odEcJFIZPA9DD+rsLCwC46BYIEtYxzq352Y8N8IEFZA9EaUEHcdO272sZ2VlWXk5OT04n2rGD+e7+2IakhKVSJ2INaBNiaapI1eqZgJhEaunQDtBe8vYdw41Tc+3reghgYkl5JEhoHA4uuw6EY7ddK7J7xVLp63o94NmkrmtcdSHu6i+Eyp/AbHaKdAyRJMshIpxEfPWLyTCcJqkNIFi75MMMEYMZHPAPAkGLoPDJ3WKoNyXmxGKedrANaN0qrlWSKY/IMTCM2Q1W2q3a4DTZR9YGalAME+KZHx2ttFo9FBxlPyWlioAdXtgolXQZtsUhRzQaqLBKPAXZGSUirylwA6RCK0ke7u7oDydCm7X9rEcdR3iwUeBh22DqS+U2+bm5uHqYIqP5aUlCwKh8MbYKhhjP0MQFZyDoErW/lD2NhteM6EVKJIZbaijyJZibUHvAKxi9gPoDpupz4iHsT9IHZ4L2LFXgDIQztCt8t5VCH1DUqkB98OoR0AgD48L4X0XlaB9SE8P473jW7jiB2IWQThGKD88T9NqakS0d5Mpil47sS7S1rd0EcX3CE2bRL4+hXjl+g+v0cQq1F94xQnEI2dbG3YM4kxgS6VtTZ4NXYa4k0D+rcLh8B1diKAbkwEJB6ILU4MUsfb29uHqVxxcbGRl5enY84wx0C10u6U0kH7ghhTwxpAXgLQuWhGtdQBZm08IEmDwO4YLS0tJlmB8F15ebkxevRoc9f12UQGN/2s2j9pG8TYMo5X4xpAk/DJK0rteuyMPWkQPOFpEHaFpz8yOWrUKKOtrY0Gb4KhBLV9WALpDLEZZTqvUik+ncFlZtDMVKwSSQkEmYsHQsQQs838qqmpyWSMR1obz/c1aIZIf/ZK6amSaZf92oFYlS4QdkUbtU15GzRTBmHEmM2UIOckSuPDcUC84QZEa2urKxD6yCvds00couG+KJ6ZSczVLlvHmXhA9gkQUXx4hRMI478TjwmC5KaoQFaod9Um6q+1HAG+1CA4VttRvGMvgUwXu3Ya9JbTGZkGevXqVU/qVFRUdBRALmHu+7ALH12xkMhqGxCPWd1zIr78QHtAnBvuBb1npwrWqK3PAS4kd0t1dfVZuN9ZyF5zAOIFuGF/WVmZPmR9hGGbxZT9GsRgHqVijBOQeaiPqedsTFgGOuSk74lSEFkqKipOgPk76amUkS/EJvSrjTgCes4iiQVe0p3BMQrpNAGG6Oc4gXFTKisrT0ISE+lxuA6YX4yN26fSdWbO9WL4QaskrAc0V5cPCsz3VjDJXqdWVVWdLCgoqGUWTBAIiEvgbveovOowaLYYfoDZbLIg7FKU6VYwEGtDouAWB8SJ/Pz82q6uLn1r8hQksZtOIg6IealK3075hoBBeUSdDIfZiJXokmETxwHifqqTcpevYMoulYoc8gLCizbEizAE851wzSYYfPhRnTcxGDIJlMYIRo+B4amUBP0+DPwTzNmqAhltbo5Y4wvQ/HTd1yZyBw+CvrVI5qCUCCVAIqM45R1DXUdvpO6rPgU9qyI4JSFBfO4EwqttOvm1mRYwjLRrtY2ofMmP9hHYQJ3+PQP1DgB6hkdYgPvQIgmCeCLdv2W4CQZDwIBRRuDl4n0Iu16vVQwgdgLc0wrECoB83iuIZDyl23utmfKICzDbCIYqBca7oUIb+OMM6g8gmaXsh40QxJsjLQnPl9i8dAANAQNartKM9ZBCKTzVMnWSWy5BoL3fLYhk45anm0YwTDAnxKLbQqHQJhUfYjzOovDCbpsYs9su7XB7MTEiQJSR10nJoL0G/btAOfBge9C1RozfD1qSxLXsyAKx3G0dFV2LsXgz+hdJELCfBTwFJsOY1zlJ/9ADpustYG4WF3D7EDQXdHR0mMEz0ckuXWBS+sVKgfnK0se73IVg4i5E/3dgPzVM4RljNHkxaLdgUv4NEUzNxmKrUN+D+hSYfjcSifjC4fDPOAUGOjs7p7S3t9dKhpCLmSlOossEL0lqWoAoMFt0pGfKgmPtOF4+M4WHmhXzUs7KmFsQbsGk/Z8P6oK6H4uS0wAY6LKe8JKNFYnApA0IFyEIm4X60/lfFwFm6O8j8icvL17C7kZdPmIx3eFLt9TVWkO+GyS6ODd+qYjdB+lofZoC+k0tnA5QA8rbluqLmkEgaTL4wRqg+K+GmI95SyyWjXb1SCSKSptCJhCnH2WSLD3IyxbxTzVYaMxIgcAaHaCPtS4b/4fyrwADAIyg4LaSsKTUAAAAAElFTkSuQmCC";
  },
  "5c0b": function (e, a, t) {
    "use strict";
    t("9c0c");
  },
  "5e11": function (e, a) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAD4ElEQVRoBe1YzU4bMRD2IsIp5M4L9BKu5RUqwgkEp4pDxdv0wiXHQCvx26inShWiIjwAlQg9gBSpOZBzDhGJyAml/oYdy961d9chaUKbkXZtz4ztz2N77LEQSVQsFgdSPmBCPkCFT3t7EBhEAmgaXFmYizK47BSwgjWdYzRIu90u9RfYEH3Y2REBtKLtBEHwjOr48FD8OD8X7XZb6cxDaqm0oTS0zHctb8/ChllI1n62LZTtTZlcNQiTnVwik9/d3SVrOaRbkg9otq8r+TlHvZexnSYe3N7exiwLeKDd3V3A/Mh9b8U0LYynpycy/bysVf28v8+VU1OsfbSXqggFOXGB99J/eYVOp0PwLms1SrH2o9SwGMXKUhVrtZpVQWcuLCzELNOQLYBp+45U65PIYJUnobMhBg87AMidu2Bgs1WpVNJNZeRdstCe67IzRQ3bZjBa8yzIljEqQW4dBUkoj4zgvyT5bwVfBM6to+/wXzc3Qi8j//PqSvWlyxQzzEzOREcHBwoM9jfOMibsc/1cs+131uV0K+tplWUxhd40tmowHwN0NMySxYEf+nY0rPw7j2CWvsgCzsNWtpoks3YKTwiPCM+IyfL54IHhiZ2EmaeVgBXBBJ6LdBlWHl9uJT/mIdbhYm20trZmYxPPJoPLR8fyM2iAzTEqCkdimGtUbVM7MJeEjzkRuBsRJXlE1vFM30B/ct7UE61TPbacnJpDCibTQfX0VJyfnSnMWAAPDw9U7vf7xvF5eXEh9MNJVQoz/+gk39TrotlsqtHCZDqdHh+rYuv+3rhhKEGYyTTJcntG63mXx+YqGMnYnZ3TXfsOzeWuMRLrgZO1g7QDh0011iOTO5mlMwtELGC9pER0bMVh6xltJXk6BLm/5ccduVJu0CV38bPWAwYj4OaKrpTcBa6R5XI51QHKRghgVnfCelnq4aYJDOGrAfpJjJrggsjiqDRtBEzhoIERWGOEkIMig2kDz3i0+BVYifhChALipbwMa0Q+nyfhtP16vZ5YXFwErJ78KKPiAskg1F+rVShMOykL6zOANYZIcqrBhw9owEjYk9zoVA+Ewf1fA0CsgDc5PV5gS+AtD7GD/p7HMqR420Msob/vsRxxBdrVXy9ZlpZ6z0DSHkmSpQEZVj7bxMNablT19HMgtU2s8cfHR7G0tCTera4a+niRr19fE29jc1MUCgUlx3PDl5MTKheXl8XblRUlQwbPD61WS+RyOfF+e9uQpRX0JfQqT2J9E3/DaCuVStqgJybXsBHWKJBXfxvlAXnFA3xTHEfqGw/wADjNGpHxPX1cqXdExgOYpX/DAn8AKXBqTEs+E1EAAAAASUVORK5CYII=";
  },
  "6c7c": function (e, a) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAHK0lEQVRoBe1aXUxURxSeuz/s3l3+1VIoIBrbVKxUQxqFWiApxNY+KLZAGx6kpE820aRRa9IXE5I21SbSB5+oqVTTYGPKkuBPIi+isKaAP0tSSCSCVqhEfhfYXWV3p+fcdW7uvXt393IJrk28yTJzZ85855w558yZmQshsZ5dn+yi+Fh566KMVmiFP9u2b6OyDuULhw1+v19GNTo6GqIrLy+n2Ml+wEdGqEQLvTPmrNfAKtpLPokvZkxZiaNVxTWZTEJ7GDyKW1FRQXkb/09Yp7IBpf7tzBkmPD3/x3mZriblAJvd1uNZ8LyH7dPT02Tg7wGjlEYcwKfzOdRLHzpaHSQQCAg0druduOfcARCR+Lw+QX7hDzQMzM/Nvy1FUqurKs3z/I+g7CiALELZC1w+VBusvw04HNxcsBk9TjY7qohgxffF+YSKz+eLPghRlQ9v579QRcdGGOBXDigsLDRHHIAd9fX14hhNekRFk3YCmmffvn10cnJSjJnO6500JTWFhumBnsl8O1IJRpxCBqp+L+XM6qtWryKzM7OcEHNJSUldrEOtPPHTCYE4rA/8pgB06YDfAogwDrL/HEYU9waQ7C+pLZlRp6amBP88duyYjqXnuVqgusyzzjY30z8vXGA8hBJX15jeFmmagIEI1uZwiHVpBdegML+JBKhsx+hjCUIKyuoYjSCEPHEoQbS845qA2uC6gE6NdbBN7CUXwNUX7udck5OT0zmO+8xoNhYmmBPyDUZDGke5hAANTAYWAw+eLj7tIkFyxe1239MiKAGpHFu2bokZdpHC8cDBA2FTJmoA4K4599xmTZLEIEpNSyWQBQRs0YcNnOFIdU11jKGxu2dmZjDleyJSQvhvASMGcdk6evQodblcEadsaGiIwjpC161fFzK8nf8mIvCrDt0zUFVVZQQPewI/uvOjnXRj/kZhvsFWdbpB2cC8vDwrRu3CwgJbHcRy957d1GqzXmK0ukoEDwaDIqiygispRPubusAzMjLseyr3iJiuu3eFnZyzu1tswwpM3YwuBrm5uRWdnZ0CmMfjodevXZMBsxfUMhoDMZKjEfW7XGRHSUk0kqX3KaeISawsdU8RirSiRkYGK+6myGRFAw0ZLPcRE44aUGJiYqkpwVRmNpsLTQbT60ajMS1Igwtw7ph49uzZLf+i3wnp0gFpNaqryrAh/H9B4xa8W0AbGxtpf3+/aj64P3yfnj13lpaWlrJNgBM8LLLA2dnZPAK3tbWpAkbKw6x9bGyMJiYlUlgEv5RKLHJEcMjJBNSV9i+5vjZvLe6UX5ufn3+Cg8VIzsnOWTY4Ag7dGyL+oL8Z6/iIDIwm2aEy1Kvjr8EgQIqHUpHByMiIDrjwIZs2bSKchfuK9YgMYOe2CoxE+vr6WN+SSq/XS7LeyCKPxh595532Pow4GNz0Ihoc0yPunCcmJlS9CgBpR0cHrfm8JuSmPD+yYcMGixI4osuUlZWZbvbcrOWCXDnlaCFHuAzw8xQAwE3VJHjbbdjZdvEWvgkOI24l8Kt3rTMQ0QRaAaR06enpyZ6nnko4QuwGc70DfVlgpgChZAxMeJsYSVvG6ow2iAifdFxc62lpaSng2JfRsfPW5dFTp07Rx48fKxM3ffDwAT1+4jjNzMpkTn0O82VchbfZbM0o+JFvj4QJHK0Bt4p1dXVMkR/iogTM+lV7op0ODAyoyoqbZdxqdt+4QXt7elRpcNeIE4AT8UKVWLNmzVZk3NTUFCbY4OAg/fX0adoFguMlQKynoaEhZAm4UNCjhJhzljI4NTV1/dz8HCkuLpYNg/MmcXZ1keqaGmKDS1QtT1FRUYjMT7ZCJeqdmBqeLgXglH0fwbq7u0l+fr6IC0FJYN9DrFbtsel0OkPjTeS2CPQiKrFiIJbrYP81OC3FJQbYBP2vVyGmRLzzwIvKxP9CJr71UmZiZol4lZotgId9OON9DILuhd8OSmiOUmhcfeDChVgtVmKxWoTVCGKV4GYbcgKBaw6C94TYJn1gazsLbb2cgeuwmC0tQDMi7ddVxyM3BOn3sEr4cKUoKi6iJxtP0uGRYdUNPDv+6S3xDqe1tZXW1tZSuGkNJTcb32dNsn6wZAXg9vscCl1VXUXheLgiAmtRtLe3V7yEhcms16QICP87Cn/nzp24Ca5UDm8QUCZQokGpRFgMAOFCSUmJ7dLF5V1QKhkt9x2+MhDYqtyDb7tvSbHEUzFrhIC6DLtEMjw8zJriXra3t6PwcDbiHJqEgWvDdjTZ/q/3U7hlipsr4ccIvKRCWeC72WFNwjMiPC2Bz52BwUEEqNxbSVvOt9DZ2dkVUwg2dvTQ4UM0JzcnJDRcRUBMfspkUivDYkCNCNsAKBsKzAF7IQdsh1J2x4E5IDMzMywPwOkL/yeBeH1eIR/A12wyPj4Ow2UPBf8YBPe9CpdVLR635ybU5clCRv7q5eWZgf8ApaJR7WH6Y/wAAAAASUVORK5CYII=";
  },
  "6f10": function (e, a, t) {
    e.exports = {
      homepage: {
        loadText: {
          loadMore: "LoadMore",
          loading: "Loading",
          nomore: "No More",
        },
        loadingText: "Loading",
        login: "Log In",
        numberFormat: "Phone number format",
        mobile: "Mobile",
        mobileNumber: "Phone Number",
        pwd: "Password",
        oldpwd: "Old Password",
        pwds: "Confirm Password",
        pwdsTip: "Inconsistent Passwords",
        register: "Register",
        registerTip: "Already have an account, log in~",
        forgotPwd: "Forgot Password",
        customerService: "Customer Service",
        resetPwd: "Reset Password",
        verificationCode: "Verification Code",
        recommendationCode: "Recommendation Code",
        agree: "I Agree",
        privacy: "Privacy Policy",
        submit: "Submit",
        network: "Network Abnormal",
        tips: "Prompt",
        remark: "Remark",
        close: "Close",
        full: "Full screen",
        zoomOut: "Zoom out",
        signout: "Do you want to log out?",
        quit: "Want to quit this game?",
        enterGame: "Are you sure you want to enter the game?",
        cancel: "Cancel",
        confirm: "Confirm",
        success: "Success",
        cancelled: "Cancelled",
        fail: "Fail",
        del: "Delete",
        copy: "Copy",
        copySuccess: "Copy Succeeded",
        required: "It is Required",
        pleaseRequired: "Please Fill in the Required Fields",
        passwordError:
          "Password length cannot be less than 6, must be a combination of letters and numbers",
        pleaseEmail: "Please Fill in the Correct Email Address",
        informationTip:
          "Your login information has expired, please login again!",
        informationTip1:
          "Your account has been logged in elsewhere, please change your password in time!",
        noData: "No data available",
        presaleRule:
          'In order to protect the legitimate rights and interests of users participating in the presale and maintain the normal cperation order of the presale, the rules are formulated in accordonce with relevant agreements and rules of national laws and regulations.Chapter 1 Definition1.1 Presale definition : refers to a sales model in which a merchant provides a product or service plan, gathers consumer orders through presale product tools, and provides goods and or services to cons umers according to prior agreement1.2 The presale model is a "dep os it" model. "Dep os it" refers to a fixed amount of presale commodity price predelivered. "The deposit" con participate in small games and have the opportunity to win more deposits. The depos it can be directy exchanged for commodities. The depos it is not redeemable.1.3 Presale products: refers to the product relecsed by merchants using presale product tools. Only the presale words are marked on the product title or product details page, ano the products thot do not use the pres ale product tools are not presale products.1.4 Presale system: Refers to the system product tools provided to support merchonts for presale model sales.1.5 Presale commodity price: refers to the selling price of presale commodity. The price of presale goods is composed of two parts: dep os it and final payment.',
        more: "More",
        verificationTip:
          "Can it receive the verification code? Please contact customer service",
        symbolU: "USDT",
        newes: "Latest Announcement",
        upgraded: "The event is being upgraded......",
        gameTit: "Balance recovery failed",
        gameLeft: "Try Again",
        gameRight: "Manual Recovery",
        tab: {
          hot: "Popular",
          lottety: "Lottery",
          fishing: "Fishing",
          electronic: "Slots",
          physical: "Sport",
          realperson: "Casino",
          chess: "Chess",
          smallgame: "flash game",
          safe: "Safe",
        },
        home: {
          lottetyTitle: "BIGGEST UPCOMING LOTTERY DRAW",
          recharge: "Recharge",
          balance: "Balance",
          customerService: "Customer Sevice",
          lottety: "Lottery",
          wealth: "Wealth",
          leftTime: "Left time to buy",
          min: "MIN",
          sec: "SEC",
          newTitle: "NEWS",
          newCenter: "News Center",
          newDes: "News Details",
          wrTime: "WEBSITE RUNNING TIME",
          days: "DAYS",
          hours: "HOURS",
          minutes: "MINUTES",
          seconds: "SECONDS",
          pengguna: "Player",
          jumlahTaruhan: "Total of betting",
          Online: "Online",
          penarikanHari: "Todays withdrawal",
          gin: "in",
          got: "Got",
          GameName: "Fishing Game",
          popular: "Popular Recommendation",
          platform: "Platform Recommendation",
          Game1: "5D Lotre",
          Game2: "Win Go",
          Game3: "Slots",
          Game4: "K3 Lotre",
          Game5: "Casino",
          Game6: "Sport",
          Game7: "16 Selections",
          Game8: "Country",
          Game9: "Singapore 4D",
          Game10: "Vietnam Lottery",
          Game11: "Magnum 4D",
          Game12: "Damacai 4D",
          Game13: "TOTO 4D",
          Game14: "Rapid 4D",
          Game1Tip: "Guess number/high/low/odd/even",
          Game2Tip: "Guess number/Green/Purple/Red to win",
          Game3Tip: "Lianliankan/Lianliankan/Lianliankan",
          Game4Tip: "Guess number/high/low/odd/even",
          Game5Tip: "Baccarat/Dragon Tiger/Roulette/Sic Bo",
          Game6Tip: "Real time event/all in it",
          Game7Tip: "Guess number/high/low/odd/even",
          Game8Tip: "Real time event/all in it",
          Game9Tip: "Guess number/high/low/odd/even",
          Game10Tip: "Guess number/Green/Purple/Red to win",
          Game11Tip: "Guess number/high/low/odd/even",
          Game12Tip: "Guess number/high/low/odd/even",
          Game13Tip: "Guess number/high/low/odd/even",
          Game14Tip: "Guess number/high/low/odd/even",
          Game6t: "Sabah",
          nextDraw: "Next Draw",
          playNow: "PLAY  NOW",
          howWorks: "How It Works?",
          game_title1: "Choose A Game",
          game_title2: "Pick Your Numbers",
          game_title3: "Bet Amount",
          game_title4: "Get Bonus",
          game_First: "Frist Step",
          game_Second: "Second Step",
          game_Third: "Third Step",
          game_Fourth: "The Fourth Step",
          list: [
            {
              title: "Choose A Game",
              txt: "You can choose to play 1 minute, 3 minutes, 5 minutes, and 10 minutes lottery games.",
            },
            {
              title: "Pick Your Numbers",
              txt: "Choose your lucky number or color.",
            },
            {
              title: "Bet Amount",
              txt: "Choose the amount you want to bet and confirm.",
            },
            {
              title: "Get Bonus",
              txt: "When you select the lucky number of the current period, the system will automatically add the bonus to your balance",
            },
          ],
        },
        index: {
          Charttren: "Chart tren",
          Total: "Total",
          walletBalance: "Wallet Balance",
          recharge: "Recharge",
          withdraw: "Withdraw",
          lotteyRule: "Lottey Rule",
          iKnow: "I Know",
          big: "BIG",
          small: "SMALL",
          green: "Green",
          violet: "Violet",
          red: "Red",
          selectGreen: "Select Green",
          selectViolet: "Select Violet",
          selectRed: "Select Red",
          randomBetting: "Random Betting",
          gameRecord: "Game Record",
          myGameRecord: "My Game Record",
          period: "Period",
          blockHeight: "Block Height",
          blockTime: "Block Time",
          hashValue: "Hash Value",
          number: "Number",
          size: "Size",
          color: "Color",
          result: "Result",
          sum: "SUM",
          high: "High",
          low: "Low",
          odd: "Odd",
          even: "Even",
          money: "Money",
          multiply: " Multiply",
          presaleRule: "Presale Rule",
          presaleRuleTit: "Please check that I agree to the pre-sale rules",
          totalPrice: "Total Price",
          Select: "Select",
          SelectCon: "Betting Content",
          firstPage: "It s the first page",
          lastpage: "It s the last page",
          periodDetail: "Period Detail",
          orderNumber: "Order Number",
          contractMoney: "Contract Money",
          contractCount: "Contract Count",
          delivery: "Delivery",
          fee: "Fee",
          openPrice: "Open Price",
          status: "Status",
          amount: "Amount",
          createTime: "Create Time",
          BettingAssistant: "Betting Assistant (Last 100 period)",
          Missing: "Missing",
          AvgMissing: "Avg Missing",
          Frequency: "Frequency",
          MaxContinued: "Max Continued",
          PleaseInteger: "Please enter an integer",
          Odds: "Odds",
          publicQuery: "Public chain query",
          howPlay: "Rules to play",
          distancedraw: "Distance draw",
          multiple: "Multiple",
          numberBets: "Number of bets",
          reset: "Reset",
          time: "Time",
          lotteryTime: "Lottery time",
          notPressed: "not pressed",
          pressed: "Pressed",
          bedrawn: "To be drawn",
          awarding: "awarding",
          periodNmu: "Betting Period Number",
          lotteryNmu: "Lottery Number",
        },
        myProfile: {
          title: "My Profile",
          profilePhoto: "Profile Photo",
          nickname: "Nickname",
          modifyNickname: "Modify Nickname",
          newNicknameTit: "Nickname",
        },
        about: {
          title: "About",
          Games: "Game",
          privacypolicy: "Privacy Policy",
          disclosureagreement: "Risk Disclosure Agreement",
        },
        privacypolicy: {
          title: "Privacy Policy",
          agree: "Risk Disclosure Agreement",
        },
        keFuMenu: { title: "Costumer Service" },
        recharge: {
          title: "Recharge",
          selectRecharge: "Please Select a Recharge channel to Recharge",
          next: "NEXT",
          previous: "Back",
          rechargeAmount: "Recharge Amount",
          rechargeAmountRangeIpt: "Enter or Select Recharge Amount",
          rechargeAmountRange: "Recharge Amount Range",
        },
        rechargeChack: {
          title: "Recharge",
          totalAmouunt: "Total Amount",
          paymentMethod: "Payment Method",
          localBank: "Local Bank",
          enterAmount: "Please Enter the Amount",
          theAmount: "The amount must be an integer of 10",
          accountName: "Account Name",
          bankNumber: "Bank Number",
          bankName: "Bank Name",
          paymentAmount: "Payment Amount",
          orderNumber: "Order Number",
          creationTime: "Creation Time",
          transferAmount:
            "The Transfer Amount Must Be Filled In In The Order You Created It,Otherwise The Deposit Will Not Be Successful",
          transferAmount2: "",
          transferAmount1:
            "Note: Do not cancel the deposit order if the money transfer is completed",
          depositAmount: "Deposit Amount",
          upImgTitle: "Please upload a transaction recepit containing UTR",
          upFormate: "Only upload pictures in jpg,jpeg,png format",
          selectFile: "select upload file",
        },
        touchngo: {
          title: "Touch N Go Recharge",
          name: "Name",
          mobileNumber: "Mobile Number",
        },
        rechargeRecord: {
          title: "Recharge Record",
          unpaid: "Unpaid",
          eazyPay: "EazyPay",
          success: "Success",
          others: "Others",
        },
        paymentMethod: {
          title: "Payment Method",
          totalPaid: "Total Amount to be Paid",
          choose: "Choose a Card",
          payNow: "Pay Now",
          topInstructions: "Top up Instructions",
          contentTmp1: "Please transfer to the above receiving bank account",
          contentTmp2:
            "Please correctly fill in the name and account number of the cardholder for verification",
          contentTmp3:
            "Submit each transfer once a time, please do not submit the order repeatedly",
          contentTmp4:
            "Please make sure to submit the order after finish the transfer, otherwise we will not be able to check your payment in time",
          waitingPayment: "Waiting For Payment",
          receivingTitle: "Receiving Bank Card Information",
          confirm1: "OrderNumber",
          confirm2: "BankName",
          confirm3: "AccountName",
          confirm4: "BankAccountNumber",
          confirm5: "IFSC",
          confirm6: "Branch",
          Required: "Fill in Ref No",
          Return: "Return",
        },
        promotion: {
          title: "Promotion",
          bouns: "Bonus",
          level_1: "Level1",
          level_2: "Level2",
          totalPeople: "Total People",
          contribution: "Contribution",
          code: "My Promotion Code",
          link: "My Promotion Link",
        },
        promoteRecord: { title: "Promote Record", People: "People" },
        bonusrecord: { title: "Registered Downline LVL 1" },
        redenvelopes: {
          title: "Gift",
          Hello: "Hello",
          Eveverone: "Evryone",
          des: "We Have a Gift For You",
          giftCode: "Gift Code",
          PleaseGiftCode: "Please enter gift redemption code",
          Receive: "Receive a Gift",
          Best: "Best Wishes to You",
          Congratulations: "Congratulations",
          already: "You have already received a reward of ",
          ACCEPT: "Receive",
          txt: "Hello, you can contact MZPlay Customer Service, use your account balance buy gift code, can share or send to your friend to claim",
        },
        withdrawal: {
          title: "Withdrawal",
          balance: "Balance",
          enterwithdraw: "Please Enter the Withdrawal Amount",
          withdrawAamount: "Withdraw Amount",
          fee: "Fee",
          toAccount: "To Account",
          rate: "Rate",
          totalBet: "Total Bet",
          withdrawTime: "Withdraw Time",
          dailyWithdrawal: "Daily Withdrawal Times",
          withdrawMoney: "Withdrawal Amount Range",
          payout: "Payout",
          bankCard: "Bank Card",
          selectBank: "Select Bank",
          addBankCard: "Add Bank Card",
          rechargeTip1: "Please Enter the Withdrawal Amount",
          rechargeTip2: "Please Select a Bank Card",
          rechargeTip3: "Please Input a Password",
          select: "Select",
          add: "Add",
        },
        withdrawrecord: {
          title: "Withdraw Record",
          applying: "Applying",
          agree: "Agree",
          refuse: "Refuse",
        },
        mission: {
          title: "Promote Mission",
          totalPeople: "Total People",
          totalAmount: "Total Amount",
          myTask: "My Task",
          invited: "Invited",
          validMenmber: "Valid Member",
          receive: "Receive",
        },
        addbank: {
          title: "Add Bank Account",
          bankName: "Bank Name",
          beneficiaryName: "Your Full Name",
          accountNo: "Bank Account Number",
          bankCity: "City",
          IFSCCode: "IFSC Code",
          email: "Email",
          bankProvince: "Bank Province",
          bankBranch: "Bank Branch Address",
          addBtn: "Add Bank Account",
          opsionalbankProvince: "Bank Province",
          opsionalbankBranch: "Bank Branch Address",
        },
        addElcbank: {
          title: "Add E-wallet",
          addBtn: "Add E-wallet",
          mobile: "Please enter your e-wallet mobile phone number",
        },
        addUsdt: {
          title: "Add USDT",
          addBtn: "Add USDT",
          type: "USDT Type",
          address: "Wallet Address",
          tip: "USDT Address Format Error",
          txt: "USDT (TRC) address format. The address consists of 34 characters starting with the letter T.",
          txt1: "USDT (ERC) address format. The address consists of 42 characters starting with the letters 0x.",
        },
        wellet: {
          title: "Wallet",
          withdrawalBalance: "Withdrawal Balance",
          historicalWithdrawal: "History Withdrawal",
          accumulatedWithdrawal: "Today Withdrawal",
          everyDay: "Every Day",
          order: "Times",
          tip: "Free cash withdrawal opportunity",
          myCard: "My Card",
          rechargeRecord: "Recharge Record",
          withdrawRecord: "Withdraw Record",
        },
        transactionrecord: { title: "Transaction Record" },
        newtutorial: {
          title: "Beginner Tutorial",
          chooseYour: "Choose Your",
          favoriteGame: "Favorite Game",
          pickLucky: "Pick Your Lucky",
          numberColor: "Number or color",
          SKIP: "SKIP",
          NEXT: "NEXT",
          confirmAmount: "Confirm your betting amount",
          getBouns: "Get Bouns",
          moneyWill:
            "Money will add into your game account,after you win the round ",
          youRecharge: "You can recharge",
          withdrawHere: "or withdraw here",
        },
        download: {
          title: "App Download",
          goBtn: "Go Download",
          des: "A Professional Lottery Game Platform",
          playNow: "Go play now",
          lotteryGame: "Lottery Game",
          btn: "Download",
        },
        tabbar: {
          tabbarList: [
            {
              id: 1,
              name: "HOME",
              imgAction: t("07d4"),
              img: t("2288"),
              to: "/home",
            },
            {
              id: 2,
              name: "ACTVITY",
              imgAction: t("b5ef"),
              img: t("5b0e"),
              to: "/activity",
            },
            {
              id: 3,
              name: "PROMOTION",
              imgAction: t("7268"),
              img: t("7268"),
              to: "/promotion",
            },
            {
              id: 4,
              name: "WALLET",
              imgAction: t("4c6e"),
              img: t("b2a5"),
              to: "/wallet",
            },
            {
              id: 5,
              name: "CENTER",
              imgAction: t("e636"),
              img: t("6c7c"),
              to: "/mian",
            },
          ],
        },
        mian: {
          title: "Center",
          historical: "Bet Record",
          funding: "History Transaction",
          loginLog: "Login log",
          message: "Message",
          balance: "All Wallets",
          totalwallet: "Total Wallet",
          refreshwallet: "One-click Recycling",
          loginOut: "Login out",
          menuName1: "ACCOUNT SECURITY",
          menuName2: "GOOGLE AUTHENTICATOR",
          menuName3: "PROMOTE MISSION",
          menuName4: "GIFT CODE",
          menuName5: "BEGINNER TUTORIAL",
          menuName6: "ABOUT",
          menuName7: "CUSTOMER SERVICE",
        },
        checkIn: {
          title: "Check In",
          attendanceRules: "Check In Rules",
          txt: "Sign in to get bonus",
          rule: "Game Rules",
          record: "CheckIn record",
          today: "Signed today",
          received: "Received",
          day: "Day",
          btn: "Sign In",
          Receive: "Receive a Gift",
          Best: "Best Wishes to You",
          Congratulations: "Congratulations",
          already: "You have already received a reward of ",
          ACCEPT: "Receive",
        },
        checkInDes: {
          title: "Check In Rules",
          checkInDay: "Check In Day",
          accumulatedAmount: "Accumulated Amount",
          checkInBonus: "Check In Bonus",
          rulesDetails: "Rules Details",
          tep1: "Users who have not recharged will not be able to receive.",
          tep2: "Starting from day 1, recharge is required.",
          tep3: "The accumulative recharge amount must meet the conditions and can only be claimed once a day.",
          tep4: "The platform has the final right to interpret this activity. If you have any related questions, please contact customer serviceï¼",
          tep5: "Attendance bonus will be randomly distributed after the 7th deposit",
        },
        historicalBetting: { title: "Historical betting" },
        loginLog: { title: "Login Log" },
        messageCenter: {
          title: "Message Center",
          readAll: "Read All",
          removeAll: "Remove All",
          delTitle: "Are You Sure You Want To Deleteï¼Ÿ",
          delall: "Are You Sure You Want To Delete Allï¼Ÿ",
          readall: "Are You Sure You Want To Have All Readï¼Ÿ",
        },
        messageDes: { title: "Message Details" },
        lottery: {
          drawResult: "Lottery Results",
          period: "Period",
          money: "Money",
          multiply: " Multiply",
          totalPrice: "Total Price",
          pleaseBet: "Please Place a Bet",
          election: "Reverse Election",
        },
        colorLand: {
          tab1: "Total Bet",
          tab2: "2 Same No",
          tab3: "3 Match No",
          tab4: "Diff numbers",
          title1: "Choose 2 matching numbers",
          tip1: "*If the opening number matches the 2 betting numbers, its a win. ( Except for three same numbers )",
          title2: "Choose a unique pair of numbers",
          tip2: "*Choose at least 1 pair same numbers and 1 different number to bet. If the opening number matches the betting number, its a win.",
          title3: "Choose only a 3 numbers",
          tip3: "*If the opening number matches a 3 betting numbers, its a win",
          title4: "Choose 3 matching numbers",
          tip4: "*If the opening numbers are in the same number of any three number, its a win",
          title5: "Choose 3 different numbers",
          tip5: "*Choose 3 or more numbers, the opening result in the three number is different numbers, If the number is same with the selected number, its a win",
          title6: "Choose 3 consecutive numbers",
          tip6: "*If the opening numbers are any of three consecutive numbers, That is the winning result.",
          title7: "Choose 2 different numbers",
          tip7: "*Choose 2 or more numbers,  the opening result in the two number is different numbers, If the number is same with the selected number, its a win",
          selectCon1: "Choose 2 matching numbersï¼š",
          selectCon2: "Choose a unique pair of numbersï¼š",
          selectCon3: "Choose only a 3 numbersï¼š",
          selectCon4: "Choose 3 different numbersï¼š",
          selectCon5: "Choose 2 different numbersï¼š",
          gameType1: "3 other numbers",
          gameType2: "3 consecutive numbers",
          gameType3: "2 same numbers",
          gameType4: "3 same numbers",
        },
        activity: { title: "Activity" },
        activityDes: { title: "Activity Details" },
        usdt: {
          title: "USDT Recharge",
          address: "TxID or Hash Address",
          Raddress: "Recharge Address",
          QRcode: "QR code",
          tit1: "buy currency",
          tit2: "transfer to address",
          tit3: "Seal the deal",
          tit4: "wait for arrival",
          tip1: "1. The recharge address is changed in real time. Please do not save the recharge address. Please re-acquire the recharge address before each recharge to avoid the loss of digital currency. ",
          tip2: "2. After copying the recharge address, please go to the digital currency wallet you are using to withdraw and transfer money. Do not recharge digital assets that are different from those of the selected blockchain, otherwise the assets will not be retrieved. ",
          tip3: "Recharge-withdrawal generally arrives automatically within 1-5 minutes, if not, please contact online customer service. ",
          tip4: "(Without any handling fee such as: withdraw 100 to account 100) ",
        },
        trx: {
          uset: "TRX",
          title: "TRX Recharge",
          address: "TxID or Hash Address",
        },
        promotionNew: {
          title: "Promotion",
          dataOverview: "Data Overview",
          myTeam: "My Team",
          upRecord: "History",
          tutorial: "Tutorial",
          myReward: "My Reward",
          totalComm: "Yesterday Is Total Commission",
          directComm: "Direct Commission",
          teamComm: "Team Commission",
          directSubord: "Number Of Direct Subordinates",
          totalTeams: "Total Number Of Teams",
          newToday: "Todayâ€™s Invite",
          newTeam: "Today New Team Size",
          weekComm: "Total Commission For The Week",
          totalComm1: "Total Commission",
          QRcode: "Long Press To Save The QR Code",
          copyCode: "Copy Invitation Code",
          copyLink: "Copy Link",
          rebateTable: "Rebate Amount Corresponding Table",
          agencyLevel: "Agent Level",
          teamNumber: "Total Referral",
          teamFlow: "Total Bet",
          teamRecharge: "Recharge",
          validDay: "Valid Members: Recharge Or Bet On The Same Day",
          commMethod: "Commission Calculation Method",
          Hierarchy: "Hierarchy",
          rebateRatio: "Rebate Ratio",
          firstMember: "Tier 1",
          secondMember: "Tier 2",
          thirdMember: "Tier 3",
          tierMember: "Tier 4",
          bettingTurnover: "Commission",
          agent: "Lv",
          upTime: "Pick Up Time",
          receiveAmount: "Receive Amount",
          operate: "Operate",
          details: "Details",
          date: "Date",
          directTeam: "Direct Team",
          people: "People",
          pleaseChoose: "Please Choose",
          totalBet: "Total Bet Amount",
          totalAmount: "Total Rebate Amount",
          Inquire: "Inquire",
          nickName: "Nick Name",
          runningWater: "Turnover",
          condition: "Status",
          enable: "Enable",
          disabled: "Disabled",
          personalFlow: "Personal Flow",
          personalRecharge: "Personal Recharge",
          rgistrationTime: "Registration Time",
          subordinates: "The Number Of Subordinates",
          year: "Year",
          moon: "Moon",
          day: "Day",
          selectList: [
            { name: "Tier 1", code: 1 },
            { name: "Tier 2", code: 2 },
            { name: "Tier 3", code: 3 },
            { name: "Tier 4", code: 4 },
            { name: "Tier 5", code: 5 },
            { name: "Tier 6", code: 6 },
          ],
          promoteMoney: "Promote",
          uid: "UID",
        },
        verify: {
          title: "Google Authenticator",
          unbind: "Unbind/Change Validator",
          downTit: "Download And Register",
          downTxt:
            "Please download Google Authenticator. If the installation is complete, click the bind button to bind your lottery account",
          bind: "Bind",
          downVerify: "Download Google Authenticator",
          vexplainTit: "Binding Validator Description",
          list: [
            {
              txt: "You need to save the 16-digit key generated from your lottery account to a safe place and copy the key",
            },
            { txt: "You need to open google authenticator" },
            { txt: "Add a game account, copy the 16-digit key input" },
            {
              txt: "After the addition is successful, a 6-digit, digital verification code is automatically generated",
            },
          ],
          vexplainNext: "Skip Tutorial",
          vbackupTit: "Backup Key",
          vbackupTxt:
            "Please donate an important key and keep it in a safe place, if the phone abandons this key, otherwise you will keep the life tester for 7 days.",
          vsafetyTit: "Verify Security",
          vsafetyTxt: "Send verification code to your mobile number",
          vsafetySms: "Mobile Verification code",
          vsafetyTip:
            "Authentication security unavailable? Contact Customer Service",
          vsafetySnsnull: "verification code Canâ€™t empty",
          loginTit: "Google Login Verification",
          loginTxt:
            "Account protection is enabled, please follow the prompts to complete the following operations",
          loginTip:
            "Please open the Alibaba Cloud APP or Google Authenticator (authentication device) in your mobile phone, please enter the 6-digit dynamic code",
          loginNum: "6 digits",
        },
        long: {
          title: "Long Continuous Trend assistant",
          newTitle: "Long term",
          betTitle: "My Bet",
          expect: "Periods",
          andDig: "Tie Big",
          andSmall: "Tie Small",
          andodd: "Tie Odd",
          andeven: "Tie Even",
          illustrate: "Explain",
          txt1: 'long dragon helper is an helper tool that tracks and counts the results of Win Go, 5D, K3, and the "odd and even" lottery, and can make quick bets',
          txt2: 'The probability of big, small, Odd, and even appearing in each period is the same. If the results 3 or more consecutive periods are the same, it is called "long dragon". Usually, the method of "cutting  dragon" or "follow the dragon" will be using  multiply betting.',
          list: [
            {
              name: "What is cut Dragon ?",
              txt: 'If result is 5 consecutive "ODd", you can choose "Even" to bet, this betting plan is called "cut dragon";',
            },
            {
              name: "What is Follow Dragon?",
              txt: 'If result is  5 consecutive "Odd", continue to select "Odd" to bet, this betting plan is called "Follow dragon";',
            },
            {
              name: "What is multiply?",
              txt: 'Double betting is a multiply betting method, which is a betting method to ensure continuous profit in the process of "cutting the dragon" or "follow the dragon".',
            },
          ],
          txt3: "The latest long dragon: This function will automatically update the game project with the same result in 5 period consecutive lottery draws, It is convenient for you to make decision whether to cut the dragon or follow dragon.",
          txt4: "My Bet: This feature makes it easier to view your bets and draw results.",
        },
        shop: {
          currentPoints: "Current Points",
          Redeem: "Redeem Now",
          pointsGo: "Points Mall Go now",
          commodityOrder: "Commodity Order",
          pointsRecord: "Points Record",
          title: "Points Mall",
          pointsAvailable: "Points Available",
          rule: "Points Rules",
          stock: "Stock",
          redeemed: "Redeemed",
          integral: "Integral",
          productName: "Product Name",
          exchange: "Exchange Conditions",
          name: "Primeiro e Ãºltimo nome",
          address: "Shipping Address",
          redeem: "Continue to redeem",
          checkOrder: "Check Order",
          addressEmpty: "Address cannot be empty!",
          ordered: "Ordered",
          delivery: "Delivery",
          completed: "Completed",
          orderDetails: "Order Details",
          orderTime: "Order Time",
          orderStatus: "Order Status",
          signTime: "Submission Time",
          signPhoto: "Sign for photo",
        },
        selections: {
          distanceDraw: "Distance draw",
          champion: "1st",
          runnerUp: "2nd",
          ndRunner: "3rd",
          outof1: "1/16",
          outof2: "2/16",
          outof3: "3/16",
        },
        lotteryD: {
          rules: "Rules",
          LotteryTime: "Lottery time",
          seal: "seal",
          stPrize1: "1st Prize",
          stPrize2: "2st Prize",
          stPrize3: "3st Prize",
          Finalist: "Finalist",
          consolationprize: "Consolation Prize",
          Doubledisc: "2sides",
          TraditionalDish: "Standard",
          Doubleside: "2sides",
          Choosenumber: "Fixed Place",
          FourDigit: "4D Standard",
          FourSlection: "4D Roll play",
          duplicatenumber: "Duplicate Number",
          numberFormat: "Wrong Number Format",
          Bigone: "Big",
          Smallone: "Small",
          Bothone: "Big+Small",
          Addbet: "Add bet",
          Randomnumber: "Random group number",
          Machineselection: "Machine selection",
          Enternumber: "Enter your desired number",
          Concatenatedcode: "Concatenated code (package group)",
          select1: "2D Select All",
          select2: "3D Select All",
          select3: "4D Select All",
          select4: "2D Positive Code",
          select5: "2D Special Prize",
          select6: "2D First Prize",
          select7: "2D",
          select8: "3D",
          SeventhPrize: "Seventh Prize",
          EighthPrize: "Eighth Prize",
          positivecode3: "3D Positive Code",
          SpecialPrize3: "3D Special Prize",
          FirstPrize3: "3D First Prize",
          SixthPrize: "Sixth Prize",
          positivecode4: "4D Positive Code",
          SpecialPrize4: "4D Special Prize",
          FirstPrize4: "4D First Prize",
          selectAll: "Failed To Select All",
          misses4: "4 Misses",
          misses8: "8 Misses",
          misses10: "10 Misses",
          Enter: "Enter",
          Compound: "Compound",
          selected: "You selected",
          bet: "bet",
          CN: "Sunday",
          T2: "Monday",
          T3: "Tuesday",
          T4: "Wednesday",
          T5: "Thursday",
          T6: "Friday",
          T7: "Saturday",
          waitingdraw: "Waiting Lottery",
          grandPrize: "Grand Prize",
          firstprize: "First Prize",
          secondprize: "Second Prize",
          thirdprize: "Third Prize",
          fourthprize: "Fourth Prize",
          fifthprize: "Fifth Prize",
          sixthprize: "Sixth Prize",
          seventhprize: "Seventh Prize",
          eighthprize: "Eighth Prize",
          northernvietnam: "Northern Vietnam",
          southvietnam: "South Vietnam",
          vietnamchinese: "Vietnam Chinese",
        },
        finance: {
          title: "Safe",
          titleRes: "Safe Record",
          tip1: "Daily rate",
          tip2: "Earnings calculated every minute",
          shop: "Points Mall",
          shopTip: "Free redemption of massive luxury goods",
          lumpSum: "Lump Sum",
          security: "Financial Security",
          transferIn: "Transfer In",
          transferOut: "Transfer Out",
          Every: "Every",
          minute: "Minute Revenue",
          earnings: "Generated Revenue",
          cumulativeIncome: "Cumulative Income",
          estimatedIncome: "Estimated Income",
          income: "income",
          tip3: "Funds are safe and secure, and can be transferred out at any time",
          history: "History Record",
          setIncome: "Settlement Income",
          allRecords: "All Records",
          amountShare: "Amount per copy",
          enter: "Please enter the quantity",
          availableBalance: "Available Balance",
          outAmount: "Transfer Funds",
          inAmount: "Transfer Amount",
          all: "All",
          balanceAvailable: "Insufficient balance available",
          noIncome: "No Income",
          noIncomeTip: "Whether the income is currently transferred out",
        },
        financeRule: {
          title: "Learn About Safes",
          Rtip: "Minimum return, daily interest rate",
          Rtip1: "After the wallet balance is transferred in, every",
          Rtip2: "Earnings calculated every minute",
          Rtip3:
            "Earnings will be settled when transferring in or out for the second time, and the last earnings will be transferred to the wallet balance",
          Rtip4:
            "The wallet balance transferred to the safe must be transferred in units",
          Eg: "E.g",
          Rtip5: "one serving",
          Rtip6: ", transferred to 2 copies as",
          Rtip7: ", 10 copies for",
          Rtip8: ", 50 copies for",
          Rtip9: ", the transfer amount must be a multiple of 1000",
          Rtip10:
            "Under the condition that your income is guaranteed, you can transfer the balance of the safe to the balance of the wallet at any time, and the transfer amount must be a multiple of the number of copies",
          friendly: "friendly reminder",
          friendlytxt:
            'Please do not transfer in and out frequently. Earnings will be calculated from 1 minute after depositing. If the accumulative amount of a single earning amount is less than 0.01, it will not be included in the "earnings".',
          Safety: "Safety",
          SafetyTxt:
            "The security technical team ensures the safety of your funds",
          SafetyTip:
            "In order to ensure the safety of your funds, it is recommended that you transfer your wallet balance to a safe",
        },
        flight: {
          title: "Pilot",
          tit: "Hot and exciting",
          sub: "skydiving game",
          tip: "whether to enter the game",
          btn: "Enter Now",
          gameName: "Aviator",
          gameTip: "Voe emuitiplique seus lucros",
          enterGameName: "Please enter the game name",
        },
      },
    };
  },
  7268: function (e, a, t) {
    e.exports = t.p + "img/invite.90e0a700.png";
  },
  8579: function (e, a, t) {
    "use strict";
    t("0b20");
  },
  "908d": function (e, a, t) {},
  "9bc4": function (e, a, t) {},
  "9c0c": function (e, a, t) {},
  "9ef9": function (e, a, t) {},
  a268: function (e, a, t) {
    e.exports = {
      homepage: {
        loadText: {
          loadMore: "Muat lebih banyak",
          loading: "Memuat",
          nomore: "Tidak Ada",
        },
        loadingText: "Memuat",
        login: "Masuk",
        numberFormat: "Format Nomor Ponsel",
        mobile: "Nomor Ponsel",
        mobileNumber: "Nomor Ponsel",
        pwd: "Kata Sandi",
        oldpwd: "Password lama",
        pwds: "Konfirmasi Kata Sandi",
        pwdsTip: "Kata sandi tidak konsisten",
        register: "Registrasi",
        registerTip: "Sudah punya akun, Login~",
        forgotPwd: "Lupa Kata Sandi",
        customerService: "Pelayanan Pelanggan",
        resetPwd: "Keamanan Akun",
        verificationCode: "Kode Verifikasi",
        recommendationCode: "Kode Promosi",
        agree: "Saya setuju",
        privacy: "Kebijakan Privasi",
        submit: "Konfirmasi",
        network: "jaringan tidak stabil",
        tips: "Peringatan",
        remark: "Komentar",
        close: "Tutup",
        full: "layar penuh",
        zoomOut: "memperkecil",
        signout: "Apakah Anda yakin ingin keluar?",
        quit: "Ingin keluar dari permainan ini?",
        enterGame: "Apakah Anda yakin ingin memasuki permainan?",
        cancel: "Batal",
        confirm: "Konfirmasi",
        success: "Profit",
        cancelled: "Dibatalkan",
        fail: "Loss",
        del: "Hapus",
        copy: "Salin",
        copySuccess: "Berhasil Disalin",
        required: "Wajib Diisi",
        pleaseRequired: "harap isi kolom yang tersedia",
        passwordError:
          "Minimal kata sandi 6 karakter (kombinasi angka dan huruf)",
        pleaseEmail: "isi email dengan format yang benar",
        informationTip: "Sesi Anda telah berakhir, silakan masuk kembali.",
        informationTip1:
          "Akun anda telah masuk di perangkat lain. Jika itu bukan Anda segera ubah kata sandi akun.",
        noData: "Tidak ada data yang tersedia",
        presaleRule:
          'Untuk melindungi hak dan kepentingan yang sah dari pengguna yang berpartisipasi dalam prapenjualan  dan menjaga ketertiban operasi yang normal, aturan diterapkan sesuai dengan perjanjian dan peraturan yang relevan. 1.1 Definisi prapenjualan: mengacu pada model penjualan di mana pedagang menyediakan rencana produk atau layanan, mengumpulkan pesanan konsumen melalui alat produk prapenjualan, dan menyediakan barang dan atau jasa kepada konsumen sesuai dengan kesepakatan sebelumnya1.2 Model prapenjualan adalah model "deposit". "Deposit" mengacu pada jumlah tetap dari harga komoditas prapenjualan yang dikirimkan sebelumnya. "Deposit"  dapat berpartisipasi dalam permainan kecil dan memiliki kesempatan untuk memenangkan lebih banyak deposit. Deposit bisa langsung ditukar dengan komoditas. Deposit itu tidak dapat ditebus.1.3 Produk prapenjualan: mengacu pada produk yang dirilis oleh pedagang menggunakan alat produk prapenjualan. Hanya kata-kata prapenjualan yang ditandai pada judul produk atau halaman detail produk, dan produk yang tidak menggunakan alat produk prapenjualan bukanlah produk prapenjualan.1.4 Sistem prapenjualan: Mengacu pada alat produk sistem yang disediakan untuk mendukung pedagang untuk penjualan model prapenjualan.1.5 Harga komoditas prapenjualan: mengacu pada harga jual komoditas prapenjualan. Harga barang presale terdiri dari dua bagian: deposit dan pembayaran akhir.',
        more: "Lagi",
        verificationTip:
          "Tidak dapat menerima kode verifikasi? Silakan hubungi layanan pelangg",
        symbolU: "USDT",
        newes: "Pengumuman Terbaru",
        upgraded: "Event sedang diperbarui......",
        gameTit: "Pemulihan saldo gagal",
        gameLeft: "coba lagi",
        gameRight: "daur ulang manual",
        tab: {
          hot: "Populer",
          lottety: "Loteri",
          fishing: "Penangkapan ikan",
          electronic: "Slots",
          physical: "Olahraga",
          realperson: "Kasino",
          chess: "Catur",
          smallgame: "Permainan kecil",
          safe: "aman",
        },
        home: {
          lottetyTitle: "Cabutan loteri terbesar",
          recharge: "Deposit",
          balance: "Saldo Dompet",
          customerService: "Customer Service",
          lottety: "Loteri",
          wealth: "Pengurusan kewangan",
          leftTime: "Sisa Waktu",
          min: "Minit",
          sec: "Saat",
          newTitle: "Berita",
          newCenter: "Pusat Berita",
          newDes: "Detail Berita",
          wrTime: "LAMA WEBSITE BEROPERASI",
          days: "HARI",
          hours: "JAM",
          minutes: "MENIT",
          seconds: "DETIK",
          pengguna: "ANGGOTA",
          jumlahTaruhan: "TOTAL PEMBELIAN",
          Online: "ONLINE",
          penarikanHari: "Penarikan Hari Ini",
          gin: "di",
          got: "raih",
          GameName: "Permainan Memancing",
          popular: "Rekomendasi Populer",
          platform: "Rekomendasi platform",
          Game1: "5D Lotre",
          Game2: "Win Go",
          Game3: "Slots",
          Game4: "K3 Lotre",
          Game5: "Kasino",
          Game6: "Olahraga",
          Game7: "16 Pilihan Nomor",
          Game8: "Negara",
          Game9: "Singapura 4D",
          Game10: "Vietnam Lottery",
          Game11: "Universal 4D",
          Game12: "4D Malaysia",
          Game13: "lebih dari sepuluh ribu kata",
          Game14: "Kecepatan 4D",
          Game1Tip: "Tebak Angka/Tinggi&Rendah/Ganjil&Genap untuk Menang",
          Game2Tip: "Tebak Angka/Warna/Besar&Kecil untuk Menang",
          Game3Tip: "Putar Slot Pilihan dan Dapatkan Mega Jackpot",
          Game4Tip: "Tebak Angka/Tinggi&Rendah/Ganjil&Genap untuk Menang",
          Game5Tip: "Baccarat/Dragon Tiger/Roulette/Sic Bo",
          Game6Tip: "Acara waktu nyata/semua di dalamnya",
          Game7Tip: "Tebak Angka/Tinggi&Rendah/Ganjil&Genap untuk Menang",
          Game8Tip: "Acara waktu nyata/semua di dalamnya",
          Game9Tip: "Tebak Angka/Tinggi&Rendah/Ganjil&Genap untuk Menang",
          Game10Tip: "Tebak Angka/Warna/Besar&Kecil untuk Menang",
          Game11Tip: "Tebak Angka/Tinggi&Rendah/Ganjil&Genap untuk Menang",
          Game12Tip: "Tebak Angka/Tinggi&Rendah/Ganjil&Genap untuk Menang",
          Game13Tip: "Tebak Angka/Tinggi&Rendah/Ganjil&Genap untuk Menang",
          Game14Tip: "Tebak Angka/Tinggi&Rendah/Ganjil&Genap untuk Menang",
          Game6t: "Sabah",
          nextDraw: "Pusingan seterusnya",
          playNow: "Mainkan segera",
          howWorks: "Bagaimana Cara Kerjanya?",
          game_title1: "Pilih Jenis Pemainan",
          game_title2: "Pilih Angka/Warna",
          game_title3: "bertaruh",
          game_title4: "Dapatkan Hadiahnya",
          game_First: "Langkah Pertama",
          game_Second: "Langkah Kedua",
          game_Third: "Langkah Ketiga",
          game_Fourth: "Langkah Keempat",
          list: [
            {
              title: "Pilih Jenis Pemainan",
              txt: "Kamu bisa memilih untuk bermain di 1 menit, 3 menit, 5 menit dan 10 menit pada Win Go maupun 5D Lotre.",
            },
            {
              title: "Pilih Angka/Warna",
              txt: "Setelah memilih jenis permainan, pilih Nomor atau Warna keberuntunganmu. Kamu juga bisa memilih Besar atau Kecil dan Ganjil atau Genap.",
            },
            {
              title: "Atur Nominal Pembelian",
              txt: "Atur nominal pembelian sesuai dengan yang Kamu inginkan dan konfirmasi.ã€‚",
            },
            {
              title: "Dapatkan Hadiahnya",
              txt: "Ketika hasil yang diumumkan sesuai dengan hasil yang Kamu pilih pada periode berjalan, maka sistem secara otomatis akan menambahkan Hadiahnya ke saldo akunmu.",
            },
          ],
        },
        index: {
          Charttren: "Grafik Tren",
          Total: "Total",
          walletBalance: "Saldo Dompet",
          recharge: "Deposit",
          withdraw: "Withdraw",
          lotteyRule: "Peraturan",
          iKnow: "Saya Mengerti",
          big: "Besar",
          small: "Kecil ",
          green: "Hijau",
          violet: "Ungu",
          red: "Merah",
          selectGreen: "Hijau",
          selectViolet: "Ungu",
          selectRed: "Merah",
          randomBetting: "Beli Acak",
          gameRecord: "Hasil Permainan",
          myGameRecord: "Riwayat Saya",
          period: "Periode",
          blockHeight: "Tinggi Balok",
          blockTime: "Blok Waktu",
          hashValue: "Nilai Hash",
          number: "Angka",
          size: "Besar/Kecil",
          color: "Warna",
          result: "Hasil",
          sum: "SUM",
          high: "Tinggi",
          low: "Rendah",
          odd: "Ganjil",
          even: "Genap",
          money: "Nominal",
          multiply: "Kelipatan",
          presaleRule: "Syarat dan Ketentuan",
          presaleRuleTit:
            "Periksa saya untuk menyetujui peraturan pra-penjualan",
          totalPrice: "Bayar",
          Select: "Pilih",
          SelectCon: "Pilihan",
          firstPage: "Telah di halaman pertama",
          lastpage: "Telah di halaman terakhir",
          periodDetail: "Rincian Periode",
          orderNumber: "Nomor Order",
          contractMoney: "Nominal Pembelian",
          contractCount: "Kuantitas Pembelian",
          delivery: "Jumlah Pembelian setelah Biaya",
          fee: "Biaya",
          openPrice: "Pembukaan Angka",
          status: "Status",
          amount: "Nominal Profit/Loss",
          createTime: "Waktu Pembelian",
          BettingAssistant: "Statistik (100 Periode Terakhir)",
          Missing: "Hilang",
          AvgMissing: "Rata-rata Hilang",
          Frequency: "Frekuensi",
          MaxContinued: "Frekuensi",
          PleaseInteger: "Maks Sambung",
          Odds: "profit ",
          publicQuery: "cek secara berantai",
          howPlay: "cara main",
          distancedraw: "Sisa Waktu",
          multiple: "Kelipatan",
          numberBets: "Nilai Taruhan",
          reset: "Atur Ulang",
          time: "Waktu",
          lotteryTime: "Waktu Buka Hasil",
          notPressed: "Kalah",
          pressed: "Menang ",
          bedrawn: "Menunggu Hasil",
          awarding: "Perhitungan Hadiah",
          periodNmu: "nomor periode taruhan",
          lotteryNmu: "nomor undian",
        },
        myProfile: {
          title: "Profil Saya",
          profilePhoto: "Potret",
          nickname: "Nama Panggilan",
          modifyNickname: "Mengubahsuai nama samaran",
          newNicknameTit: "Masukkan nama samaran baharu",
        },
        about: {
          title: "Tentang",
          Games: "Permainan",
          privacypolicy: "Kebijakan Privasi",
          disclosureagreement: "Perjanjian Pengungkapan Resiko",
        },
        privacypolicy: {
          title: "Kebijakan Privasi",
          agree: "Perjanjian Pengungkapan Resiko",
        },
        keFuMenu: { title: "Customer Service" },
        recharge: {
          title: "Deposit",
          selectRecharge: "Pilih satu saluran tambahan nilai untuk menambah",
          next: "Langkah berikutnya",
          previous: "Sebelumnya",
          rechargeAmount: "Jumlah dana tambahan",
          rechargeAmountRangeIpt: "Julat jumlah dana tambahan",
          rechargeAmountRange: "Julat jumlah dana tambahan",
        },
        rechargeChack: {
          title: "Deposit",
          totalAmouunt: "Jumlah dana",
          paymentMethod: "Cara pembayaran",
          localBank: "Pilihan Bank",
          enterAmount: "Masukkan jumlah dana",
          theAmount: "Format dana mesti merupakan gandaan integer 10",
          accountName: "Nama Rekening",
          bankNumber: "Nomor Rekening",
          bankName: "Nama Bank",
          paymentAmount: "Jumlah Pembayaran",
          orderNumber: "Nomor Order",
          creationTime: "Tanggal Order",
          transferAmount:
            "Jumlah uang yang Anda transfer harus sesuai dengan jumlah pembayaran yang Anda buat. Jika tidak sesuai, deposit tidak akan berhasil diproses.",
          transferAmount2: "",
          transferAmount1:
            "Penting : Jangan membatalkan pesanan deposit setelah selesai mengirimkan uang.",
          depositAmount: "Jumlah setoran",
          upImgTitle: "Harap unggah transaksi yang menyertakan UTR",
          upFormate: "Hanya unggah gambar dalam format jpg,jpeg,png",
          selectFile: "Pilih unggah file",
        },
        touchngo: {
          title: "Touch N Go Deposit",
          name: "Nama",
          mobileNumber: "Nomor Ponsel",
        },
        rechargeRecord: {
          title: "Catatan Deposit",
          unpaid: "Tunggu dibayar",
          eazyPay: "å·¥èµ„",
          success: "Disetujui",
          others: "Yang lain lain",
        },
        paymentMethod: {
          title: "Cara pembayaran",
          totalPaid: "Jumlah dana yang tunggu dibayar",
          choose: "Pilih kad bank",
          payNow: "Bayar segera",
          topInstructions: "Penjelasan yang menambah nilai",
          contentTmp1:
            "Pindahkan ke akaun bank penerimaan dana yang tersebut diatas",
          contentTmp2:
            "Isikan nama pemegang kad bank dan akaun untuk mengesahkan",
          contentTmp3:
            "Serahkan satu pindahan satu kali, jangan serahkan pesanan secara berulang",
          contentTmp4:
            "Memastikan untuk menyerahkan pesanan selepas menyelesaikan pindahan, kalau tidak, kami tidak dapat memeriksa pembayaran andaTunggu dibayar",
          waitingPayment: "Tunggu dibayar",
          receivingTitle: "Maklumat kod bank yang diterima dana",
          confirm1: "Nombor pesanan",
          confirm2: "Nama bank",
          confirm3: "Pemegang bank",
          confirm4: "Nombor kad bank",
          confirm5: "IFSC",
          confirm6: "Bank cabangan",
          Required: "Fill in Ref No",
          Return: "Balik",
        },
        promotion: {
          title: "Promosi",
          bouns: "Bonus",
          level_1: "Level1",
          level_2: "Level2",
          totalPeople: "Jumlah Anggota",
          contribution: "Kontribusi",
          code: "Kode Promosi Saya",
          link: "Link Promosi Saya",
        },
        bonusrecord: { title: "Waktu Downline LVL 1 Registrasi" },
        redenvelopes: {
          title: "Hadiah Khusus",
          Hello: "Hai",
          Eveverone: "Semua",
          des: "Kami ada hadiah untukmu",
          giftCode: "Kode Hadiah",
          PleaseGiftCode: "Harap Masukan Kode Hadiah",
          Receive: "Menerima hadiah",
          Best: "Sampaikan sejahtera yang terbaik kepada anda",
          Congratulations: "Tahniah",
          already: "Anda telah menerima",
          ACCEPT: "Menerima",
        },
        withdrawal: {
          title: "Withdraw",
          balance: "Saldo",
          enterwithdraw: "Isi Nominal Withdraw",
          withdrawAamount: "Jumlah dana keluaran",
          fee: "Cukai",
          toAccount: "Jumlah dana selepas cukai",
          rate: "Nilai Tukar",
          totalBet: "Target Pembelian",
          withdrawTime: "Waktu Withdraw",
          dailyWithdrawal: "Kuota Withdraw Perhari",
          withdrawMoney: "Kisaran jumlah penarikan",
          payout: "Pembayaran",
          bankCard: "Kad bank",
          selectBank: "Pilih bank",
          addBankCard: "Tambah Rekening Bank",
          rechargeTip1: "harap isi nominal withdraw",
          rechargeTip2: "harap pilih rekening bank",
          rechargeTip3: "harap isi kata sandi",
          select: "Pilih ",
          add: "Tambah",
        },
        withdrawrecord: {
          title: "Catatan Withdraw",
          applying: "Menunggu Konfirmasi",
          agree: "Disetujui",
          refuse: "Ditolak",
        },
        mission: {
          title: "Misi Promosi",
          totalPeople: "Jumlah Anggota",
          totalAmount: "Jumlah Dana",
          myTask: "Tugas Saya",
          invited: "Undang",
          validMenmber: "Anggota Aktif",
          receive: "Menerima",
        },
        promoteRecord: { title: "Catatan Promosi", People: "Jumlah orang" },
        addbank: {
          title: "Tambah Rekening Bank",
          bankName: "Nama Bank",
          beneficiaryName: "Nama Pemilik Bank",
          accountNo: "Nomor Rekening Bank",
          bankCity: "Kota",
          IFSCCode: "IFSC Cord",
          email: "E-mail",
          bankProvince: "Provinsi",
          bankBranch: "Alamat Cabang Bank",
          addBtn: "Tambah Rekening Bank",
          opsionalbankProvince: "Opsional",
          opsionalbankBranch: "Opsional",
        },
        addElcbank: {
          title: "Tambahkan dompet elektronik",
          addBtn: "Tambahkan dompet elektronik",
          mobile: "Silakan masukkan nomor ponsel e-wallet Anda",
        },
        addUsdt: {
          title: "Tambahkan dompet USDT",
          addBtn: "Tambahkan dompet USDT",
          type: "Jenis USDT",
          address: "Alamat dompet",
          tip: "Ralat Format Alamat USDT",
          txt: "Format alamat USDT (TRC). Alamat terdiri daripada 34 aksara bermula dengan huruf T.",
          txt1: "Format alamat USDT (ERC). Alamat terdiri daripada 42 aksara bermula dengan huruf 0x.",
        },
        wellet: {
          title: "Dompet",
          withdrawalBalance: "Saldo",
          historicalWithdrawal: "Total Withdraw",
          accumulatedWithdrawal: "Withdraw Hari Ini",
          everyDay: "Setiap hari",
          order: "kali setiap hari",
          tip: "Peluang untuk keluarkan ke kad bank yang anda mengikat secara percuma",
          myCard: "Kod bank saya",
          rechargeRecord: "Catatan Deposit",
          withdrawRecord: "Catatan Withdraw",
        },
        transactionrecord: { title: "Catatan Transaksi" },
        newtutorial: {
          title: "Tutorial Pemula",
          chooseYour: "Pilih",
          favoriteGame: "Permainan yang Paling Anda Sukai",
          pickLucky: "Pilih",
          numberColor: "Angka atau Warna Keberuntungan Anda",
          SKIP: "Lewati",
          NEXT: "Selanjutnya",
          confirmAmount:
            "Atur Nominal Pembelian Sesuai dengan yang Anda Inginkan",
          getBouns: "Dapatkan Hadiahnya",
          moneyWill:
            "Ketika Hasil yang Diumumkan Sesuai dengan Hasil yang Kamu Pilih Pada Periode Berjalan, Maka Sistem Secara Otomatis akan Menambahkan Hadiahnya ke Saldo Akunmu.",
          youRecharge: "Anda Bisa melakukan Pengisian",
          withdrawHere: "Saldo ataupun Penarikan Saldo di Menu Ini",
        },
        download: {
          title: "Memuatkan turun",
          name: "",
          goBtn: "Pergi untuk memuatkan turun",
          des: "Sebuah platfotm permainan loteri profesional",
          playNow: "Pergi bermain segera",
          lotteryGame: "Permainan loteri",
          btn: "Memuatkan turun segera",
        },
        tabbar: {
          tabbarList: [
            {
              id: 1,
              name: "HOME",
              imgAction: t("07d4"),
              img: t("2288"),
              to: "/home",
            },
            {
              id: 2,
              name: "AKTIVTAS",
              imgAction: t("b5ef"),
              img: t("5b0e"),
              to: "/activity",
            },
            {
              id: 3,
              name: "PROMOSI",
              imgAction: t("7268"),
              img: t("7268"),
              to: "/promotion",
            },
            {
              id: 4,
              name: "DOMPET",
              imgAction: t("4c6e"),
              img: t("b2a5"),
              to: "/wallet",
            },
            {
              id: 5,
              name: "AKUN",
              imgAction: t("e636"),
              img: t("6c7c"),
              to: "/mian",
            },
          ],
        },
        mian: {
          title: "Akun",
          historical: "Riwayat Pembelian",
          funding: "Catatan Transaksi",
          loginLog: "Log Masuk",
          message: "Pesan",
          balance: "Semua dompet",
          totalwallet: "total dompet",
          refreshwallet: "Refresh Saldo",
          loginOut: "Keluar",
          menuName1: "Keamanan Akun",
          menuName2: "Google Authenticator",
          menuName3: "Misi Promosi",
          menuName4: "Hadiah Khusus",
          menuName5: "Tutorial Pemula",
          menuName6: "Tentang",
          menuName7: "Customer Service",
        },
        checkIn: {
          title: "Check In",
          attendanceRules: "Bonus Check In",
          txt: "Bonus Check-in Harian",
          rule: "Ketentuan",
          record: "Riwayat",
          today: "CheckIn hari ini",
          received: "Diterima",
          day: "Hari Ke-",
          btn: "Klaim",
          Receive: "Hadiah Check In",
          Best: "Terimakasih telah setia bersama Kami",
          Congratulations: "Selamat",
          already: "Anda telah menerima",
          ACCEPT: "Tutup",
        },
        checkInDes: {
          title: "Peraturan tandatangan",
          checkInDay: "Hari Check In",
          accumulatedAmount: "Total Deposit",
          checkInBonus: "Bonus Check In",
          rulesDetails: "Syarat dan Ketentuan",
          tep1: "Deposit setiap hari tanpa terputus",
          tep2: "Selama Event, pastikan check 1 kali dalam sehari",
          tep3: "Pemain yang tidak melakukan deposit maka tidak dapat mengklaim bonus Check-in",
          tep4: "Persyaratan bonus deposit harus dipenuhi dari hari pertama",
          tep5: "Pihak 55Five berhak  untuk memutuskan hasil akhir dari program bonus ini.Jika ada pertanyaan lain,harap hubungi layanan pelanggan kami.",
        },
        historicalBetting: { title: "Riwayat Pembelian" },
        loginLog: { title: "Log Masuk" },
        messageCenter: {
          title: "Pesan",
          readAll: "Baca Semua",
          removeAll: "Hapus Semua",
          delTitle: "Adakah anda memastikan untuk memadam",
          delall: "Adakah anda memastikan untuk memadam semua",
          readall: "Adakah anda memastikan untuk melihat semua",
        },
        messageDes: { title: "Rincian Pesan" },
        lottery: {
          drawResult: " Hasil Lotre",
          period: "Periode",
          money: "Nominal",
          multiply: "Kuantitas",
          totalPrice: "Bayar",
          pleaseBet: "Sila menaruh",
          election: "Pemilu terbalik",
        },
        colorLand: {
          tab1: "Total Nilai",
          tab2: "2 Angka Sama",
          tab3: "3 Angka Sama",
          tab4: "Angka Beda",
          title1: "Pilih 2 angka yang sama",
          tip1: "*Jika hasil undian muncul 2 angka yang sama sesuai pilihan, hadiah akan dimenangkan.. (Kecuali hasil 3 angka yang sama).",
          title2: "Pilih 2 angka sama dan 1 angka berbeda",
          tip2: "*Pilih minimal 2 angka yang sama dan 1 angka yang berbeda untuk bertaruh. Jika hasil undian muncul sesuai dengan pilihan, hadiah akan dimenangkan.",
          title3: "Pilih 3 angka unik",
          tip3: "**Jika hasil undian cocok dengan 3 angka sama khusus sesuai dengan pilihan, hadiah akan dimenangkan.",
          title4: "Pilih 3 angka yang sama",
          tip4: "*Jika hasil undian muncul 3 angka yang sama berapapun itu, hadiah akan dimenangkan",
          title5: "Pilih 3 angka berbeda",
          tip5: "*Pilih 3 angka atau lebih yang berbeda. Jika 3 angka hasil undian adalah angka yang berbeda dan sesuai dengan pilihan, hadiah akan dimenangkan",
          title6: "Pilih 3 angka berurutan",
          tip6: "*Jika angka undian adalah tiga angka berurutan, hadiah akan dimenangkan.",
          title7: "Pilih 2 angka berbeda",
          tip7: "*Pilih 2 angka atau lebih yang berbeda. Jika 2 angka hasil undian adalah angka yang berbeda dan sesuai dengan pilihan, hadiah akan dimenangkan.",
          selectCon1: "Pilih 2 angka yang samaï¼š",
          selectCon2: "Pilih 2 angka sama dan 1 angka berbedaï¼š",
          selectCon3: "Pilih 3 angka unikï¼š",
          selectCon4: "Pilih 3 angka berbedaï¼š",
          selectCon5: "Pilih 2 angka berbedaï¼š",
          gameType1: "3 angka berbeda",
          gameType2: "3 angka berbeda",
          gameType3: "2 angka sama",
          gameType4: "3 angka sama",
        },
        activity: { title: "Aktivitas" },
        activityDes: { title: "Rincian Aktivitas" },
        usdt: {
          title: "USDT Deposit",
          address: "Alamat Dompet USDT",
          Raddress: "alamat isi ulang",
          QRcode: "Kode QR",
          tit1: "beli mata uang",
          tit2: "transfer ke alamat",
          tit3: "Segel kesepakatan",
          tit4: "tunggu kedatangannya",
          tip1: "1. Alamat isi ulang berubah secara real time. Harap jangan simpan alamat isi ulang. Harap dapatkan kembali alamat isi ulang sebelum setiap pengisian ulang untuk menghindari hilangnya mata uang digital. ",
          tip2: "2. Setelah menyalin alamat isi ulang, silakan masuk ke dompet mata uang digital yang Anda gunakan untuk menarik dan mentransfer uang. Jangan mengisi ulang aset digital yang berbeda dari blockchain yang dipilih, jika tidak, aset tidak akan diambil. ",
          tip3: "Penarikan isi ulang umumnya tiba secara otomatis dalam 1-5 menit, jika tidak, silakan hubungi layanan pelanggan online. ",
          tip4: "(Tanpa biaya penanganan seperti: withdraw 100 ke akun 100) ",
        },
        trx: {
          uset: "TRX",
          title: "TRX Deposit",
          address: "Alamat Dompet TRX",
        },
        promotionNew: {
          title: "Promosi",
          dataOverview: "Ringkasan",
          myTeam: "TIM Saya",
          upRecord: "Riwayat",
          tutorial: "Tutorial",
          myReward: "Bonus Saya",
          totalComm: "Total Komisi Kemarin",
          directComm: "Komisi Langsung",
          teamComm: "Komisi Tim ",
          directSubord: "Jumlah Bawahan Langsung ",
          totalTeams: "Total Anggota tim ",
          newToday: "Anggota baru hari ini ",
          newTeam: "Jumlah anggota hari ini ",
          weekComm: "Total komisi minggu ini ",
          totalComm1: "Total Komisi",
          QRcode: "Tekan lama untuk menyimpan barcode",
          copyCode: "Salin Kode Undangan",
          copyLink: "Salin Link",
          rebateTable: "Jumlah rabat sesuai tabel ",
          agencyLevel: "Tingkat Agen",
          teamNumber: "Jumlah Tim",
          teamFlow: "Turn Over",
          teamRecharge: "Deposit Tim",
          validDay: "Anggota Valid : Deposit",
          commMethod: "Perhitungan komisi",
          Hierarchy: "Tingkatan",
          rebateRatio: "Presentase",
          firstMember: "Level 1",
          secondMember: "Level 2",
          thirdMember: "Level 3",
          tierMember: "Level 4",
          bettingTurnover: "Turn Over",
          agent: "Agen lvl ",
          upTime: "Waktu Klaim",
          receiveAmount: "Jumlah klaim",
          operate: "Rincian",
          details: "Detail",
          date: "Tanggal",
          directTeam: "Anggota referral",
          people: "orang",
          pleaseChoose: "Silakan pilih ",
          totalBet: "Jumlah Total Taruhan",
          totalAmount: "Total Komisi",
          Inquire: "Pencarian",
          nickName: "Nama",
          runningWater: "Turnover",
          condition: "Status",
          enable: "Aktifkan",
          disabled: "Non aktifkan",
          personalFlow: "Transaksi Pribadi",
          personalRecharge: "Deposit Pribadi",
          rgistrationTime: "Waktu Pendaftaran",
          subordinates: "Jumlah Anggota",
          year: "tahun",
          moon: "bulan",
          day: "hari",
          selectList: [
            { name: "Level 1", code: 1 },
            { name: "Level 2", code: 2 },
            { name: "Level 3", code: 3 },
            { name: "Level 4", code: 4 },
            { name: "Level 5", code: 5 },
            { name: "Level 6", code: 6 },
          ],
          promoteMoney: "Agensi",
          uid: "ID",
        },
        verify: {
          title: "Google Authenticator",
          unbind: "Menghapus/ubah Auntheticator",
          downTit: "Unduh dan Daftar",
          downTxt:
            "Silakan unduh Google Aunthenticator. Setelah instalasi selesai, silakan klik ikat untuk mengikat akun lotre anda",
          bind: "Menautkan",
          downVerify: "Unduh Google Authenticator",
          vexplainTit: "Deskripsi pengikatan Authenticator",
          list: [
            {
              txt: "Anda perlu menyimpan 16 digit kunci yang dihasilkan dari akun lotere Anda di tempat yang aman dan salin juga kunci tersebut",
            },
            { txt: "Anda perlu membuka Google Aunthenticator" },
            {
              txt: "Tambahkan satu akun permainan, salin dan masukkan 16 digit kunci",
            },
            {
              txt: "Setelah berhasil ditambahkan, 6 kode verifikasi digital akan dihasilkan secara otomatis",
            },
          ],
          vexplainNext: "Lewati Tutorial",
          vbackupTit: "Kunci Cadangan",
          vbackupTxt:
            "Harap siapkan kunci penting dan simpan di tempat yang aman untuk menghindari ponsel kehilangan kunci, jika tidak, Anda harus menyimpan life tester selama 7 hari",
          vsafetyTit: "Verifikasi Keamanan",
          vsafetyTxt: "Kirim kode verifikasi ke ponsel Anda",
          vsafetySms: "Kode verifikasi ponsel",
          vsafetyTip:
            "Keamanan Authenticator tidak tersedia? Hubungi layanan pelanggan (CUSTOMER SERVICE)",
          vsafetySnsnull: "Kode verifikasi harus diisi",
          loginTit: "Google verifikasi login",
          loginTxt:
            "Perlindungan akun diaktifkan, ikuti petunjuk untuk menyelesaikan operasi",
          loginTip:
            "Silakan buka Aplikasi Alibaba Cloud atau Google Authenticator (perangkat otentifikasi) pada ponsel, masukkan 6 digit kode dinamis",
          loginNum: "6 Digits",
        },
        long: {
          title: "Asisten Naga Panjang",
          newTitle: "Naga Panjang Terbaru",
          betTitle: "Taruhanku",
          expect: "Periode",
          andDig: "S/Besar",
          andSmall: "S/Kecil",
          andodd: "S/Ganjil",
          andeven: "S/Genap",
          illustrate: "Penjelasan",
          txt1: "Asisten Naga Panjang adalah alah alat yang membantu melacak dan menghitung hasil lotre dari Win Go, 5D, K3 serta lotre Besar Kecil Ganjil Genap. Asisten Naga Panjang juga mampu membuat taruhan dengan cepat.  ",
          txt2: 'Probabilitas munculnya hasil Besar, Kecil, Ganjil dan Genap adalah sama pada setiap periode. Jika hasil lotre adalah sama pada 3 atau lebih periode beruntun, maka dinamakan Naga Panjang. Biasanya metode "Memotong Naga" atau "Menunggang Naga" akan dilakukan dengan "Kelipatan Taruhan"ã€‚',
          list: [
            {
              name: "Apa itu Memotong Naga?",
              txt: 'Jika hasil dari 5 periode beruntun adalah "Ganjil", Anda boleh memilih "Genap" sebagai pilihan taruhan Anda. Ini dinamakan metode "Memotong Naga"',
            },
            {
              name: "Apa itu Menunggang Naga?",
              txt: 'Jika hasil dari 5 periode beruntun adalah "Ganjil", Anda boleh tetap memilih "Ganjil" sebagai pilihan taruhan Anda. Ini dinamakan metode "Menunggang Naga"',
            },
            {
              name: "Apa itu Kelipatan Taruhan?",
              txt: 'Taruhan Kelipatan adalah metode menaikan jumlah taruhan, dengan tujuan untuk mendapatkan keuntungan terus menerus selama proses "Memotong Naga" ataupun "Menunggang Naga"ã€‚',
            },
          ],
          txt3: 'Naga Panjang Terbaru : Fungsi ini secara otomatis memperbarui game dengan hasil yang sama dalam 5 undian berturut. Akan memudahkan Anda mengambil keputusan apakah akan "Memotong Naga" atau "Menunggang Naga"',
          txt4: "Taruhanku : Fitur ini untuk memudahkan Anda melihat hasil undian serta taruhan yang Anda lakukan",
        },
        shop: {
          currentPoints: "Poin saat ini",
          Redeem: "Klaim saat ini",
          pointsGo: "poin di toko segera menuju",
          commodityOrder: "pesanan barang",
          pointsRecord: "catatan poin",
          title: "poin toko",
          pointsAvailable: "poin yang bisa digunakan",
          rule: "aturan poin",
          stock: "persediaan",
          redeemed: "klaim",
          integral: "poin",
          productName: "nama produk",
          exchange: "pertukaran syarat",
          name: "Nama pertama dan terakhir",
          address: "alamat penerima barang",
          redeem: "klaim terus menerus",
          checkOrder: "cek pesanan",
          addressEmpty: "alamat tidak boleh kosong",
          ordered: "pesan",
          delivery: "sedang pengiriman",
          completed: "telah berhasil",
          orderDetails: "detail pesanan",
          orderTime: "waktu pesanan",
          orderStatus: "kondisi pesanan",
          signTime: "Waktu pengiriman",
          signPhoto: "foto tanda tangan",
        },
        selections: {
          distanceDraw: "Sisa Waktu",
          champion: "1st",
          runnerUp: "2nd",
          ndRunner: "3rd",
          outof1: "1/16",
          outof2: "2/16",
          outof3: "3/16",
        },
        lotteryD: {
          rules: "Cara Bermain",
          LotteryTime: "Buka Hasil ",
          seal: "Taruhan Ditutup",
          stPrize1: "Pemenang Pertama",
          stPrize2: "Pemenang Kedua",
          stPrize3: "Pemenang Ketiga",
          Finalist: "Finalis",
          consolationprize: "Hadiah Hiburan",
          Doubledisc: "Permainan 2 Sisi",
          TraditionalDish: "Permainan Tradisional",
          Doubleside: "2 Sisi",
          Choosenumber: "Pilih Nomor",
          FourDigit: "Pilih 4 Nomor Berbeda",
          FourSlection: "Pilih R 4 Digit",
          duplicatenumber: "Nomor Duplikat",
          numberFormat: "Format Angka Salah",
          Bigone: "Besar Ribuan",
          Smallone: "Kecil Ribuan",
          Bothone: "Besar Ribuan + Kecil Ribuan ",
          Addbet: "Tambah Taruhan",
          Randomnumber: "Acak Kelompok Angka",
          Machineselection: "Pilih Acak",
          Enternumber: "Masukan nomor yang anda pilih",
          Concatenatedcode: "Kode Gabungan(Paket Grup)",
          select1: "Pilih Semua 2D",
          select2: "Pilih Semua 3D",
          select3: "Pilih Semua 4D",
          select4: "Standard Nomor 2D",
          select5: "2D HADIAH SPESIAL",
          select6: "2D Hadiah Pertama",
          select7: "2D",
          select8: "3D",
          SeventhPrize: "Hadiah Ke 7",
          EighthPrize: "Hadiah Ke 8",
          positivecode3: "Standard nomor 3D",
          SpecialPrize3: "3D HADIAH SPESIAL",
          FirstPrize3: "3D Hadiah Pertama",
          SixthPrize: "Hadiah ke 6",
          positivecode4: "Standard nomor 4D",
          SpecialPrize4: "4D HADIAH SPESIAL",
          FirstPrize4: "4D Hadiah Pertama",
          selectAll: "Semua pilihan tidak sesuai hasil",
          misses4: "4 Pilihan tidak sesuai hasil ",
          misses8: "8 Pilihan tidak sesuai hasil ",
          misses10: "10 Pilihan tidak sesuai hasil ",
          Enter: "Masuk",
          Compound: "Rangkap",
          selected: "Anda memilih",
          bet: "taruhan",
          CN: "Minggu",
          T2: "Senin",
          T3: "Selasa",
          T4: "Rabu",
          T5: "Kamis",
          T6: "Jumat",
          T7: "Sabtu",
          waitingdraw: "menunggu undian",
          grandPrize: "Hadiah utama",
          firstprize: "hadiah utama",
          secondprize: "hadiah kedua",
          thirdprize: "hadiah ketiga",
          fourthprize: "Hadiah Keempat",
          fifthprize: "Hadiah Kelima",
          sixthprize: "hadiah keenam",
          seventhprize: "Hadiah Ketujuh",
          eighthprize: "Hadiah Kedelapan",
          northernvietnam: "Vietnam Utara",
          southvietnam: "Vietnam Selatan",
          vietnamchinese: "Vietnam Cina",
        },
        finance: {
          title: "Aman",
          titleRes: "Catatan Aman",
          tip1: "Tarif harian",
          tip2: "Penghasilan dihitung setiap menit",
          shop: "Point Mall",
          shopTip: "Penukaran gratis barang-barang mewah besar-besaran",
          lumpSum: "jumlah bulat",
          security: "Keamanan keuangan",
          transferIn: "transfer masuk",
          transferOut: "transfer keluar",
          Every: "Setiap",
          minute: "Pendapatan menit",
          earnings: "Pendapatan yang dihasilkan",
          cumulativeIncome: "Pendapatan kumulatif",
          estimatedIncome: "Estimasi Penghasilan",
          income: "penghasilan",
          tip3: "Dana aman dan terjamin, dan dapat ditransfer kapan saja",
          history: "catatan sejarah",
          setIncome: "pendapatan penyelesaian",
          allRecords: "semua catatan",
          amountShare: "Jumlah per salinan",
          enter: "Harap masukkan jumlahnya",
          availableBalance: "Saldo Tersedia",
          outAmount: "jumlah transfer",
          inAmount: "Jumlah transfer",
          all: "semua",
          balanceAvailable: "Saldo yang tersedia tidak mencukupi",
          noIncome: "tidak ada pendapatan",
          noIncomeTip: "Apakah pendapatan saat ini ditransfer keluar",
        },
        financeRule: {
          title: "Pelajari tentang brankas",
          Rtip: "Pengembalian minimum, tingkat bunga harian",
          Rtip1: "Setelah saldo dompet ditransfer masuk, setiap",
          Rtip2: "Penghasilan dihitung setiap menit",
          Rtip3:
            "Penghasilan akan diselesaikan saat mentransfer masuk atau keluar untuk kedua kalinya, dan penghasilan terakhir akan ditransfer ke saldo dompet",
          Rtip4:
            "Saldo dompet yang ditransfer ke brankas harus ditransfer dalam satuan",
          Eg: "Misalnya",
          Rtip5: "satu porsi",
          Rtip6: ", ditransfer ke 2 salinan sebagai",
          Rtip7: ", 10 eksemplar untuk",
          Rtip8: ", 50 eksemplar untuk",
          Rtip9: ", jumlah transfer harus kelipatan 1000",
          Rtip10:
            "Dengan syarat pendapatan Anda terjamin, Anda dapat mentransfer saldo brankas ke saldo dompet kapan saja, dan jumlah transfer harus kelipatan dari jumlah salinan",
          friendly: "pengingat ramah",
          friendlytxt:
            'Harap jangan sering-sering mentransfer masuk dan keluar. Penghasilan akan dihitung dari 1 menit setelah menyetor. Jika jumlah akumulatif dari satu jumlah penghasilan kurang dari 0,01, itu tidak akan dimasukkan dalam "penghasilan".',
          Safety: "Keamanan",
          SafetyTxt: "Tim teknis keamanan memastikan keamanan dana Anda",
          SafetyTip:
            "Untuk memastikan keamanan dana Anda, Anda disarankan untuk mentransfer saldo dompet Anda ke brankas",
        },
        flight: {
          title: "Pilot",
          tit: "Panas dan mengasyikkan",
          sub: "permainan terjun payung",
          tip: "apakah akan memasuki permainan",
          btn: "masuk sekarang",
          gameName: "Pilot",
          gameTip: "Terbang dan tingkatkan keuntungan Anda",
          enterGameName: "Silakan masukkan nama permainan",
        },
      },
    };
  },
  a3d8: function (e, a, t) {
    e.exports = {
      homepage: {
        loadText: {
          loadMore: "à¤”à¤° à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚",
          loading: "à¤²à¥‹à¤¡ à¤¹à¥‹ à¤°à¤¹à¤¾ à¤¹à¥ˆà¥€à¤‚",
          nomore: "à¤…à¤¬ à¤”à¤° à¤¨à¤¹à¥€à¤‚",
        },
        loadingText: "à¤²à¥‹à¤¡ à¤¹à¥‹ à¤°à¤¹à¤¾ à¤¹à¥ˆ",
        login: "à¤²à¥‰à¤— à¤‡à¤¨ à¤•à¤°à¥‡à¤‚",
        numberFormat: "à¤«à¤¼à¥‹à¤¨ à¤¨à¤‚à¤¬à¤° à¤ªà¥à¤°à¤¾à¤°à¥‚à¤ª",
        mobile: "à¤®à¥‹à¤¬à¤¾à¤‡à¤²",
        mobileNumber: "à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤¨à¤‚à¤¬à¤°",
        pwd: "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡",
        oldpwd: "à¤ªà¥à¤°à¤¾à¤¨à¤¾ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡",
        pwds: "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤•à¥€ à¤ªà¥à¤·à¥à¤Ÿà¤¿ à¤•à¥€à¤œà¤¿à¤¯à¥‡",
        pwdsTip: "à¤…à¤¸à¤‚à¤—à¤¤ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡",
        register: "à¤ªà¤‚à¤œà¥€à¤•à¤°à¤£ ",
        registerTip:
          "à¤ªà¤¹à¤²à¥‡ à¤¸à¥‡ à¤¹à¥€ à¤à¤• à¤–à¤¾à¤¤à¤¾ à¤¹à¥ˆ, à¤²à¥‰à¤— à¤‡à¤¨ à¤•à¤°à¥‡à¤‚ ~",
        forgotPwd: "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤­à¥‚à¤² à¤—à¤",
        customerService: "à¤—à¥à¤°à¤¾à¤¹à¤• à¤¸à¥‡à¤µà¤¾",
        resetPwd: "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤°à¥€à¤¸à¥‡à¤Ÿ",
        verificationCode: "à¤ªà¥à¤·à¥à¤Ÿà¤¿ à¤¸à¤‚à¤–à¥à¤¯à¤¾",
        recommendationCode: "à¤¸à¤¿à¤«à¤¾à¤°à¤¿à¤¶ à¤•à¥‹à¤¡",
        agree: "à¤®à¥ˆà¤‚ à¤¸à¤¹à¤®à¤¤ à¤¹à¥‚à¤‚",
        privacy: "à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾ à¤¨à¥€à¤¤à¤¿",
        submit: "à¤ªà¥à¤°à¤¸à¥à¤¤à¥à¤¤",
        network: "à¤¨à¥‡à¤Ÿà¤µà¤°à¥à¤• à¤…à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯",
        tips: "à¤¶à¥€à¤˜à¥à¤° à¤¸à¥‚à¤šà¤¨à¤¾",
        remark: "à¤Ÿà¤¿à¤ªà¥à¤ªà¤£à¥€",
        close: "à¤¬à¤‚à¤¦ à¤•à¤°à¥‡",
        full: "à¤ªà¥‚à¤°à¥à¤£ à¤¸à¥à¤•à¥à¤°à¥€à¤¨",
        zoomOut: "à¤œà¤¼à¥‚à¤® à¤†à¤‰à¤Ÿ",
        signout:
          "à¤•à¥à¤¯à¤¾ à¤†à¤ª à¤²à¥‰à¤— à¤†à¤‰à¤Ÿ à¤•à¤°à¤¨à¤¾ à¤šà¤¾à¤¹à¤¤à¥‡ à¤¹à¥ˆà¤‚?",
        quit: "à¤‡à¤¸ à¤–à¥‡à¤² à¤•à¥‹ à¤›à¥‹à¤¡à¤¼à¤¨à¤¾ à¤šà¤¾à¤¹à¤¤à¥‡ à¤¹à¥ˆà¤‚?",
        enterGame:
          "à¤•à¥à¤¯à¤¾ à¤†à¤ª à¤µà¤¾à¤•à¤ˆ à¤–à¥‡à¤² à¤®à¥‡à¤‚ à¤ªà¥à¤°à¤µà¥‡à¤¶ à¤•à¤°à¤¨à¤¾ à¤šà¤¾à¤¹à¤¤à¥‡ à¤¹à¥ˆà¤‚?",
        cancel: "à¤°à¤¦à¥à¤¦ à¤•à¤°à¤¨à¤¾",
        confirm: "à¤ªà¥à¤·à¥à¤Ÿà¤¿ à¤•à¤°à¤¨à¤¾",
        success: "à¤¸à¤«à¤²à¤¤à¤¾",
        cancelled: "à¤°à¤¦à¥à¤¦ à¤•à¤°à¤¨à¤¾",
        fail: "à¤µà¤¿à¤«à¤²",
        del: "à¤®à¤¿à¤Ÿà¤¾à¤¨à¤¾",
        copy: "à¤ªà¥à¤°à¤¤à¤¿à¤²à¤¿à¤ªà¤¿",
        copySuccess: "à¤•à¥‰à¤ªà¥€ à¤¸à¤«à¤²",
        required: "à¤¯à¤¹ à¤†à¤µà¤¶à¥à¤¯à¤• à¤¹à¥ˆ",
        pleaseRequired:
          "à¤•à¥ƒà¤ªà¥à¤¯à¤¾ à¤†à¤µà¤¶à¥à¤¯à¤• à¤«à¤¼à¥€à¤²à¥à¤¡ à¤­à¤°à¥‡à¤‚",
        passwordError:
          "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤•à¥€ à¤²à¤‚à¤¬à¤¾à¤ˆ 6 à¤¸à¥‡ à¤•à¤® à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹ à¤¸à¤•à¤¤à¥€, à¤…à¤•à¥à¤·à¤°à¥‹à¤‚ à¤”à¤° à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤“à¤‚ à¤•à¤¾ à¤¸à¤‚à¤¯à¥‹à¤œà¤¨ à¤¹à¥‹à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤",
        pleaseEmail:
          "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤¸à¤¹à¥€ à¤ˆà¤®à¥‡à¤² à¤ªà¤¤à¤¾ à¤­à¤°à¥‡à¤‚",
        informationTip:
          "à¤†à¤ªà¤•à¥€ à¤²à¥‰à¤—à¤¿à¤¨ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤¸à¤®à¤¾à¤ªà¥à¤¤ à¤¹à¥‹ à¤—à¤ˆ à¤¹à¥ˆ, à¤•à¥ƒà¤ªà¤¯à¤¾ à¤«à¤¿à¤° à¤¸à¥‡ à¤²à¥‰à¤—à¤¿à¤¨ à¤•à¤°à¥‡à¤‚!",
        informationTip1:
          "à¤†à¤ªà¤•à¤¾ à¤–à¤¾à¤¤à¤¾ à¤•à¤¹à¥€à¤‚ à¤”à¤° à¤²à¥‰à¤— à¤‡à¤¨ à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤¹à¥ˆ, à¤•à¥ƒà¤ªà¤¯à¤¾ à¤…à¤ªà¤¨à¤¾ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¸à¤®à¤¯ à¤ªà¤° à¤¬à¤¦à¤²à¥‡à¤‚!",
        noData: "à¤•à¥‹à¤ˆ à¤¡à¥‡à¤Ÿà¤¾ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆ",
        presaleRule:
          'à¤ªà¥à¤°à¥€à¤¸à¥‡à¤² à¤®à¥‡à¤‚ à¤­à¤¾à¤— à¤²à¥‡à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤‰à¤ªà¤¯à¥‹à¤—à¤•à¤°à¥à¤¤à¤¾à¤“à¤‚ à¤•à¥‡ à¤µà¥ˆà¤§ à¤…à¤§à¤¿à¤•à¤¾à¤°à¥‹à¤‚ à¤”à¤° à¤¹à¤¿à¤¤à¥‹à¤‚ à¤•à¥€ à¤°à¤•à¥à¤·à¤¾ à¤•à¥‡ à¤²à¤¿à¤ à¤”à¤° à¤ªà¥à¤°à¥€à¤¸à¥‡à¤² à¤•à¥‡ à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯ à¤¸à¤‚à¤šà¤¾à¤²à¤¨ à¤†à¤¦à¥‡à¤¶ à¤•à¥‹ à¤¬à¤¨à¤¾à¤ à¤°à¤–à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤, à¤¨à¤¿à¤¯à¤®à¥‹à¤‚ à¤•à¥‹ à¤ªà¥à¤°à¤¾à¤¸à¤‚à¤—à¤¿à¤• à¤¸à¤®à¤à¥Œà¤¤à¥‹à¤‚ à¤”à¤° à¤°à¤¾à¤·à¥à¤Ÿà¥à¤°à¥€à¤¯ à¤•à¤¾à¤¨à¥‚à¤¨à¥‹à¤‚ à¤”à¤° à¤µà¤¿à¤¨à¤¿à¤¯à¤®à¥‹à¤‚ à¤•à¥‡ à¤¨à¤¿à¤¯à¤®à¥‹à¤‚ à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° à¤¤à¥ˆà¤¯à¤¾à¤° à¤•à¤¿à¤¯à¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤…à¤§à¥à¤¯à¤¾à¤¯ 1 à¤ªà¤°à¤¿à¤­à¤¾à¤·à¤¾ 1.1 à¤ªà¥à¤°à¥€à¤¸à¥‡à¤² à¤ªà¤°à¤¿à¤­à¤¾à¤·à¤¾: à¤à¤• à¤¬à¤¿à¤•à¥à¤°à¥€ à¤®à¥‰à¤¡à¤² à¤•à¥‹ à¤¸à¤‚à¤¦à¤°à¥à¤­à¤¿à¤¤ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ à¤œà¤¿à¤¸à¤®à¥‡à¤‚ à¤à¤• à¤µà¥à¤¯à¤¾à¤ªà¤¾à¤°à¥€ à¤à¤• à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤¯à¤¾ à¤¸à¥‡à¤µà¤¾ à¤¯à¥‹à¤œà¤¨à¤¾ à¤ªà¥à¤°à¤¦à¤¾à¤¨ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ, à¤ªà¥‚à¤°à¥à¤µ-à¤¬à¤¿à¤•à¥à¤°à¥€ à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤‰à¤ªà¤•à¤°à¤£ à¤•à¥‡ à¤®à¤¾à¤§à¥à¤¯à¤® à¤¸à¥‡ à¤‰à¤ªà¤­à¥‹à¤•à¥à¤¤à¤¾ à¤†à¤¦à¥‡à¤¶ à¤à¤•à¤¤à¥à¤° à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ, à¤”à¤° à¤ªà¥‚à¤°à¥à¤µ à¤¸à¤®à¤à¥Œà¤¤à¥‡ à¤•à¥‡ à¤…à¤¨à¥à¤¸à¤¾à¤° à¤‰à¤ªà¤­à¥‹à¤•à¥à¤¤à¤¾à¤“à¤‚ à¤•à¥‹ à¤¸à¤¾à¤®à¤¾à¤¨ à¤”à¤° à¤¸à¥‡à¤µà¤¾à¤à¤‚ à¤ªà¥à¤°à¤¦à¤¾à¤¨ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ . "à¤¡à¤¿à¤ª à¤“à¤à¤¸ à¤‡à¤Ÿ" à¤ªà¥‚à¤°à¥à¤µ-à¤µà¤¿à¤¤à¤°à¤¿à¤¤ à¤•à¤®à¥‹à¤¡à¤¿à¤Ÿà¥€ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥€ à¤à¤• à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤ à¤®à¤¾à¤¤à¥à¤°à¤¾ à¤•à¥‹ à¤¸à¤‚à¤¦à¤°à¥à¤­à¤¿à¤¤ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ "à¤œà¤®à¤¾" à¤šà¥‹à¤° à¤›à¥‹à¤Ÿà¥‡ à¤–à¥‡à¤²à¥‹à¤‚ à¤®à¥‡à¤‚ à¤­à¤¾à¤— à¤²à¥‡à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤”à¤° à¤…à¤§à¤¿à¤• à¤œà¤®à¤¾ à¤œà¥€à¤¤à¤¨à¥‡ à¤•à¤¾ à¤…à¤µà¤¸à¤° à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤ à¤µà¤¸à¥à¤¤à¥à¤“à¤‚ à¤•à¥‡ à¤²à¤¿à¤ à¤‡à¤¸à¤•à¤¾ à¤ªà¥à¤°à¤¤à¥à¤¯à¤•à¥à¤· à¤°à¥‚à¤ª à¤¸à¥‡ à¤†à¤¦à¤¾à¤¨-à¤ªà¥à¤°à¤¦à¤¾à¤¨ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾ à¤¸à¤•à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤œà¤®à¤¾ à¤¯à¤¹ à¤ªà¥à¤°à¤¤à¤¿à¤¦à¥‡à¤¯ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¥¤ 1.3 à¤ªà¥à¤°à¥€à¤¸à¥‡à¤² à¤‰à¤¤à¥à¤ªà¤¾à¤¦: à¤ªà¥à¤°à¥€à¤¸à¥‡à¤² à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤Ÿà¥‚à¤² à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¤•à¥‡ à¤µà¥à¤¯à¤¾à¤ªà¤¾à¤°à¤¿à¤¯à¥‹à¤‚ à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤œà¤¾à¤°à¥€ à¤•à¤¿à¤ à¤—à¤ à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤•à¥‹ à¤¸à¤‚à¤¦à¤°à¥à¤­à¤¿à¤¤ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤¶à¥€à¤°à¥à¤·à¤• à¤¯à¤¾ à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤µà¤¿à¤µà¤°à¤£ à¤ªà¥ƒà¤·à¥à¤  à¤ªà¤° à¤•à¥‡à¤µà¤² à¤ªà¥‚à¤°à¥à¤µ-à¤µà¤¿à¤•à¥à¤°à¤¯ à¤¶à¤¬à¥à¤¦à¥‹à¤‚ à¤•à¥‹ à¤šà¤¿à¤¹à¥à¤¨à¤¿à¤¤ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆ, à¤à¤¸à¥‡ à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤œà¥‹ à¤ªà¥‚à¤°à¥à¤µ-à¤µà¤¿à¤•à¥à¤°à¤¯ à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤‰à¤ªà¤•à¤°à¤£ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤¨à¤¹à¥€à¤‚ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚, à¤µà¥‡ à¤ªà¥‚à¤°à¥à¤µ-à¤¬à¤¿à¤•à¥à¤°à¥€ à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤¨à¤¹à¥€à¤‚ à¤¹à¥ˆà¤‚à¥¤ 1.4 à¤ªà¥‚à¤°à¥à¤µ-à¤¬à¤¿à¤•à¥à¤°à¥€ à¤ªà¥à¤°à¤£à¤¾à¤²à¥€: à¤ªà¥‚à¤°à¥à¤µ-à¤¬à¤¿à¤•à¥à¤°à¥€ à¤®à¥‰à¤¡à¤² à¤¬à¤¿à¤•à¥à¤°à¥€ à¤•à¥‡ à¤²à¤¿à¤ à¤µà¥à¤¯à¤¾à¤ªà¤¾à¤°à¤¿à¤¯à¥‹à¤‚ à¤•à¤¾ à¤¸à¤®à¤°à¥à¤¥à¤¨ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤ªà¥à¤°à¤¦à¤¾à¤¨ à¤•à¤¿à¤ à¤—à¤ à¤¸à¤¿à¤¸à¥à¤Ÿà¤® à¤‰à¤¤à¥à¤ªà¤¾à¤¦ à¤‰à¤ªà¤•à¤°à¤£ à¤•à¥‹ à¤¸à¤‚à¤¦à¤°à¥à¤­à¤¿à¤¤ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ .1.5 à¤ªà¥à¤°à¥€à¤¸à¥‡à¤² à¤•à¤®à¥‹à¤¡à¤¿à¤Ÿà¥€ à¤®à¥‚à¤²à¥à¤¯: à¤ªà¥à¤°à¥€à¤¸à¥‡à¤² à¤•à¤®à¥‹à¤¡à¤¿à¤Ÿà¥€ à¤•à¥€ à¤¬à¤¿à¤•à¥à¤°à¥€ à¤®à¥‚à¤²à¥à¤¯ à¤•à¥‹ à¤¸à¤‚à¤¦à¤°à¥à¤­à¤¿à¤¤ à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤ªà¥à¤°à¥€à¤¸à¥‡à¤² à¤®à¤¾à¤² à¤•à¥€ à¤•à¥€à¤®à¤¤ à¤¦à¥‹ à¤­à¤¾à¤—à¥‹à¤‚ à¤¸à¥‡ à¤¬à¤¨à¥€ à¤¹à¥‹à¤¤à¥€ à¤¹à¥ˆ: à¤¡à¤¿à¤ªà¥‹ à¤‡à¤¸à¥‡ à¤”à¤° à¤…à¤‚à¤¤à¤¿à¤® à¤­à¥à¤—à¤¤à¤¾à¤¨à¥¤',
        more: "à¤…à¤§à¤¿à¤•",
        verificationTip:
          "à¤•à¥à¤¯à¤¾ à¤¯à¤¹ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¨ à¤•à¥‹à¤¡ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤° à¤¸à¤•à¤¤à¤¾ à¤¹à¥ˆ? à¤•à¥ƒà¤ªà¤¯à¤¾ à¤—à¥à¤°à¤¾à¤¹à¤• à¤¸à¥‡à¤µà¤¾ à¤¸à¥‡ à¤¸à¤‚à¤ªà¤°à¥à¤• à¤•à¤°à¥‡à¤‚",
        symbolU: "à¤¯à¥‚à¤à¤¸à¤¡à¥€à¤Ÿà¥€",
        newes: "à¤¨à¤µà¥€à¤¨à¤¤à¤® à¤˜à¥‹à¤·à¤£à¤¾",
        upgraded:
          "à¤˜à¤Ÿà¤¨à¤¾ à¤•à¥‹ à¤…à¤ªà¤—à¥à¤°à¥‡à¤¡ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾ à¤°à¤¹à¤¾ à¤¹à¥ˆ......",
        gameTit:
          "à¤¶à¥‡à¤· à¤°à¤¾à¤¶à¤¿ à¤•à¥€ à¤µà¤¸à¥‚à¤²à¥€ à¤µà¤¿à¤«à¤² à¤°à¤¹à¥€",
        gameLeft: "à¤ªà¥à¤¨à¤ƒ à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤•à¤°à¥‡à¤‚",
        gameRight: "à¤®à¥ˆà¤¨à¥à¤…à¤² à¤°à¥€à¤¸à¤¾à¤‡à¤•à¥à¤²à¤¿à¤‚à¤—",
        tab: {
          hot: "à¤²à¥‹à¤•à¤ªà¥à¤°à¤¿à¤¯",
          lottety: "à¤²à¥‰à¤Ÿà¤°à¥€",
          fishing: "à¤®à¤›à¤²à¥€ à¤ªà¤•à¤¡à¤¼à¤¨à¥‡",
          electronic: "Slots",
          physical: "à¤µà¥à¤¯à¤¾à¤¯à¤¾à¤® à¤¶à¤¿à¤•à¥à¤·à¤¾",
          realperson: "à¤µà¤¾à¤¸à¥à¤¤à¤µà¤¿à¤• à¤µà¥à¤¯à¤•à¥à¤¤à¤¿",
          chess: "à¤¶à¤¤à¤°à¤‚à¤œ",
          smallgame: "à¤›à¥‹à¤Ÿà¤¾ à¤–à¥‡à¤²",
          safe: "à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤",
        },
        home: {
          lottetyTitle:
            "à¤¸à¤¬à¤¸à¥‡ à¤¬à¤¡à¤¼à¤¾ à¤†à¤—à¤¾à¤®à¥€ à¤²à¥‰à¤Ÿà¤°à¥€ à¤¡à¥à¤°à¤¾",
          recharge: "à¤«à¤¿à¤° à¤¸à¥‡ à¤¦à¤¾à¤® à¤²à¤—à¤¾à¤¨à¤¾",
          balance: "à¤¸à¤‚à¤¤à¥à¤²à¤¨",
          customerService: "à¤—à¥à¤°à¤¾à¤¹à¤• à¤¸à¥‡à¤µà¤¾",
          lottety: "à¤²à¥‰à¤Ÿà¤°à¥€",
          wealth: "à¤¸à¤‚à¤ªà¤¦à¤¾",
          leftTime: "à¤–à¤°à¥€à¤¦à¤¨à¥‡ à¤•à¤¾ à¤¬à¤šà¤¾ à¤¸à¤®à¤¯",
          min: "à¤®à¤¿à¤¨à¤Ÿ",
          sec: "à¤¸à¥‡à¤•à¤‚à¤¡",
          newTitle: "à¤¸à¤®à¤¾à¤šà¤¾à¤°",
          newCenter: "à¤¸à¤®à¤¾à¤šà¤¾à¤° à¤•à¥‡à¤‚à¤¦à¥à¤°",
          newDes: "à¤¸à¤®à¤¾à¤šà¤¾à¤° à¤•à¥‡à¤‚à¤¦à¥à¤°",
          wrTime: "à¤µà¥‡à¤¬à¤¸à¤¾à¤‡à¤Ÿ à¤šà¤²à¤¨à¥‡ à¤•à¤¾ à¤¸à¤®à¤¯",
          days: "à¤¦à¤¿à¤¨",
          hours: "à¤˜à¤‚à¤Ÿà¥‡",
          minutes: "à¤®à¤¿à¤¨à¤Ÿ",
          seconds: "à¤¸à¥‡à¤•à¤‚à¤¡",
          pengguna: "à¤–à¤¿à¤²à¤¾à¤¡à¤¼à¥€",
          jumlahTaruhan: "à¤¸à¤Ÿà¥à¤Ÿà¥‡à¤¬à¤¾à¤œà¥€ à¤•à¤¾ à¤•à¥à¤²",
          Online: "à¤‘à¤¨à¤²à¤¾à¤‡à¤¨",
          penarikanHari: "à¤†à¤œ à¤•à¥€ à¤¨à¤¿à¤•à¤¾à¤¸à¥€",
          gin: "à¤®à¥‡à¤‚",
          got: "à¤®à¤¿à¤²à¤¨à¤¾",
          GameName: "à¤®à¤›à¤²à¥€ à¤ªà¤•à¤¡à¤¼à¤¨à¥‡ à¤•à¤¾ à¤–à¥‡à¤²",
          popular: "à¤²à¥‹à¤•à¤ªà¥à¤°à¤¿à¤¯ à¤¸à¤¿à¤«à¤¾à¤°à¤¿à¤¶",
          platform: "à¤®à¤‚à¤š à¤•à¥€ à¤¸à¤¿à¤«à¤¾à¤°à¤¿à¤¶",
          Game1: "5D Lotre",
          Game2: "Win Go",
          Game3: "Slots",
          Game4: "K3 Lotre",
          Game5: "à¤•à¥ˆà¤¸à¥€à¤¨à¥‹",
          Game6: "à¤–à¥‡à¤²",
          Game7: "16 à¤¨à¤‚à¤¬à¤° à¤šà¥à¤¨à¥‡à¤‚",
          Game8: "à¤¦à¥‡à¤¶",
          Game9: "à¤¸à¤¿à¤‚à¤—à¤¾à¤ªà¥à¤° 4à¤¡à¥€",
          Game10: "Vietnam Lottery",
          Game11: "à¤¯à¥‚à¤¨à¤¿à¤µà¤°à¥à¤¸à¤² 4à¤¡à¥€",
          Game12: "à¤®à¤²à¥‡à¤¶à¤¿à¤¯à¤¾à¤ˆ 4à¤¡à¥€",
          Game13: "à¤¦à¤¸ à¤¹à¤œà¤¾à¤° à¤¸à¥‡ à¤…à¤§à¤¿à¤• à¤¶à¤¬à¥à¤¦",
          Game14: "à¤¸à¥à¤ªà¥€à¤¡ 4à¤¡à¥€",
          Game1Tip:
            "à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾/à¤‰à¤šà¥à¤š/à¤¨à¤¿à¤®à¥à¤¨/à¤µà¤¿à¤·à¤®/à¤¸à¤®",
          Game2Tip:
            "à¤œà¥€à¤¤à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤‚à¤–à¥à¤¯à¤¾/à¤¹à¤°à¤¾/à¤¬à¥ˆà¤‚à¤—à¤¨à¥€/à¤²à¤¾à¤² à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤²à¤—à¤¾à¤à¤‚",
          Game3Tip:
            "à¤²à¤¿à¤¯à¤¾à¤¨ à¤²à¤¿à¤¯à¤¾à¤¨à¤•à¤¾à¤¨/à¤²à¤¿à¤¯à¤¾à¤¨ à¤²à¤¿à¤¯à¤¾à¤¨à¤•à¤¾à¤¨/à¤²à¤¿à¤¯à¤¾à¤¨ à¤²à¤¿à¤¯à¤¾à¤¨à¤•à¤¾à¤¨",
          Game4Tip:
            "à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾/à¤‰à¤šà¥à¤š/à¤¨à¤¿à¤®à¥à¤¨/à¤µà¤¿à¤·à¤®/à¤¸à¤®",
          Game5Tip:
            "à¤¬à¥ˆà¤•à¤°à¥‡à¤Ÿ/à¤¡à¥à¤°à¥ˆà¤—à¤¨ à¤Ÿà¤¾à¤‡à¤—à¤°/à¤°à¥‚à¤²à¥‡/à¤‡à¤¸ à¤ªà¥à¤°à¤•à¤¾à¤° à¤¬à¥‹",
          Game6Tip:
            "à¤°à¥€à¤¯à¤² à¤Ÿà¤¾à¤‡à¤® à¤‡à¤µà¥‡à¤‚à¤Ÿ/à¤‡à¤¸à¤®à¥‡à¤‚ à¤¸à¤¬ à¤•à¥à¤›",
          Game7Tip:
            "à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾/à¤‰à¤šà¥à¤š/à¤¨à¤¿à¤®à¥à¤¨/à¤µà¤¿à¤·à¤®/à¤¸à¤®",
          Game8Tip:
            "à¤°à¥€à¤¯à¤² à¤Ÿà¤¾à¤‡à¤® à¤‡à¤µà¥‡à¤‚à¤Ÿ/à¤‡à¤¸à¤®à¥‡à¤‚ à¤¸à¤¬ à¤•à¥à¤›",
          Game9Tip:
            "à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾/à¤‰à¤šà¥à¤š/à¤¨à¤¿à¤®à¥à¤¨/à¤µà¤¿à¤·à¤®/à¤¸à¤®",
          Game10Tip:
            "à¤œà¥€à¤¤à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤‚à¤–à¥à¤¯à¤¾/à¤¹à¤°à¤¾/à¤¬à¥ˆà¤‚à¤—à¤¨à¥€/à¤²à¤¾à¤² à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤²à¤—à¤¾à¤à¤‚",
          Game11Tip:
            "à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾/à¤‰à¤šà¥à¤š/à¤¨à¤¿à¤®à¥à¤¨/à¤µà¤¿à¤·à¤®/à¤¸à¤®",
          Game12Tip:
            "à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾/à¤‰à¤šà¥à¤š/à¤¨à¤¿à¤®à¥à¤¨/à¤µà¤¿à¤·à¤®/à¤¸à¤®",
          Game13Tip:
            "à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾/à¤‰à¤šà¥à¤š/à¤¨à¤¿à¤®à¥à¤¨/à¤µà¤¿à¤·à¤®/à¤¸à¤®",
          Game14Tip:
            "à¤…à¤¨à¥à¤®à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾/à¤‰à¤šà¥à¤š/à¤¨à¤¿à¤®à¥à¤¨/à¤µà¤¿à¤·à¤®/à¤¸à¤®",
          Game6t: "à¤¸à¤¬à¤¾",
          nextDraw: "à¤…à¤—à¤²à¤¾ à¤¡à¥à¤°à¤¾",
          playNow: "à¤…à¤¬ à¤–à¥‡à¤²à¤¤à¥‡ à¤¹à¥ˆà¤‚",
          howWorks:
            "à¤¯à¤¹ à¤•à¤¾à¤® à¤•à¤¿à¤¸ à¤ªà¥à¤°à¤•à¤¾à¤° à¤•à¤°à¤¤à¤¾ à¤¹à¥ˆ?",
          game_title1: "à¤à¤• à¤–à¥‡à¤² à¤šà¥à¤¨à¥‡à¤‚",
          game_title2: "à¤…à¤ªà¤¨à¤¾ à¤¨à¤‚à¤¬à¤° à¤šà¥à¤¨à¥‡à¤‚",
          game_title3: "à¤¶à¤°à¥à¤¤ à¤°à¤¾à¤¶à¤¿",
          game_title4: "à¤¬à¥‹à¤¨à¤¸ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚",
          game_First: "à¤ªà¤¹à¤²à¤¾ à¤•à¤¦à¤®",
          game_Second: "à¤¦à¥‚à¤¸à¤°à¤¾ à¤•à¤¦à¤®",
          game_Third: "à¤¤à¥€à¤¸à¤°à¤¾ à¤šà¤°à¤£",
          game_Fourth: "à¤šà¥Œà¤¥à¤¾ à¤šà¤°à¤£",
          list: [
            {
              title: "à¤à¤• à¤–à¥‡à¤² à¤šà¥à¤¨à¥‡à¤‚",
              txt: "à¤†à¤ª 1 à¤®à¤¿à¤¨à¤Ÿ, 3 à¤®à¤¿à¤¨à¤Ÿ, 5 à¤®à¤¿à¤¨à¤Ÿ à¤”à¤° 10 à¤®à¤¿à¤¨à¤Ÿ à¤•à¥‡ à¤²à¥‰à¤Ÿà¤°à¥€ à¤–à¥‡à¤² à¤–à¥‡à¤²à¤¨à¤¾ à¤šà¥à¤¨ à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤",
            },
            {
              title: "à¤…à¤ªà¤¨à¤¾ à¤¨à¤‚à¤¬à¤° à¤šà¥à¤¨à¥‡à¤‚",
              txt: "à¤…à¤ªà¤¨à¤¾ à¤²à¤•à¥€ à¤¨à¤‚à¤¬à¤° à¤¯à¤¾ à¤°à¤‚à¤— à¤šà¥à¤¨à¥‡à¤‚à¥¤",
            },
            {
              title: "à¤¶à¤°à¥à¤¤ à¤°à¤¾à¤¶à¤¿",
              txt: "à¤µà¤¹ à¤°à¤¾à¤¶à¤¿ à¤šà¥à¤¨à¥‡à¤‚ à¤œà¤¿à¤¸ à¤ªà¤° à¤†à¤ª à¤¦à¤¾à¤‚à¤µ à¤²à¤—à¤¾à¤¨à¤¾ à¤šà¤¾à¤¹à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤”à¤° à¤ªà¥à¤·à¥à¤Ÿà¤¿ à¤•à¤°à¥‡à¤‚à¥¤",
            },
            {
              title: "à¤¬à¥‹à¤¨à¤¸ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚",
              txt: "à¤œà¤¬ à¤†à¤ª à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤…à¤µà¤§à¤¿ à¤•à¥€ à¤­à¤¾à¤—à¥à¤¯à¤¶à¤¾à¤²à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤•à¤¾ à¤šà¤¯à¤¨ à¤•à¤°à¤¤à¥‡ à¤¹à¥ˆà¤‚, à¤¤à¥‹ à¤¸à¤¿à¤¸à¥à¤Ÿà¤® à¤¸à¥à¤µà¤šà¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤†à¤ªà¤•à¥€ à¤¶à¥‡à¤· à¤°à¤¾à¤¶à¤¿ à¤®à¥‡à¤‚ à¤¬à¥‹à¤¨à¤¸ à¤œà¥‹à¤¡à¤¼ à¤¦à¥‡à¤—à¤¾",
            },
          ],
        },
        index: {
          Charttren: "à¤šà¤¾à¤°à¥à¤Ÿ à¤Ÿà¥à¤°à¥‡à¤¨",
          Total: "à¤•à¥à¤²",
          walletBalance: "à¤µà¥‰à¤²à¥‡à¤Ÿ à¤¬à¥ˆà¤²à¥‡à¤‚à¤¸",
          recharge: "à¤«à¤¿à¤° à¤¸à¥‡ à¤¦à¤¾à¤® à¤²à¤—à¤¾à¤¨à¤¾",
          withdraw: "à¤¨à¤¿à¤•à¤¾à¤²à¤¨à¤¾",
          lotteyRule: "à¤²à¥‰à¤Ÿà¤°à¥€ à¤¨à¤¿à¤¯à¤®",
          iKnow: "à¤®à¥à¤à¥‡ à¤ªà¤¤à¤¾ à¤¹à¥ˆ",
          big: "à¤¬à¤¡à¤¼à¥‡",
          small: "à¤›à¥‹à¤Ÿà¤¾",
          green: "à¤¹à¤°à¤¾",
          violet: "à¤¬à¥ˆà¤‚à¤—à¤¨à¥€",
          red: "à¤²à¤¾à¤²",
          selectGreen: "à¤¹à¤°à¤¾ à¤šà¥à¤¨à¥‡à¤‚",
          selectViolet: "à¤¬à¥ˆà¤‚à¤—à¤¨à¥€ à¤šà¥à¤¨à¥‡à¤‚",
          selectRed: "à¤²à¤¾à¤² à¤•à¤¾ à¤šà¤¯à¤¨ à¤•à¤°à¥‡à¤‚",
          randomBetting:
            "à¤¯à¤¾à¤¦à¥ƒà¤šà¥à¤›à¤¿à¤• à¤¸à¤Ÿà¥à¤Ÿà¥‡à¤¬à¤¾à¤œà¥€",
          gameRecord: "à¤—à¥‡à¤® à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡",
          myGameRecord: "à¤®à¥‡à¤°à¤¾ à¤—à¥‡à¤® à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡",
          period: "à¤…à¤µà¤§à¤¿",
          blockHeight: "à¤¬à¥à¤²à¥‰à¤• à¤Šà¤‚à¤šà¤¾à¤ˆ",
          blockTime: "à¤¬à¥à¤²à¥‰à¤• à¤¸à¤®à¤¯",
          hashValue: "à¤¹à¥ˆà¤¶ à¤®à¤¾à¤¨",
          number: "à¤¸à¤‚à¤–à¥à¤¯à¤¾",
          size: "à¤†à¤•à¤¾à¤°",
          color: "à¤°à¤‚à¤—",
          result: "à¤¨à¤¤à¥€à¤œà¤¾",
          sum: "à¤œà¥‹à¤¡à¤¼",
          high: "à¤Šà¤à¤šà¤¾",
          low: "à¤•à¤®",
          odd: "à¤…à¤œà¥€à¤¬",
          even: "à¤”à¤° à¤­à¥€",
          money: "à¤ªà¥ˆà¤¸à¥‡",
          multiply: " à¤—à¥à¤£à¤¾",
          presaleRule: "à¤ªà¥‚à¤°à¥à¤µ à¤¬à¤¿à¤•à¥à¤°à¥€ à¤¨à¤¿à¤¯à¤®",
          presaleRuleTit:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤œà¤¾à¤‚à¤šà¥‡à¤‚ à¤•à¤¿ à¤®à¥ˆà¤‚ à¤ªà¥‚à¤°à¥à¤µ-à¤¬à¤¿à¤•à¥à¤°à¥€ à¤¨à¤¿à¤¯à¤®à¥‹à¤‚ à¤¸à¥‡ à¤¸à¤¹à¤®à¤¤ à¤¹à¥‚à¤‚",
          totalPrice: "à¤•à¥à¤² à¤•à¥€à¤®à¤¤",
          Select: "à¤šà¥à¤¨à¤¨à¤¾",
          SelectCon: "à¤¸à¤Ÿà¥à¤Ÿà¥‡à¤¬à¤¾à¤œà¥€ à¤¸à¤¾à¤®à¤—à¥à¤°à¥€",
          firstPage: "à¤¯à¤¹ à¤ªà¤¹à¤²à¤¾ à¤ªà¥‡à¤œ à¤¹à¥ˆ",
          lastpage: "à¤¯à¤¹ à¤…à¤‚à¤¤à¤¿à¤® à¤ªà¥ƒà¤·à¥à¤  à¤¹à¥ˆ",
          periodDetail: "à¤…à¤µà¤§à¤¿ à¤µà¤¿à¤µà¤°à¤£",
          orderNumber: "à¤•à¥à¤°à¤® à¤¸à¤‚à¤–à¥à¤¯à¤¾",
          contractMoney: "à¤…à¤¨à¥à¤¬à¤‚à¤§ à¤§à¤¨",
          contractCount: "à¤…à¤¨à¥à¤¬à¤‚à¤§ à¤—à¤£à¤¨à¤¾",
          delivery: "à¤µà¤¿à¤¤à¤°à¤£",
          fee: "à¤¶à¥à¤²à¥à¤•",
          openPrice: "à¤–à¥à¤²à¥€ à¤•à¥€à¤®à¤¤",
          status: "à¤¸à¥à¤¥à¤¿à¤¤à¤¿",
          amount: "à¤°à¤¾à¤¶à¤¿",
          createTime: "à¤¨à¤¿à¤°à¥à¤®à¤¾à¤£ à¤•à¤¾ à¤¸à¤®à¤¯",
          BettingAssistant:
            "à¤¬à¥‡à¤Ÿà¤¿à¤‚à¤— à¤…à¤¸à¤¿à¤¸à¥à¤Ÿà¥‡à¤‚à¤Ÿ (à¤ªà¤¿à¤›à¤²à¥‡ 100 à¤ªà¥€à¤°à¤¿à¤¯à¤¡)",
          Missing: "à¤²à¤¾à¤ªà¤¤à¤¾",
          AvgMissing: "à¤”à¤¸à¤¤ à¤—à¥à¤®",
          Frequency: "à¤†à¤µà¥ƒà¤¤à¥à¤¤à¤¿",
          MaxContinued: "à¤…à¤§à¤¿à¤•à¤¤à¤® à¤œà¤¾à¤°à¥€",
          PleaseInteger:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤à¤• à¤ªà¥‚à¤°à¥à¤£à¤¾à¤‚à¤• à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
          Odds: "à¤•à¤ à¤¿à¤¨à¤¾à¤‡à¤¯à¤¾à¤",
          publicQuery:
            "à¤¸à¤¾à¤°à¥à¤µà¤œà¤¨à¤¿à¤• à¤¶à¥à¤°à¥ƒà¤‚à¤–à¤²à¤¾ à¤•à¥à¤µà¥‡à¤°à¥€",
          howPlay: "à¤–à¥‡à¤²à¤¨à¥‡ à¤•à¥‡ à¤¨à¤¿à¤¯à¤®",
          distancedraw: "à¤¶à¥‡à¤· à¤¸à¤®à¤¯",
          multiple: "à¤—à¥à¤£à¤¾",
          numberBets: "à¤•à¥à¤² à¤¶à¤°à¥à¤¤",
          reset: "à¤°à¥€à¤¸à¥‡à¤Ÿ",
          time: "à¤¸à¤®à¤¯",
          lotteryTime: "à¤Ÿà¤¾à¤‡à¤® à¤¡à¥à¤°à¤¾",
          notPressed: "à¤µà¤¿à¤«à¤²",
          pressed: "à¤¸à¤«à¤²à¤¤à¤¾",
          bedrawn: "à¤ªà¥à¤°à¤¤à¥€à¤•à¥à¤·à¤¾ à¤¡à¥à¤°à¤¾",
          awarding: "à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤° à¤¦à¥‡à¤¨à¥‡",
          periodNmu:
            "à¤¸à¤Ÿà¥à¤Ÿà¥‡à¤¬à¤¾à¤œà¥€ à¤…à¤µà¤§à¤¿ à¤¸à¤‚à¤–à¥à¤¯à¤¾",
          lotteryNmu: "à¤²à¥‰à¤Ÿà¤°à¥€ à¤¨à¤‚à¤¬à¤°",
        },
        myProfile: {
          title: "à¤®à¥‡à¤°à¥€ à¤ªà¥à¤°à¥‹à¤«à¤¾à¤‡à¤²",
          profilePhoto: "à¤ªà¥à¤°à¥‹à¤«à¤¼à¤¾à¤‡à¤² à¤¤à¤¸à¥à¤µà¥€à¤°",
          nickname: "à¤‰à¤ªà¤¨à¤¾à¤®",
          modifyNickname: "à¤‰à¤ªà¤¨à¤¾à¤® à¤¸à¤‚à¤¶à¥‹à¤§à¤¿à¤¤ à¤•à¤°à¥‡à¤‚",
          newNicknameTit: "à¤‰à¤ªà¤¨à¤¾à¤®",
        },
        about: {
          title: "à¤²à¤—à¤­à¤—",
          Games: "à¤–à¥‡à¤²",
          privacypolicy: "à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾ à¤¨à¥€à¤¤à¤¿",
          disclosureagreement:
            "à¤œà¥‹à¤–à¤¿à¤® à¤ªà¥à¤°à¤•à¤Ÿà¥€à¤•à¤°à¤£ à¤¸à¤®à¤à¥Œà¤¤à¤¾",
        },
        privacypolicy: {
          title: "à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾ à¤¨à¥€à¤¤à¤¿",
          agree: "à¤œà¥‹à¤–à¤¿à¤® à¤ªà¥à¤°à¤•à¤Ÿà¥€à¤•à¤°à¤£ à¤¸à¤®à¤à¥Œà¤¤à¤¾",
        },
        keFuMenu: { title: "à¤—à¥à¤°à¤¾à¤¹à¤• à¤¸à¥‡à¤µà¤¾" },
        recharge: {
          title: "à¤«à¤¿à¤° à¤¸à¥‡ à¤¦à¤¾à¤® à¤²à¤—à¤¾à¤¨à¤¾",
          selectRecharge:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤à¤• à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤šà¥ˆà¤¨à¤² à¤šà¥à¤¨à¥‡à¤‚",
          next: "à¤…à¤—à¤²à¤¾",
          previous: "à¤ªà¥à¤°à¤¿à¤¯",
          rechargeAmount: "à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤°à¤¾à¤¶à¤¿",
          rechargeAmountRangeIpt:
            "à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤°à¤¾à¤¶à¤¿ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚ à¤¯à¤¾ à¤šà¥à¤¨à¥‡à¤‚",
          rechargeAmountRange: "à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤°à¤¾à¤¶à¤¿ à¤¸à¥€à¤®à¤¾",
        },
        rechargeChack: {
          title: "à¤«à¤¿à¤° à¤¸à¥‡ à¤¦à¤¾à¤® à¤²à¤—à¤¾à¤¨à¤¾",
          totalAmouunt: "à¤•à¥à¤² à¤°à¤¾à¤¶à¤¿",
          paymentMethod: "à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤•à¤¾ à¤¤à¤°à¥€à¤•à¤¾",
          localBank: "à¤¸à¥à¤¥à¤¾à¤¨à¥€à¤¯ à¤¬à¥ˆà¤‚à¤•",
          enterAmount: "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤°à¤¾à¤¶à¤¿ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
          theAmount:
            "à¤°à¤¾à¤¶à¤¿ 10 . à¤•à¤¾ à¤ªà¥‚à¤°à¥à¤£à¤¾à¤‚à¤• à¤¹à¥‹à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤",
          accountName: "à¤–à¤¾à¤¤à¤¾ à¤¨à¤¾à¤®",
          bankNumber: "à¤¬à¥ˆà¤‚à¤• à¤¨à¤‚à¤¬à¤°",
          bankName: "à¤¬à¥ˆà¤‚à¤• à¤•à¤¾ à¤¨à¤¾à¤®",
          paymentAmount: "à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤°à¤¾à¤¶à¤¿",
          orderNumber: "à¤•à¥à¤°à¤® à¤¸à¤‚à¤–à¥à¤¯à¤¾",
          creationTime: "à¤°à¤šà¤¨à¤¾ à¤¸à¤®à¤¯",
          transferAmount:
            "à¤†à¤ªà¤•à¥‡ à¤¦à¥à¤µà¤¾à¤°à¤¾ à¤¬à¤¨à¤¾à¤ à¤—à¤ à¤•à¥à¤°à¤® à¤®à¥‡à¤‚ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤£ à¤°à¤¾à¤¶à¤¿ à¤•à¥‹ à¤­à¤°à¤¨à¤¾ à¤¹à¥‹à¤—à¤¾, à¤…à¤¨à¥à¤¯à¤¥à¤¾ à¤œà¤®à¤¾ à¤¸à¤«à¤² à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹à¤—à¤¾",
          transferAmount2: "",
          transferAmount1:
            "à¤¨à¥‹à¤Ÿ: à¤¯à¤¦à¤¿ à¤§à¤¨ à¤¹à¤¸à¥à¤¤à¤¾à¤‚à¤¤à¤°à¤£ à¤ªà¥‚à¤°à¤¾ à¤¹à¥‹ à¤—à¤¯à¤¾ à¤¹à¥ˆ à¤¤à¥‹ à¤œà¤®à¤¾ à¤†à¤¦à¥‡à¤¶ à¤•à¥‹ à¤°à¤¦à¥à¤¦ à¤¨ à¤•à¤°à¥‡à¤‚",
          depositAmount: "à¤œà¤®à¤¾ à¤°à¤¾à¤¶à¤¿",
          upImgTitle:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤à¤• à¤²à¥‡à¤¨à¤¦à¥‡à¤¨ à¤°à¤¸à¥€à¤¦ à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚ à¤œà¤¿à¤¸à¤®à¥‡à¤‚ UTR . à¤¹à¥‹",
          upFormate:
            "à¤•à¥‡à¤µà¤² jpg,jpeg,png à¤ªà¥à¤°à¤¾à¤°à¥‚à¤ª à¤®à¥‡à¤‚ à¤šà¤¿à¤¤à¥à¤° à¤…à¤ªà¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚",
          selectFile:
            "à¤…à¤ªà¤²à¥‹à¤¡ à¤«à¤¼à¤¾à¤‡à¤² à¤•à¤¾ à¤šà¤¯à¤¨ à¤•à¤°à¥‡à¤‚",
        },
        touchngo: {
          title: "Touch N Go à¤«à¤¿à¤° à¤¸à¥‡ à¤¦à¤¾à¤® à¤²à¤—à¤¾à¤¨",
          name: "à¤¨à¤¾à¤®",
          mobileNumber: "à¤«à¤¼à¥‹à¤¨ à¤¨à¤‚à¤¬à¤° à¤ªà¥à¤°à¤¾à¤°à¥‚à¤ª",
        },
        rechargeRecord: {
          title: "à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡",
          unpaid: "à¤…à¤µà¥ˆà¤¤à¤¨à¤¿à¤•",
          eazyPay: "à¤ˆà¤œà¤¼à¥€à¤ªà¥‡",
          success: "à¤¸à¤«à¤²à¤¤à¤¾",
          others: "à¤…à¤¨à¥à¤¯",
        },
        paymentMethod: {
          title: "à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤•à¤¾ à¤¤à¤°à¥€à¤•à¤¾",
          totalPaid:
            "à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤•à¥€ à¤œà¤¾à¤¨à¥‡ à¤µà¤¾à¤²à¥€ à¤•à¥à¤² à¤°à¤¾à¤¶à¤¿",
          choose: "à¤à¤• à¤•à¤¾à¤°à¥à¤¡ à¤šà¥à¤¨à¥‡à¤‚",
          payNow: "à¤…à¤¬ à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤•à¤°à¥‡à¤‚",
          topInstructions: "à¤Ÿà¥‰à¤ª à¤…à¤ª à¤¨à¤¿à¤°à¥à¤¦à¥‡à¤¶",
          contentTmp1:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤‰à¤ªà¤°à¥‹à¤•à¥à¤¤ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤¬à¥ˆà¤‚à¤• à¤–à¤¾à¤¤à¥‡ à¤®à¥‡à¤‚ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤£ à¤•à¤°à¥‡à¤‚",
          contentTmp2:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¨ à¤•à¥‡ à¤²à¤¿à¤ à¤•à¤¾à¤°à¥à¤¡à¤§à¤¾à¤°à¤• à¤•à¤¾ à¤¨à¤¾à¤® à¤”à¤° à¤–à¤¾à¤¤à¤¾ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤¸à¤¹à¥€ à¤¢à¤‚à¤— à¤¸à¥‡ à¤­à¤°à¥‡à¤‚",
          contentTmp3:
            "à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤£ à¤•à¥‹ à¤à¤• à¤¬à¤¾à¤° à¤œà¤®à¤¾ à¤•à¤°à¥‡à¤‚, à¤•à¥ƒà¤ªà¤¯à¤¾ à¤¬à¤¾à¤°-à¤¬à¤¾à¤° à¤†à¤¦à¥‡à¤¶ à¤œà¤®à¤¾ à¤¨ à¤•à¤°à¥‡à¤‚",
          contentTmp4:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤£ à¤¸à¤®à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤¬à¤¾à¤¦ à¤†à¤¦à¥‡à¤¶ à¤œà¤®à¤¾ à¤•à¤°à¤¨à¤¾ à¤¸à¥à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤ à¤•à¤°à¥‡à¤‚, à¤…à¤¨à¥à¤¯à¤¥à¤¾ à¤¹à¤® à¤¸à¤®à¤¯ à¤ªà¤° à¤†à¤ªà¤•à¥‡ à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤•à¥€ à¤œà¤¾à¤‚à¤š à¤¨à¤¹à¥€à¤‚ à¤•à¤° à¤ªà¤¾à¤à¤‚à¤—à¥‡",
          waitingPayment:
            "à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤•à¥€ à¤ªà¥à¤°à¤¤à¥€à¤•à¥à¤·à¤¾ à¤•à¤°à¤¨à¤¾",
          receivingTitle:
            "à¤¬à¥ˆà¤‚à¤• à¤•à¤¾à¤°à¥à¤¡ à¤•à¥€ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¤¨à¤¾",
          confirm1: "à¤•à¥à¤°à¤® à¤¸à¤‚à¤–à¥à¤¯à¤¾",
          confirm2: "à¤¬à¥ˆà¤‚à¤• à¤•à¤¾ à¤¨à¤¾à¤®",
          confirm3: "à¤–à¤¾à¤¤à¤¾ à¤¨à¤¾à¤®",
          confirm4: "à¤¬à¥ˆà¤‚à¤• à¤–à¤¾à¤¤à¤¾ à¤¸à¤‚à¤–à¥à¤¯à¤¾",
          confirm5: "à¤†à¤ˆà¤à¤«à¤à¤¸à¤¸à¥€",
          confirm6: "à¤¡à¤¾à¤²à¥€",
          Required: "à¤¸à¤‚à¤¦à¤°à¥à¤­ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤­à¤°à¥‡à¤‚",
          Return: "à¤µà¤¾à¤ªà¤¸ à¤•à¤°à¤¨à¤¾",
        },
        promotion: {
          title: "à¤ªà¤¦à¥‹à¤¨à¥à¤¨à¤¤à¤¿",
          bouns: "à¤¬à¤•à¥à¤¶à¥€à¤¶",
          level_1: "à¤¸à¥à¤¤à¤° 1",
          level_2: "à¤²à¥‡à¤µà¤² 2",
          totalPeople: "à¤•à¥à¤² à¤²à¥‹à¤—",
          contribution: "à¤¯à¥‹à¤—à¤¦à¤¾à¤¨",
          code: "à¤®à¥‡à¤°à¤¾ à¤ªà¥à¤°à¤šà¤¾à¤° à¤•à¥‹à¤¡",
          link: "à¤®à¥‡à¤°à¤¾ à¤ªà¥à¤°à¤šà¤¾à¤° à¤²à¤¿à¤‚à¤•",
        },
        promoteRecord: {
          title: "à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡ à¤•à¥‹ à¤¬à¤¢à¤¼à¤¾à¤µà¤¾ à¤¦à¥‡à¤‚",
          People: "à¤²à¥‹à¤—",
        },
        bonusrecord: { title: "à¤¬à¤•à¥à¤¶à¥€à¤¶" },
        redenvelopes: {
          title: "à¤‰à¤ªà¤¹à¤¾à¤°",
          Hello: "à¤¨à¤®à¤¸à¥à¤¤à¥‡",
          Eveverone: "à¤à¤µà¤°à¥‹à¤¨",
          des: "à¤¹à¤®à¤¾à¤°à¥‡ à¤ªà¤¾à¤¸ à¤†à¤ªà¤•à¥‡ à¤²à¤¿à¤ à¤à¤• à¤‰à¤ªà¤¹à¤¾à¤° à¤¹à¥ˆ",
          giftCode: "à¤‰à¤ªà¤¹à¤¾à¤° à¤•à¥‹à¤¡",
          PleaseGiftCode:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤‰à¤ªà¤¹à¤¾à¤° à¤®à¥‹à¤šà¤¨ à¤•à¥‹à¤¡ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
          Receive: "à¤à¤• à¤‰à¤ªà¤¹à¤¾à¤° à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚",
          Best: "à¤†à¤ªà¤•à¥‹ à¤¶à¥à¤­à¤•à¤¾à¤®à¤¨à¤¾à¤à¤‚",
          Congratulations: "à¤¬à¤§à¤¾à¤ˆ à¤¹à¥‹",
          already:
            "à¤†à¤ªà¤•à¥‹ à¤ªà¤¹à¤²à¥‡ à¤¹à¥€ à¤•à¤¾ à¤‡à¤¨à¤¾à¤® à¤®à¤¿à¤² à¤šà¥à¤•à¤¾ à¤¹à¥ˆ",
          ACCEPT: "à¤ªà¤¾à¤¨à¤¾",
        },
        withdrawal: {
          title: "à¤¨à¤¿à¤•à¤¾à¤¸à¥€",
          balance: "à¤¸à¤‚à¤¤à¥à¤²à¤¨",
          enterwithdraw:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤¨à¤¿à¤•à¤¾à¤¸à¥€ à¤°à¤¾à¤¶à¤¿ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
          withdrawAamount: "Withdraw Amount",
          fee: "à¤¶à¥à¤²à¥à¤•",
          toAccount: "à¤¨à¤¿à¤•à¤¾à¤¸à¥€ à¤•à¥€ à¤°à¤¾à¤¶à¤¿",
          rate: "à¤¦à¤°",
          totalBet: "à¤•à¥à¤² à¤¶à¤°à¥à¤¤",
          withdrawTime: "à¤¸à¤®à¤¯ à¤¨à¤¿à¤•à¤¾à¤²à¥‡à¤‚",
          dailyWithdrawal:
            "à¤¦à¥ˆà¤¨à¤¿à¤• à¤¨à¤¿à¤•à¤¾à¤¸à¥€ à¤Ÿà¤¾à¤‡à¤®à¥à¤¸",
          withdrawMoney: "à¤¨à¤¿à¤•à¤¾à¤¸à¥€ à¤°à¤¾à¤¶à¤¿ à¤¸à¥€à¤®à¤¾",
          payout: "à¤­à¥à¤—à¤¤à¤¾à¤¨",
          bankCard: "à¤¬à¥ˆà¤‚à¤• à¤•à¤¾à¤°à¥à¤¡",
          selectBank: "à¤¬à¥ˆà¤‚à¤• à¤šà¥à¤¨à¥‡à¤‚",
          addBankCard: "à¤¬à¥ˆà¤‚à¤• à¤•à¤¾à¤°à¥à¤¡ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚",
          rechargeTip1:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤¨à¤¿à¤•à¤¾à¤¸à¥€ à¤°à¤¾à¤¶à¤¿ à¤¦à¤°à¥à¤œ à¤•à¤°",
          rechargeTip2:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤à¤• à¤¬à¥ˆà¤‚à¤• à¤•à¤¾à¤°à¥à¤¡ à¤šà¥à¤¨à¥‡à¤‚",
          rechargeTip3:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤à¤• à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
          select: "à¤šà¥à¤¨à¤¨à¤¾",
          add: "à¤œà¥‹à¤¡à¤¼à¥‡à¤‚",
        },
        withdrawrecord: {
          title: "à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡ à¤µà¤¾à¤ªà¤¸ à¤²à¥‡à¤‚",
          applying: "à¤•à¥‹ à¤²à¤¾à¤—à¥‚ à¤•à¤°à¤¨à¥‡",
          agree: "à¤¸à¤¹à¤®à¤¤ à¤¹à¥‹à¤¨à¤¾",
          refuse: "à¤…à¤¸à¥à¤µà¥€à¤•à¤¾à¤° à¤•à¤°à¤¨à¤¾",
        },
        mission: {
          title: "à¤®à¤¿à¤¶à¤¨ à¤•à¥‹ à¤¬à¤¢à¤¼à¤¾à¤µà¤¾ à¤¦à¥‡à¤¨à¤¾",
          totalPeople: "à¤•à¥à¤² à¤²à¥‹à¤—",
          totalAmount: "à¤•à¥à¤² à¤°à¤¾à¤¶à¤¿",
          myTask: "à¤®à¥‡à¤°à¤¾ à¤•à¤¾à¤®",
          invited: "à¤†à¤®à¤‚à¤¤à¥à¤°à¤¿à¤¤",
          validMenmber: "à¤µà¥ˆà¤§ à¤¸à¤¦à¤¸à¥à¤¯",
          receive: "à¤ªà¤¾à¤¨à¤¾",
        },
        addbank: {
          title: "à¤¬à¥ˆà¤‚à¤• à¤•à¤¾à¤°à¥à¤¡ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚",
          bankName: "à¤¬à¥ˆà¤‚à¤• à¤•à¤¾ à¤¨à¤¾à¤®",
          beneficiaryName: "à¤²à¤¾à¤­à¤¾à¤°à¥à¤¥à¥€ à¤•à¤¾ à¤¨à¤¾à¤®",
          accountNo: "à¤–à¤¾à¤¤à¤¾ à¤¨à¤‚à¤¬à¤°",
          bankCity: "à¤¬à¥ˆà¤‚à¤• à¤¸à¤¿à¤Ÿà¥€",
          IFSCCode: "à¤†à¤ˆà¤à¤«à¤à¤¸à¤¸à¥€ à¤•à¥‹à¤¡",
          email: "à¤ˆà¤®à¥‡à¤²",
          bankProvince: "à¤¬à¥ˆà¤‚à¤• à¤ªà¥à¤°à¤¾à¤‚à¤¤",
          bankBranch: "à¤¬à¥ˆà¤‚à¤• à¤¶à¤¾à¤–à¤¾ à¤•à¤¾ à¤ªà¤¤à¤¾",
          addBtn: "à¤¬à¥ˆà¤‚à¤• à¤–à¤¾à¤¤à¤¾ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚",
          opsionalbankProvince: "à¤¬à¥ˆà¤‚à¤• à¤ªà¥à¤°à¤¾à¤‚à¤¤",
          opsionalbankBranch: "à¤¬à¥ˆà¤‚à¤• à¤¶à¤¾à¤–à¤¾ à¤•à¤¾ à¤ªà¤¤à¤¾",
        },
        addElcbank: {
          title: "à¤ˆ-à¤µà¥‰à¤²à¥‡à¤Ÿ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚",
          addBtn: "à¤ˆ-à¤µà¥‰à¤²à¥‡à¤Ÿ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚",
          mobile:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤…à¤ªà¤¨à¤¾ à¤ˆ-à¤µà¥‰à¤²à¥‡à¤Ÿ à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤«à¥‹à¤¨ à¤¨à¤‚à¤¬à¤° à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
        },
        addUsdt: {
          title: "à¤¯à¥‚à¤à¤¸à¤¡à¥€à¤Ÿà¥€ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚",
          addBtn: "à¤¯à¥‚à¤à¤¸à¤¡à¥€à¤Ÿà¥€ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚",
          type: "à¤¯à¥‚à¤à¤¸à¤¡à¥€à¤Ÿà¥€ à¤ªà¥à¤°à¤•à¤¾à¤°",
          address: "à¤µà¥‰à¤²à¥‡à¤Ÿ à¤•à¤¾ à¤ªà¤¤à¤¾",
          tip: "à¤¯à¥‚à¤à¤¸à¤¡à¥€à¤Ÿà¥€ à¤ªà¤¤à¤¾ à¤ªà¥à¤°à¤¾à¤°à¥‚à¤ª à¤¤à¥à¤°à¥à¤Ÿà¤¿",
          txt: "à¤¯à¥‚à¤à¤¸à¤¡à¥€à¤Ÿà¥€ (TRC) à¤ªà¤¤à¤¾ à¤ªà¥à¤°à¤¾à¤°à¥‚à¤ªà¥¤ à¤ªà¤¤à¥‡ à¤®à¥‡à¤‚ 34 à¤…à¤•à¥à¤·à¤° à¤¹à¥‹à¤¤à¥‡ à¤¹à¥ˆà¤‚ à¤œà¥‹ T à¤…à¤•à¥à¤·à¤° à¤¸à¥‡ à¤¶à¥à¤°à¥‚ à¤¹à¥‹à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤",
          txt1: "à¤¯à¥‚à¤à¤¸à¤¡à¥€à¤Ÿà¥€ (à¤ˆà¤†à¤°à¤¸à¥€) à¤ªà¤¤à¤¾ à¤ªà¥à¤°à¤¾à¤°à¥‚à¤ªà¥¤ à¤ªà¤¤à¥‡ à¤®à¥‡à¤‚ 0x à¤…à¤•à¥à¤·à¤° à¤¸à¥‡ à¤¶à¥à¤°à¥‚ à¤¹à¥‹à¤¨à¥‡ à¤µà¤¾à¤²à¥‡ 42 à¤…à¤•à¥à¤·à¤° à¤¹à¥‹à¤¤à¥‡ à¤¹à¥ˆà¤‚à¥¤",
        },
        wellet: {
          title: "à¤¬à¤Ÿà¥à¤†",
          withdrawalBalance: "à¤¨à¤¿à¤•à¤¾à¤¸à¥€ à¤¶à¥‡à¤·",
          historicalWithdrawal: "à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤¨à¤¿à¤•à¤¾à¤¸à¥€",
          accumulatedWithdrawal: "à¤†à¤œ à¤¨à¤¿à¤•à¤¾à¤¸à¥€",
          everyDay: "à¤¹à¤° à¤¦à¤¿à¤¨",
          order: "à¤¬à¤¾à¤°",
          tip: "à¤®à¥à¤«à¥à¤¤ à¤¨à¤•à¤¦ à¤¨à¤¿à¤•à¤¾à¤¸à¥€ à¤•à¤¾ à¤…à¤µà¤¸à¤°",
          myCard: "à¤®à¥‡à¤°à¤¾ à¤•à¤¾à¤°à¥à¤¡",
          rechargeRecord: "à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡",
          withdrawRecord: "à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡ à¤µà¤¾à¤ªà¤¸ à¤²à¥‡à¤‚",
        },
        transactionrecord: {
          title: "à¤²à¥‡à¤¨à¤¦à¥‡à¤¨ à¤•à¤¾ à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡",
        },
        newtutorial: {
          title: "à¤¶à¥à¤°à¥à¤†à¤¤à¥€ à¤Ÿà¥à¤¯à¥‚à¤Ÿà¥‹à¤°à¤¿à¤¯à¤²",
          chooseYour: "à¤…à¤ªà¤¨à¥‡ à¤šà¥à¤¨à¥‹",
          favoriteGame: "à¤ªà¥à¤°à¤¿à¤¯ à¤–à¥‡à¤²",
          pickLucky: "à¤…à¤ªà¤¨à¥€ à¤•à¤¿à¤¸à¥à¤®à¤¤ à¤šà¥à¤¨à¥‡à¤‚",
          numberColor: "à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤¯à¤¾ à¤°à¤‚à¤—",
          SKIP: "à¤›à¥‹à¤¡à¤¼à¥‡à¤‚",
          NEXT: "à¤…à¤—à¤²à¤¾",
          confirmAmount:
            "à¤…à¤ªà¤¨à¥€ à¤¸à¤Ÿà¥à¤Ÿà¥‡à¤¬à¤¾à¤œà¥€ à¤°à¤¾à¤¶à¤¿ à¤•à¥€ à¤ªà¥à¤·à¥à¤Ÿà¤¿ à¤•à¤°à¥‡à¤‚",
          getBouns: "à¤¬à¥‹à¤¨à¤¸ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚",
          moneyWill:
            "à¤°à¤¾à¤‰à¤‚à¤¡ à¤œà¥€à¤¤à¤¨à¥‡ à¤•à¥‡ à¤¬à¤¾à¤¦ à¤ªà¥ˆà¤¸à¤¾ à¤†à¤ªà¤•à¥‡ à¤—à¥‡à¤® à¤…à¤•à¤¾à¤‰à¤‚à¤Ÿ à¤®à¥‡à¤‚ à¤œà¥à¤¡à¤¼ à¤œà¤¾à¤à¤—à¤¾",
          youRecharge:
            "à¤†à¤ª à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤•à¤° à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚",
          withdrawHere: "à¤¯à¤¾ à¤¯à¤¹à¤¾à¤ à¤µà¤¾à¤ªà¤¸ à¤²à¥‡ à¤²à¥‹",
        },
        download: {
          title: "à¤à¤ª à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡",
          goBtn: "à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚",
          des: "à¤à¤• à¤ªà¥‡à¤¶à¥‡à¤µà¤° à¤²à¥‰à¤Ÿà¤°à¥€ à¤—à¥‡à¤® à¤ªà¥à¤²à¥‡à¤Ÿà¤«à¤¾à¤°à¥à¤®",
          playNow: "à¤œà¤¾à¤“ à¤…à¤¬ à¤–à¥‡à¤²à¥‹",
          lotteryGame: "à¤²à¥‰à¤Ÿà¤°à¥€ à¤–à¥‡à¤²",
          btn: "à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡",
        },
        tabbar: {
          tabbarList: [
            {
              id: 1,
              name: "à¤˜à¤°",
              imgAction: t("07d4"),
              img: t("2288"),
              to: "/home",
            },
            {
              id: 2,
              name: "à¤—à¤¤à¤¿à¤µà¤¿à¤§à¤¿",
              imgAction: t("b5ef"),
              img: t("5b0e"),
              to: "/activity",
            },
            {
              id: 3,
              name: "à¤†à¤®à¤‚à¤¤à¥à¤°à¤¿à¤¤ à¤•à¤°à¤¨à¤¾",
              imgAction: t("7268"),
              img: t("7268"),
              to: "/promotion",
            },
            {
              id: 4,
              name: "à¤¬à¤Ÿà¥à¤†",
              imgAction: t("4c6e"),
              img: t("b2a5"),
              to: "/wallet",
            },
            {
              id: 5,
              name: "à¤•à¥‡à¤‚à¤¦à¥à¤°",
              imgAction: t("e636"),
              img: t("6c7c"),
              to: "/mian",
            },
          ],
        },
        mian: {
          title: "à¤•à¥‡à¤‚à¤¦à¥à¤°",
          historical: "à¤à¤¤à¤¿à¤¹à¤¾à¤¸à¤¿à¤•",
          funding: "à¤…à¤¨à¥à¤¦à¤¾à¤¨",
          loginLog: "à¤²à¥‰à¤— à¤‡à¤¨ à¤²à¥‰à¤—",
          message: "à¤¸à¤‚à¤¦à¥‡à¤¶",
          balance: "à¤¸à¤­à¥€ à¤ªà¤°à¥à¤¸",
          totalwallet: "à¤•à¥à¤² à¤¬à¤Ÿà¥à¤†",
          refreshwallet:
            "à¤à¤•-à¤•à¥à¤²à¤¿à¤• à¤°à¥€à¤¸à¤¾à¤‡à¤•à¥à¤²à¤¿à¤‚à¤—",
          loginOut: "à¤²à¥‰à¤—à¤¿à¤¨ à¤†à¤‰à¤Ÿ",
          menuName1: "à¤–à¤¾à¤¤à¥‡ à¤•à¥€ à¤¸à¥à¤°à¤•à¥à¤·à¤¾",
          menuName2: "GOOGLE à¤ªà¥à¤°à¤®à¤¾à¤£à¤•",
          menuName3: "à¤ªà¥à¤°à¤šà¤¾à¤° à¤®à¤¿à¤¶à¤¨",
          menuName4: "à¤²à¤¾à¤² à¤ªà¥‰à¤•à¥‡à¤Ÿ à¤®à¤¨à¥€",
          menuName5: "à¤¶à¥à¤°à¥à¤†à¤¤à¥€ à¤Ÿà¥à¤¯à¥‚à¤Ÿà¥‹à¤°à¤¿à¤¯à¤²",
          menuName6: "à¤•à¥‡ à¤µà¤¿à¤·à¤¯ à¤®à¥‡à¤‚",
          menuName7: "à¤—à¥à¤°à¤¾à¤¹à¤• à¤¸à¥‡à¤µà¤¾",
        },
        checkIn: {
          title: "à¤šà¥‡à¤• à¤‡à¤¨",
          attendanceRules: "à¤šà¥‡à¤• à¤‡à¤¨ à¤¨à¤¿à¤¯à¤®",
          txt: "à¤²à¤¾à¤­ à¤µà¤¿à¤¤à¤°à¤£ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤¾à¤‡à¤¨ à¤‡à¤¨ à¤•à¤°à¥‡à¤‚",
          rule: "à¤–à¥‡à¤² à¤•à¥‡ à¤¨à¤¿à¤¯à¤®à¥‹à¤‚",
          record: "à¤šà¥‡à¤•-à¤‡à¤¨ à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡",
          today: "à¤†à¤œ à¤¹à¤¸à¥à¤¤à¤¾à¤•à¥à¤·à¤° à¤•à¤¿à¤",
          received: "à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤¹à¥à¤†",
          day: "à¤¦à¤¿à¤¨",
          btn: "à¤¦à¤¾à¤–à¤¿à¤² à¤•à¤°à¤¨à¤¾",
          Receive: "à¤à¤• à¤‰à¤ªà¤¹à¤¾à¤° à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚",
          Best: "à¤†à¤ªà¤•à¥‹ à¤¶à¥à¤­à¤•à¤¾à¤®à¤¨à¤¾à¤à¤‚",
          Congratulations: "à¤¬à¤§à¤¾à¤ˆ à¤¹à¥‹",
          already:
            "à¤†à¤ªà¤•à¥‹ à¤ªà¤¹à¤²à¥‡ à¤¹à¥€ à¤•à¤¾ à¤‡à¤¨à¤¾à¤® à¤®à¤¿à¤² à¤šà¥à¤•à¤¾ à¤¹à¥ˆ",
          ACCEPT: "à¤ªà¤¾à¤¨à¤¾",
        },
        checkInDes: {
          title: "à¤šà¥‡à¤• à¤‡à¤¨ à¤¨à¤¿à¤¯à¤®",
          checkInDay: "à¤šà¥‡à¤• à¤‡à¤¨ à¤¡à¥‡",
          accumulatedAmount: "à¤¸à¤‚à¤šà¤¿à¤¤ à¤°à¤¾à¤¶à¤¿",
          checkInBonus: "à¤šà¥‡à¤• à¤‡à¤¨ à¤¬à¥‹à¤¨à¤¸",
          rulesDetails: "à¤¨à¤¿à¤¯à¤® à¤µà¤¿à¤µà¤°à¤£",
          tep1: "à¤œà¤¿à¤¨ à¤¯à¥‚à¤œà¤°à¥à¤¸ à¤¨à¥‡ à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤¨à¤¹à¥€à¤‚ à¤•à¤¿à¤¯à¤¾ à¤¹à¥ˆ, à¤µà¥‡ à¤°à¤¿à¤¸à¥€à¤µ à¤¨à¤¹à¥€à¤‚ à¤•à¤° à¤ªà¤¾à¤à¤‚à¤—à¥‡à¥¤",
          tep2: "1 à¤¦à¤¿à¤¨ à¤¸à¥‡ à¤¶à¥à¤°à¥‚ à¤¹à¥‹à¤•à¤° à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤•à¤°à¤¨à¤¾ à¤œà¤°à¥‚à¤°à¥€ à¤¹à¥ˆà¥¤",
          tep3: "à¤¸à¤‚à¤šà¤¿à¤¤ à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤°à¤¾à¤¶à¤¿ à¤•à¥‹ à¤¶à¤°à¥à¤¤à¥‹à¤‚ à¤•à¥‹ à¤ªà¥‚à¤°à¤¾ à¤•à¤°à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤ à¤”à¤° à¤¦à¤¿à¤¨ à¤®à¥‡à¤‚ à¤•à¥‡à¤µà¤² à¤à¤• à¤¬à¤¾à¤° à¤¦à¤¾à¤µà¤¾ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾ à¤¸à¤•à¤¤à¤¾ à¤¹à¥ˆà¥¤",
          tep4: "à¤‡à¤¸ à¤—à¤¤à¤¿à¤µà¤¿à¤§à¤¿ à¤•à¥€ à¤µà¥à¤¯à¤¾à¤–à¥à¤¯à¤¾ à¤•à¤°à¤¨à¥‡ à¤•à¤¾ à¤…à¤‚à¤¤à¤¿à¤® à¤…à¤§à¤¿à¤•à¤¾à¤° à¤®à¤‚à¤š à¤•à¥‡ à¤ªà¤¾à¤¸ à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤†à¤ªà¤•à¥‡ à¤•à¥‹à¤ˆ à¤¸à¤‚à¤¬à¤‚à¤§à¤¿à¤¤ à¤ªà¥à¤°à¤¶à¥à¤¨ à¤¹à¥ˆà¤‚, à¤¤à¥‹ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤—à¥à¤°à¤¾à¤¹à¤• à¤¸à¥‡à¤µà¤¾ à¤¸à¥‡ à¤¸à¤‚à¤ªà¤°à¥à¤• à¤•à¤°à¥‡à¤‚ï¼",
          tep5: "à¤‰à¤ªà¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤¬à¥‹à¤¨à¤¸ 7à¤µà¥€à¤‚ à¤œà¤®à¤¾ à¤•à¥‡ à¤¬à¤¾à¤¦ à¤¬à¥‡à¤¤à¤°à¤¤à¥€à¤¬ à¤¢à¤‚à¤— à¤¸à¥‡ à¤µà¤¿à¤¤à¤°à¤¿à¤¤ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾à¤à¤—à¤¾",
        },
        historicalBetting: {
          title: "à¤à¤¤à¤¿à¤¹à¤¾à¤¸à¤¿à¤• à¤¸à¤Ÿà¥à¤Ÿà¥‡à¤¬à¤¾à¤œà¥€",
        },
        loginLog: { title: "à¤²à¥‰à¤— à¤‡à¤¨ à¤²à¥‰à¤—" },
        messageCenter: {
          title: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤•à¥‡à¤‚à¤¦à¥à¤°",
          readAll: "à¤¸à¤¬ à¤ªà¤¢à¤¼à¥‹",
          removeAll: "à¤¸à¤­à¥€ à¤¹à¤Ÿà¤¾à¤à¤‚",
          delTitle: "à¤¬à¤¹à¥à¤¤ à¤¹à¥€ à¤ªà¤¾à¤¸ à¤¸à¥‡?",
          delall:
            "à¤•à¥à¤¯à¤¾ à¤†à¤ª à¤µà¤¾à¤•à¤ˆ à¤¸à¤­à¥€ à¤•à¥‹ à¤¹à¤Ÿà¤¾à¤¨à¤¾ à¤šà¤¾à¤¹à¤¤à¥‡ à¤¹à¥ˆà¤‚ï¼Ÿ",
          readall:
            "à¤•à¥à¤¯à¤¾ à¤†à¤ª à¤¸à¥à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤ à¤¹à¥ˆà¤‚ à¤•à¤¿ à¤†à¤ª à¤¸à¤­à¥€ à¤ªà¤¢à¤¼à¤¨à¤¾ à¤šà¤¾à¤¹à¤¤à¥‡ à¤¹à¥ˆà¤‚ï¼Ÿ",
        },
        messageDes: { title: "à¤¸à¤‚à¤¦à¥‡à¤¶ à¤µà¤¿à¤µà¤°à¤£" },
        lottery: {
          drawResult: "à¤²à¥‰à¤Ÿà¤°à¥€ à¤ªà¤°à¤¿à¤£à¤¾à¤®",
          period: "à¤…à¤µà¤§à¤¿",
          money: "à¤ªà¥ˆà¤¸à¥‡",
          multiply: " à¤—à¥à¤£à¤¾",
          totalPrice: "à¤•à¥à¤² à¤•à¥€à¤®à¤¤",
          pleaseBet: "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤à¤• à¤¶à¤°à¥à¤¤ à¤²à¤—à¤¾à¤à¤‚",
          election: "à¤‰à¤²à¥à¤Ÿà¤¾ à¤šà¥à¤¨à¤¾à¤µ",
        },
        colorLand: {
          tab1: "à¤•à¥à¤² à¤¶à¤°à¥à¤¤",
          tab2: "2 à¤µà¤¹à¥€ à¤¨à¤¹à¥€à¤‚",
          tab3: "3 à¤®à¥ˆà¤š à¤¨à¤‚à¤¬à¤°",
          tab4: "à¤¡à¤¿à¤« à¤¨à¤‚à¤¬à¤°",
          title1: "2 à¤®à¤¿à¤²à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤šà¥à¤¨à¥‡à¤‚",
          tip1: "*à¤¯à¤¦à¤¿ à¤¶à¥à¤°à¥à¤†à¤¤à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾ 2 à¤¸à¤Ÿà¥à¤Ÿà¥‡à¤¬à¤¾à¤œà¥€ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤¸à¥‡ à¤®à¥‡à¤² à¤–à¤¾à¤¤à¥€ à¤¹à¥ˆ, à¤¤à¥‹ à¤¯à¤¹ à¤à¤• à¤œà¥€à¤¤ à¤¹à¥ˆà¥¤ (à¤¤à¥€à¤¨ à¤¸à¤®à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤“à¤‚ à¤•à¥‹ à¤›à¥‹à¤¡à¤¼à¤•à¤°)",
          title2:
            "à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤“à¤‚ à¤•à¤¾ à¤à¤• à¤…à¤¦à¥à¤µà¤¿à¤¤à¥€à¤¯ à¤¯à¥à¤—à¥à¤® à¤šà¥à¤¨à¥‡à¤‚",
          tip2: "*à¤¬à¥‡à¤Ÿ à¤²à¤—à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤•à¤® à¤¸à¥‡ à¤•à¤® 1 à¤œà¥‹à¤¡à¤¼à¥€ à¤¸à¤®à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤à¤‚ à¤”à¤° 1 à¤­à¤¿à¤¨à¥à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤šà¥à¤¨à¥‡à¤‚à¥¤ à¤¯à¤¦à¤¿ à¤¶à¥à¤°à¥à¤†à¤¤à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤¸à¤Ÿà¥à¤Ÿà¥‡à¤¬à¤¾à¤œà¥€ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤¸à¥‡ à¤®à¥‡à¤² à¤–à¤¾à¤¤à¥€ à¤¹à¥ˆ, à¤¤à¥‹ à¤¯à¤¹ à¤œà¥€à¤¤ à¤¹à¥ˆà¥¤",
          title3: "à¤•à¥‡à¤µà¤² 3 à¤¨à¤‚à¤¬à¤° à¤šà¥à¤¨à¥‡à¤‚",
          tip3: "*à¤¯à¤¦à¤¿ à¤¶à¥à¤°à¥à¤†à¤¤à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾ 3 à¤¸à¤Ÿà¥à¤Ÿà¥‡à¤¬à¤¾à¤œà¥€ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤¸à¥‡ à¤®à¥‡à¤² à¤–à¤¾à¤¤à¥€ à¤¹à¥ˆ, à¤¤à¥‹ à¤¯à¤¹ à¤à¤• à¤œà¥€à¤¤ à¤¹à¥ˆ",
          title4: "3 à¤®à¤¿à¤²à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤šà¥à¤¨à¥‡à¤‚",
          tip4: "*à¤¯à¤¦à¤¿ à¤ªà¥à¤°à¤¾à¤°à¤‚à¤­à¤¿à¤• à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤à¤ à¤•à¤¿à¤¨à¥à¤¹à¥€à¤‚ à¤¤à¥€à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤“à¤‚ à¤•à¥€ à¤¸à¤®à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤®à¥‡à¤‚ à¤¹à¥‹à¤‚, à¤¤à¥‹ à¤¯à¤¹ à¤à¤• à¤œà¥€à¤¤ à¤¹à¥ˆ",
          title5: "3 à¤…à¤²à¤—-à¤…à¤²à¤— à¤¨à¤‚à¤¬à¤° à¤šà¥à¤¨à¥‡à¤‚",
          tip5: "*3 à¤¯à¤¾ à¤…à¤§à¤¿à¤• à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤à¤‚ à¤šà¥à¤¨à¥‡à¤‚, à¤¤à¥€à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤“à¤‚ à¤®à¥‡à¤‚ à¤ªà¥à¤°à¤¾à¤°à¤‚à¤­à¤¿à¤• à¤ªà¤°à¤¿à¤£à¤¾à¤® à¤…à¤²à¤—-à¤…à¤²à¤— à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤à¤‚ à¤¹à¥ˆà¤‚, à¤¯à¤¦à¤¿ à¤šà¤¯à¤¨à¤¿à¤¤ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤¸à¤®à¤¾à¤¨ à¤¹à¥ˆ, à¤¤à¥‹ à¤¯à¤¹ à¤à¤• à¤œà¥€à¤¤ à¤¹à¥ˆ",
          title6: "à¤²à¤—à¤¾à¤¤à¤¾à¤° 3 à¤¨à¤‚à¤¬à¤° à¤šà¥à¤¨à¥‡à¤‚",
          tip6: "*à¤¯à¤¦à¤¿ à¤ªà¥à¤°à¤¾à¤°à¤‚à¤­à¤¿à¤• à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤¤à¥€à¤¨ à¤•à¥à¤°à¤®à¤¾à¤—à¤¤ à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤“à¤‚ à¤®à¥‡à¤‚ à¤¸à¥‡ à¤•à¥‹à¤ˆ à¤à¤• à¤¹à¥ˆ, à¤¤à¥‹ à¤¯à¤¹ à¤µà¤¿à¤œà¤¯à¥€ à¤ªà¤°à¤¿à¤£à¤¾à¤® à¤¹à¥ˆà¥¤",
          title7: "2 à¤…à¤²à¤—-à¤…à¤²à¤— à¤¨à¤‚à¤¬à¤° à¤šà¥à¤¨à¥‡à¤‚",
          tip7: "* 2 à¤¯à¤¾ à¤…à¤§à¤¿à¤• à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤à¤‚ à¤šà¥à¤¨à¥‡à¤‚, à¤¦à¥‹ à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤“à¤‚ à¤®à¥‡à¤‚ à¤ªà¥à¤°à¤¾à¤°à¤‚à¤­à¤¿à¤• à¤ªà¤°à¤¿à¤£à¤¾à¤® à¤…à¤²à¤—-à¤…à¤²à¤— à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤à¤‚ à¤¹à¥ˆà¤‚, à¤¯à¤¦à¤¿ à¤šà¤¯à¤¨à¤¿à¤¤ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤•à¥‡ à¤¸à¤¾à¤¥ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤¸à¤®à¤¾à¤¨ à¤¹à¥ˆ, à¤¤à¥‹ à¤¯à¤¹ à¤à¤• à¤œà¥€à¤¤ à¤¹à¥ˆ",
          selectCon1:
            "2 à¤®à¤¿à¤²à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤à¤‚ à¤šà¥à¤¨à¥‡à¤‚ï¼š",
          selectCon2:
            "à¤¸à¤‚à¤–à¥à¤¯à¤¾à¤“à¤‚ à¤•à¤¾ à¤à¤• à¤…à¤¦à¥à¤µà¤¿à¤¤à¥€à¤¯ à¤¯à¥à¤—à¥à¤® à¤šà¥à¤¨à¥‡à¤‚ï¼š",
          selectCon3: "à¤•à¥‡à¤µà¤² 3 à¤¨à¤‚à¤¬à¤° à¤šà¥à¤¨à¥‡à¤‚ï¼š",
          selectCon4: "3 à¤…à¤²à¤—-à¤…à¤²à¤— à¤¨à¤‚à¤¬à¤° à¤šà¥à¤¨à¥‡à¤‚ï¼š",
          selectCon5: "2 à¤…à¤²à¤—-à¤…à¤²à¤— à¤¨à¤‚à¤¬à¤° à¤šà¥à¤¨à¥‡à¤‚ï¼š",
          gameType1: "3 à¤…à¤¨à¥à¤¯ à¤¨à¤‚à¤¬à¤°",
          gameType2: "à¤²à¤—à¤¾à¤¤à¤¾à¤° 3 à¤¨à¤‚à¤¬à¤°",
          gameType3: "2 à¤¸à¤®à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾",
          gameType4: "3 à¤¸à¤®à¤¾à¤¨ à¤¸à¤‚à¤–à¥à¤¯à¤¾",
        },
        activity: { title: "à¤—à¤¤à¤¿à¤µà¤¿à¤§à¤¿" },
        activityDes: { title: "à¤—à¤¤à¤¿à¤µà¤¿à¤§à¤¿ à¤µà¤¿à¤µà¤°à¤£" },
        usdt: {
          title: "à¤¯à¥‚à¤à¤¸à¤¡à¥€à¤Ÿà¥€ à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ",
          address: "à¤¯à¥‚à¤à¤¸à¤¡à¥€à¤Ÿà¥€ à¤µà¥‰à¤²à¥‡à¤Ÿ à¤ªà¤¤à¤¾",
          Raddress: "à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤ªà¤¤à¤¾",
          QRcode: "à¤•à¥à¤¯à¥‚ à¤†à¤° à¤¸à¤‚à¤¹à¤¿à¤¤à¤¾",
          tit1: "à¤®à¥à¤¦à¥à¤°à¤¾ à¤–à¤°à¥€à¤¦à¥‡à¤‚",
          tit2: "à¤ªà¤¤à¥‡ à¤ªà¤° à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤£",
          tit3: "à¤¸à¥Œà¤¦à¤¾ à¤¸à¥€à¤² à¤•à¤°à¥‡à¤‚",
          tit4: "à¤†à¤—à¤®à¤¨ à¤•à¥€ à¤ªà¥à¤°à¤¤à¥€à¤•à¥à¤·à¤¾ à¤•à¤°à¥‡à¤‚",
          tip1: "1. à¤°à¥€à¤šà¤¾à¤°à¥à¤œ à¤ªà¤¤à¤¾ à¤°à¥€à¤¯à¤² à¤Ÿà¤¾à¤‡à¤® à¤®à¥‡à¤‚ à¤¬à¤¦à¤² à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤°à¥€à¤šà¤¾à¤°à¥à¤œ à¤ªà¤¤à¤¾ à¤¸à¥‡à¤µ à¤¨ à¤•à¤°à¥‡à¤‚à¥¤ à¤¡à¤¿à¤œà¤¿à¤Ÿà¤² à¤•à¤°à¥‡à¤‚à¤¸à¥€ à¤•à¥‡ à¤¨à¥à¤•à¤¸à¤¾à¤¨ à¤¸à¥‡ à¤¬à¤šà¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤¸à¥‡ à¤ªà¤¹à¤²à¥‡ à¤°à¥€à¤šà¤¾à¤°à¥à¤œ à¤ªà¤¤à¤¾ à¤«à¤¿à¤° à¤¸à¥‡ à¤¹à¤¾à¤¸à¤¿à¤² à¤•à¤°à¥‡à¤‚à¥¤ ",
          tip2: "2. à¤°à¥€à¤šà¤¾à¤°à¥à¤œ à¤à¤¡à¥à¤°à¥‡à¤¸ à¤•à¥‹ à¤•à¥‰à¤ªà¥€ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤¬à¤¾à¤¦, à¤•à¥ƒà¤ªà¤¯à¤¾ à¤‰à¤¸ à¤¡à¤¿à¤œà¤¿à¤Ÿà¤² à¤•à¤°à¥‡à¤‚à¤¸à¥€ à¤µà¥‰à¤²à¥‡à¤Ÿ à¤ªà¤° à¤œà¤¾à¤à¤‚ à¤œà¤¿à¤¸à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤†à¤ª à¤ªà¥ˆà¤¸à¥‡ à¤¨à¤¿à¤•à¤¾à¤²à¤¨à¥‡ à¤”à¤° à¤Ÿà¥à¤°à¤¾à¤‚à¤¸à¤«à¤° à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤•à¤° à¤°à¤¹à¥‡ à¤¹à¥ˆà¤‚à¥¤ à¤¡à¤¿à¤œà¤¿à¤Ÿà¤² à¤à¤¸à¥‡à¤Ÿ à¤•à¥‹ à¤°à¥€à¤šà¤¾à¤°à¥à¤œ à¤¨ à¤•à¤°à¥‡à¤‚ à¤œà¥‹ à¤šà¤¯à¤¨à¤¿à¤¤ à¤¬à¥à¤²à¥‰à¤•à¤šà¥‡à¤¨ à¤¸à¥‡ à¤…à¤²à¤— à¤¹à¥ˆà¤‚, à¤…à¤¨à¥à¤¯à¤¥à¤¾ à¤à¤¸à¥‡à¤Ÿ à¤•à¥‹ à¤ªà¥à¤¨à¤°à¥à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤¨à¤¹à¥€à¤‚ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾à¤à¤—à¤¾à¥¤ ",
          tip3: "à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ-à¤¨à¤¿à¤•à¤¾à¤¸à¥€ à¤†à¤® à¤¤à¥Œà¤° à¤ªà¤° 1-5 à¤®à¤¿à¤¨à¤Ÿ à¤•à¥‡ à¤­à¥€à¤¤à¤° à¤¸à¥à¤µà¤šà¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤† à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆ, à¤¯à¤¦à¤¿ à¤¨à¤¹à¥€à¤‚, à¤¤à¥‹ à¤•à¥ƒà¤ªà¤¯à¤¾ à¤‘à¤¨à¤²à¤¾à¤‡à¤¨ à¤—à¥à¤°à¤¾à¤¹à¤• à¤¸à¥‡à¤µà¤¾ à¤¸à¥‡ à¤¸à¤‚à¤ªà¤°à¥à¤• à¤•à¤°à¥‡à¤‚à¥¤ ",
          tip4: "(à¤¬à¤¿à¤¨à¤¾ à¤•à¤¿à¤¸à¥€ à¤¹à¥ˆà¤‚à¤¡à¤²à¤¿à¤‚à¤— à¤¶à¥à¤²à¥à¤• à¤•à¥‡: 100 à¤•à¥‹ à¤–à¤¾à¤¤à¥‡ à¤®à¥‡à¤‚ 100 à¤¨à¤¿à¤•à¤¾à¤² à¤²à¥‡à¤‚) ",
        },
        trx: {
          uset: "à¤•à¥à¤²à¥€à¤¨ à¤¸à¥à¤Ÿà¤¾à¤°à¥à¤Ÿ",
          title: "à¤Ÿà¥€à¤†à¤°à¤à¤•à¥à¤¸ à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ",
          address: "TRX à¤µà¥‰à¤²à¥‡à¤Ÿ à¤ªà¤¤à¤¾",
        },
        promotionNew: {
          title: "à¤ªà¤¦à¥‹à¤¨à¥à¤¨à¤¤à¤¿",
          dataOverview: "à¤¡à¥‡à¤Ÿà¤¾ à¤…à¤µà¤²à¥‹à¤•à¤¨",
          myTeam: "à¤®à¥‡à¤°à¥€ à¤Ÿà¥€à¤®",
          upRecord: "à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡ à¤‰à¤ à¤¾à¤“",
          tutorial: "à¤Ÿà¥à¤¯à¥‚à¤Ÿà¥‹à¤°à¤¿à¤¯à¤²",
          myReward: "à¤®à¥‡à¤°à¤¾ à¤‡à¤¨à¤¾à¤®",
          totalComm: "à¤•à¤² à¤¹à¥ˆ à¤Ÿà¥‹à¤Ÿà¤² à¤•à¤®à¥€à¤¶à¤¨",
          directComm: "à¤ªà¥à¤°à¤¤à¥à¤¯à¤•à¥à¤· à¤†à¤¯à¥‹à¤—",
          teamComm: "à¤Ÿà¥€à¤® à¤†à¤¯à¥‹à¤—",
          directSubord:
            "à¤ªà¥à¤°à¤¤à¥à¤¯à¤•à¥à¤· à¤…à¤§à¥€à¤¨à¤¸à¥à¤¥à¥‹à¤‚ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾",
          totalTeams: "à¤Ÿà¥€à¤®à¥‹à¤‚ à¤•à¥€ à¤•à¥à¤² à¤¸à¤‚à¤–à¥à¤¯à¤¾",
          newToday: "à¤†à¤œ à¤•à¤¾ à¤†à¤®à¤‚à¤¤à¥à¤°à¤£",
          newTeam: "à¤†à¤œ à¤¨à¤ˆ à¤Ÿà¥€à¤® à¤•à¤¾ à¤†à¤•à¤¾à¤°",
          weekComm:
            "à¤¸à¤ªà¥à¤¤à¤¾à¤¹ à¤•à¥‡ à¤²à¤¿à¤ à¤•à¥à¤² à¤•à¤®à¥€à¤¶à¤¨",
          totalComm1: "à¤•à¥à¤² à¤•à¤®à¥€à¤¶à¤¨",
          QRcode:
            "à¤•à¥à¤¯à¥‚à¤†à¤° à¤•à¥‹à¤¡ à¤•à¥‹ à¤¸à¥‡à¤µ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤²à¥‰à¤¨à¥à¤— à¤ªà¥à¤°à¥‡à¤¸ à¤•à¤°à¥‡à¤‚",
          copyCode: "à¤†à¤®à¤‚à¤¤à¥à¤°à¤£ à¤•à¥‹à¤¡ à¤•à¥‰à¤ªà¥€ à¤•à¤°à¥‡à¤‚",
          copyLink: "à¤ªà¥à¤°à¤¤à¤¿à¤°à¥‚à¤ª à¤œà¥‹à¤¡à¤¼à¤¨à¤¾",
          rebateTable: "à¤›à¥‚à¤Ÿ à¤°à¤¾à¤¶à¤¿ à¤¸à¤‚à¤—à¤¤ à¤¤à¤¾à¤²à¤¿à¤•à¤¾",
          agencyLevel: "à¤à¤œà¥‡à¤‚à¤Ÿ à¤¸à¥à¤¤à¤°",
          teamNumber: "à¤•à¥à¤² à¤°à¥‡à¤«à¤°à¤²",
          teamFlow: "à¤•à¥à¤² à¤¶à¤°à¥à¤¤",
          teamRecharge: "à¤«à¤¿à¤° à¤¸à¥‡ à¤¦à¤¾à¤® à¤²à¤—à¤¾à¤¨à¤¾",
          validDay:
            "à¤µà¥ˆà¤§ à¤¸à¤¦à¤¸à¥à¤¯: à¤‰à¤¸à¥€ à¤¦à¤¿à¤¨ à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ à¤¯à¤¾ à¤¬à¥‡à¤Ÿ",
          commMethod: "à¤†à¤¯à¥‹à¤— à¤—à¤£à¤¨à¤¾ à¤µà¤¿à¤§à¤¿",
          Hierarchy: "à¤ªà¤¦à¤¾à¤¨à¥à¤•à¥à¤°à¤®",
          rebateRatio: "à¤›à¥‚à¤Ÿ à¤…à¤¨à¥à¤ªà¤¾à¤¤",
          firstMember: "à¤Ÿà¥€à¤¯à¤° 1",
          secondMember: "à¤•à¤¤à¤¾à¤° 2",
          thirdMember: "3 à¤Ÿà¤¿à¤¯à¤°",
          tierMember: "à¤¶à¥à¤°à¥‡à¤£à¥€ 4",
          bettingTurnover: "à¤†à¤¯à¥‹à¤—",
          agent: "à¤¸à¥à¤¤à¤°à¥€à¤¯ à¤¸à¤¦à¤¸à¥à¤¯",
          upTime: "à¤¸à¤®à¤¯ à¤²à¥‡à¤¨à¥‡",
          receiveAmount: "à¤°à¤¾à¤¶à¤¿ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚",
          operate: "à¤ªà¥à¤°à¤šà¤¾à¤²à¤¨",
          details: "à¤µà¤¿à¤µà¤°à¤£",
          date: "à¤¦à¤¿à¤¨à¤¾à¤‚à¤•",
          directTeam: "à¤¸à¥€à¤§à¥€ à¤Ÿà¥€à¤®",
          people: "à¤²à¥‹à¤—",
          pleaseChoose: "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤šà¥à¤¨à¥‡à¤‚",
          totalBet: "à¤•à¥à¤² à¤¶à¤°à¥à¤¤ à¤°à¤¾à¤¶à¤¿",
          totalAmount: "à¤•à¥à¤² à¤›à¥‚à¤Ÿ à¤°à¤¾à¤¶à¤¿",
          Inquire: "à¤ªà¥‚à¤›à¤¤à¤¾à¤›",
          nickName: "à¤¨à¤¿à¤• à¤¨à¤¾à¤®",
          runningWater: "à¤•à¤¾à¤°à¥‹à¤¬à¤¾à¤°",
          condition: "à¤¸à¥à¤¥à¤¿à¤¤à¤¿",
          enable: "à¤¸à¤•à¥à¤·à¤®",
          disabled: "à¤…à¤•à¥à¤·à¤®",
          personalFlow: "à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤ªà¥à¤°à¤µà¤¾à¤¹",
          personalRecharge: "à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤°à¤¿à¤šà¤¾à¤°à¥à¤œ",
          rgistrationTime: "à¤ªà¤‚à¤œà¥€à¤•à¤°à¤£ à¤¸à¤®à¤¯",
          subordinates: "à¤…à¤§à¥€à¤¨à¤¸à¥à¤¥à¥‹à¤‚ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾",
          year: "à¤¸à¤¾à¤²",
          moon: "à¤šà¤‚à¤¦à¥à¤°à¤®à¤¾",
          day: "à¤¦à¤¿à¤¨",
          selectList: [
            { name: "à¤Ÿà¥€à¤¯à¤° 1", code: 1 },
            { name: "à¤•à¤¤à¤¾à¤° 2", code: 2 },
            { name: "3 à¤Ÿà¤¿à¤¯à¤°", code: 3 },
            { name: "à¤¶à¥à¤°à¥‡à¤£à¥€ 4", code: 4 },
            { name: "à¤Ÿà¤¿à¤¯à¤° 5", code: 5 },
            { name: "à¤Ÿà¤¿à¤¯à¤° 6", code: 6 },
          ],
          promoteMoney: "à¤¬à¤¢à¤¼à¤¾à¤µà¤¾ à¤¦à¥‡à¤¨à¤¾",
          uid: "à¤¯à¥‚à¤†à¤ˆà¤¡à¥€",
        },
        verify: {
          title: "à¤—à¥‚à¤—à¤² à¤ªà¥à¤°à¤®à¤¾à¤£à¤•",
          unbind:
            "à¤…à¤¨à¤¬à¤¾à¤‡à¤‚à¤¡ / à¤šà¥‡à¤‚à¤œ à¤µà¥ˆà¤²à¤¿à¤¡à¥‡à¤Ÿà¤°",
          downTit:
            "à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚ à¤”à¤° à¤°à¤œà¤¿à¤¸à¥à¤Ÿà¤° à¤•à¤°à¥‡à¤‚",
          downTxt:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ Google à¤ªà¥à¤°à¤®à¤¾à¤£à¤• à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚à¥¤ à¤¯à¤¦à¤¿ à¤‡à¤‚à¤¸à¥à¤Ÿà¥‰à¤²à¥‡à¤¶à¤¨ à¤ªà¥‚à¤°à¤¾ à¤¹à¥‹ à¤—à¤¯à¤¾ à¤¹à¥ˆ, à¤¤à¥‹ à¤…à¤ªà¤¨à¥‡ à¤²à¥‰à¤Ÿà¤°à¥€ à¤–à¤¾à¤¤à¥‡ à¤•à¥‹ à¤¬à¤¾à¤‡à¤‚à¤¡ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¬à¤¾à¤‡à¤‚à¤¡ à¤¬à¤Ÿà¤¨ à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤•à¤°à¥‡à¤‚",
          bind: "à¤¬à¤¾à¤à¤§à¤¨à¤¾",
          downVerify:
            "Google à¤ªà¥à¤°à¤®à¤¾à¤£à¤• à¤¡à¤¾à¤‰à¤¨à¤²à¥‹à¤¡ à¤•à¤°à¥‡à¤‚",
          vexplainTit:
            "à¤¬à¤¾à¤§à¥à¤¯à¤•à¤¾à¤°à¥€ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¨à¤•à¤°à¥à¤¤à¤¾ à¤µà¤¿à¤µà¤°à¤£",
          list: [
            {
              txt: "à¤†à¤ªà¤•à¥‹ à¤…à¤ªà¤¨à¥‡ à¤²à¥‰à¤Ÿà¤°à¥€ à¤–à¤¾à¤¤à¥‡ à¤¸à¥‡ à¤‰à¤¤à¥à¤ªà¤¨à¥à¤¨ 16-à¤…à¤‚à¤•à¥€à¤¯ à¤•à¥à¤‚à¤œà¥€ à¤•à¥‹ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤¸à¥à¤¥à¤¾à¤¨ à¤ªà¤° à¤¸à¤¹à¥‡à¤œà¤¨à¤¾ à¤¹à¥‹à¤—à¤¾ à¤”à¤° à¤•à¥à¤‚à¤œà¥€ à¤•à¥‹ à¤•à¥‰à¤ªà¥€ à¤•à¤°à¤¨à¤¾ à¤¹à¥‹à¤—à¤¾",
            },
            {
              txt: "à¤†à¤ªà¤•à¥‹ Google à¤ªà¥à¤°à¤®à¤¾à¤£à¤• à¤–à¥‹à¤²à¤¨à¤¾ à¤¹à¥‹à¤—à¤¾",
            },
            {
              txt: "à¤à¤• à¤—à¥‡à¤® à¤–à¤¾à¤¤à¤¾ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚, 16-à¤…à¤‚à¤•à¥€à¤¯ à¤•à¥à¤‚à¤œà¥€ à¤‡à¤¨à¤ªà¥à¤Ÿ à¤•à¥‰à¤ªà¥€ à¤•à¤°à¥‡à¤‚",
            },
            {
              txt: "à¤œà¥‹à¤¡à¤¼ à¤¸à¤«à¤² à¤¹à¥‹à¤¨à¥‡ à¤•à¥‡ à¤¬à¤¾à¤¦, à¤à¤• 6-à¤…à¤‚à¤•à¥€à¤¯, à¤¡à¤¿à¤œà¤¿à¤Ÿà¤² à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¨ à¤•à¥‹à¤¡ à¤…à¤ªà¤¨à¥‡ à¤†à¤ª à¤œà¥‡à¤¨à¤°à¥‡à¤Ÿ à¤¹à¥‹ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆ",
            },
          ],
          vexplainNext:
            "à¤Ÿà¥à¤¯à¥‚à¤Ÿà¥‹à¤°à¤¿à¤¯à¤² à¤•à¥‹ à¤›à¥‹à¤¡à¤¼ à¤¦à¥‡à¤‚",
          vbackupTit: "à¤¬à¥ˆà¤•à¤…à¤ª à¤•à¥à¤‚à¤œà¥€",
          vbackupTxt:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤à¤• à¤®à¤¹à¤¤à¥à¤µà¤ªà¥‚à¤°à¥à¤£ à¤•à¥à¤‚à¤œà¥€ à¤¦à¤¾à¤¨ à¤•à¤°à¥‡à¤‚ à¤”à¤° à¤‡à¤¸à¥‡ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤¸à¥à¤¥à¤¾à¤¨ à¤ªà¤° à¤°à¤–à¥‡à¤‚, à¤¯à¤¦à¤¿ à¤«à¥‹à¤¨ à¤‡à¤¸ à¤•à¥à¤‚à¤œà¥€ à¤•à¥‹ à¤›à¥‹à¤¡à¤¼ à¤¦à¥‡à¤¤à¤¾ à¤¹à¥ˆ, à¤…à¤¨à¥à¤¯à¤¥à¤¾ à¤†à¤ª à¤œà¥€à¤µà¤¨ à¤ªà¤°à¥€à¤•à¥à¤·à¤• à¤•à¥‹ 7 à¤¦à¤¿à¤¨à¥‹à¤‚ à¤¤à¤• à¤°à¤–à¥‡à¤‚à¤—à¥‡à¥¤",
          vsafetyTit:
            "à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¿à¤¤ à¤•à¤°à¥‡à¤‚",
          vsafetyTxt:
            "à¤…à¤ªà¤¨à¥‡ à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤¨à¤‚à¤¬à¤° à¤ªà¤° à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¨ à¤•à¥‹à¤¡ à¤­à¥‡à¤œà¥‡à¤‚",
          vsafetySms: "à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¨ à¤•à¥‹à¤¡",
          vsafetyTip:
            "à¤ªà¥à¤°à¤®à¤¾à¤£à¥€à¤•à¤°à¤£ à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤…à¤¨à¥à¤ªà¤²à¤¬à¥à¤§ à¤¹à¥ˆ? à¤—à¥à¤°à¤¾à¤¹à¤• à¤¸à¥‡à¤µà¤¾ à¤¸à¥‡ à¤¸à¤®à¥à¤ªà¤°à¥à¤• à¤•à¤°à¥‡à¤‚",
          vsafetySnsnull:
            "à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¨ à¤•à¥‹à¤¡ à¤–à¤¾à¤²à¥€ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹ à¤¸à¤•à¤¤à¤¾",
          loginTit: "Google à¤²à¥‰à¤—à¤¿à¤¨ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¨",
          loginTxt:
            "à¤–à¤¾à¤¤à¤¾ à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤¸à¤•à¥à¤·à¤® à¤¹à¥ˆ, à¤•à¥ƒà¤ªà¤¯à¤¾ à¤¨à¤¿à¤®à¥à¤¨à¤²à¤¿à¤–à¤¿à¤¤ à¤•à¤¾à¤°à¥à¤¯à¥‹à¤‚ à¤•à¥‹ à¤ªà¥‚à¤°à¤¾ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤‚à¤•à¥‡à¤¤à¥‹à¤‚ à¤•à¤¾ à¤ªà¤¾à¤²à¤¨ à¤•à¤°à¥‡à¤‚",
          loginTip:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤…à¤ªà¤¨à¥‡ à¤®à¥‹à¤¬à¤¾à¤‡à¤² à¤«à¥‹à¤¨ à¤®à¥‡à¤‚ à¤…à¤²à¥€à¤¬à¤¾à¤¬à¤¾ à¤•à¥à¤²à¤¾à¤‰à¤¡ à¤à¤ªà¥€à¤ªà¥€ à¤¯à¤¾ Google à¤ªà¥à¤°à¤®à¤¾à¤£à¤• (à¤ªà¥à¤°à¤®à¤¾à¤£à¥€à¤•à¤°à¤£ à¤‰à¤ªà¤•à¤°à¤£) à¤–à¥‹à¤²à¥‡à¤‚, à¤•à¥ƒà¤ªà¤¯à¤¾ 6 à¤…à¤‚à¤•à¥‹à¤‚ à¤•à¤¾ à¤—à¤¤à¤¿à¤¶à¥€à¤² à¤•à¥‹à¤¡ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
          loginNum: "6 à¤…à¤‚à¤•",
        },
        long: {
          title:
            "à¤²à¥‰à¤¨à¥à¤— à¤•à¤‚à¤Ÿà¥€à¤¨à¥à¤¯à¥‚à¤…à¤¸ à¤Ÿà¥à¤°à¥‡à¤‚à¤¡ à¤…à¤¸à¤¿à¤¸à¥à¤Ÿà¥‡à¤‚à¤Ÿ",
          newTitle: "à¤¦à¥€à¤°à¥à¤˜à¤¾à¤µà¤§à¤¿",
          betTitle: "à¤®à¥‡à¤°à¥€ à¤¶à¤°à¥à¤¤",
          expect: "à¤•à¤¾à¤²",
          andDig: "à¤Ÿà¤¾à¤ˆ à¤¬à¤¿à¤—",
          andSmall: "à¤Ÿà¤¾à¤ˆ à¤›à¥‹à¤Ÿà¤¾",
          andodd: "à¤µà¤¿à¤·à¤® à¤Ÿà¤¾à¤ˆ",
          andeven: "à¤Ÿà¤¾à¤ˆ à¤‡à¤µà¤¨",
          illustrate: "à¤¸à¤®à¤à¤¾à¤¨à¤¾",
          txt1: 'à¤²à¥‰à¤¨à¥à¤— à¤¡à¥à¤°à¥ˆà¤—à¤¨ à¤¹à¥‡à¤²à¥à¤ªà¤° à¤à¤• à¤¸à¤¹à¤¾à¤¯à¤• à¤‰à¤ªà¤•à¤°à¤£ à¤¹à¥ˆ à¤œà¥‹ à¤µà¤¿à¤¨ à¤—à¥‹, 5à¤¡à¥€, à¤•à¥‡3 à¤”à¤° "à¤‘à¤¡ à¤à¤‚à¤¡ à¤‡à¤µà¤¨" à¤²à¥‰à¤Ÿà¤°à¥€ à¤•à¥‡ à¤ªà¤°à¤¿à¤£à¤¾à¤®à¥‹à¤‚ à¤•à¥‹ à¤Ÿà¥à¤°à¥ˆà¤• à¤”à¤° à¤—à¤¿à¤¨à¤¤à¤¾ à¤¹à¥ˆ, à¤”à¤° à¤¤à¥à¤µà¤°à¤¿à¤¤ à¤¦à¤¾à¤‚à¤µ à¤²à¤—à¤¾ à¤¸à¤•à¤¤à¤¾ à¤¹à¥ˆ',
          txt2: 'à¤ªà¥à¤°à¤¤à¥à¤¯à¥‡à¤• à¤†à¤µà¤°à¥à¤¤ à¤®à¥‡à¤‚ à¤¬à¤¡à¤¼à¥‡, à¤›à¥‹à¤Ÿà¥‡, à¤µà¤¿à¤·à¤® à¤”à¤° à¤¸à¤® à¤¹à¥‹à¤¨à¥‡ à¤•à¥€ à¤ªà¥à¤°à¤¾à¤¯à¤¿à¤•à¤¤à¤¾ à¤¸à¤®à¤¾à¤¨ à¤¹à¥‹à¤¤à¥€ à¤¹à¥ˆà¥¤ à¤¯à¤¦à¤¿ à¤ªà¤°à¤¿à¤£à¤¾à¤® 3 à¤¯à¤¾ à¤…à¤§à¤¿à¤• à¤²à¤—à¤¾à¤¤à¤¾à¤° à¤…à¤µà¤§à¤¿ à¤¸à¤®à¤¾à¤¨ à¤¹à¥ˆà¤‚, à¤¤à¥‹ à¤‡à¤¸à¥‡ "à¤²à¥‰à¤¨à¥à¤— à¤¡à¥à¤°à¥ˆà¤—à¤¨" à¤•à¤¹à¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆà¥¤ à¤†à¤®à¤¤à¥Œà¤° à¤ªà¤°, "à¤•à¤Ÿà¤¿à¤‚à¤— à¤¡à¥à¤°à¥ˆà¤—à¤¨" à¤¯à¤¾ "à¤«à¥‰à¤²à¥‹ à¤¦ à¤¡à¥à¤°à¥ˆà¤—à¤¨" à¤•à¥€ à¤µà¤¿à¤§à¤¿ à¤®à¤²à¥à¤Ÿà¥€à¤ªà¥à¤²à¥€ à¤¬à¥‡à¤Ÿà¤¿à¤‚à¤— à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤—à¥€à¥¤',
          list: [
            {
              name: "à¤•à¤Ÿ à¤¡à¥à¤°à¥ˆà¤—à¤¨ à¤•à¥à¤¯à¤¾ à¤¹à¥ˆ?",
              txt: 'à¤¯à¤¦à¤¿ à¤ªà¤°à¤¿à¤£à¤¾à¤® à¤²à¤—à¤¾à¤¤à¤¾à¤° 5 "à¤µà¤¿à¤·à¤®" à¤¹à¥ˆ, à¤¤à¥‹ à¤†à¤ª à¤¦à¤¾à¤‚à¤µ à¤²à¤—à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ "à¤¸à¤®" à¤šà¥à¤¨ à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚, à¤‡à¤¸ à¤¸à¤Ÿà¥à¤Ÿà¥‡à¤¬à¤¾à¤œà¥€ à¤¯à¥‹à¤œà¤¨à¤¾ à¤•à¥‹ "à¤•à¤Ÿ à¤¡à¥à¤°à¥ˆà¤—à¤¨" à¤•à¤¹à¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆ;',
            },
            {
              name: "à¤«à¥‰à¤²à¥‹ à¤¡à¥à¤°à¥ˆà¤—à¤¨ à¤•à¥à¤¯à¤¾ à¤¹à¥ˆ?",
              txt: 'à¤¯à¤¦à¤¿ à¤ªà¤°à¤¿à¤£à¤¾à¤® à¤²à¤—à¤¾à¤¤à¤¾à¤° 5 "à¤µà¤¿à¤·à¤®" à¤¹à¥ˆ, à¤¤à¥‹ à¤¦à¤¾à¤‚à¤µ à¤²à¤—à¤¾à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ "à¤…à¤œà¥€à¤¬" à¤•à¤¾ à¤šà¤¯à¤¨ à¤•à¤°à¤¨à¤¾ à¤œà¤¾à¤°à¥€ à¤°à¤–à¥‡à¤‚, à¤‡à¤¸ à¤¸à¤Ÿà¥à¤Ÿà¥‡à¤¬à¤¾à¤œà¥€ à¤¯à¥‹à¤œà¤¨à¤¾ à¤•à¥‹ "à¤«à¥‰à¤²à¥‹ à¤¡à¥à¤°à¥ˆà¤—à¤¨" à¤•à¤¹à¤¾ à¤œà¤¾à¤¤à¤¾ à¤¹à¥ˆ;',
            },
            {
              name: "à¤—à¥à¤£à¤¾ à¤•à¥à¤¯à¤¾ à¤¹à¥ˆ?",
              txt: 'à¤¡à¤¬à¤² à¤¬à¥‡à¤Ÿà¤¿à¤‚à¤— à¤à¤• à¤—à¥à¤£à¤¾ à¤¬à¥‡à¤Ÿà¤¿à¤‚à¤— à¤µà¤¿à¤§à¤¿ à¤¹à¥ˆ, à¤œà¥‹ "à¤•à¤¾à¤Ÿà¤¨à¥‡ à¤µà¤¾à¤²à¥‡ à¤¡à¥à¤°à¥ˆà¤—à¤¨" à¤¯à¤¾ "à¤¡à¥à¤°à¥ˆà¤—à¤¨ à¤•à¤¾ à¤ªà¤¾à¤²à¤¨ à¤•à¤°à¥‡à¤‚" à¤•à¥€ à¤ªà¥à¤°à¤•à¥à¤°à¤¿à¤¯à¤¾ à¤®à¥‡à¤‚ à¤¨à¤¿à¤°à¤‚à¤¤à¤° à¤²à¤¾à¤­ à¤¸à¥à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤à¤• à¤¸à¤Ÿà¥à¤Ÿà¥‡à¤¬à¤¾à¤œà¥€ à¤µà¤¿à¤§à¤¿ à¤¹à¥ˆà¥¤',
            },
          ],
          txt3: "à¤¨à¤µà¥€à¤¨à¤¤à¤® à¤²à¤‚à¤¬à¤¾ à¤¡à¥à¤°à¥ˆà¤—à¤¨: à¤¯à¤¹ à¤«à¤¼à¤‚à¤•à¥à¤¶à¤¨ à¤¸à¥à¤µà¤šà¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ 5 à¤…à¤µà¤§à¤¿ à¤•à¥‡ à¤²à¥‰à¤Ÿà¤°à¥€ à¤¡à¥à¤°à¥‰ à¤®à¥‡à¤‚ à¤¸à¤®à¤¾à¤¨ à¤ªà¤°à¤¿à¤£à¤¾à¤® à¤•à¥‡ à¤¸à¤¾à¤¥ à¤—à¥‡à¤® à¤ªà¥à¤°à¥‹à¤œà¥‡à¤•à¥à¤Ÿ à¤•à¥‹ à¤¸à¥à¤µà¤šà¤¾à¤²à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤…à¤ªà¤¡à¥‡à¤Ÿ à¤•à¤°à¥‡à¤—à¤¾, à¤¯à¤¹ à¤¨à¤¿à¤°à¥à¤£à¤¯ à¤²à¥‡à¤¨à¤¾ à¤†à¤ªà¤•à¥‡ à¤²à¤¿à¤ à¤¸à¥à¤µà¤¿à¤§à¤¾à¤œà¤¨à¤• à¤¹à¥ˆ à¤•à¤¿ à¤¡à¥à¤°à¥ˆà¤—à¤¨ à¤•à¥‹ à¤•à¤¾à¤Ÿà¤¨à¤¾ à¤¹à¥ˆ à¤¯à¤¾ à¤¡à¥à¤°à¥ˆà¤—à¤¨ à¤•à¤¾ à¤…à¤¨à¥à¤¸à¤°à¤£ à¤•à¤°à¤¨à¤¾ à¤¹à¥ˆà¥¤",
          txt4: "à¤®à¤¾à¤ˆ à¤¬à¥‡à¤Ÿ: à¤¯à¤¹ à¤¸à¥à¤µà¤¿à¤§à¤¾ à¤†à¤ªà¤•à¥‡ à¤¦à¤¾à¤‚à¤µ à¤•à¥‹ à¤¦à¥‡à¤–à¤¨à¤¾ à¤”à¤° à¤ªà¤°à¤¿à¤£à¤¾à¤® à¤¨à¤¿à¤•à¤¾à¤²à¤¨à¤¾ à¤†à¤¸à¤¾à¤¨ à¤¬à¤¨à¤¾à¤¤à¥€ à¤¹à¥ˆà¥¤",
        },
        shop: {
          currentPoints: "à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤¬à¤¿à¤‚à¤¦à¥",
          Redeem: "à¤®à¥à¤•à¥à¤¤ à¤•à¤°à¤¨à¤¾ ",
          pointsGo: "à¤ªà¥‰à¤‡à¤‚à¤Ÿà¥à¤¸ à¤®à¥‰à¤² à¤…à¤¬ à¤œà¤¾à¤“",
          commodityOrder: "à¤•à¤®à¥‹à¤¡à¤¿à¤Ÿà¥€ à¤‘à¤°à¥à¤¡à¤°",
          pointsRecord: "à¤…à¤‚à¤• à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡",
          title: "à¤ªà¥‰à¤‡à¤‚à¤Ÿà¥à¤¸ à¤®à¥‰à¤²",
          pointsAvailable: "à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤…à¤‚à¤•",
          rule: "à¤…à¤‚à¤• à¤¨à¤¿à¤¯à¤®",
          stock: "à¤¸à¥à¤Ÿà¥‰à¤• à¤®à¥‡à¤‚",
          redeemed: "à¤®à¥à¤•à¥à¤¤à¤¿ à¤¦à¤¿à¤²à¤¾à¤¨à¤¾",
          integral: "à¤…à¤­à¤¿à¤¨à¥à¤¨",
          productName: "à¤ªà¥à¤°à¥‹à¤¡à¤•à¥à¤Ÿ à¤•à¤¾ à¤¨à¤¾à¤®",
          exchange: "à¤µà¤¿à¤¨à¤¿à¤®à¤¯ à¤•à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿",
          name: "à¤ªà¤¹à¤²à¤¾ à¤”à¤° à¤†à¤–à¤°à¥€ à¤¨à¤¾à¤®",
          address: "à¤¶à¤¿à¤ªà¤¿à¤‚à¤— à¤ªà¤¤à¤¾",
          redeem: " à¤®à¥à¤•à¥à¤¤ à¤•à¤°à¤¨à¤¾ à¤œà¤¾à¤°à¥€",
          checkOrder: "à¤šà¥‡à¤• à¤‘à¤°à¥à¤¡à¤°",
          addressEmpty:
            "à¤ªà¤¤à¤¾ à¤–à¤¾à¤²à¥€ à¤¨à¤¹à¥€à¤‚ à¤¹à¥‹ à¤¸à¤•à¤¤à¤¾!",
          ordered: "à¤†à¤¦à¥‡à¤¶ à¤¦à¤¿à¤¯à¤¾",
          delivery: "à¤¡à¤¿à¤²à¥€à¤µà¤°à¥€ à¤šà¤¾à¤²à¥‚ à¤¹à¥ˆà¤‚",
          completed: "à¤ªà¥‚à¤°à¤¾ à¤•à¤¿à¤¯à¤¾ à¤¹à¥à¤†",
          orderDetails: "à¤‘à¤°à¥à¤¡à¤° à¤•à¤¾ à¤µà¤¿à¤µà¤°à¤£",
          orderTime: "à¤†à¤¦à¥‡à¤¶ à¤•à¤¾ à¤¸à¤®à¤¯",
          orderStatus: "à¤†à¤¦à¥‡à¤¶ à¤•à¥€ à¤¸à¥à¤¥à¤¿à¤¤à¤¿",
          signTime: "à¤œà¤®à¤¾ à¤•à¤°à¤¨à¥‡ à¤•à¤¾ à¤¸à¤®à¤¯",
          signPhoto: "à¤«à¥‹à¤Ÿà¥‹ à¤•à¥‡ à¤²à¤¿à¤ à¤¸à¤¾à¤‡à¤¨ à¤•à¤°à¥‡à¤‚",
        },
        selections: {
          distanceDraw: "à¤¶à¥‡à¤· à¤¸à¤®à¤¯",
          champion: "1st",
          runnerUp: "2nd",
          ndRunner: "3rd",
          outof1: "1/16",
          outof2: "2/16",
          outof3: "3/16",
        },
        lotteryD: {
          rules: "à¤•à¥ˆà¤¸à¥‡ à¤–à¥‡à¤²à¥‡à¤‚",
          LotteryTime: "à¤¨à¤¤à¥€à¤œà¤¾",
          seal: "à¤¶à¤°à¥à¤¤ à¤¬à¤‚à¤¦ à¤•à¤°à¥‡à¤‚",
          stPrize1: "à¤ªà¤¹à¤²à¤¾ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          stPrize2: "à¤¦à¥‚à¤¸à¤°à¤¾ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          stPrize3: "à¤¤à¥€à¤¸à¤°à¤¾ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          Finalist: "à¤«à¤¾à¤‡à¤¨à¤²",
          consolationprize: "à¤¸à¤¾à¤‚à¤¤à¥à¤µà¤¨à¤¾ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          Doubledisc: "à¤¦à¥‹ à¤¤à¤°à¤«à¤¾ à¤¡à¤¿à¤¸à¥à¤•",
          TraditionalDish: "à¤•à¥à¤²à¤¾à¤¸à¤¿à¤•",
          Doubleside: "à¤¦à¥‹ à¤¤à¤°à¤«à¤¾",
          Choosenumber: "à¤¨à¤‚à¤¬à¤° à¤šà¥à¤¨à¥‡à¤‚",
          FourDigit: "à¤šà¤¾à¤° à¤¨à¤‚à¤¬à¤° à¤šà¥à¤¨à¥‡à¤‚",
          FourSlection: "4à¤¡à¥€ à¤°à¥‹à¤²",
          duplicatenumber: "à¤¡à¥à¤ªà¥à¤²à¥€à¤•à¥‡à¤Ÿ à¤¨à¤‚à¤¬à¤°",
          numberFormat: "à¤¡à¥à¤ªà¥à¤²à¥€à¤•à¥‡à¤Ÿ à¤¨à¤‚à¤¬à¤°",
          Bigone: "à¤¬à¤¡à¤¼à¤¾",
          Smallone: "à¤›à¥‹à¤Ÿà¤¾",
          Bothone: "à¤¬à¤¡à¤¼à¤¾ + à¤›à¥‹à¤Ÿà¤¾",
          Addbet: "à¤¶à¤°à¥à¤¤ à¤œà¥‹à¤¡à¤¼à¥‡à¤‚",
          Randomnumber: "à¤Ÿà¥‹à¤Ÿà¤² à¤²à¤•à¥€ à¤¨à¤‚.",
          Machineselection: "à¤²à¤•à¥€ à¤šà¥à¤¨à¥‡à¤‚",
          Enternumber:
            "à¤…à¤ªà¤¨à¤¾ à¤µà¤¾à¤‚à¤›à¤¿à¤¤ à¤¨à¤‚à¤¬à¤° à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚à¥¤",
          Concatenatedcode:
            "à¤¸à¥€à¤§à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾ (à¤ªà¥ˆà¤•à¥‡à¤œ à¤¸à¤®à¥‚à¤¹)",
          select1: "2D à¤¸à¤­à¥€ à¤•à¤¾ à¤šà¤¯à¤¨ à¤•à¤°à¥‡à¤‚",
          select2: "3D à¤¸à¤­à¥€ à¤•à¤¾ à¤šà¤¯à¤¨ à¤•à¤°à¥‡à¤‚",
          select3: "4D à¤¸à¤­à¥€ à¤•à¤¾ à¤šà¤¯à¤¨ à¤•à¤°à¥‡à¤‚",
          select4: "2à¤¡à¥€ à¤¸à¤‚. à¤¸à¤Ÿà¥€à¤•",
          select5: "2à¤¡à¥€ à¤µà¤¿à¤¶à¥‡à¤· à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          select6: "2à¤¡à¥€ à¤ªà¥à¤°à¤¥à¤® à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          select7: "2D",
          select8: "3D",
          SeventhPrize: "7à¤µà¤¾à¤‚ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          EighthPrize: "8à¤µà¤¾à¤‚ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          positivecode3: "3à¤¡à¥€ à¤¸à¤‚. à¤¸à¤Ÿà¥€à¤•",
          SpecialPrize3: "3à¤¡à¥€ à¤µà¤¿à¤¶à¥‡à¤· à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          FirstPrize3: "3à¤¡à¥€ à¤ªà¥à¤°à¤¥à¤® à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          SixthPrize: "à¤›à¤ à¤¾ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          positivecode4: "4à¤¡à¥€ à¤¸à¤‚. à¤¸à¤Ÿà¥€à¤•",
          SpecialPrize4: "4à¤¡à¥€ à¤µà¤¿à¤¶à¥‡à¤· à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          FirstPrize4: "4D à¤ªà¥à¤°à¤¥à¤® à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          selectAll:
            "à¤¸à¤­à¥€ à¤•à¤¾ à¤šà¤¯à¤¨ à¤•à¤°à¤¨à¥‡ à¤®à¥‡à¤‚ à¤µà¤¿à¤«à¤²",
          misses4: "4 à¤µà¤¿à¤«à¤²",
          misses8: "8 à¤µà¤¿à¤«à¤²",
          misses10: "10 à¤µà¤¿à¤«à¤²",
          Enter: "à¤ªà¥à¤°à¤µà¥‡à¤¶ à¤•à¤°à¤¨à¤¾",
          Compound: "à¤ªà¤°à¤¿à¤µà¤°à¥à¤¤à¤¨",
          selected: "à¤†à¤ªà¤¨à¥‡ à¤–à¤¾à¤²à¥€",
          bet: "à¤šà¥à¤¨à¤¾",
          CN: "à¤°à¤µà¤¿à¤µà¤¾à¤°",
          T2: "à¤¸à¥‹à¤®à¤µà¤¾à¤°",
          T3: "à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°",
          T4: "à¤¬à¥à¤§à¤µà¤¾à¤°",
          T5: "à¤—à¥à¤°à¥à¤µà¤¾à¤°",
          T6: "à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°",
          T7: "à¤¶à¤¨à¤¿à¤µà¤¾à¤°",
          waitingdraw: "à¤¡à¥à¤°à¥‰ à¤•à¤¾ à¤‡à¤‚à¤¤à¤œà¤¾à¤°",
          grandPrize: "à¤­à¤µà¥à¤¯ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          firstprize: "à¤ªà¥à¤°à¤¥à¤® à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          secondprize: "à¤¦à¥à¤µà¤¿à¤¤à¥€à¤¯ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          thirdprize: "à¤¤à¥€à¤¸à¤°à¤¾ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          fourthprize: "à¤šà¥Œà¤¥à¤¾ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          fifthprize: "à¤ªà¤¾à¤‚à¤šà¤µà¤¾à¤‚ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          sixthprize: "à¤›à¤ à¤¾ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          seventhprize: "à¤¸à¤¾à¤¤à¤µà¤¾à¤‚ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          eighthprize: "à¤†à¤ à¤µà¤¾à¤‚ à¤ªà¥à¤°à¤¸à¥à¤•à¤¾à¤°",
          northernvietnam: "à¤‰à¤¤à¥à¤¤à¤°à¥€ à¤µà¤¿à¤¯à¤¤à¤¨à¤¾à¤®",
          southvietnam: "à¤¦à¤•à¥à¤·à¤¿à¤£ à¤µà¤¿à¤¯à¤¤à¤¨à¤¾à¤®",
          vietnamchinese: "à¤µà¤¿à¤¯à¤¤à¤¨à¤¾à¤® à¤šà¥€à¤¨à¥€",
        },
        finance: {
          title: "à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤",
          titleRes: "à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡",
          tip1: "à¤¦à¥ˆà¤¨à¤¿à¤• à¤¦à¤°",
          tip2: "à¤•à¤®à¤¾à¤ˆ à¤¹à¤° à¤®à¤¿à¤¨à¤Ÿ à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¥€",
          shop: "à¤ªà¥‰à¤‡à¤‚à¤Ÿà¥à¤¸ à¤®à¥‰à¤²",
          shopTip:
            "à¤¬à¤¡à¤¼à¥‡ à¤ªà¥ˆà¤®à¤¾à¤¨à¥‡ à¤ªà¤° à¤µà¤¿à¤²à¤¾à¤¸à¤¿à¤¤à¤¾ à¤•à¥‡ à¤¸à¤¾à¤®à¤¾à¤¨à¥‹à¤‚ à¤•à¤¾ à¤®à¥à¤«à¥à¤¤ à¤®à¥‹à¤šà¤¨",
          lumpSum: "à¤à¤•à¤®à¥à¤¶à¥à¤¤",
          security: "à¤µà¤¿à¤¤à¥à¤¤à¥€à¤¯ à¤¸à¥à¤°à¤•à¥à¤·à¤¾",
          transferIn: "à¤®à¥‡à¤‚ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤£",
          transferOut: "à¤¬à¤¾à¤¹à¤° à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤£",
          Every: "à¤¹à¤° à¤à¤•",
          minute: "à¤®à¤¿à¤¨à¤Ÿ à¤°à¤¾à¤œà¤¸à¥à¤µ",
          earnings: "à¤°à¤¾à¤œà¤¸à¥à¤µ à¤‰à¤¤à¥à¤ªà¤¨à¥à¤¨ à¤•à¤¿à¤¯à¤¾",
          cumulativeIncome: "à¤¸à¤‚à¤šà¤¯à¥€ à¤†à¤¯",
          estimatedIncome: "à¤…à¤¨à¥à¤®à¤¾à¤¨à¤¿à¤¤ à¤†à¤¯",
          income: "à¤†à¤¯",
          tip3: "à¤«à¤‚à¤¡ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤”à¤° à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤¹à¥ˆà¤‚, à¤”à¤° à¤•à¤¿à¤¸à¥€ à¤­à¥€ à¤¸à¤®à¤¯ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤¿à¤¤ à¤•à¤¿à¤ à¤œà¤¾ à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚",
          history: "à¤‡à¤¤à¤¿à¤¹à¤¾à¤¸ à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡",
          setIncome: "à¤¨à¤¿à¤ªà¤Ÿà¤¾à¤¨ à¤†à¤¯",
          allRecords: "à¤¸à¤­à¥€ à¤°à¤¿à¤•à¥‰à¤°à¥à¤¡",
          amountShare: "à¤ªà¥à¤°à¤¤à¤¿ à¤•à¥‰à¤ªà¥€ à¤°à¤¾à¤¶à¤¿",
          enter: "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤®à¤¾à¤¤à¥à¤°à¤¾ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
          availableBalance: "à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¶à¥‡à¤· à¤°à¤¾à¤¶à¤¿",
          outAmount: "à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤£ à¤°à¤¾à¤¶à¤¿",
          inAmount: "à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤£ à¤°à¤¾à¤¶à¤¿",
          all: "à¤¸à¤¬",
          balanceAvailable:
            "à¤…à¤ªà¤°à¥à¤¯à¤¾à¤ªà¥à¤¤ à¤¶à¥‡à¤· à¤°à¤¾à¤¶à¤¿ à¤‰à¤ªà¤²à¤¬à¥à¤§ à¤¹à¥ˆ",
          noIncome: "à¤•à¥‹à¤ˆ à¤•à¤®à¤¾à¤ˆ à¤¨à¤¹à¥€à¤‚",
          noIncomeTip:
            "à¤•à¥à¤¯à¤¾ à¤†à¤¯ à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤®à¥‡à¤‚ à¤¬à¤¾à¤¹à¤° à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤¿à¤¤ à¤•à¥€ à¤—à¤ˆ à¤¹à¥ˆ",
        },
        financeRule: {
          title:
            "à¤¤à¤¿à¤œà¥‹à¤°à¤¿à¤¯à¥‹à¤‚ à¤•à¥‡ à¤¬à¤¾à¤°à¥‡ à¤®à¥‡à¤‚ à¤œà¤¾à¤¨à¥‡à¤‚",
          Rtip: "à¤¨à¥à¤¯à¥‚à¤¨à¤¤à¤® à¤°à¤¿à¤Ÿà¤°à¥à¤¨, à¤¦à¥ˆà¤¨à¤¿à¤• à¤¬à¥à¤¯à¤¾à¤œ à¤¦à¤°",
          Rtip1:
            "à¤µà¥‰à¤²à¥‡à¤Ÿ à¤¬à¥ˆà¤²à¥‡à¤‚à¤¸ à¤•à¥‡ à¤Ÿà¥à¤°à¤¾à¤‚à¤¸à¤«à¤° à¤¹à¥‹à¤¨à¥‡ à¤•à¥‡ à¤¬à¤¾à¤¦, à¤¹à¤°",
          Rtip2: "à¤•à¤®à¤¾à¤ˆ à¤¹à¤° à¤®à¤¿à¤¨à¤Ÿ à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¥€",
          Rtip3:
            "à¤†à¤¯ à¤•à¥‹ à¤¦à¥‚à¤¸à¤°à¥€ à¤¬à¤¾à¤° à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤¿à¤¤ à¤¯à¤¾ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤¿à¤¤ à¤•à¤°à¤¨à¥‡ à¤ªà¤° à¤¤à¤¯ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾à¤à¤—à¤¾, à¤”à¤° à¤ªà¤¿à¤›à¤²à¥€ à¤•à¤®à¤¾à¤ˆ à¤•à¥‹ à¤µà¥‰à¤²à¥‡à¤Ÿ à¤¬à¥ˆà¤²à¥‡à¤‚à¤¸ à¤®à¥‡à¤‚ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤¿à¤¤ à¤•à¤° à¤¦à¤¿à¤¯à¤¾ à¤œà¤¾à¤à¤—à¤¾",
          Rtip4:
            "à¤¤à¤¿à¤œà¥‹à¤°à¥€ à¤®à¥‡à¤‚ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤¿à¤¤ à¤µà¥‰à¤²à¥‡à¤Ÿ à¤•à¥€ à¤¶à¥‡à¤· à¤°à¤¾à¤¶à¤¿ à¤•à¥‹ à¤‡à¤•à¤¾à¤‡à¤¯à¥‹à¤‚ à¤®à¥‡à¤‚ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤¿à¤¤ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤",
          Eg: "à¤‰à¤¦à¤¾à¤¹à¤°à¤£ à¤•à¥‡ à¤²à¤¿à¤:",
          Rtip5: "à¤à¤• à¤¸à¤°à¥à¤µà¤¿à¤‚à¤—",
          Rtip6:
            ", à¤•à¥‡ à¤°à¥‚à¤ª à¤®à¥‡à¤‚ 2 à¤ªà¥à¤°à¤¤à¤¿à¤¯à¥‹à¤‚ à¤®à¥‡à¤‚ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤¿à¤¤ à¤•à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾",
          Rtip7: ", à¤•à¥‡ à¤²à¤¿à¤ 10 à¤ªà¥à¤°à¤¤à¤¿à¤¯à¤¾à¤‚",
          Rtip8: ", 50 à¤ªà¥à¤°à¤¤à¤¿à¤¯à¥‹à¤‚ à¤•à¥‡ à¤²à¤¿à¤",
          Rtip9:
            ", à¤¹à¤¸à¥à¤¤à¤¾à¤‚à¤¤à¤°à¤£ à¤°à¤¾à¤¶à¤¿ 1000 à¤•à¤¾ à¤—à¥à¤£à¤• à¤¹à¥‹à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤",
          Rtip10:
            "à¤‡à¤¸ à¤¶à¤°à¥à¤¤ à¤•à¥‡ à¤¤à¤¹à¤¤ à¤•à¤¿ à¤†à¤ªà¤•à¥€ à¤†à¤¯ à¤•à¥€ à¤—à¤¾à¤°à¤‚à¤Ÿà¥€ à¤¹à¥ˆ, à¤†à¤ª à¤•à¤¿à¤¸à¥€ à¤­à¥€ à¤¸à¤®à¤¯ à¤¤à¤¿à¤œà¥‹à¤°à¥€ à¤•à¥‡ à¤¶à¥‡à¤· à¤•à¥‹ à¤¬à¤Ÿà¥à¤ à¤•à¥‡ à¤¶à¥‡à¤· à¤®à¥‡à¤‚ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤¿à¤¤ à¤•à¤° à¤¸à¤•à¤¤à¥‡ à¤¹à¥ˆà¤‚, à¤”à¤° à¤¹à¤¸à¥à¤¤à¤¾à¤‚à¤¤à¤°à¤£ à¤°à¤¾à¤¶à¤¿ à¤ªà¥à¤°à¤¤à¤¿à¤¯à¥‹à¤‚ à¤•à¥€ à¤¸à¤‚à¤–à¥à¤¯à¤¾ à¤•à¤¾ à¤à¤• à¤—à¥à¤£à¤• à¤¹à¥‹à¤¨à¤¾ à¤šà¤¾à¤¹à¤¿à¤",
          friendly: "à¤®à¤¿à¤¤à¥à¤°à¤µà¤¤ à¤…à¤¨à¥à¤¸à¥à¤®à¤¾à¤°à¤•",
          friendlytxt:
            'à¤•à¥ƒà¤ªà¤¯à¤¾ à¤¬à¤¾à¤°-à¤¬à¤¾à¤° à¤†à¤¨à¤¾-à¤œà¤¾à¤¨à¤¾ à¤¨ à¤•à¤°à¥‡à¤‚à¥¤ à¤œà¤®à¤¾ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ 1 à¤®à¤¿à¤¨à¤Ÿ à¤¬à¤¾à¤¦ à¤¸à¥‡ à¤†à¤¯ à¤•à¥€ à¤—à¤£à¤¨à¤¾ à¤•à¥€ à¤œà¤¾à¤à¤—à¥€à¥¤ à¤¯à¤¦à¤¿ à¤à¤•à¤² à¤•à¤®à¤¾à¤ˆ à¤°à¤¾à¤¶à¤¿ à¤•à¥€ à¤¸à¤‚à¤šà¤¿à¤¤ à¤°à¤¾à¤¶à¤¿ 0.01 à¤¸à¥‡ à¤•à¤® à¤¹à¥ˆ, à¤¤à¥‹ à¤‡à¤¸à¥‡ "à¤†à¤¯" à¤®à¥‡à¤‚ à¤¶à¤¾à¤®à¤¿à¤² à¤¨à¤¹à¥€à¤‚ à¤•à¤¿à¤¯à¤¾ à¤œà¤¾à¤à¤—à¤¾à¥¤',
          Safety: "à¤¸à¥à¤°à¤•à¥à¤·à¤¾",
          SafetyTxt:
            "à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤¤à¤•à¤¨à¥€à¤•à¥€ à¤Ÿà¥€à¤® à¤†à¤ªà¤•à¥‡ à¤«à¤‚à¤¡ à¤•à¥€ à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤¸à¥à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤ à¤•à¤°à¤¤à¥€ à¤¹à¥ˆ",
          SafetyTip:
            "à¤…à¤ªà¤¨à¥‡ à¤§à¤¨ à¤•à¥€ à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤¸à¥à¤¨à¤¿à¤¶à¥à¤šà¤¿à¤¤ à¤•à¤°à¤¨à¥‡ à¤•à¥‡ à¤²à¤¿à¤, à¤¯à¤¹ à¤…à¤¨à¥à¤¶à¤‚à¤¸à¤¾ à¤•à¥€ à¤œà¤¾à¤¤à¥€ à¤¹à¥ˆ à¤•à¤¿ à¤†à¤ª à¤…à¤ªà¤¨à¥‡ à¤µà¥‰à¤²à¥‡à¤Ÿ à¤•à¥€ à¤¶à¥‡à¤· à¤°à¤¾à¤¶à¤¿ à¤•à¥‹ à¤à¤• à¤¤à¤¿à¤œà¥‹à¤°à¥€ à¤®à¥‡à¤‚ à¤¸à¥à¤¥à¤¾à¤¨à¤¾à¤‚à¤¤à¤°à¤¿à¤¤ à¤•à¤° à¤¦à¥‡à¤‚",
        },
        flight: {
          title: "à¤ªà¤¾à¤¯à¤²à¤Ÿ",
          tit: "à¤—à¤°à¥à¤® à¤”à¤° à¤°à¥‹à¤®à¤¾à¤‚à¤šà¤•",
          sub: "à¤¸à¥à¤•à¤¾à¤‡à¤¡à¤¾à¤‡à¤µà¤¿à¤‚à¤— à¤–à¥‡à¤²",
          tip: "à¤–à¥‡à¤² à¤®à¥‡à¤‚ à¤ªà¥à¤°à¤µà¥‡à¤¶ à¤•à¤°à¤¨à¤¾ à¤¹à¥ˆ à¤¯à¤¾ à¤¨à¤¹à¥€à¤‚",
          btn: "à¤…à¤¬ à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
          gameName: "à¤ªà¤¾à¤¯à¤²à¤Ÿ",
          gameTip:
            "à¤‰à¤¡à¤¼à¥‹ à¤”à¤° à¤…à¤ªà¤¨à¤¾ à¤®à¥à¤¨à¤¾à¤«à¤¾ à¤¬à¤¢à¤¼à¤¾à¤“",
          enterGameName:
            "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤–à¥‡à¤² à¤•à¤¾ à¤¨à¤¾à¤® à¤¦à¤°à¥à¤œ à¤•à¤°à¥‡à¤‚",
        },
      },
    };
  },
  a3da: function (e, a, t) {
    e.exports = t.p + "img/ic_txcanbang.96d4b805.svg";
  },
  a894: function (e, a) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAALPklEQVRoBe1ZW4xVVxlee+9zmTM9w1CgTS3VaIoKDI2RFtLEJwFrsembEuuziVFMqn1rYnzU6EPpA6YxovESE22fmiZoDWACiWK5VORaoNMOM8MMDAiBKWVmzt7b7/v+tfbZ58wZ0NJ4Sxfss27//bbW3uPcrdrfFy/J2W5+bIX6fM2n84gInHUjauN8UslrjX5X6Wu4WqPhqugrhMzSlmvNzrgoiV0rSVwUJ7bBTW3EsRYj9Au26FJzYDdob6j29Yt+pd7n3KoV9aiXRCQTjUFaSqFHEnlM7rZmIJEYG/MYY4mb55mkiiFmDHHTOMmI0NG6eXbPZZGLjf48rlRcUqm62mOfd/m+fS7Mkw2fdfGf97soMp2FMB7HeVKtAaECwKqAK1X2VRERMucJ9ilPnkHWmZuS16140KWzs67/tf2aV/+wU3Mqms7Ntk1OxHRuTovZ7E16FIAz6udALMmqGGdOIhF43Lnj8PlqjqMo8jrUXFw13SDi8wMXJr7N/ffeuk1ISt1rctClgUFYqSpO0/d/GCauOrOSth1DlZvRsdejymS9fjxLU8mdnT8Pi6UuTyOXQg/qkk9OthUlUjdLsVngBwSiyjioUJxuJ9HrfILHaS02/aatllyfAZn8KQof/GiuPsYYzQKETmrNuaXDb0L+1MXr1rkMRDiONm5QzzmbAl8j/BTsGYgQsywS5/XhMz4EPca9Y2NK2WT9enBIMQa3TZvUc84WTTg3hOExjwNxY3GqIHrJMXAlh7vGz0XxhxBDiXNrAgIDjL5IURwy+gSRnOXpNIEDzII9fDSKZ/OCANjgPuEWgjFn+N3LS5YMoQy8GEXJ6lIV2nnjgY/Cgoh41IKOYoFSFpoPt2nYYEd09HCRBVLjcrM5lGb5MSKzmMhO6AcvXRQ+4rcgnGAdE4NjNXrjuPF4aG3gFfoMsZ2IwUS1mlM6iOilhLQoD5IWxFh0O6VvC1IIFbRj8PnG5NEMNpxX7wPQnfTKHRJg/rDJPEGSLnMxHbhf1iSYM5JZkT7a7zxJ2l4CAwYy04XnEUNv2fVrrvnrX9kc63e9+js3cOF8sU+4vpE3Xe1Pe4XL9CIN4aNnk+hjiDbNwg+lLWvitcGirUsb7yOsFX6Qvxgkpm31zEms9GpwCaW4D1V78Le/kVSsKIv27HZ3X7lcSMnkak6MucbBv6B4+ETDmmlR0qBc4bv5qTTJxpSeEdXOhaAlfSEfUevgB8jeODdsGixHvQDhPd3EOWeAmW1bKAfeR5DWfGX2DqUu2J7zvoFGvRe9/6M1mOaWRSyoCrjbFsQA29EDUa1jscfkdnAd1fTKkmXbENNfReQ0A613ln8kV01ChHRHUbgDEdZX0xM4p7ZERw74CojqoM2hodpUcxGSN/0WoqOZ4dAIjWNIqYPEDhceMNjPmJud+YmF1UiIY/lDa3cHfDGYGn7rXVCx04jIGIdGoiohOrk8I8CIMWF7tTzfkH9qHUPfa5Bnsa4gIBIYTW/5srOrSXtNGpARhRFDjHFVyb72Da118EpbL3KuWjRZq3s796rzVh1pf9Uin9VF/VF96qyggdG/5TzoXeyCCO9DrzA930NtmcCX7O5iFspxR/iqbNsLAvdZ/NjEQGEHXSK8MdF5TsERocNNCoCMGPqAzo0YORz7CCKxnG9ajDw5HmMyKzMgJyLkXCRxdALIE6zjQoglLpOZp6MxLrfG3GJFiHkESNEgFnD063/EhIyAuOTMabds+hoYGBFSHpy64Bq/31mEcvUnP3aNkWG70WG/CF0fwvMZCMgArz39tGudOiUkEue1MD036m5+57sFodkf/NDlU1OeIU4wCqfHEpIMpEf3mVw4D/chvoCqBsmuPk841uOdGuY4v3TT8PPq6RNRR7HzloKEcKbUxAp9FzZwfZTDOZe/UDIwLOyMQZ6Z7YOTi71AQz0Y3DsygkN/FlPzAX2x9NpVt2j3LtQ5M0Xj5z9zA5Pj3ixgJRMHM5F1iblmpZ+rW7e6uZMnJXFATM+dc+88+yxsbTZ+93vfd9nFKWms+hTsL58Zg54+KPHpsGm4RQT7R7pxt+9HZfsnceVE/e0zQ/IBuLC69zQXS3XYgGcK24c8YXSBjxwV7C8Ba/kW9sK937mGFhf4CYeO2R5XF28CJqHMB9OEXmGKK1D97FmdamIAAWYfsJB9HuPpeXzoPBKR7W1cjncxTGnz/IRzyZrm2MjGeTQ+WHg/LQCT864V2uid0AaRO6LF+P2XGyUvIyEj3hMd0rhTWvNKaY4r3pXx8edQ4L6OtMUJhjc71F421Yceb0T8CCQdCIt91g/TCXoJn/oZHR6JKsN+LsKln/DxqLTEIb6GRS+4lQ8+E730Estv0UKJ0cLF/ub2S2+PzKStdGuW5XFxi2OFVCYzg+29q6CAgfZQvlUqfBm30kI8lm7g0Wmgw3U+gmX/zzXeNra6k2dncOfdXkYpFLhYb2wDJwgeGFpPRgXDHK9jFABf0kILV1cTkjj2FAJKcRPYaGNMGK8or7Wh5ZMXsN4RnWGr3UMRKLEtLBSxO1mtXYebmp3h4kOAYYNhrN6Hh8LFwkKbxZwkbb0dVoajVxUPp9DimFcDEhcr8vGwPmyDoF39NK7UA1wrcgCnSBNv/rIOidCCauzpJ94nY1oSPfbDHVIwhJcYvEsCnnkAK+tuCXwKnkdtOhISAhbWFj/QIH1qwgfDYEzx6Pwp3u0IrQZiXuKw8t/dw7uSnbb9n25FCIWPaeY2CxFpxpLIf4xVKo2n6Iv4tTWuB7cHOiypDAkrrbRXGBMHc23buCd+iZ/ClhQoh2+FAmGBVYTMdfkhHK/IjGGuA9FiH+uMaTYRIyBg8I9vNUx2ywXAAF85oNwgqbAHHPkf+ySF+Nd1kbEPmsafdI02ko/FS/hFfoorfrobkYv6rRoOTGIjTVgKq09s1gf9xQdec/HKlVoXQ6YRyqPuqOvXuYHDB13z0AEXr39ECjHNwkdzjvOPr3D1Xa+6+sH9zm3c6GHsnCB/8izLQto8h1TWvdBUT22MKvZowc20HGxF87h73hp2yXJ83EObeeUVd/2pr2CEXcCwsV+0Z5errLVP2K3Dr7sbj/O7PfHxHx5iSPX9dIerbH5cONnEpJt99DMaixc962HJs5BD6/hMfuoodgUiHLeQAkaRBOwpiBGZSvkcsfUyI+61FSKrkA9xd15IqMDD8iIoGfCw6+kZHXznlwLzcsDU6fqluxkeSjr2vCVZXpCB1rnPNV5b+C0hxpxhRzboqKDlA19NTRhGSYSkkaIen2EiYzAnMipDOqaU0WN+kKg1M1GY3aZXXIJR/ckn3T2jo27pkb+6ZNUqEARTrBc9hEgeXe8Gjx5xg3874vhnqbCv2Ccs3oDiT37C9e/9o+s/ctglj31O+Mo9xTrp8Y9MRtfyh7kJhfj4VqhyyxAK0L6/D38vCzlw8+WX3dUvfslbDWHjQ23xvr2u+vDDwmgdOuSubdgES5MdHg/T/8tfuNoTXxBMNjHhbqx9xO+ZXUVLYWhhY3mAMfDrw6cle6EAPuhfh17FEe1lvWVHQhQmCKS4DfMQ/5gbHP8YQHYmjPUMDczDmmAtXFiuBRPocc+vxUk8jb9C6i5kqgIUwu+4pbQ9NhUODJ9SCIUws3AKZdDCQLdRcLKbq60R18ImrDMc8d+HjnAUnh7exoWshQcoH7ywHbhbe8h626XgjQ4vBOt5ywer0uptb1jYlb1oUea9Q8sXdAjrftQ/OvLNIFCHAlyEAjXc9p/DEG9kdlYG4Nv1YgQgulrx6sfEk/u9MISzeA6wIbQsIAy/vYZRhq9CL/TfveiZ6Pjxjjcy0v6g/Sct8A87tWk+ty6MSwAAAABJRU5ErkJggg==";
  },
  b013: function (e, a, t) {},
  b214: function (e, a, t) {
    e.exports = {
      homepage: {
        loadText: {
          loadMore:
            "á€¡á€€á€¼á€±á€¬á€„á€ºá€¸á€¡á€›á€¬ á€•á€­á€¯á€á€„á€ºá€•á€±á€¸á€á€¼á€„á€ºá€¸",
          loading: "á€–á€½á€„á€·á€ºá€”á€±á€žá€Šá€º",
          nomore: "á€¡á€™á€»á€¬á€¸á€€á€¼á€®á€¸á€™á€›á€¾á€­á€á€±á€¬á€·á€˜á€°á€¸",
        },
        loadingText: "á€á€±á€¬á€„á€ºá€¸á€†á€­á€¯á€”á€±á€žá€Šá€º",
        login: "á€œá€±á€¬á€·á€‚á€ºá€¡á€„á€º",
        numberFormat: "á€–á€¯á€”á€ºá€¸á€”á€¶á€•á€«á€á€ºá€–á€±á€¬á€ºá€™á€á€º",
        mobile: "á€–á€¯á€”á€ºá€¸",
        mobileNumber: "á€–á€¯á€”á€ºá€¸á€”á€¶á€•á€«á€á€º",
        pwd: "password",
        oldpwd: "á€…á€€á€¬á€¸á€á€¾á€€á€ºá€¡á€Ÿá€±á€¬á€„á€ºá€¸",
        pwds: "password á€€á€­á€¯á€žá€±á€á€»á€¬á€á€¼á€„á€ºá€¸",
        pwdsTip: "password á€™á€á€°á€˜á€°á€¸",
        register: "á€™á€¾á€á€ºá€•á€¯á€¶á€á€„á€º",
        registerTip:
          "á€¡á€€á€±á€¬á€„á€·á€ºá€á€…á€ºá€á€¯á€›á€¾á€­á€”á€±á€•á€¼á€®áŠ á€¡á€€á€±á€¬á€„á€·á€ºá€á€„á€ºá€•á€« ~",
        forgotPwd: "password á€•á€¼á€”á€ºá€œá€Šá€ºá€›á€šá€°á€á€¼á€„á€ºá€¸",
        customerService: "á€§á€Šá€ºá€·á€á€”á€ºá€†á€±á€¬á€„á€ºá€™á€¾á€¯",
        resetPwd:
          "password á€•á€¼á€”á€ºá€œá€Šá€ºá€žá€á€ºá€™á€¾á€á€ºá€á€¼á€„á€ºá€¸",
        verificationCode: "á€€á€¯á€’á€º",
        recommendationCode: "á€›á€Šá€ºá€Šá€½á€¾á€”á€ºá€¸á€€á€¯á€’á€º",
        agree: "á€€á€½á€”á€ºá€á€±á€¬á€ºá€žá€˜á€±á€¬á€á€°á€á€šá€º",
        privacy:
          "á€€á€­á€¯á€šá€ºá€›á€±á€¸á€¡á€á€»á€€á€ºá€¡á€œá€€á€ºá€™á€°á€á€«á€’",
        submit: "á€…á€á€„á€ºá€™á€Šá€º",
        network: "á€œá€¾á€­á€„á€ºá€¸á€™á€€á€±á€¬á€„á€ºá€¸á€•á€«",
        tips: "á€™á€¾á€á€ºá€á€»á€€á€º",
        remark: "á€™á€¾á€á€ºá€á€»á€€á€º",
        close: "á€•á€­á€á€ºá€‘á€¬á€¸á€á€¼",
        full: "á€™á€»á€€á€ºá€”á€¾á€¬á€•á€¼á€„á€ºá€¡á€•á€¼á€Šá€ºá€·",
        zoomOut: "á€á€»á€²á€·á€€á€¼á€Šá€·á€ºá€•á€«á‹",
        signout: "á€‘á€½á€€á€ºá€›á€”á€ºá€žá€±á€á€»á€¬á€•á€«á€žá€œá€¬á€¸",
        quit: "á€¤á€‚á€­á€™á€ºá€¸á€€á€­á€¯ á€–á€¼á€á€ºá€œá€­á€¯á€•á€«á€žá€œá€¬á€¸á‹",
        enterGame:
          "á€‚á€­á€™á€ºá€¸á€‘á€²á€€á€­á€¯ á€á€„á€ºá€á€»á€„á€ºá€á€¬ á€žá€±á€á€»á€¬á€œá€¬á€¸á‹",
        cancel: "á€™á€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€á€±á€¬á€·á€•á€«",
        confirm: "á€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€™á€Šá€º",
        success: "á€¡á€±á€¬á€„á€ºá€™á€¼á€„á€ºá€á€¼á€„á€ºá€¸",
        cancelled: "á€•á€¼á€”á€ºá€œá€Šá€·á€ºá€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€•á€«",
        fail: "á€†á€¯á€¶á€¸á€›á€¾á€¯á€¶á€¸á€á€¼á€„á€ºá€¸",
        del: "á€–á€»á€€á€ºá€•á€«",
        copy: "á€€á€±á€¬á€ºá€•á€®",
        copySuccess:
          "á€€á€±á€¬á€ºá€•á€®á€‘á€¬á€¸á€á€¬á€¡á€±á€¬á€„á€ºá€™á€¼á€„á€ºá€•á€«á€žá€Šá€ºá‹",
        required: "á€–á€¼á€Šá€·á€ºá€›á€™á€¾á€¬á€žá€±á€¬á€€á€½á€€á€ºá€œá€•á€º",
        pleaseRequired:
          "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€–á€¼á€Šá€·á€ºá€›á€™á€¾á€¬á€žá€±á€¬á€€á€½á€€á€ºá€œá€•á€ºá€™á€»á€¬á€¸á€€á€­á€¯ á€–á€¼á€Šá€·á€ºá€•á€±á€¸á€•á€«á‹",
        passwordError:
          "á€…á€€á€¬á€¸á€á€¾á€€á€ºá á€¡á€›á€¾á€Šá€ºá€žá€Šá€º 6 á€‘á€€á€º á€™á€”á€Šá€ºá€¸á€”á€­á€¯á€„á€ºá€•á€«áŠ áŽá€„á€ºá€¸á€žá€Šá€º á€…á€¬á€œá€¯á€¶á€¸á€”á€¾á€„á€·á€º á€”á€¶á€•á€«á€á€ºá€™á€»á€¬á€¸ á€•á€±á€«á€„á€ºá€¸á€…á€•á€ºá€‘á€¬á€¸á€›á€•á€«á€™á€Šá€ºá‹",
        pleaseEmail:
          "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€¡á€®á€¸á€™á€±á€¸á€œá€ºá€œá€­á€•á€ºá€…á€¬á€€á€­á€¯ á€¡á€™á€¾á€”á€ºá€á€­á€¯á€„á€ºá€¸á€›á€±á€¸á€•á€±á€¸á€•á€«á‹",
        informationTip:
          "á€á€„á€ºá€—á€»á€¬á€¸á á€œá€±á€¬á€·á€‚á€ºá€¡á€„á€º á€¡á€€á€¼á€±á€¬á€„á€ºá€¸á€¡á€›á€¬á€€á€­á€¯ á€žá€€á€ºá€á€™á€ºá€¸á€€á€¯á€”á€ºá€žá€½á€¬á€¸á€•á€¼á€® áŠ á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€•á€¼á€”á€ºá€œá€±á€¬á€·á€‚á€ºá€¡á€„á€ºá€•á€«",
        informationTip1:
          "á€á€„á€ºá€—á€»á€¬á€¸áá€¡á€€á€±á€¬á€„á€·á€ºá€€ á€á€á€¼á€¬á€¸á€”á€±á€›á€¬á€™á€¾á€¬ á€œá€±á€¬á€·á€‚á€ºá€¡á€„á€ºá€”á€±á€á€šá€ºá‹ á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á password á€€á€­á€¯á€•á€¼á€”á€ºá€•á€¼á€±á€¬á€„á€ºá€¸á€•á€«á‹",
        noData: "á€’á€±á€á€¬á€™á€›á€›á€¾á€­á€”á€­á€„á€ºá€•á€«",
        presaleRule:
          'á€€á€¼á€­á€¯á€á€„á€ºá€›á€±á€¬á€„á€ºá€¸á€á€»á€™á€¾á€¯á€á€½á€„á€º á€•á€«á€á€„á€ºá€žá€Šá€·á€º  á á€á€›á€¬á€¸á€á€„á€ºá€¡á€á€½á€„á€·á€ºá€¡á€›á€±á€¸á€”á€¾á€„á€·á€º á€¡á€€á€»á€­á€¯á€¸á€…á€®á€¸á€•á€½á€¬á€¸á€™á€»á€¬á€¸á€€á€­á€¯ á€€á€¬á€€á€½á€šá€ºá€›á€”á€ºá€”á€¾á€„á€·á€º á€€á€¼á€­á€¯á€á€„á€ºá€›á€±á€¬á€„á€ºá€¸á€á€»á€™á€¾á€¯á á€•á€¯á€¶á€™á€¾á€”á€ºá€œá€Šá€ºá€•á€á€ºá€™á€¾á€¯á€¡á€™á€­á€”á€·á€ºá€€á€­á€¯ á€‘á€­á€”á€ºá€¸á€žá€­á€™á€ºá€¸á€›á€”á€ºá€¡á€á€½á€€á€ºáŠ á€¤á€…á€Šá€ºá€¸á€™á€»á€‰á€ºá€¸á€™á€»á€¬á€¸á€€á€­á€¯ á€žá€€á€ºá€†á€­á€¯á€„á€ºá€›á€¬ á€žá€˜á€±á€¬á€á€°á€Šá€®á€á€»á€€á€ºá€™á€»á€¬á€¸á€”á€¾á€„á€·á€º á€”á€­á€¯á€„á€ºá€„á€¶á€á€±á€¬á€ºá€¥á€•á€’á€±á€™á€»á€¬á€¸á€”á€¾á€„á€·á€º á€…á€Šá€ºá€¸á€™á€»á€‰á€ºá€¸á€™á€»á€¬á€¸á€”á€¾á€„á€·á€ºá€¡á€Šá€® á€›á€±á€¸á€†á€½á€²á€‘á€¬á€¸á€žá€Šá€ºá‹á€¡á€á€”á€ºá€¸ 1 á€¡á€“á€­á€•á€¹á€•á€«á€šá€ºá€–á€½á€„á€·á€ºá€†á€­á€¯á€á€»á€€á€º 1.1 á€›á€±á€¬á€„á€ºá€¸á€™á€€á€¯á€”á€ºá€™á€® á€¡á€“á€­á€•á€¹á€•á€«á€šá€ºá€–á€½á€„á€·á€ºá€†á€­á€¯á€á€»á€€á€º- á€€á€¯á€”á€ºá€žá€Šá€ºá€á€…á€ºá€¦á€¸á€žá€Šá€º á€€á€¯á€”á€ºá€•á€…á€¹á€…á€Šá€ºá€¸ á€žá€­á€¯á€·á€™á€Ÿá€¯á€á€º á€á€”á€ºá€†á€±á€¬á€„á€ºá€™á€¾á€¯á€¡á€…á€®á€¡á€…á€¥á€ºá€€á€­á€¯ á€•á€¶á€·á€•á€­á€¯á€¸á€•á€±á€¸á€žá€Šá€·á€º á€¡á€›á€±á€¬á€„á€ºá€¸á€•á€¯á€¶á€…á€¶á€€á€­á€¯ á€›á€Šá€ºá€Šá€½á€¾á€”á€ºá€¸á€žá€Šá€ºáŠ á€›á€±á€¬á€„á€ºá€¸á€™á€€á€¯á€”á€ºá€™á€® á€‘á€¯á€á€ºá€€á€¯á€”á€ºá€€á€­á€›á€­á€šá€¬á€™á€»á€¬á€¸á€™á€¾á€á€…á€ºá€†á€„á€·á€º á€…á€¬á€¸á€žá€¯á€¶á€¸á€žá€°á€¡á€™á€¾á€¬á€…á€¬á€™á€»á€¬á€¸á€€á€­á€¯ á€…á€¯á€†á€±á€¬á€„á€ºá€¸á€€á€¬áŠ á€šá€á€„á€ºá€žá€˜á€±á€¬á€á€°á€Šá€®á€á€»á€€á€ºá€™á€»á€¬á€¸á€€á€­á€¯ á€¡á€á€¼á€±á€á€¶á á€…á€¬á€¸á€žá€¯á€¶á€¸á€žá€°á€¡á€¬á€¸ á€€á€¯á€”á€ºá€…á€Šá€ºá€”á€¾á€„á€·á€º/á€žá€­á€¯á€·á€™á€Ÿá€¯á€á€º á€á€”á€ºá€†á€±á€¬á€„á€ºá€™á€¾á€¯á€™á€»á€¬á€¸ á€•á€±á€¸á€†á€±á€¬á€„á€ºá€žá€Šá€ºá‹ 1.2 á€€á€¼á€­á€¯á€á€„á€ºá€›á€±á€¬á€„á€ºá€¸á€á€»á€™á€¾á€¯á€•á€¯á€¶á€…á€¶á€žá€Šá€º "depo it" á€™á€¯á€’á€ºá€–á€¼á€…á€ºá€žá€Šá€ºá‹ â€œ"Dep os it" á€žá€Šá€º á€…á€»á€±á€¸á€”á€¾á€¯á€”á€ºá€¸á€–á€¼á€„á€·á€º á€žá€á€ºá€™á€¾á€á€ºá€‘á€¬á€¸á€žá€±á€¬ á€›á€±á€¬á€„á€ºá€¸á€™á€€á€¯á€”á€ºá€™á€® á€•á€™á€¬á€á€á€…á€ºá€á€¯á€€á€­á€¯ á€€á€¼á€­á€¯á€á€„á€ºá€•á€±á€¸á€•á€­á€¯á€·á€á€¼á€„á€ºá€¸á€€á€­á€¯ á€›á€Šá€ºá€Šá€½á€¾á€”á€ºá€¸á€•á€«á€žá€Šá€ºá‹ "á€¡á€•á€ºá€„á€½á€±" á€œá€­á€™á€ºá€œá€Šá€ºá€™á€¾á€¯á€žá€Šá€º á€™á€®á€”á€®á€‚á€­á€™á€ºá€¸á€á€½á€„á€º á€•á€«á€á€„á€ºá€•á€¼á€®á€¸ á€¡á€•á€ºá€„á€½á€±á€™á€»á€¬á€¸ á€•á€­á€¯á€™á€­á€¯á€›á€›á€¾á€­á€›á€”á€º á€¡á€á€½á€„á€·á€ºá€¡á€œá€™á€ºá€¸á€›á€¾á€­á€žá€Šá€ºá‹ á€¡á€•á€ºá€„á€½á€±á€™á€»á€¬á€¸á€€á€­á€¯ á€€á€¯á€”á€ºá€…á€Šá€ºá€¡á€á€½á€€á€º á€á€­á€¯á€€á€ºá€›á€­á€¯á€€á€ºá€œá€²á€œá€¾á€šá€ºá€”á€­á€¯á€„á€ºá€•á€«á€žá€Šá€ºá‹ á€¡á€•á€ºá€„á€½á€±á€™á€»á€¬á€¸á€€á€­á€¯ á€•á€¼á€”á€ºá€œá€Šá€ºá€›á€½á€±á€¸á€šá€°áá€™á€›á€•á€«á‹ 1.3 á€›á€±á€¬á€„á€ºá€¸á€™á€€á€¯á€”á€ºá€™á€® á€‘á€¯á€á€ºá€€á€¯á€”á€ºá€™á€»á€¬á€¸- á€›á€±á€¬á€„á€ºá€¸á€™á€€á€¯á€”á€ºá€™á€® á€‘á€¯á€á€ºá€€á€¯á€”á€ºá€€á€­á€›á€­á€šá€¬á€™á€»á€¬á€¸á€€á€­á€¯ á€¡á€žá€¯á€¶á€¸á€•á€¼á€¯á€•á€¼á€®á€¸ á€€á€¯á€”á€ºá€žá€Šá€ºá€™á€»á€¬á€¸á€€ á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€•á€±á€¸á€žá€Šá€·á€º á€‘á€¯á€á€ºá€€á€¯á€”á€ºá€™á€»á€¬á€¸á€€á€­á€¯ á€›á€Šá€ºá€Šá€½á€¾á€”á€ºá€¸á€•á€«á€žá€Šá€ºá‹ á€€á€¯á€”á€ºá€•á€…á€¹á€…á€Šá€ºá€¸á€¡á€™á€Šá€º á€žá€­á€¯á€·á€™á€Ÿá€¯á€á€º á€‘á€¯á€á€ºá€€á€¯á€”á€ºá€¡á€žá€±á€¸á€…á€­á€á€ºá€…á€¬á€™á€»á€€á€ºá€”á€¾á€¬á€á€½á€„á€º á€›á€±á€¬á€„á€ºá€¸á€á€»á€žá€Šá€·á€º á€…á€€á€¬á€¸á€œá€¯á€¶á€¸á€€á€­á€¯á€žá€¬ á€¡á€™á€¾á€á€ºá€¡á€žá€¬á€¸á€•á€¼á€¯á€•á€«áŠ á€”á€¾á€„á€·á€º á€€á€¼á€­á€¯á€á€„á€ºá€›á€±á€¬á€„á€ºá€¸á€á€»á€žá€Šá€·á€º á€€á€¯á€”á€ºá€•á€…á€¹á€…á€Šá€ºá€¸á€€á€­á€¯ á€¡á€žá€¯á€¶á€¸á€™á€•á€¼á€¯á€žá€±á€¬ á€‘á€¯á€á€ºá€€á€¯á€”á€ºá€™á€»á€¬á€¸áŠ á€€á€­á€›á€­á€šá€¬á€™á€»á€¬á€¸á€žá€Šá€º á€›á€±á€¬á€„á€ºá€¸á€™á€€á€¯á€”á€ºá€™á€® á€‘á€¯á€á€ºá€€á€¯á€”á€ºá€™á€»á€¬á€¸á€™á€Ÿá€¯á€á€ºá€•á€«á‹ 1.4 á€€á€¼á€­á€¯á€á€„á€ºá€›á€±á€¬á€„á€ºá€¸á€á€»á€™á€¾á€¯á€…á€”á€…á€º- á€¡á€™á€»á€­á€¯á€¸á€¡á€…á€¬á€¸á€›á€±á€¬á€„á€ºá€¸á€á€»á€™á€¾á€¯á€¡á€á€½á€€á€º á€€á€¯á€”á€ºá€žá€Šá€ºá€™á€»á€¬á€¸á€…á€”á€…á€º á€€á€¯á€”á€ºá€…á€Šá€ºá€€á€­á€›á€­á€šá€¬á€™á€»á€¬á€¸á€€á€­á€¯ á€•á€¶á€·á€•á€­á€¯á€¸á€•á€±á€¸á€žá€Šá€·á€º á€¡á€€á€¼á€­á€¯á€›á€±á€¬á€„á€ºá€¸á€á€»á€žá€Šá€·á€ºá€…á€€á€ºá€€á€­á€¯ á€›á€Šá€ºá€Šá€½á€¾á€”á€ºá€¸á€žá€Šá€ºá‹ á€€á€¼á€­á€¯á€á€„á€ºá€›á€±á€¬á€„á€ºá€¸á€á€»á€žá€Šá€·á€ºá€€á€¯á€”á€ºá€…á€Šá€ºáá€…á€»á€±á€¸á€”á€¾á€¯á€”á€ºá€¸á€á€½á€„á€º á€¡á€•á€­á€¯á€„á€ºá€¸á€”á€¾á€…á€ºá€•á€­á€¯á€„á€ºá€¸á€•á€«á€á€„á€ºá€žá€Šá€º- dep os it á€”á€¾á€„á€·á€º á€”á€±á€¬á€€á€ºá€†á€¯á€¶á€¸á€•á€±á€¸á€á€»á€±á€™á€¾á€¯á‹',
        more: "á€”á€±á€¬á€€á€ºá€‘á€•á€º",
        verificationTip:
          "á€¡á€á€Šá€ºá€•á€¼á€¯á€€á€¯á€’á€ºá€€á€­á€¯á€™á€›á€˜á€°á€¸á€œá€¬á€¸á‹ á€§á€Šá€ºá€·á€á€”á€ºá€†á€±á€¬á€„á€ºá€™á€¾á€¯á€€á€­á€¯á€†á€€á€ºá€žá€½á€šá€ºá€•á€«á‹ ",
        symbolU: "USDT",
        newes: "á€”á€±á€¬á€€á€ºá€†á€¯á€¶á€¸á€€á€¼á€±á€„á€¼á€¬á€á€»á€€á€º",
        upgraded:
          "á€¡á€…á€®á€¡á€…á€‰á€ºá€€á€­á€¯ á€¡á€†á€„á€·á€ºá€™á€¼á€¾á€„á€·á€ºá€á€„á€ºá€”á€±á€•á€«á€žá€Šá€ºá‹......",
        gameTit:
          "á€œá€€á€ºá€€á€»á€”á€ºá€•á€¼á€”á€ºá€œá€Šá€ºá€›á€šá€°á€á€¼á€„á€ºá€¸ á€™á€¡á€±á€¬á€„á€ºá€™á€¼á€„á€ºá€•á€«á‹",
        gameLeft: "á€‘á€•á€ºá€€á€¼á€­á€¯á€¸á€…á€¬á€¸á€•á€«",
        gameRight: "á€•á€¼á€”á€ºá€œá€Šá€ºá€¡á€žá€¯á€¶á€¸á€•á€¼á€¯á€•á€«á‹",
        tab: {
          hot: "á€”á€¬á€™á€Šá€ºá€€á€¼á€®á€¸",
          lottety: "Lottery",
          fishing: "á€„á€«á€¸á€–á€™á€ºá€¸",
          electronic: "Slots",
          physical: "á€€á€¬á€šá€•á€Šá€¬",
          realperson: "á€€á€¬á€…á€®á€”á€­á€¯",
          chess: "á€˜á€¯á€á€ºá€‚á€­á€™á€ºá€¸á€™á€»á€¬á€¸",
          smallgame: "á€žá€±á€¸á€„á€šá€ºá€á€²á€·á€‚á€­á€™á€ºá€¸",
          safe: "á€˜á€±á€¸á€€á€„á€ºá€¸á€žá€Šá€ºá‹",
        },
        home: {
          lottetyTitle: "lottery á€¡á€€á€¼á€®á€¸á€†á€¯á€¶á€¸á€‘á€®",
          recharge: "á€„á€½á€±á€–á€¼á€Šá€·á€ºá€á€¼á€„á€ºá€¸",
          balance: "á€œá€€á€ºá€€á€»á€”á€ºá€„á€½á€±",
          customerService:
            "á€–á€±á€¬á€€á€ºá€žá€Šá€ºá€á€”á€ºá€†á€±á€¬á€„á€ºá€™á€¾á€¯",
          lottety: "lottery",
          wealth: "á€„á€½á€±á€€á€¼á€±á€¸á€…á€®á€á€”á€·á€ºá€á€½á€²á€™á€¾á€¯",
          leftTime: "á€€á€»á€”á€ºá€á€»á€­á€”á€ºá€á€šá€ºá€›á€”á€º",
          min: "á€™á€­á€”á€…á€º",
          sec: "á€…á€€á€¹á€€á€”á€·á€º",
          newTitle: "á€žá€á€„á€ºá€¸á€…á€¬",
          newCenter: "á€žá€á€„á€ºá€¸á€…á€¬á€…á€„á€ºá€á€¬",
          newDes:
            "á€žá€á€„á€ºá€¸á€…á€¬á€¡á€žá€±á€¸á€…á€­á€á€ºá€–á€±á€¬á€ºá€•á€¼á€á€»á€€á€º",
          wrTime: "á€á€˜á€ºá€†á€­á€¯á€’á€ºá€œá€Šá€ºá€•á€á€ºá€á€»á€­á€”á€º",
          days: "á€›á€€á€º",
          hours: "á€”á€¬á€›á€®",
          minutes: "á€™á€­á€”á€…á€º",
          seconds: "á€…á€€á€¹á€€á€”á€·á€º",
          pengguna: "á€¡á€–á€½á€²á€·á€á€„á€ºá€¡á€›á€±á€¡á€á€½á€€á€º",
          jumlahTaruhan:
            "á€¡á€œá€±á€¬á€„á€ºá€¸á€¡á€…á€¬á€¸á€¡á€›á€±á€¡á€á€½á€€á€º",
          Online:
            "á€¡á€½á€”á€ºá€œá€­á€¯á€„á€ºá€¸á€•á€±á€«á€ºá€›á€¾á€­á€žá€°á€™á€»á€¬á€¸",
          penarikanHari:
            "á€šá€”á€±á€·á€‰á€®á€¸á€†á€±á€¬á€„á€ºá€žá€°á€…á€¬á€›á€„á€ºá€¸",
          gin: "á€›á€¾á€­á€á€šá€º",
          got: "á€›á€›á€¾á€­á€•á€«á€žá€Šá€º",
          GameName: "á€„á€«á€¸á€–á€™á€ºá€¸á€‚á€­á€™á€ºá€¸",
          popular:
            "á€œá€°á€€á€¼á€­á€¯á€€á€ºá€™á€»á€¬á€¸á€‘á€±á€¬á€€á€ºá€á€¶á€á€»á€€á€º",
          platform:
            "á€•á€œá€•á€ºá€–á€±á€¬á€„á€ºá€¸á€‘á€±á€¬á€€á€ºá€á€¶á€á€»á€€á€º",
          Game1: "5D Lotre",
          Game2: "Win Go",
          Game3: "Slots",
          Game4: "K3 Lotre",
          Game5: "á€€á€¬á€…á€®á€”á€­á€¯",
          Game6: "á€€á€¬á€šá€•á€Šá€¬",
          Game7: "á€›á€½á€¾á€±á€¸á€á€»á€šá€ºá€á€»á€„á€ºá€¸16á€á€¯",
          Game8: "á€”á€­á€¯á€„á€ºá€„á€¶",
          Game9: "á€…á€„á€ºá€€á€¬á€•á€° 4D",
          Game10: "Vietnam Lottery",
          Game11: "Universal 4D",
          Game12: "á€™á€œá€±á€¸á€›á€¾á€¬á€¸ 4D",
          Game13:
            "á€…á€€á€¬á€¸á€œá€¯á€¶á€¸á€•á€±á€«á€„á€ºá€¸ á€á€…á€ºá€žá€±á€¬á€„á€ºá€¸á€€á€»á€±á€¬á€º",
          Game14: "á€™á€¼á€”á€ºá€”á€¾á€¯á€”á€ºá€¸ 4D",
          Game1Tip:
            "á€á€”á€·á€ºá€™á€¾á€”á€ºá€¸ á€”á€¶á€•á€«á€á€º áŠ á€¡á€™á€¼á€„á€·á€º áŠ á€¡á€”á€­á€™á€·á€º áŠ á€…á€¯á€¶ áŠ á€™",
          Game2Tip:
            "á€á€”á€·á€ºá€™á€¾á€”á€ºá€¸ á€”á€¶á€•á€«á€á€º áŠ á€¡á€…á€­á€™á€ºá€¸á€›á€±á€¬á€„á€º áŠ á€á€›á€™á€ºá€¸á€›á€±á€¬á€„á€ºáŠ á€¡á€”á€®á€›á€±á€¬á€„á€ºá€”á€­á€¯á€„á€ºá€žá€Šá€º",
          Game3Tip:
            "á€†á€€á€ºá€•á€¼á€®á€¸á€€á€¼á€Šá€·á€ºá€œá€­á€¯á€€á€ºá€•á€« áŠ á€†á€€á€ºá€•á€¼á€®á€¸á€€á€¼á€Šá€·á€ºá€œá€­á€¯á€€á€ºá€•á€« áŠ á€†á€€á€ºá€•á€¼á€®á€¸á€€á€¼á€Šá€·á€ºá€œá€­á€¯á€€á€ºá€•á€«",
          Game4Tip:
            "á€á€”á€·á€ºá€™á€¾á€”á€ºá€¸ á€”á€¶á€•á€«á€á€º áŠ á€¡á€™á€¼á€„á€·á€º áŠ á€¡á€”á€­á€™á€·á€º áŠ á€…á€¯á€¶ áŠ á€™",
          Game5Tip:
            "Baccarat/á€”á€‚á€«á€¸á€”á€²á€·á€€á€»á€¬á€¸/Roulette/Sic Bo",
          Game6Tip:
            "á€á€­á€¯á€€á€ºá€›á€­á€¯á€€á€ºá€–á€¼á€…á€ºá€›á€•á€ºá€™á€»á€¬á€¸ / á€¡á€¬á€¸á€œá€¯á€¶á€¸á€á€…á€ºá€•á€¼á€­á€¯á€„á€ºá€á€Šá€ºá€¸",
          Game7Tip:
            "á€á€”á€·á€ºá€™á€¾á€”á€ºá€¸ á€”á€¶á€•á€«á€á€º áŠ á€¡á€™á€¼á€„á€·á€º áŠ á€¡á€”á€­á€™á€·á€º áŠ á€…á€¯á€¶ áŠ á€™",
          Game8Tip:
            "á€á€­á€¯á€€á€ºá€›á€­á€¯á€€á€ºá€–á€¼á€…á€ºá€›á€•á€ºá€™á€»á€¬á€¸ / á€¡á€¬á€¸á€œá€¯á€¶á€¸á€á€…á€ºá€•á€¼á€­á€¯á€„á€ºá€á€Šá€ºá€¸",
          Game9Tip:
            "á€á€”á€·á€ºá€™á€¾á€”á€ºá€¸ á€”á€¶á€•á€«á€á€º áŠ á€¡á€™á€¼á€„á€·á€º áŠ á€¡á€”á€­á€™á€·á€º áŠ á€…á€¯á€¶ áŠ á€™",
          Game10Tip:
            "á€á€”á€·á€ºá€™á€¾á€”á€ºá€¸ á€”á€¶á€•á€«á€á€º áŠ á€¡á€…á€­á€™á€ºá€¸á€›á€±á€¬á€„á€º áŠ á€á€›á€™á€ºá€¸á€›á€±á€¬á€„á€ºáŠ á€¡á€”á€®á€›á€±á€¬á€„á€ºá€”á€­á€¯á€„á€ºá€žá€Šá€º",
          Game11Tip:
            "á€á€”á€·á€ºá€™á€¾á€”á€ºá€¸ á€”á€¶á€•á€«á€á€º áŠ á€¡á€™á€¼á€„á€·á€º áŠ á€¡á€”á€­á€™á€·á€º áŠ á€…á€¯á€¶ áŠ á€™",
          Game12Tip:
            "á€á€”á€·á€ºá€™á€¾á€”á€ºá€¸ á€”á€¶á€•á€«á€á€º áŠ á€¡á€™á€¼á€„á€·á€º áŠ á€¡á€”á€­á€™á€·á€º áŠ á€…á€¯á€¶ áŠ á€™",
          Game13Tip:
            "á€á€”á€·á€ºá€™á€¾á€”á€ºá€¸ á€”á€¶á€•á€«á€á€º áŠ á€¡á€™á€¼á€„á€·á€º áŠ á€¡á€”á€­á€™á€·á€º áŠ á€…á€¯á€¶ áŠ á€™",
          Game14Tip:
            "á€á€”á€·á€ºá€™á€¾á€”á€ºá€¸ á€”á€¶á€•á€«á€á€º áŠ á€¡á€™á€¼á€„á€·á€º áŠ á€¡á€”á€­á€™á€·á€º áŠ á€…á€¯á€¶ áŠ á€™",
          Game6t: "Sabah",
          nextDraw: "á€”á€±á€¬á€€á€ºá€á€€á€»á€±á€¬á€·",
          playNow: "á€á€»á€€á€ºá€á€»á€„á€ºá€¸á€á€„á€ºá€†á€±á€¬á€·á€™á€Šá€º",
          howWorks: " á€˜á€šá€ºá€œá€­á€¯á€á€šá€ºá€›á€™á€¾á€¬á€œá€²",
          game_title1:
            "á€€á€¼á€­á€¯á€€á€ºá€á€²á€·á€‚á€­á€™á€ºá€¸á€€á€­á€¯ á€›á€½á€±á€¸á€•á€«",
          game_title2:
            "á€žá€„á€ºáá€€á€¶á€€á€±á€¬á€„á€ºá€¸á€”á€¶á€•á€«á€á€ºá€€á€­á€¯á€›á€½á€±á€¸á€á€»á€šá€ºá€•á€«",
          game_title3: "á€¡á€œá€±á€¬á€„á€ºá€¸á€¡á€…á€¬á€¸",
          game_title4: "á€†á€¯á€„á€½á€±á€›á€›á€¾á€­á€žá€Šá€º",
          game_First: "á€•á€‘á€™á€¡á€†á€„á€·á€ºá€™á€¾á€¬",
          game_Second: "á€’á€¯á€á€­á€šá€¡á€†á€„á€·á€ºá€™á€¾á€¬",
          game_Third: "á€á€á€­á€šá€¡á€†á€„á€·á€ºá€™á€¾á€¬",
          game_Fourth: "á€…á€á€¯á€á€¹á€‘á€¡á€†á€„á€·á€ºá€™á€¾á€¬",
          list: [
            {
              title:
                "á€€á€¼á€­á€¯á€€á€ºá€á€²á€·á€‚á€­á€™á€ºá€¸á€€á€­á€¯ á€›á€½á€±á€¸á€•á€«á‹",
              txt: "á€žá€„á€ºá€žá€Šá€º á á€™á€­á€”á€…á€ºáŠ áƒ á€™á€­á€”á€…á€ºáŠ á… á€™á€­á€”á€…á€ºá€”á€¾á€„á€·á€º áá€á€™á€­á€”á€…á€ºáŠ á€‘á€®á€‚á€­á€™á€ºá€¸á€™á€»á€¬á€¸ á€€á€…á€¬á€¸á€›á€”á€º á€žá€„á€ºá€›á€½á€±á€¸á€á€»á€šá€ºá€”á€­á€¯á€„á€ºá€žá€Šá€ºá‹",
            },
            {
              title:
                "á€žá€„á€ºáá€€á€¶á€€á€±á€¬á€„á€ºá€¸á€”á€¶á€•á€«á€á€ºá€€á€­á€¯á€›á€½á€±á€¸á€á€»á€šá€ºá€•á€«á‹",
              txt: "á€žá€„á€ºáá€€á€¶á€€á€±á€¬á€„á€ºá€¸á€”á€¶á€•á€«á€á€ºá€žá€­á€¯á€·á€™á€Ÿá€¯á€á€ºá€¡á€›á€±á€¬á€„á€ºá€€á€­á€¯á€›á€½á€±á€¸á€á€»á€šá€ºá€•á€«á‹",
            },
            {
              title: "á€¡á€œá€±á€¬á€„á€ºá€¸á€¡á€…á€¬á€¸",
              txt: "á€žá€„á€ºá€œá€±á€¬á€„á€ºá€¸á€œá€­á€¯á€žá€±á€¬á€•á€™á€¬á€á€€á€­á€¯ á€›á€½á€±á€¸á€á€»á€šá€ºá€•á€¼á€®á€¸ á€¡á€á€Šá€ºá€•á€¼á€¯á€•á€«á‹",
            },
            {
              title: "á€†á€¯á€„á€½á€±á€›á€›á€¾á€­á€”á€­á€¯á€„á€ºá€žá€Šá€ºá‹",
              txt: "á€œá€€á€ºá€›á€¾á€­á€€á€¬á€œá€¡á€á€½á€€á€º á€€á€¶á€€á€±á€¬á€„á€ºá€¸á€”á€¶á€•á€«á€á€ºá€€á€­á€¯ á€žá€„á€ºá€›á€½á€±á€¸á€á€»á€šá€ºá€žá€±á€¬á€¡á€á€«áŠ á€…á€”á€…á€ºá€žá€Šá€º á€žá€„á€·á€ºá€œá€€á€ºá€€á€»á€”á€ºá€‘á€²á€žá€­á€¯á€· á€˜á€±á€¬á€”á€•á€ºá€…á€ºá€™á€»á€¬á€¸á€€á€­á€¯ á€¡á€œá€­á€¯á€¡á€œá€»á€±á€¬á€€á€º á€‘á€Šá€·á€ºá€žá€½á€„á€ºá€¸á€•á€±á€¸á€™á€Šá€ºá€–á€¼á€…á€ºá€žá€Šá€ºá‹ã€‚",
            },
          ],
        },
        index: {
          Charttren: "á€‡á€šá€¬á€¸á€œá€™á€ºá€¸á€€á€¼á€±á€¬á€„á€ºá€¸á€žá€…á€º",
          Total: "á€…á€¯á€…á€¯á€•á€±á€«á€¸á€„á€½á€±á€•á€™á€¬á€",
          walletBalance: "á€œá€€á€ºá€€á€»á€”á€ºá€„á€½á€±",
          recharge: "á€„á€½á€±á€–á€¼á€Šá€·á€ºá€á€¼á€„á€ºá€¸",
          withdraw: "á€„á€½á€±á€‘á€¯á€á€ºá€•á€™á€¬á€",
          lotteyRule: "lottery á€…á€Šá€ºá€¸á€€á€™á€ºá€¸á€™á€»á€¬á€¸",
          iKnow: "á€€á€»á€½á€”á€ºá€á€±á€¬á€ºá€žá€­á€á€ºá‹",
          big: "á€¡á€€á€¼á€®á€¸",
          small: "á€¡á€žá€±á€¸",
          green: "á€¡á€…á€­á€™á€ºá€¸á€›á€±á€¬á€„á€º",
          violet: "á€á€›á€™á€ºá€¸á€›á€±á€¬á€„á€º",
          red: "á€¡á€”á€®á€›á€±á€¬á€„á€º",
          selectGreen:
            "á€¡á€…á€­á€™á€ºá€¸á€›á€±á€¬á€„á€ºá€€á€­á€¯á€›á€½á€±á€¸á€á€»á€šá€ºá€á€¼á€„á€ºá€¸",
          selectViolet:
            "á€á€›á€™á€ºá€¸á€›á€±á€¬á€„á€ºá€€á€­á€¯á€›á€½á€±á€¸á€á€»á€šá€ºá€á€¼á€„á€ºá€¸",
          selectRed:
            "á€¡á€”á€®á€›á€±á€¬á€„á€ºá€€á€­á€¯á€›á€½á€±á€¸á€á€»á€šá€ºá€á€¼á€„á€ºá€¸",
          randomBetting: "á€€á€»á€•á€”á€ºá€¸",
          gameRecord: "á€‚á€­á€™á€ºá€¸á€™á€¾á€á€ºá€á€™á€ºá€¸",
          myGameRecord: "á€„á€«á€·á€‚á€­á€™á€ºá€¸á€™á€¾á€á€ºá€á€™á€ºá€¸",
          period: "á€¡á€™á€¾á€á€ºá€…á€¥á€º",
          blockHeight: "block á€¡á€™á€¼á€„á€·á€º",
          blockTime: "á€•á€­á€á€ºá€†á€­á€¯á€·á€á€»á€­á€”á€º",
          hashValue: "hash á€á€”á€ºá€–á€­á€¯á€¸",
          number: "á€”á€¶á€•á€«á€á€º",
          size: "á€¡á€€á€¼á€®á€¸á€¡á€žá€±á€¸",
          color: "á€¡á€›á€±á€¬á€„á€º",
          result: "á€›á€œá€’á€º",
          sum: "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸",
          high: "á€¡á€€á€¼á€®á€¸",
          low: "á€¡á€žá€±á€¸",
          odd: "á€™",
          even: "á€…á€¯á€¶",
          money: "á€„á€½á€±",
          multiply: "á€¡á€›á€±á€¡á€á€½á€€á€º",
          presaleRule: "á€€á€¼á€­á€…á€Šá€ºá€¸á€€á€™á€ºá€¸",
          presaleRuleTit:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€€á€»á€½á€”á€ºá€¯á€•á€ºá€žá€Šá€º á€€á€¼á€­á€¯á€á€„á€ºá€›á€±á€¬á€„á€ºá€¸á€á€»á€™á€¾á€¯á€…á€Šá€ºá€¸á€™á€»á€‰á€ºá€¸á€™á€»á€¬á€¸á€€á€­á€¯ á€žá€˜á€±á€¬á€á€°á€€á€¼á€±á€¬á€„á€ºá€¸ á€…á€…á€ºá€†á€±á€¸á€•á€«á‹",
          totalPrice: "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€„á€½á€±á€•á€™á€¬á€",
          Select: "á€›á€½á€±á€¸á€á€»á€šá€ºá€á€¼á€„á€ºá€¸",
          SelectCon:
            "á€¡á€œá€±á€¬á€„á€ºá€¸á€¡á€…á€¬á€¸á€¡á€€á€¼á€±á€¬á€„á€ºá€¸á€¡á€›á€¬",
          firstPage: "á€…á€¬á€™á€»á€€á€ºá€”á€¾á€¬ á á€–á€¼á€…á€ºá€žá€Šá€º",
          lastpage:
            "á€”á€±á€¬á€€á€ºá€†á€¯á€¶á€¸ á á€›á€½á€€á€ºá€–á€¼á€…á€ºá€žá€Šá€º",
          periodDetail: "á€¡á€žá€±á€¸á€…á€­á€á€ºá€–á€±á€¬á€ºá€•á€¼á€á€»á€€á€º",
          orderNumber: "á€¡á€±á€¬á€ºá€’á€«á€”á€¶á€•á€«á€á€º",
          contractMoney: "á€™á€¾á€¬á€‘á€¬á€¸á€žá€±á€¬á€„á€½á€±á€•á€™á€¬á€",
          contractCount: "á€™á€¾á€¬á€‘á€¬á€¸á€žá€±á€¬á€¡á€›á€±á€¡á€á€½á€€á€º",
          delivery:
            "á€¡á€á€½á€”á€ºá€†á€±á€¬á€„á€ºá€•á€¼á€®á€¸á€žá€¬á€¸á€„á€½á€±",
          fee: "á€¡á€á€½á€”á€º",
          openPrice: "á€¡á€–á€½á€„á€·á€ºá€…á€»á€±á€¸á€”á€¾á€¯á€”á€ºá€¸",
          status: "á€¡á€á€¼á€šá€ºá€¡á€”á€±",
          amount: "á€¡á€”á€­á€¯á€„á€ºá€”á€²á€·á€¡á€›á€¾á€¯á€¶á€¸",
          createTime: "á€–á€”á€ºá€á€®á€¸á€á€»á€­á€”á€º",
          BettingAssistant:
            "á€œá€±á€¬á€„á€ºá€¸á€á€»á€œá€€á€ºá€‘á€±á€¬á€€á€ºï¼ˆá€•á€¼á€®á€¸á€á€²á€·á€á€²á€· áá€á€ á€€á€¼á€­á€™á€ºï¼‰",
          Missing: "Missing",
          AvgMissing: "Avg Missing",
          Frequency: "Frequency",
          MaxContinued: "Max Continued",
          PleaseInteger:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€€á€­á€”á€ºá€¸á€•á€¼á€Šá€·á€ºá€á€…á€ºá€á€¯á€‘á€Šá€·á€ºá€•á€«á‹",
          Odds: "Odds",
          publicQuery: "á€œá€„á€·á€ºá€…á€…á€ºá€†á€±á€¸á€á€¼á€„á€ºá€¸á€±á€¸",
          howPlay: "á€€á€…á€¬á€¸á€”á€Šá€ºá€¸",
          distancedraw: "á€•á€½á€²á€·á€›á€”á€ºá€€á€»á€”á€ºá€á€»á€­á€”á€º",
          multiple: "á€†",
          numberBets: "á€œá€±á€¬á€„á€ºá€¸á€€á€¼á€±á€¸á€›á€±á€á€½á€€á€º",
          reset: "á€•á€¼á€”á€ºá€œá€Šá€ºá€á€¼á€„á€ºá€¸",
          time: "á€¡á€á€»á€­á€”á€º",
          lotteryTime: "á€†á€¯á€–á€½á€„á€·á€ºá€á€»á€­á€”á€º",
          notPressed: "á€•á€±á€«á€€á€º",
          pressed: "á€™á€•á€±á€«á€€á€º",
          bedrawn: "á€†á€¯á€–á€½á€„á€·á€ºá€á€»á€­á€”á€ºá€…á€±á€¬á€„á€·á€º",
          awarding: "á€†á€¯á€•á€±á€¸á€á€¼á€„á€ºá€¸",
          periodNmu: "á€œá€±á€¬á€„á€ºá€¸á€€á€…á€¬á€¸á€€á€¬á€œá€”á€¶á€•á€«á€á€º",
          lotteryNmu: "á€‘á€®á€”á€¶á€•á€«á€á€º",
        },
        myProfile: {
          title: "á€€á€­á€¯á€šá€ºá€•á€­á€¯á€„á€ºá€…á€„á€ºá€á€¬",
          profilePhoto: "á€•á€¯á€¶",
          nickname: "á€”á€¬á€™á€Šá€º",
          modifyNickname:
            "á€”á€¬á€™á€Šá€ºá€•á€¼á€±á€¬á€„á€ºá€¸á€œá€²á€á€¼á€„á€ºá€¸",
          newNicknameTit:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€”á€¬á€™á€Šá€ºá€¡á€žá€…á€ºá€€á€­á€¯ á€›á€±á€¸á€•á€«",
        },
        about: {
          title: "á€žá€€á€ºá€†á€­á€¯á€„á€º",
          Games: "á€‚á€­á€™á€ºá€¸",
          privacypolicy:
            "á€€á€­á€¯á€šá€ºá€›á€±á€¸á€¡á€á€»á€€á€ºá€¡á€œá€€á€ºá€™á€°á€á€«á€’",
          disclosureagreement:
            "á€¡á€”á€¹á€á€›á€¬á€šá€ºá€‘á€¯á€á€ºá€–á€±á€¬á€ºá€›á€±á€¸á€žá€˜á€±á€¬á€á€°á€Šá€®á€á€»á€€á€º",
        },
        privacypolicy: {
          title:
            "á€€á€­á€¯á€šá€ºá€›á€±á€¸á€¡á€á€»á€€á€ºá€¡á€œá€€á€ºá€™á€°á€á€«á€’",
          agree:
            "á€¡á€”á€¹á€á€›á€¬á€šá€ºá€‘á€¯á€á€ºá€–á€±á€¬á€ºá€›á€±á€¸á€žá€˜á€±á€¬á€á€°á€Šá€®á€á€»á€€á€º",
        },
        keFuMenu: {
          title: "á€–á€±á€¬á€€á€ºá€žá€Šá€ºá€á€”á€ºá€†á€±á€¬á€„á€ºá€™á€¾á€¯",
        },
        recharge: {
          title: "á€„á€½á€±á€–á€¼á€Šá€·á€ºá€á€¼á€„á€ºá€¸",
          selectRecharge:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€„á€½á€±á€–á€¼á€Šá€·á€ºá€á€¼á€„á€ºá€¸ á€”á€Šá€ºá€¸á€œá€™á€ºá€¸á€€á€­á€¯á€á€…á€ºá€á€¯á€›á€½á€±á€¸á€•á€¼á€®á€¸ á€„á€½á€±á€–á€¼á€Šá€·á€ºá€•á€«",
          next: "á€”á€±á€¬á€€á€ºá€á€…á€ºá€†á€„á€·á€º",
          previous: "á€¡á€›á€„á€º",
          rechargeAmount: "á€„á€½á€±á€–á€¼á€Šá€·á€ºá€•á€™á€¬á€",
          rechargeAmountRangeIpt:
            "á€„á€½á€±á€–á€¼á€Šá€·á€ºá€•á€™á€¬á€á€¡á€•á€­á€¯á€„á€ºá€¸á€¡á€á€¼á€¬á€¸",
          rechargeAmountRange:
            "á€„á€½á€±á€–á€¼á€Šá€·á€ºá€•á€™á€¬á€á€¡á€•á€­á€¯á€„á€ºá€¸á€¡á€á€¼á€¬á€¸",
        },
        rechargeChack: {
          title: "á€„á€½á€±á€–á€¼á€Šá€·á€ºá€á€¼á€„á€ºá€¸",
          totalAmouunt: "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€„á€½á€±á€•á€™á€¬á€",
          paymentMethod: "á€„á€½á€±á€›á€¾á€„á€ºá€¸á€”á€Šá€ºá€¸á€œá€™á€ºá€¸",
          localBank: "á€‡á€¬á€á€­á€˜á€á€º",
          enterAmount:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€„á€½á€±á€•á€™á€¬á€á€€á€­á€¯ á€–á€¼á€Šá€ºá€·á€•á€«",
          theAmount:
            "á€„á€½á€±á€•á€™á€¬á€á€žá€Šá€º áá€ á á€€á€­á€”á€ºá€¸á€•á€¼á€Šá€·á€ºá€–á€¼á€…á€ºá€›á€™á€Šá€ºá‹",
          accountName: "á€¡á€€á€±á€¬á€„á€·á€ºá€”á€¬á€™á€Šá€º",
          bankNumber: "á€˜á€á€ºá€€á€’á€ºá€”á€¶á€•á€«á€á€º",
          bankName: "á€˜á€á€ºá€”á€¬á€™á€Šá€º",
          paymentAmount:
            "á€›á€¾á€„á€ºá€¸á€›á€™á€¾á€¬á€žá€±á€¬á€„á€½á€±á€•á€™á€¬á€",
          orderNumber: "á€¡á€±á€¬á€ºá€’á€«á€”á€¶á€•á€«á€á€º",
          creationTime: "á€–á€”á€ºá€á€®á€¸á€á€»á€­á€”á€º",
          transferAmount:
            "á€žá€„á€ºá€–á€”á€ºá€á€®á€¸á€‘á€¬á€¸á€žá€±á€¬ á€™á€¾á€¬á€šá€°á€™á€¾á€¯á€á€½á€„á€º á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€žá€Šá€·á€ºá€•á€™á€¬á€á€€á€­á€¯ á€–á€¼á€Šá€·á€ºá€žá€½á€„á€ºá€¸á€›á€™á€Šá€ºáŠ á€™á€Ÿá€¯á€á€ºá€•á€«á€€ á€¡á€•á€ºá€„á€½á€± á€¡á€±á€¬á€„á€ºá€™á€¼á€„á€ºá€™á€Šá€ºá€™á€Ÿá€¯á€á€ºá€•á€«á‹",
          transferAmount2: "",
          transferAmount1:
            "á€™á€¾á€á€ºá€á€»á€€á€º- á€„á€½á€±á€œá€½á€¾á€²á€•á€¼á€®á€¸á€žá€Šá€ºá€”á€¾á€„á€·á€º á€„á€½á€±á€œá€½á€¾á€²á€á€¼á€„á€ºá€¸á€¡á€™á€­á€”á€·á€ºá€€á€­á€¯ á€™á€•á€šá€ºá€–á€»á€€á€ºá€•á€«á€”á€¾á€„á€·á€º",
          depositAmount: "á€¡á€•á€ºá€„á€½á€±á€•á€™á€¬á€",
          upImgTitle:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á UTR á€•á€«á€á€„á€ºá€žá€±á€¬ á€„á€½á€±á€•á€±á€¸á€„á€½á€±á€šá€°á€™á€»á€¬á€¸á€€á€­á€¯  á€¡á€•á€ºá€œá€¯á€’á€ºá€œá€¯á€•á€ºá€•á€«á‹",
          upFormate:
            "á€•á€¯á€¶á€™á€»á€¬á€¸á€€á€­á€¯ jpgáŠ jpegáŠ png á€–á€±á€¬á€ºá€™á€á€ºá€–á€¼á€„á€·á€ºá€žá€¬ á€¡á€•á€ºá€œá€¯á€’á€ºá€œá€¯á€•á€ºá€•á€«á‹",
          selectFile:
            "á€¡á€•á€ºá€œá€¯á€’á€ºá€–á€­á€¯á€„á€ºá€€á€­á€¯ á€›á€½á€±á€¸á€•á€«á‹",
        },
        touchngo: {
          title: "Touch N Go á€„á€½á€±á€–á€¼á€Šá€·á€ºá€á€¼á€„á€ºá€¸",
          name: "á€”á€¬á€™á€Šá€º",
          mobileNumber: "á€–á€¯á€”á€ºá€¸á€”á€¶á€•á€«á€á€º",
        },
        rechargeRecord: {
          title: "á€„á€½á€±á€–á€¼á€Šá€·á€ºá€á€¼á€„á€ºá€¸á€™á€¾á€á€ºá€á€™á€ºá€¸",
          unpaid: "á€™á€›á€¾á€„á€ºá€¸á€›á€žá€±á€¸á€žá€±á€¬",
          eazyPay: "á€œá€…á€¬",
          success: "á€¡á€±á€¬á€„á€ºá€™á€¼á€„á€ºá€á€¼á€„á€ºá€¸",
          others: "á€á€á€¼á€¬á€¸",
        },
        paymentMethod: {
          title: "á€„á€½á€±á€›á€¾á€„á€ºá€¸á€•á€±á€¸á€á€²á€·á€”á€Šá€ºá€¸",
          totalPaid:
            "á€™á€›á€¾á€„á€ºá€¸á€›á€žá€±á€¬á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€„á€½á€±á€•á€™á€¬á€",
          choose: "á€˜á€á€ºá€€á€’á€ºá€›á€½á€±á€¸á€á€»á€šá€ºá€á€¼á€„á€ºá€¸",
          payNow: "á€á€»á€€á€ºá€á€»á€„á€ºá€¸á€›á€¾á€„á€ºá€¸á€›á€™á€¾á€¬",
          topInstructions:
            "á€„á€½á€±á€–á€¼á€Šá€·á€ºá€á€¼á€„á€ºá€¸ á€Šá€½á€¾á€”á€ºá€€á€¼á€¬á€¸á€á€»á€€á€ºá€™á€»á€¬á€¸",
          contentTmp1:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€¡á€‘á€€á€ºá€–á€±á€¬á€ºá€•á€¼á€•á€« á€œá€€á€ºá€á€¶á€˜á€á€ºá€¡á€€á€±á€¬á€„á€·á€ºá€žá€­á€¯á€· á€„á€½á€±á€œá€½á€¾á€²á€•á€±á€¸á€•á€«á‹",
          contentTmp2:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€¡á€á€Šá€ºá€•á€¼á€¯á€›á€”á€ºá€¡á€á€½á€€á€º á€€á€á€ºá€€á€­á€¯á€„á€ºá€†á€±á€¬á€„á€ºá€žá€°áá€¡á€™á€Šá€ºá€”á€¾á€„á€·á€º á€¡á€€á€±á€¬á€„á€·á€ºá€”á€¶á€•á€«á€á€ºá€€á€­á€¯ á€–á€¼á€Šá€·á€ºá€•á€«á‹",
          contentTmp3:
            "á€¡á€€á€¼á€­á€™á€ºá€á€­á€¯á€„á€ºá€¸ á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€•á€±á€¸á€•á€­á€¯á€·á€•á€«áŠ á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€¡á€±á€¬á€ºá€’á€«á€€á€­á€¯ á€‘á€•á€ºá€á€«á€á€œá€²á€œá€² á€™á€á€„á€ºá€•á€«á€”á€¾á€„á€·á€º",
          contentTmp4:
            "á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€™á€¾á€¯á€•á€¼á€®á€¸á€•á€«á€€ á€™á€¾á€¬á€šá€°á€™á€¾á€¯á€€á€­á€¯ á€á€„á€ºá€žá€½á€„á€ºá€¸á€›á€”á€º á€žá€±á€á€»á€¬á€…á€±á€•á€«áŠ á€žá€­á€¯á€·á€™á€Ÿá€¯á€á€ºá€•á€«á€€ á€žá€„á€·á€ºá€„á€½á€±á€•á€±á€¸á€á€»á€±á€™á€¾á€¯á€€á€­á€¯ á€¡á€á€»á€­á€”á€ºá€™á€® á€…á€…á€ºá€†á€±á€¸á€”á€­á€¯á€„á€ºá€™á€Šá€ºá€™á€Ÿá€¯á€á€ºá€•á€«á‹",
          waitingPayment:
            "á€„á€½á€±á€•á€±á€¸á€á€»á€±á€™á€¾á€¯á€€á€­á€¯á€…á€±á€¬á€„á€·á€ºá€†á€­á€¯á€„á€ºá€¸á€”á€±á€žá€Šá€º",
          receivingTitle: "á€˜á€á€ºá€€á€á€ºá€¡á€á€»á€€á€ºá€¡á€œá€€á€º",
          confirm1: "á€¡á€±á€¬á€ºá€’á€«á€”á€¶á€•á€«á€á€º",
          confirm2: "á€˜á€á€ºá€”á€¬á€™á€Šá€º",
          confirm3: "á€˜á€á€ºá€‚á€á€ºá€•á€­á€¯á€„á€ºá€›á€¾á€„á€º",
          confirm4: "á€˜á€á€ºá€‚á€á€ºá€”á€¶á€•á€«á€á€º",
          confirm5: "IFSC",
          confirm6: "á€˜á€á€ºá€á€½á€²",
          Required: "Fill in Ref No",
          Return: "á€•á€¼á€”á€ºá€žá€½á€¬á€¸á€›á€”á€º",
        },
        promotion: {
          title: "á€–á€­á€á€ºá€á€±á€«á€º",
          bouns: "á€†á€¯â€Œá€„á€½á€±",
          level_1: "á€¡á€†á€„á€·á€º á ",
          level_2: "á€¡á€†á€„á€·á€º á‚",
          totalPeople: "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€œá€°",
          contribution: "á€á€„á€ºá€„á€½á€±",
          code: "á€€á€»á€½á€”á€ºá€á€±á€¬á€ºáá€•á€›á€­á€¯á€™á€­á€¯á€¸á€›á€¾á€„á€ºá€¸á€€á€¯á€’á€º",
          link: "á€€á€»á€½á€”á€ºá€á€±á€¬á€ºáá€•á€›á€­á€¯á€™á€­á€¯á€¸á€›á€¾á€„á€ºá€¸á€€á€¯á€’á€ºá€œá€„á€·á€º",
        },
        bonusrecord: { title: "á€†á€¯á€„á€½á€±á€™á€¾á€á€ºá€á€™á€ºá€¸" },
        redenvelopes: {
          title: "á€™á€¯á€”á€ºá€·á€–á€­á€¯á€¸",
          Hello: "á€™á€„á€ºá€¹á€‚á€œá€¬á€•á€«",
          Eveverone: "á€á€­á€¯á€„á€ºá€¸",
          des: "á€žá€„á€·á€ºá€¡á€á€½á€€á€º á€œá€€á€ºá€†á€±á€¬á€„á€ºá€á€…á€ºá€á€¯á€›á€¾á€­á€žá€Šá€ºá‹",
          giftCode: "á€œá€€á€ºá€†á€±á€¬á€„á€ºá€€á€¯á€’á€º",
          PleaseGiftCode:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯ á€œá€€á€ºá€†á€±á€¬á€„á€ºá€€á€¯á€’á€ºá€€á€­á€¯á€–á€¼á€Šá€ºá€·á€•á€±á€¸á€•á€«á‹",
          Receive:
            "á€œá€€á€ºá€†á€±á€¬á€„á€ºá€€á€­á€¯á€›á€›á€¾á€­á€žá€½á€¬á€¸á€•á€«á€žá€Šá€ºá‹",
          Best: "á€™á€„á€ºá€¸á€¡á€á€½á€€á€ºá€¡á€€á€±á€¬á€„á€ºá€¸á€†á€¯á€¶á€¸á€†á€¯á€™á€½á€”á€ºá€€á€±á€¬á€„á€ºá€¸á€á€±á€¬á€„á€ºá€¸á€€á€­á€¯á€†á€¯á€á€±á€¬á€„á€ºá€¸á€•á€±á€¸á€•á€«á€žá€Šá€ºá‹",
          Congratulations:
            "á€™á€„á€ºá€¸á€¡á€á€½á€€á€º á€‚á€¯á€á€ºá€šá€°á€•á€«á€žá€Šá€º",
          already:
            "á€á€„á€ºá€—á€»á€¬á€¸á€á€¶á€šá€°á€•á€¼á€®á€¸á€•á€«á€•á€¼á€®á‹",
          ACCEPT: "á€œá€€á€ºá€á€¶á€›á€šá€°á€•á€«",
        },
        withdrawal: {
          title: "á€„á€½á€±á€‘á€¯á€á€ºá€•á€™á€¬á€",
          balance: "á€œá€€á€ºá€€á€»á€”á€ºá€„á€½á€±",
          enterwithdraw:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€„á€½á€±á€‘á€¯á€á€ºá€•á€™á€¬á€á€€á€­á€¯á€–á€¼á€Šá€·á€ºá€•á€«á‹",
          withdrawAamount: "á€„á€½á€±á€‘á€¯á€á€ºá€•á€™á€¬á€",
          fee: "á€¡á€á€½á€”á€º",
          toAccount:
            "á€¡á€á€½á€”á€ºá€†á€±á€¬á€„á€ºá€•á€¼á€®á€¸á€žá€¬á€¸á€„á€½á€±",
          rate: "á€”á€¾á€¯á€”á€ºá€¸á€‘á€¬á€¸",
          totalBet:
            "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸ á€¡á€œá€±á€¬á€„á€ºá€¸á€¡á€…á€¬á€¸",
          withdrawTime: "á€„á€½á€±á€‘á€¯á€á€ºá€á€»á€­á€”á€º",
          dailyWithdrawal:
            "á€”á€±á€·á€á€­á€¯á€„á€ºá€¸á€„á€½á€±á€‘á€¯á€á€ºá€€á€¼á€­á€™á€ºá€”á€¾á€¯á€”á€ºá€¸",
          withdrawMoney:
            "á€„á€½á€±á€‘á€¯á€á€ºá€•á€™á€¬á€ á€¡á€•á€­á€¯á€„á€ºá€¸á€¡á€á€¼á€¬á€¸",
          payout: "á€„á€½á€±á€œá€€á€ºá€á€¶á€”á€Šá€ºá€¸á€œá€™á€ºá€¸",
          bankCard: "á€˜á€á€ºá€€á€’á€º",
          selectBank: "á€˜á€á€ºá€€á€­á€¯â€Œá€›á€½á€±á€¸á€•á€«",
          addBankCard: "á€˜á€á€ºá€€á€’á€ºá€€á€­á€¯á€á€­á€¯á€¸á€•á€«",
          rechargeTip1:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€„á€½á€±á€‘á€¯á€á€ºá€•á€™á€¬á€ á€€á€­á€¯á€–á€¼á€Šá€·á€ºá€•á€«",
          rechargeTip4:
            "á€„á€½á€±á€‘á€¯á€á€ºá€•á€™á€¬á€ á€¡á€•á€­á€¯á€„á€ºá€¸á€¡á€á€¼á€¬á€¸",
          rechargeTip2:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€˜á€á€ºá€€á€’á€ºá€€á€­á€¯á€á€­á€¯á€¸á€•á€«",
          rechargeTip3:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á password á€€á€­á€¯á€–á€¼á€Šá€·á€ºá€•á€«",
          select: "á€›á€½á€±á€¸á€á€»á€šá€º",
          add: "á€¡á€žá€…á€ºá€á€­á€¯á€¸",
        },
        withdrawrecord: {
          title: "á€„á€½á€±á€‘á€¯á€á€ºá€•á€™á€¬á€á€™á€¾á€á€ºá€á€™á€ºá€¸",
          applying: "á€œá€»á€¾á€±á€¬á€€á€ºá€á€„á€ºá€”á€±á€•á€«á€žá€Šá€º",
          agree: "á€žá€˜á€±á€¬á€á€°á€žá€Šá€º",
          refuse: "á€œá€€á€ºá€™á€á€¶á€˜á€°á€¸",
        },
        mission: {
          title:
            "á€žá€°á€„á€šá€ºá€á€»á€„á€ºá€¸á€™á€»á€¬á€¸á€€á€­á€¯á€–á€­á€á€ºá€€á€¼á€¬á€¸á€á€¼á€„á€ºá€¸",
          totalPeople: "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€žá€°",
          totalAmount: "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€„á€½á€±á€•á€™á€¬á€",
          myTask: "á€€á€»á€½á€”á€ºá€¯á€•á€ºá€á€¬á€á€”á€º",
          invited: "á€–á€­á€á€ºá€€á€¼á€¬á€¸á€á€¼á€„á€ºá€¸",
          validMenmber: "á€•á€«á€á€„á€ºá€žá€±á€¬á€¡á€–á€½á€²á€·á€á€„á€º",
          receive: "á€œá€€á€ºá€á€¶á€›á€šá€°á€á€¼á€„á€ºá€¸",
        },
        promoteRecord: {
          title:
            "á€–á€­á€á€ºá€€á€¼á€¬á€¸á€á€»á€­á€”á€ºá€™á€¾á€á€ºá€‘á€¬á€¸á€žá€±á€¬á€™á€¾á€á€ºá€á€™á€ºá€¸",
          People: "á€œá€°á€‰á€®á€¸á€›á€±",
        },
        addbank: {
          title: "á€˜á€á€ºá€€á€’á€ºá€€á€­á€¯á€á€­á€¯á€¸",
          bankName: "á€˜á€á€ºá€”á€¬á€™á€Šá€º",
          beneficiaryName: "á€„á€½á€±á€œá€€á€ºá€á€¶á€žá€°á€”á€¬á€™á€Šá€º",
          accountNo: "á€˜á€á€ºá€¡á€€á€±á€¬á€„á€·á€ºá€”á€¶á€•á€«á€á€º",
          bankCity:
            "á€˜á€á€ºá€á€Šá€ºá€›á€¾á€­á€žá€±á€¬á€™á€¼á€­á€¯á€·á€”á€šá€º",
          IFSCCode: "IFSC Cord",
          email: "á€¡á€®á€¸â€Œá€™á€±á€¸á€œá€º",
          bankProvince:
            "á€˜á€á€ºá€á€Šá€ºá€›á€¾á€­á€žá€±á€¬á€•á€¼á€Šá€ºá€”á€šá€º",
          bankBranch: "á€˜á€á€ºá€á€½á€²á€œá€­á€•á€ºá€…á€¬",
          addBtn:
            "á€˜á€á€ºá€¡á€€á€±á€¬á€„á€·á€ºá€”á€¶á€•á€«á€á€ºá€€á€­á€¯ á€‘á€•á€ºá€á€­á€¯á€¸",
          opsionalbankProvince:
            "á€˜á€á€ºá€á€Šá€ºá€›á€¾á€­á€žá€±á€¬á€•á€¼á€Šá€ºá€”á€šá€º",
          opsionalbankBranch: "á€˜á€á€ºá€á€½á€²á€œá€­á€•á€ºá€…á€¬",
        },
        addElcbank: {
          title:
            "á€¡á€®á€œá€€á€ºá€‘á€›á€½á€”á€ºá€¸á€”á€…á€ºá€•á€­á€¯á€€á€ºá€†á€¶á€¡á€­á€á€ºá€€á€­á€¯á€á€­á€¯á€¸",
          addBtn:
            "á€¡á€®á€œá€€á€ºá€‘á€›á€½á€”á€ºá€¸á€”á€…á€ºá€•á€­á€¯á€€á€ºá€†á€¶á€¡á€­á€á€ºá€€á€­á€¯á€¡á€•á€º",
          mobile:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€¡á€®á€œá€€á€ºá€‘á€›á€½á€”á€ºá€¸á€”á€…á€ºá€•á€­á€¯á€€á€ºá€†á€¶á€¡á€­á€á€º á€”á€²á€· á€á€»á€­á€á€ºá€‘á€¬á€¸á€žá€±á€¬á€–á€¯á€”á€ºá€¸á€”á€¶á€•á€«á€á€ºá€€á€­á€¯á€›á€±á€¸á€•á€«á‹",
        },
        addUsdt: {
          title: "USDTá€€á€­á€¯á€á€­á€¯á€¸",
          addBtn: "USDTá€€á€­á€¯á€¡á€•á€º",
          type: "USDTá€¡á€™á€»á€­á€¯á€¸á€¡á€…á€¬á€¸",
          address: "á€„á€½á€±á€¡á€€á€±á€¬á€„á€·á€ºá€œá€­á€•á€ºá€…á€¬",
          tip: "USDT á€œá€­á€•á€ºá€…á€¬á€–á€±á€¬á€ºá€™á€á€º á€¡á€™á€¾á€¬á€¸",
          txt: "USDT (TRC) á€œá€­á€•á€ºá€…á€¬á€–á€±á€¬á€ºá€™á€á€ºá‹ á€œá€­á€•á€ºá€…á€¬á€á€½á€„á€º T á€¡á€€á€¹á€á€›á€¬á€–á€¼á€„á€·á€º á€…á€á€„á€ºá€žá€±á€¬ á€…á€¬á€œá€¯á€¶á€¸ áƒá„ á€œá€¯á€¶á€¸ á€•á€«á€á€„á€ºá€žá€Šá€ºá‹",
          txt1: "USDT (ERC) á€œá€­á€•á€ºá€…á€¬á€–á€±á€¬á€ºá€™á€á€ºá‹ á€œá€­á€•á€ºá€…á€¬á€á€½á€„á€º 0x á€…á€¬á€œá€¯á€¶á€¸á€™á€»á€¬á€¸á€–á€¼á€„á€·á€º á€…á€á€„á€ºá€žá€±á€¬ á€…á€¬á€œá€¯á€¶á€¸ 42 á€œá€¯á€¶á€¸ á€•á€«á€á€„á€ºá€žá€Šá€ºá‹",
        },
        wellet: {
          title: "á€•á€­á€¯á€€á€ºá€†á€¶á€¡á€­á€á€º",
          withdrawalBalance:
            "á€„á€½á€±á€‘á€¯á€á€ºá€•á€™á€¬á€á€œá€€á€ºá€€á€»á€”á€º",
          historicalWithdrawal:
            "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€„á€½á€±á€‘á€¯á€á€º",
          accumulatedWithdrawal:
            "á€’á€®á€”á€±á€·áá€„á€½á€±á€‘á€¯á€á€ºá€•á€™á€¬á€",
          everyDay: "á€”á€±á€·á€á€­á€¯á€„á€ºá€¸á€›á€¾á€­á€žá€Šá€º",
          order: "á€€á€¼á€­á€™á€º",
          tip: "á€˜á€á€ºá€€á€’á€ºá€‘á€²á€™á€¾á€¬ á€¡á€œá€€á€¬á€¸ á€‘á€¯á€á€ºá€”á€­á€¯á€„á€ºá€á€²á€·á€¡á€á€½á€„á€·á€ºá€¡á€›á€±á€¸",
          myCard: "á€€á€»á€½á€”á€ºá€á€±á€¬á€·á€ºá€˜á€á€ºá€€á€’á€º",
          rechargeRecord: "á€„á€½á€±á€–á€¼á€Šá€·á€ºá€™á€¾á€á€ºá€á€™á€ºá€¸",
          withdrawRecord: "á€„á€½á€±á€‘á€¯á€á€ºá€™á€¾á€á€ºá€á€™á€ºá€¸",
        },
        transactionrecord: {
          title: "á€„á€½á€±á€œá€½á€¾á€²á€™á€¾á€á€ºá€á€™á€ºá€¸",
        },
        newtutorial: {
          title:
            "á€¡á€–á€½á€²á€·á€á€„á€ºá€¡á€žá€…á€º á€œá€™á€ºá€¸á€Šá€½á€¾á€”á€º",
          chooseYour: "á€™á€„á€ºá€¸á€€á€­á€¯á€›á€½á€±á€¸á€‘á€¬á€¸á€žá€±á€¬",
          favoriteGame: "á€¡á€€á€¼á€­á€¯á€€á€ºá€†á€¯á€¶á€¸á€‚á€­á€™á€ºá€¸",
          pickLucky:
            "á€™á€„á€ºá€¸á€€á€­á€¯á€›á€½á€±á€¸á€‘á€¬á€¸á€žá€±á€¬á€€á€¶á€€á€±á€¬á€„á€ºá€¸á€žá€°",
          numberColor:
            "á€”á€¶á€•á€«á€á€º á€žá€­á€¯á€·á€™á€Ÿá€¯á€á€º á€¡á€›á€±á€¬á€„á€º",
          SKIP: "á€€á€¼á€­á€¯",
          NEXT: "á€”á€±á€¬á€€á€ºá€á€…á€ºá€†á€„á€·á€º",
          confirmAmount:
            "á€á€„á€ºá€—á€»á€¬á€¸á á€¡á€œá€±á€¬á€„á€ºá€¸á€¡á€…á€¬á€¸á€„á€½á€±á€•á€™á€¬á€á€€á€­á€¯ á€¡á€á€Šá€ºá€•á€¼á€¯á€•á€«á‹",
          getBouns: "á€†á€¯á€„á€½á€±á€›á€šá€°á€•á€«",
          moneyWill:
            "á€¡á€žá€…á€ºá€á€„á€ºá€žá€°á€žá€Šá€º á€¤á€¡á€á€»á€®á€á€½á€„á€º á€¡á€”á€­á€¯á€„á€ºá€›á€•á€¼á€®á€¸á€”á€±á€¬á€€á€ºáŠ á€„á€½á€±á€™á€»á€¬á€¸á€€á€­á€¯ á€žá€„á€·á€ºá€‚á€­á€™á€ºá€¸á€¡á€€á€±á€¬á€„á€·á€ºá€‘á€²á€žá€­á€¯á€· á€‘á€Šá€·á€ºá€•á€±á€¸á€•á€«á€™á€Šá€ºá‹",
          youRecharge:
            "á€á€„á€ºá€—á€»á€¬á€¸á€„á€½á€±á€–á€¼á€Šá€·á€ºá€œá€­á€¯á€·á€›á€žá€Šá€ºá‹",
          withdrawHere:
            "á€žá€­á€¯á€·á€™á€Ÿá€¯á€á€º á€’á€®á€™á€¾á€¬ á€„á€½á€±á€‘á€¯á€á€ºá€œá€­á€¯á€·á€›á€á€šá€ºá‹",
        },
        download: {
          title: "á€’á€±á€«á€„á€ºá€¸á€œá€¯á€’á€º",
          name: "",
          goBtn: "á€žá€½á€¬á€¸á€’á€±á€«á€„á€ºá€¸á€œá€¯á€’á€ºá€™á€Šá€º",
          des: "á€•á€›á€±á€¬á€ºá€–á€€á€ºá€›á€¾á€„á€ºá€”á€šá€º lottery á€•á€œá€€á€ºá€–á€±á€¬á€„á€ºá€¸",
          playNow: "á€á€»á€€á€ºá€á€»á€„á€ºá€¸á€á€„á€ºá€†á€±á€¬á€·á€™á€Šá€º",
          lotteryGame: "lottery á€‚á€­á€™á€ºá€¸",
          btn: "á€á€»á€€á€ºá€á€»á€„á€ºá€¸á€’á€±á€«á€„á€ºá€¸á€œá€¯á€’á€º",
        },
        tabbar: {
          tabbarList: [
            {
              id: 1,
              name: "á€•á€„á€ºá€™",
              imgAction: t("07d4"),
              img: t("2288"),
              to: "/home",
            },
            {
              id: 2,
              name: "á€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€á€»á€€á€º",
              imgAction: t("b5ef"),
              img: t("5b0e"),
              to: "/activity",
            },
            {
              id: 3,
              name: "á€–á€­á€á€ºá€á€±á€«á€º",
              imgAction: t("7268"),
              img: t("7268"),
              to: "/promotion",
            },
            {
              id: 4,
              name: "á€•á€­á€¯á€€á€ºá€†á€¶á€¡á€­á€á€º",
              imgAction: t("4c6e"),
              img: t("b2a5"),
              to: "/wallet",
            },
            {
              id: 5,
              name: "á€€á€»á€½á€”á€ºá€¯á€•á€º",
              imgAction: t("e636"),
              img: t("6c7c"),
              to: "/mian",
            },
          ],
        },
        mian: {
          title: "á€€á€»á€½á€”á€ºá€¯á€•á€º",
          historical: "á€™á€¾á€á€ºá€á€™á€ºá€¸",
          funding: "á€„á€½á€±á€œá€½á€¾á€™á€¾á€á€ºá€á€™á€ºá€¸",
          loginLog: "á€œá€±á€¬á€·á€¡á€„á€º",
          message: "á€¡á€€á€¼á€±á€¬á€„á€ºá€¸",
          balance: "á€•á€­á€¯á€€á€ºá€†á€¶á€¡á€­á€á€ºá€¡á€¬á€¸á€œá€¯á€¶á€¸",
          totalwallet:
            "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€•á€­á€¯á€€á€ºá€†á€¶á€¡á€­á€á€º",
          refreshwallet:
            "á€•á€¼á€”á€ºá€œá€Šá€ºá€¡á€žá€¯á€¶á€¸á€•á€¼á€¯á€•á€«á‹",
          loginOut: "á€¡á€€á€±á€¬á€„á€ºá€·á€™á€¾á€‘á€½á€€á€ºá€™á€Šá€º",
          menuName1: "á€¡á€€á€±á€¬á€„á€·á€ºá€œá€¯á€¶á€á€¼á€¯á€¶á€™á€¾á€¯",
          menuName2: "GOOGLE AUTHENTICATOR",
          menuName3:
            "á€žá€°á€„á€šá€ºá€á€»á€„á€ºá€¸á€€á€­á€¯á€–á€­á€á€ºá€€á€¼á€¬á€¸á€á€¼á€„á€ºá€¸",
          menuName4: "á€™á€¯á€”á€ºá€·á€–á€­á€¯á€¸",
          menuName5:
            "á€¡á€–á€½á€²á€·á€á€„á€ºá€¡á€žá€…á€º á€œá€™á€ºá€¸á€Šá€½á€¾á€”á€º",
          menuName6: "á€žá€€á€ºá€†á€­á€¯á€„á€º",
          menuName7: "á€§á€Šá€ºá€·á€á€”á€ºá€†á€±á€¬á€„á€ºá€™á€¾á€¯",
        },
        checkIn: {
          title: "á€†á€­á€¯á€„á€ºá€¸á€¡á€„á€º",
          attendanceRules: "á€…á€Šá€ºá€¸á€€á€™á€ºá€¸",
          txt: "á€†á€­á€¯á€„á€ºá€¸á€¡á€„á€ºá€˜á€±á€¬á€”á€•á€ºá€•á€±á€¸á€•á€­á€¯á€™á€¾á€¯",
          rule: "á€‚á€­á€™á€ºá€¸á€…á€Šá€ºá€¸á€€á€™á€ºá€¸",
          record: "á€†á€­á€¯á€„á€ºá€¸á€¡á€„á€ºá€™á€¾á€á€ºá€á€™á€ºá€¸",
          today: "á€œá€±á€¬á€·á€¡á€„á€ºá€á€„á€ºá€á€²á€·á€žá€Šá€º",
          received: "á€›á€›á€¾á€­á€á€²á€·á€žá€Šá€ºá‹",
          day: "á€”á€±á€·",
          btn: "á€á€„á€ºá€™á€Šá€º",
          Receive:
            "á€œá€€á€ºá€†á€±á€¬á€„á€ºá€€á€­á€¯á€›á€›á€¾á€­á€žá€½á€¬á€¸á€•á€«á€žá€Šá€ºá‹",
          Best: "á€™á€„á€ºá€¸á€¡á€á€½á€€á€ºá€¡á€€á€±á€¬á€„á€ºá€¸á€†á€¯á€¶á€¸á€†á€¯á€™á€½á€”á€ºá€€á€±á€¬á€„á€ºá€¸á€á€±á€¬á€„á€ºá€¸á€€á€­á€¯á€†á€¯á€á€±á€¬á€„á€ºá€¸á€•á€±á€¸á€•á€«á€žá€Šá€ºá‹",
          Congratulations:
            "á€™á€„á€ºá€¸á€¡á€á€½á€€á€º á€‚á€¯á€á€ºá€šá€°á€•á€«á€žá€Šá€º",
          already:
            "á€á€„á€ºá€—á€»á€¬á€¸á€á€¶á€šá€°á€•á€¼á€®á€¸á€•á€«á€•á€¼á€®á‹",
          ACCEPT: "á€œá€€á€ºá€á€¶á€›á€šá€°á€•á€«",
        },
        checkInDes: {
          title:
            "á€œá€€á€ºá€™á€¾á€á€ºá€›á€±á€¸á€‘á€­á€¯á€¸á€”á€²á€·á€•á€«á€á€ºá€žá€€á€ºá€žá€±á€¬á€…á€Šá€ºá€¸á€™á€»á€‰á€ºá€¸á€…á€Šá€ºá€¸á€€á€™á€ºá€¸á€™á€»á€¬á€¸",
          checkInDay: "á€†á€­á€¯á€„á€ºá€¸á€¡á€„á€ºá€”á€±á€·á€™á€»á€¬á€¸",
          accumulatedAmount:
            "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€„á€½á€±á€•á€™á€¬á€",
          checkInBonus: "á€†á€­á€¯á€„á€ºá€¸á€¡á€„á€ºá€˜á€±á€¬á€”á€•á€º",
          rulesDetails:
            "á€…á€Šá€ºá€¸á€€á€™á€ºá€¸á€¡á€žá€±á€¸á€…á€­á€á€ºá€–á€±á€¬á€ºá€•á€¼á€á€»á€€á€º",
          tep1: "á€½á€±á€žá€½á€„á€ºá€¸á€™á€¾á€¯á€™á€›á€¾á€­á€•á€«á€€áŠá€œá€€á€ºá€á€¶á€›á€šá€°á€”á€­á€¯á€„á€ºá€™á€Šá€ºá€™á€Ÿá€¯á€á€ºá€•á€«",
          tep2: "á€•á€‘á€™á€”á€±á€·á€á€½á€„á€ºá€…á€•á€¼á€®á€¸á€„á€½á€±á€žá€½á€„á€ºá€¸á€›á€•á€«á€™á€Šá€º",
          tep3: "á€„á€½á€±á€žá€½á€„á€ºá€¸á€…á€¯á€†á€±á€¬á€„á€ºá€¸á€‘á€¬á€¸á€žá€±á€¬á€•á€™á€¬á€á€žá€Šá€ºá€¡á€á€»á€€á€ºá€œá€€á€ºá€™á€»á€¬á€¸á€”á€¾á€„á€·á€ºá€€á€­á€¯á€€á€ºá€Šá€®á€›á€™á€Šá€ºá€–á€¼á€…á€ºá€•á€¼á€®á€¸á€á€…á€ºá€›á€€á€ºá€œá€»á€¾á€„á€ºá€á€…á€ºá€€á€¼á€­á€™á€ºá€žá€¬á€á€±á€¬á€„á€ºá€¸á€†á€­á€¯á€”á€­á€¯á€„á€ºá€žá€Šá€ºá‹",
          tep4: "á€›á€€á€ºá€™á€¾á€”á€ºá€›á€€á€ºá€•á€¼á€Šá€·á€ºá€˜á€±á€¬á€”á€•á€ºá€…á€ºá€žá€Šá€ºá‡á€›á€€á€ºá€”á€±á€·á€…á€¥á€ºá€„á€½á€±á€žá€½á€„á€ºá€¸á€•á€¼á€®á€¸á€”á€±á€¬á€€á€ºá€›á€šá€°á€œá€­á€¯á€€á€ºá€•á€«",
          tep5: "á€–á€¼á€…á€ºá€…á€¥á€ºá€™á€»á€¬á€¸á€žá€Šá€ºá€¤á€†á€±á€·á€¬á€á€²á€™á€¾á€”á€±á€¬á€€á€ºá€†á€¯á€¶á€¸á€›á€¾á€„á€ºá€¸á€œá€„á€ºá€¸á€–á€½á€„á€·á€ºá€†á€­á€¯á€á€½á€„á€·á€ºá€›á€¾á€­á€žá€Šá€ºá‹á€žá€„á€·á€ºá€á€½á€„á€ºá€™á€±á€¸á€á€½á€”á€ºá€¸á€™á€»á€¬á€¸á€›á€¾á€­á€•á€«á€€á€§á€Šá€·á€ºá€á€”á€ºá€†á€±á€¬á€„á€ºá€™á€¾á€¯á€€á€­á€¯á€†á€€á€ºá€žá€½á€šá€ºá€œá€­á€¯á€€á€ºá€•á€«á‹",
        },
        historicalBetting: { title: "á€™á€¾á€á€ºá€á€™á€ºá€¸" },
        loginLog: { title: "á€œá€±á€¬á€·á€‚á€ºá€¡á€„á€º" },
        messageCenter: {
          title: "á€žá€á€„á€ºá€¸á€…á€„á€ºá€á€¬",
          readAll: "á€¡á€€á€¯á€”á€ºá€–á€á€º",
          removeAll: "á€¡á€€á€¯á€”á€ºá€–á€»á€€á€º",
          delTitle:
            "á€–á€»á€€á€ºá€‘á€¬á€¸á€á€¬á€€ á€á€„á€ºá€—á€»á€¬á€¸á€žá€±á€á€»á€¬á€žá€½á€¬á€¸á€•á€¼á€®á€œá€¬á€¸á‹",
          delall:
            "á€¡á€€á€¯á€”á€ºá€–á€»á€€á€ºá€‘á€¬á€¸á€á€¬á€€ á€á€„á€ºá€—á€»á€¬á€¸á€žá€±á€á€»á€¬á€žá€½á€¬á€¸á€•á€¼á€®á€œá€¬á€¸á‹",
          readall:
            "á€¡á€€á€¯á€”á€ºá€€á€¼á€Šá€·á€ºá€‘á€¬á€¸á€á€¬á€€ á€á€„á€ºá€—á€»á€¬á€¸á€žá€±á€á€»á€¬á€žá€½á€¬á€¸á€•á€¼á€®á€œá€¬á€¸á‹",
        },
        messageDes: {
          title:
            "á€¡á€€á€¼á€±á€¬á€„á€ºá€¸á€¡á€›á€¬á€¡á€žá€±á€¸á€…á€­á€á€ºá€–á€±á€¬á€ºá€•á€¼á€á€»á€€á€º",
        },
        lottery: {
          drawResult: "á€™á€²á€–á€±á€¬á€€á€ºá€›á€œá€’á€º",
          period: "á€¡á€™á€¾á€á€ºá€…á€¥á€º",
          money: "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€„á€½á€±",
          multiply: " á€¡á€›á€±á€¡á€á€½á€€á€º",
          totalPrice: "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€„á€½á€±á€•á€™á€¬á€",
          pleaseBet:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€¡á€œá€±á€¬á€„á€ºá€¸á€€á€­á€¯á€á€»á€•á€«",
          election: "á€•á€¼á€±á€¬á€„á€ºá€¸á€•á€¼á€”á€ºâ€Œá€›á€½á€¾á€±á€¸",
        },
        colorLand: {
          tab1: "Total Bet",
          tab2: "2 Same No",
          tab3: "3 Match No",
          tab4: "á€™á€á€°á€á€²á€·á€”á€¶á€•á€«á€á€º",
          title1:
            "á€á€°á€Šá€®á€žá€±á€¬á€”á€¶á€•á€«á€á€º á‚ á€€á€­á€¯á€›á€½á€±á€¸á€•á€«á‹",
          tip1: "*á€¡á€–á€½á€„á€·á€ºá€”á€¶á€•á€«á€á€ºá€žá€Šá€º á€œá€±á€¬á€„á€ºá€¸á€€á€…á€¬á€¸á€”á€¶á€•á€«á€á€º á‚ á€”á€¾á€„á€·á€º á€€á€­á€¯á€€á€ºá€Šá€®á€•á€«á€€ jackpot á€†á€½á€á€ºá€á€°á€¸á€žá€½á€¬á€¸á€™á€Šá€ºá€–á€¼á€…á€ºá€žá€Šá€ºá‹  (á€á€°á€Šá€®á€žá€±á€¬á€‚á€á€”á€ºá€¸á€žá€¯á€¶á€¸á€œá€¯á€¶á€¸á€™á€¾á€œá€½á€²á)á‹",
          title2:
            "á€‘á€°á€¸á€á€¼á€¬á€¸á€žá€±á€¬á€”á€¶á€•á€«á€á€ºá€¡á€á€½á€²á€€á€­á€¯ á€›á€½á€±á€¸á€•á€«á‹",
          tip2: "*á€œá€±á€¬á€„á€ºá€¸á€€á€…á€¬á€¸á€›á€”á€º á€á€°á€Šá€®á€žá€±á€¬ á€”á€¶á€•á€«á€á€º á€¡á€”á€Šá€ºá€¸á€†á€¯á€¶á€¸ á á€á€½á€² á€”á€¾á€„á€·á€º á€™á€á€°á€Šá€®á€žá€±á€¬ á€”á€¶á€•á€«á€á€º á á€€á€­á€¯ á€›á€½á€±á€¸á€á€»á€šá€ºá€•á€«áŠ á€¡á€–á€½á€„á€·á€ºá€”á€¶á€•á€«á€á€ºá€žá€Šá€º á€œá€±á€¬á€„á€ºá€¸á€€á€…á€¬á€¸ á€”á€¶á€•á€«á€á€ºá€”á€¾á€„á€·á€º á€€á€­á€¯á€€á€ºá€Šá€®á€•á€«á€€ á€žá€„á€º á€¡á€”á€­á€¯á€„á€ºá€›á€•á€«á€™á€Šá€ºá‹ã€‚",
          title3:
            "á€‘á€°á€¸á€á€¼á€¬á€¸á€žá€±á€¬á€”á€¶á€•á€«á€á€º áƒ á€á€¯á€€á€­á€¯ á€›á€½á€±á€¸á€•á€«á‹",
          tip3: "*á€¡á€–á€½á€„á€·á€ºá€”á€¶á€•á€«á€á€ºá€žá€Šá€º á€œá€±á€¬á€„á€ºá€¸á€€á€…á€¬á€¸á€”á€¶á€•á€«á€á€º áƒ á€”á€¾á€„á€·á€º á€€á€­á€¯á€€á€ºá€Šá€®á€•á€«á€€ á€¡á€”á€­á€¯á€„á€ºá€›á€•á€«á‹",
          title4:
            "á€‚á€á€”á€ºá€¸ áƒ á€œá€¯á€¶á€¸ á€€á€­á€¯á€€á€ºá€Šá€®á€œá€­á€¯á€€á€ºá€™á€Šá€º",
          tip4: "*á€€á€±á€¬á€€á€ºá€”á€¾á€¯á€á€ºá€‘á€¬á€¸á€žá€±á€¬ á€‚á€á€”á€ºá€¸á€™á€»á€¬á€¸á€žá€Šá€º á€á€°á€Šá€®á€žá€±á€¬ á€‚á€á€”á€ºá€¸á€žá€¯á€¶á€¸á€œá€¯á€¶á€¸á€–á€¼á€…á€ºá€•á€«á€€ á€†á€¯á€á€»á€®á€¸á€™á€¼á€¾á€„á€·á€ºá€™á€Šá€ºá€–á€¼á€…á€ºá€•á€«á€žá€Šá€ºá‹",
          title5:
            "á€™á€á€°á€Šá€®á€žá€±á€¬á€”á€¶á€•á€«á€á€º áƒá€œá€¯á€¶á€¸ á€€á€­á€¯á€›á€½á€±á€¸á€á€»á€šá€ºá€•á€«á‹",
          tip5: "*á€”á€¶á€•á€«á€á€º áƒ á€œá€¯á€¶á€¸ á€žá€­á€¯á€·á€™á€Ÿá€¯á€á€º á€‘á€­á€¯á€·á€‘á€€á€ºá€•á€­á€¯á€žá€±á€¬ á€”á€¶á€•á€«á€á€ºá€™á€»á€¬á€¸á€€á€­á€¯ á€›á€½á€±á€¸á€á€»á€šá€ºá€•á€«áŠ á€‘á€®á€›á€œá€’á€ºá€›á€¾á€­ á€‚á€á€”á€ºá€¸á€žá€¯á€¶á€¸á€œá€¯á€¶á€¸á€žá€Šá€º á€€á€½á€²á€•á€¼á€¬á€¸á€žá€±á€¬á€”á€¶á€•á€«á€á€ºá€™á€»á€¬á€¸á€–á€¼á€…á€ºá€•á€¼á€®á€¸ áŽá€„á€ºá€¸á€á€­á€¯á€·á€žá€Šá€º á€›á€½á€±á€¸á€á€»á€šá€ºá€‘á€¬á€¸á€žá€±á€¬á€”á€¶á€•á€«á€á€ºá€™á€»á€¬á€¸á€”á€¾á€„á€·á€º á€€á€­á€¯á€€á€ºá€Šá€®á€•á€«á€€ á€‘á€®á€•á€±á€«á€€á€ºá€™á€Šá€ºáŠ",
          title6:
            "á€†á€€á€ºá€á€­á€¯á€€á€ºá€”á€¶á€•á€«á€á€º áƒ á€á€¯á€€á€­á€¯ á€›á€½á€±á€¸á€•á€«á‹",
          tip6: "*á€‘á€®á€”á€¶á€•á€«á€á€ºá€žá€Šá€º á€žá€¯á€¶á€¸á€œá€¯á€¶á€¸á€†á€€á€ºá€á€­á€¯á€€á€º á€‚á€á€”á€ºá€¸á€–á€¼á€…á€ºá€œá€»á€¾á€„á€º áŽá€„á€ºá€¸á€žá€Šá€º á€¡á€±á€¬á€„á€ºá€•á€½á€²á€›á€œá€’á€ºá€–á€¼á€…á€ºá€žá€Šá€ºá‹",
          title7:
            "á€™á€á€°á€Šá€®á€žá€±á€¬á€”á€¶á€•á€«á€á€º á‚á€œá€¯á€¶á€¸ á€€á€­á€¯á€›á€½á€±á€¸á€á€»á€šá€ºá€•á€«á‹",
          tip7: "*á€”á€¶á€•á€«á€á€º á‚á€á€¯ á€”á€¾á€„á€·á€ºá€¡á€‘á€€á€ºá€€á€­á€¯á€›á€½á€±á€¸á€á€»á€šá€ºá€•á€«áŠ á€‘á€®á€›á€œá€’á€ºá€›á€¾á€­á€‚á€á€”á€ºá€¸á€”á€¾á€…á€ºá€œá€¯á€¶á€¸á€žá€Šá€º á€™á€á€°á€Šá€®á€žá€±á€¬á€”á€¶á€•á€«á€á€ºá€™á€»á€¬á€¸á€–á€¼á€…á€ºá€žá€Šá€ºáŠ áŽá€„á€ºá€¸á€á€­á€¯á€·á€žá€Šá€º á€›á€½á€±á€¸á€á€»á€šá€ºá€‘á€¬á€¸á€žá€±á€¬á€”á€¶á€•á€«á€á€ºá€™á€»á€¬á€¸á€”á€¾á€„á€·á€ºá€€á€­á€¯á€€á€ºá€Šá€®á€•á€«á€€ á€žá€„á€ºá€žá€Šá€º á€‘á€®á€•á€±á€«á€€á€ºá€™á€Šá€ºá€–á€¼á€…á€ºá€žá€Šá€ºá‹",
          selectCon1:
            "á€€á€­á€¯á€€á€ºá€Šá€®á€žá€±á€¬ á€”á€¶á€•á€«á€á€º á‚ á€á€¯á€€á€­á€¯ á€›á€½á€±á€¸á€•á€«á‹",
          selectCon2:
            "á€‘á€°á€¸á€á€¼á€¬á€¸á€žá€±á€¬á€”á€¶á€•á€«á€á€ºá€á€…á€ºá€…á€¯á€¶á€€á€­á€¯ á€›á€½á€±á€¸á€•á€«á‹",
          selectCon3:
            "á€‘á€°á€¸á€á€¼á€¬á€¸á€žá€±á€¬á€”á€¶á€•á€«á€á€º áƒ á€á€¯á€€á€­á€¯ á€›á€½á€±á€¸á€•á€«á‹",
          selectCon4:
            "á€™á€á€°á€Šá€®á€žá€±á€¬á€”á€¶á€•á€«á€á€º áƒá€œá€¯á€¶á€¸ á€€á€­á€¯á€›á€½á€±á€¸á€á€»á€šá€ºá€•á€«á‹",
          selectCon5:
            "á€™á€á€°á€Šá€®á€žá€±á€¬á€”á€¶á€•á€«á€á€º á‚á€œá€¯á€¶á€¸ á€€á€­á€¯á€›á€½á€±á€¸á€á€»á€šá€ºá€•á€«á‹ï¼š",
          gameType1: "á€á€á€¼á€¬á€¸á€”á€¶á€•á€«á€á€º áƒ á€œá€¯á€¶á€¸",
          gameType2: "á€”á€¶á€•á€«á€á€º áƒá€á€¯ á€†á€€á€ºá€á€­á€¯á€€á€º",
          gameType3: "á€á€°á€Šá€®á€žá€±á€¬á€”á€¶á€•á€«á€á€º á‚ á€á€¯",
          gameType4: "á€á€°á€Šá€®á€žá€±á€¬á€”á€¶á€•á€«á€á€º áƒ á€á€¯",
        },
        activity: { title: "á€•á€›á€­á€¯á€™á€­á€¯á€¸á€›á€¾á€„á€ºá€¸" },
        activityDes: {
          title:
            "á€•á€›á€­á€¯á€™á€­á€¯á€¸á€›á€¾á€„á€ºá€¸á€¡á€žá€±á€¸á€…á€­á€á€ºá€¡á€€á€¼á€±á€¬á€„á€ºá€¸á€¡á€›á€¬",
        },
        usdt: {
          title: "USDT á€„á€½á€±á€–á€¼á€Šá€ºá€·á€á€¼á€„á€ºá€¸",
          address: "USDTá€•á€­á€¯á€€á€ºá€†á€¶á€œá€­á€•á€ºá€…á€¬",
          Raddress:
            "á€¡á€¬á€¸á€•á€¼á€”á€ºá€žá€½á€„á€ºá€¸á€›á€™á€Šá€·á€ºá€œá€­á€•á€ºá€…á€¬",
          QRcode: "QR á€€á€¯á€’á€º",
          tit1: "á€„á€½á€±á€€á€¼á€±á€¸á€€á€­á€¯á€á€šá€ºá€•á€«á‹",
          tit2: "á€œá€­á€•á€ºá€…á€¬á€žá€­á€¯á€·á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€•á€«á‹",
          tit3: "á€žá€˜á€±á€¬á€á€°á€Šá€®á€á€»á€€á€ºá€€á€­á€¯ á€á€¶á€†á€­á€•á€ºá€á€á€ºá€•á€«á‹",
          tit4: "á€›á€±á€¬á€€á€ºá€›á€¾á€­á€œá€¬á€á€¼á€„á€ºá€¸á€€á€­á€¯ á€…á€±á€¬á€„á€·á€ºá€†á€­á€¯á€„á€ºá€¸á€•á€«á‹",
          tip1: "1. á€„á€½á€±á€–á€¼á€Šá€·á€ºá€›á€”á€ºá€œá€­á€•á€ºá€…á€¬á€€á€­á€¯ á€¡á€á€»á€­á€”á€ºá€”á€¾á€„á€·á€ºá€á€•á€¼á€±á€¸á€Šá€® á€•á€¼á€±á€¬á€„á€ºá€¸á€œá€²á€‘á€¬á€¸á€•á€«á€žá€Šá€ºá‹ á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€•á€¼á€”á€ºá€œá€Šá€ºá€–á€¼á€Šá€·á€ºá€žá€½á€„á€ºá€¸á€›á€™á€Šá€·á€ºá€œá€­á€•á€ºá€…á€¬á€€á€­á€¯ á€™á€žá€­á€™á€ºá€¸á€†á€Šá€ºá€¸á€•á€«á€”á€¾á€„á€·á€ºá‹ á€’á€…á€ºá€‚á€»á€…á€ºá€á€šá€ºá€„á€½á€±á€€á€¼á€±á€¸á€†á€¯á€¶á€¸á€›á€¾á€¯á€¶á€¸á€™á€¾á€¯á€€á€­á€¯ á€›á€¾á€±á€¬á€„á€ºá€›á€¾á€¬á€¸á€›á€”á€ºá€¡á€á€½á€€á€º á€„á€½á€±á€•á€¼á€”á€ºá€žá€½á€„á€ºá€¸á€™á€¾á€¯á€á€…á€ºá€á€¯á€…á€®á€™á€á€­á€¯á€„á€ºá€™á€®á€á€½á€„á€º á€•á€¼á€”á€ºá€œá€Šá€ºá€–á€¼á€Šá€·á€ºá€žá€½á€„á€ºá€¸á€›á€™á€Šá€·á€ºá€œá€­á€•á€ºá€…á€¬á€€á€­á€¯ á€›á€šá€°á€•á€«á‹ ",
          tip2: "2. á€„á€½á€±á€•á€¼á€”á€ºá€žá€½á€„á€ºá€¸á€™á€Šá€·á€ºá€œá€­á€•á€ºá€…á€¬á€€á€­á€¯ á€€á€°á€¸á€šá€°á€•á€¼á€®á€¸á€”á€±á€¬á€€á€ºáŠ á€„á€½á€±á€‘á€¯á€á€ºá€šá€°á€›á€”á€ºá€”á€¾á€„á€·á€º á€œá€½á€¾á€²á€›á€”á€ºá€¡á€á€½á€€á€º á€žá€„á€ºá€¡á€žá€¯á€¶á€¸á€•á€¼á€¯á€”á€±á€žá€±á€¬ á€’á€…á€ºá€‚á€»á€…á€ºá€á€šá€ºá€„á€½á€±á€€á€¼á€±á€¸á€•á€­á€¯á€€á€ºá€†á€¶á€¡á€­á€á€ºá€žá€­á€¯á€· á€žá€½á€¬á€¸á€•á€«á‹ á€›á€½á€±á€¸á€á€»á€šá€ºá€‘á€¬á€¸á€žá€Šá€·á€º blockchain á€”á€¾á€„á€·á€º á€€á€½á€²á€•á€¼á€¬á€¸á€žá€Šá€·á€º á€’á€…á€ºá€‚á€»á€…á€ºá€á€šá€ºá€•á€­á€¯á€„á€ºá€†á€­á€¯á€„á€ºá€™á€¾á€¯á€™á€»á€¬á€¸á€€á€­á€¯ á€‘á€•á€ºá€™á€–á€¼á€Šá€·á€ºá€•á€«á€”á€¾á€„á€·á€ºáŠ á€žá€­á€¯á€·á€™á€Ÿá€¯á€á€ºá€•á€«á€€ á€•á€­á€¯á€„á€ºá€†á€­á€¯á€„á€ºá€™á€¾á€¯á€™á€»á€¬á€¸á€€á€­á€¯ á€•á€¼á€”á€ºá€œá€Šá€ºá€›á€šá€°á€™á€Šá€ºá€™á€Ÿá€¯á€á€ºá€•á€«á‹ ",
          tip3: "á€„á€½á€±á€•á€¼á€”á€ºá€žá€½á€„á€ºá€¸á€á€¼á€„á€ºá€¸-á€„á€½á€±á€‘á€¯á€á€ºá€žá€Šá€º á€šá€±á€˜á€¯á€šá€»á€¡á€¬á€¸á€–á€¼á€„á€·á€º 1-5 á€™á€­á€”á€…á€ºá€¡á€á€½á€„á€ºá€¸ á€¡á€œá€­á€¯á€¡á€œá€»á€±á€¬á€€á€ºá€›á€±á€¬á€€á€ºá€›á€¾á€­á€œá€¬á€žá€Šá€ºáŠ á€¡á€€á€šá€ºá á€™á€Ÿá€¯á€á€ºá€•á€«á€€áŠ á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€¡á€½á€”á€ºá€œá€­á€¯á€„á€ºá€¸á€–á€±á€¬á€€á€ºá€žá€Šá€ºá€á€”á€ºá€†á€±á€¬á€„á€ºá€™á€¾á€¯á€€á€­á€¯ á€†á€€á€ºá€žá€½á€šá€ºá€•á€«á‹ ",
          tip4: "(á€¥á€•á€™á€¬- á€€á€­á€¯á€„á€ºá€á€½á€šá€ºá€ 100 á€™á€¾ 100 á€žá€­á€¯á€· 100 á€‘á€¯á€á€ºá€šá€°á€á€¼á€„á€ºá€¸) ",
        },
        trx: {
          uset: "TRX",
          title: "TRX á€„á€½á€±á€–á€¼á€Šá€ºá€·á€á€¼á€„á€ºá€¸",
          address: "TRXá€•á€­á€¯á€€á€ºá€†á€¶á€œá€­á€•á€ºá€…á€¬",
        },
        promotionNew: {
          title: "á€™á€¼á€¾á€„á€·á€ºá€á€„á€ºá€•á€«á‹",
          dataOverview: "á€’á€±á€á€¬á€¡á€€á€»á€„á€ºá€¸á€á€»á€¯á€•á€º",
          myTeam: "á€€á€»á€”á€ºá€¯á€•á€ºá€¡á€–á€½á€²á€·",
          upRecord: "á€™á€¾á€á€ºá€á€™á€ºá€¸á€›á€šá€°á€•á€«á‹",
          tutorial:
            "á€•á€›á€­á€¯á€™á€­á€¯á€¸á€›á€¾á€„á€ºá€¸á€žá€„á€ºá€á€”á€ºá€¸á€…á€¬",
          myReward: "á€€á€»á€”á€ºá€¯á€•á€ºá€†á€¯á€œá€¬á€˜á€º",
          totalComm:
            "á€™á€”á€±á€·á€€ á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€€á€±á€¬á€ºá€™á€›á€¾á€„á€ºá€º",
          directComm:
            "á€á€­á€¯á€€á€ºá€›á€­á€¯á€€á€ºá€€á€±á€¬á€ºá€™á€›á€¾á€„á€º",
          teamComm: "á€¡á€–á€½á€²á€·á€€á€±á€¬á€ºá€™á€›á€¾á€„á€º",
          directSubord:
            "á€á€­á€¯á€€á€ºá€›á€­á€¯á€€á€ºá€œá€€á€ºá€¡á€±á€¬á€€á€ºá€¡á€›á€±á€¡á€á€½á€€á€º",
          totalTeams:
            "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€¡á€–á€½á€²á€·á€á€„á€ºá€¡á€›á€±á€á€½á€€á€º",
          newToday: "á€šá€”á€±á€· á€‘á€•á€ºá€á€­á€¯á€¸á€œá€°á€žá€…á€º",
          newTeam:
            "á€šá€”á€±á€· á€¡á€–á€½á€²á€·á€á€„á€ºá€‘á€•á€ºá€á€­á€¯á€¸á€œá€°á€žá€…á€ºá€¬á€¸",
          weekComm:
            "á€á€…á€ºá€•á€á€ºá€…á€¬ á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€€á€±á€¬á€ºá€™á€›á€¾á€„á€º",
          totalComm1:
            "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€€á€±á€¬á€ºá€™á€›á€¾á€„á€º",
          QRcode:
            "QR á€€á€¯á€’á€ºá€€á€­á€¯á€žá€­á€™á€ºá€¸á€›á€”á€º á€€á€¼á€¬á€€á€¼á€¬á€”á€¾á€­á€•á€ºá€•á€«á‹",
          copyCode:
            "á€–á€­á€á€ºá€€á€¼á€¬á€¸á€á€»á€€á€ºá€€á€¯á€’á€ºá€€á€­á€¯ á€€á€°á€¸á€šá€°á€•á€«á‹",
          copyLink: "á€œá€„á€·á€ºá€á€ºá€€á€­á€¯ á€€á€°á€¸á€šá€°á€•á€«á‹",
          rebateTable:
            "á€€á€±á€¬á€ºá€™á€›á€¾á€„á€ºá€„á€½á€±á€•á€™á€¬á€ á€‡á€šá€¬á€¸á€™á€¾á€á€ºá€á€”á€ºá€¸á€¬á€¸",
          agencyLevel: "á€¡á€±á€‚á€»á€„á€ºá€·á€¡á€†á€„á€·á€º",
          teamNumber:
            "á€¡á€–á€½á€²á€·á€á€„á€ºá€™á€”á€ºá€˜á€¬á€¡á€›á€±á€á€½á€€á€º",
          teamFlow: "á€¡á€–á€½á€²á€·á€á€„á€ºá€žá€¬á€¸áá€‘á€­á€¯á€¸á€€á€¼á€±á€¸",
          teamRecharge:
            "á€¡á€–á€½á€²á€·á€á€„á€ºá€žá€¬á€¸á€žá€½á€„á€ºá€¸á€„á€½á€±",
          validDay:
            "á€¡á€€á€»á€¯á€¶á€¸á€á€„á€ºá€žá€±á€¬á€¡á€–á€½á€²á€·á€á€„á€ºá€™á€»á€¬á€¸- á€šá€”á€±á€· á€žá€½á€„á€ºá€¸á€„á€½á€± á€žá€­á€¯á€·á€™á€Ÿá€¯á€á€º á€œá€±á€¬á€„á€ºá€¸á€€á€¼á€±á€¸á€‘á€•á€ºá€„á€½á€±",
          commMethod: "á€€á€±á€¬á€ºá€™á€›á€¾á€„á€ºá€á€½á€€á€ºá€”á€Šá€ºá€¸",
          Hierarchy: "á€¡á€†á€„á€·á€º",
          rebateRatio:
            "á€€á€±á€¬á€ºá€™á€›á€¾á€„á€ºá€„á€½á€±á€¡á€á€»á€­á€¯á€¸á€€á€»",
          firstMember: "á€¡á€†á€„á€·á€º 1",
          secondMember: "á€¡á€†á€„á€·á€º 2",
          thirdMember: "á€¡á€†á€„á€·á€º 3",
          tierMember: "á€¡á€†á€„á€·á€º 4",
          bettingTurnover:
            "á€œá€±á€¬á€„á€ºá€¸á€€á€…á€¬á€¸á€‘á€­á€¯á€¸á€€á€¼á€±á€¸",
          agent: "á€¡á€†á€„á€·á€ºá€¡á€–á€½á€²á€·á€á€„á€º",
          upTime: "á€›á€šá€°á€á€»á€­á€”á€º",
          receiveAmount: "á€›á€šá€°á€•á€™á€¬á€",
          operate: "á€…á€á€„á€ºá€™á€Šá€º",
          details: "á€¡á€žá€±á€¸á€…á€­á€á€º",
          date: "á€›á€€á€ºá€…á€½á€²",
          directTeam: "á€á€­á€¯á€€á€ºá€›á€­á€¯á€€á€ºá€¡á€–á€½á€²á€·",
          people: "á€œá€°á€á€½á€±",
          pleaseChoose: "á€›á€½á€±á€¸á€á€»á€šá€ºá€•á€«",
          totalBet:
            "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€œá€±á€¬á€„á€ºá€¸á€€á€¼á€±á€¸á€•á€™á€¬á€",
          totalAmount:
            "á€…á€¯á€…á€¯á€•á€±á€«á€„á€ºá€¸á€€á€±á€¬á€ºá€™á€›á€¾á€„á€ºá€•á€™á€¬á€",
          Inquire: "á€…á€…á€ºá€†á€±á€¸á€™á€Šá€º",
          nickName: "á€¡á€™á€Šá€ºá€•á€¼á€±á€¬á€„á€º",
          runningWater: "á€‘á€­á€¯á€¸á€€á€¼á€±á€¸á€”á€¾á€¯á€”á€ºá€¸",
          condition: "á€¡á€á€¼á€±á€¡á€”á€±",
          enable: "á€¡á€žá€¯á€¶á€¸á€•á€¼á€¯á€”á€±",
          disabled: "á€•á€­á€á€ºá€á€¶á€›á€á€¼á€„á€ºá€¸",
          personalFlow:
            "á€€á€­á€¯á€šá€ºá€•á€­á€¯á€„á€ºá€‘á€­á€¯á€¸á€€á€¼á€±á€¸",
          personalRecharge:
            "á€€á€­á€¯á€šá€ºá€•á€­á€¯á€„á€ºá€žá€½á€„á€ºá€¸á€„á€½á€±",
          rgistrationTime: "á€¡á€€á€±á€¬á€„á€·á€ºá€–á€½á€„á€·á€ºá€á€»á€­á€”á€º",
          subordinates: "á€œá€€á€ºá€¡á€±á€¬á€€á€ºá€žá€¬á€¸á€¡á€›á€±á€á€½á€€á€º",
          year: "á€á€…á€ºá€”á€¾á€…á€º",
          moon: "á€œ",
          day: "á€”á€±á€·",
          selectList: [
            { name: "á€¡á€†á€„á€·á€º 1", code: 1 },
            { name: "á€¡á€†á€„á€·á€º 2", code: 2 },
            { name: "á€¡á€†á€„á€·á€º 3", code: 3 },
            { name: "á€¡á€†á€„á€·á€º 4", code: 4 },
            { name: "á€¡á€†á€„á€·á€º 5", code: 5 },
            { name: "á€¡á€†á€„á€·á€º 6", code: 6 },
          ],
          promoteMoney: "á€™á€¼á€¾á€„á€·á€ºá€á€„á€ºá€•á€«á‹á‹",
          uid: "UID",
        },
        verify: {
          title: "Google Authenticator",
          unbind: "unbind/validatorá€€á€­á€¯ á€•á€¼á€±á€¬á€„á€ºá€¸á€•á€«á‹",
          downTit:
            "á€’á€±á€«á€„á€ºá€¸á€œá€¯á€’á€ºá€œá€¯á€•á€ºá€•á€¼á€®á€¸ á€™á€¾á€á€ºá€•á€¯á€¶á€á€„á€ºá€œá€­á€¯á€€á€ºá€•á€«á‹",
          downTxt:
            "Google Authenticator á€€á€­á€¯ á€’á€±á€«á€„á€ºá€¸á€œá€¯á€’á€ºá€œá€¯á€•á€ºá€•á€«á‹ á€’á€±á€«á€„á€ºá€¸á€œá€¯á€’á€ºá€•á€¼á€®á€¸á€•á€«á€€áŠ á€žá€„á€ºáá€‘á€®á€¡á€€á€±á€¬á€„á€·á€ºá€€á€­á€¯ á€á€»á€­á€á€ºá€›á€”á€º bind á€á€œá€¯á€á€ºá€€á€­á€¯ á€”á€¾á€­á€•á€ºá€•á€«á‹",
          bind: "Bind",
          downVerify:
            "Google Authenticator á€€á€­á€¯ á€’á€±á€«á€„á€ºá€¸á€œá€¯á€’á€ºá€œá€¯á€•á€ºá€•á€«á‹",
          vexplainTit: "Binding validator á€–á€±á€¬á€ºá€•á€¼á€á€»á€€á€º",
          list: [
            {
              txt: "á€žá€„á€·á€ºá€‘á€®á€¡á€€á€±á€¬á€„á€·á€ºá€™á€¾ á€‘á€¯á€á€ºá€•á€±á€¸á€žá€±á€¬ á€‚á€á€”á€ºá€¸ áá† á€œá€¯á€¶á€¸á€žá€±á€¬á€·á€€á€­á€¯ á€œá€¯á€¶á€á€¼á€¯á€¶á€žá€±á€¬á€”á€±á€›á€¬á€á€½á€„á€º á€žá€­á€™á€ºá€¸á€†á€Šá€ºá€¸á€•á€¼á€®á€¸ á€žá€±á€¬á€·á€€á€­á€¯ á€€á€°á€¸á€šá€°á€›á€”á€º á€œá€­á€¯á€¡á€•á€ºá€žá€Šá€ºá‹",
            },
            {
              txt: "á€žá€„á€ºá€žá€Šá€º google authenticator á€€á€­á€¯á€–á€½á€„á€·á€ºá€›á€”á€ºá€œá€­á€¯á€¡á€•á€ºá€žá€Šá€ºá‹",
            },
            {
              txt: "á€‚á€­á€™á€ºá€¸á€¡á€€á€±á€¬á€„á€·á€ºá€á€…á€ºá€á€¯á€‘á€Šá€·á€ºá€•á€«áŠ á€‚á€á€”á€ºá€¸ áá† á€œá€¯á€¶á€¸á€•á€«á€žá€±á€¬á€·á€€á€­á€¯á€‘á€Šá€·á€ºá€žá€½á€„á€ºá€¸á€–á€­á€¯á€·á€€á€°á€¸á€šá€°á€•á€«á‹",
            },
            {
              txt: "á€‘á€•á€ºá€–á€¼á€Šá€·á€ºá€™á€¾á€¯á€¡á€±á€¬á€„á€ºá€™á€¼á€„á€ºá€•á€¼á€®á€¸á€”á€±á€¬á€€á€ºáŠ á€‚á€á€”á€ºá€¸ 6 á€œá€¯á€¶á€¸áŠ á€’á€…á€ºá€‚á€»á€…á€ºá€á€šá€ºá€¡á€á€Šá€ºá€•á€¼á€¯á€€á€¯á€’á€ºá€€á€­á€¯ á€¡á€œá€­á€¯á€¡á€œá€»á€±á€¬á€€á€ºá€‘á€¯á€á€ºá€•á€±á€¸á€•á€«á€žá€Šá€ºá‹",
            },
          ],
          vexplainNext:
            "á€žá€„á€ºá€á€”á€ºá€¸á€…á€¬á€€á€­á€¯ á€€á€»á€±á€¬á€ºá€žá€½á€¬á€¸á€•á€«á‹",
          vbackupTit: "á€¡á€›á€”á€ºá€€á€®á€¸",
          vbackupTxt:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€¡á€›á€±á€¸á€€á€¼á€®á€¸á€žá€±á€¬á€·á€€á€­á€¯ á€œá€¾á€°á€’á€«á€”á€ºá€¸á€•á€¼á€®á€¸ á€œá€¯á€¶á€á€¼á€¯á€¶á€žá€±á€¬á€”á€±á€›á€¬á€á€½á€„á€º á€žá€­á€™á€ºá€¸á€†á€Šá€ºá€¸á€‘á€¬á€¸á€•á€«áŠ á€–á€¯á€”á€ºá€¸á€€ á€¤á€žá€±á€¬á€·á€€á€­á€¯ á€…á€½á€”á€·á€ºá€•á€…á€ºá€•á€«á€€áŠ á€™á€Ÿá€¯á€á€ºá€›á€„á€º á€žá€„á€ºá€žá€Šá€º life testerá€€á€­á€¯ 7 á€›á€€á€ºá€¡á€‘á€­ á€žá€­á€™á€ºá€¸á€†á€Šá€ºá€¸á€‘á€¬á€¸á€™á€Šá€ºá€–á€¼á€…á€ºá€žá€Šá€ºá‹",
          vsafetyTit: "á€…á€­á€…á€…á€ºá€œá€¯á€¶á€á€¼á€¯á€¶á€›á€±",
          vsafetyTxt:
            "á€žá€„á€·á€ºá€™á€­á€¯á€˜á€­á€¯á€„á€ºá€¸á€”á€¶á€•á€«á€á€ºá€žá€­á€¯á€· á€¡á€á€Šá€ºá€•á€¼á€¯á€€á€¯á€’á€ºá€€á€­á€¯ á€•á€±á€¸á€•á€­á€¯á€·á€•á€«á‹",
          vsafetySms:
            "á€™á€­á€¯á€˜á€­á€¯á€„á€ºá€¸á€¡á€á€Šá€ºá€•á€¼á€¯á€€á€¯á€’á€º",
          vsafetyTip:
            "Verify security á€™á€›á€”á€­á€¯á€„á€ºá€˜á€°á€¸á€œá€¬á€¸á‹ á€–á€±á€¬á€€á€ºá€žá€Šá€ºá€á€”á€ºá€†á€±á€¬á€„á€ºá€™á€¾á€¯á€€á€­á€¯ á€†á€€á€ºá€žá€½á€šá€ºá€•á€«á‹",
          vsafetySnsnull:
            "á€¡á€á€Šá€ºá€•á€¼á€¯á€€á€¯á€’á€ºá€€á€­á€¯ á€–á€¼á€Šá€·á€ºá€žá€½á€„á€ºá€¸á€›á€•á€«á€™á€Šá€ºá‹",
          loginTit: "Googleá€…á€­á€…á€…á€ºá€œá€±á€¬á€·á€‚á€ºá€¡á€„á€º",
          loginTxt:
            "á€¡á€€á€±á€¬á€„á€·á€ºá€€á€¬á€€á€½á€šá€ºá€›á€±á€¸á€€á€­á€¯ á€–á€½á€„á€·á€ºá€‘á€¬á€¸á€•á€«á€žá€Šá€ºáŠ á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€¡á€±á€¬á€€á€ºá€•á€«á€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€á€»á€€á€ºá€™á€»á€¬á€¸á€€á€­á€¯ á€¡á€•á€¼á€®á€¸á€žá€á€ºá€›á€”á€º á€¡á€™á€¾á€¬á€…á€¬á€™á€»á€¬á€¸á€€á€­á€¯ á€œá€­á€¯á€€á€ºá€”á€¬á€•á€«á‹",
          loginTip:
            "á€žá€„á€·á€ºá€™á€­á€¯á€˜á€­á€¯á€„á€ºá€¸á€–á€¯á€”á€ºá€¸á€á€½á€„á€º Alibaba Cloud APP á€žá€­á€¯á€·á€™á€Ÿá€¯á€á€º Google Authenticator (authenticator) á€€á€­á€¯á€–á€½á€„á€·á€ºá€•á€«áŠ á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€‚á€á€”á€ºá€¸ 6 á€œá€¯á€¶á€¸á€•á€«á€žá€±á€¬ á€€á€¯á€’á€ºá€€á€­á€¯á€‘á€Šá€·á€ºá€•á€«á‹",
          loginNum: "á€‚á€á€”á€ºá€¸ á† á€œá€¯á€¶á€¸",
        },
        long: {
          title: "á€”á€‚á€«á€¸á€›á€¾á€Šá€ºá€œá€€á€ºá€‘á€±á€¬á€€á€º",
          newTitle: "á€”á€‚á€«á€¸á€›á€¾á€Šá€ºá€¡á€žá€…á€º",
          betTitle: "á€™á€­á€™á€­á€™á€¾á€á€ºá€á€™á€ºá€¸",
          expect: "á€€á€¼á€­á€™á€º",
          andDig: "á€•á€±á€«á€„á€ºá€¸á€á€¼á€„á€ºá€¸á€€á€¼á€®á€¸",
          andSmall: "á€•á€±á€«á€„á€ºá€¸á€á€¼á€„á€ºá€¸á€žá€±á€¸",
          andodd: "á€•á€±á€«á€„á€ºá€¸á€á€¼á€„á€ºá€¸á€…á€¯á€¶",
          andeven: "á€•á€±á€«á€„á€ºá€¸á€á€¼á€„á€ºá€¸á€™",
          illustrate: "á€œá€™á€ºá€¸á€Šá€½á€¾á€”á€º",
          txt1: 'á€”á€‚á€«á€¸á€›á€¾á€Šá€ºá€œá€€á€ºá€‘á€±á€¬á€€á€º á€žá€Šá€º Win GoáŠ 5DáŠ K3 á€”á€¾á€„á€·á€º "á€‘á€°á€¸á€‘á€°á€¸á€á€¼á€¬á€¸á€á€¼á€¬á€¸" á€‘á€®á€™á€»á€¬á€¸á á€‘á€®á€›á€œá€’á€ºá€™á€»á€¬á€¸á€€á€­á€¯ á€á€¼á€±á€›á€¬á€á€¶á€•á€¼á€®á€¸ á€›á€±á€á€½á€€á€ºá€žá€Šá€·á€º á€œá€€á€ºá€‘á€±á€¬á€€á€ºá€€á€­á€›á€­á€šá€¬á€á€…á€ºá€á€¯á€–á€¼á€…á€ºá€•á€¼á€®á€¸ á€¡á€™á€¼á€”á€ºá€œá€±á€¬á€„á€ºá€¸á€€á€¼á€±á€¸á€™á€»á€¬á€¸ á€•á€¼á€¯á€œá€¯á€•á€ºá€”á€­á€¯á€„á€ºá€žá€Šá€ºá‹',
          txt2: 'á€¡á€€á€¼á€­á€™á€ºá€á€…á€ºá€€á€¼á€­á€™á€ºá€á€½á€„á€º á€¡á€€á€¼á€®á€¸áŠá€¡á€žá€±á€¸áŠ á€á€…á€ºá€œá€¯á€¶á€¸á€”á€¾á€„á€·á€º á€”á€¾á€…á€ºá€†á€–á€¼á€…á€ºá€”á€­á€¯á€„á€ºá€á€¼á€±á€™á€¾á€¬ á€á€°á€Šá€®á€•á€«á€žá€Šá€ºá‹ á€‘á€®á€•á€±á€«á€€á€ºá€…á€‰á€º áƒ á€€á€¼á€­á€™á€ºá€”á€¾á€„á€·á€ºá€¡á€‘á€€á€º á€†á€€á€ºá€á€­á€¯á€€á€ºá€•á€±á€«á€€á€ºá€•á€«á€€ á€”á€‚á€«á€¸á€›á€¾á€Šá€ºá€Ÿá€¯á€á€±á€«á€ºá€žá€Šá€ºá‹ á€¡á€™á€»á€¬á€¸á€¡á€¬á€¸á€–á€¼á€„á€·á€º á€”á€‚á€«á€¸á€–á€¼á€á€ºá€”á€Šá€ºá€¸ "á€žá€­á€¯á€·á€™á€Ÿá€¯á€á€º "á€”á€‚á€«á€¸á€”á€±á€¬á€€á€ºá€œá€­á€¯á€€á€ºá€á€¼á€„á€ºá€¸ á€žá€Šá€º á€”á€¾á€…á€ºá€‘á€•á€ºá€œá€±á€¬á€„á€ºá€¸á€€á€…á€¬á€¸á€–á€¼á€„á€·á€º á€œá€€á€ºá€á€¶á€™á€Šá€ºá€–á€¼á€…á€ºá€žá€Šá€ºá‹',
          list: [
            {
              name: "á€”á€‚á€«á€¸á€–á€¼á€á€ºá€”á€Šá€ºá€¸á€†á€­á€¯á€á€¬ á€˜á€¬á€œá€²",
              txt: '5 á€€á€¼á€­á€™á€ºá€†á€€á€ºá€á€­á€¯á€€á€º "á€™" á€‘á€½á€€á€ºá€•á€«á€€ á€œá€±á€¬á€„á€ºá€¸á€€á€¼á€±á€¸á€¡á€á€½á€€á€º "á€…á€¯á€¶" á€€á€­á€¯ á€žá€„á€ºá€›á€½á€±á€¸á€á€»á€šá€ºá€•á€«á€€áŠ á€¤á€œá€±á€¬á€„á€ºá€¸á€€á€…á€¬á€¸á€¡á€…á€®á€¡á€…á€‰á€ºá€€á€­á€¯ "á€”á€‚á€«á€¸á€–á€¼á€á€º" á€Ÿá€¯á€á€±á€«á€ºá€žá€Šá€ºá‹',
            },
            {
              name: "á€”á€‚á€«á€¸á€”á€±á€¬á€€á€ºá€œá€­á€¯á€€á€ºá€á€¼á€„á€ºá€¸á€†á€­á€¯á€’á€«á€˜á€¬á€œá€²",
              txt: '5á€€á€¼á€­á€™á€º á€†á€€á€ºá€á€­á€¯á€€á€º "á€™" á€‘á€½á€€á€ºá€•á€«á€€ á€œá€±á€¬á€„á€ºá€¸á€€á€¼á€±á€¸á€¡á€á€½á€€á€º "á€™" á€€á€­á€¯ á€†á€€á€ºá€œá€€á€ºá€›á€½á€±á€¸á€á€»á€šá€ºá€•á€«á€€áŠ á€¤á€œá€±á€¬á€„á€ºá€¸á€€á€…á€¬á€¸á€¡á€…á€®á€¡á€…á€‰á€ºá€€á€­á€¯ "á€”á€‚á€«á€¸á€”á€±á€¬á€€á€ºá€œá€­á€¯á€€á€ºá€á€¼á€„á€ºá€¸" á€Ÿá€¯á€á€±á€«á€ºá€žá€Šá€ºá‹',
            },
            {
              name: "á€”á€¾á€…á€ºá€‘á€•á€ºá€œá€±á€¬á€„á€ºá€¸á€á€¼á€„á€ºá€¸á€†á€­á€¯á€á€¬á€˜á€¬á€œá€²á‹",
              txt: 'á€”á€¾á€…á€ºá€‘á€•á€ºá€œá€±á€¬á€„á€ºá€¸á€á€¼á€„á€ºá€¸á€žá€Šá€º "á€”á€‚á€«á€¸á€€á€­á€¯á€–á€¼á€á€ºá€á€¼á€„á€ºá€¸" á€žá€­á€¯á€·á€™á€Ÿá€¯á€á€º "á€”á€‚á€«á€¸á€€á€­á€¯á€á€¯á€á€ºá€œá€¾á€²á€á€¼á€„á€ºá€¸" á€œá€¯á€•á€ºá€„á€”á€ºá€¸á€…á€‰á€ºá€á€½á€„á€º á€…á€‰á€ºá€†á€€á€ºá€™á€•á€¼á€á€ºá€¡á€™á€¼á€á€ºá€¡á€…á€½á€”á€ºá€¸á€žá€±á€á€»á€¬á€…á€±á€›á€”á€º á€œá€±á€¬á€„á€ºá€¸á€€á€…á€¬á€¸á€”á€Šá€ºá€¸á€œá€™á€ºá€¸á€á€…á€ºá€á€¯á€–á€¼á€…á€ºá€žá€Šá€ºá‹',
            },
          ],
          txt3: "á€”á€‚á€«á€¸á€›á€¾á€Šá€ºá€¡á€žá€…á€º-á€¤á€œá€¯á€•á€ºá€†á€±á€¬á€„á€ºá€á€»á€€á€ºá€žá€Šá€º á€”á€‚á€«á€¸á€–á€¼á€á€ºá€™á€œá€¬á€¸ á€žá€­á€¯á€·á€™á€Ÿá€¯á€á€º á€”á€‚á€«á€¸á€œá€­á€¯á€€á€ºá€™á€œá€¬á€¸ á€†á€¯á€¶á€¸á€–á€¼á€á€ºá€›á€”á€º  5 á€€á€¼á€­á€™á€ºá€†á€€á€ºá€á€­á€¯á€€á€º á€‘á€®á€•á€±á€«á€€á€ºá€žá€Šá€·á€ºá€›á€œá€’á€ºá€–á€¼á€„á€·á€º á€¡á€œá€­á€¯á€¡á€œá€»á€±á€¬á€€á€º á€¡á€•á€ºá€’á€­á€á€ºá€œá€¯á€•á€ºá€•á€«á€™á€Šá€ºá‹",
          txt4: "á€™á€­á€™á€­á€™á€¾á€á€ºá€á€™á€ºá€¸-á€™á€­á€™á€­á€‘á€­á€¯á€¸á€€á€¼á€±á€¸á€™á€»á€¬á€¸á€€á€­á€¯á€€á€¼á€Šá€·á€ºá€›á€¾á€¯á€›á€”á€ºá€”á€¾á€„á€·á€º á€›á€œá€’á€ºá€™á€»á€¬á€¸á€€á€­á€¯ á€†á€½á€²á€‘á€¯á€á€ºá€›á€”á€º á€•á€­á€¯á€™á€­á€¯á€œá€½á€šá€ºá€€á€°á€…á€±á€žá€Šá€ºá‹",
        },
        shop: {
          currentPoints: "á€œá€€á€ºá€›á€¾á€­á€•á€½á€­á€¯á€„á€·á€ºá€™á€»á€¬á€¸",
          Redeem: "á€šá€á€¯á€œá€²á€œá€¾á€šá€ºá€•á€«",
          pointsGo:
            "á€•á€½á€­á€¯á€„á€·á€ºá€ˆá€±á€¸á€†á€­á€¯á€„á€º     á€šá€á€¯á€žá€½á€¬á€¸á€•á€«",
          commodityOrder: "á€¡á€±á€¬á€ºá€’á€«",
          pointsRecord: "á€•á€½á€­á€¯á€„á€·á€ºá€…á€¬á€›á€„á€ºá€¸",
          title: "á€•á€½á€­á€¯á€„á€·á€ºá€ˆá€±á€¸á€†á€­á€¯á€„á€º",
          pointsAvailable:
            "á€žá€¯á€¶á€¸á€”á€­á€¯á€„á€ºá€žá€±á€¬á€•á€½á€­á€¯á€„á€·á€º",
          rule: "á€•á€½á€­á€¯á€„á€·á€ºá€…á€Šá€ºá€¸á€™á€»á€¥á€ºá€¸",
          stock: "á€žá€­á€¯á€œá€¾á€±á€¬á€„á€º",
          redeemed: "á€œá€²á€œá€¾á€šá€ºá€•á€¼á€®á€¸",
          integral: "á€•á€½á€­á€¯á€„á€·á€º",
          productName: "á€‘á€¯á€á€ºá€€á€¯á€”á€ºá€¡á€™á€Šá€º",
          exchange: "á€œá€²á€œá€¾á€šá€ºá€¡á€á€»á€€á€ºá€™á€»á€¬á€¸",
          name: "á€•á€‘á€™á€”á€¾á€„á€·á€ºá€”á€±á€¬á€€á€ºá€†á€¯á€¶á€¸á€¡á€™á€Šá€º",
          address: "á€”á€±á€›á€•á€ºá€œá€­á€•á€ºá€…á€¬",
          redeem: "á€†á€€á€ºá€•á€¼á€®á€¸á€œá€²á€œá€¾á€šá€º",
          checkOrder: "á€¡á€±á€¬á€ºá€’á€«á€…á€…á€ºá€†á€±á€¸",
          addressEmpty: "á€œá€­á€•á€ºá€…á€¬á€—á€œá€¬á€™á€–á€¼á€…á€ºá€›",
          ordered: "á€¡á€á€Šá€ºá€•á€¼á€¯á€•á€¼á€®á€¸",
          delivery: "á€•á€±á€¸á€•á€­á€¯á€·á€”á€±á€á€½á€„á€ºá€¸",
          completed: "á€•á€¼á€®á€¸á€•á€«á€•á€¼á€®",
          orderDetails: "á€¡á€±á€¬á€ºá€’á€«á€¡á€žá€±á€¸á€…á€­á€á€º",
          orderTime: "á€¡á€±á€¬á€ºá€’á€«á€¡á€á€»á€­á€”á€º",
          orderStatus: "á€¡á€±á€¬á€ºá€’á€«",
          signTime: "á€á€„á€ºá€•á€¼á€á€»á€­á€”á€º",
          signPhoto: "á€œá€€á€ºá€™á€¾á€á€ºá€“á€¬á€á€ºá€•á€¯á€¶",
        },
        selections: {
          distanceDraw: "á€•á€½á€²á€·á€›á€”á€ºá€€á€»á€”á€ºá€á€»á€­á€”á€º",
          champion: "1st",
          runnerUp: "2nd",
          ndRunner: "3rd",
          outof1: "1/16",
          outof2: "2/16",
          outof3: "3/16",
        },
        lotteryD: {
          rules: "á€€á€…á€¬á€¸á€”á€Šá€ºá€¸",
          LotteryTime: "á€†á€¯á€–á€½á€„á€·á€º",
          seal: "á€á€»á€•á€ºá€•á€­á€á€º",
          stPrize1: "á€•á€‘á€™á€†á€¯",
          stPrize2: "á€’á€¯á€á€­á€šá€†á€¯",
          stPrize3: "á€á€á€­á€šá€†á€¯",
          Finalist: "á€†á€”á€ºá€€á€¬á€á€„á€º",
          consolationprize: "á€”á€¾á€…á€ºá€žá€­á€™á€·á€ºá€†á€¯",
          Doubledisc: "á€”á€¾á€…á€ºá€˜á€€á€ºá€¡á€á€»á€•á€º",
          TraditionalDish: "á€›á€­á€¯á€¸á€›á€¬á€á€»á€•á€º",
          Doubleside: "á€”á€¾á€…á€ºá€˜á€€á€º",
          Choosenumber: "á€”á€¶á€•á€«á€á€ºá€›á€½á€±á€¸",
          FourDigit: "á€‚á€á€”á€ºá€¸4á€œá€¯á€¶á€¸á€›á€½á€¾á€±á€¸",
          FourSlection: "R á€œá€±á€¸á€œá€¯á€¶á€¸á€›á€½á€¾á€±á€¸",
          duplicatenumber: "á€”á€¶á€•á€«á€á€ºá€•á€½á€¬á€¸",
          numberFormat:
            "á€™á€¾á€¬á€¸á€šá€½á€„á€ºá€¸á€žá€±á€¬á€”á€¶á€•á€«á€á€ºá€–á€±á€¬á€ºá€™á€á€º",
          Bigone: "á€žá€”á€ºá€¸á€€á€¼á€®á€¸",
          Smallone: "á€žá€”á€ºá€¸á€„á€šá€º",
          Bothone: "á€žá€”á€ºá€¸á€€á€¼á€®á€¸ + á€žá€”á€ºá€¸á€„á€šá€º",
          Addbet: "á€œá€±á€¬á€„á€ºá€¸á€€á€¼á€±á€¸á€‘á€Šá€·á€º",
          Randomnumber: "á€€á€»á€•á€”á€ºá€¸á€¡á€¯á€•á€ºá€…á€¯á€”á€¶á€•á€«á€á€º",
          Machineselection: "á€…á€€á€ºá€›á€½á€±á€¸á€á€»á€šá€º",
          Enternumber:
            "á€žá€„á€ºá€¡á€œá€­á€¯á€›á€¾á€­á€žá€±á€¬á€”á€¶á€•á€«á€á€ºá€€á€­á€¯á€‘á€Šá€·á€ºá€•á€«",
          Concatenatedcode:
            "á€•á€±á€«á€„á€ºá€¸á€…á€•á€ºá€€á€¯á€’á€º (á€¡á€‘á€¯á€•á€ºá€¡á€¯á€•á€ºá€…á€¯)",
          select1: "2D á€¡á€€á€¯á€”á€ºá€›á€½á€±á€¸",
          select2: "3D á€¡á€€á€¯á€”á€ºá€›á€½á€±á€¸",
          select3: "4D á€¡á€€á€¯á€”á€ºá€›á€½á€±á€¸",
          select4: "2D á€¡á€•á€¼á€¯á€žá€˜á€±á€¬á€€á€¯á€’á€º",
          select5: "2D á€¡á€‘á€°á€¸á€†á€¯",
          select6: "2D á€•á€‘á€™á€†á€¯",
          select7: "2D",
          select8: "3D",
          SeventhPrize: "á€žá€á€¹á€á€™á€†á€¯",
          EighthPrize: "á€¡á€‹á€¹á€Œá€™á€†á€¯",
          positivecode3: "3D á€¡á€•á€¼á€¯á€žá€˜á€±á€¬á€€á€¯á€’á€º",
          SpecialPrize3: "3D á€¡á€‘á€°á€¸á€†á€¯",
          FirstPrize3: "3D á€•á€‘á€™á€†á€¯",
          SixthPrize: "á€†á€Œá€™á€†á€¯",
          positivecode4: "4D á€¡á€•á€¼á€¯á€žá€˜á€±á€¬á€€á€¯á€’á€º",
          SpecialPrize4: "4D á€¡á€‘á€°á€¸á€†á€¯",
          FirstPrize4: "4D á€•á€‘á€™á€†á€¯",
          selectAll: "á€¡á€¬á€¸á€œá€¯á€¶á€¸á€™á€•á€±á€«á€€á€º",
          misses4: "4á€™á€•á€±á€«á€€á€º",
          misses8: "8á€™á€•á€±á€«á€€á€º",
          misses10: "10á€™á€•á€±á€«á€€á€º",
          Enter: "á€›á€­á€¯á€€á€ºá€‘á€Šá€·á€º",
          Compound: "á€•á€¼á€”á€ºá€œá€Šá€ºá€…á€…á€ºá€†á€±á€¸",
          selected: "á€žá€„á€ºá€›á€½á€±á€¸á€á€»á€šá€ºá€‘á€¬á€¸á€žá€±á€¬",
          bet: "á€œá€±á€¬á€„á€ºá€¸á€€á€¼á€±á€¸",
          CN: "á€á€”á€„á€ºá€¹á€‚á€”á€½á€±",
          T2: "á€á€”á€„á€ºá€¹á€œá€¬",
          T3: "á€¡á€„á€ºá€¹á€‚á€«",
          T4: "á€—á€¯á€’á€¹á€“á€Ÿá€°á€¸",
          T5: "á€€á€¼á€¬á€žá€•á€á€±á€¸",
          T6: "á€žá€±á€¬á€€á€¼á€¬",
          T7: "á€…á€”á€±á€”á€±á€·",
          waitingdraw:
            "á€™á€²á€”á€¾á€­á€¯á€€á€ºá€–á€­á€¯á€·á€…á€±á€¬á€„á€·á€ºá€”á€±á€á€šá€ºá‹",
          grandPrize: "á€™á€Ÿá€¬á€†á€¯",
          firstprize: "á€•á€‘á€™á€†á€¯",
          secondprize: "á€’á€¯á€á€­á€šá€†á€¯",
          thirdprize: "á€á€á€­á€šá€†á€¯",
          fourthprize: "á€…á€á€¯á€á€¹á€‘á€†á€¯",
          fifthprize: "á€•á€‰á€¹á€…á€™á€†á€¯",
          sixthprize: "á€†á€‹á€¹á€Œá€™á€†á€¯",
          seventhprize: "á€žá€á€¹á€á€™á€†á€¯",
          eighthprize: "á€¡á€‹á€¹á€Œá€™á€†á€¯",
          northernvietnam:
            "á€—á€®á€šá€€á€ºá€”á€™á€ºá€™á€¼á€±á€¬á€€á€ºá€•á€­á€¯á€„á€ºá€¸",
          southvietnam: "á€á€±á€¬á€„á€ºá€—á€®á€šá€€á€ºá€”á€™á€º",
          vietnamchinese: "á€—á€®á€šá€€á€ºá€”á€™á€º á€á€›á€¯á€á€º",
        },
        finance: {
          title: "á€˜á€±á€¸á€€á€„á€ºá€¸á€žá€Šá€ºá‹",
          titleRes: "á€œá€¯á€¶á€á€¼á€¯á€¶á€žá€±á€¬á€™á€¾á€á€ºá€á€™á€ºá€¸",
          tip1: "á€”á€±á€·á€…á€¥á€ºá€”á€¾á€¯á€”á€ºá€¸á€‘á€¬á€¸",
          tip2: "á€á€„á€ºá€„á€½á€±á€™á€»á€¬á€¸á€€á€­á€¯ á€™á€­á€”á€…á€ºá€á€­á€¯á€„á€ºá€¸ á€á€½á€€á€ºá€á€»á€€á€ºá€žá€Šá€ºá‹",
          shop: "á€•á€½á€­á€¯á€„á€·á€ºá€ˆá€±á€¸á€†á€­á€¯á€„á€º",
          shopTip:
            "á€‡á€­á€™á€ºá€á€¶á€•á€…á€¹á€…á€Šá€ºá€¸á€€á€¼á€®á€¸á€™á€»á€¬á€¸á€€á€­á€¯ á€¡á€á€™á€²á€· á€›á€½á€±á€¸á€”á€¾á€¯á€á€ºá€á€¼á€„á€ºá€¸á‹",
          lumpSum:
            "á€á€…á€ºá€•á€±á€«á€„á€ºá€¸á€á€Šá€ºá€¸á€•á€±á€¸á€žá€±á€¬á€„á€½á€±",
          security: "á€„á€½á€±á€€á€¼á€±á€¸á€œá€¯á€¶á€á€¼á€¯á€¶á€›á€±á€¸",
          transferIn: "á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸",
          transferOut: "á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€‘á€½á€€á€º",
          Every: "á€á€­á€¯á€„á€ºá€¸",
          minute: "á€™á€­á€”á€…á€ºá€á€„á€ºá€„á€½á€±",
          earnings: "á€á€„á€ºá€„á€½á€±á€á€½á€± á€‘á€¯á€á€ºá€•á€±á€¸á€á€šá€ºá‹",
          cumulativeIncome: "á€…á€¯á€†á€±á€¬á€„á€ºá€¸á€„á€½á€±",
          estimatedIncome: "á€á€”á€·á€ºá€™á€¾á€”á€ºá€¸á€á€„á€ºá€„á€½á€±",
          income: "á€á€„á€ºá€„á€½á€±",
          tip3: "á€›á€”á€ºá€•á€¯á€¶á€„á€½á€±á€™á€»á€¬á€¸á€žá€Šá€º á€œá€¯á€¶á€á€¼á€¯á€¶á€•á€¼á€®á€¸ á€œá€¯á€¶á€á€¼á€¯á€¶á€•á€¼á€®á€¸ á€¡á€á€»á€­á€”á€ºá€™á€›á€½á€±á€¸ á€œá€½á€¾á€²á€•á€±á€¸á€”á€­á€¯á€„á€ºá€•á€«á€žá€Šá€ºá‹",
          history: "á€žá€™á€­á€¯á€„á€ºá€¸á€™á€¾á€á€ºá€á€™á€ºá€¸",
          setIncome: "á€¡á€á€¼á€±á€á€»á€á€„á€ºá€„á€½á€±",
          allRecords: "á€™á€¾á€á€ºá€á€™á€ºá€¸á€¡á€¬á€¸á€œá€¯á€¶á€¸",
          amountShare: "á€á€…á€ºá€…á€±á€¬á€„á€ºá€œá€»á€¾á€„á€º á€•á€™á€¬á€",
          enter:
            "á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€•á€™á€¬á€á€€á€­á€¯ á€‘á€Šá€·á€ºá€•á€«á‹",
          availableBalance:
            "á€œá€€á€ºá€€á€»á€”á€ºá€„á€½á€± á€›á€›á€¾á€­á€”á€­á€¯á€„á€ºá€žá€Šá€ºá‹",
          outAmount: "á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€•á€™á€¬á€",
          inAmount: "á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€•á€™á€¬á€",
          all: "á€¡á€¬á€¸á€œá€¯á€¶á€¸",
          balanceAvailable:
            "á€œá€€á€ºá€€á€»á€”á€ºá€„á€½á€± á€™á€œá€¯á€¶á€œá€±á€¬á€€á€ºá€•á€«á‹",
          noIncome: "á€á€„á€ºá€„á€½á€±á€™á€›á€¾á€­á‹",
          noIncomeTip:
            "á€á€„á€ºá€„á€½á€±á€€á€­á€¯ á€œá€±á€¬á€œá€±á€¬á€†á€šá€ºá€œá€½á€¾á€²á€‘á€¬á€¸á€žá€œá€¬á€¸",
        },
        financeRule: {
          title:
            "á€˜á€±á€¸á€€á€„á€ºá€¸á€™á€¾á€¯á€¡á€€á€¼á€±á€¬á€„á€ºá€¸ á€œá€±á€·á€œá€¬á€•á€«á‹",
          Rtip: "á€¡á€”á€Šá€ºá€¸á€†á€¯á€¶á€¸á€•á€¼á€”á€ºá€¡á€™á€ºá€¸á€„á€½á€±áŠ á€”á€±á€·á€…á€¥á€ºá€¡á€á€­á€¯á€¸á€”á€¾á€¯á€”á€ºá€¸",
          Rtip1:
            "á€•á€­á€¯á€€á€ºá€†á€¶á€¡á€­á€á€ºá€œá€€á€ºá€€á€»á€”á€ºá€„á€½á€±á€œá€½á€¾á€²á€•á€¼á€®á€¸á€”á€±á€¬á€€á€ºáŠ",
          Rtip2:
            "á€á€„á€ºá€„á€½á€±á€™á€»á€¬á€¸á€€á€­á€¯ á€™á€­á€”á€…á€ºá€á€­á€¯á€„á€ºá€¸ á€á€½á€€á€ºá€á€»á€€á€ºá€žá€Šá€ºá‹",
          Rtip3:
            "á€¡á€á€„á€ºá€¡á€‘á€½á€€á€ºá€€á€­á€¯ á€’á€¯á€á€­á€šá€¡á€€á€¼á€­á€™á€º á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€žá€Šá€·á€ºá€¡á€á€« á€›á€›á€¾á€­á€„á€½á€±á€™á€»á€¬á€¸á€€á€­á€¯ á€¡á€€á€»á€±á€¡á€œá€Šá€º á€•á€¼á€±á€„á€¼á€­á€™á€ºá€¸á€™á€Šá€ºá€–á€¼á€…á€ºá€•á€¼á€®á€¸ á€”á€±á€¬á€€á€ºá€†á€¯á€¶á€¸á€›á€›á€¾á€­á€„á€½á€±á€™á€»á€¬á€¸á€€á€­á€¯ á€•á€­á€¯á€€á€ºá€†á€¶á€¡á€­á€á€ºá€œá€€á€ºá€€á€»á€”á€ºá€žá€­á€¯á€· á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€•á€±á€¸á€™á€Šá€ºá€–á€¼á€…á€ºá€•á€«á€žá€Šá€ºá‹",
          Rtip4:
            "á€œá€¯á€¶á€á€¼á€¯á€¶á€…á€½á€¬á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€•á€±á€¸á€žá€Šá€·á€º á€•á€­á€¯á€€á€ºá€†á€¶á€¡á€­á€á€ºá€œá€€á€ºá€€á€»á€”á€ºá€€á€­á€¯ á€šá€°á€”á€…á€ºá€™á€»á€¬á€¸á€–á€¼á€„á€·á€º á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€•á€±á€¸á€›á€™á€Šá€ºá€–á€¼á€…á€ºá€žá€Šá€ºá‹",
          Eg: "E.g",
          Rtip5: "á€á€”á€ºá€†á€±á€¬á€„á€ºá€™á€¾á€¯á€á€…á€ºá€á€¯",
          Rtip6:
            "á€™á€­á€á€¹á€á€° á‚ á€…á€±á€¬á€„á€ºá€¡á€–á€¼á€…á€º á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€á€²á€·á€žá€Šá€ºá‹",
          Rtip7: "á€¡á€á€½á€² áá€",
          Rtip8: "á€¡á€á€½á€² á…á€áŠ",
          Rtip9:
            "á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€™á€¾á€¯á€•á€™á€¬á€á€žá€Šá€º 1000 á á€†á€á€­á€¯á€¸á€€á€­á€”á€ºá€¸á€–á€¼á€…á€ºá€›á€•á€«á€™á€Šá€ºá‹",
          Rtip10:
            "á€žá€„á€·á€ºá€á€„á€ºá€„á€½á€±á€€á€­á€¯ á€¡á€¬á€™á€á€¶á€‘á€¬á€¸á€žá€Šá€·á€º á€¡á€á€¼á€±á€¡á€”á€±á€¡á€±á€¬á€€á€ºá€á€½á€„á€ºáŠ á€žá€„á€ºá€žá€Šá€º á€œá€¯á€¶á€á€¼á€¯á€¶á€žá€±á€¬á€œá€€á€ºá€€á€»á€”á€ºá€„á€½á€±á€€á€­á€¯ á€•á€­á€¯á€€á€ºá€†á€¶á€¡á€­á€á€ºáá€œá€€á€ºá€€á€»á€”á€ºá€œá€€á€ºá€€á€»á€”á€ºá€žá€­á€¯á€· á€¡á€á€»á€­á€”á€ºá€™á€›á€½á€±á€¸ á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€”á€­á€¯á€„á€ºá€•á€¼á€®á€¸ á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€žá€Šá€·á€ºá€•á€™á€¬á€á€žá€Šá€º á€™á€­á€á€¹á€á€°á€¡á€›á€±á€¡á€á€½á€€á€ºá á€¡á€†á€™á€»á€¬á€¸á€…á€½á€¬á€–á€¼á€…á€ºá€›á€•á€«á€™á€Šá€ºá‹",
          friendly:
            "á€–á€±á€¬á€ºá€›á€½á€±á€žá€±á€¬á€žá€á€­á€•á€±á€¸á€á€»á€€á€º",
          friendlytxt:
            'á€€á€»á€±á€¸á€‡á€°á€¸á€•á€¼á€¯á á€™á€€á€¼á€¬á€á€ á€¡á€á€„á€ºá€¡á€‘á€½á€€á€º á€™á€œá€½á€¾á€²á€•á€«á€”á€¾á€„á€·á€ºá‹ á€„á€½á€±á€žá€½á€„á€ºá€¸á€•á€¼á€®á€¸á€”á€±á€¬á€€á€º 1 á€™á€­á€”á€…á€ºá€™á€¾ á€›á€›á€¾á€­á€„á€½á€±á€™á€»á€¬á€¸á€€á€­á€¯ á€á€½á€€á€ºá€á€»á€€á€ºá€•á€«á€™á€Šá€ºá‹ á€á€„á€ºá€„á€½á€±á€á€…á€ºá€á€¯á€á€Šá€ºá€¸á á€…á€¯á€†á€±á€¬á€„á€ºá€¸á€„á€½á€±á€•á€™á€¬á€á€žá€Šá€º 0.01 á€‘á€€á€ºá€”á€Šá€ºá€¸á€•á€«á€€ áŽá€„á€ºá€¸á€€á€­á€¯ "á€á€„á€ºá€„á€½á€±á€™á€»á€¬á€¸" á€á€½á€„á€º á€‘á€Šá€·á€ºá€žá€½á€„á€ºá€¸á€™á€Šá€ºá€™á€Ÿá€¯á€á€ºá€•á€«á‹',
          Safety: "á€˜á€±á€¸á€€á€„á€ºá€¸á€›á€±á€¸",
          SafetyTxt:
            "á€œá€¯á€¶á€á€¼á€¯á€¶á€›á€±á€¸á€”á€Šá€ºá€¸á€•á€Šá€¬á€¡á€–á€½á€²á€·á€žá€Šá€º á€žá€„á€·á€ºá€›á€”á€ºá€•á€¯á€¶á€„á€½á€±á€™á€»á€¬á€¸á á€˜á€±á€¸á€€á€„á€ºá€¸á€™á€¾á€¯á€€á€­á€¯ á€žá€±á€á€»á€¬á€…á€±á€žá€Šá€ºá‹",
          SafetyTip:
            "á€žá€„á€·á€ºá€„á€½á€±á€™á€»á€¬á€¸á€€á€­á€¯ á€˜á€±á€¸á€€á€„á€ºá€¸á€…á€±á€›á€”á€ºá€¡á€á€½á€€á€ºáŠ á€žá€„á€·á€ºá€•á€­á€¯á€€á€ºá€†á€¶á€¡á€­á€á€ºá€œá€€á€ºá€€á€»á€”á€ºá€€á€­á€¯ á€˜á€±á€¸á€€á€„á€ºá€¸á€œá€¯á€¶á€á€¼á€¯á€¶á€žá€±á€¬á€”á€±á€›á€¬á€žá€­á€¯á€· á€œá€½á€¾á€²á€•á€¼á€±á€¬á€„á€ºá€¸á€›á€”á€º á€¡á€€á€¼á€¶á€•á€¼á€¯á€¡á€•á€ºá€•á€«á€žá€Šá€ºá‹",
        },
        flight: {
          title: "á€œá€±á€šá€¬á€‰á€ºá€™á€¾á€°á€¸",
          tit: "á€•á€°á€•á€¼á€®á€¸ á€…á€­á€á€ºá€œá€¾á€¯á€•á€ºá€›á€¾á€¬á€¸á€…á€›á€¬",
          sub: "á€™á€­á€¯á€¸á€•á€»á€¶á€á€¯á€”á€ºá€‚á€­á€™á€ºá€¸",
          tip: "á€‚á€­á€™á€ºá€¸á€‘á€²á€€á€­á€¯ á€á€„á€ºá€™á€œá€¬á€¸á‹",
          btn: "á€šá€á€¯á€á€„á€ºá€•á€«á‹",
          gameName: "á€œá€±á€šá€¬á€‰á€ºá€™á€¾á€°á€¸",
          gameTip:
            "á€•á€»á€¶á€žá€”á€ºá€¸á€•á€¼á€®á€¸ á€žá€„á€·á€ºá€¡á€™á€¼á€á€ºá€¡á€…á€½á€”á€ºá€¸á€€á€­á€¯ á€á€­á€¯á€¸á€™á€¼á€¾á€„á€·á€ºá€œá€­á€¯á€€á€ºá€•á€«á‹",
          enterGameName:
            "á€‚á€­á€™á€ºá€¸á€¡á€™á€Šá€ºá€€á€­á€¯ á€‘á€Šá€·á€ºá€žá€½á€„á€ºá€¸á€•á€«á‹",
        },
      },
    };
  },
  b2a5: function (e, a) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAEIUlEQVRoBe1ZzU4bMRB2opYDat6gnMoNilTgDVoegErtuYW34ZJLuAFFlRDQ3ipBJSCPQCWIQGrFifRCRU9ESBxgO99guxOvnWycDQlSRko8Ho89n8d/Y69SASpAfnt7mxSLRauyvLx8zydEn1ZXkVjiEpsjZntzk7PcFDjbjmb+N+yWtMovcaPiD8oF5NfX1rjih4UFTgsFMi0Umd3f2wOQhGuwmvhDjSJXE0LNvk2LskjK5bILwZuntpKgp6ShL1tb6vr6Wn1cXFSZPAjlJjo5OfFCcIWAJCu+0wL2n8NfUf6pVO4dz14aGRlJbm5uWlrRA1mAlzbaKaMlcgA3CAtwhjrY31e/63UWjo2Nqddzc8zLP7JSeGIEbzwKKPtzcaF2d3aMmrIWrMRhMGijo6MsbbLg6Nns1+1tix/CthZsTSgTwUu/pDATX61W3WmTymOs3MZ+ksA3jyDbcJUfLD/fAlUIrSs/86HF0kj5JVZQqVRglA3xYqDMFdEzIp/xKBnNCNS7/ycGYKMaClUyBjLtYaFGIMfa+ry+zpuiT69rA7VaTb2anrbr0TVixmBwXeQidvPGRe8nJyfdsuj83d2dty6MJRMTE0nWc0iuE5rmCY5UtEG/Ja+FoXAgPIANygxUbIod2UsJdsFuCMGtPplSs+is28YlMIKP3uMIsCTLu+b1euBjsyd7UaPRUKVSqUHwS14DJvK2/dOMicRduS9vzgOvAV+FTmXGgA3WOm1A6lcPDlT9/FyKUnz0wJI7k+Ojo1R9soCZlC3sT8ERAmpZvZya4vhWiC1rzgMriGVC8XDXYzA9M6NCsw5gez6LcnNRyLWP08Dp6Sk61HSRSLDV5kUIHMgA7qKW5rGP50G4zVCrvMhs65rBIcGhB0KQTgmhjkaOxoNji0MC+ziu0wZJ1hRXqia3UH5IQw9gTmFeYF5hjsTMraxz0OjBBmzBJmwDQ0eEFcIrjlJeOQhysIpiVl+nqxU2YAs2xapF54ApuHqpjImfEbAnZXkd6RRcrD6w6HgXHQkG1hgu7nWeu3YsaLceMIkR8W53/LQUc7d0jfUqD2xwMv2AlcnEK8igoOktD3lD8knSyFqlz+nZMhSFtarXrkxH01Bj7Jk70K7hhyp3O9B2VT8UsFg7XcfUsYZlvdrxsfpxeBicvlLX5fs+hcylbmZ2lq9HLkA3P3BT6O/lJWN8MT7OKTaLKv2yUt9HAG+533d38UGCn1zREfMZxNcJdwT63gEDEh3BuzFGJPUBzihRiq94mhj7wHTAoGqXuiPw6LdR2QG8eCm8fg0qCWwWpOzANwBfWVkZVPwSG2N1geLiwO/Ieb7I5hXY6Q9xiNeAseUlhy8ziL9RqZ+hNWwDg7gLAFtmwsUhj5d9EwLHpsAQvMRk7s1QsUce+AdjUCHOZiR0fgAAAABJRU5ErkJggg==";
  },
  b443: function (e, a, t) {
    e.exports = {
      homepage: {
        loadText: {
          loadMore: "táº£i thÃªm",
          loading: "Äang táº£i...",
          nomore: "KhÃ´ng cÃ²n ná»¯a",
        },
        loadingText: "Äang táº£i",
        login: "ÄÄƒng nháº­p",
        numberFormat: "Äá»‹nh dáº¡ng sá»‘ Ä‘iá»‡n thoáº¡i",
        mobile: "Äiá»‡n thoáº¡i",
        mobileNumber: "Sá»‘ Ä‘iá»‡n thoáº¡i",
        pwd: "Máº­t kháº©u",
        oldpwd: "Máº­t kháº©u cÅ©",
        pwds: "XÃ¡c nháº­n máº­t kháº©u",
        pwdsTip: "Máº­t kháº©u khÃ´ng nháº¥t quÃ¡n",
        register: "ÄÄƒng kÃ½",
        registerTip: "ÄÃ£ cÃ³ tÃ i khoáº£n, Ä‘Äƒng nháº­p~",
        forgotPwd: "Láº¥y láº¡i máº­t kháº©u",
        customerService: "dá»‹ch vá»¥ khÃ¡ch hÃ ng",
        resetPwd: "Äáº·t láº¡i máº­t kháº©u",
        verificationCode: "MÃ£ xÃ¡c nháº­n",
        recommendationCode: "MÃ£ giá»›i thiá»‡u",
        agree: "TÃ´i Ä‘á»“ng Ã½",
        privacy: "ChÃ­nh sÃ¡ch báº£o máº­t",
        submit: "Táº¡o lá»‡nh",
        network: "Máº¡ng khÃ´ng á»•n Ä‘á»‹nh",
        tips: "Lá»i nháº¯c",
        remark: "Nháº­n xÃ©t",
        close: "ÄÃ³ng",
        full: "toÃ n mÃ n hÃ¬nh",
        zoomOut: "thu nhá»",
        signout: "Báº¡n muá»‘n Ä‘Äƒng xuáº¥t khÃ´ng?",
        quit: "Báº¡n muá»‘n thoÃ¡t ra khá»i game nÃ y?",
        enterGame: "Báº¡n cÃ³ cháº¯c cháº¯n muá»‘n tham gia trÃ² chÆ¡i khÃ´ng?",
        cancel: "Há»§y",
        confirm: "XÃ¡c nháº­n",
        success: "ThÃ nh cÃ´ng",
        cancelled: "ÄÃ£ há»§y",
        fail: "Tháº¥t báº¡i",
        del: "XÃ³a",
        copy: "Sao chÃ©p",
        copySuccess: "sao chÃ©p thÃ nh cÃ´ng",
        required: "Cáº§n thiáº¿t Ä‘iá»n",
        pleaseRequired: "Vui lÃ²ng Ä‘iá»n vÃ o pháº§n Ä‘Æ°á»£c cáº§n thiáº¿t",
        passwordError:
          "Äá»™ dÃ i máº­t kháº©u khÃ´ng Ä‘Æ°á»£c nhá» hÆ¡n 6, pháº£i lÃ  sá»± káº¿t há»£p cá»§a cÃ¡c chá»¯ cÃ¡i vÃ  sá»‘",
        pleaseEmail: "Vui lÃ²ng Ä‘iá»n Ä‘á»‹a chá»‰ email chÃ­nh xÃ¡c",
        informationTip:
          "ThÃ´ng tin Ä‘Äƒng nháº­p cá»§a báº¡n Ä‘Ã£ háº¿t háº¡n, vui lÃ²ng Ä‘Äƒng nháº­p láº¡i",
        informationTip1:
          "TÃ i khoáº£n cá»§a báº¡n Ä‘Ã£ Ä‘Æ°á»£c Ä‘Äƒng nháº­p á»Ÿ nÆ¡i khÃ¡c, vui lÃ²ng thay Ä‘á»•i máº­t kháº©u cá»§a báº¡n ká»‹p thá»i",
        noData: "KhÃ´ng cÃ³ dá»¯ liá»‡u",
        presaleRule:
          'Äá»ƒ báº£o vá»‡ quyá»n - lá»£i Ã­ch há»£p phÃ¡p cá»§a ngÆ°á»i dÃ¹ng tham gia bÃ¡n trÆ°á»›c vÃ  duy trÃ¬ trÃ¬nh tá»± hoáº¡t Ä‘á»™ng bÃ¬nh thÆ°á»ng cá»§a viá»‡c bÃ¡n trÆ°á»›c, cÃ¡c quy táº¯c Ä‘Æ°á»£c xÃ¢y dá»±ng theo hiá»‡p Ä‘á»‹nh phÃ¹ há»£p vá»›i cÃ¡c thá»a thuáº­n vÃ  quy táº¯c liÃªn quan cá»§a luáº­t cÅ©ng nhÆ° quy Ä‘á»‹nh quá»‘c gia. ChÆ°Æ¡ng 1 Äá»‹nh nghÄ©a1.1Äá»‹nh nghÄ©a bÃ¡n trÆ°á»›c: Ä‘á» cáº­p Ä‘áº¿n mÃ´ hÃ¬nh bÃ¡n hÃ ng trong Ä‘Ã³ ngÆ°á»i bÃ¡n cung cáº¥p gÃ³i sáº£n pháº©m hoáº·c dá»‹ch vá»¥ Ä‘á»ƒ thu tháº­p Ä‘Æ¡n Ä‘áº·t hÃ ng cá»§a ngÆ°á»i tiÃªu dÃ¹ng thÃ´ng qua cÃ¡c cÃ´ng cá»¥ sáº£n pháº©m bÃ¡n trÆ°á»›c vÃ  cung cáº¥p hÃ ng hÃ³a, dá»‹ch vá»¥ cho ngÆ°á»i bÃ¡n theo thá»a thuáº­n trÆ°á»›c. 1.2MÃ´ hÃ¬nh bÃ¡n trÆ°á»›c lÃ  mÃ´ hÃ¬nh "KÃ½ gá»­i" . Khoáº£n "KÃ½ gá»­i" Ä‘Æ°á»£c Ä‘á» cáº­p Ä‘áº¿n nhÆ°  má»™t lÆ°á»£ng hÃ ng hÃ³a cá»‘ Ä‘á»‹nh bÃ¡n trÆ°á»›c Ä‘Æ°á»£c Ä‘á»‹nh sáºµn. Khoáº£n "kÃ½ gá»­i" cÃ³ thá»ƒ tham gia cÃ¡c trÃ² chÆ¡i nhá» vÃ  cÃ³ cÆ¡ há»™i giÃ nh Ä‘Æ°á»£c nhiá»u lá»£i nhuáº­n. Khoáº£n tiá»n gá»­i cÃ³ thá»ƒ Ä‘Æ°á»£c trao Ä‘á»•i trá»±c tiáº¿p thÃ nh hÃ ng hÃ³a nhÆ°ng sá»‘ tiá»n kÃ½ gá»­i khÃ´ng Ä‘Æ°á»£c dÃ¹ng Ä‘á»ƒ trao Ä‘á»•i.1.3Sáº£n pháº©m bÃ¡n trÆ°á»›c: LÃ  cÃ¡c sáº£n pháº©m do ngÆ°á»i bÃ¡n cung cáº¥p báº±ng cÃ¡ch sá»­ dá»¥ng cÃ´ng cá»¥ sáº£n pháº©m bÃ¡n trÆ°á»›c, chá»‰ cÃ¡c tá»« bÃ¡n trÆ°á»›c Ä‘Æ°á»£c Ä‘Ã¡nh dáº¥u trÃªn tiÃªu Ä‘á» hoáº·c trÃªn trang chi tiáº¿t sáº£n pháº©m , ngoÃ i ra cÃ¡c sáº£n pháº©m khÃ¡c khÃ´ng sá»­ dá»¥ng cÃ´ng cá»¥ sáº£n pháº©m bÃ¡n trÆ°á»›c khÃ´ng pháº£i lÃ  sáº£n pháº©m bÃ¡n trÆ°á»›c.1.4 Há»‡ thá»‘ng bÃ¡n trÆ°á»›c: Äá» cáº­p Ä‘áº¿n há»‡ thá»‘ng cÃ´ng cá»¥ sáº£n pháº©m Ä‘Æ°á»£c cung cáº¥p Ä‘á»ƒ há»— trá»£ bÃ¡n hÃ ng theo mÃ´ hÃ¬nh bÃ¡n trÆ°á»›c. 1.5GiÃ¡ hÃ ng hÃ³a bÃ¡n trÆ°á»›c: lÃ  giÃ¡ cá»§a hÃ ng hÃ³a trÆ°á»›c khi bÃ¡n. GiÃ¡ cá»§a hÃ ng hÃ³a bÃ¡n trÆ°á»›c bao gá»“m hai pháº§n: giÃ¡ bÃ¡n vÃ  thanh toÃ¡n.',
        more: "HÆ¡n",
        verificationTip:
          "KhÃ´ng nháº­n Ä‘Æ°á»£c mÃ£ OTP ?  Vui lÃ²ng liÃªn há»‡ CSKH",
        symbolU: "USDT",
        newes: "ThÃ´ng bÃ¡o má»›i nháº¥t",
        upgraded: "Sá»± kiá»‡n Ä‘ang Ä‘Æ°á»£c nÃ¢ng cáº¥p......",
        gameTit: "KhÃ´i phá»¥c sá»‘ dÆ° khÃ´ng thÃ nh cÃ´ng",
        gameLeft: "thá»­ láº¡i",
        gameRight: "tÃ¡i cháº¿ thá»§ cÃ´ng",
        tab: {
          hot: "phá»• biáº¿n",
          lottety: "Xá»• sá»‘",
          fishing: "Ä‘Ã¡nh báº¯t cÃ¡",
          electronic: "Slots",
          physical: "Thá»ƒ thao",
          realperson: "SÃ²ng bÃ i",
          chess: "Cá» vua",
          smallgame: "TrÃ² chÆ¡i nhá»",
          safe: "an toÃ n",
        },
        home: {
          lottetyTitle: "RÃºt thÄƒm xá»• sá»‘ lá»›n nháº¥t",
          recharge: "Náº P TIá»€N",
          balance: "Sá»‘ tiá»n",
          customerService: "CSKH trá»±c tuyáº¿n 24/7",
          lottety: "Xá»• sá»‘",
          wealth: "Quáº£n lÃ½ tÃ i chÃ­nh",
          leftTime: "Thá»i gian cÃ²n láº¡i Ä‘á»ƒ mua",
          min: "PhÃºt",
          sec: "GiÃ¢y",
          newTitle: "Tin tá»©c",
          newCenter: "Trung tÃ¢m Tin tá»©c",
          newDes: "Chi tiáº¿t tin tá»©c",
          wrTime: "Thá»i gian cháº¡y trang web",
          days: "NgÃ y",
          hours: "Giá»",
          minutes: "PhÃºt",
          seconds: "GiÃ¢y",
          pengguna: "Sá»‘ lÆ°á»£ng ngÆ°á»i dÃ¹ng",
          jumlahTaruhan: "Sá»‘ láº§n Ä‘áº·t cÆ°á»£c",
          Online: "Sá»‘ ngÆ°á»i trá»±c tuyáº¿n",
          penarikanHari: "Báº¢NG Xáº¾P Háº NG RÃšT TIá»€N",
          gin: "trong",
          got: "CÃ³",
          GameName: "TrÃ² chÆ¡i báº¯n cÃ¡",
          popular: "Khuyáº¿n nghá»‹ phá»• biáº¿n",
          platform: "Äá» xuáº¥t ná»n táº£ng",
          Game1: "5D Lotre",
          Game2: "WIN GO",
          Game3: "Slots",
          Game4: "K3 Lotre",
          Game5: "SÃ²ng bÃ i",
          Game6: "Thá»ƒ thao",
          Game7: "16 lá»±a chá»n",
          Game8: "Quá»‘c gia",
          Game9: "Singapore 4D",
          Game10: "Vietnam Lottery",
          Game11: "Universal 4D",
          Game12: "Malaysia 4D",
          Game13: "hÆ¡n mÆ°á»i nghÃ¬n tá»«",
          Game14: "Tá»‘c Ä‘á»™ 4D",
          Game1Tip: "ÄoÃ¡n sá»‘/lá»›n/nhá»/láº»/cháºµn",
          Game2Tip:
            "ÄoÃ¡n mÃ u xanh lÃ¡ cÃ¢y/tÃ­m/Ä‘á» Ä‘á»ƒ giÃ nh chiáº¿n tháº¯ng",
          Game3Tip: "CÆ°á»£c láº¡i/CÆ°á»£c láº¡i/CÆ°á»£c láº¡i",
          Game4Tip: "ÄoÃ¡n sá»‘/lá»›n/nhá»/láº»/cháºµn",
          Game5Tip: "Baccarat/Rá»“ng há»•/Roulette/TÃ i Xá»‰u",
          Game6Tip: "Sá»± kiá»‡n thá»i gian thá»±c / táº¥t cáº£ trong Ä‘Ã³",
          Game7Tip: "ÄoÃ¡n sá»‘/lá»›n/nhá»/láº»/cháºµn",
          Game8Tip: "Sá»± kiá»‡n thá»i gian thá»±c / táº¥t cáº£ trong Ä‘Ã³",
          Game9Tip: "ÄoÃ¡n sá»‘/lá»›n/nhá»/láº»/cháºµn",
          Game10Tip:
            "ÄoÃ¡n mÃ u xanh lÃ¡ cÃ¢y/tÃ­m/Ä‘á» Ä‘á»ƒ giÃ nh chiáº¿n tháº¯ng",
          Game11Tip: "ÄoÃ¡n sá»‘/lá»›n/nhá»/láº»/cháºµn",
          Game12Tip: "ÄoÃ¡n sá»‘/lá»›n/nhá»/láº»/cháºµn",
          Game13Tip: "ÄoÃ¡n sá»‘/lá»›n/nhá»/láº»/cháºµn",
          Game14Tip: "ÄoÃ¡n sá»‘/lá»›n/nhá»/láº»/cháºµn",
          Game6t: "Sabah",
          nextDraw: "VÃ²ng tiáº¿p theo",
          playNow: "Báº¯t Ä‘áº§u chÆ¡i",
          howWorks: "LÃ m tháº¿ nÃ o Ä‘á»ƒ mua ?",
          game_title1: "Chá»n má»™t trÃ² chÆ¡i",
          game_title2: "Chá»n con sá»‘ may máº¯n cá»§a báº¡n",
          game_title3: "Äáº·t cÆ°á»£c",
          game_title4: "Nháº­n tiá»n thÆ°á»Ÿng",
          game_First: "BÆ°á»›c Ä‘áº§u",
          game_Second: "BÆ°á»›c hai",
          game_Third: "BÆ°á»›c ba",
          game_Fourth: "BÆ°á»›c bá»‘n",
          list: [
            {
              title: "Chá»n má»™t trÃ² chÆ¡i báº¡n yÃªu thÃ­ch",
              txt: "Báº¡n cÃ³ thá»ƒ chá»n chÆ¡i cÃ¡c trÃ² chÆ¡i xá»• sá»‘ 1 phÃºt, 3 phÃºt, 5 phÃºt vÃ  10 phÃºt",
            },
            {
              title: "Chá»n con sá»‘ may máº¯n cá»§a báº¡n",
              txt: "Chá»n con sá»‘ hoáº·c mÃ u sáº¯c may máº¯n cá»§a báº¡n",
            },
            {
              title: "Äáº·t cÆ°á»£c",
              txt: "Chá»n sá»‘ tiá»n báº¡n muá»‘n Ä‘áº·t cÆ°á»£c vÃ  xÃ¡c nháº­nã€‚",
            },
            {
              title: "GiÃ nh giáº£i thÆ°á»Ÿng",
              txt: "Khi báº¡n chá»n con sá»‘ may máº¯n cho ká»³ hiá»‡n táº¡i, há»‡ thá»‘ng sáº½ tá»± Ä‘á»™ng cá»™ng tiá»n thÆ°á»Ÿng vÃ o sá»‘ dÆ° cá»§a báº¡n",
            },
          ],
        },
        index: {
          Charttren: "Biá»ƒu Ä‘á»“ trÃªn",
          Total: "Tá»•ng",
          walletBalance: "Sá»‘ dÆ° vÃ­ tiá»n",
          recharge: "Náº P TIá»€N",
          withdraw: "RÃšT TIá»€N",
          lotteyRule: "Quy táº¯c",
          iKnow: "TÃ´i biáº¿t",
          big: "Lá»›n",
          small: "Nhá»",
          green: "Xanh",
          violet: "TÃ­m",
          red: "Äá»",
          selectGreen: "Chá»n mÃ u xanh",
          selectViolet: "Chá»n mÃ u tÃ­m",
          selectRed: "Chá»n mÃ u Ä‘á»",
          randomBetting: "ngáº«u nhiÃªn",
          gameRecord: "Lá»‹ch sá»­ trÃ² chÆ¡i",
          myGameRecord: "Lá»‹ch sá»­ cá»§a tÃ´i",
          period: "Ká»³ xá»•",
          blockHeight: "Khá»‘i",
          blockTime: "Thá»i gian cháº·n",
          hashValue: "GiÃ¡ trá»‹ bÄƒm",
          number: "Sá»‘ lÆ°á»£ng",
          size: "Lá»›n Nhá»",
          color: "MÃ u sáº¯c",
          result: "Káº¿t quáº£",
          sum: "Tá»•ng",
          high: "Lá»›n",
          low: "Nhá»",
          odd: "láº»",
          even: "cháºµn",
          money: "Sá»‘ tiá»n",
          multiply: "Sá»‘ lÆ°á»£ng",
          presaleRule: "Quy táº¯c bÃ¡n trÆ°á»›c",
          presaleRuleTit:
            "Vui lÃ²ng kiá»ƒm tra tÃ´i Ä‘Ã£ Ä‘á»“ng Ã½ quy táº¯c bÃ¡n trÆ°á»›c",
          totalPrice: "Tá»•ng tiá»n",
          Select: "Chá»n",
          SelectCon: "Ná»™i dung cÃ¡ cÆ°á»£c",
          firstPage: "ÄÃ£ lÃ  trang Ä‘áº§u tiÃªn",
          lastpage: "ÄÃ£ lÃ  trang cuá»‘i",
          periodDetail: "Chi tiáº¿t",
          orderNumber: "MÃ£ Ä‘Æ¡n hÃ ng",
          contractMoney: "Sá»‘ tiá»n mua",
          contractCount: "Sá»‘ lÆ°á»£ng mua",
          delivery: "Sá»‘ tiá»n sau thuáº¿",
          fee: "Thuáº¿",
          openPrice: "GiÃ¡ má»Ÿ cá»­a",
          status: "Trang thÃ¡i",
          amount: "Tháº¯ng thua",
          createTime: "Thá»i gian mua",
          BettingAssistant: "Há»— trá»£ cÃ¡ cÆ°á»£c (100 ká»³ trÆ°á»›c)",
          Missing: "Sá»‘ ká»³ chÆ°a xá»•",
          AvgMissing: "BÃ¬nh quÃ¢n sá»‘ ká»³ ",
          Frequency: "Táº§n sá»‘ xuáº¥t hiá»‡n",
          MaxContinued: "Láº§n xá»• liÃªn tiáº¿p",
          PleaseInteger: "Vui lÃ²ng nháº­p má»™t sá»‘ nguyÃªn",
          Odds: "Tá»· lá»‡ cÆ°á»£c",
          publicQuery: "TÃ¬m kiáº¿m chuá»—i khá»‘i",
          howPlay: "CÃ¡ch chÆ¡i",
          distancedraw: "Khoáº£ng cÃ¡ch má»Ÿ thÆ°á»Ÿng",
          multiple: "Bá»™i sá»‘",
          numberBets: "Sá»‘ láº§n cÆ°á»£c",
          reset: "CÃ i láº¡i",
          time: "Thá»i gian",
          lotteryTime: "Thá»i gian má»Ÿ thÆ°á»Ÿng",
          notPressed: "KhÃ´ng TrÃºng thÆ°á»Ÿng",
          pressed: "TrÃºng thÆ°á»Ÿng",
          bedrawn: "Äá»£i má»Ÿ thÆ°á»Ÿng",
          awarding: "Äang má»Ÿ thÆ°á»Ÿng",
          periodNmu: "sá»‘ ká»³ cÃ¡ cÆ°á»£c",
          lotteryNmu: "sá»‘ xá»• sá»‘",
        },
        myProfile: {
          title: "Trang cÃ¡ nhÃ¢n ",
          profilePhoto: "HÃ¬nh Ä‘áº¡i diá»‡n",
          nickname: "TÃªn ngÆ°á»i dÃ¹ng",
          modifyNickname: "Thay Ä‘á»•i tÃªn ngÆ°á»i dÃ¹ng",
          newNicknameTit: "Vui lÃ²ng nháº­p tÃªn",
        },
        about: {
          title: "Vá» chÃºng tÃ´i",
          Games: "TrÃ² chÆ¡i",
          privacypolicy: "ChÃ­nh sÃ¡ch báº£o máº­t",
          disclosureagreement: "Thá»a thuáº­n tiáº¿t lá»™ rá»§i ro",
        },
        privacypolicy: {
          title: "ChÃ­nh sÃ¡ch báº£o máº­t",
          agree: "Thá»a thuáº­n tiáº¿t lá»™ rá»§i ro",
        },
        keFuMenu: { title: "KhÃ¡ch hÃ ng" },
        recharge: {
          title: "Náº P TIá»€N",
          selectRecharge: "Vui lÃ²ng chá»n phÆ°Æ¡ng thá»©c náº¡p tiá»n ",
          next: "Káº¿ tiáº¿p",
          previous: "TrÆ°á»›c",
          rechargeAmount: "Sá»‘ tiá»n náº¡p",
          rechargeAmountRangeIpt: "Pháº¡m vi sá»‘ tiá»n náº¡p",
          rechargeAmountRange: "Pháº¡m vi sá»‘ tiá»n náº¡p",
        },
        rechargeChack: {
          title: "Náº P TIá»€N",
          totalAmouunt: "Tá»•ng tiá»n ",
          paymentMethod: "PhÆ°Æ¡ng thá»©c thanh toÃ¡n",
          localBank: "NGÃ‚N HÃ€NG Äá»ŠA PHÆ¯Æ NG",
          enterAmount: "Vui lÃ²ng nháº­p sá»‘ tiá»n",
          theAmount:
            "Cá»•ng thanh toÃ¡n CHUYá»‚N KHOáº¢N NHANH Æ°u Ä‘Ã£i táº·ng thÃªm 1% trÃªn má»—i khoáº£n náº¡p",
          theAmount1:
            "LÆ°u Ã½ : Pháº£i náº¡p Ä‘Ãºng sá»‘ tiá»n lá»‡nh Ä‘Ã£ táº¡o há»‡ thá»‘ng sáº½ tá»± Ä‘á»™ng cáº­p nháº­t tiá»n thÆ°á»Ÿng",
          accountName: "TÃªn chá»§ tÃ i khoáº£n",
          bankNumber: "Sá»‘ tÃ i khoáº£n",
          bankName: "NgÃ¢n hÃ ng",
          paymentAmount: "Sá»‘ tiá»n thÃ nh toÃ¡n",
          orderNumber: "MÃ£ Ä‘Æ¡n hÃ ng ",
          creationTime: "Thá»i gian thanh toÃ¡n cÃ²n láº¡i",
          transferAmount:
            "Sá»‘ tiá»n chuyá»ƒn pháº£i Ä‘iá»n Ä‘Ãºng vá»›i lá»‡nh báº¡n Ä‘Ã£ táº¡o, náº¿u khÃ´ng sáº½ khÃ´ng Ä‘Æ°á»£c cáº­p nháº­t tiá»n thÃ nh cÃ´ng",
          transferAmount2:
            "Náº¿u quÃ½ khÃ¡ch chuyá»ƒn sai sá»‘ tiá»n Ä‘Ã£ táº¡o lá»‡nh , khoáº£n tiá»n bá»‹ tháº¥t thoÃ¡t cÃ´ng ty chÃºng tÃ´i sáº½ khÃ´ng chá»‹u trÃ¡ch nhiá»‡m !",
          transferAmount1:
            "LÆ°u Ã½ : KhÃ´ng há»§y bá» lá»‡nh náº¡p náº¿u Ä‘Ã£ chuyá»ƒn tiá»n hoÃ n táº¥t",
          depositAmount: "Sá»‘ tiá»n Ä‘áº·t cá»c",
          upImgTitle: "Vui lÃ²ng táº£i lÃªn cÃ¡c giao dá»‹ch bao gá»“m UTR",
          upFormate: "Chá»‰ táº£i áº£nh lÃªn á»Ÿ Ä‘á»‹nh dáº¡ng jpg, jpeg, png",
          selectFile: "Chá»n tá»‡p táº£i lÃªn",
        },
        touchngo: {
          title: "Touch N Go Náº P TIá»€N",
          name: "TÃªn",
          mobileNumber: "Sá»‘ Ä‘iá»‡n thoáº¡i",
        },
        rechargeRecord: {
          title: "Lá»‹ch sá»­ náº¡p tiá»n",
          unpaid: "ChÆ°a thanh toÃ¡n",
          eazyPay: "å·¥èµ„",
          success: "ThÃ nh cÃ´ng",
          others: "KhÃ¡c",
        },
        paymentMethod: {
          title: "PhÆ°Æ¡ng thá»©c thanh toÃ¡n",
          totalPaid: "Tá»•ng sá»‘ tiá»n pháº£i thanh toÃ¡n",
          choose: "Chá»n má»™t tháº» ngÃ¢n hÃ ng",
          payNow: "Chuyá»ƒn khoáº£n nhanh",
          topInstructions: "HÆ°á»›ng dáº«n náº¡p tiá»n",
          contentTmp1:
            "Vui lÃ²ng chuyá»ƒn Ä‘áº¿n tÃ i khoáº£n ngÃ¢n hÃ ng nháº­n á»Ÿ trÃªn",
          contentTmp2:
            "Vui lÃ²ng Ä‘iá»n chÃ­nh xÃ¡c Há» vÃ  tÃªn vÃ  sá»‘ tÃ i khoáº£n chá»§ tháº»",
          contentTmp3:
            "Má»—i láº§n chuyá»ƒn khoáº£n má»™t láº§n duy nháº¥t , vui lÃ²ng khÃ´ng táº¡o nhiá»u lá»‡nh",
          contentTmp4:
            "Vui lÃ²ng Ä‘áº£m báº£o báº¡n Ä‘Ã£ chuyá»ƒn khoáº£n hoÃ n táº¥t, náº¿u khÃ´ng chÃºng tÃ´i sáº½ khÃ´ng thá»ƒ kiá»ƒm tra thanh toÃ¡n cá»§a báº¡n ká»‹p thá»i Sau khi chuyá»ƒn tiá»n thÃ nh cÃ´ng nhá»› chá»¥p láº¡i mÃ n hÃ¬nh nhÃ© !",
          waitingPayment: "Äang chá» thanh toÃ¡n",
          receivingTitle: "ThÃ´ng tin tháº» ngÃ¢n hÃ ng ngÆ°á»i nháº­n",
          confirm1: "MÃ£ Ä‘Æ¡n hÃ ng",
          confirm2: "TÃªn ngÃ¢n hÃ ng",
          confirm3: "TÃªn chá»§ tháº» ",
          confirm4: "Sá»‘ tÃ i khoáº£n",
          confirm5: "IFSC",
          confirm6: "Chi nhÃ¡nh",
          Required: "Fill in Ref No",
          Return: "Trá»Ÿ vá»",
        },
        promotion: {
          title: "Quáº£ng cÃ¡o",
          bouns: "ThÆ°á»Ÿng",
          level_1: "Cáº¥p 1",
          level_2: "Cáº¥p 2",
          totalPeople: "Tá»•ng sá»‘ ngÆ°á»i",
          contribution: "Doanh thu quáº£ng cÃ¡o",
          code: "MÃ£ giá»›i thiá»‡u cá»§a tÃ´i",
          link: "Link giá»›i thiá»‡u",
        },
        promoteRecord: { title: "Promote Record", People: "Má»i ngÆ°á»i" },
        bonusrecord: { title: "Lá»‹ch sá»­ giá»›i thiá»‡u" },
        redenvelopes: {
          title: "QÃ¹a táº·ng",
          Hello: "ChÃ o báº¡n",
          Eveverone: "Má»—i má»™t cÃ¡i",
          des: "TÃ´i cÃ³ mÃ³n quÃ  táº·ng báº¡n",
          giftCode: "MÃ£ quÃ  táº·ng",
          PleaseGiftCode: "Vui lÃ²ng nháº­p mÃ£ quÃ  táº·ng",
          Receive: "Nháº­n Ä‘Æ°á»£c quÃ  ",
          Best: "ChÃºc báº¡n may máº¯n",
          Congratulations: "Xin chÃºc má»«ng báº¡n",
          already: "Báº¡n Ä‘Ã£ nháº­n Ä‘Æ°á»£c quÃ ",
          ACCEPT: "Nháº­n thÆ°á»Ÿng",
        },
        withdrawal: {
          title: "RÃšT TIá»€N",
          balance: "Sá»‘ tiá»n",
          enterwithdraw: "Vui lÃ²ng nháº­p sá»‘ tiá»n rÃºt",
          withdrawAamount: "Sá»‘ tiá»n rÃºt",
          fee: "Thuáº¿ ",
          toAccount: "Sá»‘ tiá»n sau thuáº¿",
          rate: "Lá»‡ phÃ­",
          totalBet: "Tá»•ng tiá»n cÆ°á»£c",
          withdrawTime: "Thá»i gian rÃºt tiá»n",
          dailyWithdrawal: "Sá»‘ láº§n rÃºt tiá»n ",
          withdrawMoney: "Pháº¡m vi sá»‘ tiá»n rÃºt",
          payout: "PhÆ°Æ¡ng thá»©c thanh toÃ¡n",
          bankCard: "Tháº» ngÃ¢n hÃ ng",
          selectBank: "Chá»n vÃ o tháº» ngÃ¢n hÃ ng Ä‘Ã£ liÃªn káº¿t",
          addBankCard: "ThÃªm tháº» ngÃ¢n hÃ ng",
          rechargeTip1: "Vui lÃ²ng nháº­p sá»‘ tiá»n rÃºt",
          rechargeTip2: "Vui lÃ²ng chá»n tháº» ngÃ¢n hÃ ng ",
          rechargeTip3: "Vui lÃ²ng nháº­p máº­t kháº©u",
          select: "Chá»n",
          add: "ThÃªm vÃ o",
        },
        withdrawrecord: {
          title: "Lá»‹ch sá»­ rÃºt tiá»n",
          applying: "Äang yÃªu cáº§u",
          agree: "Äá»“ng Ã½",
          refuse: "Tá»« chá»‘i",
        },
        mission: {
          title: "Má»i báº¡n bÃ¨",
          totalPeople: "Tá»•ng sá»‘ ngÆ°á»i",
          totalAmount: "Tá»•ng tiá»n thÆ°á»Ÿng",
          myTask: "Vá» tÃ´i",
          invited: "Má»i",
          validMenmber: "Doanh thu thÃ nh viÃªn",
          receive: "LÃ£nh",
        },
        addbank: {
          title: "ThÃªm tháº» ngÃ¢n hÃ ng",
          bankName: "TÃªn ngÃ¢n hÃ ng",
          beneficiaryName: "TÃªn chá»§ tÃ i khoáº£n",
          accountNo: "Sá»‘ tÃ i khoáº£n",
          bankCity: "ThÃ nh phá»‘",
          IFSCCode: "IFSC Cord",
          email: "Email",
          bankProvince: "Tá»‰nh",
          bankBranch: "Chi nhÃ¡nh",
          addBtn: "ThÃªm tháº» ngÃ¢n hÃ ng",
          opsionalbankProvince: "Tá»‰nh",
          opsionalbankBranch: "Chi nhÃ¡nh",
        },
        addElcbank: {
          title: "ThÃªm vÃ­ Ä‘iá»‡n tá»­",
          addBtn: "ThÃªm vÃ­ Ä‘iá»‡n tá»­",
          mobile:
            "Vui lÃ²ng nháº­p sá»‘ Ä‘iá»‡n thoáº¡i di Ä‘á»™ng vÃ­ Ä‘iá»‡n tá»­ cá»§a báº¡n",
        },
        addUsdt: {
          title: "TÄƒng USDT",
          addBtn: "TÄƒng USDT",
          type: "Loáº¡i USDT",
          address: "Äá»‹a chá»‰ vÃ­",
          tip: "Lá»—i Ä‘á»‹nh dáº¡ng Ä‘á»‹a chá»‰ USDT",
          txt: "Äá»‹nh dáº¡ng Ä‘á»‹a chá»‰ USDT (TRC). Äá»‹a chá»‰ bao gá»“m 34 kÃ½ tá»± báº¯t Ä‘áº§u báº±ng chá»¯ T.",
          txt1: "Äá»‹nh dáº¡ng Ä‘á»‹a chá»‰ USDT (ERC). Äá»‹a chá»‰ bao gá»“m 42 kÃ½ tá»± báº¯t Ä‘áº§u báº±ng cÃ¡c chá»¯ cÃ¡i 0x.",
        },
        wellet: {
          title: "VÃ­ tiá»n",
          withdrawalBalance: "Sá»‘ dÆ° cá»§a tÃ´i",
          historicalWithdrawal: "Lá»‹ch sá»­ giao dá»‹ch",
          accumulatedWithdrawal: "RÃºt tiá»n tÃ­ch lÅ©y",
          everyDay: "Háº±ng ngÃ y",
          order: "láº§n",
          tip: "CÆ¡ há»™i rÃºt tiá»n miá»…n phÃ­ vÃ o tháº» ngÃ¢n hÃ ng rÃ ng buá»™c cá»§a báº¡n",
          myCard: "Tháº» ngÃ¢n hÃ ng cá»§a tÃ´i",
          rechargeRecord: "Lá»‹ch sá»­ náº¡p tiá»n",
          withdrawRecord: "Lá»‹ch sá»­ rÃºt tiá»n",
        },
        transactionrecord: { title: "Lá»‹ch sá»­ giao dá»‹ch" },
        newtutorial: {
          title: "HÆ°á»›ng dáº«n cho ngÆ°á»i má»›i báº¯t Ä‘áº§u",
          chooseYour: "Sá»± lá»±a chá»n cá»§a báº¡n",
          favoriteGame: "TrÃ² chÆ¡i yÃªu thÃ­ch",
          pickLucky: "Chá»n may máº¯n cá»§a báº¡n",
          numberColor: "Chá»n con sá»‘ hoáº·c mÃ u sáº¯c may máº¯n cá»§a báº¡n",
          SKIP: "Bá» qua",
          NEXT: "Káº¿ tiáº¿p",
          confirmAmount: "XÃ¡c nháº­n Ä‘Æ¡n cÆ°á»£c cá»§a báº¡n",
          getBouns: "Nháº­n Ä‘Æ°á»£c ",
          moneyWill:
            "Sau khi tháº¯ng vÃ²ng nÃ y, tiá»n sáº½ Ä‘Æ°á»£c cá»™ng vÃ o tÃ i khoáº£n game cá»§a báº¡n",
          youRecharge: "Báº¡n cÃ³ thá»ƒ náº¡p tiá»n ",
          withdrawHere: "Hoáº·c á»Ÿ Ä‘Ã¢y Ä‘á»ƒ rÃºt tiá»n",
        },
        download: {
          title: "Táº£i",
          name: "",
          goBtn: "Táº£ixuá»‘ng",
          des: "Má»™t ná»n táº£ng trÃ² chÆ¡i xá»• sá»‘ chuyÃªn nghiá»‡p",
          playNow: "Báº¯t Ä‘áº§u chÆ¡i",
          lotteryGame: "TrÃ² chÆ¡i xá»• sá»‘",
          btn: "Táº£i ngay",
        },
        tabbar: {
          tabbarList: [
            {
              id: 1,
              name: "TRANG CHá»¦",
              imgAction: t("07d4"),
              img: t("2288"),
              to: "/home",
            },
            {
              id: 2,
              name: "Hoáº¡t Ä‘á»™ng",
              imgAction: t("b5ef"),
              img: t("5b0e"),
              to: "/activity",
            },
            {
              id: 3,
              name: "TIáº¾P THá»Š",
              imgAction: t("7268"),
              img: t("7268"),
              to: "/promotion",
            },
            {
              id: 4,
              name: "VÃ TIá»€N",
              imgAction: t("4c6e"),
              img: t("b2a5"),
              to: "/wallet",
            },
            {
              id: 5,
              name: "TÃ”I",
              imgAction: t("e636"),
              img: t("6c7c"),
              to: "/mian",
            },
          ],
        },
        mian: {
          title: "TÃ”I",
          historical: "Lá»ŠCH Sá»¬ CÆ¯á»¢C",
          funding: "Lá»ŠCH Sá»¬ GIAO Dá»ŠCH",
          loginLog: "NHáº¬T KÃ ÄÄ‚NG NHáº¬P",
          message: "TIN Tá»¨C",
          balance: "Táº¥t cáº£ cÃ¡c vÃ­",
          totalwallet: "tá»•ng sá»‘ vÃ­",
          refreshwallet: "CHUYá»‚N Vá»€ VÃ",
          loginOut: "ÄÄ‚NG XUáº¤T",
          menuName1: "Báº¢O Máº¬T AN TOÃ€N",
          menuName2: "Google Authenticator",
          menuName3: "MÃƒ TIáº¾P THá»Š",
          menuName4: "LÃŒ XÃŒ",
          menuName5: "HÆ°á»›ng dáº«n cho ngÆ°á»i má»›i báº¯t Ä‘áº§u",
          menuName6: "Vá»€ CHÃšNG TÃ”I",
          menuName7: "CSKH trá»±c tuyáº¿n 24/7",
        },
        checkIn: {
          title: "ÄIá»‚M DANH",
          attendanceRules: "Quy táº¯c Ä‘iá»ƒm danh ",
          txt: "ÄÃ£ kÃ½ ngÃ y hÃ´m nay",
          rule: "Luáº­t chÆ¡i",
          record: "Há»“ sÆ¡ Ä‘Äƒng kÃ½",
          today: "ÄÃ£ kÃ½ ngÃ y hÃ´m nay",
          received: "Nháº­n",
          day: "NgÃ y",
          btn: "ÄIá»‚M DANH",
          Receive: "Nháº­n Ä‘Æ°á»£c quÃ  ",
          Best: "ChÃºc báº¡n may máº¯n",
          Congratulations: "Xin chÃºc má»«ng báº¡n",
          already: "Báº¡n Ä‘Ã£ nháº­n Ä‘Æ°á»£c quÃ ",
          ACCEPT: "Nháº­n thÆ°á»Ÿng",
        },
        checkInDes: {
          title: "Quy táº¯c Ä‘iá»ƒm danh ",
          checkInDay: "NgÃ y Ä‘Äƒng nháº­p",
          accumulatedAmount: "Sá»‘ tiá»n tÃ­ch lÅ©y",
          checkInBonus: "Pháº§n thÆ°á»Ÿng Ä‘iá»ƒm danh",
          rulesDetails: "Chi tiáº¿t quy táº¯c",
          tep1: "LiÃªn tá»¥c Ä‘iá»ƒm danh , khÃ´ng giÃ¡n Ä‘oáº¡n;",
          tep2: "Trong thá»i gian hoáº¡t Ä‘á»™ng, vui lÃ²ng má»—i ngÃ y kiá»ƒm tra 1 láº§n;",
          tep3: "NgÆ°á»i chÆ¡i khÃ´ng cÃ³ lá»‹ch sá»­ náº¡p tiá»n sáº½ khÃ´ng thá»ƒ nháº­n thÆ°á»Ÿng",
          tep4: "Tá»« ngÃ y thá»© 1 trá»Ÿ Ä‘i , cáº§n pháº£i Ä‘Ã¡p á»©ng Ä‘á»§ Ä‘iá»u kiá»‡n náº¡p tiá»n",
          tep5: "Ná»n táº£ng cÃ³ quyá»n cuá»‘i cÃ¹ng Ä‘á»ƒ giáº£i thÃ­ch hoáº¡t Ä‘á»™ng nÃ y. Náº¿u báº¡n cÃ³ báº¥t ká»³ cÃ¢u há»i liÃªn quan, vui lÃ²ng liÃªn há»‡ vá»›i bá»™ pháº­n chÄƒm sÃ³c khÃ¡ch hÃ ng",
        },
        historicalBetting: { title: "LiÌ£ch sÆ°Ì‰ Ä‘ÄƒÌ£t cÆ°Æ¡Ì£c" },
        loginLog: { title: "Nháº­t kÃ½ Ä‘Äƒng nháº­p" },
        messageCenter: {
          title: "Trung tÃ¢m tin tá»©c",
          readAll: "Äá»c táº¥t cáº£",
          removeAll: "XÃ³a táº¥t cáº£",
          delTitle: "Báº¡n cÃ³ cháº¯c cháº¯n muá»‘n xÃ³a ",
          delall: "Báº¡n cÃ³ cháº¯c cháº¯n muá»‘n xÃ³a táº¥t cáº£ ?",
          readall: "Báº¡n cháº¯c cháº¯n muá»‘n xem láº¡i táº¥t cáº£",
        },
        messageDes: { title: "ThÃ´ng tin chi tiáº¿t" },
        lottery: {
          drawResult: "Káº¿t quáº£ má»Ÿ thÆ°á»Ÿng",
          period: "Ká»³ xá»•",
          money: "Sá»‘ tiá»n",
          multiply: "Sá»‘ lÆ°á»£ng",
          totalPrice: "Tá»•ng sá»‘ tiá»n",
          pleaseBet: "Má»i Ä‘áº·t cÆ°á»£c",
          election: "Chá»n ngÆ°á»£c",
        },
        colorLand: {
          tab1: "Tá»•ng sá»‘",
          tab2: "2 sá»‘ trÃ¹ng",
          tab3: "3 sá»‘ trÃ¹ng",
          tab4: "KhÃ¡c sá»‘",
          title1: "Chá»n 2 sá»‘ phÃ¹ há»£p",
          tip1: "*Náº¿u sá»‘ má»Ÿ thÆ°á»Ÿng trÃ¹ng vá»›i 2 sá»‘ Ä‘áº·t cÆ°á»£c thÃ¬ sáº½ trÃºng thÆ°á»Ÿng. (Trá»« ba sá»‘ giá»‘ng nhau).",
          title2: "Chá»n má»™t cáº·p sá»‘ duy nháº¥t",
          tip2: "*Chá»n Ã­t nháº¥t 1 cáº·p sá»‘ giá»‘ng nhau vÃ  1 sá»‘ khÃ¡c nhau Ä‘á»ƒ Ä‘áº·t cÆ°á»£c, náº¿u káº¿t quáº£ má»Ÿ thÆ°á»Ÿng trÃ¹ng vá»›i cÃ¡c con sá»‘ Ä‘áº·t cÆ°á»£c thÃ¬ sáº½ trÃºng thÆ°á»Ÿng.",
          title3: "Chá»n 3 sá»‘ duy nháº¥t",
          tip3: "* Náº¿u káº¿t quáº£ má»Ÿ thÆ°á»Ÿng trÃ¹ng vá»›i 3 sá»‘ Ä‘áº·t cÆ°á»£c, báº¡n sáº½ trÃºng thÆ°á»Ÿng.",
          title4: "Chá»n 3 sá»‘ giá»‘ng nhau",
          tip4: "*Náº¿u cÃ¡c con sá»‘ má»Ÿ thÆ°á»Ÿng lÃ   ba con sá»‘ giá»‘ng nhau  báº¥t ká»³, báº¡n sáº½ trÃºng thÆ°á»Ÿng.",
          title5: "Chá»n 3 sá»‘ khÃ¡c nhau",
          tip5: "*Chá»n 3 sá»‘ trá»Ÿ lÃªn, Ba sá»‘ trong káº¿t quáº£ má»Ÿ thÆ°á»Ÿng lÃ  cÃ¡c sá»‘ khÃ¡c nhau, náº¿u trÃ¹ng vá»›i sá»‘ Ä‘Ã£ chá»n thÃ¬ sáº½ trÃºng thÆ°á»Ÿng.",
          title6: "Chá»n 3 sá»‘ liÃªn tiáº¿p",
          tip6: "*Náº¿u cÃ¡c con sá»‘  má»Ÿ thÆ°á»Ÿng lÃ  ba sá»‘ liÃªn tiáº¿p báº¥t ká»³ thÃ¬ trÃºng thÆ°á»Ÿng.",
          title7: "Chá»n 2 sá»‘ khÃ¡c nhau",
          tip7: "*Chá»n tá»« 2 sá»‘ trá»Ÿ lÃªn, hai sá»‘ trong káº¿t quáº£ má»Ÿ thÆ°á»Ÿng lÃ  hai sá»‘ khÃ¡c nhau, trÃ¹ng vá»›i sá»‘ Ä‘Ã£ chá»n thÃ¬ trÃºng thÆ°á»Ÿng.",
          selectCon1: "Chá»n 2 sá»‘ phÃ¹ há»£pï¼š",
          selectCon2: "Chá»n má»™t cáº·p sá»‘ duy nháº¥tï¼š",
          selectCon3: "Chá»n 3 sá»‘ duy nháº¥tï¼š",
          selectCon4: "Chá»n 3 sá»‘ khÃ¡c nhauï¼š",
          selectCon5: "Chá»n 2 sá»‘ khÃ¡c nhauï¼š",
          gameType1: "3 sá»‘ khÃ¡c",
          gameType2: "3 sá»‘ liÃªn",
          gameType3: "2 sá»‘ trÃ¹ng",
          gameType4: "3 sá»‘ trÃ¹ng",
        },
        activity: { title: "Sá»± kiá»‡n" },
        activityDes: { title: "Chi tiáº¿t sá»± kiá»‡n" },
        usdt: {
          title: "Náº P TIá»€N USDT",
          address: "Äá»‹a chá»‰ vÃ­ USDT",
          Raddress: "Ä‘á»‹a chá»‰ náº¡p tiá»n",
          QRcode: "mÃ£ QR",
          tit1: "mua tiá»n tá»‡",
          tit2: "chuyá»ƒn Ä‘áº¿n Ä‘á»‹a chá»‰",
          tit3: "ÄÃ³ng dáº¥u giao dá»‹ch",
          tit4: "Ä‘á»£i cho Ä‘áº¿n",
          tip1: "1. Äá»‹a chá»‰ náº¡p tiá»n Ä‘Æ°á»£c thay Ä‘á»•i theo thá»i gian thá»±c, vui lÃ²ng khÃ´ng lÆ°u Ä‘á»‹a chá»‰ náº¡p tiá»n, vui lÃ²ng láº¥y láº¡i Ä‘á»‹a chá»‰ náº¡p tiá»n trÆ°á»›c má»—i láº§n náº¡p tiá»n Ä‘á»ƒ trÃ¡nh tháº¥t thoÃ¡t tiá»n ká»¹ thuáº­t sá»‘. ",
          tip2: "2. Sau khi sao chÃ©p Ä‘á»‹a chá»‰ náº¡p tiá»n, vui lÃ²ng vÃ o vÃ­ tiá»n ká»¹ thuáº­t sá»‘ Ä‘ang sá»­ dá»¥ng Ä‘á»ƒ rÃºt vÃ  chuyá»ƒn tiá»n, khÃ´ng nÃªn náº¡p tiá»n vÃ o cÃ¡c tÃ i sáº£n ká»¹ thuáº­t sá»‘ khÃ¡c vá»›i cÃ¡c tÃ i sáº£n trong blockchain Ä‘Ã£ chá»n, náº¿u khÃ´ng sáº½ khÃ´ng láº¥y Ä‘Æ°á»£c tÃ i sáº£n.",
          tip3: "Viá»‡c rÃºt tiá»n thÆ°á»ng tá»± Ä‘á»™ng Ä‘áº¿n trong vÃ²ng 1-5 phÃºt, náº¿u khÃ´ng, vui lÃ²ng liÃªn há»‡ vá»›i bá»™ pháº­n chÄƒm sÃ³c khÃ¡ch hÃ ng trá»±c tuyáº¿n. ",
          tip4: "(KhÃ´ng máº¥t phÃ­ xá»­ lÃ½ nhÆ°: rÃºt 100 vá» tÃ i khoáº£n 100) ",
        },
        trx: {
          uset: "TRX",
          title: "Náº P TIá»€N TRX",
          address: "Äá»‹a chá»‰ vÃ­ TRX",
        },
        promotionNew: {
          title: "QUáº¢NG BÃ Äáº I LÃ",
          dataOverview: "Tá»•ng quan",
          myTeam: "Äá»™i cá»§a tÃ´i",
          upRecord: "Lá»‹ch sá»­ nháº­n",
          tutorial: "HÆ°á»›ng dáº«n",
          myReward: "HÆ°á»›ng dáº«n",
          totalComm: "Hoa há»“ng ngÃ y hÃ´m qua",
          directComm: "Hoa há»“ng trá»±c tiáº¿p",
          teamComm: "Hoa há»“ng Ä‘á»™i",
          directSubord: "Cáº¥p dÆ°á»›i trá»±c tiáº¿p",
          totalTeams: "Tá»•ng thÃ nh viÃªn",
          newToday: "F1 má»›i hÃ´m nay",
          newTeam: "Tá»•ng F má»›i trong ngÃ y",
          weekComm: "Tá»•ng hoa há»“ng trong tuáº§n",
          totalComm1: "Tá»•ng hoa há»“ng",
          QRcode: "Nháº¥n vÃ  giá»¯ Ä‘á»ƒ lÆ°u mÃ£ QR",
          copyCode: "Sao chÃ©p MÃ£ giá»›i thiá»‡u",
          copyLink: "Sao chÃ©p Ä‘Æ°á»ng dáº«n",
          rebateTable: "Báº¢NG DOANH THU Äáº I LÃ",
          agencyLevel: "Cáº¥p Ä‘áº¡i lÃ½",
          teamNumber: "Sá»‘ ngÆ°á»i",
          teamFlow: "Doanh thu Ä‘á»™i",
          teamRecharge: "Tiá»n náº¡p Ä‘á»™i",
          validDay:
            "ThÃ nh viÃªn há»£p lá»‡: Náº¡p tiá»n hoáº·c Ä‘áº·t cÆ°á»£c ngay trong ngÃ y",
          commMethod: "CÃ¡ch tÃ­nh hoa há»“ng",
          Hierarchy: "Cáº¥p báº­c",
          rebateRatio: "Tá»· lá»‡ hoÃ n tráº£",
          firstMember: "Báº­c 1",
          secondMember: "Báº­c 2",
          thirdMember: "Báº­c 3",
          tierMember: "Báº­c 4",
          bettingTurnover: "Doanh thu",
          agent: "thÃ nh viÃªn cáº¥p",
          upTime: "Thá»i gian",
          receiveAmount: "Sá»‘ tiá»n",
          operate: "Chi tiáº¿t",
          details: "Chi tiáº¿t",
          date: "NgÃ y thÃ¡ng",
          directTeam: "Äá»™i trá»±c tiáº¿p",
          people: "Má»i ngÆ°á»i",
          pleaseChoose: "Xin vui lÃ²ng chá»n",
          totalBet: "Tá»•ng sá»‘ tiá»n Ä‘áº·t cÆ°á»£c",
          totalAmount: "Tá»•ng sá»‘ tiá»n hoa há»“ng",
          Inquire: "TÃ¬m kiáº¿m",
          nickName: "TÃªn",
          runningWater: "Doanh thu",
          condition: "TT",
          enable: "Má»Ÿ",
          disabled: "Táº¯t",
          personalFlow: "Doanh thu cÃ¡ nhÃ¢n",
          personalRecharge: "Náº¡p tiá»n cÃ¡ nhÃ¢n",
          rgistrationTime: "Thá»i gian Ä‘Äƒng kÃ½",
          subordinates: "ThÃ nh viÃªn cáº¥p dÆ°á»›i",
          year: " NÄƒm ",
          moon: " ThÃ¡ng ",
          day: " NgÃ y ",
          selectList: [
            { name: "Báº­c 1", code: 1 },
            { name: "Báº­c 2", code: 2 },
            { name: "Báº­c 3", code: 3 },
            { name: "Báº­c 4", code: 4 },
            { name: "Báº­c 5", code: 5 },
            { name: "Báº­c 6", code: 6 },
          ],
          promoteMoney: "QUáº¢NG BÃ Äáº I LÃ",
          uid: "UID",
        },
        verify: {
          title: "Google Authenticator",
          unbind: "Há»§y liÃªn káº¿t / thay Ä‘á»•i trÃ¬nh xÃ¡c thá»±c",
          downTit: "Táº£i xuá»‘ng vÃ  Ä‘Äƒng kÃ½",
          downTxt:
            "Vui lÃ²ng táº£i xuá»‘ng Google Authenticator. Náº¿u quÃ¡ trÃ¬nh cÃ i Ä‘áº·t hoÃ n táº¥t, hÃ£y nháº¥p vÃ o nÃºt liÃªn káº¿t Ä‘á»ƒ liÃªn káº¿t tÃ i khoáº£n xá»• sá»‘ cá»§a báº¡n",
          bind: "LiÃªn káº¿t",
          downVerify: "Táº£i xuá»‘ng Google Authenticator",
          vexplainTit: "MÃ´ táº£ trÃ¬nh xÃ¡c thá»±c liÃªn káº¿t",
          list: [
            {
              txt: "Báº¡n cáº§n táº¡o mÃ£ khÃ³a máº­t gá»“m 16 chá»¯ sá»‘ cho tÃ i khoáº£n xá»• sá»‘ vÃ  lÆ°u trá»¯ á»Ÿ nÆ¡i an toÃ n , Ä‘á»“ng thá»i sao chÃ©p vÃ o chÃ¬a khÃ³a máº­t",
            },
            { txt: "Báº¡n cáº§n má»Ÿ Google Authenticator" },
            {
              txt: "ThÃªm tÃ i khoáº£n trÃ² chÆ¡iï¼Œsao chÃ©p nháº­p vÃ o16 sá»‘ mÃ£ khÃ³a máº­t",
            },
            {
              txt: "Sau khi thÃªm thÃ nh cÃ´ng, mÃ£ xÃ¡c minh gá»“m 6 chá»¯ sá»‘ sáº½ tá»± Ä‘á»™ng Ä‘Æ°á»£c táº¡o",
            },
          ],
          vexplainNext: "Bá» qua hÆ°á»›ng dáº«n",
          vbackupTit: "ChÃ¬a khÃ³a dá»± phÃ²ng",
          vbackupTxt:
            "Vui lÃ²ng Ä‘Æ°a ra 1 chÃ¬a khÃ³a quan trá»ng giá»¯ á»Ÿ 1 vá»‹ trÃ­ an toÃ n, náº¿u Ä‘iá»‡n thoáº¡i máº¥t Ä‘i chiá»u khÃ³a nÃ y, báº¡n pháº£i lÆ°u giá»¯ bá»™ phÃ¢n Ä‘á»‹nh tuá»•i thá» 7 ngÃ y",
          vsafetyTit: "XÃ¡c minh báº£o máº­t",
          vsafetyTxt:
            "Gá»­i mÃ£ xÃ¡c minh Ä‘áº¿n sá»‘ Ä‘iá»‡n thoáº¡i di Ä‘á»™ng cá»§a báº¡n",
          vsafetySms: "MÃ£ xÃ¡c minh Ä‘iá»‡n thoáº¡i",
          vsafetyTip:
            "Báº£o máº­t xÃ¡c thá»±c khÃ´ng kháº£ dá»¥ng? liÃªn há»‡ vá»›i dá»‹ch vá»¥ khÃ¡ch hÃ ng",
          vsafetySnsnull: "MÃ£ xÃ¡c minh khÃ´ng Ä‘Æ°á»£c Ä‘á»ƒ trá»‘ng",
          loginTit: "XÃ¡c minh Ä‘Äƒng nháº­p Google",
          loginTxt:
            "Báº£o vá»‡ tÃ i khoáº£n Ä‘Æ°á»£c báº­t, vui lÃ²ng lÃ m theo lá»i nháº¯c Ä‘á»ƒ hoÃ n thÃ nh cÃ¡c thao tÃ¡c sau",
          loginTip:
            "Vui lÃ²ng má»Ÿ Alibaba Cloud APP hoáº·c Google Authenticator (thiáº¿t bá»‹ xÃ¡c thá»±c) trong Ä‘iá»‡n thoáº¡i di Ä‘á»™ng cá»§a báº¡n, vui lÃ²ng nháº­p mÃ£ biáº¿n Ä‘á»™ng gá»“m 6 chá»¯ sá»‘",
          loginNum: "6 chá»¯ sá»‘",
        },
        long: {
          title: "Trá»£ lÃ½ bá»‡t rá»“ng",
          newTitle: "Bá»‡t rá»“ng má»›i nháº¥t",
          betTitle: "CÆ°á»£c cá»§a tÃ´i",
          expect: "Ká»³",
          andDig: "Tá»•ng L",
          andSmall: "Tá»•ng N",
          andodd: "Tá»•ng O",
          andeven: "Tá»•ng E",
          illustrate: "HÆ°á»›ng dáº«n",
          txt1: " Trá»£ lÃ½ bá»‡t rá»“ng lÃ   lÃ  cÃ´ng cá»¥ há»— trá»£ theo dÃµi vÃ  Ä‘áº¿m káº¿t quáº£ xá»• sá»‘ Win Go, 5D, K3, xá»• sá»‘ â€œláº» vÃ  cháºµnâ€, cÃ³ thá»ƒ Ä‘áº·t cÆ°á»£c nhanh chÃ³ng",
          txt2: 'XÃ¡c suáº¥t xuáº¥t hiá»‡n lá»›n, nhá», láº» , cháºµn trong má»—i ká»³ lÃ  nhÆ° nhau, náº¿u káº¿t quáº£ xá»• sá»‘ cá»§a 3 ká»³ liÃªn tiáº¿p trá»Ÿ lÃªn giá»‘ng nhau thÃ¬ gá»i lÃ  â€œBá»‡t rá»“ngâ€, thÃ´ng thÆ°á»ng lÃ  phÆ°Æ¡ng phÃ¡p â€œcháº·t rá»“ng. "hoáº·c" Theo rá»“ng "sáº½ Ä‘Æ°á»£c Ã¡p dá»¥ng báº±ng cÃ¡ch Ä‘áº·t cÆ°á»£c gáº¥p Ä‘Ã´i.',
          list: [
            {
              name: "Cháº·t rá»“ng lÃ  gÃ¬ ?",
              txt: 'Náº¿u báº¡n má»Ÿ liÃªn tiáº¿p 5 "láº»", báº¡n cÃ³ thá»ƒ chá»n "cháº³n" Ä‘á»ƒ Ä‘áº·t cÆ°á»£c, káº¿ hoáº¡ch Ä‘áº·t cÆ°á»£c nÃ y Ä‘Æ°á»£c gá»i lÃ  "cháº·t rá»“ng";',
            },
            {
              name: "Theo rá»“ng lÃ  gÃ¬ ?",
              txt: 'Náº¿u báº¡n má»Ÿ liÃªn tiáº¿p 5 "láº»", tiáº¿p tá»¥c chá»n "láº»" Ä‘á»ƒ Ä‘áº·t cÆ°á»£c, káº¿ hoáº¡ch Ä‘áº·t cÆ°á»£c nÃ y Ä‘Æ°á»£c gá»i lÃ  "theo rá»“ng";',
            },
            {
              name: "CÆ°á»£c gáº¥p Ä‘Ã´i lÃ  gÃ¬?",
              txt: "Äáº·t cÆ°á»£c gáº¥p Ä‘Ã´i lÃ  phÆ°Æ¡ng thá»©c Ä‘áº·t cÆ°á»£c kÃ©p, lÃ  phÆ°Æ¡ng thá»©c Ä‘áº·t cÆ°á»£c nháº±m Ä‘áº£m báº£o lá»£i nhuáº­n liÃªn tá»¥c trong quÃ¡ trÃ¬nh â€œcháº·t rá»“ngâ€ hoáº·c â€œtheo rá»“ngâ€.",
            },
          ],
          txt3: "Bá»‡t rá»“ng má»›i nháº¥t: Chá»©c nÄƒng nÃ y sáº½ tá»± Ä‘á»™ng cáº­p nháº­t trong game cÃ³ cÃ¹ng káº¿t quáº£ trong 5 láº§n quay xá»• sá»‘ liÃªn tiáº¿p, thuáº­n tiá»‡n cho cÃ¡c báº¡n phÃ¡n Ä‘oÃ¡n nÃªn cháº·t rá»“ng hoáº·c theo rá»“ng .",
          txt4: "CÆ°á»£c cá»§a tÃ´i: TÃ­nh nÄƒng nÃ y sáº½ giÃºp báº¡n xem nhanh chÃ³ng ná»™i dung cÆ°á»£c vÃ  káº¿t quáº£ trÃºng thÆ°á»Ÿng",
        },
        shop: {
          currentPoints: "Äiá»ƒm hiá»‡n táº¡i",
          Redeem: "Äá»•i ngay",
          pointsGo: "Äiá»ƒm tÃ­ch lÅ©y    Ä‘i Ä‘áº¿n ngay",
          commodityOrder: "ÄÆ¡n hÃ ng",
          pointsRecord: "Lá»‹ch sá»­ Ä‘iá»ƒm tÃ­ch lÅ©y",
          title: "Trung tÃ¢m Ä‘iá»ƒm tÃ­ch lÅ©y",
          pointsAvailable: "Äiá»ƒm cÃ³ thá»ƒ dÃ¹ng",
          rule: "Quy táº¯c Ä‘iá»ƒm tÃ­ch lÅ©y",
          stock: "Kho",
          redeemed: "ÄÃ£ Ä‘á»•i",
          integral: "Äiá»ƒm tÃ­ch lÅ©y",
          productName: "TÃªn sáº£n pháº©m",
          exchange: "Äiá»u kiá»‡n quy Ä‘á»•i",
          name: "Há» vÃ  tÃªn",
          address: "Ä‘á»‹a chá»‰ nháº­n hÃ ng",
          redeem: "Tiáº¿p tá»¥c quy Ä‘á»•i",
          checkOrder: "Kiá»ƒm tra Ä‘Æ¡n hÃ ng",
          addressEmpty: "Äá»‹a chá»‰ khÃ´ng Ä‘Æ°á»£c Ä‘á»ƒ trá»‘ng!",
          ordered: "ÄÃ£ Ä‘áº·t hÃ ng",
          delivery: "Äang váº­n chuyá»ƒn",
          completed: "ÄÃ£ hoÃ n thÃ nh",
          orderDetails: "Chi tiáº¿t Ä‘Æ¡n hÃ ng",
          orderTime: "Thá»i gian Ä‘áº·t hÃ ng",
          orderStatus: "Tráº¡ng thÃ¡i Ä‘Æ¡n hÃ ng",
          signTime: "Thá»i gian gá»­i",
          signPhoto: "áº¢nh kÃ½ nháº­n",
        },
        selections: {
          distanceDraw: "Khoáº£ng cÃ¡ch má»Ÿ thÆ°á»Ÿng",
          champion: "1st",
          runnerUp: "2nd",
          ndRunner: "3rd",
          outof1: "1/16",
          outof2: "2/16",
          outof3: "3/16",
        },
        lotteryD: {
          rules: "CÃ¡ch chÆ¡i",
          LotteryTime: "Má»Ÿ thÆ°á»Ÿng",
          seal: "ÄÃ³ng ká»³ xá»•",
          stPrize1: "Giáº£i nháº¥t",
          stPrize2: "Giáº£i nhÃ¬",
          stPrize3: "Giáº£i ba",
          Finalist: "Chung káº¿t",
          consolationprize: "giáº£i khuyáº¿n khÃ­ch",
          Doubledisc: "2 Máº·t",
          TraditionalDish: "TiÃªu chuáº©n",
          Doubleside: "2 Máº·t",
          Choosenumber: " Chá»n sá»‘",
          FourDigit: "4D CÆ¡ báº£n",
          FourSlection: "4D Cuá»™n",
          duplicatenumber: "Ä‘á»‹nh dáº¡ng sá»‘ sai",
          numberFormat: "Ä‘á»‹nh dáº¡ng sá»‘ sai",
          Bigone: "TÃ i",
          Smallone: "Xá»‰u",
          Bothone: "TÃ i+Xá»‰u",
          Addbet: "Äáº·t cÆ°á»£c thÃªm",
          Randomnumber: "Sá»‘ nhÃ³m ngáº«u nhiÃªn",
          Machineselection: "Lá»±a chá»n",
          Enternumber: "Nháº­p sá»‘ báº¡n mong muá»‘n",
          Concatenatedcode: "Bao lÃ´",
          select1: "Bao lÃ´ 2 sá»‘",
          select2: "Bao lÃ´ 3 sá»‘",
          select3: "Bao lÃ´ 4 sá»‘",
          select4: "2 cÃ ng",
          select5: "Äá» Äáº·c Biá»‡t",
          select6: "Äá» Giáº£i 1",
          select7: "Äá»",
          select8: "3 CÃ ng",
          SeventhPrize: "Giáº£i 7",
          EighthPrize: "Giáº£i 8",
          positivecode3: "3 cÃ ng",
          SpecialPrize3: "3 CÃ ng Äáº·c Biá»‡t",
          FirstPrize3: "3 CÃ ng Giáº£i 1",
          SixthPrize: "Giáº£i 6",
          positivecode4: "4 cÃ ng",
          SpecialPrize4: "4 CÃ ng Äáº·c Biá»‡t",
          FirstPrize4: "4 CÃ ng Giáº£i 1",
          selectAll: "LÃ´ TrÆ°á»£t",
          misses4: "TrÆ°á»£t xiÃªn 4",
          misses8: "TrÆ°á»£t xiÃªn 8",
          misses10: "TrÆ°á»£t xiÃªn 10",
          Enter: "Nháº­p VÃ o",
          Compound: "Chá»n nhanh",
          selected: "Ä‘Ã£ chá»n",
          bet: "cÆ°á»£c",
          CN: "Chá»§ nháº­t",
          T2: "Thá»© 2",
          T3: "Thá»© 3",
          T4: "Thá»© 4",
          T5: "Thá»© 5",
          T6: "Thá»© 6",
          T7: "Thá»© 7",
          waitingdraw: "CHÆ Ì€ KÃŠÌT QUAÌ‰",
          grandPrize: "Giáº£i thÆ°á»Ÿng lá»›n",
          firstprize: "giáº£i nháº¥t",
          secondprize: "giáº£i nhÃ¬",
          thirdprize: "giáº£i ba",
          fourthprize: "Giáº£i tÆ°",
          fifthprize: "Giáº£i nÄƒm",
          sixthprize: "giáº£i sÃ¡u",
          seventhprize: "Giáº£i báº£y",
          eighthprize: "Giáº£i tÃ¡m",
          northernvietnam: "Miá»n báº¯c viá»‡t nam",
          southvietnam: "Miá»n nam viá»‡t nam",
          vietnamchinese: "MiÃªÌ€n trung",
        },
        finance: {
          title: "an toÃ n",
          titleRes: "há»“ sÆ¡ an toÃ n",
          tip1: "Tá»· lá»‡ hÃ ng ngÃ y",
          tip2: "Thu nháº­p Ä‘Æ°á»£c tÃ­nh má»—i phÃºt",
          shop: "trung tÃ¢m mua sáº¯m Ä‘iá»ƒm",
          shopTip: "Mua láº¡i miá»…n phÃ­ hÃ ng hÃ³a xa xá»‰ lá»›n",
          lumpSum: "má»™t láº§n",
          security: "An ninh tÃ i chÃ­nh",
          transferIn: "chuyá»ƒn giao",
          transferOut: "chuyá»ƒn ra ngoÃ i",
          Every: "Má»i",
          minute: "doanh thu phÃºt",
          earnings: "Doanh thu Ä‘Ã£ táº¡o",
          cumulativeIncome: "thu nháº­p tÃ­ch lÅ©y",
          estimatedIncome: "Thu nháº­p Æ°á»›c tÃ­nh",
          income: "thu nháº­p = earnings",
          tip3: "Tiá»n Ä‘Æ°á»£c an toÃ n vÃ  báº£o máº­t, vÃ  cÃ³ thá»ƒ Ä‘Æ°á»£c chuyá»ƒn ra báº¥t cá»© lÃºc nÃ o",
          history: "há»“ sÆ¡ lá»‹ch sá»­",
          setIncome: "thu nháº­p Ä‘á»‹nh cÆ°",
          allRecords: "táº¥t cáº£ há»“ sÆ¡",
          amountShare: "Sá»‘ lÆ°á»£ng má»—i báº£n sao",
          enter: "Vui lÃ²ng nháº­p sá»‘ lÆ°á»£ng",
          availableBalance: "Sá»‘ dÆ° kháº£ dá»¥ng",
          outAmount: "Sá»‘ tiá»n chuyá»ƒn khoáº£n",
          inAmount: "Sá»‘ tiá»n chuyá»ƒn khoáº£n",
          all: "táº¥t cáº£ cÃ¡c",
          balanceAvailable: "Sá»‘ dÆ° kháº£ dá»¥ng khÃ´ng Ä‘á»§",
          noIncome: "khÃ´ng cÃ³ thu nháº­p",
          noIncomeTip:
            "Thu nháº­p hiá»‡n táº¡i cÃ³ Ä‘Æ°á»£c chuyá»ƒn ra ngoÃ i hay khÃ´ng",
        },
        financeRule: {
          title: "TÃ¬m hiá»ƒu vá» kÃ©t sáº¯t",
          Rtip: "Tiá»n lÃ£i tá»‘i thiá»ƒu, lÃ£i suáº¥t hÃ ng ngÃ y",
          Rtip1: "Sau khi sá»‘ dÆ° trong vÃ­ Ä‘Æ°á»£c chuyá»ƒn vÃ o, má»i",
          Rtip2: "Thu nháº­p Ä‘Æ°á»£c tÃ­nh má»—i phÃºt",
          Rtip3:
            "Thu nháº­p sáº½ Ä‘Æ°á»£c thanh toÃ¡n khi chuyá»ƒn vÃ o hoáº·c ra láº§n thá»© hai vÃ  thu nháº­p cuá»‘i cÃ¹ng sáº½ Ä‘Æ°á»£c chuyá»ƒn vÃ o sá»‘ dÆ° vÃ­",
          Rtip4:
            "Sá»‘ dÆ° trong vÃ­ Ä‘Æ°á»£c chuyá»ƒn Ä‘áº¿n kÃ©t an toÃ n pháº£i Ä‘Æ°á»£c chuyá»ƒn theo Ä‘Æ¡n vá»‹",
          Eg: "VÃ­ dá»¥",
          Rtip5: "Má»™t pháº§n",
          Rtip6: ", Ä‘Æ°á»£c chuyá»ƒn thÃ nh 2 báº£n nhÆ°",
          Rtip7: ", 10 báº£n cho",
          Rtip8: ", 50 báº£n cho",
          Rtip9: ", sá»‘ tiá»n chuyá»ƒn pháº£i lÃ  bá»™i sá»‘ cá»§a 1000",
          Rtip10:
            "Vá»›i Ä‘iá»u kiá»‡n thu nháº­p cá»§a báº¡n Ä‘Æ°á»£c Ä‘áº£m báº£o, báº¡n cÃ³ thá»ƒ chuyá»ƒn sá»‘ dÆ° cá»§a kÃ©t sang sá»‘ dÆ° cá»§a vÃ­ báº¥t cá»© lÃºc nÃ o vÃ  sá»‘ tiá»n chuyá»ƒn pháº£i lÃ  bá»™i sá»‘ cá»§a sá»‘ báº£n sao",
          friendly: "nháº¯c nhá»Ÿ thÃ¢n thiá»‡n",
          friendlytxt:
            'Vui lÃ²ng khÃ´ng chuyá»ƒn vÃ o vÃ  chuyá»ƒn ra thÆ°á»ng xuyÃªn. Thu nháº­p sáº½ Ä‘Æ°á»£c tÃ­nh tá»« 1 phÃºt sau khi gá»­i tiá»n. Náº¿u sá»‘ tiá»n tÃ­ch lÅ©y cá»§a má»™t khoáº£n tiá»n kiáº¿m Ä‘Æ°á»£c nhá» hÆ¡n 0,01 thÃ¬ sá»‘ tiá»n Ä‘Ã³ sáº½ khÃ´ng Ä‘Æ°á»£c tÃ­nh vÃ o "thu nháº­p".',
          Safety: "Sá»± an toÃ n",
          SafetyTxt:
            "Äá»™i ngÅ© ká»¹ thuáº­t báº£o máº­t Ä‘áº£m báº£o an toÃ n cho tiá»n cá»§a báº¡n",
          SafetyTip:
            "Äá»ƒ Ä‘áº£m báº£o an toÃ n cho sá»‘ tiá»n cá»§a báº¡n, báº¡n nÃªn chuyá»ƒn sá»‘ dÆ° trong vÃ­ cá»§a mÃ¬nh Ä‘áº¿n nÆ¡i an toÃ n",
        },
        flight: {
          title: "Phi cÃ´ng",
          tit: "NÃ³ng bá»ng vÃ  thÃº vá»‹",
          sub: "trÃ² chÆ¡i nháº£y dÃ¹",
          tip: "cÃ³ nÃªn vÃ o game khÃ´ng",
          btn: "nháº¥n Enter ngay bÃ¢y giá»",
          gameName: "Phi cÃ´ng",
          gameTip: "Bay vÃ  tÄƒng lá»£i nhuáº­n cá»§a báº¡n",
          enterGameName: "Vui lÃ²ng nháº­p tÃªn trÃ² chÆ¡i",
        },
      },
    };
  },
  b5ef: function (e, a, t) {
    e.exports = t.p + "img/activity_active.ecd016e1.png";
  },
  b7d1: function (e, a, t) {
    e.exports = {
      homepage: {
        loadText: {
          loadMore: "carregar mais",
          loading: "carregando",
          nomore: "NÃ£o mais",
        },
        loadingText: "carregamento de texto",
        login: "Acessar",
        numberFormat: "Formato de nÃºmero ",
        mobile: "celular",
        mobileNumber: "nÃºmero do telefone",
        pwd: "Senha",
        oldpwd: "Senha Antiga",
        pwds: "Confirmar Senha",
        pwdsTip: "Senha incorreta",
        register: "Registrar",
        registerTip: "JÃ¡ possui uma conta, faÃ§a login~",
        forgotPwd: "Encontrar sua senha",
        customerService: "Atendimento ao Cliente",
        resetPwd: "Excluir sua senha",
        verificationCode: "CÃ³digo de verificaÃ§Ã£o",
        recommendationCode: "CÃ³digo de convite",
        agree: "Aceitar",
        privacy: "Politica de Privacidade",
        submit: "Enviar",
        network: "Problemas de ConecÃ§Ã£o",
        tips: "AtenÃ§Ã£o",
        close: "Fechar",
        full: "tela cheia",
        zoomOut: "Reduzir o zoom",
        signout: "VocÃª tem certeza que quer sair ?",
        quit: "Quer sair deste jogo?",
        enterGame: "Tem certeza de que deseja entrar no jogo?",
        cancel: "Cancelar",
        confirm: "Confirmar ",
        success: "Sucesso",
        cancelled: "Cancelado !",
        fail: "Falha",
        del: "Deletar",
        copy: "Copiar",
        copySuccess: "Copiado com sucesso !!!",
        required: "Entre Aqui !!!",
        pleaseRequired: "Por favor escreva abaixo",
        passwordError:
          "A senha deve conter apenas 6 caracteres, incluindo nÃºmeros e letras ",
        pleaseEmail: "Por favor escreva abaixo o corretamente E-mail abaixo",
        informationTip:
          "Seu tempo de acessar venceu, por favor tente novamente",
        informationTip1:
          "Como sua conta nÃ£o Ã© operada hÃ¡ muito tempo, para a seguranÃ§a de sua conta, faÃ§a o login novamente. Se vocÃª esquecer sua senha, vocÃª pode fazer o login novamente apÃ³s alterÃ¡-la.",
        noData: "Sem dados",
        presaleRule:
          'Para proteger os direitos e interesses legÃ­timos dos usuÃ¡rios que participam da prÃ©-venda e manter a ordem normal de operaÃ§Ã£o da prÃ©-venda, estas Regras sÃ£o formuladas de acordo com os acordos relevantes e as disposiÃ§Ãµes das leis e regulamentos nacionais. CapÃ­tulo 1 DefiniÃ§Ã£o 1.1 DefiniÃ§Ã£o de prÃ©-venda: refere-se ao modo de venda em que os comerciantes fornecem produtos ou planos de serviÃ§os, coletam pedidos de consumidores por meio de ferramentas de prÃ©-venda de produtos e fornecem bens ou serviÃ§os aos consumidores conforme acordos prÃ©vios. 1.2 O modo de prÃ©-venda Ã© o modo "DepO IT". Dep OS IT refere-se Ã  prÃ©-entrega de um nÃºmero fixo de produtos prÃ©-vendidos a um preÃ§o fixo. Jogue um minijogo para ter a chance de ganhar mais economias.  O depÃ³sito nÃ£o Ã© resgatÃ¡vel. 1.3 Produtos de prÃ©-venda: referem-se a produtos transferidos por estabelecimentos comerciais por meio de ferramentas de produtos de prÃ©-venda. As palavras "prÃ©-venda" devem ser marcadas apenas no nome da mercadoria ou na pÃ¡gina de detalhes da mercadoria. As commodities sem ferramentas de prÃ©-venda nÃ£o sÃ£o commodities de prÃ©-venda. 1.4 Sistema de prÃ©-venda: refere-se Ã s ferramentas de comodidades do sistema que auxiliam os comerciantes a vender modelos prÃ©-vendidos.1.5 PreÃ§o de prÃ©-venda: refere-se ao preÃ§o de venda dos produtos prÃ©-vendidos. O preÃ§o de prÃ©-venda Ã© composto por duas partes: DEP OS IT e o pagamento final.',
        more: "Mais",
        verificationTip:
          "Eu nÃ£o recebi um codigo de verificaÃ§ao, por favor contacte o serviÃ§o de atendimento ao cliente",
        symbolU: "USDT",
        newes: "Ãšltimo anÃºncio",
        upgraded: "O evento estÃ¡ sendo atualizado......",
        gameTit: "Falha na recuperaÃ§Ã£o do saldo",
        gameLeft: "tente novamente",
        gameRight: "reciclagem manual",
        tab: {
          hot: "Popular",
          lottety: "Loteria",
          fishing: "Pescaria",
          electronic: "Slots",
          physical: "Esportes",
          realperson: "Casa de Apostas",
          chess: "Xadrez",
          smallgame: "Jogo pequeno",
          safe: "Seguro",
        },
        home: {
          lottetyTitle: "A maior retirada da loteria",
          recharge: "Recarregar",
          balance: "Saldo",
          customerService: "Atendimento ao Cliente",
          lottety: "Loteria",
          wealth: "Manejar o dinheiro corretamente",
          leftTime: "Tempo estimado para carregar",
          min: "Minutos",
          sec: "Segundos",
          newTitle: "Noticias ",
          newCenter: "Centro de NotÃ­cias",
          newDes: "Detalhes das NotÃ­cias",
          wrTime: "Tempo corrigo no jogo",
          days: "Dia",
          hours: "Horas",
          minutes: "Minutos",
          seconds: "Segundos",
          pengguna: "O nÃºmero do usuÃ¡rio",
          jumlahTaruhan: "Quantas apostas vocÃª fez",
          Online: "UsuÃ¡rios On Line",
          penarikanHari: "Lista de ClassificassÃ£o",
          gin: "Aqui",
          got: "Eu ganhei",
          GameName: "Jogo de pesca",
          popular: "RecomendaÃ§Ã£o popular",
          platform: "RecomendaÃ§Ã£o de plataforma",
          Game1: "5D Lotre",
          Game2: "Win Go",
          Game3: "Slots",
          Game4: "K3 Lotre",
          Game5: "Casa de Apostas",
          Game6: "Esportes",
          Game7: "16 seleÃ§Ãµes",
          Game8: "paÃ­s",
          Game9: "Singapura 4D",
          Game10: "Vietnam Lottery",
          Game11: "Universal 4D",
          Game12: "4D da MalÃ¡sia",
          Game13: "mais de dez mil palavras",
          Game14: "Velocidade 4D",
          Game1Tip:
            "adivinhe os nÃºmeros/ OlÃ¡/Baixo/E todos os nÃºmeros/NÃºmeros pares",
          Game2Tip: "adivinhe os nÃºmeros / Verde/Roxo/Vermelho Ganhar",
          Game3Tip: "Jogo da MemÃ³ria / Jogo da MemÃ³ria/ Jogo da MemÃ³ria",
          Game4Tip:
            "adivinhe os nÃºmeros/ OlÃ¡/Baixo/E todos os nÃºmeros/NÃºmeros pares",
          Game5Tip: "Poker / Jogo do",
          Game6Tip: "HorÃ¡rio real do Evento/Todos os jogos aqui dentro juntos",
          Game7Tip:
            "adivinhe os nÃºmeros/ OlÃ¡/Baixo/E todos os nÃºmeros/NÃºmeros pares",
          Game8Tip: "HorÃ¡rio real do Evento/Todos os jogos aqui dentro juntos",
          Game9Tip:
            "adivinhe os nÃºmeros/ OlÃ¡/Baixo/E todos os nÃºmeros/NÃºmeros pares",
          Game10Tip: "adivinhe os nÃºmeros / Verde/Roxo/Vermelho Ganhar",
          Game11Tip:
            "adivinhe os nÃºmeros/ OlÃ¡/Baixo/E todos os nÃºmeros/NÃºmeros pares",
          Game12Tip:
            "adivinhe os nÃºmeros/ OlÃ¡/Baixo/E todos os nÃºmeros/NÃºmeros pares",
          Game13Tip:
            "adivinhe os nÃºmeros/ OlÃ¡/Baixo/E todos os nÃºmeros/NÃºmeros pares",
          Game14Tip:
            "adivinhe os nÃºmeros/ OlÃ¡/Baixo/E todos os nÃºmeros/NÃºmeros pares",
          Game6t: "Sabah",
          nextDraw: "PrÃ³xima rodada",
          playNow: "Jogar agora mesmo",
          howWorks: "Como jogar?",
          game_title1: "Selecionar um jogo",
          game_title2: "Selecione um nÃºmero da sorte",
          game_title3: "Aposta",
          game_title4: "Receber o bÃ´nus",
          game_First: "Primeiro passo",
          game_Second: "Segundo passo",
          game_Third: "Terceiro passo",
          game_Fourth: "Quarto passo",
          list: [
            {
              title: "Selecione um jogo favorito",
              txt: "VocÃª pode jogar em 1, 3, 5 ou 10 min, jogos da loteria",
            },
            {
              title: "Escolha um nÃºmero da sorte",
              txt: "Escolha um nÃºmero da sorte ou as um das cores",
            },
            {
              title: "Aposta",
              txt: "Escolha a quantia do valor que vocÃª deseja apostar e confirmeã€‚",
            },
            {
              title: "Resgate seu bÃ´nus",
              txt: "Quando vocÃª escolhe o nÃºmero da sorte, nosso sistema vai adicionar o valor do bÃ´nus na sua conta.",
            },
          ],
        },
        index: {
          Charttren: "TendÃªncia do grÃ¡fico",
          Total: "Total no mÃªs",
          walletBalance: "BalanÃ§o na carteira",
          recharge: "Recarga",
          withdraw: "Retirada",
          lotteyRule: "Regras da lotÃ©ria",
          iKnow: "Eu sei isso",
          big: "Grande",
          small: "Pequeno",
          green: "Verde",
          violet: "Roxo",
          red: "Vermelho",
          selectGreen: "Escolha o verde",
          selectViolet: "Escolha o roxo",
          selectRed: "Escolha o vermelho",
          randomBetting: "AleatÃ³rio",
          gameRecord: "HistÃ³rico de apostas",
          myGameRecord: "Meu histÃ³rico de apostas",
          period: "Rodadas",
          blockHeight: "Altura do bloco",
          blockTime: "Tempo de bloqueio",
          hashValue: "Valor de hash",
          number: "NÃºmero",
          size: "Grande ou Pequeno",
          color: "Cores",
          result: "Resultado",
          sum: "Total",
          high: "Grande",
          low: "Pequeno",
          odd: "Ãmpar",
          even: "Par",
          money: "Saldo",
          multiply: "Quantidade",
          presaleRule: "Regras",
          presaleRuleTit: "Por favor verifique e concorde com as regras",
          totalPrice: "Saldo total",
          Select: "Escolha",
          SelectCon: "ConteÃºdo das apostas",
          firstPage: "JÃ¡ estÃ¡ na primeira pÃ¡gina",
          lastpage: "JÃ¡ estÃ¡ na Ãºltima pÃ¡gina",
          periodDetail: "Detalhes",
          orderNumber: "NÃºmero de ordem",
          contractMoney: "Valor da compra",
          contractCount: "Quantidade de compra",
          delivery: "Valor da aposta",
          fee: "Taxa de ServiÃ§o",
          openPrice: "PreÃ§o de abertura",
          status: "PreÃ§o de abertura",
          amount: "Ganhar ou Perder",
          createTime: "Tempo de criaÃ§Ã£o",
          BettingAssistant: "Ajudante( ultimas 100 ediÃ§Ãµes )",
          Missing: "Unopened times",
          AvgMissing: "Avg Missing ",
          Frequency: "FrequÃªncia",
          MaxContinued: "Max Continued",
          PleaseInteger: "Por favor insira um nÃºmero inteiro",
          Odds: "Loss per cent",
          publicQuery: "link de URL",
          howPlay: "IntruÃ§Ãµes do Jogo",
          distancedraw: "empate Ã  distÃ¢ncia",
          multiple: "mÃºltiplo",
          numberBets: "nÃºmero de apostas",
          reset: "Redefinir",
          time: "Tempo",
          lotteryTime: "loteria Tempo",
          notPressed: "nÃ£o pressionado",
          pressed: "pressionado",
          bedrawn: "Ser desenhado",
          awarding: "rewarding",
          periodNmu: "nÃºmero do perÃ­odo de apostas",
          lotteryNmu: "nÃºmero da loteria",
        },
        myProfile: {
          title: "Perfil pessoal",
          profilePhoto: "Trocar foto",
          nickname: "Nome",
          modifyNickname: "Trocar de nome",
          newNicknameTit: "Por favor coloque seu nome",
        },
        about: {
          title: "Sobre",
          Games: "Jogo",
          privacypolicy: "PolÃ­tica de privacidade",
          disclosureagreement: "PolÃ­tica de risco",
        },
        privacypolicy: {
          title: "PolÃ­tica de privacidade",
          agree: "PolÃ­tica de risco",
        },
        keFuMenu: { title: "Atendimento ao Cliente" },
        recharge: {
          title: "Recarga",
          selectRecharge: "Por favor selecione uma maneira para recarregar",
          next: "PrÃ³ximo passo",
          previous: "Um passo",
          rechargeAmount: "Valor carregado",
          rechargeAmountRangeIpt: "Valor total da recarga",
          rechargeAmountRange: "Valor total da recarga",
        },
        rechargeChack: {
          title: "Recaregar",
          totalAmouunt: "Saldo total",
          paymentMethod: "Forma de pagamento",
          localBank: "Banco local",
          enterAmount: "Valor total da recarga",
          theAmount: "O valor deve ser um nÃºmero inteiro de 10",
          accountName: "NÃºmero da conta",
          bankNumber: "NÃºmero da conta bancÃ¡ria",
          bankName: "Nome do banco",
          paymentAmount: "Quantidade de dinheiro para pagar",
          orderNumber: "NÃºmero da ordem",
          creationTime: "Hora da criaÃ§Ã£o da conta",
          transferAmount:
            "O valor da tranferÃªncia deve ser preenchido na sua ordem ou o depÃ³dito nao serÃ¡ bem sucedido",
          transferAmount2: "",
          transferAmount1:
            "AtenÃ§Ã£o: nÃ£o cancele seu pedido apÃ³s a transferÃªncia de pedido",
          depositAmount: "Quantidade depositada",
          upImgTitle: "Por favor atualize a transaÃ§Ã£o que contÃªm UTR",
          upFormate: "Salve as fotos em jpg, jpeg, png",
          selectFile: "Selecione o documento de atualizaÃ§Ã£o",
        },
        touchngo: {
          title: "Touch N Go Recaregar",
          name: "Nome",
          mobileNumber: "nÃºmero do telefone",
        },
        rechargeRecord: {
          title: "HistÃ³rico de recarga",
          unpaid: "Esperar pelo pagamento",
          eazyPay: "SalÃ¡rio",
          success: "Sucesso",
          others: "Outros",
        },
        paymentMethod: {
          title: "Tipos de pagamentos",
          totalPaid: "Quantidade total esperando para pagar",
          choose: "Por favor escolha o cartÃ£o",
          payNow: "Pagamento imediato",
          topInstructions: "InstruÃ§Ãµes de pagamento",
          contentTmp1: "Por favor tranferir para a conta bancaria a receber ",
          contentTmp2: "Por favor adicione o nome correto e o numero da conta",
          contentTmp3:
            "Preencha o nome e nÃºmero da conta do tÃ­tular do cartÃ£o para verificaÃ§Ã£o ",
          contentTmp4:
            "Por favor se certifique depois da tranÃªrencia quando estiver complera; De outra forma nÃ£o estaremos abilitados para checar seu pagamento na hora. ",
          waitingPayment: "Esperando por pagamento",
          receivingTitle: "Recebendo detalhes de CartÃ£o de Banco",
          confirm1: "NÃºmero de Ordem",
          confirm2: "Nome de banco",
          confirm3: "Titular de cartÃ£o",
          confirm4: "NÃºmedo de cartÃ£o",
          confirm5: "IFSC",
          confirm6: "Bandeira do Banco",
          Required: "Fill in Ref No",
          Return: "Retornar",
        },
        promotion: {
          title: "PromoÃ§Ã£o",
          bouns: "BÃ´nus",
          level_1: "NÃ­vel 1",
          level_2: "NÃ­vel 2",
          totalPeople: "NÃºmero Total de Pessoas",
          contribution: "Ganhos na PromoÃ§Ã£o",
          code: "Meu CÃ³digo da PromoÃ§Ã£o",
          link: "Meu Link da PromoÃ§Ã£o",
        },
        bonusrecord: { title: "HistÃ³rico de BÃ´nus" },
        redenvelopes: {
          title: "Presente",
          Hello: "OlÃ¡",
          Eveverone: "Todos",
          des: "NÃ³s temos um presente pra vocÃª",
          giftCode: "CÃ³digo do Presente",
          PleaseGiftCode: "Por favor acesse o cÃ³digo presente ",
          Receive: "Receber Presente",
          Best: "Boa sorte para vocÃª !!!",
          Congratulations: "ParabÃ©ns pra vocÃª !!!",
          already: "VocÃª jÃ¡ recebeu ?",
          ACCEPT: "Recebendo",
        },
        withdrawal: {
          title: "Retirada",
          balance: "BalanÃ§o",
          enterwithdraw: "Por favor acesse seu balanÃ§o",
          withdrawAamount: "Quantidade da retirada",
          fee: "Taxa",
          toAccount: "Valor apÃ³s Impostos",
          rate: "A taxa de ",
          totalBet: "Total de apostas",
          withdrawTime: "Tempo de Retirada",
          dailyWithdrawal: "NÃºmero de retiradas por dia",
          withdrawMoney: "Faixa de valor de saque",
          payout: "Metodo de Pagamento",
          bankCard: "Metodo de Pagamento",
          selectBank: "Por favor selecione seu cartÃ£o BancÃ¡rio",
          addBankCard: "Adicione seu cartÃ£o bancÃ¡rio",
          rechargeTip1: "Por favor acesse seu balanÃ§o",
          rechargeTip2: "Por favor selecione um cartÃ£o de banco",
          rechargeTip3: "Por favor adicione sua senha",
          select: "Escolha",
          add: "Adicione",
        },
        withdrawrecord: {
          title: "HistÃ³rico de retirada",
          applying: "Registro de Retirada",
          agree: "Aceito",
          refuse: "Recuso",
        },
        mission: {
          title: "Convidar amigos",
          totalPeople: "Total de membros",
          totalAmount: "Quantidade total de dinheiro",
          myTask: "Minha meta alcanÃ§ada",
          invited: "Convidar",
          validMenmber: "Membro Ativo",
          receive: "Ganhou",
        },
        promoteRecord: { title: "Dados de convidades", People: "O nÃºmero " },
        addbank: {
          title: "Adicione o cartÃ£o do banco",
          bankName: "Banco Nomre",
          beneficiaryName: "Receber Namo",
          accountNo: "NÃºmero da conta",
          bankCity: "Cidade do banco",
          IFSCCode: "IFSC Cord",
          email: "Caixa de Coirreio",
          bankProvince: "Provincia do banco",
          bankBranch: "Marca do Banco localiza",
          addBtn: "Adicione a conta do banco",
          opsionalbankProvince: "Provincia do banco",
          opsionalbankBranch: "Marca do Banco localiza",
        },
        addElcbank: {
          title: "Aumentar os valores na carteira digital",
          addBtn: "Adicione a Carteira Digital",
          mobile:
            "Por favor adicione seu numero de celular da carteira eletrÃ´nica",
        },
        addUsdt: {
          title: "Adicione seu USDT",
          addBtn: "Aumentar seu USDT",
          type: "Tipo de USDT",
          address: "EndereÃ§o da USDT",
          tip: "O formato de endereÃ§o USDT estÃ¡ errado",
          txt: "O formato de endereÃ§o USDTï¼ˆTRCï¼‰. O endereÃ§o Ã© composto de 34 caracteres que comeÃ§am com a letra T.",
          txt1: "O formato de endereÃ§o USDTï¼ˆERCï¼‰. O endereÃ§o Ã© composto de 42 caracteres que comeÃ§am com a letra 0x.",
        },
        wellet: {
          title: "Carteira",
          withdrawalBalance: "BalanÃ§o da retirada",
          historicalWithdrawal: "HistÃ³rico de retirada",
          accumulatedWithdrawal: "Retirada de hoje",
          everyDay: "Todo dia tem",
          order: "Tempo",
          tip: "A oportunidade de vocÃª retirar dinheiro na sua conta bancaria sem taxas",
          myCard: "Meu cartÃ£o bancario",
          rechargeRecord: "HistÃ³rico de recarga",
          withdrawRecord: "HistÃ³rico de retirada",
        },
        transactionrecord: { title: "HistÃ³rico de transaÃ§Ãµes" },
        newtutorial: {
          title: "VocÃª vai ser guiado",
          chooseYour: "Selecione o seu",
          favoriteGame: "Jogo favorito",
          pickLucky: "Pegue o seu nÃºmero da sorte",
          numberColor: "NÃºmero ou cor",
          SKIP: "Passar",
          NEXT: "PrÃ³ximo passo",
          confirmAmount: "Por favor confirme o valor da sua aposta",
          getBouns: "Receber bÃ´nus",
          moneyWill:
            "Um vez que vocÃª ganhar nesse tempo, o dinheiro vai ser adicionado automaticamente a sua conta",
          youRecharge: "VocÃª pode fazer recargas",
          withdrawHere: "Ou vocÃª pode retirar aqui",
        },
        download: {
          title: "Baixar",
          name: "",
          goBtn: "Ir para baixar",
          des: "A loteria profissional da plataforma",
          playNow: "Imediatamente vÃ¡ jogar",
          lotteryGame: "Jogos da loteria",
          btn: "Baixar agora",
        },
        tabbar: {
          tabbarList: [
            {
              id: 1,
              name: "Homepage",
              imgAction: t("07d4"),
              img: t("2288"),
              to: "/home",
            },
            {
              id: 2,
              name: "Atividade",
              imgAction: t("b5ef"),
              img: t("5b0e"),
              to: "/activity",
            },
            {
              id: 3,
              name: "PromoÃ§Ã£o",
              imgAction: t("7268"),
              img: t("7268"),
              to: "/promotion",
            },
            {
              id: 4,
              name: "Carteira",
              imgAction: t("4c6e"),
              img: t("b2a5"),
              to: "/wallet",
            },
            {
              id: 5,
              name: "Meu",
              imgAction: t("e636"),
              img: t("6c7c"),
              to: "/mian",
            },
          ],
        },
        mian: {
          title: "Meu",
          historical: "HistÃ³rico de apostas",
          funding: "HistÃ³rico de transaÃ§Ãµes",
          loginLog: "HistÃ³rico de Acesso",
          message: "Mensagem",
          balance: "Todas as carteiras",
          totalwallet: "carteira total",
          refreshwallet: "Reciclagem com um clique",
          loginOut: "Deslogar",
          menuName1: "Conta salva",
          menuName2: "Autenticador do Google",
          menuName3: "Convidar amigos",
          menuName4: "Dinheiro no envelope",
          menuName5: "Guia para iniciantes",
          menuName6: "Sobre",
          menuName7: "Atendimento ao Cliente",
        },
        checkIn: {
          title: "Logar",
          attendanceRules: "Regras de acesso",
          txt: "Check-in de BÃ´nus diÃ¡rio",
          rule: "Termos",
          record: "HistÃ³rico",
          today: "Assinado hoje",
          received: "Recebido",
          day: "Dia",
          btn: "Logar",
          Receive: "Receber Presente",
          Best: "Boa sorte para vocÃª !!!",
          Congratulations: "ParabÃ©ns pra vocÃª !!!",
          already: "VocÃª jÃ¡ recebeu ?",
          ACCEPT: "Para receber",
        },
        checkInDes: {
          title: "Checar as regras",
          checkInDay: "Checar os dias",
          accumulatedAmount: "Saldo total",
          checkInBonus: "Checar o bÃ´nus",
          rulesDetails: "Detalhes das regras",
          tep1: "Clientes sem recargas nÃ£o podem fazer retiradas",
          tep2: "No primeiro dia ele jÃ¡ tem que fazer uma recarga",
          tep3: "O total de recarga exata deve ter as condiÃ§Ãµes e somente pode ser recebida uma vez ao dia",
          tep4: "A plataforma tem os Direitos finais de interpretar as atividas e se tiver qualquer questÃ£o por favor contate o serviÃ§o ao cliente",
          tep5: "O total de bÃ´nus atendido serÃ¡ distribuÃ­do apÃ³s sete vezes de depÃ³sito",
        },
        historicalBetting: { title: "HistÃ³rico de apostas" },
        loginLog: { title: "HistÃ³rico de login" },
        messageCenter: {
          title: "Centro de mensagens",
          readAll: "Leia tudo sobre",
          removeAll: "Deleta tudo",
          delTitle: "VocÃª tem certeza que quer deletar?",
          delall: "VocÃª tem certeza que quer deletar tudo?",
          readall: "VocÃª tem certeza que quer ver tudo?",
        },
        messageDes: { title: "Detalhes da menssagem" },
        lottery: {
          drawResult: "O resultado da loteria",
          period: "Rodadas",
          money: "Valor",
          multiply: "Quantidade",
          totalPrice: "Saldo total",
          pleaseBet: "Por favor aposte",
          election: "EleiÃ§Ã£o reversa",
        },
        colorLand: {
          tab1: "Total",
          tab2: "2 Same NO",
          tab3: "3 Match No",
          tab4: "Diff numbers",
          title1: "Selecione 2 nÃºmeros de apostas",
          tip1: "Se vocÃª escolher 2 nÃºmeros que forem o resultado correto, vocÃª irÃ¡ ganhar.",
          title2: "Escolha um par de nÃºmeros Ãºnicos",
          tip2: "Escolha pelo menos 1 par de nÃºmeros idÃªnticos e 1 nÃºmero diferente para fazer a aposta. Se o nÃºmero escolhido corresponder ao nÃºmero da aposta, vocÃª ganhou.",
          title3: "Escolha 3 nÃºmeros diferentes",
          tip3: "Se os 3 nÃºmeros coincidem com os nÃºmeros nos resultados, vocÃª ganha",
          title4: "Escolha 3 nÃºmeros de apostas",
          tip4: "Se os 3 nÃºmeros coincidem com os nÃºmeros nos resultados, vocÃª ganha",
          title5: "Escolha 3 nÃºmeros diferentes",
          tip5: "Selecione 3 ou mais nÃºmeros. TrÃªs nÃºmeros nos resultados de aberturas sÃ£o nÃºmero diferentes que coincidem com os nÃºmeros selecionados, entÃ£o vocÃª ganhou",
          title6: "Escolha 3 nÃºmeros consecutivos",
          tip6: "Se o nÃºmero escolhido for qualquer trÃªs nÃºmeros consecutivos, vocÃª serÃ¡ um vencedor",
          title7: "Escolha dois nÃºmeros diferentes",
          tip7: "Selecione 2 ou mais nÃºmeros. Dois nÃºmeros nos resultados escolhidos sÃ£o nÃºmeros diferentes que coincidem com o nÃºmero selecionado, entÃ£o vocÃª ganha",
          selectCon1: "Escolha dois nÃºmeros de apostasï¼š",
          selectCon2: "Escolha um par de nÃºmeros Ãºnicosï¼š",
          selectCon3: "Escolha 3 nÃºmeros Ãºnicosï¼š",
          selectCon4: "Escolha 3 diferentes nÃºmerosï¼š",
          selectCon5: "Escolha 2 diferentes nÃºmerosï¼š",
          gameType1: "Outros 3 nÃºmeros",
          gameType2: "TrÃªs nÃºmeros consecutivos",
          gameType3: "Dois nÃºmeros iguais",
          gameType4: "TrÃªs nÃºmeros iguais",
        },
        activity: { title: "Atividade" },
        activityDes: { title: "Detalhes da atividade" },
        usdt: {
          title: "Recarga de USDT",
          address: "txid",
          Raddress: "endereÃ§o de recarga",
          QRcode: "CÃ³digo QR",
          tit1: "comprar moeda",
          tit2: "transferir para endereÃ§o",
          tit3: "Selar o acordo",
          tit4: "espere a chegada",
          tip1: "1. O endereÃ§o de recarga Ã© alterado em tempo real. NÃ£o salve o endereÃ§o de recarga. Adquira novamente o endereÃ§o de recarga antes de cada recarga para evitar a perda da moeda digital. ",
          tip2: "2. ApÃ³s copiar o endereÃ§o de recarga, acesse a carteira de moeda digital que vocÃª estÃ¡ usando para sacar e transferir dinheiro. NÃ£o recarregue ativos digitais diferentes dos da blockchain selecionada, caso contrÃ¡rio, os ativos nÃ£o serÃ£o recuperados. ",
          tip3: "A retirada de recarga geralmente chega automaticamente dentro de 1-5 minutos, caso contrÃ¡rio, entre em contato com o atendimento ao cliente on-line.",
          tip4: "(Sem qualquer taxa de manuseio, como: retirar 100 para a conta 100) ",
        },
        trx: { uset: "TRX", title: "Recarga de TRX", address: "txid" },
        promotionNew: {
          title: "PromoÃ§Ã£o",
          dataOverview: "VisÃ£o geral dos dados",
          myTeam: "Meu time",
          upRecord: "Registros Adquiridos",
          tutorial: "Tutorial de promoÃ§Ã£o",
          myReward: "Minha recompensa",
          totalComm: "ComissÃ£o total de ontem",
          directComm: "ComissÃ£o direta",
          teamComm: "ComissÃ£o de equipe",
          directSubord: "NÃºmero de subalternos",
          totalTeams: "NÃºmero total de equipes",
          newToday: "Novas pessoas hoje",
          newTeam: "Equipes adicionadas hoje",
          weekComm: "ComissÃ£o total da semana",
          totalComm1: "ComissÃ£o total",
          QRcode: "Oprimir Salvar cÃ³digo QR",
          copyCode: "Copie o cÃ³digo do convite",
          copyLink: "link de cÃ³pia",
          rebateTable: "Tabela detalhada das comissÃµes",
          agencyLevel: "NÃ­vel da agÃªncia",
          teamNumber: "NÃºmero de membros da equipe",
          teamFlow: "TransaÃ§Ãµes do Time",
          teamRecharge: "Recarga da equipe",
          validDay: "Membro efetivoï¼šï¼ˆRecarga ou apostaï¼‰",
          commMethod: "CÃ¡lculo da comissÃ£o",
          Hierarchy: "Level",
          rebateRatio: "Percentagem de comissÃµes",
          firstMember: "NÃ­vel 1",
          secondMember: "NÃ­vel 2",
          thirdMember: "NÃ­vel 3",
          tierMember: "NÃ­vel 4",
          bettingTurnover: "Detalhes da aposta",
          agent: " membro de nÃ­vel",
          upTime: "Hora de pegar",
          receiveAmount: "Receber valor",
          operate: "Operar",
          details: "Detalhes",
          date: "Encontro: Data",
          directTeam: "Equipe direta",
          people: "Pessoas",
          pleaseChoose: "Por favor escolha",
          totalBet: "Valor total da aposta",
          totalAmount: "Valor total da comissÃ£o",
          Inquire: "Sustentavel",
          nickName: "Apelido",
          runningWater: "DeclaraÃ§Ã£o",
          condition: "Status",
          enable: "Activar",
          disabled: "Desativado",
          personalFlow: "DeclaraÃ§Ã£o pessoal",
          personalRecharge: "Recarga pessoal",
          rgistrationTime: "HorÃ¡rio de registro",
          subordinates: "NÃºmero de subalternos",
          year: "Ano",
          moon: "Lua",
          day: "Dia",
          selectList: [
            { name: "NÃ­vel 1", code: 1 },
            { name: "NÃ­vel 2", code: 2 },
            { name: "NÃ­vel 3", code: 3 },
            { name: "NÃ­vel 4", code: 4 },
            { name: "NÃ­vel 5", code: 5 },
            { name: "NÃ­vel 6", code: 6 },
          ],
          promoteMoney: "PromoÃ§Ã£o",
          uid: "UID",
        },
        verify: {
          title: "Autenticador do Google",
          unbind: "Desvincular/Alterar o autenticador",
          downTit: "Baixe e Cadastre-se",
          downTxt:
            "FaÃ§a o download do Google Authenticator, se a configuraÃ§Ã£o estiver concluÃ­da, clique no botÃ£o (Vincular) para vincular sua conta de loteria.",
          bind: "Ligar",
          downVerify: "Baixe o Google Authenticator",
          vexplainTit: "InstruÃ§Ãµes de do Binding Authenticator",
          list: [
            {
              txt: "VocÃª precisa salvar a chave de 16 bits gerada pela sua conta de loteria em um local seguro e copiÃ¡-la para a chave.",
            },
            { txt: "VocÃª precisa ativar o Google Authenticator" },
            {
              txt: "Adicione uma conta de jogo e copie a chave de 16 bits e insira",
            },
            {
              txt: "Gere automaticamente o cÃ³digo de verificaÃ§Ã£o de 6 dÃ­gitos apÃ³s a adiÃ§Ã£o bem-sucedida.",
            },
          ],
          vexplainNext: "Pule o tutorial",
          vbackupTit: "Chave de backup",
          vbackupTxt:
            "Envie uma chave importante e armazene-a em um local seguro. Se o telefone abandonar essa chave, vocÃª deverÃ¡ manter o identificador vital por 7 dias.",
          vsafetyTit: "SeguranÃ§a de verificaÃ§Ã£o",
          vsafetyTxt:
            "Envie o cÃ³digo de verificaÃ§Ã£o para o seu nÃºmero de celular",
          vsafetySms: "CÃ³digo de verificaÃ§Ã£o de celular",
          vsafetyTip:
            "Verifique se a seguranÃ§a nÃ£o estÃ¡ disponÃ­vel? Entre em contato com o atendimento ao cliente",
          vsafetySnsnull: "O cÃ³digo de verificaÃ§Ã£o nÃ£o pode ficar vazio",
          loginTit: "VerificaÃ§Ã£o de login do Google",
          loginTxt:
            "A proteÃ§Ã£o da conta estÃ¡ ativada. Conclua as seguintes operaÃ§Ãµes conforme solicitado",
          loginTip:
            "Por favor, abra o Aliyun APP ou Google Authenticator no seu celular e insira o cÃ³digo dinÃ¢mico de 6 dÃ­gitos",
          loginNum: "6 Digitos",
        },
        long: {
          title: "Assistente de tendÃªncia contÃ­nua longa",
          newTitle: "Mais recente TendÃªncia contÃ­nua longa",
          betTitle: "Minha aposta",
          expect: "Tempos",
          andDig: "soma grande",
          andSmall: "soma pequena  ",
          andodd: "soma singular",
          andeven: "soma mesmo",
          illustrate: "Explique",
          txt1: ' TendÃªncia continua longa" Ã© uma ferramenta assistente para rastreamento e estatÃ­sticas de Win Go, 5D, K3 e "para o resultado Ã© pequeno ou grande, simples ou duplo" nos resultados do jogo, pode fazer apostas rÃ¡pidas.',
          txt2: 'A probabilidade de grande, pequeno, simples e duplo em cada perÃ­odo Ã© a mesma. Se os resultados se mantiverem trÃªs consecutivos iguais, chamamos de " TendÃªncia continua longa". Geralmente usamos apostas mÃºltiplas fazendo "TendÃªncia contÃ­nua longa" de curte" ou "TendÃªncia continua longa punhado"',
          list: [
            {
              name: 'O que siugnifica "TendÃªncia contÃ­nuade londa de curte" ?',
              txt: 'Se o resultado mostrar o nÃºmero 5 "sozinho" por vezes consecutivas, vocÃª pode escolher apostas "doblo", este esquema de apostas Ã© chamado de "TendÃªncia ContÃ­nua Longa de curte"',
            },
            {
              name: 'O que significa "TendÃªncia contÃ­nua longa punhado"?',
              txt: 'Se o resultado mostrar 5 "single" consecutivos, vocÃª pode escolher apostas "single", este esquema de apostas Ã© chamado de "TÃªndencia de ccontinuidade Longa punhado";',
            },
            {
              name: "O que significa aposta mÃºltipla?",
              txt: 'MÃºltiplo Ã© uma maneira de apostar com valores de tempos diferentes, para garantir que a "TendÃªncia contÃ­nua longa corte" ou a "TendÃªncia contÃ­nua longa punhado" durante o processo de lucro contÃ­nuo.',
            },
          ],
          txt3: "O Ãºltimo dragÃ£o longo: Esta funÃ§Ã£o atualizarÃ¡ automaticamente os itens do jogo com o mesmo resultado em 5 sorteios de loteria consecutivos, o que Ã© conveniente para vocÃª julgar se deve cortar o dragÃ£o ou o dragÃ£o.",
          txt4: "Minha aposta: funÃ§Ã£o para facilitar a visualizaÃ§Ã£o do que vocÃª apostou e os resultados.",
        },
        shop: {
          currentPoints: "Pontos Atuais",
          Redeem: "Resgatar agora",
          pointsGo: "Resgatar Ponto  VÃ¡ agora",
          commodityOrder: "Pedido de produto",
          pointsRecord: "HistÃ³rico de Pontos",
          title: "Resgatar Ponto",
          pointsAvailable: "Pontos DisponÃ­veis",
          rule: "Regras de pontos",
          stock: "InventÃ¡rio",
          redeemed: "Resgatado",
          integral: "Pontos",
          productName: "Nome do Produto",
          exchange: "CondiÃ§Ãµes de resgate",
          name: "primeiro e Ãºltimo nome",
          address: "EndereÃ§o de recebimento",
          redeem: "Continuar resgate",
          checkOrder: "Ver pedido",
          addressEmpty: "O endereÃ§o nÃ£o pode estar vazio!",
          ordered: "Pedidos feitos",
          delivery: "Entrega em andamento",
          completed: "ConcluÃ­do",
          orderDetails: "Detalhes do pedido",
          orderTime: "Tempo de colocaÃ§Ã£o do pedido",
          orderStatus: "Detalhes do pedido",
          signTime: "Tempo de envio",
          signPhoto: "Fotos assinadas",
        },
        selections: {
          distanceDraw: "sorteio de distÃ¢ncia",
          champion: "1st",
          runnerUp: "2nd",
          ndRunner: "3rd",
          outof1: "1/16",
          outof2: "2/16",
          outof3: "3/16",
        },
        lotteryD: {
          rules: "Como jogar",
          LotteryTime: "loteria",
          seal: "selo",
          stPrize1: "1Âº PrÃªmio",
          stPrize2: "Segundo prÃªmio",
          stPrize3: "Terceiro PrÃªmio",
          Finalist: "Finalista",
          consolationprize: "prato tradicional",
          Doubledisc: "disco de dupla face",
          TraditionalDish: "prato tradicional",
          Doubleside: "dupla face",
          Choosenumber: "escolher nÃºmero",
          FourDigit: "rÃ¡dio de quatro dÃ­gitos",
          FourSlection: "Quatro Rs",
          duplicatenumber: "nÃºmero duplicado",
          numberFormat: "Formato de nÃºmero errado",
          Bigone: "A bell",
          Smallone: "pequeno milhÃ£o",
          Bothone: "Grande milhÃ£o + pequeno milhÃ£o",
          Addbet: "adicionar aposta",
          Randomnumber: "nÃºmero de grupo aleatÃ³rio",
          Machineselection: "SeleÃ§Ã£o de mÃ¡quina",
          Enternumber: "Digite o nÃºmero desejado",
          Concatenatedcode: "CÃ³digo concatenado (grupo de pacotes)",
          select1: "2D selecionar todos",
          select2: "3D selecionar todos",
          select3: "4D selecionar todos",
          select4: "cÃ³digo positivo 2D",
          select5: "PrÃªmio Especial 2D",
          select6: "Primeiro PrÃªmio 2D",
          select7: "2D",
          select8: "3D",
          SeventhPrize: "SÃ©timo PrÃªmio",
          EighthPrize: "Oitavo PrÃªmio",
          positivecode3: "cÃ³digo positivo 3D",
          SpecialPrize3: "PrÃªmio 3D",
          FirstPrize3: "Primeiro PrÃªmio 3D",
          SixthPrize: "Sexto PrÃªmio",
          positivecode4: "cÃ³digo positivo 4D",
          SpecialPrize4: "PrÃªmio Especial 4D",
          FirstPrize4: "4D Primeiro PrÃªmio",
          selectAll: "Falha ao selecionar todos",
          misses4: "4 erros",
          misses8: "8 erros",
          misses10: "10 misses",
          Enter: "digitar",
          Compound: "Duplex",
          selected: "VocÃª selecionou",
          bet: "aposta",
          CN: "Domingo",
          T2: "Na segunda",
          T3: "TerÃ§a",
          T4: "Quarta",
          T5: "Quinta",
          T6: "Sexta",
          T7: "Sabado",
          waitingdraw: "esperando o sorteio",
          grandPrize: "Grande PrÃªmio",
          firstprize: "primeiro prÃªmio",
          secondprize: "segundo prÃªmio",
          thirdprize: "terceiro prÃªmio",
          fourthprize: "Quarto PrÃªmio",
          fifthprize: "Quinto PrÃªmio",
          sixthprize: "sexto prÃªmio",
          seventhprize: "SÃ©timo PrÃªmio",
          eighthprize: "Oitavo PrÃªmio",
          northernvietnam: "Norte do vietnÃ£",
          southvietnam: "VietnÃ£ do Sul",
          vietnamchinese: "ChinÃªs vietnamita",
        },
        finance: {
          title: "Seguro",
          titleRes: "Registro Seguro",
          tip1: "DiÃ¡ria",
          tip2: "Ganhos calculados a cada minuto",
          shop: "Shopping Pontos",
          shopTip: "Resgate gratuito de bens de luxo maciÃ§os",
          lumpSum: "montante fixo",
          security: "SeguranÃ§a financeira",
          transferIn: "transferir em",
          transferOut: "transferir",
          Every: "Todo",
          minute: "receita por minuto",
          earnings: "receita gerada",
          cumulativeIncome: "Renda acumulada",
          estimatedIncome: "Renda Estimada",
          income: "renda",
          tip3: "Os fundos estÃ£o seguros e protegidos e podem ser transferidos a qualquer momento",
          history: "registro de histÃ³ria",
          setIncome: "renda de liquidaÃ§Ã£o",
          allRecords: "todos os registros",
          amountShare: "Quantidade por cÃ³pia",
          enter: "Por favor, insira a quantidade",
          availableBalance: "Saldo DisponÃ­vel",
          outAmount: "valor da transferÃªncia",
          inAmount: "Valor da transferÃªncia",
          all: "tudo",
          balanceAvailable: "Saldo insuficiente disponÃ­vel",
          noIncome: "Sem Renda",
          noIncomeTip: "Se a renda Ã© atualmente transferida",
        },
        financeRule: {
          title: "Saiba mais sobre cofres",
          Rtip: "Retorno mÃ­nimo, taxa de juros diÃ¡ria",
          Rtip1: "Depois que o saldo da carteira Ã© transferido, cada",
          Rtip2: "Ganhos calculados a cada minuto",
          Rtip3:
            "Os ganhos serÃ£o liquidados ao transferir para dentro ou para fora pela segunda vez, e os Ãºltimos ganhos serÃ£o transferidos para o saldo da carteira",
          Rtip4:
            "O saldo da carteira transferido para o cofre deve ser transferido em unidades",
          Eg: "Por exemplo",
          Rtip5: "Uma porÃ§Ã£o",
          Rtip6: ", transferido para 2 cÃ³pias como",
          Rtip7: ", 10 cÃ³pias para",
          Rtip8: ", 50 cÃ³pias para",
          Rtip9: ", o valor da transferÃªncia deve ser um mÃºltiplo de 1.000",
          Rtip10:
            "Sob a condiÃ§Ã£o de que sua renda seja garantida, vocÃª pode transferir o saldo do cofre para o saldo da carteira a qualquer momento, e o valor da transferÃªncia deve ser um mÃºltiplo do nÃºmero de cÃ³pias",
          friendly: "lembrete amigÃ¡vel",
          friendlytxt:
            'Por favor, nÃ£o faÃ§a transferÃªncias de entrada e saÃ­da com frequÃªncia. Os ganhos serÃ£o calculados a partir de 1 minuto apÃ³s o depÃ³sito. Se o valor acumulado de um Ãºnico valor de ganho for inferior a 0,01, ele nÃ£o serÃ¡ incluÃ­do nos "ganhos".',
          Safety: "SeguranÃ§a",
          SafetyTxt:
            "A equipa tÃ©cnica de seguranÃ§a garante a seguranÃ§a dos seus fundos",
          SafetyTip:
            "Para garantir a seguranÃ§a de seus fundos, Ã© recomendÃ¡vel que vocÃª transfira o saldo da sua carteira para um cofre",
        },
        flight: {
          title: "Jogos para pilotar",
          tit: "Jogos de velocidade",
          sub: " ate queimar",
          tip: "se deve entrar no jogo",
          btn: "entre agora",
          gameName: "Aviator",
          gameTip: "Voe e multiplique seus lucros",
          enterGameName: "Por favor insira o nome do jogo",
        },
      },
    };
  },
  bd2d: function (e, a, t) {
    e.exports = t.p + "img/long.3de1acf5.svg";
  },
  bfff: function (e, a, t) {
    "use strict";
    t.d(a, "b", function () {
      return n;
    }),
      t.d(a, "a", function () {
        return i;
      }),
      t.d(a, "c", function () {
        return o;
      });
    var n = 2,
      i = "/home/daman",
      o = "/home";
  },
  c326: function (e, a, t) {
    "use strict";
    t("4160"), t("159b");
    var n = t("2b0e"),
      i =
        (t("d3b7"),
        function () {
          var e = this,
            a = e.$createElement,
            t = e._self._c || a;
          return t(
            "div",
            { staticClass: "msg" },
            [
              t(
                "transition",
                {
                  attrs: { type: "transition", mode: "out-in" },
                  on: {
                    "after-enter": e.afterEnter,
                    "after-leave": e.afterLeave,
                  },
                },
                [
                  t(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.show,
                          expression: "show",
                        },
                      ],
                      staticClass: "msg-content",
                    },
                    [e._v(" " + e._s(e.title) + " ")]
                  ),
                ]
              ),
            ],
            1
          );
        }),
      o = [],
      r = {
        data: function () {
          return { title: "", show: !1, resolve: "", reject: "", promise: "" };
        },
        methods: {
          showMsgBox: function (e) {
            var a = this;
            return (
              (this.title = e),
              (this.show = !0),
              (this.promise = new Promise(function (e, t) {
                (a.resolve = e), (a.reject = t);
              })),
              this.promise
            );
          },
          destroy: function () {
            this.resolve(),
              this.$destroy(),
              document.body.removeChild(this.$el);
          },
          afterEnter: function () {
            var e = this;
            setTimeout(function () {
              e.show = !1;
            }, 1200);
          },
          afterLeave: function () {
            this.destroy();
          },
        },
      },
      l = r,
      s = (t("0cb6"), t("2877")),
      m = Object(s["a"])(l, i, o, !1, null, "1dcba851", null),
      u = m.exports,
      c = null,
      d = function (e) {
        (c = new e()), document.body.appendChild(c.$mount().$el);
      };
    u.install = function (e) {
      var a = e.extend(u);
      e.prototype.$msg = function (e, t) {
        return (
          c || d(a),
          c.showMsgBox(e).finally(function () {
            (c = null), t && t();
          })
        );
      };
    };
    var g = u,
      h = [g];
    function p(e) {
      h.forEach(function (a) {
        e.use(a);
      });
    }
    var b = {};
    (b.install = p), n["a"].use(b);
  },
  d099: function (e, a, t) {
    "use strict";
    t("1933");
  },
  d663: function (e, a, t) {
    "use strict";
    t("b013");
  },
  d930: function (e, a, t) {
    "use strict";
    t("c975"),
      t("a15b"),
      t("a9e3"),
      t("b680"),
      t("d3b7"),
      t("ac1f"),
      t("25f0"),
      t("6062"),
      t("3ca3"),
      t("5319"),
      t("1276"),
      t("ddb0");
    var n,
      i = t("2909"),
      o = t("2b0e"),
      r = (t("c326"), t("d399")),
      l = {
        toastLoading: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "åŠ è½½ä¸­...",
            a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1e4;
          r["a"].loading({ message: e, duration: a, forbidClick: !0 });
        },
        getTime: function (e) {
          var a = new Date(1e3 * e),
            t = a.getFullYear() + "-",
            n =
              (a.getMonth() + 1 < 10
                ? "0" + (a.getMonth() + 1)
                : a.getMonth() + 1) + "-",
            i = (a.getDate() < 10 ? "0" + a.getDate() : a.getDate()) + " ",
            o = (a.getHours() < 10 ? "0" + a.getHours() : a.getHours()) + ":",
            r =
              (a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes()) +
              ":",
            l = a.getSeconds() < 10 ? "0" + a.getSeconds() : a.getSeconds();
          return t + n + i + o + r + l;
        },
        getData: function (e) {
          var a = new Date(1e3 * e),
            t = a.getFullYear() + "/",
            n = a.getMonth() + 1 + "/",
            i = a.getDate() + "";
          a.getHours(), a.getMinutes(), a.getSeconds();
          return t + n + i;
        },
        mobile: function (e) {
          var a = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
          return !!a.test(e);
        },
        cardID: function (e) {
          var a =
            /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
          return !!a.test(e);
        },
        formatCurrency: function (e) {
          if (!e) return 0;
          var a = "";
          return (
            e > 1e6
              ? ((e /= 1e6), (a = "M"))
              : e > 1e3 && ((e /= 1e3), (a = "K")),
            e.toString().indexOf(".") > -1 && (e = e.toFixed(2)),
            e.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") + a
          );
        },
        getCurrencySymbol: function () {
          return o["a"].prototype.globalConfig.clientCfg.DollarSign;
        },
        isYueNanCurrencySymbol: function () {
          return "â‚«" == o["a"].prototype.globalConfig.clientCfg.DollarSign;
        },
        isYinDuCurrencySymbol: function () {
          return "â‚¹" == o["a"].prototype.globalConfig.clientCfg.DollarSign;
        },
        getUserAgent: function () {
          var e = -1,
            a = navigator.userAgent.toLowerCase();
          return (
            (e =
              -1 != a.indexOf("windows")
                ? 0
                : -1 != a.indexOf("android")
                ? 1
                : -1 != a.indexOf("iphone")
                ? 2
                : -1 != a.indexOf("ipad")
                ? 3
                : -1),
            e
          );
        },
        numFilter: function (e) {
          var a = "";
          return (
            (a =
              "R$" == o["a"].prototype.globalConfig.clientCfg.DollarSign
                ? parseFloat(e).toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                  })
                : parseFloat(e).toFixed(2)),
            a
          );
        },
        numFilter2: function (e, a, t) {
          if (e) {
            if (((e = e.toString()), 1 == t)) {
              var n = parseFloat(e).toFixed(2);
              0 == n.charAt(n.length - 1) && (a = 1);
            }
            var i = e.indexOf(".");
            return (
              (e = -1 !== i ? e.substring(0, a + i + 1) : e.substring(0)),
              parseFloat(e).toFixed(a)
            );
          }
        },
        numFilter3: function (e) {
          var a = parseFloat(e).toFixed(3);
          return a;
        },
        accMul: function (e, a) {
          var t = 0,
            n = e.toString(),
            i = a.toString();
          try {
            t += n.split(".")[1].length;
          } catch (o) {}
          try {
            t += i.split(".")[1].length;
          } catch (o) {}
          return (
            (Number(n.replace(".", "")) * Number(i.replace(".", ""))) /
            Math.pow(10, t)
          );
        },
        random: function (e, a) {
          if (e >= 0 && a > 0 && a >= e) {
            var t = a - e + 1;
            return Math.floor(Math.random() * t + e);
          }
          return 0;
        },
        findFlagArrays: function (e) {
          var a = [],
            t = {
              arr: e.arr,
              n: e.n,
              getFlagArray: function () {
                if (e.arr.length < e.n) return [];
                if (e.n < 1) return [];
                for (
                  var a, t = this.arr.length, n = [], i = !0, o = 0;
                  o < t;
                  o++
                )
                  o < this.n ? n.push(1) : n.push(0);
                this.printf(n);
                while (i) {
                  for (var r = 0, l = 0, s = 0, m = 0; m < t - 1; m++)
                    if (1 === n[m] && 0 === n[m + 1]) {
                      (r = m), (n[m] = 0), (n[m + 1] = 1);
                      break;
                    }
                  for (var u = 0; u < r; u++) 1 === n[u] && l++;
                  for (var c = 0; c < r; c++) n[c] = c < l ? 1 : 0;
                  a = this.printf(n);
                  for (var d = 0; d < t; d++)
                    d < t - this.n && 0 === n[d] && s++,
                      d >= t - this.n && 1 === n[d] && s++;
                  s === t && (i = !1);
                }
                return console.log(a), a;
              },
              printf: function (e) {
                for (var t = [], n = 0; n < this.arr.length; n++)
                  1 === e[n] && t.push(this.arr[n]);
                return a.push(t), a.length;
              },
            };
          return t;
        },
        getBetType: function (e) {
          for (var a = [], t = 0; e.length > t; t++)
            "3" != e[t] &&
            "4" != e[t] &&
            "5" != e[t] &&
            "6" != e[t] &&
            "7" != e[t] &&
            "8" != e[t] &&
            "9" != e[t] &&
            "10" != e[t] &&
            "11" != e[t] &&
            "12" != e[t] &&
            "13" != e[t] &&
            "14" != e[t] &&
            "15" != e[t] &&
            "16" != e[t] &&
            "17" != e[t] &&
            "18" != e[t]
              ? "A" != e[t] && "B" != e[t]
                ? ("C" != e[t] && "D" != e[t]) || a.push(3)
                : a.push(2)
              : a.push(1);
          return (
            (a = a.sort(function (e, a) {
              return e - a;
            })),
            Object(i["a"])(new Set(a)).join(",")
          );
        },
        throttle: function (e) {
          var a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 500,
            t =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
          t
            ? n ||
              ((n = !0),
              "function" === typeof e && e(),
              setTimeout(function () {
                n = !1;
              }, a))
            : n ||
              ((n = !0),
              setTimeout(function () {
                (n = !1), "function" === typeof e && e();
              }, a));
        },
        getSort: function (e) {
          var a = [];
          return (
            (a = e.sort(function (e, a) {
              return e - a;
            })),
            a
          );
        },
        containsNumberfunction: function (e) {
          var a, t, n;
          (t = e.split("")), (n = t.reverse());
          for (var i = 0; n.length > i; i++)
            if (!isNaN(n[i])) return (a = n.length - 1 - i), a;
        },
        isNumber: function (e) {
          var a, t, n;
          (t = e.split("")), (n = t.reverse());
          for (var i = 0; n.length > i; i++) {
            if (!isNaN(n[i])) {
              a = !0;
              break;
            }
            a = !1;
          }
          return a;
        },
      };
    o["a"].prototype.utils = l;
  },
  e5a6: function (e, a, t) {
    "use strict";
    t("908d");
  },
  e636: function (e, a) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAAKEklEQVRoBe1aa4yVRxmeme87t72wZ8u2yOIqxQq2pYtSoJfEVOWPqbbS1qqJqRr9gUnTNJqYqjEG/2ioP0xNTUFjAsQYU2r806aJtYjGZqUIFCilJiSmStkLXRZYYHfPbXyed7759jvnfOd0d9k0xjD0nJl5573PO+87c7ZKvVs7V7zOln64zdq16/fV4Z5Wyk70LrUzH1pt6xYaJ5qAMyaw2Y5Ole9eovJLelSQySrjMauVsqpWKqpaLiul9V4Pb93P/PgntnbrumbBo4UOe6l/oHmhkZdoNZLN2XyX0yjX1a3060e0aFWjNviwr1WrQiwUjWymb7zJZgudSgfBMX388LrkehPBaL5gMz09KmNClS10qEy+oMwbR5vwYiZnlNpKP491dNqJ6/qarKqjHAP3MJdXQTarwmwe3PPoc0qHwZg+fmQZucYu537Q3e5DQzkuweiysjV7g137sSZpotZINv/98a6e/1xYen358oqBoZkb1wzG+i7KYGrlyntKH74ZEddChUYpF65fZmsjI7a8+pZUojBJMByGw+rOO9TkbetkD5Jrfhx7iQCEwJ7LL76oytPTqjQ9hX7K48V93T4Qyk0LwozKYJe500vGhptwYuq5DGLq0TD3J5PLbM7kCirM5bDbOdlljlXY06tf23+eDMUG2eVaZbOt1SSMGcocW4sPelW5MGEHN6yNCbwqQlCLkNmDsIZeWq32bEyQzWXfz0nMWSRBGqVQApp+/fAtMkh+Xezu7jvb0fn8ud6llyaXLR+Z/sCq7cn192Qce7WVtMkblm9VQbAjCENlsJ/c0yCTUdq4GGHCaEVLeF0kNSKOFgrbZ65c3sGICnc+I5HFcWnqipxF2al3OQRtpb+t1LDJZN7nNA9Fe8yVCTBGzyRMy8J/nmjJp+7wNFqwQqnlp8tlK2kSTKuZigqQQeimWtWlT5vN/rmRbt7zYaXu4Zk6rbQdzmQkIY73FI/OhVFL00hsH344OP/Svke0Ce42meCjJgyLgQlzcNG4yYT/Mib4q+nI/FYfOXK2lbA6ARPFYnHq4uSE1lr8DIboAxkjEzvfCyyCJ9ZR+5wMrZ9GMXnMC6wTwDPtF8gYlSfBlHNudIgQDVzPdcwDwIkbN63jitVyk3msjdLKapdAaJXSyAVVWIcxjzl7yRfAMTgXgkMpWm31wuoE9JMabdiEJ6yySNrMFWBK3jXjGIKZxD97CmACAkcIm1ad2TX60KF/e+bX+jl5oC6KWlFMr1x11ASZQUkZSBHSdPgJffzgX1rReHjbZEeki8uW20q5Mig3K6QHue9xwVb229vWx9FCUFprK+BcsbjPXdnKKnfqTWWeeVpyEG800qzdkcY0CWvrIl7C6JbekyfU5fUbXQbl6Y3qAg8Zgv9JnNwnkkyT47YWSBaltrjA8T7m7mS8GrvrMTOqsuorSYaN47qD1rgolzsAxz+4UnI/84gkExww/iP3ti4ARlsBcmKZ94HI8w++0VgABKmqDvZEs9SurQKnldoHqk+y/rpajGcE/B6yJjPJYS86T7/VlkdbC3CZ+RSEICUx4cHfNAGtip6bF2j9TQFc7ReEHKWgM0FoR3J5e7az204U++65Wr6LQt/Wf+d6ewcDHTyAQrMJZXJAB6aIgnMF5+AdjF8NTXaffvPo8+00aRKAor7RaHMADDU3kpXNV6y4hAqca25dLmHabNfHD323UVidAPj4FWzp3SRkCZTbHHo/ZskUgYgeDxPc6JYnzI8fRu3Rs6XXSxwJw81kzjkrGcqW9NYCl/9JLwOpaKiZ6FH3CE+2wdujROWAcaoAv5/HeCAiMaiFgSudiTkkeoFyGKMruNBbm6j+ibspyOMFp9WsEFrghNEqJ4jMamIpF1u32IJA2+8l0bz5oqG4a1YghRAeC01aAGiSTyxgWbX6B2SbN2YXZzWNGXnt6Xvy4RxNZrSG7eab8m7gvmMBnC6vVW41Wt3PMbWkC8T/wpgwPwczCHFPIAjBGMrt4VtB791bIr1vdWHqgb4fy+U+bXHQEIqbgsAMoC8iPC8jyfFu+iquky/nv/rIr/W2bZH6nvJaP3cPtN2CubNxmHbbNlP9ze8+g3TykNbmDhOYFVJCjMFjzB7A+PfqwftfWMwtWxQDJvsHHkW0P4X4CvhygOLygoARSIm4kwPmH71iqsYrQKnHcdn5xXyd1Ih/VQac7+tbjzvGEBTPOmWpPD5rVqvwG19XZtUqpUbHVO07T8RG1BmiVAkLd+ljhw43KjbX+YINGF+y5E5kDSjPZ5PzePaz96qO3btU+Ze/UqUnf6pMqRLtRrQjKEp+N+oMMRpGHP77XJVO4i3YAPwaeFAbvUEeoryTrfmIKh48oC498KCqvTKEkMG1iaHDaiuKJ4wgTMKLPVTQ+h8Ip41JxeY6XrABbxszAwWzVM59EDpZXAOQt53CTnEZR0a0goNPSZ94Db/Dzb+F8yeJKGq1Y9VabUOsFC70diZ6icPz1lRhiDsTKKy0Ss6HNcChQXhws96S3ob22EL1WLABuHo8hnv2EJWAIcpASVGGSkNJjjV6Km+jcGGpZVh5xb0hsC7+0WS+hiw4hCgIP9Svh4pDGGY5Zzw7xV34yO8iYki0E3xOwPvubHBHwlImyNyVfevUe5+FqLBvqFKPYvwUwl/uhLOGuIMrno5CiAbCMDzowsd7zo5cdR3wOixKDwNYcu/DzuxCf/KM1hfx2//F4Wzu5FhHx66z3d33sVovirD/FybzOgPjhcIAjuEXcLvdgjx/O2K5wHyP4Je4xm91GEqIYC/Qy+FFGKEnThQ+iTEiztGeAvLfQLRXLe36o96/H/lhbq2tAba/v2N0dHQn7utfhnToQSVc8YkrsCjGQ5s4wJGycqD9mMbIgaZBER8x3hkcFbSE1vodvAJ+gAK3MwFsGrY0YDgIX8Cr494kBQ8jXIbsQY96RagA4FCGWUfg7qCKd53XvafdTggfGtFkFNbTmtY/gyHfTltKpYDyexuVJzGfSEjs6HFc3UuM4OhphUImTyv0wBNczN3jMaJjQRN69FxL4MtYuKV8Wfst/Hlxd8qK/MrTBE9TXpBioShONEIUdMrw3edfuoSLgV7BmC6htKy5N2TMWxzUpI4DaPVQ2krqDmBvX0pDJsx7yj9mOZcxd4RVV7wMPG8g58SBcoLr4ZxH/OI1b2iacKtTfyRKNaC/WtkCI5AVUlqkTCTdKczN8N7Dug81b6y8zgEXQ8RIqo4WGYWFiI93QrTusHjsduMPm1/y02SfagARYMTHuzo7+pAdXk4ScBx7nUqLXugJp0L0MBViSHljZdHBkkaIgYLjFJbdi3YIDpxCYviR+vznAvwvAV8ji7TWMgulIeOnu01Q4IuI9y34U80ql3VcNokzU0oGcrXCZ60oDRMvymbgM4nPEADPBl255/Annwtp8q/B/hc98F8sdbw2Nk52OAAAAABJRU5ErkJggg==";
  },
  ed95: function (e, a, t) {
    e.exports = {
      homepage: {
        loadText: {
          loadMore: "à¹‚à¸«à¸¥à¸”à¹€à¸žà¸´à¹ˆà¸¡",
          loading: "à¸à¸³à¸¥à¸±à¸‡à¹‚à¸«à¸¥à¸”...",
          nomore: "à¹„à¸¡à¹ˆà¸¡à¸µà¸­à¸µà¸à¹à¸¥à¹‰à¸§",
        },
        loadingText: "à¸à¸²à¸£à¸£à¹‰à¸­à¸‡à¸‚à¸­",
        login: "à¹€à¸‚à¹‰à¸²à¸ªà¸¹à¹ˆà¸£à¸°à¸šà¸š",
        numberFormat: "à¸£à¸¹à¸›à¹à¸šà¸šà¹€à¸šà¸­à¸£à¹Œà¹‚à¸—à¸£",
        mobile: "à¹‚à¸—à¸£à¸¨à¸±à¸žà¸—à¹Œ",
        mobileNumber: "à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹‚à¸—à¸£à¸¨à¸±à¸žà¸—à¹Œ",
        pwd: "à¸£à¸«à¸±à¸ªà¸œà¹ˆà¸²à¸™ ",
        oldpwd: "à¸£à¸«à¸±à¸ªà¸œà¹ˆà¸²à¸™à¹€à¸à¹ˆà¸²",
        pwds: "à¸¢à¸·à¸™à¸¢à¸±à¸™à¸£à¸«à¸±à¸ªà¸œà¹ˆà¸²à¸™",
        pwdsTip:
          "à¸£à¸«à¸±à¸ªà¸œà¹ˆà¸²à¸™à¹„à¸¡à¹ˆà¸ªà¸­à¸”à¸„à¸¥à¹‰à¸­à¸‡à¸à¸±à¸™",
        register: "à¸¥à¸‡à¸—à¸°à¹€à¸šà¸µà¸¢à¸™",
        registerTip:
          "à¸¡à¸µà¸šà¸±à¸à¸Šà¸µà¸­à¸¢à¸¹à¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸‚à¹‰à¸²à¸ªà¸¹à¹ˆà¸£à¸°à¸šà¸š~",
        forgotPwd: "à¸„à¹‰à¸™à¸«à¸²à¸£à¸«à¸±à¸ªà¸œà¹ˆà¸²à¸™ ",
        customerService:
          "à¸•à¸´à¸”à¸•à¹ˆà¸­à¸à¹ˆà¸²à¸¢à¸šà¸£à¸´à¸à¸²à¸£à¸¥à¸¹à¸à¸„à¹‰à¸²",
        resetPwd: "à¸•à¸±à¹‰à¸‡à¸£à¸«à¸±à¸ªà¸œà¹ˆà¸²à¸™à¹ƒà¸«à¸¡à¹ˆ ",
        verificationCode: "à¸£à¸«à¸±à¸ªà¸•à¸£à¸§à¸ˆà¸ªà¸­à¸š",
        recommendationCode: "à¸£à¸«à¸±à¸ªà¹à¸™à¸°à¸™à¸³",
        agree: "à¸‰à¸±à¸™à¸¢à¸­à¸¡à¸£à¸±à¸š",
        privacy:
          "à¸™à¹‚à¸¢à¸šà¸²à¸¢à¸„à¸§à¸²à¸¡à¹€à¸›à¹‡à¸™à¸ªà¹ˆà¸§à¸™à¸•à¸±à¸§",
        submit: "à¸ªà¹ˆà¸‡",
        network: "à¸­à¸´à¸™à¹€à¸•à¸­à¸£à¹Œà¹€à¸™à¹‡à¸•à¸œà¸´à¸”à¸›à¸à¸•à¸´ ",
        tips: "à¸„à¸³à¸Šà¸µà¹‰à¹à¸™à¸°",
        remark: "à¸‚à¹‰à¸­à¸ªà¸±à¸‡à¹€à¸à¸•",
        close: "à¸›à¸´à¸”",
        full: "à¹€à¸•à¹‡à¸¡à¸ˆà¸­",
        zoomOut: "à¸‹à¸¹à¸¡à¸­à¸­à¸",
        signout:
          "à¸„à¸¸à¸“à¸•à¹‰à¸­à¸‡à¸à¸²à¸£à¸­à¸­à¸à¸ˆà¸²à¸à¸£à¸°à¸šà¸šà¸«à¸£à¸·à¸­à¹„à¸¡à¹ˆ",
        quit: "à¸•à¹‰à¸­à¸‡à¸à¸²à¸£à¸­à¸­à¸à¸ˆà¸²à¸à¹€à¸à¸¡à¸™à¸µà¹‰à¸«à¸£à¸·à¸­à¹„à¸¡à¹ˆ?",
        enterGame:
          "à¸„à¸¸à¸“à¹à¸™à¹ˆà¹ƒà¸ˆà¸«à¸£à¸·à¸­à¸§à¹ˆà¸²à¸•à¹‰à¸­à¸‡à¸à¸²à¸£à¹€à¸‚à¹‰à¸²à¸ªà¸¹à¹ˆà¹€à¸à¸¡?",
        cancel: "à¸¢à¸à¹€à¸¥à¸´à¸",
        confirm: "à¸¢à¸·à¸™à¸¢à¸±à¸™",
        success: "à¸ªà¸³à¹€à¸£à¹‡à¸ˆ",
        cancelled: "à¸¢à¸à¹€à¸¥à¸´à¸",
        fail: "à¸¥à¹‰à¸¡à¹€à¸«à¸¥à¸§",
        del: "à¸¥à¸š",
        copy: "à¸„à¸±à¸”à¸¥à¸­à¸",
        copySuccess: "à¸„à¸±à¸”à¸¥à¸­à¸à¸ªà¸³à¹€à¸£à¹‡à¸ˆ",
        required: "à¸ˆà¸³à¹€à¸›à¹‡à¸™à¸•à¹‰à¸­à¸‡à¸à¸£à¸­à¸",
        pleaseRequired:
          "à¹‚à¸›à¸£à¸”à¸à¸£à¸­à¸à¸Šà¹ˆà¸­à¸‡à¸—à¸µà¹ˆà¸ˆà¸³à¹€à¸›à¹‡à¸™à¸•à¹‰à¸­à¸‡à¸à¸£à¸­à¸",
        passwordError:
          "à¸„à¸§à¸²à¸¡à¸¢à¸²à¸§à¸£à¸«à¸±à¸ªà¹„à¸¡à¹ˆà¸•à¹ˆà¸³à¸à¸§à¹ˆà¸² 6 à¸«à¸¥à¸±à¸ à¸•à¹‰à¸­à¸‡à¸¡à¸µà¸•à¸±à¸§à¸­à¸±à¸à¸©à¸£à¹à¸¥à¸°à¸•à¸±à¸§à¹€à¸¥à¸‚",
        pleaseEmail:
          "à¸à¸£à¸¸à¸“à¸²à¸à¸£à¸­à¸à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸­à¸µà¹€à¸¡à¸¥à¸—à¸µà¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡ ",
        informationTip:
          "à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸à¸²à¸£à¹€à¸‚à¹‰à¸²à¸ªà¸¹à¹ˆà¸£à¸°à¸šà¸šà¸«à¸¡à¸”à¸­à¸²à¸¢à¸¸ à¸à¸£à¸¸à¸“à¹€à¸‚à¹‰à¸²à¸ªà¸¹à¹ˆà¸£à¸°à¸šà¸šà¹ƒà¸«à¸¡à¹ˆ ",
        informationTip1:
          "à¸šà¸±à¸à¸Šà¸µà¸‚à¸­à¸‡à¸„à¸¸à¸“à¸–à¸¹à¸à¹€à¸‚à¹‰à¸²à¸ªà¸¹à¹ˆà¸£à¸°à¸šà¸šà¸—à¸µà¹ˆà¸­à¸·à¹ˆà¸™ à¹‚à¸›à¸£à¸”à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸£à¸«à¸±à¸ªà¸œà¹ˆà¸²à¸™à¸‚à¸­à¸‡à¸„à¸¸à¸“à¹ƒà¸«à¹‰à¸—à¸±à¸™à¹€à¸§à¸¥à¸²",
        noData:
          "à¹„à¸¡à¹ˆà¸¡à¸µà¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸—à¸µà¹ˆà¸ªà¸²à¸¡à¸²à¸£à¸–à¹ƒà¸Šà¹‰à¹„à¸”à¹‰",
        presaleRule:
          'à¹€à¸žà¸·à¹ˆà¸­à¸›à¸à¸›à¹‰à¸­à¸‡à¸ªà¸´à¸—à¸˜à¸´à¹Œà¹à¸¥à¸°à¸œà¸¥à¸›à¸£à¸°à¹‚à¸¢à¸Šà¸™à¹Œà¸—à¸µà¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡à¸•à¸²à¸¡à¸à¸Žà¸«à¸¡à¸²à¸¢à¸‚à¸­à¸‡à¸œà¸¹à¹‰à¹ƒà¸Šà¹‰à¸—à¸µà¹ˆà¹€à¸‚à¹‰à¸²à¸£à¹ˆà¸§à¸¡à¹ƒà¸™à¸à¸²à¸£à¸‚à¸²à¸¢à¸¥à¹ˆà¸§à¸‡à¸«à¸™à¹‰à¸²à¹à¸¥à¸°à¸£à¸±à¸à¸©à¸²à¸¥à¸³à¸”à¸±à¸šà¸›à¸à¸•à¸´à¸‚à¸­à¸‡à¸à¸²à¸£à¸‚à¸²à¸¢à¸¥à¹ˆà¸§à¸‡à¸«à¸™à¹‰à¸² à¸à¸Žà¸•à¹ˆà¸²à¸‡à¹† à¹„à¸”à¹‰à¸à¸³à¸«à¸™à¸”à¸‚à¸¶à¹‰à¸™à¸•à¸²à¸¡à¸‚à¹‰à¸­à¸•à¸à¸¥à¸‡à¹à¸¥à¸°à¸à¸Žà¹€à¸à¸“à¸‘à¹Œà¸‚à¸­à¸‡à¸à¸Žà¸«à¸¡à¸²à¸¢à¹à¸¥à¸°à¸‚à¹‰à¸­à¸šà¸±à¸‡à¸„à¸±à¸šà¸‚à¸­à¸‡à¸›à¸£à¸°à¹€à¸—à¸¨ à¸šà¸—à¸—à¸µà¹ˆ 1 à¸„à¸³à¸ˆà¸³à¸à¸±à¸”à¸„à¸§à¸²à¸¡ 1.1 à¸„à¸³à¸ˆà¸³à¸à¸±à¸”à¸„à¸§à¸²à¸¡à¸‚à¸­à¸‡à¸à¸²à¸£à¸‚à¸²à¸¢à¸¥à¹ˆà¸§à¸‡à¸«à¸™à¹‰à¸²: à¸«à¸¡à¸²à¸¢à¸–à¸¶à¸‡ à¸£à¸¹à¸›à¹à¸šà¸šà¸à¸²à¸£à¸‚à¸²à¸¢à¸—à¸µà¹ˆà¸œà¸¹à¹‰à¸„à¹‰à¸²à¸ˆà¸±à¸”à¸«à¸²à¸œà¸¥à¸´à¸•à¸ à¸±à¸“à¸‘à¹Œà¸«à¸£à¸·à¸­à¹à¸œà¸™à¸šà¸£à¸´à¸à¸²à¸£ à¸£à¸§à¸šà¸£à¸§à¸¡à¸„à¸³à¸ªà¸±à¹ˆà¸‡à¸‹à¸·à¹‰à¸­à¸‚à¸­à¸‡à¸œà¸¹à¹‰à¸šà¸£à¸´à¹‚à¸ à¸„à¸œà¹ˆà¸²à¸™à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸¡à¸·à¸­à¸œà¸¥à¸´à¸•à¸ à¸±à¸“à¸‘à¹Œà¸à¹ˆà¸­à¸™à¸à¸²à¸£à¸‚à¸²à¸¢ à¹à¸¥à¸°à¸ˆà¸±à¸”à¸«à¸²à¸ªà¸´à¸™à¸„à¹‰à¸²à¹à¸¥à¸°à¸«à¸£à¸·à¸­à¸šà¸£à¸´à¸à¸²à¸£à¹à¸à¹ˆà¸œà¸¹à¹‰à¸šà¸£à¸´à¹‚à¸ à¸„à¸•à¸²à¸¡à¸‚à¹‰à¸­à¸•à¸à¸¥à¸‡à¸à¹ˆà¸­à¸™à¸«à¸™à¹‰à¸²1.2 à¸£à¸¹à¸›à¹à¸šà¸šà¸à¸²à¸£à¸‚à¸²à¸¢à¸¥à¹ˆà¸§à¸‡à¸«à¸™à¹‰à¸²à¹€à¸›à¹‡à¸™à¹à¸šà¸šà¸ˆà¸³à¸¥à¸­à¸‡ "dep os it" . "Dep os it" à¸«à¸¡à¸²à¸¢à¸–à¸¶à¸‡à¸ˆà¸³à¸™à¸§à¸™à¸„à¸‡à¸—à¸µà¹ˆà¸‚à¸­à¸‡à¸£à¸²à¸„à¸²à¸ªà¸´à¸™à¸„à¹‰à¸²à¸žà¸£à¸µà¹€à¸‹à¸¥à¸¥à¹Œà¸—à¸µà¹ˆà¸ªà¹ˆà¸‡à¸¡à¸­à¸šà¸¥à¹ˆà¸§à¸‡à¸«à¸™à¹‰à¸² "à¸à¸²à¸£à¸à¸²à¸à¹€à¸‡à¸´à¸™" à¸¡à¸µà¸ªà¹ˆà¸§à¸™à¸£à¹ˆà¸§à¸¡à¹ƒà¸™à¹€à¸à¸¡à¹€à¸¥à¹‡à¸ à¹† à¹à¸¥à¸°à¸¡à¸µà¹‚à¸­à¸à¸²à¸ªà¸Šà¸™à¸°à¹€à¸‡à¸´à¸™à¸à¸²à¸à¸¡à¸²à¸à¸‚à¸¶à¹‰à¸™ à¹€à¸‡à¸´à¸™à¸à¸²à¸à¸¡à¸±à¸™à¸ªà¸²à¸¡à¸²à¸£à¸–à¹à¸¥à¸à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¹‚à¸”à¸¢à¸•à¸£à¸‡à¸ªà¸³à¸«à¸£à¸±à¸šà¸ªà¸´à¸™à¸„à¹‰à¸²à¹‚à¸ à¸„à¸ à¸±à¸“à¸‘à¹Œ à¹€à¸‡à¸´à¸™à¸à¸²à¸à¸—à¸µà¹ˆà¹„à¸¡à¹ˆà¸ªà¸²à¸¡à¸²à¸£à¸–à¹à¸¥à¸à¹„à¸”à¹‰ 1.3 à¸ªà¸´à¸™à¸„à¹‰à¸²à¸žà¸£à¸µà¹€à¸‹à¸¥: à¸«à¸¡à¸²à¸¢à¸–à¸¶à¸‡à¸œà¸¥à¸´à¸•à¸ à¸±à¸“à¸‘à¹Œà¸—à¸µà¹ˆà¸ˆà¸³à¸«à¸™à¹ˆà¸²à¸¢à¹‚à¸”à¸¢à¸œà¸¹à¹‰à¸„à¹‰à¸²à¹‚à¸”à¸¢à¹ƒà¸Šà¹‰à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸¡à¸·à¸­à¸œà¸¥à¸´à¸•à¸ à¸±à¸“à¸‘à¹Œà¸à¹ˆà¸­à¸™à¸à¸²à¸£à¸‚à¸²à¸¢ à¹€à¸‰à¸žà¸²à¸°à¸„à¸³à¸‚à¸²à¸¢à¸¥à¹ˆà¸§à¸‡à¸«à¸™à¹‰à¸²à¹€à¸—à¹ˆà¸²à¸™à¸±à¹‰à¸™à¸—à¸µà¹ˆà¸—à¸³à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸«à¸¡à¸²à¸¢à¸šà¸™à¸Šà¸·à¹ˆà¸­à¸œà¸¥à¸´à¸•à¸ à¸±à¸“à¸‘à¹Œà¸«à¸£à¸·à¸­à¸«à¸™à¹‰à¸²à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¸œà¸¥à¸´à¸•à¸ à¸±à¸“à¸‘à¹Œ ano à¸œà¸¥à¸´à¸•à¸ à¸±à¸“à¸‘à¹Œà¸—à¸µà¹ˆà¹„à¸¡à¹ˆà¹„à¸”à¹‰à¹ƒà¸Šà¹‰ pres ale à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸¡à¸·à¸­à¸œà¸¥à¸´à¸•à¸ à¸±à¸“à¸‘à¹Œà¹„à¸¡à¹ˆà¹ƒà¸Šà¹ˆà¸œà¸¥à¸´à¸•à¸ à¸±à¸“à¸‘à¹Œà¸à¹ˆà¸­à¸™à¸à¸²à¸£à¸‚à¸²à¸¢ 1.4 à¸£à¸°à¸šà¸š Presale: à¸«à¸¡à¸²à¸¢à¸–à¸¶à¸‡à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸¡à¸·à¸­à¸œà¸¥à¸´à¸•à¸ à¸±à¸“à¸‘à¹Œà¸£à¸°à¸šà¸šà¸—à¸µà¹ˆà¸ˆà¸±à¸”à¹€à¸•à¸£à¸µà¸¢à¸¡à¹„à¸§à¹‰à¹€à¸žà¸·à¹ˆà¸­à¸£à¸­à¸‡à¸£à¸±à¸šà¸žà¹ˆà¸­à¸„à¹‰à¸²à¸ªà¸³à¸«à¸£à¸±à¸šà¸à¸²à¸£à¸‚à¸²à¸¢à¸£à¸¸à¹ˆà¸™ presale .1.5 à¸£à¸²à¸„à¸²à¸ªà¸´à¸™à¸„à¹‰à¸²à¸žà¸£à¸µà¹€à¸‹à¸¥: à¸«à¸¡à¸²à¸¢à¸–à¸¶à¸‡à¸£à¸²à¸„à¸²à¸‚à¸²à¸¢à¸‚à¸­à¸‡à¸ªà¸´à¸™à¸„à¹‰à¸²à¸žà¸£à¸µà¹€à¸‹à¸¥à¸¥à¹Œ à¸£à¸²à¸„à¸²à¸‚à¸­à¸‡à¸ªà¸´à¸™à¸„à¹‰à¸²à¸žà¸£à¸µà¹€à¸‹à¸¥à¸¥à¹Œà¸›à¸£à¸°à¸à¸­à¸šà¸”à¹‰à¸§à¸¢à¸ªà¸­à¸‡à¸ªà¹ˆà¸§à¸™: à¸„à¹ˆà¸²à¸¡à¸±à¸”à¸ˆà¸³à¹à¸¥à¸°à¸„à¹ˆà¸²à¸‡à¸§à¸”à¸ªà¸¸à¸”à¸—à¹‰à¸²à¸¢',
        more: "à¸¡à¸²à¸à¸à¸§à¹ˆà¸²",
        verificationTip:
          "à¹„à¸¡à¹ˆà¸ªà¸²à¸¡à¸²à¸£à¸–à¸£à¸±à¸šà¸£à¸«à¸±à¸ªà¸¢à¸·à¸™à¸¢à¸±à¸™à¹„à¸”à¹‰? à¸à¸£à¸¸à¸“à¸²à¸•à¸´à¸”à¸•à¹ˆà¸­à¸à¹ˆà¸²à¸¢à¸šà¸£à¸´à¸à¸²à¸£à¸¥à¸¹à¸à¸„à¹‰à¸²",
        symbolU: "USDT",
        newes: "à¸›à¸£à¸°à¸à¸²à¸¨à¸¥à¹ˆà¸²à¸ªà¸¸à¸”",
        upgraded:
          "à¸à¸³à¸¥à¸±à¸‡à¸›à¸£à¸±à¸šà¸›à¸£à¸¸à¸‡à¸à¸´à¸ˆà¸à¸£à¸£à¸¡......",
        gameTit:
          "à¸à¸²à¸£à¸à¸¹à¹‰à¸„à¸·à¸™à¸¢à¸­à¸”à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­à¸¥à¹‰à¸¡à¹€à¸«à¸¥à¸§",
        gameLeft: "à¸¥à¸­à¸‡à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡",
        gameRight:
          "à¹„à¸›à¸—à¸µà¹ˆà¸à¸²à¸£à¸£à¸µà¹„à¸‹à¹€à¸„à¸´à¸¥à¸”à¹‰à¸§à¸¢à¸•à¸™à¹€à¸­à¸‡",
        tab: {
          hot: "à¹€à¸›à¹‡à¸™à¸—à¸µà¹ˆà¸™à¸´à¸¢à¸¡",
          lottety: "à¸¥à¹‡à¸­à¸•à¹€à¸•à¸­à¸£à¹Œà¸£à¸µà¹ˆ",
          fishing: "à¸•à¸à¸›à¸¥à¸²",
          electronic: "Slots",
          physical: "à¸„à¸²à¸ªà¸´à¹‚à¸™",
          realperson: "à¹€à¸à¸¡à¸ªà¹Œà¸à¸µà¸¬à¸²",
          chess: "à¸«à¸¡à¸²à¸à¸£à¸¸à¸",
          smallgame: "à¹€à¸à¸¡à¹€à¸¥à¹‡à¸ à¹†",
          safe: "à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢",
        },
        home: {
          lottetyTitle:
            "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸¥à¹‡à¸­à¸•à¹€à¸•à¸­à¸£à¹Œà¸£à¸µà¹ˆà¸—à¸µà¹ˆà¹ƒà¸«à¸à¹ˆà¸—à¸µà¹ˆà¸ªà¸¸à¸”",
          recharge: "à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
          balance: "à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­",
          customerService: "à¸šà¸£à¸´à¸à¸²à¸£à¸¥à¸¹à¸à¸„à¹‰à¸²",
          lottety: "à¸¥à¹‡à¸­à¸•à¹€à¸•à¸­à¸£à¹Œà¸£à¸µà¹ˆ",
          wealth: "à¸à¸²à¸£à¸ˆà¸±à¸”à¸à¸²à¸£à¸à¸²à¸£à¹€à¸‡à¸´à¸™",
          leftTime:
            "à¹€à¸§à¸¥à¸²à¸—à¸µà¹ˆà¹€à¸«à¸¥à¸·à¸­à¹ƒà¸™à¸à¸²à¸£à¸‹à¸·à¹‰à¸­",
          min: "à¸™à¸²à¸—à¸µ",
          sec: "à¸§à¸´à¸™à¸²à¸—à¸µ",
          newTitle: "à¸‚à¹ˆà¸²à¸§",
          newCenter: "à¸¨à¸¹à¸™à¸¢à¹Œà¸‚à¹ˆà¸²à¸§",
          newDes: "à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¸‚à¹ˆà¸²à¸§",
          wrTime: "à¹€à¸§à¸¥à¸²à¸à¸²à¸£à¸—à¸³à¸‡à¸²à¸™à¸‚à¸­à¸‡à¹€à¸§à¹‡à¸›",
          days: "à¸§à¸±à¸™",
          hours: "à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
          minutes: "à¸™à¸²à¸—à¸µ",
          seconds: "à¸§à¸´à¸™à¸²à¸—à¸µ",
          pengguna: "à¸ˆà¸³à¸™à¸§à¸™à¸œà¸¹à¹‰à¹ƒà¸Šà¹‰",
          jumlahTaruhan: " à¸ˆà¸³à¸™à¸§à¸™à¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™",
          Online: "à¸ˆà¸³à¸™à¸§à¸™à¸œà¸¹à¹‰à¸­à¸­à¸™à¹„à¸¥à¸™à¹Œ",
          penarikanHari: "à¸Šà¸²à¸£à¹Œà¸”à¸‚à¸­à¸‡à¸§à¸±à¸™à¸™à¸µà¹‰",
          gin: "à¹ƒà¸™",
          got: "à¹„à¸”à¹‰",
          GameName: "à¹€à¸à¸¡à¸•à¸à¸›à¸¥à¸²",
          popular: "à¸„à¸³à¹à¸™à¸°à¸™à¸³à¸¢à¸­à¸”à¸™à¸´à¸¢à¸¡",
          platform: "à¸„à¸³à¹à¸™à¸°à¸™à¸³à¹à¸žà¸¥à¸•à¸Ÿà¸­à¸£à¹Œà¸¡",
          Game1: "5D Lotre",
          Game2: "Win Go",
          Game3: "Slots",
          Game4: "K3 Lotre",
          Game5: "à¸„à¸²à¸ªà¸´à¹‚à¸™",
          Game6: "à¹€à¸à¸¡à¸ªà¹Œà¸à¸µà¸¬à¸²",
          Game7: "à¹€à¸¥à¸·à¸­à¸à¹€à¸¥à¸‚à¹ƒà¸™ 16 à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚",
          Game8: "à¸›à¸£à¸°à¹€à¸—à¸¨",
          Game9: "à¸ªà¸´à¸‡à¸„à¹‚à¸›à¸£à¹Œ 4D",
          Game10: "Vietnam Lottery",
          Game11: "à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§ 4D",
          Game12: "à¸¡à¸²à¹€à¸¥à¸¢à¹Œ 4D",
          Game13: "à¸¡à¸²à¸à¸à¸§à¹ˆà¸²à¸«à¸¡à¸·à¹ˆà¸™à¸„à¸³",
          Game14: "à¸„à¸§à¸²à¸¡à¹€à¸£à¹‡à¸§ 4D",
          Game1Tip:
            "à¹€à¸”à¸²à¸•à¸±à¸§à¹€à¸¥à¸‚ / à¸ªà¸¹à¸‡ / à¸•à¹ˆà¸³ / à¸„à¸µà¹ˆ / à¸„à¸¹à¹ˆ",
          Game2Tip:
            "à¹€à¸”à¸²à¸ªà¸µà¹€à¸‚à¸µà¸¢à¸§ / à¸¡à¹ˆà¸§à¸‡ / à¹à¸”à¸‡à¸—à¸µà¹ˆà¸ˆà¸°à¸Šà¸™à¸°",
          Game3Tip:
            "à¹€à¸¥à¹ˆà¸™à¸‹à¹‰à¸³à¸­à¸µà¸/à¹€à¸¥à¹ˆà¸™à¸‹à¹‰à¸³à¸­à¸µà¸/à¹€à¸¥à¹ˆà¸™à¸‹à¹‰à¸³à¸­à¸µà¸",
          Game4Tip:
            "à¹€à¸”à¸²à¸•à¸±à¸§à¹€à¸¥à¸‚ / à¸ªà¸¹à¸‡ / à¸•à¹ˆà¸³ / à¸„à¸µà¹ˆ / à¸„à¸¹à¹ˆ",
          Game5Tip:
            "à¸šà¸²à¸„à¸²à¸£à¹ˆà¸²/à¹€à¸ªà¸·à¸­à¸¡à¸±à¸‡à¸à¸£/à¸£à¸¹à¹€à¸¥à¹‡à¸•/à¸‹à¸´à¸à¹‚à¸š",
          Game6Tip:
            "à¹à¸‚à¹ˆà¸‡à¸‚à¸±à¸™à¹à¸šà¸šà¹€à¸£à¸µà¸¢à¸¥à¹„à¸—à¸¡à¹Œ / à¸„à¸£à¸šà¸ˆà¸šà¹ƒà¸™à¸—à¸µà¹ˆà¸™à¸µà¹ˆ",
          Game7Tip:
            "à¹€à¸”à¸²à¸•à¸±à¸§à¹€à¸¥à¸‚ / à¸ªà¸¹à¸‡ / à¸•à¹ˆà¸³ / à¸„à¸µà¹ˆ / à¸„",
          Game8Tip:
            "à¹à¸‚à¹ˆà¸‡à¸‚à¸±à¸™à¹à¸šà¸šà¹€à¸£à¸µà¸¢à¸¥à¹„à¸—à¸¡à¹Œ / à¸„à¸£à¸šà¸ˆà¸šà¹ƒà¸™à¸—à¸µà¹ˆà¸™à¸µà¹ˆ",
          Game9Tip:
            "à¹€à¸”à¸²à¸•à¸±à¸§à¹€à¸¥à¸‚ / à¸ªà¸¹à¸‡ / à¸•à¹ˆà¸³ / à¸„à¸µà¹ˆ / à¸„",
          Game10Tip:
            "à¹€à¸”à¸²à¸ªà¸µà¹€à¸‚à¸µà¸¢à¸§ / à¸¡à¹ˆà¸§à¸‡ / à¹à¸”à¸‡à¸—à¸µà¹ˆà¸ˆà¸°à¸Šà¸™à¸°",
          Game11Tip:
            "à¹€à¸”à¸²à¸•à¸±à¸§à¹€à¸¥à¸‚ / à¸ªà¸¹à¸‡ / à¸•à¹ˆà¸³ / à¸„à¸µà¹ˆ / à¸„",
          Game12Tip:
            "à¹€à¸”à¸²à¸•à¸±à¸§à¹€à¸¥à¸‚ / à¸ªà¸¹à¸‡ / à¸•à¹ˆà¸³ / à¸„à¸µà¹ˆ / à¸„",
          Game13Tip:
            "à¹€à¸”à¸²à¸•à¸±à¸§à¹€à¸¥à¸‚ / à¸ªà¸¹à¸‡ / à¸•à¹ˆà¸³ / à¸„à¸µà¹ˆ / à¸„",
          Game14Tip:
            "à¹€à¸”à¸²à¸•à¸±à¸§à¹€à¸¥à¸‚ / à¸ªà¸¹à¸‡ / à¸•à¹ˆà¸³ / à¸„à¸µà¹ˆ / à¸„",
          Game6t: "à¸‹à¸²à¸šà¸²à¸«à¹Œ",
          nextDraw: "à¸£à¸­à¸šà¸–à¸±à¸”à¹„à¸›",
          playNow: "à¹€à¸¥à¹ˆà¸™à¸—à¸±à¸™à¸—à¸µ",
          howWorks: "à¸‹à¸·à¹‰à¸­à¸­à¸¢à¹ˆà¸²à¸‡à¹„à¸£",
          game_title1:
            "à¹€à¸¥à¸·à¸­à¸à¹€à¸à¸¡à¸ªà¹Œà¸«à¸™à¸¶à¹ˆà¸‡à¹€à¸à¸¡à¸ªà¹Œ",
          game_title2:
            "à¹€à¸¥à¸·à¸­à¸à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹‚à¸Šà¸„à¸¥à¸²à¸ à¸‚à¸­à¸‡à¸„à¸¸à¸“",
          game_title3: "à¹€à¸”à¸´à¸¡à¸žà¸±à¸™",
          game_title4: "à¸£à¸±à¸šà¸£à¸²à¸‡à¸§à¸±à¸¥",
          game_First: "à¸‚à¸±à¹‰à¸™à¸•à¸­à¸™à¸—à¸µà¹ˆ 1",
          game_Second: "à¸‚à¸±à¹‰à¸™à¸•à¸­à¸™à¸—à¸µà¹ˆ 2",
          game_Third: "à¸‚à¸±à¹‰à¸™à¸•à¸­à¸™à¸—à¸µà¹ˆ 3",
          game_Fourth: "à¸‚à¸±à¹‰à¸™à¸•à¸­à¸™à¸—à¸µà¹ˆ 4",
          list: [
            {
              title:
                "à¹€à¸¥à¸·à¸­à¸à¹€à¸à¸¡à¸ªà¹Œà¸—à¸µà¹ˆà¸„à¸¸à¸“à¸Šà¸­à¸šà¸«à¸™à¸¶à¹ˆà¸‡à¹€à¸à¸¡à¸ªà¹Œ",
              txt: "à¸„à¸¸à¸“à¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸¥à¸·à¸­à¸à¹€à¸¥à¹ˆà¸™à¹€à¸à¸¡à¸ªà¹Œà¸¥à¹‡à¸­à¸•à¹€à¸•à¸­à¸£à¹Œà¸£à¸µà¹ˆ 3à¸™à¸²à¸—à¸µ  5à¸™à¸²à¸—à¸µ à¸«à¸£à¸·à¸­  10à¸™à¸²à¸—à¸µ",
            },
            {
              title:
                "à¹€à¸¥à¸·à¸­à¸à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹‚à¸Šà¸„à¸¥à¸²à¸ à¸‚à¸­à¸‡à¸„à¸¸à¸“",
              txt: "à¹€à¸¥à¸·à¸­à¸à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸«à¸£à¸·à¸­à¸ªà¸µà¹‚à¸Šà¸„à¸¥à¸²à¸ à¸‚à¸­à¸‡à¸„à¸¸à¸“",
            },
            {
              title: "à¹€à¸”à¸´à¸¡à¸žà¸±à¸™",
              txt: "à¹€à¸¥à¸·à¸­à¸à¸¢à¸­à¸”à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¹à¸¥à¸°à¸¢à¸·à¸™à¸¢à¸±à¸™",
            },
            {
              title: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸œà¸¹à¹‰à¸Šà¸™à¸°",
              txt: "à¹€à¸¡à¸·à¹ˆà¸­à¸„à¸¸à¸“à¹€à¸¥à¸·à¸­à¸à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹‚à¸Šà¸„à¸¥à¸²à¸ à¸‚à¸­à¸‡à¸„à¸¸à¸“à¹ƒà¸™à¸›à¸±à¸ˆà¸ˆà¸¸à¸šà¸±à¸™ à¸£à¸°à¸šà¸šà¸ˆà¸°à¹€à¸žà¸´à¹ˆà¸¡à¸£à¸²à¸‡à¸§à¸±à¸¥à¹ƒà¸™à¸¢à¸­à¸”à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­à¸‚à¸­à¸‡à¸„à¸¸à¸“à¹‚à¸”à¸¢à¸­à¸±à¸•à¹‚à¸™à¸¡à¸±à¸•à¸´",
            },
          ],
        },
        index: {
          Charttren: "à¹à¸™à¸§à¹‚à¸™à¹‰à¸¡à¸‚à¸­à¸‡à¹à¸œà¸™à¸ à¸¹à¸¡à¸´",
          Total: "à¸¢à¸­à¸”à¸£à¸§à¸¡",
          walletBalance:
            "à¸¢à¸­à¸”à¹€à¸‡à¸´à¸™à¸à¸£à¸°à¹€à¸›à¹‹à¸²à¹€à¸‡à¸´à¸™",
          recharge: "à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
          withdraw: "à¸–à¸­à¸™à¹€à¸‡à¸´à¸™",
          lotteyRule: "à¸à¸à¸‚à¸­à¸‡à¸¥à¹‡à¸­à¸•à¹€à¸•à¸­à¸£à¹Œà¸£à¸µà¹ˆ",
          iKnow: "à¸‰à¸±à¸™à¸£à¸¹à¹‰à¹à¸¥à¹‰à¸§",
          big: "à¹ƒà¸«à¸à¹ˆ",
          small: "à¹€à¸¥à¹‡à¸",
          green: "à¸ªà¸µà¹€à¸‚à¸µà¸¢à¸§",
          violet: "à¸ªà¸µà¸¡à¹ˆà¸§à¸‡",
          red: "à¸ªà¸µà¹à¸”à¸‡",
          selectGreen: "à¹€à¸¥à¸·à¸­à¸à¸ªà¸µà¹€à¸‚à¸µà¸¢à¸§",
          selectViolet: "à¹€à¸¥à¸·à¸­à¸à¸ªà¸µà¸¡à¹ˆà¸§à¸‡",
          selectRed: "à¹€à¸¥à¸·à¸­à¸à¸ªà¸µà¹à¸”à¸‡",
          randomBetting: "à¸ªà¸¸à¹ˆà¸¡à¹€à¸”à¸´à¸¡à¸žà¸±à¸™",
          gameRecord: "à¸šà¸±à¸™à¸—à¸¶à¸à¹€à¸à¸¡à¸ªà¹Œ",
          myGameRecord:
            "à¸šà¸±à¸™à¸—à¸¶à¸à¸à¸²à¸£à¹à¸‚à¹ˆà¸‡à¸‚à¸±à¸™à¸‚à¸­à¸‡à¸‰à¸±à¸™",
          period: "à¸£à¸­à¸š",
          blockHeight: "à¸„à¸§à¸²à¸¡à¸ªà¸¹à¸‡à¸‚à¸­à¸‡à¸šà¸¥à¹‡à¸­à¸",
          blockTime: "à¸šà¸¥à¹‡à¸­à¸à¹€à¸§à¸¥à¸²",
          hashValue: "à¸„à¹ˆà¸²à¹à¸®à¸Š",
          number: "à¸•à¸±à¸§à¹€à¸¥à¸‚",
          size: "à¹ƒà¸«à¸à¹ˆà¹€à¸¥à¹‡à¸",
          color: "à¸ªà¸µ",
          result: "à¸œà¸¥à¸¥à¸±à¸žà¸—à¹Œ",
          sum: "à¸œà¸¥à¸£à¸§à¸¡",
          high: "à¹ƒà¸«à¸à¹ˆ",
          low: "à¹€à¸¥à¹‡à¸",
          odd: "à¸„",
          even: "à¸„à¸¹à¹ˆ",
          money: "à¸¢à¸­à¸”à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­",
          multiply: "à¸ˆà¸³à¸™à¸§à¸™",
          presaleRule: "à¸à¸Žà¸à¸²à¸£à¸‚à¸²à¸¢à¸¥à¹ˆà¸§à¸‡à¸«à¸™à¹‰à¸²",
          presaleRuleTit:
            "à¸à¸£à¸¸à¸“à¸²à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸‰à¸±à¸™à¸¢à¸­à¸¡à¸£à¸±à¸šà¸à¸à¸à¸²à¸£à¸‚à¸²à¸¢",
          totalPrice: "à¸¢à¸·à¸™à¸¢à¸±à¸™à¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™",
          Select: "à¹€à¸¥à¸·à¸­à¸",
          SelectCon: "à¹€à¸™à¸·à¹‰à¸­à¸«à¸²à¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™",
          firstPage: "à¹€à¸›à¹‡à¸™à¸«à¸™à¹‰à¸²à¹à¸£à¸à¹à¸¥à¹‰à¸§",
          lastpage: "à¹€à¸›à¹‡à¸™à¸«à¸™à¹‰à¸²à¸ªà¸¸à¸”à¸—à¹‰à¸²à¸¢à¹à¸¥à¹‰à¸§",
          periodDetail: "à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”",
          orderNumber: "à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸à¸²à¸£à¸ªà¸±à¹ˆà¸‡à¸‹à¸·à¹‰à¸­",
          contractMoney: "à¸¢à¸­à¸”à¸à¸²à¸£à¸‹à¸·à¹‰à¸­",
          contractCount: "à¸ˆà¸³à¸™à¸§à¸™à¸à¸²à¸£à¸‹à¸·à¹‰à¸­",
          delivery: "à¸¢à¸­à¸”à¸«à¸¥à¸±à¸‡à¸«à¸±à¸à¸ à¸²à¸©à¸µ",
          fee: "à¸ à¸²à¸©à¸µ",
          openPrice: "à¸£à¸²à¸„à¸²à¹€à¸›à¸´à¸”",
          status: "à¸ªà¸–à¸²à¸™à¸°",
          amount: "à¹à¸žà¹‰à¸Šà¸™à¸°",
          createTime: "à¹€à¸§à¸¥à¸²à¸à¸²à¸£à¸ªà¸£à¹‰à¸²à¸‡",
          BettingAssistant:
            "à¸œà¸¹à¹‰à¸Šà¹ˆà¸§à¸¢à¹€à¸”à¸´à¸¡à¸žà¸±à¸™ (à¸Šà¹ˆà¸§à¸‡ 100 à¸¥à¹ˆà¸²à¸ªà¸¸à¸”)",
          Missing: "à¸«à¸²à¸¢à¹„à¸›",
          AvgMissing: "à¸„à¹ˆà¸²à¹€à¸‰à¸¥à¸µà¹ˆà¸¢à¹à¸žà¹‰",
          Frequency: "à¸„à¸§à¸²à¸¡à¸–à¸µà¹ˆ",
          MaxContinued: "à¹à¸¡à¹‡à¸à¸‹à¹Œ à¸•à¹ˆà¸­à¹€à¸™à¸·à¹ˆà¸­à¸‡",
          PleaseInteger: "à¹‚à¸›à¸£à¸”à¸›à¹‰à¸­à¸™à¸ˆà¸³à¸™à¸§à¸™à¹€à¸•à¹‡à¸¡",
          Odds: "à¸­à¸±à¸•à¸£à¸²à¸•à¹ˆà¸­à¸£à¸­à¸‡",
          publicQuery: "à¹à¸šà¸šà¸ªà¸­à¸šà¸–à¸²à¸¡à¸ªà¸²à¸˜à¸²à¸£à¸“à¸°",
          howPlay: "à¸§à¸´à¸˜à¸µà¸à¸²à¸£à¹€à¸¥à¹ˆà¸™",
          distancedraw: "à¸§à¸²à¸”à¸£à¸°à¸¢à¸°à¸—à¸²à¸‡",
          multiple: "à¸«à¸¥à¸²à¸¢à¸£à¸²à¸¢à¸à¸²à¸£",
          numberBets: "à¸ˆà¸³à¸™à¸§à¸™à¹€à¸”à¸´à¸¡à¸žà¸±à¸™",
          reset: "à¸£à¸µà¹€à¸‹à¹‡à¸•",
          time: "à¹€à¸§à¸¥à¸²",
          lotteryTime: "à¸§à¸²à¸”à¹€à¸§à¸¥à¸²",
          notPressed: "à¹„à¸¡à¹ˆà¹„à¸”à¹‰à¸à¸”",
          pressed: "à¸à¸”",
          bedrawn: "à¸—à¸µà¹ˆà¸ˆà¸°à¸§à¸²à¸”",
          awarding: "à¸à¸²à¸£à¹ƒà¸«à¹‰à¸£à¸²à¸‡à¸§à¸±à¸¥",
          periodNmu:
            "à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸‡à¸§à¸”à¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™",
          lotteryNmu: "à¸¥à¸­à¸•à¹€à¸•à¸­à¸£à¸µà¹ˆ",
        },
        myProfile: {
          title: "à¸¨à¸¹à¸™à¸¢à¹Œà¸ªà¹ˆà¸§à¸™à¸šà¸¸à¸„à¸„à¸¥",
          profilePhoto: "à¸£à¸¹à¸›à¹‚à¸›à¸£à¹„à¸Ÿà¸¥à¹Œ",
          nickname: "à¸Šà¸·à¹ˆà¸­",
          modifyNickname: "à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¸Šà¸·à¹ˆà¸­",
          newNicknameTit: "à¸à¸£à¸¸à¸“à¸²à¸à¸£à¸­à¸à¸Šà¸·à¹ˆà¸­à¹ƒà¸«à¸¡à¹ˆ",
        },
        about: {
          title: "à¹€à¸à¸µà¹ˆà¸¢à¸§à¸à¸±à¸š",
          Games: "à¹€à¸à¸¡à¸ªà¹Œ",
          privacypolicy:
            "à¸™à¹‚à¸¢à¸šà¸²à¸¢à¸„à¸§à¸²à¸¡à¹€à¸›à¹‡à¸™à¸ªà¹ˆà¸§à¸™à¸•à¸±à¸§",
          disclosureagreement:
            "à¸‚à¹‰à¸­à¸•à¸à¸¥à¸‡à¸à¸²à¸£à¹€à¸›à¸´à¸”à¹€à¸œà¸¢à¸„à¸§à¸²à¸¡à¹€à¸ªà¸µà¹ˆà¸¢à¸‡",
        },
        privacypolicy: {
          title:
            "à¸™à¹‚à¸¢à¸šà¸²à¸¢à¸„à¸§à¸²à¸¡à¹€à¸›à¹‡à¸™à¸ªà¹ˆà¸§à¸™à¸•à¸±à¸§",
          agree:
            "à¸‚à¹‰à¸­à¸•à¸à¸¥à¸‡à¸à¸²à¸£à¹€à¸›à¸´à¸”à¹€à¸œà¸¢à¸„à¸§à¸²à¸¡à¹€à¸ªà¸µà¹ˆà¸¢à¸‡",
        },
        keFuMenu: { title: "à¸à¹ˆà¸²à¸¢à¸šà¸£à¸´à¸à¸²à¸£à¸¥à¸¹à¸à¸„à¹‰à¸²" },
        recharge: {
          title: "à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
          selectRecharge:
            "à¸à¸£à¸¸à¸“à¸²à¹€à¸¥à¸·à¸­à¸à¸Šà¹ˆà¸­à¸‡à¸—à¸²à¸‡à¸à¸²à¸£à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™à¹€à¸žà¸·à¹ˆà¸­à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
          next: "à¸–à¸±à¸”à¹„à¸›",
          previous: "à¸à¹ˆà¸­à¸™à¸«à¸™à¹‰à¸²",
          rechargeAmount:
            "à¸¢à¸­à¸”à¹€à¸‡à¸´à¸™à¸—à¸µà¹ˆà¸•à¹‰à¸­à¸‡à¸à¸²à¸£à¹€à¸•à¸´à¸¡",
          rechargeAmountRangeIpt:
            "à¸‚à¸­à¸šà¹€à¸‚à¸•à¸¢à¸­à¸”à¸à¸²à¸£à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
          rechargeAmountRange:
            "à¸‚à¸­à¸šà¹€à¸‚à¸•à¸¢à¸­à¸”à¸à¸²à¸£à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
        },
        rechargeChack: {
          title: "à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
          totalAmouunt: "à¸¢à¸­à¸”à¹€à¸‡à¸´à¸™à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          paymentMethod: "à¸£à¸¹à¸›à¹à¸šà¸šà¸à¸²à¸£à¸Šà¸³à¸£à¸°",
          localBank: "à¸™à¸²à¸„à¸²à¸£à¹ƒà¸™à¸žà¸·à¹‰à¸™à¸—à¸µà¹ˆ",
          enterAmount: "à¸à¸£à¸¸à¸“à¸²à¸à¸£à¸­à¸à¸¢à¸­à¸”à¹€à¸‡à¸´à¸™",
          theAmount:
            "à¸à¸£à¸¸à¸“à¸²à¸à¸”à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™à¹ƒà¸«à¸¡à¹ˆà¸—à¸¸à¸à¸„à¸£à¸±à¹‰à¸‡à¹ƒà¸™à¸à¸²à¸£à¸Šà¸³à¸£à¸° à¸«à¸²à¸à¸„à¸´à¸§à¸­à¸²à¸£à¹Œà¹‚à¸„à¹‰à¸”à¸«à¸¡à¸”à¹€à¸§à¸¥à¸²à¹ƒà¸™à¸à¸²à¸£à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™ à¹ƒà¸«à¹‰à¸à¸”à¸£à¸±à¸šà¸„à¸´à¸§à¸­à¸²à¸£à¹Œà¹‚à¸„à¹‰à¸”à¸«à¸£à¸·à¸­à¹€à¸¥à¸‚à¸šà¸±à¸à¸Šà¸µà¹ƒà¸™à¸à¸²à¸£à¹‚à¸­à¸™à¹ƒà¸«à¸¡à¹ˆà¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡ ",
          accountName: "à¸Šà¸·à¹ˆà¸­à¸šà¸±à¸à¸Šà¸µ",
          bankNumber: "à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸˜à¸™à¸²à¸„à¸²à¸£",
          bankName: "à¸Šà¸·à¹ˆà¸­à¸˜à¸™à¸²à¸„à¸²à¸£",
          paymentAmount: "à¸¢à¸­à¸”à¸—à¸µà¹ˆà¸Šà¸³à¸£à¸°",
          orderNumber: "à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸à¸²à¸£à¸ªà¸±à¹ˆà¸‡à¸‹à¸·à¹‰à¸­",
          creationTime: "à¹€à¸§à¸¥à¸²à¸ªà¸£à¹‰à¸²à¸‡",
          transferAmount:
            "à¹€à¸žà¸·à¹ˆà¸­à¸„à¸§à¸²à¸¡à¸£à¸§à¸”à¹€à¸£à¹‡à¸§à¸‚à¸­à¸‡à¸£à¸°à¸šà¸š à¸à¹ˆà¸­à¸™à¸—à¸³à¸à¸²à¸£à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™ à¹‚à¸›à¸£à¸”à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸•à¸±à¸§à¹€à¸¥à¸‚à¸—à¸¨à¸™à¸´à¸¢à¸¡à¹ƒà¸«à¹‰à¸•à¸£à¸‡à¸à¸±à¸šà¸«à¸™à¹‰à¸²à¸£à¸°à¸šà¸šà¸—à¸¸à¸à¸„à¸£à¸±à¹‰à¸‡",
          transferAmount2: "",
          transferAmount1: "",
          depositAmount: "à¸ˆà¸³à¸™à¸§à¸™à¹€à¸‡à¸´à¸™à¸à¸²à¸",
          upImgTitle:
            "à¹‚à¸›à¸£à¸”à¸­à¸±à¸›à¹‚à¸«à¸¥à¸”à¸˜à¸¸à¸£à¸à¸£à¸£à¸¡à¸—à¸µà¹ˆà¸¡à¸µ UTR",
          upFormate:
            "à¸­à¸±à¸›à¹‚à¸«à¸¥à¸”à¸£à¸¹à¸›à¸ à¸²à¸žà¹ƒà¸™à¸£à¸¹à¸›à¹à¸šà¸š jpg,jpeg,png à¹€à¸—à¹ˆà¸²à¸™à¸±à¹‰à¸™",
          selectFile: "à¹€à¸¥à¸·à¸­à¸à¸­à¸±à¸žà¹‚à¸«à¸¥à¸”à¹„à¸Ÿà¸¥à¹Œ",
        },
        touchngo: {
          title: "Touch N Go à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
          name: "à¸Šà¸·à¹ˆà¸­",
          mobileNumber: "à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹‚à¸—à¸£à¸¨à¸±à¸žà¸—à¹Œ",
        },
        rechargeRecord: {
          title: "à¸šà¸±à¸™à¸—à¸¶à¸à¸à¸²à¸£à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
          unpaid: "à¸£à¸­à¸à¸²à¸£à¸Šà¸³à¸£à¸°",
          eazyPay: "å·¥èµ„",
          success: "à¸ªà¸³à¹€à¸£à¹‡à¸ˆ",
          others: "à¸­à¸·à¹ˆà¸™à¹†",
        },
        paymentMethod: {
          title: "à¸£à¸¹à¸›à¹à¸šà¸šà¸à¸²à¸£à¸Šà¸³à¸£à¸°",
          totalPaid: "à¸¢à¸­à¸”à¸£à¸§à¸¡à¸à¸²à¸£à¸£à¸­à¸Šà¸³à¸£à¸°",
          choose: "à¹€à¸¥à¸·à¸­à¸à¸šà¸±à¸•à¸£à¸˜à¸™à¸²à¸„à¸²à¸£",
          payNow: "à¸Šà¸³à¸£à¸°à¹€à¸‡à¸´à¸™à¸—à¸±à¸™à¸—à¸µ",
          topInstructions:
            "à¸¥à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¸à¸²à¸£à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
          contentTmp1:
            "à¸à¸£à¸¸à¸“à¸²à¹‚à¸­à¸™à¹„à¸›à¸¢à¸±à¸‡à¸šà¸±à¸à¸Šà¸µà¸˜à¸™à¸²à¸„à¸²à¸£à¸”à¹‰à¸²à¸™à¸šà¸™",
          contentTmp2:
            "à¸à¸£à¸¸à¸“à¸²à¸à¸£à¸­à¸à¸Šà¸·à¹ˆà¸­à¸œà¸¹à¹‰à¸–à¸·à¸­à¸šà¸±à¸•à¸£à¹à¸¥à¸°à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸šà¸±à¸à¸Šà¸µà¹€à¸žà¸·à¹ˆà¸­à¸¢à¸·à¸™à¸¢à¸±à¸™",
          contentTmp3:
            "à¸«à¸¥à¸±à¸‡à¸ˆà¸²à¸à¸ªà¹ˆà¸‡à¸à¸²à¸£à¹‚à¸­à¸™à¸—à¸¸à¸à¸„à¸£à¸±à¹‰à¸‡ à¸à¸£à¸¸à¸“à¸²à¸­à¸¢à¹ˆà¸²à¸ªà¹ˆà¸‡à¸„à¸³à¸ªà¸±à¹ˆà¸‡à¸‹à¸·à¹‰à¸­à¸‹à¹‰à¸³",
          contentTmp4:
            "à¹‚à¸›à¸£à¸”à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¹ƒà¸«à¹‰à¹à¸™à¹ˆà¹ƒà¸ˆà¸§à¹ˆà¸²à¹„à¸”à¹‰à¸ªà¹ˆà¸‡à¸„à¸³à¸ªà¸±à¹ˆà¸‡à¸‹à¸·à¹‰à¸­à¸«à¸¥à¸±à¸‡à¸ˆà¸²à¸à¸à¸²à¸£à¹‚à¸­à¸™à¹€à¸‡à¸´à¸™ à¸¡à¸´à¸‰à¸°à¸™à¸±à¹‰à¸™à¹€à¸£à¸²à¸ˆà¸°à¹„à¸¡à¹ˆà¸ªà¸²à¸¡à¸²à¸£à¸–à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸à¸²à¸£à¸Šà¸³à¸£à¸°à¹€à¸‡à¸´à¸™à¸‚à¸­à¸‡à¸„à¸¸à¸“à¹„à¸”à¹‰",
          waitingPayment: "à¸£à¸­à¸à¸²à¸£à¸Šà¸³à¸£à¸°",
          receivingTitle:
            "à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸˜à¸™à¸²à¸„à¸²à¸£à¸‚à¸­à¸‡à¸œà¸¹à¹‰à¸£à¸±à¸šà¹€à¸‡à¸´à¸™",
          confirm1: "à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸„à¸³à¸ªà¸±à¹ˆà¸‡à¸‹à¸·à¹‰à¸­",
          confirm2: "à¸Šà¸·à¹ˆà¸­à¸˜à¸™à¸²à¸„à¸²à¸£",
          confirm3: "à¸œà¸¹à¹‰à¸–à¸·à¸­à¸šà¸±à¸•à¸£",
          confirm4: "à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸šà¸±à¸•à¸£",
          confirm5: "IFSC",
          confirm6: "à¸ªà¸²à¸‚à¸²",
          Required: "Fill in Ref No",
          Return: "à¸à¸¥à¸±à¸š",
        },
        promotion: {
          title: "à¹‚à¸›à¸£à¹‚à¸¡à¸—",
          bouns: "à¹€à¸‡à¸´à¸™à¸£à¸²à¸‡à¸§à¸±à¸¥",
          level_1: "à¸£à¸°à¸”à¸±à¸š 1",
          level_2: "à¸£à¸°à¸”à¸±à¸š 2",
          totalPeople: "à¸ˆà¸³à¸™à¸§à¸™à¸„à¸™à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          contribution: "à¸à¸³à¹„à¸£à¸à¸²à¸£à¹‚à¸›à¸£à¹‚à¸¡à¸—",
          code: "à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹‚à¸›à¸£à¹‚à¸¡à¸—à¸‚à¸­à¸‡à¸‰à¸±à¸™",
          link: "à¸¥à¸´à¸‡à¸„à¹Œà¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸à¸²à¸£à¹‚à¸›à¸£à¹‚à¸¡à¸—à¸‚à¸­à¸‡à¸‰à¸±à¸™",
        },
        bonusrecord: {
          title: "à¸šà¸±à¸™à¸—à¸¶à¸à¹€à¸‡à¸´à¸™à¸£à¸²à¸‡à¸§à¸±à¸¥",
        },
        redenvelopes: {
          title: "à¸‚à¸­à¸‡à¸‚à¸§à¸±à¸",
          Hello: "à¸ªà¸§à¸±à¸ªà¸”à¸µ",
          Eveverone: "à¸—à¸¸à¸à¸—à¹ˆà¸²à¸™",
          des: "à¹€à¸£à¸²à¸¡à¸µà¸‚à¸­à¸‡à¸‚à¸§à¸±à¸à¹ƒà¸«à¹‰à¸„à¸¸à¸“",
          giftCode: "à¹‚à¸„à¹‰à¸”à¸‚à¸­à¸‡à¸‚à¸§à¸±à¸",
          PleaseGiftCode: "à¸à¸£à¸¸à¸“à¸²à¸à¸£à¸­à¸à¹‚à¸„à¹‰à¸”",
          Receive: "à¹„à¸”à¹‰à¸£à¸±à¸šà¸‚à¸­à¸‡à¸‚à¸§à¸±à¸à¹à¸¥à¹‰à¸§",
          Best: "à¸‚à¸­à¹ƒà¸«à¹‰à¸ªà¸´à¹ˆà¸‡à¸—à¸µà¹ˆà¸”à¸µà¸—à¸µà¹ˆà¸ªà¸¸à¸”à¹€à¸à¸´à¸”à¸‚à¸¶à¹‰à¸™à¸à¸±à¸šà¸„à¸¸à¸“",
          Congratulations: "à¸Šà¸­à¹à¸ªà¸”à¸‡à¸„à¸§à¸²à¸¡à¸¢à¸´à¸™à¸”à¸µ",
          already: "à¸„à¸¸à¸“à¹„à¸”à¹‰à¸£à¸±à¸šà¹à¸¥à¹‰à¸§",
          ACCEPT: "à¸£à¸±à¸š ",
        },
        withdrawal: {
          title: "à¸–à¸­à¸™à¹€à¸‡à¸´à¸™",
          balance: "à¸¢à¸­à¸”à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­",
          enterwithdraw: "à¸à¸£à¸­à¸à¸ˆà¸³à¸™à¸§à¸™à¹€à¸‡à¸´à¸™à¸–à¸­à¸™",
          withdrawAamount: "à¸ˆà¸³à¸™à¸§à¸™à¹€à¸‡à¸´à¸™à¸–à¸­à¸™",
          fee: "à¸«à¸±à¸à¸ à¸²à¸©à¸µ",
          toAccount: "à¸¢à¸­à¸”à¸«à¸¥à¸±à¸‡à¸«à¸±à¸à¸ à¸²à¸©à¸µ",
          rate: "à¸£à¸²à¸„à¸²à¹€à¸‰à¸¥à¸µà¹ˆà¸¢",
          totalBet: "à¸¢à¸­à¸”à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          withdrawTime: "à¹€à¸§à¸¥à¸²à¸–à¸­à¸™",
          dailyWithdrawal: "à¸ˆà¸³à¸™à¸§à¸™à¸à¸²à¸£à¸–à¸­à¸™à¸—à¸¸à¸à¸§à¸±à¸™",
          withdrawMoney:
            "à¸Šà¹ˆà¸§à¸‡à¸ˆà¸³à¸™à¸§à¸™à¹€à¸‡à¸´à¸™à¸—à¸µà¹ˆà¸–à¸­à¸™",
          payout: "à¸£à¸¹à¸›à¹à¸šà¸šà¸à¸²à¸£à¸£à¸±à¸šà¹€à¸‡à¸´à¸™",
          bankCard: "à¸šà¸±à¸•à¸£à¸˜à¸™à¸²à¸„à¸²à¸£",
          selectBank: "à¹€à¸¥à¸·à¸­à¸à¸˜à¸™à¸²à¸„à¸²à¸£",
          addBankCard: "à¹€à¸žà¸´à¹ˆà¸¡à¸šà¸±à¸•à¸£à¸˜à¸™à¸²à¸„à¸²à¸£",
          rechargeTip1:
            "à¸à¸£à¸¸à¸“à¸²à¸à¸£à¸­à¸à¸¢à¸­à¸”à¹€à¸‡à¸´à¸™à¸—à¸µà¹ˆà¸•à¹‰à¸­à¸‡à¸à¸²à¸£à¸–à¸­à¸™",
          rechargeTip2:
            "à¸à¸£à¸¸à¸“à¸²à¹€à¸¥à¸·à¸­à¸à¸šà¸±à¸•à¸£à¸˜à¸™à¸²à¸„à¸²à¸£",
          rechargeTip3: "à¸à¸£à¸¸à¸“à¸²à¸à¸£à¸­à¸à¸£à¸«à¸±à¸ª",
          select: "à¹€à¸¥à¸·à¸­à¸",
          add: "à¹€à¸žà¸´à¹ˆà¸¡",
        },
        withdrawrecord: {
          title: "à¸šà¸±à¸™à¸—à¸¶à¸à¸à¸²à¸£à¸–à¸­à¸™",
          applying: "à¸à¸³à¸¥à¸±à¸‡à¸¢à¸·à¹ˆà¸™",
          agree: "à¸¢à¸­à¸¡à¸£à¸±à¸š",
          refuse: "à¸›à¸Žà¸´à¹€à¸ªà¸˜",
        },
        mission: {
          title: "à¹€à¸Šà¸´à¸à¹€à¸žà¸·à¹ˆà¸­à¸™",
          totalPeople: "à¸ˆà¸³à¸™à¸§à¸™à¸„à¸™à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          totalAmount: "à¸¢à¸­à¸”à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          myTask: "à¸ à¸²à¸£à¸à¸´à¸ˆà¸‚à¸­à¸‡à¸‰à¸±à¸™",
          invited: "à¹€à¸Šà¸´à¸",
          validMenmber: "à¸­à¸²à¸¢à¸¸à¸ªà¸¡à¸²à¸Šà¸´à¸",
          receive: "à¸£à¸±à¸š",
        },
        promoteRecord: {
          title: "à¸šà¸±à¸™à¸—à¸¶à¸à¸„à¸³à¹€à¸Šà¸´à¸",
          People: "à¸ˆà¸³à¸™à¸§à¸™à¸„à¸™",
        },
        addbank: {
          title: "à¹€à¸žà¸´à¹ˆà¸¡à¸šà¸±à¸•à¸£à¸˜à¸™à¸²à¸„à¸²à¸£",
          bankName: "à¸Šà¸·à¹ˆà¸­à¸˜à¸™à¸²à¸„à¸²à¸£",
          beneficiaryName: "à¸Šà¸·à¹ˆà¸­à¸œà¸¹à¹‰à¸£à¸±à¸šà¹€à¸‡à¸´à¸™",
          accountNo: "à¸šà¸±à¸à¸Šà¸µ",
          bankCity:
            "à¸­à¸³à¹€à¸ à¸­à¸—à¸µà¹ˆà¸•à¸±à¹‰à¸‡à¸‚à¸­à¸‡à¸˜à¸™à¸²à¸„à¸²à¸£",
          IFSCCode: "IFSC Cord",
          email: "à¸­à¸µà¹€à¸¡à¸¥",
          bankProvince:
            "à¸ˆà¸±à¸‡à¸«à¸§à¸±à¸”à¸—à¸µà¹ˆà¸•à¸±à¹‰à¸‡à¸‚à¸­à¸‡à¸˜à¸™à¸²à¸„à¸²à¸£",
          bankBranch: "à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸ªà¸²à¸‚à¸²",
          addBtn: "à¹€à¸žà¸´à¹ˆà¸¡à¸šà¸±à¸à¸Šà¸µà¸˜à¸™à¸²à¸„à¸²à¸£",
          opsionalbankProvince:
            "à¸ˆà¸±à¸‡à¸«à¸§à¸±à¸”à¸—à¸µà¹ˆà¸•à¸±à¹‰à¸‡à¸‚à¸­à¸‡à¸˜à¸™à¸²à¸„à¸²à¸£",
          opsionalbankBranch: "à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸ªà¸²à¸‚à¸²",
        },
        addElcbank: {
          title: "à¹€à¸žà¸´à¹ˆà¸¡ E-wallet",
          addBtn: "à¹€à¸žà¸´à¹ˆà¸¡ E-wallet",
          mobile:
            "à¸à¸£à¸¸à¸“à¸²à¸à¸£à¸­à¸à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹‚à¸—à¸£à¸¨à¸±à¸žà¸—à¹Œà¸¡à¸·à¸­à¸–à¸·à¸­ e-wallet à¸‚à¸­à¸‡à¸„à¸¸à¸“",
        },
        addUsdt: {
          title: "à¹€à¸žà¸´à¹ˆà¸¡ USDT",
          addBtn: "à¹€à¸žà¸´à¹ˆà¸¡ USDT",
          type: "à¸›à¸£à¸°à¹€à¸ à¸— USDT",
          address: "à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸à¸£à¸°à¹€à¸›à¹‹à¸²à¹€à¸‡à¸´à¸™",
          tip: "à¸‚à¹‰à¸­à¸œà¸´à¸”à¸žà¸¥à¸²à¸”à¸£à¸¹à¸›à¹à¸šà¸šà¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆ USDT",
          txt: "à¸£à¸¹à¸›à¹à¸šà¸šà¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆ USDT (TRC) à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸›à¸£à¸°à¸à¸­à¸šà¸”à¹‰à¸§à¸¢à¸­à¸±à¸à¸‚à¸£à¸° 34 à¸•à¸±à¸§à¸—à¸µà¹ˆà¸‚à¸¶à¹‰à¸™à¸•à¹‰à¸™à¸”à¹‰à¸§à¸¢à¸•à¸±à¸§à¸­à¸±à¸à¸©à¸£ T",
          txt1: "à¸£à¸¹à¸›à¹à¸šà¸šà¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆ USDT (ERC) à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸›à¸£à¸°à¸à¸­à¸šà¸”à¹‰à¸§à¸¢à¸­à¸±à¸à¸‚à¸£à¸° 42 à¸•à¸±à¸§à¸‚à¸¶à¹‰à¸™à¸•à¹‰à¸™à¸”à¹‰à¸§à¸¢à¸•à¸±à¸§à¸­à¸±à¸à¸©à¸£ 0x",
        },
        wellet: {
          title: "à¸¢à¸­à¸”à¸–à¸­à¸™à¸ªà¸°à¸ªà¸¡",
          withdrawalBalance: "à¸¢à¸­à¸”à¹€à¸‡à¸´à¸™à¸—à¸µà¹ˆà¸–à¸­à¸™à¹„à¸”à¹‰",
          historicalWithdrawal: "à¸›à¸£à¸°à¸§à¸±à¸•à¸´à¸à¸²à¸£à¸–à¸­à¸™",
          accumulatedWithdrawal: "à¸à¸²à¸£à¸–à¸­à¸™à¸ªà¸°à¸ªà¸¡à¹à¸¥à¹‰à¸§",
          everyDay: "à¸—à¸¸à¸à¸§à¸±à¸™à¸¡à¸µ",
          order: "à¸„à¸£à¸±à¹‰à¸‡",
          tip: "à¹‚à¸­à¸à¸²à¸£à¹ƒà¸™à¸à¸²à¸£à¸–à¸­à¸™à¹€à¸‚à¹‰à¸²à¸šà¸±à¸•à¸£à¸˜à¸™à¸²à¸„à¸²à¸£à¸—à¸µà¹ˆà¸„à¸¸à¸“à¸œà¸¹à¸à¸Ÿà¸£à¸µ",
          myCard: "à¸šà¸±à¸•à¸£à¸˜à¸™à¸²à¸„à¸²à¸£à¸‚à¸­à¸‡à¸‰à¸±à¸™",
          rechargeRecord: "à¸šà¸±à¸™à¸—à¸¶à¸à¸à¸²à¸£à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
          withdrawRecord: "à¸šà¸±à¸™à¸—à¸¶à¸à¸à¸²à¸£à¸–à¸­à¸™à¹€à¸‡à¸´à¸™",
        },
        transactionrecord: { title: "à¸šà¸±à¸™à¸—à¸¶à¸à¸˜à¸¸à¸£à¸à¸£à¸£à¸¡" },
        newtutorial: {
          title: "à¸„à¸³à¹à¸™à¸°à¸™à¸³à¸¡à¸·à¸­à¹ƒà¸«à¸¡à¹ˆ",
          chooseYour: "à¹€à¸¥à¸·à¸­à¸ X à¸‚à¸­à¸‡à¸„à¸¸à¸“",
          favoriteGame:
            "à¹€à¸à¸¡à¸ªà¹Œà¸—à¸µà¹ˆà¸„à¸¸à¸“à¸Šà¸­à¸šà¸—à¸µà¹ˆà¸ªà¸¸à¸”",
          pickLucky: "à¹€à¸¥à¸·à¸­à¸à¹‚à¸Šà¸„à¸‚à¸­à¸‡à¸„à¸¸à¸“",
          numberColor: "à¸•à¸±à¸§à¹€à¸¥à¸‚à¸«à¸£à¸·à¸­à¸ªà¸µ",
          SKIP: "à¸‚à¹‰à¸²à¸¡",
          NEXT: "à¸–à¸±à¸”à¹„à¸›",
          confirmAmount:
            "à¸¢à¸·à¸™à¸¢à¸±à¸™à¸¢à¸­à¸”à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¸‚à¸­à¸‡à¸„à¸¸à¸“",
          getBouns: "à¹„à¸”à¹‰à¸£à¸±à¸šà¹€à¸‡à¸´à¸™à¸£à¸²à¸‡à¸§à¸±à¸¥",
          moneyWill:
            "à¸«à¸¥à¸±à¸‡à¸ˆà¸²à¸à¸Šà¸™à¸°à¸£à¸­à¸šà¸™à¸µà¹‰ à¹€à¸‡à¸´à¸™à¸ˆà¸°à¸–à¸¹à¸à¹€à¸žà¸´à¹ˆà¸¡à¹€à¸‚à¹‰à¸²à¹„à¸›à¹ƒà¸™à¸šà¸±à¸à¸Šà¸µà¹€à¸à¸¡à¸‚à¸­à¸‡à¸„à¸¸à¸“",
          youRecharge: "à¸„à¸¸à¸“à¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
          withdrawHere:
            "à¸«à¸£à¸·à¸­à¸–à¸­à¸™à¹€à¸™à¹„à¸”à¹‰à¸—à¸µà¹ˆà¸™à¸µà¹ˆ",
        },
        download: {
          title: "à¸”à¸²à¸§à¸™à¹Œà¹‚à¸«à¸¥à¸”",
          name: "",
          goBtn: "à¹„à¸›à¸”à¸²à¸§à¸™à¹Œà¹‚à¸«à¸¥à¸”",
          des: "à¹à¸žà¸¥à¸•à¸Ÿà¸­à¸£à¹Œà¸¡à¸¡à¸·à¸­à¸­à¸²à¸Šà¸µà¸žà¸—à¸²à¸‡à¸”à¹‰à¸²à¸™à¹€à¸à¸¡à¸ªà¹Œà¸¥à¹‡à¸­à¹€à¸•à¸­à¸£à¹Œà¸£à¸µà¹ˆ",
          playNow: "à¹„à¸›à¹€à¸¥à¹ˆà¸™à¸•à¸­à¸™à¸™à¸µà¹‰à¹€à¸¥à¸¢",
          lotteryGame: "à¹€à¸à¸¡à¸ªà¹Œà¸¥à¹‡à¸­à¸•à¹€à¸•à¸­à¸£à¹Œà¸£à¸µà¹ˆ",
          btn: "à¸”à¸²à¸§à¸™à¹Œà¹‚à¸«à¸¥à¸”à¸—à¸±à¸™à¸—à¸µ",
        },
        tabbar: {
          tabbarList: [
            {
              id: 1,
              name: "à¸«à¸™à¹‰à¸²à¸«à¸¥à¸±à¸",
              imgAction: t("07d4"),
              img: t("2288"),
              to: "/home",
            },
            {
              id: 2,
              name: "à¸à¸´à¸ˆà¸à¸£à¸£à¸¡",
              imgAction: t("b5ef"),
              img: t("5b0e"),
              to: "/activity",
            },
            {
              id: 3,
              name: "à¹‚à¸›à¸£à¹‚à¸¡à¸—",
              imgAction: t("7268"),
              img: t("7268"),
              to: "/promotion",
            },
            {
              id: 4,
              name: "à¸à¸£à¸°à¹€à¸›à¹‹à¸²à¹€à¸‡à¸´à¸™",
              imgAction: t("4c6e"),
              img: t("b2a5"),
              to: "/wallet",
            },
            {
              id: 5,
              name: "à¸‚à¸­à¸‡à¸‰à¸±à¸™",
              imgAction: t("e636"),
              img: t("6c7c"),
              to: "/mian",
            },
          ],
        },
        mian: {
          title: "à¸‚à¸­à¸‡à¸‰à¸±à¸™",
          historical: "à¸šà¸±à¸™à¸—à¸¶à¸à¹€à¸”à¸´à¸¡à¸žà¸±à¸™",
          funding: "à¸šà¸±à¸™à¸—à¸¶à¸à¸˜à¸¸à¸£à¸à¸£à¸£à¸¡",
          loginLog:
            "à¸šà¸±à¸™à¸—à¸¶à¸à¸à¸²à¸£à¹€à¸‚à¹‰à¸²à¸ªà¸¹à¹ˆà¸£à¸°à¸šà¸š",
          message: "à¸‚à¹‰à¸­à¸¡à¸¹à¸¥à¸‚à¹ˆà¸²à¸§à¸ªà¸²à¸£",
          balance:
            "à¸à¸£à¸°à¹€à¸›à¹‹à¸²à¸ªà¸•à¸²à¸‡à¸„à¹Œà¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          totalwallet: "à¸£à¸§à¸¡à¸à¸£à¸°à¹€à¸›à¹‹à¸²à¸ªà¸•à¸²à¸‡à¸„à¹Œ",
          refreshwallet: "à¸£à¸µà¹„à¸‹à¹€à¸„à¸´à¸¥",
          loginOut: "à¸­à¸­à¸à¸ˆà¸²à¸à¸£à¸°à¸šà¸š",
          menuName1: "à¸„à¸§à¸²à¸¡à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢à¸šà¸±à¸à¸Šà¸µ",
          menuName2: "Google Authenticator",
          menuName3: "à¹€à¸Šà¸´à¸à¹€à¸žà¸·à¹ˆà¸­à¸™à¹†",
          menuName4: "à¸­à¸±à¹ˆà¸‡à¹€à¸›à¸²",
          menuName5: "à¸„à¸³à¹à¸™à¸°à¸™à¸³à¸¡à¸·à¸­à¹ƒà¸«à¸¡à¹ˆ",
          menuName6: "à¹€à¸à¸µà¹ˆà¸¢à¸§à¸à¸±à¸š",
          menuName7: "à¸šà¸£à¸´à¸à¸²à¸£à¸¥à¸¹à¸à¸„à¹‰à¸²",
        },
        checkIn: {
          title: "à¹€à¸Šà¹‡à¸„à¸­à¸´à¸™",
          attendanceRules: "à¸à¸à¸à¸²à¸£à¹€à¸Šà¹‡à¸„à¸Šà¸·à¹ˆà¸­",
          txt: "à¹€à¸‚à¹‰à¸²à¸ªà¸¹à¹ˆà¸£à¸°à¸šà¸šà¹€à¸žà¸·à¹ˆà¸­à¸£à¸±à¸šà¹‚à¸šà¸™à¸±à¸ª",
          rule: "à¸à¸Žà¸‚à¸­à¸‡à¹€à¸à¸¡",
          record: "à¸šà¸±à¸™à¸—à¸¶à¸à¸à¸²à¸£à¹€à¸Šà¹‡à¸„à¸­à¸´à¸™",
          today: "à¹€à¸‹à¹‡à¸™à¸ªà¸±à¸à¸à¸²à¸§à¸±à¸™à¸™à¸µà¹‰",
          received: "à¹„à¸”à¹‰à¸£à¸±à¸š",
          day: "à¸§à¸±à¸™à¸—à¸µà¹ˆ",
          btn: "à¹€à¸Šà¹‡à¸„à¸­à¸´à¸™",
          Receive: "à¹„à¸”à¹‰à¸£à¸±à¸šà¸‚à¸­à¸‡à¸‚à¸§à¸±à¸à¹à¸¥à¹‰à¸§",
          Best: "à¸‚à¸­à¹ƒà¸«à¹‰à¸ªà¸´à¹ˆà¸‡à¸—à¸µà¹ˆà¸”à¸µà¸—à¸µà¹ˆà¸ªà¸¸à¸”à¹€à¸à¸´à¸”à¸‚à¸¶à¹‰à¸™à¸à¸±à¸šà¸„à¸¸à¸“",
          Congratulations: "à¸Šà¸­à¹à¸ªà¸”à¸‡à¸„à¸§à¸²à¸¡à¸¢à¸´à¸™à¸”à¸µ",
          already: "à¸„à¸¸à¸“à¹„à¸”à¹‰à¸£à¸±à¸šà¹à¸¥à¹‰à¸§",
          ACCEPT: "à¸£à¸±à¸š ",
        },
        checkInDes: {
          title: "à¸à¸à¸à¸²à¸£à¹€à¸Šà¹‡à¸„à¸Šà¸·à¹ˆà¸­",
          checkInDay:
            "à¸ˆà¸³à¸™à¸§à¸™à¸§à¸±à¸™à¸—à¸µà¹ˆà¹€à¸Šà¹‡à¸„à¸Šà¸·à¹ˆà¸­",
          accumulatedAmount:
            "à¸¢à¸­à¸”à¹€à¸•à¸´à¸¡à¸ªà¸°à¸ªà¸¡à¸•à¹ˆà¸­à¸§à¸±à¸™",
          checkInBonus: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸à¸²à¸£à¹€à¸Šà¹‡à¸„à¸Šà¸·à¹ˆà¸­",
          rulesDetails: "à¸£à¸²à¸¢à¸¥à¸°à¸­à¸µà¸¢à¸”à¸à¸à¹€à¸à¸“à¸‘à¹Œ",
          tep1: "à¸œà¸¹à¹‰à¹ƒà¸Šà¹‰à¸—à¸µà¹ˆà¹„à¸¡à¹ˆà¹„à¸”à¹‰à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™ à¹„à¸¡à¹ˆà¸ªà¸²à¸¡à¸²à¸£à¸–à¸£à¸±à¸šà¹„à¸”à¹‰;",
          tep2: "à¸•à¸±à¹‰à¸‡à¹à¸•à¹ˆà¹€à¸£à¸´à¹ˆà¸¡à¸§à¸±à¸™à¹à¸£à¸ à¸ˆà¸³à¹€à¸›à¹‡à¸™à¸•à¹‰à¸­à¸‡à¹€à¸•à¸´à¸¡à¸‡à¸´à¸™",
          tep3: "à¸¢à¸­à¸”à¹€à¸•à¸´à¸¡à¸ªà¸°à¸ªà¸¡à¸•à¹ˆà¸­à¸§à¸±à¸™à¸ˆà¸°à¸•à¹‰à¸­à¸‡à¹€à¸›à¹‡à¸™à¹„à¸›à¸•à¸²à¸¡à¹€à¸‡à¸·à¹ˆà¸­à¸™à¹à¸¥à¸°à¸ªà¸²à¸¡à¸²à¸£à¸–à¸£à¸±à¸šà¹„à¸”à¹‰à¸§à¸±à¸™à¸¥à¸°à¸„à¸£à¸±à¹‰à¸‡à¹€à¸—à¹ˆà¸²à¸™à¸±à¹‰à¸™",
          tep4: "à¹à¸žà¸¥à¸•à¸Ÿà¸­à¸£à¹Œà¸¡à¸¡à¸µà¸ªà¸´à¸—à¸˜à¸´à¹Œà¹ƒà¸™à¸à¸²à¸£à¸•à¸µà¸„à¸§à¸²à¸¡à¸‚à¸±à¹‰à¸™à¸ªà¸¸à¸”à¸—à¹‰à¸²à¸¢à¸šà¸™à¸à¸´à¸ˆà¸à¸£à¸£à¸¡à¸™à¸µà¹‰ à¸«à¸²à¸à¸„à¸¸à¸“à¸¡à¸µà¸„à¸³à¸–à¸²à¸¡à¸—à¸µà¹ˆà¹€à¸à¸µà¹ˆà¸¢à¸§à¸‚à¹‰à¸­à¸‡ à¹‚à¸›à¸£à¸”à¸•à¸´à¸”à¸•à¹ˆà¸­à¸à¹ˆà¸²à¸¢à¸šà¸£à¸´à¸à¸²à¸£à¸¥à¸¹à¸à¸„à¹‰à¸²",
          tep5: "à¹‚à¸šà¸™à¸±à¸ªà¸œà¸¹à¹‰à¹€à¸‚à¹‰à¸²à¸£à¹ˆà¸§à¸¡à¸ˆà¸°à¸ªà¸¸à¹ˆà¸¡à¹à¸ˆà¸à¸«à¸¥à¸±à¸‡à¸ˆà¸²à¸à¸à¸²à¸à¹€à¸‡à¸´à¸™à¸„à¸£à¸±à¹‰à¸‡à¸—à¸µà¹ˆ 7",
        },
        historicalBetting: {
          title: "à¸šà¸±à¸™à¸—à¸¶à¸à¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™",
        },
        loginLog: {
          title: "à¸šà¸±à¸™à¸—à¸¶à¸à¸à¸²à¸£à¹€à¸‚à¹‰à¸²à¸ªà¸¹à¹ˆà¸£à¸°à¸šà¸š",
        },
        messageCenter: {
          title: "à¸¨à¸¹à¸™à¸¢à¹Œà¸£à¸§à¸¡à¸‚à¹ˆà¸²à¸§à¸ªà¸²à¸£",
          readAll: "à¸­à¹ˆà¸²à¸™à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          removeAll: "à¸¥à¸šà¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          delTitle:
            "à¸„à¸¸à¸“à¸¢à¸·à¸™à¸¢à¸±à¸™à¸§à¹ˆà¸²à¸•à¹‰à¸­à¸‡à¸à¸²à¸£à¸¥à¸š ï¼Ÿ",
          delall:
            "à¸„à¸¸à¸“à¸¢à¸·à¸™à¸¢à¸±à¸™à¸§à¹ˆà¸²à¸•à¹‰à¸­à¸‡à¸à¸²à¸£à¸¥à¸šà¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”?",
          readall:
            "à¸„à¸¸à¸“à¹à¸™à¹ˆà¹ƒà¸ˆà¸§à¹ˆà¸²à¸•à¹‰à¸­à¸‡à¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸”à¸¹à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”ï¼Ÿ",
        },
        messageDes: {
          title: "à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¸‚à¹ˆà¸²à¸§à¸ªà¸²à¸£",
        },
        lottery: {
          drawResult: "à¸œà¸¥à¸¥à¸±à¸žà¸—à¹Œà¸à¸²à¸£à¸­à¸­à¸à¸œà¸¥",
          period: "à¸£à¸­à¸š",
          money: "à¹€à¸‡à¸´à¸™à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­",
          multiply: "à¸ˆà¸³à¸™à¸§à¸™",
          totalPrice: "à¹€à¸‡à¸´à¸™à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          pleaseBet: "à¸à¸£à¸¸à¸“à¸²à¹€à¸”à¸´à¸¡à¸žà¸±à¸™",
          election: "à¸¢à¹‰à¸­à¸™à¸à¸²à¸£à¹€à¸¥à¸·à¸­à¸à¸•à¸±à¹‰à¸‡",
        },
        colorLand: {
          tab1: "à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          tab2: "2 à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¹€à¸«à¸¡à¸·à¸­à¸™à¸à¸±à¸™",
          tab3: "3 à¸•à¸±à¸§à¹€à¸¥à¸‚à¸•à¸£à¸‡à¸à¸±à¸™",
          tab4: "à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¹„à¸¡à¹ˆà¹€à¸«à¸¡à¸·à¸­à¸™à¸à¸±à¸™ ",
          title1:
            "à¹€à¸¥à¸·à¸­à¸ 2 à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¸•à¸£à¸‡à¸à¸±à¸™",
          tip1: "*à¸«à¸¡à¸²à¸¢à¹€à¸«à¸•à¸¸ à¸–à¹‰à¸²à¸«à¸²à¸à¹€à¸¥à¸‚à¹€à¸›à¸´à¸”à¸•à¸£à¸‡à¸à¸±à¸šà¹€à¸¥à¸‚à¹€à¸”à¸´à¸¡à¸žà¸±à¸™ 2 à¸•à¸±à¸§ à¸ˆà¸°à¹„à¸”à¹‰à¸£à¸±à¸šà¸£à¸²à¸‡à¸§à¸±à¸¥ (à¸¢à¸à¹€à¸§à¹‰à¸™à¹€à¸¥à¸‚à¸ªà¸²à¸¡à¸•à¸±à¸§à¸—à¸µà¹ˆà¹€à¸«à¸¡à¸·à¸­à¸™à¸à¸±à¸™)",
          title2:
            "à¸¥à¸·à¸­à¸à¸„à¸¹à¹ˆà¸•à¸±à¸§à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¹„à¸¡à¹ˆà¸‹à¹‰à¸³",
          tip2: "*à¹€à¸¥à¸·à¸­à¸à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹€à¸”à¸µà¸¢à¸§à¸à¸±à¸™à¸­à¸¢à¹ˆà¸²à¸‡à¸™à¹‰à¸­à¸¢ 1 à¸„à¸¹à¹ˆ à¹à¸¥à¸°à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸•à¹ˆà¸²à¸‡à¸à¸±à¸™ 1 à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚ à¸«à¸²à¸à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹€à¸›à¸´à¸”à¸•à¸£à¸‡à¸à¸±à¸šà¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¸ˆà¸°à¹„à¸”à¹‰à¸£à¸±à¸šà¸£à¸²à¸‡à¸§à¸±à¸¥",
          title3:
            "à¸¥à¸·à¸­à¸ 3 à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¹„à¸¡à¹ˆà¸‹à¹‰à¸³à¸à¸±à¸™",
          tip3: "*à¸«à¸²à¸à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹€à¸›à¸´à¸”à¸•à¸£à¸‡à¸à¸±à¸š 3 à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹€à¸”à¸´à¸¡à¸žà¸±à¸™ à¸„à¸¸à¸“à¸ˆà¸°à¸Šà¸™à¸°",
          title4:
            "à¹€à¸¥à¸·à¸­à¸ 3 à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¸•à¸£à¸‡à¸à¸±à¸™",
          tip4: "*à¸«à¸²à¸à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¸­à¸­à¸à¸¡à¸µà¸ªà¸²à¸¡à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹€à¸”à¸µà¸¢à¸§à¸à¸±à¸™ à¸„à¸¸à¸“à¸ˆà¸°à¸Šà¸™à¸°",
          title5: "à¸¥à¸·à¸­à¸ 3 à¸•à¸±à¸§à¹€à¸¥à¸‚à¸•à¹ˆà¸­à¹€à¸™à¸·à¹ˆà¸­à¸‡",
          tip5: "*à¸«à¸²à¸à¸«à¸§à¸¢à¹€à¸›à¹‡à¸™à¹€à¸¥à¸‚à¸ªà¸²à¸¡à¸•à¸±à¸§à¹ƒà¸” à¹† à¸•à¸´à¸”à¸•à¹ˆà¸­à¸à¸±à¸™ à¹à¸ªà¸”à¸‡à¸§à¹ˆà¸²à¹€à¸›à¹‡à¸™à¸œà¸¥à¸‚à¸­à¸‡à¸«à¸§à¸¢",
          title6:
            "à¹€à¸¥à¸·à¸­à¸ 3 à¸•à¸±à¸§à¹€à¸¥à¸‚à¸•à¸´à¸”à¸•à¹ˆà¸­à¸à¸±à¸™",
          tip6: "*à¸«à¸²à¸à¸«à¸§à¸¢à¹€à¸›à¹‡à¸™à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸ªà¸²à¸¡à¸•à¸±à¸§ à¸•à¸´à¸”à¸•à¹ˆà¸­à¸à¸±à¸™ à¹à¸ªà¸”à¸‡à¸§à¹ˆà¸²à¹€à¸›à¹‡à¸™à¸œà¸¥à¸‚à¸­à¸‡à¸«à¸§à¸¢",
          title7:
            "à¹€à¸¥à¸·à¸­à¸ 2 à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¹à¸•à¸à¸•à¹ˆà¸²à¸‡à¸à¸±à¸™",
          tip7: "*à¹€à¸¥à¸·à¸­à¸ 2 à¸•à¸±à¸§à¹€à¸¥à¸‚à¸‚à¸¶à¹‰à¸™à¹„à¸› à¸ªà¸­à¸‡à¸•à¸±à¸§à¹ƒà¸™à¸œà¸¥à¸¥à¸­à¸•à¹€à¸•à¸­à¸£à¸µà¹ˆà¹€à¸›à¹‡à¸™à¸•à¸±à¸§à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¹à¸•à¸à¸•à¹ˆà¸²à¸‡à¸à¸±à¸™  à¹à¸¥à¸°à¸«à¸²à¸à¸•à¸£à¸‡à¸à¸±à¸šà¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¹€à¸¥à¸·à¸­à¸ à¸ˆà¸°à¹„à¸”à¹‰à¸£à¸±à¸šà¸£à¸²à¸‡à¸§à¸±à¸¥",
          selectCon1:
            "à¹€à¸¥à¸·à¸­à¸ 2 à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¸•à¸£à¸‡à¸à¸±à¸™ï¼š",
          selectCon2:
            "à¸¥à¸·à¸­à¸à¸„à¸¹à¹ˆà¸•à¸±à¸§à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¹„à¸¡à¹ˆà¸‹à¹‰à¸³ï¼š",
          selectCon3:
            "à¸¥à¸·à¸­à¸ 3 à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¹„à¸¡à¹ˆà¸‹à¹‰à¸³à¸à¸±à¸™ï¼š",
          selectCon4:
            "à¸¥à¸·à¸­à¸ 3 à¸•à¸±à¸§à¹€à¸¥à¸‚à¸•à¹ˆà¸­à¹€à¸™à¸·à¹ˆà¸­à¸‡ï¼š",
          selectCon5:
            "à¹€à¸¥à¸·à¸­à¸ 2 à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¹à¸•à¸à¸•à¹ˆà¸²à¸‡à¸à¸±à¸™ï¼š",
          gameType1: "à¸­à¸·à¹ˆà¸™à¹†à¸­à¸µà¸ 3 à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚",
          gameType2: "à¹€à¸¥à¸·à¸­à¸ 3 à¸•à¸±à¸§à¸•à¸´à¸”à¸à¸±à¸™",
          gameType3:
            "à¹€à¸¥à¸·à¸­à¸ 2 à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹€à¸”à¸µà¸¢à¸§à¸à¸±à¸™",
          gameType4:
            "à¹€à¸¥à¸·à¸­à¸ 3 à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¹€à¸«à¸¡à¸·à¸­à¸™à¸à¸±à¸™",
        },
        activity: { title: "à¸à¸´à¸ˆà¸à¸£à¸£à¸¡" },
        activityDes: {
          title: "à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¸à¸´à¸ˆà¸à¸£à¸£à¸¡",
        },
        usdt: {
          title: "USDT à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
          address: "à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸à¸£à¸°à¹€à¸›à¹‹à¸²à¹€à¸‡à¸´à¸™ USDT",
          Raddress: "à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
          QRcode: "à¸„à¸´à¸§à¸­à¸²à¸£à¹Œà¹‚à¸„à¹‰à¸”",
          tit1: "à¸‹à¸·à¹‰à¸­à¸ªà¸à¸¸à¸¥à¹€à¸‡à¸´à¸™",
          tit2: "à¹‚à¸­à¸™à¹„à¸›à¸¢à¸±à¸‡à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆ",
          tit3: "à¸›à¸£à¸°à¸—à¸±à¸šà¸•à¸£à¸²",
          tit4: "à¸£à¸­à¸à¸²à¸£à¸¡à¸²à¸–à¸¶à¸‡",
          tip1: "1. à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸à¸²à¸£à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™à¸¡à¸µà¸à¸²à¸£à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¹à¸›à¸¥à¸‡à¸•à¸²à¸¡à¹€à¸§à¸¥à¸²à¸ˆà¸£à¸´à¸‡ à¹‚à¸›à¸£à¸”à¸­à¸¢à¹ˆà¸²à¸šà¸±à¸™à¸—à¸¶à¸à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸à¸²à¸£à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™ à¹‚à¸›à¸£à¸”à¸£à¸±à¸šà¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸à¸²à¸£à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™à¸­à¸µà¸à¸„à¸£à¸±à¹‰à¸‡à¸à¹ˆà¸­à¸™à¸à¸²à¸£à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™à¹à¸•à¹ˆà¸¥à¸°à¸„à¸£à¸±à¹‰à¸‡à¹€à¸žà¸·à¹ˆà¸­à¸«à¸¥à¸µà¸à¹€à¸¥à¸µà¹ˆà¸¢à¸‡à¸à¸²à¸£à¸ªà¸¹à¸à¹€à¸ªà¸µà¸¢à¸ªà¸à¸¸à¸¥à¹€à¸‡à¸´à¸™à¸”à¸´à¸ˆà¸´à¸—à¸±à¸¥ ",
          tip2: "2. à¸«à¸¥à¸±à¸‡à¸ˆà¸²à¸à¸„à¸±à¸”à¸¥à¸­à¸à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸ªà¸³à¸«à¸£à¸±à¸šà¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™à¹à¸¥à¹‰à¸§ à¹‚à¸›à¸£à¸”à¹„à¸›à¸—à¸µà¹ˆà¸à¸£à¸°à¹€à¸›à¹‹à¸²à¹€à¸‡à¸´à¸™à¸”à¸´à¸ˆà¸´à¸—à¸±à¸¥à¸—à¸µà¹ˆà¸„à¸¸à¸“à¹ƒà¸Šà¹‰à¹ƒà¸™à¸à¸²à¸£à¸–à¸­à¸™à¹à¸¥à¸°à¹‚à¸­à¸™à¹€à¸‡à¸´à¸™ à¸«à¹‰à¸²à¸¡à¹€à¸•à¸´à¸¡à¸ªà¸´à¸™à¸—à¸£à¸±à¸žà¸¢à¹Œà¸”à¸´à¸ˆà¸´à¸—à¸±à¸¥à¸—à¸µà¹ˆà¹à¸•à¸à¸•à¹ˆà¸²à¸‡à¸ˆà¸²à¸à¸šà¸¥à¹‡à¸­à¸à¹€à¸Šà¸™à¸—à¸µà¹ˆà¹€à¸¥à¸·à¸­à¸ à¸¡à¸´à¸‰à¸°à¸™à¸±à¹‰à¸™ à¸ªà¸´à¸™à¸—à¸£à¸±à¸žà¸¢à¹Œà¸ˆà¸°à¹„à¸¡à¹ˆà¸–à¸¹à¸à¹€à¸£à¸µà¸¢à¸à¸„à¸·à¸™ ",
          tip3: "à¹‚à¸”à¸¢à¸—à¸±à¹ˆà¸§à¹„à¸›à¹à¸¥à¹‰à¸§à¸à¸²à¸£à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™-à¸–à¸­à¸™à¸ˆà¸°à¸¡à¸²à¸–à¸¶à¸‡à¹‚à¸”à¸¢à¸­à¸±à¸•à¹‚à¸™à¸¡à¸±à¸•à¸´à¸ à¸²à¸¢à¹ƒà¸™ 1-5 à¸™à¸²à¸—à¸µ à¸«à¸²à¸à¹„à¸¡à¹ˆà¹€à¸›à¹‡à¸™à¹€à¸Šà¹ˆà¸™à¸™à¸±à¹‰à¸™ à¹‚à¸›à¸£à¸”à¸•à¸´à¸”à¸•à¹ˆà¸­à¸à¹ˆà¸²à¸¢à¸šà¸£à¸´à¸à¸²à¸£à¸¥à¸¹à¸à¸„à¹‰à¸²à¸­à¸­à¸™à¹„à¸¥à¸™à¹Œ ",
          tip4: "(à¹„à¸¡à¹ˆà¸¡à¸µà¸„à¹ˆà¸²à¸”à¸³à¹€à¸™à¸´à¸™à¸à¸²à¸£à¹ƒà¸”à¹† à¹€à¸Šà¹ˆà¸™ à¸–à¸­à¸™ 100 à¹€à¸‚à¹‰à¸²à¸šà¸±à¸à¸Šà¸µ 100)",
        },
        trx: {
          uset: "TRX",
          title: "TRX à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™",
          address: "à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸à¸£à¸°à¹€à¸›à¹‹à¸²à¹€à¸‡à¸´à¸™ TRX",
        },
        promotionNew: {
          title: "à¹‚à¸›à¸£à¹‚à¸¡à¸—",
          dataOverview: "à¸ à¸²à¸žà¸£à¸§à¸¡",
          myTeam: "à¸ªà¸¡à¸²à¸Šà¸´à¸",
          upRecord: "à¸šà¸±à¸™à¸—à¸¶à¸",
          tutorial: "à¸œà¸¥à¸•à¸­à¸šà¹à¸—à¸™",
          myReward: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸‚à¸­à¸‡à¸‰à¸±à¸™",
          totalComm:
            "à¸„à¹ˆà¸²à¸„à¸­à¸¡à¸¡à¸´à¸Šà¸Šà¸±à¹ˆà¸™à¸£à¸§à¸¡à¸‚à¸­à¸‡à¹€à¸¡à¸·à¹ˆà¸­à¸§à¸²à¸™",
          directComm:
            "à¸„à¹ˆà¸²à¸„à¸­à¸¡à¸¡à¸´à¸Šà¸Šà¸±à¹ˆà¸™à¸ˆà¸²à¸à¸ªà¸¡à¸²à¸Šà¸´à¸à¹‚à¸”à¸¢à¸•à¸£à¸‡",
          teamComm:
            "à¸„à¹ˆà¸²à¸„à¸­à¸¡à¸¡à¸´à¸Šà¸Šà¸±à¹ˆà¸™à¸ˆà¸²à¸à¸ªà¸¡à¸²à¸Šà¸´à¸à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          directSubord: "à¸ˆà¸³à¸™à¸§à¸™à¸ªà¸¡à¸²à¸Šà¸´à¸à¹‚à¸”à¸¢à¸•à¸£à¸‡",
          totalTeams: "à¸ˆà¸³à¸™à¸§à¸™à¸ªà¸¡à¸²à¸Šà¸´à¸à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          newToday:
            "à¸ªà¸¡à¸²à¸Šà¸´à¸à¹ƒà¸«à¸¡à¹ˆà¸›à¸£à¸°à¸ˆà¸³à¸§à¸±à¸™à¸™à¸µà¹‰",
          newTeam:
            "à¸ªà¸¡à¸²à¸Šà¸´à¸à¹ƒà¸«à¸¡à¹ˆà¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”à¹ƒà¸™à¸§à¸±à¸™à¸™à¸µà¹‰",
          weekComm:
            "à¸„à¹ˆà¸²à¸„à¸­à¸¡à¸¡à¸´à¸Šà¸Šà¸±à¹ˆà¸™à¸›à¸£à¸°à¸ˆà¸³à¸ªà¸±à¸›à¸”à¸²à¸«à¹Œ",
          totalComm1:
            "à¸„à¹ˆà¸²à¸„à¸­à¸¡à¸¡à¸´à¸Šà¸Šà¸±à¹ˆà¸™à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          QRcode:
            "à¸à¸”à¸„à¹‰à¸²à¸‡à¹€à¸žà¸·à¹ˆà¸­à¸šà¸±à¸™à¸—à¸¶à¸à¸£à¸«à¸±à¸ª QR",
          copyCode: "à¸„à¸±à¸”à¸¥à¸­à¸à¸£à¸«à¸±à¸ªà¹€à¸Šà¸´à¸",
          copyLink: "à¸„à¸±à¸”à¸¥à¸­à¸à¸¥à¸´à¸‡à¸„à¹Œ",
          rebateTable:
            "à¸•à¸²à¸£à¸²à¸‡à¸„à¹ˆà¸²à¸„à¸­à¸¡à¸¡à¸´à¸Šà¸Šà¸±à¹ˆà¸™à¸ªà¸³à¸«à¸£à¸±à¸šà¸•à¸±à¸§à¹à¸—à¸™à¸—à¸µà¹ˆà¹à¸™à¸°à¸™à¸³à¸ªà¸¡à¸²à¸Šà¸´à¸",
          agencyLevel: "à¸£à¸°à¸”à¸±à¸š",
          teamNumber: "à¸ˆà¸³à¸™à¸§à¸™à¸ªà¸¡à¸²à¸Šà¸´à¸",
          teamFlow: "à¸¢à¸­à¸”à¹€à¸—à¸´à¸£à¹Œà¸™",
          teamRecharge: "à¸¢à¸­à¸”à¹€à¸•à¸´à¸¡",
          validDay:
            "à¸ªà¸¡à¸²à¸Šà¸´à¸à¸—à¸µà¹ˆà¸–à¸¹à¸à¸•à¹‰à¸­à¸‡: à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™à¸«à¸£à¸·à¸­à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¹ƒà¸™à¸§à¸±à¸™à¹€à¸”à¸µà¸¢à¸§à¸à¸±à¸™",
          commMethod:
            "à¸§à¸´à¸˜à¸µà¸à¸²à¸£à¸„à¸³à¸™à¸§à¸“à¸„à¹ˆà¸²à¸„à¸­à¸¡à¸¡à¸´à¸Šà¸Šà¸±à¹ˆà¸™",
          Hierarchy: "à¸£à¸°à¸”à¸±à¸š",
          rebateRatio: "",
          firstMember: "à¸£à¸°à¸”à¸±à¸š 1",
          secondMember: "à¸£à¸°à¸”à¸±à¸š 2",
          thirdMember: "à¸£à¸°à¸”à¸±à¸š 3",
          tierMember: "à¸£à¸°à¸”à¸±à¸š 4",
          bettingTurnover:
            "à¹€à¸›à¸­à¸£à¹Œà¹€à¸‹à¹‡à¸™à¸•à¹Œà¸—à¸µà¹ˆà¹„à¸”à¹‰à¸£à¸±à¸š",
          agent: "",
          upTime: "à¹€à¸§à¸¥à¸²à¸£à¸±à¸š",
          receiveAmount: "à¸¢à¸­à¸”à¸—à¸µà¹ˆà¹„à¸”à¹‰à¸£à¸±à¸š",
          operate: "à¸”à¸³à¹€à¸™à¸´à¸™à¸à¸²à¸£",
          details: "à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”",
          date: "à¸§à¸±à¸™à¸—à¸µà¹ˆ",
          directTeam: "à¸ªà¸¡à¸²à¸Šà¸´à¸à¹‚à¸”à¸¢à¸•à¸£à¸‡",
          people: "à¸„à¸™",
          pleaseChoose: "à¹‚à¸›à¸£à¸”à¹€à¸¥à¸·à¸­à¸",
          totalBet: "à¸¢à¸­à¸”à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          totalAmount:
            "à¸¢à¸­à¸”à¸—à¸µà¹ˆà¹„à¸”à¹‰à¸£à¸±à¸šà¸ˆà¸²à¸à¸ªà¸¡à¸²à¸Šà¸´à¸",
          Inquire: "à¸ªà¸­à¸šà¸–à¸²à¸¡",
          nickName: "à¸Šà¸·à¹ˆà¸­",
          runningWater: "à¸¢à¸­à¸”à¸«à¸¡à¸¸à¸™",
          condition: "à¸ªà¸–à¸²à¸™à¸°",
          enable: "à¸”à¸³à¹€à¸™à¸´à¸™à¸à¸²à¸£",
          disabled: "à¸žà¸´à¸à¸²à¸£",
          personalFlow: "à¸à¸£à¸°à¹à¸ªà¸ªà¹ˆà¸§à¸™à¸•à¸±à¸§",
          personalRecharge: "à¹€à¸•à¸´à¸¡à¹€à¸‡à¸´à¸™à¸ªà¹ˆà¸§à¸™à¸•à¸±à¸§",
          rgistrationTime: "à¹€à¸§à¸¥à¸²à¸¥à¸‡à¸—à¸°à¹€à¸šà¸µà¸¢à¸™",
          subordinates: "à¸ˆà¸³à¸™à¸§à¸™à¸¥à¸¹à¸à¸—à¸µà¸¡",
          year: "à¸›à¸µ",
          moon: "à¹€à¸”à¸·à¸­à¸™",
          day: "à¸§à¸±à¸™à¸—à¸µà¹ˆ",
          selectList: [
            { name: "à¸£à¸°à¸”à¸±à¸š 1", code: 1 },
            { name: "à¸£à¸°à¸”à¸±à¸š 2", code: 2 },
            { name: "à¸£à¸°à¸”à¸±à¸š 3", code: 3 },
            { name: "à¸£à¸°à¸”à¸±à¸š 4", code: 4 },
            { name: "à¸£à¸°à¸”à¸±à¸š 5", code: 5 },
            { name: "à¸£à¸°à¸”à¸±à¸š 6", code: 6 },
          ],
          promoteMoney: "à¹‚à¸›à¸£à¹‚à¸¡à¸—",
          uid: "UID",
        },
        verify: {
          title: "Google Authenticator",
          unbind:
            "à¹€à¸¥à¸´à¸à¸œà¸¹à¸/à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸¡à¸·à¸­à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸„à¸§à¸²à¸¡à¸–à¸¹à¸à¸•à¹‰à¸­à¸‡",
          downTit:
            "à¸”à¸²à¸§à¸™à¹Œà¹‚à¸«à¸¥à¸”à¹à¸¥à¸°à¸¥à¸‡à¸—à¸°à¹€à¸šà¸µà¸¢à¸™",
          downTxt:
            "à¹‚à¸›à¸£à¸”à¸”à¸²à¸§à¸™à¹Œà¹‚à¸«à¸¥à¸” Google Authenticator à¸«à¸²à¸à¸à¸²à¸£à¸•à¸´à¸”à¸•à¸±à¹‰à¸‡à¹€à¸ªà¸£à¹‡à¸ˆà¸ªà¸¡à¸šà¸¹à¸£à¸“à¹Œ à¹ƒà¸«à¹‰à¸„à¸¥à¸´à¸à¸›à¸¸à¹ˆà¸¡à¸œà¸¹à¸à¹€à¸žà¸·à¹ˆà¸­à¸œà¸¹à¸à¸šà¸±à¸à¸Šà¸µà¸¥à¸­à¸•à¹€à¸•à¸­à¸£à¸µà¸‚à¸­à¸‡à¸„à¸¸à¸“",
          bind: "à¸œà¸¹à¸",
          downVerify: "à¸”à¸²à¸§à¸™à¹Œà¹‚à¸«à¸¥à¸” Google Authenticator",
          vexplainTit:
            "à¸„à¸³à¸­à¸˜à¸´à¸šà¸²à¸¢à¸•à¸±à¸§à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸à¸²à¸£à¸œà¸¹à¸",
          list: [
            {
              txt: "à¸„à¸¸à¸“à¸•à¹‰à¸­à¸‡à¸šà¸±à¸™à¸—à¸¶à¸à¸„à¸µà¸¢à¹Œ 16 à¸«à¸¥à¸±à¸à¸—à¸µà¹ˆà¸ªà¸£à¹‰à¸²à¸‡à¸ˆà¸²à¸à¸šà¸±à¸à¸Šà¸µà¸¥à¸­à¸•à¹€à¸•à¸­à¸£à¸µà¸‚à¸­à¸‡à¸„à¸¸à¸“à¹„à¸§à¹‰à¹ƒà¸™à¸—à¸µà¹ˆà¸›à¸¥à¸­à¸”à¸ à¸±à¸¢à¹à¸¥à¸°à¸„à¸±à¸”à¸¥à¸­à¸à¸„à¸µà¸¢à¹Œ",
            },
            { txt: "à¸„à¸¸à¸“à¸•à¹‰à¸­à¸‡à¹€à¸›à¸´à¸” Google Authenticator" },
            {
              txt: "à¹€à¸žà¸´à¹ˆà¸¡à¸šà¸±à¸à¸Šà¸µà¹€à¸à¸¡ à¸„à¸±à¸”à¸¥à¸­à¸à¸­à¸´à¸™à¸žà¸¸à¸•à¸„à¸µà¸¢à¹Œ 16 à¸«à¸¥à¸±à¸",
            },
            {
              txt: "à¸«à¸¥à¸±à¸‡à¸ˆà¸²à¸à¹€à¸žà¸´à¹ˆà¸¡à¸ªà¸³à¹€à¸£à¹‡à¸ˆà¹à¸¥à¹‰à¸§ à¸£à¸«à¸±à¸ªà¸¢à¸·à¸™à¸¢à¸±à¸™à¸”à¸´à¸ˆà¸´à¸—à¸±à¸¥ 6 à¸«à¸¥à¸±à¸à¸ˆà¸°à¸–à¸¹à¸à¸ªà¸£à¹‰à¸²à¸‡à¸‚à¸¶à¹‰à¸™à¹‚à¸”à¸¢à¸­à¸±à¸•à¹‚à¸™à¸¡à¸±à¸•à¸´",
            },
          ],
          vexplainNext: "à¸‚à¹‰à¸²à¸¡à¸šà¸—à¸Šà¹ˆà¸§à¸¢à¸ªà¸­à¸™",
          vbackupTit: "à¸à¸¸à¸à¹à¸ˆà¸ªà¸³à¸£à¸­à¸‡",
          vbackupTxt:
            "à¹‚à¸›à¸£à¸”à¸šà¸£à¸´à¸ˆà¸²à¸„à¸à¸¸à¸à¹à¸ˆà¸ªà¸³à¸„à¸±à¸à¹à¸¥à¸°à¹€à¸à¹‡à¸šà¹„à¸§à¹‰à¹ƒà¸™à¸—à¸µà¹ˆà¸›à¸¥à¸­à¸”à¸ à¸±à¸¢ à¸«à¸²à¸à¹‚à¸—à¸£à¸¨à¸±à¸žà¸—à¹Œà¸—à¸´à¹‰à¸‡à¸„à¸µà¸¢à¹Œà¸™à¸µà¹‰ à¸¡à¸´à¸‰à¸°à¸™à¸±à¹‰à¸™ à¸„à¸¸à¸“à¸ˆà¸°à¹€à¸à¹‡à¸šà¸•à¸±à¸§à¸—à¸”à¸ªà¸­à¸šà¸­à¸²à¸¢à¸¸à¸à¸²à¸£à¹ƒà¸Šà¹‰à¸‡à¸²à¸™à¹„à¸§à¹‰ 7 à¸§à¸±à¸™",
          vsafetyTit: "à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸„à¸§à¸²à¸¡à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢",
          vsafetyTxt:
            "à¸ªà¹ˆà¸‡à¸£à¸«à¸±à¸ªà¸¢à¸·à¸™à¸¢à¸±à¸™à¹„à¸›à¸¢à¸±à¸‡à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹‚à¸—à¸£à¸¨à¸±à¸žà¸—à¹Œà¸¡à¸·à¸­à¸–à¸·à¸­à¸‚à¸­à¸‡à¸„à¸¸à¸“",
          vsafetySms: "à¸£à¸«à¸±à¸ªà¸¢à¸·à¸™à¸¢à¸±à¸™à¸¡à¸·à¸­à¸–à¸·à¸­",
          vsafetyTip:
            "à¸à¸²à¸£à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸„à¸§à¸²à¸¡à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢à¹„à¸¡à¹ˆà¸žà¸£à¹‰à¸­à¸¡à¹ƒà¸Šà¹‰à¸‡à¸²à¸™? à¸•à¸´à¸”à¸•à¹ˆà¸­à¸à¹ˆà¸²à¸¢à¸šà¸£à¸´à¸à¸²à¸£à¸¥à¸¹à¸à¸„à¹‰à¸²",
          vsafetySnsnull:
            "à¸•à¹‰à¸­à¸‡à¸à¸£à¸­à¸à¸£à¸«à¸±à¸ªà¸¢à¸·à¸™à¸¢à¸±à¸™",
          loginTit:
            "à¸à¸²à¸£à¸¢à¸·à¸™à¸¢à¸±à¸™à¸à¸²à¸£à¹€à¸‚à¹‰à¸²à¸ªà¸¹à¹ˆà¸£à¸°à¸šà¸š Google",
          loginTxt:
            "à¹€à¸›à¸´à¸”à¹ƒà¸Šà¹‰à¸‡à¸²à¸™à¸à¸²à¸£à¸›à¹‰à¸­à¸‡à¸à¸±à¸™à¸šà¸±à¸à¸Šà¸µà¹à¸¥à¹‰à¸§ à¹‚à¸›à¸£à¸”à¸›à¸à¸´à¸šà¸±à¸•à¸´à¸•à¸²à¸¡à¸„à¸³à¹à¸™à¸°à¸™à¸³à¹€à¸žà¸·à¹ˆà¸­à¸”à¸³à¹€à¸™à¸´à¸™à¸à¸²à¸£à¸•à¹ˆà¸­à¹„à¸›à¸™à¸µà¹‰à¹ƒà¸«à¹‰à¹€à¸ªà¸£à¹‡à¸ˆà¸ªà¸´à¹‰à¸™",
          loginTip:
            "à¹‚à¸›à¸£à¸”à¹€à¸›à¸´à¸”à¹à¸­à¸› Alibaba Cloud à¸«à¸£à¸·à¸­ Google Authenticator (à¸­à¸¸à¸›à¸à¸£à¸“à¹Œà¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸ªà¸´à¸—à¸˜à¸´à¹Œ) à¹ƒà¸™à¹‚à¸—à¸£à¸¨à¸±à¸žà¸—à¹Œà¸¡à¸·à¸­à¸–à¸·à¸­à¸‚à¸­à¸‡à¸„à¸¸à¸“ à¹‚à¸›à¸£à¸”à¸›à¹‰à¸­à¸™à¸£à¸«à¸±à¸ªà¹„à¸”à¸™à¸²à¸¡à¸´à¸ 6 à¸«à¸¥à¸±à¸",
          loginNum: "6 à¸«à¸¥à¸±à¸",
        },
        long: {
          title: "à¸œà¸¹à¹‰à¸Šà¹ˆà¸§à¸¢à¸—à¸µà¹ˆà¸¢à¸²à¸§à¸™à¸²à¸™",
          newTitle: "à¸¡à¸±à¸‡à¸à¸£à¸¢à¸²à¸§à¸•à¸±à¸§à¸¥à¹ˆà¸²à¸ªà¸¸à¸”",
          betTitle: "à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¸‚à¸­à¸‡à¸‰à¸±à¸™",
          expect: "à¸„à¸²à¸”à¸«à¸§à¸±à¸‡",
          andDig: "à¸¡à¸«à¸²à¸§à¸´à¸—à¸¢à¸²à¸¥à¸±à¸¢à¸§à¸²à¸„à¸²à¸¢à¸²à¸¡à¸°",
          andSmall: "à¹à¸¥à¸°à¹€à¸¥à¹‡à¸",
          andodd: "à¹€à¸«à¸­à¸‰à¸µ",
          andeven: "à¸„à¸§à¸²à¸¡à¸ªà¸²à¸¡à¸±à¸„à¸„à¸µ",
          illustrate: "à¸ à¸²à¸žà¸›à¸£à¸°à¸à¸­à¸š",
          txt1: 'Longlong Assistant à¹€à¸›à¹‡à¸™à¹€à¸„à¸£à¸·à¹ˆà¸­à¸‡à¸¡à¸·à¸­à¸Šà¹ˆà¸§à¸¢à¸—à¸µà¹ˆà¸•à¸´à¸”à¸•à¸²à¸¡à¹à¸¥à¸°à¸™à¸±à¸šà¸œà¸¥à¸¥à¸­à¸•à¹€à¸•à¸­à¸£à¸µà¸‚à¸­à¸‡ Win Go, 5D, K3 à¹à¸¥à¸°à¸¥à¸­à¸•à¹€à¸•à¸­à¸£à¸µ "à¸„à¸µà¹ˆà¹à¸¥à¸°à¸„à¸¹à¹ˆ" à¹à¸¥à¸°à¸ªà¸²à¸¡à¸²à¸£à¸–à¸—à¸³à¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¹„à¸”à¹‰à¸­à¸¢à¹ˆà¸²à¸‡à¸£à¸§à¸”à¹€à¸£à¹‡à¸§',
          txt2: 'à¸„à¸§à¸²à¸¡à¸™à¹ˆà¸²à¸ˆà¸°à¹€à¸›à¹‡à¸™à¸—à¸µà¹ˆà¸ˆà¸°à¸­à¸­à¸à¹ƒà¸«à¸à¹ˆ à¹€à¸¥à¹‡à¸ à¹€à¸”à¸µà¹ˆà¸¢à¸§ à¹à¸¥à¸°à¸„à¸¹à¹ˆà¹ƒà¸™à¹à¸•à¹ˆà¸¥à¸°à¸‡à¸§à¸”à¸ˆà¸°à¹€à¸—à¹ˆà¸²à¸à¸±à¸™ à¸–à¹‰à¸²à¸œà¸¥à¸«à¸§à¸¢ 3 à¸‡à¸§à¸”à¸‚à¸¶à¹‰à¸™à¹„à¸›à¹€à¸—à¹ˆà¸²à¸à¸±à¸™à¸ˆà¸°à¹€à¸£à¸µà¸¢à¸à¸§à¹ˆà¸² "à¸¡à¸±à¸‡à¸à¸£à¸¢à¸²à¸§" à¹à¸¥à¸°à¸§à¸´à¸˜à¸µà¸à¸²à¸£ "à¸œà¹ˆà¸²à¸¡à¸±à¸‡à¸à¸£" à¸«à¸£à¸·à¸­ "à¸à¸²à¸£à¹„à¸¥à¹ˆà¸¡à¸±à¸‡à¸à¸£" à¸¡à¸±à¸à¸ˆà¸°à¸—à¸³à¹‚à¸”à¸¢à¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¸ªà¸­à¸‡à¸„à¸£à¸±à¹‰à¸‡',
          list: [
            {
              name: "à¸¡à¸±à¸‡à¸à¸£à¸ªà¸±à¸šà¸„à¸·à¸­à¸­à¸°à¹„à¸£?",
              txt: 'à¸«à¸²à¸à¸„à¸¸à¸“à¹€à¸›à¸´à¸” "à¸‹à¸´à¸‡à¹€à¸à¸´à¹‰à¸¥" 5 à¸•à¸±à¸§à¸•à¸´à¸”à¸•à¹ˆà¸­à¸à¸±à¸™ à¸„à¸¸à¸“à¸ªà¸²à¸¡à¸²à¸£à¸–à¹€à¸¥à¸·à¸­à¸ "à¸”à¸±à¸šà¹€à¸šà¸´à¹‰à¸¥" à¹€à¸žà¸·à¹ˆà¸­à¹€à¸”à¸´à¸¡à¸žà¸±à¸™ à¹à¸œà¸™à¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¸™à¸µà¹‰à¹€à¸£à¸µà¸¢à¸à¸§à¹ˆà¸² "à¸„à¸±à¸—à¸”à¸£à¸²à¸à¹‰à¸­à¸™" ',
            },
            {
              name: "à¸‹à¸¸à¹ˆà¸™à¸«à¸¥à¸‡à¸„à¸·à¸­à¸­à¸°à¹„à¸£?",
              txt: 'à¸«à¸²à¸à¸„à¸¸à¸“à¹€à¸›à¸´à¸” "à¸‹à¸´à¸‡à¹€à¸à¸´à¹‰à¸¥" 5 à¸•à¸±à¸§à¸•à¸´à¸”à¸•à¹ˆà¸­à¸à¸±à¸™ à¹ƒà¸«à¹‰à¹€à¸¥à¸·à¸­à¸ "à¹€à¸”à¸µà¹ˆà¸¢à¸§" à¹€à¸žà¸·à¹ˆà¸­à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¸•à¹ˆà¸­à¹„à¸› à¹à¸œà¸™à¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¸™à¸µà¹‰à¹€à¸£à¸µà¸¢à¸à¸§à¹ˆà¸² "à¸Šà¸¸à¸™à¸”à¸£à¸²à¸à¹‰à¸­à¸™"',
            },
            {
              name: "à¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¸ªà¸­à¸‡à¸„à¸£à¸±à¹‰à¸‡à¸„à¸·à¸­à¸­à¸°à¹„à¸£?",
              txt: 'à¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¹à¸šà¸šà¸”à¸±à¸šà¹€à¸šà¸´à¹‰à¸¥à¹€à¸›à¹‡à¸™à¸§à¸´à¸˜à¸µà¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¹à¸šà¸šà¸”à¸±à¸šà¹€à¸šà¸´à¹‰à¸¥à¸‹à¸¶à¹ˆà¸‡à¹€à¸›à¹‡à¸™à¸§à¸´à¸˜à¸µà¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¹€à¸žà¸·à¹ˆà¸­à¹ƒà¸«à¹‰à¹à¸™à¹ˆà¹ƒà¸ˆà¸§à¹ˆà¸²à¸¡à¸µà¸à¸³à¹„à¸£à¸­à¸¢à¹ˆà¸²à¸‡à¸•à¹ˆà¸­à¹€à¸™à¸·à¹ˆà¸­à¸‡à¹ƒà¸™à¸à¸£à¸°à¸šà¸§à¸™à¸à¸²à¸£ "à¸œà¹ˆà¸²à¸¡à¸±à¸‡à¸à¸£" à¸«à¸£à¸·à¸­ "à¸›à¸±à¸”à¸¡à¸±à¸‡à¸à¸£"',
            },
          ],
          txt3: "à¸¡à¸±à¸‡à¸à¸£à¸¢à¸²à¸§à¸¥à¹ˆà¸²à¸ªà¸¸à¸”: à¸Ÿà¸±à¸‡à¸à¹Œà¸Šà¸±à¸™à¸™à¸µà¹‰à¸ˆà¸°à¸­à¸±à¸›à¹€à¸”à¸•à¸£à¸²à¸¢à¸à¸²à¸£à¹€à¸à¸¡à¹‚à¸”à¸¢à¸­à¸±à¸•à¹‚à¸™à¸¡à¸±à¸•à¸´à¸”à¹‰à¸§à¸¢à¸œà¸¥à¸¥à¸±à¸žà¸˜à¹Œà¹€à¸”à¸µà¸¢à¸§à¸à¸±à¸™à¹ƒà¸™à¸¥à¸­à¸•à¹€à¸•à¸­à¸£à¸µ 5 à¸‡à¸§à¸”à¸•à¸´à¸”à¸•à¹ˆà¸­à¸à¸±à¸™ à¸‹à¸¶à¹ˆà¸‡à¸ªà¸°à¸”à¸§à¸à¸ªà¸³à¸«à¸£à¸±à¸šà¸„à¸¸à¸“à¹ƒà¸™à¸à¸²à¸£à¸•à¸±à¸”à¸ªà¸´à¸™à¸§à¹ˆà¸²à¸ˆà¸°à¸œà¹ˆà¸²à¸¡à¸±à¸‡à¸à¸£à¸«à¸£à¸·à¸­à¸¡à¸±à¸‡à¸à¸£",
          txt4: "à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¸‚à¸­à¸‡à¸‰à¸±à¸™: à¸„à¸¸à¸“à¸¥à¸±à¸à¸©à¸“à¸°à¸™à¸µà¹‰à¸—à¸³à¹ƒà¸«à¹‰à¸‡à¹ˆà¸²à¸¢à¸•à¹ˆà¸­à¸à¸²à¸£à¸”à¸¹à¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™à¸‚à¸­à¸‡à¸„à¸¸à¸“à¹à¸¥à¸°à¸œà¸¥à¹€à¸ªà¸¡à¸­",
        },
        shop: {
          currentPoints: "à¸„à¸°à¹à¸™à¸™à¸›à¸±à¸ˆà¸ˆà¸¸à¸šà¸±à¸™",
          Redeem: "à¹à¸¥à¸à¸•à¸­à¸™à¸™à¸µà¹‰",
          pointsGo:
            "à¸žà¸­à¸¢à¸—à¹Œà¸¡à¸­à¸¥à¸¥à¹Œ à¹„à¸›à¹€à¸”à¸µà¹‹à¸¢à¸§à¸™à¸µà¹‰",
          commodityOrder: "à¸ªà¸±à¹ˆà¸‡à¸‹à¸·à¹‰à¸­à¸ªà¸´à¸™à¸„à¹‰à¸²",
          pointsRecord: "à¸šà¸±à¸™à¸—à¸¶à¸à¸„à¸°à¹à¸™à¸™",
          title: "à¸žà¸­à¸¢à¸•à¹Œà¸¡à¸­à¸¥à¸¥à¹Œ",
          pointsAvailable: "à¸„à¸°à¹à¸™à¸™à¸—à¸µà¹ˆà¸¡à¸µà¸­à¸¢à¸¹à¹ˆ",
          rule: "à¸à¸Žà¸„à¸°à¹à¸™à¸™",
          stock: "à¸¡à¸µà¸ªà¸´à¸™à¸„à¹‰à¸²à¹ƒà¸™à¸ªà¸•à¹Šà¸­à¸",
          redeemed: "à¹à¸¥à¸à¹à¸¥à¹‰à¸§",
          integral: "à¸­à¸´à¸™à¸—à¸´à¸à¸£à¸±à¸¥",
          productName: "à¸Šà¸·à¹ˆà¸­à¸œà¸¥à¸´à¸•à¸ à¸±à¸“à¸‘à¹Œ",
          exchange:
            "à¹€à¸‡à¸·à¹ˆà¸­à¸™à¹„à¸‚à¸à¸²à¸£à¹à¸¥à¸à¹€à¸›à¸¥à¸µà¹ˆà¸¢à¸™",
          name: "à¸Šà¸·à¹ˆà¸­à¹à¸¥à¸°à¸™à¸²à¸¡à¸ªà¸à¸¸à¸¥",
          address: "à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆà¸ˆà¸±à¸”à¸ªà¹ˆà¸‡",
          redeem: "à¸”à¸³à¹€à¸™à¸´à¸™à¸à¸²à¸£à¹à¸¥à¸",
          checkOrder: "à¸•à¸£à¸§à¸ˆà¸ªà¸­à¸šà¸„à¸³à¸ªà¸±à¹ˆà¸‡à¸‹à¸·à¹‰à¸­",
          addressEmpty: "à¸•à¹‰à¸­à¸‡à¸£à¸°à¸šà¸¸à¸—à¸µà¹ˆà¸­à¸¢à¸¹à¹ˆ!",
          ordered: "à¸ªà¸±à¹ˆà¸‡à¸‹à¸·à¹‰à¸­",
          delivery: "à¹ƒà¸™à¸à¸²à¸£à¸ˆà¸±à¸”à¸ªà¹ˆà¸‡",
          completed: "à¸ªà¸¡à¸šà¸¹à¸£à¸“à¹Œ",
          orderDetails:
            "à¸£à¸²à¸¢à¸¥à¸°à¹€à¸­à¸µà¸¢à¸”à¸à¸²à¸£à¸ªà¸±à¹ˆà¸‡à¸‹à¸·à¹‰à¸­",
          orderTime: "à¹€à¸§à¸¥à¸²à¸ªà¸±à¹ˆà¸‡",
          orderStatus: "à¸ªà¸–à¸²à¸™à¸°à¸à¸²à¸£à¸ªà¸±à¹ˆà¸‡à¸‹à¸·à¹‰à¸­",
          signTime: "à¹€à¸§à¸¥à¸²à¸ªà¹ˆà¸‡",
          signPhoto: "à¸¥à¸‡à¸Šà¸·à¹ˆà¸­à¸–à¹ˆà¸²à¸¢à¸£à¸¹à¸›",
        },
        selections: {
          distanceDraw: "à¸™à¸±à¸šà¸–à¸­à¸¢à¸«à¸¥à¸±à¸‡",
          champion: "1st",
          runnerUp: "2nd",
          ndRunner: "3rd",
          outof1: "1/16",
          outof2: "2/16",
          outof3: "3/16",
        },
        lotteryD: {
          rules: "à¸§à¸´à¸˜à¸µà¸à¸²à¸£à¹€à¸¥à¹ˆà¸™",
          LotteryTime: "à¸œà¸¥",
          seal: "à¸›à¸´à¸”à¸à¸²à¸£à¹€à¸”à¸´à¸¡à¸žà¸±à¸™",
          stPrize1: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆ 1",
          stPrize2: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆ 2",
          stPrize3: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆ 3",
          Finalist: "à¹€à¸‚à¹‰à¸²à¸£à¸­à¸š",
          consolationprize: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸›à¸¥à¸­à¸šà¹ƒà¸ˆ",
          Doubledisc: "à¹à¸šà¸šà¸ªà¸­à¸‡à¸”à¹‰à¸²à¸™",
          TraditionalDish: "à¹à¸šà¸šà¸”à¸±à¹ˆà¸‡à¹€à¸”à¸´à¸¡",
          Doubleside: "à¸ªà¸­à¸‡à¸”à¹‰à¸²à¸™",
          Choosenumber: "à¹€à¸¥à¸·à¸­à¸à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚",
          FourDigit:
            "à¹€à¸¥à¸·à¸­à¸1à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¹ƒà¸™4à¸•à¸±à¸§à¹à¸«à¸™à¹ˆà¸‡",
          FourSlection: "à¹€à¸¥à¸·à¸­à¸0-9 à¹ƒà¸™4à¸•à¸±à¸§à¹à¸«à¸™à¹ˆà¸‡",
          duplicatenumber: "à¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸‹à¹‰à¸³",
          numberFormat: "à¸£à¸¹à¸›à¹à¸šà¸šà¸•à¸±à¸§à¹€à¸¥à¸‚à¸œà¸´à¸”",
          Bigone: "à¹ƒà¸«à¸à¹ˆ",
          Smallone: "à¹€à¸¥à¹‡à¸",
          Bothone: "à¹ƒà¸«à¸à¹ˆ+à¹€à¸¥à¹‡à¸",
          Addbet: "à¹€à¸žà¸´à¹ˆà¸¡à¹€à¸”à¸´à¸¡à¸žà¸±à¸™",
          Randomnumber: "à¸ªà¸¸à¹ˆà¸¡à¹€à¸¥à¸‚",
          Machineselection: "à¸ªà¸¸à¹ˆà¸¡à¸­à¸±à¸•à¹‚à¸™à¸¡à¸±à¸•à¸´",
          Enternumber:
            "à¹ƒà¸ªà¹ˆà¸«à¸¡à¸²à¸¢à¹€à¸¥à¸‚à¸—à¸µà¹ˆà¸•à¹‰à¸­à¸‡à¸à¸²à¸£",
          Concatenatedcode: "à¹€à¸¥à¸‚à¹€à¸£à¸µà¸¢à¸‡",
          select1: "à¹€à¸¥à¸·à¸­à¸ 2D à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          select2: "à¹€à¸¥à¸·à¸­à¸ 3D à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          select3: "à¹€à¸¥à¸·à¸­à¸ 4D à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          select4: "à¹€à¸•à¹‡à¸‡ 2D",
          select5: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸ªà¸¹à¸‡à¸ªà¸¸à¸” 2D",
          select6: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆ1 2D",
          select7: "2D",
          select8: "3D",
          SeventhPrize: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆ7",
          EighthPrize: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆ8",
          positivecode3: "à¹€à¸•à¹‡à¸‡ 3D",
          SpecialPrize3: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸ªà¸¹à¸‡à¸ªà¸¸à¸” 3D",
          FirstPrize3: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆ1 3D",
          SixthPrize: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆ6",
          positivecode4: "à¹€à¸•à¹‡à¸‡ 4D",
          SpecialPrize4: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸ªà¸¹à¸‡à¸ªà¸¸à¸” 4D",
          FirstPrize4: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆ1 4D",
          selectAll: "à¹à¸žà¹‰à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          misses4: "à¹à¸žà¹‰ 4",
          misses8: "à¹à¸žà¹‰ 8",
          misses10: "à¹à¸žà¹‰ 10",
          Enter: "à¸à¸£à¸­à¸",
          Compound: "à¸«à¸¥à¸²à¸¢à¹à¸šà¸š",
          selected: "à¹€à¸¥à¸·à¸­à¸à¹€à¸”à¸´à¸¡à¸žà¸±à¸™",
          bet: "à¸šà¸±à¸™à¸—à¸¶à¸",
          CN: "à¸§à¸±à¸™à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ",
          T2: "à¹ƒà¸™à¸§à¸±à¸™à¸ˆà¸±à¸™à¸—à¸£à¹Œ",
          T3: "à¸§à¸±à¸™à¸­à¸±à¸‡à¸„à¸²à¸£",
          T4: "à¸§à¸±à¸™à¸žà¸¸à¸˜",
          T5: "à¸§à¸±à¸™à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ",
          T6: "à¸§à¸±à¸™à¸¨à¸¸à¸à¸£à¹Œ",
          T7: "à¸§à¸±à¸™à¹€à¸ªà¸²à¸£à¹Œ",
          waitingdraw: "à¸£à¸­à¸ˆà¸±à¸šà¸ªà¸¥à¸²à¸",
          grandPrize: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¹ƒà¸«à¸à¹ˆ",
          firstprize: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆà¸«à¸™à¸¶à¹ˆà¸‡",
          secondprize: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆà¸ªà¸­à¸‡",
          thirdprize: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆà¸ªà¸²à¸¡",
          fourthprize: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆà¸ªà¸µà¹ˆ",
          fifthprize: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆà¸«à¹‰à¸²",
          sixthprize: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆà¸«à¸",
          seventhprize: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆà¹€à¸ˆà¹‡à¸”",
          eighthprize: "à¸£à¸²à¸‡à¸§à¸±à¸¥à¸—à¸µà¹ˆà¹à¸›à¸”",
          northernvietnam: "à¹€à¸§à¸µà¸¢à¸”à¸™à¸²à¸¡à¹€à¸«à¸™à¸·à¸­",
          southvietnam: "à¹€à¸§à¸µà¸¢à¸”à¸™à¸²à¸¡à¹ƒà¸•à¹‰",
          vietnamchinese: "à¹€à¸§à¸µà¸¢à¸”à¸™à¸²à¸¡ à¸ˆà¸µà¸™",
        },
        finance: {
          title: "à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢",
          titleRes: "à¸šà¸±à¸™à¸—à¸¶à¸à¸—à¸µà¹ˆà¸›à¸¥à¸­à¸”à¸ à¸±à¸¢",
          tip1: "à¸­à¸±à¸•à¸£à¸²à¸£à¸²à¸¢à¸§à¸±à¸™",
          tip2: "à¸£à¸²à¸¢à¹„à¸”à¹‰à¸„à¸³à¸™à¸§à¸“à¸—à¸¸à¸à¸™à¸²à¸—à¸µ",
          shop: "à¸žà¸­à¸¢à¸—à¹Œà¸¡à¸­à¸¥à¸¥à¹Œ",
          shopTip:
            "à¹à¸¥à¸à¸£à¸±à¸šà¸ªà¸´à¸™à¸„à¹‰à¸²à¸Ÿà¸¸à¹ˆà¸¡à¹€à¸Ÿà¸·à¸­à¸¢à¸ˆà¸³à¸™à¸§à¸™à¸¡à¸²à¸à¸Ÿà¸£à¸µ",
          lumpSum: "à¹€à¸‡à¸´à¸™à¸à¹‰à¸­à¸™",
          security:
            "à¸„à¸§à¸²à¸¡à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢à¸—à¸²à¸‡à¸à¸²à¸£à¹€à¸‡à¸´à¸™",
          transferIn: "à¹‚à¸­à¸™à¹€à¸‚à¹‰à¸²",
          transferOut: "à¹‚à¸­à¸™à¸­à¸­à¸",
          Every: "à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          minute: "à¸£à¸²à¸¢à¹„à¸”à¹‰à¸™à¸²à¸—à¸µ",
          earnings: "à¸ªà¸£à¹‰à¸²à¸‡à¸£à¸²à¸¢à¹„à¸”à¹‰",
          cumulativeIncome: "à¸£à¸²à¸¢à¹„à¸”à¹‰à¸ªà¸°à¸ªà¸¡",
          estimatedIncome: "à¸£à¸²à¸¢à¹„à¸”à¹‰à¹‚à¸”à¸¢à¸›à¸£à¸°à¸¡à¸²à¸“",
          income: "à¸£à¸²à¸¢à¹„à¸”à¹‰",
          tip3: "à¸à¸­à¸‡à¸—à¸¸à¸™à¸¡à¸µà¸„à¸§à¸²à¸¡à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢à¹à¸¥à¸°à¸ªà¸²à¸¡à¸²à¸£à¸–à¹‚à¸­à¸™à¸­à¸­à¸à¹„à¸”à¹‰à¸•à¸¥à¸­à¸”à¹€à¸§à¸¥à¸²",
          history: "à¸šà¸±à¸™à¸—à¸¶à¸à¸›à¸£à¸°à¸§à¸±à¸•à¸´à¸¨à¸²à¸ªà¸•à¸£à¹Œ",
          setIncome:
            "à¸£à¸²à¸¢à¹„à¸”à¹‰à¸ˆà¸²à¸à¸à¸²à¸£à¸•à¸±à¹‰à¸‡à¸–à¸´à¹ˆà¸™à¸à¸²à¸™",
          allRecords: "à¸šà¸±à¸™à¸—à¸¶à¸à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          amountShare: "à¸ˆà¸³à¸™à¸§à¸™à¸•à¹ˆà¸­à¸ªà¸³à¹€à¸™à¸²",
          enter: "à¸à¸£à¸¸à¸“à¸²à¹ƒà¸ªà¹ˆà¸›à¸£à¸´à¸¡à¸²à¸“",
          availableBalance: "à¸¢à¸­à¸”à¹€à¸‡à¸´à¸™à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­",
          outAmount: "à¸¢à¸­à¸”à¹‚à¸­à¸™",
          inAmount: "à¸¢à¸­à¸”à¹‚à¸­à¸™",
          all: "à¸—à¸±à¹‰à¸‡à¸«à¸¡à¸”",
          balanceAvailable:
            "à¸¢à¸­à¸”à¹€à¸‡à¸´à¸™à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­à¹„à¸¡à¹ˆà¹€à¸žà¸µà¸¢à¸‡à¸žà¸­",
          noIncome: "à¹„à¸¡à¹ˆà¸¡à¸µà¸£à¸²à¸¢à¹„à¸”à¹‰",
          noIncomeTip:
            "à¹„à¸¡à¹ˆà¸§à¹ˆà¸²à¸ˆà¸°à¹€à¸›à¹‡à¸™à¸£à¸²à¸¢à¹„à¸”à¹‰à¸—à¸µà¹ˆà¹‚à¸­à¸™à¸­à¸­à¸à¹ƒà¸™à¸›à¸±à¸ˆà¸ˆà¸¸à¸šà¸±à¸™",
        },
        financeRule: {
          title:
            "à¹€à¸£à¸µà¸¢à¸™à¸£à¸¹à¹‰à¹€à¸à¸µà¹ˆà¸¢à¸§à¸à¸±à¸šà¸•à¸¹à¹‰à¸™à¸´à¸£à¸ à¸±à¸¢",
          Rtip: "à¸œà¸¥à¸•à¸­à¸šà¹à¸—à¸™à¸‚à¸±à¹‰à¸™à¸•à¹ˆà¸³, à¸­à¸±à¸•à¸£à¸²à¸”à¸­à¸à¹€à¸šà¸µà¹‰à¸¢à¸£à¸²à¸¢à¸§à¸±à¸™",
          Rtip1:
            "à¸«à¸¥à¸±à¸‡à¸ˆà¸²à¸à¹‚à¸­à¸™à¸¢à¸­à¸”à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­à¹ƒà¸™à¸à¸£à¸°à¹€à¸›à¹‹à¸²à¹à¸¥à¹‰à¸§",
          Rtip2: "à¸£à¸²à¸¢à¹„à¸”à¹‰à¸„à¸³à¸™à¸§à¸“à¸—à¸¸à¸à¸™à¸²à¸—à¸µ",
          Rtip3:
            "à¸£à¸²à¸¢à¹„à¸”à¹‰à¸ˆà¸°à¸–à¸¹à¸à¸•à¸±à¸”à¸ªà¸´à¸™à¹€à¸¡à¸·à¹ˆà¸­à¸¡à¸µà¸à¸²à¸£à¹‚à¸­à¸™à¹€à¸‚à¹‰à¸²à¸«à¸£à¸·à¸­à¸­à¸­à¸à¹€à¸›à¹‡à¸™à¸„à¸£à¸±à¹‰à¸‡à¸—à¸µà¹ˆà¸ªà¸­à¸‡ à¹à¸¥à¸°à¸£à¸²à¸¢à¹„à¸”à¹‰à¸¥à¹ˆà¸²à¸ªà¸¸à¸”à¸ˆà¸°à¸–à¸¹à¸à¹‚à¸­à¸™à¹„à¸›à¸¢à¸±à¸‡à¸¢à¸­à¸”à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­à¹ƒà¸™à¸à¸£à¸°à¹€à¸›à¹‹à¸²à¹€à¸‡à¸´à¸™",
          Rtip4:
            "à¸¢à¸­à¸”à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­à¹ƒà¸™à¸à¸£à¸°à¹€à¸›à¹‹à¸²à¹€à¸‡à¸´à¸™à¸—à¸µà¹ˆà¹‚à¸­à¸™à¹„à¸›à¸¢à¸±à¸‡à¸•à¸¹à¹‰à¸™à¸´à¸£à¸ à¸±à¸¢à¸ˆà¸°à¸•à¹‰à¸­à¸‡à¹‚à¸­à¸™à¹€à¸›à¹‡à¸™à¸«à¸™à¹ˆà¸§à¸¢",
          Eg: "à¹€à¸Šà¹ˆà¸™",
          Rtip5: "à¸«à¸™à¸¶à¹ˆà¸‡à¸«à¸™à¹ˆà¸§à¸¢à¸šà¸£à¸´à¹‚à¸ à¸„",
          Rtip6: ",à¹‚à¸­à¸™à¹ƒà¸«à¹‰2à¸‰à¸šà¸±à¸šà¹€à¸›à¹‡à¸™",
          Rtip7: ", 10 à¸Šà¸¸à¸”à¸ªà¸³à¸«à¸£à¸±à¸š",
          Rtip8: ", 50 à¸Šà¸¸à¸” à¸ªà¸³à¸«à¸£à¸±à¸š",
          Rtip9:
            "à¸ˆà¸³à¸™à¸§à¸™à¹€à¸‡à¸´à¸™à¸—à¸µà¹ˆà¹‚à¸­à¸™à¸•à¹‰à¸­à¸‡à¹€à¸›à¹‡à¸™à¸—à¸§à¸µà¸„à¸¹à¸“à¸‚à¸­à¸‡ 1,000",
          Rtip10:
            "à¸ à¸²à¸¢à¹ƒà¸•à¹‰à¹€à¸‡à¸·à¹ˆà¸­à¸™à¹„à¸‚à¸à¸²à¸£à¸£à¸±à¸šà¸›à¸£à¸°à¸à¸±à¸™à¸£à¸²à¸¢à¹„à¸”à¹‰à¸‚à¸­à¸‡à¸„à¸¸à¸“ à¸„à¸¸à¸“à¸ªà¸²à¸¡à¸²à¸£à¸–à¹‚à¸­à¸™à¸¢à¸­à¸”à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­à¸‚à¸­à¸‡à¸•à¸¹à¹‰à¹€à¸‹à¸Ÿà¹„à¸›à¸¢à¸±à¸‡à¸¢à¸­à¸”à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­à¸‚à¸­à¸‡à¸à¸£à¸°à¹€à¸›à¹‹à¸²à¹€à¸‡à¸´à¸™à¹„à¸”à¹‰à¸•à¸¥à¸­à¸”à¹€à¸§à¸¥à¸² à¹à¸¥à¸°à¸¢à¸­à¸”à¹‚à¸­à¸™à¸ˆà¸°à¸•à¹‰à¸­à¸‡à¹€à¸›à¹‡à¸™à¸ˆà¸³à¸™à¸§à¸™à¸—à¸§à¸µà¸„à¸¹à¸“à¸‚à¸­à¸‡à¸ˆà¸³à¸™à¸§à¸™à¸ªà¸³à¹€à¸™à¸²",
          friendly: "à¸„à¸³à¹€à¸•à¸·à¸­à¸™à¸—à¸µà¹ˆà¹€à¸›à¹‡à¸™à¸¡à¸´à¸•à¸£",
          friendlytxt:
            'à¸à¸£à¸¸à¸“à¸²à¸­à¸¢à¹ˆà¸²à¹‚à¸­à¸™à¹€à¸‚à¹‰à¸²à¹à¸¥à¸°à¸­à¸­à¸à¸šà¹ˆà¸­à¸¢ à¸£à¸²à¸¢à¹„à¸”à¹‰à¸ˆà¸°à¸„à¸³à¸™à¸§à¸“à¸ˆà¸²à¸ 1 à¸™à¸²à¸—à¸µà¸«à¸¥à¸±à¸‡à¸ˆà¸²à¸à¸à¸²à¸ à¸«à¸²à¸à¸¢à¸­à¸”à¸ªà¸°à¸ªà¸¡à¸‚à¸­à¸‡à¸ˆà¸³à¸™à¸§à¸™à¹€à¸‡à¸´à¸™à¸£à¸²à¸¢à¹„à¸”à¹‰à¹€à¸”à¸µà¸¢à¸§à¸™à¹‰à¸­à¸¢à¸à¸§à¹ˆà¸² 0.01 à¸ˆà¸°à¹„à¸¡à¹ˆà¸£à¸§à¸¡à¸­à¸¢à¸¹à¹ˆà¹ƒà¸™ "à¸£à¸²à¸¢à¹„à¸”à¹‰"',
          Safety: "à¸„à¸§à¸²à¸¡à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢",
          SafetyTxt:
            "à¸—à¸µà¸¡à¸‡à¸²à¸™à¸”à¹‰à¸²à¸™à¹€à¸—à¸„à¸™à¸´à¸„à¸à¸²à¸£à¸£à¸±à¸à¸©à¸²à¸„à¸§à¸²à¸¡à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢à¸£à¸±à¸šà¸›à¸£à¸°à¸à¸±à¸™à¸„à¸§à¸²à¸¡à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢à¸‚à¸­à¸‡à¹€à¸‡à¸´à¸™à¸‚à¸­à¸‡à¸„à¸¸à¸“",
          SafetyTip:
            "à¹€à¸žà¸·à¹ˆà¸­à¹ƒà¸«à¹‰à¸¡à¸±à¹ˆà¸™à¹ƒà¸ˆà¹ƒà¸™à¸„à¸§à¸²à¸¡à¸›à¸¥à¸­à¸”à¸ à¸±à¸¢à¸‚à¸­à¸‡à¹€à¸‡à¸´à¸™à¸‚à¸­à¸‡à¸„à¸¸à¸“ à¸‚à¸­à¹à¸™à¸°à¸™à¸³à¹ƒà¸«à¹‰à¸„à¸¸à¸“à¹‚à¸­à¸™à¸¢à¸­à¸”à¸„à¸‡à¹€à¸«à¸¥à¸·à¸­à¹ƒà¸™à¸à¸£à¸°à¹€à¸›à¹‹à¸²à¹€à¸‡à¸´à¸™à¸‚à¸­à¸‡à¸„à¸¸à¸“à¹„à¸›à¸—à¸µà¹ˆà¸•à¸¹à¹‰à¹€à¸‹à¸Ÿ",
        },
        flight: {
          title: "à¸™à¸±à¸à¸šà¸´à¸™",
          tit: "à¹€à¸à¸¡à¸”à¸´à¹ˆà¸‡à¸žà¸ªà¸¸à¸˜à¸²à¸ªà¸¸à¸”à¸£à¹‰à¸­à¸™à¹à¸£à¸‡à¸•à¸·à¹ˆà¸™à¹€à¸•à¹‰à¸™ ",
          sub: "à¸¥à¸­à¸‡à¹€à¸¥à¹ˆà¸™à¹€à¸¥à¸¢",
          tip: "à¹„à¸¡à¹ˆà¸§à¹ˆà¸²à¸ˆà¸°à¹€à¸‚à¹‰à¸²à¹€à¸à¸¡",
          btn: "à¸›à¹‰à¸­à¸™à¸•à¸­à¸™à¸™à¸µà¹‰",
          gameName: "à¸™à¸±à¸à¸šà¸´à¸™",
          gameTip:
            "à¸šà¸´à¸™à¹à¸¥à¸°à¹€à¸žà¸´à¹ˆà¸¡à¸œà¸¥à¸à¸³à¹„à¸£à¸‚à¸­à¸‡à¸„à¸¸à¸“",
          enterGameName: "à¸à¸£à¸¸à¸“à¸²à¸à¸£à¸­à¸à¸Šà¸·à¹ˆà¸­à¹€à¸à¸¡",
        },
      },
    };
  },
  f80f: function (e, a, t) {
    "use strict";
    t("9bc4");
  },
  fcba: function (e, a, t) {
    e.exports = t.p + "img/ic_xocida.b53c066d.svg";
  },
});
