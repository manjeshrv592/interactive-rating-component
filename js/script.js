//////////////////////////////////////////////////////
// DOM SELECTION
const ratingPanel = document.querySelector('.rating-box');
const feedbackPanel = document.querySelector('.feedback-box');
const ratingList = document.querySelector('.rating-list');
const ratingBtns = document.querySelectorAll('.rating-btn');
const feedbackValue = document.querySelector('.feedback-value');
const submitBtn = document.querySelector('.submit-btn');

//////////////////////////////////////////////////////
// GLOBAL VARIABLES
let rating;

///////////////////////////////////////////////////////
// FUNCTIONS

// Function to remove selecte class from all rating buttons
const removeActiveClass = () =>
  ratingBtns.forEach(btn => btn.classList.remove('selected'));

// Function to display feedback
const displayFeedback = value => {
  // Add value to feedback text
  feedbackValue.textContent = value;

  // Hide rating pannel
  ratingPanel.classList.add('d-none');

  // Show feedback pannel
  feedbackPanel.classList.remove('d-none');
};

///////////////////////////////////////////////////////
// EVENT LISTNERS

// Select rating value
ratingList.addEventListener('click', function (e) {
  // Store clicked element
  const el = e.target;

  // If not clicked on button return
  if (!el.classList.contains('rating-btn')) return;

  // Remove selected class from all Rating buttons
  removeActiveClass();

  // Add active class clicked Rating button
  el.classList.add('selected');

  // Get rating value using data attribute
  rating = el.dataset.rating;
});

// Submit handler
submitBtn.addEventListener('click', function () {
  displayFeedback(rating);
});
