var uciAppInfo = {
    fileName: "plugin_config",
    secType: {},
    secName: {
        plugin: "plugin"
    },
    optName: {
        total: "total",
        used: "used",
        marketApp: "market_plugin",
        installedApp: "installed_plugin",
        updateNum: "can_update",
        notInstalledNum: "not_installed",
        property: "property",
        preUpdating: "pre_updating"
    },
    listName: {},
    dynData: {},
    dynOptName: {
        id: "plugin_id",
        name: "name",
        size: "size",
        iconURL: "icon_url",
        status: "status",
        updated: "can_update",
        version: "version",
        lastVersion: "last_version",
        lastSize: "last_size",
        pageURL: "uri",
        author: "author",
        releaseTime: "release_time",
        descriptionUrl: "desc_url",
        action: "action",
        progress: "progress",
        start: "start",
        end: "end",
        updateLog: "update_log",
        operaType: "opera_type"
    },
    dynOptValue: {
        installed: {
            yes: 0,
            no: 1
        },
        updated: {
            yes: 1,
            no: 0
        },
        action: {
            install: "install",
            uninstall: "uninstall",
            update: "update"
        },
        properties: {
            preInstall: 0,
            handleInstall: 1
        },
        operaType: {
            install: "1",
            uninstall: "2",
            update: "3"
        },
        actionInstall: "install",
        actionUninstall: "uninstall",
        actionUpdate: "update"
    },
    actionName: {
        install: "install_plugin",
        uninstall: "uninstall_plugin",
        update: "update_plugin",
        view: "view_plugin",
        open: "open_plugin",
        getMarketApp: "get_market_plugin",
        getInstalledApp: "get_installed_plugin",
        getStorageInfo: "get_storage_info",
        getAppStatus: "get_plugin_status",
        getUpdateInfo: "get_update_info",
        getUninstalledInfo: "get_uninstalled_info"
    },
    actionDetail: {
        appIDList: "plugin_id_list"
    }
}, uciNetwork = {
    fileName: "network",
    secType: {
        iface: "interface",
        user_route: "user_route",
        sys_route: "sys_route"
    },
    secName: {
        lan: "lan",
        wan: "wan"
    },
    optName: {
        ifName: "ifname",
        proto: "proto",
        ip: "ipaddr",
        pppoeUsr: "username",
        pppoePass: "password",
        netmask: "netmask",
        ipMode: "ip_mode",
        gateway: "gateway",
        dns: "dns",
        priDns: "pri_dns",
        sndDns: "snd_dns",
        mtu: "mtu",
        upTime: "up_time",
        speed: "speed_duplex",
        mac: "macaddr",
        target: "target",
        iface: "interface",
        facIp: "fac_ipaddr",
        phyStatus: "phy_status",
        wanStatus: "link_status",
        code: "error_code",
        upSpeed: "up_speed",
        downSpeed: "down_speed"
    },
    optValue: {
        proto: {
            dynIp: "dhcp",
            staticIp: "static",
            pppoe: "pppoe",
            none: "none"
        },
        ifname: {
            wan: "eth0",
            lan: "br-lan",
            host: "host",
            factory: "factory"
        },
        ipMode: {
            dynamic: "dynamic",
            manual: "manual"
        }
    },
    dynData: {
        wanStatus: "wan_status",
        lanStatus: "lan_status",
        wanProto: "wan_proto",
        ifaceMac: "iface_mac",
        bridgestatus: "bridge_status"
    },
    action: {
        wanDetect: "detect_wan_proto"
    }
}, uciProto = {
    fileName: "protocol",
    secType: {
        iface: "interface",
        proto: "proto"
    },
    secName: {
        wan: "wan",
        dhcp: "dhcp",
        sta: "static",
        pppoe: "pppoe"
    },
    optName: {
        type: "wan_type",
        rate: "wan_rate",
        proto: "proto",
        ip: "ipaddr",
        pppoeUsr: "username",
        pppoePwd: "password",
        netmask: "netmask",
        gateway: "gateway",
        dnsMode: "dns_mode",
        priDns: "pri_dns",
        sndDns: "snd_dns",
        mtu: "mtu",
        speed: "wan_rate",
        dialMode: "dial_mode",
        connMode: "conn_mode",
        demand: "demand_idle",
        manual: "manual_idle",
        ipMode: "ip_mode",
        ISPIp: "specific_ip",
        connect: "connect",
        hostName: "hostname",
        acName: "access",
        broadcast: "broadcast",
        broadcast_en: "enable_broadcast",
        svcName: "server",
        macaddr: "macaddr"
    },
    optValue: {
        proto: {
            none: "none",
            dynIp: "dhcp",
            staticIp: "static",
            pppoe: "pppoe"
        },
        dnsMode: {
            dynamic: "dynamic",
            manual: "manual"
        },
        connMode: {
            auto: "auto",
            demand: "demand",
            manual: "manual"
        },
        ispMode: {
            dhcp: "dynamic",
            sta: "static"
        },
        diagMode: {
            auto: "auto",
            normal: "normal",
            special1: "special1",
            special2: "special2",
            special3: "special3",
            special4: "special4",
            special5: "special5",
            special6: "special6",
            special7: "special7"
        }
    }
}, uciDhcpd = {
    fileName: "dhcpd",
    secName: {
        udhcpd: "udhcpd"
    },
    optName: {
        enable: "enable",
        poolStart: "pool_start",
        poolEnd: "pool_end",
        leaseTime: "lease_time",
        leaseFile: "lease_file",
        gateway: "gateway",
        priDns: "pri_dns",
        sndDns: "snd_dns",
        hostName: "hostname",
        mac: "mac",
        ip: "ip",
        expires: "expires",
        auto: "auto"
    },
    dynData: {
        dhcpClient: "dhcp_clients"
    }
}, uciArp = {
    fileName: "ip_mac_bind",
    secType: {
        arp: "user_bind"
    },
    optName: {
        ipAddr: "ip",
        mac: "mac",
        status: "status",
        hostname: "hostname",
        orgHostName: "orgHostName"
    },
    dynData: {
        sysArp: "sys_arp"
    }
}, uciApmngr = {
    apmng_plugin_set: "apmng_plugin_set",
    apmng_plugin_status: "apmng_plugin_status",
    secType: {
        aplist: "ap_list",
        apcfg: "settings"
    },
    optName: {
        id: "id",
        entry_id: "entry_id",
        entry_name: "entry_name",
        model_name: "model_name",
        led_status: "led_status",
        link_status: "link_status",
        upgrade_status: "upgrade_status",
        sw_version: "sw_version",
        hw_version: "hw_version",
        is_hd_ap: "is_hd_ap",
        enable: "enable",
        rssi_restrict_2_4G: "rssi_restrict_2_4G",
        rssi_kick_2_4G: "rssi_kick_2_4G",
        rssi_restrict_val_2_4G: "rssi_restrict_val_2_4G",
        rssi_kick_val_2_4G: "rssi_kick_val_2_4G",
        rssi_restrict_5G: "rssi_restrict_5G",
        rssi_kick_5G: "rssi_kick_5G",
        rssi_restrict_val_5G: "rssi_restrict_val_5G",
        rssi_kick_val_5G: "rssi_kick_val_5G"
    },
    dynData: {
        aplist: "ap_list",
        apcfg: "settings"
    },
    actionName: {
        setLed: "set",
        setApSwitch: "set",
        setApName: "set",
        apUpgrade: "upgrade"
    }
}, uciGuestNet = {
    fileName: "guest_network",
    secType: {
        guest: "guest"
    },
    secName: {
        wireless2G: "guest_2g",
        wireless5G: "guest_5g",
        encrypt2G: "dynamic_encrypt_2g",
        encrypt5G: "dynamic_encrypt_5g"
    },
    optName: {
        enable: "enable",
        ssid: "ssid",
        encrypt: "encrypt",
        key: "key",
        accright: "accright",
        upload: "upload",
        download: "download",
        timelimit: "time_limit",
        duration: "duration",
        timetype: "limit_type",
        name: "name",
        mon: "mon",
        tue: "tue",
        wed: "wed",
        thu: "thu",
        fri: "fri",
        sat: "sat",
        sun: "sun",
        startTime: "start_time",
        endTime: "end_time",
        timeLeft: "time_left",
        updatePeriod: "update_mode"
    },
    dynOptValue: {
        encryption: {
            off: 0,
            on: 1
        }
    },
    optValue: {
        timetype: {
            timeout: "timeout",
            schedule: "schedule"
        },
        enable: {
            yes: "1",
            no: "0"
        }
    },
    dynData: {
        timeLeft2G: "guest_left_2g",
        guestRule2G: "guest_rule_2g"
    }
}, uciUpnp = {
    fileName: "upnpd",
    secType: {
        upnpd: "upnpd"
    },
    secName: {
        upnpCfg: "config"
    },
    optName: {
        uatPmp: "enable_natpmp",
        upnp: "enable_upnp"
    },
    dynData: {
        upnpLease: "upnp_lease"
    }
}, uciDdns = {
    fileName: "ddns",
    secType: {
        ddns: "ddns"
    },
    secName: {
        phDdns: "phddns"
    },
    optName: {
        autologin: "auto_login",
        username: "username",
        password: "password"
    },
    dynData: {
        ddnsStatus: "ddns_status"
    }
}, uciWireless = {
    fileName: "wireless",
    secType: {
        wifiDevice: "wifi-device",
        wifiIface: "wifi-iface"
    },
    secName: {
        wifiDev0: "wifi0",
        wifiIf0: "ath0",
        wifiDev1: "wifi1",
        wifiIf1: "ath1",
        wdscli0: "wdscli0",
        wdscli1: "wdscli1",
        freq0: "freq0",
        freq1: "freq1",
        improveWifiJamStatus2g: "improve_wifi_jam_status_2g",
        improveWifiJamResult2g: "improve_wifi_jam_result_2g",
        improveWifiJamStatus5g: "improve_wifi_jam_status_5g",
        improveWifiJamResult5g: "improve_wifi_jam_result_5g",
        jamRate2g: "jam_rate_2g",
        jamRate5g: "jam_rate_5g",
        getWifiJamStatus2g: "get_wifi_jam_status_2g",
        getWifiJamStatus5g: "get_wifi_jam_status_5g"
    },
    optName: {
        channel: "channel",
        disabled: "disabled",
        txPwr: "txpower",
        country: "country",
        wifiMode: "mode",
        ssid: "ssid",
        keyType: "encryption",
        key: "key",
        hidden: "hidden",
        wmm: "wmm",
        apIsolate: "isolate",
        bssid: "bssid",
        beaconInterval: "beacon_int",
        hwmode: "hwmode",
        htmode: "htmode",
        freqenable: "freqenable",
        wdsenable: "wdsenable",
        bsEnable: "bs_enable",
        wifiEnable: "wifi_enable",
        name: "name",
        status: "status",
        rank: "rank"
    },
    optValue: {
        keyType: {
            none: "none",
            psk: "psk",
            psk2: "psk2",
            pskMixed: "mixed-psk",
            tkip: "tkip",
            ccmp: "ccmp"
        },
        wifiMode: {
            ap: "ap"
        },
        wifiSwitch: {
            on: "0",
            off: "1"
        },
        hwMode: {
            auto: "auto",
            mode11b: "11b",
            mode11g: "11g",
            mode11n: "11n",
            mode11bg: "11bg",
            mode11bgn: "11ng",
            mode11an: "11na",
            mode11ac: "11ac"
        },
        htMode: {
            auto: "auto",
            bw20: "HT20",
            bw40: "HT40",
            bw80: "HT80"
        },
        txPower: {
            high: "1",
            middle: "2",
            low: "3"
        },
        dhcpsState: {
            auto: "1",
            unAuto: "0"
        },
        bsEnable: {
            enable: "1",
            disable: "0"
        },
        wifiBand: {
            band2g: "wlan_host_2g",
            band5g: "wlan_host_5g"
        },
        actionStatus: {
            doing: "0",
            finish: "1"
        }
    },
    dynOptName: {
        enable: "enable",
        ssidbrd: "ssidbrd",
        ssid: "ssid",
        encryption: "encryption",
        key: "key",
        channel: "channel",
        mode: "mode",
        bandwidth: "bandwidth",
        power: "power",
        isolate: "isolate",
        bssid: "bssid",
        addrform: "address_form",
        rssi: "rssi",
        status: "status",
        result: "result",
        ip: "ip",
        muMIMO: "vhtmubfer",
        rssi_limit: "rssi_limit",
        rssi_limit_val: "rssi_limit_val",
        rssi_kick: "rssi_kick",
        rssi_kick_val: "rssi_kick_val"
    },
    dynOptValue: {
        enable: {
            off: 0,
            on: 1
        },
        ssidbrd: {
            off: 0,
            on: 1
        },
        encryption: {
            off: 0,
            on: 1
        },
        mode: {
            m_11b: 0,
            m_11g: 1,
            m_11bg: 2,
            m_11n: 3,
            m_11bgn: 4,
            m_11a: 5,
            m_11n_5g: 6,
            m_11an: 7,
            m_11ac: 8
        },
        bandwidth: {
            auto: 0,
            bw20: 1,
            bw40: 2,
            bw80: 3,
            bw80Add80: 4
        },
        power: {
            high: 0,
            mid: 1,
            low: 2
        },
        isolate: {
            off: 0,
            on: 1
        },
        addrform: {
            addr3: 0,
            addr4: 1,
            detect: 2
        },
        status: {
            notconnect: 0,
            connecting: 1,
            connected: 2
        },
        dhcpcStatus: {
            dhcpcRequsting: "0",
            dhcpcFailed: "1",
            dhcpcSuccess: "2"
        },
        scanStatus: {
            scanning: 0,
            finish: 1
        },
        lanIpDhcpsStatus: {
            detecting: 0,
            finish: 1
        },
        lanIpDhcpsResult: {
            nonConflict: 0,
            conflict: 1
        },
        muMIMO: {
            off: 0,
            on: 1
        }
    },
    dynData: {
        host_2g: "wlan_host_2g",
        wds_2g: "wlan_wds_2g",
        scan_2g: "wlan_scan_2g",
        scan_status_2g: "wlan_scan_2g_status",
        wds_2g_status: "wlan_wds_2g_status",
        wds_lanIp: "wlan_wds_2g_lanip",
        wds_dhcps: "wlan_wds_2g_dhcps",
        wds_dhcpc: "wlan_wds_2g_dhcpc",
        host_5g: "wlan_host_5g",
        wds_5g: "wlan_wds_5g",
        scan_5g: "wlan_scan_5g",
        wds_5g_status: "wlan_wds_5g_status",
        host_5g1: "wlan_host_5g_1",
        wds_5g1: "wlan_wds_5g_1",
        scan_5g1: "wlan_scan_5g_1",
        wds_5g_status1: "wlan_wds_5g_status_1",
        host_5g4: "wlan_host_5g_4",
        wds_5g4: "wlan_wds_5g_4",
        scan_5g4: "wlan_scan_5g_4",
        wds_5g_status4: "wlan_wds_5g_status_4"
    },
    actionName: {
        scanStart: "scan_start_2g",
        wdsStart: "wds_start_2g",
        improveWifiJam: "improve_wifi_jam",
        getWifiJam: "get_wifi_jam"
    },
    encryptionType: {
        none: 0,
        psk2_psk: 1,
        wep: 2,
        wpa2_wpa: 3,
        unkonw: 4
    }
}, uciFirewall = {
    fileName: "firewall",
    secType: {
        fwRule: "rule",
        fwRedirect: "redirect",
        fwDMZ: "dmz",
        parentMac: "parent_mac",
        parentConfig: "parent_config",
        accessRule: "access_rule",
        accessConfig: "access_config",
        lanManage: "lan_manage",
        wanManage: "wan_manage"
    },
    secName: {
        inputRuleSuffix: "Input",
        fowardRuleSuffix: "Forward",
        lanManage: "lan_manage",
        wanManage: "wan_manage",
        dmz: "dmz",
        parentConfig: "parent_config",
        accessConfig: "access_config"
    },
    optName: {
        target: "target",
        src: "src",
        dest: "dest",
        proto: "proto",
        srcMac: "src_mac",
        srcIP: "src_ip",
        srcIpStart: "src_ip_start",
        srcIpEnd: "src_ip_end",
        srcDport: "src_dport",
        srcDportStart: "src_dport_start",
        srcDportEnd: "src_dport_end",
        destPort: "dest_port",
        destPortStart: "dst_port_start",
        destPortEnd: "dst_port_end",
        port: "port",
        destIP: "dest_ip",
        destIpStart: "dst_ip_start",
        destIpEnd: "dst_ip_end",
        enable: "enable",
        mon: "mon",
        tue: "tue",
        wed: "wed",
        thu: "thu",
        fri: "fri",
        sat: "sat",
        sun: "sun",
        name: "name",
        hostIndex: "host_index",
        objIndex: "obj_index",
        planIndex: "plan_index",
        mode: "mode",
        hostMode: "host_mode",
        objMode: "obj_mode",
        domain: "domain",
        mac: "mac",
        enableAll: "enable_all"
    },
    listName: {
        srcMac: "src_mac",
        domain: "domain"
    },
    optValue: {
        target: {
            accept: "ACCEPT",
            reject: "REJECT",
            dnat: "DNAT"
        },
        src: {
            lan: "lan",
            wan: "wan",
            any: "*"
        },
        dest: {
            any: "*",
            lan: "lan"
        },
        proto: {
            all: "all",
            tcp: "tcp",
            udp: "udp",
            both: "tcp udp",
            icmp: "icmp"
        },
        parentCtrl: {
            enable: "1",
            disable: "0"
        },
        dmzSwitch: {
            on: "1",
            off: "0"
        },
        bHavEnable: {
            enable: "1",
            disable: "0"
        },
        bHavFilter: {
            allow: "1",
            forbid: "0"
        },
        lanManage: {
            all: "1",
            some: "0"
        },
        wanManage: {
            none: "0",
            all: "1",
            one: "2"
        },
        hostMode: {
            ip: "0",
            mac: "1"
        },
        objMode: {
            ip: "0",
            domain: "1"
        }
    }
}, uciAccessCtrl = {
    fileName: "access_ctrl_info",
    secType: {
        hostRule: "host_rule",
        objRule: "obj_rule",
        planRule: "plan_rule"
    },
    secName: {},
    listName: {
        domain: "domain"
    },
    optName: {
        name: "name",
        mode: "mode",
        ipStart: "ip_start",
        ipEnd: "ip_end",
        macAddr: "macaddr",
        portStart: "port_start",
        portEnd: "port_end",
        proto: "proto",
        mon: "mon",
        tue: "tue",
        wed: "wed",
        thu: "thu",
        fri: "fri",
        sat: "sat",
        sun: "sun",
        domain: "domain"
    },
    optValue: {
        hostMode: {
            ip: "0",
            mac: "1"
        },
        objMode: {
            ip: "0",
            domain: "1"
        },
        proto: {
            tcp: "tcp",
            udp: "udp",
            icmp: "icmp",
            all: "all"
        }
    }
}, uciHostsInfo = {
    fileName: "hosts_info",
    secType: {
        device: "device"
    },
    secName: {
        limitTime: "limit_time",
        forbidDomain: "forbid_domain"
    },
    optName: {
        mac: "mac",
        type: "type",
        blocked: "blocked",
        isBlocked: "is_blocked",
        downLimit: "down_limit",
        downSpeed: "down_speed",
        upLimit: "up_limit",
        upSpeed: "up_speed",
        ip: "ip",
        hostname: "hostname",
        isCurHost: "is_cur_host",
        ssid: "ssid",
        cfgValid: "cfg_valid",
        wifiMode: "wifi_mode",
        planRule: "plan_rule",
        name: "name",
        mon: "mon",
        tue: "tue",
        wed: "wed",
        thu: "thu",
        fri: "fri",
        sat: "sat",
        sun: "sun",
        startTime: "start_time",
        endTime: "end_time",
        domain: "domain",
        limitTime: "limit_time",
        forbidDomain: "forbid_domain"
    },
    optValue: {
        isBlocked: {
            yes: "1",
            no: "0"
        },
        linkType: {
            wired: "0",
            hostWireless: "1",
            guestWireless: "2"
        },
        name: {
            defname: "匿名主机"
        },
        isCurHost: {
            yes: !0,
            no: !1
        },
        cfgValid: {
            yes: !0,
            no: !1
        },
        enable: {
            yes: "1",
            no: "0"
        },
        wifiMode: {
            h2G: "0",
            h5G: "1",
            h5G1: "2",
            h5G4: "3"
        }
    },
    dynData: {
        host_info: "host_info",
        online_host: "online_host",
        blocked_host: "blocked_host",
        setBlockFlag: "set_block_flag",
        setName: "set_name",
        setFluxLimit: "set_flux_limit",
        limitTime: "limit_time",
        forbidDomain: "forbid_domain",
        setHostInfo: "set_host_info"
    }
}, uciSystem = {
    fileName: "system",
    secType: {
        system: "system"
    },
    secName: {
        sys: "sys"
    },
    optName: {
        timezone: "timezone",
        isFactory: "is_factory",
        num: "num"
    },
    optValue: {
        timezone: {
            Eniwetok: "TOT-13",
            MidwayIsland: "SST11",
            Hawaii: "HST10",
            Alaska: "AKST9AKDT,M3.2.0,M11.1.0",
            PacificTime: "PST8",
            MountainTime: "MST7",
            CentralTime: "CST6",
            EastTime: "EST5",
            AtlanticTime: "AST4",
            NewFoundLand: "NST3:30NDT,M3.2.0/0:01,M11.1.0/0:01",
            Brasilia: "ART3",
            MidAtlantic: "FNT2",
            CapeVerder: "CVT1",
            GreenwichMeanTime: "GMT0",
            Amsterdam: "CET-1CEST,M3.5.0,M10.5.0/3",
            Cairo: "CAT-2",
            Baghdad: "AST-3",
            Tehran: "THT-3:30",
            AbuDhabi: "AZT-4AZST,M3.5.0/4,M10.5.0/5",
            Kabul: "AFT-4:30",
            Yekaterinburg: "YEKT-5YEKST,M3.5.0,M10.5.0/3",
            Madras: "IST-5:30",
            Kathmandu: "NPT-5:45",
            AlmaAta: "BDT-6",
            Rangoon: "MMT-6:30",
            Bangkok: "ICT-7",
            Beijing: "CST-8",
            Tokyo: "JST-9",
            Adelaide: "CST-9:30CST,M10.1.0,M4.1.0/3",
            Brisbane: "EST-10",
            Magadan: "MAGT-11MAGST,M3.5.0,M10.5.0/3",
            Fiji: "FJT-12",
            Nukualofa: "PHOT-13"
        },
        isFactory: {
            yes: "1",
            no: "0"
        }
    },
    dynData: {
        clockStatus: "clock_status",
        sysLog: "sys_log",
        excLog: "exc_log",
        domainArray: "domain_array"
    },
    actionName: {
        downloadConf: "download_conf",
        uploadConf: "upload_conf",
        firmUpgrade: "firmware_upgrade",
        downloadLogs: "download_logs",
        syslogClean: "syslog_clean",
        getDomainArray: "get_domain_array"
    }
}, uciUhttpd = {
    fileName: "uhttpd",
    secType: {
        uhttpd: "uhttpd"
    },
    secName: {
        main: "main"
    },
    optName: {
        listenHttpLan: "listen_http_lan",
        listenHttpWan: "listen_http_wan"
    },
    listName: {
        listenHttp: "listen_http",
        listenHttpLan: "listen_http_lan"
    },
    optValue: {
        http: {
            ip: "0.0.0.0"
        }
    }
}, uciDeviceInfo = {
    fileName: "device_info",
    secType: {
        info: "info"
    },
    secName: {
        info: "info"
    },
    optName: {
        productId: "product_id",
        vendorId: "vendor_id",
        sysSwRev: "sys_software_revision",
        sysSwRevMin: "sys_software_revision_minor",
        buildTime: "build_time",
        language: "language",
        deviceName: "device_name",
        deviceInfo: "device_info",
        deviceModel: "device_model",
        hwVer: "hw_version",
        swVer: "sw_version",
        domainName: "domain_name"
    }
}, uciCloudConfig = {
    fileName: "cloud_config",
    secType: {
        cloudReply: "cloud_reply"
    },
    secName: {
        bind: "bind",
        info: "info",
        register: "register",
        newFirmware: "new_firmware",
        deviceStatus: "device_status",
        upgradeInfo: "upgrade_info",
        resetPassword: "reset_password",
        modifyAccountPwd: "modify_account_pwd",
        cloudAccountStat: "cloudAccountStat",
        downloadFw: "download_fw",
        bindTip: "bind_tip",
        deviceLegality: "device_legality"
    },
    optName: {
        type: "type",
        accountType: "account_type",
        username: "username",
        password: "password",
        newPassword: "new_pwd",
        oldPassword: "old_pwd",
        bindStatus: "bind_status",
        loginStatus: "login_status",
        accountStatus: "account_status",
        releaseDate: "release_date",
        downloadUrl: "download_url",
        location: "location",
        releaseLogUrl: "release_log_url",
        verifyCode: "verify_code",
        cloudAccountStat: "cloudAccountStat",
        fwNewNotify: "fw_new_notify",
        fwUpdateType: "fw_update_type",
        version: "version",
        releaseLog: "release_log",
        reconnectTime: "reconnect_time",
        noShow: "not_show",
        illegal: "illegal"
    },
    optValue: {
        cloudDownloading: "1",
        cloudComplete: "2",
        cloudOutline: "0",
        cloudIdle: "3",
        fwNewTrue: 1,
        fwNewFalse: 0,
        fwUpdateTypeNormal: "1",
        unRegestStatus: 0,
        regestStatus: 1,
        bindStatusBind: 1,
        bindStatusUnbind: 0,
        accountTypeEmail: 0,
        accountTypePhoneNum: 1,
        reconnectVal: 1,
        noShow: {
            yes: "1",
            no: "0"
        },
        illegal: {
            yes: "1",
            no: "0"
        }
    },
    actionName: {
        bind: "bind",
        login: "login",
        unbind: "unbind",
        reconnect: "reconnect",
        register: "register",
        downloadFw: "fw_download",
        checkFwVer: "check_fw_version",
        fwDownload: "fw_download",
        getAccountStat: "get_account_stat",
        resetPassword: "reset_password",
        resetAccountPwd: "reset_account_pwd",
        resendRegisterEmail: "resend_register_email",
        checkFwVersion: "check_fw_version",
        cancelReg: "cancel_reg",
        getRegVerifyCode: "get_reg_verify_code",
        checkRegVerifyCode: "check_reg_verify_code",
        getResetPwdVerifyCode: "get_reset_pwd_verify_code",
        checkResetPwdVerifyCode: "check_reset_pwd_verify_code",
        modifyAccountPwd: "modify_account_pwd"
    }
}, cloudClientStatus = {
    fileName: "cloud_status",
    secName: {
        bind: "bind",
        unbind: "unbind",
        login: "login",
        register: "register",
        checkFwVer: "check_fw_ver",
        downloadFw: "download_fw",
        clientInfo: "client_info",
        resendEmail: "resend_email",
        getAccountStat: "get_account_stat",
        resetPassword: "reset_account_pwd",
        fwDownloadProg: "fw_download_prog",
        getRegVerifyCode: "get_reg_verify_code",
        checkRegVerifyCode: "check_reg_verify_code",
        getResetPwdVerifyCode: "get_reset_pwd_verify_code",
        checkResetPwdVerifyCode: "check_reset_pwd_verify_code",
        modifyAccountPwd: "modify_account_pwd",
        getCanUpdateApps: "get_can_update_plugins",
        getNotInstalledApps: "get_not_installed_plugins",
        regVeriCodeTimer: "reg_veri_code_timer",
        resetVeriCodeTimer: "reset_veri_code_timer"
    },
    optName: {
        owner: "owner",
        errCode: "err_code",
        actionStatus: "action_status",
        connectStatus: "connect_status",
        dlProgress: "fw_download_progress",
        fwDownloadStatus: "fw_download_status",
        fwDownloadProgress: "fw_download_progress",
        regVeriCodeTimer: "reg_veri_code_timer",
        resetVeriCodeTimer: "reset_veri_code_timer"
    },
    optValue: {
        connectStatus: {
            connected: 1,
            disconnected: 0
        },
        queryStatus: {
            failed: 0,
            idle: 1,
            prepare: 2,
            trying: 3,
            success: 4,
            timeout: 5,
            max: 6
        }
    }
}, uciFunction = {
    fileName: "function",
    secName: {
        newModuleSpec: "new_module_spec",
        moduleSpec: "module_spec"
    },
    optName: {
        channel2g: "wireless2g_channel",
        channel5g: "wireless5g_channel",
        bandWidth5g: "wireless5g_bandwidth",
        channel5g1: "wireless5g_1_channel",
        bandWidth5g1: "wireless5g_1_bandwidth",
        channel5g4: "wireless5g_4_channel",
        bandWidth5g4: "wireless5g_4_bandwidth",
        moduleList: "module_list",
        wlanBS: "wlan_bs"
    },
    optValue: {
        moduleList: {
            cloud: "cloud",
            wlan_guest: "wlan_guest"
        },
        enable: "1",
        disable: "0"
    }
}, uciPlc = {
    fileName: "hyfi",
    actionName: {
        scanExt: "scan_ext",
        addExt: "add_ext",
        setExtInfo: "set_ext_info",
        kickExt: "kick_ext",
        getLedStatus: "get_led_status",
        setLedStatus: "set_led_status",
        stopScanExt: "stop_scan_ext",
        plcDiagnose: "plc_diagnose",
        rebootExtWlan: "reboot_ext_wlan",
        upgExt: "upgrade_ext",
        startGetExtFwVer: "start_get_ext_fw_ver"
    },
    secType: {
        scannedExt: "scanned_ext",
        connectedExt: "connected_ext",
        ExtRate: "connected_ext_rate"
    },
    secName: {
        scanExtStatus: "scan_ext_status",
        plc: "plc",
        startGetExtFwVerStat: "start_get_ext_fw_ver_status",
        upgExtStat: "upgrade_ext_status"
    },
    optName: {
        status: "status",
        idx: "idx",
        name: "name",
        ip: "ip",
        mac: "mac",
        timeDiagnose: "time_diagnose",
        supportOlUp: "support_ol_upgrade",
        plcEnable: "plc_enable"
    },
    optValue: {
        status: {
            doing: "1",
            idle: "0"
        },
        ledStatus: {
            on: "1",
            off: "0"
        },
        plcDiagStatus: {
            off: "0",
            timer: "1",
            realTime: "2"
        },
        supportOlUp: {
            yes: "1",
            no: "0"
        },
        extOlStatus: {
            idle: "0",
            readyDownload: "1",
            downloading: "2",
            readyUpg: "3",
            upgrading: "4",
            upgSuccess: "5",
            fail: "255"
        }
    }
}, uciTimeSwitch = {
    fileName: "time_switch",
    actionName: {},
    secType: {
        timeSwitch: "time_switch"
    },
    secName: {},
    optName: {
        name: "name",
        mon: "mon",
        tue: "tue",
        wed: "wed",
        thu: "thu",
        fri: "fri",
        sat: "sat",
        sun: "sun",
        enable: "enable",
        startTime: "start_time",
        endTime: "end_time"
    },
    optValue: {
        enable: {
            on: "1",
            off: "0"
        }
    }
}, uciElink = {
    fileName: "elink",
    secType: {
        elink: "elink"
    },
    secName: {
        status: "status"
    },
    optName: {
        elinkSwitch: "elinkSwitch",
        elinkSynEnable: "elinkSynEnable"
    },
    optValue: {
        elinkSwitch: {
            on: "1",
            off: "0"
        },
        elinkSynEnable: {
            on: "1",
            off: "0"
        }
    }
}, SEC_NAME = ".name", KEY_NAME = "name", KEY_TABLE = "table", KEY_PARA = "para";
