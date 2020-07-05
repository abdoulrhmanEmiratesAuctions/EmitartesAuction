import { Subject } from 'rxjs';

export var observableLang = new Subject();
export function getLang(lang) {
  observableLang.next(lang)
}

