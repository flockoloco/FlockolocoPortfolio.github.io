
const scrollProgress = document.getElementById('progressBar');
const height =
document.getElementById('Studies').offsetHeight;

//const offSetFooter = document.getElementById('Projects').offsetHeight + document.getElementById('Contacts').offsetHeight + document.getElementById('Footer').offsetHeight;

const firstProject = document.getElementById('first');
const GameJam2020 = document.getElementById('second')
const secondProject = document.getElementById('third');
const thirdProject = document.getElementById('fourth');
const fourthProject = document.getElementById('fifth');
const fifthProject = document.getElementById('sixth');


firstProject.addEventListener('click', ()=> {
  document.getElementById('Projects').scrollIntoView();
})
GameJam2020.addEventListener('click', ()=> {
  document.getElementById('Projects').scrollIntoView();
})
secondProject.addEventListener('click', ()=> {
  document.getElementById('Projects').scrollIntoView();
})
thirdProject.addEventListener('click', ()=> {
  document.getElementById('Projects').scrollIntoView();
})
fourthProject.addEventListener('click', ()=> {
  document.getElementById('Projects').scrollIntoView();
})
fifthProject.addEventListener('click', ()=> {
  document.getElementById('Projects').scrollIntoView();
})

window.addEventListener('scroll', () => {
  const scrollTop =
    document.body.scrollTop - ( document.getElementById('NavbarContainer').offsetHeight + document.getElementById('AboutMe').offsetHeight);
  scrollProgress.style.height = `${((scrollTop) / height) * 120}%`;
  
  if(scrollTop < - 100)
  {
    scrollProgress.style.height = `${0}%`;
  }
});

window.addEventListener('load', ()=>{
  const photoToAppear = document.getElementById('AboutPhoto');
  const textToAppear = document.getElementById('AboutText');

  textToAppear.style.objectPosition = 'absolute';

  textToAppear.style.visibility = 'visible';
  photoToAppear.style.visibility = 'visible';

  photoToAppear.classList.add('elementToFadeLeft');
  textToAppear.classList.add('elementToFadeRight');
})




  
  

