function getData() {
    return {
        name: $("").value().trim(),
        phone: $("").value().trim(),
        email: $("").value().trim()
    };
}

function validateData(data) {
    return data.name && data.phone && data.email;
}

$("#").click(function(event) {
    event.preventDefault();
    let data = getData();
    if (validateData(data)) {
        $.post("/reserve/new", data);
    }
});
