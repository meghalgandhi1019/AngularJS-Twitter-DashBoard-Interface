import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'vote',
    template: `
    <br><br>
    <div class="voter">
    <i 
        class="glyphicon glyphicon-chevron-up vote-button" 
        [class.highlighted]="myVote == 1" 
        (click)= "upVote()"></i><br>
    <span class="vote-count">{{voteCount + myVote}}</span><br>
    <i 
        class="glyphicon glyphicon-chevron-down vote-button"
        [class.highlighted]="myVote == -1"
        (click)= "downVote()"></i>
    </div>
    `,
    styles: [`
        .voter{
            width: 20px;
            text-align: center;
            color: #999;
        }
        .vote-button{
            cursor: pointer;
        }
        .highlighted{
            color: orange;
        }
        .vote-count{
            font-size: 1.2em;
        }
    `]
})
export class VoteComponent{
    @Input() voteCount = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    upVote(){
        if(this.myVote == 1){
            return;
        }
        this.myVote++;
        this.vote.emit({myVote: this.myVote});
    }

    downVote(){
        if(this.myVote == -1){
            return;
        }
        this.myVote--;
        this.vote.emit({myVote: this.myVote});
    }
}