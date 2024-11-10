"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
	id: string;
	amount: number;
	status: "pending" | "processing" | "success" | "failed";
	email: string;
};

export const columns: ColumnDef<Payment>[] = [
	{
		accessorKey: "status",
		header: () => (
			<div className="rounded-md text-lg text-gray-900 font-semibold">
				Status
			</div>
		),
	},
	{
		accessorKey: "email",
		header: () => (
			<div className="text-lg text-gray-900 font-semibold">Email</div>
		),
	},
	{
		accessorKey: "amount",
		header: () => (
			<div className="text-lg text-gray-900 font-semibold">Amount</div>
		),
	},
	{
		id: "actions",
		header: () => (
			<div className="text-lg text-gray-900 font-semibold">Actions</div>
		),
		cell: ({ row }) => {
			const productId = row.original.id;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem>
							<Button
								variant={"secondary"}
								className="w-full"
								size={"sm"}
								asChild
							>
								<Link
									href={`/admin/inventory/${productId}/edit`}
								>
									Edit
								</Link>
							</Button>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Button
								variant={"destructive"}
								className="w-full"
								size={"sm"}
							>
								Delete
							</Button>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
