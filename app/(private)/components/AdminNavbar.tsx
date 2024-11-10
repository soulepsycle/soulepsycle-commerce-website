'use client';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import SoulePsycleLogo from '@/public/logo.jpg';
import { LayoutDashboard, Package, ShoppingCart, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarItems = [
	{ icon: LayoutDashboard, name: "Dashboard", href: "/admin" },
	{ icon: Package, name: "Inventory", href: "/admin/inventory" },
	{ icon: ShoppingCart, name: "Orders", href: "/admin/orders" },
	{ icon: Users, name: "Customers", href: "/admin/customers" },
];

const AdminNavbar = () => {
	const pathname = usePathname();

	return (
		<aside
			className={`w-16 bg-gray-800 text-white transition-all duration-300 ease-in-out overflow-hidden`}
		>
			<nav className="flex flex-col h-full">
				<div className="flex items-center justify-center my-4">
					<Image
						src={SoulePsycleLogo}
						alt="SoulePsycle-Logo"
						className="w-12 h-12 rounded-md"
					/>
				</div>
				<TooltipProvider>
					{sidebarItems.map((item) => (
						<Tooltip key={item.name} delayDuration={300}>
							<TooltipTrigger asChild>
								<Link
									href={item.href}
									className={cn(
										"p-4 hover:bg-gray-700 flex justify-center",
										pathname === item.href && "bg-gray-700"
									)}
								>
									<item.icon className="h-6 w-6" />
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								<p>{item.name}</p>
							</TooltipContent>
						</Tooltip>
					))}
				</TooltipProvider>
			</nav>
		</aside>
	);
};

export default AdminNavbar;
