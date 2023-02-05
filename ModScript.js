var globalObject = window || self || global || globalThis || frames || this;
globalObject.globalObject = globalObject;

globalObject.fetchcors = async function(url) {


  return await fetch('https://cors.gamestop.workers.dev/' + url);


}


globalObject.cors = function(url) {

  return 'https://cors.gamestop.workers.dev/' + url;


}

void async function ModScripts() {
  async function loadModScript(ModScript) {



    let ModScriptInner = ModScript.innerHTML;
    if (ModScript.hasAttribute('src')) {

      let res;
      try {

        res = await fetch(ModScript.src);

      } catch (e) {

        res = await fetchcors(ModScript.src);

      }
      ModScriptInner = await res.text();

    }
    const ModScriptId = ('ModScript' + new Date().getTime() + "" + performance.now() + "" + Math.random()).replaceAll('.', '_');

    const ModScriptContent = ModScriptInner;
    const ModScriptTag = document.createElement('script');
    ModScriptTag.innerHTML = ModScriptContent;
    ModScriptTag.setAttribute('data-type', 'text/ModScript');
    ModScriptTag.id = ModScriptId;
    ModScriptTag.type = 'module';
    ModScript.type = ModScript.type + '-x';
    document.body.appendChild(ModScriptTag);


  }


  window.addEventListener('DOMContentLoaded', async (event) => {


    const ModScriptList = Array.from(document.querySelectorAll('script[type="text/ModScript"i],script[type="application/ModScript"i]'));

    const ModScriptList_length = ModScriptList.length;

    for (let i = 0; i < ModScriptList_length; i++) {
      try {
        loadModScript(ModScriptList[i]);
      } catch (e) { continue; }
    }
  });
}?.();