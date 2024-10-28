import { db } from './firebase-config.js';
import { collection, getDocs } from 'firebase/firestore';

// Function to fetch appointments from Firestore
async function fetchAppointments() {
    const appointmentsRef = collection(db, 'appointments');
    const snapshot = await getDocs(appointmentsRef);
    const appointmentsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    // Get the table body element
    const tableBody = document.getElementById('appointments-table-body');

    // Clear existing content
    tableBody.innerHTML = '';

    // Populate the table with data
    appointmentsList.forEach(appointment => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${appointment.id}</td>
            <td>${appointment.patientName}</td>
            <td>${appointment.date}</td>
            <td>${appointment.time}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Call the fetch function on page load
fetchAppointments().catch(error => {
    console.error('Error fetching appointments:', error);
});
