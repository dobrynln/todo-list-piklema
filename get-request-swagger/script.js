fetch("https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log("Ошибка", err);
  });
