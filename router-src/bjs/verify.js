function Checks() {
    this.ipStr = "ip";
    this.maskStr = "mask";
    this.gatewayStr = "gateway";
    this.dnsStr = "dns";
    this.validIpAddr = function(a, b) {
        for (var c = a.split("."), d = 1, e = c.length; d < e; d++) if (255 < c[d]) return EINVIP;
        return 0 == c[0] || 224 < c[0] ? EINVNET : void 0 != b && !0 == b.unCheckMutiIp || 224 != c[0] ? void 0 != b && !0 == b.unCheckLoopIp || 127 != c[0] ? ENONE : EINVLOOPIP : EINVGROUPIP;
    };
    this.validIpFormat = function(a) {
        return !0 == /^([0-9]{1,3}\.){3}([0-9]{1,3})$/g.test(a) ? ENONE : EINVIPFMT;
    };
    this.checkIp = function(a, b) {
        var c = ENONE;
        return 0 == a.length ? EINVIP : ENONE != (c = this.validIpFormat(a)) ? c : c = this.validIpAddr(a, b);
    };
    this.validMacAddr = function(a) {
        a = a.toLowerCase();
        return "00-00-00-00-00-00" == a ? EINVMACZERO : "ff-ff-ff-ff-ff-ff" == a ? EINVMACBROAD : 1 == "0123456789abcdef".indexOf(a.charAt(1)) % 2 ? EINVMACGROUP : ENONE;
    };
    this.validMacFormat = function(a) {
        a.split("-");
        return !0 == /^([0-9a-f]{2}-){5}([0-9a-f]{2})+$/gi.test(a) ? ENONE : EINVMACFMT;
    };
    this.checkMac = function(a) {
        var b = ENONE;
        return ENONE != (b = this.validMacFormat(a)) ? b : b = this.validMacAddr(a);
    };
    this.checkMask = function(a) {
        var b = 1;
        if (ENONE != this.validIpFormat(a)) return EINVMASK;
        a = this.transIp(a);
        for (var c = 0; 32 > c; c++, b <<= 1) if (0 != (b & a)) {
            if (0 == (a ^ 4294967295 << c)) return ENONE;
            break;
        }
        return EINVMASK;
    };
    this.checkMtu = function(a, b, c) {
        if (!1 == this.checkNum(a)) return EINVMTU;
        void 0 == b && (b = 1500, c = 576);
        return !1 == this.checkNumRange(parseInt(a), b, c) ? EINVMTU : ENONE;
    };
    this.checkIpMask = function(a, b) {
        var c = this.transIp(b), d = this.transIp(a), c = this.checkIPNetHost(d, c);
        if (c != ENONE) return c;
        c = this.checkIpClass(a, b);
        return c != ENONE ? c : ENONE;
    };
    this.checkNetworkMask = function(a, b) {
        return a == this.getNetwork(a, b) ? ENONE : EINVIPMASKPAIR;
    };
    this.getNetwork = function(a, b) {
        for (var c = a.split("."), d = b.split("."), e = [], f = 0, g = c.length; f < g; f++) e.push(c[f] & d[f]);
        return e.join(".");
    };
    this.isSameNet = function(a, b, c) {
        a = this.getNetwork(a, b);
        b = this.getNetwork(c, b);
        return a == b;
    };
    this.transIp = function(a) {
        a = a.split(".");
        return 16777216 * a[0] + 65536 * a[1] + 256 * a[2] + 1 * a[3];
    };
    this.getCNStrLen = function(a) {
        return a.replace(/[^\x00-\xFF]/g, "xxx").length;
    };
    this.getIpClass = function(a) {
        a = a.split(".");
        return 127 >= a[0] ? "A" : 191 >= a[0] ? "B" : 223 >= a[0] ? "C" : 239 >= a[0] ? "D" : "E";
    };
    this.checkNum = function(a) {
        return !/\D/g.test(a);
    };
    this.checkIPNetHost = function(a, b) {
        return 0 == (a & b) || b == (a & b) ? EINVNETID : 0 == (a & ~b) || ~b == (a & ~b) ? EINVHOSTID : ENONE;
    };
    this.checkIpClass = function(a, b) {
        var c = this.getIpClass(a), d = this.transIp(a), e = this.transIp(b);
        switch (c) {
          case "A":
            d &= 4278190080;
            break;

          case "B":
            d &= 4294901760;
            break;

          case "C":
            d &= 4294967040;
        }
        return e > d ? ENONE : EINVIPMASKPAIR;
    };
    this.checkInputName = function(a, b, c) {
        a = this.getCNStrLen(a);
        return c > a || b < a ? ESTRINGLEN : ENONE;
    };
    this.checkNumRange = function(a, b, c) {
        return isNaN(a) || a < c || a > b ? !1 : !0;
    };
    this.checkSsid = function(a) {
        if ("" == a) return EINVSSIDEMPTY;
        var b = this.getCNStrLen(a);
        return 1 > b || 32 < b ? EINVSSIDLEN : /^ +$/gi.test(a) ? EINVSSIDBLANK : ENONE;
    };
    this.checkWifiName = function(a, b, c) {
        return ENONE != this.checkInputName(a, b, c) ? !1 : !0;
    };
    this.checkDomain = function(a) {
        return !0 == /[^0-9a-z\-\.]/gi.test(a) ? EINDOMAIN : ENONE;
    };
    this.checkWlanPwd = function(a) {
        var b = getCNStrLen(a);
        if (0 != b) {
            a: {
                for (var c, d = 0, e = a.length; d < e; d++) if (c = a.charAt(d), -1 == "0123456789ABCDEFabcdefGHIJKLMNOPQRSTUVWXYZghijklmnopqrstuvwxyz`~!@#$^&*()-=_+[]{};:'\"\\|/?.,<>/% ".indexOf(c)) {
                    a = !1;
                    break a;
                }
                a = !0;
            }
            if (!1 == a) return EINVWLANPWD;
            if (8 > b || 63 < b) return EINVPSKLEN;
        }
        return ENONE;
    };
    this.checkPath = function(a) {
        return null == a || void 0 === a || 0 == a.length ? EINVPATHNULL : ENONE;
    };
    this.checkPhoneNum = function(a) {
        return /^\d{11}$/.test(a);
    };
    this.checkEmail = function(a) {
        if (!/^[\x21-\x7e]+@[\w\d\-]+\./.test(a)) return !1;
        a = a.split("@");
        if (2 < a.length) return !1;
        a = a[1];
        if (255 < a.length) return !1;
        a = a.split(".");
        for (var b in a) if (!/^[a-zA-Z\d\-]{1,64}$/.test(a[b])) return !1;
        return !0;
    };
    this.checkUsername = checkEmail;
}

(function() {
    Checks.call(window);
})();
