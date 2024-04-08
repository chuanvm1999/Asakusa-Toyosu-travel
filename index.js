const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport size
  await page.setViewport({ width: 1200, height: 800 });
  
  // Navigate to the HTML file
  await page.goto('C:/Users/natsw/OneDrive/Máy tính/trave/index.html', { waitUntil: 'networkidle0' });
  
  // Wait for any additional JavaScript to execute
  await page.evaluate(() => {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000); // Adjust the delay as needed
    });
  });
  
  // Generate PDF
  await page.pdf({ path: 'asakusa.pdf', format: 'A4', printBackground: true });

  await browser.close();
})();
