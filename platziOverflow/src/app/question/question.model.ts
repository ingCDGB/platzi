import { Answer } from '../answer/answer.model'

export class Question{
  title: string;
  description: string;
  createdAd?: Date; //el ? hace referencia a ser opcional
  icon?: string;
  answers: Answer[]


  constructor(title: string, description: string, createdAd?: Date,  icon?: string){
    this.title  = title;
    this.description = description;
    this.createdAd = createdAd;
    this.icon = icon;
    this.answers = []
  }
}
