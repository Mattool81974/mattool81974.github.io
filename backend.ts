import { serve } from "https://deno.land/std@0.157.0/http/server.ts";

//const port = 80;

const handler = async (request: Request): Promise<Response> => {
  const resp = await fetch("https://mattool81974.github.io/page.txt");
  const body = new Uint8Array(await resp.arrayBuffer());
  console.log("Requête: ", request.body);
  console.log(body);
  console.log(request.body)
  return new Response(body, {
    status: resp.status,
    
  });

};

console.log("Listening on http://localhost:8000");
serve(handler);