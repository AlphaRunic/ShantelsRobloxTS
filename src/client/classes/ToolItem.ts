import { ShopItem } from "./ShopItem";

export class ToolItem extends ShopItem {
    constructor(tool: Tool, price: number) {
        super(tool.Name, price, tool.TextureId);
    }
}