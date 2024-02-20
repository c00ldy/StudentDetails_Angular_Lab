var app = angular.module('studentApp', []);

app.controller('StudentController', function($scope, $http) {
  $http.get('file.json') // Replace 'students.json' with your actual data source or API endpoint
    .then(function(response) {
      $scope.students = response.data.students;
    })
    .catch(function(error) {
      console.error('Error fetching student data:', error);
    });
});
