class EventEmit {
    // $on('A', fn1) $on('A', fn2) $on('B', fn2)
    pond = {}
    $on(eventName, eventCallback) {
        if (!this.pond.hasOwnProperty(eventName)) {
            this.pond[eventName] = [];
        }
        if (this.pond[eventName].some(item => item === eventCallback)) {
            return;
        }
        this.pond[eventName].push(eventCallback);
    }
    $emit(eventName, ...args) {
        let callbackArr = this.pond[eventName] || [];
        callbackArr.forEach(item => {
            item.call(window, ...args);
        });
    }
}
export default new EventEmit();