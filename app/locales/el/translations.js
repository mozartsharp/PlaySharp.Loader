import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Εγκατάσταση",
      "options": "Επιλογές"
    },
    "search_by": {
      "assemblies": "Ήρωας",
      "libraries": "Βιβλιοθήκες",
      "utilities": "Βοηθητικά"
    },
    "search_phrase": "Ψάξτε για assemblies",
    "sort_by": {
      "last_update": "Τελευταία ενημέρωση",
      "name": "Όνομα",
      "rating": "Βαθμολογία"
    },
    "written_by": "Αυτό το assembly γράφτηκε από {author} και η τελευταία ενημέρωση έγινε στις {until-now}"
  },
  "layout": {
    "logout": "Αποσύνδεση",
    "navigation": {
      "applog": "Αρχείο καταγραφής εφαρμογής",
      "assemblies": "Assemblies",
      "changelog": "Αλλαγές",
      "news": "Νέα",
      "profiles": "Προφίλ",
      "settings": "Ρυθμίσεις"
    },
    "welcome_back": "Καλωσόρισες πίσω, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Δημιουργία νέου σετ",
        "default": "Προεπιλεγμένο Προφίλ {index}",
        "title": "Τα σετ μου"
      },
      "entry": {
        "author": "Συγγραφεας Assembly",
        "name": "Ονομα Assembly",
        "version": "Εκδοση Assembly"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
