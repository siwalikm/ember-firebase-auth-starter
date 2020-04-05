# ember-firebase-auth-starter

This is a Ember JS starter project which uses [Emberfire](https://github.com/firebase/emberfire) as the Firebase Adapter and [Torii](https://github.com/Vestorly/torii) as an authentication addon.

### Notes
I had issues making ember@latest (3.16 at the time of writing) work seamlessly with Emberfire and Torii as due to incompatiblity with Ember-data version > 3.

Hence we're using ember@2.18 LTS version for this starter. (Raise a PR if you get everything to work in Ember Octane and Ember-data 3+)

### Firebase Authentication and DB setup
- Go to your [firebase console](https://console.firebase.google.com/) and create a new app.
- Create a Firebase Database
- Change the rules to enable read/write for testing purposes. Learn more about [Firebase rules](https://firebase.google.com/docs/database/security/?authuser=0).
- Get credentials for `config/environment.js > firebase` object from Project Settings in Firebase and create a web application to generate the credentials.
- Create a `.env` in the root directory and add all required keys (see config/environment.js).
- Next go to `Authentication > Sign-in mode` to enable Google login

That's it. Now we can create ember models and try creating records and saving them. It should automatically create entry in our realtime Firebase DB now.

### Dev Setup
```bash
$ git clone git@github.com:siwalikm
$ ember-firebase-starter.git
$ cd ember-firebase-starter
$ npm install
$ ember s
```
