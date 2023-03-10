import { TestBed } from "@angular/core/testing";
import { EffectsModule } from "@ngrx/effects";
import { Action, StoreModule } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { recoverPassword, recoverPasswordSuccess } from "./login.actions";
import { LoginEffects } from "./login.effects"
import { provideMockActions } from '@ngrx/effects/testing'

describe('Login effects', () => {
    let effects: LoginEffects;
    let actions$: Observable<Action>;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot([]),
                EffectsModule.forRoot([]),
                EffectsModule.forFeature([
                    LoginEffects
                ])
            ],
            providers: [
                provideMockActions(() => actions$)
            ]
        })

        effects = TestBed.get(LoginEffects);
    })

    it('should recover password with existing email return success', (done) => {
        actions$ = of(recoverPassword());

        effects.recoverPassword$.subscribe(newAction => {
            expect(newAction).toEqual(recoverPasswordSuccess());
            done();
        }); 
    })
})