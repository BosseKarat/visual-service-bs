describe("My Login application", () => {
  it("Using checkFullPageScreen", async () => {
    await browser.url("https://webdriver.io/");

    await expect(await browser.checkFullPageScreen('Testing checkFullPageScreen', {})).toBeLessThanOrEqual(0.5);

  });

  it("Using checkScreen", async () => {
    await browser.url("https://webdriver.io/");

    await expect(await browser.checkScreen('Testing checkScreen', { })).toBeLessThanOrEqual(0.5);

  });

  it("Using checkElement", async () => {
    await browser.url("https://webdriver.io/");

    await expect(await browser.checkElement(await $('.hero__title'), 'Testing checkScreen', {})).toBeLessThanOrEqual(0.5);

  });
});
