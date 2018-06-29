import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'

export const SCROLL$ = Observable.fromEvent(window, 'scroll')
