const box = document.getElementById('box');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');


function handleRadioClick() {
  if (document.getElementById('show').checked) {
    box.style.display = 'block';
    
  } else {
    box.style.display = 'none';
  }
}

function handleRadioClick1() {
  if (document.getElementById('show1').checked) {
    box1.style.display = 'block';
    
  } else {
    box1.style.display = 'none';
  }
}

function handleRadioClick2() {
  if (document.getElementById('show2').checked) {
    box2.style.display = 'block';
  } else {
    box2.style.display = 'none';
  }
}

const radioButtons = document.querySelectorAll('input[name="example"]');
radioButtons.forEach(radio => {
  radio.addEventListener('click', handleRadioClick);
});
const radioButtons1 = document.querySelectorAll('input[name="example"]');
radioButtons.forEach(radio => {
  radio.addEventListener('click', handleRadioClick1);
});
const radioButtons2 = document.querySelectorAll('input[name="example"]');
radioButtons.forEach(radio => {
  radio.addEventListener('click', handleRadioClick2);
});




