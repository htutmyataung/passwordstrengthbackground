// UI 
const background = document.getElementById('background');
const password = document.getElementById('password');
const eyeicon = document.getElementById('eye');

// Event Listener 
password.addEventListener('input',(e)=>{
    // console.log('hay');
    // console.log(e.target);
    // console.log(e.target.value);

    const input = e.target.value;
    const inlength = input.length;
    // console.log(inlength);
    // console.log(10 - inlength);

    const blurvalue = 10 - inlength;
    background.style.filter=`blur(${blurvalue}px)`
});

eyeicon.addEventListener('click',()=>{
    // console.log('hay');
    if (eyeicon.classList.contains('fa-eye-slash')) {
        // console.log('show password');
        // method 1 
        // eyeicon.classList.remove('fa-eye');
        // eyeicon.classList.add('fa-eye-slash');

        // method 2 
        eyeicon.classList.replace("fa-eye-slash","fa-eye");
                            // attribute value  
        password.setAttribute("type","text");

    }else{
        // console.log('hide password');
        eyeicon.classList.replace("fa-eye","fa-eye-slash");
        password.setAttribute("type","password");
    }
});



