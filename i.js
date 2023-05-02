(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-697f06ed"],
  {
    "3abb": function (e, t, o) {
      "use strict";
      o("c324");
    },
    "4d63": function (e, t, o) {
      var i = o("83ab"),
        a = o("da84"),
        s = o("94ca"),
        n = o("7156"),
        r = o("9bf2").f,
        c = o("241c").f,
        l = o("44e7"),
        g = o("ad6d"),
        d = o("9f7f"),
        m = o("6eeb"),
        f = o("d039"),
        u = o("69f3").set,
        p = o("2626"),
        h = o("b622"),
        C = h("match"),
        v = a.RegExp,
        w = v.prototype,
        b = /a/g,
        $ = /a/g,
        _ = new v(b) !== b,
        k = d.UNSUPPORTED_Y,
        x =
          i &&
          s(
            "RegExp",
            !_ ||
              k ||
              f(function () {
                return (
                  ($[C] = !1), v(b) != b || v($) == $ || "/a/i" != v(b, "i")
                );
              })
          );
      if (x) {
        var L = function (e, t) {
            var o,
              i = this instanceof L,
              a = l(e),
              s = void 0 === t;
            if (!i && a && e.constructor === L && s) return e;
            _
              ? a && !s && (e = e.source)
              : e instanceof L && (s && (t = g.call(e)), (e = e.source)),
              k &&
                ((o = !!t && t.indexOf("y") > -1),
                o && (t = t.replace(/y/g, "")));
            var r = n(_ ? new v(e, t) : v(e, t), i ? this : w, L);
            return (
              k &&
                o &&
                u(r, {
                  sticky: o,
                }),
              r
            );
          },
          S = function (e) {
            e in L ||
              r(L, e, {
                configurable: !0,
                get: function () {
                  return v[e];
                },
                set: function (t) {
                  v[e] = t;
                },
              });
          },
          y = c(v),
          A = 0;
        while (y.length > A) S(y[A++]);
        (w.constructor = L), (L.prototype = w), m(a, "RegExp", L);
      }
      p("RegExp");
    },
    a9e32: function (e, t, o) {
      "use strict";
      o.r(t);
      var i = function () {
          var e = this,
            t = e.$createElement,
            o = e._self._c || t;
          return o(
            "div",
            {
              staticClass: "mian forgot",
            },
            [
              o(
                "Header",
                {
                  attrs: {
                    "is-back": !0,
                  },
                },
                [e._v(e._s(e.$t("homepage.register")))]
              ),
              o(
                "div",
                {
                  staticClass: "forgot-box",
                },
                [
                  o(
                    "div",
                    {
                      staticClass: "mian-from m-t-20",
                    },
                    [
                      o(
                        "div",
                        {
                          staticClass: "lab",
                        },
                        [
                          e._v(e._s(e.$t("homepage.numberFormat")) + ":"),
                          e.globalConfig.clientCfg.AreaCodeList
                            ? o("span", [
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
                      "$" != e.globalConfig.clientCfg.DollarSign &&
                      "₽" != e.globalConfig.clientCfg.DollarSign
                        ? o(
                            "div",
                            {
                              staticClass:
                                "item c-row c-row-center c-row-middle m-t-15 m-b-30 first",
                            },
                            [
                              o(
                                "div",
                                {
                                  staticClass: "c-row number",
                                  on: {
                                    click: e.sendCode,
                                  },
                                },
                                [
                                  e._m(0),
                                  e.globalConfig.clientCfg.AreaCodeList
                                    ? o(
                                        "div",
                                        {
                                          staticClass: "p-l-5",
                                        },
                                        [
                                          e._v(
                                            e._s(
                                              e.AreaCode ||
                                                e.globalConfig.clientCfg
                                                  .AreaCodeList[0]
                                            )
                                          ),
                                        ]
                                      )
                                    : e._e(),
                                ]
                              ),
                              o("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.form.mobile,
                                    expression: "form.mobile",
                                  },
                                ],
                                attrs: {
                                  type: "text",
                                  maxlength: "bra" == e.lang ? 11 : 12,
                                  placeholder: e.$t("homepage.mobile"),
                                  oninput: "value=value.replace(/\\D/g,'')",
                                },
                                domProps: {
                                  value: e.form.mobile,
                                },
                                on: {
                                  input: function (t) {
                                    t.target.composing ||
                                      e.$set(e.form, "mobile", t.target.value);
                                  },
                                },
                              }),
                            ]
                          )
                        : o(
                            "div",
                            {
                              staticClass:
                                "item c-row c-row-center c-row-middle m-t-15 m-b-30",
                            },
                            [
                              e._m(1),
                              o("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.form.mobile,
                                    expression: "form.mobile",
                                  },
                                ],
                                attrs: {
                                  type: "text",
                                  maxlength: 24,
                                  placeholder: e.$t("homepage.mobile"),
                                },
                                domProps: {
                                  value: e.form.mobile,
                                },
                                on: {
                                  input: function (t) {
                                    t.target.composing ||
                                      e.$set(e.form, "mobile", t.target.value);
                                  },
                                },
                              }),
                            ]
                          ),
                      0 != e.SMSstate
                        ? o(
                            "div",
                            {
                              staticClass:
                                "item c-row c-row-center c-row-middle m-b-30",
                            },
                            [
                              e._m(2),
                              o("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.form.code,
                                    expression: "form.code",
                                  },
                                ],
                                attrs: {
                                  type: "text",
                                  placeholder: e.$t(
                                    "homepage.verificationCode"
                                  ),
                                  oninput: "value=value.replace(/\\D/g,'')",
                                },
                                domProps: {
                                  value: e.form.code,
                                },
                                on: {
                                  input: function (t) {
                                    t.target.composing ||
                                      e.$set(e.form, "code", t.target.value);
                                  },
                                },
                              }),
                              e.isText
                                ? o(
                                    "button",
                                    {
                                      staticClass: "otp",
                                      on: {
                                        click: function (t) {
                                          return e.vTimes();
                                        },
                                      },
                                    },
                                    [e._v(e._s(e.v_times))]
                                  )
                                : o(
                                    "button",
                                    {
                                      staticClass: "otp",
                                    },
                                    [e._v(e._s(e.times) + "S")]
                                  ),
                            ]
                          )
                        : e._e(),
                      o(
                        "div",
                        {
                          staticClass:
                            "item c-row c-row-center c-row-middle m-b-30",
                        },
                        [
                          e._m(3),
                          o("Put", {
                            attrs: {
                              placeholder: e.$t("homepage.pwd"),
                            },
                            on: {
                              input: e.getPwd,
                            },
                          }),
                        ],
                        1
                      ),
                      o(
                        "div",
                        {
                          staticClass: "item c-row c-row-center c-row-middle",
                        },
                        [
                          e._m(4),
                          o("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: e.form.recomCode,
                                expression: "form.recomCode",
                              },
                            ],
                            attrs: {
                              type: "text",
                              placeholder: e.$t("homepage.recommendationCode"),
                            },
                            domProps: {
                              value: e.form.recomCode,
                            },
                            on: {
                              input: function (t) {
                                t.target.composing ||
                                  e.$set(e.form, "recomCode", t.target.value);
                              },
                            },
                          }),
                        ]
                      ),
                      o(
                        "div",
                        {
                          staticClass: "c-row c-row-middle",
                        },
                        [
                          o(
                            "van-checkbox",
                            {
                              attrs: {
                                shape: "square",
                                "checked-color": "#F4453E",
                              },
                              on: {
                                change: e.checkboxChange,
                              },
                              model: {
                                value: e.checked,
                                callback: function (t) {
                                  e.checked = t;
                                },
                                expression: "checked",
                              },
                            },
                            [
                              o(
                                "div",
                                {
                                  staticClass: "agree p-r-10",
                                },
                                [e._v(e._s(e.$t("homepage.agree")))]
                              ),
                            ]
                          ),
                          o(
                            "div",
                            {
                              staticClass: "txt",
                              on: {
                                click: function (t) {
                                  return e.goPage("/privacyPolicy");
                                },
                              },
                            },
                            [e._v(e._s(e.$t("homepage.privacy")))]
                          ),
                        ],
                        1
                      ),
                      o(
                        "div",
                        {
                          staticClass: "mian-btn m-t-40",
                        },
                        [
                          o(
                            "van-button",
                            {
                              staticClass: "gradient width100",
                              attrs: {
                                block: "",
                                round: !0,
                              },
                              on: {
                                click: e.register,
                              },
                            },
                            [o("span", [e._v(e._s(e.$t("homepage.register")))])]
                          ),
                          o(
                            "van-button",
                            {
                              staticClass: "reg",
                              attrs: {
                                block: "",
                                plain: "",
                                type: "primary",
                                round: !0,
                              },
                              on: {
                                click: function (t) {
                                  return e.goPage("/login");
                                },
                              },
                            },
                            [
                              o("span", [
                                e._v(e._s(e.$t("homepage.registerTip"))),
                              ]),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                ]
              ),
              o(
                "van-popup",
                {
                  style: {
                    borderRadius: "15px 15px 0 0",
                    padding: "5px 0 0",
                    maxWidth: "10rem",
                    left: "auto",
                  },
                  attrs: {
                    position: "bottom",
                  },
                  model: {
                    value: e.show,
                    callback: function (t) {
                      e.show = t;
                    },
                    expression: "show",
                  },
                },
                e._l(e.globalConfig.clientCfg.AreaCodeList, function (t, i) {
                  return o(
                    "div",
                    {
                      key: i,
                      staticClass: "AreaCode-box",
                      on: {
                        click: function (o) {
                          return e.SelectCode(t);
                        },
                      },
                    },
                    [
                      o(
                        "div",
                        {
                          staticClass: "item c-row c-row-between c-row-middle",
                        },
                        [
                          o(
                            "div",
                            {
                              staticClass: "left c-row c-row-middle",
                            },
                            [e._v(" " + e._s(t) + " ")]
                          ),
                          o(
                            "div",
                            {
                              staticClass: "right",
                            },
                            [
                              o(
                                "div",
                                {
                                  class:
                                    t == e.AreaCode ? "action chek" : "chek",
                                },
                                [
                                  o("van-icon", {
                                    attrs: {
                                      name: "success",
                                      color: "#fff",
                                      size: "16",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      ),
                    ]
                  );
                }),
                0
              ),
              o("Loading", {
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
        a = [
          function () {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t;
            return o(
              "span",
              {
                staticClass: "c-row c-row-middle-center",
              },
              [
                o("div", {
                  staticClass: "mobile",
                }),
              ]
            );
          },
          function () {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t;
            return o(
              "div",
              {
                staticClass: "c-row number",
              },
              [
                o(
                  "span",
                  {
                    staticClass: "c-row c-row-middle-center",
                  },
                  [
                    o("div", {
                      staticClass: "user",
                    }),
                  ]
                ),
              ]
            );
          },
          function () {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t;
            return o(
              "span",
              {
                staticClass: "img c-row c-row-middle-center",
              },
              [
                o("div", {
                  staticClass: "mobile otps",
                }),
              ]
            );
          },
          function () {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t;
            return o(
              "span",
              {
                staticClass: "img c-row c-row-middle-center",
              },
              [
                o("div", {
                  staticClass: "password",
                }),
              ]
            );
          },
          function () {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t;
            return o(
              "span",
              {
                staticClass: "img c-row c-row-middle-center",
              },
              [
                o("div", {
                  staticClass: "code",
                }),
              ]
            );
          },
        ],
        s = (o("c975"), o("4d63"), o("ac1f"), o("25f0"), o("1276"), o("2241")),
        n = o("2d4c"),
        r = {
          name: "Register",
          mixins: [s["a"]],
          components: {
            Put: n["a"],
          },
          props: {},
          data: function () {
            return {
              form: {
                mobile: "",
                pwd: "",
                code: "",
                recomCode: "",
              },
              v_times: "OTP",
              times: 300,
              isText: !0,
              zc_number: !0,
              checked: !0,
              SMSstate: 0,
              show: !1,
              AreaCode: "",
              showLoading: !1,
            };
          },
          watch: {},
          mounted: function () {
            var e = this;
            window.addEventListener("keydown", e.keyDown);
          },
          beforeDestroy: function () {},
          methods: {
            getPwd: function (e) {
              var t = this;
              t.form.pwd = e;
            },
            GetOnSites: function () {
              var e = this;
              e.$api
                .GetOnSitesApi({})
                .then(function (t) {
                  console.log(t),
                    t.success
                      ? ((e.globalConfig.clientCfg = t.data),
                        (e.globalConfig.clientCfg.LanguageList =
                          t.data.Languages.split("|")),
                        (e.globalConfig.clientCfg.AreaCodeList =
                          t.data.AreaCode.split("|")),
                        localStorage.setItem(
                          "clientCfg",
                          JSON.stringify(t.data)
                        ),
                        e.getRegisterSMS(),
                        e.getRegisterState(),
                        e.globalConfig.clientCfg.LanguageList &&
                          e.globalConfig.clientCfg.LanguageList.length > 0 &&
                          (localStorage.setItem(
                            "lang",
                            e.globalConfig.clientCfg.LanguageList[0]
                          ),
                          (e.$i18n.locale =
                            e.globalConfig.clientCfg.LanguageList[0])))
                      : e.$msg(t.msg);
                })
                .catch(function (t) {
                  (e.showLoading = !0),
                    setTimeout(function () {
                      e.showLoading = !1;
                    }, 1e4),
                    e.$msg(e.$t("homepage.network"));
                });
            },
            keyDown: function (e) {
              var t = this;
              13 == e.keyCode && t.register();
            },
            sendCode: function () {
              this.globalConfig.clientCfg.AreaCodeList.length > 1 &&
                (this.show = !0);
            },
            SelectCode: function (e) {
              (this.show = !1), (this.AreaCode = e);
            },
            checkboxChange: function (e) {
              console.log(e);
            },
            register: function () {
              var e = this;
              e.utils.throttle(e.getChack, 2e3);
            },
            checkPassWord: function (e) {
              var t = e;
              if (null == t || t.length < 6) return !1;
              var o = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
              return !!o.test(t);
            },
            getChack: function () {
              var e = this,
                t = this.form,
                o = t.mobile,
                i = t.code,
                a = t.pwd,
                s = t.recomCode;
              if (o)
                if (a)
                  if (this.checkPassWord(a))
                    if (0 != e.checked) {
                      var n = e.globalConfig.clientCfg.AreaCodeList.indexOf(
                        e.AreaCode
                      );
                      -1 == n &&
                        (e.AreaCode = e.globalConfig.clientCfg.AreaCodeList[0]);
                      var r = "";
                      ("$" != e.globalConfig.clientCfg.DollarSign &&
                        "₽" != e.globalConfig.clientCfg.DollarSign) ||
                        (r = 1),
                        (e.showLoading = !0),
                        e.$api
                          .Register({
                            username: e.AreaCode + o,
                            smsvcode: i,
                            pwd: a,
                            regtype: r,
                            invitecode: s,
                            domainurl: document.domain,
                            phonetype: this.utils.getUserAgent(),
                          })
                          .then(function (t) {
                            console.log(t),
                              0 == t.code && t.success
                                ? ((e.showLoading = !1),
                                  localStorage.setItem(
                                    "UserInfo",
                                    JSON.stringify(t.data)
                                  ),
                                  localStorage.setItem(
                                    "open",
                                    JSON.stringify(!0)
                                  ),
                                  e.$router.push("/home"))
                                : ((e.showLoading = !0),
                                  setTimeout(function () {
                                    e.showLoading = !1;
                                  }, 1e4),
                                  e.$msg(t.msg));
                          })
                          .catch(function (t) {
                            e.$msg(e.$t("homepage.network"));
                          });
                    } else this.$msg(e.$t("homepage.pleaseRequired"));
                  else this.$msg(e.$t("homepage.passwordError"));
                else this.$msg(e.$t("homepage.pleaseRequired"));
              else this.$msg(e.$t("homepage.pleaseRequired"));
            },
            getRegisterState: function () {
              var e = this;
              e.$api
                .GetRegisterState({})
                .then(function (t) {
                  console.log(t),
                    0 == t.code && t.success
                      ? "1" != t.data.State &&
                        ((e.msg = t.data.Msg),
                        e.$dialog
                          .alert({
                            title: e.$t("homepage.tips"),
                            message: t.data.Msg,
                            confirmButtonText: e.$t("homepage.confirm"),
                          })
                          .then(function () {}))
                      : e.$msg(t.msg);
                })
                .catch(function (t) {
                  (e.showLoading = !0),
                    setTimeout(function () {
                      e.showLoading = !1;
                    }, 1e4),
                    e.$msg(e.$t("homepage.network"));
                });
            },
            getRegisterSMS: function () {
              var e = this;
              e.$api
                .GetRegisterSMS({})
                .then(function (t) {
                  console.log(t),
                    0 == t.code && t.success
                      ? (e.SMSstate = t.data.State)
                      : e.$msg(t.msg);
                })
                .catch(function (t) {
                  (e.showLoading = !0),
                    setTimeout(function () {
                      e.showLoading = !1;
                    }, 1e4),
                    e.$msg(e.$t("homepage.network"));
                });
            },
            vTimes: function () {
              var e = this,
                t = e.times,
                o = this.form,
                i = o.mobile;
              o.pwd;
              if (!i) return this.$msg(e.$t("homepage.pleaseRequired"));
              var a = e.globalConfig.clientCfg.AreaCodeList.indexOf(e.AreaCode);
              -1 == a &&
                (e.AreaCode = e.globalConfig.clientCfg.AreaCodeList[0]),
                e.$api
                  .SmsVerifyCode({
                    phone: e.AreaCode + i,
                    name: "sms_regvcode",
                  })
                  .then(function (o) {
                    if ((console.log(o), 0 == o.code && o.success)) {
                      e.$msg(o.msg);
                      var i = setInterval(function () {
                        t--,
                          0 == t
                            ? (clearInterval(i), (t = 120), (e.isText = !0))
                            : ((t = t), (e.isText = !1)),
                          (e.times = t);
                      }, 1e3);
                    } else e.$msg(o.msg);
                  })
                  .catch(function (t) {
                    e.$msg(e.$t("homepage.network"));
                  });
            },
          },
          created: function () {
            var e = this;
            if (e.$route.query.r_code)
              if (localStorage.getItem("UserInfo")) this.$router.push("/home");
              else {
                if ("undefined" == e.$route.query.r_code) return;
                var t = e.$route.query.r_code;
                e.form.recomCode = t;
              }
            e.GetOnSites();
          },
          destroyed: function () {
            window.removeEventListener("keydown", this.keyDown, !1);
          },
        },
        c = r,
        l = (o("3abb"), o("2877")),
        g = Object(l["a"])(c, i, a, !1, null, "a089f666", null);
      t["default"] = g.exports;
    },
    c324: function (e, t, o) {},
  },
]);
