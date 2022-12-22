import { Page } from "@playwright/test";
import Items from "../interfaces/items.json";

export class demoblaze {
    readonly page: Page;
    private interfaceItem = Items;
    constructor(page: Page) {
        this.page = page;
    }



    async selectPhones(): Promise<any> {
        let price: number = 0;
        let b;
        this.page.pause();
        await this.page.waitForTimeout(1000)
        await this.page.click(this.interfaceItem.categoria + "[1]");
        await this.page.waitForTimeout(1000)
        for (var i = 1; i < 4; i++) {
            await this.page.waitForTimeout(2000)
            await this.page.dblclick(this.interfaceItem.producto + "[" + i + "]");
            let a = this.page.textContent(this.interfaceItem.precio);
            await this.page.waitForTimeout(2000)
            await this.page.click(this.interfaceItem.add);
            console.log(a)
            a.then(value => {
                b = value?.split(" ");
                let num = +(b[0].substring(1));
                price = price + num;

                console.log(price)

            })
            await this.page.waitForTimeout(500)
            await this.page.click(this.interfaceItem.home);
        }
        return price;
    }

    async selectLaptops(): Promise<any> {
        let price: number = 0;
        let b;
        this.page.pause();

        for (var i = 1; i < 4; i++) {
            await this.page.waitForTimeout(1000)
            const locator = this.page.locator('text=Laptops');
            await locator.click();
            //await this.page.click(this.interfaceItem.laptop);
            await this.page.waitForTimeout(1000)
            await this.page.click(this.interfaceItem.producto + "[" + i + "]");
            await this.page.waitForTimeout(2000)
            let a = this.page.textContent(this.interfaceItem.precio);
            await this.page.waitForTimeout(2000)
            await this.page.click(this.interfaceItem.add);
            a.then(value => {
                b = value?.split(" ");
                let num = +(b[0].substring(1));
                price = price + num;

                console.log(price)
            })
            await this.page.waitForTimeout(500)
            await this.page.click(this.interfaceItem.home);
        }
        return price;
    }

    async selectMonitors(): Promise<any> {
        let price: number = 0;
        let b;
        this.page.pause();
        await this.page.waitForTimeout(1000)
        for (var i = 1; i < 3; i++) {
            await this.page.waitForTimeout(1000)
            await this.page.click(this.interfaceItem.categoria + "[3]");
            await this.page.waitForTimeout(1000)
            await this.page.click(this.interfaceItem.producto + "[" + i + "]");
            await this.page.waitForTimeout(2000)
            let a = this.page.textContent(this.interfaceItem.precio);
            await this.page.waitForTimeout(2000)
            await this.page.click(this.interfaceItem.add);
            a.then(value => {
                b = value?.split(" ");
                let num = +(b[0].substring(1));
                price = price + num;

                console.log(price)
            })
            await this.page.waitForTimeout(500)
            await this.page.click(this.interfaceItem.home);
        }
        return price;
    }

    async carrito(): Promise<any> {
        let preciot: number = 0;
        this.page.pause();
        await this.page.waitForTimeout(500)
        await this.page.click(this.interfaceItem.cart);
        await this.page.waitForTimeout(1000);
        let totalp = (this.page.textContent(this.interfaceItem.precioTotal));
        //preciot = parseInt(totalp)
        return totalp;
    }
}