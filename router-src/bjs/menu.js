function menuTool_BC() {
    this.menuOption = {
        menuUlId: "",
        menuConId: "",
        conId: "",
        menuList: {},
        menuClickPreHd: {},
        pageLoad: {},
        menuClickCallBack: {},
        niceScrollStyles: {},
        loadNewPage: !0
    };
    "undefined" == typeof menuTool_BC.prototype.init && (this.init = function(b) {
        this.menuOptionInit(b);
        this.menuCreate();
    }, this.menuOptionInit = function(b) {
        var a = this.menuOption, c;
        for (c in b) void 0 != a[c] && (a[c] = b[c]);
    }, this.menuCreate = function() {
        var b = id(this.menuOption.menuUlId), a, c, d, e = this.menuOption.menuList, f = this;
        b.innerHTML = "";
        for (var g in e) a = e[g], null !== a && (c = document.createElement("li"), c.id = g.toString(), 
        c.url = a.url, c.className = "menuLi", c.onclick = function(a) {
            return function() {
                f.menuClick(a);
            };
        }(a.url), d = document.createElement("i"), d.className = "menuImg " + a.className, 
        c.appendChild(d), d = document.createElement("label"), d.innerHTML = a.value, d.className = "menuLbl", 
        c.appendChild(d), d = document.createElement("i"), d.className = "menuC", c.appendChild(d), 
        b.appendChild(c));
        this.menuOption.pageLoad();
        0 != this.menuOption.menuConId.length && (b = new NiceScroll(this.menuOption.menuConId), 
        b.scrollTipOpacity(1), b.scrollTipSet(this.menuOption.niceScrollStyles), b.init(), 
        b.scrollTo(0));
    }, this.menuLoad = function(b, a) {
        var c = id(this.menuOption.conId), d = this.menuOption.menuClickPreHd;
        if ("function" != typeof d || !1 != d({
            url: b
        })) !0 == isIESix && (c.style.height = ""), this.menuOption.loadNewPage ? (c.innerHTML = "", 
        loadPage(b, this.menuOption.conId, function() {
            "function" == typeof a && a();
        })) : "function" == typeof a && a(b);
    }, this.menuClick = function(b) {
        for (var a = id(this.menuOption.menuUlId).childNodes, c = "", d, e = 0, f = a.length; e < f; e++) d = a[e], 
        1 == d.nodeType && (d.url == b ? (d.className = "menuLiClick", c = b) : d.className = "menuLi");
        void 0 != c && this.menuLoad(c, this.menuOption.menuClickCallBack);
    });
}

function menuInit_BRS() {
    var b = {
        cloudAnt_rsMenu: {
            value: menuStr.cloudManage,
            className: "hsMenuCloud",
            url: "CloudAccountCfg.htm"
        },
        network_rsMenu: {
            value: menuStr.networkSet,
            className: "hsMenuNetWork",
            url: "WanCfg.htm"
        },
        wireless2G_rsMenu: {
            value: menuStr.wifiAp,
            className: "hsMenuWlan",
            url: "WlanCfg.htm"
        },
        lanSet_rsMenu: {
            value: menuStr.lanSet,
            className: "hsMenuNetControl",
            url: "LanCfg.htm"
        },
        hHnat_rsMenu: {
            value: menuStr.hnat,
            className: "hsMenuHNat",
            url: "HNat.htm"
        },
        dhcpServer_rsMenu: {
            value: menuStr.DHCPServer,
            className: "hsMenuAdvUser",
            url: "DHCPServer.htm"
        },
        sysUpgrade_rsMenu: {
            value: menuStr.upgrade,
            className: "hsMenuEquipment",
            url: "SysUpgrade.htm"
        },
        changeWebPwd_rsMenu: {
            value: menuStr.changeLgPwd,
            className: "hsMenuCHgPwd",
            url: "SysChangeLgPwd.htm"
        },
        bakRrestore_rsMenu: {
            value: menuStr.backupload,
            className: "hsMenuBakRs",
            url: "SysBakNRestore.htm"
        },
        reBootSet_rsMenu: {
            value: menuStr.reBootSet,
            className: "hsMenuReBootSet",
            url: "SysRebootNReset.htm"
        },
        sysLog_rsMenu: {
            value: menuStr.syslog,
            className: "hsMenuSysLog",
            url: "SystemLog.htm"
        }
    }, a = new menuTool_BC();
    a.init({
        menuUlId: "menuBRSUl",
        menuConId: "routeSetLMenuCon",
        conId: "routeSetRCon",
        menuList: b,
        pageLoad: function() {
            if (0 != gOnlineUpgradeNote.length) a.menuOption.menuClickCallBack = function() {
                showAlert(gOnlineUpgradeNote);
                gOnlineUpgradeNote = "";
                a.menuOption.menuClickCallBack = null;
            }, a.menuClick(b.sysUpgrade_rsMenu.url); else if (0 != gBasicMenu.subMenuUrl.length) a.menuClick(gBasicMenu.subMenuUrl), 
            setBasicSubMenuUrl(""); else id("menuBRSUl").childNodes[0].onclick();
            setBasicMenu(void 0, "");
        },
        niceScrollStyles: {
            background: "#4ABDE0"
        }
    });
}

function menuInit_Apps(b) {
    var a = {
        cloudAnt_rsMenu: {
            value: menuStr.cloudMarket,
            className: "apps_market",
            url: "AppsMarket.htm"
        },
        network_rsMenu: {
            value: menuStr.cloudAppsInstall,
            className: "apps_apllyList",
            url: "AppsInstalled.htm"
        }
    }, c = new menuTool_BC();
    c.init({
        menuUlId: "menuBAppsUl",
        conId: "appsRCon",
        menuList: a,
        menuClickPreHd: b,
        pageLoad: function() {
            if (0 != gBasicMenu.subMenuUrl.length) c.menuClick(gBasicMenu.subMenuUrl), setBasicSubMenuUrl(""); else {
                var a = id("menuBAppsUl").childNodes.length - 1;
                id("menuBAppsUl").childNodes[a].onclick();
            }
            setBasicMenu(void 0, "");
        }
    });
}


