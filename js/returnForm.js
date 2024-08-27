document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('form[name="FormEnviodeOrçamento"]').addEventListener('submit', function(e){
      e.preventDefault();

      var xhr = new XMLHttpRequest();
      xhr.open('POST', this.action, true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      xhr.onload = function(){
          if (xhr.status === 200 && xhr.responseText === 'success') {
              function alert(){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Email enviado com sucesso!",
                  showConfirmButton: false,
                  timer: 1500
                });
              };
              alert()
          } else if(xhr.status === 200 && xhr.responseText === 'Formato de email invalido'){
            function alert(){
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Erro: Formato de email inválido!",
                showConfirmButton: false,
                timer: 1500
              });
            };
            alert()
          }else{
            function alert(){
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Erro: Erro no servidor!",
                showConfirmButton: false,
                timer: 1500
              });
            };
            alert()
          }
      };

      xhr.send(new URLSearchParams(new FormData(this)).toString());
  });
});
