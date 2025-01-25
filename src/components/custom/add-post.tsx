import useUploadPost from "@/hooks/posts/use-upload-post";
import { toast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, ZodSchema } from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { CreatePostParams } from "@/db";

const zNewPost: ZodSchema<CreatePostParams> = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  content: z.string().min(10),
  image: z.string().optional(),
});

const AddNewPost = () => {
  const form = useForm<CreatePostParams>({
    resolver: zodResolver(zNewPost),
  });

  const addPostMutation = useUploadPost();

  const handleSubmit = async (data: CreatePostParams) => {
    console.log(data);
    try {
      await addPostMutation.mutateAsync(data);
      toast({
        title: "Post added successfully",
      });
      form.reset();
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: error.message,
          variant: "destructive",
        });
      }
    }
  };
  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={form.handleSubmit(handleSubmit)}
    >
      {form.formState.errors.image?.message}
      <Input {...form.register("title")} />
      <p className="text-red-500">{form.formState.errors.title?.message}</p>

      <Textarea {...form.register("content")} />
      <p className="text-red-500">{form.formState.errors.content?.message}</p>

      <Button type="submit" disabled={addPostMutation.isPending}>
        {addPostMutation.isPending ? "Adding..." : "Add Post"}
      </Button>
    </form>
  );
};

export default AddNewPost;
