import { serve } from "https://deno.land/std@0.157.0/http/server.ts";

const port = 80;

const handler = async (request: Request): Promise<Response> => {
  const resp = await fetch("page.html");
  console.log("Requête");
  console.log(resp.body);
  return new Response(resp.body, {
    status: resp.status,
    
  });

};

console.log("Listening on http://localhost:8000");
serve(handler);