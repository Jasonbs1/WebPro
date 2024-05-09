document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var gender = document.getElementById('gender').value;
    var program = document.getElementById('program').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var mother = document.getElementById('mother').value;
    var father = document.getElementById('father').value;
    var photoInput = document.getElementById('photo');
    var photo = photoInput.files[0];
    var displayInfo = document.getElementById('display-info');

    displayInfo.innerHTML = `
        <h2 class="text-center">Registration Information</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Program of Interest:</strong> ${program}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Mother's Name:</strong> ${mother}</p>
        <p><strong>Father's Name:</strong> ${father}</p>
        <p><strong>Photo:</strong></p>
        <img src="${URL.createObjectURL(photo)}" alt="Uploaded Photo" style="max-width: 100%; height: auto;">
    `;

    displayInfo.style.display = 'block';
});