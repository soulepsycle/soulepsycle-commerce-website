import React from "react";
import { DataTable } from "./components/data-table";
import { columns, Payment } from "./components/columns";

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      // ...
    ]
  }

const InventoryPage = async () => {
    const data = await getData()

	return (
		<section className="container mx-auto px-6 py-8">
			<div className="flex items-center justify-between mb-4">
				<h1 className="text-3xl font-semibold text-gray-800">
					Inventory
				</h1>
			</div>

			{/* Inventory Content */}
			<div className="grid">
                {/* Data Table */}
                <DataTable columns={columns} data={data} />
            </div>
		</section>
	);
};

export default InventoryPage;
