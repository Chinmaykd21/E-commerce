"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormControl,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  input: z.string().max(50, {
    message: "Search query cannot be greater than 50 characters",
  }),
});

const SearchProduct = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  const onSearchQuerySubmit = (values: z.infer<typeof formSchema>) => {
    const validateSearchQuery = formSchema.safeParse(values);
    if (validateSearchQuery.error) {
      // TODO: Handle Error here
      console.log("There is an error here", validateSearchQuery.error);
      return;
    }
    const { input } = validateSearchQuery.data;
    // Search Functionality is not yet implemented
    console.log("***** input", InputEvent);
  };

  return (
    <div className="flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSearchQuerySubmit)}
          className="flex items-center space-x-2"
        >
          <FormField
            control={form.control}
            name="input"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Product Name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* TODO: use form state to introduce pending UI */}
          <Button type="submit">Search</Button>
        </form>
      </Form>
    </div>
  );
};

export default SearchProduct;
