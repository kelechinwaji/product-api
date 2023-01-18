export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/product-api",
    salt: 15,
    accessTokenTtl: '15m',
    refreshTokenTtl: "1yr",
    publicKey:`-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHaoH+VARDrb9GWCK+S9nadzIk7B
6mftfx6drmRkTW/4McS3UL1Kj95T8wnpa6+NRzjdpO/WPB52g62pxegHLhSSes2K
k7Zfwn2OropphVm74nlW2e2GXGSuLRMxMdTdQfd356MgYvXdXHYMnUmgFYcg1s3Y
yWrO64d/SKlZesLzAgMBAAE
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN PRIVATE KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgHaoH+VARDrb9GWCK+S9nadzIk7B
6mftfx6drmRkTW/4McS3UL1Kj95T8wnpa6+NRzjdpO/WPB52g62pxegHLhSSes2K
k7Zfwn2OropphVm74nlW2e2GXGSuLRMxMdTdQfd356MgYvXdXHYMnUmgFYcg1s3Y
yWrO64d/SKlZesLzAgMBAAE
-----END RSA PRIVATE KEY-----`,
}