   
/*   document.getElementById("copyButton2").addEventListener("click", function() {
    copyText("copy2");
  });
   */
 
 
/*  document.getElementById("copyButton1").addEventListener("click", function() {
    copyText("copy1");
  });


  document.getElementById("copyButton2").addEventListener('click', function () {
    alert('hola');
    
  });

  
  function copyText(elementId) {
    const text = document.getElementById(elementId);
    const textArea = document.createElement("textarea");
    textArea.value = text.textContent.trim().replace(/(<([^>]+)>)/gi, "");
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert("El texto ha sido copiado, ahora puedes pegarlo en tu publicación");
  }
   */



  document.getElementById("copyButton1").addEventListener("click", function() {
    copyText("copy1");
  });

  document.getElementById("copyButton1m").addEventListener("click", function() {
    copyText("copy1m");
  });
  
  document.getElementById("copyButton2").addEventListener("click", function () {
    copyText("copy2");
  });

  document.getElementById("copyButton2m").addEventListener("click", function () {
    copyText("copy2m");
  });
  
  document.getElementById("copyButton3").addEventListener("click", function () {
    copyText("copy3");
  });

  document.getElementById("copyButton3m").addEventListener("click", function () {
    copyText("copy3m");
  });

  document.getElementById("copyButton4").addEventListener("click", function () {
    copyText("copy4");
  });

  document.getElementById("copyButton4m").addEventListener("click", function () {
    copyText("copy4m");
  });

  document.getElementById("copyButton5").addEventListener("click", function () {
    copyText("copy5");
  });

  document.getElementById("copyButton5m").addEventListener("click", function () {
    copyText("copy5m");
  });

  document.getElementById("copyButton6").addEventListener("click", function () {
    copyText("copy6");
  });

  document.getElementById("copyButton6m").addEventListener("click", function () {
    copyText("copy6m");
  });
  

  document.getElementById("copyButton7").addEventListener("click", function () {
    copyText("copy7");
  });

  document.getElementById("copyButton7m").addEventListener("click", function () {
    copyText("copy7m");
  });
  


  function copyText(elementId) {
    const text = document.getElementById(elementId).textContent.trim();
    navigator.clipboard.writeText(text)
      .then(function() {
        alert("El texto ha sido copiado, ahora puedes pegarlo en tu publicación");
      })
      .catch(function(error) {
        console.error("Error al copiar el texto:", error);
      });
  }
  