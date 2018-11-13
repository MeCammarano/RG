const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const { promisify } = require('util');
const fs = require('fs');
const writeFile = promisify(fs.writeFile);


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
        const csr = (await launchChromeAndRunLighthouse('http://localhost:4200/table', flags)).audits;
        console.log(`CSR-first-meaningful-paint: ${csr['first-meaningful-paint'].rawValue}`)
        console.log(`CSR-first-contentful-paint: ${csr['first-contentful-paint'].rawValue}`)
        const ssr = (await launchChromeAndRunLighthouse('http://localhost:4000/table', flags)).audits;
        console.log(`SSR-first-meaningful-paint: ${ssr['first-meaningful-paint'].rawValue}`)
        console.log(`SSR-first-contentful-paint: ${ssr['first-contentful-paint'].rawValue}`)
    }
    catch (err) {
        console.log(err)
    }
})();