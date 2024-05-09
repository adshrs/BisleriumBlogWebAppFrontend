export function isEmptyOrWhitespaceOrNullOrUndefined(str: string | null | undefined) {
    return !str || !str.trim() || str === 'undefined';
}