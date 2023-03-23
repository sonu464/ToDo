function addBtn() {
    document.getElementById("error").innerHTML = "";


    let text = document.getElementById('td-text').value;
    if (text == '') {
        document.getElementById("error").innerHTML = "( Please enter something )";
    } else {

        let box = document.getElementById("box");
        let li = document.createElement("li");
        li.textContent = text;
        let position = box.firstElementChild;

        let span2 = document.createElement("span");
        span2.textContent = "Delete";
        li.appendChild(span2);

        document.getElementById('td-text').value = "";


        if (position == null) {
            box.appendChild(li);
        } else {
            box.insertBefore(li, position);
        }
    }

    let btn = document.querySelector('ul');
    btn.addEventListener('click', function (e) {
        let box = document.getElementById("box");
        let li = e.target.parentNode;
        box.removeChild(li);

    })

}
