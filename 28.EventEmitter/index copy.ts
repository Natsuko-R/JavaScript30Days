// interface Callback {
//     (...args: any[]): any;
// }

// class EventEmitter {

//     private events: Map<string, Callback[]>;

//     constructor() {
//         this.events = new Map();
//     }

//     subscribe(eventName: string, callback: Callback) {
//         if (!this.events.has(eventName)) {
//             this.events.set(eventName, []);
//         }

//         const callbacks = this.events.get(eventName);
//         callbacks?.push(callback);

//         const unsubscribe = () => {
//             const index = callbacks?.indexOf(callback);
//             if (index !== -1) {
//                 callbacks?.splice(index!, 1);
//             }
//         };

//         return { unsubscribe };
//     }

//     emit(eventName: string, args = []) {
//         if (!this.events.has(eventName)) {
//             return [];
//         }

//         const callbacks = this.events.get(eventName);
//         const results = callbacks?.map(callback => callback(...args));
//         return results;
//     }
// }

// // Example usage:

// const emitter = new EventEmitter();
// console.log(emitter.emit("firstEvent")); // [], no callback is subscribed yet

// const sub1 = emitter.subscribe("firstEvent", () => 5);
// const sub2 = emitter.subscribe("firstEvent", () => 6);

// console.log(emitter.emit("firstEvent")); // [5, 6], returns the output of cb1 and cb2

// sub1.unsubscribe();
// console.log(emitter.emit("firstEvent")); // [6], cb1 is unsubscribed, so only cb2 is called
