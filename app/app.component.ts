import {Component} from 'angular2/core';
import {TweetExampleService} from './tweetExample.service';
import {TweetComponent} from './tweet.component';


@Component({
    selector: 'my-app',
    template:`
    <h1>Twitter DashBoard</h1> 

                <br><br>


                 <div *ngFor="#tweet of tweets">
                      <tw [data]="tweet"></tw>
                 </div>


                <br><br>`,       
    directives: [
                 TweetComponent
    ],
    providers: [TweetExampleService],
    
})

// root component. it's a view component that takes control of entire page.
export class AppComponent { 

    tweets: any[];
    
    constructor(tweetService: TweetExampleService){
        this.tweets = tweetService.getExampleTweets();
    }
    
}