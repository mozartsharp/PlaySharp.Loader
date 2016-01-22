import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Instaliuoti",
      "options": "Nustatymai"
    },
    "search_by": {
      "assemblies": "Čempionai",
      "libraries": "Bibliotekos",
      "utilities": "Priedai"
    },
    "search_phrase": "Ieškoti asamblėjų",
    "sort_by": {
      "last_update": "Atnaujinta",
      "name": "Pavadinimas",
      "rating": "Reitingas"
    },
    "written_by": "Šios asamblėjos kūrėjas yra {author} ir paskutinis jos atnaujinimas buvo {until-now}"
  },
  "layout": {
    "logout": "Atsijungti",
    "navigation": {
      "applog": "Applog",
      "assemblies": "Asamblėjos",
      "changelog": "Pakeitimų sąrašas",
      "news": "Naujienos",
      "profiles": "Profiliai",
      "settings": "Nustatymai"
    },
    "welcome_back": "Sveiki sugrįžę, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Kurti naują rinkinį",
        "default": "Numatytasis profilis {index}",
        "title": "Mano rinkiniai"
      },
      "entry": {
        "author": "Asamblėjos kūrėjas",
        "name": "Asamblėjos pavadinimas",
        "version": "Asamblėjos versija"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
