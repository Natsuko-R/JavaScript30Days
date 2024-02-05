type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue } | { id: string | number };

type Result = Object & {
    [key: string]: JSONValue
}

type Item = Object & {
    [key: string]: string
}

function join(arr1: Item[], arr2: Item[]): JSONValue[] {
    const result: Record<string, Result> = {}

    for (let obj of arr1) {
        result[obj!.id] = obj
    }

    for (let obj of arr2) {
        if (result[obj.id]) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) result[obj.id][key] = obj[key]
            }
        } else {
            result[obj.id] = obj
        }
    }

    return Object.values(result)
}


// ??
