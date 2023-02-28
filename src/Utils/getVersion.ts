function fn(){
    let version = '';
const metaList = document.querySelectorAll('meta');
if (metaList.length) {
  metaList.forEach((item) => {
    if (item.name === 'version_no') {
      version = item.content;
    }
  });
}
console.log(version)
return version
}
export default fn