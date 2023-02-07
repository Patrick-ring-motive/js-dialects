var globalObject = window || self || global || globalThis || frames || this;
globalObject.globalObject = globalObject;

globalObject.sleep = function(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


globalObject.fetchcors = async function(url) {


  return await fetch('https://cors.gamestop.workers.dev/' + url);


}


globalObject.cors = function(url) {

  return 'https://cors.gamestop.workers.dev/' + url;


}





void async function VectorScripts() {

  function SVGLoader() {


  }

  async function loadVectorScript(VectorScript) {



    let VectorScriptInner = VectorScript.innerHTML;
    if (VectorScript.hasAttribute('src')) {

      let res;
      try {

        res = await fetch(VectorScript.src);

      } catch (e) {

        res = await fetchcors(VectorScript.src);

      }
      VectorScriptInner = await res.text();


    }
    const VectorScriptId = ('VectorScript' + new Date().getTime() + "" + performance.now() + "" + Math.random()).replaceAll('.', '_');

    const VectorScriptContent =
      `/* <![CDATA[/* */
       `+
      VectorScriptInner + `
          /* ]]>/* */`;

    VectorScript.type = VectorScript.type + '-x';

    var documentSource = `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
<script>`+ VectorScriptContent + `;<` + `/script>
</svg>`;
    var blob = new Blob([documentSource], { type: "image/svg+xml" });
    var SVGUrl = URL.createObjectURL(blob);
    var SVGFrame = document.createElement('iframe');
    SVGFrame.id = VectorScriptId;
    SVGFrame.src = SVGUrl;
    SVGFrame.style = " visibility:hidden;opacity:0;max-height:0px;height:0px;transform: scale(0,0);position:absolute;z-index:-99;";
    document.body.appendChild(SVGFrame);



  }


  window.addEventListener('DOMContentLoaded', async (event) => {


    const VectorScriptList = Array.from(document.querySelectorAll('script[type="text/VectorScript"i],script[type="application/VectorScript"i]'));

    const VectorScriptList_length = VectorScriptList.length;

    for (let i = 0; i < VectorScriptList_length; i++) {
      try {
        loadVectorScript(VectorScriptList[i]);
      } catch (e) { continue; }
    }
  });
}?.();