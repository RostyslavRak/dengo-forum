/**
 * Login service
 *
 * @author Dima Zelenyuk
 */


app
.provider('loginService', function () {
    this.$get = function ($rootScope, $http, $q, $state, $cookies) {
  var userToken = $cookies.get("JJWT"),
      welcomeState = 'welcome';

    var setHeaders = function (token) {
        if (!token) {
        delete $http.defaults.headers.common['X-Token'];
        return;
      }
      $http.defaults.headers.common['X-Token'] = token.toString();
    };

    var setToken = function (token) {
      if (!token) {
          $cookies.remove('JJWT')
      } else {
          $cookies.put('JJWT',token);
      }
      setHeaders(token);
    };

    var getLoginData = function () {
        if (userToken) {
          setHeaders(userToken);
          $http.get("/api/user/my").then(function (answer) {
              $rootScope.user = answer.data;
              wrappedService.userRole = userRoles.userRole;
              wrappedService.isLogged = true;
              wrappedService.doneLoading = true;
          });


      }
      else {
        wrappedService.userRole = userRoles.public;
        wrappedService.isLogged = false;
        wrappedService.doneLoading = true;
      }
    };

    var wrappedService = {
      loginHandler: function (user ,status, headers, config) {
        setToken(user.JJWT);
          angular.extend(wrappedService.user, user);
        wrappedService.isLogged = true;
        wrappedService.userRole = user.userRole;
          return user;
      },

      loginUser: function (httpPromise) {
          httpPromise.success(this.loginHandler);
      },


      logoutUser: function () {
        setToken(null);
        this.userRole = userRoles.public;
        this.user = {};
        this.isLogged = false;
        $state.go(welcomeState);
      },

      userRole: null,
      user: {},
      isLogged: null,
      pendingStateChange: null,
      doneLoading: null
    };

   getLoginData();
    return wrappedService;
  };
});
