import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Instalează",
      "options": "Opţiuni"
    },
    "search_by": {
      "assemblies": "Campioni",
      "libraries": "Librarii",
      "utilities": "Utilități"
    },
    "search_phrase": "Caută ansamble",
    "sort_by": {
      "last_update": "Ultima actualizare",
      "name": "Nume",
      "rating": "Evaluare"
    },
    "written_by": "Acest ansamblu este facut de {author} și ultima actualizare a fost {until-now}"
  },
  "layout": {
    "logout": "Ieşire",
    "navigation": {
      "applog": "Jurnalul aplicaţiei",
      "assemblies": "Ansamble",
      "changelog": "Jurnalul modificărilor",
      "news": "Noutăţi",
      "profiles": "Profiluri",
      "settings": "Setări"
    },
    "welcome_back": "Bine ai revenit, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Crează un set nou",
        "default": "Profil standard {index}",
        "title": "Seturile mele"
      },
      "entry": {
        "author": "Autor ansamblu",
        "name": "Nume ansamblu",
        "version": "Versiune ansamblu"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
