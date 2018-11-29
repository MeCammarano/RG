const PWMetrics = require('pwmetrics');

const testsMode = [
    {
        name    : 'CLIENT SIDE RENDERING',
        baseUrl : 'http://localhost:8080/'
    },
    {
        name    : 'SERVER SIDE RENDERING',
        baseUrl : 'http://localhost:3000/'
    }
];

const testsEndpoints = [
    {
        name : 'List',
        path : 'list',
    },
    {
        name : 'ListReplace',
        path : 'listreplace',
    }
];

const optionsDesktop = {
    flags: {
        runs        : 1,           
        // chromeFlags : '--headless', 
        json                 : true,
        disableStorageReset  : false,
        emulatedFormFactor   : 'desktop',
        disableCpuThrottling : true,
        throttlingMethod     : 'provided',
        throttling           : {
            requestLatencyMs       : 0,
            downloadThroughputKbps : 0,
            uploadThroughputKbps   : 0,
            cpuSlowdownMultiplier  : 1
        }
    }
};

const optionsMobile = {
    flags: {
        runs        : 1,           
        // chromeFlags : '--headless', 
        json                 : true,
        showOutput           : true,
        disableStorageReset  : false,
        emulatedFormFactor   : 'mobile',
        disableCpuThrottling : false,
        throttlingMethod     : 'devtools',
        throttling           : {
            requestLatencyMs       : 150 * 3.75,
            downloadThroughputKbps : 1.6 * 1024 * 0.9,
            uploadThroughputKbps   : 750 * 0.9,
            cpuSlowdownMultiplier  : 4
        }
    }
};

(async () => {

    for(mode of testsMode) {

        console.log('----------------------------------------------------------------------');
        console.log(mode.name);

        for(endpoint of testsEndpoints) {

            console.log('-----------------------------------------------------------');
            console.log(endpoint.name);
        
            console.log('-------------------------------------------');
            console.log('DESKTOP - THROTTLING DISABLED');
            console.log('-------------------------------------------');
            const csrDesktop  = await new PWMetrics(mode.baseUrl+endpoint.path, optionsDesktop).start();

            console.log('-------------------------------------------');
            console.log('MOBILE - THROTTLING ENABLED');
            console.log('-------------------------------------------');
            const csrMobile  = await new PWMetrics(mode.baseUrl+endpoint.path, optionsMobile).start();
        
        }
    
    }

})();