import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'heart',
    template: `<i class="glyphicon glyphicon-heart"
        [class.highlighted] = "isLike"
     (click)="onClick()">
    </i>
    <span>{{totalLikes}}</span>
    `,
    styles:[`
        .glyphicon-heart{
            color: #CCC;
            cursor: pointer;
        }
        .highlighted{
            color: deeppink;
        }
    `]
})
export class HeartComponent{
    @Input() totalLikes = 0; 
    @Input() isLike = false;

    onClick(){
        this.isLike = !this.isLike;
        if(this.isLike){
            this.totalLikes++;
        }else{
            this.totalLikes--;
        }
       // this.colorChanged.emit({});
    }
}