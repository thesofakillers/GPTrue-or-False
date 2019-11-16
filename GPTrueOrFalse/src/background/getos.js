export async function getOS() {
  let platformInfo = await browser.runtime.getPlatformInfo();
  return platformInfo.os;
}
