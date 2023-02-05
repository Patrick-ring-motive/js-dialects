var globalObject = window || self || global || globalThis || frames || this;
globalObject.globalObject = globalObject;

globalObject.fetchcors = async function(url) {


  return await fetch('https://cors.gamestop.workers.dev/' + url);


}


globalObject.cors = function(url) {

  return 'https://cors.gamestop.workers.dev/' + url;


}

void async function ClassScripts() {
  async function loadClassScript(ClassScript) {



    let ClassScriptInner = ClassScript.innerHTML;
    if (ClassScript.hasAttribute('src')) {

      let res;
      try {

        res = await fetch(ClassScript.src);

      } catch (e) {

        res = await fetchcors(ClassScript.src);

      }
      ClassScriptInner = await res.text();

    }
    const ClassScriptId = ('ClassScript' + new Date().getTime() + "" + performance.now() + "" + Math.random()).replaceAll('.', '_');

    const ClassScriptContent = 'new class ' + ClassScriptId + `{
        ` +
      ClassScriptInner + `
          /**/}();`;
    const ClassScriptTag = document.createElement('script');
    ClassScriptTag.innerHTML = ClassScriptContent;
    ClassScriptTag.setAttribute('data-type', 'text/ClassScript');
    ClassScriptTag.id = ClassScriptId;
    ClassScript.type = ClassScript.type + '-x';
    document.body.appendChild(ClassScriptTag);


  }


  window.addEventListener('DOMContentLoaded', async (event) => {


    const ClassScriptList = Array.from(document.querySelectorAll('script[type="text/ClassScript"i],script[type="application/ClassScript"i]'));

    const ClassScriptList_length = ClassScriptList.length;

    for (let i = 0; i < ClassScriptList_length; i++) {
      try {
        loadClassScript(ClassScriptList[i]);
      } catch (e) { continue; }
    }
  });
}?.();