import {Component, Input} from 'angular2/core';
import {HeartComponent} from './heart.component';

@Component({
    selector: 'tw',
    template:
    `
    <div class="media">
        <div class="media-left">
            <a href="#">
                <img class="media-object" src="{{ data.imageUrl }}">
            </a>
            </div>

            <div class="media-body">
                <h4 class="media-heading">
                    {{ data.author }} <span class="handle">{{ data.handle }}</span>
                </h4>
                     {{ data.body }}
                     <div>
                    <heart [totalLikes]="data.totalLikes" [isLike]="data.iLike" ></heart>
                    </div>

                </div>
            </div>


    `,styles: [`
        .handle {
            color: #ccc;
        }
        
        .media {
            margin-bottom: 20px;
        }
        
        .media-object {
            border-radius: 10px;
        }
    `],
    directives: [HeartComponent]
})

export class TweetComponent{
    constructor(){
        console.log(this.data);
    }

    @Input() data;
}