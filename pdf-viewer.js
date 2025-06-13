/*// pdf-viewer.js
const url = 'Mapeamento-de-Laborat%C3%B3rios-2024.pdf';

const pdfjsLib = window['pdfjs-dist/build/pdf'];
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.min.js';

function getPageNumberFromURL() {
  const params = new URLSearchParams(window.location.search);
  let pageNum = parseInt(params.get('page')) || 1;
  return pageNum;
}

function renderPDF(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) {
    console.error('Canvas não encontrado!');
    return;
  }
  const ctx = canvas.getContext('2d');
  const scale = 1.5;

  pdfjsLib.getDocument(url).promise.then(pdfDoc => {
    let pageNum = getPageNumberFromURL();
    if(pageNum < 1 || pageNum > pdfDoc.numPages) pageNum = 1;

    pdfDoc.getPage(pageNum).then(page => {
      const viewport = page.getViewport({ scale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      const renderCtx = { canvasContext: ctx, viewport };
      page.render(renderCtx);
    });
  }).catch(err => {
    console.error('Erro ao carregar PDF:', err);
  });
}
*/
