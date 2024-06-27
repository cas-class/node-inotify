const process = require("process");
const Inotify = require('./inotify').Inotify;
const { exec } = require('node:child_process');

exec("mkdir /tmp/test");

const inotify = new Inotify(false);

const callback = function(event) {
    console.log(event);
    process.exit(0);
}

inotify.addWatch({
    path:      "/tmp/test/",
    watch_for: Inotify.IN_ALL_EVENTS,
    callback
});

setTimeout(() => {
    console.error("Not handling event!!");

    process.exit(1);
}, 1000);

exec("echo \"test file\" >> /tmp/test/test.log");
