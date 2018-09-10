import db from '../models';

class Logger {

    constructor(source) {
        this.source = source;
    }

    log(error) {
        const newLog = new db.Logger({
            event: this.source,
            message: error
        })
        newLog.save();
    }

}

export default Logger;