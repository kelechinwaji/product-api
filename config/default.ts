export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/product-api",
    salt: 15,
    accessTokenTtl: '15m',
    refreshTokenTtl: "1yr",
    publicKey:`-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlM9y2A8MZu+6i6/77ppq
    Kzd7PkQ8L8f7Bbcd5fZYwi0ZDSnBxAS+JzwjGEv/x/NdmhH3zYh3ztLQHWjsbqdA
    hiGvOrY/kB3iw95lQnjZAuBqvVpOsXeRoTk7kAnB3EtT5Ttw4bxtQgjE+a/b1TK6
    ilU78aYKvEkSygRHvpodQf+btCMDiUTwoG5RmEHccxXP41TNm4tentfz3p+QF2dr
    zWtHjlRI4xr1VD3ZYiwhN9nIsSzvHsnebgxPm1xwdp03dCI3jc5LXbaDEyyNAWl4
    dsH2tloYUV6a9eN8AuY+1cYp34K7HjjHv2WAwoD5M5X/Lu+1bKk+Mg4UKmhZz9u6
    uQIDAQAB
    -----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIIEowIBAAKCAQEAlM9y2A8MZu+6i6/77ppqKzd7PkQ8L8f7Bbcd5fZYwi0ZDSnB
  xAS+JzwjGEv/x/NdmhH3zYh3ztLQHWjsbqdAhiGvOrY/kB3iw95lQnjZAuBqvVpO
  sXeRoTk7kAnB3EtT5Ttw4bxtQgjE+a/b1TK6ilU78aYKvEkSygRHvpodQf+btCMD
  iUTwoG5RmEHccxXP41TNm4tentfz3p+QF2drzWtHjlRI4xr1VD3ZYiwhN9nIsSzv
  HsnebgxPm1xwdp03dCI3jc5LXbaDEyyNAWl4dsH2tloYUV6a9eN8AuY+1cYp34K7
  HjjHv2WAwoD5M5X/Lu+1bKk+Mg4UKmhZz9u6uQIDAQABAoIBAHeVMUvQ4/2AXh9M
  v55hdjnebup9uQQIp39TRPJ8gZ0g0oXSbYSQ7yHmYKlwwU40Ep7yG3mOVgDdRiKs
  I3tUajSfswnyVKgCbC1MdYDyTinSn9QkUyKn3F57+JJqVOArpHKMzsyIOCCdnXSs
  znLIPkFV90LcVLoz2qZ+xAy2GhbjDne89F3+SlOAvSubj/r0iuX+oRBN5KYYvoDl
  YileMJr6e2AoWWiPRI0w33dhBQmPqTs86fbYOt4qZl5dYZdqCYotbrEm/dFd1Fyu
  3KLqON8zKMIqX0BNUl0gCryXlShA50r/4Mzb3B8cu0OJZgpBdu+ltBi/VCrhvVlq
  i+mKZRECgYEA3JV5Ne9wpBMWYrzgyxKykMavRHTO3iv+zVvFK0k5SrrgiZLGQhf2
  w2zFp/b4db+ycVOm3UrqIIMQ2YcMwIOTeg1g/HcGTUc+q3dK/5D3sbjOamVu2Vcm
  z2y9BUs3stHa9xiSR8PmhM4HjBH4VJLJXWXoSdYgvovF4DqdbMH+W9UCgYEArLPp
  JSpnfGYrSEMVTEdOxKmysuWsWCRY8h85cF2odsPAQRLQyxUfBvmoL77RIJmWqD3f
  pAVReVuPSetJUJqCDrG6y6yMKOGqblpiT8oTVG+Be2w/EMkmK8eXcRchEQA/mv7c
  /QyXlUR0j+WxwP5Ec9qc11P1/vhtVFQ9NZaZyVUCgYAz5M5hS/VaBEuN6xWPcNSl
  jriJCFnqlrsZIO/f4RgjZpeQhgEyZ2TcUOinPUjymqimVKG7CfbOs0bxhf4QBGRb
  oG4itvW6lHo/6I6yVS6QlwOosDhF1WUCA3jsl+eAoDI9U4CGdaXztGy+HTQo4WeS
  G3lsdX26ljN1LxT+Ex1+CQKBgESCgkR6E99ncFgUNIiz6O1fHEKXlczJbnduJ40J
  umCSutuVqTpGwK41r6BxI+i4xOks0mDwsydfSPJb4hOVl25Y1u8hHeDB1Kg+Nq3M
  Teq66TSa9lGkWf4YCV2VfUqPPKwx2lyP+DoAk/TZe7BBrcn/uSQ6bGWfC0/eswFl
  ItCZAoGBAL0buBt8PJoXSWFtlE+1f4MgBxyP7MqYzATlyH+Yl11zrygVX5XOJOCB
  B4/OOW1X32OhzweIWw7YWlHvC2v2TG5nlnZDAgnY189NVh3fDfQNJzwyuKm8ZQ20
  vFkjZdubPyX/WMr6AbYLSipy+6wUOgEHXHxbNmcv5TPWfD4YkxP9
  -----END RSA PRIVATE KEY-----`,
}