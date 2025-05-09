document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('courseModal');
    const closeButton = document.querySelector('.close-button');
    const courseCards = document.querySelectorAll('.course-card');
    // User Profile Dropdown Toggle
    const userProfile = document.getElementById('userProfile');
    const userDropdown = document.getElementById('userDropdown');

    userProfile.addEventListener('click', function(e) {
        e.stopPropagation();
        userDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!userProfile.contains(e.target) && userDropdown.classList.contains('show')) {
            userDropdown.classList.remove('show');
        }
    });

    // Prevent dropdown from closing when clicking inside it
    userDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    // Course data
    const courseData = {
        'mathematics': {
            name: 'Mathematics',
            grade: 'Grade 7',
            location: 'Qena City - Al Safwa Educational Center',
            description: 'Build a strong foundation in essential mathematical concepts through interactive lessons and practice problems',
            group: {
                name: 'Group 1',
                days: 'Tuesday & Thursday',
                time: '1:00 PM - 3:00 PM'
            }
        },
        'science': {
            name: 'Science',
            grade: 'Grade 9',
            location: 'Qena City - Al Safwa Educational Center',
            description: 'Explore physics, chemistry, and biology with hands-on experiments and real-world applications to on experiments',
            group: {
                name: 'Group 2',
                days: 'Monday & Wednesday',
                time: '4:00 PM - 6:00 PM'
            }
        },
        'english': {
            name: 'English',
            grade: 'Grades 8-9',
            location: 'Qena City - Al Safwa Educational Center',
            description: 'Strengthen reading comprehension, grammar, and creative writing skills through engaging texts and activities',
            group: {
                name: 'Group 3',
                days: 'Sunday & Wednesday',
                time: '5:00 PM - 7:00 PM'
            }
        },
        'arabic': {
            name: 'Arabic',
            grade: 'Grades 7-8',
            location: 'Qena City - Al Safwa Educational Center',
            description: 'Develop a deep appreciation of the Arabic language through comprehensive lessons in grammar, vocabulary, literature, and creative writing',
            group: {
                name: 'Group 4',
                days: 'Monday & Thursday',
                time: '3:00 PM - 5:00 PM'
            }
        },
        'social-studies': {
            name: 'Social Studies',
            grade: 'Grades 7-9',
            location: 'Qena City - Al Safwa Educational Center',
            description: 'Explore the foundations of geography, history, civics, and economics to understand how societies are shaped and interconnected.',
            group: {
                name: 'Group 5',
                days: 'Sunday & Tuesday',
                time: '2:00 PM - 4:00 PM'
            }
        }
    };

    // Event listeners for course cards
    courseCards.forEach(card => {
        card.addEventListener('click', function() {
            const courseId = this.getAttribute('data-course');
            const course = courseData[courseId];
            
            if (course) {
                // Populate modal with course data
                document.getElementById('modalCourseName').textContent = course.name;
                document.getElementById('modalLocation').textContent = `${course.location}`;
                document.getElementById('modalDescription').textContent = course.description;
                document.getElementById('groupName').textContent = course.group.name;
                document.getElementById('groupDays').textContent = course.group.days;
                document.getElementById('groupTime').textContent = course.group.time;
                
                // Display modal
                modal.style.display = 'flex';
            }
        });
    });

    // Close modal when clicking the close button
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
});