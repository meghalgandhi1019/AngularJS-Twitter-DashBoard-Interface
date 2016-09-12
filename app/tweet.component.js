System.register(['angular2/core', './heart.component'], function(exports_1, context_1) {
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
    var core_1, heart_component_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            }],
        execute: function() {
            let TweetComponent = class TweetComponent {
                constructor() {
                    console.log(this.data);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', Object)
            ], TweetComponent.prototype, "data", void 0);
            TweetComponent = __decorate([
                core_1.Component({
                    selector: 'tw',
                    template: `
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


    `, styles: [`
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
                    directives: [heart_component_1.HeartComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], TweetComponent);
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map