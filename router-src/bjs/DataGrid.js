function DataGrid() {
    this._ops = {
        id: "",
        obj: null,
        data: null,
        head: null,
        list: null,
        toolBar: null,
        tdStyles: null,
        paging: {
            num: 8,
            page: 1
        },
        edit: !0,
        click: null,
        fixed: !1,
        bdCollapse: !0,
        headpadding: "0px",
        checkIndex: 0,
        max: 792,
        cleanTip: "",
        pageTurnFunc: null,
        hasID: !1,
        hasHead: !0,
        hasSelBox: !0,
        spBlank: !1,
        spAutoEdit: !1,
        sortFunc: null,
        sortType: "down",
        sortName: "",
        niceScroll: null,
        selAllHd: null,
        classCol: {
            gridClassName: "dataGrid",
            gridPageListClassName: "pageListPo",
            ListSpanClassName: "ListSpan",
            headClassName: "dataGrid_header_tr"
        }
    };
    this._table = null;
    this._list = {
        id: "",
        obj: ""
    };
    this._set = {
        IDWidth: "50px",
        editWidth: "92px"
    };
    this._event = {
        editTr: -1,
        sortName: "",
        sortable: !1,
        state: "default",
        tdEdit: !1
    };
    this._state = {
        isBlank: !1,
        colNum: 0,
        headCells: [ {
            width: 0
        } ],
        headWidth: 0
    };
    this._types = {
        str: "",
        ip: "0.0.0.0",
        mask: "0.0.0.0",
        dns: "0.0.0.0",
        gateway: "0.0.0.0",
        mac: "00-00-00-00-00-00"
    };
    this._pgList = {
        id: "",
        obj: "",
        num: 5,
        page: 1,
        listMarginLeft: 19,
        macAddrIdPre: "macAddr",
        ipAddrIdPre: "ipAddr",
        selectPre: "selConGrid",
        listDivStr: "listDiv",
        listArrowLStr: "listArrowL",
        listArrowRStr: "listArrowR",
        ListSpanClassName: "ListSpan",
        ListSpanSClassName: "listSpanS",
        plcClassName: "pageListContent"
    };
    this._toolBar = {
        delSelBtn: null,
        clrSelBtn: null
    };
    "function" != typeof DataGrid.prototype.init && (DataGrid.prototype.init = function(a) {
        this._optionsInit(a);
        this._create();
    }, DataGrid.prototype.getPageNum = function() {
        return this._pgList.page;
    }, DataGrid.prototype.getNumPerPage = function() {
        return this._ops.paging.num;
    }, DataGrid.prototype.getDataLen = function() {
        return this._getListLen();
    }, DataGrid.prototype.refresh = function(a) {
        void 0 == a && (a = 1);
        this._refresh(a);
    }, DataGrid.prototype.refreshPage = function(a, b, d) {
        void 0 == b && (b = 0);
        void 0 == d && (d = 1);
        if (a instanceof Array && b >= a.length) {
            for (var c = this._ops.list[this._ops.checkIndex].name, e = Array(b), f = b - (d - 1) * this._ops.paging.num - a.length, g = 0; g < b; g++) g >= f && g - f < a.length ? e[g] = a[g - f] : (e[g] = {}, 
            e[g][c] = " ");
            this.setDataSource(e);
        }
        this._refresh(d);
    }, DataGrid.prototype.setDataSource = function(a) {
        a instanceof Array && (this._ops.data = a);
    }, DataGrid.prototype.getActiveTr = function() {
        return this._getEditTr();
    }, DataGrid.prototype.getActiveTrIndex = function() {
        return this._getTrIndex(this._getEditTr());
    }, DataGrid.prototype._create = function() {
        this._getTableObj();
        null != this._table && (this._setToolBar(), this._tableSet(), this._headCreate(), 
        this._contentCreate(this._ops.paging.page), this._flushBtn());
    }, DataGrid.prototype._eventStateSet = function(a, b) {
        if (!0 != b && "default" != this._event.state) return !1;
        this._event.state = a;
        return !0;
    }, DataGrid.prototype._eventStateGet = function() {
        return this._event.state;
    }, DataGrid.prototype._getEditTr = function() {
        return this._event.editTr;
    }, DataGrid.prototype._setEditTr = function(a) {
        this._event.editTr = a;
    }, DataGrid.prototype._getBlankDataObj = function(a) {
        var b = this._ops.list, d;
        for (d in b) a[b[d].name] = "";
    }, DataGrid.prototype._fillEditRow_IP = function(a, b, d, c, e) {
        var f = el("input");
        f.className = "ipInput text";
        f.id = this._pgList.ipAddrIdPre + b + this._ops.id + d;
        f.style.textAlign = "center";
        void 0 != c && 0 != c.length && (f.value = c);
        f.maxLength = e.maxLength ? e.maxLength : 15;
        void 0 != e.size && (f.size = e.size);
        a.appendChild(f);
    }, DataGrid.prototype._fillEditRow_IPs = function(a, b, d, c, e) {
        e = e.name.split(" ");
        var f;
        f = createAddrDiv(this._pgList.ipAddrIdPre + "Div" + b + this._ops.id + d + e[0]);
        a.appendChild(f);
        genAddrInput(f.id, this._pgList.ipAddrIdPre + b + this._ops.id + d + e[0], ipStr, c[e[0]], smallAddrInputClassType);
        f = el("label");
        f.innerHTML = "-";
        a.appendChild(f);
        setStyle(f, {
            cssFloat: "left",
            width: "5px",
            lineHeight: "18px",
            height: "10px",
            margin: "0px 0px 0px 1px"
        });
        f = createAddrDiv(this._pgList.ipAddrIdPre + "Div" + b + this._ops.id + d + e[1]);
        a.appendChild(f);
        genAddrInput(f.id, this._pgList.ipAddrIdPre + b + this._ops.id + d + e[1], ipStr, c[e[1]], smallAddrInputClassType);
    }, DataGrid.prototype._fillEditRow_MAC = function(a, b, d, c, e) {
        var f = el("input");
        f.className = "ipMac text";
        f.id = this._pgList.macAddrIdPre + b + this._ops.id + d;
        f.style.textAlign = "center";
        void 0 != c && 0 != c.length && (f.value = c.toUpperCase());
        f.maxLength = e.maxLength ? e.maxLength : 17;
        void 0 != e.size && (f.size = e.size);
        a.appendChild(f);
    }, DataGrid.prototype._fillEditRow_Select = function(a, b, d, c, e, f) {
        var g = el("div"), h = el("span"), l = el("span"), k = el("i");
        b = this._pgList.selectPre + b + this._ops.id + d;
        g.className = "gridSelectCon " + e.className;
        a.appendChild(g);
        h.id = b;
        h.className = "select";
        g.appendChild(h);
        l.className = "value hsGridValue";
        h.appendChild(l);
        k.className = "arrow";
        h.appendChild(k);
        a = g.offsetWidth - k.offsetWidth - 13 - parseInt(getNodeDefaultView(h, "marginLeft"));
        l.style.width = a + "px";
        if (void 0 == c || 0 == c.length) c = void 0 == e.defaultValue ? 0 : e.defaultValue;
        f ? selectInitExtern(b, e.options, c, e.func, e.maxSelSize) : selectInit(b, e.options, c, e.func, e.maxSelSize);
    }, DataGrid.prototype._fillEditRow_Checkbox = function(a, b, d, c, e) {
        b = el("input");
        b.type = "checkbox";
        b.className = "";
        a.appendChild(b);
        void 0 != c && 0 != c.length && (b.checked = !0 == c);
    }, DataGrid.prototype._fillEditRow_Radio = function(a, b, d, c, e) {
        b = el("input");
        b.type = "radio";
        b.className = "";
        a.appendChild(b);
        void 0 != c && 0 != c.length && (b.checked = !0 == c);
    }, DataGrid.prototype._fillEdit_Ports = function(a, b, d, c, e) {
        var f, g = e.name.split(" "), h = c[g[0]];
        "undefined" != typeof h && (f = c[g[1]] != h ? h + "-" + c[g[1]] : h);
        this._fillEditRow_Str(a, b, d, f, e);
    }, DataGrid.prototype._fillEditRow_Input = function(a, b, d, c) {
        var e = el("input");
        e.className = "text";
        e.style.textAlign = "center";
        e.style.width = void 0 == c ? "" : c + "px";
        a.appendChild(e);
        void 0 != b && 0 != b.length && (e.value = b);
        void 0 != d.maxLength && (e.maxLength = d.maxLength);
        void 0 != d.size && (e.size = d.size);
        return e;
    }, DataGrid.prototype._fillEditRow_Str = function(a, b, d, c, e) {
        b = parseInt(getNodeDefaultView(a, "paddingLeft")) + parseInt(getNodeDefaultView(a, "paddingRight"));
        this._fillEditRow_Input(a, c, e, a.offsetWidth - b - 40);
    }, DataGrid.prototype._fillEditRow_Speed = function(a, b, d, c, e) {
        b = el("label");
        var f = parseInt(getNodeDefaultView(a, "paddingLeft")) + parseInt(getNodeDefaultView(a, "paddingRight"));
        b.innerHTML = void 0 == e.unit ? " KB/s" : " " + e.unit;
        b.style.fontSize = "10px";
        d = a.offsetWidth;
        c = this._fillEditRow_Input(a, c, e);
        a.appendChild(b);
        c.style.width = d - f - 40 - b.offsetWidth + "px";
    }, DataGrid.prototype._fillEditRow_PopVig = function(a, b, d, c, e) {
        var f, g = e.popObj, h;
        if (0 == c.length) c = el("input"), c.className = "popVigBtn", c.value = btn.config, 
        c.type = "button", c.onclick = function() {
            e.click(b);
        }, a.appendChild(c); else {
            if (!/^\d+$/.test(c)) for (f in g.subList) if (g.subList[f][".name"] == c) {
                c = f;
                break;
            }
            f = el("span");
            f.className = "dataGridPopVigDes";
            h = g.subList[c][g.name];
            f.title = h;
            d = this._calcShowSize(d, e);
            h = getStrInMax(h, d);
            f.innerHTML = htmlEscape(h);
            f.onclick = function() {
                e.click(b);
            };
            a.appendChild(f);
            a.setAttribute(g.indexDes, c);
        }
    }, DataGrid.prototype._fillEditRow_Path = function(a, b, d, c, e) {
        var f;
        b = this._getEditTr();
        f = this._getTrIndexInDataObj(b);
        0 == c.length ? (c = el("input"), c.className = "popVigBtn", c.value = btn.config, 
        c.type = "button", c.onclick = function() {
            e.click(f);
        }, a.appendChild(c)) : (b = el("span"), b.className = "dataGridPopVigDes", b.title = c, 
        b.innerHTML = htmlEscape(getStrInMax(c, 32)), b.onclick = function() {
            e.click(f);
        }, a.appendChild(b));
    }, DataGrid.prototype._fillEditRow_EditBtns = function(a, b, d) {
        a = document.createElement("input");
        d = document.createElement("input");
        var c = this._ops.toolBar;
        a.className = "edit editL";
        a.type = "button";
        a.value = btn.gridSave;
        this._toolSaveHandle(a, c.save, c.asyn);
        d.className = "edit";
        d.type = "button";
        d.value = btn.gridCancel;
        this._toolCancelHandle(d);
        b.appendChild(a);
        b.appendChild(d);
    }, DataGrid.prototype._fillEditRow = function(a, b, d) {
        var c = this._ops.list, e, f, g, h, l, k = this;
        this._setEditTr(a);
        !0 == this._ops.hasSelBox && (h = a.insertCell(-1), l = document.createElement("input"), 
        l.type = "checkbox", l.onclick = function() {
            k._singelSelHandle(l, k);
        }, h.appendChild(l), !1 == this._ops.hasHead && setStyle(h, {
            width: this._set.IDWidth
        }));
        !0 == this._ops.hasID && (h = a.insertCell(-1), h.innerHTML = this._getListLen() - b);
        for (var m in c) if (h = a.insertCell(-1), e = c[m], g = e.type, f = d[e.name], 
        !1 == e.edit) h.innerHTML = f ? f : ""; else switch (g) {
          case "btn":
            break;

          case "mask":
          case "dns":
          case "gateway":
          case "ip":
            this._fillEditRow_IP(h, b, m, f, e);
            break;

          case "mac":
            this._fillEditRow_MAC(h, b, m, f, e);
            break;

          case "select":
            this._fillEditRow_Select(h, b, m, f, e);
            break;

          case "selectApp":
            this._fillEditRow_Select(h, b, m, f, e, !0);
            break;

          case "checkbox":
            this._fillEditRow_Checkbox(h, b, m, f, e);
            break;

          case "radio":
            this._fillEditRow_Radio(h, b, m, f, e);
            break;

          case "ports":
            this._fillEdit_Ports(h, b, m, d, e);
            break;

          case "ips":
            this._fillEditRow_IPs(h, b, m, d, e);
            break;

          case "speed":
            this._fillEditRow_Speed(h, b, m, f, e);
            break;

          case "popVig":
            this._fillEditRow_PopVig(h, b, m, f, e);
            break;

          case "path":
            this._fillEditRow_Path(h, b, m, f, e);
            break;

          default:
            this._fillEditRow_Str(h, b, m, f, e);
        }
        !0 == this._ops.edit && (h = a.insertCell(-1), this._fillEditRow_EditBtns(d, h, b), 
        !1 == this._ops.hasHead && setStyle(h, {
            width: this._set.editWidth
        }));
    }, DataGrid.prototype._getTrIndexInDataObj = function(a) {
        a = this._getTrIndex(a);
        var b = this._getDRL() - 1;
        if (-1 == a) return a;
        a = !0 == this._ops.hasHead ? a - 1 : a;
        return b - a;
    }, DataGrid.prototype._resetID = function() {
        var a = this._table.rows, b = a.length, d = 0, c = 0, e = this._eventStateGet();
        if (!1 != this._ops.hasID) {
            d = !0 == this._ops.hasSelBox ? 1 : 0;
            !0 == this._ops.hasHead && (c++, b--);
            "add" == e && (c++, b--);
            for (var f = 0; f < b; f++) e = a[f + c].cells[d], void 0 != e && (e.innerHTML = f + 1);
        }
    }, DataGrid.prototype._getDRL = function() {
        return !0 == this._ops.hasHead ? this._table.rows.length - 1 : this._table.rows.length;
    }, DataGrid.prototype._flushBtn = function() {
        var a = this._getDRL(), b;
        b = this._toolBar.addBtn;
        null != b && (b.className = this._ops.max == a ? "addUn" : "add");
        b = this._toolBar.delAllBtn;
        null != b && (b.className = 0 < a ? "delAll" : "delAllUn");
    }, DataGrid.prototype._blankData = function(a) {
        a = this._ops.data[a];
        var b, d;
        for (d in a) b = a[d], b instanceof Array ? a[d].splice(0, b.length) : a[d] = "";
    }, DataGrid.prototype._toolAddHandle = function(a, b, d) {
        var c = this;
        a.onclick = function() {
            function a(b) {
                !1 != b && (!0 == c._ops.hasSelBox && (h.cells[0].innerHTML = ""), !0 == c._ops.hasID && (h.cells[1].innerHTML = ""), 
                c._disableEditBtns(), c._flushBtn(), c._pageList(g, 1));
            }
            var f = c._table, g, h, l = {}, k = 0;
            !0 == c._eventStateSet("add") && (c._ops.max == c._getDRL() ? c._event.state = "default" : (c._content_delete_blank(), 
            !0 == c._ops.hasHead && (k = 1), h = f.insertRow(k), f = c._getDRL() - 1, g = f + 1, 
            h.id = "dataGridAdd", h.setAttribute("dataGridLastIndex", f), c._getBlankDataObj(l), 
            c._fillEditRow(h, k, l), void 0 != b ? !0 == d ? b(a) : a(b()) : a(!0)));
        };
    }, DataGrid.prototype._getDomChildNode = function(a, b, d) {
        a = a.childNodes;
        var c = [], e = 0, f;
        f = b.split(" ");
        b = f[0];
        for (var g = f[1], h = 0, l = a.length; h < l; h++) f = a[h], f.tagName.toLowerCase() == b && (void 0 != g && f.type == g ? (c[e] = f, 
        e++) : void 0 == g && (c[e] = f, e++));
        return void 0 != d ? c[d] : c[0];
    }, DataGrid.prototype._toolSaveHandle_Edit = function(a, b, d, c) {
        return this._toolSaveHandle_SaveData(a, b, d, c);
    }, DataGrid.prototype._toolSaveHandle_SaveData = function(a, b, d, c) {
        var e = this._ops.list, f, g, h, l, k, m, n, q = 0, r = !1, p, s;
        for (s in e) if (f = e[s], g = f.type, l = f.name, k = this._pgList.ipAddrIdPre + d + this._ops.id + s, 
        !0 == this._ops.hasID && q++, !0 == this._ops.hasSelBox && q++, !1 != f.edit) {
            switch (g) {
              case "ip":
                n = id(k);
                h = $.trim(n.value);
                if (ENONE != (f = checkIp(h))) return {
                    result: f,
                    target: n
                };
                break;

              case "ips":
                m = l.split(" ");
                n = id(k + m[0]);
                if (ENONE != (f = checkIp(n.value))) return {
                    result: f,
                    target: n
                };
                n = id(k + m[1]);
                if (ENONE != (f = checkIp(n.value))) return {
                    result: f,
                    target: n
                };
                break;

              case "mask":
                n = id(k);
                h = $.trim(n.value);
                if (ENONE != (f = checkMask(h))) return {
                    result: f,
                    target: n
                };
                break;

              case "dns":
                n = id(k);
                h = $.trim(n.value);
                if (ENONE != (f = checkIp(h))) return {
                    result: f,
                    target: n
                };
                break;

              case "gateway":
                n = id(k);
                h = $.trim(n.value);
                if (ENONE != (f = checkIp(h))) return {
                    result: f,
                    target: n
                };
                break;

              case "mac":
                k = this._pgList.macAddrIdPre + d + this._ops.id + s;
                n = id(k);
                h = n.value;
                if (ENONE != (f = checkMac(h))) return {
                    result: f,
                    target: n
                };
                break;

              case "popVig":
                h = a.cells[q];
                p = this._getDomChildNode(h, "span");
                h = null == p ? "" : parseInt(h.getAttribute(f.popObj.indexDes));
                break;

              case "path":
                h = a.cells[q];
                p = this._getDomChildNode(h, "span");
                h = null == p ? "" : p.title;
                if (ENONE != (f = checkPath(h))) return {
                    result: f,
                    target: p
                };
                break;

              case "select":
              case "selectApp":
                n = this._getDomChildNode(a.cells[q], "div");
                n = h = this._getDomChildNode(n, "span");
                h = h.value;
                break;

              case "checkbox":
                n = h = this._getDomChildNode(a.cells[q], "input checkbox");
                h = !0 == h.checked ? 1 : 0;
                break;

              case "radio":
                n = h = this._getDomChildNode(a.cells[q], "input radio");
                h = !0 == h.checked ? 1 : 0;
                break;

              case "ports":
                n = h = this._getDomChildNode(a.cells[q], "input");
                h = $.trim(h.value);
                break;

              default:
                n = h = this._getDomChildNode(a.cells[q], "input"), h = h.value;
            }
            if ("ports" == g) if (m = l.split(" "), void 0 != b[m[0]] && (c[m[0]] = b[m[0]], 
            c[m[1]] = b[m[1]]), k = h.split("-"), 2 == k.length) {
                k[0] != k[0] && (k[0] = "");
                k[1] != k[1] && (k[1] = "");
                if (0 == k[0].length || 0 == k[1].length) return {
                    result: EINVPORTFMT,
                    target: n
                };
                0 != k[0].length && !1 == /\D/g.test(k[0]) && (k[0] = parseInt(k[0]));
                0 != k[1].length && !1 == /\D/g.test(k[1]) && (k[1] = parseInt(k[1]));
                if (k[0] != b[m[0]] || k[1] != b[m[1]]) r = !0;
                b[m[0]] = k[0] > k[1] ? k[1] : k[0];
                b[m[1]] = k[0] > k[1] ? k[0] : k[1];
            } else if (1 == k.length) {
                k = k[0];
                k != k && (k = "");
                0 != k.length && !1 == /\D/g.test(k) && (k = parseInt(k));
                if (k != b[m[0]] || k != b[m[1]]) r = !0;
                b[m[1]] = b[m[0]] = k;
            } else return {
                result: EINVPORTFMT,
                target: n
            }; else "ips" == g ? (g = id(k + m[0]).value, k = id(k + m[1]).value, void 0 != b[m[0]] && (c[m[0]] = b[m[0]], 
            c[m[1]] = b[m[1]]), b[m[0]] = g > k ? k : g, b[m[1]] = g > k ? g : k) : (void 0 != b[l] && (c[l] = b[l]), 
            h != b[l] && (r = !0), b[l] = h);
        }
        return {
            result: ENONE,
            isChanged: r,
            target: n
        };
    }, DataGrid.prototype._toolSaveHandle_Add = function(a, b, d) {
        if (void 0 != a) {
            var c = this._getTrIndex(a);
            this._state.isBlank = !1;
            return this._toolSaveHandle_SaveData(a, b, c, d);
        }
    }, DataGrid.prototype._toolSaveHandle_stateChange = function(a, b) {
        var d, c;
        c = !0 == this._ops.hasSelBox && 0 != a.cells[0].innerHTML.length;
        !0 == c && (d = a.cells[0].childNodes[0], d = d.checked);
        this._trCleanCell(a);
        this._contentFill(a, this._ops.list, !0, b, this._ops.data[b], this._getDRL());
        !0 == c && (a.cells[0].childNodes[0].checked = d);
    }, DataGrid.prototype._toolSaveHandle = function(a, b, d) {
        var c = this, e, f, g, h, l, k = this._ops.data, m = {};
        a.onclick = function() {
            function a() {
                var b = !0, c;
                for (c in m) b = !1, k[g][c] = m[c];
                !0 == b && "add" == f && k.splice(g, 1);
            }
            function q(b) {
                !1 == b ? a() : (c._enableEditBtns(), c._setEditTr(null), c._toolSaveHandle_stateChange(h, g), 
                c._event.state = "default", h.id = "", "add" == f && (c._resetID(), h.removeAttribute("dataGridLastIndex")));
            }
            e = c._eventStateGet();
            switch (e) {
              case "default":
                return;

              case "edit":
                f = "edit";
                h = c._getEditTr();
                g = c._getTrIndexInDataObj(h);
                m = {};
                l = c._toolSaveHandle_Edit(h, k[g], c._getTrIndex(h), m);
                break;

              case "add":
                f = "add", g = c._getDRL() - 1, h = c._getEditTr(), k[g] = void 0 == k[g] ? {} : k[g], 
                m = {}, l = c._toolSaveHandle_Add(h, k[g], m);
            }
            if (l.result != ENONE) {
                switch (l.result) {
                  case EINVNET:
                    showAlert(errStr.ipAddrNetErr, l.target);
                    break;

                  case EINVIP:
                    showAlert(errStr.ipAddrErr, l.target);
                    break;

                  case EINVIPFMT:
                    showAlert(errStr.ipAddrFmtErr, l.target);
                    break;

                  case EINVGROUPIP:
                    showAlert(errStr.ipAddrGroupErr, l.target);
                    break;

                  case EINVLOOPIP:
                    showAlert(errStr.ipAddrLoopErr, l.target);
                    break;

                  case EINVMACFMT:
                    showAlert(errStr.macFmtErr, l.target);
                    break;

                  case EINVMACZERO:
                    showAlert(errStr.macZeroErr, l.target);
                    break;

                  case EINVMACBROAD:
                    showAlert(errStr.macBroadErr, l.target);
                    break;

                  case EINVMACGROUP:
                    showAlert(errStr.macGroupErr, l.target);
                    break;

                  case EINVMASK:
                    showAlert(errStr.maskErr, l.target);
                    break;

                  case EINVPORTFMT:
                    showAlert(errStr.portIllegalFmtErr, l.target);
                    break;

                  case EINVPATHNULL:
                    showAlert(errStr.pathIsNull);
                    break;

                  case EINVPATH:
                    showAlert(errStr.invalidPath);
                }
                a();
            } else "edit" == f && !0 != l.isChanged ? (c._toolSaveHandle_stateChange(h, g), 
            c._event.state = "default", h.id = "", c._enableEditBtns(), c._setEditTr(null)) : void 0 != b ? !0 == d ? b(f, g, q) : q(b(f, g)) : q(!0);
        };
    }, DataGrid.prototype._toolSaveAllHandle = function(a, b, d) {
        a.onclick = function() {
            void 0 != b && b();
        };
    }, DataGrid.prototype._toolDelHandle = function(a, b, d) {
        var c = this;
        a.onclick = function() {
            function a() {
                function e(a) {
                    if (!1 != a) {
                        r = k.split("-");
                        t = p[0];
                        b == r.length + t - 1 ? (t--, t = t || 0) : "none" == g[t].style.display && (t = p[0]);
                        a = 0;
                        for (var b = r.length; a < b; a++) s = r[a], p[a] -= a, f.deleteRow(p[a]), c._blankData(s), 
                        l = w[s], w.push(l), w.splice(s, 1);
                        y = !0 == c._ops.hasHead ? g.length - 1 : g.length;
                        c._state.isBlank = 0 < y ? !1 : !0;
                        y = "add" == c._eventStateGet() ? y - 1 : y;
                        x = parseInt(t / c._ops.paging.num) + (0 < t % c._ops.paging.num ? 1 : 0);
                        x = 1 > x ? 1 : x;
                        c._pageList(y, x);
                        !0 == u && (c._eventStateSet("default", !0), c._setEditTr(null));
                        !0 == c._ops.hasID && c._resetID();
                        c._flushBtn();
                        c._refresh();
                    }
                }
                void 0 == b ? e(!0) : !0 == d ? b(k, e) : e(b(k));
            }
            var f = c._table, g = c._table.rows, h, l, k = "", m, n, q = g.length, r, p = [], s, x = 0, w = c._ops.data, v = c._getTrIndex(c._getEditTr()), u = !1, t = 0, y = 0;
            h = "";
            if ("delSelUn" != this.className) {
                m = !0 == c._ops.hasHead ? 1 : 0;
                n = g.length - m;
                h = "add" == c._eventStateGet() ? -1 : 0;
                for (n += h; m < q; m++) tr = g[m], 1 != g[m].cells.length && (l = g[m].cells[0].childNodes[0], 
                null != l && !0 == l.checked && (k += n - m - h + "-", p.push(m), v == m && (u = !0)));
                y = k.length;
                0 != y && (k = k.substring(0, y - 1), h = c._ops.cleanTip, 0 != h.length && void 0 != h && n == k.split("-").length ? showConfirm(h, function(b) {
                    !0 == b && a();
                }) : a());
            }
        };
    }, DataGrid.prototype._toolCancelHandle = function(a, b) {
        var d = this, c, e;
        a.onclick = function() {
            c = d._eventStateGet();
            table = d._table;
            switch (c) {
              case "edit":
                tr = d._getEditTr();
                index = d._getTrIndexInDataObj(tr);
                d._toolSaveHandle_stateChange(tr, index);
                break;

              case "add":
                e = table.rows.length - 1;
                table.deleteRow(!0 == d._ops.hasHead ? 1 : 0);
                e = !0 == d._ops.hasHead ? e - 1 : e;
                if (0 == e) {
                    d._state.isBlank = !0;
                    d._content_blank();
                    break;
                }
                d._pageList(e, 1);
            }
            d._enableEditBtns();
            d._setEditTr(null);
            d._event.state = "default";
            d._flushBtn();
        };
    }, DataGrid.prototype._toolAbleHandle = function(a, b, d, c) {
        var e = this;
        a.onclick = function() {
            function a(b) {
                if (!1 != b) {
                    for (var c in h) if (k = h[c], "checkbox" == k.type && !1 == k.edit) {
                        m = k.name;
                        q = c;
                        break;
                    }
                    if (void 0 != m) {
                        n = e._getListLen();
                        for (b = 0; b < n; b++) g[b][m] = "enable" == d ? 1 : 0;
                        n = l.length;
                        !0 == e._ops.hasID && q++;
                        for (c = !0 == e._ops.hasHead ? 1 : 0; c < n; c++) r = e._getDomChildNode(l[c].cells[q], "input checkbox"), 
                        r.checked = "enable" == d ? !0 : !1;
                    }
                }
            }
            var g = e._ops.data, h = e._ops.list, l = e._table.rows, k, m, n = 0, q, r;
            !0 != e._state.isBlank && (void 0 == b ? a(!0) : !0 == c ? b(d, a) : a(b(d)));
        };
    }, DataGrid.prototype._toolEnableHandle = function(a, b, d) {
        this._toolAbleHandle(a, b, "enable", d);
    }, DataGrid.prototype._toolDisableHandle = function(a, b, d) {
        this._toolAbleHandle(a, b, "disable", d);
    }, DataGrid.prototype._toolCleanHandle = function(a, b, d) {
        var c = this;
        a.onclick = function() {
            function a(b) {
                !0 == b && (c._blankData(0), f.splice(1, f.length - 1), !0 == c._state.isBlank, 
                c._refresh(1), c._setEditTr(null), c._event.state = "default", c._flushBtn(), c._pageList(0, 1));
            }
            var f = c._ops.data, g, h;
            if (!0 != c._state.isBlank || "default" != c._event.state) g = label.delAllConfirm, 
            h = c._ops.cleanTip, void 0 != h && 0 != h.length && (g = h), showConfirm(g, function(f) {
                !1 == c._state.isBlank || "add" != c._event.state ? !1 != f && (void 0 == b ? a(!0) : !0 == d ? b(a) : a(b())) : a(!0);
            });
        };
    }, DataGrid.prototype._toolRefreshHandle = function(a, b, d) {
        var c = this;
        a.onclick = function() {
            function a(b) {
                !0 == b && (c._cleanList(c._ops.id + "pagIngList"), c._refresh(1), c._setEditTr(null), 
                c._event.state = "default", c._flushBtn());
            }
            void 0 != b && (!0 == d ? b(a) : a(b()));
        };
    }, DataGrid.prototype._toolEmailHandle = function(a, b, d) {
        a.onclick = function() {
            void 0 != b && b();
        };
    }, DataGrid.prototype._toolClearAllHandle = function(a, b, d) {
        var c = this;
        a.onclick = function() {
            function a(b) {
                !1 != b && (c._cleanList(c._ops.id + "pagIngList"), c._refresh(1), c._setEditTr(null), 
                c._event.state = "default", c._flushBtn());
            }
            void 0 == b && a(!0);
            !0 == d ? b(a) : a(b());
        };
    }, DataGrid.prototype._toolClearSelHandle = function(a, b, d) {
        var c = this;
        a.onclick = function() {
            function a(b) {
                if (!1 != b) {
                    k = p.length;
                    for (b = 0; b < k; b++) v = p[b], !0 == v.clear && (w[v.name] = {
                        clear: !0,
                        clearValue: v.clearValue
                    });
                    n = h.split("-");
                    k = n.length;
                    for (b = 0; b < k; b++) {
                        u = r[b];
                        for (var d in u) v = w[d], void 0 != v && !0 == v.clear && (u[d] = v.clearValue);
                    }
                    k = q.length;
                    l = 1;
                    l += c._ops.hasID ? 1 : 0;
                    for (b = 0; b < k; b++) for (u = q[b], x = f[u].cells.length, d = l; d < x; d++) v = w[p[d - l].name], 
                    void 0 != v && !0 == v.clear && (s == u ? f[u].cells[d].value = v.clearValue : f[u].cells[d].innerHTML = v.clearValue, 
                    f[u].cells[0].childNodes[0].checked = !1);
                    c._selectAll();
                    c._flushBtn();
                }
            }
            var f = c._table.rows, g, h = "", l, k, m = f.length, n, q = [], r = c._ops.data, p = c._ops.list, s = c._getTrIndex(c._getEditTr()), x = 0, w = {}, v, u;
            if ("clrUn" != this.className) {
                l = !0 == c._ops.hasHead ? 1 : 0;
                k = f.length - l;
                g = "add" == c._eventStateGet() ? -1 : 0;
                k += g;
                for (var t = l; t < m; t++) tr = f[t], 1 != f[t].cells.length && (u = f[t].cells[0].childNodes[0], 
                null != u && !0 == u.checked && (h += k - t - g + "-", q.push(t)));
                0 != h.length && (h = h.substring(0, h.length - 1), void 0 == b ? a(!0) : !0 == d ? b(h, a) : a(b(h)));
            }
        };
    }, DataGrid.prototype._setToolBar = function() {
        var a = this._ops.toolBar, b, d, c, e, f, g;
        if (null != a) {
            b = $("#" + a.id + " li");
            for (var h = 0, l = b.length; h < l; h++) {
                c = b[h];
                f = c.innerHTML;
                d = c.getAttribute("gridType");
                e = a[d];
                g = a.asyn;
                switch (d) {
                  case "add":
                    c.className = "add";
                    this._toolBar.addBtn = c;
                    this._toolAddHandle(c, e, g);
                    break;

                  case "save":
                    this._toolSaveHandle(c, e, g);
                    break;

                  case "saveAll":
                    c.className = "add";
                    this._toolSaveAllHandle(c, e, g);
                    break;

                  case "delAll":
                    c.className = "delAll";
                    this._toolBar.delAllBtn = c;
                    this._toolCleanHandle(c, e, g);
                    break;

                  case "delSel":
                    c.className = "delSelUn";
                    this._toolBar.delSelBtn = c;
                    this._toolDelHandle(c, e, g);
                    break;

                  case "cancel":
                    this._toolCancelHandle(c, e);
                    break;

                  case "enable":
                    this._toolEnableHandle(c, e, g);
                    break;

                  case "disable":
                    this._toolDisableHandle(c, e, g);
                    break;

                  case "refresh":
                    c.className = "refresh";
                    this._toolRefreshHandle(c, e, g);
                    break;

                  case "email":
                    c.className = "email";
                    this._toolEmailHandle(c, e, g);
                    break;

                  case "clrSel":
                    c.className = "clrUn";
                    this._toolBar.clrSelBtn = c;
                    this._toolClearSelHandle(c, e, g);
                    break;

                  case "clrAll":
                    c.className = "clrEn", this._toolClearAllHandle(c, e, g);
                }
                c.innerHTML = "";
                d = el("input");
                d.value = f;
                d.type = "button";
                c.appendChild(d);
            }
        }
    }, DataGrid.prototype._getListLen = function() {
        var a = this._ops.list, b = this._ops.data, d = 0, c, e = a[this._ops.checkIndex].name, a = this._types[a[this._ops.checkIndex].type], f;
        for (f in b) {
            c = b[f][e];
            if (c === a || void 0 === c || 0 == c.toString().length) break;
            d++;
        }
        return d;
    }, DataGrid.prototype._content_delete_blank = function() {
        var a;
        !1 != this._ops.spBlank && !0 == this._state.isBlank && (this._state.isBlank = !1, 
        a = !0 == this._ops.hasHead ? 1 : 0, this._table.deleteRow(a));
    }, DataGrid.prototype._content_blank = function() {
        var a, b = this._table;
        !1 != this._ops.spBlank && (a = b.insertRow(-1), a = a.insertCell(-1), a.colSpan = this._state.colNum, 
        !1 == this._ops.hasHead && setStyle(a, {
            width: b.offsetWidth + "px"
        }), a.innerHTML = label.blankTable);
    }, DataGrid.prototype._editable = function() {
        var a = this._ops.list, b;
        if (!1 == this._ops.edit) return !1;
        for (var d in a) if (b = a[d].edit, !0 == b) return !0;
        return !1;
    }, DataGrid.prototype._timeHandle = function(a, b) {
        if (4294967295 == a) b.innerHTML = label.forever; else {
            var d = new Date();
            d.setHours(parseInt(a / 3600), parseInt(a % 3600 / 60), parseInt(a % 3600 % 60), 0);
            b.innerHTML = d.toTimeString().substring(0, 8);
        }
    }, DataGrid.prototype._timePHandle = function(a, b) {
        if (4294967295 == a) b.innerHTML = label.forever; else {
            var d, c, e;
            d = parseInt(a / 3600);
            c = parseInt(a % 3600 / 60);
            e = parseInt(a % 3600 % 60);
            10 > d && (d = "0" + d);
            10 > c && (c = "0" + c);
            10 > e && (e = "0" + e);
            b.innerHTML = d + ":" + c + ":" + e;
        }
    }, DataGrid.prototype._selectHandle = function(a, b, d) {
        var c = a.options;
        b = b[a.name];
        a = a.blankStr;
        if (void 0 != c[0].value) for (var e = 0, f = c.length; e < f; e++) {
            if (c[e].value == b) {
                c = c[e].str;
                d.innerHTML = c == a ? "" : htmlEscape(c);
                break;
            }
        } else c = c[b].str, d.innerHTML = c == a ? "" : htmlEscape(c);
    }, DataGrid.prototype._strSelectHandle = function(a, b, d) {
        var c = a.options;
        b = parseInt(b[a.name]);
        var e = "", f;
        for (f in c) if (a = c[f], void 0 != a.value) {
            if (b == parseInt(a.value)) {
                e = a.str;
                break;
            }
        } else if (b == f) {
            e = a.str;
            break;
        }
        d.innerHTML = htmlEscape(e);
    }, DataGrid.prototype._checkBoxHandle = function(a, b, d, c) {
        var e = el("input"), f = b[a.name], g = b[a.checkDis];
        e.type = "checkbox";
        e.checked = !0 == f;
        void 0 != g && (e.disabled = g);
        void 0 != a.func && (e.onclick = function(d) {
            d = d || window.event;
            var e = b[a.name];
            b[a.name] = !0 == this.checked ? 1 : 0;
            !1 == a.func(c, {
                obj: this
            }) && (b[a.name] = e, this.checked = 1 == e ? !0 : !1);
            stopProp(d);
        });
        d.appendChild(e);
    }, DataGrid.prototype._radioHandle = function(a, b, d, c) {
        var e = el("input"), f = b[a.name];
        e.type = "radio";
        e.checked = !0 == f;
        void 0 != a.func && (e.onclick = function(d) {
            d = b[a.name];
            b[a.name] = !0 == this.checked ? 1 : 0;
            !1 == a.func(c, {
                obj: this
            }) && (b[a.name] = d, this.checked = 1 == d ? !0 : !1);
        });
        d.appendChild(e);
    }, DataGrid.prototype._btnHandle = function(a, b, d, c) {
        if (void 0 != a.manyBtn) for (var e = a.manyBtn, f = 0; f < e.length; f++) b = el("input"), 
        b.type = "button", b.value = e[f].value || "", b.className = e[f].className, b.onclick = function(a) {
            return function() {
                e[a].click(c, {
                    obj: this
                });
            };
        }(f), d.appendChild(b); else {
            var g = a.subType, f = el("input"), h = this;
            f.type = "button";
            f.value = a.value ? a.value : "";
            if (void 0 != g) switch (g) {
              case "bind":
                b = b[a.name];
                !0 == b ? (f.className = a.classNameUn, f.disabled = !0) : f.className = a.className;
                f.onclick = function() {
                    a.click(c, {
                        obj: this
                    });
                };
                break;

              case "radio":
                b = b[a.name];
                f.className = !0 == b ? a.className : a.classNameUn;
                f.onclick = function() {
                    $("#" + h._ops.id + " input." + a.className).attr("class", a.classNameUn);
                    this.className = a.className;
                    a.click(c, {
                        obj: this
                    });
                };
                f.onfocus = function() {
                    this.blur();
                };
                break;

              case "switch":
                b = b[a.name], void 0 == a.onStr && void 0 == a.offStr && (a.onStr = label.SmbShareOpen, 
                a.offStr = label.SmbShareClose), void 0 == a.classNameUn && (a.classNameUn = a.className), 
                "boolean" == typeof b ? (!0 == b ? (f.className = a.className, f.value = a.onStr) : (f.className = a.classNameUn, 
                f.value = a.offStr), f.onclick = function() {
                    !0 == a.click(c, {
                        obj: this
                    }) && (this.value == a.onStr ? (this.className = a.classNameUn, this.value = a.offStr) : (this.className = a.className, 
                    this.value = a.onStr));
                }) : f = null;
            } else f.className = a.className, f.onclick = function() {
                a.click(c, {
                    obj: this
                });
            };
            f && d.appendChild(f);
        }
    }, DataGrid.prototype._portsHandle = function(a, b, d) {
        a = a.name.split(" ");
        d.innerHTML = b[a[1]] != b[a[0]] ? b[a[0]] + (0 == b[a[1]].length ? "" : " - " + b[a[1]]) : b[a[0]];
    }, DataGrid.prototype._ipsHandle = function(a, b, d) {
        a = a.name.split(" ");
        d.innerHTML = b[a[1]] != b[a[0]] ? b[a[0]] + (0 == b[a[1]].length ? "" : " - " + b[a[1]]) : b[a[0]];
    }, DataGrid.prototype._popVigHandle = function(a, b, d, c) {
        b = b[a.name];
        var e = a.popObj, f;
        if (!/^\d+$/.test(b)) for (f in e.subList) if (e.subList[f][".name"] == b) {
            b = f;
            break;
        }
        f = e.subList[b][e.name];
        a = this._calcShowSize(c, a);
        f = void 0 == f ? "" : f.toString();
        d.title = f;
        d.innerHTML = htmlEscape(getStrInMax(f, a));
    }, DataGrid.prototype._pathHandle = function(a, b, d) {
        a = b[a.name];
        d.innerHTML = htmlEscape(getStrInMax(a, 32));
        d.title = a;
    }, DataGrid.prototype._signalHandle = function(a, b, d) {
        var c = el("i"), e = el("i");
        a = parseInt(b[a.name]);
        c.className = "signalCon";
        e.className = "signal";
        a = !0 == isNaN(a) ? 0 : a;
        e.style.width = 3 * a + 2 * (a - 1) + "px";
        c.appendChild(e);
        d.appendChild(c);
    }, DataGrid.prototype._speedHandle = function(a, b, d) {
        a = b[a.name];
        d.innerHTML = 0 == parseInt(a) ? label.disLimit : a + "KB/s";
    }, DataGrid.prototype._trCleanCell = function(a) {
        var b = a.cells.length;
        try {
            a.innerHTML = "";
        } catch (d) {
            for (;0 < b; ) a.deleteCell(0), b = a.cells.length;
        }
    }, DataGrid.prototype._trEdit = function(a) {
        var b = this._ops.data, d = !1, c = -1;
        !0 == this._ops.hasSelBox && (d = a.cells[0].childNodes[0].checked);
        this._trCleanCell(a);
        c = this._getTrIndexInDataObj(a);
        this._fillEditRow(a, this._getTrIndex(a), b[c]);
        !0 == this._ops.hasSelBox && (a.cells[0].childNodes[0].checked = d);
    }, DataGrid.prototype._getTrIndex = function(a) {
        var b = this._table.rows, d = -1;
        if (null == a) return d;
        for (var c = !0 == this._ops.hasHed ? 1 : 0, e = b.length; c < e; c++) if (a === b[c]) {
            d = c;
            break;
        }
        return d;
    }, DataGrid.prototype._disableEditBtns = function() {
        $("table.dataGrid i.edit").toggleClass("edit").toggleClass("unedit");
    }, DataGrid.prototype._enableEditBtns = function() {
        $("table.dataGrid i.unedit").toggleClass("unedit").toggleClass("edit");
    }, DataGrid.prototype._editBtnClick = function(a, b) {
        var d = this;
        a.onclick = function() {
            var a, e, f, g = d._eventStateGet();
            switch (g) {
              case "edit":
                if (!1 == d._ops.spAutoEdit) return;
                break;

              case "default":
                break;

              default:
                return;
            }
            e = this.parentNode;
            !0 == b ? (d._eventStateSet("edit"), !0 == d._ops.spAutoEdit ? (f = d._getEditTr(), 
            a = d._getTrIndexInDataObj(f), -1 != a && "default" != g && (d._trCleanCell(f), 
            f.id = "", d._contentFill(f, d._ops.list, !0, a, d._ops.data[a], d._getDRL()))) : d._disableEditBtns(), 
            d._trEdit(e)) : null != d._ops.click && d._ops.click(d._getTrIndexInDataObj(e));
        };
    }, DataGrid.prototype._editBtnHandle = function(a, b, d) {
        d = document.createElement("i");
        d.className = "edit";
        this._editBtnClick(a, b);
        a.style.cursor = "pointer";
        a.appendChild(d);
    }, DataGrid.prototype._singelSelHandle = function(a, b) {
        var d, c, e, f = !0, g = !1;
        if (!1 != b._ops.hasHead) {
            d = b._table.rows;
            c = d[0].cells[0].childNodes[0];
            e = d.length;
            !1 == a.checked && (f = !1);
            for (var h = 1; h < e; h++) if (0 != d[h].cells[0].innerHTML.length) {
                if (1 == d[h].cells.length) {
                    c.checked = !0;
                    return;
                }
                a = d[h].cells[0].childNodes[0];
                !0 == a.checked ? g = !0 : "none" != d[h].style.display && (f = !1);
            }
            c.checked = f;
            this._toolSelBtnState(g);
        }
    }, DataGrid.prototype._calcShowSize = function(a, b) {
        var d;
        d = parseInt($(this._table).css("fontSize"));
        d = parseInt(this._state.headCells[a].width / (.65 * d));
        return d = void 0 != b.maxSize ? b.maxSize : d;
    }, DataGrid.prototype._tdClickHandle = function(a, b, d, c, e) {
        var f;
        f = a.type;
        b = b[a.name];
        switch (f) {
          case "btn":
            break;

          case "mask":
          case "dns":
          case "gateway":
          case "ip":
            this._fillEditRow_IP(d, c, e, b, a);
            break;

          case "mac":
            this._fillEditRow_MAC(d, c, e, b, a);
            break;

          case "select":
            this._fillEditRow_Select(d, c, e, b, a);
            break;

          case "selectApp":
            this._fillEditRow_Select(d, c, e, b, a, !0);
            break;

          case "checkbox":
            this._fillEditRow_Checkbox(d, c, e, b, a);
            break;

          case "radio":
            this._fillEditRow_Radio(d, c, e, b, a);
            break;

          case "ports":
            this._fillEdit_Ports(d, c, e, data, a);
            break;

          case "ips":
            this._fillEditRow_IPs(d, c, e, data, a);
            break;

          case "speed":
            this._fillEditRow_Speed(d, c, e, b, a);
            break;

          case "popVig":
            this._fillEditRow_PopVig(d, c, e, b, a);
            break;

          case "path":
            this._fillEditRow_Path(d, c, e, b, a);
            break;

          default:
            this._fillEditRow_Str(d, c, e, b, a);
        }
    }, DataGrid.prototype._contentFill = function(a, b, d, c, e, f) {
        var g, h, l = this._ops.head, k, m = this, n, q, r = this;
        !0 == this._ops.hasSelBox && (g = a.insertCell(-1), k = document.createElement("input"), 
        k.type = "checkbox", k.onclick = function() {
            m._singelSelHandle(k, m);
        }, g.appendChild(k), !1 == this._ops.hasHead && setStyle(g, {
            width: this._set.IDWidth
        }));
        !0 == this._ops.hasID && (g = a.insertCell(-1), g.innerHTML = f - c, !1 == this._ops.hasHead && setStyle(g, {
            width: this._set.IDWidth.width + "px"
        }));
        for (var p in b) {
            var s = b[p];
            h = s.type;
            g = a.insertCell(-1);
            !1 == this._ops.hasHead && setStyle(g, {
                width: l[p].width + "px"
            });
            null != s.tdStyles && setStyle(g, s.tdStyles);
            switch (h) {
              case "btn":
                this._btnHandle(s, e, g, c);
                break;

              case "time":
                this._timeHandle(e[s.name], g);
                break;

              case "timeP":
                this._timePHandle(e[s.name], g);
                break;

              case "selectApp":
              case "select":
                this._selectHandle(s, e, g);
                break;

              case "checkbox":
                !1 == s.edit && this._checkBoxHandle(s, e, g, c);
                break;

              case "radio":
                !1 == s.edit && this._radioHandle(s, e, g, c);
                break;

              case "strSelect":
                this._strSelectHandle(s, e, g);
                break;

              case "ports":
                this._portsHandle(s, e, g);
                break;

              case "ips":
                this._ipsHandle(s, e, g);
                break;

              case "speed":
                this._speedHandle(s, e, g);
                break;

              case "popVig":
                this._popVigHandle(s, e, g, p);
                break;

              case "path":
                this._pathHandle(s, e, g);
                break;

              case "signal":
                this._signalHandle(s, e, g);
                break;

              default:
                n = this._calcShowSize(p, s), q = e[s.name], q = void 0 == q ? "" : q.toString(), 
                n = !0 == s.igHTMLEscape ? getStrInMax(q, n) : htmlEscape(getStrInMax(q, n)), "mac" == h ? (g.innerHTML = n.toUpperCase(), 
                g.title = q.toUpperCase()) : (g.innerHTML = n, g.title = q), void 0 != s.className && (g.className = s.className);
            }
            s.tdClick && (g.style.cursor = "pointer", g.onclick = function(c, d, e, g, h) {
                return function() {
                    if (!r._event.tdEdit) {
                        c.beforeEdit && c.beforeEdit(c, d, e);
                        r._event.tdEdit = !0;
                        emptyNodes(e);
                        r._tdClickHandle(c, d, e, g, h);
                        var k = $(e).find("input")[0];
                        $(k).select();
                        c.maxLength && (k.inputLength = c.maxLength, k.maxLength = c.maxLength);
                        $(e).find("input").bind("blur", function() {
                            c.afterEdit && c.afterEdit(c, d, e, this, "blur");
                            d[c.name] = this.value;
                            r._trCleanCell(a);
                            r._contentFill(a, b, !1, g, d, f);
                            r._event.tdEdit = !1;
                        });
                        $(e).find("input").bind("keyup", function(h) {
                            h = h || window.event;
                            13 == h.keyCode && (c.afterEdit && c.afterEdit(c, d, e, this, "keyup"), d[c.name] = this.value, 
                            r._trCleanCell(a), r._contentFill(a, b, !1, g, d, f), r._event.tdEdit = !1);
                        });
                    }
                };
            }(s, e, g, c, p));
        }
        !0 == this._ops.edit && (g = a.insertCell(-1), this._editBtnHandle(g, d, c), !1 == this._ops.hasHead && setStyle(g, {
            width: this._set.editWidth
        }));
    }, DataGrid.prototype._refresh = function(a) {
        for (var b = this._table, d = !0 == this._ops.hasHead ? 1 : 0, c = 0, e = b.rows.length; c < e; c++) null != b.rows[d] && b.deleteRow(d);
        this._event.state = "default";
        this._setEditTr(null);
        this._contentCreate(a);
        this._state.isBlank = 0 < this._table.rows.length - d ? !1 : !0;
        this._event.tdEdit = !1;
        this._IESixResize();
    }, DataGrid.prototype._contentCreate = function(a) {
        var b = this._ops.list, d = this._ops.data, c, e = this._table, f = 0, g = !1;
        c = this._ops.paging.num;
        var h, l = (a - 1) * c, k;
        if (null != b && (!1 != this._ops.hasHead || null != this._ops.head)) if (f = this._getListLen(), 
        0 == f) this._state.isBlank = !0, this._content_blank(), this._cleanList(this._ops.id + "pagIngList"); else {
            g = this._editable();
            f = f > this._ops.max ? this._ops.max : f;
            l = f - 1 - l;
            k = l - c + 1 || 0;
            for (var m = f - 1; 0 <= m; m--) m > l || m < k ? (c = e.insertRow(-1), c.insertCell(-1), 
            c.style.display = "none") : (h = d[m], c = e.insertRow(-1), this._contentFill(c, b, g, m, h, f));
            this._flushBtn();
            this._pageList(f, a);
        }
    }, DataGrid.prototype._toolSelBtnState = function(a) {
        var b;
        null != this._ops.toolBar && (b = this._toolBar.delSelBtn, null != b && (b.className = !0 == a ? "delSel" : "delSelUn"), 
        b = this._toolBar.clrSelBtn, null != b && (b.className = !0 == a ? "clrEn" : "clrUn"));
    }, DataGrid.prototype._selectAll = function() {
        function a(a) {
            1 != b[a].cells.length && 0 != b[a].cells.length && (e = b[a].cells[0].childNodes[0], 
            null != e && ("none" != b[a].style.display && (e.checked = c), !0 == e.checked && (f = !0)));
        }
        for (var b = this._table.rows, d = b.length, c = b[0].cells[0].childNodes[0].checked, e, f = !1, g = this._ops.selAllHd, c = !0 == this._ops.hasHead ? b[0].cells[0].childNodes[0].checked : !1, h = !0 == this._ops.hasHead ? 1 : 0; h < d; h++) "function" == typeof g ? g(h, function(b) {
            !0 == b && a(h);
        }) : a(h);
        this._toolSelBtnState(f);
    }, DataGrid.prototype._selectAllCreate = function(a, b) {
        var d = document.createElement("input"), c = this;
        d.type = "checkbox";
        d.className = "selAllBox";
        d.onclick = function() {
            c._selectAll();
        };
        return d;
    }, DataGrid.prototype._headCreate = function() {
        var a = this._ops.head, b = this, d, c;
        c = this._table;
        var e, f = this._ops.list, g, h, l, k, m = this._state.headCells;
        g = 0;
        var n = this._state.headWidth;
        if (!1 != this._ops.hasHead) if (null == a) void 0 != c.rows[0] && (this._state.colNum = c.rows[0].cells.length); else {
            d = c.insertRow(-1);
            d.className = this._ops.classCol.headClassName;
            this._state.colNum = this._ops.list.length;
            this._event.sortName = this._ops.sortName;
            e = parseInt(c.offsetWidth);
            !0 == this._ops.hasSelBox && (c = d.insertCell(-1), c.appendChild(this._selectAllCreate()), 
            setStyle(c, {
                width: this._set.IDWidth,
                textAlign: "center"
            }), e -= parseInt(this._set.IDWidth) + 1, this._state.colNum++);
            !0 == this._ops.hasID && (c = d.insertCell(-1), setStyle(c, {
                width: this._set.IDWidth,
                textAlign: "center"
            }), e -= parseInt(this._set.IDWidth) + 1, this._state.colNum++);
            !0 == this._ops.edit && (e -= parseInt(this._set.editWidth) + 1);
            e -= a.length;
            for (var q in a) if ("undefined" != typeof a[q].sort) {
                this._event.sortable = !0;
                break;
            }
            for (q in a) {
                var r = a[q];
                l = f[q].name;
                c = d.insertCell(-1);
                setStyle(c, {
                    textAlign: "center",
                    padding: parseFloat(this._ops.headpadding) + "px"
                });
                "undefined" != typeof r.width && (g = parseInt(r.width / n * e), m[q] = void 0 == m[q] ? {} : m[q], 
                m[q].width = g, setStyle(c, {
                    width: g + "px"
                }));
                void 0 == k && (k = c.offsetHeight);
                !0 == this._event.sortable ? (g = el("div"), g.className = "dataGridSortDiv", c.appendChild(g), 
                h = el("label"), h.className = this._ops.sortName == l ? "dataGridSortLbl dataGridSortLblHv" : "dataGridSortLbl dataGridSortLblDe", 
                h.style.lineHeight = k + "px", h.innerHTML = r.field, g.appendChild(h), h = el("i"), 
                h.className = this._ops.sortName == l && "up" == this._ops.sortType ? "dataGridSortArrow dataGridSortUp" : "dataGridSortArrow dataGridSortDown", 
                h.style.display = this._ops.sortName == l ? "inline-block" : "none", h.sortType = this._ops.sortName == l ? this._ops.sortType : "null", 
                g.appendChild(h), h = el("p"), h.className = this._ops.sortName == l ? "dataGridSortP dataGridSortPHv" : "dataGridSortP dataGridSortPDe", 
                h.innerHTML = "&nbsp;", g.appendChild(h)) : (g = c, c.innerHTML = r.field);
                "undefined" != typeof r.sort && (c.style.cursor = "pointer", c.onclick = function(a) {
                    return function() {
                        b._sort(this, a);
                    };
                }(l), c.onmouseover = function(a) {
                    return function() {
                        b._event.sortName != a && (this.id = "DataGridSortHeadCellId", $("#DataGridSortHeadCellId p.dataGridSortP").css("backgroundColor", "#86B157"), 
                        this.id = "");
                    };
                }(l), c.onmouseout = function(a) {
                    return function() {
                        b._event.sortName != a && (this.id = "DataGridSortHeadCellId", $("#DataGridSortHeadCellId p.dataGridSortP").css("backgroundColor", "#E6E6E6"), 
                        this.id = "");
                    };
                }(l));
            }
            !0 == this._ops.edit && (c = d.insertCell(-1), c.innerHTML = btn.edit, setStyle(c, {
                width: this._set.editWidth,
                textAlign: "center"
            }), this._state.colNum++);
        }
    }, DataGrid.prototype._sort = function(a, b) {
        var d = this._table, c = $("#" + d.id + " i.dataGridSortArrow"), e, f, g;
        a.id = "DataGridSortHeadCellId";
        e = $("#DataGridSortHeadCellId i.dataGridSortArrow")[0];
        "null" == e.sortType || "up" == e.sortType ? (f = "down", g = "dataGridSortArrow dataGridSortDown") : (f = "up", 
        g = "dataGridSortArrow dataGridSortUp");
        if (null != this._ops.sortFunc && !1 != this._ops.sortFunc(b, f)) {
            this._event.sortName = b;
            $("#" + d.id + " p.dataGridSortP").css("backgroundColor", "#E6E6E6");
            $("#" + d.id + " label.dataGridSortLbl").css("color", "#737373");
            c.css("display", "none");
            for (var h in c) c[h].sortType = "null";
            $("#DataGridSortHeadCellId p.dataGridSortP").css("backgroundColor", "#86B157");
            $("#DataGridSortHeadCellId label.dataGridSortLbl").css("color", "#86B157");
            e.style.display = "inline-block";
            e.sortType = f;
            e.className = g;
            a.id = "";
            this._refresh(this._pgList.page);
        }
    }, DataGrid.prototype._fillDefault = function() {
        var a = this._ops.list, b, d;
        for (d in a) b = a[d], void 0 == b.type && (b.type = "str"), void 0 == b.edit && (b.edit = !0), 
        void 0 == b.clear && (b.clear = !1);
    }, DataGrid.prototype._headWidthCol = function() {
        var a = this._ops.head, b = 0, d;
        if (!1 != this._ops.hashead) {
            for (var c in a) d = a[c].width, void 0 != d && (b += d);
            this._state.headWidth = b;
        }
    }, DataGrid.prototype._optionsInit = function(a) {
        var b, d;
        for (d in a) if (b = a[d], "undefined" != typeof this._ops[d]) if ("object" != typeof b || b instanceof Array || null == this._ops[d]) this._ops[d] = b; else for (var c in b) this._ops[d][c] = b[c];
        this._fillDefault();
        this._headWidthCol();
    }, DataGrid.prototype._getTableObj = function() {
        this._table = this._ops.obj;
        null == this._table && (this._table = id(this._ops.id));
        return this._table;
    }, DataGrid.prototype._tableSet = function() {
        var a = this._ops.classCol;
        0 != a.gridClassName.length && (this._table.className = a.gridClassName);
        0 != a.ListSpanClassName.length && (this._pgList.ListSpanClassName = a.ListSpanClassName);
        !0 == this._ops.fixed && setStyle(this._table, {
            tableLayout: "fixed"
        });
    }, DataGrid.prototype._IESixResize = function() {
        !0 == isIESix && "undefined" != typeof highSetAutoFit && highSetAutoFit();
    }, DataGrid.prototype._pageList = function(a, b) {
        var d = this._table.parentNode, c = el("div"), e = this._ops.paging, f = this._ops.id + "pagIngList";
        b = void 0 == b ? 1 : b;
        b = 1 > b ? 1 : b;
        0 == this._pgList.id.length && (this._pgList.id = c.id = f, c.className = this._ops.classCol.gridPageListClassName, 
        d.appendChild(c), this._pgList.obj = c, c.style.overflow = "hidden");
        this._cleanList(f);
        this._fillList(f, b, e.num, this._ops.id, a);
    }, DataGrid.prototype._pageListGetNiceScrollTop = function(a) {
        var b = getChildNode(this._ops.niceScroll.ta, "div", 0);
        return getoffset(id(a), b).top;
    }, DataGrid.prototype._pageListNiceScrollTo = function(a) {
        a = this._ops.niceScroll;
        var b;
        null != a && (b = parseInt(a.st.style.top), a._reset(), a.scrollTo(b * a.scH / a.sbcH + 1));
    }, DataGrid.prototype._changeTable = function(a, b) {
        var d = this._table.rows, c = d.length, e = !0 == this._ops.hasHead ? a + 1 : a, f = !0 == this._ops.hasHead ? a : a - 1, g = 0, h = !1, l = this._ops.list, k = this._ops.data, h = this._editable(), m = 0, n = 0, q;
        this._pgList.page = parseInt(e / b) + 1;
        m = !0 == this._ops.hasHead ? c - 1 : c;
        n = "add" == this._eventStateGet() ? -1 : 0;
        m += n;
        q = !0 == isIE ? !0 == isIENormal ? "table-row" : "block" : "table-row";
        for (var r = !0 == this._ops.hasHead ? 1 : 0; r < c; r++) {
            var p = d[r];
            r < e || r > f + b ? p.style.display = "none" : (1 == p.cells.length && (p.deleteCell(0), 
            g = m - r - n, this._contentFill(p, l, h, g, k[g], m)), p.style.display = q);
        }
        if (!0 == this._ops.hasSelBox) {
            e = !1;
            f = 1 < c ? !0 : !1;
            for (r = !0 == this._ops.hasHead ? 1 : 0; r < c; r++) p = d[r], "none" == p.style.display || null != p.cells[0].childNodes[0] && !1 != p.cells[0].childNodes[0].checked || (f = !1), 
            null != p.cells[0].childNodes[0] && !0 == p.cells[0].childNodes[0].checked && (e = !0);
            !0 == this._ops.hasHead && (d[0].cells[0].childNodes[0].checked = f);
            this._toolSelBtnState(e);
        }
        this._IESixResize();
    }, DataGrid.prototype._changeListDiv = function(a, b) {
        var d = 19 * id(a).childNodes.length, c = 0;
        if (!0 == isIESix) {
            var e = $("#" + this._ops.id + "pagIngList div." + this._pgList.plcClassName)[0], c = d - (0 < b ? b : -1 * b);
            e.style.width = 96 > c ? c + "px" : "96px";
        }
    }, DataGrid.prototype._listNodeClick = function(a, b, d, c, e) {
        var f = this, g = this._pgList.num, h = b + this._pgList.listDivStr, l = id(h);
        d = b + this._pgList.listArrowRStr;
        b += this._pgList.listArrowLStr;
        var k = l.childNodes, m = k.length, n = 0, q = 0, r = 0, p = a, s = function() {
            k[a].className = f._pgList.ListSpanSClassName;
            k[a].style.cursor = "default";
        }, x = function() {
            var b = parseInt((a + 1 - g) / (g - 2));
            a < g - 1 || (r = g + b * (g - 2) - 1, q = f._pgList.listMarginLeft * (g - 2) * ((r + 1 - g) / (g - 2) + 1), 
            l.style.marginLeft = -1 * q + "px", f._changeListDiv(h, q));
        };
        if ("default" != k[a].style.cursor) {
            for (var w = 0; w < m; w++) if ("default" == k[w].style.cursor) {
                k[w].className = this._pgList.ListSpanClassName;
                k[w].style.cursor = "pointer";
                n = w;
                break;
            }
            !0 == e && (p = Math.floor((a + 1 - g) / (g - 2)) * (g - 2) + (g - 1), p = 0 > p ? 0 : p);
            0 == p ? (id(b).disabled = !0, id(d).disabled = !1, s(), l.style.marginLeft = "0px", 
            f._changeListDiv(h, 0)) : p == m - 1 ? (id(b).disabled = !1, id(d).disabled = !0, 
            s(), x()) : 0 == (p + 1 - g) % (g - 2) && 0 <= p + 1 - g ? (id(b).disabled = !1, 
            id(d).disabled = !1, s(), p > n && (q = f._pgList.listMarginLeft * (g - 2) * ((a + 1 - g) / (g - 2) + 1), 
            l.style.marginLeft = -1 * q + "px", f._changeListDiv(h, q), x())) : 0 == (p + 2 - g) % (g - 2) && 0 <= p + 2 - g ? (id(b).disabled = !1, 
            id(d).disabled = !1, s(), p < n && (q = f._pgList.listMarginLeft * (g - 2) * ((a + 1 - (g - 2 + 1)) / (g - 2)), 
            l.style.marginLeft = -1 * q + "px", f._changeListDiv(h, q))) : (id(b).disabled = !1, 
            id(d).disabled = !1, s());
            a == m - 1 && (id(d).disabled = !0);
            this._changeTable(a * c, c);
        }
    }, DataGrid.prototype._listMove = function(a, b, d, c) {
        var e = this, f, g = this._pgList.num, h = a + this._pgList.listDivStr;
        d = a + this._pgList.listArrowRStr;
        var l = a + this._pgList.listArrowLStr, k = id(h), m = k.childNodes;
        a = m.length;
        var n = !0 == b ? 1 : -1;
        d = id(d);
        var l = id(l), q = function() {
            m[p].className = e._pgList.ListSpanClassName;
            m[p].style.cursor = "pointer";
            m[p + n].className = e._pgList.ListSpanSClassName;
            m[p + n].style.cursor = "default";
        }, r = function() {
            var a = e._pgList.listMarginLeft, b = k.style.marginLeft;
            b && "0px" != b ? (f = parseInt(b) + -1 * n * a * (g - 2), e._changeListDiv(h, f), 
            k.style.marginLeft = f + "px") : (f = n * a * (g - 2), e._changeListDiv(h, f), k.style.marginLeft = -1 * f + "px");
        };
        if (!(!0 == b && !0 == d.disabled || !1 == b && !0 == l.disabled)) {
            for (var p = 0; p < a; p++) if ("default" == m[p].style.cursor) return p == a - 2 && b ? (q(), 
            d.disabled = b, l.disabled = !b, 0 == (p + 2 - g) % (g - 2) && 0 <= p + 2 - g && r()) : 1 != p || b ? 0 == (p + 2 - g) % (g - 2) && 0 <= p + 2 - g && b ? (q(), 
            r(), d.disabled = !b, l.disabled = !b) : 0 == (p + 1 - g) % (g - 2) && 0 <= p + 1 - g && !b ? (q(), 
            r(), d.disabled = b, l.disabled = b) : (q(), b ? l.disabled = !b : d.disabled = b) : (q(), 
            d.disabled = b, l.disabled = !b), b ? this._changeTable((p + 1) * c, c) : this._changeTable((p - 1) * c, c), 
            !0;
            clearSelection();
        }
    }, DataGrid.prototype._fillList = function(a, b, d, c, e) {
        var f = id(a), g = e / d + (0 == e || 0 < e % d ? 1 : 0), h = id(c), l = this, k = 0;
        if (e <= d) {
            f = h.rows;
            id(a).style.display = "none";
            b = !0 == isIE ? !0 == isIENormal ? "table-row" : "block" : "table-row";
            e = 0;
            for (k = f.length; e < k; e++) f[e].style.display = b;
            this._changeTable(0, d);
        } else {
            id(a).style.display = "block";
            e = document.createElement("span");
            e.className = "pageArrow pageArrowLa";
            e.id = a + this._pgList.listArrowRStr;
            e.onclick = function() {
                null != l._ops.pageTurnFunc ? l._ops.pageTurnFunc(parseInt(g)) : l._listNodeClick(parseInt(g - 1), a, c, d);
                l._pageListNiceScrollTo(a);
            };
            f.appendChild(e);
            e = document.createElement("span");
            e.className = "pageArrow pageArrowL";
            e.id = a + this._pgList.listArrowRStr;
            e.onclick = function() {
                if (null != l._ops.pageTurnFunc) {
                    var b = l._pgList.page, b = b + (b == parseInt(g) ? 0 : 1);
                    l._ops.pageTurnFunc(b);
                } else l._listMove(a, !0, c, d);
                l._pageListNiceScrollTo(a);
            };
            f.appendChild(e);
            e = document.createElement("div");
            e.className = this._pgList.plcClassName;
            f.appendChild(e);
            k = document.createElement("div");
            k.className = "pageListDiv";
            k.id = a + this._pgList.listDivStr;
            e.appendChild(k);
            for (e = 1; e <= g; e++) h = document.createElement("span"), h.innerHTML = e, h.className = this._pgList.ListSpanClassName, 
            h.onclick = function(b) {
                return function() {
                    null != l._ops.pageTurnFunc ? l._ops.pageTurnFunc(parseInt(b + 1)) : l._listNodeClick(b, a, c, d);
                };
            }(e - 1), k.appendChild(h);
            e = document.createElement("span");
            e.className = "pageArrow pageArrowR";
            e.id = a + this._pgList.listArrowLStr;
            e.onclick = function() {
                if (null != l._ops.pageTurnFunc) {
                    var b = l._pgList.page;
                    l._ops.pageTurnFunc(b + (1 == b ? 0 : -1));
                } else l._listMove(a, !1, c, d);
            };
            f.appendChild(e);
            e = document.createElement("span");
            e.className = "pageArrow pageArrowFi";
            e.id = a + this._pgList.listArrowRStr;
            e.onclick = function() {
                null != l._ops.pageTurnFunc ? l._ops.pageTurnFunc(1) : l._listNodeClick(0, a, c, d);
            };
            f.appendChild(e);
            this._listNodeClick(b - 1, a, c, d, !0);
        }
        clearSelection();
    }, DataGrid.prototype._cleanList = function(a) {
        a = id(a);
        null != a && (a.innerHTML = "");
    });
}


