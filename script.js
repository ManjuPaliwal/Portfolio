let bars = document.querySelector('.bars');
let ul = document.querySelector('.ul');
let close = document.querySelector('.close');
let lists = document.querySelectorAll('.list')
bars.addEventListener('click',function(){
ul.classList.toggle('displaytoggle')
});
close.addEventListener('click',function(){
ul.classList.toggle('displaytoggle')

});

lists.forEach((list)=>{
  list.addEventListener('click',()=>{
    ul.classList.toggle('displaytoggle');
    console.log('hello');
  })
})


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Get all elements with the class "scroll-text"
const scrollTextElements = document.querySelectorAll('.scroll-text');

// Attach the scroll event listener to each "scroll-text" element
scrollTextElements.forEach((scrollText) => {
  window.addEventListener('scroll', () => {
    if (isInViewport(scrollText)) {
      scrollText.classList.add('fadeInUp');
    } else {
      scrollText.classList.remove('fadeInUp');
    }
  });
});


// Sample array of job objects
const projectsArray = [
  // Your project objects here
  {
    projecttype: 'Menu',
    link: 'https://github.com/ManjuPaliwal/Menu',
    place: 'Visakhapatnam,India',
    day: '5 days ago',
    projectImg: 'image/menu.png'
  },
  {
    projecttype: 'Anime-Masked-login',
    link: 'https://github.com/ManjuPaliwal/Anime-Masked-login',
    place: 'Jodhpur,India',
    day: '3 days ago',
    projectImg: 'image/panda.png'
  },  {
    projecttype: 'Sticky-note',
    link: 'https://github.com/ManjuPaliwal/Sticky-note',
    projectImg: 'image/stickynote.png'
  },
  {
    projecttype: 'login-signup-animation',
    link: 'https://github.com/ManjuPaliwal/login-signup-animation',
    projectImg: 'image/login-signup.png'
  },  {
    projecttype: 'Recruter-webPage',
    link: 'https://github.com/ManjuPaliwal/Recruter-webPage',
    projectImg: 'image/recruter.png'
  },
  {
    projecttype: 'Calculator',
    link: 'https://github.com/ManjuPaliwal/calculator',
    projectImg: 'image/calculator.png'
  },  {
    projecttype: 'WeatherApp',
    link: 'https://github.com/ManjuPaliwal/WeatherApp',
    projectImg: 'image/weather.png'
  },
  {
    projecttype: 'zigzag-dropdown',
    link: 'https://github.com/ManjuPaliwal/zigzag-dropdown',
    projectImg: 'image/zigzag.png'
  },  {
    projecttype: 'Flipkart-clone',
    link: 'https://github.com/ManjuPaliwal/Flipkart-clone',
    projectImg: 'image/flipkart.png'
  },
  {
    projecttype: 'Survey-Form',
    link: 'https://github.com/ManjuPaliwal/SurveyForm',
    projectImg: 'image/surveyform.png'
  },
  {
    projecttype: 'Scroll-Animation',
    link: 'https://github.com/ManjuPaliwal/Scroll-Animation',
    projectImg: 'image/scroll.png'
  },
];

// Number of project cards to show initially and increment when clicking "View More"
// Sample array of project objects



const showIncrement = 5;
let visibleprojects = showIncrement;

const projectContainer = document.getElementById('project-div');
const viewMoreBtn = document.getElementById('view-more-btn');
function getRandomColor() {
  const colors = [
    'rgba(0, 128, 0, 0.7)',     // Darker green with transparency
    'rgba(255, 192, 203, 0.7)', // Darker pink with transparency
    'rgba(128, 0, 128, 0.7)',   // Darker purple with transparency
    'rgba(255, 255, 0, 0.7)',   // Darker yellow with transparency
    'rgba(135, 206, 250, 0.7)'  // Darker sky blue with transparency
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function createprojectCards(projects) {
  projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.classList.add('project-card');

    // project content
    const projectTypeElement = document.createElement('p');
    projectTypeElement.textContent =  project.projecttype;
    card.appendChild(projectTypeElement);
    projectTypeElement.classList.add('project-type')
    projectTypeElement.style.backgroundColor=getRandomColor();
    projectTypeElement.style.color='white';

    const projectImgElement = document.createElement('img');
    projectImgElement.src = project.projectImg;
    card.appendChild(projectImgElement);

    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Visit';
    card.appendChild(buttonElement);
    buttonElement.addEventListener('click',()=>{
      window.open(project.link,'_blank');
    });
buttonElement.classList.add('project-button');

//add style to button
   

    projectContainer.appendChild(card);

    // Show the first 5 project cards and hide the rest
    if (index < visibleprojects) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function onViewMoreClick() {
  // Toggle between showing all project cards and showing only the first 5 project cards
  if (visibleprojects === showIncrement) {
    visibleprojects = projectsArray.length;
    viewMoreBtn.textContent = 'View Less';
  } else {
    visibleprojects = showIncrement;
    viewMoreBtn.textContent = 'View More';
  }

  // Show or hide project cards based on the updated visibleprojects value
  const allprojectCards = document.querySelectorAll('.project-card');
  allprojectCards.forEach((card, index) => {
    if (index < visibleprojects) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

createprojectCards(projectsArray);

// Attach click event listener to the "View More" button
viewMoreBtn.addEventListener('click', onViewMoreClick);
