var globalObject = window || self || global || globalThis || frames || this;
globalObject.globalObject = globalObject;

globalObject.fetchcors = async function(url) {


  return await fetch('https://cors.gamestop.workers.dev/' + url);


}


globalObject.cors = function(url) {

  return 'https://cors.gamestop.workers.dev/' + url;


}

void async function DataScripts() {
  async function loadDataScript(DataScript) {



    let DataScriptInner = DataScript.innerHTML;
    if (DataScript.hasAttribute('src')) {

      let res;
      try {

        res = await fetch(DataScript.src);

      } catch (e) {

        res = await fetchcors(DataScript.src);

      }
      DataScriptInner = await res.text();

    }
    const DataScriptId = ('DataScript' + new Date().getTime() + "" + performance.now() + "" + Math.random()).replaceAll('.', '_');

    const DataScriptContent = 'var ' + DataScriptId + `={
        ` +
      DataScriptInner + `
          /**/};`;
    const DataScriptTag = document.createElement('script');
    DataScriptTag.innerHTML = DataScriptContent;
    DataScriptTag.setAttribute('data-type', 'text/DataScript');
    DataScriptTag.id = DataScriptId;
    DataScript.type = DataScript.type + '-x';
    document.body.appendChild(DataScriptTag);


  }


  window.addEventListener('DOMContentLoaded', async (event) => {


    const DataScriptList = Array.from(document.querySelectorAll('script[type="text/DataScript"i],script[type="application/DataScript"i]'));

    const DataScriptList_length = DataScriptList.length;

    for (let i = 0; i < DataScriptList_length; i++) {
      try {
        loadDataScript(DataScriptList[i]);
      } catch (e) { continue; }
    }
  });
}?.();