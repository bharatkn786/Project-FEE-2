

function changeQuantity(button, change) {
    const input = button.parentElement.querySelector('.number');
    let currentValue = parseInt(input.value);
    const minValue = parseInt(input.getAttribute('min'));
    const maxValue = parseInt(input.getAttribute('max'));

    const newValue = currentValue + change;

    if (newValue >= minValue && newValue <= maxValue) {
        input.value = newValue;
    }
}

const buttons = document.querySelectorAll('.tabs button');
const descriptionContent = document.querySelector('.description-content');
const additionalContent = document.querySelector('.additional-content');
const returnContent = document.querySelector('.return-content');
const reviewsContent = document.querySelector('.reviews-content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    descriptionContent.style.display = 'none';
    additionalContent.style.display = 'none';
    returnContent.style.display = 'none';
    reviewsContent.style.display = 'none';

    if (button.id === '1') {
      descriptionContent.style.display = 'block';
    } else if (button.id === '2') {
      additionalContent.style.display = 'block';
    } else if (button.id === '3') {
      returnContent.style.display = 'block';
    } else if (button.id === '4') {
      reviewsContent.style.display = 'block';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    // Select all small image containers
    const smallImageDivs = document.querySelectorAll('.small-img > div');
    
    // Get the large image element
    const bigImage = document.getElementById("big-image");

    smallImageDivs.forEach((div) => {
        div.addEventListener('click', function() {
            // Remove the 'selected' class from all image containers
            smallImageDivs.forEach(container => container.classList.remove('selected'));

            // Add the 'selected' class to the clicked container
            this.classList.add('selected');
            
            // Update the large image source
            const imageSrc = this.querySelector('img').getAttribute('onclick').match(/'(.*?)'/)[1];
            bigImage.src = imageSrc;
        });
    });
});


document.querySelectorAll('.color-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.color-option').forEach(opt => {
            opt.classList.remove('active');
        });
        this.classList.add('active');
    });

    option.addEventListener('mouseenter', function() {
        this.querySelector('.color-circle').style.filter = 'brightness(0.8)';
    });

    option.addEventListener('mouseleave', function() {
        this.querySelector('.color-circle').style.filter = 'brightness(1)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const heartIcon = document.querySelector('.fa-heart');
    heartIcon.addEventListener('click', function() {
        if (heartIcon.classList.contains('liked')) {
            heartIcon.classList.remove('liked');
            heartIcon.style.color = 'rgb(32, 31, 31)'; // Original color
        } else {
            heartIcon.classList.add('liked');
            heartIcon.style.color = 'red'; // Liked color
        }
    });
});
