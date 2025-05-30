document.addEventListener('DOMContentLoaded', function () {
    // Search functionality
    const searchInput = document.getElementById('studentSearch');
    const studentRows = document.querySelectorAll('.attendance-table tbody tr');

    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase().trim();

        studentRows.forEach(row => {
            const studentName = row.querySelector('td:first-child').textContent.toLowerCase();
            if (studentName.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Get all delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');

    // Add click event listeners to delete buttons
    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Get the parent row
            const row = this.closest('tr');

            // Add a visual effect before removal
            row.style.backgroundColor = '#ffebee';
            row.style.transition = 'background-color 0.3s';

            // Ask for confirmation
            if (confirm('Are you sure you want to delete this student?')) {
                setTimeout(() => {
                    row.style.opacity = '0';
                    row.style.transition = 'opacity 0.5s';

                    // Remove the row after animation
                    setTimeout(() => {
                        row.remove();
                    }, 500);
                }, 300);
            } else {
                // Reset background if cancelled
                setTimeout(() => {
                    row.style.backgroundColor = '';
                }, 300);
            }
        });
    });
    const selectedIds = [];
    // لما المستخدم يدوس على زرار الحذف لكل طالب
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const studentId = this.value;
            if (!selectedIds.includes(studentId)) {
                selectedIds.push(studentId);
            }
        });
    });

    // Save button functionality
    const saveButton = document.querySelector('.save-btn');
    saveButton.addEventListener('click', function () {
        if (confirm('Are you sure you want to save changes?')) {
            fetch('/YourController/DeleteStudents', { //Don't forget to change the path
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(selectedIds)
            })
            .then(response => {
                if (response.ok) {
                    alert("Changed has been saved successfully");
                } else {
                    alert("Error while savine");
                }
            });
        }
    });

    // Make table rows hoverable with a subtle effect
    const tableRows = document.querySelectorAll('.attendance-table tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseover', function () {
            this.style.boxShadow = '0 0 5px rgba(0,0,0,0.1)';
        });

        row.addEventListener('mouseout', function () {
            this.style.boxShadow = '';
        });
    });
});
    
