import { createDummyProducts } from "@/lib/actions/inventory.actions";
import { z } from "zod";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
	try {
		const createDummyData = await createDummyProducts();

		return Response.json(
			{ createDummyData, METHOD: request.method },
			{ status: 200 }
		);
	} catch (error) {
		if (error instanceof z.ZodError) {
			console.log(
				"Error creating dummy products [ROUTE_INVENTORY_DUMMY_PRODUCTS_ZOD_ERROR]",
				error
			);
		}
		console.log("Error creating dummy products [ROUTE_INVENTORY_DUMMY_PRODUCTS]", error);
	}
}
