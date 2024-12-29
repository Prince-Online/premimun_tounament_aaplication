function submitForm(e) {
    e.preventDefault();
    const form = document.getElementById('registrationForm');
    const formData = new FormData(form);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw9xLuZFeKLzcRkomrRgjHlmS1k-bi7VaMvZPpepNSmRNP1PJU0OvXTAf6YdaYRvk63/exec';
    
    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json()) 
    .then(data => {
        if (data.status === 'success') {
            alert('Registration successful!');
            form.reset();
        } else {
            alert(`${data.message}`);  
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form');
    });
}
