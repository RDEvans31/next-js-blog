import { revalidatePath } from "next/cache";

interface PostWebhookBody {
  post_id: string;
  post: any;
}

// invalidate cache for posts because there is a new one
export async function POST(request: Request) {
  let statusCode = 200;
  let response = "Success: /posts revalidated";
  try {
    const postBody: PostWebhookBody = await request.json();
    if (postBody.post_id) {
      revalidatePath("/posts");
    } else {
      throw new Error("postBody.post_id is required");
    }
  } catch (error: any) {
    statusCode = 400;
    response = `Webhook error: ${error.message}`;
  }

  return new Response(response, {
    status: statusCode,
  });
}
