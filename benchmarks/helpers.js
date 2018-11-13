async function gatherPerformanceTimingMetrics(page) {
    const rawMetrics = await page.evaluate(() =>
        JSON.stringify(window.performance.timing));
    const metrics = JSON.parse(rawMetrics);
    return metrics;
}