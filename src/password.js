
export default function password(value) {
    if(value === undefined) return undefined;
    if(value.length < 8) return false;
    return RegExp('([A-Z])').test(value) && RegExp('[1-9]').test(value) && RegExp('[a-z]').test(value);
}