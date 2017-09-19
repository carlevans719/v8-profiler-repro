import { Meteor } from 'meteor/meteor'

if (Meteor.isDevelopment) {
  import profiler from 'v8-profiler';
}
