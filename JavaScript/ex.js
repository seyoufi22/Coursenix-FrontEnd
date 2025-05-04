// DOM Elements
const gradeLevelsInput = document.getElementById('gradeLevels');
const groupsSection = document.getElementById('groupsSection');
const gradeNumber = document.getElementById('gradeNumber');
const groupsContainer = document.getElementById('groupsContainer');
const addGroupBtn = document.getElementById('addGroupBtn');
const courseForm = document.getElementById('courseForm');

// Variables
let groupCounter = 0;

// Event Listeners
gradeLevelsInput.addEventListener('input', handleGradeChange);
addGroupBtn.addEventListener('click', addNewGroup);
courseForm.addEventListener('submit', handleFormSubmit);

// Functions
function handleGradeChange() {
const gradeLevel = parseInt(gradeLevelsInput.value);

if (gradeLevel > 0) {
// Show groups section
groupsSection.classList.remove('d-none');
gradeNumber.textContent = gradeLevel;

// Clear existing groups
groupsContainer.innerHTML = '';
groupCounter = 0;

// Add first group by default
addNewGroup();
} else {
// Hide groups section
groupsSection.classList.add('d-none');
}
}

function addNewGroup() {
groupCounter++;

const groupDiv = document.createElement('div');
groupDiv.className = 'group-card fade-in';
groupDiv.dataset.groupId = groupCounter;

groupDiv.innerHTML = `
<div class="group-header">
    <h6 class="fw-bold">Group ${groupCounter}</h6>
    <button type="button" class="delete-group" aria-label="Delete group">
    <i class="bi bi-trash"></i>
    </button>
</div>
<div class="row">
    <div class="col-md-12 mb-3">
    <label for="groupName${groupCounter}" class="form-label">Group Name</label>
    <input type="text" class="form-control" id="groupName${groupCounter}" placeholder="Enter group name">
    </div>
    <div class="col-md-12 mb-3">
    <label for="groupDays${groupCounter}" class="form-label">Days</label>
    <input type="text" class="form-control" id="groupDays${groupCounter}" placeholder="E.g: Tuesday & Thursday">
    </div>
    <div class="col-md-6 mb-3">
    <label for="timeFrom${groupCounter}" class="form-label">Time From</label>
    <div class="time-input-container">
        <input type="time" class="form-control" id="timeFrom${groupCounter}">
    </div>
    </div>
    <div class="col-md-6 mb-3">
    <label for="timeTo${groupCounter}" class="form-label">Time To</label>
    <div class="time-input-container">
        <input type="time" class="form-control" id="timeTo${groupCounter}">
    </div>
    </div>
</div>
`;

groupsContainer.appendChild(groupDiv);

// Add event listener for delete button
const deleteBtn = groupDiv.querySelector('.delete-group');
deleteBtn.addEventListener('click', () => deleteGroup(groupDiv));
}

function deleteGroup(groupElement) {
// Add fade-out animation
groupElement.style.opacity = '0';
groupElement.style.transform = 'translateY(10px)';
groupElement.style.transition = 'all 0.3s ease';

// Remove element after animation completes
setTimeout(() => {
groupElement.remove();
updateGroupNumbers();
}, 300);
}

function updateGroupNumbers() {
// Update group numbering
const groupCards = groupsContainer.querySelectorAll('.group-card');
groupCards.forEach((card, index) => {
const headingElement = card.querySelector('h6');
headingElement.textContent = `Group ${index + 1}`;
});
}

