import Ember from 'ember';
import EN from './champions';

const result = {
  "assemblies": {
    "buttons": {
      "install": "تثبيت",
      "options": "خيارات"
    },
    "search_by": {
      "assemblies": "الشخصية",
      "libraries": "المكاتب",
      "utilities": "المساعدات"
    },
    "search_phrase": "ابحث عن اسمبليس",
    "sort_by": {
      "last_update": "اخر تحديث",
      "name": "الاسم",
      "rating": "التقدير"
    },
    "written_by": " هذا الاسمبلي كتب بواسطة {author} واخر تحديث كان {until-now}"
  },
  "layout": {
    "logout": "الخروج",
    "navigation": {
      "applog": "سجل التطبيق",
      "assemblies": "الاسملبيس",
      "changelog": "سجل التغيير",
      "news": "الاخبار",
      "profiles": "الملفات الشخصية",
      "settings": "الاعدادات"
    },
    "welcome_back": "مرحبا بعودتك, {username}!"
  },
  "profiles": {
    "set": {
      "root": {
        "create": "انتج مجموعة جديدة",
        "default": "الملف الافتراضي {index}",
        "title": "العنوان"
      },
      "entry": {
        "author": "مؤلف الاسمبلي",
        "name": "اسم الاسمبلي",
        "version": "نسخة الاسمبلي"
      }
    }
  }
};

Ember.merge(result, EN);

export default result;
