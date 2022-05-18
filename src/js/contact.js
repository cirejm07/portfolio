    


    var form = document.getElementById("form");
    var userName = document.getElementById("isName")
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Thank you ${userName.value}. will reply to you as soon as I read this message.`
          })
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML =  
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!'
              })
            }
          })
        }
      }).catch(error => {
        status.innerHTML = Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!'
          })
      });
    }
    form.addEventListener("submit", handleSubmit)


    var isRefresh = document.getElementById("rotate-refresh")
    
    function clickRefreshForm(){
        form.reset()
    }