
 (function() {
            // https://dashboard.emailjs.com/admin/integration
            emailjs.init('user_nTMwwmCm8qkC6drkM4iC7')
        })();
		

        window.onload = function() {

				
			


const btn = document.getElementById('button');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_brqgq58';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});            
        
		
		
		
		
	
				}
				
				
				
					 function myFunction() {
    const x = document.getElementsByTagName("nav")[0];
    if (x.className != "responsive") {
      x.className = "responsive";
    } else {
      x.className = "";
    }
  }