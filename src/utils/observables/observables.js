import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/fromEvent'

const scroll$ = Observable.fromEvent(window, 'scroll')

export default scroll$
