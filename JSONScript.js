var globalObject = window || self || global || globalThis || frames || this;
globalObject.globalObject = globalObject;

globalObject.fetchcors = async function(url) {


  return await fetch('https://cors.gamestop.workers.dev/' + url);


}


globalObject.cors = function(url) {

  return 'https://cors.gamestop.workers.dev/' + url;


}

void async function JSONScripts() {
  async function loadJSONScript(JSONScript) {



    let JSONScriptInner = JSONScript.innerHTML;
    if (JSONScript.hasAttribute('src')) {

      let res;
      try {

        res = await fetch(JSONScript.src);

      } catch (e) {

        res = await fetchcors(JSONScript.src);

      }
      JSONScriptInner = await res.text();

    }
    const JSONScriptId = ('JSONScript' + new Date().getTime() + "" + performance.now() + "" + Math.random()).replaceAll('.', '_');

    const JSONScriptContent = `<!DOCTYPE html><script data-type="text/JSONScript" type="importmap" id="`
      + JSONScriptId + '">' +
      JSONScriptInner + '<' + '/script>';
    const JSONScriptTag = document.createElement('iframe');
    JSONScriptTag.srcdoc = JSONScriptContent;
    JSONScriptTag.setAttribute('data-type', 'text/JSONScript');
    JSONScriptTag.id = JSONScriptId;
    JSONScriptTag.style = " visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;";
    JSONScript.type = JSONScript.type + '-x';
    document.body.appendChild(JSONScriptTag);


  }


  window.addEventListener('DOMContentLoaded', async (event) => {


    const JSONScriptList = Array.from(document.querySelectorAll('script[type="text/JSONScript"i],script[type="application/JSONScript"i]'));

    const JSONScriptList_length = JSONScriptList.length;

    for (let i = 0; i < JSONScriptList_length; i++) {
      try {
        loadJSONScript(JSONScriptList[i]);
      } catch (e) { continue; }
    }
  });
}?.();