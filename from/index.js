const studentdata = (e) => {
    e.preventDefault();


    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let grid = document.getElementById("grid").value;
    let course = document.getElementById("course").value;

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = name;

    let td2 = document.createElement("td");
    td2.innerHTML = number;

    let td3 = document.createElement("td");
    td3.innerHTML = grid;

    let td4 = document.createElement("td");
    td4.innerHTML = course;

    tr.append(td1, td2, td3, td4);
    document.getElementById("data").append(tr);


};
document.getElementById("student").addEventListener("submit", studentdata)