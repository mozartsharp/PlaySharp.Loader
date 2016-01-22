import Ember from 'ember';
import EN from './champions'; //FR?

const result = {
  "assemblies": {
    "buttons": {
      "install": "Installer",
      "options": "Réglages"
    },
    "search_by": {
      "assemblies": "Champions",
      "libraries": "Bibliothèques",
      "utilities": "Utilitaires"
    },
    "search_phrase": "Rechercher une Assembly",
    "sort_by": {
      "last_update": "Dernière mise à jour",
      "name": "Nom",
      "rating": "Evaluation"
    },
    "written_by": "Cette Assembly est écrite par {author}, mise à jour pour la dernière fois le {until-now}"
  },
  "layout": {
    "logout": "Se déconnecter",
    "navigation": {
      "applog": "Log application",
      "assemblies": "Assemblies",
      "changelog": "Changelog",
      "news": "Nouveautés",
      "profiles": "Profils",
      "settings": "Réglages"
    },
    "welcome_back": "Bienvenu, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Créer un nouveau profil",
        "default": "Profil par défaut {index}",
        "title": "Mes profils"
      },
      "entry": {
        "author": "Auteur de l'Assembly",
        "name": "Nom de l'Assembly",
        "version": "Version de l'Assembly"
      }
    }
  }
};

Ember.merge(result, EN); //FR?

export default result;
