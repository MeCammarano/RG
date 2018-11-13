const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');


const launchChromeAndRunLighthouse = async (url, opts, config = null) => {
    try {
        const chrome = await chromeLauncher.launch({ chromeFlags: opts.chromeFlags });
        opts.port = chrome.port;
        const results = await lighthouse(url, opts, config);
        return chrome.kill().then(() => results.lhr);
    }
    catch (err) {
        throw (err)
    }
}

(async () => {
    const flags = {
        onlyCategories: ['performance'],
        chromeFlags: ['--show-paint-rects', '--headless']
    };
    try {
        console.log(`CSR: ${(await launchChromeAndRunLighthouse('http://localhost:4200/table', flags))}`)
        console.log(`SSR: ${(await launchChromeAndRunLighthouse('http://localhost:4000/table', flags))
            .audits['first-meaningful-paint'].rawValue}`)
    }
    catch (err) {
        console.log(err)
    }
})();