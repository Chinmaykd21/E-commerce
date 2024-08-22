"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon, XIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  productSearchQuery: z.string().max(50, {
    message: "Search query cannot be greater than 50 characters",
  }),
});

export const SearchProductSimpler = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const { register, handleSubmit, watch, setValue } = useForm<
    z.infer<typeof formSchema>
  >({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productSearchQuery: searchParams.get("search") || "",
    },
  });

  const onSearchQuerySubmit = (values: z.infer<typeof formSchema>) => {
    const validateSearchQuery = formSchema.safeParse(values);
    if (validateSearchQuery.error) {
      // TODO: Handle Error here
      console.log("There is an error here", validateSearchQuery.error);
      return;
    }
    const { productSearchQuery } = validateSearchQuery.data;
    const params = new URLSearchParams(searchParams);
    if (productSearchQuery) {
      params.set("search", productSearchQuery);
    } else {
      params.delete("search");
    }

    replace(`${pathName}?${params.toString()}`);
  };

  const clearInput = () => {
    setValue("productSearchQuery", "");
    replace(`${pathName}`);
  };

  const currentQuery = watch("productSearchQuery");

  return (
    <form
      onSubmit={handleSubmit(onSearchQuerySubmit)}
      className="w-full lg:w-1/2"
    >
      <div className="relative">
        <input
          className="w-full p-3 bg-white text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:placeholder-gray-500"
          placeholder="Search product name..."
          defaultValue={currentQuery}
          {...register("productSearchQuery")}
          type="text"
        />
        {currentQuery.length < 0 ? (
          <SearchIcon className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        ) : (
          <XIcon
            onClick={clearInput}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
        )}
      </div>
    </form>
  );
};
