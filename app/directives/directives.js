/**
 * Created by Dokonaly on 01.12.2016.
 */
app.directive('myInput', function() {
    return {
        restrict: 'E',
        template: "<label>User:<input type='text' ng-model='username'></label><button ng-click='getGitHubUser(username)'>GO</button>"
    };
});