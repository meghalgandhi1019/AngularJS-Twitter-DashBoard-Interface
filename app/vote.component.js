System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let VoteComponent = class VoteComponent {
                constructor() {
                    this.voteCount = 0;
                    this.myVote = 0;
                    this.vote = new core_1.EventEmitter();
                }
                upVote() {
                    if (this.myVote == 1) {
                        return;
                    }
                    this.myVote++;
                    this.vote.emit({ myVote: this.myVote });
                }
                downVote() {
                    if (this.myVote == -1) {
                        return;
                    }
                    this.myVote--;
                    this.vote.emit({ myVote: this.myVote });
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], VoteComponent.prototype, "voteCount", void 0);
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], VoteComponent.prototype, "myVote", void 0);
            __decorate([
                core_1.Output(), 
                __metadata('design:type', Object)
            ], VoteComponent.prototype, "vote", void 0);
            VoteComponent = __decorate([
                core_1.Component({
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
                }), 
                __metadata('design:paramtypes', [])
            ], VoteComponent);
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map