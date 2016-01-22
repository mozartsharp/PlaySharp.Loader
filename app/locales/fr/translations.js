import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Installer",
      "options": "Option"
    },
    "search_by": {
      "assemblies": "Champions",
      "libraries": "Libraires",
      "utilities": "Utilitaires"
    },
    "search_phrase": "Recherche d'assemblies",
    "sort_by": {
      "last_update": "Dernière mise à jour",
      "name": "Nom",
      "rating": "Score"
    },
    "written_by": "Cet assembly est écrite par {author} et la dernière mise à jour était sur {until-now}"
  },
  "layout": {
    "logout": "Déconnexion",
    "navigation": {
      "applog": "Log application",
      "assemblies": "Assemblies",
      "changelog": "Changelog",
      "news": "Actualités",
      "profiles": "Profils",
      "settings": "Réglages"
    },
    "welcome_back": "Bienvenue, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Créez un nouveau jeu",
        "default": "Profil par défaut {index}",
        "title": "Mes jeux"
      },
      "entry": {
        "author": "Écrivain de l'Assembly",
        "name": "Nom de l'Assembly",
        "version": "Version de l'Assembly"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
