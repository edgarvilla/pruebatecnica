import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class ListDataService {

  private posts = [
    {
      id: 1,
      titulo: "King, 'that only makes the world you fly, Like a.",
      description: "Alice was more hopeless than ever: she sat on, with closed eyes, and feebly stretching out one paw, trying to fix on one, the cook till his eyes very wide on hearing this; but all he SAID was, 'Why.",
      autor: "Jarvis Nolan",
      email: "neoma.kiehn@braun.com",
      palabras_clave: "ut, quis, rerum",
      created_at: "21/09/2021",
      updated_at: "21/09/2021"
    },
    {
      id: 2,
      titulo: "The baby grunted again, and that's all you know.",
      description: "Alice was more hopeless than ever: she sat on, with closed eyes, and feebly stretching out one paw, trying to fix on one, the cook till his eyes very wide on hearing this; but all he SAID was, 'Why.",
      autor: "Dr. Alec Schaden DDS",
      email: "tbosco@harris.biz",
      palabras_clave: "et, fuga, aut",
      created_at: "21/09/2021",
      updated_at: "21/09/2021"
    },
    {
      id: 3,
      titulo: "Alice quietly said, just as the rest of it at.",
      description: "Alice was more hopeless than ever: she sat on, with closed eyes, and feebly stretching out one paw, trying to fix on one, the cook till his eyes very wide on hearing this; but all he SAID was, 'Why.",
      autor: "Nico Howell",
      email: "hkerluke@yahoo.com",
      palabras_clave: "accusamus, et, id",
      created_at: "21/09/2021",
      updated_at: "21/09/2021"
    },
    {
      id: 4,
      titulo: "The Mouse did not get hold of its mouth again.",
      description: "Why, I wouldn't say anything about it, so she went on, '--likely to win, that it's hardly worth while finishing the game.' The Queen turned crimson with fury, and, after waiting till she got to grow.",
      autor: "Cecile Hoppe",
      email: "cecilehoppe@yahoo.com",
      palabras_clave: "quia, veritatis, est",
      created_at: "21/09/2021",
      updated_at: "21/09/2021"
    },
    {
      id: 5,
      titulo: "I do,' said Alice aloud, addressing nobody in.",
      description: "Duchess, 'as pigs have to go on in a sorrowful tone, 'I'm afraid I've offended it again!' For the Mouse was bristling all over, and she at once took up the fan and the Dormouse indignantly. However.",
      autor: "Lambert Littel Sr.",
      email: "bartell.rashawn@considine.com",
      palabras_clave: "ugit, maiores, qui",
      created_at: "21/09/2021",
      updated_at: "21/09/2021"
    }
  ];

constructor() { }

getListData(){

  return this.posts;
}

}
