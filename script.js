document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const medicalHistory = document.getElementById('medicalHistory').value;
    
    const patientData = {
        name,
        contact,
        medicalHistory
    };

    fetch('https://yourapi.com/patients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patientData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Patient registered successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const patientName = document.getElementById('patientName').value;
    const doctorName = document.getElementById('doctorName').value;
    const date = document.getElementById('date').value;
    
    const appointmentData = {
        patientName,
        doctorName,
        date
    };

    fetch('https://yourapi.com/appointments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointmentData)
    })
    .then(response => response.json())
    .then(data => {
        alert('Appointment booked successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('recordForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const patientId = document.getElementById('patientId').value;
    
    fetch(`https://yourapi.com/records/${patientId}`)
    .then(response => response.json())
    .then(data => {
        const recordsDiv = document.getElementById('records');
        recordsDiv.innerHTML = '<h3>Medical Records</h3>';
        data.records.forEach(record => {
            const recordElement = document.createElement('div');
            recordElement.className = 'record';
            recordElement.innerHTML = `
                <p>Date: ${record.date}</p>
                <p>Details: ${record.details}</p>
            `;
            recordsDiv.appendChild(recordElement);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
