// export class Todo{
//     todoSno:number;
//     todoTitle: string;
//     todoDesc: string;
//     todoActive: boolean;
//     constructor(sno:number, title:string ,desc:string, active:boolean ){
//         this.todoSno=sno;
//         this.todoTitle=title;
//         this.todoDesc=desc;
//         this.todoActive=active
//     }
// }

export interface Todo{
    sno:number;
    title:string;
    desc:string;
    active:boolean;
}