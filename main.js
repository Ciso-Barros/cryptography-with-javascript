  var text = document.querySelector('#txt_encrypt')
  var btn_encrypt = document.querySelector('#encrypt')
  var btn_decrypt = document.querySelector('#decrypt')
  var btn_copy = document.querySelector('#copy')
  var ctn_message_h = document.querySelector('#message_h2')
  var encrypt_message = document.querySelector('#message_p')
  const image = document.querySelector('.main-image')

  /* botão copiar com a respectiva função */

      btn_copy.addEventListener('click', copy);


  /* botão encriptar com as validações */

  btn_encrypt.addEventListener('click', () => {


  if(validText()){

      alert("Digite apenas letras minúsculas e sem acento!")
      text.value = '';


  }else{


      encrypt(text.value);
      text.value = '';
  

  }


  });

  /* botão decriptar com as validações */

  btn_decrypt.addEventListener('click', () => {

      if(validText()){

          alert("Digite apenas letras minúsculas e sem acento!")
          text.value = '';

      }else{


          decrypt_message(text.value);
          text.value = '';
      }

  
  });


  /* função encriptar */

  function encrypt(message) {

      if (text.value.length == 0) {

          alert('Digite a mensagem que deseja criptografar!')

      } else {


          image.style.display = 'none';
          ctn_message_h.innerHTML = 'Mensagem Criptografada:';
          encrypt_message.innerHTML = message.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');
          btn_copy.style.display = 'block';


      }
  }

  /* função decriptar */

  function decrypt_message(message) {

      if (text.value.length == 0) {

          alert('Digite a mensagem que deseja descriptografar!')
      } else {

          image.style.display = 'none';
          ctn_message_h.innerHTML = 'Mensagem Descriptografada:';
          encrypt_message.innerHTML = message.replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/imes/g, 'i').replace(/enter/g, 'e').replace(/ufat/g, 'u');

      }
  }

  /* função copiar */

  function copy() {

      var text_copy = document.getElementById('message_p').innerText;


      navigator.clipboard.writeText(text_copy)

      alert('Mensagem copiada!')

  }


  /* função que invalida acentos e maiúsculas */

  function validText() {
      var reg = /[A-Z]|[À-Ú]|[à-ä]|[è-ë]|[ì-ï]|[ò-ö]|[ù-ü]/g;
      
      return reg.test(text.value)
  

  }
