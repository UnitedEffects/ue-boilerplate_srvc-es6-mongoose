/**
 * Created by bmotlagh on 10/19/17.
 */
import log from './log/logs';

const respond = {
    send(res, output) {
        let status;
        if (output.code) status = output.code;
        if (output.stack) status = 500;
        const resp = {
            code: output.code || status,
            type: output.type,
            data: output.data || output.stack,
            message: output.message
        };
        if (output.stack) log.error(resp);
        res.status(status || 200).json(resp);
    },
    send200(res, message, type) {
        res.json({ type, data: message || 'success' });
    }
};

export default respond;