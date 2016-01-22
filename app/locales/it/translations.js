import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Installa",
      "options": "Opzioni"
    },
    "search_by": {
      "assemblies": "Campioni",
      "libraries": "Librerie",
      "utilities": "Utilità"
    },
    "search_phrase": "Ricerca Assemblies",
    "sort_by": {
      "last_update": "Ultimo Aggiornamento",
      "name": "Nome",
      "rating": "Punteggio"
    },
    "written_by": "Questo assembly è stato scritto da {author} e l'ultimo aggiornamento è stato {until-now}"
  },
  "layout": {
    "logout": "Esci",
    "navigation": {
      "applog": "Log Applicazione",
      "assemblies": "Assemblies",
      "changelog": "Log Cambiamenti",
      "news": "Novità",
      "profiles": "Profili",
      "settings": "Opzioni"
    },
    "welcome_back": "Bentornato, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Crea un nuovo gruppo",
        "default": "Profilo Predefinito {index}",
        "title": "I miei gruppi"
      },
      "entry": {
        "author": "Autore dell'Assembly",
        "name": "Nome dell'Assembly",
        "version": "Versione dell'Assembly"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
