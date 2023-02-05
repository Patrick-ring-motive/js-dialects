var globalObject = window || self || global || globalThis || frames || this;
globalObject.globalObject = globalObject;

globalObject.fetchcors = async function(url) {


  return await fetch('https://cors.gamestop.workers.dev/' + url);


}


globalObject.cors = function(url) {

  return 'https://cors.gamestop.workers.dev/' + url;


}

void async function NetScripts() {
 async function loadNetScript(NetScript){

   

        let NetScriptInner = NetScript.innerHTML;
        if (NetScript.hasAttribute('src')) {

          let res;
          try {

            res = await fetch(NetScript.src);

          } catch (e) {

            res = await fetchcors(NetScript.src);

          }
          NetScriptInner = await res.text();

        }
        const NetScriptId = ('NetScript' + new Date().getTime() + "" + performance.now() + "" + Math.random()).replaceAll('.', '_');

        const NetScriptContent = 'void async function ' + NetScriptId + `(){
        ` +
          NetScriptInner + `
          /**/}?.();`;
        const NetScriptTag = document.createElement('script');
        NetScriptTag.innerHTML = NetScriptContent;
        NetScriptTag.setAttribute('data-type', 'text/NetScript');
        NetScriptTag.id = NetScriptId;
        NetScript.type = NetScript.type + '-x';
        document.body.appendChild(NetScriptTag);
      
   
 }
  
  
  window.addEventListener('DOMContentLoaded', async (event) => {


    const NetScriptList = Array.from(document.querySelectorAll('script[type="text/NetScript"i],script[type="application/NetScript"i]'));

    const NetScriptList_length = NetScriptList.length;

    for (let i = 0; i < NetScriptList_length; i++) {
    try{
      loadNetScript(NetScriptList[i]);
      }catch(e){continue;}  
    }
  });
}?.();