const { test, expect } = require('@playwright/test');

test.describe('Playwright feature demo', () => {
  test('loads a page, fills a field, and validates the result', async ({ page }) => {
    await page.setContent(`
      <html>
        <body>
          <h1 id="title">Playwright feature demo</h1>
          <input id="name" placeholder="Type your name" />
          <button id="submit">Submit</button>
          <p id="message"></p>
          <script>
            const nameInput = document.getElementById('name');
            const message = document.getElementById('message');
            document.getElementById('submit').addEventListener('click', () => {
              const name = nameInput.value || 'friend';
              message.textContent = 'Hello, ' + name + '!';
            });
          </script>
        </body>
      </html>
    `);

    await expect(page.locator('#title')).toHaveText('Playwright feature demo');
    await page.locator('#name').fill('Alice');
    await page.locator('#submit').click();
    await expect(page.locator('#message')).toHaveText('Hello, Alice!');
  });
});
