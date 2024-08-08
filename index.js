const inputANode = document.querySelector('.js-input-a');
const inputBNode = document.querySelector('.js-input-b');
const selectNode = document.querySelector('.js-select-operation');
const btnResultNode = document.querySelector('.js-btn-result');
const outPutNode = document.querySelector('.js-output');

btnResultNode.addEventListener('click', function(e) {
   const a = Number(inputANode.value);
   const b = +inputBNode.value;
   const operation = selectNode.value;

   const result = calculate({a,
       b,
       operation
   });
    outPutNode.innerHTML = result;
});

