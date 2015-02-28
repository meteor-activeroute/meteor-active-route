# Active route/path helpers for [Iron.Router](https://github.com/eventedmind/iron-router)
[![Gitter](https://img.shields.io/badge/gitter-join_chat-brightgreen.svg)]
(https://gitter.im/zimme/meteor-iron-router-active)
[![Code Climate](https://img.shields.io/codeclimate/github/zimme/meteor-iron-router-active.svg)]
(https://codeclimate.com/github/zimme/meteor-iron-router-active)

I used [iron-router-active](https://github.com/XpressiveCode/iron-router-active)
as inspiration and did a coffeescript rewrite as it wasn't very active.
I've made a small functional change and also an API rewrite.

`isActiveRoute` and `isActivePath` returns the string `active` or boolean
`false` unless you specify `className` then this string is returned instead of
`active`.

`isNotActiveRoute` and `isNotActivePath` returns the string `disabled` or
boolean `false` unless you specify `className` then this string is returned
instead of `disabled`.

### Install
```sh
meteor add zimme:iron-router-active
```

### Usage
```html
<nav>
  <ul>
  	<!-- will match on /dashboard -->
    <li class="{{isActiveRoute regex='dashboard'}}">...</li>
    <!-- will match on /dashboard or / -->
    <li class="{{isActiveRoute regex='dashboard|index'}}">...</li>
    <!-- will match on /users/123 as well as /users/edit/123 -->
    <li class="{{isActiveRoute regex='users' className='on'}}">...</li>
    <!-- will match on /users/123 or /users/edit/123 or /foo_users_bar -->
    <li class="{{isActivePath regex='users'}}">...</li>
    <!-- will match against path on /products_listing/123 -->
    <li class="{{isActivePath regex='products'}}">...</li>
    <!-- will match on / -->
    {{#if isActiveRoute regex='index'}}
      <li>...</li>
    {{/if}}
    <!-- will match on anything but /dashboard -->
    <li class="{{isNotActiveRoute regex='dashboard'}}">...</li>
  </ul>
</nav>
```

Given the following sample [named iron router routes](https://github.com/iron-meteor/iron-router/blob/devel/Guide.md#named-routes):
```js
Router.route('/', function () {
	...
}, {
	name: 'index'
});
Router.route('/dashboard', function () {
	...
}, {
	name: 'dashboard'
});
Router.route('/users/:_id', function () {
	...
}, {
    name: 'users'
});
Router.route('/users/edit/:_id', function () {
	...
}, {
	name: 'users.edit'
});
Router.route('/products_listing/:_id', function () {
	...
});
```


This helper uses regex which means strings like this will work too.
```js
'^dashboard$' // Exact match for 'dashboard'
'^product' // Begins with 'product'
'list$' // Ends with 'list'
```

For example:
```html
	<!-- will match on /users/123 or /users/edit/123 but NOT on /foo_users_bar -->
    <li class="{{isActivePath regex='^users'}}">...</li>
    <!-- will match only on /users/123 but NOT on /users/edit/123 -->
    <li class="{{isActiveRoute regex='^users$'}}">...</li>
```