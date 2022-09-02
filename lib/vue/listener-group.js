import { useVueHooks } from '../index';
import { serviceException } from '../error';
const exception = serviceException.checkout('listener-group');
export const useListenerGroup = () => {
    let { onUnmounted } = useVueHooks();
    let isOff = false;
    let listeners = [];
    let offAll = () => {
        if (isOff === false) {
            isOff = true;
            listeners.forEach(e => e?.off());
        }
        else {
            throw exception.fail('offAll() is failed, because already called.');
        }
    };
    onUnmounted(() => {
        if (isOff === false) {
            offAll();
        }
    });
    return {
        off: () => offAll(),
        push: (ls) => {
            if (isOff === false) {
                listeners.push(...ls);
            }
            else {
                throw exception.fail('push() is failed, because already called offAll().');
            }
        }
    };
};
