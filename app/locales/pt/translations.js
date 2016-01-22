import Ember from 'ember';
import EN from '../en/champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "Instalar",
      "options": "Opções"
    },
    "search_by": {
      "assemblies": "Campeões",
      "libraries": "Bibliotecas",
      "utilities": "Utilidades"
    },
    "search_phrase": "Procurar por assemblies",
    "sort_by": {
      "last_update": "Última Atualização",
      "name": "Nome",
      "rating": "Classificação"
    },
    "written_by": "Esta assembly é feita por {author} e a última atualização foi {until-now}"
  },
  "layout": {
    "logout": "Sair",
    "navigation": {
      "applog": "Applog",
      "assemblies": "Assemblies",
      "changelog": "Changelog",
      "news": "Notícias",
      "profiles": "Perfis",
      "settings": "Configurações"
    },
    "welcome_back": "Bem vindo de volta, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "Criar um novo conjunto",
        "default": "Perfil Padrão {index}",
        "title": "Meus Conjuntos"
      },
      "entry": {
        "author": "Autor da Assembly",
        "name": "Nome da Assembly",
        "version": "Versão da Assembly"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
