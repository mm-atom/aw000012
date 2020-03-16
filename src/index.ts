/**
 * 移除某个key
 * @param key 键
 */
export default function remove(key: string) {
	sessionStorage.removeItem(key);
}
