const btn = document.getElementById('mybtn');
btn.addEventListener('click', generateElement);

function generateElement() {

    let ourElement = document.createElement("img");//declaring a varable to hold the new element
    ourElement.src = 'data:image/jpeg;base64,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';
    ourElement.style.height = "300px";
    ourElement.style.width = "300px";
    //used the src property to point to the loction of th image
    document.body.appendChild(ourElement);//th image is added to our body to be displayed
}
