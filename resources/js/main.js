const serviceID = 'default_service';
const templateID = 'template_brqgq58';	
(function() {emailjs.init('user_nTMwwmCm8qkC6drkM4iC7')})();
		
	window.onload = function() {
		const btn = document.getElementById('button');
		document.getElementById('contact-form')
		 .addEventListener('submit', function(event) {
		   event.preventDefault();
			const validationResult = this.checkValidity()

			if(validationResult === true) {
				const oldButtonValue = btn.value
				btn.value = "Wysyłanie informacji..."			
				emailjs.sendForm(serviceID, templateID, this)
				.then(() => {
					const element = document.getElementById('formSent')
					element.style.display = "block"
					this.style.display = "none"
				}, (err) => {
					btn.value = oldButtonValue;
					alert("Wystąpiły problemy w czasie wysyłania danych z formularza.")
				});
			 }
	});            
	Calendly.initBadgeWidget({ url: 'https://calendly.com/itlean', text: 'Umów się z nami na spotkanie', color: '#4d5055', textColor: '#ffffff', branding: false });					
}	
				
function myFunction() {
    const x = document.getElementsByTagName("nav")[0];
    if (x.className != "responsive") {
      x.className = "responsive";
    } else {
      x.className = "";
    }
}