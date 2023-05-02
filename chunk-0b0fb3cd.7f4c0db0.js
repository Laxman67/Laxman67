(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-0b0fb3cd"],
  {
    "05af": function (e, t, s) {
      "use strict";
      s("99ea");
    },
    1072: function (e, t, s) {
      "use strict";
      s.r(t);
      var i = function () {
        var e = this,
          t = e.$createElement,
          i = e._self._c || t;
        return i(
          "div",
          { class: e.longShow ? "mian game action" : "mian game" },
          [
            i("Header", { attrs: { "is-back": !1 } }, [
              i(
                "div",
                {
                  staticClass: "c-row c-row-middle-center",
                  attrs: { slot: "left" },
                  on: {
                    click: function (t) {
                      return e.goPage("/home");
                    },
                  },
                  slot: "left",
                },
                [
                  i("img", {
                    staticClass: "navbar-back",
                    attrs: { src: s("2ea4") },
                  }),
                ]
              ),
              i("div", { staticClass: "c-row c-row-middle-center" }, [
                i("img", {
                  staticClass: "logo",
                  attrs: {
                    height: "38px",
                    width: "100px",
                    src: e.globalConfig.clientCfg.HeadLogo,
                  },
                }),
              ]),
              i(
                "div",
                {
                  staticClass: "c-row navbarR",
                  attrs: { slot: "right" },
                  slot: "right",
                },
                [
                  i(
                    "div",
                    {
                      staticClass: "c-row item c-row-middle-center",
                      on: {
                        click: function (t) {
                          return e.goPage("/keFuMenu");
                        },
                      },
                    },
                    [
                      i("img", {
                        staticClass: "item-audio",
                        attrs: { src: s("c1b2") },
                      }),
                    ]
                  ),
                  i(
                    "div",
                    {
                      staticClass: "c-row item c-row-middle-center",
                      on: { click: e.volume },
                    },
                    [
                      1 == e.volumeShow
                        ? i("img", {
                          staticClass: "item-volume",
                          attrs: { src: s("8086") },
                        })
                        : i("img", {
                          staticClass: "item-volume",
                          attrs: { src: s("bb36") },
                        }),
                    ]
                  ),
                ]
              ),
            ]),
            i("div", { staticClass: "game-head" }, [
              i("div", { staticClass: "total-box" }, [
                i(
                  "div",
                  { staticClass: "c-row c-row-between c-row-middle info" },
                  [
                    i("div", { staticClass: "c-row c-row-middle" }, [
                      i(
                        "div",
                        { staticClass: "m-r-10" },
                        [
                          i("van-image", {
                            attrs: {
                              width: "60",
                              height: "60",
                              src: s("98d9"),
                            },
                          }),
                        ],
                        1
                      ),
                      i("div", {}, [
                        i("h3", { staticClass: "total m-b-5" }, [
                          e._v(e._s(e.$t("homepage.index.Total"))),
                        ]),
                        i("span", { staticClass: "wallet" }, [
                          e._v(e._s(e.$t("homepage.index.walletBalance"))),
                        ]),
                      ]),
                    ]),
                    i(
                      "div",
                      { staticClass: "c-row c-row-middle" },
                      [
                        i("div", { staticClass: "num" }, [
                          e.utils.isYueNanCurrencySymbol()
                            ? e._e()
                            : i("span", [
                              e._v(
                                e._s(e.utils.getCurrencySymbol()) +
                                " " +
                                e._s(e.utils.numFilter(e.Amount))
                              ),
                            ]),
                          e.utils.isYueNanCurrencySymbol()
                            ? i("span", [
                              e._v(
                                " " +
                                e._s(e.utils.numFilter(e.Amount)) +
                                " " +
                                e._s(e.utils.getCurrencySymbol())
                              ),
                            ])
                            : e._e(),
                        ]),
                        i("van-image", {
                          class:
                            0 == e.Animation
                              ? "img m-l-10"
                              : "img action m-l-10",
                          attrs: {
                            width: "15px",
                            height: "15px",
                            src: s("b7a9"),
                          },
                          on: {
                            click: function (t) {
                              return e.refresh(1);
                            },
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
                i("div", { staticClass: "total-btn c-row c-row-between" }, [
                  i(
                    "div",
                    { staticClass: "item" },
                    [
                      i(
                        "van-button",
                        {
                          staticClass: "btn",
                          attrs: { size: "normal", block: "", round: !0 },
                          on: {
                            click: function (t) {
                              return e.goWithdrawal(3);
                            },
                          },
                        },
                        [
                          e._v(
                            " " + e._s(e.$t("homepage.index.withdraw")) + " "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  i(
                    "div",
                    { staticClass: "item" },
                    [
                      i(
                        "van-button",
                        {
                          staticClass: "btn",
                          attrs: { size: "normal", block: "", round: !0 },
                          on: {
                            click: function (t) {
                              return e.goPage("/recharge");
                            },
                          },
                        },
                        [
                          e._v(
                            " " + e._s(e.$t("homepage.index.recharge")) + " "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]),
              ]),
              e.noticeMsg
                ? i(
                  "div",
                  { staticClass: "m-t-15 notice" },
                  [
                    i("van-notice-bar", {
                      attrs: { "left-icon": "volume-o", text: e.noticeMsg },
                    }),
                  ],
                  1
                )
                : e._e(),
            ]),
            i("div", { staticClass: "game-betting" }, [
              e.gameList.length > 0
                ? i("div", { staticClass: "tab" }, [
                  i(
                    "div",
                    { staticClass: "box c-row" },
                    e._l(e.gameList, function (t, o) {
                      return i(
                        "div",
                        {
                          key: o,
                          class: [
                            t.TypeID == e.type
                              ? "item c-tc action"
                              : "item c-tc",
                          ],
                        },
                        [
                          i(
                            "div",
                            {
                              staticClass:
                                "circular c-row c-row-middle-center c-tc",
                              on: {
                                click: function (t) {
                                  return e.rule(o);
                                },
                              },
                            },
                            [i("span", { staticClass: "li" }, [e._v("?")])]
                          ),
                          i(
                            "div",
                            {
                              staticClass: "img c-row c-row-center p-b-10",
                              on: {
                                click: function (s) {
                                  return e.tab(t.TypeID, o);
                                },
                              },
                            },
                            [
                              i("van-image", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.TypeID == e.type,
                                    expression: "item.TypeID==type",
                                  },
                                ],
                                attrs: {
                                  width: "30px",
                                  height: "30px",
                                  src: s("70fe"),
                                },
                              }),
                              i("van-image", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.TypeID != e.type,
                                    expression: "item.TypeID!=type",
                                  },
                                ],
                                attrs: {
                                  width: "30px",
                                  height: "30px",
                                  src: s("8ebb"),
                                },
                              }),
                              i("i", { staticClass: "triangle" }),
                            ],
                            1
                          ),
                          i("div", { staticClass: "txt c-tc" }, [
                            e._v(e._s(t.TypeName)),
                          ]),
                        ]
                      );
                    }),
                    0
                  ),
                ])
                : e._e(),
              i("div", { staticClass: "content" }, [
                i(
                  "div",
                  { staticClass: "time-box c-row c-row-between m-b-10" },
                  [
                    i("div", { staticClass: "info" }, [
                      e.gameList.length > 0
                        ? i("div", { staticClass: "txt" }, [
                          e._v(
                            e._s(e.gameList[e.currentGameIndex].TypeName)
                          ),
                        ])
                        : e._e(),
                      i("div", { staticClass: "number" }, [
                        e._v(e._s(e.currentInfo.gameNo)),
                      ]),
                    ]),
                    i("div", { staticClass: "out" }, [
                      i("div", { staticClass: "txt" }, [
                        e._v(
                          " " + e._s(e.$t("homepage.home.leftTime")) + " "
                        ),
                      ]),
                      i(
                        "div",
                        {
                          staticClass: "number c-row c-row-middle c-flew-end",
                        },
                        [
                          i("div", { staticClass: "item" }, [
                            e._v(e._s(e.currentInfo.time1)),
                          ]),
                          i("div", { staticClass: "item" }, [
                            e._v(e._s(e.currentInfo.time2)),
                          ]),
                          i(
                            "div",
                            { staticClass: "item c-row c-row-middle" },
                            [e._v(":")]
                          ),
                          i("div", { staticClass: "item" }, [
                            e._v(e._s(e.currentInfo.time3)),
                          ]),
                          i("div", { staticClass: "item" }, [
                            e._v(e._s(e.currentInfo.time4)),
                          ]),
                        ]
                      ),
                    ]),
                  ]
                ),
                i("div", { staticClass: "box" }, [
                  i(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: e.currentInfo.passTime < e.ProhibitBuyTime,
                          expression:
                            "currentInfo.passTime < ProhibitBuyTime",
                        },
                      ],
                      staticClass: "mark-box c-row c-row-middle-center",
                    },
                    [
                      i("span", { staticClass: "item m-r-20" }, [
                        e._v(e._s(e.currentInfo.time3)),
                      ]),
                      i("span", { staticClass: "item m-l-20" }, [
                        e._v(e._s(e.currentInfo.time4)),
                      ]),
                    ]
                  ),
                  i("div", { staticClass: "con-box" }, [
                    i(
                      "div",
                      { staticClass: "color-box c-row c-row-between" },
                      [
                        i(
                          "button",
                          {
                            staticClass: "btn green",
                            attrs: { type: "button" },
                            on: {
                              click: function (t) {
                                return e.betting("green", "#5CBA47", 0);
                              },
                            },
                          },
                          [e._v(e._s(e.$t("homepage.index.green")))]
                        ),
                        i(
                          "button",
                          {
                            staticClass: "btn violet",
                            attrs: { type: "button" },
                            on: {
                              click: function (t) {
                                return e.betting("violet", "#9831E9", 0);
                              },
                            },
                          },
                          [e._v(e._s(e.$t("homepage.index.violet")))]
                        ),
                        i(
                          "button",
                          {
                            staticClass: "btn red",
                            attrs: { type: "button" },
                            on: {
                              click: function (t) {
                                return e.betting("red", "#FB4E4E", 0);
                              },
                            },
                          },
                          [e._v(e._s(e.$t("homepage.index.red")))]
                        ),
                      ]
                    ),
                  ]),
                  i(
                    "div",
                    {
                      staticClass:
                        "number-box action m-t-10 c-row c-row-between c-flex-warp",
                    },
                    e._l(10, function (t, s) {
                      return i(
                        "button",
                        {
                          key: s,
                          class:
                            s == e.num
                              ? "item action c-row c-row-middle-center m-b-10"
                              : "item c-row c-row-middle-center m-b-10",
                          attrs: {
                            disabled:
                              e.currentInfo.passTime < e.ProhibitBuyTime,
                            type: "button",
                          },
                          on: {
                            click: function (t) {
                              return e.betting(s, "color" + s, 1);
                            },
                          },
                        },
                        [
                          i(
                            "div",
                            {
                              staticClass: "number c-row c-row-middle-center",
                            },
                            [
                              i("span", { staticClass: "txt" }, [
                                e._v(e._s(s)),
                              ]),
                            ]
                          ),
                        ]
                      );
                    }),
                    0
                  ),
                  i(
                    "div",
                    { staticClass: "c-row c-row-between random-box" },
                    [
                      i(
                        "button",
                        { staticClass: "random", on: { click: e.random } },
                        [e._v(e._s(e.$t("homepage.index.randomBetting")))]
                      ),
                      i("div", { staticClass: "c-row" }, [
                        i(
                          "div",
                          {
                            staticClass: "item",
                            style: {
                              backgroundColor:
                                1 == e.selectInfo.count
                                  ? "#5CBA47"
                                  : "#F0F0F0",
                              color:
                                1 == e.selectInfo.count ? "#fff" : "#000",
                            },
                            on: {
                              click: function (t) {
                                return e.TaskCount(1);
                              },
                            },
                          },
                          [e._v("X1")]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "item",
                            style: {
                              backgroundColor:
                                5 == e.selectInfo.count
                                  ? "#5CBA47"
                                  : "#F0F0F0",
                              color:
                                5 == e.selectInfo.count ? "#fff" : "#000",
                            },
                            on: {
                              click: function (t) {
                                return e.TaskCount(5);
                              },
                            },
                          },
                          [e._v(" X5 ")]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "item",
                            style: {
                              backgroundColor:
                                10 == e.selectInfo.count
                                  ? "#5CBA47"
                                  : "#F0F0F0",
                              color:
                                10 == e.selectInfo.count ? "#fff" : "#000",
                            },
                            on: {
                              click: function (t) {
                                return e.TaskCount(10);
                              },
                            },
                          },
                          [e._v(" X10 ")]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "item",
                            style: {
                              backgroundColor:
                                20 == e.selectInfo.count
                                  ? "#5CBA47"
                                  : "#F0F0F0",
                              color:
                                20 == e.selectInfo.count ? "#fff" : "#000",
                            },
                            on: {
                              click: function (t) {
                                return e.TaskCount(20);
                              },
                            },
                          },
                          [e._v(" X20 ")]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "item",
                            style: {
                              backgroundColor:
                                50 == e.selectInfo.count
                                  ? "#5CBA47"
                                  : "#F0F0F0",
                              color:
                                50 == e.selectInfo.count ? "#fff" : "#000",
                            },
                            on: {
                              click: function (t) {
                                return e.TaskCount(50);
                              },
                            },
                          },
                          [e._v(" X50 ")]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "item",
                            style: {
                              backgroundColor:
                                100 == e.selectInfo.count
                                  ? "#5CBA47"
                                  : "#F0F0F0",
                              color:
                                100 == e.selectInfo.count ? "#fff" : "#000",
                            },
                            on: {
                              click: function (t) {
                                return e.TaskCount(100);
                              },
                            },
                          },
                          [e._v(" X100 ")]
                        ),
                      ]),
                    ]
                  ),
                  i("div", { staticClass: "btn-box c-row" }, [
                    i(
                      "button",
                      {
                        staticClass: "item yellow",
                        on: {
                          click: function (t) {
                            return e.betting("big", "#ffc511", 2);
                          },
                        },
                      },
                      [e._v(" " + e._s(e.$t("homepage.index.big")) + " ")]
                    ),
                    i(
                      "button",
                      {
                        staticClass: "item green",
                        on: {
                          click: function (t) {
                            return e.betting("small", "#5CBA47", 2);
                          },
                        },
                      },
                      [e._v(" " + e._s(e.$t("homepage.index.small")) + " ")]
                    ),
                  ]),
                ]),
              ]),
            ]),
            i("div", { staticClass: "game-list p-b-20" }, [
              i("div", { staticClass: "tab c-row c-row-between" }, [
                i("div", { staticClass: "li c-row c-row-center" }, [
                  i(
                    "span",
                    {
                      class: 1 == e.recordType ? "txt action" : "txt",
                      on: {
                        click: function (t) {
                          return e.recording(1);
                        },
                      },
                    },
                    [
                      e._v(
                        " " + e._s(e.$t("homepage.index.gameRecord")) + " "
                      ),
                    ]
                  ),
                ]),
                i("div", { staticClass: "li c-row c-row-center" }, [
                  i(
                    "span",
                    {
                      class: 2 == e.recordType ? "txt action" : "txt",
                      on: {
                        click: function (t) {
                          return e.recording(2);
                        },
                      },
                    },
                    [e._v(" " + e._s(e.$t("homepage.index.Charttren")) + " ")]
                  ),
                ]),
                i("div", { staticClass: "li c-row c-row-center" }, [
                  i(
                    "span",
                    {
                      class: 3 == e.recordType ? "txt action" : "txt",
                      on: {
                        click: function (t) {
                          return e.recording(3);
                        },
                      },
                    },
                    [
                      e._v(
                        " " + e._s(e.$t("homepage.index.myGameRecord")) + " "
                      ),
                    ]
                  ),
                ]),
              ]),
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 1 == e.recordType,
                      expression: "recordType==1",
                    },
                  ],
                  staticClass: "con-box",
                },
                [
                  i("div", { staticClass: "list m-t-10" }, [
                    i(
                      "div",
                      { staticClass: "wrap" },
                      [
                        i(
                          "van-row",
                          { staticClass: "c-tc" },
                          [
                            i("van-col", { attrs: { span: "8" } }, [
                              e._v(
                                " " +
                                e._s(e.$t("homepage.index.period")) +
                                " "
                              ),
                            ]),
                            i("van-col", { attrs: { span: "5" } }, [
                              e._v(
                                " " +
                                e._s(e.$t("homepage.index.number")) +
                                " "
                              ),
                            ]),
                            i("van-col", { attrs: { span: "5" } }, [
                              e._v(
                                " " + e._s(e.$t("homepage.index.size")) + " "
                              ),
                            ]),
                            i("van-col", { attrs: { span: "6" } }, [
                              e._v(
                                " " + e._s(e.$t("homepage.index.color")) + " "
                              ),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e.NoaverageEmerdList.length > 0
                      ? i("div", [
                        i(
                          "div",
                          { staticClass: "hb" },
                          e._l(e.NoaverageEmerdList, function (t, s) {
                            return i(
                              "van-row",
                              { key: s, staticClass: "c-tc item" },
                              [
                                i("van-col", { attrs: { span: "8" } }, [
                                  i("div", { staticClass: "c-tc goItem" }, [
                                    e._v(e._s(t.IssueNumber)),
                                  ]),
                                ]),
                                i("van-col", { attrs: { span: "5" } }, [
                                  i("div", { staticClass: "c-tc goItem" }, [
                                    t.Number % 2 == 0
                                      ? i("span", { staticClass: "red" }, [
                                        e._v(" " + e._s(t.Number) + " "),
                                      ])
                                      : e._e(),
                                    t.Number % 2 == 1
                                      ? i(
                                        "span",
                                        { staticClass: "green" },
                                        [e._v(" " + e._s(t.Number) + " ")]
                                      )
                                      : e._e(),
                                  ]),
                                ]),
                                i("van-col", { attrs: { span: "5" } }, [
                                  i("div", { staticClass: "c-tc goItem" }, [
                                    t.Number > 4
                                      ? i("span", [
                                        e._v(
                                          " " +
                                          e._s(
                                            e.$t("homepage.index.big")
                                          ) +
                                          " "
                                        ),
                                      ])
                                      : e._e(),
                                    t.Number <= 4
                                      ? i("span", [
                                        e._v(
                                          e._s(
                                            e.$t("homepage.index.small")
                                          ) + " "
                                        ),
                                      ])
                                      : e._e(),
                                  ]),
                                ]),
                                i("van-col", { attrs: { span: "6" } }, [
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "goItem c-row c-tc c-row-center",
                                    },
                                    [
                                      0 == t.Number
                                        ? i(
                                          "div",
                                          {
                                            staticClass:
                                              "c-tc c-row box c-row-center c-row-middle",
                                          },
                                          [
                                            i("span", {
                                              staticClass: "li red",
                                            }),
                                            e._v(" "),
                                            i("span", {
                                              staticClass: "li violet",
                                            }),
                                          ]
                                        )
                                        : e._e(),
                                      1 == t.Number ||
                                        3 == t.Number ||
                                        7 == t.Number ||
                                        9 == t.Number
                                        ? i(
                                          "div",
                                          {
                                            staticClass:
                                              "c-tc c-row box c-row-center",
                                          },
                                          [
                                            i("span", {
                                              staticClass: "li green",
                                            }),
                                          ]
                                        )
                                        : e._e(),
                                      2 == t.Number ||
                                        4 == t.Number ||
                                        6 == t.Number ||
                                        8 == t.Number
                                        ? i(
                                          "div",
                                          {
                                            staticClass:
                                              "c-tc c-row box c-row-center",
                                          },
                                          [
                                            i("span", {
                                              staticClass: "li red",
                                            }),
                                          ]
                                        )
                                        : e._e(),
                                      5 == t.Number
                                        ? i(
                                          "div",
                                          {
                                            staticClass:
                                              "c-tc c-row box c-row-center",
                                          },
                                          [
                                            i("span", {
                                              staticClass: "li green",
                                            }),
                                            e._v(" "),
                                            i("span", {
                                              staticClass: "li violet",
                                            }),
                                          ]
                                        )
                                        : e._e(),
                                    ]
                                  ),
                                ]),
                              ],
                              1
                            );
                          }),
                          1
                        ),
                      ])
                      : i(
                        "div",
                        { staticClass: "p-t-5 p-b-5" },
                        [
                          i("van-empty", {
                            attrs: { description: e.$t("homepage.noData") },
                          }),
                        ],
                        1
                      ),
                    i("div", { staticClass: "list-fooder" }),
                  ]),
                  i(
                    "div",
                    { staticClass: "page-nav c-row c-row-center c-tc" },
                    [
                      i(
                        "div",
                        {
                          class:
                            e.NoaverageEmerdPage > 1
                              ? "arr c-row c-row-middle-center action"
                              : "arr c-row c-row-middle-center",
                          on: {
                            click: function (t) {
                              return e.onLeft(e.page);
                            },
                          },
                        },
                        [
                          i("van-icon", {
                            class:
                              e.NoaverageEmerdPage > 1
                                ? "icon action"
                                : "icon",
                            attrs: { name: "arrow-left", size: "20" },
                          }),
                        ],
                        1
                      ),
                      i("div", { staticClass: "number" }, [
                        e._v(
                          e._s(e.NoaverageEmerdPage) +
                          "/" +
                          e._s(e.NoaverageEmerdTotal)
                        ),
                      ]),
                      i(
                        "div",
                        {
                          class:
                            e.NoaverageEmerdPage < e.NoaverageEmerdTotal
                              ? "arr c-row c-row-middle-center action"
                              : "arr c-row c-row-middle-center",
                          on: {
                            click: function (t) {
                              return e.onRight(e.page);
                            },
                          },
                        },
                        [
                          i("van-icon", {
                            class:
                              e.NoaverageEmerdPage < e.NoaverageEmerdTotal
                                ? "icon action"
                                : "icon",
                            attrs: { name: "arrow", size: "20" },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ]
              ),
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 2 == e.recordType,
                      expression: "recordType==2",
                    },
                  ],
                  staticClass: "con-box p-b-20",
                },
                [
                  i("div", { staticClass: "list m-t-10" }, [
                    i(
                      "div",
                      { staticClass: "wrap" },
                      [
                        i(
                          "van-row",
                          { staticClass: "c-tc" },
                          [
                            i("van-col", { attrs: { span: "8" } }, [
                              e._v(
                                " " +
                                e._s(e.$t("homepage.index.period")) +
                                " "
                              ),
                            ]),
                            i("van-col", { attrs: { span: "16" } }, [
                              e._v(
                                " " +
                                e._s(e.$t("homepage.index.number")) +
                                " "
                              ),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    e.resolvelist.length > 0
                      ? i("div", { staticClass: "con-Missing" }, [
                        i("div", { staticClass: "m-b-10" }, [
                          e._v(
                            " " +
                            e._s(
                              e.$t("homepage.index.BettingAssistant")
                            ) +
                            " "
                          ),
                        ]),
                        e.resolvelist4 && 2 == e.resolvelist4.Type
                          ? i(
                            "div",
                            { staticClass: "item c-row c-row-between" },
                            [
                              i("div", [
                                e._v(
                                  " " +
                                  e._s(e.$t("homepage.index.Missing")) +
                                  " "
                                ),
                              ]),
                              i("div", { staticClass: "c-row" }, [
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist4.Number_0)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist4.Number_1)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist4.Number_2)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist4.Number_3)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist4.Number_4)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist4.Number_5)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist4.Number_6)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist4.Number_7)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist4.Number_8)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist4.Number_9)),
                                ]),
                              ]),
                            ]
                          )
                          : e._e(),
                        e.resolvelist2 && 4 == e.resolvelist2.Type
                          ? i(
                            "div",
                            { staticClass: "item c-row c-row-between" },
                            [
                              i("div", [
                                e._v(
                                  " " +
                                  e._s(
                                    e.$t("homepage.index.AvgMissing")
                                  ) +
                                  " "
                                ),
                              ]),
                              i("div", { staticClass: "c-row" }, [
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist2.Number_0)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist2.Number_1)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist2.Number_2)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist2.Number_3)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist2.Number_4)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist2.Number_5)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist2.Number_6)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist2.Number_7)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist2.Number_8)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist2.Number_9)),
                                ]),
                              ]),
                            ]
                          )
                          : e._e(),
                        e.resolvelist5 && 1 == e.resolvelist5.Type
                          ? i(
                            "div",
                            { staticClass: "item c-row c-row-between" },
                            [
                              i("div", [
                                e._v(
                                  " " +
                                  e._s(
                                    e.$t("homepage.index.Frequency")
                                  ) +
                                  " "
                                ),
                              ]),
                              i("div", { staticClass: "c-row" }, [
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist5.Number_0)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist5.Number_1)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist5.Number_2)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist5.Number_3)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist5.Number_4)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist5.Number_5)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist5.Number_6)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist5.Number_7)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist5.Number_8)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist5.Number_9)),
                                ]),
                              ]),
                            ]
                          )
                          : e._e(),
                        e.resolvelist3 && 3 == e.resolvelist3.Type
                          ? i(
                            "div",
                            { staticClass: "item c-row c-row-between" },
                            [
                              i("div", [
                                e._v(
                                  " " +
                                  e._s(
                                    e.$t("homepage.index.MaxContinued")
                                  ) +
                                  " "
                                ),
                              ]),
                              i("div", { staticClass: "c-row" }, [
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist3.Number_0)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist3.Number_1)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist3.Number_2)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist3.Number_3)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist3.Number_4)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist3.Number_5)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist3.Number_6)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist3.Number_7)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist3.Number_8)),
                                ]),
                                i("div", { staticClass: "li" }, [
                                  e._v(e._s(e.resolvelist3.Number_9)),
                                ]),
                              ]),
                            ]
                          )
                          : e._e(),
                      ])
                      : e._e(),
                    e.EmerdList.length > 0
                      ? i(
                        "div",
                        e._l(e.EmerdList, function (t, s) {
                          return e.EmerdList.length > 0
                            ? i(
                              "div",
                              {
                                key: s,
                                staticClass: "hb",
                                attrs: {
                                  IssueNumber: t.IssueNumber,
                                  Number: t.Number,
                                  Colour: t.Colour,
                                  rowId: t.rowId,
                                },
                              },
                              [
                                i(
                                  "van-row",
                                  {
                                    staticClass:
                                      "p-l-5 p-l-5 p-t-20 p-b-20",
                                  },
                                  [
                                    i(
                                      "van-col",
                                      { attrs: { span: "8" } },
                                      [
                                        i(
                                          "div",
                                          { staticClass: "c-tc" },
                                          [e._v(e._s(t.IssueNumber))]
                                        ),
                                      ]
                                    ),
                                    i(
                                      "van-col",
                                      { attrs: { span: "16" } },
                                      [
                                        i(
                                          "div",
                                          {
                                            staticClass:
                                              "c-row c-row-between",
                                          },
                                          [
                                            i("div"),
                                            i(
                                              "div",
                                              {
                                                staticClass: "c-row qiu",
                                              },
                                              [
                                                i("canvas", {
                                                  ref: "canvas",
                                                  refInFor: !0,
                                                  staticClass:
                                                    "line-canvas",
                                                  attrs: {
                                                    canvas: "",
                                                    id:
                                                      "myCanvas" +
                                                      t.rowId,
                                                  },
                                                }),
                                                e._l(10, function (s, o) {
                                                  return i(
                                                    "div",
                                                    {
                                                      key: o,
                                                      class:
                                                        t.Number == o
                                                          ? "li action" +
                                                          o
                                                          : "li",
                                                    },
                                                    [
                                                      i("div", [
                                                        e._v(e._s(o)),
                                                      ]),
                                                    ]
                                                  );
                                                }),
                                                i(
                                                  "div",
                                                  {
                                                    staticClass: "m-l-5",
                                                  },
                                                  [
                                                    t.Number > 4
                                                      ? i(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "li actionB",
                                                        },
                                                        [e._v("B")]
                                                      )
                                                      : i(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "li actionS",
                                                        },
                                                        [e._v("S")]
                                                      ),
                                                  ]
                                                ),
                                              ],
                                              2
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            )
                            : e._e();
                        }),
                        0
                      )
                      : i(
                        "div",
                        { staticClass: "p-t-5 p-b-5" },
                        [
                          i("van-empty", {
                            attrs: { description: e.$t("homepage.noData") },
                          }),
                        ],
                        1
                      ),
                    i("div", { staticClass: "list-fooder" }),
                  ]),
                  i(
                    "div",
                    { staticClass: "page-nav c-row c-row-center c-tc" },
                    [
                      i(
                        "div",
                        {
                          class:
                            e.EmerdPage > 1
                              ? "arr c-row c-row-middle-center action"
                              : "arr c-row c-row-middle-center",
                          on: {
                            click: function (t) {
                              return e.onLeft(e.page);
                            },
                          },
                        },
                        [
                          i("van-icon", {
                            class: e.EmerdPage > 1 ? "icon action" : "icon",
                            attrs: { name: "arrow-left", size: "20" },
                          }),
                        ],
                        1
                      ),
                      i("div", { staticClass: "number" }, [
                        e._v(e._s(e.EmerdPage) + "/" + e._s(e.EmerdTotal)),
                      ]),
                      i(
                        "div",
                        {
                          class:
                            e.EmerdPage < e.EmerdTotal
                              ? "arr c-row c-row-middle-center action"
                              : "arr c-row c-row-middle-center",
                          on: {
                            click: function (t) {
                              return e.onRight(e.page);
                            },
                          },
                        },
                        [
                          i("van-icon", {
                            class:
                              e.EmerdPage < e.EmerdTotal
                                ? "icon action"
                                : "icon",
                            attrs: { name: "arrow", size: "20" },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                ]
              ),
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: 3 == e.recordType,
                      expression: "recordType==3",
                    },
                  ],
                  staticClass: "con-box p-b-20",
                },
                [
                  i(
                    "div",
                    {
                      staticClass: "c-row c-flew-end p-r-20",
                      on: {
                        click: function (t) {
                          return e.goPage("/bettingrecordwin");
                        },
                      },
                    },
                    [
                      i(
                        "div",
                        {
                          staticClass:
                            "bettingMore c-tc c-row c-row-middle-center",
                        },
                        [
                          e._v(e._s(e.$t("homepage.more"))),
                          i("van-icon", {
                            attrs: {
                              name: "arrow",
                              color: "#545E68",
                              size: "15",
                            },
                          }),
                        ],
                        1
                      ),
                    ]
                  ),
                  i("div", { staticClass: "list m-t-10" }, [
                    e.myEmerdList1.length > 0
                      ? i(
                        "div",
                        e._l(e.myEmerdList1, function (t, o) {
                          return i(
                            "div",
                            {
                              key: o,
                              staticClass: "hb",
                              attrs: {
                                IssueNumber: t.IssueNumber,
                                AddTime: t.AddTime,
                                Colour: t.Colour,
                                Number: t.Number,
                                rowId: t.rowId,
                              },
                            },
                            [
                              i(
                                "div",
                                {
                                  staticClass: "item c-row",
                                  on: {
                                    click: function (t) {
                                      return e.Emerd(o);
                                    },
                                  },
                                },
                                [
                                  i("div", { staticClass: "result" }, [
                                    "red" == t.SelectType
                                      ? i("div", {
                                        staticClass: "select select-red",
                                      })
                                      : e._e(),
                                    "2" == t.SelectType ||
                                      "4" == t.SelectType ||
                                      "6" == t.SelectType ||
                                      "8" == t.SelectType
                                      ? i(
                                        "div",
                                        {
                                          staticClass:
                                            "select select-red",
                                        },
                                        [
                                          i("span", [
                                            e._v(e._s(t.SelectType)),
                                          ]),
                                        ]
                                      )
                                      : e._e(),
                                    "green" == t.SelectType
                                      ? i("div", {
                                        staticClass:
                                          "select select-green",
                                      })
                                      : e._e(),
                                    "1" == t.SelectType ||
                                      "3" == t.SelectType ||
                                      "7" == t.SelectType ||
                                      "9" == t.SelectType
                                      ? i(
                                        "div",
                                        {
                                          staticClass:
                                            "select select-green",
                                        },
                                        [
                                          i("span", [
                                            e._v(e._s(t.SelectType)),
                                          ]),
                                        ]
                                      )
                                      : e._e(),
                                    "violet" == t.SelectType
                                      ? i("div", {
                                        staticClass:
                                          "select select-violet",
                                      })
                                      : e._e(),
                                    "0" == t.SelectType
                                      ? i(
                                        "div",
                                        {
                                          staticClass:
                                            "select select-red-violet",
                                        },
                                        [
                                          i("span", [
                                            e._v(e._s(t.SelectType)),
                                          ]),
                                        ]
                                      )
                                      : e._e(),
                                    "5" == t.SelectType
                                      ? i(
                                        "div",
                                        {
                                          staticClass:
                                            "select select-green-violet",
                                        },
                                        [
                                          i("span", [
                                            e._v(e._s(t.SelectType)),
                                          ]),
                                        ]
                                      )
                                      : e._e(),
                                    "big" == t.SelectType
                                      ? i(
                                        "div",
                                        {
                                          staticClass:
                                            "select select-big",
                                        },
                                        [
                                          i("van-image", {
                                            attrs: {
                                              width: "30px",
                                              height: "30px",
                                              src: s("cc50"),
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                      : e._e(),
                                    "small" == t.SelectType
                                      ? i(
                                        "div",
                                        {
                                          staticClass:
                                            "select select-small",
                                        },
                                        [
                                          i("van-image", {
                                            attrs: {
                                              width: "30px",
                                              height: "30px",
                                              src: s("1adc"),
                                            },
                                          }),
                                        ],
                                        1
                                      )
                                      : e._e(),
                                  ]),
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "c-row c-row-between info",
                                    },
                                    [
                                      i("div", {}, [
                                        i(
                                          "div",
                                          { staticClass: "issueName" },
                                          [
                                            e._v(
                                              " " +
                                              e._s(t.IssueNumber) +
                                              " "
                                            ),
                                            1 == t.State
                                              ? i(
                                                "span",
                                                {
                                                  staticClass:
                                                    "state green",
                                                },
                                                [
                                                  e._v(
                                                    e._s(
                                                      e.$t(
                                                        "homepage.success"
                                                      )
                                                    )
                                                  ),
                                                ]
                                              )
                                              : e._e(),
                                            0 == t.State
                                              ? i(
                                                "span",
                                                {
                                                  staticClass:
                                                    "state red",
                                                },
                                                [
                                                  e._v(
                                                    e._s(
                                                      e.$t(
                                                        "homepage.fail"
                                                      )
                                                    )
                                                  ),
                                                ]
                                              )
                                              : e._e(),
                                          ]
                                        ),
                                        i("div", { staticClass: "tiem" }, [
                                          e._v(e._s(t.AddTime)),
                                        ]),
                                      ]),
                                      i("div", { staticClass: "money" }, [
                                        1 == t.State
                                          ? i(
                                            "span",
                                            { staticClass: "success" },
                                            [
                                              e._v(
                                                " +" +
                                                e._s(
                                                  e.utils.numFilter(
                                                    t.ProfitAmount
                                                  )
                                                ) +
                                                " "
                                              ),
                                            ]
                                          )
                                          : e._e(),
                                        0 == t.State
                                          ? i(
                                            "span",
                                            { staticClass: "fail" },
                                            [
                                              e._v(
                                                " -" +
                                                e._s(
                                                  e.utils.numFilter(
                                                    t.ProfitAmount
                                                  )
                                                ) +
                                                " "
                                              ),
                                            ]
                                          )
                                          : e._e(),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                              o == e.showIndexRe
                                ? i("div", { staticClass: "details" }, [
                                  i("div", { staticClass: "tit" }, [
                                    e._v(
                                      e._s(
                                        e.$t(
                                          "homepage.index.periodDetail"
                                        )
                                      )
                                    ),
                                  ]),
                                  t.OrderNumber
                                    ? i(
                                      "div",
                                      {
                                        staticClass:
                                          "li c-row c-row-between c-row-middle",
                                      },
                                      [
                                        i("div", [
                                          e._v(
                                            e._s(
                                              e.$t(
                                                "homepage.index.orderNumber"
                                              )
                                            )
                                          ),
                                        ]),
                                        i(
                                          "div",
                                          {
                                            staticClass:
                                              "tag-read c-row c-row-between c-row-middle",
                                            attrs: {
                                              "data-clipboard-text":
                                                t.OrderNumber,
                                            },
                                            on: {
                                              click: function (t) {
                                                return e.copy();
                                              },
                                            },
                                          },
                                          [
                                            e._v(e._s(t.OrderNumber)),
                                            i("img", {
                                              staticClass: "m-l-5",
                                              attrs: {
                                                width: "18px",
                                                height: "15px",
                                                src: s("dc2b"),
                                              },
                                            }),
                                          ]
                                        ),
                                      ]
                                    )
                                    : e._e(),
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "li c-row c-row-between c-row-middle",
                                    },
                                    [
                                      i("div", [
                                        e._v(
                                          e._s(
                                            e.$t("homepage.index.period")
                                          )
                                        ),
                                      ]),
                                      i("div", [
                                        e._v(e._s(t.IssueNumber)),
                                      ]),
                                    ]
                                  ),
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "li c-row c-row-between c-row-middle",
                                    },
                                    [
                                      i("div", [
                                        e._v(
                                          e._s(
                                            e.$t(
                                              "homepage.index.contractMoney"
                                            )
                                          )
                                        ),
                                      ]),
                                      i("div", [
                                        e._v(
                                          e._s(
                                            e.utils.numFilter(t.Amount)
                                          )
                                        ),
                                      ]),
                                    ]
                                  ),
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "li c-row c-row-between c-row-middle",
                                    },
                                    [
                                      i("div", [
                                        e._v(
                                          e._s(
                                            e.$t(
                                              "homepage.index.contractCount"
                                            )
                                          )
                                        ),
                                      ]),
                                      i("div", [e._v(e._s(t.BetCount))]),
                                    ]
                                  ),
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "li c-row c-row-between c-row-middle",
                                    },
                                    [
                                      i("div", [
                                        e._v(
                                          e._s(
                                            e.$t(
                                              "homepage.index.delivery"
                                            )
                                          )
                                        ),
                                      ]),
                                      i("div", { staticClass: "red" }, [
                                        e._v(
                                          e._s(
                                            e.utils.numFilter(
                                              t.RealAmount
                                            )
                                          )
                                        ),
                                      ]),
                                    ]
                                  ),
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "li c-row c-row-between c-row-middle",
                                    },
                                    [
                                      i("div", [
                                        e._v(
                                          e._s(e.$t("homepage.index.fee"))
                                        ),
                                      ]),
                                      i("div", [
                                        e._v(
                                          e._s(e.utils.numFilter(t.Fee))
                                        ),
                                      ]),
                                    ]
                                  ),
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "li c-row c-row-between c-row-middle",
                                    },
                                    [
                                      i("div", [
                                        e._v(
                                          e._s(
                                            e.$t(
                                              "homepage.index.openPrice"
                                            )
                                          )
                                        ),
                                      ]),
                                      i("div", [e._v(e._s(t.Premium))]),
                                    ]
                                  ),
                                  t.Number
                                    ? i(
                                      "div",
                                      {
                                        staticClass:
                                          "li c-row c-row-between c-row-middle",
                                      },
                                      [
                                        i("div", [
                                          e._v(
                                            e._s(
                                              e.$t(
                                                "homepage.index.result"
                                              )
                                            )
                                          ),
                                        ]),
                                        i("div", [
                                          i(
                                            "div",
                                            {
                                              staticStyle: {
                                                display: "inline-block",
                                                "margin-left": "8px",
                                              },
                                            },
                                            [e._v(e._s(t.Number))]
                                          ),
                                          t.Number % 2 == 0
                                            ? i(
                                              "div",
                                              {
                                                staticStyle: {
                                                  display:
                                                    "inline-block",
                                                  "margin-left":
                                                    "8px",
                                                },
                                              },
                                              [
                                                e._v(
                                                  e._s(
                                                    e.$t(
                                                      "homepage.index.red"
                                                    )
                                                  )
                                                ),
                                              ]
                                            )
                                            : e._e(),
                                          t.Number % 2 == 1
                                            ? i(
                                              "div",
                                              {
                                                staticStyle: {
                                                  display:
                                                    "inline-block",
                                                  "margin-left":
                                                    "8px",
                                                },
                                              },
                                              [
                                                e._v(
                                                  e._s(
                                                    e.$t(
                                                      "homepage.index.green"
                                                    )
                                                  )
                                                ),
                                              ]
                                            )
                                            : e._e(),
                                          0 == t.Number || 5 == t.Number
                                            ? i(
                                              "div",
                                              {
                                                staticStyle: {
                                                  display:
                                                    "inline-block",
                                                  "margin-left":
                                                    "8px",
                                                },
                                              },
                                              [
                                                e._v(
                                                  e._s(
                                                    e.$t(
                                                      "homepage.index.violet"
                                                    )
                                                  )
                                                ),
                                              ]
                                            )
                                            : e._e(),
                                          t.Number > 4
                                            ? i(
                                              "div",
                                              {
                                                staticStyle: {
                                                  display:
                                                    "inline-block",
                                                  "margin-left":
                                                    "8px",
                                                },
                                              },
                                              [
                                                e._v(
                                                  e._s(
                                                    e.$t(
                                                      "homepage.index.big"
                                                    )
                                                  )
                                                ),
                                              ]
                                            )
                                            : e._e(),
                                          t.Number < 5
                                            ? i(
                                              "div",
                                              {
                                                staticStyle: {
                                                  display:
                                                    "inline-block",
                                                  "margin-left":
                                                    "8px",
                                                },
                                              },
                                              [
                                                e._v(
                                                  e._s(
                                                    e.$t(
                                                      "homepage.index.small"
                                                    )
                                                  )
                                                ),
                                              ]
                                            )
                                            : e._e(),
                                        ]),
                                      ]
                                    )
                                    : e._e(),
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "li c-row c-row-between c-row-middle ",
                                    },
                                    [
                                      i("div", [
                                        e._v(
                                          e._s(
                                            e.$t("homepage.index.Select")
                                          )
                                        ),
                                      ]),
                                      i("div", [
                                        "red" == t.SelectType
                                          ? i("div", [
                                            e._v(e._s(t.SelectType)),
                                          ])
                                          : e._e(),
                                        "green" == t.SelectType
                                          ? i("div", [
                                            e._v(e._s(t.SelectType)),
                                          ])
                                          : e._e(),
                                        "violet" == t.SelectType
                                          ? i("div", [
                                            e._v(
                                              " " + e._s(t.SelectType)
                                            ),
                                          ])
                                          : e._e(),
                                        "small" == t.SelectType
                                          ? i("div", [
                                            e._v(
                                              " " +
                                              e._s(
                                                e.$t(
                                                  "homepage.index.small"
                                                )
                                              )
                                            ),
                                          ])
                                          : e._e(),
                                        "big" == t.SelectType
                                          ? i("div", [
                                            e._v(
                                              " " +
                                              e._s(
                                                e.$t(
                                                  "homepage.index.big"
                                                )
                                              )
                                            ),
                                          ])
                                          : e._e(),
                                        "big" != t.SelectType &&
                                          "small" != t.SelectType &&
                                          "violet" != t.SelectType &&
                                          "red" != t.SelectType &&
                                          "green" != t.SelectType
                                          ? i("div", [
                                            e._v(
                                              " " + e._s(t.SelectType)
                                            ),
                                          ])
                                          : e._e(),
                                      ]),
                                    ]
                                  ),
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "li c-row c-row-between c-row-middle",
                                    },
                                    [
                                      i("div", [
                                        e._v(
                                          e._s(
                                            e.$t("homepage.index.status")
                                          )
                                        ),
                                      ]),
                                      1 == t.State
                                        ? i(
                                          "div",
                                          { staticClass: "green" },
                                          [
                                            e._v(
                                              e._s(
                                                e.$t("homepage.success")
                                              )
                                            ),
                                          ]
                                        )
                                        : e._e(),
                                      0 == t.State
                                        ? i(
                                          "div",
                                          { staticClass: "red" },
                                          [
                                            e._v(
                                              e._s(
                                                e.$t("homepage.fail")
                                              )
                                            ),
                                          ]
                                        )
                                        : e._e(),
                                    ]
                                  ),
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "li c-row c-row-between c-row-middle",
                                    },
                                    [
                                      i("div", [
                                        e._v(
                                          e._s(
                                            e.$t("homepage.index.amount")
                                          )
                                        ),
                                      ]),
                                      1 == t.State
                                        ? i(
                                          "div",
                                          { staticClass: "green" },
                                          [
                                            e._v(
                                              " + " +
                                              e._s(
                                                e.utils.numFilter(
                                                  t.ProfitAmount
                                                )
                                              ) +
                                              " "
                                            ),
                                          ]
                                        )
                                        : e._e(),
                                      0 == t.State
                                        ? i(
                                          "div",
                                          { staticClass: "red" },
                                          [
                                            e._v(
                                              " - " +
                                              e._s(
                                                e.utils.numFilter(
                                                  t.ProfitAmount
                                                )
                                              ) +
                                              " "
                                            ),
                                          ]
                                        )
                                        : e._e(),
                                    ]
                                  ),
                                  i(
                                    "div",
                                    {
                                      staticClass:
                                        "li c-row c-row-between c-row-middle",
                                    },
                                    [
                                      i("div", [
                                        e._v(
                                          e._s(
                                            e.$t(
                                              "homepage.index.createTime"
                                            )
                                          )
                                        ),
                                      ]),
                                      i("div", [e._v(e._s(t.AddTime))]),
                                    ]
                                  ),
                                ])
                                : e._e(),
                            ]
                          );
                        }),
                        0
                      )
                      : i(
                        "div",
                        { staticClass: "p-t-5 p-b-5" },
                        [
                          i("van-empty", {
                            attrs: { description: e.$t("homepage.noData") },
                          }),
                        ],
                        1
                      ),
                    i("div", { staticClass: "list-fooder" }),
                  ]),
                  e.myEmerdList1.length > 0
                    ? i(
                      "div",
                      { staticClass: "page-nav c-row c-row-center c-tc" },
                      [
                        i(
                          "div",
                          {
                            class:
                              e.myEmerdPage1 > 1
                                ? "arr c-row c-row-middle-center action"
                                : "arr c-row c-row-middle-center",
                            on: {
                              click: function (t) {
                                return e.onLeft(e.page);
                              },
                            },
                          },
                          [
                            i("van-icon", {
                              class:
                                e.myEmerdPage1 > 1 ? "icon action" : "icon",
                              attrs: { name: "arrow-left", size: "20" },
                            }),
                          ],
                          1
                        ),
                        i("div", { staticClass: "number" }, [
                          e._v(
                            e._s(e.myEmerdPage1) +
                            "/" +
                            e._s(e.myEmerdTotal1)
                          ),
                        ]),
                        i(
                          "div",
                          {
                            class:
                              e.myEmerdPage1 < e.myEmerdTotal1
                                ? "arr c-row c-row-middle-center action"
                                : "arr c-row c-row-middle-center",
                            on: {
                              click: function (t) {
                                return e.onRight(e.page);
                              },
                            },
                          },
                          [
                            i("van-icon", {
                              class:
                                e.myEmerdPage1 < e.myEmerdTotal1
                                  ? "icon action"
                                  : "icon",
                              attrs: { name: "arrow", size: "20" },
                            }),
                          ],
                          1
                        ),
                      ]
                    )
                    : e._e(),
                ]
              ),
            ]),
            i(
              "van-popup",
              {
                style: { maxWidth: "10rem", left: "auto" },
                attrs: {
                  position: "bottom",
                  round: !0,
                  "close-on-click-overlay": !1,
                },
                model: {
                  value: e.show,
                  callback: function (t) {
                    e.show = t;
                  },
                  expression: "show",
                },
              },
              [
                i("div", { class: "betting-mark color" + e.selectCon }, [
                  i("div", { staticClass: "head" }, [
                    i("div", { staticClass: "box" }, [
                      e.gameList.length > 1
                        ? i("div", { staticClass: "con" }, [
                          e._v(
                            e._s(e.gameList[e.currentGameIndex].TypeName)
                          ),
                        ])
                        : e._e(),
                      i(
                        "div",
                        {
                          staticClass: "color",
                          style: { color: e.popupColor },
                        },
                        [
                          e._v(e._s(e.$t("homepage.index.Select")) + " "),
                          "green" == e.selectCon
                            ? i("span", { staticClass: "p-l-10" }, [
                              e._v(e._s(e.$t("homepage.index.green"))),
                            ])
                            : "violet" == e.selectCon
                              ? i("span", { staticClass: "p-l-10" }, [
                                e._v(e._s(e.$t("homepage.index.violet"))),
                              ])
                              : "red" == e.selectCon
                                ? i("span", { staticClass: "p-l-10" }, [
                                  e._v(e._s(e.$t("homepage.index.red"))),
                                ])
                                : "big" == e.selectCon
                                  ? i("span", { staticClass: "p-l-10" }, [
                                    e._v(e._s(e.$t("homepage.index.big")) + " "),
                                  ])
                                  : "small" == e.selectCon
                                    ? i("span", { staticClass: "p-l-10" }, [
                                      e._v(e._s(e.$t("homepage.index.small"))),
                                    ])
                                    : i("span", { staticClass: "p-l-10" }, [
                                      e._v(e._s(e.selectCon)),
                                    ]),
                        ]
                      ),
                    ]),
                  ]),
                  i("div", { staticClass: "info" }, [
                    i("div", { staticClass: "item c-row c-row-between" }, [
                      i("div", { staticClass: "tit" }, [
                        e._v(e._s(e.$t("homepage.index.money"))),
                      ]),
                      i(
                        "div",
                        { staticClass: "c-row amount-box" },
                        e._l(
                          e.betTypeList[e.currentGameIndex],
                          function (t, s) {
                            return i(
                              "div",
                              {
                                key: s,
                                staticClass: "li",
                                style: {
                                  backgroundColor:
                                    e.selectInfo.coin == t
                                      ? e.popupColor
                                      : "#F0F0F0",
                                  color:
                                    e.selectInfo.coin == t ? "#fff" : "#000",
                                },
                                on: {
                                  click: function (s) {
                                    return e.changeCount(t);
                                  },
                                },
                              },
                              [e._v(e._s(t))]
                            );
                          }
                        ),
                        0
                      ),
                    ]),
                    i("div", { staticClass: "item c-row c-row-between" }, [
                      i("div", { staticClass: "tit" }, [
                        e._v(e._s(e.$t("homepage.index.multiply"))),
                      ]),
                      i(
                        "div",
                        { staticClass: "c-row c-row-between stepper-box" },
                        [
                          i(
                            "div",
                            {
                              staticClass: "li minus",
                              style: {
                                backgroundColor:
                                  e.selectInfo.count > 1
                                    ? e.popupColor
                                    : "rgb(240, 240, 240)",
                                color:
                                  e.selectInfo.count > 1 ? "#fff" : "#c8c9cc",
                              },
                              on: {
                                click: function (t) {
                                  return e.Stepper(1);
                                },
                              },
                            },
                            [e._v("-")]
                          ),
                          i("van-field", {
                            staticClass: "digit-box",
                            attrs: { type: "digit", maxlength: 4 },
                            on: { input: e.changeStep },
                            model: {
                              value: e.selectInfo.count,
                              callback: function (t) {
                                e.$set(e.selectInfo, "count", t);
                              },
                              expression: "selectInfo.count",
                            },
                          }),
                          i(
                            "div",
                            {
                              staticClass:
                                "li plus c-row c-row-middle-center",
                              style: {
                                backgroundColor:
                                  e.selectInfo.count > 0
                                    ? e.popupColor
                                    : "rgb(240, 240, 240)",
                                color:
                                  e.selectInfo.count > 0 ? "#fff" : "#c8c9cc",
                              },
                              on: {
                                click: function (t) {
                                  return e.Stepper(2);
                                },
                              },
                            },
                            [e._v("+")]
                          ),
                        ],
                        1
                      ),
                    ]),
                    i("div", { staticClass: "item c-row c-flew-end" }, [
                      i("div", { staticClass: "c-row multiple-box" }, [
                        i(
                          "div",
                          {
                            staticClass: "li",
                            style: {
                              backgroundColor:
                                1 == e.selectInfo.count
                                  ? e.popupColor
                                  : "#F0F0F0",
                              color:
                                1 == e.selectInfo.count ? "#fff" : "#000",
                            },
                            on: {
                              click: function (t) {
                                return e.TaskCount(1);
                              },
                            },
                          },
                          [e._v("X1")]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "li",
                            style: {
                              backgroundColor:
                                5 == e.selectInfo.count
                                  ? e.popupColor
                                  : "#F0F0F0",
                              color:
                                5 == e.selectInfo.count ? "#fff" : "#000",
                            },
                            on: {
                              click: function (t) {
                                return e.TaskCount(5);
                              },
                            },
                          },
                          [e._v("X5")]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "li",
                            style: {
                              backgroundColor:
                                10 == e.selectInfo.count
                                  ? e.popupColor
                                  : "#F0F0F0",
                              color:
                                10 == e.selectInfo.count ? "#fff" : "#000",
                            },
                            on: {
                              click: function (t) {
                                return e.TaskCount(10);
                              },
                            },
                          },
                          [e._v(" X10 ")]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "li",
                            style: {
                              backgroundColor:
                                20 == e.selectInfo.count
                                  ? e.popupColor
                                  : "#F0F0F0",
                              color:
                                20 == e.selectInfo.count ? "#fff" : "#000",
                            },
                            on: {
                              click: function (t) {
                                return e.TaskCount(20);
                              },
                            },
                          },
                          [e._v(" X20 ")]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "li",
                            style: {
                              backgroundColor:
                                50 == e.selectInfo.count
                                  ? e.popupColor
                                  : "#F0F0F0",
                              color:
                                50 == e.selectInfo.count ? "#fff" : "#000",
                            },
                            on: {
                              click: function (t) {
                                return e.TaskCount(50);
                              },
                            },
                          },
                          [e._v("X50")]
                        ),
                        i(
                          "div",
                          {
                            staticClass: "li",
                            style: {
                              backgroundColor:
                                100 == e.selectInfo.count
                                  ? e.popupColor
                                  : "#F0F0F0",
                              color:
                                100 == e.selectInfo.count ? "#fff" : "#000",
                            },
                            on: {
                              click: function (t) {
                                return e.TaskCount(100);
                              },
                            },
                          },
                          [e._v("X100")]
                        ),
                      ]),
                    ]),
                    i(
                      "div",
                      { staticClass: "item c-row c-row-middle" },
                      [
                        i(
                          "van-checkbox",
                          {
                            attrs: {
                              shape: "square",
                              "checked-color": "#F4453E",
                            },
                            on: { change: e.checkboxChange },
                            model: {
                              value: e.checked,
                              callback: function (t) {
                                e.checked = t;
                              },
                              expression: "checked",
                            },
                          },
                          [
                            i("div", { staticClass: "agree p-r-15" }, [
                              e._v(e._s(e.$t("homepage.agree"))),
                            ]),
                          ]
                        ),
                        i(
                          "span",
                          {
                            staticClass: "txt",
                            on: {
                              click: function (t) {
                                e.presaleRule = !0;
                              },
                            },
                          },
                          [e._v(e._s(e.$t("homepage.index.presaleRule")))]
                        ),
                      ],
                      1
                    ),
                  ]),
                  i("div", { staticClass: "foot c-row" }, [
                    i(
                      "div",
                      {
                        staticClass: "left",
                        on: {
                          click: function (t) {
                            return e.hideShow();
                          },
                        },
                      },
                      [e._v(" " + e._s(e.$t("homepage.cancel")) + " ")]
                    ),
                    i(
                      "div",
                      {
                        staticClass: "right",
                        style: { backgroundColor: e.popupColor },
                        on: {
                          click: function (t) {
                            return e.placeBet();
                          },
                        },
                      },
                      [
                        i("span", { staticClass: "p-r-5" }, [
                          e._v(e._s(e.$t("homepage.lottery.totalPrice"))),
                        ]),
                        e.utils.isYueNanCurrencySymbol()
                          ? e._e()
                          : i("span", [
                            e._v(
                              e._s(e.utils.getCurrencySymbol()) +
                              " " +
                              e._s(
                                e.utils.numFilter(e.selectInfo.allCoin)
                              )
                            ),
                          ]),
                        e.utils.isYueNanCurrencySymbol()
                          ? i("span", [
                            e._v(
                              e._s(
                                e.utils.numFilter(e.selectInfo.allCoin)
                              ) +
                              " " +
                              e._s(e.utils.getCurrencySymbol()) +
                              " "
                            ),
                          ])
                          : e._e(),
                      ]
                    ),
                  ]),
                ]),
              ]
            ),
            i(
              "van-popup",
              {
                style: {
                  width: "80%",
                  borderRadius: "10px",
                  maxWidth: "340px",
                },
                attrs: { "close-on-click-overlay": !1 },
                model: {
                  value: e.ruleShow,
                  callback: function (t) {
                    e.ruleShow = t;
                  },
                  expression: "ruleShow",
                },
              },
              [
                i("div", { staticClass: "rule-box" }, [
                  i(
                    "div",
                    { staticClass: "title c-row c-row-middle-center" },
                    [e._v(e._s(e.$t("homepage.index.lotteyRule")))]
                  ),
                  i("div", { staticClass: "info" }, [
                    i(
                      "div",
                      { staticClass: "comment" },
                      e._l(e.gameList, function (t, s) {
                        return i("div", { key: s }, [
                          e.ruleType == s
                            ? i("div", {
                              domProps: {
                                innerHTML: e._s(
                                  e.gameList[e.ruleType].GamePresentation
                                ),
                              },
                            })
                            : e._e(),
                        ]);
                      }),
                      0
                    ),
                    i(
                      "div",
                      { staticClass: "rule-btn c-row m-t-20 c-row-center" },
                      [
                        i(
                          "van-button",
                          {
                            staticClass: "btn",
                            attrs: { color: "#F2413B", block: "", round: !0 },
                            on: { click: e.ruleHide },
                          },
                          [
                            i("span", [
                              e._v(e._s(e.$t("homepage.index.iKnow"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]
            ),
            i(
              "van-popup",
              {
                style: {
                  width: "80%",
                  borderRadius: "10px",
                  maxWidth: "340px",
                },
                attrs: { "close-on-click-overlay": !1 },
                model: {
                  value: e.presaleRule,
                  callback: function (t) {
                    e.presaleRule = t;
                  },
                  expression: "presaleRule",
                },
              },
              [
                i("div", { staticClass: "rule-box" }, [
                  i(
                    "div",
                    { staticClass: "title c-row c-row-middle-center" },
                    [e._v(e._s(e.$t("homepage.index.presaleRule")))]
                  ),
                  i("div", { staticClass: "info" }, [
                    i("div", { staticClass: "comment" }, [
                      e._v(" " + e._s(e.$t("homepage.presaleRule")) + " "),
                    ]),
                    i(
                      "div",
                      { staticClass: "rule-btn c-row m-t-20 c-row-center" },
                      [
                        i(
                          "van-button",
                          {
                            staticClass: "btn",
                            attrs: { color: "#F2413B", block: "", round: !0 },
                            on: {
                              click: function (t) {
                                e.presaleRule = !1;
                              },
                            },
                          },
                          [
                            i("span", [
                              e._v(e._s(e.$t("homepage.index.iKnow"))),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]),
                ]),
              ]
            ),
            i("transition", [
              i(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: e.longShow,
                      expression: "longShow",
                    },
                  ],
                  class: e.full ? "moveBox action" : "moveBox",
                  attrs: { id: "moveBox" },
                },
                [
                  i(
                    "div",
                    {
                      staticClass:
                        "moveHead c-row c-row-between c-row-middle",
                      on: {
                        mousedown: e.mousedown,
                        touchstart: e.mousedown,
                        mousemove: e.mousemove,
                        touchmove: e.mousemove,
                        mouseup: e.mouseup,
                        touchend: e.mouseup,
                      },
                    },
                    [
                      i(
                        "div",
                        { staticClass: "close", on: { click: e.closeLong } },
                        [e._v(" " + e._s(e.$t("homepage.close")) + " ")]
                      ),
                      i("div", { on: { click: e.fullLong } }, [
                        e.full
                          ? i("span", [e._v(e._s(e.$t("homepage.zoomOut")))])
                          : i("span", [e._v(e._s(e.$t("homepage.full")))]),
                      ]),
                    ]
                  ),
                  i(
                    "div",
                    { class: e.full ? "long action" : "long" },
                    [
                      i(
                        "van-tabs",
                        {
                          attrs: { "line-width": "50%" },
                          on: { click: e.onClick },
                          model: {
                            value: e.longActive,
                            callback: function (t) {
                              e.longActive = t;
                            },
                            expression: "longActive",
                          },
                        },
                        [
                          i(
                            "van-tab",
                            {
                              attrs: {
                                title: e.$t("homepage.long.newTitle"),
                              },
                            },
                            [
                              i(
                                "div",
                                { staticClass: "longlist" },
                                e._l(e.longList, function (t, o) {
                                  return i(
                                    "div",
                                    {
                                      staticClass:
                                        "item c-row c-row-between c-row-middle",
                                    },
                                    [
                                      i("div", [
                                        i(
                                          "div",
                                          {
                                            staticClass: "c-row c-row-middle",
                                          },
                                          [
                                            1 == t.Type ||
                                              2 == t.Type ||
                                              3 == t.Type ||
                                              4 == t.Type
                                              ? i(
                                                "div",
                                                {
                                                  staticClass:
                                                    "logo c-row c-row-middle",
                                                },
                                                [
                                                  i("img", {
                                                    staticClass: "img",
                                                    attrs: {
                                                      src: s("3622"),
                                                    },
                                                  }),
                                                ]
                                              )
                                              : e._e(),
                                            5 == t.Type ||
                                              6 == t.Type ||
                                              7 == t.Type ||
                                              8 == t.Type
                                              ? i(
                                                "div",
                                                {
                                                  staticClass:
                                                    "logo c-row c-row-middle",
                                                },
                                                [
                                                  i("img", {
                                                    staticClass: "img",
                                                    attrs: {
                                                      src: s("ad20"),
                                                    },
                                                  }),
                                                ]
                                              )
                                              : e._e(),
                                            9 == t.Type ||
                                              10 == t.Type ||
                                              11 == t.Type ||
                                              12 == t.Type
                                              ? i(
                                                "div",
                                                {
                                                  staticClass:
                                                    "logo c-row c-row-middle",
                                                },
                                                [
                                                  i("img", {
                                                    staticClass: "img",
                                                    attrs: {
                                                      src: s("36d6"),
                                                    },
                                                  }),
                                                ]
                                              )
                                              : e._e(),
                                            i(
                                              "div",
                                              { staticClass: "p-l-10" },
                                              [e._v(e._s(t.lotteryName))]
                                            ),
                                          ]
                                        ),
                                        i("div", { staticClass: "c-row" }, [
                                          e._v(e._s(t.IssueNumber) + " "),
                                          i(
                                            "span",
                                            { staticClass: "time p-l-10" },
                                            [
                                              e.currentInfo2[o]
                                                ? i("span", [
                                                  e._v(
                                                    e._s(
                                                      e.currentInfo2[o]
                                                        .time1 || 0
                                                    )
                                                  ),
                                                ])
                                                : e._e(),
                                              e.currentInfo2[o]
                                                ? i("span", [
                                                  e._v(
                                                    e._s(
                                                      e.currentInfo2[o]
                                                        .time2
                                                    )
                                                  ),
                                                ])
                                                : e._e(),
                                              e._v(":"),
                                              e.currentInfo2[o]
                                                ? i("span", [
                                                  e._v(
                                                    e._s(
                                                      e.currentInfo2[o]
                                                        .time3
                                                    )
                                                  ),
                                                ])
                                                : e._e(),
                                              e.currentInfo2[o]
                                                ? i("span", [
                                                  e._v(
                                                    e._s(
                                                      e.currentInfo2[o]
                                                        .time4
                                                    )
                                                  ),
                                                ])
                                                : e._e(),
                                            ]
                                          ),
                                        ]),
                                        i(
                                          "div",
                                          {
                                            staticClass: "bottom m-t-5 c-row",
                                          },
                                          [
                                            i(
                                              "span",
                                              { staticClass: "tag num" },
                                              [e._v(e._s(t.Remark))]
                                            ),
                                            i(
                                              "span",
                                              {
                                                class:
                                                  "tag odd bg-" +
                                                  t.GameResult,
                                              },
                                              [e._v(e._s(t.GameResult))]
                                            ),
                                          ]
                                        ),
                                        i(
                                          "div",
                                          {
                                            staticClass: "bottom m-t-5 c-row",
                                          },
                                          [
                                            i(
                                              "span",
                                              { staticClass: "tag issue" },
                                              [
                                                e._v(
                                                  e._s(t.Issue) +
                                                  " " +
                                                  e._s(
                                                    e.$t(
                                                      "homepage.long.expect"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]),
                                      0 == t.GameType && e.currentInfo2[o]
                                        ? i("div", { staticClass: "c-row" }, [
                                          i(
                                            "button",
                                            {
                                              class:
                                                1 == e.actionItem.action &&
                                                  t.Type ==
                                                  e.actionItem.Type &&
                                                  t.Remark ==
                                                  e.actionItem.Remark &&
                                                  e.currentInfo2[o].passTime >
                                                  e.ProhibitBuyTime
                                                  ? "btn action van-ellipsis"
                                                  : "btn van-ellipsis",
                                              attrs: {
                                                disabled:
                                                  e.currentInfo2[o]
                                                    .passTime <
                                                  e.ProhibitBuyTime,
                                              },
                                              on: {
                                                click: function (s) {
                                                  e.bet(
                                                    t,
                                                    o,
                                                    1,
                                                    e.$t(
                                                      "homepage.index.big"
                                                    ),
                                                    "big"
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              e._v(
                                                " " +
                                                e._s(
                                                  e.$t(
                                                    "homepage.index.big"
                                                  )
                                                ) +
                                                " "
                                              ),
                                            ]
                                          ),
                                          i(
                                            "button",
                                            {
                                              class:
                                                2 == e.actionItem.action &&
                                                  t.Type ==
                                                  e.actionItem.Type &&
                                                  t.Remark ==
                                                  e.actionItem.Remark &&
                                                  e.currentInfo2[o].passTime >
                                                  e.ProhibitBuyTime
                                                  ? "btn action van-ellipsis"
                                                  : "btn van-ellipsis",
                                              attrs: {
                                                disabled:
                                                  e.currentInfo2[o]
                                                    .passTime <
                                                  e.ProhibitBuyTime,
                                              },
                                              on: {
                                                click: function (s) {
                                                  e.bet(
                                                    t,
                                                    o,
                                                    2,
                                                    e.$t(
                                                      "homepage.index.small"
                                                    ),
                                                    "small"
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              e._v(
                                                " " +
                                                e._s(
                                                  e.$t(
                                                    "homepage.index.small"
                                                  )
                                                ) +
                                                " "
                                              ),
                                            ]
                                          ),
                                        ])
                                        : e._e(),
                                      1 == t.GameType && e.currentInfo2[o]
                                        ? i("div", {}, [
                                          i(
                                            "div",
                                            { staticClass: "c-row" },
                                            [
                                              i(
                                                "button",
                                                {
                                                  class:
                                                    1 ==
                                                      e.actionItem.action &&
                                                      t.Type ==
                                                      e.actionItem.Type &&
                                                      t.Remark ==
                                                      e.actionItem.Remark &&
                                                      e.currentInfo2[o]
                                                        .passTime >
                                                      e.ProhibitBuyTime
                                                      ? "btn action van-ellipsis"
                                                      : "btn van-ellipsis ",
                                                  attrs: {
                                                    disabled:
                                                      e.currentInfo2[o]
                                                        .passTime <
                                                      e.ProhibitBuyTime,
                                                  },
                                                  on: {
                                                    click: function (s) {
                                                      e.bet(
                                                        t,
                                                        o,
                                                        1,
                                                        e.$t(
                                                          "homepage.index.red"
                                                        ),
                                                        "red"
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  e._v(
                                                    " " +
                                                    e._s(
                                                      e.$t(
                                                        "homepage.index.red"
                                                      )
                                                    ) +
                                                    " "
                                                  ),
                                                ]
                                              ),
                                              i(
                                                "button",
                                                {
                                                  class:
                                                    2 ==
                                                      e.actionItem.action &&
                                                      t.Type ==
                                                      e.actionItem.Type &&
                                                      t.Remark ==
                                                      e.actionItem.Remark &&
                                                      e.currentInfo2[o]
                                                        .passTime >
                                                      e.ProhibitBuyTime
                                                      ? "btn action van-ellipsis"
                                                      : "btn van-ellipsis",
                                                  attrs: {
                                                    disabled:
                                                      e.currentInfo2[o]
                                                        .passTime <
                                                      e.ProhibitBuyTime,
                                                  },
                                                  on: {
                                                    click: function (s) {
                                                      e.bet(
                                                        t,
                                                        o,
                                                        2,
                                                        e.$t(
                                                          "homepage.index.green"
                                                        ),
                                                        "green"
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  e._v(
                                                    " " +
                                                    e._s(
                                                      e.$t(
                                                        "homepage.index.green"
                                                      )
                                                    ) +
                                                    " "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                          i(
                                            "div",
                                            {
                                              staticClass:
                                                "c-row c-row-middle-center m-t-5",
                                            },
                                            [
                                              i(
                                                "button",
                                                {
                                                  class:
                                                    3 ==
                                                      e.actionItem.action &&
                                                      t.Type ==
                                                      e.actionItem.Type &&
                                                      t.Remark ==
                                                      e.actionItem.Remark &&
                                                      e.currentInfo2[o]
                                                        .passTime >
                                                      e.ProhibitBuyTime
                                                      ? "btn action van-ellipsis"
                                                      : "btn van-ellipsis",
                                                  attrs: {
                                                    disabled:
                                                      e.currentInfo2[o]
                                                        .passTime <
                                                      e.ProhibitBuyTime,
                                                  },
                                                  on: {
                                                    click: function (s) {
                                                      e.bet(
                                                        t,
                                                        o,
                                                        3,
                                                        e.$t(
                                                          "homepage.index.violet"
                                                        ),
                                                        "violet"
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  e._v(
                                                    " " +
                                                    e._s(
                                                      e.$t(
                                                        "homepage.index.violet"
                                                      )
                                                    ) +
                                                    " "
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ])
                                        : e._e(),
                                      2 == t.GameType && e.currentInfo2[o]
                                        ? i("div", { staticClass: "c-row" }, [
                                          i(
                                            "button",
                                            {
                                              class:
                                                1 == e.actionItem.action &&
                                                  t.Type ==
                                                  e.actionItem.Type &&
                                                  t.Remark ==
                                                  e.actionItem.Remark &&
                                                  e.currentInfo2[o].passTime >
                                                  e.ProhibitBuyTime
                                                  ? "btn action van-ellipsis"
                                                  : "btn van-ellipsis",
                                              attrs: {
                                                disabled:
                                                  e.currentInfo2[o]
                                                    .passTime <
                                                  e.ProhibitBuyTime,
                                              },
                                              on: {
                                                click: function (s) {
                                                  e.bet(
                                                    t,
                                                    o,
                                                    1,
                                                    e.$t(
                                                      "homepage.index.odd"
                                                    ),
                                                    "O"
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              e._v(
                                                " " +
                                                e._s(
                                                  e.$t(
                                                    "homepage.index.odd"
                                                  )
                                                ) +
                                                " "
                                              ),
                                            ]
                                          ),
                                          i(
                                            "button",
                                            {
                                              class:
                                                2 == e.actionItem.action &&
                                                  t.Type ==
                                                  e.actionItem.Type &&
                                                  t.Remark ==
                                                  e.actionItem.Remark &&
                                                  e.currentInfo2[o].passTime >
                                                  e.ProhibitBuyTime
                                                  ? "btn action van-ellipsis"
                                                  : "btn van-ellipsis",
                                              attrs: {
                                                disabled:
                                                  e.currentInfo2[o]
                                                    .passTime <
                                                  e.ProhibitBuyTime,
                                              },
                                              on: {
                                                click: function (s) {
                                                  e.bet(
                                                    t,
                                                    o,
                                                    2,
                                                    e.$t(
                                                      "homepage.index.even"
                                                    ),
                                                    "E"
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              e._v(
                                                " " +
                                                e._s(
                                                  e.$t(
                                                    "homepage.index.even"
                                                  )
                                                ) +
                                                " "
                                              ),
                                            ]
                                          ),
                                        ])
                                        : e._e(),
                                      3 == t.GameType && e.currentInfo2[o]
                                        ? i("div", { staticClass: "c-row" }, [
                                          i(
                                            "button",
                                            {
                                              class:
                                                1 == e.actionItem.action &&
                                                  t.Type ==
                                                  e.actionItem.Type &&
                                                  t.Remark ==
                                                  e.actionItem.Remark &&
                                                  e.currentInfo2[o].passTime >
                                                  e.ProhibitBuyTime
                                                  ? "btn action van-ellipsis"
                                                  : "btn van-ellipsis",
                                              attrs: {
                                                disabled:
                                                  e.currentInfo2[o]
                                                    .passTime <
                                                  e.ProhibitBuyTime,
                                              },
                                              on: {
                                                click: function (s) {
                                                  e.bet(
                                                    t,
                                                    o,
                                                    1,
                                                    e.$t(
                                                      "homepage.long.andodd"
                                                    ),
                                                    "O"
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              e._v(
                                                " " +
                                                e._s(
                                                  e.$t(
                                                    "homepage.long.andodd"
                                                  )
                                                ) +
                                                " "
                                              ),
                                            ]
                                          ),
                                          i(
                                            "button",
                                            {
                                              class:
                                                2 == e.actionItem.action &&
                                                  t.Type ==
                                                  e.actionItem.Type &&
                                                  t.Remark ==
                                                  e.actionItem.Remark &&
                                                  e.currentInfo2[o].passTime >
                                                  e.ProhibitBuyTime
                                                  ? "btn action van-ellipsis"
                                                  : "btn van-ellipsis",
                                              attrs: {
                                                disabled:
                                                  e.currentInfo2[o]
                                                    .passTime <
                                                  e.ProhibitBuyTime,
                                              },
                                              on: {
                                                click: function (s) {
                                                  e.bet(
                                                    t,
                                                    o,
                                                    2,
                                                    e.$t(
                                                      "homepage.long.andeven"
                                                    ),
                                                    "E"
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              e._v(
                                                " " +
                                                e._s(
                                                  e.$t(
                                                    "homepage.long.andeven"
                                                  )
                                                ) +
                                                " "
                                              ),
                                            ]
                                          ),
                                        ])
                                        : e._e(),
                                      4 == t.GameType && e.currentInfo2[o]
                                        ? i("div", { staticClass: "c-row" }, [
                                          i(
                                            "button",
                                            {
                                              class:
                                                1 == e.actionItem.action &&
                                                  t.Type ==
                                                  e.actionItem.Type &&
                                                  t.Remark ==
                                                  e.actionItem.Remark &&
                                                  e.currentInfo2[o].passTime >
                                                  e.ProhibitBuyTime
                                                  ? "btn action van-ellipsis"
                                                  : "btn van-ellipsis",
                                              attrs: {
                                                disabled:
                                                  e.currentInfo2[o]
                                                    .passTime <
                                                  e.ProhibitBuyTime,
                                              },
                                              on: {
                                                click: function (s) {
                                                  e.bet(
                                                    t,
                                                    o,
                                                    1,
                                                    e.$t(
                                                      "homepage.long.andDig"
                                                    ),
                                                    "H"
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              e._v(
                                                " " +
                                                e._s(
                                                  e.$t(
                                                    "homepage.long.andDig"
                                                  )
                                                ) +
                                                " "
                                              ),
                                            ]
                                          ),
                                          i(
                                            "button",
                                            {
                                              class:
                                                2 == e.actionItem.action &&
                                                  t.Type ==
                                                  e.actionItem.Type &&
                                                  t.Remark ==
                                                  e.actionItem.Remark &&
                                                  e.currentInfo2[o].passTime >
                                                  e.ProhibitBuyTime
                                                  ? "btn action van-ellipsis"
                                                  : "btn van-ellipsis",
                                              attrs: {
                                                disabled:
                                                  e.currentInfo2[o]
                                                    .passTime <
                                                  e.ProhibitBuyTime,
                                              },
                                              on: {
                                                click: function (s) {
                                                  e.bet(
                                                    t,
                                                    o,
                                                    2,
                                                    e.$t(
                                                      "homepage.long.andSmall"
                                                    ),
                                                    "L"
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              e._v(
                                                " " +
                                                e._s(
                                                  e.$t(
                                                    "homepage.long.andSmall"
                                                  )
                                                ) +
                                                " "
                                              ),
                                            ]
                                          ),
                                        ])
                                        : e._e(),
                                    ]
                                  );
                                }),
                                0
                              ),
                            ]
                          ),
                          i(
                            "van-tab",
                            {
                              attrs: {
                                title: e.$t("homepage.long.betTitle"),
                              },
                            },
                            [
                              i(
                                "van-tabs",
                                {
                                  on: { click: e.gameClick },
                                  model: {
                                    value: e.gameType,
                                    callback: function (t) {
                                      e.gameType = t;
                                    },
                                    expression: "gameType",
                                  },
                                },
                                e._l(e.gemeTypeList, function (e, t) {
                                  return i("van-tab", {
                                    key: t,
                                    attrs: { title: e.name },
                                  });
                                }),
                                1
                              ),
                              i(
                                "van-tabs",
                                {
                                  on: { click: e.timeClick },
                                  model: {
                                    value: e.timeType,
                                    callback: function (t) {
                                      e.timeType = t;
                                    },
                                    expression: "timeType",
                                  },
                                },
                                [
                                  i(
                                    "van-tab",
                                    { attrs: { title: "1min" } },
                                    [
                                      0 == e.gameType
                                        ? i("winList", {
                                          attrs: {
                                            list: e.myEmerdList,
                                            total: e.myEmerdTotal,
                                            page: e.myEmerdPage,
                                          },
                                          on: {
                                            onLeft: e.onLeftPage,
                                            onRight: e.onRightPage,
                                          },
                                        })
                                        : e._e(),
                                      1 == e.gameType
                                        ? i("d5List", {
                                          attrs: {
                                            list: e.myEmerdList,
                                            total: e.myEmerdTotal,
                                            page: e.myEmerdPage,
                                          },
                                          on: {
                                            onLeft: e.onLeftPage,
                                            onRight: e.onRightPage,
                                          },
                                        })
                                        : e._e(),
                                      2 == e.gameType
                                        ? i("k3List", {
                                          attrs: {
                                            list: e.myEmerdList,
                                            total: e.myEmerdTotal,
                                            page: e.myEmerdPage,
                                          },
                                          on: {
                                            onLeft: e.onLeftPage,
                                            onRight: e.onRightPage,
                                          },
                                        })
                                        : e._e(),
                                    ],
                                    1
                                  ),
                                  i(
                                    "van-tab",
                                    { attrs: { title: "3min" } },
                                    [
                                      0 == e.gameType
                                        ? i("winList", {
                                          attrs: {
                                            list: e.myEmerdList,
                                            total: e.myEmerdTotal,
                                            page: e.myEmerdPage,
                                          },
                                          on: {
                                            onLeft: e.onLeftPage,
                                            onRight: e.onRightPage,
                                          },
                                        })
                                        : e._e(),
                                      1 == e.gameType
                                        ? i("d5List", {
                                          attrs: {
                                            list: e.myEmerdList,
                                            total: e.myEmerdTotal,
                                            page: e.myEmerdPage,
                                          },
                                          on: {
                                            onLeft: e.onLeftPage,
                                            onRight: e.onRightPage,
                                          },
                                        })
                                        : e._e(),
                                      2 == e.gameType
                                        ? i("k3List", {
                                          attrs: {
                                            list: e.myEmerdList,
                                            total: e.myEmerdTotal,
                                            page: e.myEmerdPage,
                                          },
                                          on: {
                                            onLeft: e.onLeftPage,
                                            onRight: e.onRightPage,
                                          },
                                        })
                                        : e._e(),
                                    ],
                                    1
                                  ),
                                  i(
                                    "van-tab",
                                    { attrs: { title: "5min" } },
                                    [
                                      0 == e.gameType
                                        ? i("winList", {
                                          attrs: {
                                            list: e.myEmerdList,
                                            total: e.myEmerdTotal,
                                            page: e.myEmerdPage,
                                          },
                                          on: {
                                            onLeft: e.onLeftPage,
                                            onRight: e.onRightPage,
                                          },
                                        })
                                        : e._e(),
                                      1 == e.gameType
                                        ? i("d5List", {
                                          attrs: {
                                            list: e.myEmerdList,
                                            total: e.myEmerdTotal,
                                            page: e.myEmerdPage,
                                          },
                                          on: {
                                            onLeft: e.onLeftPage,
                                            onRight: e.onRightPage,
                                          },
                                        })
                                        : e._e(),
                                      2 == e.gameType
                                        ? i("k3List", {
                                          attrs: {
                                            list: e.myEmerdList,
                                            total: e.myEmerdTotal,
                                            page: e.myEmerdPage,
                                          },
                                          on: {
                                            onLeft: e.onLeftPage,
                                            onRight: e.onRightPage,
                                          },
                                        })
                                        : e._e(),
                                    ],
                                    1
                                  ),
                                  i(
                                    "van-tab",
                                    { attrs: { title: "10min" } },
                                    [
                                      0 == e.gameType
                                        ? i("winList", {
                                          attrs: {
                                            list: e.myEmerdList,
                                            total: e.myEmerdTotal,
                                            page: e.myEmerdPage,
                                          },
                                          on: {
                                            onLeft: e.onLeftPage,
                                            onRight: e.onRightPage,
                                          },
                                        })
                                        : e._e(),
                                      1 == e.gameType
                                        ? i("d5List", {
                                          attrs: {
                                            list: e.myEmerdList,
                                            total: e.myEmerdTotal,
                                            page: e.myEmerdPage,
                                          },
                                          on: {
                                            onLeft: e.onLeftPage,
                                            onRight: e.onRightPage,
                                          },
                                        })
                                        : e._e(),
                                      2 == e.gameType
                                        ? i("k3List", {
                                          attrs: {
                                            list: e.myEmerdList,
                                            total: e.myEmerdTotal,
                                            page: e.myEmerdPage,
                                          },
                                          on: {
                                            onLeft: e.onLeftPage,
                                            onRight: e.onRightPage,
                                          },
                                        })
                                        : e._e(),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]
              ),
            ]),
            i(
              "van-popup",
              {
                style: { maxWidth: "10rem", left: "auto" },
                attrs: {
                  position: "bottom",
                  round: !0,
                  "overlay-style": { zIndex: "99991" },
                  "close-on-click-overlay": !1,
                },
                model: {
                  value: e.longShow2,
                  callback: function (t) {
                    e.longShow2 = t;
                  },
                  expression: "longShow2",
                },
              },
              [
                i("div", { staticClass: "betting-mark color2" }, [
                  i("div", { staticClass: "head" }, [
                    i("div", { staticClass: "box" }, [
                      i("div", { staticClass: "con" }, [
                        e._v(e._s(e.actionItem.lotteryName)),
                      ]),
                      i(
                        "div",
                        {
                          staticClass: "color",
                          style: { color: e.popupColor },
                        },
                        [
                          e._v(e._s(e.$t("homepage.index.Select")) + " "),
                          i("span", { staticClass: "p-l-10" }, [
                            e._v(e._s(e.selectCon)),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                  i("div", { staticClass: "info" }, [
                    i("div", { staticClass: "item c-row c-row-between" }, [
                      i("div", { staticClass: "tit" }, [
                        e._v(e._s(e.$t("homepage.index.money"))),
                      ]),
                      i(
                        "div",
                        { staticClass: "c-row amount-box" },
                        e._l(e.actionItem.Scope, function (t, s) {
                          return i(
                            "div",
                            {
                              key: s,
                              class:
                                e.selectInfo.coin == t ? "li action" : "li",
                              on: {
                                click: function (s) {
                                  return e.changeCount(t);
                                },
                              },
                            },
                            [e._v(e._s(t))]
                          );
                        }),
                        0
                      ),
                    ]),
                    i("div", { staticClass: "item c-row c-row-between" }, [
                      i("div", { staticClass: "tit" }, [
                        e._v(e._s(e.$t("homepage.index.multiply"))),
                      ]),
                      i(
                        "div",
                        { staticClass: "c-row c-row-between stepper-box" },
                        [
                          i(
                            "div",
                            {
                              class:
                                e.selectInfo.count > 1
                                  ? " li minus action"
                                  : "li minus",
                              on: {
                                click: function (t) {
                                  return e.Stepper(1);
                                },
                              },
                            },
                            [e._v("-")]
                          ),
                          i("van-field", {
                            staticClass: "digit-box",
                            attrs: { type: "digit", maxlength: 4 },
                            on: { input: e.changeStep },
                            model: {
                              value: e.selectInfo.count,
                              callback: function (t) {
                                e.$set(e.selectInfo, "count", t);
                              },
                              expression: "selectInfo.count",
                            },
                          }),
                          i(
                            "div",
                            {
                              class:
                                e.selectInfo.count > 0
                                  ? "li plus c-row c-row-middle-center action"
                                  : "li plus c-row c-row-middle-center",
                              style: {
                                backgroundColor:
                                  e.selectInfo.count > 0
                                    ? e.popupColor
                                    : "rgb(240, 240, 240)",
                                color:
                                  e.selectInfo.count > 0 ? "#fff" : "#c8c9cc",
                              },
                              on: {
                                click: function (t) {
                                  return e.Stepper(2);
                                },
                              },
                            },
                            [e._v("+")]
                          ),
                        ],
                        1
                      ),
                    ]),
                    i(
                      "div",
                      { staticClass: "item c-row c-row-middle" },
                      [
                        i(
                          "van-checkbox",
                          {
                            attrs: {
                              shape: "square",
                              "checked-color": "#F4453E",
                            },
                            on: { change: e.checkboxChange },
                            model: {
                              value: e.checked,
                              callback: function (t) {
                                e.checked = t;
                              },
                              expression: "checked",
                            },
                          },
                          [
                            i("div", { staticClass: "agree p-r-15" }, [
                              e._v(e._s(e.$t("homepage.agree"))),
                            ]),
                          ]
                        ),
                        i(
                          "span",
                          {
                            staticClass: "txt",
                            on: {
                              click: function (t) {
                                e.presaleRule = !0;
                              },
                            },
                          },
                          [e._v(e._s(e.$t("homepage.index.presaleRule")))]
                        ),
                      ],
                      1
                    ),
                  ]),
                  i("div", { staticClass: "foot c-row" }, [
                    i(
                      "div",
                      {
                        staticClass: "left",
                        on: {
                          click: function (t) {
                            return e.hideShow1();
                          },
                        },
                      },
                      [e._v(" " + e._s(e.$t("homepage.cancel")) + " ")]
                    ),
                    i(
                      "div",
                      {
                        staticClass: "right",
                        style: { backgroundColor: e.popupColor },
                        on: {
                          click: function (t) {
                            return e.placeBetLong();
                          },
                        },
                      },
                      [
                        i("span", { staticClass: "p-r-5" }, [
                          e._v(e._s(e.$t("homepage.lottery.totalPrice"))),
                        ]),
                        e.utils.isYueNanCurrencySymbol()
                          ? e._e()
                          : i("span", [
                            e._v(
                              e._s(e.utils.getCurrencySymbol()) +
                              " " +
                              e._s(
                                e.utils.numFilter(e.selectInfo.allCoin)
                              )
                            ),
                          ]),
                        e.utils.isYueNanCurrencySymbol()
                          ? i("span", [
                            e._v(
                              e._s(
                                e.utils.numFilter(e.selectInfo.allCoin)
                              ) +
                              " " +
                              e._s(e.utils.getCurrencySymbol()) +
                              " "
                            ),
                          ])
                          : e._e(),
                      ]
                    ),
                  ]),
                ]),
              ]
            ),
            i("Loading", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: e.showLoading,
                  expression: "showLoading",
                },
              ],
            }),
            e._m(0),
            i(
              "div",
              {
                staticClass: "activityBox c-row c-row-middle-center",
                on: { click: e.clickLong },
              },
              [
                i("img", {
                  staticClass: "img",
                  attrs: { width: "55px", height: "55px", src: s("bd2d") },
                }),
              ]
            ),
          ],
          1
        );
      },
        o = [
          function () {
            var e = this,
              t = e.$createElement,
              i = e._self._c || t;
            return i("div", [
              i("audio", { attrs: { id: "voice1", muted: "" } }, [
                i("source", { attrs: { src: s("c296"), type: "audio/mpeg" } }),
              ]),
              i("audio", { attrs: { id: "voice2", muted: "" } }, [
                i("source", { attrs: { src: s("c676"), type: "audio/mpeg" } }),
              ]),
            ]);
          },
        ],
        a =
          (s("4160"),
            s("a15b"),
            s("a434"),
            s("ac1f"),
            s("1276"),
            s("159b"),
            s("ade3")),
        n = s("2241"),
        c = s("2185"),
        r = s("23df"),
        l = s("e0b8"),
        m = {
          name: "Home",
          components: { winList: c["a"], d5List: r["a"], k3List: l["a"] },
          mixins: [n["a"]],
          data: function () {
            var e;
            return (
              (e = {
                volumeShow: localStorage.getItem("volumeShow"),
                Animation: 0,
                presaleRule: !1,
                ruleType: 0,
                ruleShow: !1,
                checked: !0,
                showLoading: !1,
                showIndexRe: -1,
                Amount: 0,
                selectCon: "",
                popupColor: [],
                show: !1,
                markShow: !1,
                type: 0,
                currentGameIndex: 0,
                gameList: [],
                betTypeList: [],
                selectInfo: {
                  coin: 0,
                  count: 1,
                  allCoin: 0,
                  gametype: 0,
                  typeid: 1,
                  issuenumber: "2020",
                  selecttype: 1,
                },
                intv: null,
                num: 0,
                currentInfo: {
                  gameNo: "loading",
                  currentTime: "",
                  beginTime: "",
                  passTime: 180,
                  time1: 0,
                  time2: 0,
                  time3: 0,
                  time4: 0,
                },
                timeHandle: {},
                loadEmerdListTimeHandle: {},
                ProhibitBuyTime: 5,
                recordType: 1,
                EmerdTotal: 0,
                EmerdPage: 1,
                myEmerdTotal1: 0,
                myEmerdPage1: 1,
                NoaverageEmerdTotal: 0,
                NoaverageEmerdPage: 1,
                EmerdList: [],
                myEmerdList1: [],
                NoaverageEmerdList: [],
                resolvelist: [],
                resolvelist1: {},
                resolvelist2: {},
                resolvelist3: {},
                resolvelist4: {},
                resolvelist5: {},
                page: 1,
                longShow: !1,
                longActive: 0,
                longShow2: !1,
                longList: [],
                ServiceTime: "",
                timeHandle2: [[], [], [], []],
                currentInfo2: [],
                Selected: 0,
                actionItem: {},
              }),
              Object(a["a"])(e, "selectCon", ""),
              Object(a["a"])(e, "gemeTypeList", [
                { name: "WinGo" },
                { name: "5D Lotre" },
                { name: "K3 Lotre" },
              ]),
              Object(a["a"])(e, "gameType", 0),
              Object(a["a"])(e, "timeType", 0),
              Object(a["a"])(e, "gameTypeid", 1),
              Object(a["a"])(e, "timeTypeid", 0),
              Object(a["a"])(e, "myEmerdTotal", 0),
              Object(a["a"])(e, "myEmerdPage", 1),
              Object(a["a"])(e, "myEmerdList", []),
              Object(a["a"])(e, "isType", 0),
              Object(a["a"])(e, "loadTime", ""),
              Object(a["a"])(e, "Update", !0),
              Object(a["a"])(e, "position", { x: 0, y: 0 }),
              Object(a["a"])(e, "nx", ""),
              Object(a["a"])(e, "ny", ""),
              Object(a["a"])(e, "dx", ""),
              Object(a["a"])(e, "dy", ""),
              Object(a["a"])(e, "xPum", ""),
              Object(a["a"])(e, "yPum", ""),
              Object(a["a"])(e, "isMove", !1),
              Object(a["a"])(e, "full", !1),
              e
            );
          },
          created: function () {
            var e = this;
            e.getTypeList(), e.getSitemessage(1);
          },
          destroyed: function () {
            clearInterval(this.timeHandle),
              clearInterval(this.loadEmerdListTimeHandle),
              clearInterval(this.loadTime);
            for (var e = this.longList, t = 0; e.length > t; t++)
              clearInterval(this.timeHandle2[t]);
          },
          mounted: function () { },
          methods: {
            clearLong: function () {
              var e = this;
              clearInterval(e.loadTime);
              for (var t = e.longList, s = 0; t.length > s; s++)
                clearInterval(e.timeHandle2[s]);
              e.longShow = !1;
            },
            voicePlay: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1;
              switch (e) {
                case 1:
                  (this.ttsAudio = document.getElementById("voice1")),
                    (this.ttsAudio.currentTime = 0),
                    this.ttsAudio.play();
                  break;
                case 2:
                  (this.ttsAudio = document.getElementById("voice2")),
                    (this.ttsAudio.currentTime = 0),
                    this.ttsAudio.play();
                  break;
                default:
                  break;
              }
            },
            voicePause: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1;
              switch (e) {
                case 1:
                  (this.ttsAudio = document.getElementById("voice1")),
                    this.ttsAudio.pause();
                  break;
                case 2:
                  (this.ttsAudio = document.getElementById("voice2")),
                    this.ttsAudio.pause();
                  break;
                default:
                  break;
              }
            },
            voiceReplay: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1;
              switch (e) {
                case 1:
                  (this.ttsAudio = document.getElementById("voice1")),
                    (this.ttsAudio.currentTime = 0);
                  break;
                case 2:
                  (this.ttsAudio = document.getElementById("voice2")),
                    (this.ttsAudio.currentTime = 0);
                  break;
                default:
                  break;
              }
            },
            volume: function () {
              var e = this;
              1 == e.volumeShow ? (e.volumeShow = 2) : (e.volumeShow = 1),
                localStorage.setItem("volumeShow", e.volumeShow);
            },
            onLeft: function (e) {
              var t = this,
                s = this.NoaverageEmerdPage,
                i = (this.EmerdTotal, this.EmerdPage),
                o = (this.myEmerdTotal1, this.myEmerdPage1),
                a = this.recordType;
              if (1 == a) {
                if (!(s > 1)) return t.$msg(t.$t("homepage.index.firstPage"));
                (t.NoaverageEmerdPage -= 1),
                  t.loadNoaverageEmerdList(t.type, t.NoaverageEmerdPage);
              } else if (2 == a) {
                if (!(i > 1)) return t.$msg(t.$t("homepage.index.firstPage"));
                (t.EmerdPage -= 1), t.loadEmerdList(t.type, t.EmerdPage);
              } else {
                if (!(o > 1)) return t.$msg(t.$t("homepage.index.firstPage"));
                (t.myEmerdPage1 -= 1),
                  t.loadMyEmerdList(t.type, t.myEmerdPage1);
              }
            },
            onRight: function (e) {
              var t = this,
                s = this.NoaverageEmerdPage,
                i = this.NoaverageEmerdTotal,
                o = this.EmerdTotal,
                a = this.EmerdPage,
                n = this.myEmerdTotal1,
                c = this.myEmerdPage1,
                r = this.recordType;
              if (1 == r) {
                if (!(s < i)) return t.$msg(t.$t("homepage.index.lastpage"));
                (t.NoaverageEmerdPage += 1),
                  t.loadNoaverageEmerdList(t.type, t.NoaverageEmerdPage);
              } else if (2 == r) {
                if (!(a < o)) return t.$msg(t.$t("homepage.index.lastpage"));
                (t.EmerdPage += 1), t.loadEmerdList(t.type, t.EmerdPage);
              } else {
                if (!(c < n)) return t.$msg(t.$t("homepage.index.firstPage"));
                (t.myEmerdPage1 += 1),
                  t.loadMyEmerdList(t.type, t.myEmerdPage1);
              }
            },
            getReport: function () {
              var e = this;
              e.$nextTick(function () {
                for (var t = 0; t < e.EmerdList.length; t++)
                  3 == e.recordType
                    ? t < 9 && e.getCanvas(e.EmerdList[t], e.EmerdList[t + 1])
                    : e.EmerdList[t + 1] &&
                    e.getCanvas(e.EmerdList[t], e.EmerdList[t + 1]);
              });
            },
            getCanvas: function (e, t) {
              var s = parseInt(e.Number),
                i = parseInt(t.Number);
              e = document.getElementById("myCanvas" + e.rowId);
              if (e.getContext) {
                var o = e.getContext("2d");
                o.clearRect(0, 0, e.width, e.height),
                  o.beginPath(),
                  o.moveTo(30 * s + 12, 16),
                  s > i
                    ? o.lineTo(30 * i + 12, 150)
                    : o.lineTo(30 * (i - s + s) + 12, 150),
                  (o.strokeStyle = "red"),
                  o.stroke(),
                  o.closePath();
              }
            },
            tab: function (e, t) {
              var s = this;
              (s.type = e),
                (s.currentGameIndex = t),
                clearInterval(s.timeHandle),
                s.loadGameNoInfo(s.type),
                1 == s.recordType
                  ? s.loadNoaverageEmerdList(s.type, (s.page = 1))
                  : 2 == s.recordType
                    ? s.loadEmerdList(s.type, (s.page = 1))
                    : 3 == s.recordType &&
                    s.loadMyEmerdList(s.type, (s.page = 1));
            },
            rule: function (e) {
              var t = this;
              (t.ruleType = e), (t.ruleShow = !0);
            },
            ruleHide: function () {
              var e = this;
              e.ruleShow = !1;
            },
            random: function () {
              this.num;
              var e = this.intv,
                t = this;
              (t.onChack = !0),
                void 0 == e &&
                (e = setInterval(function () {
                  t.num = Math.floor(9 * Math.random());
                }, 50)),
                setTimeout(function () {
                  clearInterval(e),
                    (t.intv = null),
                    t.betting(t.num, "color" + t.num, 1),
                    (t.onChack = !1);
                }, 5e3);
            },
            betting: function (e, t, s) {
              var i = this;
              (i.selectInfo.gametype = s),
                (i.selectInfo.selecttype = e),
                (i.selectInfo.issuenumber = i.currentInfo.gameNo),
                (i.selectInfo.typeid = i.gameList[i.currentGameIndex].TypeID),
                0 == e || 2 == e || 4 == e || 6 == e || 8 == e
                  ? ((i.selectCon = e), (i.popupColor = "#FB4E4E"))
                  : 1 == e || 3 == e || 5 == e || 7 == e || 9 == e
                    ? ((i.selectCon = e), (i.popupColor = "#5CBA47"))
                    : ((i.popupColor = t), (i.selectCon = e)),
                i.clearLong(),
                (i.show = !0);
            },
            hideShow: function () {
              var e = this;
              (e.show = !1),
                (e.selectInfo.coin = e.betTypeList[e.currentGameIndex][0]),
                (e.selectInfo.allCoin = e.betTypeList[e.currentGameIndex][0]),
                (e.selectInfo.count = 1);
            },
            changeCount: function (e) {
              var t = this;
              (t.selectInfo.coin = e), t.jisuanCoin();
            },
            TaskCount: function (e) {
              var t = this;
              (t.selectInfo.count = e), t.jisuanCoin();
            },
            changeStep: function (e) {
              var t = this;
              e > 0 && ((t.selectInfo.count = parseInt(e)), t.jisuanCoin());
            },
            jisuanCoin: function () {
              var e = this;
              e.selectInfo.allCoin = e.selectInfo.coin * e.selectInfo.count;
            },
            checkboxChange: function (e) {
              console.log(e);
            },
            recording: function (e) {
              var t = this;
              (t.recordType = e),
                1 == t.recordType
                  ? t.loadNoaverageEmerdList(t.type, (t.page = 1))
                  : 2 == t.recordType
                    ? t.loadEmerdList(t.type, (t.page = 1))
                    : 3 == t.recordType &&
                    t.loadMyEmerdList(t.type, (t.page = 1));
            },
            Stepper: function (e) {
              var t = this;
              switch (e) {
                case 1:
                  t.selectInfo.count > 1 &&
                    (t.selectInfo.count--, t.jisuanCoin());
                  break;
                case 2:
                  t.selectInfo.count++, t.jisuanCoin();
                  break;
                default:
              }
            },
            Emerd: function (e) {
              var t = this;
              t.showIndexRe == e ? (t.showIndexRe = -1) : (t.showIndexRe = e);
            },
            placeBet: function () {
              var e = this;
              e.utils.throttle(e.getChack, 2e3);
            },
            getChack: function () {
              var e = this;
              if (((e.showLoading = !0), 0 == e.checked))
                return e.$msg(e.$t("homepage.index.presaleRuleTit"));
              var t = this.selectInfo,
                s = t.coin,
                i = t.count,
                o = (t.allCoin, t.gametype),
                a = t.selecttype,
                n = t.typeid,
                c = t.issuenumber;
              e.$api
                .GameBetting({
                  uid: e.UserInfo.UserId,
                  sign: e.UserInfo.Sign,
                  amount: s,
                  betcount: i,
                  gametype: o,
                  selecttype: a,
                  typeid: n,
                  issuenumber: c,
                })
                .then(function (t) {
                  t.success
                    ? (e.$msg(t.msg),
                      (e.showLoading = !1),
                      (e.show = !1),
                      (e.selectInfo.count = 1),
                      (e.selectInfo.coin =
                        e.betTypeList[e.currentGameIndex][0]),
                      (e.selectInfo.allCoin =
                        e.betTypeList[e.currentGameIndex][0]),
                      3 == e.recordType &&
                      e.loadMyEmerdList(e.type, (e.page = 1)),
                      e.getWinsUserAmount())
                    : (e.$msg(t.msg),
                      (e.show = !1),
                      (e.selectInfo.coin =
                        e.betTypeList[e.currentGameIndex][0]),
                      (e.selectInfo.allCoin =
                        e.betTypeList[e.currentGameIndex][0]),
                      (e.selectInfo.count = 1),
                      (e.showLoading = !1));
                })
                .catch(function (t) {
                  (e.showLoading = !0),
                    setTimeout(function () {
                      e.showLoading = !1;
                    }, 1e4),
                    e.$msg(e.$t("homepage.network"));
                });
            },
            getTypeList: function () {
              var e = this;
              (e.showLoading = !0),
                e.$api
                  .GetTypeList({})
                  .then(function (t) {
                    if (((e.showLoading = !1), t.success)) {
                      (e.gameList = t.data.typelist),
                        0 == e.type && (e.type = e.gameList[0].TypeID);
                      for (var s = 0; s < e.gameList.length; ++s)
                        if (e.gameList.TypeID == e.type) {
                          e.currentGameIndex = s;
                          break;
                        }
                      for (var i = 0; i < t.data.typelist.length; ++i)
                        t.data.typelist[i].Scope &&
                          null != t.data.typelist[i].Scope &&
                          (e.betTypeList[i] =
                            t.data.typelist[i].Scope.split("|"));
                      (e.selectInfo.coin =
                        e.betTypeList[e.currentGameIndex][0]),
                        (e.selectInfo.allCoin =
                          e.betTypeList[e.currentGameIndex][0]),
                        e.reLoadAmonut(e.type);
                    }
                  })
                  .catch(function (t) {
                    (e.showLoading = !0),
                      setTimeout(function () {
                        e.showLoading = !1;
                      }, 1e4),
                      e.$msg(e.$t("homepage.network"));
                  });
            },
            passTime: function () {
              var e = this;
              if (e.gameList.length < 1) console.log("gameList.length == 0");
              else {
                var t = new Date(e.currentInfo.currentTime).getTime(),
                  s = new Date(e.currentInfo.beginTime).getTime(),
                  i = (t - s) / 1e3;
                if (
                  (i > 60 * e.gameList[e.currentGameIndex].IntervalM &&
                    (i = 60 * e.gameList[e.currentGameIndex].IntervalM),
                    (e.currentInfo.passTime =
                      60 * e.gameList[e.currentGameIndex].IntervalM - i),
                    e.currentInfo.passTime < 0)
                ) {
                  var o =
                    "An error occurred, please contact customer serviceã€‚The game time is " +
                    e.gameList[e.currentGameIndex].IntervalM +
                    " minutes,start time is " +
                    e.currentInfo.beginTime +
                    ",current time is" +
                    e.currentInfo.currentTime +
                    "!";
                  e.$dialog
                    .alert({
                      title: e.$t("homepage.tips"),
                      confirmButtonText: e.$t("homepage.confirm"),
                      message: o,
                    })
                    .then(function () {
                      localStorage.removeItem("UserInfo"),
                        e.$router.push("/login");
                    });
                } else e.subTime();
              }
            },
            subTime: function () {
              var e = this;
              clearInterval(e.timeHandle),
                e.subSubTime(!1),
                (e.timeHandle = setInterval(function () {
                  e.subSubTime();
                }, 1e3));
            },
            subSubTime: function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0],
                t = this;
              if (
                (this.currentInfo.passTime <= this.ProhibitBuyTime &&
                  (this.show = !1),
                  1 == t.volumeShow &&
                  (this.currentInfo.passTime <= this.ProhibitBuyTime &&
                    this.currentInfo.passTime > 1
                    ? this.voicePlay(1)
                    : 1 == this.currentInfo.passTime && this.voicePlay(2)),
                  this.currentInfo.passTime > 0)
              ) {
                var s = this.currentInfo.passTime;
                (this.currentInfo.time2 = parseInt(s / 60)),
                  (this.currentInfo.time3 = parseInt((s % 60) / 10)),
                  (this.currentInfo.time4 = parseInt(s % 10)),
                  this.currentInfo.passTime--;
              } else
                clearInterval(t.timeHandle),
                  e && this.reLoadAmonut(t.type),
                  1 == t.NoaverageEmerdPage &&
                  1 == t.recordType &&
                  (clearInterval(t.loadEmerdListTimeHandle),
                    (t.loadEmerdListTimeHandle = setInterval(function () {
                      t.currentInfo.gameNo - 1 !=
                        t.NoaverageEmerdList[0].IssueNumber
                        ? (console.log("èŽ·å–æ¸¸æˆè®°å½•é”™è¯¯ï¼Œé‡æ–°èŽ·å–"),
                          t.loadNoaverageEmerdList(t.type, 1))
                        : clearInterval(t.loadEmerdListTimeHandle);
                    }, 2e3)));
            },
            reLoadAmonut: function (e) {
              var t = this;
              t.loadGameNoInfo(e),
                t.getWinsUserAmount(),
                1 == t.recordType
                  ? ((t.NoaverageEmerdList = []),
                    t.loadNoaverageEmerdList(e, (t.page = 1)))
                  : 2 == t.recordType
                    ? ((t.EmerdList = []), t.loadEmerdList(e, (t.page = 1)))
                    : 3 == t.recordType &&
                    ((t.myEmerdList = []), t.loadMyEmerdList(e, (t.page = 1)));
            },
            loadGameNoInfo: function (e) {
              var t = this,
                s = this;
              (s.showLoading = !0),
                clearInterval(s.timeHandle),
                s.$api
                  .GameIssueNo({ typeid: e })
                  .then(function (e) {
                    (s.showLoading = !1),
                      e.success
                        ? ((t.currentInfo.gameNo = e.data.IssueNumber),
                          (t.currentInfo.currentTime = e.data.ServiceTime),
                          (t.currentInfo.beginTime = e.data.StartTime),
                          t.passTime())
                        : s.$msg(e.msg);
                  })
                  .catch(function (e) {
                    (s.showLoading = !0),
                      setTimeout(function () {
                        s.showLoading = !1;
                      }, 1e4),
                      s.$msg(s.$t("homepage.network"));
                  });
            },
            loadNoaverageEmerdList: function (e, t) {
              var s = this;
              (s.showLoading = !0),
                s.$api
                  .GetNoaverageEmerdList({ typeid: e, pageno: t })
                  .then(function (e) {
                    (s.showLoading = !1),
                      e.success
                        ? ((s.NoaverageEmerdTotal = e.data.totalpage),
                          (s.NoaverageEmerdList = e.data.gameslist),
                          (s.NoaverageEmerdPage = e.data.pageno))
                        : s.$msg(e.msg);
                  })
                  .catch(function (e) {
                    (s.showLoading = !0),
                      setTimeout(function () {
                        s.showLoading = !1;
                      }, 1e4),
                      s.$msg(s.$t("homepage.network"));
                  });
            },
            loadEmerdList: function (e, t) {
              var s = this;
              (s.showLoading = !0),
                s.$api
                  .GetEmerdList({ typeid: e, pageno: t })
                  .then(function (e) {
                    (s.showLoading = !1),
                      e.success
                        ? ((s.EmerdTotal = e.data.totalpage),
                          (s.EmerdList = e.data.gameslist),
                          (s.EmerdPage = e.data.pageno),
                          (s.resolvelist = e.data.resolvelist),
                          (s.resolvelist1 = e.data.resolvelist[0]),
                          (s.resolvelist2 = e.data.resolvelist[1]),
                          (s.resolvelist3 = e.data.resolvelist[2]),
                          (s.resolvelist4 = e.data.resolvelist[3]),
                          (s.resolvelist5 = e.data.resolvelist[4]),
                          s.getReport())
                        : s.$msg(e.msg);
                  })
                  .catch(function (e) {
                    (s.showLoading = !0),
                      setTimeout(function () {
                        s.showLoading = !1;
                      }, 1e4),
                      s.$msg(s.$t("homepage.network"));
                  });
            },
            loadMyEmerdList: function (e, t) {
              var s = this;
              (s.showLoading = !0),
                s.$api
                  .GetMyEmerdList({
                    typeid: e,
                    pageno: t,
                    uid: s.UserInfo.UserId,
                    sign: s.UserInfo.Sign,
                  })
                  .then(function (e) {
                    (s.showLoading = !1),
                      e.success
                        ? ((s.myEmerdTotal1 = e.data.totalpage),
                          (s.myEmerdPage1 = e.data.pageno),
                          (s.myEmerdList1 = e.data.myorderlist))
                        : s.$msg(e.msg);
                  })
                  .catch(function (e) {
                    (s.showLoading = !0),
                      setTimeout(function () {
                        s.showLoading = !1;
                      }, 1e4),
                      s.$msg(s.$t("homepage.network"));
                  });
            },
            clickLong: function (e) {
              var t = this;
              (t.longShow = !t.longShow),
                t.longShow ? t.GetlongDragon() : t.clearLong();
            },
            closeLong: function () {
              var e = this;
              (e.longShow = !1),
                (moveBox.style.left = "50%"),
                (moveBox.style.transform = "translate(-50%,0)"),
                (moveBox.style.top = "100px"),
                clearInterval(e.loadTime);
              for (var t = e.longList, s = 0; t.length > s; s++)
                clearInterval(this.timeHandle[s]);
            },
            fullLong: function () {
              var e = this;
              e.full = !e.full;
            },
            onLeftPage: function (e) {
              var t = this,
                s = (this.myEmerdTotal, this.myEmerdPage),
                i = t.gameTypeid + t.timeType;
              if (!(s > 1)) return t.$msg(t.$t("homepage.index.firstPage"));
              (t.myEmerdPage -= 1),
                (1 != i && 2 != i && 3 != i && 4 != i) ||
                t.loadMyWinEmerdList(i, t.myEmerdPage),
                (5 != i && 6 != i && 7 != i && 8 != i) ||
                t.loadMy5DEmerdList(i, t.myEmerdPage),
                (9 != i && 10 != i && 11 != i && 12 != i) ||
                t.loadMyK3EmerdList(i, t.myEmerdPage);
            },
            onRightPage: function (e) {
              var t = this,
                s = t.gameTypeid + t.timeType,
                i = this.myEmerdTotal,
                o = this.myEmerdPage;
              if (!(o < i)) return t.$msg(t.$t("homepage.index.firstPage"));
              (t.myEmerdPage += 1),
                (1 != s && 2 != s && 3 != s && 4 != s) ||
                t.loadMyWinEmerdList(s, t.myEmerdPage),
                (5 != s && 6 != s && 7 != s && 8 != s) ||
                t.loadMy5DEmerdList(s, t.myEmerdPage),
                (9 != s && 10 != s && 11 != s && 12 != s) ||
                t.loadMyK3EmerdList(s, t.myEmerdPage);
            },
            gameClick: function (e) {
              var t = this;
              (t.gameType = e),
                0 == e
                  ? ((t.gameTypeid = 1),
                    (t.timeTypeid = t.gameTypeid + t.timeType),
                    t.loadMyWinEmerdList(t.timeTypeid, 1))
                  : 1 == e
                    ? ((t.gameTypeid = 5),
                      (t.timeTypeid = t.gameTypeid + t.timeType),
                      t.loadMy5DEmerdList(t.timeTypeid, 1))
                    : ((t.gameTypeid = 9),
                      (t.timeTypeid = t.gameTypeid + t.timeType),
                      t.loadMyK3EmerdList(t.timeTypeid, 1));
            },
            timeClick: function (e) {
              var t = this;
              (t.timeType = e),
                (t.timeTypeid = t.gameTypeid + e),
                (1 != t.timeTypeid &&
                  2 != t.timeTypeid &&
                  3 != t.timeTypeid &&
                  4 != t.timeTypeid) ||
                t.loadMyWinEmerdList(t.timeTypeid, 1),
                (5 != t.timeTypeid &&
                  6 != t.timeTypeid &&
                  7 != t.timeTypeid &&
                  8 != t.timeTypeid) ||
                t.loadMy5DEmerdList(t.timeTypeid, 1),
                (9 != t.timeTypeid &&
                  10 != t.timeTypeid &&
                  11 != t.timeTypeid &&
                  12 != t.timeTypeid) ||
                t.loadMyK3EmerdList(t.timeTypeid, 1);
            },
            loadMyWinEmerdList: function (e, t) {
              var s = this;
              (s.showLoading = !0),
                s.$api
                  .GetMyEmerdList({
                    typeid: e,
                    pageno: t,
                    uid: s.UserInfo.UserId,
                    sign: s.UserInfo.Sign,
                  })
                  .then(function (e) {
                    (s.showLoading = !1),
                      e.success
                        ? ((s.myEmerdTotal = e.data.totalpage),
                          (s.myEmerdPage = e.data.pageno),
                          (s.myEmerdList = e.data.myorderlist))
                        : s.$msg(e.msg);
                  })
                  .catch(function (e) {
                    (s.showLoading = !0),
                      setTimeout(function () {
                        s.showLoading = !1;
                      }, 1e4),
                      s.$msg(s.$t("homepage.network"));
                  });
            },
            loadMy5DEmerdList: function (e, t) {
              var s = this;
              (s.showLoading = !0),
                s.$api
                  .GetMy5DEmerdList({
                    typeid: e,
                    pageno: t,
                    uid: s.UserInfo.UserId,
                    sign: s.UserInfo.Sign,
                  })
                  .then(function (e) {
                    if (((s.showLoading = !1), e.success)) {
                      for (var t = 0; e.data.myorderlist.length > t; t++) {
                        var i = e.data.myorderlist[t].SelectType.split("|");
                        e.data.myorderlist[t].SelectType = i;
                      }
                      (s.myEmerdTotal = e.data.totalpage),
                        (s.myEmerdPage = e.data.pageno),
                        (s.myEmerdList = e.data.myorderlist);
                    } else s.$msg(e.msg);
                  })
                  .catch(function (e) {
                    (s.showLoading = !0),
                      setTimeout(function () {
                        s.showLoading = !1;
                      }, 1e4),
                      s.$msg(s.$t("homepage.network"));
                  });
            },
            loadMyK3EmerdList: function (e, t) {
              var s = this;
              (s.showLoading = !0),
                s.$api
                  .GetMyK3EmerdList({
                    typeid: e,
                    pageno: t,
                    uid: s.UserInfo.UserId,
                    sign: s.UserInfo.Sign,
                  })
                  .then(function (e) {
                    if (((s.showLoading = !1), e.success)) {
                      for (var t = 0; e.data.myorderlist.length > t; t++) {
                        var i = [],
                          o = e.data.myorderlist[t].GameType.split(","),
                          a = e.data.myorderlist[t].SelectType.split(",");
                        i.push(o, a);
                        for (var n = 0; o.length > n; n++)
                          if ("1" == o[n] || "2" == o[n] || "3" == o[n])
                            (e.data.myorderlist[t].gameType = 1),
                              (e.data.myorderlist[t].oneList = a);
                          else if ("5" == o[n] || "6" == o[n]) {
                            for (
                              var c = [], r = [], l = [], m = 0;
                              a.length > m;
                              m++
                            ) {
                              if (
                                "|11|" == a[m] ||
                                "|22|" == a[m] ||
                                "|33|" == a[m] ||
                                "|44|" == a[m] ||
                                "|55|" == a[m] ||
                                "|66|" == a[m]
                              ) {
                                var d = a[m].split("|");
                                d.pop(), d.shift(), c.push(d.join());
                              }
                              if (
                                ":11:" == a[m] ||
                                ":22:" == a[m] ||
                                ":33:" == a[m] ||
                                ":44:" == a[m] ||
                                ":55:" == a[m] ||
                                ":66:" == a[m]
                              ) {
                                var u = a[m].split(":");
                                u.pop(), u.shift(), r.push(u.join());
                              }
                              if (
                                ":1:" == a[m] ||
                                ":2:" == a[m] ||
                                ":3:" == a[m] ||
                                ":4:" == a[m] ||
                                ":5:" == a[m] ||
                                ":6:" == a[m]
                              ) {
                                var p = a[m].split(":");
                                p.pop(), p.shift(), l.push(p.join());
                              }
                            }
                            s.selectNum(r, l),
                              (e.data.myorderlist[t].gameType = 2),
                              (e.data.myorderlist[t].oneList = c),
                              (e.data.myorderlist[t].towList = s.numTowList);
                          } else if ("7" == o[n] || "8" == o[n]) {
                            var v = [],
                              g = !1;
                            for (m = 0; a.length > m; m++) {
                              if (
                                "|111|" == a[m] ||
                                "|222|" == a[m] ||
                                "|333|" == a[m] ||
                                "|444|" == a[m] ||
                                "|555|" == a[m] ||
                                "|666|" == a[m]
                              ) {
                                var f = a[m].split("|");
                                f.pop(), f.shift(), v.push(f.join());
                              }
                              "|AAA|" == a[m] && (g = !0),
                                (e.data.myorderlist[t].oneList = v),
                                (e.data.myorderlist[t].towList = g),
                                (e.data.myorderlist[t].gameType = 3);
                            }
                          } else if (
                            "9" == o[n] ||
                            "10" == o[n] ||
                            "4" == o[n]
                          ) {
                            var h = [],
                              y = !1,
                              _ = [];
                            for (m = 0; a.length > m; m++) {
                              if (
                                "|1|" == a[m] ||
                                "|2|" == a[m] ||
                                "|3|" == a[m] ||
                                "|4|" == a[m] ||
                                "|5|" == a[m] ||
                                "|6|" == a[m]
                              ) {
                                var b = a[m].split("|");
                                b.pop(), b.shift(), h.push(b.join());
                              }
                              if (
                                ("|ABC|" == a[m] && (y = !0),
                                  ".1." == a[m] ||
                                  ".2." == a[m] ||
                                  ".3." == a[m] ||
                                  ".4." == a[m] ||
                                  ".5." == a[m] ||
                                  ".6." == a[m])
                              ) {
                                var w = a[m].split(".");
                                w.pop(), w.shift(), _.push(w.join());
                              }
                            }
                            (e.data.myorderlist[t].oneList = h),
                              (e.data.myorderlist[t].towList = y),
                              (e.data.myorderlist[t].threeList = _),
                              (e.data.myorderlist[t].gameType = 4);
                          }
                      }
                      (s.myEmerdTotal = e.data.totalpage),
                        (s.myEmerdPage = e.data.pageno),
                        (s.myEmerdList = e.data.myorderlist);
                    } else s.$msg(e.msg);
                  })
                  .catch(function (e) {
                    console.log(e),
                      (s.showLoading = !0),
                      setTimeout(function () {
                        s.showLoading = !1;
                      }, 1e4),
                      s.$msg(s.$t("homepage.network"));
                  });
            },
            selectNum: function (e, t) {
              for (var s = this, i = [], o = 0; e.length > o; o++) {
                for (var a = e[o], n = [], c = 0; t.length > c; c++)
                  n.push(t[c]);
                if (n.length > 0) {
                  var r = n.sort().join(",");
                  i.push(a + "|" + r);
                }
              }
              s.numTowList = i.sort();
            },
            onClick: function (e) {
              var t = this;
              1 == e
                ? t.loadMyWinEmerdList(1, t.myEmerdPage)
                : (clearInterval(t.timeHandle),
                  (t.Update = !0),
                  t.utils.throttle(t.GetlongDragon, 1e3)),
                console.log(e);
            },
            hideShow1: function () {
              var e = this;
              (e.longShow2 = !1),
                (e.longList[e.Selected].action = 0),
                (e.selectInfo.coin = e.actionItem.Scope[0]),
                (e.selectInfo.allCoin = e.actionItem.Scope[0]),
                (e.selectInfo.count = 1),
                (e.actionItem = {});
            },
            bet: function (e, t, s, i, o) {
              var a = this;
              (a.Selected = t),
                (a.longList[t].action = s),
                (a.actionItem = e),
                (a.selectCon = i),
                (a.selectInfo.coin = e.Scope[0]),
                (a.selectInfo.typeid = e.Type),
                (a.selectInfo.gametype = e.BettingGameType),
                (a.popupColor = "#FB4E4E"),
                5 == e.Type ||
                  6 == e.Type ||
                  7 == e.Type ||
                  8 == e.Type ||
                  9 == e.Type ||
                  10 == e.Type ||
                  11 == e.Type ||
                  12 == e.Type
                  ? (a.selectInfo.selecttype =
                    "big" == o ? "H" : "small" == o ? "L" : o)
                  : (a.selectInfo.selecttype = o),
                console.log(a.selectInfo.selecttype),
                (a.selectInfo.issuenumber = e.IssueNumber),
                (a.longShow2 = !0);
            },
            placeBetLong: function () {
              var e = this;
              if ((console.log(e.selectInfo.typeid), 0 == e.checked))
                return e.$msg(e.$t("homepage.index.presaleRuleTit"));
              (1 != e.selectInfo.typeid &&
                2 != e.selectInfo.typeid &&
                3 != e.selectInfo.typeid &&
                4 != e.selectInfo.typeid) ||
                e.utils.throttle(e.WingetChack, 2e3),
                (5 != e.selectInfo.typeid &&
                  6 != e.selectInfo.typeid &&
                  7 != e.selectInfo.typeid &&
                  8 != e.selectInfo.typeid) ||
                e.utils.throttle(e.DgetChack, 2e3),
                (9 != e.selectInfo.typeid &&
                  10 != e.selectInfo.typeid &&
                  11 != e.selectInfo.typeid &&
                  12 != e.selectInfo.typeid) ||
                e.utils.throttle(e.K3getChack, 2e3);
            },
            WingetChack: function () {
              var e = this;
              e.showLoading = !0;
              var t = this.selectInfo,
                s = t.coin,
                i = t.count,
                o = (t.allCoin, t.gametype),
                a = t.selecttype,
                n = t.typeid,
                c = t.issuenumber;
              e.$api
                .GameBetting({
                  uid: e.UserInfo.UserId,
                  sign: e.UserInfo.Sign,
                  amount: s,
                  betcount: i,
                  gametype: o,
                  selecttype: a,
                  typeid: n,
                  issuenumber: c,
                })
                .then(function (t) {
                  t.success
                    ? (e.$msg(t.msg),
                      (e.showLoading = !1),
                      (e.longShow2 = !1),
                      (e.selectInfo.count = 1),
                      (e.selectInfo.coin = e.actionItem.Scope[0]),
                      (e.selectInfo.allCoin = e.actionItem.Scope[0]),
                      (e.longList[e.Selected].action = -1),
                      (e.actionItem = {}),
                      e.getWinsUserAmount())
                    : (e.$msg(t.msg),
                      (e.longShow2 = !1),
                      (e.selectInfo.coin = e.actionItem.Scope[0]),
                      (e.selectInfo.allCoin = e.actionItem.Scope[0]),
                      (e.selectInfo.count = 1),
                      (e.longList[e.Selected].action = -1),
                      (e.actionItem = {}),
                      (e.showLoading = !1));
                })
                .catch(function (t) {
                  (e.showLoading = !0),
                    setTimeout(function () {
                      e.showLoading = !1;
                    }, 1e4),
                    e.$msg(e.$t("homepage.network"));
                });
            },
            DgetChack: function () {
              var e = this;
              e.showLoading = !0;
              var t = this.selectInfo,
                s = t.coin,
                i = t.count,
                o = (t.allCoin, t.gametype),
                a = t.selecttype,
                n = t.typeid,
                c = t.issuenumber;
              e.$api
                .SetGame5DBetting({
                  uid: e.UserInfo.UserId,
                  sign: e.UserInfo.Sign,
                  amount: s,
                  betcount: i,
                  gametype: o,
                  selecttype: a,
                  typeid: n,
                  issuenumber: c,
                })
                .then(function (t) {
                  t.success
                    ? (e.$msg(t.msg),
                      (e.showLoading = !1),
                      (e.longShow2 = !1),
                      (e.selectInfo.count = 1),
                      (e.selectInfo.coin = e.actionItem.Scope[0]),
                      (e.selectInfo.allCoin = e.actionItem.Scope[0]),
                      (e.longList[e.Selected].action = -1),
                      (e.actionItem = {}),
                      e.getWinsUserAmount())
                    : (e.$msg(t.msg),
                      (e.showLoading = !1),
                      (e.longShow2 = !1),
                      (e.selectInfo.count = 1),
                      (e.selectInfo.coin = e.actionItem.Scope[0]),
                      (e.selectInfo.allCoin = e.actionItem.Scope[0]),
                      (e.longList[e.Selected].action = -1),
                      (e.actionItem = {}));
                })
                .catch(function (t) {
                  (e.showLoading = !0),
                    setTimeout(function () {
                      e.showLoading = !1;
                    }, 1e4),
                    e.$msg(e.$t("homepage.network"));
                });
            },
            K3getChack: function () {
              var e = this;
              e.showLoading = !0;
              var t = this.selectInfo,
                s = t.coin,
                i = t.count,
                o = (t.allCoin, t.gametype),
                a = t.selecttype,
                n = t.typeid,
                c = t.issuenumber;
              e.$api
                .SetGameK3Betting({
                  uid: e.UserInfo.UserId,
                  sign: e.UserInfo.Sign,
                  amount: s,
                  betcount: i,
                  afew: 1,
                  gametype: o,
                  selecttype: a,
                  typeid: n,
                  issuenumber: c,
                })
                .then(function (t) {
                  t.success
                    ? (e.$msg(t.msg),
                      (e.showLoading = !1),
                      (e.longShow2 = !1),
                      (e.selectInfo.count = 1),
                      (e.selectInfo.coin = e.actionItem.Scope[0]),
                      (e.selectInfo.allCoin = e.actionItem.Scope[0]),
                      (e.longList[e.Selected].action = -1),
                      (e.actionItem = {}),
                      e.getWinsUserAmount())
                    : (e.$msg(t.msg),
                      (e.showLoading = !1),
                      (e.longShow2 = !1),
                      (e.selectInfo.count = 1),
                      (e.selectInfo.coin = e.actionItem.Scope[0]),
                      (e.selectInfo.allCoin = e.actionItem.Scope[0]),
                      (e.longList[e.Selected].action = -1),
                      (e.actionItem = {}));
                })
                .catch(function (t) {
                  console.log(t),
                    (e.showLoading = !0),
                    setTimeout(function () {
                      e.showLoading = !1;
                    }, 1e4),
                    e.$msg(e.$t("homepage.network"));
                });
            },
            GetlongDragon: function () {
              var e = this;
              e.$api
                .GetlongDragon({ typeid: 1 })
                .then(function (t) {
                  if (t.success) {
                    e.ServiceTime = t.data.date.ServiceTime;
                    var s = t.data.list,
                      i = [];
                    s.forEach(function (t, s) {
                      var o = new Date(e.ServiceTime).getTime(),
                        a = new Date(t.StartTime).getTime(),
                        n = (o - a) / 1e3;
                      n > 60 * t.IntervalM && (n = 60 * t.IntervalM);
                      var c = Math.floor(60 * t.IntervalM - n);
                      (t.Scope = t.Scope.split("|")),
                        i.push({
                          passTime: c,
                          time1: 0,
                          time2: parseInt(c / 60),
                          time3: parseInt((c % 60) / 10),
                          time4: parseInt(c % 10),
                        }),
                        e.timeHandle2[s] && clearInterval(e.timeHandle2[s]),
                        (e.timeHandle2[s] = setInterval(function () {
                          e.subSubTime1(s);
                        }, 1e3));
                    }),
                      (e.longList = s),
                      (e.currentInfo2 = i),
                      e.load();
                  } else e.$msg(t.msg);
                })
                .catch(function (t) {
                  console.log(t),
                    (e.showLoading = !0),
                    setTimeout(function () {
                      e.showLoading = !1;
                    }, 1e4),
                    e.$msg(e.$t("homepage.network"));
                });
            },
            load: function () {
              var e = this;
              clearInterval(e.loadTime),
                (e.loadTime = setInterval(function () {
                  e.utils.throttle(e.GetlongDragon, 2e3), (e.Update = !1);
                }, 1e4));
            },
            subSubTime1: function (e) {
              var t = this;
              if (
                (t.currentInfo2[t.Selected] &&
                  t.currentInfo2[t.Selected].passTime < t.ProhibitBuyTime &&
                  ((t.showLong2 = !1), (t.actionItem = [])),
                  t.currentInfo2[e])
              )
                if (t.currentInfo2[e].passTime > 0) {
                  var s = t.currentInfo2[e].passTime;
                  (t.currentInfo2[e].time1 = 0),
                    (t.currentInfo2[e].time2 = parseInt(s / 60)),
                    (t.currentInfo2[e].time3 = parseInt((s % 60) / 10)),
                    (t.currentInfo2[e].time4 = parseInt(s % 10)),
                    t.currentInfo2[e].passTime--,
                    t.$set(t.currentInfo2, e, {
                      passTime: t.currentInfo2[e].passTime,
                      time1: 0,
                      time2: parseInt(t.currentInfo2[e].passTime / 60),
                      time3: parseInt((t.currentInfo2[e].passTime % 60) / 10),
                      time4: parseInt(t.currentInfo2[e].passTime % 10),
                    });
                } else
                  clearInterval(t.timeHandle2[e]),
                    t.longList.splice(e, 1),
                    t.currentInfo2.splice(e, 1),
                    (t.Update = !0),
                    t.utils.throttle(t.GetlongDragon, 2e3);
            },
            mousedown: function (e) {
              var t;
              (t = e.touches ? e.touches[0] : e),
                (this.position.x = t.clientX),
                (this.position.y = t.clientY),
                (this.dx = moveBox.offsetLeft),
                (this.dy = moveBox.offsetTop),
                (this.isMove = !0);
            },
            mousemove: function (e) {
              var t;
              this.isMove &&
                ((t = e.touches ? e.touches[0] : e),
                  (this.nx = t.clientX - this.position.x),
                  (this.ny = t.clientY - this.position.y),
                  (this.xPum = this.dx + this.nx),
                  (this.yPum = this.dy + this.ny),
                  (moveBox.style.left = this.xPum + "px"),
                  (moveBox.style.top = this.yPum + "px"),
                  document.addEventListener(
                    "touchmove",
                    function () {
                      e.preventDefault();
                    },
                    !1
                  ));
            },
            mouseup: function () {
              this.isMove = !1;
            },
          },
        },
        d = m,
        u = (s("05af"), s("2877")),
        p = Object(u["a"])(d, i, o, !1, null, "1144ed7e", null);
      t["default"] = p.exports;
    },
    "70fe": function (e, t, s) {
      e.exports = s.p + "img/icon_clock-red.a9c4fa70.png";
    },
    8086: function (e, t, s) {
      e.exports = s.p + "img/volume-up-line.86a80551.png";
    },
    "8ebb": function (e, t, s) {
      e.exports = s.p + "img/icon_clock-gerrn.6a5ee4ac.png";
    },
    "98d9": function (e, t, s) {
      e.exports = s.p + "img/icon_wallet.86908b64.png";
    },
    "99ea": function (e, t, s) { },
    ade3: function (e, t, s) {
      "use strict";
      function i(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
            : (e[t] = s),
          e
        );
      }
      s.d(t, "a", function () {
        return i;
      });
    },
    b7a9: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAFNQDtUAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIqADAAQAAAABAAAAIgAAAAACeqFUAAAFEElEQVRYCbWYa2ibVRjH86aRpUSxkc2pqCA6wXvZ+sXpJl7q3FCcrAjGbeCnMi8xxfW2L36qbdLSlrJO0C/OjSkqU9HZVikyLxMvc471k58UhFmrqLQmhTaJv/+7nMObW5OG5cDJ85zn8n+e85zL+77x+XJtYGBgwfBFtL+/P1skdAWFmng8fou1lBLcu7yCXQheK3LFLWqtLIP/hB0YRqCFUX2FAnmCGXOdEonEo8a7FJWzP51Of1RKmScbGhpaC9pTzGFfnoKBScHxKhCechznhmw2e2tvb+/fVidrUO6wAg+CD8V7XoWXd5MFbpdX6OUJt8c7Ls0TIlNa4/ONjo6u9xMibyZe41Qq9btvcHAwZObsVYKc1Nh6IzgO2hOu0HHSPT09gTwDDdQw/ADDx8Uzi58gP9LXI9sO9dMlbwLgX/FqNkoulQWqfNkFVflfAm0F9GQgENi8vLx8ygXJAWwE4Ex512KNrQHMGyB/U2xSnURAAeY3SFrlj2IFrIaGhkiAuc0sLS3J1Nangp9Vk8VUJpO5z6020r+UFtPabC0qMNguMotmVimYF91UHWWW/mR3d7fd5QQJg3uUvoM+xyJcaeLkgRjhyMhI0+LiYpzxQ/RrAJyhHwT0sLHx0jwQjvBVnPfzMsApDZmkz9I3UTtzX71FFhFktlkQpvIihqM4TzBPpVzUOB93srnOKoDZ8jJyQXQl6cZBuQXlV0XeBQLqM49I2+M49GZ3dXIAz1cDILzc0QiSeYTe4mcaR6QAYFx0Fa3F2Oqi2E1aTxtBtZRsThtb9z4gi2NGsBpK8O+w1/65CI2aHKgVRhenrkXVpG9sbGxdLUDs6vOsbJ+7xMlksuR2rgRMAk44HD7ggjDQ/bmqRhk+xSHT3t6edEGo8p/swlS1KADcS+BWLrOr5SOQNpZ4HUBrAPqvEhCP72cB+BL7WGdn5x+ytwdQAyL8isH1GJyA7mFD2ecrzm3cYu+6To6zk8AfilfLA5GAJbubk/oFrLsRJfO0omtAuiIQj4NlOeXNLGUPGbaRYYNVrMBgq4v7Yy7yONP+dgVTV1U2EUqwk6Cv09fKEmDY7Am/33+Y0kx7y+UNwtqEsXkQm2eQ27sN/1+Q7+7q6vraa2/4okT0/gXISM4gCcB+1uFV41ALzW2KISbSqAmBEQHzbZ06Ym0LhUInbSI6jryqnMNIuy5F9q3lsq8lGfmwxFtYYp2VIH2OOCrzhYrLgF16G+QcQummyPYRyevRFIMKTUFbvfj+8fHxSxGckQF0sp5JKLCKQIyHYVUZ2/zz8/OvkMQlMmCt9lpNnZnGxsa9imnC+IPBYB+D/SRzUzQanTOKetNYLDbL0b6RZF6m317veFXjO2zUn6nGBrL6nLV7oGrPi2DInaNXoHvoY3p4bhAm9H5286pfLORbSyOWPpyUhDbwpPvYM0BcLkc56xvNuF6UJFqI9WYO/wgrMZGXiBRcOKdZrufqmESUJL4XPpV4h0eFe1Id1ukHZJsQHuM2PYTRNMu0BtkCsu1kW/FVVqCVGpPbis0nYIdkC/YOVcL42SveCERJ7iVIgu5WDCc5dOOoR0DVTS/uVDhB8G3Gicm+wKfFQTM2tGQiRsksLoc/BFDEyERJTJ8cM/Tf6PrsEI4+eK7FVv8J5C059u9zX+3T3YGuZFsxkUKP4eHhK/g+fAy53tGa6dcRpInxMvwsvF63zsJ/RuDpjo6Ofwoxyo3/B6WpYSCCoW6IAAAAAElFTkSuQmCC";
    },
    bb36: function (e, t, s) {
      e.exports = s.p + "img/volume-off-outline.a00c27cc.png";
    },
    c1b2: function (e, t, s) {
      e.exports = s.p + "img/audio.40994602.png";
    },
    c296: function (e, t, s) {
      e.exports = s.p + "media/di1.da40b233.mp3";
    },
    c676: function (e, t, s) {
      e.exports = s.p + "media/di2.317de251.mp3";
    },
  },
]);
