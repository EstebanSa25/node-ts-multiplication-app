import { yarg } from './config/plugins/args.plugin';
import { ServerApp } from './presentation/server-app';

const main = async () => {
    console.log(yarg);
    const { b: base, l: limit, s: showTable, n: name, d: destination } = yarg;
    ServerApp.run({ base, limit, showTable, name, destination });
};

(async () => {
    main();
})();
