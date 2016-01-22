import Ember from 'ember';
import EN from './champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Install",
      "options": "Options"
    },
    "search_by": {
      "assemblies": "Champion",
      "libraries": "Libraries",
      "utilities": "Utilities"
    },
    "search_phrase": "Search for assemblies",
    "sort_by": {
      "last_update": "Last Update",
      "name": "Name",
      "rating": "Rating"
    },
    "written_by": "This assembly is written by {author} and the last update was {until-now}"
  },
  "layout": {
    "logout": "Logout",
    "navigation": {
      "applog": "Applog",
      "assemblies": "Assemblies",
      "changelog": "Changelog",
      "news": "News",
      "profiles": "Profiles",
      "settings": "Settings"
    },
    "welcome_back": "Welcome back, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Create a new set",
        "default": "Default Profile {index}",
        "title": "My Sets"
      },
      "entry": {
        "author": "Assembly Author",
        "name": "Assembly Name",
        "version": "Assembly Version"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
