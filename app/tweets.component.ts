import {Component} from 'angular2/core'
import {TweetExampleService} from './tweetExample.service'
import {TweetComponent} from './tweet.component'

@Component({
    selector: 'tweets',
    template:
    `
    <div *ngFor = "#tweet of tweets">
        <tw [data] = "tweet" ></tw>
    </div>        
    `,
    providers: [TweetExampleService],
    directives: [TweetComponent]

})

export class TweetsComponent{
    tweets: any[];
    constructor(tweetservice: TweetExampleService){
        this.tweets = tweetservice.getExampleTweets();
    }
}