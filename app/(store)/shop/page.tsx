"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type Product = {
	id: string;
	name: string;
	price: number;
	image: string;
	category: string;
	color: string;
	size: string;
};

const products: Product[] = [
	{
		id: "1",
		name: "Classic T-Shirt",
		price: 29.99,
		image: "/placeholder-dark-image.png",
		category: "Tops",
		color: "White",
		size: "M",
	},
	{
		id: "2",
		name: "Slim Fit Jeans",
		price: 59.99,
		image: "/placeholder-dark-image.png",
		category: "Bottoms",
		color: "Blue",
		size: "32",
	},
	{
		id: "3",
		name: "Running Shoes",
		price: 89.99,
		image: "/placeholder-dark-image.png",
		category: "Footwear",
		color: "Black",
		size: "10",
	},
	{
		id: "4",
		name: "Hooded Sweatshirt",
		price: 49.99,
		image: "/placeholder-dark-image.png",
		category: "Tops",
		color: "Gray",
		size: "L",
	},
	{
		id: "5",
		name: "Leather Jacket",
		price: 199.99,
		image: "/placeholder-dark-image.png",
		category: "Outerwear",
		color: "Brown",
		size: "XL",
	},
	{
		id: "6",
		name: "Floral Dress",
		price: 79.99,
		image: "/placeholder-dark-image.png",
		category: "Dresses",
		color: "Multicolor",
		size: "S",
	},
];

const categories = [
	"All",
	"Tops",
	"Bottoms",
	"Footwear",
	"Outerwear",
	"Dresses",
];
const colors = ["All", "White", "Blue", "Black", "Gray", "Brown", "Multicolor"];
const sizes = ["All", "S", "M", "L", "XL", "32", "10"];

export default function ShopPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [selectedColors, setSelectedColors] = useState<string[]>([]);
	const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
	const [sortBy, setSortBy] = useState("name");

	const filteredProducts = products
		.filter(
			(product) =>
				product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
				(selectedCategory === "All" ||
					product.category === selectedCategory) &&
				(selectedColors.length === 0 ||
					selectedColors.includes("All") ||
					selectedColors.includes(product.color)) &&
				(selectedSizes.length === 0 ||
					selectedSizes.includes("All") ||
					selectedSizes.includes(product.size))
		)
		.sort((a, b) => {
			if (sortBy === "name") return a.name.localeCompare(b.name);
			if (sortBy === "price_asc") return a.price - b.price;
			if (sortBy === "price_desc") return b.price - a.price;
			return 0;
		});

	const handleColorToggle = (color: string) => {
		setSelectedColors((prev) =>
			prev.includes(color)
				? prev.filter((c) => c !== color)
				: [...prev, color]
		);
	};

	const handleSizeToggle = (size: string) => {
		setSelectedSizes((prev) =>
			prev.includes(size)
				? prev.filter((s) => s !== size)
				: [...prev, size]
		);
	};

	return (
		<main className="flex-1">
			<section className="w-full py-8 md:py-14 lg:py-16 bg-gray-100">
				<div className="container px-4 md:px-6">
					<h2 className="text-3xl sm:text-5xl mb-12 font-bold tracking-tighter">
						Shop All
					</h2>

					<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
						<div className="relative w-full md:w-64">
							<Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input
								placeholder="Search products"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="pl-8 bg-white"
							/>
						</div>
						<div className="flex flex-col md:flex-row gap-4 md:space-x-4">
							<Select
								value={selectedCategory}
								onValueChange={setSelectedCategory}
							>
								<SelectTrigger className="w-[180px] bg-white">
									<SelectValue placeholder="Category" className="bg-white" />
								</SelectTrigger>
								<SelectContent>
									{categories.map((category) => (
										<SelectItem
											key={category}
											value={category}
										>
											{category}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<Select value={sortBy} onValueChange={setSortBy}>
								<SelectTrigger className="w-[180px] bg-white">
									<SelectValue placeholder="Sort by" className="bg-white"/>
								</SelectTrigger>
								<SelectContent className="bg-white">
									<SelectItem value="name">Name</SelectItem>
									<SelectItem value="price_asc">
										Price: Low to High
									</SelectItem>
									<SelectItem value="price_desc">
										Price: High to Low
									</SelectItem>
								</SelectContent>
							</Select>
							<Sheet>
								<SheetTrigger asChild>
									<Button variant="outline">
										<Filter className="mr-2 h-4 w-4" />
										Filters
									</Button>
								</SheetTrigger>
								<SheetContent>
									<SheetHeader>
										<SheetTitle>Filters</SheetTitle>
										<SheetDescription>
											Refine your product search
										</SheetDescription>
									</SheetHeader>
									<div className="grid gap-4 py-4">
										<div className="space-y-2">
											<h3 className="font-medium">
												Colors
											</h3>
											{colors.map((color) => (
												<div
													key={color}
													className="flex items-center space-x-2"
												>
													<Checkbox
														id={`color-${color}`}
														checked={selectedColors.includes(
															color
														)}
														onCheckedChange={() =>
															handleColorToggle(
																color
															)
														}
													/>
													<Label
														htmlFor={`color-${color}`}
													>
														{color}
													</Label>
												</div>
											))}
										</div>
										<div className="space-y-2">
											<h3 className="font-medium">
												Sizes
											</h3>
											{sizes.map((size) => (
												<div
													key={size}
													className="flex items-center space-x-2"
												>
													<Checkbox
														id={`size-${size}`}
														checked={selectedSizes.includes(
															size
														)}
														onCheckedChange={() =>
															handleSizeToggle(
																size
															)
														}
													/>
													<Label
														htmlFor={`size-${size}`}
													>
														{size}
													</Label>
												</div>
											))}
										</div>
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{filteredProducts.map((product) => (
							<div
								key={product.id}
								className="bg-white border rounded-lg overflow-hidden"
							>
								<Image
									src={product.image}
									alt={product.name}
									width={300}
									height={300}
									className="w-full object-cover"
								/>
								<div className="p-4">
									<h2 className="font-semibold">
										{product.name}
									</h2>
									<p className="text-sm text-gray-600">
										{product.category}
									</p>
									<p className="text-sm text-gray-600">
										Color: {product.color}
									</p>
									<p className="text-sm text-gray-600">
										Size: {product.size}
									</p>
									<p className="font-bold mt-2">
										${product.price.toFixed(2)}
									</p>
									<Button className="w-full mt-4">
										Add to Cart
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
