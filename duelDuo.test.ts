
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Checks the draw button is functional ', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000)
})

test('Checks to if div is sisplayed after clicking draw button', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000)
    
    const drawBtn = await driver.findElement(By.id('choices'))
    const isDisplay = await drawBtn.isDisplayed()
    await driver.sleep(1000)
    expect(isDisplay).toBe(true)
})