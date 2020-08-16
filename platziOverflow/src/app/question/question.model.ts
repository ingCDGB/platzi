import { Answer } from '../answer/answer.model'

export class Question{
  _id?: string;
  title: string;
  description: string;
  createdAd?: Date; //el ? hace referencia a ser opcional
  icon?: string;
  answers: Answer[]


  constructor(title: string, description: string, createdAd?: Date,  icon?: string){
    this._id = '1';
    this.title  = title;
    this.description = description;
    this.createdAd = createdAd;
    this.icon = icon;
    this.answers = []
  }
}
