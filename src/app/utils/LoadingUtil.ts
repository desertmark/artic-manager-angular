import { SubscriptionLike, Subscription, BehaviorSubject } from 'rxjs';

export class LoadingUtil {
    private subscriptions: SubscriptionLike[] = [];
    private _isLoading = new BehaviorSubject<boolean>(false);
    get isLoading$() {
        return this._isLoading.asObservable();
    }
    waitFor(subscription: Subscription) {
        this._isLoading.next(true);
        const index = this.subscriptions.push(subscription) - 1;
        subscription.add(() => this.unsubscribe(index));
    }

    private unsubscribe(index: number) {
        this.subscriptions.splice(index,1);
        if (this.subscriptions.length === 0) {
            this._isLoading.next(false);
        }
    }
}