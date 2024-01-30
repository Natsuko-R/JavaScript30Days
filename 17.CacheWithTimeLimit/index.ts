// SOLUTION 1

interface TTLValue {
    value: number;
    timer: ReturnType<typeof setTimeout>;
}

class TimeLimitedCache {
    cache = new Map<number, TTLValue>();

    set(key: number, value: number, duration: number): boolean {
        const exist = this.cache.has(key);

        exist
            ? clearTimeout(this.cache.get(key)?.timer)
            : this.cache.set(key, { value, timer: setTimeout(() => this.cache.delete(key), duration) });

        return exist;
    };

    get(key: number): number {
        return this.cache.has(key) ? this.cache.get(key)!.value : -1;
    };

    count(): number {
        return this.cache.size;
    };

}

// SOLUTION 2

// type CacheMap = Map<number, { value: number, expiration: number }>

// class TimeLimitedCache {
//     private cache: CacheMap = new Map();

//     set(key: number, value: number, duration: number): boolean {
//         const currentTime = Date.now();
//         const expirationTime = currentTime + duration;

//         if (this.cache.has(key)) {
//             const entry = this.cache.get(key);
//             if (entry && entry.expiration > Date.now()) {
//                 entry.value = value;
//                 entry.expiration = expirationTime;
//                 return true;
//             }
//         };
//         this.cache.set(key, {
//             value, // for short : [value: value]
//             expiration: expirationTime
//         });
//         return false;
//     };

//     get(key: number): number {
//         if (this.cache.has(key)) {
//             const entry = this.cache.get(key);
//             if (entry?.expiration ?? 0 > Date.now()) {
//                 return entry!.value;
//             }
//         };
//         return -1;
//     }

//     count(): number {
//         return this.cache.size;
//     }
// }

// EXAMPLE 1
// const cache = new TimeLimitedCache(); // null
// cache.set(1, 42, 100); // false
// cache.get(1); // 42
// cache.count(); // 1
// cache.get(1); // -1 // TIMEOUT

// EXAMPLE 2
// const cache = new TimeLimitedCache(); // null
// cache.set(1, 42, 50); // false
// cache.set(1, 50, 100); // true
// cache.get(1); // 50
// cache.get(1); // 50
// cache.get(1); // -1 // TIMEOUT
// cache.count(); // 0