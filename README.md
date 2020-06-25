# 通过api控制TPLINK 路由器

# TPLink 云路由 API

### Login:

POST http://tplogin.cn

payload:

```json
{
  "method": "do",
  "login": {
    "password": "",
    "encrypt_type": 1
  }
}
```

Password is encrypt.

response

```json
{
  "stok": "flksjdflaksjdflkjaslkdfjksdjfla9",
  "error_code": 0
}
```

stok 是访问需要带的token


### Wan Port Status: 

POST http://tplogin.cn/stok=<stokstring>/ds

payload:

```json
{
  "network": {
    "name": [
      "wan_status"
    ]
  },
  "method": "get"
}
```

response:

```json
{
  "network": {
    "wan_status": {
      "down_speed": 0,
      "proto": "pppoe",
      "pri_dns": "202.106.46.151",
      "link_status": 1,
      "phy_status": 1,
      "error_code": 0,
      "netmask": "255.255.255.255",
      "up_speed": 1,
      "gateway": "114.249.112.1",
      "up_time": 28442,
      "snd_dns": "202.106.195.68",
      "ipaddr": "114.249.117.145"
    }
  },
  "error_code": 0
}
```






