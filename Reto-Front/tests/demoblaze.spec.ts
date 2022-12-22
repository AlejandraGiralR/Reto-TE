import { test, expect } from '@playwright/test';
import { login } from '../src/resource/login';
import { test as base } from '@playwright/test';
import { demoblaze } from '../src/page/demoblaze';
import { data } from '../src/utils/data';

const compras = base.extend<{ Demoblaze: demoblaze }>({
    Demoblaze: async ({ page }, use) => {
        const Data = new data();
        const Login = new login(page);
        const Demoblaze = new demoblaze(page);
        await Login.navigateTo(Data.getUrl());
        await use(Demoblaze);
    }
})



compras(`@selectPhones: seleccionar producto de la categoria Phones`, async ({ page, Demoblaze }) => {
    await page.pause();
    const compraPhones = await Demoblaze.selectPhones();
    expect(compraPhones).not.toBeEmpty
})

compras(`@SelectLaptops: seleccionar producto de la categoria laptops`, async ({ page, Demoblaze }) => {
    await page.pause();
    const compraLaptop = await Demoblaze.selectLaptops();
    expect(compraLaptop).not.toBeEmpty
})

compras(`@SelectMonitors: seleccionar producto de la categoria monitors`, async ({ page, Demoblaze }) => {
    await page.pause();
    const compraMonitors = await Demoblaze.selectMonitors();
    expect(compraMonitors).not.toBeEmpty
})


compras(`@ValidarPrecio: validar el precio total de la compra`, async ({ page, Demoblaze }) => {
    await page.pause();
    const compraPhones = await Demoblaze.selectPhones();
    const compraLaptop = await Demoblaze.selectLaptops();
    const compraMonitors = await Demoblaze.selectMonitors();
    const total = await Demoblaze.carrito();
    let ValidarPrecio = compraPhones + compraLaptop + compraMonitors;
    console.log('precio total', ValidarPrecio);
    console.log('total', total)
    console.log('p',compraPhones, ' l ', compraLaptop, ' m', compraMonitors)
    expect(parseInt(total)).toBe(ValidarPrecio);

})


