
import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favourite',
    template:`
        <i class="glyphicon"
            [class.glyphicon-star]="isFav"
            [class.glyphicon-star-empty]="!isFav"
            (click)= "onClick()">
        </i>
        `
})
export class FavouriteComponent{
    @Input('is-Fav') isFav = false;
    @Output() change = new EventEmitter();// EventEmitter is for publishing the events. 
    // We want to call onClick() on change event. Event will be changed by outside. 

    onClick(){
        this.isFav = !this.isFav;
        //publish the event when onclick is called and isFavourite is changed. here publish the change data.
        //we can also send any additional data with the event. 
        this.change.emit({newValue: this.isFav});
    }
}