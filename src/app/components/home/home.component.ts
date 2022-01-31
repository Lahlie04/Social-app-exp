import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [UserService]
})
export class HomeComponent implements OnInit {
    public title: string;
    public identity;

    constructor(
        private _userService: UserService
    ) {
        this.title = 'UpQue';
    }

    ngOnInit() {
        console.log('[OK] Component: home.');
        console.log('Social App Version: 0.3.0');
        this.identity = this._userService.getIdentity(); // For creating and assigning individual profiles for users, useful for identical info like First Names
    }

    onSubmit() {
    }
}
