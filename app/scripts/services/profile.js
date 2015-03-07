'use strict';

function User(id, sex, age, relationship, avatar, status) {
  this.id = id;
  this.sex = sex;
  this.age = age;
  this.relationship = relationship;
  this.avatar = avatar;
  this.status = status;
}

function Profile($resource, AvatarEndPoint, Config) {
  var params = {
    server: Config.server
  };
  var actions = {
    search: {
      method: 'GET',
      isArray: true,
      params: {
        q: '@q'
      }
    }
  };
  // TODO: this should be the real called to an API service
  // return $resource(ProfileEndPoint, params, actions);

  // this is a example
  var users = [];
  users.push(new User(1, 'male', '31', 'ich', 'images/a1b.png', 'leding'));
  users.push(new User(2, 'female', '26', 'ich', 'images/a2b.png', 'leding'));
  users.push(new User(3, 'female', '47', 'ich', 'images/a3b.png', 'leding'));

  return {
    get: function() {
      return users;
    }
  };
}

angular.module('inspinia')
.factory('Profile', ['$resource', 'AvatarEndPoint', 'Config', Profile])
.value('ProfileEndPoint', 'http://:server/profile/:id');
