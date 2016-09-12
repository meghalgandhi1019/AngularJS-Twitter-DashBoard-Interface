System.register(['angular2/core', './courses.component', './authors.component', './favourite.component', './heart.component', './vote.component', './tweetExample.service', './tweet.component', './summary.pipe', './bootstrap.panel.component', './zippy.component', './contact-form.component', './exercise-form.component', './signup-form.component', './passwordCheck.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, favourite_component_1, heart_component_1, vote_component_1, tweetExample_service_1, tweet_component_1, summary_pipe_1, bootstrap_panel_component_1, zippy_component_1, contact_form_component_1, exercise_form_component_1, signup_form_component_1, passwordCheck_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (favourite_component_1_1) {
                favourite_component_1 = favourite_component_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweetExample_service_1_1) {
                tweetExample_service_1 = tweetExample_service_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (bootstrap_panel_component_1_1) {
                bootstrap_panel_component_1 = bootstrap_panel_component_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (exercise_form_component_1_1) {
                exercise_form_component_1 = exercise_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            },
            function (passwordCheck_component_1_1) {
                passwordCheck_component_1 = passwordCheck_component_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(tweetservice) {
                    this.task = {
                        title: "Review applications",
                        assignee: null
                    };
                    this.postSummary = {
                        title: " Angular for Beginners",
                        body: `One of the complexities of Angular 1 is its digest loop, which helps Angular 1 figure out
the changes in the model and refresh the view. In Angular 2 we don’t have this concept
anymore. In Angular 2, all browser events are “monkey-patched”, so even if you an
event handler outside your Angular app, it will still be notified and can detect changes in
objects.`
                    };
                    this.pipeExampleCourse = {
                        title: "Angular",
                        rating: 4.9745,
                        students: 5981,
                        price: 99.95,
                        releaseDate: 'Fri Apr 01 2016 00:00:00 GMT+ 1100 (AEDT)'
                    };
                    this.coursess = ['course1', 'course2', 'course3'];
                    this.viewMode = 'map';
                    this.courses = [];
                    this.isActive = false;
                    this.title = "Angular App";
                    this.isStartActive = true; //true so print first star
                    this.classVal = "glyphicon glyphicon-star-empty"; //by default print star
                    this.isFavourite = false;
                    this.isStar = true;
                    this.classValue = "glyphicon glyphicon-star-empty";
                    this.post = {
                        isFav: true,
                        titleNew: "Title new"
                    };
                    this.likes = 10;
                    this.likeOrNot = false;
                    this.post2 = {
                        votes: 10,
                        mine: 0
                    };
                    this.tweets = tweetservice.getExampleTweets();
                }
                //Event propagation: First it goes to button event and then checked for the parents events.
                onDivClick() {
                    console.log("Clicked Handled by Div ");
                }
                onClick($event) {
                    $event.stopPropagation(); // Will the stop the event to propogate further. 
                    console.log("Clicked ", $event);
                }
                //1st my way to change star value
                onStarClick() {
                    this.classVal = "glyphicon glyphicon-star";
                    this.isStartActive = false;
                }
                onEmptyStarClick() {
                    this.classVal = "glyphicon glyphicon-star-empty";
                    this.isStartActive = true;
                }
                //2nd way to change star value
                onStar() {
                    this.isFavourite = !this.isFavourite;
                }
                //3rd my way to change star value
                onClickingStar() {
                    if (this.isStar) {
                        this.classValue = "glyphicon glyphicon-star";
                        this.isStar = !this.isStar;
                    }
                    else {
                        this.classValue = "glyphicon glyphicon-star-empty";
                        this.isStar = !this.isStar;
                    }
                }
                onFavouriteChange($event) {
                    console.log($event);
                }
                //For up and down votes
                onVote($event) {
                    console.log($event);
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    //template: '<contact-form> </contact-form>',
                    templateUrl: 'app/main-template.html',
                    //btn btn-primay are the CSS classes.   
                    directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent,
                        favourite_component_1.FavouriteComponent, heart_component_1.HeartComponent,
                        vote_component_1.VoteComponent, tweet_component_1.TweetComponent,
                        bootstrap_panel_component_1.BootStrapPanel, zippy_component_1.ZippyComponent,
                        contact_form_component_1.ContactFormComponent, exercise_form_component_1.ExerciseFormComponent,
                        signup_form_component_1.SignUpFormComponent, passwordCheck_component_1.PasswordCheckComponent],
                    providers: [tweetExample_service_1.TweetExampleService],
                    pipes: [summary_pipe_1.SummaryPipe]
                }), 
                __metadata('design:paramtypes', [tweetExample_service_1.TweetExampleService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map