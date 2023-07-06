import { OpenParams } from './store/confirm';
import { ChoicesParams } from './store/choices';
import { MessageType } from './store/notification';
export declare const actions: {
    showToast: (type: MessageType, content: string) => void;
    openChoices: (params: ChoicesParams) => void;
    openConfirm: (message: string, handler: OpenParams['handler']) => void;
    openConfirmPlus: (params: OpenParams) => void;
};
