const VueHooks = {};
export const useVueHooks = () => VueHooks;
// Utils
export const NextgenLib = {
    install(_Vue, hooks) {
        for (let key in hooks) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            VueHooks[key] = hooks[key];
        }
    }
};
export default NextgenLib;
