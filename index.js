const display = document.getElementById('display')
const recipeLabel = document.createElement('label');
recipeLabel.textContent = "Name: "
recipeLabel.setAttribute('for','name');
recipeLabel.style.display = 'block';
recipeLabel.setAttribute('style', 'width:100%; margin-right:3rem; color:#333333;font-weight:bold;')
const recipeInput = document.createElement('input');
recipeInput.setAttribute('id', 'name');
recipeInput.setAttribute('type', 'text');
recipeInput.setAttribute('style', 'margin: 0.5rem 0 0.5rem 3rem;')
recipeInput.required = true;
recipeLabel.appendChild(recipeInput);

const dscrptionLabel = document.createElement('label');
dscrptionLabel.textContent = "Description: ";
dscrptionLabel.setAttribute('for', 'description');
dscrptionLabel.setAttribute('style', 'display:block; width: 100%; margin:-top:2rem; margin-bottom:1rem; color:#333333;font-weight:bold;')
const dscrptionInput = document.createElement('textarea');
dscrptionInput.setAttribute('id', 'description');
dscrptionInput.setAttribute('type', 'text');
dscrptionInput.setAttribute('style', 'margin-left:0.8rem;')
dscrptionInput.required = true;
dscrptionLabel.appendChild(dscrptionInput);

const ingrLabel = document.createElement('label');
ingrLabel.textContent = "Ingredients: "
ingrLabel.setAttribute('for', 'ingredient');
ingrLabel.setAttribute('style', 'display:block; width: 100%;margin-bottom:1rem; color:#333333;font-weight:bold;')
const ingrTextarea = document.createElement('textarea');
ingrTextarea.setAttribute('id', 'ingredient');
ingrTextarea.setAttribute('type', 'text');
ingrTextarea.setAttribute('style', 'margin-left:0.9rem;')
ingrTextarea.required = true;
ingrLabel.appendChild(ingrTextarea);

const stepsLabel = document.createElement('label');
stepsLabel.textContent = "Steps: "
stepsLabel.setAttribute('for', 'steps');
stepsLabel.setAttribute('style', 'display:block; width: 100%; margin-bottom:1rem; color: #333333;font-weight:bold;')
const stepsTextarea = document.createElement('textarea');
stepsTextarea.setAttribute('id', 'steps');
stepsTextarea.setAttribute('type', 'text');
stepsTextarea.setAttribute('style', 'margin-left:3.2rem;')
stepsTextarea.required = true;
stepsLabel.appendChild(stepsTextarea);

const sbmBtn = document.createElement('button');
sbmBtn.textContent = "SUBMIT";
sbmBtn.setAttribute('type', 'submit');
sbmBtn.setAttribute('style', 'width:4rem; display:block;font-family: Arial, sans-serif; background-color:#2563eb; padding:0.2rem;color: white; margin-left:9rem;font-weight: bold;');
sbmBtn.addEventListener('mouseenter', () => {
    sbmBtn.style.backgroundColor = '#45a049';
});

sbmBtn.addEventListener('mouseleave', () => {
    sbmBtn.style.backgroundColor = '#2563eb';
});


display.appendChild(recipeLabel);
display.appendChild(dscrptionLabel);
display.appendChild(ingrLabel);
display.appendChild(stepsLabel);
display.appendChild(sbmBtn);
console.log(display);


const clickHere = document.getElementById('here');
clickHere.addEventListener('click', () => {
    console.log("its me again.")
    if (display.style.display === 'none' || display.style.display === '') {
        display.style.display = "block";
    }
    else {
        display.style.display === "none";
    }
});
