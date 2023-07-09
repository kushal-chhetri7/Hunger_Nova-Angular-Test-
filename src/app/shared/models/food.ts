//foods interface

export class Foods{
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean = false;
    stars!: number;
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string[];
}
