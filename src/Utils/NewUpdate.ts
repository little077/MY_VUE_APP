import axios from "axios"
function getNewVersion(){ 
  setTimeout( async()=>{
    const timestamp = new Date().getTime();
    const response = await axios.get(`${window.location.origin}?time=${timestamp}`);
    // 返回的是字符串，需要转换为 html
    const el = document.createElement('html');
    el.innerHTML = response.data;
    let newVersion = '';
    // 拿到版本号
    const metaList = document.querySelectorAll('meta');
if (metaList.length) {
  metaList.forEach((item) => {
    if (item.name === 'version_no') {
      newVersion = item.content;
    }
  });
}
    console.log("新版本号",newVersion)
  },40000)
}
export default getNewVersion