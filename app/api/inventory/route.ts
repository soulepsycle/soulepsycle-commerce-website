import { createProduct, getProducts } from "@/lib/actions/inventory.actions";
import { z } from "zod";

export async function POST(request: Request) {
    try {
        
        const newProduct = await createProduct();

        return Response.json({
            newProduct,
            method: request.method
        })
    } catch (error) {
		if (error instanceof z.ZodError) {
			console.log("Error creating a product [ROUTE_INVENTORY_ZOD_ERROR]", error);
		}
		console.log("Error creating a product[ROUTE_INVENTORY]", error);
	}
}

export async function GET(request: Request) {
    try {

        const products = await getProducts();

        return Response.json({
            products,
            request: request.method
        })
    } catch (error) {
        if (error instanceof z.ZodError) {
			console.log("Error GETTING products [ROUTE_INVENTORY_ZOD_ERROR]", error);
		}
		console.log("Error GETTING products [ROUTE_INVENTORY]", error);
    }
}