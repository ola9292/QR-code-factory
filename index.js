const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');



function onGenerateSubmit(e){
    e.preventDefault();
    clearUI()
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;

 
    if(url ===""){
        alert('please enter url')
    }else{
        showSpinner()

        setTimeout(()=>{
            hideSpinner()
            
            generateQRCode(url,size)
            setTimeout(()=>{
                // Get save url
                const saveUrl = qr.querySelector('img').src;
                // Create save button
                createSaveBtn(saveUrl);
            },50)
        },1000)
       
    }

  
}
    function generateQRCode(url,size){
        var qrcode = new QRCode(qr, {
            text: url,
            width: size,
            height: size,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
    function showSpinner(){
        document.getElementById('spinner').style.display = 'block'
    }
    function hideSpinner(){
        document.getElementById('spinner').style.display = 'none'
    }
  
    function clearUI(){
        qr.innerHTML = ''
        const saveLink = document.getElementById('save-link');
        if(saveLink){
            saveLink.remove();
        }
    }
    function createSaveBtn(saveUrl){
        const link = document.createElement('a');
        link.id = 'save-link';
        link.classList =
          'bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
        link.href = saveUrl;
        link.download = 'qrcode';
        link.innerHTML = 'Save Image';
        document.getElementById('generated').appendChild(link);
    }
    form.addEventListener('submit', onGenerateSubmit);

