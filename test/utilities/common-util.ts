import Page from "../pageobjects/page";

class CommonUtil {

    /**
     * This function compare maps and return true if it's matched.
     * @param map1
     * @param map2
     */
    public areEqual(map1, map2) {
        // early outs
        if(!(map1 instanceof Map) || !(map2 instanceof Map) || map1.size !== map2.size) return false;
        // we know we have to maps with the same amount of keys and values. Now compare them
        return [...map1.entries()].every(([key, value]) => (map2.has(key) && map2.get(key) === value));
    }
}
export default new CommonUtil();